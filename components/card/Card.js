// native components
import { StyleSheet, View } from "react-native";

// custom components
import CardActions from "./CardActions/CardActions";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";

export default function Card({ safeAreaH, bannerText, cardAccentColor, cardImage, chips, ctaButtonLabel }) {
    // styles
    const styles = StyleSheet.create({
        card: {
            height: safeAreaH,
            paddingHorizontal: 24,
            backgroundColor: "#ccc",
        },
    });

    return (
        <View style={styles.card}>
            <CardHeader bannerText={bannerText} />
            <CardBody />
            <CardActions
                chips={chips}
                cardAccentColor={cardAccentColor}
                ctaButtonLabel={ctaButtonLabel}
            />
        </View>
    );
}
