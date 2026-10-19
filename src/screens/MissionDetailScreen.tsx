import { useRouter } from "expo-router";
import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "../components/Icon";
import { colors, fonts } from "../theme";
import { Quest } from "../types/domain";

type MissionDetailScreenProps = {
  quest: Quest;
};

export function MissionDetailScreen({ quest }: MissionDetailScreenProps) {
  const router = useRouter();

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <Text style={styles.backText}>← Voltar</Text>
            </Pressable>
            <Text style={styles.headerTitle}>Detalhes</Text>
            <View style={styles.headerSpace} />
          </View>

          <View style={styles.hero}>
            <View style={styles.heroIcon}>
              <Icon name="mission" />
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.titleRow}>
              <Text style={styles.title}>{quest.title}</Text>
              <View style={styles.difficultyBadge}>
                <Text style={styles.difficulty}>{quest.difficulty.toUpperCase()}</Text>
              </View>
            </View>

            <View style={styles.parchment}>
              <Text style={styles.parchmentLabel}>INSTRUÇÕES DO PERGAMINHO</Text>
              <Text style={styles.parchmentBody}>{quest.description}</Text>

              <View style={styles.parchmentDivider} />

              <Text style={styles.parchmentLabel}>CRITÉRIOS DE CONCLUSÃO</Text>
              <View style={styles.criteria}>
                {quest.criteria.map((criterion) => (
                  <Text key={criterion} style={styles.criterion}>
                    ✓  {criterion}
                  </Text>
                ))}
              </View>

              {quest.dueDate && (
                <>
                  <View style={styles.parchmentDivider} />
                  <Text style={styles.deadline}>⌛ Prazo final: {quest.dueDate}</Text>
                </>
              )}
            </View>

            <Text style={styles.rewardsTitle}>SPOILS DE BATALHA (RECOMPENSAS)</Text>
            <View style={styles.rewards}>
              <View style={styles.rewardCard}>
                <Text style={styles.rewardLabel}>XP</Text>
                <Text style={[styles.rewardValue, { color: colors.green }]}>
                  +{quest.reward.xp} XP
                </Text>
              </View>

              <View style={styles.rewardCard}>
                <Text style={styles.rewardLabel}>OURO</Text>
                <Text style={[styles.rewardValue, { color: colors.orange }]}>
                  +{quest.reward.coins} moedas
                </Text>
              </View>

              <View style={styles.rewardCard}>
                <Text style={styles.rewardLabel}>EQUIPAMENTO</Text>
                <Text style={[styles.rewardEquipment, { color: colors.cyan }]}>
                  {quest.reward.equipment ?? "—"}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Pressable
            onPress={() => {
                if (Platform.OS === "web") {
                    window.alert(`Missão aceita: ${quest.title}`);
                } else {
                    Alert.alert("Missão aceita", quest.title);
                }
            }}
            style={({ pressed }) => [styles.acceptButton, pressed && styles.pressed]}
          >
            <Text style={styles.acceptText}>Aceitar Missão</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, alignItems: "center", backgroundColor: colors.background },
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 390 : 600,
    backgroundColor: colors.background,
  },
  scroll: { flex: 1 },
  content: { paddingBottom: 24 },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  backButton: { minWidth: 80, height: 40, justifyContent: "center" },
  backText: { fontFamily: fonts.bold, fontSize: 14, color: colors.purple },
  headerTitle: { fontFamily: fonts.semibold, fontSize: 14, color: colors.muted },
  headerSpace: { width: 80 },
  hero: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D2B30",
  },
  heroIcon: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: colors.purple,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  main: { padding: 20 },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  title: {
    flex: 1,
    fontFamily: fonts.extrabold,
    fontSize: 22,
    lineHeight: 27,
    color: colors.text,
  },
  difficultyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 6,
  },
  difficulty: { fontFamily: fonts.bold, fontSize: 10, color: colors.orange },
  parchment: {
    marginTop: 16,
    padding: 20,
    borderRadius: 14,
    backgroundColor: colors.parchment,
  },
  parchmentLabel: {
    fontFamily: fonts.extrabold,
    fontSize: 11,
    color: "#786A5E",
    marginBottom: 8,
  },
  parchmentBody: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 22,
    color: colors.parchmentText,
  },
  parchmentDivider: {
    height: 1,
    backgroundColor: "#CABD9E",
    marginVertical: 16,
  },
  criteria: { gap: 8 },
  criterion: {
    fontFamily: fonts.bold,
    fontSize: 12,
    lineHeight: 17,
    color: colors.parchmentText,
  },
  deadline: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.parchmentText,
  },
  rewardsTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 11,
    color: colors.muted,
    marginTop: 24,
    marginBottom: 10,
  },
  rewards: { flexDirection: "row", gap: 10 },
  rewardCard: {
    flex: 1,
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  rewardLabel: { fontFamily: fonts.semibold, fontSize: 9, color: colors.muted },
  rewardValue: { fontFamily: fonts.extrabold, fontSize: 14, marginTop: 4, textAlign: "center" },
  rewardEquipment: { fontFamily: fonts.bold, fontSize: 10, marginTop: 4, textAlign: "center" },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  acceptButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.purple,
  },
  pressed: { opacity: 0.75 },
  acceptText: { fontFamily: fonts.bold, fontSize: 16, color: colors.background },
});