"use client";
import { Typography } from "@mui/joy";
import mqtt from "mqtt";
import { useState, useEffect } from "react";
export default function MQTTMessage({ id }: { id?: string }) {
	const [message, setMessage] = useState("Waiting for updates");
	useEffect(() => {
		const client = mqtt.connect("ws://test.mosquitto.org:8080");
		client.on("connect", () => {
			setMessage("Connected to broker");
			client.subscribe("mqtt_test_data/a6c072abf6ef07cc");
		});

		client.on("message", (_, msg) => {
			setMessage(msg.toString());
		});

		return () => {
			client.end();
		};
	}, []);

	return (
		<Typography id={id} variant="soft" color="warning" sx={{ mt: 3, p: 2, borderRadius: "1.25rem" }} textAlign={"center"} level="title-lg">
			Message from broker: {message}
		</Typography>
	);
}
