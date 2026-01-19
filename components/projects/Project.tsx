import { capitalizeString } from "@/lib/utils";
import { GitHub, StarRounded } from "@mui/icons-material";
import { Stack, Typography, Card, Button, Box, CardContent } from "@mui/joy";
import { RepoType } from "@/lib/definitions";
import { SxProps } from "@mui/material";
import { VariantProp, ColorPaletteProp } from "@mui/joy";
import { FaGlobe } from "react-icons/fa6";
export default function Project({ repo, id, className, sx, variant, color }: { repo: RepoType; id?: string; className?: string; sx: SxProps; variant?: VariantProp; color?: ColorPaletteProp }) {
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
								<Button variant="soft" color="primary" endDecorator={<FaGlobe />} component={"a"} target="_blank" href={repo.homepage}>
									Visit Homepage
								</Button>
							)}
							{repo.html_url && (
								<Button variant="soft" color="neutral" endDecorator={<GitHub />} component={"a"} target="_blank" href={repo.html_url}>
									View On Github
								</Button>
							)}
						</Box>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
}
