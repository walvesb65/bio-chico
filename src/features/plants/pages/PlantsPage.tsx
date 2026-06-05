import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { CategoryFilter } from "../../../components/CategoryFilter/CategoryFilter";
import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { Header } from "../../../components/Header/Header";
import { PlantCard } from "../../../components/PlantCard/PlantCard";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import styles from "../../../styles/page.module.css";
import { plantCategories, plantsMock } from "../data/plants.mock";

export function PlantsPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const { isFavorite, toggleFavorite } = useApp();

  const filteredPlants = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return plantsMock.filter((plant) => {
      const matchesSearch =
        !normalizedSearch ||
        plant.nomePopular.toLowerCase().includes(normalizedSearch) ||
        plant.nomeCientifico.toLowerCase().includes(normalizedSearch);
      const matchesCategory =
        activeCategory === "Todas" || plant.categoria === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, search]);

  return (
    <div className={styles.page}>
      <Header
        title="Explorar plantas"
        subtitle="Busque por nome popular, cientifico ou categoria."
      />

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Ex.: ipe, jatoba, Victoria"
      />

      <CategoryFilter
        categories={plantCategories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <section className={styles.grid}>
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={isFavorite(plant.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <EmptyState
            title="Nenhuma planta encontrada"
            description="Tente ajustar a busca ou remover o filtro selecionado."
          />
        )}
      </section>
    </div>
  );
}
