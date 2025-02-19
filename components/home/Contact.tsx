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
	const [mailStatus, setMailStatus] = useState(null);
	useGSAP(() => {
		gsap.set(".form-icon", { transform: "translateX(-100%)", opacity: "0", fontSize: "1.2rem" });
		if (mailStatus) gsap.to(".form-icon", { transform: "translateX(0)", opacity: 1, duration: 1.2, ease: "elastic.out" });
	}, [mailStatus, mailSent]);

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

			const { message } = await response.json();

			if (response.ok) {
				formRef.current.reset();
				setMailSuccess(true);
			} else setMailSuccess(false);

			setMailStatus(message);
		}
	};

	return (
		<Card variant="plain" color="primary" sx={{ my: 5, width: "100%", mx: "auto", maxWidth: "500px", background: "none" }}>
			<Stack sx={{ py: 2, alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
				<Typography level="h1" sx={{ alignItems: "center", alignContent: "center" }}>
					{"Send me an"}
					<ColoredTypography color="danger" level="h1" bold={true}>
						{" "}
						email
					</ColoredTypography>
				</Typography>
				<Typography level="body-lg" variant="plain" alignItems={"center"} display={"flex"}>
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
					<Stack direction={"row"} id="form-input" sx={{ position: "relative", width: "fit-content", mx: "auto", alignItems: "center" }}>
						<Button
							variant="soft"
							loading={loading}
							color={mailSent && mailSuccess ? "success" : mailSent && !mailSuccess ? "danger" : "primary"}
							type="submit"
							disabled={mailSent}
							sx={{ width: "fit-content", mx: "auto", minWidth: "75px", padding: 1.5, px: 2 }}>
							{loading ? null : (
								<Typography level="body-sm" sx={{ color: "white", opacity: loading ? 0 : 1 }} endDecorator={!mailSent ? <Send sx={{ fontSize: "inherit" }} /> : ""}>
									{mailSuccess && mailSent ? <Typography>{mailStatus}</Typography> : !mailSuccess && mailSent ? <Typography>{mailStatus}</Typography> : "Send"}
								</Typography>
							)}
						</Button>
						<Box className="form-icon" component={"div"} sx={{ position: "absolute", right: -30 }}>
							{mailSuccess ? <CheckIcon color="success" /> : <ErrorIcon sx={{ color: "red" }} />}
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
}
