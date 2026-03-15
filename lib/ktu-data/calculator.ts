import { Grade, GRADE_POINTS, SchemeId } from './subjects';

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
export function calculateSGPA(subjects: SubjectResult[], schemeId: SchemeId): number {
  let totalPoints = 0;
  let totalCredits = 0;
  const pointsMap = GRADE_POINTS[schemeId];

  subjects.forEach((subject) => {
    if (subject.grade && subject.grade !== 'F' && pointsMap[subject.grade] !== undefined) {
      totalPoints += subject.credits * pointsMap[subject.grade];
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
export function calculateCGPA(semesters: SemesterResult[], schemeId: SchemeId): number {
  let totalPoints = 0;
  let totalCredits = 0;
  const pointsMap = GRADE_POINTS[schemeId];

  semesters.forEach((sem) => {
    sem.subjects.forEach((subject) => {
      if (subject.grade && subject.grade !== 'F' && pointsMap[subject.grade] !== undefined) {
        totalPoints += subject.credits * pointsMap[subject.grade];
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
 * Converts CGPA to Percentage (Scheme Specific)
 */
export function cgpaToPercentage(cgpa: number, schemeId: SchemeId): number {
  if (cgpa === 0) return 0;
  
  let percentage = 0;
  if (schemeId === '2024') {
    percentage = cgpa * 10;
  } else if (schemeId === '2019') {
    percentage = (cgpa - 0.5) * 10;
  } else {
    // 2015 Scheme
    percentage = (10 * cgpa) - 3.75;
  }

  return Math.round(percentage * 100) / 100;
}
