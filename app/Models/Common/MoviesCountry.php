<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class MoviesCountry extends Model{

    protected $table = 'movies_country';
	protected $hidden = ['created_at', 'updated_at'];

	public function getCountry(){
	    return $this->hasOne('App\Models\Common\Country', 'iso_3166_1', 'country_iso_3166_1');
	}

	public function movies()
	{
	    return $this->belongsToMany('App\Models\Common\Movies',"movies_id");
	}	
}

// Country