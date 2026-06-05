import { Navigate, Route, Routes } from "react-router-dom";

import { AppShell } from "../../components/AppShell/AppShell";
import { ForgotPasswordPage } from "../../features/auth/pages/ForgotPasswordPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { RegisterPage } from "../../features/auth/pages/RegisterPage";
import { EducationDetailsPage } from "../../features/education/pages/EducationDetailsPage";
import { EducationPage } from "../../features/education/pages/EducationPage";
import { FavoritesPage } from "../../features/favorites/pages/FavoritesPage";
import { HomePage } from "../../features/home/pages/HomePage";
import { IdentifyPage } from "../../features/identify/pages/IdentifyPage";
import { NewObservationPage } from "../../features/observations/pages/NewObservationPage";
import { ObservationDetailsPage } from "../../features/observations/pages/ObservationDetailsPage";
import { ObservationsPage } from "../../features/observations/pages/ObservationsPage";
import { PlantDetailsPage } from "../../features/plants/pages/PlantDetailsPage";
import { PlantsPage } from "../../features/plants/pages/PlantsPage";
import { ProfilePage } from "../../features/profile/pages/ProfilePage";
import { SettingsPage } from "../../features/profile/pages/SettingsPage";
import { SplashPage } from "../../features/splash/pages/SplashPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/splash" replace />} />
      <Route path="/splash" element={<SplashPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route element={<AppShell />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/plants" element={<PlantsPage />} />
        <Route path="/plants/:id" element={<PlantDetailsPage />} />
        <Route path="/identify" element={<IdentifyPage />} />
        <Route path="/observations" element={<ObservationsPage />} />
        <Route path="/observations/new" element={<NewObservationPage />} />
        <Route path="/observations/:id" element={<ObservationDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/education/:id" element={<EducationDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/splash" replace />} />
    </Routes>
  );
}
