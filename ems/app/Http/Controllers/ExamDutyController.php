<?php

namespace App\Http\Controllers;

use App\Models\ExamDuty;
use Illuminate\Http\Request;

class ExamDutyController extends Controller
{
    // Get all exam duties
    public function index()
    {
        try {
            $examDuties = ExamDuty::with('lecturer')->get();

            return response()->json([
                'status' => true,
                'data' => $examDuties
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to retrieve exam duties'
            ], 500);
        }
    }

    // Get specific exam duty
    public function show($id)
    {
        try {
            $examDuty = ExamDuty::with('lecturer')->findOrFail($id);

            return response()->json([
                'status' => true,
                'data' => $examDuty
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Exam duty not found'
            ], 404);
        }
    }

    // Add new exam duty
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'lecId' => 'required|exists:lecturers,id',
                'courseCode' => 'required|string',
                'date' => 'required|date',
                'startTime' => 'required|date_format:H:i',
                'endTime' => 'required|date_format:H:i|after:startTime',
                'venue' => 'required|string'
            ]);

            // Check if lecturer is already assigned at this time
            $existingDuty = ExamDuty::where('lecId', $validated['lecId'])
                ->where('date', $validated['date'])
                ->where(function ($query) use ($validated) {
                    $query->whereBetween('startTime', [$validated['startTime'], $validated['endTime']])
                        ->orWhereBetween('endTime', [$validated['startTime'], $validated['endTime']]);
                })->first();

            if ($existingDuty) {
                return response()->json([
                    'status' => false,
                    'message' => 'Lecturer already has a duty during this time'
                ], 422);
            }

            $examDuty = ExamDuty::create($validated);

            return response()->json([
                'status' => true,
                'message' => 'Exam duty assigned successfully',
                'data' => $examDuty
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ], 422);
        }
    }

    // Update exam duty
    public function update(Request $request, $id)
    {
        try {
            $examDuty = ExamDuty::findOrFail($id);

            $validated = $request->validate([
                'lecId' => 'sometimes|required|exists:lecturers,id',
                'courseCode' => 'sometimes|required|string',
                'date' => 'sometimes|required|date',
                'startTime' => 'sometimes|required|date_format:H:i',
                'endTime' => 'sometimes|required|date_format:H:i|after:startTime',
                'venue' => 'sometimes|required|string'
            ]);

            // Check for time conflicts if date or time is being updated
            if (isset($validated['date']) || isset($validated['startTime']) || isset($validated['endTime'])) {
                $lecId = $validated['lecId'] ?? $examDuty->lecId;
                $date = $validated['date'] ?? $examDuty->date;
                $startTime = $validated['startTime'] ?? $examDuty->startTime;
                $endTime = $validated['endTime'] ?? $examDuty->endTime;

                $existingDuty = ExamDuty::where('lecId', $lecId)
                    ->where('date', $date)
                    ->where('id', '!=', $id)
                    ->where(function ($query) use ($startTime, $endTime) {
                        $query->whereBetween('startTime', [$startTime, $endTime])
                            ->orWhereBetween('endTime', [$startTime, $endTime]);
                    })->first();

                if ($existingDuty) {
                    return response()->json([
                        'status' => false,
                        'message' => 'Lecturer already has a duty during this time'
                    ], 422);
                }
            }

            $examDuty->update($validated);

            return response()->json([
                'status' => true,
                'message' => 'Exam duty updated successfully',
                'data' => $examDuty
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Exam duty not found'
            ], 404);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $e->errors()
            ], 422);
        }
    }

    // Delete exam duty
    public function destroy($id)
    {
        try {
            $examDuty = ExamDuty::findOrFail($id);
            $examDuty->delete();

            return response()->json([
                'status' => true,
                'message' => 'Exam duty deleted successfully'
            ], 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Exam duty not found'
            ], 404);
        }
    }
}
