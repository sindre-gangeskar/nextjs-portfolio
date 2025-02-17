import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
	try {
		const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
		const { data } = await octokit.request("GET /users/{username}", { username: "sindre-gangeskar" });
		return NextResponse.json(data, { headers: { "Cache-Control": "public, max-age=10800, stale-while-revalidate=300" }, status: 200 });
	} catch (error) {
		console.error(error);
		throw new Error("An internal server error has occurred while trying to fetch github user data");
	}
}
