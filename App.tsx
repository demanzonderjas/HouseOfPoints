import { Image } from "react-native";
import { HomeAction } from "./components/HomeAction";
import { Text, View } from "./components/Themed";
import { translate } from "./utils/translations";

import Colors from "./constants/Colors";
const App = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				backgroundColor: Colors.light.background,
			}}
		>
			<Image source={require("./assets/images/logo.png")} />
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
				<HomeAction text="create" />
				<HomeAction text="log_in" />
			</View>
		</View>
	);
};

export default App;
