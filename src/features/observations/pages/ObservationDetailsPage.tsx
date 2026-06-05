import { Link, useParams } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { Header } from "../../../components/Header/Header";
import { formatDate } from "../../../utils/formatDate";
import styles from "../../../styles/page.module.css";

export function ObservationDetailsPage() {
  const { id } = useParams();
  const { observations } = useApp();
  const observation = observations.find((item) => item.id === id);

  if (!observation) {
    return (
      <div className={styles.page}>
        <Header title="Observacao" showBack />
        <EmptyState
          title="Observacao nao encontrada"
          description="O registro selecionado nao existe nos dados locais."
          action={<Link className={styles.link} to="/observations">Ver observacoes</Link>}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header
        title={observation.nomePlanta}
        subtitle={formatDate(observation.data)}
        showBack
      />

      <img
        className={styles.detailImage}
        src={observation.imagem}
        alt={observation.nomePlanta}
      />

      <section className={styles.grid}>
        <div className={styles.infoRow}>
          <span>Local</span>
          <strong>{observation.local}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Ambiente</span>
          <strong>{observation.ambiente}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Descricao</span>
          <strong>{observation.descricao}</strong>
        </div>
      </section>

      <Link className={styles.link} to={`/plants/${observation.plantaId}`}>
        Ver ficha da planta
      </Link>
    </div>
  );
}
