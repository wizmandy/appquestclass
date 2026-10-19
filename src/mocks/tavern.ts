import { TavernBenefit } from "../types/domain";

export const tavernBenefits: TavernBenefit[] = [
  {
    id: "oracle",
    title: "Visão do Oráculo",
    description: "Veja uma dica da missão atual.",
    price: 30,
    icon: "✦",
  },
  {
    id: "bug-shield",
    title: "Escudo contra Bugs",
    description: "Uma chance extra de reenvio na missão.",
    price: 50,
    icon: "◇",
  },
  {
    id: "time-potion",
    title: "Poção do Tempo",
    description: "+24h de prazo extra para entregar.",
    price: 40,
    icon: "◉",
  },
  {
    id: "second-chance",
    title: "Segunda Chance",
    description: "Refaça uma missão que foi reprovada.",
    price: 60,
    icon: "♧",
  },
  {
    id: "master-advice",
    title: "Conselho do Mestre",
    description: "Feedback detalhado antecipado do seu código.",
    price: 80,
    icon: "▤",
  },
];