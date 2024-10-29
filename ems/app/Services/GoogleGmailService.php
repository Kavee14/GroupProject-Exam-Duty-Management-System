<?php

namespace App\Services;

use Google_Client;
use Google_Service_Gmail;

class GoogleGmailService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Google_Client();

        // Set up OAuth client configuration JSON
        $this->client->setAuthConfig(storage_path('credentials.json')); // Update to your actual file name
        $this->client->addScope(Google_Service_Gmail::GMAIL_SEND); // Corrected scope
        $this->client->setAccessType('offline');
        $this->client->setPrompt('select_account consent');
    }

    public function sendEmail($to, $subject, $messageText)
    {
        $service = new Google_Service_Gmail($this->client);

        $strRawMessage = "From: bmldiluka123@gmail.com\r\n";
        $strRawMessage .= "To: $to\r\n";
        $strRawMessage .= "Subject: $subject\r\n\r\n";
        $strRawMessage .= $messageText;

        // Encode the message and prepare it for sending
        $base64UrlMessage = rtrim(strtr(base64_encode($strRawMessage), '+/', '-_'), '=');

        $message = new \Google_Service_Gmail_Message();
        $message->setRaw($base64UrlMessage);

        $service->users_messages->send('me', $message);
    }
}
