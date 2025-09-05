import { getUserProfile } from "@/app/actions";
import useSWR from "swr";
export default function useUserProfile() {
	const { data, error, isLoading } = useSWR("user-profile", getUserProfile);
	return { data, error, isLoading };
}
