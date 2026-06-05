import { Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import type { Plant } from "../../features/plants/types/plant.types";
import styles from "./PlantCard.module.css";

type PlantCardProps = {
  plant: Plant;
  isFavorite: boolean;
  onToggleFavorite: (plantId: string) => void;
};

export function PlantCard({
  plant,
  isFavorite,
  onToggleFavorite,
}: PlantCardProps) {
  return (
    <article className={styles.card}>
      <Link to={`/plants/${plant.id}`} className={styles.media}>
        <img src={plant.imagem} alt={plant.nomePopular} loading="lazy" />
        <span>{plant.categoria}</span>
      </Link>
      <button
        type="button"
        className={`${styles.favorite} ${isFavorite ? styles.favoriteActive : ""}`}
        onClick={() => onToggleFavorite(plant.id)}
        aria-pressed={isFavorite}
        aria-label={
          isFavorite
            ? `Remover ${plant.nomePopular} dos favoritos`
            : `Adicionar ${plant.nomePopular} aos favoritos`
        }
        title={isFavorite ? "Remover favorito" : "Favoritar"}
      >
        <Heart size={19} fill={isFavorite ? "currentColor" : "none"} />
      </button>
      <Link to={`/plants/${plant.id}`} className={styles.content}>
        <h3>{plant.nomePopular}</h3>
        <p className={styles.scientific}>{plant.nomeCientifico}</p>
        <p className={styles.description}>{plant.descricao}</p>
        <div className={styles.meta}>
          <MapPin size={15} aria-hidden="true" />
          <span>{plant.bioma}</span>
        </div>
      </Link>
    </article>
  );
}
