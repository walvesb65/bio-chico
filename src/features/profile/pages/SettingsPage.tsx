import { LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button";
import { Header } from "../../../components/Header/Header";
import styles from "../../../styles/page.module.css";

const settings = [
  {
    key: "notifications",
    title: "Lembretes de observacao",
    description: "Receber alertas visuais para registrar novas plantas.",
  },
  {
    key: "location",
    title: "Salvar localizacao",
    description: "Preparado para associar local aos registros futuros.",
  },
  {
    key: "offline",
    title: "Modo campo",
    description: "Area reservada para recursos offline em proximas etapas.",
  },
];

export function SettingsPage() {
  const navigate = useNavigate();
  const [activeSettings, setActiveSettings] = useState<string[]>([
    "notifications",
    "location",
  ]);

  function toggleSetting(key: string) {
    setActiveSettings((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  }

  return (
    <div className={styles.page}>
      <Header
        title="Configuracoes"
        subtitle="Preferencias visuais para evoluir com o app."
        showBack
      />

      <section className={styles.grid}>
        {settings.map((setting) => {
          const active = activeSettings.includes(setting.key);

          return (
            <div className={styles.settingsRow} key={setting.key}>
              <span>
                <strong>{setting.title}</strong>
                {setting.description}
              </span>
              <button
                type="button"
                className={`${styles.toggle} ${active ? styles.toggleActive : ""}`}
                aria-pressed={active}
                aria-label={setting.title}
                onClick={() => toggleSetting(setting.key)}
              />
            </div>
          );
        })}
      </section>

      <Button
        fullWidth
        variant="ghost"
        icon={<LogOut size={20} aria-hidden="true" />}
        onClick={() => navigate("/login")}
      >
        Sair da demo
      </Button>
    </div>
  );
}
