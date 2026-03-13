import type { Metadata } from "next";
import { Shield, Database, Cookie, Link2, Lock, Baby, UserCheck, RefreshCw, Mail, ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the StudentToolsHub Privacy Policy. Learn how we handle your data, what information we collect, and how we protect your privacy.",
    alternates: { canonical: `${siteConfig.url}/privacy-policy` },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Privacy Policy — StudentToolsHub",
        description: "How StudentToolsHub collects, uses, and protects your information.",
        url: `${siteConfig.url}/privacy-policy`,
    },
};

const privacySchema = {
    "@context": "https://schema.org", "@type": "WebPage",
    name: "Privacy Policy — StudentToolsHub", url: `${siteConfig.url}/privacy-policy`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
};

const sections = [
    {
        icon: Database, color: "from-indigo-500 to-violet-500", num: "01",
        title: "Information We Collect",
        content: [
            "We may collect information you voluntarily provide, such as when you fill out our contact form. This may include your name, email address, message content, and subject matter.",
            "We also collect non-personal information automatically through standard web technologies — browser type, operating system, referring URLs, and pages visited — used solely for analytics and performance monitoring.",
        ],
        list: ["Name and email address (contact form only)", "Message content and subject matter", "General location data (country/region, from analytics)"],
    },
    {
        icon: Shield, color: "from-violet-500 to-cyan-500", num: "02",
        title: "How We Use Your Information",
        content: ["We use the information we collect to respond to your inquiries, improve our content and tools, analyze website traffic, and comply with applicable laws. We do not sell, trade, or rent your personal information to third parties for marketing purposes."],
        list: ["Respond to your inquiries and provide student support", "Improve the content and functionality of our website", "Analyze website traffic and usage patterns", "Send newsletters only if you have explicitly opted in"],
    },
    {
        icon: Cookie, color: "from-cyan-500 to-emerald-500", num: "03",
        title: "Cookies & Tracking Technologies",
        content: ["StudentToolsHub uses cookies and similar technologies to enhance your browsing experience. You can control cookies through your browser settings at any time; disabling certain cookies may affect site functionality."],
        list: ["Essential Cookies — required for the site to function correctly", "Analytics Cookies — help us understand visitor interactions", "Preference Cookies — remember your settings and preferences", "Third-Party Cookies — may be set by embedded or external tools"],
    },
    {
        icon: Link2, color: "from-rose-500 to-pink-500", num: "04",
        title: "Third-Party Links & Services",
        content: ["Our website may contain links to external sites such as academic tool providers. These third-party sites have their own privacy policies. We have no responsibility for their content or practices and encourage you to review their policies before sharing any information."],
    },
    {
        icon: Lock, color: "from-amber-500 to-orange-500", num: "05",
        title: "Data Security",
        content: ["We implement reasonable technical and organizational measures to protect your personal information. Our website is served over HTTPS to encrypt data in transit. However, no method of transmission or storage is 100% secure — we cannot guarantee absolute security but are committed to best practices."],
    },
    {
        icon: Baby, color: "from-emerald-500 to-teal-500", num: "06",
        title: "Children's Privacy",
        content: ["StudentToolsHub is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you believe your child has provided us with personal information, please contact us immediately so we can take appropriate action."],
    },
    {
        icon: UserCheck, color: "from-indigo-500 to-cyan-500", num: "07",
        title: "Your Rights",
        content: ["Depending on your location, you may have certain rights regarding your personal data. To exercise any of these rights, please contact us at the email address below."],
        list: ["The right to access and receive a copy of your personal data", "The right to correct inaccurate or incomplete data", "The right to request deletion of your personal data", "The right to object to or restrict processing of your data"],
    },
    {
        icon: RefreshCw, color: "from-violet-500 to-rose-500", num: "08",
        title: "Changes to This Policy",
        content: ["We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the 'Last updated' date at the top of this page. Continued use of our website after changes constitutes your acceptance of the updated policy."],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            <JsonLd data={privacySchema} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-20">
                <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300 mb-3">Legal</p>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 text-center">
                        Privacy <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Policy</span>
                    </h1>
                    <p className="text-slate-400 text-sm">Last updated: March 7, 2026</p>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro card */}
                    <div className="bg-white border border-indigo-100 rounded-2xl p-6 mb-12 shadow-sm">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            At <span className="font-bold text-slate-900">StudentToolsHub</span> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are
                            committed to protecting your privacy. This Privacy Policy explains how we
                            collect, use, disclose, and safeguard your information when you visit{" "}
                            <a href={siteConfig.url} className="text-indigo-600 font-semibold hover:underline">{siteConfig.url}</a>.
                            Please read this policy carefully.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map(({ icon: Icon, color, num, title, content, list }) => (
                            <div key={num} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                {/* Section header */}
                                <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 p-5 sm:p-6 border-b border-slate-100">
                                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}>
                                        <Icon size={18} className="text-white sm:hidden" />
                                        <Icon size={20} className="text-white hidden sm:block" />
                                    </div>
                                    <div className="flex items-baseline gap-2 sm:gap-3">
                                        <span className="text-[10px] sm:text-xs font-bold text-slate-300 tracking-widest leading-none">{num}</span>
                                        <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">{title}</h2>
                                    </div>
                                </div>

                                {/* Section body */}
                                <div className="p-6 space-y-4">
                                    {content.map((para, i) => (
                                        <p key={i} className="text-sm text-slate-600 leading-relaxed">{para}</p>
                                    ))}
                                    {list && (
                                        <ul className="space-y-2 mt-2">
                                            {list.map((item) => (
                                                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <span className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                                                        <ChevronRight size={10} className="text-white" />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact section */}
                    <div className="mt-10 relative overflow-hidden rounded-3xl bg-slate-950 p-8">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl" />
                        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
                            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                                <Mail size={22} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">Questions About This Policy?</h3>
                                <p className="text-slate-300 text-sm">
                                    Contact us at{" "}
                                    <a href={`mailto:${siteConfig.email}`} className="text-indigo-300 font-semibold hover:underline">
                                        {siteConfig.email}
                                    </a>{" "}
                                    or visit our{" "}
                                    <a href="/contact" className="text-indigo-300 font-semibold hover:underline">contact page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
