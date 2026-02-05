import MQTT from "@/components/experiments/mqtt/MQTT";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'MQTT',
	description: 'Test a small MQTT expirment'
}
export default function Page() {
	return <MQTT />;
}
