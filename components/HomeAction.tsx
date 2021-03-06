import Colors from "../constants/Colors";
import { translate } from "../utils/translations";
import { View, Text } from "./Themed";

export const HomeAction: React.FC<{ text: string; handleClick: any }> = ({
	text,
	handleClick,
}) => {
	return (
		<View
			style={{
				backgroundColor: Colors.light.background,
				position: "relative",
				justifyContent: "center",
				alignItems: "center",
				margin: 20,
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
				onPress={handleClick}
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
