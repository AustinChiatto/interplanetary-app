// native components
import { StyleSheet, Text, View } from "react-native";

export default function CardHeader({ bannerText }) {
    return (
        <View style={styles.cardHeader}>
            {/* card header */}
            <View style={styles.cardBanner}>
                {/* 
                    Card Banner
                    ===========================
                    Todo: banner text - API
                        - Launches: (home) T- time (else) mission name
                        - People In Space: Astronaut First & Last Name
                */}
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
        backgroundColor: "#000",
    },
    cardBannerText: {
        color: "#fff",
        fontSize: 26,
    },
});
