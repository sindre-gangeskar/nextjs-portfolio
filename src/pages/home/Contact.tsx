import { Stack, Input, Typography, Button, Textarea, Card } from "@mui/joy";
import { useRef } from "react";
import ColoredTypography from "@/components/ColoredTypography";

export default function ContactForm() {
	const formRef = useRef(null);
	return (
		<Card variant="outlined" color="primary" sx={{ my: 5, width: "100%", mx: "auto" }}>
			<Stack sx={{ py: 2 }}>
				<Typography level="h2">
					Contact{" "}
					<ColoredTypography color="primary" level="h2">
						Me
					</ColoredTypography>
				</Typography>
			</Stack>
			<Stack>
				<Stack ref={formRef} component={"form"} method="post" action={'/api/contact'} gap={2} sx={{ display: "flex", flex: 1, flexDirection: "column", "input, textarea": { padding: 1.5 } }}>
					<Input name="subject" placeholder="Subject"></Input>
					<Input name="firstname" placeholder="Firstname"></Input>
					<Input name="lastname" placeholder="Lastname"></Input>
					<Input name="from" placeholder="Your contact email"></Input>
					<Textarea name="text" placeholder="Your message..."></Textarea>
					<Button type="submit" sx={{ maxWidth: "250px", width: "100%", mx: "auto" }}>
						Submit
					</Button>
				</Stack>
			</Stack>
		</Card>
	);
}
