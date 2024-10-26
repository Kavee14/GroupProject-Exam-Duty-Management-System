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
        Schema::create('duties', function (Blueprint $table) {
            $table->id();
            $table->date('duty_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->string('exam_hall');
            $table->string('lecturer_name');
            $table->string('lecturer_email');  // Storing the preacher's email
            $table->boolean('is_requested')->default(false);  // Handling requests
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('duties');
    }
};
