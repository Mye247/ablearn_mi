import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router.jsx";
import { ModalProvider } from "./contexts/modal.context";
import App from "./App";
import { ThemeProvider } from "./contexts/theme.context";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </ThemeProvider>
);
