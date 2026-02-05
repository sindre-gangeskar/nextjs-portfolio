import { Skeleton } from "@mui/joy";

export default function ProfileAvatarSkeleton() {
	return <Skeleton animation={"pulse"} height={325} width={325} variant="circular" sx={{ display: { xs: "none", md: "inherit" } }}></Skeleton>;
}
