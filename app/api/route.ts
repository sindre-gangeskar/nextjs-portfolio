import { NextResponse } from "next/server";

export async function GET () {
	return NextResponse.json({ message: "Welcome to Sindre Gangeskar's portfolio!" }, { status: 200 });
}
 