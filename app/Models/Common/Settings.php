<?php

namespace App\Models\common;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model{

    protected $table = 'settings';
	
	public static function rules()
	{
		return [
				'service_id'  => 'required|integer',
				'price'  => 'required|integer',
				'size' => 'required',
		];
	}

	
}