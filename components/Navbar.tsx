"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Menu, X, Sparkles } from "lucide-react";
import { navItems } from "@/lib/siteConfig";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 border-b border-slate-200 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                            <GraduationCap size={15} className="text-white sm:hidden" />
                            <GraduationCap size={17} className="text-white hidden sm:block" />
                        </div>
                        <span className="text-base sm:text-lg font-extrabold tracking-tight whitespace-nowrap">
                            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                                Student
                            </span>
                            <span className="text-slate-800">Tools</span>
                            <span className="text-slate-800 hidden xs:inline">Hub</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="px-4 py-2 text-sm font-medium text-slate-600 rounded-lg hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200">
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact"
                            className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md shadow-indigo-200 transition-all duration-200">
                            <Sparkles size={13} /> Get Help
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <button className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                        onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="md:hidden border-t border-slate-100 bg-white shadow-xl">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}
                                className="px-4 py-3 text-sm font-medium text-slate-700 rounded-xl hover:text-indigo-600 hover:bg-indigo-50 transition-all"
                                onClick={() => setOpen(false)}>
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact"
                            className="mt-2 px-4 py-3 text-sm font-bold text-center text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md"
                            onClick={() => setOpen(false)}>
                            Get Help
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
