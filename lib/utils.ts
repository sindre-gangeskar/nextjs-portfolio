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