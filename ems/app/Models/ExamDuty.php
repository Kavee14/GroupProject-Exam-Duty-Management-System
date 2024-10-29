<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ExamDuty extends Model
{
    use HasFactory;

    protected $fillable = [
        'lecId',
        'courseCode',
        'date',
        'startTime',
        'endTime',
        'examHall',
    ];

    // protected $casts = [
    //     'date' => 'date',
    //     'startTime' => 'datetime',
    //     'endTime' => 'datetime',
    // ];

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class, 'lecId');
    }
}
