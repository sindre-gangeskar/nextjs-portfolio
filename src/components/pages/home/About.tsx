"use client";
import { Box, Stack, Typography, Link } from "@mui/joy";
import ColoredTypography from "@/components/global/ColoredTypography";
import ProfileAvatar from "@/components/global/ProfileAvatar";
import { GitHub } from "@mui/icons-material";

interface SummaryProps {
	user: { avatar_url: string };
}

export default function ProfileSummary({ user = { avatar_url: "" } }: SummaryProps) {
	return (
	<>
		<Box component={"section"} sx={{ width: "100%", p: 2, position: "relative" }}>
			<Stack direction={{ xs: "column", md: "row" }} display={"flex"} width={"100%"} alignItems={"center"} sx={{ textWrap: { sm: "wrap", md: "nowrap" }, textAlign: { xs: "center", md: "end" } }}>
				{user?.avatar_url ? <ProfileAvatar sx={{ display: { xs: "none", md: "block" } }} size={200} src={user.avatar_url}></ProfileAvatar> : ""}
				<Stack direction={"column"}>
					<Stack direction={"column"}>
						<Typography component={"span"} level="h1" sx={{ width: { xs: "100%", md: "inherit" } }}>
							I am&nbsp;
							<ColoredTypography color="primary" level="h1">
								Sindre Gangeskar
							</ColoredTypography>
						</Typography>
						<Typography level={"body-md"} textAlign={{ xs: "start", md: "initial" }}>
							A passionate back-end and full-stack developer from Norway
						</Typography>
					</Stack>
					<Stack sx={{ marginLeft: "auto" }}>
						<Link component={"a"} href="https://github.com/sindre-gangeskar" target="_blank" color="neutral" variant="plain" p={1.5} sx={{ width: "fit-content", marginLeft: "auto", borderRadius: "0.25rem" }}>
							<GitHub sx={{ fontSize: "2rem" }}></GitHub>
						</Link>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	</>
);
}
