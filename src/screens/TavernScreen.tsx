import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomMenu } from "../components/BottomMenu";
import { colors, fonts } from "../theme";

const benefits = [
  {
    title: "Visão do Oráculo",
    description: "Veja uma dica da missão atual.",
    price: 30,
  },
  {
    title: "Escudo contra Bugs",
    description: "Uma chance extra de reenvio na missão.",
    price: 50,
  },
  {
    title: "Poção do Tempo",
    description: "+24h de prazo extra para entregar.",
    price: 40,
  },
  {
    title: "Segunda Chance",
    description: "Refaça uma missão que foi reprovada.",
    price: 60,
  },
  {
    title: "Conselho do Mestre",
    description: "Feedback detalhado antecipado do seu código.",
    price: 80,
  },
];

export function TavernScreen() {
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>
                Taverna da Guilda
              </Text>

              <Text style={styles.subtitle}>
                Melhore sua jornada com benefícios
              </Text>
            </View>

            <View style={styles.coins}>
              <Text style={styles.coinsText}>
                120 moedas
              </Text>
            </View>
          </View>

          <View style={styles.grid}>
            {benefits.map((benefit) => (
              <View key={benefit.title} style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.cardIcon}>
                    <Text style={styles.cardIconText}>✦</Text>
                  </View>

                  <Text style={styles.price}>
                    ◉ {benefit.price}
                  </Text>
                </View>

                <Text style={styles.cardTitle}>
                  {benefit.title}
                </Text>

                <Text style={styles.description}>
                  {benefit.description}
                </Text>

                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    Resgatar
                  </Text>
                </View>
              </View>
            ))}

            <View style={[styles.card, styles.disabled]}>
              <Text style={styles.disabledIcon}>♜</Text>

              <Text style={styles.disabledText}>
                Novos consumíveis em breve
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
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  title: {
    fontFamily: fonts.extrabold,
    fontSize: 20,
    color: colors.text,
  },

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

  coinsText: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.orange,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  card: {
    width: "48%",
    minHeight: 170,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.border,
  },

  cardIconText: {
    fontSize: 18,
    color: colors.purple,
  },

  price: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.orange,
  },

  cardTitle: {
    fontFamily: fonts.extrabold,
    fontSize: 12,
    color: colors.text,
    marginTop: 10,
  },

  description: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 9,
    lineHeight: 12,
    color: colors.muted,
    marginTop: 4,
  },

  button: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    fontFamily: fonts.semibold,
    fontSize: 9,
    color: colors.purple,
  },

  disabled: {
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    opacity: 0.45,
  },

  disabledIcon: {
    fontSize: 24,
    color: colors.muted,
  },

  disabledText: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.muted,
    textAlign: "center",
    marginTop: 10,
  },
});