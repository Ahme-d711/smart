import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://smartai.example/ar", lastModified: new Date("2026-01-01") }, { url: "https://smartai.example/en", lastModified: new Date("2026-01-01") }]; }
