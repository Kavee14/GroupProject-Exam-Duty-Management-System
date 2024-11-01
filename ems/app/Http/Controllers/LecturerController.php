<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;
use Illuminate\Support\Facades\DB;

class LecturerController extends Controller
{
    public function index()
    {
        return Lecturer::all();
    }

    public function store(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'lec_id' => 'required|string|unique:lecturers,lec_id',
            'name' => 'required|string',
            'email' => 'required|email|unique:lecturers,email',
            'phone' => 'required|string',
            'address' => 'required|string',
            'position' => 'required|string',
            'department' => 'required|string',
        ]);

        // Create lecturer
        // After creating the lecturer
        $lecturer = Lecturer::create($request->all());
        if (!$lecturer) {
            return response()->json(['message' => 'Lecturer creation failed'], 500);
        }

        // Generate password using the first 4 letters of name and last 3 digits of lec_id
        $password = strtolower(substr($lecturer->name, 0, 4)) . substr($lecturer->lec_id, -3);

        // Create corresponding user in the users table
        DB::table('users')->insert([
            'lec_id' => $lecturer->lec_id,
            'usertype' => 'user',
            'name' => $lecturer->name,
            'email' => $lecturer->email,
            'password' => bcrypt($password),
        ]);

        return response()->json(['message' => 'Lecturer created successfully, user account created.']);
    }

    public function update(Request $request, $id)
    {
        $lecturer = Lecturer::findOrFail($id);
        $lecturer->update($request->all());

        return response()->json(['message' => 'Lecturer updated successfully']);
    }

    public function destroy($id)
    {
        Lecturer::destroy($id);

        return response()->json(['message' => 'Lecturer deleted successfully']);
    }

    public function show($id)
    {
        try {
            $lecturer = Lecturer::findOrFail($id);

            return response()->json([
                'status' => true,
                'data' => $lecturer
            ], 200);

        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Lecturer not found'
            ], 404);
        }
    }
}
