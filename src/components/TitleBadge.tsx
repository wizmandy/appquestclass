import { StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../theme";
import { PlayerTitle } from "../types/domain";

type TitleBadgeProps = {
  title: PlayerTitle;
};

export function TitleBadge({ title }: TitleBadgeProps) {
  const color =
    title.variant === "pink"
      ? colors.pink
      : title.variant === "green"
        ? colors.green
        : colors.purple;

  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <Text style={[styles.text, { color }]}>{title.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 5,
  },
  text: { fontFamily: fonts.regular, fontSize: 9 },
});