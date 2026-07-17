import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "zfmiov3e",
  dataset: "production",
  apiVersion: "2026-07-15", // Menggunakan format ISO tanggal hari ini demi stabilitas API
  useCdn: true, // true untuk fetching super cepat menggunakan Edge Caching global
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
