// custom components
import Upcoming from "../../views/Upcoming/Upcoming";
import Past from "../../views/Past/Past";
import Astronauts from "../../views/Astronauts/Astronauts";

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Upcoming"
                component={Upcoming}
                options={{
                    headerShown: false,
                    tabBarLabel: "Upcoming",
                    tabBarActiveTintColor: "#FF003D",
                    tabBarInactiveTintColor: "#fff",
                    tabBarStyle: {
                        backgroundColor: "#000",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            />
            <Tab.Screen
                name="Past"
                component={Past}
                options={{
                    headerShown: false,
                    tabBarLabel: "Past",
                    tabBarActiveTintColor: "#2835F8",
                    tabBarInactiveTintColor: "#fff",
                    tabBarStyle: {
                        backgroundColor: "#000",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            />
            <Tab.Screen
                name="Astronauts"
                component={Astronauts}
                options={{
                    headerShown: false,
                    tabBarLabel: "Astronauts",
                    tabBarActiveTintColor: "#FF3D00",
                    tabBarInactiveTintColor: "#fff",
                    tabBarStyle: {
                        backgroundColor: "#000",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            />
        </Tab.Navigator>
    );
}
