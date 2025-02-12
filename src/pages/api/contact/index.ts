import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const body = req.body;

	switch (req.method) {
		case "GET":
			return await GET(req, res);
		case "POST":
			return await POST(req, res, body);
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

async function POST(req: NextApiRequest, res: NextApiResponse, body: {}) {
	try {
		return res.status(200).json({ messasge: "You just made a post request, heck yeah! 🙋🏼‍♂️", body: body });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "An internal server error has occurred, please try again later" });
	}
}
