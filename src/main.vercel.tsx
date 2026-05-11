import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HomePage } from "./components/site/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
