export type Observation = {
  id: string;
  plantaId: string;
  nomePlanta: string;
  imagem: string;
  local: string;
  data: string;
  ambiente: string;
  descricao: string;
};

export type NewObservationInput = Omit<Observation, "id">;
