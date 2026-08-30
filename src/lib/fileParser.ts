/**
 * Intelligent file parser & PPCT curriculum extractor
 * Client-side parser for Word (.docx), PDF, Text, CSV, Markdown
 * Converts uploaded PPCT / Phụ lục tables into structured CurriculumItem[] with NLS & AI enrichment
 */

import { CurriculumItem, SchoolType } from '../types';
import { getNlsCodeForSubjectLesson, lookupNlsRequirement } from './constants/nlsGuides';
import { getNlsCodeForEnglishLesson, lookupNlsRequirementEn } from './constants/nlsGuidesEn';
import { getAiCodeForSubjectLesson, lookupAiRequirement } from './constants/aiGuides';
import { getAiCodeForEnglishLesson, lookupAiRequirementEn } from './constants/aiGuidesEn';
import { generateSecondaryYccd } from './curriculum/curriculumSecondary';
import { generateHighSchoolYccd } from './curriculum/curriculumHighSchool';

export interface FileParseResult {
  rawText: string;
  htmlContent?: string;
  extractedCharCount: number;
  parsedCurriculum?: CurriculumItem[];
  detectedMetadata?: {
    schoolName?: string;
    departmentName?: string;
    subject?: string;
    grade?: string;
    academicYear?: string;
  };
}

/**
 * Format raw objectives text into clean markdown bullet points (- ...)
 */
export function formatBulletObjectives(rawText: string): string {
  if (!rawText || !rawText.trim()) {
    return '- Đạt chuẩn kiến thức, kỹ năng theo CT GDPT 2018.\n- Vận dụng kiến thức vào thực tiễn và phát triển năng lực đặc thù.';
  }

  // Clean raw HTML or tags
  const clean = rawText
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

  // Split by line breaks, semicolons, or dashes
  const lines: string[] = [];
  const rawParts = clean.split(/\n|;(?=\s*[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯa-z])/);

  for (const part of rawParts) {
    const trimmed = part.replace(/^[-•*–—\d\.\)]\s*/, '').trim();
    if (trimmed.length > 2) {
      lines.push(trimmed);
    }
  }

  if (lines.length === 0) {
    return `- ${clean}`;
  }

  return lines.map((l) => `- ${l}`).join('\n');
}

/**
 * Tự động tạo Yêu cầu cần đạt (YCCĐ) sư phạm chi tiết và chuẩn xác
 * cho bài học trích xuất từ file PPCT tải lên (dựa vào tên bài, chủ đề, môn học và khối lớp)
 */
export function generateYccdForLesson(
  lessonName: string,
  topic: string,
  subject: string,
  grade: string,
  schoolType: SchoolType
): string {
  const isEn = subject.toLowerCase().includes('tiếng anh') || subject.toLowerCase().includes('english');
  if (isEn) {
    return `- Develop communicative language competencies, vocabulary, and grammar structures related to "${lessonName}".\n- Enhance listening, speaking, reading, and writing skills with digital learning tools and interactive activities.`;
  }

  const name = lessonName.trim();
  const g = grade.trim() || '6';

  // 1. Kiểm tra đánh giá định kỳ
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 1') || name.includes('KTGK1') || name.includes('Giữa HK1')) {
    return `- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng và năng lực môn ${subject} Lớp ${g} từ Tuần 1 đến Tuần 8 theo ma trận chuẩn Bộ GD&ĐT.\n- Phát hiện các điểm cần củng cố để bồi dưỡng kịp thời; rèn luyện tính trung thực và kỹ năng làm bài kiểm tra.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 1') || name.includes('KTCK1') || name.includes('Cuối HK1') || name.includes('Sơ kết HK1')) {
    return `- Đánh giá tổng hợp toàn diện kết quả học tập và rèn luyện môn ${subject} Lớp ${g} trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh làm căn cứ điều chỉnh kế hoạch giáo dục Học kỳ 2; rèn luyện kỷ luật phòng thi.`;
  }
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 2') || name.includes('KTGK2') || name.includes('Giữa HK2')) {
    return `- Đánh giá mức độ tiếp thu các nội dung trọng tâm môn ${subject} Lớp ${g} từ Tuần 19 đến Tuần 25 theo ma trận chuẩn Bộ GD&ĐT.\n- Giúp học sinh tự đánh giá năng lực và chuẩn bị tốt cho kỳ kiểm tra cuối năm; rèn luyện tư duy độc lập.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 2') || name.includes('KTCK2') || name.includes('Cuối HK2') || name.includes('Tổng kết năm học')) {
    return `- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn ${subject} Lớp ${g} cả năm học.\n- Đánh giá sự tiến bộ về phẩm chất, năng lực chuyên biệt và tạo nền tảng vững chắc cho năm học tiếp theo.`;
  }

  // 2. Ôn tập & Chữa bài
  if (name.includes('Chữa bài') || name.includes('Ôn tập') || name.includes('Củng cố') || name.includes('Luyện tập')) {
    return `- Hệ thống hóa toàn bộ kiến thức trọng tâm, giải thích cặn kẽ các dạng bài khó và khắc phục sai sót trong: "${name}".\n- Rèn luyện kỹ năng vận dụng linh hoạt kiến thức vào giải quyết các bài tập và tình huống thực tiễn.`;
  }

  // 3. Dự án STEM & Trải nghiệm
  if (name.includes('Dự án') || name.includes('STEM') || name.includes('Trải nghiệm')) {
    return `- Vận dụng kiến thức liên môn để nghiên cứu, thiết kế, thử nghiệm và hoàn thiện sản phẩm sáng tạo trong: "${name}".\n- Thực hiện đúng quy trình thiết kế kỹ thuật, giải quyết vấn đề sáng tạo và phát triển kỹ năng làm việc nhóm.`;
  }

  // 4. Dùng bộ generator chuyên sâu theo cấp học nếu có
  const gNum = parseInt(grade, 10) || 6;
  if (schoolType === 'high_school' || gNum >= 10) {
    const y = generateHighSchoolYccd(subject, grade, lessonName);
    if (y && !y.includes('chuẩn bị tổng kết')) return y;
  } else {
    const y = generateSecondaryYccd(subject, grade, lessonName);
    if (y && !y.includes('chuẩn bị tổng kết')) return y;
  }

  // 5. Fallback chất lượng cao dựa trên tên bài học
  return `- Biết, nhận biết được các kiến thức cốt lõi, khái niệm và nội dung trọng tâm trong bài: "${name}" (Chương trình GDPT 2018).\n- Trình bày được và hiểu rõ bản chất quy luật, ý nghĩa và phương pháp của bài học.\n- Vận dụng được kiến thức và kỹ năng vào giải quyết các bài tập và tình huống thực tiễn đời sống.`;
}

