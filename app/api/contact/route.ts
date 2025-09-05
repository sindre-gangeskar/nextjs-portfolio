import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";
import { FormType } from "@/lib/definitions";
export async function GET() {
	try {
		return NextResponse.json({ message: "Hi! This is the contact api request" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "An internal server error has occurred" }, { status: 200 });
	}
}
export async function POST(req: NextRequest) {
	try {
		const { from, name, message }: FormType = await req.json();
		if (!validator.isEmail(from)) return NextResponse.json({ message: "Email provided is in an invalid format" }, { status: 401 });
		if (!validator.isAlpha(name, "en-US", { ignore: " " })) return NextResponse.json({ message: "Name field cannot contain any numbers or special characters" }, { status: 401 });

		if (process.env.NODE_ENV === "production") await sendMail({ name, from, message });
		else await sendTestMail({ name, from, message });
		return NextResponse.json({ message: "Email successully sent" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Failed to send email, please try again later." }, { status: 500 });
	}
}
async function sendMail(body: FormType) {
	const message = {
		from: `${body.name} <${process.env.GMAIL}>`,
		to: `Sindre Gangeskar <${process.env.EMAIL}>`,
		subject: `Contact from portfolio`,
		html: `
			<p>Message: ${body.message}</p>
			<p><strong>Contact info: ${body.from}</strong></p>
			`,
		text: body.message,
	};
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.EMAIL_APP_PASS,
		},
	});
	await transporter.sendMail(message);
}
async function sendTestMail(body: FormType) {
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

		const message = {
			from: `${body.name} <${body.from}>`,
			to: `<${process.env.EMAIL}>`,
			subject: `Contact from portfolio`,
			text: `${body.message}`,
		};

		transporter.sendMail(message, (err, info) => {
			if (err) {
				return console.error(err);
			}
			console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		});
	});
}
