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
                    upcomingData.result &&
                    Object.values(upcomingData.result).map(
                        (e) =>
                            e.t0 && (
                                <Card
                                    key={e.id}
                                    safeAreaH={safeAreaH}
                                    cardAccentColor={cardAccentColor}
                                    cardImage={e.cardImage}
                                    bannerText={e.name}
                                    chips={{ provider: e.provider.name, vehicle: e.vehicle.name }}
                                    ctaButtonLabel={e.t0}
                                />
                            )
                    )}
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