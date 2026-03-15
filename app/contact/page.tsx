import type { Metadata } from "next";
import { Mail, Clock, Globe, ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Have a question about GPA calculators, study strategies, or academic tools? Get in touch with the StudentToolsHub team — we're here to help students succeed.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact StudentToolsHub",
        description: "Get in touch with our team for GPA questions and academic guidance.",
        url: `${siteConfig.url}/contact`,
    },
};

const contactSchema = {
    "@context": "https://schema.org", "@type": "ContactPage",
    name: "Contact StudentToolsHub", url: `${siteConfig.url}/contact`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
};

const infoCards = [
    {
        icon: Mail, color: "from-indigo-500 to-violet-500",
        title: "Email Us", detail: siteConfig.email,
        sub: "Typical response within 1–2 business days",
        href: `mailto:${siteConfig.email}`,
    },
    {
        icon: Clock, color: "from-violet-500 to-cyan-500",
        title: "Response Time", detail: "1–2 Business Days",
        sub: "Monday through Friday",
    },
    {
        icon: Globe, color: "from-cyan-500 to-emerald-500",
        title: "Available To", detail: "Students Worldwide",
        sub: "We support all university grading systems",
    },
];

const topics = [
    "GPA & CGPA calculation questions",
    "Academic tool recommendations",
    "Study strategy advice",
    "Content suggestions & corrections",
    "Partnership & collaboration requests",
];

export default function ContactPage() {
    return (
        <>
            <JsonLd data={contactSchema} />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
                <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-violet-500/15 rounded-full blur-3xl" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300 mb-3">Get in Touch</p>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
                        Contact <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-xl mx-auto">
                        Have a question about academic tools or GPA calculations? We'd love to hear from
                        you and help you succeed.
                    </p>
                </div>
            </section>

            <section className="py-10 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

                        {/* Left sidebar */}
                        <div className="lg:col-span-2 space-y-5">
                            <div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2">How Can We Help?</h2>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Whether you need help with GPA calculations, study strategies, or want to
                                    suggest content — we're happy to assist.
                                </p>
                            </div>

                            {/* Info cards */}
                            {infoCards.map((card) => (
                                <div key={card.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                                            <card.icon size={18} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 mb-0.5">{card.title}</p>
                                            {card.href ? (
                                                <a href={card.href} className="text-sm font-semibold text-indigo-600 hover:underline">{card.detail}</a>
                                            ) : (
                                                <p className="text-sm font-semibold text-indigo-600">{card.detail}</p>
                                            )}
                                            <p className="text-xs text-slate-400 mt-0.5">{card.sub}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Topics list */}
                            <div className="rounded-2xl p-5 border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50">
                                <p className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                                        <ChevronRight size={12} className="text-white" />
                                    </span>
                                    Common Topics We Help With
                                </p>
                                <ul className="space-y-2">
                                    {topics.map((t) => (
                                        <li key={t} className="flex items-start gap-2 text-xs text-slate-600">
                                            <span className="mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 flex items-center justify-center flex-shrink-0">
                                                <ChevronRight size={9} className="text-white" />
                                            </span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
                                <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                                <p className="text-sm text-slate-500 mb-7">
                                    Fill out the form and our team will respond as soon as possible.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
