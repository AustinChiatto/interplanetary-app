// context
import DataContext, { DataProvider } from "./context/DataContext";

// custom components
import Upcoming from "./views/Upcoming/Upcoming";
import Past from "./views/Past/Past";
import Astronauts from "./views/Astronauts/Astronauts";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
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
                name="Astronauts"
                component={Astronauts}
                options={{
                    headerShown: false,
                    tabBarLabel: "Astronauts",
                    tabBarActiveTintColor: "#FF003D",
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

export default function App() {
    return (
        <DataProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigator}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </DataProvider>
    );
}
