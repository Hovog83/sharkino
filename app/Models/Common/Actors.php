<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Actors extends Model{

    protected $table = 'actors';
	protected $hidden = ['created_at', 'updated_at'];

	public static function rules()
	{
		return [
			'actors_name'   => 'required',
		];
	}
}

// MoviesActors