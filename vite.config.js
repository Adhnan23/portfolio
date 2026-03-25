import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

let cloudflarePlugin;
try {
  cloudflarePlugin = (await import("@cloudflare/vite-plugin")).default;
} catch (e) {
  cloudflarePlugin = null;
}

export default defineConfig({
  plugins: [react(), ...(cloudflarePlugin ? [cloudflarePlugin()] : [])],
  base: "/",
});
