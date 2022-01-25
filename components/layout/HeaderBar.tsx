import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { translate } from "../../utils/translations";
import { Text, View } from "../Themed";

export const HeaderBar: React.FC<{ text: string }> = ({ text }) => {
	const { navigate } = useNavigation();
	return (
		<View
			style={{
				height: 70,
				backgroundColor: Colors.dark.text,
				position: "relative",
				flexWrap: "wrap",
				zIndex: 100,
			}}
		>
			<TouchableOpacity onPress={() => navigate("Home")}>
				<Image
					source={require("../../assets/images/logo.png")}
					style={{
						width: 50,
						height: 50,
						position: "relative",
						zIndex: 2,
						top: 10,
						left: 10,
					}}
				/>
			</TouchableOpacity>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					alignSelf: "center",
					backgroundColor: "transparent",
					width: "85%",
				}}
			>
				<Text
					style={{
						color: "white",
						fontSize: 30,
						top: 20,
						height: "100%",
						textAlign: "center",
					}}
				>
					{translate(text)}
				</Text>
			</View>
		</View>
	);
};
