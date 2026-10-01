import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme";
import { useLocalSearchParams } from "expo-router";
import { quests } from "../../mocks/quests";

export default function MissionDetails() {
    return (
        <View>
            <Text style={{ color: colors.text }}>
                Detalhes da missão
            </Text>
        </View>
    );
}

const { id, origem } = useLocalSearchParams<{
    id: string;
    origem?: string;
}>();

const quest = quests.find((item) => item.id === id);

if (!quest) {
    return (
        <View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Missão não encontrada
                </Text>
                <Link href="/" replace asChild>
                    <Pressable style={styles.button}>
                        <Text>Ir para Jornada</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        
    }
})