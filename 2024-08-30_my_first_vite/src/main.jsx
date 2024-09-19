import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
// HTML에 Root에다가 createRoot 해주고 app을 render해줌