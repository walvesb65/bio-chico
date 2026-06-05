import { Check, UserPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button";
import styles from "../../../styles/page.module.css";

export function RegisterPage() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
    window.setTimeout(() => navigate("/home"), 700);
  }

  return (
    <main className={styles.authPage}>
      <section className={styles.titleBlock}>
        <p className={styles.eyebrow}>Cadastro</p>
        <h1>Crie seu perfil BioChico</h1>
        <p>O cadastro e visual nesta etapa e ja direciona para a demo.</p>
      </section>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>Nome</span>
          <input type="text" placeholder="Seu nome" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>E-mail</span>
          <input
            type="email"
            placeholder="voce@email.com"
            autoComplete="email"
            required
          />
        </label>
        <label className={styles.field}>
          <span>Senha</span>
          <input
            type="password"
            placeholder="Minimo de 6 caracteres"
            autoComplete="new-password"
            minLength={6}
            required
          />
        </label>

        {success ? (
          <div className={styles.success}>
            <Check size={18} aria-hidden="true" /> Cadastro criado.
          </div>
        ) : null}

        <Button
          fullWidth
          type="submit"
          icon={<UserPlus size={20} aria-hidden="true" />}
        >
          Criar conta
        </Button>
      </form>

      <p className={styles.helperText}>
        Ja possui cadastro? <Link className={styles.link} to="/login">Entrar</Link>
      </p>
    </main>
  );
}
