import { capitalizeString } from "@/lib/utils";
import { GitHub, StarRounded } from "@mui/icons-material";
import { Stack, Typography, Card, Button, Box, CardContent, useTheme } from "@mui/joy";
import { RepoType } from "@/lib/definitions";
import { SxProps } from "@mui/material";
import { VariantProp, ColorPaletteProp } from "@mui/joy";
import { FaGlobe } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";
export default function Project({ repo, id, className, sx, variant, color }: { repo: RepoType; id?: string; className?: string; sx: SxProps; variant?: VariantProp; color?: ColorPaletteProp }) {
	const theme = useTheme();
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
	const btnSx: SxProps = { aspectRatio: { xs: 2 / 1, sm: "inherit" }, width: { xs: "60px", sm: "inherit" } };
	return (
		<Card id={id} className={className} variant={variant} color={color} invertedColors sx={{ ...sx }}>
			<Typography level="title-lg">{capitalizeString(repo.name)}</Typography>
			<CardContent>
				<Stack sx={{ height: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
					<Typography level="body-sm">{repo.description}</Typography>
					<Stack direction={"column"} sx={{ backgroundColor: "", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
						{typeof repo.stargazers_count === "number" && (
							<Typography color={repo.stargazers_count > 0 ? "warning" : "neutral"} startDecorator={<StarRounded />}>
								{repo.stargazers_count}
							</Typography>
						)}
						<Box component={"span"} sx={{ display: "flex", justifyContent: "space-evenly", gap: 1, textWrap: "nowrap", width: "fit-content", alignSelf: "end" }}>
							{repo.homepage && (
								<Button sx={btnSx} variant="soft" color="primary" endDecorator={isSmall ? null : <FaGlobe />} component={"a"} target="_blank" href={repo.homepage}>
									{isSmall ?
										<FaGlobe />
									:	"Visit Homepage"}
								</Button>
							)}
							{repo.html_url && (
								<Button sx={btnSx} variant="soft" color="neutral" endDecorator={isSmall ? null : <GitHub />} component={"a"} target="_blank" href={repo.html_url}>
									{isSmall ?
										<GitHub />
									:	"View On GitHub"}
								</Button>
							)}
						</Box>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
}
