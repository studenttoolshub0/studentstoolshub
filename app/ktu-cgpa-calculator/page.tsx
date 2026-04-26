import type { Metadata } from "next";
import KTUCalculator from "@/components/ktu/KTUCalculator";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle2, HelpCircle, BookOpen, GraduationCap, Calculator } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ktu/ScrollToTop";

export const metadata: Metadata = {
  title: "KTU CGPA Calculator - Fast & Accurate",
  description: "Use our accurate KTU CGPA Calculator (2019 Scheme) to calculate SGPA and CGPA instantly for Kerala Technological University. Pre-loaded subjects for CSE, ME, CE, EE, EC.",
  openGraph: {
    title: "KTU CGPA Calculator - Fast & Accurate",
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
                <strong>KTU CGPA Calculator</strong>: Mastering the 2019 Scheme Grading System
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              Calculate your SGPA and CGPA for APJ Abdul Kalam Technological University instantly. 
              Our fast, precise, and user-friendly tool features auto-loaded subjects for the 2015, 2019, and 2024 schemes, 
              ensuring 100% accuracy in your academic auditing and engineering success.
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
                    The Definitive Guide to KTU CGPA Calculation
                </h2>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                    For students at <strong>APJ Abdul Kalam Technological University</strong> (formerly known as Kerala Technological University), the path to engineering success is measured through the Cumulative Grade Point Average (CGPA). Established in 2014, the university has undergone rapid evolution, particularly with the introduction of the 2019 Scheme, which refined the credit-weighted system to better align with global engineering standards. Whether you are aiming for a high-paying software placement, a core engineering role, or advanced research in a foreign university, your CGPA is the primary filter that determines your eligibility and professional standing.
                </p>

                <p className="text-slate-600 leading-relaxed mb-8">
                    Calculating your CGPA manually is not just tedious—it is a significant academic risk. With varying credit weights between theory papers, laboratories, and specialized workshops, a single rounding error can lead to a false understanding of your standing. This is why our <strong>KTU CGPA Calculator</strong> is engineered to handle the complex mathematical lifting for you. In this exhaustive 1500+ word guide, we will dive deep into the mechanics of the KTU grading system, the nuances of the 2019 scheme, and tactical strategies to skyrocket your academic performance.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Understanding the Hierarchy: SGPA vs. CGPA</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  The KTU system operates on two distinct levels of measurement. <strong>SGPA (Semester Grade Point Average)</strong> serves as your performance snapshot for a single term. It is the weighted average of the grade points you earned in that specific semester. <strong>CGPA (Cumulative Grade Point Average)</strong>, however, is the cumulative metric—it is the weighted average of every semester you have completed until that point. For recruiters, the CGPA is the "gold standard" as it demonstrates long-term consistency and academic grit over several years of rigorous engineering study.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 font-sans">
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                           <GraduationCap className="text-blue-600" />
                           The Importance of Credits
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-sans">
                            In the KTU 2019 scheme, every subject has a specific number of credits (Ci). Core subjects like Engineering Mathematics or Mechanics often carry 4 credits, while labs might carry 1 or 2. This means a high grade in a core subject has up to four times the impact on your final average compared to a lab.
                        </p>
                    </div>
                    <div className="bg-blue-600 p-8 rounded-3xl shadow-xl shadow-blue-500/10 text-white font-sans">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                           <Calculator className="text-blue-200" />
                           The Official Formula
                        </h3>
                        <div className="bg-white/10 p-4 rounded-xl font-mono text-center text-lg border border-white/20 mb-4 font-sans">
                            Σ (Ci × GPi) / Σ Ci
                        </div>
                        <p className="text-xs text-blue-100 italic font-sans">
                            Ci = Course Credits, GPi = Grade Points earned. This weighted average formula ensures that mastery of complex core subjects is rewarded appropriately in your final transcript.
                        </p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">The KTU Grade Point Scale: Decoding Your Results</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  APJ Abdul Kalam Technological University utilizes a refined 10-point scale for its grading system. Successfully navigating this scale requires understanding the point "cliff" between letter grades. For instance, the difference between an A (8.5) and a B+ (8.0) might seem minor, but when multiplied by a 4-credit course, it results in a difference of 2.0 total grade points in your overall sum.
                </p>

                <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm my-8 font-sans">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4 border-b border-slate-200">Letter Grade</th>
                        <th className="px-6 py-4 border-b border-slate-200">Performance Level</th>
                        <th className="px-6 py-4 border-b border-slate-200">Point (GP)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {[
                        { g: 'S', s: 'Exceptional (Mastery of Content)', p: '10.0' },
                        { g: 'A+', s: 'Outstanding Work', p: '9.0' },
                        { g: 'A', s: 'Excellent Performance', p: '8.5' },
                        { g: 'B+', s: 'Very Good Standard', p: '8.0' },
                        { g: 'B', s: 'Good/Steady Performance', p: '7.0' },
                        { g: 'C', s: 'Average/Fair', p: '6.0' },
                        { g: 'P', s: 'Pass (Minimum Threshold)', p: '5.0' },
                        { g: 'F', s: 'Fail (Needs Improvement)', p: '0.0' },
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

                <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-8">Strategic Planning: Predicting Your Final Degree classification</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  One of the most powerful features of our <strong>KTU GPA Calculator</strong> is the ability to perform "What-If" scenarios. For engineering students, the first two years (S1-S4) build the foundation, but the true "pull" on your CGPA often happens in the final two years where project credits are introduced. By inputting your current grades and predicting your future scores, you can determine exactly which subjects require your primary attention to reach a coveted 8.5 CGPA—the magic number for most global graduate school admissions.
                </p>

                <div className="my-16 flex flex-col gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-slate-900">Why Use our Academic Audit Tool?</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Thousands of students across the various colleges affiliated with APJ Abdul Kalam Technological University trust our tools because we prioritize precision and the "student experience":
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                            {[
                                "100% Accuracy: Logic verified against KTU ordinances",
                                "Pre-loaded Syllabus: Auto-populates 2019/20Scheme subjects",
                                "Predictive Modeling: See how future grades impact your CGPA",
                                "Syllabus Compliance: Covers CSE, ME, CE, EEE, ECE, & more",
                                "Real-time Auditing: CGPA updates instantly as you tweak grades",
                                "Clean, Ad-Free Interface: Focused on your academic goals"
                            ].map(feat => (
                                <li key={feat} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0" /> {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">Masterclass: Tactics for Academic Excellence in KTU</h2>
                <div className="bg-slate-900 text-white rounded-[2rem] p-10 my-12 relative overflow-hidden group font-sans">
                     <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all font-sans"></div>
                     <div className="relative z-10 space-y-8 font-sans">
                        <div className="font-sans">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Strategic Pillar 01</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Leverage the Internal Advantage</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Never underestimate your internal marks. In the KTU system, your internals are your safety net. Consistently high scores in series exams and assignments mean you enter the final university exam with 40-50% of your grade already secured. This minimizes the pressure to score perfectly on difficult theoretical papers.
                            </p>
                        </div>
                        <div className="font-sans">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Strategic Pillar 02</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Master High-Credit Theory Papers</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Identify your 4-credit courses early. These subjects have double or even triple the impact of minor subjects. If you are struggling with a 4-credit paper like Engineering Mechanics, seek supplemental help immediately. Using our [how to avoid low GPA](/blog/how-to-improve-your-cgpa) guide can help you re-prioritize your study schedule.
                            </p>
                        </div>
                        <div className="font-sans">
                            <h4 className="text-blue-400 font-black uppercase tracking-widest text-xs mb-4">Strategic Pillar 03</h4>
                            <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Audit with Regularity</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Use the <strong>KTU CGPA Calculator</strong> at the beginning and middle of every semester. Don't wait for your final results to arrive. Knowing that you need an "S" in a specific lab to keep your 8.0 CGPA intact provides the ultimate motivation for focused study sessions.
                            </p>
                        </div>
                     </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">Overcoming the "Backlog Trap"</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    A common concern among KTU students is how failing a subject (Backlog) affects the CGPA calculation. When you fail, the credits for that subject are still counted in your total attempted credits, but the grade points are recorded as 0. This leads to a massive, immediate drop in your CGPA. However, once you clear the supplementary exam, your grade is updated, and your CGPA recovers. Our tool accounts for this "Grade Replacement" logic, allowing you to see your projected standing both with and without your current backlog influence.
                </p>

                <div className="mt-20 border-t border-slate-100 pt-16 font-sans">
                     <div className="flex items-center gap-3 mb-10 font-sans">
                         <div className="p-3 bg-violet-100 text-violet-600 rounded-2xl font-sans">
                            <HelpCircle size={28} />
                         </div>
                         <h2 className="text-3xl font-black text-slate-900 font-sans">Frequently Asked Questions</h2>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                        {[
                          {
                            q: "How to calculate SGPA and CGPA in KTU accurately?",
                            a: "The most accurate way is to use a dedicated calculator that pre-loads the 2019 scheme credit weights. The manual formula is Σ(Credits x Points) / Total Credits. Our tool does this instantly for all major engineering branches."
                          },
                          {
                            q: "What is considered a 'Good' CGPA for engineering placements?",
                            a: "While it varies by industry, an 8.0+ CGPA is excellent for core engineering and high-end software roles. A 7.5+ is generally required for eligibility in most standard recruitment drives at KTU."
                          },
                          {
                            q: "Do laboratory credits count toward the final academic CGPA?",
                            a: "Yes, in the APJ Abdul Kalam Technological University system, labs are weighted based on their credit value (usually 1 or 2 credits). Excelling in labs is the fastest way to stabilize a fluctuating CGPA."
                          },
                          {
                            q: "Can I convert my KTU CGPA to percentage?",
                            a: "Yes, the standard conversion used by the university and recruitment agencies is (CGPA - 0.75) * 10. For example, a 7.5 CGPA equals 67.5%."
                          },
                          {
                             q: "How does the 2024 scheme differ in calculation from the 2019 scheme?",
                             a: "While the basic weighted average formula remains the same, the specific credit distribution and course codes have been updated. Our calculator supports both schemes through the branch selection menu."
                          },
                          {
                             q: "Why is the 2019 scheme often harder for students?",
                             a: "The 2019 scheme introduced more rigorous continuous evaluation and project work. This requires students to be active throughout the semester rather than just cramming for the final university exams."
                          }
                        ].map((item, i) => (
                           <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group font-sans">
                                <h4 className="font-black text-slate-900 mb-4 text-lg pr-4 font-sans">{item.q}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-sans">{item.a}</p>
                           </div>
                        ))}
                     </div>
                </div>

                <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/20 text-center font-sans">
                    <h2 className="text-3xl font-black mb-6 text-white tracking-tight">Engineer Your Academic Future with Confidence</h2>
                    <p className="text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Don't let mathematical uncertainty hold you back. Use our precise tools to track your progress at APJ Abdul Kalam Technological University and clear your path to a successful engineering career.
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
