import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../theme";
import { Quest } from "../types/domain";

function getDifficultyColor(quest: Quest) {
  if (quest.difficulty === "Fácil") return colors.purple;
  if (quest.difficulty === "Média") return colors.orange;
  return colors.red;
}

function getStatusColor(quest: Quest) {
  if (quest.status === "Disponível") return colors.cyan;
  if (quest.status === "Enviada") return colors.orange;
  return colors.purple;
}

type MissionListCardProps = {
  quest: Quest;
  onPress: () => void;
};

export function MissionListCard({ quest, onPress }: MissionListCardProps) {
  const difficultyColor = getDifficultyColor(quest);
  const statusColor = getStatusColor(quest);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={[styles.cardColor, { backgroundColor: difficultyColor }]} />

      <View style={[styles.icon, { borderColor: difficultyColor }]}>
        <Text style={{ color: difficultyColor }}>☹</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{quest.title}</Text>
        <View style={styles.details}>
          <Text style={styles.difficulty}>{quest.difficulty}</Text>
          <Text style={styles.xp}>+{quest.reward.xp} XP</Text>
        </View>
      </View>

      <View style={[styles.status, { borderColor: statusColor }]}>
        <Text style={[styles.statusText, { color: statusColor }]}>
          {quest.status}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 66,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: "hidden",
  },
  pressed: { opacity: 0.75 },
  cardColor: { width: 4, alignSelf: "stretch" },
  icon: {
    width: 36,
    height: 36,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  info: { flex: 1 },
  title: { fontFamily: fonts.bold, fontSize: 12, color: colors.text },
  details: { flexDirection: "row", gap: 6, marginTop: 3 },
  difficulty: { fontFamily: fonts.regular, fontSize: 9, color: colors.muted },
  xp: { fontFamily: fonts.bold, fontSize: 9, color: colors.green },
  status: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  statusText: { fontFamily: fonts.semibold, fontSize: 8 },
});