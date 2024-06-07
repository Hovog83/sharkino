<?php

namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;
use App\Models\Common\Image;

use App\Models\Common\User;
use App\Models\Common\Categorie;
use App\Models\Common\Subcategory;

class Movies extends Model{

    protected $table = 'movies';
	protected $hidden = ['created_at', 'updated_at'];


	public function rules(){
		return [
				'title_ru'  => 'required',
				'title_en'  => 'required',
				'year'  => 'required',
				'type'  => 'required',
				'iframe_url'  => 'required',
				'quality'  => 'required',
				'imdbRating'  => 'required',
				'poster'  => 'required',
		];
	}
	public function getActors(){
	    return $this->hasMany('App\Models\Common\MoviesActors',  'movies_imdb', 'themoviedb_id')->with('getActors');
	}
	public function getGenre(){
	    return $this->hasMany('App\Models\Common\MoviesGenre', 'movies_imdb', 'themoviedb_id')->with('getGenre');
	}
	public function getCountry(){
	    return $this->hasMany('App\Models\Common\MoviesCountry', 'movies_imdb', 'themoviedb_id')->with('getCountry');
	}
	public function getDirector(){
	    return $this->hasMany('App\Models\Common\MoviesDirector', 'movies_imdb', 'themoviedb_id')->with('getDirector');
	}
	public function getIframe(){
	    return $this->hasMany('App\Models\Common\Iframe', 'movies_imdb', 'themoviedb_id')->orderBy("order")->orderBy("id","desc");
	}
	public function getIframeOderh(){
	    return $this->hasOne('App\Models\Common\Iframe', 'movies_imdb', 'themoviedb_id')->orderBy("order")->orderBy("id","desc");
	}
	public function child(){
	    // return $this->hasMany('App\Models\Common\MoviesGenre');
	}

}

// service_price