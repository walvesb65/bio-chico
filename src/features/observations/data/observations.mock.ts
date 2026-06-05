import type { Observation } from "../types/observation.types";
import { plantImages } from "../../plants/data/plants.mock";

export const observationsMock: Observation[] = [
  {
    id: "obs-001",
    plantaId: "ipe-amarelo",
    nomePlanta: "Ipe-amarelo",
    imagem: plantImages.ipeAmarelo,
    local: "Praca central, Pirapora",
    data: "2026-05-18",
    ambiente: "Area urbana arborizada",
    descricao:
      "Exemplar em florada intensa, com muitas abelhas visitando as flores no periodo da manha.",
  },
  {
    id: "obs-002",
    plantaId: "mandacaru",
    nomePlanta: "Mandacaru",
    imagem: plantImages.mandacaru,
    local: "Trilha da Serra",
    data: "2026-04-27",
    ambiente: "Area seca com solo pedregoso",
    descricao:
      "Planta adulta com ramos bem desenvolvidos e sinais de brotacao recente apos chuva.",
  },
  {
    id: "obs-003",
    plantaId: "aroeira",
    nomePlanta: "Aroeira",
    imagem: plantImages.aroeira,
    local: "Margem do Rio Sao Francisco",
    data: "2026-03-11",
    ambiente: "Mata ciliar",
    descricao:
      "Individuo com frutos vermelhos, visitado por passaros pequenos durante a observacao.",
  },
];
