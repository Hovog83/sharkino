<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;


class MovieCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:movie';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'add popular movie in db';

    protected $client;
    protected $t;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $page = 1;
        $this->client = new Client;
        $this->t = "019e8f375549e0bbd4a4191862ebc88f";

        $this->getMove($page);
    }

    public function dd($data){
                echo "\n";
            print_r($data);
             echo "\n";die;
    }

    public  function getMove($page){
        $client  = $this->client;
        $t       = $this->t;

            $request = $client->get('https://api.themoviedb.org/3/movie/popular?append_to_response=credits,videos,images&region=ru&page='.$page.'&language=ru&api_key='.$t);
            $response = $request->getBody();
            $data = json_decode($response->getContents());
            $dataMUve = [];
            $dataMUveNo = [];
            foreach($data->results as $key => $value){
                try {
                    $request = $client->get('https://api.themoviedb.org/3/movie/'.$value->id.'?append_to_response=credits,videos,images&region=ru&language=ru&api_key='.$t);
                    $response = $request->getBody();
                    $moves = json_decode($response->getContents());
                    $dataMUve[$key] = [
                        "title_ru" => $moves->title,
                        "title_orig" => $moves->original_title,
                        "year" => date("Y", strtotime($moves->release_date)),
                        "popularity" => $moves->popularity + (date("Y", strtotime($moves->release_date)) * 100),
                        "imdbVotes" => $moves->vote_count,
                        "vote_average" => $moves->vote_average,
                        "imdbRating" => $moves->vote_average,
                        "plot" => $moves->overview,
                        "plot_ru" => $moves->overview,
                        "imdbId" => $moves->imdb_id,
                        "themoviedb_id" => $moves->id,
                        "type" => "movie",
                        "poster" => "https://image.tmdb.org/t/p/w300".$moves->poster_path,
                    ];
                    if(!empty($moves->videos->results[0]) ){
                        $dataMUve[$key]["videos_ru"] = $moves->videos->results[0]->key;
                        $dataMUve[$key]["videos_en"] = $moves->videos->results[0]->key; 
                    }else{
                        $dataMUve[$key]["videos_ru"] = "";
                        $dataMUve[$key]["videos_en"] = ""; 
                    }
                    $request2 = $client->get('https://videocdn.tv/api/short?api_token=tuF9u2TTlcyE5CtxRIEkeUqsScnXF8rv&imdb_id='.$moves->imdb_id);
                    $response2 = $request2->getBody();
                    $moves2 = json_decode($response2->getContents());
        


                    if(!empty($moves2->data[0])){


                        $moveDa = $moves2->data[0];
              
         
                        //
                        // https://apivb.info/api/videos.json?id_kp=952158&token=939db2bb8340a5e19a68aa7afec440d0

                        $request3 = $client->get('https://apivb.info/api/videos.json?id_kp='.$moveDa->kp_id.'&token=939db2bb8340a5e19a68aa7afec440d0');
                        $response3 = $request3->getBody();
                        $moves3 = json_decode($response3->getContents());
                        $moves3 = end($moves3);
                        
                        $dataMUve[$key]["kinopoisk_id"] = $moveDa->kp_id;
                        $dataMUve[$key]["add"] = $moveDa->add;
                        $dataMUve[$key]["quality"] = (!empty($moveDa->quality)) ? $moveDa->quality : "";
                        $genreMove = [];

                        if(!empty($moves3->trailer) && $moves3->trailer != ''){
                            $dataMUve[$key]["videos_ru"] = $moves3->trailer;
                        }

                        \DB::table('movies_iframe')->where('movies_imdb', $moves->id)->delete();
                        $moviesIframe = [
                                "order"       => 2,
                                "movies_imdb" => $moves->id,
                                "iframe_url"  => $moveDa->iframe_src
                        ];
                        \DB::table('movies_iframe')->insertOrIgnore($moviesIframe);
        
        
                        if(!empty($moves3) && !empty($moves3->iframe_url)){
                            $moviesIframe = [
                                    "order"       => 1,
                                    "movies_imdb" => $moves->id,
                                    "iframe_url"  => $moves3->iframe_url
                                    ];
                            \DB::table('movies_iframe')->insertOrIgnore($moviesIframe);
                        } 

                        \DB::table('movies_genre')->where('movies_imdb', $moves->id)->delete();
                        foreach($moves->genres as $key => $value){
                            $genreMove[$key] = [
                                "movies_imdb" => $moves->id,
                                "genre_id" => $value->id,
                            ];
                        }
                        \DB::table('movies_genre')->insertOrIgnore($genreMove);
        
                        $tmp = 0;
                        $genreActors = [];
                        $actors = [];
                        \DB::table('movies_actors')->where('movies_imdb', $moves->id)->delete();
                        foreach($moves->credits->cast as $key => $value) if ($tmp++ < 3){
                            $actors[$key] = [
                                "actors_id"=> $value->id,
                                "actors_name"=> $value->name,
                                "profile_path"=> $value->profile_path,
                            ];
                            $genreActors[$key] = [
                                "movies_imdb" => $moves->id,
                                "actors_id" => $value->id,
                            ];
                        }
                        \DB::table('actors')->insertOrIgnore($actors);
                        \DB::table('movies_actors')->insertOrIgnore($genreActors);
        
                        $tmp = 0;
                        $genreCountry = [];
                        $country = [];
                        \DB::table('movies_country')->where('movies_imdb', $moves->id)->delete();
        
                        foreach($moves->production_countries as $key => $value) if ($tmp++ < 3){
                            $country[$key] = [
                                "iso_3166_1" => $value->iso_3166_1,
                                "country"   => $value->name,
                                "country_ru"=> $value->name,
                                "country_hy"=> $value->name,
                            ];
        
                            $genreCountry[$key] = [
                                "movies_imdb" => $moves->id,
                                "country_iso_3166_1" => $value->iso_3166_1,
                            ];
                        }
                        \DB::table('country')->insertOrIgnore($country);
                        \DB::table('movies_country')->insertOrIgnore($genreCountry);
        
                        \DB::table('movies_director')->where('movies_imdb', $moves->id)->delete();
        
                        $directing = [];
                        $genreDirecting = [];
        
                        foreach($moves->credits->crew as $key => $value) {
        
                            if($value->job == "Director"){
                                $directing[$key] = [
                                    "director"   => $value->name,
                                    "director_id"   => $value->id,
                                ];
                                $genreDirecting[$key] = [
                                    "movies_imdb" => $moves->id,
                                    "director_id" => $value->id,
                                ];
        
                                break;
                            }
                        }
                        \DB::table('director')->insertOrIgnore($directing);
                        \DB::table('movies_director')->insertOrIgnore($genreDirecting);
        
                    }else{
                        $dataMUveNo[$key] = $dataMUve[$key];
                        unset($dataMUve[$key]);
                    }
                }catch (\GuzzleHttp\Exception\ClientException $e) {
                    unset($dataMUve[$key]);
                    // continue;

                }

            }

            \DB::table('movies')->insertOrIgnore($dataMUve);
            echo $page.". \n";
            $this->getMove($page+1);



    }
}
