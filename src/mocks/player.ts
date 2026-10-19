import { Player } from "../types/domain";

export const player: Player = {
  name: "Lyra",
  characterClass: "Maga dos Estados",
  role: "player",
  level: 4,
  xp: 430,
  nextLevelXp: 600,
  coins: 120,
  streak: 5,
  completedMissions: 8,
  titles: [
    { id: "first-mission", label: "Primeira Missão", variant: "purple" },
    { id: "streak-5", label: "Sequência de 5", variant: "pink" },
    { id: "bug-hunter", label: "Caçadora de Bugs", variant: "green" },
  ],
  equipment: [
    {
      id: "typescript-cloak",
      name: "Manto do TypeScript",
      slot: "Costas",
      rarity: "Raro",
      icon: "⚔",
    },
    {
      id: "commit-crown",
      name: "Coroa de Commits",
      slot: "Cabeça",
      rarity: "Comum",
      icon: "♕",
    },
  ],
};