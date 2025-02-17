import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import validator from "validator";
interface formTypes {
	from: string;
	name: string;
	message: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET":
			return await GET(req, res);
		case "POST":
			return await POST(req, res);
		default:
			return res.status(405).json({ message: "Method not allowed" });
	}
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		return res.status(200).json({ message: "Hi! This is the contact api request" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "An internal server error has occurred, please try again later" });
	}
}
async function POST(req: NextApiRequest, res: NextApiResponse) {
	const env = "production";
	try {
		if (!validator.isEmail(req.body.from)) return res.status(401).json({ message: "Email provided is in an invalid format" });
		if (!validator.isAlpha(req.body.name, "en-US", { ignore: " " })) return res.status(401).json({ message: "Only letters are accepted in the name field." });

		if (env !== "production") await sendMail(req.body);
		else await sendTestMail(req.body);
		return res.status(200).json({ message: "Email successully sent" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Failed to send email, please try again later." });
	}
}
async function sendMail(body: formTypes) {
	const message = {
		from: `${body.name} <${process.env.GMAIL}>`,
		to: `Sindre Gangeskar <${process.env.EMAIL}>`,
		subject: `Contact from portfolio`,
		html: `
			<p>Message: ${body.message}</p>
			<p><strong>Contact info: ${body.from}</strong></p>
			`,
	};
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL,
			pass: process.env.EMAIL_APP_PASS,
		},
	});
	const info = await transporter.sendMail(message);
	console.log(info);
}
async function sendTestMail(body: formTypes) {
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
