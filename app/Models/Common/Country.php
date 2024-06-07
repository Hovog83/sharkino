<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Country extends Model{

    protected $table = 'country';
	protected $hidden = ['created_at', 'updated_at'];

}

// Country