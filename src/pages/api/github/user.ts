import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default async function get(req: NextApiRequest, res: NextApiResponse) {
	try {
		const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    const { data } = await octokit.request("GET /users/{username}", { username: "sindre-gangeskar" });
    return res.status(200).json(data);
	} catch (error) {
		console.error(error);
		throw new Error("An internal server error has occurred while trying to fetch github user data");
	}
}
