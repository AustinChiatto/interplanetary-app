// native components
import { StyleSheet, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// custom components
import CardActions from "./CardActions/CardActions";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import { useEffect, useState } from "react";

export default function Card({ data, safeAreaH, bannerText, cardAccentColor, cardImage, chips, ctaButtonLabel, view }) {
    const navigation = useNavigation();
    // styles
    const styles = StyleSheet.create({
        card: {
            height: safeAreaH,
            paddingHorizontal: 24,
        },
    });

    // handle rocket data
    // ===========================
    // state for child (details) API data
    const [rocketDetails, setRocketDetails] = useState(null);

    const fetchRocketDetails = async () => {
        try {
            // fetch url passed in through upcomingData
            const rocketDetails = await axios.get(data.rocket.configuration.url);

            // set states of upcomingDetails with new data
            setRocketDetails(rocketDetails.data);
            // store date of fetch
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRocketDetails();
    }, []);

    return (
        <Pressable
            activeOpacity={0.5}
            onPress={async () => {
                navigation.navigate("LoadingScreen");
                await fetchRocketDetails();
                navigation.replace("LaunchDetails", { data: data, rocketDetails: rocketDetails, view: view });
            }}
        >
            <ImageBackground
                source={{ uri: cardImage }}
                style={styles.card}
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
