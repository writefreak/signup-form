import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import App from "./App.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
