"use client";
import type { ProfileProps } from "@/lib/definitions";
import { Avatar } from "@mui/joy";
import Image, { type ImageProps } from "next/image";

// Joy passes `ownerState` to custom slot components; strip it so it doesn't reach the <img>
function AvatarImage({
	ownerState,
	...props
}: ImageProps & { ownerState?: unknown }) {
	return <Image {...props} />;
}

export default function ProfileAvatar({
	avatar_url,
	size = 50,
	id,
	sx,
	onLoad,
}: ProfileProps) {
	return (
		<Avatar
			id={id}
			src={avatar_url}
			alt="profileImage"
			slots={{ img: AvatarImage }}
			slotProps={{ img: { width: size, height: size, onLoad } }}
			sx={[ (theme) => ({
				position: 'relative',
				width: `${size}px`,
				height: `${size}px`,
				borderRadius: '1.25rem',
				overflow: 'visible',
				isolation: 'isolate',
				'& .MuiAvatar-img': { borderRadius: 'inherit' },
				'&:before': {
					position: 'absolute',
					content: '""',
					display: 'block',
					left: 0,
					top: 0,
					right: 0,
					bottom: -4,
					zIndex: -1,
					background: theme.vars.palette.neutral.solidBg,
					borderRadius: 'inherit',
				},
			}),
			...(Array.isArray(sx) ? sx : [ sx ]),
			]}
		/>
	);
}
