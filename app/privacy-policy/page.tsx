import type { Metadata } from "next";
import { Shield, Database, Cookie, Link2, Lock, Baby, UserCheck, RefreshCw, Mail, ChevronRight, FileText, Scale, Fingerprint, EyeOff } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Privacy Policy - Data Security & Academic Integrity",
    description:
        "Comprehensive Privacy Policy for StudentToolsHub. Learn how we secure your academic data, our commitment to GDPR principles, and how we handle cookies and third-party services.",
    alternates: { canonical: "/privacy-policy" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Privacy Policy — Our Transparent Commitment to Student Privacy",
        description: "How StudentToolsHub collects, uses, and protects your information in the digital academic space.",
        url: `${siteConfig.url}/privacy-policy`,
    },
};

const privacySchema = {
    "@context": "https://schema.org", 
    "@type": "WebPage",
    "name": "Privacy Policy — StudentToolsHub", 
    "url": `${siteConfig.url}/privacy-policy`,
    "description": "Information security and data privacy standards for StudentToolsHub users.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
};

const sections = [
    {
        icon: Database, color: "from-indigo-600 to-violet-600", num: "01",
        title: "Information Collection & Processing",
        content: [
            "At StudentToolsHub, we prioritize the principle of data minimization. We collect information through two primary streams: voluntary user input and automated technical metrics. For users seeking specialized GPA auditing support, we may collect specific academic parameters necessary for calculation accuracy.",
            "Automated collection includes non-identifying telemetry such as user-agent strings, referring domains, and clickstream data. This information is utilized exclusively for optimizing our server response times and improving the UX/UI of our academic toolset.",
        ],
        list: [
            "Personal Identifiers: Name and email address (via contact portal only).",
            "Academic Context: University scheme, semester data, and grade points (for calculation auditing).",
            "Technical Telemetry: IP addresses (anonymized), browser architecture, and navigation patterns."
        ],
    },
    {
        icon: Scale, color: "from-violet-600 to-cyan-600", num: "02",
        title: "The Logic of Data Usage",
        content: ["Every byte of data collected is processed with a specific academic or technical objective. We do not engage in data monetization; your academic struggle is not a commodity. Our processing logic is designed to support institutional scheme updates and global student support needs."],
        list: [
            "Operational Support: Verifying complex CGPA formulas for specific universities.",
            "Platform Optimization: Identifying which tools (e.g., KTU vs. LSAC) require immediate technical scaling.",
            "Communication Integrity: Responding to formal inquiries and academic corrections.",
            "Legal Compliance: Adhering to international data protection regulations."
        ],
    },
    {
        icon: Fingerprint, color: "from-cyan-600 to-emerald-600", num: "03",
        title: "Tracking Technologies & Cookies",
        content: ["We utilize advanced session-state management and cookies to ensure that your multi-semester GPA calculations persist during your session. These technologies allow for a seamless 'what-if' modeling experience without requiring constant re-entry of data."],
        list: [
            "Functional Cookies: Necessary for persisted state during multi-step calculations.",
            "Analytical Cookies: Powering our internal performance dashboards.",
            "Third-Party Pixels: Limited to high-reputation services like Google Analytics for aggregate reporting."
        ],
    },
    {
        icon: Link2, color: "from-rose-600 to-pink-600", num: "04",
        title: "External Academic Integrations",
        content: ["Our guides frequently link to high-authority academic domains (e.g., .edu sites, university portals). While we verify the educational value of these links, we do not control the privacy protocols of external entities. We advise caution when transitioning to third-party academic auditing platforms."],
    },
    {
        icon: Lock, color: "from-amber-600 to-orange-600", num: "05",
        title: "Industrial-Grade Data Security",
        content: ["Security is binary at StudentToolsHub. We implement TLS 1.3 encryption for all data in transit and follow OWASP top 10 security guidelines. Our architecture is designed to prevent data leaks by keeping calculation logic client-side wherever possible, ensuring your inputs never touch a centralized database unless explicitly submitted."],
    },
    {
        icon: Baby, color: "from-emerald-600 to-teal-600", num: "06",
        title: "Minor Protection & Academic Safety",
        content: ["While StudentToolsHub is an educational resource, we do not knowingly process data from individuals under 13. If our systems detect inputs suggesting a minor's unauthorized use, we perform immediate sanitization of our logs."],
    },
    {
        icon: UserCheck, color: "from-indigo-600 to-cyan-600", num: "07",
        title: "The Declaration of User Rights",
        content: ["We empower our users with full autonomy over their digital footprint. Regardless of your jurisdiction, we offer global transparency in data handling, mirroring the highest standards of the GDPR and CCPA."],
        list: [
            "Right of Access: Request a full export of any data we hold associated with your email.",
            "Right of Rectification: Direct us to correct flawed academic scheme data or personal info.",
            "Right of Erasure: The absolute 'Right to be Forgotten' from our communication logs.",
            "Right to Restriction: Temporarily halt processing of your data during an investigation."
        ],
    },
    {
        icon: RefreshCw, color: "from-violet-600 to-rose-600", num: "08",
        title: "Evolution of This Policy",
        content: ["As educational technologies evolve, so will our privacy standards. Significant updates will be highlighted on our homepage. Your continued use of the platform following an update acknowledges your agreement with our refined security protocols."],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={privacySchema} />

            {/* Premium Header */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20 mb-8">
                        <EyeOff size={14} />
                        Decentralized Data Commitment
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Privacy & <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent italic">
                            Academic Integrity
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        Our relationship with students is built on radical transparency. We secure your progress so you can focus on your academic future.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-slate-500 text-sm font-sans">
                        <FileText size={16} />
                        Version 2.4.1 — Effective March 7, 2026
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Philosophical Intro */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 mb-16 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500" />
                        <p className="text-slate-600 leading-relaxed text-lg font-sans italic">
                            &ldquo;At <strong className="text-slate-900 font-black">StudentToolsHub</strong>, we believe privacy is a fundamental human right, especially in the context of academic growth. This document serves as our contract with you, outlining the cryptographic and procedural safeguards we employ to keep your educational journey private.&rdquo;
                        </p>
                        <div className="mt-8 flex gap-4">
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">GDPR Compliant</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">CCPA Aligned</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-wider">FERPA Aware</span>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map(({ icon: Icon, color, num, title, content, list }) => (
                            <div key={num} className="group bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5">
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
                                        <p key={i} className="text-slate-600 leading-relaxed text-base font-sans m-0">{para}</p>
                                    ))}
                                    {list && (
                                        <div className="grid grid-cols-1 gap-4 pt-4">
                                            {list.map((item) => (
                                                <div key={item} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group/item">
                                                    <div className={`mt-1 w-6 h-6 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover/item:rotate-90 transition-transform`}>
                                                        <ChevronRight size={14} className="text-white" />
                                                    </div>
                                                    <span className="text-slate-700 text-sm font-semibold font-sans">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Support Block */}
                    <div className="mt-20 relative overflow-hidden rounded-[3rem] bg-slate-950 p-12 text-white text-center">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
                        <div className="relative space-y-8">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Mail size={32} className="text-emerald-400" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic tracking-tight">Security Consultation</h3>
                                <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
                                    If you represent an academic institution or have specific questions regarding our data architecture, please reach out to our privacy officer.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href={`mailto:${siteConfig.email}`} className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-emerald-500/20">
                                    Email Privacy Team
                                </a>
                                <a href="/contact" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-10 py-4 rounded-2xl font-bold transition-all">
                                    Contact Support
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
                        StudentToolsHub — Protecting Academic Futures Since 2026.
                    </p>
                </div>
            </section>
        </div>
    );
}
