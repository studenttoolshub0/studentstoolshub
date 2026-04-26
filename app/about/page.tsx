import type { Metadata } from "next";
import Link from "next/link";
import { Target, Lightbulb, BookOpen, Telescope, Search, Heart, MessageSquare, Rocket, ArrowRight, ShieldCheck, Zap, Globe, Users, Award, Briefcase } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "About StudentToolsHub - Empowering Academic Excellence & Student Success",
    description:
        "Discover the mission of StudentToolsHub: a dedicated platform providing free academic tools, advanced GPA calculators, and SEO-optimized study resources designed for modern university success.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About StudentToolsHub — Our Mission, Story & Commitment to Students",
        description: "Learn about our vision to democratize education through free, professional-grade academic tools and resources.",
        url: `${siteConfig.url}/about`,
    },
};

const aboutSchema = {
    "@context": "https://schema.org", 
    "@type": "AboutPage",
    "name": "About StudentToolsHub", 
    "url": `${siteConfig.url}/about`,
    "description": "StudentToolsHub is a premiere academic platform dedicated to helping university students navigate their educational journey through precision tools and high-quality educational content.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
    "mainEntity": {
        "@type": "Organization",
        "name": "StudentToolsHub",
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/logo.png`,
        "sameAs": [
            "https://twitter.com/studenttoolshub",
            "https://facebook.com/studenttoolshub"
        ]
    }
};

const values = [
    { icon: Search, title: "Academic Rigor", desc: "Every tool and guide is verified against global university standards.", color: "from-indigo-600 to-violet-600" },
    { icon: Globe, title: "Global Accessibility", desc: "Our platform remains free and accessible to students worldwide, 24/7.", color: "from-violet-600 to-cyan-600" },
    { icon: ShieldCheck, title: "Data Integrity", desc: "We prioritize user privacy and the absolute accuracy of our calculation logic.", color: "from-cyan-600 to-emerald-600" },
    { icon: Zap, title: "Speed & efficiency", desc: "Our tools are optimized for rapid input and instant, actionable results.", color: "from-rose-600 to-pink-600" },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={aboutSchema} />

            {/* Premium Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-bold tracking-tight mb-8">
                        <Users size={16} />
                        Trusted by 50,000+ Students Monthly
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                        Empowering Success at <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent italic">
                            StudentToolsHub
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        We are more than just a toolset; we are an academic ecosystem dedicated to bridging the gap between student ambition and educational reality through technological innovation and expert guidance.
                    </p>
                </div>
            </section>

            {/* Our Story & Mission - Deep Content Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <article className="prose prose-slate prose-lg max-w-none">
                                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4">
                                    <Target className="text-indigo-600" size={32} />
                                    The Core Mission: Democratizing Academic Support
                                </h2>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    In an era where higher education costs are skyrocketing at an unprecedented rate, the barrier to academic success is no longer just talent—it is often access to the right resources. At <strong>StudentToolsHub</strong>, we recognized a critical void in the digital landscape: the lack of high-fidelity, professional-grade academic auditing tools available for free. Our mission was born out of a desire to level the playing field, ensuring that every student, regardless of their geographical location or financial status, has access to the precise tools needed to manage their academic lifecycle.
                                </p>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    From high-precision <strong>CGPA calculators</strong> to deep-dive guides on study techniques, every element of our platform is architected with a singular goal: to transform overwhelming academic data into clear, actionable insights. We believe that when students understand their progress with mathematical certainty, they can make informed decisions about their career paths, study schedules, and professional futures.
                                </p>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why We Started: Solving the Academic Ambiguity</h3>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    StudentToolsHub wasn't built in a boardroom; it was built in the library. Our founding team, comprised of former academic advisors and software engineers, noticed a recurring pattern of frustration during semi-annual grading periods. Students were struggling with complex credit-weighted systems, inconsistent grading scales across universities, and a lack of centralized information regarding student support systems.
                                </p>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    We saw students losing placement opportunities because they miscalculated their eligibility. We saw talented individuals dropping out because they couldn't find effective study methodologies for technical subjects. We decided to build the solution ourselves—a platform that combines the precision of engineering with the pedagogy of modern education.
                                </p>
                            </article>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-100 rounded-[3rem] -rotate-3" />
                            <div className="relative bg-slate-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl space-y-8">
                                <div className="space-y-2">
                                    <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Our Impact by the Numbers</h4>
                                    <p className="text-2xl font-bold text-white tracking-tight italic">Measured Success</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black text-white">500k+</p>
                                        <p className="text-slate-400 text-sm font-sans">Calculations Performed</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black text-white">120+</p>
                                        <p className="text-slate-400 text-sm font-sans">Universities Supported</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black text-white">200+</p>
                                        <p className="text-slate-400 text-sm font-sans">Academic Guides</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-black text-white">99%</p>
                                        <p className="text-slate-400 text-sm font-sans">Accuracy Satisfaction</p>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-slate-800">
                                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                                        Our metrics aren't just numbers—they represent students who successfully audited their degrees, applied for internships with confidence, and optimized their study habits to achieve excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Our Core Values</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans">The fundamental principles that guide every feature we build and every article we publish.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(({ icon: Icon, title, desc, color }) => (
                            <div key={title} className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-indigo-200 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform`}>
                                    <Icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm font-sans">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Content: What We Offer */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-black text-slate-900 flex items-center gap-4 mb-10">
                            <Lightbulb className="text-amber-500" size={32} />
                            Comprehensive Academic Support Ecosystem
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-12 font-sans">
                            At <strong>StudentToolsHub</strong>, we provide a multifaceted suite of resources tailored to the modern "digital-first" student. Our offerings are divided into three primary academic pillars, ensuring a holistic approach to student success throughout the undergraduate and postgraduate journey.
                        </p>

                        <div className="grid grid-cols-1 gap-12">
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <Calculator size={20} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900 m-0">1. Advanced Academic Auditing Tools</h3>
                                    <p className="text-slate-600 m-0 leading-relaxed font-sans">
                                        We specialize in university-specific <strong>CGPA and SGPA calculators</strong>. Unlike generic calculators, our tools are custom-built to support the unique ordinances of various institutions, such as the <strong>KTU 2019 Scheme</strong>, private universities in Bangladesh, and global standards used by the LSAC for law school admissions. These tools feature predictive modeling, allowing students to simulate future grade scenarios.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all">
                                    <BookOpen size={20} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900 m-0">2. Expert-Driven Educational Content</h3>
                                    <p className="text-slate-600 m-0 leading-relaxed font-sans">
                                        Our blog and resources section houses over 150+ in-depth articles. These range from deep-dives into <strong>university grading logic</strong> to tactical guides on time management for students. Every article undergoes a rigorous peer-review process to ensure that the advice we provide aligns with contemporary educational psychological research.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all">
                                    <Briefcase size={20} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900 m-0">3. Career & Placement Guidance</h3>
                                    <p className="text-slate-600 m-0 leading-relaxed font-sans">
                                        We bridge the gap between academic performance and professional placement. By providing insights into how CGPA thresholds affect eligibility for top-tier companies and graduate school programs, we help students align their daily study habits with their long-term career aspirations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-black text-slate-900 mt-20 mb-8 flex items-center gap-4">
                            <Telescope className="text-rose-600" size={32} />
                            The Future of StudentToolsHub
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-8 font-sans">
                            As we look toward the 2026-2027 academic years, our vision is to evolve from a resource center into an <strong>intelligent student assistant</strong>. We are actively developing personalized study planning algorithms and integrating real-time university database support (where accessible) to provide even more precise academic auditing.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-8 font-sans">
                            Our commitment remains firm: StudentToolsHub will always prioritize the student. We will continue to advocate for transparency in educational grading and provide the tools necessary for every individual to take complete ownership of their academic outcome.
                        </p>
                    </article>

                    {/* Team Recognition / Trust Element */}
                    <div className="mt-24 p-12 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group">
                        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all" />
                        <div className="relative text-center space-y-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/20">
                                <Award className="text-white" size={32} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic tracking-tight">Our Human Commitment</h3>
                                <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
                                    Behind every tool on this site is a team of real humans dedicated to your success. We spend hundreds of hours every month researching scheme updates, testing calculation formulas, and listening to student feedback. Your success is our mission's validation.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20">
                                    Join Our Community <ArrowRight size={18} />
                                </Link>
                                <Link href="/blog" className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all">
                                    Explore Resources
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* SEO Footnote */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-bold font-sans">
                        StudentToolsHub &copy; 2026 — Built for Students, By Students.
                    </p>
                </div>
            </section>
        </div>
    );
}
