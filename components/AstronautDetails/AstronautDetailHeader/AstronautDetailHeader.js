// native components
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AstronautDetailHeader({ bannerText, chips }) {
    return (
        <View style={styles.header}>
            {/* card header */}
            <View style={styles.banner}>
                <Text style={styles.bannerText}>{bannerText}</Text>
            </View>
            <View style={styles.chips}>
                {/* Card Chip Container */}
                {chips &&
                    Object.values(chips).map((e) => (
                        <Text
                            key={e.index}
                            style={styles.chip}
                        >
                            {e.content}
                        </Text>
                    ))}
            </View>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    header: {
        marginVertical: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    banner: {
        width: "100%",
        paddingVertical: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#151515",
        borderWidth: 1,
        borderColor: "#353535",
        borderRadius: 16,
    },
    bannerText: {
        color: "#fff",
        fontSize: 17,
    },
    chips: {
        flexDirection: "row",
        width: "100%",
        gap: 8,
        marginTop: 12,
        marginBottom: 48,
    },
    chip: {
        maxWidth: "fit-content",
        height: "fit-content",
        color: "#fff",
        borderWidth: 1,
        backgroundColor: "#000",
        borderColor: "#353535",
        borderRadius: 50,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
});
