"use client";
import { RepoType } from "@/lib/definitions";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useAllProjects() {
	const { data, error, isLoading } = useSWR<RepoType[] | null>("/api/github/projects", fetcher);
	return { data, error, isLoading };
}
