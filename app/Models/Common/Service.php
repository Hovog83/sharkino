<?php

namespace App\Models\Common;

use Illuminate\Database\Eloquent\Model;
use App\Models\Common\Image;

use App\Models\Common\User;
use App\Models\Common\Categorie;
use App\Models\Common\Subcategory;

class Service extends Model{

    protected $table = 'service';
	protected $hidden = ['created_at', 'updated_at'];

	public static function rules()
	{
		return [
				'full_name'       => 'required|max:50|min:2',
				'hogewo'       => 'required|max:50|min:2',
				'phone'      => 'required|max:30',
				'godfather_name'      => 'required|max:30',
				'date'      => 'required|max:30',
				// 'cat_id'      => 'required|integer',
				// 'user_id'   => 'required|integer',
		];
	}
	public function getServiceImages(){
	  return Image::where('service_id', '=', $this->id)->orderBy('order')->get();
	}
	public function getServiceForCat($catId){
      return self::where('cat_id', '=', $catId)->orderBy('order')->paginate(20);
	}	
	public function getServiceForSubCat($subCatID){
      return self::where('subCat_id', '=', $subCatID)->orderBy('order')->paginate(12);
	}
	public static function getServiceMineImages($id){
	   $image = Image::where('service_id', '=', $id)->where('mine', '=', "1")->first();
	   if(empty($image)){
		   $image = Image::where('service_id', '=', $id)->first();
	   }
	   if(empty($image)){
	 	  return $image  = new Image;
	   }
	   return $image;
	}
	public function getService($id){
	  return self::with('getcat')->with('getSubCat')->with('getUser')->where('id', '=', $id)->first();
	}
	public function getcat(){
	    return $this->hasOne('App\Models\Common\Categorie', 'id', 'cat_id');
	}	
	public function getSubCat(){
	    return $this->hasOne('App\Models\Common\Subcategory', 'id', 'subCat_id');
	}	
	public function getUser(){
	    return $this->hasOne('App\Models\Common\User', 'id', 'user_id');
	}
	public function getPrice(){
	    return $this->hasMany('App\Models\Common\ServicePrice', 'service_id', 'id');
	}

	public  function getServiceByCat($id){
	  return self::with('getPrice')->where('cat_id', '=', $id)->get();
	}
}

// service_price