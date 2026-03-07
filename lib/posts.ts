import type { BlogPost } from "@/types";
import { placeholderPosts } from "@/lib/siteConfig";

export function getAllPosts(): BlogPost[] {
    return placeholderPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return placeholderPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return placeholderPosts.filter((post) => post.featured);
}

export function getAllSlugs(): string[] {
    return placeholderPosts.map((post) => post.slug);
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
