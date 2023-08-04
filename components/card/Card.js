import { StyleSheet, View, Dimensions } from "react-native";
import CardActions from "./CardActions/CardActions";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";

export default function Card() {
    const windowHeight = Dimensions.get("window").height;

    const styles = StyleSheet.create({
        card: {
            height: windowHeight,
            paddingHorizontal: 24,
            backgroundColor: "#28446e",
        },
    });

    return (
        <View style={styles.card}>
            {/* 
                Card Container
                ===========================
                Todo: background: API image
                    - Launch: Rocket Image
                    - People In Space: Astronauts Profile Image
            */}
            <CardHeader />
            <CardBody />
            <CardActions />
        </View>
    );
}
