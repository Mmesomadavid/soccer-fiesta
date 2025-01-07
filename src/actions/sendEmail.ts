'use server'

import { Resend } from 'resend';

const resend = new Resend('re_YOUR_RESEND_API_KEY');

export async function sendEmail(formData: FormData) {
  try {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phone = formData.get('phone');
    const phone2 = formData.get('phone2');
    const email = formData.get('email');
    const instagram = formData.get('instagram');
    const reason = formData.get('reason');
    const country = formData.get('country');
    const state = formData.get('state');
    const height = formData.get('height');
    const weight = formData.get('weight');
    const preferredFoot = formData.get('preferredFoot');
    const preferredWing = formData.get('preferredWing');
    const video = formData.get('video') as File;

    const { data, error } = await resend.emails.send({
      from: 'Soccer Fiesta <noreply@soccerfiesta.com>',
      to: 'chukwunoyelummesoma1@gmail.com',
      subject: 'New Player Registration',
      html: `
        <h1>New Player Registration</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Secondary Phone:</strong> ${phone2 || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Instagram:</strong> ${instagram}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Height:</strong> ${height}cm</p>
        <p><strong>Weight:</strong> ${weight}kg</p>
        <p><strong>Preferred Foot:</strong> ${preferredFoot}</p>
        <p><strong>Preferred Wing:</strong> ${preferredWing}</p>
      `
    });

    if (error) {
      return { error: 'Failed to send email' };
    }

    return { success: true };
  } catch (error) {
    return { error: 'Failed to send email' };
  }
}
