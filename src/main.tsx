import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CubesProvider } from "cubes-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CubesProvider apiUrl="https://68993fb4fed141b96b9f0e3b.mockapi.io/api/" getToken={() => ""}>
      <App />
    </CubesProvider>
  </StrictMode>
);
