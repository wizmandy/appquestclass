import { Redirect, useLocalSearchParams } from "expo-router";

import { CharacterScreen } from "../../screens/CharacterScreen";
import { MissionScreen } from "../../screens/MissionScreen";
import { TavernScreen } from "../../screens/TavernScreen";

export default function Screen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (id === "missoes") {
    return <MissionScreen />;
  }

  if (id === "taverna") {
    return <TavernScreen />;
  }

  if (id === "personagem") {
    return <CharacterScreen />;
  }

  return <Redirect href="/" />;
}