<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class MoviesDirector extends Model{

    protected $table = 'movies_director';
	protected $hidden = ['created_at', 'updated_at'];

	public function getDirector(){
	    return $this->hasOne('App\Models\Common\Director', 'director_id', 'director_id');
	}
}

// Director