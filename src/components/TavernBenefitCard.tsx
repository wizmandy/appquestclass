import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../theme";
import { TavernBenefit } from "../types/domain";

type TavernBenefitCardProps = {
  benefit: TavernBenefit;
  onRedeem: () => void;
};

export function TavernBenefitCard({
  benefit,
  onRedeem,
}: TavernBenefitCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{benefit.icon}</Text>
        </View>
        <Text style={styles.price}>◉ {benefit.price}</Text>
      </View>

      <Text style={styles.title}>{benefit.title}</Text>
      <Text style={styles.description}>{benefit.description}</Text>

      <Pressable
        onPress={onRedeem}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Resgatar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    minHeight: 170,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBox: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.border,
  },
  icon: { fontSize: 18, color: colors.purple },
  price: { fontFamily: fonts.bold, fontSize: 10, color: colors.orange },
  title: {
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
  pressed: { opacity: 0.65 },
  buttonText: { fontFamily: fonts.semibold, fontSize: 9, color: colors.purple },
});