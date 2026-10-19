import { Alert, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomMenu } from "../components/BottomMenu";
import { TavernBenefitCard } from "../components/TavernBenefitCard";
import { player } from "../mocks/player";
import { tavernBenefits } from "../mocks/tavern";
import { colors, fonts } from "../theme";

export function TavernScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Taverna da Guilda</Text>
              <Text style={styles.subtitle}>Melhore sua jornada com benefícios</Text>
            </View>

            <View style={styles.coins}>
              <Text style={styles.coinsText}>◉ {player.coins} moedas</Text>
            </View>
          </View>

          <View style={styles.grid}>
            {tavernBenefits.map((benefit) => (
              <TavernBenefitCard
                key={benefit.id}
                benefit={benefit}
                onRedeem={() => {
                  if (Platform.OS === "web") {
                    window.alert(
                      `${benefit.title}\n\nEste benefício custa ${benefit.price} moedas.`
                    );
                  } else {
                    Alert.alert(
                      benefit.title,
                      `Este benefício custa ${benefit.price} moedas.`
                    );
                  }
                }}
              />
            ))}

            <View style={[styles.disabledCard, styles.disabled]}>
              <Text style={styles.disabledIcon}>♜</Text>
              <Text style={styles.disabledText}>Novos consumíveis em breve</Text>
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
  scroll: { flex: 1 },
  content: { padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  title: { fontFamily: fonts.extrabold, fontSize: 20, color: colors.text },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.muted,
    marginTop: 2,
  },
  coins: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 10,
  },
  coinsText: { fontFamily: fonts.bold, fontSize: 10, color: colors.orange },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  disabledCard: {
    width: "48%",
    minHeight: 170,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  disabled: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    opacity: 0.45,
  },
  disabledIcon: { fontSize: 24, color: colors.muted },
  disabledText: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.muted,
    textAlign: "center",
    marginTop: 10,
  },
});