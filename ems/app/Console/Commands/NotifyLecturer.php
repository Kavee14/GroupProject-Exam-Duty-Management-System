<?php

namespace App\Console\Commands;

use App\Models\Duty;
use App\Mail\DutyReminder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class NotifyLecturer extends Command
{
    protected $signature = 'app:notify-lecturer';
    protected $description = 'Send email notifications to lecturer for upcoming duties';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $tomorrow = now()->addDay()->format('Y-m-d');
        $duties = Duty::whereDate('duty_date', $tomorrow)->get();
        \Log::info('Notify lecturer command executed.');

        foreach ($duties as $duty) {
            // Send email notification
            Mail::to($duty->lecturer_email)->send(new DutyReminder($duty));
        }

        $this->info('Lecturer notified successfully.');
    }
}
