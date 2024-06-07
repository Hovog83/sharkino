<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;

class TvCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:tv';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'add popular tv serial in db';

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
        $this->getTv($page);
        
    }

    public  function getTv($page){
        $client  = $this->client;
        $t       = $this->t;
            $request = $client->get('https://api.themoviedb.org/3/tv/popular?append_to_response=credits,videos,images&region=ru&page='.$page.'&language=ru&api_key='.$t);
            $response = $request->getBody();
            $data = json_decode($response->getContents());
            $dataMUve = [];
            $dataMUveNo = [];
            foreach($data->results as $key => $value){
            try {
                $request = $client->get('https://api.themoviedb.org/3/tv/'.$value->id.'?append_to_response=credits,external_ids,videos,images&region=ru&language=ru&api_key='.$t);
                $response = $request->getBody();
                $moves = json_decode($response->getContents());
                $dataMUve[$key] = [
                    "title_ru" => $moves->name,
                    "title_orig" => $moves->original_name,
                    "year" => date("Y", strtotime($moves->first_air_date)),
                    "popularity" => $moves->popularity + (date("Y", strtotime($moves->first_air_date)) * 100),
                    "imdbVotes" => $moves->vote_count,
                    "vote_average" => $moves->vote_average,
                    "imdbRating" => $moves->vote_average,
                    "plot" => $moves->overview,
                    "plot_ru" => $moves->overview,
                    "imdbId" => $moves->external_ids->imdb_id,
                    "start_date" => $moves->first_air_date,
                    "themoviedb_id" => $moves->id,
                    "type" => "series",
                    "poster" => "https://image.tmdb.org/t/p/w300".$moves->poster_path,
                ];

                if(!$moves->in_production && !empty($moves->last_episode_to_air->air_date)){
                    $dataMUve[$key]["end_date"] = $moves->last_episode_to_air->air_date;
                }else{
                    $dataMUve[$key]["end_date"] = NULL;
                }

                if(!empty($moves->videos->results[0]) ){
                    $dataMUve[$key]["videos_ru"] = $moves->videos->results[0]->key;
                    $dataMUve[$key]["videos_en"] = $moves->videos->results[0]->key; 
                }else{
                    $dataMUve[$key]["videos_ru"] = "";
                    $dataMUve[$key]["videos_en"] = ""; 
                }
                // movies_genre
            
                $request2 = $client->get('https://videocdn.tv/api/short?api_token=tuF9u2TTlcyE5CtxRIEkeUqsScnXF8rv&imdb_id='.$moves->external_ids->imdb_id);
                $response2 = $request2->getBody();
                $moves2 = json_decode($response2->getContents());
                

                if(!empty($moves2->data[0])){
                    $moveDa = $moves2->data[0];
                    
                    $dataMUve[$key]["kinopoisk_id"] = $moveDa->kp_id;
                    $dataMUve[$key]["add"] = $moveDa->add;
                    if(!empty($moveDa->quality)){
                        $dataMUve[$key]["quality"] = $moveDa->quality;
                    }else{
                        $dataMUve[$key]["quality"] = NULL;
                    }
                    $genreMove = [];


                    \DB::table('movies_iframe')->where('movies_imdb', $moves->id)->where('order',2)->delete();
                    $moviesIframe = [
                            "order"       => 2,
                            "movies_imdb" => $moves->id,
                            "iframe_url"  => $moveDa->iframe_src
                    ];
                    \DB::table('movies_iframe')->insertOrIgnore($moviesIframe);


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
                    // return true;
                    unset($dataMUve[$key]);

                }
            }
            // $this->dd($dataMUve);
            \DB::table('movies')->insertOrIgnore($dataMUve);
            echo $page.". \n";
            $this->getTv($page+1);

    }

    public function dd($data){
                echo "\n";
            print_r($data);
             echo "\n";die;
    }


}
