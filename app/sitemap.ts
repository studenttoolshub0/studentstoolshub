import type { MetadataRoute } from "next";
import { siteConfig, placeholderPosts } from "@/lib/siteConfig";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteConfig.url}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteConfig.url}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
        {
            url: `${siteConfig.url}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${siteConfig.url}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    const blogPages: MetadataRoute.Sitemap = placeholderPosts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...blogPages];
}
