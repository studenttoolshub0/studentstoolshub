"use client";

import { Grade, GRADE_POINTS } from "@/lib/ktu-data/subjects";

interface GradeSelectorProps {
  value: Grade;
  onChange: (value: Grade) => void;
  className?: string;
}

const grades: Grade[] = ["S", "A+", "A", "B+", "B", "C", "P", "F"];

export default function GradeSelector({ value, onChange, className = "" }: GradeSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Grade)}
      className={`w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none cursor-pointer ${className}`}
    >
      <option value="">Select Grade</option>
      {grades.map((grade) => (
        <option key={grade} value={grade}>
          {grade} {grade !== "F" ? `(${GRADE_POINTS[grade as keyof typeof GRADE_POINTS]})` : ""}
        </option>
      ))}
    </select>
  );
}
