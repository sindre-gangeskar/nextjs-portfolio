import { Metadata } from "next";
import Page from "@/pages/resume/Page";

export const metadata: Metadata = {
	title: "Resumé",
};
export default function resume() {
	return <Page />;
}
