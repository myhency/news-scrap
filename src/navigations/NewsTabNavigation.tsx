import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../components/TabIcon";
import { FavoriteNewsListScreen } from "../screens/FavoriteNewsListScreen";
import { NewsListScreen } from "../screens/NewsListScreens";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const NewsTabNavigation = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    const getIconName = (
                        routeName: string
                    ): keyof typeof Ionicons.glyphMap => {
                        switch (routeName) {
                            case "NewsList":
                                return "home";
                            case "FavoriteNewsList":
                                return "heart";
                            default:
                                return "home";
                        }
                    };
                    return (
                        <TabIcon
                            iconName={getIconName(route.name)}
                            iconColor={color}
                        />
                    );
                },
            })}
        >
            <BottomTab.Screen name="NewsList" component={NewsListScreen} />
            <BottomTab.Screen
                name="FavoriteNewsList"
                component={FavoriteNewsListScreen}
            />
        </BottomTab.Navigator>
    );
};
