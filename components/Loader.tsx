import { Stack, Typography, Box } from "@mui/joy";
import ColoredTypography from "./ColoredTypography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Loader() {
  useGSAP(() => {
		const tl = gsap.timeline();
		tl.set(".bar", { opacity: 0.5, duration: 0.5 });
		tl.fromTo(
			".bar",
			{ y: 20 },
			{
				y: -20,
				stagger: { each: 0.1, from: 'end' },
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          tl.restart();
				},
			},
			"+=1"
    );
	}, []);

	return (
		<Stack sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
			<Stack direction={"row"} gap={2}>
				<Box className="bar" sx={{ width: "20px", background: "white", borderRadius: "50%", aspectRatio: 1 / 1 }}></Box>
				<Box className="bar" sx={{ width: "20px", background: "white", borderRadius: "50%", aspectRatio: 1 / 1 }}></Box>
				<Box className="bar" sx={{ width: "20px", background: "white", borderRadius: "50%", aspectRatio: 1 / 1 }}></Box>
			</Stack>
			<Typography level="body-sm" my={3} mx={"auto"}>
				<ColoredTypography bold={true}>Working</ColoredTypography> on it...
			</Typography>
		</Stack>
	);
}
