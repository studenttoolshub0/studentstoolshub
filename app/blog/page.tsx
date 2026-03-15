import type { Metadata } from "next";
import { Rss, LayoutGrid, ArrowRight, Tag } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Blog — Academic Guides & Study Resources",
    description:
        "Browse academic articles, GPA guides, study tips, and student resources. Written by educators to help university students succeed.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "StudentToolsHub Blog — Academic Guides & Study Resources",
        description: "Browse GPA guides, study tips, and student resources.",
        url: `${siteConfig.url}/blog`,
    },
};

const blogSchema = {
    "@context": "https://schema.org", "@type": "Blog",
    name: `${siteConfig.name} Blog`, url: `${siteConfig.url}/blog`,
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
};

export default function BlogPage() {
    const posts = getAllPosts();
    const categories = [...new Set(posts.map((p) => p.category))];

    return (
        <>
            <JsonLd data={blogSchema} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-20">
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300 mb-3">Knowledge Base</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Academic <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Blog &amp; Guides</span>
                    </h1>
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Practical articles, tool guides, and academic insights to help university
                        students improve their GPA and navigate academic life with confidence.
                    </p>
                </div>
            </section>

            {/* Filter bar */}
            <div className="border-b border-slate-200 bg-white sticky top-16 z-40 overflow-x-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 min-w-0 w-max sm:w-auto max-w-full">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                        <LayoutGrid size={13} /> Filter:
                    </span>
                    <span className="px-3 py-1.5 text-xs font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 shadow-sm">
                        All Articles
                    </span>
                    {categories.map((cat) => (
                        <span key={cat}
                            className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-full hover:border-indigo-300 hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-1">
                            <Tag size={10} /> {cat}
                        </span>
                    ))}
                    <a href="/feed.xml"
                        className="ml-auto flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-orange-500 transition-colors">
                        <Rss size={13} /> RSS
                    </a>
                </div>
            </div>

            {/* Grid */}
            <section className="py-14 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm text-slate-500 mb-8">
                        Showing{" "}
                        <span className="font-bold text-slate-800">{posts.length}</span> articles
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <BlogCard key={post.slug} post={post} featured={post.featured} index={i} />
                        ))}
                    </div>

                    {/* Coming soon notice */}
                    <div className="mt-14 rounded-3xl overflow-hidden">
                        <div className="relative bg-slate-950 p-10 text-center">
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/30 rounded-full blur-2xl" />
                            </div>
                            <div className="relative">
                                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white font-medium mb-4">
                                    <ArrowRight size={13} /> More articles coming soon
                                </div>
                                <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-5 sm:p-8">
                                    Subscribe to our RSS feed to stay updated with new guides and resources.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
