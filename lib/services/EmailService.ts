import validator from 'validator';
import nodemailer from 'nodemailer';
import { ResponseProps } from '../definitions';
export default class EmailService {
  static async send(formdata: FormData) {
    try {
      const name = formdata.get('name')?.toString();
      const from = formdata.get('from')?.toString();
      const message = formdata.get('message')?.toString();
      if (from && !validator.isEmail(from) || !from)
        return { status: "fail", statusCode: 400, message: 'Email must be provided and follow a valid email format' } as ResponseProps;

      if (!name || !validator.isAlpha(name, 'en-US', { ignore: ' ' })) {
        return { status: "fail", statusCode: 400, message: 'Name must be provided and cannot contain numbers or special characters' } as ResponseProps
      }

      if (process.env.NODE_ENV !== "production") await sendTestMail(name, from, message ?? "");
      else await sendMail(name, from, message ?? "");

      return { status: "success", statusCode: 200, message: "Successfully sent email" };
    } catch (error) {
      console.error(error);
      return { status: "fail", statusCode: 500, message: 'An internal server error has occurred while trying to send email' };
    }
  }
}

async function sendMail(name: string, from: string, message: string) {
  const emailMessage = {
    from: `${name} <${process.env.GMAIL}>`,
    to: `Sindre Gangeskar <${process.env.EMAIL}>`,
    subject: `Contact from portfolio`,
    html: `
      <p>Message: ${message}</p>
      <p><strong>Contact info: ${from}</strong></p>
      `,
    text: message,
  };
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.EMAIL_APP_PASS,
    },
  });
  await transporter.sendMail(emailMessage);
}
async function sendTestMail(name: string, from: string, message: string) {
  nodemailer.createTestAccount((err, account) => {
    if (err) {
      return console.error(err);
    }
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: { user: account.user, pass: account.pass },
    });

    const emailMessage = {
      from: `${name} <${from}>`,
      to: `<${process.env.EMAIL}>`,
      subject: `Contact from portfolio`,
      text: `${message}`,
    };

    transporter.sendMail(emailMessage, (err, info) => {
      if (err) { return console.error(err) }
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
}