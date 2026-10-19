import { useState } from "react";
import { useRouter } from "expo-router";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomMenu } from "../components/BottomMenu";
import { MissionListCard } from "../components/MissionListCard";
import { quests } from "../mocks/quests";
import { colors, fonts } from "../theme";
import { QuestStatus } from "../types/domain";

type Filter = "Todas" | "Disponíveis" | "Aceitas" | "Enviadas";

const filters: Filter[] = ["Todas", "Disponíveis", "Aceitas", "Enviadas"];

function filterToStatus(filter: Filter): QuestStatus | undefined {
  if (filter === "Disponíveis") return "Disponível";
  if (filter === "Aceitas") return "Aceita";
  if (filter === "Enviadas") return "Enviada";
  return undefined;
}

export function MissionScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("Todas");
  const status = filterToStatus(filter);
  const visibleQuests = status
    ? quests.filter((quest) => quest.status === status)
    : quests;

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.screen}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          <Text style={styles.title}>Mural de Missões</Text>

          <View style={styles.filters}>
            {filters.map((item) => {
              const active = item === filter;

              return (
                <Pressable
                  key={item}
                  onPress={() => setFilter(item)}
                  style={[styles.filter, active && styles.filterActive]}
                >
                  <Text style={[styles.filterText, active && styles.filterActiveText]}>
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.list}>
            {visibleQuests.map((quest) => (
              <MissionListCard
                key={quest.id}
                quest={quest}
                onPress={() =>
                  router.push({
                    pathname: "/missao/[id]",
                    params: { id: quest.id },
                  })
                }
              />
            ))}
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
  title: {
    fontFamily: fonts.extrabold,
    fontSize: 22,
    color: colors.text,
    marginBottom: 12,
  },
  filters: { flexDirection: "row", gap: 8, marginBottom: 18 },
  filter: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  filterActive: { backgroundColor: colors.purple },
  filterText: { fontFamily: fonts.semibold, fontSize: 9, color: colors.text },
  filterActiveText: { color: colors.background },
  list: { gap: 12 },
});