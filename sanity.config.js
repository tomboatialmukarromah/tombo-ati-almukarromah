import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import activity from "./src/schemas/activity";

export default defineConfig({
  name: "default",
  title: "Studio Tombo Ati",

  projectId: "zfmiov3e",
  dataset: "production",

  // PENTING: Beritahu Sanity rute URL tempat dia dirender di React Router
  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: [activity],
  },
});
