import { Link } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { Header } from "../../../components/Header/Header";
import { PlantCard } from "../../../components/PlantCard/PlantCard";
import styles from "../../../styles/page.module.css";
import { plantsMock } from "../../plants/data/plants.mock";

export function FavoritesPage() {
  const { favoritePlantIds, isFavorite, toggleFavorite } = useApp();
  const favoritePlants = plantsMock.filter((plant) =>
    favoritePlantIds.includes(plant.id),
  );

  return (
    <div className={styles.page}>
      <Header
        title="Favoritas"
        subtitle="Especies salvas localmente nesta demonstracao."
        showBack
      />

      <section className={styles.grid}>
        {favoritePlants.length > 0 ? (
          favoritePlants.map((plant) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              isFavorite={isFavorite(plant.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <EmptyState
            title="Nenhuma favorita ainda"
            description="Explore as plantas e toque no coracao para salvar especies."
            action={<Link className={styles.link} to="/plants">Explorar plantas</Link>}
          />
        )}
      </section>
    </div>
  );
}
