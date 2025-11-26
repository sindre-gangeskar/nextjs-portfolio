"use client";
import { RepoType } from "@/lib/definitions";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());
export default function useFeaturedProjects() {
	const { data, error, isLoading } = useSWR<{ repositories: RepoType[] } | null>("/api/github/home", fetcher);
	return { data: data?.repositories, error, isLoading };
}
