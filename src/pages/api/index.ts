import { NextApiRequest, NextApiResponse } from "next";

export default async function(req: NextApiRequest, res: NextApiResponse) {
	await fetch("http://localhost:3000/", { method: "GET", headers: { "Content-Type": "application/json", accept: "application/json" } });
	return res.status(200).json({ message: "Welcome to Sindre Gangeskar's portfolio!" });
}
