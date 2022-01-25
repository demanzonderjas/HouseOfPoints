import { StyleProp, ViewStyle } from "react-native";
import Colors from "../constants/Colors";

export function getBaseScreenStyling(centered?: boolean): StyleProp<ViewStyle> {
	const baseStyling = {
		flex: 1,
		backgroundColor: Colors.light.background,
	};
	return centered
		? {
				...baseStyling,
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
		  }
		: baseStyling;
}
