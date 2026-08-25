import { CurriculumItem, SchoolType } from '../../types';
import { buildPrimaryCurriculum } from './curriculumPrimary';
import { buildSecondaryCurriculum } from './curriculumSecondary';
import { buildHighSchoolCurriculum } from './curriculumHighSchool';

/**
 * Master Curriculum Resolver for all subjects and all grades (Lớp 1 - 12)
 * Clean architecture with 3 dedicated educational level modules:
 * 1. curriculumPrimary.ts     -> Cấp Tiểu học (Lớp 1 - 5)
 * 2. curriculumSecondary.ts   -> Cấp THCS (Lớp 6 - 9)
 * 3. curriculumHighSchool.ts  -> Cấp THPT (Lớp 10 - 12)
 *
 * 100% compliant with:
 * - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (NXB Giáo dục Việt Nam)
 * - SGK TIẾNG ANH GLOBAL SUCCESS (NXB Giáo dục Việt Nam)
 * - Chương trình GDPT 2018 (Thông tư số 32/2018/TT-BGDĐT)
 * - Công văn 5512/BGDĐT-GDTrH (THCS & THPT) & Công văn 2345/BGDĐT-GDTH (Tiểu học)
 * - Khung Năng lực số (CV 3456/BGDĐT-GDPT) & Khung Năng lực AI (QĐ 2422/QĐ-BGDĐT)
 */
export function getCurriculumBySubjectAndGrade(
  subject: string,
  grade: string,
  schoolType: SchoolType
): CurriculumItem[] {
  const g = (grade || '7').trim();
  const gNum = parseInt(g, 10) || 7;

  // 1. CẤP TIỂU HỌC (Lớp 1 - 5)
  if (schoolType === 'primary' || gNum <= 5) {
    return buildPrimaryCurriculum(subject, g, schoolType);
  }

  // 2. CẤP THPT (Lớp 10 - 12)
  if (schoolType === 'high_school' || gNum >= 10) {
    return buildHighSchoolCurriculum(subject, g, schoolType);
  }

  // 3. CẤP THCS (Lớp 6 - 9) hoặc mặc định
  return buildSecondaryCurriculum(subject, g, schoolType);
}

export { buildPrimaryCurriculum } from './curriculumPrimary';
export { buildSecondaryCurriculum } from './curriculumSecondary';
export { buildHighSchoolCurriculum } from './curriculumHighSchool';
