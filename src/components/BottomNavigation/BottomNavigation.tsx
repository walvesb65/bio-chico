import { Binoculars, Home, ScanSearch, Sprout, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

import styles from "./BottomNavigation.module.css";

const navItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/plants", label: "Explorar", icon: Sprout },
  { to: "/identify", label: "Identificar", icon: ScanSearch },
  { to: "/observations", label: "Observacoes", icon: Binoculars },
  { to: "/profile", label: "Perfil", icon: UserRound },
];

export function BottomNavigation() {
  return (
    <nav className={styles.nav} aria-label="Navegacao principal">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          <item.icon size={21} aria-hidden="true" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