/**
 * Trích xuất các mã NLS & AI từ ô bảng trong tệp Word/PDF của giáo viên,
 * tự động tra cứu nội dung/yêu cầu chính thức của từng mã và tạo câu mô tả chuẩn.
 */
export function enrichUploadedNlsAiCell(
  cleanText: string,
  isEn: boolean,
  grade: string,
  schoolType: SchoolType,
  contextObj: { lessonName?: string; topic?: string; yccd?: string; subject?: string; lessonIndex?: number }
): string {
  // 1. Trích xuất danh sách tất cả các mã NLS (ví dụ: 1.1.TC1a, 1.1.TC1c, 6.1.TC1a, 2.1.CB1a...)
  const nlsCodes: string[] = [];
  const nlsRegex = /\b([1-6]\.[1-6]\.(?:CB|TC|NC)[1-2][a-z0-9]?)\b/gi;
  let match: RegExpExecArray | null;

  // Lấy vùng text của Code/NLS
  const nlsSectionMatch = cleanText.match(/(?:Code|Mã NLS|NLS|Mã):\s*([^\n\r]+)/i);
  const nlsSection = nlsSectionMatch ? nlsSectionMatch[1] : cleanText;
  while ((match = nlsRegex.exec(nlsSection)) !== null) {
    const c = match[1].trim();
    if (!nlsCodes.some((code) => code.toLowerCase() === c.toLowerCase())) {
      nlsCodes.push(c);
    }
  }

  // 2. Trích xuất danh sách tất cả các mã AI (ví dụ: 6.A1.1, 6.C3.1, 8.C1.1...)
  const aiCodes: string[] = [];
  const aiSectionMatch = cleanText.match(/(?:AI Code|Mã AI|AI):\s*([^\n\r]+)/i);
  const aiSection = aiSectionMatch ? aiSectionMatch[1] : cleanText;
  const aiRegex = /\b((?:[1-9]|1[0-2])\.[A-D][0-9](?:\.[A-Za-z0-9]+)?)\b/gi;
  while ((match = aiRegex.exec(aiSection)) !== null) {
    const c = match[1].trim();
    if (!aiCodes.some((code) => code.toLowerCase() === c.toLowerCase())) {
      aiCodes.push(c);
    }
  }

  // 3. Trích xuất danh sách Công cụ (Tools)
  const toolsMatch = cleanText.match(/(?:Tools|Công cụ|Ứng dụng|Phần mềm):\s*([^\n\r]+)/i);
  const toolsClean = toolsMatch
    ? toolsMatch[1].replace(/[;]/g, ', ').replace(/\s+/g, ' ').trim().replace(/,\s*$/, '').replace(/\.$/, '')
    : '';

  const lines: string[] = [];

  // 4. Xây dựng dòng Năng lực số (NLS)
  if (nlsCodes.length > 0) {
    const requirements: string[] = [];
    for (const code of nlsCodes) {
      const req = isEn ? lookupNlsRequirementEn(code) : (lookupNlsRequirement(code) || lookupNlsRequirementEn(code));
      if (req) {
        const cleanReq = req.replace(/\.$/, '').trim();
        if (!requirements.includes(cleanReq)) {
          requirements.push(cleanReq);
        }
      }
    }

    const nlsCodeLabel = isEn ? 'NLS Code' : 'Mã NLS';
    const codesStr = nlsCodes.join(', ');
    const reqsStr = requirements.length > 0
      ? `${requirements.join('; ')}.`
      : (isEn ? 'Exploit digital learning resources and interactive tools.' : 'Khai thác học liệu số và công cụ tương tác.');
    const toolsSuffix = toolsClean
      ? (isEn ? ` (Tools: ${toolsClean})` : ` (Công cụ: ${toolsClean})`)
      : '';

    lines.push(`• [${nlsCodeLabel}: ${codesStr}] ${reqsStr}${toolsSuffix}`);
  } else {
    // Nếu chưa có mã NLS, sinh mã chuẩn
    const defNls = isEn
      ? getNlsCodeForEnglishLesson(grade, schoolType, contextObj)
      : getNlsCodeForSubjectLesson(grade, schoolType, contextObj);
    const toolsSuffix = toolsClean
      ? (isEn ? ` (Tools: ${toolsClean})` : ` (Công cụ: ${toolsClean})`)
      : '';
    lines.push(`• [${isEn ? 'NLS Code' : 'Mã NLS'}: ${defNls.code}] ${defNls.requirement}${toolsSuffix}`);
  }

  // 5. Xây dựng dòng Năng lực AI
  if (aiCodes.length > 0) {
    const aiRequirements: string[] = [];
    for (const code of aiCodes) {
      const aiObj = isEn ? lookupAiRequirementEn(code) : (lookupAiRequirement(code) || lookupAiRequirementEn(code));
      if (aiObj) {
        const cleanReq = aiObj.requirement.replace(/\.$/, '').trim();
        if (!aiRequirements.includes(cleanReq)) {
          aiRequirements.push(cleanReq);
        }
      }
    }

    const aiCodeLabel = isEn ? 'AI Code' : 'Mã AI';
    const codesStr = aiCodes.join(', ');
    const aiReqsStr = aiRequirements.length > 0
      ? `${aiRequirements.join('; ')}.`
      : (isEn ? 'Apply AI assistance for communicative practice and verification.' : 'Ứng dụng trợ lý AI trong học tập và rèn luyện.');

    lines.push(`• [${aiCodeLabel}: ${codesStr}] ${aiReqsStr}`);
  } else {
    // Nếu trong ô chưa có mã AI, tự động sinh mã AI chuẩn theo đúng khối lớp
    const defAi = isEn
      ? getAiCodeForEnglishLesson(grade, contextObj)
      : getAiCodeForSubjectLesson(grade, contextObj);
    lines.push(`• [${isEn ? 'AI Code' : 'Mã AI'}: ${defAi.code}] ${defAi.requirement}`);
  }

  return lines.join('\n');
}

