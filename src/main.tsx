import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CubesProvider } from "cubes-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CubesProvider getToken={() => ""}>
      <App />
    </CubesProvider>
  </StrictMode>
);
