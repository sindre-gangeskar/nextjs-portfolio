import { Stack, Typography, Card, Chip } from "@mui/joy";
import ColoredTypography from "@/components/global/ColoredTypography";
import { SiJavascript } from "react-icons/si";
export default function TechStack() {
	return (
		<Stack component={"section"} sx={{ mt: 15, textAlign: "end" }}>
			<Typography level="h1">
				Tech <ColoredTypography level="h1">Stack & Skills</ColoredTypography>
			</Typography>
			<Stack direction={"row"} mt={5} gap={2} sx={{ display: "flex", justifyContent: "center", justifyItems: "center", flexWrap: "wrap" }}>
				<Chip
					variant="outlined"
					startDecorator={<SiJavascript style={{ alignSelf: "center", padding: 0, margin: 0 }} />}
					color="success"
					sx={{ display: "grid", height: "fit-content", justifyContent: "center", minWidth: "100px" }}></Chip>
			</Stack>
		</Stack>
	);
}
