/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
	useFonts,
	LuckiestGuy_400Regular,
} from "@expo-google-fonts/luckiest-guy";

import {
	Ubuntu_300Light,
	Ubuntu_300Light_Italic,
	Ubuntu_400Regular,
	Ubuntu_400Regular_Italic,
	Ubuntu_500Medium,
	Ubuntu_500Medium_Italic,
	Ubuntu_700Bold,
	Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import Fonts from "../constants/Fonts";

export function useThemeColor(
	props: { light?: string; dark?: string },
	colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	} else {
		return Colors[theme][colorName];
	}
}

type ThemeProps = {
	lightColor?: string;
	darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps & { isBodyText?: boolean }) {
	const { style, lightColor, darkColor, isBodyText, ...otherProps } = props;
	let [fontsLoaded] = useFonts({
		Ubuntu_400Regular,
		LuckiestGuy_400Regular,
	});

	const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

	if (!fontsLoaded) {
		return null;
	}

	const fontFamily = isBodyText ? Fonts.secondary : Fonts.primary;

	return (
		<DefaultText style={[{ color, fontFamily }, style]} {...otherProps} />
	);
}

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background"
	);

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
