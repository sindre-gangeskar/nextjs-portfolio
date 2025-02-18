import { NextResponse } from "next/server";

export async function GET() {
	try {
		return NextResponse.json({ message: "Welcome to Sindre Gangeskar's portfolio!" }, { status: 200 });
	} catch (error) {
		console.error(error);
	}
}
 