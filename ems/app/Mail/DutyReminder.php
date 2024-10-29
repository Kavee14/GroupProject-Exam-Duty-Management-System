<?php

namespace App\Mail;

use App\Models\Duty;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DutyReminder extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Reminder: Upcoming Duty Assigned')
            ->view('emails.dutyReminder');
    }
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Duty Reminder',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'view.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
