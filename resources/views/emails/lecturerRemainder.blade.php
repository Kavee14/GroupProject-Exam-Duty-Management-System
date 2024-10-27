<?php
public function handle()
{
    // Fetch duties scheduled for the next day
    $duties = Duty::whereDate('duty_date', '=', now()->addDay()->toDateString())->get();

    foreach ($duties as $duty) {
        // Prepare lecturer details for email
        $details = [
            'lecturer_name' => $duty->lecturer_name,
            'duty_date' => Carbon::parse($duty->duty_date)->format('d M Y'),
            'course_code' => $duty->course_code,
            'course_name' => $duty->course_name,
            'start_time' => Carbon::parse($duty->start_time)->format('H:i'), // Convert time if necessary
            'end_time' => Carbon::parse($duty->end_time)->format('H:i'), // Convert time if necessary
            'exam_hall' => $duty->exam_hall,
        ];

        // Send email
        Mail::to($duty->lecturer_email)->send(new \App\Mail\LecturerReminderMail($details));
    }

    $this->info('Lecturer notified successfully.');
}

