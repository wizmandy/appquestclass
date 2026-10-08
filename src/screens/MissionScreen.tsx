import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomMenu, MenuSection } from "../components/BottomMenu";
import { colors, fonts } from "../theme";

const missions = [
    {
        title: "Derrote o Goblin das Props",
        difficulty: "Média",
        xp: "+100 XP",
        status: "Disponível",
        color: colors.orange
    },
    {
        title: "Slime dos Componentes",
        difficulty: "Fácil",
        xp: "+50 XP",
        status: "Aceita",
        color: colors.purple
    },
    {
        title: "Hidra do Estado",
        difficulty: "Difícil",
        xp: "+200 XP",
        status: "Enviada",
        color: colors.red
    },
    {
        title: "Dragão da API",
        difficulty: "Chefe",
        xp: "+500 XP",
        status: "Disponível",
        color: colors.red
    }
];

export function MissionScreen() {
    function handleMenuSelect(section: MenuSection) {
        console.log(section);
    }

    return (
        <View style={styles.background}>
            <SafeAreaView style={styles.screen}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.content}
                >
                    <Text style={styles.title}>Mural de Missões</Text>

                    <View style={styles.filters}>
                        <View style={[styles.filter, styles.filterActive]}>
                            <Text style={styles.filterActiveText}>Todas</Text>
                        </View>

                        <View style={styles.filter}>
                            <Text style={styles.filterText}>Disponíveis</Text>
                        </View>

                        <View style={styles.filter}>
                            <Text style={styles.filterText}>Aceitas</Text>
                        </View>

                        <View style={styles.filter}>
                            <Text style={styles.filterText}>Enviadas</Text>
                        </View>
                    </View>

                    <View style={styles.list}>
                        {missions.map((mission) => (
                            <View key={mission.title} style={styles.card}>
                                <View
                                    style={[
                                        styles.cardColor,
                                        { backgroundColor: mission.color },
                                    ]}
                                />

                                <View
                                    style={[
                                        styles.icon,
                                        { borderColor: mission.color },
                                    ]}
                                >
                                    <Text style={{ color: mission.color }}>☹️</Text>
                                </View>

                                <View style={styles.info}>
                                    <Text style={styles.missionTitle}>
                                        {mission.title}
                                    </Text>

                                    <View style={styles.details}>
                                        <Text style={styles.difficulty}>
                                            {mission.difficulty}
                                        </Text>

                                        <Text style={styles.xp}>
                                            {mission.xp}
                                        </Text>
                                    </View>
                                </View>

                                <View
                                    style={[
                                        styles.status,
                                        { borderColor: mission.color },
                                    ]}
                                >
                                    <Text style={styles.statusText}>
                                        {mission.status}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <BottomMenu onSelect={handleMenuSelect} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.background
    },
    screen: {
        flex: 1,
        width: "100%",
        maxWidth: Platform.OS === "web" ? 390 : 600,
        backgroundColor: colors.background
    },
    scroll: {
        flex: 1
    },
    content: {
        padding: 20
    },
    title: {
        fontFamily: fonts.extrabold,
        fontSize: 22,
        color: colors.text,
        marginBottom: 12
    },
    filters: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 18
    },
    filter: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface
    },
    filterActive: {
        backgroundColor: colors.purple
    },
    filterText: {
        fontFamily: fonts.semibold,
        fontSize: 9,
        color: colors.text
    },
    filterActiveText: {
        fontFamily: fonts.semibold,
        fontSize: 9,
        color: colors.background
    },
    list: {
        gap: 12
    },
    card: {
        minHeight: 66,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
        overflow: "hidden"
    },
    cardColor: {
        width: 4,
        alignSelf: "stretch"
    },
    icon: {
        width: 36,
        height: 36,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    info: {
        flex: 1
    },
    missionTitle: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.text
    },
    details: {
        flexDirection: "row",
        gap: 6,
        marginTop: 3
    },
    difficulty: {
        fontFamily: fonts.regular,
        fontSize: 9,
        color: colors.muted
    },
    xp: {
        fontFamily: fonts.bold,
        fontSize: 9,
        color: colors.green
    },
    status: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginRight: 8,
        borderWidth: 1,
        borderRadius: 4
    },
    statusText: {
        fontFamily: fonts.semibold,
        fontSize: 8,
        color: colors.text
    }
});