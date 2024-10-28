<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lecturer;

class LecturerController extends Controller
{
    public function index()
    {
        return Lecturer::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:lecturers',
            'department' => 'required',
            'phone_number' => 'required',
            'position' => 'required',
        ]);

        Lecturer::create($request->all());

        return response()->json(['message' => 'Lecturer created successfully']);
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
