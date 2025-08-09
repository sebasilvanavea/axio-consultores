// Minimal Handler type to avoid external type dependency
export type Handler = (event: any) => Promise<{ statusCode: number; body: string }>;

// HTML email template (simple, inline styles)
const htmlTemplate = (data: Record<string, any>) => `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;background:#f7f5f2;padding:24px;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e6e0d8;overflow:hidden">
      <tr>
        <td style="padding:20px 24px;background:#b08968;color:#fff;font-weight:700;font-size:18px">
          MBS Consultores — Nueva consulta de contacto
        </td>
      </tr>
      <tr>
        <td style="padding:24px 24px 8px 24px;color:#111827;font-size:16px;">
          <p style="margin:0 0 8px 0">Has recibido una nueva consulta desde el sitio web.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px 24px">
          <table width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;color:#374151">
            ${Object.entries(data).map(([key, value]) => `
              <tr>
                <td style="padding:10px 12px;width:160px;background:#faf7f2;border:1px solid #eee;font-weight:600;text-transform:capitalize">${key}</td>
                <td style="padding:10px 12px;border:1px solid #eee;background:#fff">${String(value).replace(/</g,'&lt;').replace(/>/g,'&gt;')}</td>
              </tr>
            `).join('')}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px;background:#f8fafc;color:#6b7280;font-size:12px">
          Este mensaje fue generado automáticamente por Netlify Functions.
        </td>
      </tr>
    </table>
  </div>
`;

export const handler: Handler = async (event) => {
  try {
    // Verify Netlify submission-created event
    if (event.headers && event.headers['x-netlify-event'] !== 'submission-created') {
      return { statusCode: 400, body: 'Not a submission-created event' };
    }

    const payload = JSON.parse(event.body || '{}');
    const submission = payload?.payload || {};

    // Extract form data
    const formName = submission?.form_name || 'contact';
    const data = submission?.data || {};

    // Build HTML
    const html = htmlTemplate({ form: formName, ...data });

    // Send using Resend
    const apiKey = process.env.RESEND_API_KEY as string | undefined;
    const to = (process.env.CONTACT_TO_EMAIL as string | undefined) || 'silvanavea@gmail.com';
    const from = (process.env.MAIL_FROM as string | undefined) || 'MBS Consultores <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('RESEND_API_KEY missing. Skip sending.');
      return { statusCode: 200, body: 'No API key; skipped email.' };
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Nueva ${formName} — ${data.subject || data.asunto || 'Consulta'}`,
        html,
        reply_to: data.email || undefined
      })
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Resend error:', text);
      return { statusCode: 500, body: 'Failed to send email' };
    }

    return { statusCode: 200, body: 'Email sent' };
  } catch (err: any) {
    console.error('Function error', err);
    return { statusCode: 500, body: 'Server error' };
  }
};
