import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, name } = await request.json();
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const contact_emails = process.env.CONTACT_EMAILS?.split(',') || [];
        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: contact_emails,
            subject: 'New Newsletter / FIFA 2026 Subscription',
            html: `
                <h2>New Newsletter Subscription</h2>
                ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
                <p><strong>Email:</strong> ${email}</p>
            `,
            text: `
                New Newsletter Subscription
                ${name ? `Name: ${name}\n` : ''}
                Email: ${email}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } catch (error) {
        console.error('Error processing subscription:', error);
        return NextResponse.json(
            { error: 'Failed to process subscription' },
            { status: 500 }
        );
    }
} 
