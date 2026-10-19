export type Role = "player" | "master";

export type Reward = {
  xp: number;
  coins: number;
  equipment?: string;
};

export type QuestDifficulty = "Fácil" | "Média" | "Difícil" | "Chefe";
export type QuestStatus = "Disponível" | "Aceita" | "Enviada";

export type Quest = {
  id: string;
  title: string;
  description: string;
  difficulty: QuestDifficulty;
  status: QuestStatus;
  dueDate?: string;
  criteria: string[];
  reward: Reward;
};

export type TitleVariant = "purple" | "pink" | "green";

export type PlayerTitle = {
  id: string;
  label: string;
  variant: TitleVariant;
};

export type Equipment = {
  id: string;
  name: string;
  slot: string;
  rarity: string;
  icon: string;
};

export type Player = {
  name: string;
  characterClass: string;
  role: Role;
  level: number;
  xp: number;
  nextLevelXp: number;
  coins: number;
  streak: number;
  completedMissions: number;
  titles: PlayerTitle[];
  equipment: Equipment[];
};

export type Boss = {
  name: string;
  remainingHealth: number;
  classContribution: number;
};

export type TavernBenefit = {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
};