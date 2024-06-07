<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Iframe extends Model{

    protected $table = 'movies_iframe';
	protected $hidden = ['created_at', 'updated_at'];

}

// MoviesActors