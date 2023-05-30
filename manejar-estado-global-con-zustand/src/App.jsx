//* store *//
import { useAuthStore } from "./store";

export const App = () => {
  const { user, status, login, logout } = useAuthStore();

  prompt("Ingrese su nombre");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <h1>Estado de Zustand</h1>
    </div>
  );
};
