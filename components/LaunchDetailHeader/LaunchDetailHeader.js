// native components
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LaunchDetailHeader({ view, bannerText, chips }) {
    const calculateTimeLeft = () => {
        // Timer for upcoming launches
        // ===========================
        const difference = +new Date(bannerText) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24))
                    .toString()
                    .padEnd(7, " Days"),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
                    .toString()
                    .padStart(2, "0"),
                minutes: Math.floor((difference / 1000 / 60) % 60)
                    .toString()
                    .padStart(2, "0"),
                seconds: Math.floor((difference / 1000) % 60)
                    .toString()
                    .padStart(2, "0"),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear the timer when component unmounts
        return () => clearTimeout(timer);
    });

    const countdownTime = `${timeLeft.days || 0} : ${timeLeft.hours || 0} : ${timeLeft.minutes || 0} : ${timeLeft.seconds || 0}`;

    return (
        <View style={styles.header}>
            {/* card header */}
            <View style={styles.banner}>
                <Text style={styles.bannerText}>{countdownTime}</Text>
            </View>
            <View style={styles.chips}>
                {/* Card Chip Container */}
                <Text style={styles.chip}>{chips.status}</Text>
                <Text style={styles.chip}>{chips.agency}</Text>
                <Text style={styles.chip}>{chips.country}</Text>
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
