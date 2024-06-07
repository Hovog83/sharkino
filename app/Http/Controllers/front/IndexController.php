<?php
namespace App\Http\Controllers\front;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Common\Genre;
use App\Models\Common\Movies;
use App\Models\Common\MoviesGenre;
use DB;
use Spatie\Ssr\Renderer;
use Spatie\Ssr\Engines\V8;


class IndexController extends Controller
{

    public function coronavirus()
    {
        return view('coronavirus');
    }

    public function view(Request $request,$p1="",$p2="")
    {
        $movies = [];
        $url = "all";

        if($p1 == "en" || $p1 == "hy" || $p1 == "ru"){
            return redirect('/');
        }

        // if($p1 == "films"){
        //     $movies = Movies::with('getIframe')->with('getDirector')->with('getCountry')->with('getGenre')->with('getActors')->find($p2);
        //     $url = "file";
        // }else{
        //     $movies = DB::table('movies')->select("*","movies.id as id");

        //     $movies->where('type',"!=","show-tv");
        //     $movies->orderBy("popularity","desc");
        //     $movies = $movies->paginate(16);

        // }
        return view('welcome',[ "movies"=>[],"url"=>[] ]);
    }
    public function index(Request $request){
        
            $movies = DB::table('movies')->select("*","movies.id as id");

            if(!empty($request->search)) {
                if($request->title){
                    $movies->where(function ($query) use ($request) {
                        $query->orWhere('title_orig', 'like', '%' . $request->title. '%')
                            ->orWhere('title_ru', 'like', '%' . $request->title. '%')
                            ->orWhere('title_en', 'like', '%' . $request->title. '%');
                    });
                }
                if($request->date_from){    
                   $movies->where('year', '>=', $request->date_from);
                }
                if($request->date_to){
                    $movies->where('year', '<=', $request->date_to);
                }

               if(!empty($request->t)){
                  $movies->where('type',$request->t);
               }

                if(!empty($request->g)){

                    $ids = DB::table('genre')->whereIn("genre_name_ru",$request->g)->pluck("genre_id");

                    $movies->join('movies_genre', 'movies.themoviedb_id', '=', 'movies_genre.movies_imdb');
                    $movies->whereIn('movies_genre.genre_id',$ids);
                    $movies->groupBy('movies.id');


                }
            }

            if($request->s){
               $sort = explode("_", $request->s);
                try {
                 $movies->orderBy($sort[0],$sort[1]);
                 $movies->orderBy("popularity","desc");
                } catch (\Throwable $th) {

                }
            }   

            $movies->orderBy("popularity","desc");

        $movies = $movies->paginate(24);
    
        
        return response()->json($movies, 200);
    }
    
    
    public function movesActors(Request $request,$id){

            $movies = DB::table('movies')->select(["*","movies.id as id","actors.profile_path as actors_image"])
            ->join('movies_actors', 'movies.themoviedb_id', '=', 'movies_actors.movies_imdb')
            ->join('actors', 'actors.actors_id', '=', 'movies_actors.actors_id')
            ->groupBy("movies.id")
            ->where('movies_actors.actors_id',$id);


            if(!empty($request->s)){
                $sort = explode("_", $request->s);
                try {
                    $movies->orderBy($sort[0],$sort[1]);
                } catch (\Throwable $th) {
                    $movies->orderBy("year","desc");
                }
            }    

            $movies->orderBy("popularity","desc");

            $movies = $movies->paginate(12);


            return response()->json($movies, 200);
    }

    public function genre(Request $request){
      
        $type = $request->type;

        $movie = 1;
        $series = 2;
        $show_tv = 3;
        $animes = 4;
        $anime_series = 5;
        $animation = 6;

         $genre = DB::table('genre')->where("genre_name_hy",$request->genreName)->where("type",$$type)->first();

        $movies = DB::table('movies')->select(["*","movies.id as id"])
            ->join('movies_genre', 'movies.themoviedb_id', '=', 'movies_genre.movies_imdb');

        if(!empty($request->s)){
            $sort = explode("_", $request->s);
            try {
                $movies->orderBy($sort[0],$sort[1]);
            } catch (\Throwable $th) {
                $movies->orderBy("year","desc");
            }
        }
        $movies->orderBy("popularity","desc");


        $movies->groupBy("movies.id")
            ->where('type',$type)
            ->where('movies_genre.genre_id',$genre->genre_id);

        $movies = $movies->paginate(12);
        return response()->json($movies, 200);
    }
    public function search(Request $request)
    {
        $p_page = $request->p_page;

        if(empty($p_page)){
            $p_page  = 20;
        }
        $movies = DB::table('movies')->select(["*","movies.id as id"])
            ->join('movies_genre', 'movies.id', '=', 'movies_genre.movies_id');

        if(empty($request->s)){
            $movies->orderBy("year","desc");
        }else{
            if($request->s == "rating_za"){
             $movies->orderBy("imdbRating","desc");
            }
            if($request->s == "rating_az"){
             $movies->orderBy("imdbRating");
            }
            if($request->s == "date_za"){
             $movies->orderBy("year","desc");
            }
            if($request->s == "date_az"){
             $movies->orderBy("year");
            }
        }    
        $movies->groupBy("movies.id");

        $movies_random = Movies::where('imdbRating',">",7.5)->where('year',">=",date("Y")-1)->get()->random(8);


        if($request->title){
            $movies->where(function ($query) use ($request) {
                $query->orWhere('title_orig', 'like', '%' . $request->title. '%')
                      ->orWhere('title_ru', 'like', '%' . $request->title. '%')
                      ->orWhere('title_en', 'like', '%' . $request->title. '%');
            });
        }

        if($request->date_from){
            $movies->where('year', '>=', $request->date_from);
        }
        if($request->date_to){
            $movies->where('year', '<=', $request->date_to);
        }
        if($request->t){
            $movies->where('movies.type',$request->t);
            if($request->t == "movie" && $request->g){
                $movies->whereIn('movies_genre.genre_id',$request->g);
            }elseif ($request->t == "series" && $request->g) {
                $movies->whereIn('movies_genre.genre_id',$request->g_s);
            }
        }elseif (!$request->t && $request->g) {
            $genres_tes = Genre::whereIn("id",$request->g)->lists("genre_name_hy");
            $genres_tes = Genre::whereIn("genre_name_hy",$genres_tes)
            ->where(function ($query) {
                     $query->where("type","2")->orWhere("type","1");
            })->lists("id");
            $movies->whereIn('movies_genre.genre_id',$genres_tes);
        }
        $movies = $movies->paginate($p_page);
        $count = $movies->total();
        $searchUrl = "search";
        $titel = "Search for Movies & TV SERIES";
        $genres = Genre::where("type","1")->lists("genre_name_hy","id");
        $genres_ser = Genre::where("type","2")->lists("genre_name_hy","id");
        return view('front.index',["searchUrl"=>$searchUrl,"genres"=>$genres,"genres_ser"=>$genres_ser,"movies"=>$movies,"count"=>$count,"movies_random"=>$movies_random,"titel"=>$titel]);
    }

    public function random_index()
    {
      $moves =  Movies::where('year',">=",date("Y")-1)->get()->random(12);
      return response()->json($moves, 200);
    }
    public function getGaners()
    {
        // where("genre_name_hy",$request->genreName)->where("type",$typeID)

      $genre = DB::table('genre')
    //   ->select(["genre_name_hy as label" ,"id as  value"])
      ->groupBy("genre_name_hy")->pluck("genre_name_ru");

      return response()->json($genre, 200);
    }
    public function tv()
    {
        return view('front.chat');
    }
}