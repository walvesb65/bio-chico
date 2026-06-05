import { ArrowRight, Leaf, Sprout } from "lucide-react";
import type { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button";
import { plantImages } from "../../plants/data/plants.mock";
import styles from "../../../styles/page.module.css";

export function SplashPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.authPage}>
      <section
        className={styles.hero}
        style={
          {
            "--hero-image": `url(${plantImages.ipeAmarelo})`,
          } as CSSProperties
        }
      >
        <Leaf size={36} aria-hidden="true" />
        <div>
          <p className={styles.eyebrow}>Biodiversidade vegetal</p>
          <h1>BioChico</h1>
        </div>
        <p>
          Explore especies, registre observacoes em campo e aprenda sobre a
          flora brasileira pelo celular.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.infoRow}>
          <span>Primeira etapa</span>
          <strong>Front-end mobile-first com dados mockados</strong>
        </div>
        <div className={styles.infoRow}>
          <span>Experiencia inicial</span>
          <strong>Explorar plantas, favoritar especies e criar registros</strong>
        </div>
      </section>

      <Button
        fullWidth
        icon={<ArrowRight size={20} aria-hidden="true" />}
        onClick={() => navigate("/login")}
      >
        Comecar
      </Button>

      <Button
        fullWidth
        variant="secondary"
        icon={<Sprout size={20} aria-hidden="true" />}
        onClick={() => navigate("/home")}
      >
        Ver demo
      </Button>
    </main>
  );
}
