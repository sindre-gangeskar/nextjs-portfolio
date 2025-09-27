import TimelineSummary from "@/components/my-story/TimelineSummary";
import { Stack, Typography } from "@mui/joy";
import ColoredTypography from "@/components/ui/ColoredTypography";
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
