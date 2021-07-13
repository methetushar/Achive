<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\Controller;

//frontend router
Route::view('/', 'layouts.frontend');
Route::view('/code/{slug}', 'layouts.frontend');
Route::get('/get-code/{slug}', [ArchiveController::class, 'getCodeforView']);



// backend router
Route::view('/admin/login', 'layouts.backend')->name('adminlogin');
Route::view('/admin/sign-up', 'layouts.backend');

Route::group(['middleware' => 'auth','prefix'=>'admin'], function () {
    //view
    Route::view('/dashboard', 'layouts.backend');
    Route::view('/archive-create', 'layouts.backend');

    //api
    Route::post('/store-archive', [ArchiveController::class, 'store']);
    Route::post('/registration', [Controller::class, 'registration']);
});
Route::get('/get-archive', [ArchiveController::class, 'index']);
Route::get('/search-menus',[ArchiveController::class,'searchArchive']);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
