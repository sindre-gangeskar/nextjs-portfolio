import { Button } from "@mui/joy";
import { LinkedIn } from "@mui/icons-material";
export default function LinkedInButton() {
	return (
		<Button component={"a"} target="_blank" href="https://linkedin.com/in/sindre-gangeskar" startDecorator={<LinkedIn />} variant="soft" color="primary">
			LinkedIn
		</Button>
	);
}
