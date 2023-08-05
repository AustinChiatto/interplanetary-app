// context
import DataContext, { DataProvider } from "./context/DataContext";

// custom components
import Upcoming from "./views/Upcoming/Upcoming";
import Past from "./views/Past/Past";

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Astronauts from "./views/Astronauts/Astronauts";
const Tab = createBottomTabNavigator();

// component
// ===========================
export default function App() {
    return (
        <DataProvider>
            <NavigationContainer>
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
                                // flex: 1,
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
                                // flex: 1,
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
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            },
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </DataProvider>
    );
}
