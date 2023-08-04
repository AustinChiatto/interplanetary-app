import { StyleSheet, Text, View } from "react-native";

export default function CardActions() {
    return (
        <View style={styles.cardActions}>
            {/* 
                Actions
                ===========================
                Todo: CTA Button text - API
                    - Launches: (home) View Launch Details (else) T- time
                    - People In Space: Learn More
                Todo: Chip - API
                    - Launches: Provider, Vehicle
                    - People In Space: Country, In-Space Icon
            */}
            <View style={styles.cardChips}>
                {/* Card Chip Container */}
                <Text style={styles.cardChip}>Chips</Text>
                <Text style={styles.cardChip}>Chips</Text>
            </View>
            <Text style={styles.cardCTA}>CTA Button</Text>
        </View>
    );
}

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
        borderColor: "#FF003D",
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
        backgroundColor: "#FF003D",
    },
});
