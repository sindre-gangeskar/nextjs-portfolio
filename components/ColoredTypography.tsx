import { Typography, Link } from "@mui/joy";
import { ColorPaletteProp } from "@mui/joy";

export default function ColoredTypography({
	children,
	id,
	sx,
	color = "primary",
	level = "body-md",
	bold = false,
	isLink = false,
	href,
}: {
		color?: ColorPaletteProp;
	level?: "h1" | "h2" | "h3" | "h4" | "body-sm" | "body-md" | "body-lg";
	children?: React.ReactNode;
	href?: string;
	bold?: boolean;
	isLink?: boolean;
	sx?: {};
	id?: string;
}) {
	return (
		<Typography
			level={level}
			component={"span"}
			id={id}
			sx={{
				backgroundColor: `${color}.solidBg`,
				WebkitBackgroundClip: "text",
				WebkitTextFillColor: "transparent",
				display: "inline",
				fontWeight: `${bold ? "bold" : "normal"}`,
				...sx,
			}}>
			{isLink ? (
				<>
					<Link color={color} variant="solid" sx={{ WebkitBackgroundClip: "text", textDecorationStyle: "dotted", textDecorationLine: "underline", px: 0 }} href={href} target="_blank">
						{children}
					</Link>
				</>
			) : (
				children
			)}
		</Typography>
	);
}
