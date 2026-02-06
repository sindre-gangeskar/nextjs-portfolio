"use client";
import { Stack, Typography, Chip, Box } from "@mui/joy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProfileAvatar from "@/components/home/ProfileAvatar";
import ColoredTypography from "@/components/ui/ColoredTypography";
import TextPlugin from "gsap/dist/TextPlugin";
import ProfileAvatarSkeleton from "./skeletons/ProfileAvatarSkeleton";
import useUserProfile from "@/hooks/useUserProfile";
import Links from "./Links";

export default function Hero() {
	const { data, isLoading } = useUserProfile();
	useGSAP(() => {
		gsap.registerPlugin(TextPlugin);
		const traitsTl = gsap.timeline();
		const descriptionTl = gsap.timeline();
		const profileTl = gsap.timeline();

		profileTl.set("#profile > *", { opacity: 0, x: -150 });
		descriptionTl.set("#description-stack > *", { opacity: 0, filter: "blur(6px)" });
		traitsTl.set("#traits .trait", { opacity: 0, y: -10, zIndex: -1 });

		gsap.to("#profile", { opacity: 1 });
		profileTl.to("#profile > *", { opacity: 1, x: 0, duration: 1.2, stagger: 0.5, ease: "power3.out", delay: 0.5 });
		descriptionTl.to("#description-stack > *", {
			delay: 0.2,
			duration: 0.8,
			opacity: 1,
			stagger: 0.12,
			filter: "blur(0px)",
			ease: "power3.out",
		});
		traitsTl.to("#traits", {
			delay: 0.5,
			opacity: 1,
			duration: 0.5,
		});
		traitsTl.to(".trait", {
			y: 0,
			ease: "elastic.out",
			duration: 1.2,
			stagger: 0.2,
			opacity: 1,
			zIndex: 1,
		});
	}, []);

	useGSAP(() => {
		if (!data) return;
		gsap.to("#profile-image", { opacity: 1, duration: 1.2, ease: "power1.out" });
	}, [data]);

	return (
		<Stack
			component={"section"}
			direction={"column"}
			sx={{
				position: "relative",
				py: 2,
			}}>
			<Stack direction={"row"} sx={{ flexDirection: { xs: "column", md: "row" }, "& p": { lineHeight: "1.5rem", px: 2 } }}>
				<Stack id="profile" sx={{ width: "100%", minWidth: "50%", justifyContent: "space-evenly", textAlign: { xs: "center", md: "start" }, position: "relative", opacity: 0 }}>
					<Box id="avatar" sx={{ display: "flex", justifyContent: "center" }}>
						{isLoading ?
							<ProfileAvatarSkeleton />
						:	<ProfileAvatar id="profile-image" size={325} avatar_url={data?.avatar_url} sx={{ display: { xs: "none", md: "block" }, opacity: 0 }} />}
					</Box>
					<Typography level="h1" textAlign={"center"} sx={{ opacity: 0 }}>
						I am <ColoredTypography level="h1">Sindre Gangeskar</ColoredTypography>
					</Typography>
					<Typography textAlign={"center"} sx={{ opacity: 0 }}>
						A passionate back-end and full-stack developer from Norway
					</Typography>
				</Stack>
				<Stack sx={{ justifyContent: "space-between" }}>
					<Box
						id="traits"
						sx={{ background: "transparent", borderRadius: 0, display: "flex", flexWrap: "wrap", flexDirection: "row", width: "100%", flexShrink: 1, p: 3, gap: 1, justifyContent: "center", opacity: 0 }}>
						<Chip slotProps={{ label: { id: "chip-team-player" } }} variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
							Team Player
						</Chip>
						<Chip slotProps={{ label: { id: "chip-adaptable" } }} variant="soft" className="trait" color="neutral" component={"span"} sx={{ height: "fit-content" }}>
							Adaptable
						</Chip>
						<Chip slotProps={{ label: { id: "chip-critical-thinker" } }} variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
							Critical Thinker
						</Chip>
						<Chip slotProps={{ label: { id: "chip-proactive" } }} variant="soft" className="trait" color="warning" component={"span"} sx={{ height: "fit-content" }}>
							Proactive
						</Chip>
						<Chip slotProps={{ label: { id: "chip-detail-oriented" } }} variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
							Detail-Oriented
						</Chip>
						<Chip slotProps={{ label: { id: "chip-enthusiastic" } }} variant="soft" className="trait" color="success" component={"span"} sx={{ height: "fit-content" }}>
							Enthusiastic
						</Chip>
						<Chip slotProps={{ label: { id: "chip-passionate" } }} variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
							Passionate
						</Chip>
					</Box>
					<Box id="description" component={"div"} sx={{ overflow: "hidden" }}>
						<Stack id="description-stack" gap={2}>
							<Typography level="title-sm">
								I am a back-end developer with full-stack capabilities skilled in building robust and scalable RESTful applications with modern front-end frameworks. <br />
							</Typography>
							<Typography level="title-sm">
								I specialize in developing efficient APIs, managing databases and implementing robust authentication methods. I prioritize clean and maintainable code and thorough API documentation.
							</Typography>
							<Typography level="title-sm">I am curious and eager to learn technologies for both front-end and back-end to apply in a professional setting.</Typography>
						</Stack>
					</Box>
					<Links />
				</Stack>
			</Stack>
		</Stack>
	);
}
