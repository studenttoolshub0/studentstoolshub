import { siteConfig, placeholderPosts } from "@/lib/siteConfig";

export const dynamic = "force-static";

export async function GET() {
    const feedItems = placeholderPosts
        .map(
            (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>${siteConfig.email} (${siteConfig.author})</author>
    </item>`
        )
        .join("\n");

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${siteConfig.email} (${siteConfig.author})</managingEditor>
    <webMaster>${siteConfig.email} (${siteConfig.author})</webMaster>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <ttl>60</ttl>
    ${feedItems}
  </channel>
</rss>`;

    return new Response(feed, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    });
}
