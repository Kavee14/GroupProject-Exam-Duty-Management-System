<?php
public function handle()
{
// Fetch duties scheduled for the next day
$duties = Duty::whereDate('duty_date', '=', now()->addDay()->toDateString())->get();

foreach ($duties as $duty) {
// Prepare lecturer details for email
$details = [
'lecturer_name' => $duty->lecturer_name,
'duty_date' => $duty->duty_date,
'start_time' => $duty->start_time,
'end_time' => $duty->end_time,
'exam_hall' => $duty->exam_hall,
];

// Send email
Mail::to($duty->lecturer_email)->send(new \App\Mail\LecturerReminderMail($details));
}

$this->info('Lecturer notified successfully.');
}
