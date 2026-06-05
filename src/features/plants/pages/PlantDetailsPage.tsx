import { Heart, Leaf, ShieldCheck } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { Button } from "../../../components/Button/Button";
import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";
import { plantsMock } from "../data/plants.mock";

export function PlantDetailsPage() {
  const { id } = useParams();
  const plant = plantsMock.find((item) => item.id === id);
  const { isFavorite, toggleFavorite } = useApp();

  if (!plant) {
    return (
      <div className={styles.page}>
        <Header title="Planta" showBack />
        <EmptyState
          title="Planta nao encontrada"
          description="A especie selecionada nao existe nos dados mockados."
          action={<Link className={styles.link} to="/plants">Voltar para explorar</Link>}
        />
      </div>
    );
  }

  const favorite = isFavorite(plant.id);

  return (
    <div className={styles.page}>
      <Header
        title={plant.nomePopular}
        subtitle={plant.nomeCientifico}
        showBack
      />

      <img className={styles.detailImage} src={plant.imagem} alt={plant.nomePopular} />

      <Button
        fullWidth
        variant={favorite ? "secondary" : "primary"}
        icon={<Heart size={20} fill={favorite ? "currentColor" : "none"} />}
        onClick={() => toggleFavorite(plant.id)}
      >
        {favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      </Button>

      <section className={styles.section}>
        <p className={styles.eyebrow}>Descricao</p>
        <p className={styles.muted}>{plant.descricao}</p>
      </section>

      <section className={styles.statsGrid}>
        <div className={styles.infoRow}>
          <span>Familia</span>
          <strong>{plant.familia}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Categoria</span>
          <strong>{plant.categoria}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Bioma</span>
          <strong>{plant.bioma}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Origem</span>
          <strong>{plant.origem}</strong>
        </div>
      </section>

      <section className={styles.section}>
        <h2>
          <Leaf size={18} aria-hidden="true" /> Caracteristicas
        </h2>
        <ul className={styles.detailList}>
          {plant.caracteristicas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Usos</h2>
        <ul className={styles.detailList}>
          {plant.usos.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.grid}>
        <div className={styles.infoRow}>
          <span>Floracao</span>
          <strong>{plant.epocaFloracao}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Frutificacao</span>
          <strong>{plant.epocaFrutificacao}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Cuidados</span>
          <strong>{plant.cuidados}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Curiosidades</span>
          <strong>{plant.curiosidades}</strong>
        </div>
        <div className={styles.infoRow}>
          <span>
            <ShieldCheck size={15} aria-hidden="true" /> Status de conservacao
          </span>
          <strong>{plant.statusConservacao}</strong>
        </div>
      </section>
    </div>
  );
}