export function formatDigitalCompetencyAndAi(
  rawNlsAi: string,
  subject: string,
  grade: string,
  schoolType: SchoolType,
  lessonIdx: number,
  lessonContext?: { lessonName?: string; topic?: string; yccd?: string }
): string {
  const isEn = subject.toLowerCase().includes('tiếng anh') || subject.toLowerCase().includes('english');
  const clean = (rawNlsAi || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\r\n/g, '\n')
    .trim();

  const contextObj = {
    lessonName: lessonContext?.lessonName,
    topic: lessonContext?.topic,
    yccd: lessonContext?.yccd,
    subject,
    lessonIndex: lessonIdx
  };

  // 1. NẾU FILE TẢI LÊN ĐÃ CÓ CỘT NLS / AI CÓ MÃ CODE (HOẶC TOOLS)
  if (clean.length > 3) {
    if (
      clean.includes('Code') ||
      clean.includes('Mã') ||
      clean.includes('AI') ||
      clean.includes('Tools') ||
      clean.includes('TC') ||
      clean.includes('CB') ||
      clean.includes('NC')
    ) {
      return enrichUploadedNlsAiCell(clean, isEn, grade, schoolType, contextObj);
    }

    if (clean.includes('•') || clean.includes('- ') || clean.includes('\n')) {
      const cleanLines = clean
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0)
        .map((l) => (l.startsWith('•') || l.startsWith('-') ? l.replace(/^[-*]\s*/, '• ') : `• ${l}`));

      if (cleanLines.length > 0) {
        return cleanLines.join('\n');
      }
    }

    return `• ${clean}`;
  }

  // 2. NẾU FILE TẢI LÊN CHƯA CÓ NLS / AI: TỰ ĐỘNG PHÂN TÍCH NGỮ NGHĨA THEO TÊN BÀI, CHỦ ĐỀ & YCCĐ
  const nls = isEn
    ? getNlsCodeForEnglishLesson(grade, schoolType, contextObj)
    : getNlsCodeForSubjectLesson(grade, schoolType, contextObj);

  const ai = isEn
    ? getAiCodeForEnglishLesson(grade, contextObj)
    : getAiCodeForSubjectLesson(grade, contextObj);

  if (isEn) {
    return `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}`;
  }

  return `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`;
}

/**
 * Extract School metadata from raw text
 */
export function extractDocumentMetadata(text: string): FileParseResult['detectedMetadata'] {
  const metadata: NonNullable<FileParseResult['detectedMetadata']> = {};

  // School name
  const schoolMatch = text.match(/(?:TRƯỜNG\s+(?:THCS|TIỂU HỌC|THPT|TH & THCS|LIÊN CẤP)?\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ\s]+|[A-Z\s]{3,30}(?:SECONDARY|PRIMARY|HIGH)\s+SCHOOL)/i);
  if (schoolMatch) {
    metadata.schoolName = schoolMatch[0].trim();
  }

  // Department name
  const deptMatch = text.match(/(?:TỔ\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ\s\-]+|[A-Z\s]{3,30}DEPARTMENT)/i);
  if (deptMatch) {
    metadata.departmentName = deptMatch[0].trim();
  }

  // Subject & Grade
  const subjMatch = text.match(/(?:ENGLISH|TIẾNG ANH|TIN HỌC|TOÁN|NGỮ VĂN|KHOA HỌC TỰ NHIÊN|LỊCH SỬ VÀ ĐỊA LÍ|LỊCH SỬ|ĐỊA LÍ|CÔNG NGHỆ|GIÁO DỤC CÔNG DÂN|ÂM NHẠC|MĨ THUẬT|GIÁO DỤC THỂ CHẤT|HOẠT ĐỘNG TRẢI NGHIỆM|VẬT LÍ|HOÁ HỌC|SINH HỌC)\s*(\d{1,2})?/i);
  if (subjMatch) {
    const rawSubj = subjMatch[0].trim();
    if (rawSubj.toUpperCase().includes('ENGLISH') || rawSubj.toUpperCase().includes('TIẾNG ANH')) {
      metadata.subject = 'Tiếng Anh';
    } else {
      metadata.subject = rawSubj.replace(/\s*\d+$/, '').trim();
    }
    if (subjMatch[1]) {
      metadata.grade = subjMatch[1];
    }
  }

  // Grade explicit fallback
  if (!metadata.grade) {
    const gradeMatch = text.match(/(?:Lớp|Khối|Grade)\s*(\d{1,2})/i);
    if (gradeMatch) {
      metadata.grade = gradeMatch[1];
    }
  }

  // Academic year
  const yearMatch = text.match(/(?:20\d\d\s*[-–/]\s*20\d\d)/);
  if (yearMatch) {
    metadata.academicYear = yearMatch[0].replace('/', ' - ').replace('–', ' - ').replace('-', ' - ').replace(/\s+/g, ' ');
  }

  return metadata;
}

/**
 * Intelligent Text & PDF PPCT Extractor:
 * Trích xuất danh mục bài học, số tiết, tuần học từ văn bản thuần (PDF, DOCX text, Markdown, CSV)
 * Tự động tạo YCCĐ chi tiết & tích hợp đầy đủ NLS + AI
 */
