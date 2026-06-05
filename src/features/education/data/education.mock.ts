import type { EducationContent } from "../types/education.types";
import { plantImages } from "../../plants/data/plants.mock";

export const educationMock: EducationContent[] = [
  {
    id: "plantas-nativas-brasileiras",
    titulo: "Plantas nativas brasileiras",
    categoria: "Biodiversidade",
    tempoLeitura: "4 min",
    resumo:
      "Entenda por que especies nativas sao fundamentais para paisagens mais resilientes e para a fauna local.",
    conteudo: [
      "Plantas nativas evoluiram em relacao direta com o clima, o solo e os animais de suas regioes. Por isso, costumam oferecer alimento, abrigo e rotas de deslocamento para polinizadores, aves e outros organismos.",
      "Ao reconhecer e valorizar essas especies, comunidades conseguem planejar jardins, pracas e areas restauradas que demandam menos manejo e mantem mais relacoes ecologicas ativas.",
      "O registro de observacoes ajuda a mapear onde essas plantas aparecem e como se comportam em diferentes ambientes ao longo do tempo.",
    ],
    imagem: plantImages.ipeAmarelo,
  },
  {
    id: "importancia-dos-biomas",
    titulo: "Importancia dos biomas",
    categoria: "Ecologia",
    tempoLeitura: "5 min",
    resumo:
      "Biomas organizam grandes paisagens naturais e ajudam a compreender a distribuicao das plantas.",
    conteudo: [
      "Amazonia, Caatinga, Cerrado, Mata Atlantica, Pampa e Pantanal possuem condicoes ambientais e historias naturais distintas. Cada bioma abriga grupos de plantas adaptados a seus ciclos de agua, temperatura e solo.",
      "Conhecer o bioma de uma especie facilita escolhas de plantio, restauracao e conservacao, pois evita retirar a planta do contexto ambiental em que ela melhor se desenvolve.",
      "A educacao ambiental ganha forca quando conecta especies conhecidas do cotidiano com esses grandes sistemas naturais.",
    ],
    imagem: plantImages.mandacaru,
  },
  {
    id: "como-registrar-observacao-vegetal",
    titulo: "Como registrar uma observacao vegetal",
    categoria: "Guia pratico",
    tempoLeitura: "3 min",
    resumo:
      "Veja quais informacoes tornam um registro de planta mais util para estudo, memoria e conservacao.",
    conteudo: [
      "Uma boa observacao inclui local, data, ambiente, fotos nitidas e detalhes visiveis como folhas, flores, frutos, casca e porte da planta.",
      "Tambem e importante anotar se a planta estava em area urbana, trilha, margem de rio, jardim, pasto ou fragmento de vegetacao nativa.",
      "Mesmo quando a identificacao nao e certa, registros bem descritos ajudam especialistas e aplicativos futuros a comparar evidencias.",
    ],
    imagem: plantImages.jatoba,
  },
  {
    id: "especies-ameacadas-conservacao",
    titulo: "Especies ameacadas e conservacao",
    categoria: "Conservacao",
    tempoLeitura: "6 min",
    resumo:
      "Saiba como pressao humana, perda de habitat e manejo inadequado afetam especies vegetais.",
    conteudo: [
      "Uma especie pode se tornar ameacada quando suas populacoes diminuem, seus habitats sao fragmentados ou a exploracao supera sua capacidade de regeneracao.",
      "A conservacao envolve proteger areas naturais, restaurar ambientes degradados, reduzir coleta ilegal e ampliar a producao de mudas com origem conhecida.",
      "Aplicativos de registro podem apoiar esse processo ao aproximar pessoas da flora local e organizar dados de ocorrencia de forma acessivel.",
    ],
    imagem: plantImages.pauBrasil,
  },
];
