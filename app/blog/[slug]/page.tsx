import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight, ChevronRight, Construction } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/posts";
import { siteConfig } from "@/lib/siteConfig";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: "Article Not Found" };
    return {
        title: post.title,
        description: post.description,
        keywords: post.tags,
        authors: [{ name: post.author }],
        alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
        openGraph: {
            type: "article", title: post.title, description: post.description,
            url: `${siteConfig.url}/blog/${post.slug}`,
            publishedTime: post.date, authors: [post.author], tags: post.tags,
        },
        twitter: { card: "summary_large_image", title: post.title, description: post.description },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const schema = {
        "@context": "https://schema.org", "@type": "BlogPosting",
        headline: post.title, description: post.description,
        datePublished: post.date, dateModified: post.date,
        author: { "@type": "Organization", name: post.author, url: siteConfig.url },
        publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        url: `${siteConfig.url}/blog/${post.slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}/blog/${post.slug}` },
        keywords: post.tags.join(", "), articleSection: post.category, inLanguage: "en-US",
    };

    return (
        <>
            <JsonLd data={schema} />

            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex items-center gap-1.5 text-xs text-slate-400 flex-wrap">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                        <ChevronRight size={12} />
                        <span className="text-slate-600 font-medium truncate max-w-[180px]">{post.title}</span>
                    </nav>
                </div>
            </div>

            {/* Article Header */}
            <section className="relative overflow-hidden bg-slate-950 py-16">
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category badge */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all text-white shadow-md">
                            <Tag size={11} /> {post.category}
                        </span>
                        {post.featured && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 border border-amber-400/30 text-amber-300">
                                Featured
                            </span>
                        )}
                    </div>

                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-5">
                        {post.title}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">{post.description}</p>

                    {/* Meta pills */}
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        {[
                            { icon: User, val: post.author },
                            { icon: Calendar, val: formatDate(post.date) },
                            { icon: Clock, val: post.readTime },
                        ].map(({ icon: Icon, val }) => (
                            <span key={val} className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/10 border border-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Icon size={12} /> {val}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tags row */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Article Body */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    {/* Nav footer */}
                    <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Link href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group">
                            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
                            Back to All Articles
                        </Link>
                        <Link href="/contact"
                            className="inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all text-white px-5 py-2.5 rounded-xl shadow-md shadow-indigo-200">
                            Have a question? <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