export function extractCurriculumFromText(
  text: string,
  subject = 'Khoa học tự nhiên',
  grade = '6',
  schoolType: SchoolType = 'secondary'
): CurriculumItem[] {
  if (!text || !text.trim()) return [];

  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const isEn = subject.toLowerCase().includes('tiếng anh') || subject.toLowerCase().includes('english');
  const curriculum: CurriculumItem[] = [];

  // =========================================================================
  // CHIẾN LƯỢC 1: XỬ LÝ DẠNG BẢNG MARKDOWN HOẶC BẢNG CÁCH NHAU BẰNG DẤU GẠCH (|)
  // =========================================================================
  const pipeLines = lines.filter((l) => l.startsWith('|') && l.endsWith('|') && l.includes('|'));
  if (pipeLines.length >= 3) {
    let colWeek = -1;
    let colTopic = -1;
    let colLesson = -1;
    let colPeriod = -1;
    let colObjectives = -1;
    let colNlsAi = -1;
    let colEquipment = -1;
    let colLocation = -1;

    let headerIndex = -1;
    for (let r = 0; r < Math.min(4, pipeLines.length); r++) {
      const cells = pipeLines[r]
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim().toLowerCase());

      for (let c = 0; c < cells.length; c++) {
        const t = cells[c];
        if (t.includes('week') || t.includes('tuần') || t.includes('thời điểm')) colWeek = c;
        else if (t.includes('unit') || t.includes('chủ đề') || t.includes('topic') || t.includes('chương')) colTopic = c;
        else if (t.includes('lesson') || t.includes('bài') || t.includes('tên bài') || t.includes('nội dung')) {
          if (colLesson === -1) colLesson = c;
          else if (colTopic === -1) { colTopic = colLesson; colLesson = c; }
        } else if (t.includes('period') || t.includes('tiết') || t.includes('số tiết') || t.includes('thời lượng')) colPeriod = c;
        else if (t.includes('objective') || t.includes('yêu cầu') || t.includes('yccd') || t.includes('mục tiêu')) colObjectives = c;
        else if (t.includes('digital') || t.includes('năng lực số') || t.includes('ai') || t.includes('nls') || t.includes('công cụ')) colNlsAi = c;
        else if (t.includes('thiết bị') || t.includes('equipment')) colEquipment = c;
        else if (t.includes('địa điểm') || t.includes('location') || t.includes('phòng')) colLocation = c;
      }

      if (colLesson !== -1 || colPeriod !== -1) {
        headerIndex = r;
        break;
      }
    }

    if (headerIndex !== -1) {
      let currentWeek = isEn ? 'Week 1' : 'Tuần 1';
      let currentTopic = isEn ? 'Unit 1' : 'Chủ đề 1';
      let currentObjectives = '';
      let currentNlsAi = '';
      let sttCounter = 1;

      for (let r = headerIndex + 1; r < pipeLines.length; r++) {
        const rowStr = pipeLines[r];
        if (rowStr.includes('---') || rowStr.includes('===') || !rowStr.includes('|')) continue;

        const cells = rowStr.split('|').slice(1, -1).map((c) => c.trim());
        if (cells.length === 0) continue;

        const getCell = (idx: number) => (idx >= 0 && idx < cells.length ? cells[idx] : '');

        const rawWeek = getCell(colWeek);
        if (rawWeek) {
          const matchNum = rawWeek.match(/\d+/);
          currentWeek = matchNum ? (isEn ? `Week ${matchNum[0]}` : `Tuần ${matchNum[0]}`) : rawWeek;
        }

        const rawTopic = getCell(colTopic);
        if (rawTopic && rawTopic.length > 1) {
          currentTopic = rawTopic;
        }

        const rawObj = getCell(colObjectives);
        if (rawObj && rawObj.length > 5) {
          currentObjectives = rawObj;
        }

        const rawNls = getCell(colNlsAi);
        if (rawNls && rawNls.length > 3) {
          currentNlsAi = rawNls;
        }

        let lessonText = getCell(colLesson);
        const periodText = getCell(colPeriod);
        let periodCount = 1;

        if (periodText) {
          const numMatch = periodText.match(/\d+/);
          if (numMatch) periodCount = parseInt(numMatch[0], 10) || 1;
        }

        if (!lessonText && periodText && isNaN(Number(periodText))) {
          lessonText = periodText;
        }

        if (!lessonText || lessonText.toLowerCase().includes('tổng cộng') || lessonText.toLowerCase().includes('total')) {
          continue;
        }

        const cleanLessonName = lessonText.replace(/^[-•*–—\d\.\)]\s*/, '').replace(/\s+/g, ' ').trim();
        if (cleanLessonName.length < 3) continue;

        const finalYccd = currentObjectives
          ? formatBulletObjectives(currentObjectives)
          : generateYccdForLesson(cleanLessonName, currentTopic, subject, grade, schoolType);

        const formattedNlsAi = formatDigitalCompetencyAndAi(
          rawNls || currentNlsAi,
          subject,
          grade,
          schoolType,
          sttCounter - 1,
          { lessonName: cleanLessonName, topic: currentTopic, yccd: finalYccd }
        );

        const defaultEquipment = isEn
          ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, LMS'
          : 'Máy tính, máy chiếu/Tivi thông minh, SGK, học liệu số';
        const defaultLocation = isEn ? 'Phòng Lab Ngoại ngữ / Lớp học' : 'Phòng học bộ môn';

        curriculum.push({
          id: `curr-up-txt-${sttCounter}`,
          stt: sttCounter,
          topic: currentTopic,
          lessonName: cleanLessonName,
          periods: periodCount,
          week: currentWeek,
          yccd: finalYccd,
          equipment: getCell(colEquipment) || defaultEquipment,
          location: getCell(colLocation) || defaultLocation,
          digitalCompetency: formattedNlsAi,
          nlsCode: '',
          aiCode: '',
          notes: cleanLessonName.includes('Kiểm tra') ? 'Kiểm tra định kỳ' : cleanLessonName.includes('STEM') ? 'Dự án STEM' : ''
        });

        sttCounter++;
      }

      if (curriculum.length > 0) {
        return curriculum;
      }
    }
  }

  // =========================================================================
  // CHIẾN LƯỢC 2: QUÉT CÁC DÒNG TIÊU ĐỀ BÀI HỌC VÀ SỐ TIẾT (PPCT DẠNG VĂN BẢN/PDF)
  // =========================================================================
  let currentWeekNum = 1;
  let currentTopic = isEn ? 'Unit 1' : 'Chủ đề 1';
  let sttCounter = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Phát hiện Tuần / Week
    const weekMatch = line.match(/(?:Tuần|Week)\s*(\d{1,2})/i);
    if (weekMatch) {
      currentWeekNum = parseInt(weekMatch[1], 10) || currentWeekNum;
    }

    // Phát hiện Chương / Chủ đề / Unit
    const topicMatch = line.match(/(?:Chương|Chủ đề|Mạch nội dung|Unit|Topic)\s*([IVXLCDM\d]+[:\s\.\-][^\n\r]+)/i);
    if (topicMatch) {
      currentTopic = topicMatch[0].trim();
      continue;
    }

    // Phát hiện dòng bài học (có chứa Bài/Lesson hoặc Kiểm tra hoặc Dự án hoặc chứa số tiết)
    const isLessonLine =
      line.match(/^(?:Bài|Lesson|Chương|Chủ đề|\d+[\.\)]|Tiết)\s+/i) ||
      line.match(/(?:Kiểm tra|Đánh giá|Ôn tập|Dự án|STEM|Sơ kết|Tổng kết)/i) ||
      line.match(/(\d+)\s*tiết/i);

    if (!isLessonLine || line.length < 5) continue;

    // Trích xuất số tiết
    let periodCount = 1;
    const periodMatch = line.match(/(?:[\(:]\s*)?(\d+)\s*tiết(?:\s*[\)])?/i) || line.match(/Số tiết:\s*(\d+)/i);
    if (periodMatch) {
      periodCount = Math.min(parseInt(periodMatch[1], 10), 10) || 1;
    }

    // Làm sạch tên bài học
    let cleanLessonName = line
      .replace(/^(?:Tuần|Week)\s*\d+[:\s\.\-]+\s*/i, '')
      .replace(/^[-•*–—\d\.\)]\s*/, '')
      .replace(/\s*\([\d\s]+tiết\)/i, '')
      .replace(/\s*-\s*\d+\s*tiết/i, '')
      .replace(/\s*:\s*\d+\s*tiết/i, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (cleanLessonName.length < 4 || cleanLessonName.toLowerCase().startsWith('tổng số')) {
      continue;
    }

    const currentWeekStr = isEn ? `Week ${currentWeekNum}` : `Tuần ${currentWeekNum}`;

    const finalYccd = generateYccdForLesson(cleanLessonName, currentTopic, subject, grade, schoolType);

    const formattedNlsAi = formatDigitalCompetencyAndAi(
      '',
      subject,
      grade,
      schoolType,
      sttCounter - 1,
      { lessonName: cleanLessonName, topic: currentTopic, yccd: finalYccd }
    );

    const defaultEquipment = isEn
      ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, LMS'
      : 'Máy tính, máy chiếu/Tivi thông minh, SGK, học liệu số';
    const defaultLocation = isEn ? 'Phòng Lab Ngoại ngữ / Lớp học' : 'Phòng học bộ môn';

    curriculum.push({
      id: `curr-up-line-${sttCounter}`,
      stt: sttCounter,
      topic: currentTopic,
      lessonName: cleanLessonName,
      periods: periodCount,
      week: currentWeekStr,
      yccd: finalYccd,
      equipment: defaultEquipment,
      location: defaultLocation,
      digitalCompetency: formattedNlsAi,
      nlsCode: '',
      aiCode: '',
      notes: cleanLessonName.includes('Kiểm tra') ? 'Kiểm tra định kỳ' : cleanLessonName.includes('STEM') ? 'Dự án STEM' : ''
    });

    sttCounter++;
    // Tự động phân bổ tuần nếu file không ghi tuần tường minh
    if (!weekMatch && sttCounter % 2 === 0 && currentWeekNum < 35) {
      currentWeekNum++;
    }
  }

  return curriculum;
}

