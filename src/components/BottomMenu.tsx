import { usePathname, useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, fonts } from "../theme";
import { Icon } from "./Icon";

export type MenuSection =
  | "Jornada"
  | "Missões"
  | "Taverna"
  | "Personagem";

const items = [
  {
    label: "Jornada",
    icon: "journey",
    route: "/",
  },
  {
    label: "Missões",
    icon: "quests",
    route: "/missao/missoes",
  },
  {
    label: "Taverna",
    icon: "tavern",
    route: "/missao/taverna",
  },
  {
    label: "Personagem",
    icon: "character",
    route: "/missao/personagem",
  },
] as const;

export function BottomMenu() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {items.map((item) => {
        const active = pathname === item.route;

        return (
          <Pressable
            key={item.label}
            onPress={() => router.push(item.route)}
            style={({ pressed }) => [
              styles.item,
              pressed && styles.pressed,
            ]}
          >
            <Icon
              name={item.icon}
              color={
                active
                  ? colors.purple
                  : colors.muted
              }
            />

            <Text
              style={[
                styles.label,
                active && styles.active,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },

  item: {
    width: 72,
    flexShrink: 1,
    minHeight: 44,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  pressed: {
    opacity: 0.65,
  },

  label: {
    fontFamily: fonts.semibold,
    fontSize: 11,
    lineHeight: 14,
    color: colors.muted,
  },

  active: {
    color: colors.purple,
  },
});