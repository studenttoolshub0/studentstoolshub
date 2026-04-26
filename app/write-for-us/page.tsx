import type { Metadata } from "next";
import { PenTool, Mail, Sparkles, FileText, ChevronRight, Users, Rocket, Zap, MessageSquare } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Write for Us - Contribute to Student Success & Academic Excellence",
    description:
        "Join the StudentToolsHub contributor community. We're looking for educators, students, and academic specialists to share SEO-optimized guides and study resources.",
    alternates: { canonical: "/write-for-us" },
    openGraph: {
        title: "Write for Us — Contributor Opportunities at StudentToolsHub",
        description: "Share your academic expertise with thousands of students worldwide.",
        url: `${siteConfig.url}/write-for-us`,
    },
};

const contributorSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Write for Us — StudentToolsHub",
    "url": `${siteConfig.url}/write-for-us`,
    "description": "Information for potential contributors and guest writers on StudentToolsHub.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
};

const guidelines = [
    {
        icon: FileText, color: "from-indigo-600 to-violet-600", num: "01",
        title: "Content & Quality Standards",
        content: [
            "We prioritize depth, accuracy, and student-focused utility. Every guest post must be a minimum of 1500+ words, offering actionable insights rather than generic advice.",
            "Your content should be fully original (no AI-generated fluff) and provide a unique perspective on academic life, GPA strategies, or modern educational technology.",
        ],
    },
    {
        icon: Zap, color: "from-amber-600 to-orange-600", num: "02",
        title: "SEO and Structure",
        content: [
            "All submissions must be SEO-optimized with proper H1, H2, and H3 hierarchies. We love content that uses semantic keywords (LSI) and provides entity-rich data for search engines.",
            "Use clear, professional, yet human-centric tone. Break up large blocks of text with bullet points, numbered lists, and tables where appropriate.",
        ],
    },
    {
        icon: ShieldCheck, color: "from-emerald-600 to-teal-600", num: "03",
        title: "Integrity & Linking",
        content: [
            "We do not accept purely promotional content or 'thin' affiliate spam. Any external links must provide genuine value to the reader and come from high-authority, relevant sources.",
            "We reserve the right to edit, modify, or remove links that do not meet our editorial or security standards.",
        ],
    },
];

const topics = [
    "University GPA/CGPA Scheme Deep-Dives",
    "Evidence-Based Study Methodologies",
    "Time Management for Engineering Students",
    "Career & Placement Strategy Guides",
    "Modern Educational Software & Tool Reviews",
    "Student Mental Health & Performance Psychology"
];

import { ShieldCheck } from "lucide-react";

export default function WriteForUsPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={contributorSchema} />

            {/* Premium Header */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/20 mb-8">
                        <PenTool size={14} />
                        Contributor Community
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Empower Students <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent italic">
                            Through Your Expertise
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        StudentToolsHub is seeking voices that can inspire, educate, and guide the next generation of academic high-achievers.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <article className="prose prose-slate prose-lg max-w-none">
                                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                                    <Users className="text-indigo-600" size={32} />
                                    Why Join Our Contributor Network?
                                </h2>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    Publishing on <strong>StudentToolsHub</strong> gives you immediate access to a global audience of dedicated university students and academic professionals. We are a platform that values expertise over buzzwords, providing a high-authority space for your ideas to thrive.
                                </p>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    Whether you are an educator with a unique pedagogy to share, or a student who has mastered a difficult university scheme, your contribution helps build our collective academic ecosystem.
                                </p>

                                <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-100 italic font-sans text-slate-500">
                                    &ldquo;We don't just publish articles; we build resources that students bookmark for their entire academic career. If you have the knowledge, we have the platform.&rdquo;
                                </div>
                            </article>
                        </div>

                        <div className="relative">
                             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-100 rounded-[3rem] -rotate-3" />
                             <div className="relative bg-slate-950 p-10 rounded-[2.5rem] shadow-2xl space-y-10">
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    <Sparkles className="text-indigo-400" />
                                    What We're Looking For
                                </h3>
                                <div className="space-y-6">
                                    {topics.map((topic) => (
                                        <div key={topic} className="flex items-center gap-4 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-all font-sans" />
                                            <p className="text-slate-300 text-base font-bold group-hover:text-indigo-400 transition-colors font-sans">{topic}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-10 border-t border-slate-800">
                                     <p className="text-sm text-slate-400 leading-relaxed font-sans">
                                        We are specifically interested in deep-dives (2500+ words) that provide exhaustive value on institutional-specific challenges.
                                     </p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guidelines Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Editorial Guidelines</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans">To ensure our readers receive only the highest quality information, we adhere to strict standards.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {guidelines.map(({ icon: Icon, title, content, color, num }) => (
                            <div key={title} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-indigo-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
                                <div className="flex items-center justify-between mb-8">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform`}>
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-100 group-hover:text-indigo-50/50 transition-colors">{num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{title}</h3>
                                <div className="space-y-4">
                                    {content.map((p, i) => (
                                        <p key={i} className="text-slate-500 leading-relaxed text-sm font-sans">{p}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 text-white group">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all" />
                         <div className="relative space-y-12 text-center">
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                                    <Rocket className="text-white" size={40} />
                                </div>
                                <div className="space-y-2">
                                     <h2 className="text-3xl sm:text-4xl font-black italic tracking-tight">Submit Your Pitch</h2>
                                     <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
                                        Ready to contribute? Send your proposed topics or full drafts to our editorial team. We typically respond within 3–5 business days.
                                     </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl font-sans group/btn">
                                    <Mail className="text-indigo-600" />
                                    {siteConfig.email}
                                    <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                                <a href="/contact" className="flex items-center gap-3 bg-slate-900 border border-slate-800 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all font-sans">
                                    <MessageSquare size={18} className="text-indigo-400" />
                                    Use Contact Form
                                </a>
                            </div>

                            <div className="pt-8 border-t border-slate-800 flex items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">
                                <span>100% Original Content</span>
                                <div className="w-1 h-1 rounded-full bg-slate-800" />
                                <span>By-line Provided</span>
                                <div className="w-1 h-1 rounded-full bg-slate-800" />
                                <span>Permanent Placement</span>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
