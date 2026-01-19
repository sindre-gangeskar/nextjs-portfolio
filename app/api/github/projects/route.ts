import GithubService from "@/lib/services/GithubService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { all } = await GithubService.getRepos();
    return NextResponse.json(all, { status: 200, headers: { 'Cache-Control': 'public, s-maxage=10800, max-age=0, stale-while-revalidate=10' } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ projects: [] }, { status: 500 });
  }
}