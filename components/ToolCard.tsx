import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { Tool } from "@/types";

const gradients = [
    { from: "from-indigo-500", to: "to-violet-600", shadow: "shadow-indigo-200" },
    { from: "from-violet-500", to: "to-cyan-500", shadow: "shadow-violet-200" },
    { from: "from-cyan-500", to: "to-emerald-500", shadow: "shadow-cyan-200" },
    { from: "from-rose-500", to: "to-pink-500", shadow: "shadow-rose-200" },
];

interface ToolCardProps { tool: Tool; index?: number }

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
    const g = gradients[index % gradients.length];
    const Icon = tool.icon;

    const inner = (
        <div className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 cursor-pointer">
            {/* Icon box */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${g.from} ${g.to} flex items-center justify-center mb-5 shadow-md ${g.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={18} className="text-white sm:hidden" />
                <Icon size={22} className="text-white hidden sm:block" />
            </div>

            {/* Name */}
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
                {tool.name}
                {tool.external && <ExternalLink size={12} className="text-slate-400 group-hover:text-indigo-400 sm:hidden" />}
                {tool.external && <ExternalLink size={13} className="text-slate-400 group-hover:text-indigo-400 hidden sm:block" />}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{tool.description}</p>

            {/* CTA */}
            <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${g.from} ${g.to} bg-clip-text text-transparent`}>
                {tool.external ? "Visit Tool" : "Learn More"}
                <ArrowRight size={14} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    );

    if (tool.external) {
        const rel = `noopener noreferrer${tool.nofollow !== false ? " nofollow" : ""}`;
        return <a href={tool.href} target="_blank" rel={rel} className="block h-full">{inner}</a>;
    }
    return <Link href={tool.href} className="block h-full">{inner}</Link>;
}
