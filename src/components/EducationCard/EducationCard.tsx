import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import type { EducationContent } from "../../features/education/types/education.types";
import styles from "./EducationCard.module.css";

type EducationCardProps = {
  content: EducationContent;
};

export function EducationCard({ content }: EducationCardProps) {
  return (
    <Link to={`/education/${content.id}`} className={styles.card}>
      <img src={content.imagem} alt={content.titulo} loading="lazy" />
      <div className={styles.content}>
        <div className={styles.meta}>
          <BookOpen size={14} aria-hidden="true" />
          <span>{content.categoria}</span>
          <span>{content.tempoLeitura}</span>
        </div>
        <h3>{content.titulo}</h3>
        <p>{content.resumo}</p>
      </div>
    </Link>
  );
}
