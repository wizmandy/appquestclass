import { Image, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomMenu } from "../components/BottomMenu";
import { EquipmentCard } from "../components/EquipmentCard";
import { ProgressBar } from "../components/ProgressBar";
import { TitleBadge } from "../components/TitleBadge";
import { player } from "../mocks/player";
import { colors, fonts } from "../theme";

export function CharacterScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Personagem</Text>
            <Text style={styles.settings}>⚙</Text>
          </View>

          <View style={styles.profile}>
            <View style={styles.avatarBorder}>
              <Image
                source={require("../../assets/images/lyra.png")}
                style={styles.avatar}
              />
            </View>

            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.className}>{player.characterClass}</Text>

            <View style={styles.level}>
              <Text style={styles.levelText}>Nível {player.level}</Text>
            </View>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.label}>PROGRESSO</Text>
              <Text style={styles.progressText}>
                {player.xp} / {player.nextLevelXp} XP
              </Text>
            </View>

            <View style={styles.progressSpacing}>
              <ProgressBar
                value={player.xp}
                max={player.nextLevelXp}
                color={colors.purple}
                label="Progresso do personagem"
              />
            </View>

            <View style={styles.stats}>
              <View>
                <Text style={styles.label}>MOEDAS</Text>
                <Text style={styles.coin}>◉ {player.coins}</Text>
              </View>

              <View>
                <Text style={styles.label}>MISSÕES</Text>
                <Text style={styles.statText}>{player.completedMissions} concluídas</Text>
              </View>

              <View>
                <Text style={styles.label}>SEQUÊNCIA</Text>
                <Text style={styles.streak}>{player.streak} dias</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Títulos Desbloqueados</Text>
          <View style={styles.badges}>
            {player.titles.map((title) => (
              <TitleBadge key={title.id} title={title} />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Equipamento Atual</Text>
          {player.equipment.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </ScrollView>

        <BottomMenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 390 : 600,
    backgroundColor: colors.background,
  },
  scroll: { flex: 1 },
  content: { padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontFamily: fonts.extrabold, fontSize: 20, color: colors.text },
  settings: { fontSize: 20, color: colors.muted },
  profile: { alignItems: "center", marginTop: 20 },
  avatarBorder: {
    width: 124,
    height: 124,
    padding: 4,
    borderWidth: 3,
    borderColor: colors.purple,
    borderRadius: 62,
  },
  avatar: { width: "100%", height: "100%", borderRadius: 58 },
  name: {
    fontFamily: fonts.extrabold,
    fontSize: 22,
    color: colors.text,
    marginTop: 12,
  },
  className: {
    fontFamily: fonts.semibold,
    fontSize: 13,
    color: colors.purple,
    marginTop: 3,
  },
  level: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 10,
    marginTop: 8,
  },
  levelText: { fontFamily: fonts.bold, fontSize: 9, color: colors.orange },
  statsCard: {
    padding: 14,
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  progressHeader: { flexDirection: "row", justifyContent: "space-between" },
  progressSpacing: { marginTop: 6 },
  label: { fontFamily: fonts.bold, fontSize: 9, color: colors.muted },
  progressText: { fontFamily: fonts.bold, fontSize: 9, color: colors.text },
  stats: { flexDirection: "row", justifyContent: "space-between", marginTop: 14 },
  coin: { fontFamily: fonts.bold, fontSize: 11, color: colors.orange, marginTop: 3 },
  statText: { fontFamily: fonts.bold, fontSize: 11, color: colors.text, marginTop: 3 },
  streak: { fontFamily: fonts.bold, fontSize: 11, color: colors.pink, marginTop: 3 },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginTop: 18,
    marginBottom: 9,
  },
  badges: { flexDirection: "row", flexWrap: "wrap", gap: 7 },
});