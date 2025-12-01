"use client";
import { Stack, Button } from "@mui/joy";
import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";
import LinkedInButton from "../ui/LinkedInButton";
export default function Links() {
	const scrollToContactForm = () => {
		const height = document.body.scrollHeight;
		window.scrollTo({ top: height, behavior: "smooth" });
	};
	return (
		<Stack direction={"row"} gap={2} sx={{ alignItems: "flex-end", justifyContent: "end" }}>
			<Button component={"a"} target="_blank" href="https://github.com/sindre-gangeskar" startDecorator={<GitHub />} variant="soft" color="neutral">
				Github
			</Button>
			<LinkedInButton />
			<Button variant="soft" color="danger" onClick={scrollToContactForm}>
				<EmailRounded />
			</Button>
		</Stack>
	);
}