/**
 * Extract curriculum table from DOM / HTML
 */
export function extractCurriculumFromHtml(
  html: string,
  subject = 'Khoa học tự nhiên',
  grade = '6',
  schoolType: SchoolType = 'secondary'
): CurriculumItem[] {
  if (typeof window === 'undefined') return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tables = Array.from(doc.querySelectorAll('table'));

  if (tables.length === 0) return [];

  const curriculum: CurriculumItem[] = [];
  const isEn = subject.toLowerCase().includes('tiếng anh') || subject.toLowerCase().includes('english');

  // Process largest table
  let mainTable = tables[0];
  let maxRows = 0;
  for (const t of tables) {
    const rowCount = t.querySelectorAll('tr').length;
    if (rowCount > maxRows) {
      maxRows = rowCount;
      mainTable = t;
    }
  }

  const rows = Array.from(mainTable.querySelectorAll('tr'));
  if (rows.length < 2) return [];

  // Identify column indices from header
  let colWeek = -1;
  let colTopic = -1;
  let colLesson = -1;
  let colPeriod = -1;
  let colObjectives = -1;
  let colNlsAi = -1;
  let colEquipment = -1;
  let colLocation = -1;

  let headerRowIndex = 0;

  // Scan first 3 rows for headers
  for (let r = 0; r < Math.min(3, rows.length); r++) {
    const cells = Array.from(rows[r].querySelectorAll('th, td')).map((c) =>
      (c.textContent || '').trim().toLowerCase()
    );

    for (let c = 0; c < cells.length; c++) {
      const text = cells[c];
      if (text.includes('week') || text.includes('tuần') || text.includes('thời điểm') || text === 'w' || text === 't') {
        colWeek = c;
      } else if (text.includes('unit') || text.includes('chủ đề') || text.includes('topic') || text.includes('chương') || text.includes('mạch')) {
        colTopic = c;
      } else if (text.includes('lesson') || text.includes('bài học') || text.includes('tên bài') || text.includes('nội dung')) {
        if (colLesson === -1) colLesson = c;
        else if (colTopic === -1) {
          colTopic = colLesson;
          colLesson = c;
        }
      } else if (text.includes('period') || text.includes('tiết') || text.includes('số tiết') || text.includes('thời lượng')) {
        colPeriod = c;
      } else if (text.includes('objective') || text.includes('yêu cầu') || text.includes('yccd') || text.includes('mục tiêu')) {
        colObjectives = c;
      } else if (
        text.includes('digital') ||
        text.includes('competency') ||
        text.includes('năng lực số') ||
        text.includes('ai') ||
        text.includes('nls') ||
        text.includes('integration') ||
        text.includes('công cụ') ||
        text.includes('tools')
      ) {
        colNlsAi = c;
      } else if (text.includes('thiết bị') || text.includes('tbdh') || text.includes('equipment')) {
        colEquipment = c;
      } else if (text.includes('địa điểm') || text.includes('location') || text.includes('phòng')) {
        colLocation = c;
      }
    }

    if (colLesson !== -1 || colPeriod !== -1 || colObjectives !== -1) {
      headerRowIndex = r;
      break;
    }
  }

  // Fallback default column mapping if header text wasn't perfectly detected
  const firstRowCells = Array.from(rows[headerRowIndex].querySelectorAll('th, td'));
  const numCols = firstRowCells.length;

  if (colWeek === -1 && numCols >= 4) colWeek = 0;
  if (colTopic === -1 && numCols >= 5) colTopic = 1;
  if (colLesson === -1 && colPeriod === -1) {
    colLesson = numCols >= 5 ? 2 : 1;
    colPeriod = numCols >= 5 ? 3 : 2;
  }
  if (colObjectives === -1 && numCols >= 5) colObjectives = numCols - 2;
  if (colNlsAi === -1 && numCols >= 5) colNlsAi = numCols - 1;

  // Running tracking context across rows (for merged cells)
  let currentWeek = isEn ? 'Week 1' : 'Tuần 1';
  let currentTopic = isEn ? `Unit 1: Getting Started` : `Chủ đề 1`;
  let currentObjectives = '';
  let currentNlsAi = '';
  let sttCounter = 1;

  for (let r = headerRowIndex + 1; r < rows.length; r++) {
    const row = rows[r];
    const cells = Array.from(row.querySelectorAll('th, td'));
    if (cells.length === 0) continue;

    const getCellText = (idx: number) => {
      if (idx >= 0 && idx < cells.length) {
        return (cells[idx].textContent || '').trim();
      }
      return '';
    };

    // Update Week
    const rawWeek = getCellText(colWeek);
    if (rawWeek) {
      const matchNum = rawWeek.match(/\d+/);
      currentWeek = matchNum ? (isEn ? `Week ${matchNum[0]}` : `Tuần ${matchNum[0]}`) : rawWeek;
    }

    // Update Topic / Unit
    const rawTopic = getCellText(colTopic);
    if (rawTopic && rawTopic.length > 1) {
      currentTopic = rawTopic;
    }

    // Update Objectives / YCCD
    const rawObj = getCellText(colObjectives);
    if (rawObj && rawObj.length > 5) {
      currentObjectives = formatBulletObjectives(rawObj);
    }

    // Update NLS & AI
    const rawNls = getCellText(colNlsAi);
    if (rawNls && rawNls.length > 3) {
      currentNlsAi = rawNls;
    }

    // Determine Lesson name and Period
    let lessonText = '';
    let periodCount = 1;

    const lessonCellText = getCellText(colLesson);
    const periodCellText = getCellText(colPeriod);

    if (colLesson !== colPeriod && colPeriod >= 0) {
      lessonText = lessonCellText || periodCellText;
      const numMatch = periodCellText.match(/\d+/);
      if (numMatch) {
        periodCount = Math.min(parseInt(numMatch[0], 10), 10) || 1;
      }
    } else {
      lessonText = lessonCellText || periodCellText;
      const numMatch = lessonText.match(/tiết\s*(\d+)|\((\d+)\s*tiết\)|[-:\s](\d+)$/i);
      if (numMatch) {
        periodCount = 1;
      }
    }

    // Clean lesson name
    let cleanLessonName = lessonText
      .replace(/^[-•*–—\d\.\)]\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();

    // If lesson name is empty, skip or fallback
    if (!cleanLessonName || cleanLessonName.toLowerCase().includes('total') || cleanLessonName.toLowerCase().includes('tổng cộng')) {
      if (currentObjectives && rawTopic) {
        cleanLessonName = rawTopic;
      } else {
        continue;
      }
    }

    // Tự động tạo YCCĐ chi tiết nếu file gốc chưa có cột YCCĐ
    const finalYccd = currentObjectives || generateYccdForLesson(cleanLessonName, currentTopic, subject, grade, schoolType);

    // Format Digital Competency & AI for this item
    const formattedNlsAi = formatDigitalCompetencyAndAi(
      rawNls || currentNlsAi,
      subject,
      grade,
      schoolType,
      sttCounter - 1,
      {
        lessonName: cleanLessonName,
        topic: currentTopic,
        yccd: finalYccd
      }
    );

    // Equipment & Location
    const rawEq = getCellText(colEquipment);
    const rawLoc = getCellText(colLocation);

    const defaultEquipment = isEn
      ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, LMS'
      : 'Máy tính, máy chiếu/Tivi thông minh, SGK, học liệu số';
    const defaultLocation = isEn ? 'Phòng Lab Ngoại ngữ / Lớp học' : 'Phòng học bộ môn';

    curriculum.push({
      id: `curr-up-html-${sttCounter}`,
      stt: sttCounter,
      topic: currentTopic,
      lessonName: cleanLessonName,
      periods: periodCount,
      week: currentWeek,
      yccd: finalYccd,
      equipment: rawEq || defaultEquipment,
      location: rawLoc || defaultLocation,
      digitalCompetency: formattedNlsAi,
      nlsCode: '',
      aiCode: '',
      notes: cleanLessonName.includes('Kiểm tra') ? 'Kiểm tra định kỳ' : cleanLessonName.includes('STEM') ? 'Dự án STEM' : ''
    });

    sttCounter++;
  }

  return curriculum;
}

