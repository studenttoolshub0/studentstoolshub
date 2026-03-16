import type { Metadata } from "next";
import KTUCalculator from "@/components/ktu/KTUCalculator";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle2, Info, HelpCircle, BookOpen, GraduationCap, Calculator } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ktu/ScrollToTop";

export const metadata: Metadata = {
  title: "KTU CGPA Calculator - Fast & Accurate GPA Calculator for Kerala Technological University Students",
  description: "Use our accurate KTU CGPA Calculator (2019 Scheme) to calculate SGPA and CGPA instantly for Kerala Technological University. Pre-loaded subjects for CSE, ME, CE, EE, EC.",
  openGraph: {
    title: "KTU CGPA Calculator – Fast & Accurate GPA Calculator for Kerala Technological University Students",
    description: "Fastest and most accurate KTU (Kerala Technological University) GPA calculator with auto-loaded subjects for all engineering branches.",
    type: "website",
    url: `${siteConfig.url}/ktu-cgpa-calculator`,
  },
  alternates: {
    canonical: "/ktu-cgpa-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is KTU CGPA calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KTU CGPA is calculated using the formula: Σ(Credits x Grade Point) / Σ(Total Credits). This uses a weighted average system where core engineering subjects have higher impact."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good CGPA in KTU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CGPA above 7.5 is good for placements, while 8.5+ is excellent for higher studies and top-tier companies at APJ Abdul Kalam Technological University."
      }
    },
    {
      "@type": "Question",
      "name": "Does lab credit count in CGPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every course mentioned in your syllabus that carries a credit value—including labs, workshops, projects, and seminars—is included in the CGPA calculation for KTU students."
      }
    },
    {
       "@type": "Question",
       "name": "Is SGPA and CGPA the same?",
       "acceptedAnswer": {
         "@type": "Answer",
         "text": "No. SGPA (Semester Grade Point Average) is for a single semester, whereas CGPA (Cumulative Grade Point Average) is the combined average of all semesters completed."
       }
    }
  ]
};

