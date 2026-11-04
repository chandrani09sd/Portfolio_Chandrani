import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    const isVercel = Boolean(process.env.VERCEL);
    plugins.push(
      nitro({
        preset: isVercel ? "vercel" : (process.env.NITRO_PRESET || "cloudflare-module"),
      }),
      {
        name: "vercel-dist-compatibility",
        closeBundle: async () => {
          const fs = await import("node:fs/promises");
          const srcDir = isVercel ? ".vercel/output/static" : ".output/public";
          try {
            await fs.cp(srcDir, "dist", { recursive: true });
          } catch {
            // fallback
          }
        },
      }
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
  };
});
