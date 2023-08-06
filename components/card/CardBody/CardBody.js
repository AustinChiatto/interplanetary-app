// native
import { StyleSheet, Text, View } from "react-native";

export default function CardBody() {
    return <View style={styles.cardBody}></View>;
}

const styles = StyleSheet.create({
    cardBody: {
        flex: 3,
    },
    cardBodyText: {
        color: "#fff",
    },
});
