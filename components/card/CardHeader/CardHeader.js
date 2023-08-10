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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#070707",
        borderWidth: 1,
        borderColor: "#393939",
        borderRadius: 50,
    },
    cardBannerText: {
        color: "#fff",
        fontSize: 17,
    },
});
