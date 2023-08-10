// native components
import { StyleSheet, View, ScrollView } from "react-native";
import AstronautDetailHeader from "../../components/AstronautDetails/AstronautDetailHeader/AstronautDetailHeader";
import AstronautDetailsContent from "../../components/AstronautDetails/AstronautDetailsContent/AstronautDetailsContent";

export default function AstronautDetails({ route }) {
    const { data } = route.params;

    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.container}>
                <AstronautDetailHeader
                    bannerText={data.name}
                    chips={{
                        chip: {
                            index: 0,
                            content: data.status.name,
                        },
                        chip: {
                            index: 1,
                            content: data.type.name,
                        },
                    }}
                />
                <AstronautDetailsContent
                    sectionLabel="Astronaut Details"
                    title={data.name}
                    desc={data.bio}
                    stats={{
                        stat1: {
                            index: "0",
                            label: "Nationality",
                            content: data.nationality,
                        },
                        stat2: {
                            index: "1",
                            label: "Data Of Birth",
                            content: data.date_of_birth,
                        },
                        stat3: {
                            index: "2",
                            label: "Age",
                            content: data.age,
                        },
                    }}
                />
                <AstronautDetailsContent
                    title="Launch Record"
                    desc={`${data.name}'s available launch data and stats.`}
                    stats={{
                        stat1: {
                            index: "0",
                            label: "First Flight",
                            content: data.first_flight,
                        },
                        stat2: {
                            index: "1",
                            label: "Most Recent Flight",
                            content: data.last_flight,
                        },
                        stat3: {
                            index: "2",
                            label: "Total Flights",
                            content: data.landings_count,
                        },
                        stat4: {
                            index: "3",
                            label: "Total Landings",
                            content: data.flights_count,
                        },
                        stat5: {
                            index: "4",
                            label: "Total Spacewalks",
                            content: data.spacewalks_count,
                        },
                    }}
                />
            </ScrollView>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#070707",
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },
});
