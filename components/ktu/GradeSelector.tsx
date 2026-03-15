"use client";

import { Grade, GRADE_POINTS, SchemeId } from "@/lib/ktu-data/subjects";

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
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Grade)}
      className={`w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer ${className}`}
    >
      <option value="">Grade</option>
      {availableGrades.map((grade) => (
        <option key={grade} value={grade}>
          {grade} {grade !== "F" ? `(${pointsMap[grade]})` : ""}
        </option>
      ))}
    </select>
  );
}
