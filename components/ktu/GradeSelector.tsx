"use client";

import { Grade, GRADE_POINTS, SchemeId } from "@/lib/ktu-data/subjects";
import { ChevronDown } from "lucide-react";

interface GradeSelectorProps {
  value: Grade;
  onChange: (value: Grade) => void;
  schemeId: SchemeId;
  className?: string;
}

export default function GradeSelector({ value, onChange, schemeId, className = "" }: GradeSelectorProps) {
  const pointsMap = GRADE_POINTS[schemeId];
  const availableGrades = Object.keys(pointsMap) as Grade[];

  return (
    <div className="relative w-full group">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Grade)}
        className={`w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer text-sm font-bold pr-10 hover:border-slate-300 ${className}`}
      >
        <option value="">Select Grade</option>
        {availableGrades.map((grade) => (
          <option key={grade} value={grade}>
            {grade} {grade !== "F" ? `(${pointsMap[grade]})` : ""}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-500 transition-colors">
        <ChevronDown size={16} />
      </div>
    </div>
  );
}
