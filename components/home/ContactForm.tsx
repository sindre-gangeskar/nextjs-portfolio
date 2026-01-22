"use client";
import { Stack, Input, Typography, Button, Textarea, Card, CardContent, Box, useTheme } from "@mui/joy";

import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

import ColoredTypography from "@/components/ui/ColoredTypography";
import { EmailRounded, MailRounded, Person2Rounded, Send } from "@mui/icons-material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useActionState, useEffect, useState } from "react";
import { sendEmail } from "@/app/actions";
export default function ContactForm() {
	const [state, dispatch, isPending] = useActionState(sendEmail, null);
	const [ countdown, setCountdown ] = useState(0);
	const theme = useTheme();
	useGSAP(() => {
		if (state) {
			gsap.set(".form-message", { opacity: 0, fontSize: "1.2rem" });
			gsap.to(".form-message", { opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 });
			setCountdown(5);
		}
	}, [state]);

	useEffect(() => {
		if (state) {
			const countdownIntervalId = setInterval(() => {
				setCountdown(prevValue => prevValue - 1);
			}, 1000);

			return () => clearInterval(countdownIntervalId);
		}
	}, [state, countdown]);

	return (
		<Stack mb={10} gap={2}>
			<Card variant="outlined" color="neutral" sx={{ mt: 5, width: "100%", mx: "auto", maxWidth: "500px", background: "none", backdropFilter: 'blur(8px)' }}>
				<CardContent sx={{p: 2}}>
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<Typography level="h1" sx={{ alignItems: "center", alignContent: "center" }}>
							{"Send me an "}
							<ColoredTypography color="danger" level="h1" bold={true}>
								{" "}
								email
							</ColoredTypography>
						</Typography>
						<MailRounded sx={{ fontSize: "2rem", color: theme.vars.palette.text.secondary }} />
					</Box>
					<Stack id="contact-form" component={"form"} action={dispatch} gap={2} sx={{ display: "flex", flex: 1, flexDirection: "column", "input, textarea": { padding: 1.5 } }}>
						<Input variant="soft" startDecorator={<Person2Rounded />} sx={{}} className="form-input" name="name" placeholder="Your name" required autoComplete="name"></Input>
						<Input variant="soft" startDecorator={<EmailRounded />} sx={{}} type="email" className="form-input" name="from" placeholder="Your email address" required autoComplete="email"></Input>
						<Textarea variant="soft" minRows={4} maxRows={4} sx={{ maxHeight: "96px" }} className="form-input" name="message" placeholder="Your message..." required></Textarea>

						<Stack direction={"column"} id="form-input" sx={{ position: "relative", width: "fit-content", mx: "auto", alignItems: "center" }}>
							<Button variant="soft" loading={isPending} color={"primary"} type="submit" disabled={isPending || countdown > 0} sx={{ mx: "auto", padding: 1.5, px: 2 }}>
								{isPending ? null : (
									<Typography color="primary" level="body-sm" sx={{ opacity: isPending ? 0 : 1 }} endDecorator={<Send />}>
										Send
									</Typography>
								)}
							</Button>
						</Stack>
					</Stack>
				</CardContent>
			</Card>

			{state && state.message && (
				<Typography
					level="title-sm"
					textAlign={"center"}
					mx={"auto"}
					className="form-message"
					color={state.status === "success" ? "success" : "danger"}
					endDecorator={state && state?.status === "success" ? <CheckIcon color="success" /> : <ErrorIcon color="error" />}>
					{state.message}
				</Typography>
			)}

			{countdown > 0 && (
				<Typography variant="soft" p={2} borderRadius={"0.5rem"} level="title-sm" color="warning" mt={2} mx={"auto"}>
					Can send again in {countdown} {countdown > 1 ? "seconds" : "second"}
				</Typography>
			)}
		</Stack>
	);
}
