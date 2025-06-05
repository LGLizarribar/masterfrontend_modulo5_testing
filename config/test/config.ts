import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    restoreMocks: true,
    environment: "jsdom",
    setupFiles: ["./config/test/setup.ts"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/playwright/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier,playwright}.config.*",
    ],
  },
});
