<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model{

    protected $table = 'genre';
	protected $hidden = ['created_at', 'updated_at'];


	public static function rules()
	{
		return [
				'genre_name'   => 'required',
		];
	}
}

// Genre