import ExperimentsPage from "@/components/experiments/ExperimentsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experiments",
	description: "Browse small experiments I work on that don't need to be their own projects",
};
export default function Page() {
	return <ExperimentsPage />;
}
