import MQTT from "@/components/experiments/mqtt/MQTT";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "MQTT",
	description: "Test a small MQTT expirment",
};
export default function Page() {
	return <MQTT />;
}
