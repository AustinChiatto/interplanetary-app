// native components
import { StyleSheet, View, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

// custom components
import CardActions from "./CardActions/CardActions";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import { TouchableOpacity } from "react-native";

export default function Card({ safeAreaH, bannerText, cardAccentColor, cardImage, chips, ctaButtonLabel, view }) {
    const navigation = useNavigation();
    // styles
    const styles = StyleSheet.create({
        card: {
            height: safeAreaH,
            paddingHorizontal: 24,
        },
    });

    return (
        <Pressable
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Astronauts")}
        >
            <ImageBackground
                source={{ uri: cardImage }}
                style={styles.card}
                onPress={() => navigation.navigate("Astronauts")}
            >
                <CardHeader bannerText={bannerText} />
                <CardBody cardImage={cardImage} />
                <CardActions
                    view={view}
                    chips={chips}
                    cardAccentColor={cardAccentColor}
                    ctaButtonLabel={ctaButtonLabel}
                />
            </ImageBackground>
        </Pressable>
    );
}
