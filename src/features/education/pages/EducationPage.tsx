import { Header } from "../../../components/Header/Header";
import { EducationCard } from "../../../components/EducationCard/EducationCard";
import styles from "../../../styles/page.module.css";
import { educationMock } from "../data/education.mock";

export function EducationPage() {
  return (
    <div className={styles.page}>
      <Header
        title="Conteudos educativos"
        subtitle="Artigos curtos para apoiar observacoes e conservacao."
        showBack
      />

      <section className={styles.grid}>
        {educationMock.map((content) => (
          <EducationCard key={content.id} content={content} />
        ))}
      </section>
    </div>
  );
}
