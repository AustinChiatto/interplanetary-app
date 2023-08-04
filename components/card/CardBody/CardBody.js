import { StyleSheet, Text, View } from "react-native";

export default function CardBody() {
    return (
        <View style={styles.cardBody}>
            {/* 
                Card Body
                ===========================
                Todo: body heading - API
                    - Launches: (home) mission name (else) null
                    - People In Space: null
            */}
            <Text style={styles.cardBodyText}>Body</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        flex: 3,
    },
    cardBodyText: {
        color: "#fff",
    },
});
