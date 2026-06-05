import {
  BookOpen,
  Camera,
  Heart,
  MapPinned,
  PlusCircle,
  Sprout,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { Header } from "../../../components/Header/Header";
import { ObservationCard } from "../../../components/ObservationCard/ObservationCard";
import { PlantCard } from "../../../components/PlantCard/PlantCard";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { plantsMock } from "../../plants/data/plants.mock";
import styles from "../../../styles/page.module.css";

export function HomePage() {
  const navigate = useNavigate();
  const { user, observations, isFavorite, toggleFavorite } = useApp();
  const [quickSearch, setQuickSearch] = useState("");
  const featuredPlant = plantsMock[0];
  const latestObservations = observations.slice(0, 2);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = quickSearch.trim();
    navigate(query ? `/plants?search=${encodeURIComponent(query)}` : "/plants");
  }

  return (
    <div className={styles.page}>
      <Header
        title={`Ola, ${user.nome.split(" ")[0]}`}
        subtitle="Continue explorando a biodiversidade vegetal."
      />

      <form className={styles.form} onSubmit={handleSearch}>
        <SearchInput
          value={quickSearch}
          onChange={setQuickSearch}
          placeholder="Buscar planta por nome"
        />
      </form>

      <section className={styles.section}>
        <div className={styles.twoColumnGrid}>
          <Link className={styles.shortcut} to="/plants">
            <Sprout size={24} aria-hidden="true" />
            <span>
              <strong>Explorar</strong>
              Plantas mockadas
            </span>
          </Link>
          <Link className={styles.shortcut} to="/identify">
            <Camera size={24} aria-hidden="true" />
            <span>
              <strong>Identificar</strong>
              Enviar imagem
            </span>
          </Link>
          <Link className={styles.shortcut} to="/observations/new">
            <PlusCircle size={24} aria-hidden="true" />
            <span>
              <strong>Registrar</strong>
              Nova observacao
            </span>
          </Link>
          <Link className={styles.shortcut} to="/education">
            <BookOpen size={24} aria-hidden="true" />
            <span>
              <strong>Aprender</strong>
              Conteudos
            </span>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Planta em destaque</h2>
          <Link className={styles.link} to="/favorites">
            <Heart size={15} aria-hidden="true" /> Favoritas
          </Link>
        </div>
        <PlantCard
          plant={featuredPlant}
          isFavorite={isFavorite(featuredPlant.id)}
          onToggleFavorite={toggleFavorite}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Ultimas observacoes</h2>
          <Link className={styles.link} to="/observations">
            <MapPinned size={15} aria-hidden="true" /> Ver todas
          </Link>
        </div>
        <div className={styles.grid}>
          {latestObservations.map((observation) => (
            <ObservationCard key={observation.id} observation={observation} />
          ))}
        </div>
      </section>
    </div>
  );
}
