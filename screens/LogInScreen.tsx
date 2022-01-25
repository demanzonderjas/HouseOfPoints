import { useNavigation } from "@react-navigation/native";
import { Button, Image, TouchableOpacity } from "react-native";
import { BaseLayout } from "../components/layout/BaseLayout";
import { Text, View } from "../components/Themed";

export function LogInScreen() {
	const { navigate } = useNavigation();
	return (
		<BaseLayout header="log_in">
			<Text>LogIn:d</Text>
			<Button title="test" onPress={() => navigate("Home")}>
				Test
			</Button>
		</BaseLayout>
	);
}
