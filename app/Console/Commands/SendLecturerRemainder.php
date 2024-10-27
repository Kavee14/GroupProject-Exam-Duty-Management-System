<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Duty; // Assuming you have a Duty model for the scheduled duties
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class SendLecturerReminder extends Command
{
    protected $signature = 'email:send-lecturer-reminder';
    protected $description = 'Send email reminders to lecturers the day before the duty date';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $tomorrow = Carbon::tomorrow();

        // Fetch duties scheduled for tomorrow
        $duties = Duty::whereDate('duty_date', $tomorrow)->get();

        foreach ($duties as $duty) {
            $lecturerEmail = $duty->lecturer->email; // Adjust based on your model relationships
            $details = [
                'subject' => 'Duty Reminder',
                'body' => "You have a scheduled duty tomorrow at {$duty->location} from {$duty->start_time} to {$duty->end_time}."
            ];

            // Send email
            Mail::send([], [], function ($message) use ($lecturerEmail, $details) {
                $message->to($lecturerEmail)
                    ->subject($details['subject'])
                    ->setBody($details['body'], 'text/html');
            });
        }

        $this->info('Lecturer reminders sent successfully!');
    }
}