/**
 * ĐẶC QUYỀN MÔN TIẾNG ANH (GLOBAL SUCCESS):
 * Giữ nguyên 100% cấu trúc 35 tuần chuẩn SGK Global Success từ data hệ thống.
 * Chỉ đọc các mục và trích xuất nội dung Năng lực số (NLS) và AI từ tệp tải lên để áp dụng vào từng bài học tương ứng.
 */
export function applyUploadedNlsAiToEnglishCurriculum(
  standardCurriculum: CurriculumItem[],
  attachedFiles: Array<{ content?: string; parsedCurriculum?: CurriculumItem[] }>,
  grade: string,
  schoolType: SchoolType
): CurriculumItem[] {
  if (!attachedFiles || attachedFiles.length === 0) {
    return standardCurriculum;
  }

  // 1. Thu thập tất cả các mục NLS / AI đã trích xuất từ các file tải lên
  const uploadedNlsEntries: Array<{
    lessonName?: string;
    topic?: string;
    digitalCompetency: string;
    nlsCode?: string;
    aiCode?: string;
  }> = [];

  for (const file of attachedFiles) {
    // Ưu tiên trích xuất từ parsedCurriculum
    if (file.parsedCurriculum && file.parsedCurriculum.length > 0) {
      for (const item of file.parsedCurriculum) {
        if (item.digitalCompetency && item.digitalCompetency.trim().length > 5) {
          uploadedNlsEntries.push({
            lessonName: item.lessonName,
            topic: item.topic,
            digitalCompetency: item.digitalCompetency,
            nlsCode: item.nlsCode,
            aiCode: item.aiCode
          });
        }
      }
    }

    // Nếu chưa có từ bảng, quét các dòng bullet point chứa NLS / AI từ nội dung text
    if (uploadedNlsEntries.length === 0 && file.content) {
      const lines = file.content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (
          (trimmed.startsWith('•') || trimmed.startsWith('-')) &&
          (trimmed.includes('NLS') || trimmed.includes('Mã NLS') || trimmed.includes('AI') || trimmed.includes('Digital')) &&
          trimmed.length > 10
        ) {
          uploadedNlsEntries.push({
            digitalCompetency: trimmed.startsWith('•') ? trimmed : `• ${trimmed.replace(/^[-*]\s*/, '')}`
          });
        }
      }
    }
  }

  if (uploadedNlsEntries.length === 0) {
    return standardCurriculum;
  }

  // 2. Duyệt qua từng bài trong khung chuẩn Tiếng Anh Global Success (35 tuần)
  return standardCurriculum.map((stdItem, idx) => {
    // Thử khớp theo tên bài / Unit nếu có
    const stdNameClean = (stdItem.lessonName || '').toLowerCase();
    const stdTopicClean = (stdItem.topic || '').toLowerCase();

    let matchedEntry = uploadedNlsEntries.find((up) => {
      const upNameClean = (up.lessonName || '').toLowerCase();
      const upTopicClean = (up.topic || '').toLowerCase();
      if (!upNameClean) return false;
      return (
        (stdNameClean.includes(upNameClean) || upNameClean.includes(stdNameClean)) &&
        (stdTopicClean.includes(upTopicClean) || upTopicClean.includes(stdTopicClean))
      );
    });

    // Nếu không khớp chính xác theo tên, khớp theo số thứ tự (index)
    if (!matchedEntry && idx < uploadedNlsEntries.length) {
      matchedEntry = uploadedNlsEntries[idx];
    }

    if (matchedEntry && matchedEntry.digitalCompetency) {
      // Trích xuất mã NLS và AI từ nội dung
      const nlsCodeMatch = matchedEntry.digitalCompetency.match(/(?:NLS Code|Mã NLS|Code|NLS):\s*([A-Za-z0-9\.\_]+)/i);
      const aiCodeMatch = matchedEntry.digitalCompetency.match(/(?:AI Code|Mã AI|AI):\s*([A-Za-z0-9\.\_]+)/i);

      return {
        ...stdItem,
        digitalCompetency: matchedEntry.digitalCompetency,
        nlsCode: matchedEntry.nlsCode || (nlsCodeMatch ? nlsCodeMatch[1].trim() : stdItem.nlsCode),
        aiCode: matchedEntry.aiCode || (aiCodeMatch ? aiCodeMatch[1].trim() : stdItem.aiCode)
      };
    }

    return stdItem;
  });
}

