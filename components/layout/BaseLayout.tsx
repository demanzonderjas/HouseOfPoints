import { getBaseScreenStyling } from "../../utils/styling";
import { View } from "../Themed";

export function BaseLayout({ children }: any) {
	return <View style={getBaseScreenStyling()}>{children}</View>;
}
