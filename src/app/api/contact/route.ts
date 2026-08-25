import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

const NOTIFICATION_TO = 'ngubo196@gmail.com';
const NOTIFICATION_FROM = 'onboarding@resend.dev';

function stringField(formData: FormData, key: string): string | null {
  const value = formData.get(key);
  return typeof value === 'string' && value.trim() ? value : null;
}

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
  }

  const name = stringField(formData, 'name');
  const company = stringField(formData, 'company');
  const phone = stringField(formData, 'phone');
  const email = stringField(formData, 'email');
  const service = stringField(formData, 'service');
  const submissionType = stringField(formData, 'submissionType');
  const suburb = stringField(formData, 'suburb');
  const budgetBand = stringField(formData, 'budgetBand');
  const preferredStartDate = stringField(formData, 'preferredStartDate');
  const message = stringField(formData, 'message') || `Callback requested${service ? ` for ${service}` : ''}.`;
  const photo = formData.get('photo');

  if (!name || !phone || !submissionType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // POPIA consent is only collected on the full qualification forms
  // (contact page, quote modal). The lightweight callback widget doesn't
  // send this field at all, so it's only enforced when present.
  const popiaConsentRaw = formData.get('popiaConsent');
  if (popiaConsentRaw !== null && popiaConsentRaw !== 'true') {
    return NextResponse.json({ error: 'POPIA consent is required' }, { status: 400 });
  }
  const popiaConsent = popiaConsentRaw === null ? null : true;

  // contact_submissions.submission_type has a CHECK constraint allowing only 'contact' | 'quote'
  const dbSubmissionType = submissionType === 'callback' ? 'contact' : submissionType;

  let photoPath: string | null = null;
  if (photo instanceof File && photo.size > 0) {
    const ext = photo.name.split('.').pop() || 'jpg';
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage.from('lead-uploads').upload(path, photo);
    if (uploadError) {
      console.error('Supabase storage upload error:', uploadError);
    } else {
      photoPath = path;
    }
  }

  const { error: dbError } = await supabase.from('contact_submissions').insert([
    {
      name,
      company: company || null,
      phone,
      email: email || '',
      message,
      service: service || null,
      submission_type: dbSubmissionType,
      suburb: suburb || null,
      budget_band: budgetBand || null,
      preferred_start_date: preferredStartDate || null,
      popia_consent: popiaConsent,
      photo_path: photoPath,
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
        `Suburb: ${suburb || '-'}`,
        `Budget: ${budgetBand || '-'}`,
        `Preferred start date: ${preferredStartDate || '-'}`,
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
