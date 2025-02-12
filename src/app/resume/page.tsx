import Navbar from "@/components/global/Navbar";
import { Container, Typography, Stack } from "@mui/joy";
import { Metadata } from "next";
import Page from "@/components/pages/resume/Page";

export const metadata: Metadata = {
	title: "Resumé",
};
export default function resume() {
	return <Page />;
}
