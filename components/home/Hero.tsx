"use client";
import { Stack, Typography, Card, Chip, Box, Button } from "@mui/joy";
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
		if (typeof window !== "undefined") gsap.registerPlugin(TextPlugin);
		const traitsTl = gsap.timeline();
		const descriptionTl = gsap.timeline();
		const profileTl = gsap.timeline();

		profileTl.set("#profile > *", { opacity: 0, transform: "translateX(-200px)" });
		profileTl.to("#profile > *", { opacity: 1, transform: "translateX(0)", duration: 1.2, stagger: 0.5, ease: "power3.out" });

		descriptionTl.set("#description-stack > *", { y: 80, opacity: 0, filter: "blur(16px)" });
		descriptionTl.to("#description-stack > *", {
			y: 0,
			delay: 0.2,
			duration: 0.8,
			opacity: 1,
			stagger: 0.12,
			filter: "blur(0px)",
			ease: "power3.out",
		});

		traitsTl.set("#traits .trait", { opacity: 0, transform: "translateY(-30px)", zIndex: -1 });
		traitsTl.set("#traits", { opacity: 0 });
		traitsTl.to("#traits", {
			delay: 0.5,
			opacity: 1,
			duration: 0.5,
		});
		traitsTl.to("#traits .trait", {
			transform: "translateY(0)",
			ease: "elastic.out",
			duration: 1.2,
			stagger: 0.2,
			opacity: 1,
			zIndex: 1,
		});
	}, []);

	useGSAP(() => {
		const profileImageTl = gsap.timeline();

		if (data && !isLoading) {
			profileImageTl.set("#profile-image", { opacity: 0 });
			profileImageTl.to("#profile-image", { opacity: 1, duration: 1.2, ease: "power1.out" });
		}
	}, [isLoading]);

	return (
		<Stack
			component={"section"}
			direction={"column"}
			sx={{
				position: "relative",
				py: 2,
			}}>
			<Stack direction={"row"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
				<Stack id="profile" sx={{ width: "100%", minWidth: "50%", justifyContent: "space-evenly", textAlign: { xs: "center", md: "start" } }}>
					<Box id="avatar" sx={{display: 'flex', justifyContent: 'center'}}>{isLoading ? <ProfileAvatarSkeleton /> : <ProfileAvatar id="profile-image" size={325} src={data?.avatar_url ?? ""} sx={{ display: { xs: "none", md: "block" } }} />}</Box>
					<Typography level="h1" textAlign={"center"}>
						I am <ColoredTypography level="h1">Sindre Gangeskar</ColoredTypography>
					</Typography>
					<Typography textAlign={"center"}>A passionate back-end and full-stack developer from Norway</Typography>
				</Stack>
				<Stack sx={{ justifyContent: "space-between" }}>
					<Box
						id="traits"
						sx={{ background: "transparent", borderRadius: 0, display: "flex", flexWrap: "wrap", flexDirection: "row", width: "100%", flexShrink: 1, p: 3, gap: 1, justifyContent: "center", opacity: 0 }}>
						<Chip variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
							Team Player
						</Chip>
						<Chip variant="soft" className="trait" color="neutral" component={"span"} sx={{ height: "fit-content" }}>
							Adaptable
						</Chip>
						<Chip variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
							Critical Thinker
						</Chip>
						<Chip variant="soft" className="trait" color="warning" component={"span"} sx={{ height: "fit-content" }}>
							Proactive
						</Chip>
						<Chip variant="soft" className="trait" color="primary" component={"span"} sx={{ height: "fit-content" }}>
							Detail-Oriented
						</Chip>
						<Chip variant="soft" className="trait" color="success" component={"span"} sx={{ height: "fit-content" }}>
							Enthusiastic
						</Chip>
						<Chip variant="soft" className="trait" color="danger" component={"span"} sx={{ height: "fit-content" }}>
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