/**
 * Convert HTML content to structured Markdown table representation
 */
export function convertHtmlToMarkdownTable(html: string): string {
  if (typeof window === 'undefined') return '';

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tables = Array.from(doc.querySelectorAll('table'));

  if (tables.length === 0) {
    return (doc.body.textContent || '').trim();
  }

  let output = '';

  // Include top headings / text
  const headings = Array.from(doc.querySelectorAll('h1, h2, h3, p')).slice(0, 10);
  for (const h of headings) {
    const txt = (h.textContent || '').trim();
    if (txt && !tables.some((t) => t.contains(h))) {
      output += `${txt}\n`;
    }
  }

  output += '\n============================================================\n';
  output += 'BẢNG PHÂN PHỐI CHƯƠNG TRÌNH TRÍCH XUẤT TỪ FILE TẢI LÊN:\n';
  output += '============================================================\n\n';

  for (let tIdx = 0; tIdx < tables.length; tIdx++) {
    const table = tables[tIdx];
    const rows = Array.from(table.querySelectorAll('tr'));
    if (rows.length === 0) continue;

    output += `### BẢNG ${tIdx + 1} (${rows.length} hàng):\n\n`;

    // Process rows
    for (let rIdx = 0; rIdx < rows.length; rIdx++) {
      const cells = Array.from(rows[rIdx].querySelectorAll('th, td')).map((c) =>
        (c.textContent || '').replace(/\s+/g, ' ').trim()
      );

      output += `| ${cells.join(' | ')} |\n`;

      if (rIdx === 0) {
        output += `| ${cells.map(() => '---').join(' | ')} |\n`;
      }
    }
    output += '\n\n';
  }

  return output;
}

