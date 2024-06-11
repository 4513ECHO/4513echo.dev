import { defineConfig } from "$fresh/server.ts";
import twindPlugin, { type Options } from "$fresh/plugins/twindv1.ts";
import twindConfig from "@/twind.config.ts";

export default defineConfig({
  plugins: [twindPlugin(twindConfig as Options)],
});
