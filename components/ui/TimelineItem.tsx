"use client";
import { TimelineProps } from "@/lib/definitions";
import { AspectRatio, Box, Card, CardContent, CardOverflow, Divider, Typography } from "@mui/joy";
import Image from "next/image";
export default function TimelineItem({ title, timeline, imgUrl, description }: TimelineProps) {
	return (
	<Box
		component={"li"}
		sx={theme => ({
			display: "grid",
			width: "100%",
			position: "relative",
			gridColumn: "1 / -1",
			justifyContent: { xs: "center", lg: "inherit" },
			"&:nth-of-type(even) > .timeline-item": {
				gridColumn: "1/2",
				justifySelf: "start",
			},
			"&:nth-of-type(odd) > .timeline-item": {
				gridColumn: "3/4",
				justifySelf: "end",
			},
			"&::before": {
				content: '""',
				display: { xs: "none", lg: "block" },
				position: "absolute",
				border: `1px solid ${theme.palette.primary.solidBg}`,
				mx: "auto",
				backgroundColor: theme.palette.primary.solidBg,
				width: "10px",
				aspectRatio: 1,
				left: "50%",
				zIndex: 1,
				p: 0,
				transform: { xs: "translate(-50%, -200%)", lg: "translate(-50%, -50%)" },
				borderRadius: "50%",
				top: { xs: "0%", lg: "50%" },
			},
		})}>
		<Card
			className={"timeline-item"}
			variant="outlined"
			sx={theme => ({
				position: "relative",
				width: { xs: "100%", sm: "450px" },
				boxShadow: `0px 0px 12px ${theme.palette.neutral.softHoverBg}`,
			})}>
			{imgUrl && (
				<CardOverflow>
					<AspectRatio ratio={2}>
						<Image src={imgUrl} alt="image" width={100} height={100} quality={100} />
					</AspectRatio>
				</CardOverflow>
			)}
			<CardOverflow variant="plain">
				<CardContent sx={{ flexDirection: "row", p: 0, justifyContent: "space-between" }}>
					<Typography level={"title-sm"}>{title}</Typography>
					<Divider orientation="vertical" inset="none" />
					<Typography className="timeline-title" level="title-sm" sx={{ top: 0, position: "relative" }}>
						{timeline?.from} - {timeline?.to}
					</Typography>
				</CardContent>
			</CardOverflow>
			<CardOverflow variant="soft">
				<Divider inset="context" />
				<CardContent>
					{description &&
						description.map((d, i) => (
							<Box key={i}>
								<Typography level="body-sm">{d}</Typography>
								{description.length > 1 && i !== description.length - 1 && <br />}
							</Box>
						))}
				</CardContent>
			</CardOverflow>
		</Card>
	</Box>
);
}
