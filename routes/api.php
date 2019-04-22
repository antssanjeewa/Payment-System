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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('payments', 'PaymentController', ['except' => ['update']]);
Route::post('payments/update','PaymentController@update');

Route::apiResource('stations', 'StationController', ['except' => ['update']]);
Route::post('stations/update','StationController@update');
