<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Duty Reminder</title>
</head>
<body>
<h2>Reminder: Upcoming Duty on {{ $duty->duty_date->format('d M Y') }}</h2>
<p>Dear {{ $duty->lecturer_name }},</p>
<p>This is a reminder that you have an upcoming duty on {{ $duty->duty_date->format('d M Y') }}.</p>
<p>Details:</p>
<ul>
    <li>Time: {{ $duty->start_time }} - {{ $duty->end_time }}</li>
    <li>Location: {{ $duty->exam_hall }}</li>
</ul>
<p>If you are unable to attend, please click the "Request" button on the system to request a change.</p>
</body>
</html>
