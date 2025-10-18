"use client";
import { Typography } from "@mui/joy";
import mqtt, { MqttClient } from "mqtt";
import { useState, useEffect, useRef } from "react";
export default function MQTTMessage({ id }: { id?: string }) {
	const [message, setMessage] = useState("Connecting to HiveMQ's broker...");
	const attemptsRef = useRef(0);
	const clientRef = useRef<MqttClient | null>(null);
	useEffect(() => {
		const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
		clientRef.current = client;
		client.on("connect", () => {
			attemptsRef.current = 0;
			setMessage("Connected to Hive broker");
			client.subscribe("mqtt_test_data/a6c072abf6ef07cc");
		});

		client.on("reconnect", () => {
			attemptsRef.current++;
			if (attemptsRef.current > 10) {
				client.end(true);
				setMessage('Failed to connect to broker.. Connection has ended.');
				return;
			}
			setMessage(`Reconnecting... ${attemptsRef.current} / 10`);
		});

		client.on("message", (_, msg) => {
			setMessage(msg.toString());
		});

		return () => {
			client.end();
		};
	}, []);

	return (
		<Typography id={id} variant="solid" color="primary" sx={{ mt: 3, p: 2, borderRadius: "1.25rem" }} textAlign={"center"} level="title-sm">
			Message from broker: {message}
		</Typography>
	);
}
