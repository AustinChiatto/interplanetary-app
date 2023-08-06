// native components
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CardActions({ cardAccentColor, ctaButtonLabel, chips }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(ctaButtonLabel) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24))
                    .toString()
                    .padStart(2, "0"),
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

    // Set Styles
    const styles = StyleSheet.create({
        cardActions: {
            marginBottom: 48,
        },
        cardChips: {
            flexDirection: "row",
            gap: 8,
            marginBottom: 12,
        },
        cardChip: {
            maxWidth: "fit-content",
            height: "fit-content",
            color: "#fff",
            borderWidth: 1,
            backgroundColor: "#000",
            borderColor: `${cardAccentColor}`,
            borderRadius: 50,
            paddingHorizontal: 14,
            paddingVertical: 8,
        },
        cardCTA: {
            width: "100%",
            paddingVertical: 24,
            paddingHorizontal: 24,
            borderRadius: 16,
            fontSize: 24,
            color: "#fff",
            backgroundColor: `${cardAccentColor}`,
        },
    });

    // Component
    return (
        <View style={styles.cardActions}>
            <View style={styles.cardChips}>
                {/* Card Chip Container */}
                <Text style={styles.cardChip}>{chips.provider}</Text>
                <Text style={styles.cardChip}>{chips.vehicle}</Text>
            </View>
            <Text style={styles.cardCTA}>{countdownTime}</Text>
        </View>
    );
}
