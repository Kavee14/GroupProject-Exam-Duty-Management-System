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
        Schema::create('exam_duties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('lecId')->constrained('lecturers');
            $table->string('courseCode');
            $table->date('date');
            $table->time('startTime');
            $table->time('endTime');
            $table->string('examHall');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exam_duties');
    }
};
