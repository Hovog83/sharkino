<?php
namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;

class Director extends Model{

    protected $table = 'director';
	protected $hidden = ['created_at', 'updated_at'];

}

// Director