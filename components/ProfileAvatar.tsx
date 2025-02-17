import { Stack, Avatar } from "@mui/joy";

interface ProfileProps {
	src: string;
	size: number;
	id?: string;
	sx?: {};
}
export default function ProfileAvatar({ src, size = 50, sx, id }: ProfileProps) {
	return (
		<Stack>
			<Avatar id={id} src={src} alt="profileImage" sx={{ width: `${size}px`, height: `${size}px`, aspectRatio: 1 / 1, ...sx }}></Avatar>
		</Stack>
	);
}
