import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

try {
  const source = "C:\\Users\\Harshil Panchal\\Desktop\\FullLogo_NoBuffer.jpg";
  const dest = path.resolve(__dirname, "public", "logo.png");
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log("Copied FullLogo_NoBuffer.jpg to public/logo.png");
  }
} catch (e) {
  console.error("Failed to copy logo", e);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  optimizeDeps: {
    entries: ["src/main.tsx"],
  },
  plugins: [
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: true,
  }
});
