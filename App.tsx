import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/Colors";
import { CreateAccountScreen } from "./screens/CreateAccountScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { LogInScreen } from "./screens/LogInScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: "slide_from_right",
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen
					name="CreateAccount"
					component={CreateAccountScreen}
				/>
				<Stack.Screen name="LogIn" component={LogInScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
