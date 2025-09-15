import { Box } from "@mui/joy";

export default function GridContainer({ children }: { children: React.ReactNode }) {
	return (
		<Box id={"featured-projects"} sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", justifyContent: "center", width: "100%" }}>
			{children}
		</Box>
	);
}
