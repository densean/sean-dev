// vite.config.ts
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/sean-dev/",
	plugins: [react()],
	build: {
		outDir: "build",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
