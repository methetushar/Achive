<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\Controller;

//frontend router
Route::view('/', 'layouts.frontend');
Route::view('/code/{slug}', 'layouts.frontend');
Route::get('/get-code/{slug}', [ArchiveController::class, 'getCodeforView']);



// backend router
Route::view('/admin/login', 'layouts.backend');
Route::view('/admin/sign-up', 'layouts.backend');
Route::get('logout',function (){
   dd(\Illuminate\Support\Facades\Session::get('user'));
});
Route::group(['middleware' => 'CheckLogin'], function () {
    //view
    Route::view('/admin/dashboard', 'layouts.backend');
    Route::view('/admin/archive-create', 'layouts.backend');

    //api
    Route::post('/store-archive', [ArchiveController::class, 'store']);
    Route::get('/get-archive', [ArchiveController::class, 'index']);
    Route::post('/registration', [Controller::class, 'registration']);
    Route::post('/login', [Controller::class, 'login']);
});
