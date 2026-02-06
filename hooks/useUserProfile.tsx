"use client";
import { ProfileProps } from "@/lib/definitions";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function useUserProfile() {
	const { data, error, isLoading } = useSWR<{ owner: ProfileProps }>("/api/github/home", fetcher);
	return { data: data?.owner, error, isLoading };
}
