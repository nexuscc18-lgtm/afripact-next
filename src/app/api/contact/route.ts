import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { ContactFormData } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const NOTIFICATION_TO = 'ngubo196@gmail.com';
const NOTIFICATION_FROM = 'onboarding@resend.dev';

export async function POST(request: NextRequest) {
  let body: ContactFormData;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, company, phone, email, service, submissionType } = body;
  const message = body.message || `Callback requested${service ? ` for ${service}` : ''}.`;

  if (!name || !phone || !submissionType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // contact_submissions.submission_type has a CHECK constraint allowing only 'contact' | 'quote'
  const dbSubmissionType = submissionType === 'callback' ? 'contact' : submissionType;

  const { error: dbError } = await supabase.from('contact_submissions').insert([
    {
      name,
      company: company || null,
      phone,
      email: email || '',
      message,
      service: service || null,
      submission_type: dbSubmissionType,
    },
  ]);

  if (dbError) {
    console.error('Supabase insert error:', dbError);
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 });
  }

  try {
    const subjectLabel =
      submissionType === 'quote' ? 'Quote Request' : submissionType === 'callback' ? 'Callback Request' : 'Contact Message';

    await resend.emails.send({
      from: NOTIFICATION_FROM,
      to: NOTIFICATION_TO,
      ...(email ? { replyTo: email } : {}),
      subject: `New ${subjectLabel} from ${name}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || '-'}`,
        `Phone: ${phone}`,
        `Email: ${email || '-'}`,
        `Service: ${service || '-'}`,
        `Type: ${submissionType}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });
  } catch (emailError) {
    console.error('Resend email error:', emailError);
    return NextResponse.json(
      { warning: 'Submission saved, but notification email failed to send' },
      { status: 200 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
