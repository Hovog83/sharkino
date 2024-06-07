<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/', function () {
    echo "api";
});


Route::group([
    'namespace' => 'front',
    'middleware' => [
        'web' 
    ],
], function(){
    Route::get('moves', 'IndexController@index')->name('moves');

    Route::get('test', 'IndexController@testMove')->name('test');

    Route::get('apost', 'IndexController@apost')->name('apost');



    Route::get('movesActors/{id}', 'IndexController@movesActors')->name('moves');
    Route::get('ganers', 'IndexController@getGaners')->name('moves');
    Route::get('moves/genre', 'IndexController@genre')->name('moves');
    Route::get('recommendeds', 'IndexController@random_index')->name('recommendeds');
    Route::get('move/{id}', 'FilmsController@index')->name('move');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
