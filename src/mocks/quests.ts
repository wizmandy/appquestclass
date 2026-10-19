import { Quest } from "../types/domain";

export const quests: Quest[] = [
  {
    id: "goblin-das-props",
    title: "Derrote o Goblin das Props",
    description:
      "Crie um componente QuestCard reutilizável com props tipadas para título, dificuldade, prazo e recompensa.",
    difficulty: "Média",
    status: "Disponível",
    dueDate: "15 de agosto",
    criteria: [
      "Props tipadas com TypeScript",
      "Estilização Dracula Theme fiel",
      "Componente isolado e exportado",
    ],
    reward: { xp: 100, coins: 20, equipment: "Manto do TS" },
  },
  {
    id: "slime-dos-componentes",
    title: "Slime dos Componentes",
    description:
      "Crie componentes reutilizáveis para separar responsabilidades da interface.",
    difficulty: "Fácil",
    status: "Aceita",
    dueDate: "18 de agosto",
    criteria: [
      "Separar elementos repetidos em componentes",
      "Receber dados por props",
      "Manter os componentes tipados",
    ],
    reward: { xp: 50, coins: 10 },
  },
  {
    id: "hidra-do-estado",
    title: "Hidra do Estado",
    description:
      "Utilize estado para controlar mudanças e interações da interface.",
    difficulty: "Difícil",
    status: "Enviada",
    dueDate: "20 de agosto",
    criteria: [
      "Utilizar useState",
      "Atualizar a interface a partir do estado",
      "Manter os estados tipados",
    ],
    reward: { xp: 200, coins: 30 },
  },
  {
    id: "dragao-da-api",
    title: "Dragão da API",
    description:
      "Enfrente o desafio final organizando dados e estados da aplicação.",
    difficulty: "Chefe",
    status: "Disponível",
    criteria: [
      "Organizar os dados da aplicação",
      "Renderizar as informações corretamente",
      "Tratar os estados da interface",
    ],
    reward: { xp: 500, coins: 100 },
  },
];