import { Card, Skeleton } from "@mui/joy";
import { SxProps } from "@mui/material";

export default function ProjectSkeleton({ sx }: { sx: SxProps }) {
	return (
		<Card sx={{...sx, }}>
			<Skeleton width={"30%"} height={12} variant="text"></Skeleton>
			<Skeleton width={"100%"} height={8} variant="text"></Skeleton>
			<Skeleton width={"100%"} height={8} variant="text"></Skeleton>
			<Skeleton width={"100%"} height={8} variant="text"></Skeleton>
		</Card>
	);
}
