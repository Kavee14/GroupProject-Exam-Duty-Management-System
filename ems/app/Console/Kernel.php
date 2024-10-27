<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        \App\Console\Commands\TestScheduleCommand::class,
    ];




    protected function schedule(Schedule $schedule)
    {
        // Schedule the NotifyLecturer command to run daily at 12 PM
        //$schedule->command('app:notify-lecturer')->dailyAt('12:00')->appendOutputTo(storage_path('logs/scheduler.log'));
        Log::info('Scheduler invoked at ' . now());
        $schedule->command('app:test-schedule-command')->everyMinute();

    }



    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
