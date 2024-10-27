<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"> <!-- Link to your CSS -->
    <style>
        .upcoming-duties {
            margin-top: 20px;
        }
        .duty-card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Dashboard</h1>
    <div class="upcoming-duties">
        <h2>Upcoming Duties</h2>
        @foreach ($nearestDuties as $duty)
            <div class="duty-card">
                <h4>{{ $duty->duty_date->format('d M') }} - {{ $duty->duty_date->format('l') }}</h4>
                <p>{{ $duty->start_time }} - {{ $duty->end_time }}</p>
                <p>{{ $duty->location }}</p>
                <p>{{ $duty->lecturer_name }}</p>
            </div>
        @endforeach
    </div>
</div>
</body>
</html>
