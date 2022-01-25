import { getBaseScreenStyling } from "../../utils/styling";
import { View } from "../Themed";
import { HeaderBar } from "./HeaderBar";

export const BaseLayout: React.FC<{
	header?: string;
	centered?: boolean;
	children: any;
}> = ({ header, centered, children }) => {
	return (
		<View style={getBaseScreenStyling(centered)}>
			{header && <HeaderBar text={header} />}
			{children}
		</View>
	);
};
