import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, phone, vacancyTitle, motivation, notes, cvUrl } = await req.json();

    if (!name || !email || !phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const subject = vacancyTitle
      ? `Jauns pieteikums: ${vacancyTitle} — ${name}`
      : `Jauns pieteikums nākotnes iespējām — ${name}`;

    const body = `
<h2>Jauns darba pieteikums</h2>
<p><strong>Vakance:</strong> ${vacancyTitle || 'Pieteikums nākotnes iespējām'}</p>
<p><strong>Vārds, uzvārds:</strong> ${name}</p>
<p><strong>E-pasts:</strong> ${email}</p>
<p><strong>Telefons:</strong> ${phone}</p>
${motivation ? `<p><strong>Motivācijas vēstule:</strong></p><p>${motivation}</p>` : ''}
${notes ? `<p><strong>Piezīmes:</strong></p><p>${notes}</p>` : ''}
${cvUrl ? `<p><strong>CV:</strong> <a href="${cvUrl}">${cvUrl}</a></p>` : ''}
`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: 'firmagrafa@gmail.com',
      subject,
      body,
    });

    const confirmBody = `
<h2>Paldies par Jūsu pieteikumu!</h2>
<p>Labdien, ${name}!</p>
<p>Mēs saņēmām Jūsu pieteikumu${vacancyTitle ? ` vakancei "${vacancyTitle}"` : ' nākotnes iespējām'}.</p>
<p>Mēs izskatīsim Jūsu pieteikumu un sazināsimies ar Jums tuvākajā laikā.</p>
<br>
<p>Ar cieņu,<br>SIA firma GRĀFA</p>
`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: email,
      subject: 'Pieteikums saņemts — SIA firma GRĀFA',
      body: confirmBody,
      from_name: 'SIA firma GRĀFA',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});