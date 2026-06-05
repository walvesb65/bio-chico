import type { Plant } from "../types/plant.types";

export const plantImages = {
  ipeAmarelo:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/651698542/large.jpg",
  pauBrasil:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/673317498/large.jpg",
  mandacaru:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/671529896/large.jpg",
  vitoriaRegia:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/672887099/large.jpg",
  jatoba:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/667134263/large.jpg",
  aroeira:
    "https://inaturalist-open-data.s3.amazonaws.com/photos/673203627/large.jpg",
};

export const plantsMock: Plant[] = [
  {
    id: "ipe-amarelo",
    nomePopular: "Ipe-amarelo",
    nomeCientifico: "Handroanthus albus",
    familia: "Bignoniaceae",
    categoria: "Arvore",
    bioma: "Cerrado e Mata Atlantica",
    origem: "Nativa do Brasil",
    descricao:
      "Arvore ornamental brasileira conhecida pela florada amarela intensa, que costuma aparecer antes da brotacao das folhas.",
    caracteristicas: [
      "Flores amarelas em cachos",
      "Copa aberta e tronco fissurado",
      "Pode atingir de 8 a 20 metros",
    ],
    usos: [
      "Arborizacao urbana",
      "Recuperacao paisagistica",
      "Atracao de polinizadores",
    ],
    epocaFloracao: "Final do inverno e primavera",
    epocaFrutificacao: "Primavera e inicio do verao",
    cuidados:
      "Prefere sol pleno, solo bem drenado e espaco para desenvolvimento das raizes.",
    curiosidades:
      "A florada do ipe costuma marcar a transicao entre a estacao seca e o retorno das chuvas em varias regioes.",
    statusConservacao: "Pouco preocupante",
    imagem: plantImages.ipeAmarelo,
  },
  {
    id: "pau-brasil",
    nomePopular: "Pau-brasil",
    nomeCientifico: "Paubrasilia echinata",
    familia: "Fabaceae",
    categoria: "Arvore",
    bioma: "Mata Atlantica",
    origem: "Nativa do Brasil",
    descricao:
      "Especie simbolo do pais, historicamente explorada pela madeira e pelo pigmento avermelhado extraido do cerne.",
    caracteristicas: [
      "Tronco com aculeos",
      "Flores amarelas com mancha avermelhada",
      "Madeira densa e avermelhada",
    ],
    usos: [
      "Educacao ambiental",
      "Reflorestamento",
      "Paisagismo em areas amplas",
    ],
    epocaFloracao: "Setembro a novembro",
    epocaFrutificacao: "Novembro a janeiro",
    cuidados:
      "Necessita de boa luminosidade, solo profundo e protecao nos primeiros anos de crescimento.",
    curiosidades:
      "O nome Brasil tem relacao direta com a cor de brasa da madeira desta especie.",
    statusConservacao: "Ameacada",
    imagem: plantImages.pauBrasil,
  },
  {
    id: "mandacaru",
    nomePopular: "Mandacaru",
    nomeCientifico: "Cereus jamacaru",
    familia: "Cactaceae",
    categoria: "Cacto",
    bioma: "Caatinga",
    origem: "Nativa do Brasil",
    descricao:
      "Cacto colunar adaptado ao clima semiarido, muito associado a paisagens da Caatinga e a resistencia da vegetacao nordestina.",
    caracteristicas: [
      "Caule verde suculento",
      "Espinhos robustos",
      "Flores grandes de abertura noturna",
    ],
    usos: [
      "Alimento emergencial para animais",
      "Cercas vivas",
      "Paisagismo xerofito",
    ],
    epocaFloracao: "Primavera e verao",
    epocaFrutificacao: "Verao",
    cuidados:
      "Exige sol direto, pouca irrigacao e substrato com excelente drenagem.",
    curiosidades:
      "Suas flores noturnas favorecem polinizadores como morcegos e mariposas.",
    statusConservacao: "Pouco preocupante",
    imagem: plantImages.mandacaru,
  },
  {
    id: "vitoria-regia",
    nomePopular: "Vitoria-regia",
    nomeCientifico: "Victoria amazonica",
    familia: "Nymphaeaceae",
    categoria: "Aquatica",
    bioma: "Amazonia",
    origem: "Nativa da America do Sul",
    descricao:
      "Planta aquatica monumental da Amazonia, famosa pelas folhas circulares que flutuam sobre aguas calmas.",
    caracteristicas: [
      "Folhas flutuantes de grande diametro",
      "Bordas elevadas",
      "Flores aromaticas que mudam de cor",
    ],
    usos: [
      "Educacao ambiental",
      "Jardins aquaticos",
      "Pesquisa botanica",
    ],
    epocaFloracao: "Periodo chuvoso",
    epocaFrutificacao: "Apos a floracao",
    cuidados:
      "Precisa de agua parada ou lenta, sol abundante e ambiente quente.",
    curiosidades:
      "A flor pode abrir branca na primeira noite e assumir tons rosados na noite seguinte.",
    statusConservacao: "Pouco preocupante",
    imagem: plantImages.vitoriaRegia,
  },
  {
    id: "jatoba",
    nomePopular: "Jatoba",
    nomeCientifico: "Hymenaea courbaril",
    familia: "Fabaceae",
    categoria: "Arvore",
    bioma: "Cerrado, Amazonia e Mata Atlantica",
    origem: "Nativa das Americas",
    descricao:
      "Arvore de grande porte que produz frutos lenhosos com polpa farinacea e adocicada.",
    caracteristicas: [
      "Folhas compostas por dois foliolos",
      "Frutos duros e marrons",
      "Tronco robusto com copa ampla",
    ],
    usos: [
      "Alimentacao regional",
      "Sombreamento",
      "Recuperacao de areas degradadas",
    ],
    epocaFloracao: "Agosto a novembro",
    epocaFrutificacao: "Julho a setembro",
    cuidados:
      "Desenvolve-se melhor em sol pleno, com solo profundo e area ampla.",
    curiosidades:
      "A polpa do fruto pode ser usada em farinhas, bolos e bebidas tradicionais.",
    statusConservacao: "Pouco preocupante",
    imagem: plantImages.jatoba,
  },
  {
    id: "aroeira",
    nomePopular: "Aroeira",
    nomeCientifico: "Schinus terebinthifolia",
    familia: "Anacardiaceae",
    categoria: "Arbusto",
    bioma: "Mata Atlantica, Cerrado e Restinga",
    origem: "Nativa da America do Sul",
    descricao:
      "Especie rustica, de pequeno a medio porte, reconhecida pelos frutos vermelhos usados como pimenta-rosa.",
    caracteristicas: [
      "Frutos pequenos e vermelhos",
      "Folhas aromaticas",
      "Boa adaptacao a solos variados",
    ],
    usos: [
      "Recuperacao ambiental",
      "Atracao de aves",
      "Uso culinario dos frutos",
    ],
    epocaFloracao: "Setembro a janeiro",
    epocaFrutificacao: "Janeiro a julho",
    cuidados:
      "Tolera sol pleno, solos pobres e periodos curtos de estiagem depois de estabelecida.",
    curiosidades:
      "Os frutos sao consumidos por aves, ajudando na dispersao natural das sementes.",
    statusConservacao: "Pouco preocupante",
    imagem: plantImages.aroeira,
  },
];

export const plantCategories = ["Todas", "Arvore", "Arbusto", "Cacto", "Aquatica"];
