import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("[DEBUG] main.tsx loaded, rendering App...");
try {
  createRoot(document.getElementById("root")!).render(<App />);
  console.log("[DEBUG] App rendered successfully");
} catch (e) {
  console.error("[DEBUG] Render error:", e);
}
