import { SchoolType } from '../../types';

/**
 * Định mức thời lượng dạy học các môn học theo Chương trình GDPT 2018
 * Căn cứ: Thông tư số 32/2018/TT-BGDĐT ngày 26/12/2018 của Bộ GD&ĐT (Kế hoạch giáo dục tổng thể)
 * Khung thời gian: 35 tuần thực học / năm học
 */

export interface SubjectPeriodInfo {
  totalAnnualPeriods: number; // Tổng số tiết / năm
  periodsPerWeek: number;     // Số tiết / tuần
  description: string;
}

export function getOfficialPeriods(
  subject: string,
  grade: string,
  schoolType: SchoolType
): SubjectPeriodInfo {
  const s = (subject || '').toLowerCase().trim();
  const g = parseInt(grade.trim(), 10) || 7;

  // ----------------------------------------------------
  // 1. CẤP TIỂU HỌC (Lớp 1 - 5)
  // ----------------------------------------------------
  if (schoolType === 'primary' || g <= 5) {
    if (s.includes('tiếng việt') || s.includes('tieng viet')) {
      if (g === 1) return { totalAnnualPeriods: 420, periodsPerWeek: 12, description: '12 tiết/tuần x 35 tuần = 420 tiết (TT 32/2018/TT-BGDĐT)' };
      if (g === 2) return { totalAnnualPeriods: 350, periodsPerWeek: 10, description: '10 tiết/tuần x 35 tuần = 350 tiết (TT 32/2018/TT-BGDĐT)' };
      return { totalAnnualPeriods: 245, periodsPerWeek: 7, description: '7 tiết/tuần x 35 tuần = 245 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('toán') || s.includes('toan')) {
      if (g === 1) return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (TT 32/2018/TT-BGDĐT)' };
      return { totalAnnualPeriods: 175, periodsPerWeek: 5, description: '5 tiết/tuần x 35 tuần = 175 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tiếng anh') || s.includes('ngoại ngữ') || s.includes('english')) {
      if (g <= 2) return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (Tự chọn TT 32/2018/TT-BGDĐT)' };
      return { totalAnnualPeriods: 140, periodsPerWeek: 4, description: '4 tiết/tuần x 35 tuần = 140 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tự nhiên và xã hội') || s.includes('tu nhien va xa hoi') || s.includes('tnxh')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('lịch sử và địa lý') || s.includes('lịch sử và địa lí') || s.includes('lich su')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('khoa học') || s.includes('khoa hoc')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tin học và công nghệ')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (Tin 35t + CN 35t TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tin học') || s.includes('tin hoc')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('công nghệ') || s.includes('cong nghe')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('đạo đức') || s.includes('dao duc')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('âm nhạc') || s.includes('am nhac')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('mĩ thuật') || s.includes('mỹ thuật') || s.includes('mi thuat')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('giáo dục thể chất') || s.includes('gdtc') || s.includes('thể dục')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn')) {
      return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (TT 32/2018/TT-BGDĐT)' };
    }
  }

  // ----------------------------------------------------
  // 2. CẤP THCS (Lớp 6 - 9)
  // ----------------------------------------------------
  if (schoolType === 'secondary' || (g >= 6 && g <= 9)) {
    if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
      return { totalAnnualPeriods: 140, periodsPerWeek: 4, description: '4 tiết/tuần x 35 tuần = 140 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('toán') || s.includes('toan')) {
      return { totalAnnualPeriods: 140, periodsPerWeek: 4, description: '4 tiết/tuần x 35 tuần = 140 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('khoa học tự nhiên') || s.includes('khtn')) {
      return { totalAnnualPeriods: 140, periodsPerWeek: 4, description: '4 tiết/tuần x 35 tuần = 140 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tiếng anh') || s.includes('english') || s.includes('ngoại ngữ')) {
      return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('lịch sử và địa lí') || s.includes('lịch sử & địa lý') || s.includes('ls&đl') || s.includes('lsdl')) {
      return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (Sử 52.5t + Địa 52.5t TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('công nghệ') || s.includes('cong nghe')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('giáo dục công dân') || s.includes('gdcd')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('âm nhạc') || s.includes('am nhac')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('mĩ thuật') || s.includes('mỹ thuật') || s.includes('mi thuat')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('giáo dục thể chất') || s.includes('gdtc') || s.includes('thể dục')) {
      return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn') || s.includes('hướng nghiệp')) {
      return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (TT 32/2018/TT-BGDĐT)' };
    }

    if (s.includes('giáo dục địa phương') || s.includes('gdđp') || s.includes('gddp')) {
      return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (TT 32/2018/TT-BGDĐT)' };
    }
  }

  // ----------------------------------------------------
  // 3. CẤP THPT (Lớp 10 - 12)
  // ----------------------------------------------------
  if (s.includes('ngữ văn') || s.includes('toán')) {
    return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  if (s.includes('tiếng anh') || s.includes('ngoại ngữ') || s.includes('english')) {
    return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  if (s.includes('giáo dục thể chất') || s.includes('gdtc')) {
    return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  if (s.includes('quốc phòng') || s.includes('gdqp')) {
    return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn')) {
    return { totalAnnualPeriods: 105, periodsPerWeek: 3, description: '3 tiết/tuần x 35 tuần = 105 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  if (s.includes('địa phương') || s.includes('gdđp')) {
    return { totalAnnualPeriods: 35, periodsPerWeek: 1, description: '1 tiết/tuần x 35 tuần = 35 tiết (Bắt buộc TT 32/2018/TT-BGDĐT)' };
  }

  // Môn lựa chọn THPT (Lí, Hóa, Sinh, Sử, Địa, GDKT&PL, Tin, Công nghệ, Âm nhạc, Mĩ thuật)
  return { totalAnnualPeriods: 70, periodsPerWeek: 2, description: '2 tiết/tuần x 35 tuần = 70 tiết (Môn lựa chọn TT 32/2018/TT-BGDĐT)' };
}
