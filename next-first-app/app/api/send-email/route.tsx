import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    await resend.emails.send({
        from: 'damien.gallagher@gmail.com',
        to: 'damien.gallagher@gmail.com',
        subject: 'hello world',
        react: <WelcomeTemplate name="Damien" />,
      });

      return NextResponse.json({});
}