import { AspectRatio, Card, CardContent, CardOverflow, Skeleton, Stack } from "@mui/joy";

export default function TileSkeleton() {
	return (
		<Card sx={{ position: "relative", textAlign: "start", width: 350, height: 425, minHeight: { xs: "fit-content" }, borderRadius: "0.25rem", zIndex: 1 }}>
			<CardOverflow>
				<AspectRatio ratio={2}>
					<Skeleton variant="rectangular" height={100}></Skeleton>
				</AspectRatio>
			</CardOverflow>
			<CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Stack gap={1} >
					<Skeleton variant="text" width={"100%"} height={20}></Skeleton>
					<Skeleton variant="text" width={"100%"} height={10}></Skeleton>
					<Skeleton variant="text" width={"75%"} height={10}></Skeleton>
				</Stack>
				<Stack>
					<Skeleton variant="text" width={"100%"} height={10}></Skeleton>
				</Stack>
			</CardContent>
		</Card>
	);
}
