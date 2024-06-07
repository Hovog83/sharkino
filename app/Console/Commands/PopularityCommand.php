<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use App\Models\Common\Movies;


class PopularityCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:popularity';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'update popular tv serial and movies in db';

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
        //
        $this->updatePopularityMove();
        echo "\n";
        echo "==========================";
        echo "\n";

        $this->updatePopularity();

    }

    public function updatePopularityMove()
    {
        $client = new Client;
        $t = "019e8f375549e0bbd4a4191862ebc88f";
        $movies = Movies::where("type","movie")->orderBy("popularity","desc")->limit(15000)->get();
        foreach($movies as $key => $value ){
            echo ".";
            $request = $client->get('https://api.themoviedb.org/3/movie/'.$value->themoviedb_id.'?append_to_response=credits,videos,images&region=ru&language=ru&api_key='.$t);
            $response = $request->getBody();
            $moves = json_decode($response->getContents());
            $value->popularity = $moves->popularity + ($value->year * 100);
            $value->vote_average = $moves->vote_average;
            $value->imdbRating = $moves->vote_average;
            $value->imdbVotes = $moves->vote_count;
            $value->save();
        }
    }

    public function updatePopularity()
    {
        $client = new Client;
        $t = "019e8f375549e0bbd4a4191862ebc88f";
        $movies = Movies::where("type","series")->orderBy("popularity","desc")->limit(15000)->get();
        foreach($movies as $key => $value ){
            echo ".";
            $request = $client->get('https://api.themoviedb.org/3/tv/'.$value->themoviedb_id.'?append_to_response=credits,external_ids,videos,images&region=ru&language=ru&api_key='.$t);
            $response = $request->getBody();
            $moves = json_decode($response->getContents());
            $value->popularity = $moves->popularity + ($value->year * 100);
            $value->vote_average = $moves->vote_average;
            $value->imdbRating = $moves->vote_average;
            $value->imdbVotes = $moves->vote_count;
            $value->save();
        }
    }

}
