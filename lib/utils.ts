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
	if (pathname.includes("resume")) return theme.vars.palette.danger;
	if (pathname.includes("my-story")) return theme.vars.palette.success;
	if (pathname.includes('experiments')) return theme.vars.palette.neutral;
	if (pathname.includes('projects')) return theme.vars.palette.warning;
	else return theme.vars.palette.primary;
}

export function getBackgroundColor(pathname: string, theme: Theme) {
	if (pathname.includes('resume')) return theme.vars.palette.danger;
	if (pathname.includes('experiments')) return theme.vars.palette.neutral;
	else return theme.vars.palette.primary;
}