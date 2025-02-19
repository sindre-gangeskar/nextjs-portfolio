import { Stack, Typography, Box } from "@mui/joy";
import ColoredTypography from "./ColoredTypography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Loader() {
	useGSAP(() => {
		const tl = gsap.timeline();
		gsap.set(".loader-wrapper", { opacity: 0 });
		gsap.to(".loader-wrapper", { opacity: 1, duration: 0.8, delay: 0.1 });
		tl.set(".bar", { opacity: 0.5, ease: "circ.inOut" });
		tl.fromTo(
			".bar",
			{ y: 20, scaleX: 1, scaleY: 1.6, duration: 0.2, opacity: 1 },
			{
				y: -100,
				scaleX: 1.8,
				scaleY: 0.8,
				yoyo: true,
				repeat: -1,
				duration: 0.3,
				opacity: 0.5,
			}
		);
	}, []);

	return (
		<Stack className={"loader-wrapper"} sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
			<Stack direction={"row"} sx={{ display: "flex", justifyContent: "center" }}>
				<Box className="bar" sx={{ width: "50px", background: "white", borderRadius: "50%", aspectRatio: 1 / 1 }}></Box>
			</Stack>
			<Typography level="body-sm" my={3} mx={"auto"}>
				<ColoredTypography bold={true}>Working</ColoredTypography> on it...
			</Typography>
		</Stack>
	);
}
