import type { Metadata } from "next";
import { Mail, Clock, Globe, ChevronRight, MessageCircle, HelpCircle, ShieldAlert, Sparkles, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Contact StudentToolsHub - Support for GPA & Academic Tooling",
    description:
        "Get expert support for GPA calculations, academic auditing, and study strategy optimization. Contact the StudentToolsHub team for corrections, suggestions, or institutional partnerships.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact Us — Professional Academic Support & Feedback",
        description: "Reach out to StudentToolsHub for assistance with CGPA auditing and student success resources.",
        url: `${siteConfig.url}/contact`,
    },
};

const contactSchema = {
    "@context": "https://schema.org", 
    "@type": "ContactPage",
    "name": "Contact StudentToolsHub", 
    "url": `${siteConfig.url}/contact`,
    "description": "Professional contact portal for university students seeking support with GPA calculation tools and academic resources.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
    "mainEntity": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": siteConfig.email,
        "availableLanguage": ["English"]
    }
};

const infoCards = [
    {
        icon: Mail, color: "from-indigo-600 to-violet-600",
        title: "Direct Email", detail: siteConfig.email,
        sub: "Primary channel for formal inquiries",
        href: `mailto:${siteConfig.email}`,
    },
    {
        icon: Clock, color: "from-violet-600 to-cyan-600",
        title: "SLA (Response Time)", detail: "Within 24-48 Hours",
        sub: "Excluding major public holidays",
    },
    {
        icon: Globe, color: "from-cyan-600 to-emerald-600",
        title: "Global Reach", detail: "Universal Support",
        sub: "Optimized for all timezone offsets",
    },
];

const helpTopics = [
    { title: "Academic Audit Support", desc: "Assistance with complex GPA/CGPA scheme logic or manual calculation verification." },
    { title: "Bug Reporting & Integrity", desc: "Immediate reporting of technical anomalies or logic errors in our calculation engines." },
    { title: "Institutional Partnerships", desc: "Collaborations with universities, student unions, or educational organizations." },
    { title: "Content Contributions", desc: "Suggestions for new study guides or requests for specific academic resource deep-dives." },
    { title: "Privacy & Data Access", desc: "Inquiries regarding how we handle your academic data and personal information." }
];

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={contactSchema} />

            {/* Premium Header Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/20 mb-8">
                        <MessageCircle size={14} />
                        Connected Academic Support
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Let's Talk Academic <br />
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent italic">
                            Performance & Growth
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        Whether you're a student navigating the complexities of a new grading scheme or an educator looking to collaborate, our team is ready to assist you.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        
                        {/* Sidebar Info - 5 Columns */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Expert Consulting at Your Fingertips</h2>
                                <p className="text-slate-600 leading-relaxed text-lg font-sans">
                                    At <strong className="text-indigo-600">StudentToolsHub</strong>, we don't just provide software; we provide solutions. Our support desk is manned by academic specialists who understand the high stakes involved in student grading and performance tracking.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-4">
                                {infoCards.map((card) => (
                                    <div key={card.title} className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white border border-slate-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                                            <card.icon size={22} className="text-white" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{card.title}</p>
                                            {card.href ? (
                                                <a href={card.href} className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors block italic">{card.detail}</a>
                                            ) : (
                                                <p className="text-xl font-bold text-slate-900 italic">{card.detail}</p>
                                            )}
                                            <p className="text-sm text-slate-400 font-sans">{card.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Help Topics Box */}
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 text-white group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                                    <Sparkles className="text-indigo-400" size={20} />
                                    How We Can Collaborate
                                </h3>
                                <div className="space-y-6">
                                    {helpTopics.map((topic) => (
                                        <div key={topic.title} className="space-y-2 group/item">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-all" />
                                                <h4 className="font-bold text-slate-200 text-sm">{topic.title}</h4>
                                            </div>
                                            <p className="text-slate-500 text-xs font-sans leading-relaxed pl-4 line-clamp-2">
                                                {topic.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Section - 7 Columns */}
                        <div className="lg:col-span-7">
                            <div className="relative isolate group">
                                {/* Decorative elements */}
                                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-[3.5rem] -rotate-1 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10" />
                                
                                <div className="bg-white border border-slate-200 rounded-[3rem] shadow-sm p-8 sm:p-14 transition-all duration-500 group-hover:border-indigo-100 group-hover:shadow-2xl">
                                    <div className="space-y-8 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                                <Send size={20} />
                                            </div>
                                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Express Inquiry Portal</h2>
                                        </div>
                                        <p className="text-slate-500 leading-relaxed font-sans">
                                            Please provide detailed context for your inquiry. For GPA-related questions, including your university and semester details will help us provide a 100% accurate response.
                                        </p>
                                    </div>
                                    
                                    <ContactForm />

                                    <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="flex gap-4">
                                            <ShieldAlert className="text-emerald-600 shrink-0" size={20} />
                                            <div>
                                                <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1 italic">Security Protocol</p>
                                                <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                                                    Your data is encrypted. We never share academic records with third-party institutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <HelpCircle className="text-amber-600 shrink-0" size={20} />
                                            <div>
                                                <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1 italic">Emergency Audit</p>
                                                <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
                                                    For critical grading deadline issues, please mark your subject line as "URGENT AUDIT".
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional High-Density Content Section */}
                            <div className="mt-20 prose prose-slate max-w-none px-4">
                                <h3 className="text-2xl font-black text-slate-900 font-sans">Our Commitment to Transparency & Continuous Improvement</h3>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    At StudentToolsHub, every communication we receive is logged and analyzed in our "Feedback Loop" system. This ensures that repeated questions about a specific university scheme (like the <strong>KTU 2024 scheme</strong> updates) lead to the priority development of new tools or detailed blog explainers. We don't just answer emails; we iterate on our technology based on your academic reality. 
                                </p>
                                <p className="text-slate-600 leading-relaxed font-sans">
                                    If you are an educator or a developer interested in contributing to our open-access academic project, please use the "Institutional Partnerships" topic in the form. We are always looking to integrate more precise grading algorithms and evidence-based study methodologies into our ecosystem.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Footer Tag */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-black italic">
                        StudentToolsHub — Engineering Excellence in Educational Technology
                    </p>
                </div>
            </section>
        </div>
    );
}
