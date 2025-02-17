import { Stack, Input, Typography, Button, Textarea, Card, Box } from "@mui/joy";
import { FormEvent, useRef, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

import ColoredTypography from "@/components/ColoredTypography";
import { EmailRounded, MailRounded, Person2Outlined, Send } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ContactForm() {
	const [loading, setIsLoading] = useState(false);
	const [mailSuccess, setMailSuccess] = useState(false);
	const [mailSent, setMailSent] = useState(false);
	const [mailFeedback, setMailFeedback] = useState("");

	useGSAP(() => {
		gsap.set(".form-icon", { transform: "translateX(-100%)", opacity: "0" });
		if (mailSent) gsap.to(".form-icon", { transform: "translateX(0)", opacity: 1, duration: 1.2, ease: "elastic.out" });
	}, [mailSent]);

	const formRef = useRef<HTMLFormElement>(null);
	const sendMail = async (e: FormEvent) => {
		if (formRef.current) {
			setIsLoading(true);
			const formData = new FormData(formRef.current);
			const body = Object.fromEntries(formData.entries());
			e.preventDefault();
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json", accept: "application/json" },
				body: JSON.stringify(body, null, 2),
			});
			setIsLoading(false);
			setMailSent(true);
			const data = await response.json();
			setMailFeedback(data.message);

			if (response.ok) {
				formRef.current.reset();
				setMailSuccess(true);
			} else setMailSuccess(false);
		}
	};

	return (
		<Card variant="plain" color="primary" sx={{ my: 5, width: "100%", mx: "auto", maxWidth: "500px", background: "none" }}>
			<Stack sx={{ py: 2, alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
				<Typography level="h1" sx={{ alignItems: "center", alignContent: "center" }}>
					{"Want to "}
					<ColoredTypography color="danger" level="h1" bold={true}>
						{" "}
						chat?
					</ColoredTypography>
				</Typography>
				<Typography p={0} m={0} level="h3" variant="plain">
					<MailRounded />
				</Typography>
			</Stack>
			<Stack>
				<Stack
					id="contact-form"
					component={"form"}
					ref={formRef}
					method="post"
					action={"/api/contact"}
					onSubmit={async e => {
						await sendMail(e);
					}}
					gap={2}
					sx={{ display: "flex", flex: 1, flexDirection: "column", "input, textarea": { padding: 1.5 } }}>
					<Input variant="soft" startDecorator={<Person2Outlined />} sx={{}} className="form-input" name="name" placeholder="Your name" required autoComplete="name"></Input>
					<Input variant="soft" startDecorator={<EmailRounded />} sx={{}} type="email" className="form-input" name="from" placeholder="Your email address" required autoComplete="email"></Input>
					<Textarea variant="soft" minRows={4} maxRows={4} sx={{ maxHeight: "96px" }} className="form-input" name="message" placeholder="Your message..." required></Textarea>
					<Stack direction={"row"} id="form-input" sx={{ width: "60%", mx: "auto", alignItems: "center", gap: 2 }}>
						<Button
							variant="solid"
							component={"button"}
							loading={loading}
							color={mailSent && mailSuccess ? "success" : mailSent && !mailSuccess ? "danger" : "primary"}
							type="submit"
							disabled={mailSent && mailSuccess}
							sx={{ width: "100%", padding: 2, color: loading ? "transparent" : "initial" }}>
							<Typography sx={{ color: "white" }} endDecorator={!mailSent ? <Send /> : ""}>
								{mailSuccess ? mailFeedback : mailSent && !mailSuccess ? mailFeedback : "Submit"}
							</Typography>
						</Button>
						<Box component="div" className="form-icon" sx={{ fontSize: "1.3rem" }}>
							{mailSuccess && mailSent ? <CheckIcon color="success" /> : <ErrorIcon color="error" />}
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
}
