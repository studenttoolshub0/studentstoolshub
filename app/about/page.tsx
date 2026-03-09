import type { Metadata } from "next";
import Link from "next/link";
import { Target, Lightbulb, BookOpen, Telescope, Search, Heart, MessageSquare, Rocket, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about StudentToolsHub's mission to empower students with free academic tools, GPA calculators, and study resources for university success.",
    alternates: { canonical: `${siteConfig.url}/about` },
    openGraph: {
        title: "About StudentToolsHub — Our Mission & Story",
        description: "Learn about our mission to empower students with free academic tools.",
        url: `${siteConfig.url}/about`,
    },
};

const aboutSchema = {
    "@context": "https://schema.org", "@type": "AboutPage",
    name: "About StudentToolsHub", url: `${siteConfig.url}/about`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
};

const values = [
    { icon: Search, title: "Accuracy", desc: "Every article is verified against current academic standards.", color: "from-indigo-500 to-violet-500" },
    { icon: Heart, title: "Accessibility", desc: "All resources are and will always be free — no exceptions.", color: "from-violet-500 to-cyan-500" },
    { icon: MessageSquare, title: "Clarity", desc: "Plain language — no unexplained jargon, ever.", color: "from-cyan-500 to-emerald-500" },
    { icon: Rocket, title: "Relevance", desc: "We write only what genuinely impacts real student outcomes.", color: "from-rose-500 to-pink-500" },
];

const sections = [
    {
        icon: Target, color: "from-indigo-500 to-violet-500", title: "Our Mission",
        paras: [
            "At StudentToolsHub, our mission is simple: make academic success accessible to every student, regardless of background or resources. We believe that with the right tools, guidance, and information, any student can achieve their academic goals.",
            "Our platform provides free, high-quality academic resources crafted by educators and experienced students who understand the real challenges of university life.",
        ],
    },
    {
        icon: Lightbulb, color: "from-violet-500 to-cyan-500", title: "Why We Started",
        paras: [
            "StudentToolsHub was born from a genuine frustration that millions of university students face every semester: the lack of clear, reliable, and free academic support. Many students struggle to understand grading systems, calculate their CGPA accurately, or find study strategies that actually work.",
            "Our founding team — educators, academic advisors, and former university students — came together with one shared belief: academic guidance should never be locked behind expensive tutoring services or paywalls.",
        ],
    },
    {
        icon: BookOpen, color: "from-cyan-500 to-emerald-500", title: "What We Offer",
        paras: [
            "We offer a growing library of academic articles, guides, and tool recommendations focused on GPA tracking, study techniques, time management, course selection, and career planning. Every piece is carefully researched and written to be both accurate and actionable.",
            "We also curate the best free academic tools available online — evaluated on accuracy, ease of use, and genuine student value. Our goal is for every visitor to leave with at least one insight they can immediately put to use.",
        ],
    },
    {
        icon: Telescope, color: "from-rose-500 to-orange-500", title: "Our Vision",
        paras: [
            "We envision StudentToolsHub growing into a comprehensive academic ecosystem — a platform that not only provides information but connects students with the tools, communities, and mentors they need to thrive.",
            "Our commitment doesn't stop at graduation. We aim to evolve our content to support students at every stage of their academic journey — from day one to the final semester. Whatever challenge you face today, StudentToolsHub is here to help you face it with confidence.",
        ],
    },
];

export default function AboutPage() {
    return (
        <>
            <JsonLd data={aboutSchema} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28">
                <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300 mb-3">Our Story</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        About <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">StudentToolsHub</span>
                    </h1>
                    <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Empowering the next generation of students with free academic tools and
                        knowledge .
                    </p>
                </div>
            </section>

            {/* Content sections */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {sections.map(({ icon: Icon, color, title, paras }) => (
                        <div key={title} className="flex flex-col sm:flex-row gap-5 sm:gap-7">
                            <div className="flex-shrink-0">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                                    <Icon size={26} className="text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
                                {paras.map((p, i) => (
                                    <p key={i} className="text-slate-600 leading-relaxed mb-4 last:mb-0">{p}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* Core Values */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                                <Rocket size={26} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Our Core Values</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {values.map(({ icon: Icon, title, desc, color }) => (
                                <div key={title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md`}>
                                        <Icon size={18} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-10 text-center">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/20 rounded-full blur-2xl" />
                        <div className="relative">
                            <h3 className="text-2xl font-extrabold text-white mb-3">Have Questions or Suggestions?</h3>
                            <p className="text-slate-300 text-sm mb-7 max-w-md mx-auto">
                                We love hearing from students and educators. Let us know how we can better
                                serve your academic needs.
                            </p>
                            <Link href="/contact"
                                className="inline-flex items-center gap-2 btn-gradient px-7 py-3.5 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/30 text-sm">
                                Get in Touch <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
