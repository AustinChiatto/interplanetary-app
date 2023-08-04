// native components
import { StatusBar, SafeAreaView, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
// internal components
import Card from "./components/card/Card";
// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
    const windowDimensions = useWindowDimensions();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={true} />
            <ScrollView
                style={styles.wrapper}
                decelerationRate="fast"
                snapToInterval={windowDimensions.height}
                snapToAlignment="start"
            >
                <Card />
                <Card />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#000",
    },
});
