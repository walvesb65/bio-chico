import { MailCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../components/Button/Button";
import styles from "../../../styles/page.module.css";

export function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className={styles.authPage}>
      <section className={styles.titleBlock}>
        <p className={styles.eyebrow}>Recuperar senha</p>
        <h1>Receba instrucoes no e-mail</h1>
        <p>Fluxo visual preparado para integracao futura com backend.</p>
      </section>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>E-mail cadastrado</span>
          <input
            type="email"
            placeholder="voce@email.com"
            autoComplete="email"
            required
          />
        </label>

        {sent ? (
          <div className={styles.success}>
            <MailCheck size={18} aria-hidden="true" /> Instrucoes simuladas enviadas.
          </div>
        ) : null}

        <Button
          fullWidth
          type="submit"
          icon={<MailCheck size={20} aria-hidden="true" />}
        >
          Enviar instrucoes
        </Button>
      </form>

      <Link className={styles.link} to="/login">
        Voltar para login
      </Link>
    </main>
  );
}
