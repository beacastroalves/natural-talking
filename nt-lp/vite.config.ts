import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

// Recriando o __dirname para compatibilidade com ES Modules (Vite padrão)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const base = process.env.BASE_PATH || "/";
const isPreview = process.env.IS_PREVIEW === "true";

// https://vite.dev/config/
export default defineConfig({
  define: {
    // Injeção de variáveis globais no código
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
    __READDY_AI_DOMAIN__: JSON.stringify(process.env.READDY_AI_DOMAIN || ""),
  },
  plugins: [
    react(),
    AutoImport({
      // Presets automáticos: remove a necessidade de listar useState, useEffect, etc.
      imports: [
        "react",
        "react-router-dom",
        "react-i18next",
        // Caso queira adicionar hooks customizados ou específicos:
        {
          'react': [
            'useImperativeHandle',
            'useInsertionEffect',
            'useSyncExternalStore',
          ],
        }
      ],
      // Gera o arquivo de tipos para o VS Code reconhecer os auto-imports
      dts: "./src/auto-imports.d.ts",
      // Garante que o ESLint não reclame de variáveis globais
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  base,
  build: {
    sourcemap: true,
    outDir: "out",
    // Melhora a performance do build limpando a pasta antes
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // O '@' agora vai funcionar corretamente no VS Code
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    // Abre o navegador automaticamente ao iniciar
    open: true,
  },
});