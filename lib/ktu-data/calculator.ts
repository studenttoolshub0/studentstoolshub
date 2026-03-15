import { Grade, GRADE_POINTS } from './subjects';

export interface SubjectResult {
  credits: number;
  grade: Grade;
}

export interface SemesterResult {
  subjects: SubjectResult[];
}

/**
 * Calculates SGPA for a single semester.
 * Formula: Σ (Credit × Grade Point) / Σ Credits
 */
export function calculateSGPA(subjects: SubjectResult[]): number {
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach((subject) => {
    if (subject.grade && subject.grade !== 'F' && GRADE_POINTS[subject.grade] !== undefined) {
      totalPoints += subject.credits * GRADE_POINTS[subject.grade];
      totalCredits += subject.credits;
    } else if (subject.grade === 'F') {
      totalCredits += subject.credits;
    }
  });

  if (totalCredits === 0) return 0;
  return Math.round((totalPoints / totalCredits) * 100) / 100;
}

/**
 * Calculates CGPA for multiple semesters.
 * Formula: Σ (Semester Total Points) / Σ (Total Credits)
 */
export function calculateCGPA(semesters: SemesterResult[]): number {
  let totalPoints = 0;
  let totalCredits = 0;

  semesters.forEach((sem) => {
    sem.subjects.forEach((subject) => {
      if (subject.grade && subject.grade !== 'F' && GRADE_POINTS[subject.grade] !== undefined) {
        totalPoints += subject.credits * GRADE_POINTS[subject.grade];
        totalCredits += subject.credits;
      } else if (subject.grade === 'F') {
        totalCredits += subject.credits;
      }
    });
  });

  if (totalCredits === 0) return 0;
  return Math.round((totalPoints / totalCredits) * 100) / 100;
}

/**
 * Converts CGPA to Percentage (Standard KTU Formula)
 * Percentage = (CGPA - 0.5) * 10
 */
export function cgpaToPercentage(cgpa: number): number {
  if (cgpa === 0) return 0;
  return Math.round(((cgpa - 0.5) * 10) * 100) / 100;
}
