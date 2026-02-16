import validator from 'validator';
import { ResponseProps } from '../definitions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export default class EmailService {
  static async send(formdata: FormData) {
    try {
      const name = formdata.get('name')?.toString();
      const from = formdata.get('from')?.toString();
      const subject = formdata.get('subject')?.toString();
      const message = formdata.get('message')?.toString();

      if (from && !validator.isEmail(from) || !from)
        return { status: "fail", statusCode: 400, message: 'Email must be provided and follow a valid email format' } as ResponseProps;

      if (!subject)
        return { status: 'fail', statusCode: 400, message: "Subject cannot be empty" } as ResponseProps

      if (!name || !validator.isAlpha(name, 'en-US', { ignore: ' ' })) {
        return { status: "fail", statusCode: 400, message: 'Name must be provided and cannot contain numbers or special characters' } as ResponseProps
      }

      await sendMail(name, from, subject, message ?? "");
      return { status: "success", statusCode: 200, message: "Successfully sent email" };
    } catch (error) {
      console.error(error);
      return { status: "fail", statusCode: 500, message: 'An internal server error has occurred while trying to send email' };
    }
  }
}

async function sendMail(name: string, from: string, subject: string, message: string) {
  try {
    const emailMessage = {
      from: `Sindre Gangeskar Portfolio <${process.env.EMAIL!}>`,
      to: process.env.OUTLOOK!,
      subject: subject,
      replyTo: `${name} <${from}>`,
      html: `
      <p style="font-size: 12px; color: darkorange;">${name} has tried to reach you through the contact form on your portfolio</p>
      <hr style="border: 5px solid darkorange; border-radius: 1.25rem;"/>
      <p style="font-size: 12px; color: #1d1d1d;">${message}</p>
      `,
      text: message,
    };
    await resend.emails.send(emailMessage)
  } catch (error) {
    console.error(error);
    throw error;
  }
}
