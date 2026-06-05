import { Link, useParams } from "react-router-dom";

import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";
import { educationMock } from "../data/education.mock";

export function EducationDetailsPage() {
  const { id } = useParams();
  const content = educationMock.find((item) => item.id === id);

  if (!content) {
    return (
      <div className={styles.page}>
        <Header title="Conteudo" showBack />
        <EmptyState
          title="Conteudo nao encontrado"
          description="O artigo selecionado nao existe nos dados mockados."
          action={<Link className={styles.link} to="/education">Ver conteudos</Link>}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header
        title={content.titulo}
        subtitle={`${content.categoria} • ${content.tempoLeitura}`}
        showBack
      />

      <img className={styles.detailImage} src={content.imagem} alt={content.titulo} />

      <section className={styles.articleBody}>
        {content.conteudo.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </div>
  );
}
