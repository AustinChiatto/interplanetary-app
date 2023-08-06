// native components
import { StatusBar, View, StyleSheet, ScrollView } from "react-native";

// hooks
import React, { useState, useContext } from "react";

// context
import DataContext from "../../context/DataContext";

// custom components
import Card from "../../components/card/Card";

export default function Upcoming() {
    const [safeAreaH, setSafeAreaH] = useState(0);
    // color used for card accents
    const cardAccentColor = "#FF003D";
    // API data from context
    const { upcomingData } = useContext(DataContext);

    return (
        <View
            style={{ flex: 1 }}
            onLayout={(e) => {
                setSafeAreaH(e.nativeEvent.layout.height);
            }}
        >
            <StatusBar hidden={true} />
            <ScrollView
                style={styles.wrapper}
                decelerationRate="fast"
                snapToInterval={safeAreaH}
                snapToAlignment="start"
            >
                {upcomingData &&
                    upcomingData.results &&
                    Object.values(upcomingData.results).map((e) => (
                        <Card
                            key={e.id}
                            safeAreaH={safeAreaH}
                            cardAccentColor={cardAccentColor}
                            cardImage={e.image}
                            bannerText={e.name}
                            chips={{ provider: e.launch_service_provider.name, vehicle: e.rocket.configuration.name }}
                            ctaButtonLabel={e.window_start}
                        />
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#000",
    },
});
