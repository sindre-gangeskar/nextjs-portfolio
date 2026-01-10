"use client";
import { useColorScheme } from "@mui/joy";
import { Button } from "@mui/joy";
import { Brightness3, Brightness7 } from "@mui/icons-material";
import { useState, useEffect } from "react";
export default function ThemeToggler() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	/* effectiveMode uses a fallback until the component has mounted which prevents hydration errors */
	const effectiveMode = mounted ? mode : 'dark';
	const isDark = effectiveMode === "dark";
	const Icon = isDark ? Brightness7 : Brightness3;

	return (
		<Button type="button" size="sm" color="neutral" variant="soft" sx={{ borderRadius: "50%", aspectRatio: 1, width: "fit-content" }} onClick={() => setMode((mode ?? effectiveMode) === 'dark' ? "light" : "dark")}>
			<Icon />
		</Button>
	);
}
