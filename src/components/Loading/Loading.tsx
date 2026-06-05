import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.loading} role="status" aria-label="Carregando">
      <span />
      <p>Carregando</p>
    </div>
  );
}
