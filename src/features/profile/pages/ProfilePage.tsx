import {
  BookOpen,
  ChevronRight,
  Heart,
  Settings,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useApp } from "../../../app/providers/AppProvider";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";

export function ProfilePage() {
  const { user } = useApp();

  return (
    <div className={styles.page}>
      <Header title="Perfil" subtitle="Dados mockados do usuario BioChico." />

      <section className={styles.hero}>
        <UserRound size={40} aria-hidden="true" />
        <div>
          <h1>{user.nome}</h1>
          <p>{user.email}</p>
        </div>
        <p>{user.cidade}</p>
      </section>

      <section className={styles.statsGrid}>
        <div className={styles.stat}>
          <strong>{user.observacoes}</strong>
          <span>Observacoes</span>
        </div>
        <div className={styles.stat}>
          <strong>{user.especiesFavoritas}</strong>
          <span>Favoritas</span>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.infoRow}>
          <span>Bioma favorito</span>
          <strong>{user.biomaFavorito}</strong>
        </div>

        <Link className={styles.settingsRow} to="/favorites">
          <span>
            <Heart size={18} aria-hidden="true" />
          </span>
          <strong>Especies favoritas</strong>
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
        <Link className={styles.settingsRow} to="/education">
          <span>
            <BookOpen size={18} aria-hidden="true" />
          </span>
          <strong>Conteudos educativos</strong>
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
        <Link className={styles.settingsRow} to="/settings">
          <span>
            <Settings size={18} aria-hidden="true" />
          </span>
          <strong>Configuracoes</strong>
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
