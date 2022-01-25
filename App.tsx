import { HomeAction } from "./components/HomeAction";
import { Text, View } from "./components/Themed";
import Colors from "./constants/Colors";
const App = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				alignContent: "center",
				flexWrap: "nowrap",
				flexDirection: "row",
				backgroundColor: Colors.light.background,
			}}
		>
			<HomeAction text="create" />
			<HomeAction text="log_in" />
		</View>
	);
};

export default App;
