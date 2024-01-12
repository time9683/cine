import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { freshSEOPlugin } from "https://deno.land/x/fresh_seo/mod.ts";
import  manifest  from "./fresh.gen.ts";
export default defineConfig({
  plugins: [tailwind(),freshSEOPlugin(manifest)],
});
