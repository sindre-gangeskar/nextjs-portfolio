"use client";
import { Avatar } from "@mui/joy";
import { ProfileProps } from "@/lib/definitions";

export default function ProfileAvatar({ avatar_url, size = 50, sx, id }: ProfileProps) {
	return <Avatar variant="outlined" id={id} src={avatar_url} alt="profileImage" sx={{ width: `${size}px`, height: `${size}px`, aspectRatio: 1 / 1, ...sx }}></Avatar>;
}
