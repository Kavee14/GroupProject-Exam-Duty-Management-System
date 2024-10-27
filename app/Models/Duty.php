<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
{
    use HasFactory;

    // Add any fillable properties if necessary
    protected $fillable = [
        'lecturer_name',
        'lecturer_email',
        'duty_date',
        'course_code',
        'course_name',
        'start_time',
        'end_time',
        'exam_hall',
    ];

    // Add the casts property to cast attributes
    protected $casts = [
        'duty_date' => 'datetime',
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];
}
