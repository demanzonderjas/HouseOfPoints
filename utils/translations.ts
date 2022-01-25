import translations from "../data/translations/translations.json";

export function translate(key: string): string {
	const t = translations as { [s: string]: string };
	return t[key] || key;
}
