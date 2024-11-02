<?php

namespace App\Http\Controllers;

use App\Models\Duty;
use App\Models\User;

class ReportController extends Controller
{
    // Get specific exam duty
    public function show($reportType, $userId)
    {
        try {
            switch ($reportType) {
                case 'duties':
                    return $this->handleDuties($userId);
                case 'voucher':
                    return $this->handleVoucher($userId);
                default:
                    return response()->json(['error' => 'Invalid report type'], 400);
            }
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Exam duty not found'
            ], 404);
        }
    }


    private function handleDuties($userId)
    {
        $lec_id = User::find($userId)->lec_id;
        $data = Duty::with('lecturer')->where('lec_id', $lec_id)->get()->toArray();

        return response()->json([
            'status' => true,
            'data' => $data
        ], 200);
    }

    private function handleVoucher()
    {
        return response()->json([
            'status' => true,
            'data' => 'voucher'
        ], 200);
    }
}
