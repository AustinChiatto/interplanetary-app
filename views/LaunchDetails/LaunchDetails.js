// native components
import { StyleSheet, Text, View, ScrollView } from "react-native";
import LaunchDetailHeader from "../../components/LaunchDetailHeader/LaunchDetailHeader";
import MissionDetails from "../../components/LaunchDetails/MissionDetails/MissionDetails";

export default function LaunchDetails({ route }) {
    const { data, rocketDetails, view } = route.params;

    return (
        <View style={styles.wrapper}>
            <ScrollView style={styles.container}>
                <LaunchDetailHeader
                    view={view}
                    bannerText={data.window_start}
                    chips={{ agency: data.mission?.agencies[0]?.abbrev ?? data.pad.country_code, status: data.status.name, country: data.pad.country_code }}
                />
                <MissionDetails
                    sectionLabel="Mission Details"
                    title={data.mission && data.mission.name ? data.mission.name : "Redacted"}
                    desc={data.mission && data.mission.description ? data.mission.description : "Redacted"}
                    stats={{
                        stat1: {
                            index: "0",
                            label: "Mission Type",
                            content: data.mission && data.mission.type ? data.mission.type : "Unknown",
                        },
                        stat2: {
                            index: "1",
                            label: "Mission Orbit",
                            content: data.mission && data.mission.orbit.name ? data.mission.orbit.name : "Unknown",
                        },
                        stat3: {
                            index: "2",
                            label: "Launch Location",
                            content: data.pad && data.pad.name ? data.pad.name : "Unknown",
                        },
                    }}
                />
                <MissionDetails
                    sectionLabel="Vehicle Details"
                    title={data.rocket && data.rocket.configuration.full_name ? data.rocket.configuration.full_name : "Redacted"}
                    desc={rocketDetails && rocketDetails.description ? rocketDetails.description : "Unknown"}
                    stats={{
                        stat1: {
                            index: "0",
                            label: "Vehicle",
                            content: rocketDetails && rocketDetails.name ? rocketDetails.name : "Unknown",
                        },
                        stat1: {
                            index: "1",
                            label: "Variant",
                            content: rocketDetails && rocketDetails.variant ? rocketDetails.variant : "None",
                        },
                        stat2: {
                            index: "2",
                            label: "Height",
                            content: rocketDetails && rocketDetails.length ? `${rocketDetails.length} Meters` : "Unknown",
                        },
                        stat3: {
                            index: "3",
                            label: "Diameter",
                            content: rocketDetails && rocketDetails.diameter ? `${rocketDetails.diameter} Meters` : "Unknown",
                        },
                        stat4: {
                            index: "4",
                            label: "Maiden Flight",
                            content: rocketDetails && rocketDetails.maiden_flight ? rocketDetails.maiden_flight : "Unknown",
                        },
                    }}
                />
                <MissionDetails
                    sectionLabel="Agency Details"
                    title={data.mission && data.mission.agencies[0] && data.mission.agencies[0].name ? data.mission.agencies[0].name : "Redacted"}
                    desc={data.mission && data.mission.agencies[0] && data.mission.agencies[0].description ? data.mission.agencies[0].description : "Unknown"}
                    stats={{
                        stat1: {
                            index: "0",
                            label: "Agency Type",
                            content: data.mission && data.mission.agencies[0] && data.mission.agencies[0].type ? data.mission.agencies[0].type : "Unknown",
                        },
                        stat2: {
                            index: "1",
                            label: "Founding Year",
                            content: data.mission && data.mission.agencies[0] && data.mission.agencies[0].founding_year ? data.mission.agencies[0].founding_year : "Unknown",
                        },
                        stat3: {
                            index: "2",
                            label: "Administrator",
                            content: data.mission && data.mission.agencies[0] && data.mission.agencies[0].administrator ? data.mission.agencies[0].administrator : "Unknown",
                        },
                        stat4: {
                            index: "3",
                            label: "Launchers",
                            content: data.mission && data.mission.agencies[0] && data.mission.agencies[0].launchers ? data.mission.agencies[0].launchers : "Unknown",
                        },
                        stat5: {
                            index: "4",
                            label: "Spacecraft",
                            content: data.mission && data.mission.agencies[0] && data.mission.agencies[0].spacecraft ? data.mission.agencies[0].spacecraft : "None",
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
