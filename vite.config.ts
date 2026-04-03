import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Project Page: https://<user>.github.io/<repo>/
 * - GitHub Actions sets GITHUB_REPOSITORY to "owner/repo" automatically.
 * - Override: GITHUB_REPO_NAME=my-repo or VITE_BASE=/ (user-site root).
 */
function repoSlug(): string {
  const explicit = process.env.GITHUB_REPO_NAME?.replace(/^\//, "").replace(/\/$/, "");
  if (explicit) return explicit;
  const gh = process.env.GITHUB_REPOSITORY;
  if (gh) {
    const name = gh.split("/")[1];
    if (name) return name;
  }
  // Must match the GitHub repository name (path segment after github.io/username/)
  return "phantien133";
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    process.env.VITE_BASE ??
    (mode === "production" ? `/${repoSlug()}/` : "/"),
}));
