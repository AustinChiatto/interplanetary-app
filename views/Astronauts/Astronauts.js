// native components
import { StatusBar, View, StyleSheet, ScrollView } from "react-native";

// hooks
import React, { useState } from "react";

// custom components
import Card from "../../components/card/Card";

export default function Astronauts() {
    const [safeAreaH, setSafeAreaH] = useState(0);
    // color used for card accents
    const cardAccentColor = "#FF3D00";

    // todo: temp array - this will be filled by API
    const cardArray = [
        { index: 1, safeAreaH: safeAreaH, cardAccentColor: cardAccentColor, cardImage: "test", bannerText: "Astronauts 1", chips: "chips", ctaButtonLabel: "CTA Button" },
        { index: 2, safeAreaH: safeAreaH, cardAccentColor: cardAccentColor, cardImage: "test", bannerText: "Astronauts 2", chips: "chips", ctaButtonLabel: "CTA Button" },
        { index: 3, safeAreaH: safeAreaH, cardAccentColor: cardAccentColor, cardImage: "test", bannerText: "Astronauts 3", chips: "chips", ctaButtonLabel: "CTA Button" },
    ];

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
                {Object.values(cardArray).map((e) => (
                    <Card
                        key={e.index}
                        safeAreaH={e.safeAreaH}
                        cardAccentColor={e.cardAccentColor}
                        cardImage={e.cardImage}
                        bannerText={e.bannerText}
                        chips={e.chips}
                        ctaButtonLabel={e.ctaButtonLabel}
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
