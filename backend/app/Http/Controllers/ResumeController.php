// ResumeController.php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResumeController extends Controller
{
    public function generate(Request $request)
    {
        $validatedData = $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'nullable|string|max:255',
            'summary' => 'nullable|string',
            'experiences' => 'nullable|array',
            'educations' => 'nullable|array',
            'skills' => 'nullable|array',
        ]);

        // Generate HTML for resume based on $validatedData
        $resumeHTML = $this->generateResumeHTML($validatedData);

        return response()->json([
            'resumeHTML' => $resumeHTML,
        ]);
    }

    private function generateResumeHTML(array $data)
    {
        // Implement your resume HTML generation logic here based on $data
        // Example:
        $html = "<h2>{$data['fullName']}</h2>";
        $html .= "<p>Email: {$data['email']}</p>";
        $html .= "<p>Phone: {$data['phone']}</p>";
        // Add more sections for address, summary, experiences, educations, skills, etc.

        return $html;
    }
}
