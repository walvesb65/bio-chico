import { LogIn } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button";
import styles from "../../../styles/page.module.css";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("francisco.biochico@email.com");
  const [password, setPassword] = useState("biochico");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <main className={styles.authPage}>
      <section className={styles.titleBlock}>
        <p className={styles.eyebrow}>Entrar</p>
        <h1>Acesse sua trilha de plantas</h1>
        <p>Use qualquer e-mail e senha nesta versao de demonstracao.</p>
      </section>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className={styles.field}>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        <Button
          fullWidth
          type="submit"
          icon={<LogIn size={20} aria-hidden="true" />}
        >
          Entrar
        </Button>
      </form>

      <p className={styles.helperText}>
        Ainda nao tem conta? <Link className={styles.link} to="/register">Criar cadastro</Link>
      </p>
      <Link className={styles.link} to="/forgot-password">
        Recuperar senha
      </Link>
    </main>
  );
}
