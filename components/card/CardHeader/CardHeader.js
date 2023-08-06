// native components
import { StyleSheet, Text, View } from "react-native";

export default function CardHeader({ bannerText }) {
    return (
        <View style={styles.cardHeader}>
            {/* card header */}
            <View style={styles.cardBanner}>
                <Text style={styles.cardBannerText}>{bannerText}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardHeader: {
        marginVertical: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    cardBanner: {
        width: "100%",
        paddingVertical: 16,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
    },
    cardBannerText: {
        color: "#fff",
        fontSize: 26,
    },
});
