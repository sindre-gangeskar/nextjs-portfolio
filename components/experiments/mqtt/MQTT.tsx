"use client";
import ColoredTypography from "@/components/ui/ColoredTypography";
import { List, ListItem, ListItemContent, Stack, Typography, Card, CardContent } from "@mui/joy";
import MQTTMessage from "./MQTTMessage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GoBackButton from "@/components/ui/GoBackButton";

export default function MQTT() {
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.set("#description, #message-container, #go-back-btn, #mqtt-message", {
			opacity: 0,
			x: 250,
			filter: "blur(16px)",
		});
		tl.to("#description, #message-container, #go-back-btn, #mqtt-message", {
			opacity: 1,
			x: 0,
			delay: 0.1,
			stagger: 0.125,
			filter: "blur(0px)",
			duration: 1.1,
			ease: "power4.out",
		});
	}, []);

	return (
		<Stack mt={10}>
			<Typography level="h1">
				Experiment{" "}
				<ColoredTypography level="h1" color="primary">
					MQTT
				</ColoredTypography>
			</Typography>
			<Typography id="description" level="title-sm">
				Experiment with MQTT messages by utilizing a public broker to quickly access test data with a custom test topic.
			</Typography>
			<GoBackButton id="go-back-btn" sx={{ mt: 2 }} />
			<Card id={"message-container"} sx={{ mt: 5 }}>
				<CardContent>
					<Typography level="title-sm" mt={2}>
						Test by utilizing{" "}
						<Typography color="primary" sx={{ textDecoration: "underline" }} component={"a"} target="_blank" href="https://mqtt-explorer.com/">
							MQTT Explorer
						</Typography>{" "}
						with the following settings
					</Typography>
					<List>
						<ListItem>
							<ListItemContent>
								<Typography level="title-sm">Host: broker.hivemq.com</Typography>
							</ListItemContent>
						</ListItem>
						<ListItem>
							<ListItemContent>
								<Typography level="title-sm">Websocket: 8884</Typography>
								<Typography level="title-sm">TLS TCP: 8883</Typography>
							</ListItemContent>
						</ListItem>
						<ListItem>
							<ListItemContent>
								<Typography level="title-sm">Topic: mqtt_test_data/a6c072abf6ef07cc</Typography>
							</ListItemContent>
						</ListItem>
					</List>
				</CardContent>
			</Card>
			<MQTTMessage id="mqtt-message" />
		</Stack>
	);
}
