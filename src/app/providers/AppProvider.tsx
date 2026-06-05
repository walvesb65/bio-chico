import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { observationsMock } from "../../features/observations/data/observations.mock";
import type {
  NewObservationInput,
  Observation,
} from "../../features/observations/types/observation.types";

type UserProfile = {
  nome: string;
  email: string;
  cidade: string;
  biomaFavorito: string;
  observacoes: number;
  especiesFavoritas: number;
};

type AppContextValue = {
  user: UserProfile;
  favoritePlantIds: string[];
  observations: Observation[];
  isFavorite: (plantId: string) => boolean;
  toggleFavorite: (plantId: string) => void;
  addObservation: (observation: NewObservationInput) => Observation;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

const userMock: UserProfile = {
  nome: "Francisco Alves",
  email: "francisco.biochico@email.com",
  cidade: "Pirapora, MG",
  biomaFavorito: "Cerrado",
  observacoes: 12,
  especiesFavoritas: 8,
};

export function AppProvider({ children }: { children: ReactNode }) {
  const [favoritePlantIds, setFavoritePlantIds] = useState<string[]>([
    "ipe-amarelo",
    "vitoria-regia",
  ]);
  const [observations, setObservations] =
    useState<Observation[]>(observationsMock);

  const isFavorite = useCallback(
    (plantId: string) => favoritePlantIds.includes(plantId),
    [favoritePlantIds],
  );

  const toggleFavorite = useCallback((plantId: string) => {
    setFavoritePlantIds((current) =>
      current.includes(plantId)
        ? current.filter((id) => id !== plantId)
        : [...current, plantId],
    );
  }, []);

  const addObservation = useCallback((observation: NewObservationInput) => {
    const created: Observation = {
      ...observation,
      id: `obs-${Date.now()}`,
    };

    setObservations((current) => [created, ...current]);
    return created;
  }, []);

  const value = useMemo(
    () => ({
      user: {
        ...userMock,
        observacoes: observations.length,
        especiesFavoritas: favoritePlantIds.length,
      },
      favoritePlantIds,
      observations,
      isFavorite,
      toggleFavorite,
      addObservation,
    }),
    [
      addObservation,
      favoritePlantIds,
      isFavorite,
      observations,
      toggleFavorite,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
