import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { HomeAction } from "../components/HomeAction";
import { BaseLayout } from "../components/layout/BaseLayout";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import { getBaseScreenStyling } from "../utils/styling";
import { translate } from "../utils/translations";

export function HomeScreen() {
	const { navigate } = useNavigation();
	return (
		<BaseLayout centered={true}>
			<Image source={require("../assets/images/logo.png")} />
			<Text style={{ color: "white", fontSize: 36, marginBottom: 40 }}>
				{translate("house_of_points")}
			</Text>
			<View
				style={{
					flexWrap: "nowrap",
					flexDirection: "row",
					backgroundColor: Colors.light.background,
				}}
			>
				<HomeAction
					text="create"
					handleClick={() => navigate("CreateAccount")}
				/>
				<HomeAction
					text="log_in"
					handleClick={() => navigate("LogIn")}
				/>
			</View>
		</BaseLayout>
	);
}
