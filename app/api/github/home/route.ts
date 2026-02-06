import GithubService from "@/lib/services/GithubService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest): Promise<NextResponse> {
  try {
    const  { featured, owner }  = await GithubService.getGitHubData()
    return NextResponse.json({ repositories: featured, owner: owner }, { status: 200, headers: { 'Cache-Control': 'public, s-maxage=10800, max-age=0, stale-while-revalidate=60' } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ repositories: [], userData: null }, { status: 500 });
  }
}