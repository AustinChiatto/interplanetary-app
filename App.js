// context
import DataContext, { DataProvider } from "./context/DataContext";

// navigation
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./components/TabNavigator/TabNavigator";
import LaunchDetails from "./views/LaunchDetails/LaunchDetails";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AstronautDetails from "./views/AstronautDetails/AstronautDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <DataProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name="Tabs"
                        component={TabNavigator}
                    />
                    <Stack.Screen
                        name="LoadingScreen"
                        component={LoadingScreen}
                    />
                    <Stack.Screen
                        name="LaunchDetails"
                        component={LaunchDetails}
                        options={{ headerShown: true, title: "Mission Details" }}
                    />
                    <Stack.Screen
                        name="AstronautDetails"
                        component={AstronautDetails}
                        options={{ headerShown: true, title: "Mission Details" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </DataProvider>
    );
}
