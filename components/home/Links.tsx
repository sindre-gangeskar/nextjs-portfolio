"use client";
import { Stack, Button, Typography } from "@mui/joy";
import { EmailRounded, GitHub, LinkedIn } from "@mui/icons-material";
import useUserProfile from "@/hooks/useUserProfile";
import type { SxProps } from "@mui/joy/styles/types";
import type { ProfileProps } from "@/lib/definitions";
import { FaFilePdf } from "react-icons/fa6";
const sharedSx: SxProps = theme => ({
	overflow: 'hidden',
	backdropFilter: 'blur(8px)', minHeight: '3.6rem', minWidth: '3.6rem', '&:before': {
		content: '""', display: 'block', inset: 0, height: '100%',
		position: 'absolute',
		width: '4px',
		background: theme.vars.palette.neutral.solidBg,
		zIndex: -1,
		borderRadius: '1.25rem 0 0 1.25rem',
		left: '-4px',
		transition: 'ease 125ms'
	},
	'&:hover::before, &:focus-visible::before': {
		left: '0px'
	}
});
const scrollToContactForm = () => {
	const height = document.body.scrollHeight;
	window.scrollTo({ top: height, behavior: "smooth" });
};
export const EmailButton = () => (
	<Button variant="outlined" color="neutral" onClick={scrollToContactForm} sx={sharedSx} startDecorator={<EmailRounded />}>
		Contact me
	</Button>
);
export const GitHubButton = ({ data }: { data?: ProfileProps }) => (
	<Button
		component={"a"}
		target="_blank"
		href={data?.html_url}
		startDecorator={<GitHub />}
		variant="outlined"
		color="neutral"
		sx={sharedSx}
	>
		GitHub
	</Button>
);
export const LinkedInButton = () => (
	<Button
		component={"a"}
		target="_blank"
		href="https://linkedin.com/in/sindre-gangeskar"
		startDecorator={<LinkedIn />}
		variant="outlined"
		color="neutral"
		sx={sharedSx}
	>
		LinkedIn
	</Button>
);
export const ResumeButton = () => (<Button
	size="sm"
	variant="outlined"
	color="neutral"
	href={encodeURI("/assets/Sindre Gangeskar - Resumé.pdf")}
	component={"a"}
	target="_blank"
	endDecorator={<FaFilePdf size={20} />}
	rel="noopener noreferrer"
	sx={sharedSx}
>
	<Typography>View Resumé</Typography>
</Button>)
export default function Links() {
	const { data } = useUserProfile();

	return (
		<Stack
			direction={"row"}
			gap={2}
			sx={{
				justifyContent: { xs: "center", md: "start" },
				mt: { xs: 2, md: "" },
			}}
		>
			<GitHubButton data={data} />
			<LinkedInButton />
			<EmailButton />
		</Stack>
	);
}
