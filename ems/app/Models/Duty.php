<?php

namespace App\Models;

<<<<<<< Updated upstream
=======
use Illuminate\Database\Eloquent\Factories\HasFactory;
>>>>>>> Stashed changes
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
{
<<<<<<< Updated upstream
    //
=======
    use HasFactory;

    protected $table = 'duties';

    protected $primaryKey = 'duty_id';

    public $incrementing = true;

    protected $keyType = 'int';

    protected $fillable = [
        'lec_id',
        'duty_date',
        'start_time',
        'end_time',
        'course_code',
        'exam_hall',
    ];


    public $timestamps = true;

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class, 'lec_id', 'lec_id');
    }
>>>>>>> Stashed changes
}
