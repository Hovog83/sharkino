<?php

namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;
use App\Models\Common\Image;

class Galleries extends Model{

    protected $table = 'galleries';
	protected $hidden = ['created_at', 'updated_at'];

	public static function rules()
	{
		return [
				'name'       => 'required|max:50|min:2',
				// 'user_id'   => 'required|integer',
		];
	}
	public function getGalleriesImages(){
	  return Image::where('galleries_id', '=', $this->id)->where('galleries_id', '!=',null)->paginate(12);
	}
	public static function getGalleriesMineImages($id){
	   $image = Image::where('galleries_id', '=', $id)->where('galleries_id', '!=',null)->where('mine', '=', "1")->first();
	   if(empty($image)){
		   $image = Image::where('galleries_id', '=', $id)->where('galleries_id', '!=',null)->first();
	   }
	   if(empty($image)){
	 	  return $image  = new Image;
	   }
	   return $image;
	}
	public function getGalleries(){
      return self::paginate(12);
	}
	public function getGalleriesById($id){
      return self::where('id', '=',$id)->paginate(12);
	}
}

// Galleries_price