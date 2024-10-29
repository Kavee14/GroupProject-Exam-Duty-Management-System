<?php

use App\Http\Controllers\ExamDutyController;
use App\Http\Controllers\LecturerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('login', [UserController::class, 'login']);

Route::prefix('v1')->group(function () {
    Route::get('lecturers/getAll', [LecturerController::class, 'index']);
    Route::post('lecturers/add', [LecturerController::class, 'store']);
    Route::put('lecturers/edit/{id}', [LecturerController::class, 'update']);
    Route::delete('lecturers/{id}', [LecturerController::class, 'destroy']);
    Route::get('lecturers/get/{id}', [LecturerController::class, 'show']);

    Route::get('exam-duties/getAll', [ExamDutyController::class, 'index']);
    Route::get('exam-duties/{id}', [ExamDutyController::class, 'show']);
    Route::post('exam-duties/add', [ExamDutyController::class, 'store']);
    Route::put('exam-duties/edit/{id}', [ExamDutyController::class, 'update']);
    Route::delete('exam-duties/{id}', [ExamDutyController::class, 'destroy']);
});