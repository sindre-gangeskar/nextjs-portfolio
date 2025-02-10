import { Stack } from "@mui/joy";
export default function GridBackground({ gridSize = 45, thickness = 1, width = 500, height = 500, sx, id }: { gridSize: number; thickness?: number; width: number; height: number; sx?: {}; id?: string }) {
	return (
		<Stack
			id={id}
			sx={theme => ({
				minWidth: `${width}px`,
				minHeight: `${height}px`,
				width: "100%",
				height: "100%",
				margin: "auto",
				position: "absolute",
				left: "50%",
				transform: "translateX(-50%)",
				zIndex: -1,
				background: `linear-gradient(to right, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px), linear-gradient(to top, ${theme.vars.palette.neutral.outlinedColor}, transparent ${thickness}px)`,
				backgroundSize: `${gridSize}px ${gridSize}px`,
				backgroundRepeat: "repeat",
				maskImage: "radial-gradient(ellipse, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
				WebkitMaskImage: "radial-gradient(ellipse, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)",
				...sx,
			})}></Stack>
	);
}
