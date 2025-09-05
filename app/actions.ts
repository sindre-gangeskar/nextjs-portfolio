"use server";
import GithubService from "@/lib/services/GithubService";

export async function getFeaturedProjects() {
	try {
		const repositories = await GithubService.getFeaturedRepos();
		return repositories;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getUserProfile() {
	try {
		return await GithubService.getUserProfile();
	} catch (error) {
		console.error(error);
		return null;
	}
}
