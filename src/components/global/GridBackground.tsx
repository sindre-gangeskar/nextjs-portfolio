import { Container, Stack } from "@mui/joy";
export default function GridBackground({ gridSize = 45, width = 500, height = 500 }: { gridSize: number; width: number; height: number }) {
	return (
	<Container
		sx={{
			position: "absolute",
			overflow: "visible",
			left: "50%",
			transform: "translateX(-50%)",
			display: "flex",
			maxWidth: "800px",
			width: "100%",
			height: "fit-content",
			margin: "auto",
			justifyContent: "center",
		}}>
		<Stack
			sx={theme => ({
				minWidth: `${width}px`,
				minHeight: `${height}px`,
				width: "100%",
				height: "100%",
				margin: "auto",
				position: "relative",
				background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent 1px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent 1px)`,
				backgroundSize: `${gridSize}px ${gridSize}px`,
				backgroundRepeat: "repeat",
				zIndex: 1,
				opacity: 0.6,
				maskImage: "radial-gradient(ellipse, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%)",
				WebkitMaskImage: "radial-gradient(ellipse, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)"
			})}></Stack>
	</Container>
);
}
