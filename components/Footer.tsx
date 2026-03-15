import Link from "next/link";
import { GraduationCap, Mail, Rss, ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig, navItems } from "@/lib/siteConfig";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand col */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
                                <GraduationCap size={18} className="text-white" />
                            </div>
                            <span className="text-lg font-extrabold text-white">StudentToolsHub</span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Empowering students with free academic tools, GPA calculators, and
                            study guides. Built for students, by educators.
                        </p>
                        <a href={`mailto:${siteConfig.email}`}
                            className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                            <Mail size={14} /> {siteConfig.email}
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Navigation</h3>
                        <ul className="space-y-2.5">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}
                                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
                                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Resources</h3>
                        <ul className="space-y-2.5">
                            {[
                                { label: "KTU CGPA Calculator", href: "/ktu-cgpa-calculator", internal: true },
                                { label: "Privacy Policy", href: "/privacy-policy", internal: true },
                                { label: "Blog & Guides", href: "/blog", internal: true },
                            ].map(({ label, href, internal }) => (
                                <li key={label}>
                                    {internal ? (
                                        <Link href={href} className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors group">
                                            <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                                            {label}
                                        </Link>
                                    ) : null}
                                </li>
                            ))}
        
                            <li>
                                <a href="/feed.xml"
                                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                                    <Rss size={12} /> RSS Feed
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-slate-500">© {year} StudentToolsHub. All rights reserved.</p>
                    <p className="text-xs text-slate-600">Built for students, by educators.</p>
                </div>
            </div>
        </footer>
    );
}
