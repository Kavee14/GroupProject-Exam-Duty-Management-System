<?php

namespace App\Http\Controllers;

use App\Models\Duty;
use Illuminate\Http\Request;

class DutyController extends Controller
{
    public function requestDutyChange($id)
    {
        $duty = Duty::findOrFail($id);
        $duty->is_requested = true;
        $duty->save();

        return redirect()->route('duties.index')->with('status', 'Request for change submitted.');
    }

    public function showUpcomingDuties()
    {
        $nearestDuties = Duty::where('duty_date', '>=', now())
            ->orderBy('duty_date', 'asc')
            ->take(3)
            ->get();

        return view('dashboard', compact('nearestDuties'));
    }

  /**  public function show($id)
    {
        // Fetch the duty by its ID, or fail if not found
        $duty = Duty::findOrFail($id);

        // Pass the duty to the view
        return view('welcome', compact('duty'));
    }**/

}

