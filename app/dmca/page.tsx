import type { Metadata } from "next";
import { ShieldAlert, Mail, AlertTriangle, FileText, ChevronRight, Scale, Info } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "DMCA Policy - Intellectual Property & Copyright Compliance",
    description:
        "StudentToolsHub's Digital Millennium Copyright Act (DMCA) policy. Learn how we handle copyright infringement notices and our commitment to protecting intellectual property.",
    alternates: { canonical: "/dmca" },
    openGraph: {
        title: "DMCA Policy — StudentToolsHub",
        description: "Intellectual property rights and copyright infringement notification procedures.",
        url: `${siteConfig.url}/dmca`,
    },
};

const dmcaSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DMCA Policy — StudentToolsHub",
    "url": `${siteConfig.url}/dmca`,
    "description": "Intelatucal property and DMCA compliance policy for StudentToolsHub.",
    "isPartOf": { "@type": "WebSite", "name": siteConfig.name, "url": siteConfig.url },
};

const sections = [
    {
        icon: AlertTriangle, color: "from-amber-600 to-orange-600", num: "01",
        title: "DMCA Notice of Infringement",
        content: [
            "StudentToolsHub respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to claims of copyright infringement committed using the StudentToolsHub website that are reported to our Designated Copyright Agent.",
            "If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place on or through the Site by completing a DMCA Notice of Alleged Infringement and delivering it to our team.",
        ],
    },
    {
        icon: Scale, color: "from-indigo-600 to-violet-600", num: "02",
        title: "Information Required in Notice",
        content: ["To be effective, your DMCA notice must include the following information:"],
        list: [
            "Identification of the copyrighted work that you claim has been infringed.",
            "Identification of the material that is claimed to be infringing (including the URL).",
            "Your contact information (name, address, telephone number, and email).",
            "A statement that you have a good faith belief that use of the material is not authorized.",
            "A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.",
            "A physical or electronic signature of a person authorized to act on behalf of the owner."
        ],
    },
    {
        icon: Mail, color: "from-emerald-600 to-teal-600", num: "03",
        title: "Where to Send Your Notice",
        content: [
            "Please send your completed DMCA notice to our designated agent via email. We prioritize these inquiries to ensure rapid resolution of any intellectual property concerns.",
            `Designated Agent Email: ${siteConfig.email}`,
        ],
    },
    {
        icon: FileText, color: "from-rose-600 to-pink-600", num: "04",
        title: "Counter-Notification Procedures",
        content: [
            "If you receive a notification that your content has been removed due to a copyright complaint, you may send us a counter-notification if you believe the removal was a mistake. We will follow the standard DMCA procedures for evaluating and potentially restoring the content.",
        ],
    },
];

export default function DMCAPage() {
    return (
        <div className="bg-white min-h-screen">
            <JsonLd data={dmcaSchema} />

            {/* Premium Header */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-500/20 mb-8">
                        <ShieldAlert size={14} />
                        IP Protection Protocol
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                        DMCA <br />
                        <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent italic">
                            Compliance Policy
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                        StudentToolsHub is committed to upholding the integrity of intellectual property and providing a transparent process for copyright resolution.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Philosophical Intro */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 mb-16 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
                        <p className="text-slate-600 leading-relaxed text-lg font-sans italic m-0">
                            &ldquo;Our commitment to the academic community includes a profound respect for the creators and authors whose work empowers modern education. We adhere strictly to the Digital Millennium Copyright Act to ensure a safe, legal environment for all users.&rdquo;
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-12">
                        {sections.map(({ icon: Icon, color, num, title, content, list }) => (
                            <div key={num} className="group bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:border-amber-200 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5">
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
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
                        <div className="relative space-y-8">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto">
                                <Info size={32} className="text-amber-400" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl font-black italic tracking-tight">Legal Consultation</h3>
                                <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-sans">
                                    This policy serves as a notice and does not constitute legal advice. For specific intellectual property questions, we recommend consulting with an attorney.
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href={`mailto:${siteConfig.email}`} className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-amber-500/20">
                                    Contact DMCA Agent
                                </a>
                                <a href="/contact" className="bg-slate-900 border border-slate-800 hover:border-slate-700 text-white px-10 py-4 rounded-2xl font-bold transition-all">
                                    Support Portal
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
                        StudentToolsHub — Protecting Academic Integrity Since 2026.
                    </p>
                </div>
            </section>
        </div>
    );
}
