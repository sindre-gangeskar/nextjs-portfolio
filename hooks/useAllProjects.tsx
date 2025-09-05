import { getAllProjects } from "@/app/projects/actions";
import { RepoType } from "@/lib/definitions";
import useSWR from "swr";

export function useAllProjects() {
	const { data, error, isLoading } = useSWR<RepoType[]>("all-projects", getAllProjects);
	return { data, error, isLoading };
}
