"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  BRANCHES, 
  SUBJECT_TEMPLATES, 
  BranchId, 
  Subject, 
  Grade,
  SCHEMES,
  SchemeId
} from "@/lib/ktu-data/subjects";
import { calculateSGPA, calculateCGPA, cgpaToPercentage } from "@/lib/ktu-data/calculator";
import GradeSelector from "./GradeSelector";
import { Trash2, Plus, RotateCcw, Copy, Share2, Calculator, Trash, Layout } from "lucide-react";

interface SemesterState {
  id: string;
  semesterNum: number;
  subjects: {
    code: string;
    name: string;
    credits: number;
    grade: Grade;
  }[];
}

export default function KTUCalculator() {
  const [scheme, setScheme] = useState<SchemeId>("2019");
  const [branch, setBranch] = useState<BranchId>("cse");
  const [semesters, setSemesters] = useState<SemesterState[]>([]);
  const [copied, setCopied] = useState(false);

  // Initialize with S1
  useEffect(() => {
    if (semesters.length === 0) {
      addSemester(1);
    }
  }, []);

  const addSemester = (num?: number) => {
    const nextNum = num || (semesters.length > 0 ? Math.min(semesters[semesters.length - 1].semesterNum + 1, 8) : 1);
    const template = SUBJECT_TEMPLATES[scheme][branch][nextNum] || [];
    
    const newSem: SemesterState = {
      id: Math.random().toString(36).substr(2, 9),
      semesterNum: nextNum,
      subjects: template.map(s => ({ ...s, grade: '' as Grade }))
    };
    
    setSemesters([...semesters, newSem]);
  };

  const removeSemester = (id: string) => {
    setSemesters(semesters.filter(s => s.id !== id));
  };

  const updateGrade = (semId: string, subjectCode: string, grade: Grade) => {
    setSemesters(semesters.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          subjects: sem.subjects.map(sub => 
            sub.code === subjectCode ? { ...sub, grade } : sub
          )
        };
      }
      return sem;
    }));
  };

  const resetAll = () => {
    setSemesters(semesters.map(sem => ({
      ...sem,
      subjects: sem.subjects.map(sub => ({ ...sub, grade: '' as Grade }))
    })));
  };

  const addCustomSubject = (semId: string) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          subjects: [
            ...sem.subjects,
            { code: `CUSTOM-${Date.now()}`, name: "Custom Subject", credits: 3, grade: "" as Grade }
          ]
        };
      }
      return sem;
    }));
  };

  const updateSubject = (semId: string, subjectCode: string, field: keyof Subject, value: string | number) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          subjects: sem.subjects.map(sub => 
            sub.code === subjectCode ? { ...sub, [field]: value } : sub
          )
        };
      }
      return sem;
    }));
  };

  const removeSubject = (semId: string, subjectCode: string) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semId) {
        return {
          ...sem,
          subjects: sem.subjects.filter(sub => sub.code !== subjectCode)
        };
      }
      return sem;
    }));
  };

  const sgpas = useMemo(() => {
    return semesters.map(sem => calculateSGPA(sem.subjects, scheme));
  }, [semesters, scheme]);

  const cgpa = useMemo(() => {
    return calculateCGPA(semesters, scheme);
  }, [semesters, scheme]);

  const percentage = useMemo(() => {
    return cgpaToPercentage(cgpa, scheme);
  }, [cgpa, scheme]);

  const copyResult = () => {
    const text = `My KTU Result:\nCGPA: ${cgpa.toFixed(2)}\nPercentage: ${percentage}%\nCalculated using StudentToolsHub KTU Calculator`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const text = `My KTU Result:\nCGPA: ${cgpa.toFixed(2)}\nPercentage: ${percentage}%\nCalculated using StudentToolsHub KTU Calculator`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My KTU CGPA Result',
          text: text,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      copyResult();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Configuration & Input Section */}
      <div className="lg:col-span-8 space-y-8">
        {/* Top Controls */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Select Scheme</label>
            <select 
              value={scheme}
              onChange={(e) => {
                const newScheme = e.target.value as SchemeId;
                setScheme(newScheme);
                // Update existing semesters with new scheme's templates
                setSemesters(prev => prev.map(sem => {
                    if (branch === 'general') return sem;
                    const template = SUBJECT_TEMPLATES[newScheme][branch][sem.semesterNum] || [];
                    return {
                        ...sem,
                        subjects: template.map(s => ({ ...s, grade: '' as Grade }))
                    };
                }));
              }}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
            >
              {SCHEMES.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Select Program</label>
            <select 
              value={branch}
              onChange={(e) => {
                const newBranch = e.target.value as BranchId;
                setBranch(newBranch);
                // Force update semesters when branch changes
                setSemesters(prev => prev.map(sem => {
                    if (newBranch === 'general') return sem;
                    const template = SUBJECT_TEMPLATES[scheme][newBranch][sem.semesterNum] || [];
                    return {
                        ...sem,
                        subjects: template.map(s => ({ ...s, grade: '' as Grade }))
                    };
                }));
              }}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
            >
              {BRANCHES.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
          
          <button 
            onClick={() => addSemester()}
            disabled={semesters.length >= 8}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:bg-slate-300 disabled:shadow-none"
          >
            <Plus size={18} /> Add Semester
          </button>
          
          <button 
            onClick={resetAll}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-2.5 rounded-xl transition-all"
          >
            <RotateCcw size={18} /> Reset
          </button>
        </div>

        {/* Semesters */}
        {semesters.map((sem, idx) => (
          <div key={sem.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Semester {sem.semesterNum}</h3>
                <p className="text-xs text-slate-500">{sem.subjects.length} Subjects</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">SGPA</p>
                  <p className="text-xl font-black text-blue-600">{sgpas[idx].toFixed(2)}</p>
                </div>
                {semesters.length > 1 && (
                  <button 
                    onClick={() => removeSemester(sem.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-12 gap-4 mb-2 px-2 hidden md:grid">
                <div className="col-span-8 text-xs font-bold text-slate-400 uppercase">Subject</div>
                <div className="col-span-1 text-xs font-bold text-slate-400 uppercase text-center">Cr.</div>
                <div className="col-span-3 text-xs font-bold text-slate-400 uppercase text-center">Grade</div>
              </div>
              
              <div className="space-y-3">
                {sem.subjects.map((sub) => (
                  <div key={sub.code} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center p-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100 group">
                    <div className="col-span-1 md:col-span-8">
                      {branch === 'general' || sub.code.startsWith('CUSTOM-') ? (
                        <input 
                          type="text"
                          value={sub.name}
                          onChange={(e) => updateSubject(sem.id, sub.code, 'name', e.target.value)}
                          placeholder="Subject Name"
                          className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-blue-500 outline-none font-bold text-slate-900 text-sm py-1"
                        />
                      ) : (
                        <>
                          <p className="font-bold text-slate-900 text-sm">{sub.name}</p>
                          <p className="text-[10px] text-slate-500 font-mono uppercase">{sub.code}</p>
                        </>
                      )}
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="md:hidden text-xs font-bold text-slate-400 uppercase">Credits:</span>
                        <input 
                            type="number"
                            value={sub.credits}
                            onChange={(e) => updateSubject(sem.id, sub.code, 'credits', parseFloat(e.target.value) || 0)}
                            className="w-12 bg-slate-100 text-center rounded text-xs font-bold py-1 outline-none focus:ring-1 focus:ring-blue-500 transition-all border border-transparent hover:border-slate-300"
                        />
                      </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 flex items-center gap-2">
                        <div className="flex-1 flex items-center gap-2 md:block">
                            <span className="md:hidden text-xs font-bold text-slate-400 uppercase min-w-[60px]">Grade:</span>
                            <GradeSelector 
                            value={sub.grade} 
                            schemeId={scheme}
                            onChange={(val) => updateGrade(sem.id, sub.code, val)} 
                            />
                        </div>
                        {(branch === 'general' || sub.code.startsWith('CUSTOM-')) && (
                             <button 
                                onClick={() => removeSubject(sem.id, sub.code)}
                                className="md:opacity-0 group-hover:opacity-100 p-1.5 text-slate-300 hover:text-red-500 transition-all"
                             >
                                <Trash2 size={14} />
                             </button>
                        )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => addCustomSubject(sem.id)}
                  className="flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-all"
                >
                  <Plus size={14} /> Add Subject
                </button>
              </div>

              {sem.subjects.length === 0 && branch !== 'general' && (
                <div className="text-center py-8">
                  <p className="text-slate-400 text-sm">No subjects available for this semester template.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Result Panel (Sticky) */}
      <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden shadow-blue-500/5">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <Calculator size={20} />
              </div>
              <h2 className="text-lg font-bold">Overall Result</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1 uppercase tracking-widest">Current CGPA</p>
                <div className="text-6xl font-black">{cgpa.toFixed(2)}</div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-1">Percentage</p>
                  <p className="text-xl font-black">{percentage}%</p>
                </div>
                <div className="flex-1 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-blue-100 text-[10px] font-bold uppercase tracking-wider mb-1">Total Sem</p>
                  <p className="text-xl font-black">{semesters.length}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <button 
              onClick={copyResult}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl transition-all"
            >
              {copied ? "Copied!" : <><Copy size={18} /> Copy Result</>}
            </button>
            
            <button 
              onClick={handleShare}
              className="w-full flex items-center justify-center gap-2 border-2 border-slate-100 hover:bg-slate-50 text-slate-700 font-bold py-3.5 rounded-2xl transition-all"
            >
              <Share2 size={18} /> Share Result
            </button>
            
            <p className="text-[10px] text-slate-400 text-center leading-relaxed mt-4">
              Results are calculated based on the official <strong>KTU {scheme} Scheme</strong> credit-based grading system. 
              {scheme === '2019' && " (Percentage = [CGPA - 0.5] × 10)"}
              {scheme === '2015' && " (Percentage = [CGPA × 10] - 3.75)"}
              {scheme === '2024' && " (Percentage = CGPA × 10)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
