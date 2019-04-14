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

Route::apiResource('childrens', 'ChildrenController', ['except' => ['update']]);
Route::post('childrens/update','ChildrenController@update');

Route::apiResource('teachers', 'TeacherController', ['except' => ['update']]);
Route::post('teachers/update','TeacherController@update');

Route::apiResource('subjects', 'SubjectController', ['except' => ['update']]);
Route::post('subjects/update','SubjectController@update');

Route::apiResource('class_rooms', 'ClassRoomController', ['except' => ['update']]);
Route::post('class_rooms/update','ClassRoomController@update');

Route::apiResource('attend_date', 'AttendDateController', ['except' => ['update']]);
Route::post('attend_date/update','AttendDateController@update');