import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Project Page: https://<user>.github.io/<repo>/
// Override repo: GITHUB_REPO_NAME=my-repo npm run build
// User/org site (root): VITE_BASE=/ npm run build
const repo =
  process.env.GITHUB_REPO_NAME?.replace(/^\//, "").replace(/\/$/, "") ||
  "portfolio";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    process.env.VITE_BASE ??
    (mode === "production" ? `/${repo}/` : "/"),
}));
