import { Card, CardContent, Skeleton, Stack } from "@mui/joy";

export default function TileSkeleton() {
	return (
		<Card sx={{ position: "relative", textAlign: "start", width: { xs: "100%", md: 350 }, height: { xs: "100%", md: 175 }, minHeight: { xs: "fit-content" }, borderRadius: "0.25rem", zIndex: 1 }}>
			<CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
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
