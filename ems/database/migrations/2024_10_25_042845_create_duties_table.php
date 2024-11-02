<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
<<<<<<< Updated upstream
        Schema::create('duties', function (Blueprint $table) {
            $table->id();
            $table->date('duty_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('exam_hall');
            $table->string('lecturer_name');
            $table->string('lecturer_email');  // Storing the preacher's email
            $table->boolean('is_requested')->default(false);  // Handling requests
=======
        Schema::create('duty', function (Blueprint $table) {
            $table->unsignedBigInteger('duty_id');
            $table->string('lec_id');
            $table->foreign('lec_id')->references('lec_id')->on('lecturers')->onDelete('cascade');
            $table->date('duty_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('course_code');
            $table->string('exam_hall');
>>>>>>> Stashed changes
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
<<<<<<< Updated upstream
        Schema::dropIfExists('duties');
=======
        Schema::dropIfExists('duty');
>>>>>>> Stashed changes
    }
};
