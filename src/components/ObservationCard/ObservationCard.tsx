import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import type { Observation } from "../../features/observations/types/observation.types";
import { formatDate } from "../../utils/formatDate";
import styles from "./ObservationCard.module.css";

type ObservationCardProps = {
  observation: Observation;
};

export function ObservationCard({ observation }: ObservationCardProps) {
  return (
    <Link to={`/observations/${observation.id}`} className={styles.card}>
      <img src={observation.imagem} alt={observation.nomePlanta} loading="lazy" />
      <div className={styles.content}>
        <h3>{observation.nomePlanta}</h3>
        <p>{observation.descricao}</p>
        <div className={styles.meta}>
          <span>
            <MapPin size={14} aria-hidden="true" />
            {observation.local}
          </span>
          <span>
            <CalendarDays size={14} aria-hidden="true" />
            {formatDate(observation.data)}
          </span>
        </div>
      </div>
    </Link>
  );
}
