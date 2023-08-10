// native components
import { StatusBar, View, StyleSheet, ScrollView } from "react-native";

// hooks
import React, { useState, useContext } from "react";

// context
import DataContext from "../../context/DataContext";

// custom components
import Card from "../../components/card/Card";

export default function Astronauts() {
    const [safeAreaH, setSafeAreaH] = useState(0);
    // color used for card accents
    const cardAccentColor = "#FF3D00";
    const view = "astronaut";
    // API data from context
    const { astronautData } = useContext(DataContext);

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
                {astronautData &&
                    astronautData.results &&
                    Object.values(astronautData.results).map((e) => (
                        <Card
                            key={e.id}
                            view={view}
                            safeAreaH={safeAreaH}
                            cardAccentColor={cardAccentColor}
                            cardImage={e.profile_image}
                            bannerText={e.name}
                            chips={{ chip1: e.nationality, chip2: e.agency.abbrev }}
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
