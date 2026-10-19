import { StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../theme";
import { Equipment } from "../types/domain";

type EquipmentCardProps = {
  equipment: Equipment;
};

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{equipment.icon}</Text>
      <View>
        <Text style={styles.name}>{equipment.name}</Text>
        <Text style={styles.type}>
          {equipment.slot} ({equipment.rarity})
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
    borderRadius: 9,
    backgroundColor: colors.surface,
  },
  icon: { fontSize: 22, color: colors.purple },
  name: { fontFamily: fonts.bold, fontSize: 12, color: colors.text },
  type: {
    fontFamily: fonts.regular,
    fontSize: 9,
    color: colors.muted,
    marginTop: 2,
  },
});