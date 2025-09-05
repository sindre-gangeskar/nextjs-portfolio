import { Skeleton } from "@mui/joy";

export default function ProfileAvatarSkeleton() {
	return <Skeleton animation={"pulse"} height={350} width={350} variant="circular" sx={{ display: { xs: "none", md: 'inherit' } }}></Skeleton>;
}
