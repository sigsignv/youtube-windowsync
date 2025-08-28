import { defineConfig } from "wxt";

export default defineConfig({
  manifest: {
    name: "YouTube WindowSync",
  },
  modules: ["@wxt-dev/module-solid"],
  srcDir: "src",
  imports: false,
});
