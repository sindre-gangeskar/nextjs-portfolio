import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });
	return res.status(200).json({ message: "Welcome to Sindre Gangeskar's portfolio!" });
}
 