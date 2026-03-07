import Link from "next/link";
import { Home, BookOpen, ArrowRight, SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <div className="relative overflow-hidden min-h-[80vh] flex items-center justify-center px-4">
            {/* Background */}
            <div className="absolute inset-0 bg-slate-950 opacity-95" />
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

            <div className="relative text-center max-w-lg">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm mb-8 mx-auto shadow-2xl">
                    <SearchX size={44} className="text-white/80" />
                </div>

                {/* 404 number */}
                <p className="text-8xl font-black text-white/10 select-none leading-none mb-2 tracking-tight">
                    404
                </p>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 -mt-4">
                    Page <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Not Found</span>
                </h1>

                <p className="text-slate-300 text-base leading-relaxed mb-10 max-w-sm mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Browse
                    our resources or return to the homepage.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 transition-all px-7 py-3.5 rounded-xl font-bold text-white shadow-xl shadow-indigo-500/30 text-sm"
                    >
                        <Home size={16} /> Go Home
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm"
                    >
                        <BookOpen size={16} /> Browse Blog <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
