import type { Metadata } from "next";
import { Info, Mail, AlertCircle, FileText, ChevronRight, Scale, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Disclaimer - Academic Tooling & Information Accuracy",
    description:
        "StudentToolsHub's disclaimer policy. Understand the limitations of our academic tools, content accuracy, and professional advice boundaries.",
    alternates: { canonical: "/disclaimer" },
    openGraph: {
        title: "Disclaimer — StudentToolsHub",
        description: "Information about the accuracy and limitations of our academic resources.",
        url: `${siteConfig.url}/disclaimer`,
    },
};

const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Disclaimer — StudentToolsHub",
    "url": `${siteConfig.url}/disclaimer`,
    "description": "General disclaimer regarding information accuracy and professional advice on StudentToolsHub.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
};

const sections = [
    {
        icon: AlertCircle, color: "from-rose-600 to-red-600", num: "01",
        title: "No Professional Advice",
        content: [
            "The information provided by StudentToolsHub (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) on our website is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.",
            "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.",
        ],
    },
    {
        icon: Scale, color: "from-blue-600 to-indigo-600", num: "02",
        title: "Calculation Accuracy",
        content: [
            "While our CGPA and SGPA calculators are architected to reflect specific university ordinances (such as the KTU 2019 Scheme), they are intended for auditing and simulation purposes only. The results provided by our tools are estimates and should not be considered official university transcripts or academic records.",
            "We strongly recommend that students verify their final scores with their institution's official registrar or student portal before making enrollment or placement decisions based on our calculations.",
        ],
    },
    {
        icon: ShieldCheck, color: "from-emerald-600 to-teal-600", num: "03",
        title: "External Links Disclaimer",
        content: [
            "The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.",
            "We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.",
        ],
    },
    {
        icon: Info, color: "from-violet-600 to-purple-600", num: "04",
        title: "Errors and Omissions",
        content: [
            "While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, StudentToolsHub is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided 'as is', with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information.",
        ],
    },
];

export default function DisclaimerPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={disclaimerSchema} />

            {/* Premium Header */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-rose-500/20 mb-8">
                        <FileText size={14} />
                        Legal Limitations
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        General <br />
                        <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent italic">
                            Disclaimer
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        Transparency is the foundation of StudentToolsHub. This disclaimer outlines the scope and limits of the information provided across our platform.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Philosophical Intro */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 mb-16 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-rose-500" />
                        <p className="text-slate-600 leading-relaxed text-lg font-sans italic m-0">
                            &ldquo;Our mission is to empower students with data, but data should always be verified at its source. We provide tools for academic excellence with the understanding that the user assumes responsibility for their final results.&rdquo;
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map(({ icon: Icon, color, num, title, content }) => (
                            <div key={num} className="group bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:border-rose-200 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/5">
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
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px]" />
                        <div className="relative space-y-8">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Mail size={32} className="text-rose-400" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic tracking-tight">Need Clarification?</h3>
                                <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
                                    If you have any questions regarding our disclaimer or the accuracy of our tools, please don't hesitate to reach out to our academic support team.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href={`mailto:${siteConfig.email}`} className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-rose-500/20">
                                    Email Support
                                </a>
                                <a href="/contact" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-10 py-4 rounded-2xl font-bold transition-all">
                                    Full Contact Info
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
                        StudentToolsHub — Guidance Through Precision, Integrity Through Transparency.
                    </p>
                </div>
            </section>
        </div>
    );
}
