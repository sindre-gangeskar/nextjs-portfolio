import { getFeaturedProjects } from "@/app/actions";
import { RepoType } from "@/lib/definitions";
import useSWR from "swr";

export default function useFeaturedProjects() {
	const { data, error, isLoading } = useSWR<RepoType[] | null>("featured-projects", getFeaturedProjects);
	return { data, error, isLoading };
}
