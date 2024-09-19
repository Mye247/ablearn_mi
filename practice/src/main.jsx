import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FormProvider } from "./복습/context/form.context.jsx";

createRoot(document.getElementById("root")).render(
  <FormProvider>
    <App />
  </FormProvider>
);
