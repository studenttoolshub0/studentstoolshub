import type { LucideIcon } from "lucide-react";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    tags: string[];
    content: string;
    featured?: boolean;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface Tool {
    name: string;
    description: string;
    href: string;
    icon: LucideIcon;
    external?: boolean;
    nofollow?: boolean;
}

export interface SiteConfig {
    name: string;
    url: string;
    description: string;
    author: string;
    email: string;
    ogImage: string;
    links: {
        twitter?: string;
    };
}
