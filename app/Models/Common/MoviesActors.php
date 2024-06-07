<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class MoviesActors extends Model{

    protected $table = 'movies_actors';
	protected $hidden = ['created_at', 'updated_at'];

	public function getActors(){
	    return $this->hasOne('App\Models\Common\Actors', 'actors_id', 'actors_id');
	}
}

// Genre