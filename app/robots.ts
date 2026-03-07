import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
        ],
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    };
}