/**
 * Main function: Extract text, HTML, metadata, and curriculum from file (PDF, DOCX, TXT, CSV, MD)
 */
export async function extractAndParseFile(
  file: File,
  context?: { subject?: string; grade?: string; schoolType?: SchoolType }
): Promise<FileParseResult> {
  const fileName = file.name.toLowerCase();
  const subject = context?.subject || 'Khoa học tự nhiên';
  const grade = context?.grade || '6';
  const schoolType = context?.schoolType || 'secondary';

  // 1. Plain text formats (.txt, .md, .csv, .json)
  if (
    fileName.endsWith('.txt') ||
    fileName.endsWith('.md') ||
    fileName.endsWith('.csv') ||
    fileName.endsWith('.json') ||
    file.type.includes('text')
  ) {
    const text: string = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string) || '');
      reader.onerror = () => reject(new Error('Không thể đọc tệp văn bản này.'));
      reader.readAsText(file, 'utf-8');
    });

    const metadata = extractDocumentMetadata(text);
    const parsedCurriculum = extractCurriculumFromText(
      text,
      metadata?.subject || subject,
      metadata?.grade || grade,
      schoolType
    );

    return {
      rawText: text,
      extractedCharCount: text.length,
      parsedCurriculum: parsedCurriculum.length > 0 ? parsedCurriculum : undefined,
      detectedMetadata: metadata
    };
  }

  // 2. Word documents (.docx)
  if (fileName.endsWith('.docx') || file.type.includes('wordprocessingml')) {
    try {
      const mammoth = await import('mammoth');
      const arrayBuffer = await file.arrayBuffer();

      // Convert to HTML to preserve tables and formatting
      const htmlResult = await mammoth.convertToHtml({ arrayBuffer });
      const html = htmlResult.value || '';

      // Extract raw text for fallback
      const textResult = await mammoth.extractRawText({ arrayBuffer });
      const rawText = textResult.value || '';

      // Extract metadata from headers
      const metadata = extractDocumentMetadata(rawText);

      // Convert HTML table into formatted Markdown
      const markdownTable = convertHtmlToMarkdownTable(html);

      // Extract curriculum items from HTML table first
      let parsedCurriculum = extractCurriculumFromHtml(
        html,
        metadata?.subject || subject,
        metadata?.grade || grade,
        schoolType
      );

      // If HTML table extraction found nothing (e.g. text list in word), parse from markdown/text
      if (parsedCurriculum.length === 0) {
        parsedCurriculum = extractCurriculumFromText(
          markdownTable || rawText,
          metadata?.subject || subject,
          metadata?.grade || grade,
          schoolType
        );
      }

      return {
        rawText: markdownTable || rawText,
        htmlContent: html,
        extractedCharCount: (markdownTable || rawText).length,
        parsedCurriculum: parsedCurriculum.length > 0 ? parsedCurriculum : undefined,
        detectedMetadata: metadata
      };
    } catch (err: any) {
      console.error('Lỗi khi đọc file DOCX:', err);
      throw new Error(`Lỗi đọc file DOCX: ${err.message || 'Không thể trích xuất văn bản'}`);
    }
  }

  // 3. PDF documents (.pdf)
  if (fileName.endsWith('.pdf') || file.type.includes('pdf')) {
    try {
      const pdfjsLib = await import('pdfjs-dist');

      if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version || '4.10.38'}/pdf.worker.min.mjs`;
      }

      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({
        data: new Uint8Array(arrayBuffer),
        useSystemFonts: true
      });

      const pdf = await loadingTask.promise;
      let fullText = '';

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str || '')
          .join(' ');
        fullText += `--- Trang ${pageNum} ---\n${pageText}\n\n`;
      }

      const cleanText = fullText.trim();
      const metadata = extractDocumentMetadata(cleanText);

      // Intelligent extraction of curriculum items from PDF text
      const parsedCurriculum = extractCurriculumFromText(
        cleanText,
        metadata?.subject || subject,
        metadata?.grade || grade,
        schoolType
      );

      return {
        rawText: cleanText,
        extractedCharCount: cleanText.length,
        parsedCurriculum: parsedCurriculum.length > 0 ? parsedCurriculum : undefined,
        detectedMetadata: metadata
      };
    } catch (err: any) {
      console.error('Lỗi khi đọc file PDF:', err);
      throw new Error(`Lỗi đọc file PDF: ${err.message || 'Không thể trích xuất nội dung PDF'}`);
    }
  }

  // Fallback: try reading as text
  const text: string = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string) || '');
    reader.onerror = () => resolve(`[Tệp đính kèm: ${file.name}]`);
    reader.readAsText(file, 'utf-8');
  });

  const metadata = extractDocumentMetadata(text);
  const parsedCurriculum = extractCurriculumFromText(
    text,
    metadata?.subject || subject,
    metadata?.grade || grade,
    schoolType
  );

  return {
    rawText: text,
    extractedCharCount: text.length,
    parsedCurriculum: parsedCurriculum.length > 0 ? parsedCurriculum : undefined,
    detectedMetadata: metadata
  };
}

/**
 * Backward-compatible helper for extracting text
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const res = await extractAndParseFile(file);
  return res.rawText;
}
