import type { Metadata } from "next";
import KTUCalculator from "@/components/ktu/KTUCalculator";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle2, Info, HelpCircle, BookOpen, GraduationCap } from "lucide-react";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KTU CGPA Calculator (2026 Updated) – Fast & Accurate GPA Tool",
  description: "Calculate your KTU CGPA and SGPA instantly with our fast and accurate KTU GPA calculator. Auto-load subjects by semester to save time.",
  openGraph: {
    title: "KTU CGPA Calculator (2026 Updated) – Fast & Accurate GPA Tool",
    description: "Calculate your KTU CGPA and SGPA instantly with our fast and accurate KTU GPA calculator.",
    type: "website",
    url: `${siteConfig.url}/ktu-cgpa-calculator`,
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
        "text": "KTU CGPA is calculated using the formula: CGPA = Σ(Ci x GPi) / ΣCi, where Ci is the credit for a course and GPi is the grade point earned."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good CGPA in KTU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consistency is key. A CGPA above 8.0 is generally considered very good in KTU and qualifies for most premium placements and higher studies."
      }
    },
    {
      "@type": "Question",
      "name": "Does lab credit count in CGPA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all credit-bearing courses, including labs, workshops, and projects, are included in the CGPA calculation."
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
              2019 Scheme Updated
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              KTU CGPA <span className="text-blue-600">Calculator</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              The fastest way to calculate your SGPA and CGPA for APJ Abdul Kalam Technological University. 
              Auto-load your subjects based on your branch and semester for a seamless experience.
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

      {/* Educational Content Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Guide & Formula */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <BookOpen size={24} />
                  <h2 className="text-2xl font-black text-slate-900">What is KTU CGPA?</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  CGPA (Cumulative Grade Point Average) represents the overall academic performance of a student across all completed semesters. 
                  In KTU, it is a weighted average where each course's grade point is multiplied by its credits.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">The Formula</p>
                  <div className="text-xl font-mono text-slate-800 bg-white p-4 rounded-xl shadow-sm border border-slate-200 text-center">
                    CGPA = Σ (Ci × GPi) / Σ Ci
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic text-center">
                    Where Ci = Course Credits, GPi = Grade Points
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4 text-emerald-600">
                  <CheckCircle2 size={24} />
                  <h2 className="text-2xl font-black text-slate-900">KTU Grade System</h2>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Grade</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {[
                        { g: 'S', s: 'Exceptional', p: '10' },
                        { g: 'A+', s: 'Outstaning', p: '9' },
                        { g: 'A', s: 'Excellent', p: '8.5' },
                        { g: 'B+', s: 'Very Good', p: '8' },
                        { g: 'B', s: 'Good', p: '7' },
                        { g: 'C', s: 'Average', p: '6' },
                        { g: 'P', s: 'Pass', p: '5' },
                        { g: 'F', s: 'Fail', p: '0' },
                      ].map((row) => (
                        <tr key={row.g} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-3 font-bold text-slate-900">{row.g}</td>
                          <td className="px-6 py-3 text-slate-600">{row.s}</td>
                          <td className="px-6 py-3 font-mono font-bold text-blue-600">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-violet-600">
                <HelpCircle size={24} />
                <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "How is KTU CGPA calculated?",
                    a: "It is calculated by dividing the sum of (credits acquired x grade points earned) by the total number of credits for the courses taken across all semesters."
                  },
                  {
                    q: "What is the passing grade in KTU?",
                    a: "The minimum grade required to pass a subject is 'P' (Grade Point 5). Any grade below this is considered a fail (F)."
                  },
                  {
                    q: "Does lab credit count in CGPA?",
                    a: "Yes, all credit-bearing courses, including labs, workshops, and projects, are included in the CGPA calculation."
                  },
                  {
                    q: "How to convert KTU CGPA to percentage?",
                    a: "The standard KTU formula for converting CGPA to percentage is: [CGPA - 0.5] * 10."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-200 hover:shadow-md transition-all group">
                    <h3 className="font-bold text-slate-900 mb-2 flex gap-3">
                      <span className="text-violet-600">Q.</span> {item.q}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed pl-7">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap size={28} />
                    <h3 className="text-xl font-bold">Academic Success Guide</h3>
                  </div>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                    Check out our blog for in-depth guides on how to improve your CGPA, effective study techniques, and career planning.
                  </p>
                  <a href="/blog" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all">
                    Explore Resources
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
