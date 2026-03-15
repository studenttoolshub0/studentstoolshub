import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, BookOpen, Target, ArrowRight, Star,
  Users, FileText, Zap, ChevronRight, GraduationCap,
} from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ToolCard from "@/components/ToolCard";
import JsonLd from "@/components/JsonLd";
import { getFeaturedPosts } from "@/lib/posts";
import { siteConfig, academicTools } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "StudentToolsHub — Free Academic Tools & GPA Guides for Students",
  description:
    "Discover free academic tools, GPA calculators, and study guides designed to help university students succeed. Explore CGPA calculators, study tips, and more.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "StudentToolsHub — Free Academic Tools & GPA Guides",
    description: "Free GPA calculators, study guides, and academic tools for university students.",
    url: siteConfig.url,
  },
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite",
  name: siteConfig.name, url: siteConfig.url, description: siteConfig.description,
};
const orgSchema = {
  "@context": "https://schema.org", "@type": "Organization",
  name: siteConfig.name, url: siteConfig.url,
  contactPoint: { "@type": "ContactPoint", email: siteConfig.email, contactType: "customer support" },
};

const stats = [
  { icon: FileText, label: "Articles", value: "5+", gradient: "from-indigo-500 to-violet-500" },
  { icon: Zap, label: "Tools", value: "10+", gradient: "from-violet-500 to-cyan-500" },
  { icon: Users, label: "Readers", value: "1K+", gradient: "from-cyan-500 to-emerald-500" },
];

const features = [
  { icon: TrendingUp, title: "GPA Tracking", desc: "Track and understand your CGPA across every semester with precision.", gradient: "from-indigo-500 to-violet-600" },
  { icon: BookOpen, title: "Study Guides", desc: "Science-backed techniques to study smarter and retain more information.", gradient: "from-violet-500 to-cyan-500" },
  { icon: Target, title: "Goal Setting", desc: "Plan your academic goals and achieve them with clear, structured strategies.", gradient: "from-cyan-500 to-emerald-500" },
];

export default function HomePage() {
  const featured = getFeaturedPosts();

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={orgSchema} />

      {/* ────────────────────────────────────────────────
          HERO — dark slate bg + layered gradient orbs
      ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 min-h-[100svh] flex items-center">
        {/* Gradient orbs — positioned absolutely, pure Tailwind */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-600/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
          <div className="max-w-3xl">

       
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 mb-6 sm:mb-8 backdrop-blur-sm">
              <Star size={12} className="text-amber-400 fill-amber-400 flex-shrink-0" />
              <span>Built for students, by educators</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] sm:leading-[1.05] tracking-tight mb-4 sm:mb-6">
              Your Academic{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Success
              </span>{" "}
              Starts Here
            </h1>

            <p className="text-sm sm:text-lg text-slate-400 leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Free GPA calculators, study guides, and academic tools crafted for
              university students. Track your CGPA, elevate your grades, and plan
              your semester with total confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Explore Resources <ArrowRight size={15} />
              </Link>
              <Link
                href="/ktu-cgpa-calculator"
                className="inline-flex items-center gap-2 bg-white/8 border border-white/20 text-white font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl hover:bg-white/15 transition-all duration-200 text-sm backdrop-blur-sm"
              >
                <GraduationCap size={15} />
                KTU CGPA Calculator <ChevronRight size={14} />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex  xs:flex-row flex-wrap gap-4 sm:gap-6">
              {stats.map(({ icon: Icon, label, value, gradient }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg mt-2 sm:text-xl font-extrabold text-white leading-none">{value}</p>
                    <p className="text-xs text-slate-200 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating cards — decorative, right side on large screens */}
          <div className="hidden lg:flex flex-col gap-4 absolute right-8 top-1/2 -translate-y-1/2 w-72">
            {[
              { title: "CGPA Improved", sub: "+0.4 this semester", color: "from-indigo-500/20 to-violet-500/20", border: "border-indigo-500/30", dot: "bg-emerald-400" },
              { title: "Study Streak", sub: "14 days consistent", color: "from-violet-500/20 to-cyan-500/20", border: "border-violet-500/30", dot: "bg-amber-400" },
              { title: "Goal Achieved", sub: "Dean's List target met", color: "from-cyan-500/20 to-emerald-500/20", border: "border-cyan-500/30", dot: "bg-cyan-400" },
            ].map((card) => (
              <div key={card.title} className={`bg-gradient-to-br ${card.color} border ${card.border} backdrop-blur-md rounded-xl p-4 flex items-center gap-3`}>
                <div className={`w-2.5 h-2.5 rounded-full ${card.dot} flex-shrink-0 animate-pulse`} />
                <div>
                  <p className="text-sm font-bold text-white">{card.title}</p>
                  <p className="text-xs text-slate-400">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          FEATURES
      ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-2">What We Offer</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4">
              Helping Students{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Navigate Academic Life
              </span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed px-2">
              Whether you&apos;re decoding your GPA, building study habits, or planning your
              semester — we provide the tools and knowledge to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, gradient }) => (
              <div key={title}
                className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-indigo-200 transition-all duration-300 text-center group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          FEATURED BLOG
      ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-1">Latest Articles</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Featured{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Resources
                </span>
              </h2>
            </div>
            <Link href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors group">
              View all articles
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((post, i) => (
              <BlogCard key={post.slug} post={post} featured index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-bold text-indigo-600">
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          TOOLS SECTION
      ──────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 mb-2">Tools We Recommend</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Recommended{" "}
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Academic Tools
              </span>
            </h2>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {academicTools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          TESTIMONIAL / TRUST BAND
      ──────────────────────────────────────────────── */}


      {/* ────────────────────────────────────────────────
          CTA SECTION
      ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        {/* Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Elevate Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Academic Performance?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Explore free resources, calculate your GPA, and set yourself up for success —
            no sign-up required.
          </p>
          <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/blog"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 text-sm">
              Browse All Guides <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/20 text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-white/15 transition-all duration-200 text-sm">
              Contact Us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
