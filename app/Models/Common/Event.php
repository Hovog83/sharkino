<?php

namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
	protected $fillable = ['title','start_date','end_date'];


	public function getcat(){
	    return $this->hasOne('App\Models\Common\Categorie', 'id', 'cat_id');
	}	
	public function getUser(){
	    return $this->hasOne('App\Models\Common\User', 'id', 'user_id');
	}
}
