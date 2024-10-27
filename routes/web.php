<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DutyController;



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
