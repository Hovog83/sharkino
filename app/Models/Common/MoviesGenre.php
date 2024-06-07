<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class MoviesGenre extends Model{

    protected $table = 'movies_genre';
	protected $hidden = ['created_at', 'updated_at'];

	public function getGenre(){
	    return $this->hasOne('App\Models\Common\Genre', 'genre_id', 'genre_id');
	}

	public function movies()
	{
	    return $this->belongsToMany('App\Models\Common\Movies',"movies_id");
	}	
}

// MoviesGenre