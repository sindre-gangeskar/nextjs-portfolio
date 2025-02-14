import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import validator from "validator";
export default async function (req: NextApiRequest, res: NextApiResponse) {
	const body = req.body;

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
	try {
		/* 		const testAccount = nodemailer.createTestAccount((err, account) => {
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
				from: "Sender Name <sender@example.com",
				to: "Recipient <recipient@example.com",
				subject: "Test Subject",
				text: "This is a test",
				html: "<h1>Hii!</h1><br></br><p>This is a test</p>",
			};

			transporter.sendMail(message, (err, info) => {
				if (err) {
					return console.error(err);
				}
				console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
			});
		});
 */
		if (!validator.isEmail(req.body.from)) return res.status(401).json({ message: "Invalid email format" });
		if (!validator.isAlphanumeric(req.body.firstname) || !validator.isAlphanumeric(req.body.lastname)) return res.status(401).json({ message: "Please check the name fields for invalid data" });

		const message = {
			from: `${req.body.firstname} ${req.body.lastname} <${process.env.GMAIL}>`,
			to: `Sindre Gangeskar <${process.env.EMAIL}>`,
			subject: `Contact Subject: ${req.body.subject}`,
			html: `
			<h3>${req.body.subject}</h3>
			<p>Message: ${req.body.text}</p>
			<p><strong>Contact info: ${req.body.from}</strong></p>
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

		return res.status(200).json({ message: "Email successully sent" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "An internal server error has occurred, please try again later" });
	}
}
