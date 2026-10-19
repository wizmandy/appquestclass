import { Redirect, useLocalSearchParams } from "expo-router";

import { quests } from "../../mocks/quests";
import { MissionDetailScreen } from "../../screens/MissionDetailScreen";

export default function MissionDetailRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const quest = quests.find((item) => item.id === id);

  if (!quest) {
    return <Redirect href="/missoes" />;
  }

  return <MissionDetailScreen quest={quest} />;
}