import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/posts";

const gradients = [
    { bar: "from-indigo-500 to-violet-500", badge: "from-indigo-600 to-violet-600" },
    { bar: "from-violet-500 to-cyan-500", badge: "from-violet-600 to-cyan-600" },
    { bar: "from-cyan-500 to-emerald-500", badge: "from-cyan-600 to-emerald-600" },
    { bar: "from-rose-500 to-orange-500", badge: "from-rose-600 to-orange-600" },
    { bar: "from-amber-500 to-yellow-400", badge: "from-amber-500 to-orange-500" },
    { bar: "from-emerald-500 to-teal-500", badge: "from-emerald-600 to-teal-600" },
];

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
    index?: number;
}

export default function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
    const g = gradients[index % gradients.length];

    return (
        <article className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 transition-all duration-300">
            {/* Gradient accent top bar */}
            <div className={`h-1 bg-gradient-to-r ${g.bar} flex-shrink-0`} />

            <div className="flex flex-col flex-1 p-5 sm:p-6">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${g.badge} text-white shadow-sm`}>
                        <Tag size={9} /> {post.category}
                    </span>
                    {featured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                            Featured
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                </p>

                {/* Meta footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}
                        className={`inline-flex items-center gap-1 text-xs font-bold bg-gradient-to-r ${g.badge} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                        Read <ArrowRight size={11} className="text-indigo-500" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
