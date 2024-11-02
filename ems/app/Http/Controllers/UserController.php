<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);


        $user = User::where('email', $request->email)->first();


        if ($user && Hash::check($request->password, $user->password)) {

            return response()->json([
                'status' => 'success',
                'user' => [
<<<<<<< Updated upstream
=======
                    'id' => $user->id,
>>>>>>> Stashed changes
                    'name' => $user->name,
                    'email' => $user->email,
                    'usertype' => $user->usertype,
                ]
            ]);
        } else {

            return response()->json([
                'status' => 'error',
                'user' => $user,
                'message' => 'Invalid email or password'
            ], 401);
        }
    }
}
