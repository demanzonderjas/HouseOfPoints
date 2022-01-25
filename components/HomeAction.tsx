import Colors from "../constants/Colors";
import { translate } from "../utils/translations";
import { View, Text } from "./Themed";

export const HomeAction: React.FC<{ text: string }> = ({ text }) => {
	return (
		<View
			style={{
				backgroundColor: Colors.light.background,
				position: "relative",
				justifyContent: "center",
				alignItems: "center",
				margin: 10,
			}}
		>
			<View
				style={{
					width: 60,
					height: 60,
					backgroundColor: Colors.light.text,
					position: "absolute",
					borderRadius: 10,
					transform: [{ rotateZ: "33deg" }],
				}}
			></View>
			<Text
				style={{
					color: Colors.dark.text,
					fontSize: 36,
				}}
			>
				{translate(text)}
			</Text>
		</View>
	);
};
