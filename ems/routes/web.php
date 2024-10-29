<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DutyController;
use App\Http\Controllers\EmailController;

Route::get('/send-test-email', [EmailController::class, 'sendTestEmail']);


Route::get('/', function () {
    return view('welcome');
});

Route::post('/duties/{id}/request', [DutyController::class, 'requestDutyChange'])->name('duties.request');
Route::get('/duties/{id}', [DutyController::class, 'show'])->name('duties.show');
/*Route::get('/send-test-email', function () {
    Mail::raw('This is a test email.', function ($message) {
        $message->to('bmldiluka123@gmail.com')
            ->subject('Test Email');
    });
    return 'Test email sent!';
});*/

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
