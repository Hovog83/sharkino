<?php

namespace App\Models\common;

use Illuminate\Database\Eloquent\Model;

class ServicePrice extends Model{

    protected $table = 'service_price';
	
	public static function rules()
	{
		return [
				'service_id'  => 'required|integer',
				'price'  => 'required|integer',
				'size' => 'required',
		];
	}

	
}