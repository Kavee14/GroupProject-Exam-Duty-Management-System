<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\GoogleGmailService;

class EmailController extends Controller
{
    public function sendTestEmail(GoogleGmailService $gmailService)
    {
        $to = 'ldiluka871@gmail.com';  // Change this to the recipient's email address
        $subject = 'Test Email';
        $message = 'This is a test email using Gmail API without SMTP credentials.';

        $gmailService->sendEmail($to, $subject, $message);

        return 'Email sent successfully!';
    }
}
