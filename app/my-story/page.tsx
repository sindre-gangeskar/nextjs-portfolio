import TimelineSummary from "@/components/my-story/TimelineSummary";
import { Stack, Typography } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Story",
	description: 'Short summary of my story from childhood to current time'
}

export default function Page() {
	return (
		<Stack mt={10}>
			<Typography level="h1" textAlign={{ xs: "center", md: "start" }}>
				My
				<ColoredTypography color="primary" level="h1">
					{" "}
					Story
				</ColoredTypography>
			</Typography>
			<TimelineSummary />
		</Stack>
	);
}
