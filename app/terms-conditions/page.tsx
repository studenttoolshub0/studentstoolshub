import type { Metadata } from "next";
import { Scale, ShieldCheck, UserCheck, CreditCard, Ban, FileText, ChevronRight, Mail, Info } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Terms and Conditions - Usage Policy & Site Governance",
    description:
        "StudentToolsHub's Terms and Conditions. Understand our usage policies, intellectual property rights, and user responsibilities when using our academic tools.",
    alternates: { canonical: "/terms-conditions" },
    openGraph: {
        title: "Terms and Conditions — StudentToolsHub",
        description: "Official usage policies and legal terms for StudentToolsHub.",
        url: `${siteConfig.url}/terms-conditions`,
    },
};

const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions — StudentToolsHub",
    "url": `${siteConfig.url}/terms-conditions`,
    "description": "Standard terms and conditions of use for StudentToolsHub.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
};

const sections = [
    {
        icon: UserCheck, color: "from-blue-600 to-indigo-600", num: "01",
        title: "Acceptance of Terms",
        content: [
            "By accessing and using StudentToolsHub (&ldquo;the Website&rdquo;), you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
            "We reserve the right to modify these terms at any time without prior notice. Your continued use of the site after changes constitute acceptance of the updated terms.",
        ],
    },
    {
        icon: ShieldCheck, color: "from-violet-600 to-purple-600", num: "02",
        title: "Use License & Restrictions",
        content: [
            "Permission is granted to temporarily download one copy of the materials (information or software) on StudentToolsHub for personal, non-commercial transitory viewing only.",
            "You may not: modify or copy the materials; use them for any commercial purpose; attempt to decompile or reverse engineer any software; remove any copyright or other proprietary notations; or transfer the materials to another person.",
        ],
    },
    {
        icon: Scale, color: "from-emerald-600 to-teal-600", num: "03",
        title: "Academic Integrity",
        content: [
            "Our tools are designed to assist students in auditing and planning their academic careers. However, users are responsible for ensuring that their use of our tools aligns with their institution's academic integrity policies.",
            "StudentToolsHub does not condone or support any form of academic dishonesty, including but not limited to plagiarism or the falsification of academic records.",
        ],
    },
    {
        icon: Ban, color: "from-rose-600 to-pink-600", num: "04",
        title: "Limitations of Liability",
        content: [
            "In no event shall StudentToolsHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our platform.",
            "Some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, so these limitations may not apply to you.",
        ],
    },
];

export default function TermsConditionsPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={termsSchema} />

            {/* Premium Header */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20 mb-8">
                        <Scale size={14} />
                        Governance Framework
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Terms & <br />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent italic">
                            Conditions
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        Please read these terms carefully before using StudentToolsHub. They outline your rights and responsibilities as part of our academic community.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Philosophical Intro */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 mb-16 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
                        <p className="text-slate-600 leading-relaxed text-lg font-sans italic m-0">
                            &ldquo;Our terms are designed to protect the integrity of the StudentToolsHub platform and to ensure that all students have a safe, reliable environment for their academic growth.&rdquo;
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map(({ icon: Icon, color, num, title, content }) => (
                            <div key={num} className="group bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 border-b border-slate-50">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black text-slate-300 tracking-[0.3em] uppercase mb-1">{num}</span>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
                                    </div>
                                </div>
                                <div className="p-10 space-y-8">
                                    {content.map((para, i) => (
                                        <div key={i} className="flex gap-4">
                                             <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color} shrink-0`} />
                                             <p  className="text-slate-600 leading-relaxed text-base font-sans m-0">{para}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support Block */}
                    <div className="mt-20 relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 text-white text-center">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
                        <div className="relative space-y-8">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Info size={32} className="text-blue-400" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic tracking-tight">Contractual Inquiries</h3>
                                <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
                                    If you have any questions regarding these terms, your data, or your rights, please reach out to our legal compliance officer.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href={`mailto:${siteConfig.email}`} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20">
                                    Email Legal Officer
                                </a>
                                <a href="/contact" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-10 py-4 rounded-2xl font-bold transition-all">
                                    Contact Portal
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Premium SEO Footnote */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-slate-400 text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black italic">
                        StudentToolsHub — Governing Academic Futures with Transparency.
                    </p>
                </div>
            </section>
        </div>
    );
}
