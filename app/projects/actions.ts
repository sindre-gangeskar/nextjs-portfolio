"use server"
import GithubService from "@/lib/services/GithubService";

export async function getAllProjects() {
  try {
    return await GithubService.getAllRepos();
  } catch (error) {
    console.error(error);
    return [];
  }
}