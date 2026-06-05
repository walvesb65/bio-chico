import { ChevronLeft } from "lucide-react";
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  action?: ReactNode;
};

export function Header({ title, subtitle, showBack = false, action }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {showBack ? (
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            title="Voltar"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
        ) : null}
        <div>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </header>
  );
}
