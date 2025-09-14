import { Container, Stack, Typography } from "@mui/joy";
import ColoredTypography from "../ui/ColoredTypography";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";
export default function HomePage() {
	return (
		<Container>
			<Hero />
			<TechStack />
			<Stack mt={15}>
				<Typography level="h1" mb={{ xs: 3, md: 3 }} mx={5} textAlign={{ xs: "center", md: "end" }}>
					Featured
					<ColoredTypography color="primary" level="h1">
						{" "}
						Projects
					</ColoredTypography>
				</Typography>
				<FeaturedProjects />
			</Stack>
			<ContactForm />
		</Container>
	);
}
