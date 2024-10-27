<?php

namespace App\Console\Commands;

use App\Models\Duty;
use App\Mail\DutyReminder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class NotifyLecturer extends Command
{
    protected $signature = 'app:notify-lecturer';
    protected $description = 'Send email notifications to lecturers for upcoming duties';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $tomorrow = now()->addDay()->format('Y-m-d'); // Get the date for tomorrow
        $duties = Duty::whereDate('duty_date', $tomorrow)->get(); // Fetch duties
        Log::info('Notify lecturer command executed at ' . now());

        if ($duties->isEmpty()) {
            Log::info('No duties found for tomorrow.');
            return $this->info('No duties to notify for tomorrow.');
        }

        foreach ($duties as $duty) {
            try {
                // Send email notification
                Mail::to($duty->lecturer_email)->send(new DutyReminder($duty));
                Log::info('Email sent to ' . $duty->lecturer_email);
            } catch (\Exception $e) {
                Log::error('Failed to send email to ' . $duty->lecturer_email . ': ' . $e->getMessage());
            }
        }

        $this->info('Lecturers notified successfully.');
    }
}
