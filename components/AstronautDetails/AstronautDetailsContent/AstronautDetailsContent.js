// native components
import { StyleSheet, Text, View } from "react-native";

export default function AstronautDetailsContent({ sectionLabel, title, desc, stats }) {
    return (
        <View>
            <View style={styles.description}>
                {sectionLabel ? <Text style={styles.sectionLabel}>{sectionLabel}</Text> : null}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <View style={styles.stats}>
                {stats &&
                    Object.values(stats).map((e) => (
                        <View
                            key={e.index}
                            style={styles.stat}
                        >
                            <Text style={styles.statLabel}>{e.label}</Text>
                            <Text style={styles.statContent}>{e.content}</Text>
                        </View>
                    ))}
            </View>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    description: {
        marginBottom: 36,
    },
    sectionLabel: {
        color: "#616161",
        textTransform: "uppercase",
        fontSize: 12,
        paddingBottom: 4,
    },
    title: {
        color: "#fff",
        fontSize: 22,
        paddingBottom: 8,
    },
    desc: {
        color: "#B2B3B2",
        fontSize: 17,
        letterSpacing: -0.068,
        lineHeight: 25,
    },
    stats: {
        marginBottom: 36,
        paddingBottom: 36,
        borderBottomWidth: 1,
        borderColor: "#1F1F1F",
    },
    stat: {
        marginTop: 24,
    },
    statLabel: {
        color: "#616161",
        textTransform: "uppercase",
        fontSize: 12,
        paddingBottom: 4,
    },
    statContent: {
        color: "#FFFFFF",
        fontSize: 17,
    },
});