export default function KTUCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd data={faqSchema} />
      
      {/* Header / Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Official multi-scheme support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                <strong>KTU CGPA Calculator</strong>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Calculate your SGPA and CGPA for APJ Abdul Kalam Technological University (formerly Kerala Technological University) instantly. 
              Our fast and accurate tool features auto-loaded subjects to simplify your academic tracking across 2015, 2019, and 2024 schemes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KTUCalculator />
        </div>
      </section>

      {/* NEW: Comprehensive SEO Content Section */}
      <section className="py-20 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Article Content */}
            <article className="prose prose-slate prose-lg max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                    <BookOpen className="text-blue-600" />
                    How to Use the KTU CGPA Calculator Effectively
                </h2>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                    For students at APJ Abdul Kalam Technological University, formerly known as Kerala Technological University, keeping track of academic performance is a critical part of the engineering journey. The university was established in 2014 as Kerala Technological University and was quickly renamed to APJ Abdul Kalam Technological University. It is now officially known by the latter name, while retaining KTU as the abbreviation. Whether you are aiming for a top-tier placement, applying for higher studies abroad, or simply striving for academic excellence, understanding your standing is essential. This is where a reliable <strong>KTU CGPA Calculator</strong> becomes an indispensable tool.
                </p>

                <p className="text-slate-600 leading-relaxed mb-12">
                    Calculating your Cumulative Grade Point Average (CGPA) manually can be a tedious and error-prone process, especially when dealing with varying credit weights and multiple semesters. Our specialized calculator is designed to simplify this task, providing instant and 100% accurate results based on the official university schemes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                           <GraduationCap className="text-blue-600" />
                           What is CGPA in KTU?
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            In the context of KTU, CGPA stands for Cumulative Grade Point Average. It is a metric used to represent the overall academic performance across all completed semesters. While semester-specific average is SGPA, the CGPA provide the big picture of your engineering journey.
                        </p>
                    </div>
                    <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-500/10 text-white">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                           <Calculator className="text-blue-200" />
                           Formula & Logic
                        </h3>
                        <div className="bg-white/10 p-4 rounded-xl font-mono text-center text-lg border border-white/20 mb-4">
                            Σ (Ci × GPi) / Σ Ci
                        </div>
                        <p className="text-xs text-blue-100 italic">
                            Where Ci = Credits, GPi = Grade Points. KTU follow a 10-point credit-based grading system.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">Official KTU Grade Point Table</h2>
                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm my-8">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4 border-b border-slate-200">Letter Grade</th>
                        <th className="px-6 py-4 border-b border-slate-200">Performance</th>
                        <th className="px-6 py-4 border-b border-slate-200">Point (GP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {[
                        { g: 'S', s: 'Exceptional', p: '10' },
                        { g: 'A+', s: 'Outstanding', p: '9' },
                        { g: 'A', s: 'Excellent', p: '8.5' },
                        { g: 'B+', s: 'Very Good', p: '8' },
                        { g: 'B', s: 'Good', p: '7' },
                        { g: 'C', s: 'Average', p: '6' },
                        { g: 'P', s: 'Pass', p: '5' },
                        { g: 'F', s: 'Fail', p: '0' },
                      ].map((row) => (
                        <tr key={row.g} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-900">{row.g}</td>
                          <td className="px-6 py-4 text-slate-600">{row.s}</td>
                          <td className="px-6 py-4 font-mono font-bold text-blue-600">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="my-16 flex flex-col gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-slate-900">Why Use our Online Calculator?</h2>
                        <p className="text-slate-600 leading-relaxed">
                            In the age of digital education, manual calculations are a thing of the past. Thousands of students at APJ Abdul Kalam Technological University trust our online GPA calculator for several reasons:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "100% Accuracy without manual math errors",
                                "Pre-loaded syllabus for all branches",
                                "Instant What-If analysis for future planning",
                                "Saves hours of checking syllabus credit weights",
                                "Real-time SGPA and CGPA updates as you type",
                                "Mobile friendly and SEO optimized interface"
                            ].map(feat => (
                                <li key={feat} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">Tips to Improve Your CGPA in KTU</h2>
                <div className="bg-slate-900 text-white rounded-[2rem] p-10 my-12 relative overflow-hidden group">
                     <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                     <div className="relative z-10 space-y-8">
                        <div>
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Pro Strategy 01</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Focus on High-Credit Subjects</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Subjects like Engineering Mechanics or core departmental papers often carry 4 credits. A higher grade in these has double the impact of a 2-credit lab. Prioritize your study time where the ROI is highest.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Pro Strategy 02</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Master Internal Assessments</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Don't treat series exams lightly. High internal marks ensure a strong foundation before the end-semester exams, significantly reducing the pressure to score perfect in finals.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Pro Strategy 03</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Track Progress Regularly</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Use this calculator at the start of every semester. Set a target and play with numbers to see exactly what grades you need to pull your average up.
                            </p>
                        </div>
                     </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">Common CGPA Calculation Mistakes</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Discrepancies between manual calculation and the official KTU result usually occur due to ignoring credit hours, using an incorrect scale, and rounding off too early. Our logic follows the exact university ordinances to prevent these errors.
                </p>

                <div className="mt-20 border-t border-slate-100 pt-16">
                     <div className="flex items-center gap-3 mb-10">
                         <div className="p-3 bg-violet-100 text-violet-600 rounded-2xl">
                            <HelpCircle size={28} />
                         </div>
                         <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            q: "How to calculate semester grade point average in KTU?",
                            a: "SGPA is calculated by dividing the sum of (Credits x Grade Point) for one semester by the total credits of that term. Our tool automates this for you."
                          },
                          {
                            q: "What is the passing grade for KTU engineering students?",
                            a: "The minimum passing grade in KTU is P (Grade Point 5). Any result below this is marked as F (Fail)."
                          },
                          {
                            q: "Is there a specific KTU grade point table?",
                            a: "Yes, KTU uses a fixed range of points from 10 (S) to 5 (P). We have integrated this official table into our calculator for perfect accuracy."
                          },
                          {
                            q: "Does lab credit impact engineering CGPA calculation?",
                            a: "Absolutely. Lab credits are weighted just like theory courses. Often, high-performing students maintain their CGPA by excelling in these areas."
                          }
                        ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                                <h4 className="font-black text-slate-900 mb-4 text-lg pr-4">{item.q}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                           </div>
                        ))}
                     </div>
                </div>

                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/20 text-center">
                    <h2 className="text-3xl font-black mb-6 text-white tracking-tight">Start Tracking Your Academic Success Today</h2>
                    <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Don't let manual errors stop your progress. Use the most accurate tools and stay ahead in your engineering career at APJ Abdul Kalam Technological University.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <ScrollToTop />
                    </div>
                </div>
            </article>

        </div>
      </section>

    </div>
  );
}
