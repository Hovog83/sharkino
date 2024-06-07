<?php
namespace App\Http\Controllers\front;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\Common\Genre;
use App\Models\Common\Movies;
use App\Models\Common\MoviesGenre;
use App\Models\Common\Iframe;
use DB;


class FilmsController extends Controller
{
    public function telegram(int $id = null)
    {
        $movie = Movies::find($id);
        return view('telegram',["movie"=>$movie]);

    }

    public function iframe(int $id = null)
    {
        $movie = Iframe::find($id);
        return view('iframe',["movie"=>$movie]);

    }

    public function index(Request $request,$id){
    	
        $movie = Movies::with('getIframe')->with('getDirector')->with('getCountry')->with('getGenre')->with('getActors')->find($id);
        return response()->json($movie, 200);
        

        return view('front.films.view',["movie"=>$movie]);
    }
    public function recommended(Request $request)
    {
    	$movies = DB::table('movies')->select(["movies.id","movies.title_ru","movies.title_orig","movies.poster"])
    	->join('movies_genre', 'movies.imdbId', '=', 'movies_genre.movies_imdb')
    	->where('movies.imdbRating',">",7)
        ->where('movies.type',$request->type)
        ->where('movies.poster',"!=","N/A")
    	->whereIn('movies_genre.genre_id', $request->genre)
        ->inRandomOrder()
        ->paginate(12);
        
        return response()->json($movies, 200);
    }

    public function director(Request $request,$lg,$id){
        $p_page = $request->p_page;
        if(empty($p_page)){
            $p_page  = 24;
        }
        $titel = "";


        $movies = DB::table('movies')->select(["*","movies.id as id"])
            ->join('movies_director', 'movies.id', '=', 'movies_director.movies_id');
        if(empty($request->s)){
            $movies->orderBy("year","desc")->orderBy("imdbRating","desc");
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
        $movies->groupBy("movies.id")
            ->where('movies_director.director_id',$id);


   
        $movies = $movies->paginate($p_page);
        $count = $movies->total();

        $genre = $movies[0];

        $genre->genre_name = $genre->title_orig;
        $genre->genre_name_ru = $genre->title_ru;

        if(empty($movies->toArray()["data"])){
            return abort(404);
        }
        return view('front.films.genres',["movies"=>$movies,"count"=>$count,"titel"=>$titel,"genre"=>$genre]);

    }
    public function genre(Request $request,$type,$name){
        $p_page = $request->p_page;
        if(empty($p_page)){
            $p_page  = 24;
        }
        $type = $request->type;
        if($type == "movie"){
        $typeID = 1;
        }elseif($type == "series"){
        $typeID = 2;
        }elseif($type == "show-tv"){
        $typeID = 3;
        }elseif($type == "animes"){
        $typeID = 4;
        }elseif($type == "anime-series"){
        $typeID = 5;
        }elseif($type == "animation"){
        $typeID = 6;
        }

        $genre = DB::table('genre')->where("genre_name",$name)->where("type",$typeID)->first();

        $movies = DB::table('movies')->select(["*","movies.id as id"])
            ->join('movies_genre', 'movies.imdbId', '=', 'movies_genre.movies_imdb');
        if(empty($request->s)){
            $movies->orderBy("year","desc")->orderBy("imdbRating","desc");
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
        $movies->groupBy("movies.id")
            ->where('type',$type)
            ->where('movies_genre.genre_id',$genre->id);

   
        $movies = $movies->paginate($p_page);
        $count = $movies->total();

        if(empty($movies->toArray()["data"])){
            return abort(404);
        }
        return view('front.films.genres',["movies"=>$movies,"count"=>$count,"genre"=>$genre,"type"=>$type,"titel"=>$titel]);

    }
    public function actors(Request $request,$lg,$id)
    {
        $p_page = $request->p_page;
        if(empty($p_page)){
            $p_page  = 24;
        }
        $movies = DB::table('movies')->select(["*","movies.id as id","actors.profile_path as actors_image"])
            ->join('movies_actors', 'movies.imdbId', '=', 'movies_actors.movies_imdb')
            ->join('actors', 'actors.id', '=', 'movies_actors.actors_id');
            

        if(empty($request->s)){
            $movies->orderBy("year","desc")->orderBy("imdbRating","desc");
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
        $movies->groupBy("movies.id")
            ->where('movies_actors.actors_id',$id);
        
        $movies = $movies->paginate($p_page);
        $count = $movies->total();
        if(empty($movies->toArray()["data"])){
            return abort(404);
        }
        return view('front.films.actors',["movies"=>$movies,"count"=>$count]);

    }

}