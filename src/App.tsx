import { AppProvider } from "./app/providers/AppProvider";
import { AppRoutes } from "./app/routes/AppRoutes";

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
