import GithubService from "@/lib/services/GithubService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const projects = await GithubService.getAllRepos();
    return NextResponse.json(projects, { status: 200, headers: { 'Cache-Control': 'public, s-maxage=10800, max-age=10800, stale-while-revalidate=60' } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ projects: [] }, { status: 500 });
  }
}