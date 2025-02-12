import { Stack, Container, Typography, Textarea } from "@mui/joy";
export default function Resume() {
	return (
		<Container component={"main"} sx={{ p: { xs: 10, sm: 15 } }}>
			<Stack sx={{ mx: { xs: 0, md: 15 } }}>
				<Stack direction={"column"}>
					<Typography level="h1">Sindre Gangeskar</Typography>
					<Typography level="body-lg">Backend Developer</Typography>
				</Stack>
				<Stack sx={{ mt: 1 }}>
					<Typography level="body-sm">
						I'm a backend developer with full-stack capabilities skilled in building robust, and scalable RESTful applications with modern front-end frameworks. I specialize in developing efficient APIs, managing
						databases and implementing robust authentication methods. I prioritize clean and maintainable code and thorough API documentation.
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
}
