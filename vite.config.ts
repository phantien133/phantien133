import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages base URL:
 * - User/org site: repo must be named `<user>.github.io` → live at https://<user>.github.io/ → base `/`
 * - Project site: repo `foo` → https://<user>.github.io/foo/ → base `/foo/`
 *
 * CI sets GITHUB_REPOSITORY (`owner/repo`). Override with VITE_BASE=/ or VITE_BASE=/myrepo/
 */
function productionBase(): string {
  const gh = process.env.GITHUB_REPOSITORY;
  if (gh) {
    const repoName = gh.split("/")[1];
    if (repoName?.endsWith(".github.io")) return "/";
    if (repoName) return `/${repoName}/`;
  }

  const explicit = process.env.GITHUB_REPO_NAME?.replace(/^\//, "").replace(/\/$/, "");
  if (explicit) return `/${explicit}/`;

  // Local `npm run build` with no env — default to user-site root (repo `username.github.io`).
  // For a project page instead, run: `GITHUB_REPO_NAME=your-repo vite build`
  return "/";
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    process.env.VITE_BASE ??
    (mode === "production" ? productionBase() : "/"),
}));
