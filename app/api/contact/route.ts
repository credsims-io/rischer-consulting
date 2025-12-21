import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const {
            name,
            email,
            website,
            socialMedia,
            isBusinessOrg,
            businessOrg,
            operatingBudget,
            grantServicesBudget,
            interestedService,
            hearAboutUs,
        } = await request.json();

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
        console.log("Contact Emails:", contact_emails);
        const mailOptions = {
            from: process.env.SMTP_FROM_EMAIL,
            to: contact_emails,
            subject: `FIFA 2026 Discovery Call | ${name}`,
            html: `
                <h2>FIFA World Cup 2026 Discovery Call Request</h2>
                <h3>Contact Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website:</strong> ${website}</p>
                <p><strong>Social Media:</strong> ${socialMedia}</p>
                
                <h3>Organization Details</h3>
                <p><strong>Organization Type:</strong> ${isBusinessOrg}</p>
                <p><strong>About Organization:</strong> ${businessOrg}</p>
                
                <h3>Budget Information</h3>
                <p><strong>Operating Budget:</strong> ${operatingBudget}</p>
                <p><strong>World Cup Preparation Budget:</strong> ${grantServicesBudget}</p>
                
                <h3>World Cup Readiness Focus</h3>
                <p><strong>Interested Service:</strong> ${interestedService}</p>
                <p><strong>How they heard about us:</strong> ${hearAboutUs}</p>
            `,
            text: `
                FIFA World Cup 2026 Discovery Call Request
                
                Contact Information:
                Name: ${name}
                Email: ${email}
                Website: ${website}
                Social Media: ${socialMedia}
                
                Organization Details:
                Organization Type: ${isBusinessOrg}
                About Organization: ${businessOrg}
                
                Budget Information:
                Operating Budget: ${operatingBudget}
                World Cup Preparation Budget: ${grantServicesBudget}
                
                World Cup Readiness Focus:
                Interested Service: ${interestedService}
                How they heard about us: ${hearAboutUs}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
