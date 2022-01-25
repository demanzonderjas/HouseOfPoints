import { StyleProp, ViewStyle } from "react-native";
import Colors from "../constants/Colors";

export function getBaseScreenStyling(): StyleProp<ViewStyle> {
	return {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		backgroundColor: Colors.light.background,
	};
}
