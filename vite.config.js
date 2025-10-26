/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔽 Ajoute cette partie pour activer Vitest
  test: {
    globals: true, // <-- rend 'expect', 'test', 'describe' disponibles
    environment: "jsdom", // simule un navigateur
    setupFiles: "./src/test/setupTests.js", // fichier d'initialisation (on va le créer juste après)
    coverage: {
      provider: "v8", // moteur de couverture
      reporter: ["text", "html"], // affiche dans le terminal + fichier HTML
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
