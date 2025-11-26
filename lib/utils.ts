import { Theme } from "@mui/joy";
export function capitalizeString(string: string) {
	const words = string.split(" ");

	const capitialize = (string: string) => {
		const capitalized = string.charAt(0).toUpperCase();
		const remaining = string.slice(1);
		return capitalized + remaining;
	};

	const capitalizedWords = words.map(word => capitialize(word));
	const result = capitalizedWords.join(" ");
	return result;
}

export async function delay(milliseconds: number): Promise<null> {
	return await new Promise(res => setTimeout(res, milliseconds));
}

export function getColor(pathname: string, theme: Theme) {
	if (pathname.includes("resume")) return theme.palette.danger;
	if (pathname.includes("my-story")) return theme.palette.success;
	if (pathname.includes('experiments')) return theme.palette.neutral;
	if (pathname.includes('projects')) return theme.palette.warning;
	else return theme.palette.primary;
}

export function getBackgroundColor(pathname: string, theme: Theme) {
	if (pathname.includes('resume')) return theme.palette.danger;
	if (pathname.includes('experiments')) return theme.palette.neutral;
	else return theme.palette.primary;
}