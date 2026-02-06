"use client";
import { Stack, Button } from "@mui/joy";
import { EmailRounded, GitHub } from "@mui/icons-material";
import LinkedInButton from "../ui/LinkedInButton";
import useUserProfile from "@/hooks/useUserProfile";
export default function Links() {
	const { data } = useUserProfile();
	const scrollToContactForm = () => {
		const height = document.body.scrollHeight;
		window.scrollTo({ top: height, behavior: "smooth" });
	};
	return (
		<Stack direction={"row"} gap={2} sx={{ alignItems: "flex-end", justifyContent: {xs: 'center', md: 'end'}, mt: {xs: 2, md: ''} }}>
			<Button component={"a"} target="_blank" href={data?.html_url} startDecorator={<GitHub />} variant="soft" color="neutral">
				GitHub
			</Button>
			<LinkedInButton />
			<Button variant="soft" color="danger" onClick={scrollToContactForm}>
				<EmailRounded />
			</Button>
		</Stack>
	);
}
