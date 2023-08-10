// native components
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
    // styles
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#070707",
        },
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#FFFFFF"
            />
        </View>
    );
}
