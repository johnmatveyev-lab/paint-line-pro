import type { MetadataRoute } from "next";

const base = "https://paint-line-pro.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${base}/` }, { url: `${base}/quote` }];
}
