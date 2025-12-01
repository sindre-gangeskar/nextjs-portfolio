"use client"
import { Avatar } from "@mui/joy";
import { ProfileProps } from "@/lib/definitions";

export default function ProfileAvatar({ src, size = 50, sx, id }: ProfileProps) {
	return <Avatar variant="outlined" id={id} src={src} alt="profileImage" sx={{ width: `${size}px`, height: `${size}px`, aspectRatio: 1 / 1, ...sx }}></Avatar>
}
