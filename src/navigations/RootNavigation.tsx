import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsDetailScreen } from "../screens/NewsDetail";
import { NewsTabNavigation } from "./NewsTabNavigation";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NewsTab" component={NewsTabNavigation} />
            <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
        </Stack.Navigator>
    );
};
