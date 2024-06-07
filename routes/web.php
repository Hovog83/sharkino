<?php
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/image', function (Request $request) {

	 $imageContent = file_get_contents($request->url);

    // Get the MIME type of the image
    $mimeType = 'image/png';

    // Return the image content with the correct MIME type header
    return (new Response($imageContent, 201))
              ->header('Content-Type', $mimeType);
});
Route::get('coronavirus', 'front\IndexController@coronavirus');

Route::get('/iframe/{id}', 'front\FilmsController@iframe');
Route::get('/telegram/{id}', 'front\FilmsController@telegram');

Route::get('/{path?}/{path2?}/{path3?}/{path4?}', 'front\IndexController@view');

// Route::get('/{path?}/{path2?}/{path3?}/{path4?}', function () {

//     return view('welcome');
// });
