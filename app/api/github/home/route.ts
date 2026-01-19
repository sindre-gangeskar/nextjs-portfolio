import GithubService from "@/lib/services/GithubService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { featured } = await GithubService.getRepos();
    const userData = await GithubService.getUserProfile();
    return NextResponse.json({ repositories: featured, userData: userData }, { status: 200, headers: { 'Cache-Control': 'public, s-maxage=10800, max-age=10800, stale-while-revalidate=60' } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ repositories: [], userData: null }, { status: 500 });
  }
}