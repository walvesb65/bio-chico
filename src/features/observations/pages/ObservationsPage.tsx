import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { Header } from "../../../components/Header/Header";
import { ObservationCard } from "../../../components/ObservationCard/ObservationCard";
import styles from "../../../styles/page.module.css";

export function ObservationsPage() {
  const { observations } = useApp();

  return (
    <div className={styles.page}>
      <Header
        title="Minhas observacoes"
        subtitle="Registros mockados e novos registros locais."
        action={
          <Link to="/observations/new" aria-label="Nova observacao" title="Nova observacao">
            <Plus size={21} aria-hidden="true" />
          </Link>
        }
      />

      <section className={styles.grid}>
        {observations.map((observation) => (
          <ObservationCard key={observation.id} observation={observation} />
        ))}
      </section>
    </div>
  );
}
