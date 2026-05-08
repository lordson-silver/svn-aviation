import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, email, passengers, pickup, destination, service, date, message } = await req.json();

    // 1. Internal Notification Template (For the Company Ops Team)
    const internalEmailHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: sans-serif; color: #fff; background-color: #000; padding: 40px;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #333; padding: 30px; border-radius: 12px; border-top: 4px solid #D4AF37;">
          <h2 style="font-size: 18px; margin-bottom: 20px; color: #fff;">New Flight Mission Inquiry</h2>
          <div style="background: #111; padding: 25px; border-radius: 8px;">
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Passenger:</strong> ${name}</p>
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Contact:</strong> ${phone} | ${email}</p>
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Route:</strong> ${pickup} → ${destination}</p>
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Service Class:</strong> ${service}</p>
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Pax Count:</strong> ${passengers} Passengers</p>
            <p style="margin: 0 0 15px; font-size: 14px;"><strong style="color: #D4AF37;">Proposed Date:</strong> ${date}</p>
          </div>
          <div style="margin-top: 30px; font-size: 15px; line-height: 1.6; color: #ccc;">
            <p style="font-weight: bold; color: #fff;">Operational Remarks:</p>
            "${message || 'None'}"
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Client Auto-Response Template (Branded Confirmation for the Customer)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: sans-serif; color: #000; background-color: #f9f9f9; padding: 40px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 40px; border-radius: 12px; border: 1px solid #eee; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="text-align: center; margin-bottom: 30px;">
             <h1 style="color: #000; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;">SVN Aviation</h1>
             <p style="color: #D4AF37; margin: 5px 0 0; font-size: 10px; font-weight: bold; letter-spacing: 1px;">PREMIUM CHARTER SERVICES</p>
          </div>
          
          <h2 style="font-size: 20px; color: #333;">Hello ${name},</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6;">
            Thank you for reaching out to SVN Aviation. This email confirms that our flight operations team has received your charter inquiry for <strong>${service}</strong>.
          </p>
          
          <div style="background: #fcfcfc; border: 1px solid #f0f0f0; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <p style="margin: 0 0 5px; font-size: 14px; color: #999;">MISSION SUMMARY:</p>
            <p style="margin: 0; font-weight: bold; font-size: 16px; color: #333;">${pickup} → ${destination}</p>
            <p style="margin: 5px 0 0; font-size: 14px; color: #555;">Scheduled for: ${date}</p>
          </div>

          <p style="font-size: 15px; color: #555; line-height: 1.6;">
            Our coordinators are currently reviewing your specific mission requirements and aircraft availability. You can expect a formal quote and itinerary from us via phone or email within the next 24 hours.
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
            <p style="font-size: 12px; color: #999;">SVN Aviation Limited | MMIA Aviation Plaza, Lagos</p>
            <p style="font-size: 12px; color: #999;">24/7 Operations: +234 (0) 800 SVN-FLY</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // SEND BOTH EMAILS SIMULTANEOUSLY
    const [internalRes, clientRes] = await Promise.all([
      // Email to Company
      resend.emails.send({
        from: 'SVN Aviation <contact@contact.svnaviation.com>',
        to: ['info@svnaviation.com'],
        subject: `NEW INQUIRY: ${name} (${pickup} > ${destination})`,
        html: internalEmailHtml,
      }),
      // Auto-reply to Client
      resend.emails.send({
        from: 'SVN Aviation <contact@contact.svnaviation.com>',
        to: [email],
        subject: `Confirmation: Your Charter Request with SVN Aviation`,
        html: clientEmailHtml,
      })
    ]);

    if (internalRes.error || clientRes.error) {
      console.error('Email Error:', internalRes.error || clientRes.error);
      return NextResponse.json({ error: internalRes.error || clientRes.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: { internal: internalRes.data, client: clientRes.data } });
  } catch (error) {
    console.error('Server Internal Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
