import { Skeleton } from "@mui/joy";

export default function ProfileAvatarSkeleton({ size = 300 }: { size?: number }) {
	return (
		<Skeleton
			animation={"pulse"}
			height={size}
			width={size}
			variant="rectangular"
			sx={{ borderRadius: "1.25rem" }}
		/>
	);
}
