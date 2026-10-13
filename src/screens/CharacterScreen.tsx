import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { BottomMenu } from "../components/BottomMenu";
import { colors, fonts } from "../theme";

export function CharacterScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <Text style={styles.title}>
              Personagem
            </Text>

            <Text style={styles.settings}>⚙</Text>
          </View>

          <View style={styles.profile}>
            <View style={styles.avatarBorder}>
              <Image
                source={require("../../assets/images/lyra.png")}
                style={styles.avatar}
              />
            </View>

            <Text style={styles.name}>Lyra</Text>

            <Text style={styles.className}>
              Maga dos Estados
            </Text>

            <View style={styles.level}>
              <Text style={styles.levelText}>
                Nível 4
              </Text>
            </View>
          </View>

          <View style={styles.statsCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.label}>PROGRESSO</Text>

              <Text style={styles.progressText}>
                430 / 600 XP
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            <View style={styles.stats}>
              <View>
                <Text style={styles.label}>MOEDAS</Text>
                <Text style={styles.coin}>◉ 120</Text>
              </View>

              <View>
                <Text style={styles.label}>MISSÕES</Text>
                <Text style={styles.statText}>
                  8 concluídas
                </Text>
              </View>

              <View>
                <Text style={styles.label}>SEQUÊNCIA</Text>
                <Text style={styles.streak}>
                  5 dias
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>
            Títulos Desbloqueados
          </Text>

          <View style={styles.badges}>
            <View style={styles.badge}>
              <Text style={styles.badgePurple}>
                Primeira Missão
              </Text>
            </View>

            <View style={[styles.badge, styles.badgePink]}>
              <Text style={styles.pink}>
                Sequência de 5
              </Text>
            </View>

            <View style={[styles.badge, styles.badgeGreen]}>
              <Text style={styles.green}>
                Caçadora de Bugs
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>
            Equipamento Atual
          </Text>

          <View style={styles.equipment}>
            <Text style={styles.equipmentIcon}>⚔</Text>

            <View>
              <Text style={styles.equipmentName}>
                Manto do TypeScript
              </Text>

              <Text style={styles.equipmentType}>
                Costas (Raro)
              </Text>
            </View>
          </View>

          <View style={styles.equipment}>
            <Text style={styles.equipmentIcon}>♕</Text>

            <View>
              <Text style={styles.equipmentName}>
                Coroa de Commits
              </Text>

              <Text style={styles.equipmentType}>
                Cabeça (Comum)
              </Text>
            </View>
          </View>
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

  scroll: {
    flex: 1,
  },

  content: {
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontFamily: fonts.extrabold,
    fontSize: 20,
    color: colors.text,
  },

  settings: {
    fontSize: 20,
    color: colors.muted,
  },

  profile: {
    alignItems: "center",
    marginTop: 20,
  },

  avatarBorder: {
    width: 124,
    height: 124,
    padding: 4,
    borderWidth: 3,
    borderColor: colors.purple,
    borderRadius: 62,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 58,
  },

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

  levelText: {
    fontFamily: fonts.bold,
    fontSize: 9,
    color: colors.orange,
  },

  statsCard: {
    padding: 14,
    marginTop: 24,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    fontFamily: fonts.bold,
    fontSize: 9,
    color: colors.muted,
  },

  progressText: {
    fontFamily: fonts.bold,
    fontSize: 9,
    color: colors.text,
  },

  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
    marginTop: 6,
  },

  progressFill: {
    width: "72%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: colors.purple,
  },

  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  coin: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.orange,
    marginTop: 3,
  },

  statText: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: colors.text,
    marginTop: 3,
  },

  streak: {
    fontFamily: fonts.bold,
    fontSize: 11,
    color: "#FF79C6",
    marginTop: 3,
  },

  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.text,
    marginTop: 18,
    marginBottom: 9,
  },

  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },

  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 5,
  },

  badgePurple: {
    fontFamily: fonts.regular,
    fontSize: 9,
    color: colors.purple,
  },

  badgePink: {
    borderColor: "#FF79C6",
  },

  pink: {
    fontFamily: fonts.regular,
    fontSize: 9,
    color: "#FF79C6",
  },

  badgeGreen: {
    borderColor: colors.green,
  },

  green: {
    fontFamily: fonts.regular,
    fontSize: 9,
    color: colors.green,
  },

  equipment: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
    borderRadius: 9,
    backgroundColor: colors.surface,
  },

  equipmentIcon: {
    fontSize: 22,
    color: colors.purple,
  },

  equipmentName: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.text,
  },

  equipmentType: {
    fontFamily: fonts.regular,
    fontSize: 9,
    color: colors.muted,
    marginTop: 2,
  },
});