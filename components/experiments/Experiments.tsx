"use client";
import { Typography, Stack, Box } from "@mui/joy";
import ColoredTypography from "../ui/ColoredTypography";
import ExperimentCard from "./ExperimentCard";
import GridContainer from "../ui/GridContainer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Experiments() {
	useGSAP(() => {
		const tl = gsap.timeline();
		tl.set("#experiments-container > *", { opacity: 0, x: 150, filter: 'blur(16px)' });
		tl.to("#experiments-container > *", { opacity: 1, x: 0, stagger: 0.125, duration: 0.8, ease: "power4.out", filter: "blur(0px)" });
	}, []);

	return (
	<Stack mt={10}>
		<Typography level="h1">
			Browse{" "}
			<ColoredTypography level="h1" color="primary">
				Experiments
			</ColoredTypography>
		</Typography>
		<Box id={"experiments-container"}>
			<Typography level="title-sm">Explore smaller experiments that are not fully fledged projects</Typography>
			<Stack mt={5}>
				<GridContainer>
					<ExperimentCard color="primary" href="/experiments/mqtt" title="MQTT" description="Connect utilizing MQTT client and display messages by subscribing to a topic and using a public testing broker" />
				</GridContainer>
			</Stack>
		</Box>
	</Stack>
);
}
