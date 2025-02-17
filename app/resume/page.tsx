import { Metadata } from "next";
import Page from "@/components/resume/Page";

export const metadata: Metadata = {
	title: "Resumé",
};
export default function resume() {
	return <Page />;
}
