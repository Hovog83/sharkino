<?php

namespace App\Http\Controllers\front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Common\Pages;
use DB;

class TvController extends Controller
{
    public function index($lg,Request $request){

        if(empty($request->g)){
            $tvgroup = "Հայկական";
        }else{
            $tvgroup = $request->g;
        }    

        $tv = DB::table('tv')
            ->where('tvgroup',$tvgroup)
            ->paginate(12);

        $genres = DB::table('tv')
             ->groupBy('tvgroup')
             ->orderBy('tvgroup',"desc")
           ->get();


        $searchUrl ="tv";
        return view('front.tv.index',["tv"=>$tv,"searchUrl"=>$searchUrl,"genres"=>$genres]);
    }

    public function tv_iframe($lg,$id)
    {
     
        $tv = DB::table('tv')
            ->where('id',$id)->first();

        return view('front.tv_iframe',["tv"=>$tv]);
    }
}

