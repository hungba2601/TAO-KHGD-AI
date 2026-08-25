import { ConfigFormData, SchoolType } from '../types';
import { getNlsCodeForSubjectLesson, getNlsGuideByGradeAndSchool } from './constants/nlsGuides';
import { getNlsCodeForEnglishLesson, getNlsGuideByGradeAndSchoolEn } from './constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson, AI_GUIDES_EN } from './constants/aiGuidesEn';
import { getAiCodeForSubjectLesson, AI_GUIDES } from './constants/aiGuides';
import { getCurriculumBySubjectAndGrade } from './curriculum';
import { getOfficialPeriods } from './curriculum/periodsConfig';

export function buildSystemInstruction(schoolType: SchoolType): string {
  const isPrimary = schoolType === 'primary';
  const circular = isPrimary ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';

  return `Bạn là Chuyên gia Cao cấp của Bộ Giáo dục và Đào tạo Việt Nam, am hiểu sâu sắc Chương trình Giáo dục phổ thông 2018 (Thông tư 32/2018/TT-BGDĐT), Khung Năng lực số (Công văn 3456/BGDĐT-GDPT) và Khung Năng lực AI (Quyết định số 2422/QĐ-BGDĐT), cùng quy chuẩn xây dựng kế hoạch giáo dục theo ${circular}.

QUY TẮC CỐT LÕI BẮT BUỘC:
1. CƠ SỞ THAM KHẢO CHUẨN: BẮT BUỘC sử dụng Bộ sách "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG" (NXB Giáo dục Việt Nam; đối với môn Tiếng Anh sử dụng bộ Tiếng Anh Global Success của NXB Giáo dục Việt Nam) hoặc bám sát 100% tài liệu tham khảo do giáo viên tải lên.
2. TÊN BÀI HỌC VÀ CHỦ ĐỀ: Phải ghi chính xác 100% tên bài học và chủ đề theo đúng mục lục SGK Kết nối tri thức hoặc phân phối chương trình trong tài liệu tham khảo. TUYỆT ĐỐI KHÔNG DÙNG TÊN BÀI CHUNG CHUNG.
3. CỘT YÊU CẦU CẦN ĐẠT (YCCĐ): BẮT BUỘC TRÌNH BÀY DƯỚI DẠNG TỪNG DÒNG GẠCH ĐẦU DÒNG (mỗi ý là 1 dòng bắt đầu bằng dấu "- ", có ít nhất 2 - 3 gạch đầu dòng rõ ràng về Kiến thức, Kỹ năng, Năng lực đặc thù và Phẩm chất gắn với nội dung bài học). TUYỆT ĐỐI KHÔNG VIẾT THÀNH ĐOẠN VĂN LIỀN MẠCH, KHÔNG VIẾT CHUNG CHUNG.
4. QUY TẮC MÃ NĂNG LỰC SỐ (CV 3456) VÀ MÃ AI (QĐ 2422) BẮT BUỘC THEO ĐÚNG CẤP ĐỘ KHỐI LỚP:
   - Tiểu học Lớp 1, 2, 3: Mức độ CƠ BẢN 1 (mã NLS dạng X.X.CB1x) & Khung AI Lớp 1, 2, 3 (mã dạng 1.x, 2.x, 3.x)
   - Tiểu học Lớp 4, 5: Mức độ CƠ BẢN 2 (mã NLS dạng X.X.CB2x) & Khung AI Lớp 4, 5 (mã dạng 4.x, 5.x)
   - THCS Lớp 6, 7: Mức độ TRUNG CẤP 1 (mã NLS dạng X.X.TC1x) & Khung AI Lớp 6, 7 (mã dạng 6.x, 7.x)
   - THCS Lớp 8, 9: Mức độ TRUNG CẤP 2 (mã NLS dạng X.X.TC2x) & Khung AI Lớp 8, 9 (mã dạng 8.x, 9.x)
   - THPT Lớp 10, 11, 12: Mức độ NÂNG CAO 1 (mã NLS dạng X.X.NC1x) & Khung AI Lớp 10, 11, 12 (mã dạng 10.x, 11.x, 12.x)
5. NGUYÊN TẮC TÍCH HỢP NLS & AI THEO NỘI DUNG VÀ YCCĐ TỪNG BÀI:
   - NẾU FILE TẢI LÊN ĐÃ CÓ CỘT NLS / AI: BẮT BUỘC giữ nguyên 100% mã NLS, mã AI và mô tả từ file tải lên.
   - NẾU SINH MỚI / BỔ KHUYẾT: Phải phân tích nội dung bài học và YCCĐ để chọn đúng Miền NLS (1: Tra cứu; 2: Giao tiếp/Hợp tác; 3: Sáng tạo/Lập trình/Bảng tính; 4: An toàn/Bản quyền; 5: STEM/Thí nghiệm; 6: Ứng dụng AI) và Mạch AI (A: Con người làm chủ; B: Đạo đức/An toàn; C: Công cụ/Kỹ thuật; D: Thiết kế/Dự án) phù hợp nhất với từng bài học cụ thể, TUYỆT ĐỐI KHÔNG TĂNG DẦN MÃ MÁY MÓC.
6. Trả về đúng định dạng JSON hợp lệ để hệ thống nạp trực tiếp vào ứng dụng.
7. Tuân thủ tuyệt đối chuẩn ${circular}.`;
}

function buildAttachedFilesSection(config: ConfigFormData): string {
  if (!config.attachedFiles || config.attachedFiles.length === 0) return '';

  const validFiles = config.attachedFiles.filter((f) => f.content && f.content.trim().length > 0);
  if (validFiles.length === 0) return '';

  let section = `\n============================================================\n`;
  section += `TÀI LIỆU THAM KHẢO & PHÂN PHỐI CHƯƠNG TRÌNH DO GIÁO VIÊN TẢI LÊN (${validFiles.length} tệp):\n`;
  section += `============================================================\n`;

  validFiles.forEach((f, idx) => {
    // Truncate safely if too massive
    const cleanContent = (f.content || '').slice(0, 20000);
    section += `--- TỆP ${idx + 1}: ${f.name} (${f.size}) ---\n`;
    section += `${cleanContent}\n\n`;
  });

  section += `QUY TẮC BẮT BUỘC ĐỐI VỚI TÀI LIỆU THAM KHẢO ĐÍNH KÈM:\n`;
  section += `1. NGUYÊN TẮC ƯU TIÊN SỐ 1: BẮT BUỘC PHẢI KHAI THÁC TOÀN BỘ danh mục bài học, mạch chủ đề, số tiết, yêu cầu cần đạt (YCCĐ) và thiết bị từ tài liệu tham khảo đính kèm ở trên.\n`;
  section += `2. Nếu tài liệu tham khảo có phân phối chương trình, BẮT BUỘC trích xuất chính xác 100% tên bài, thứ tự bài và số tiết theo tài liệu, không được tự ý sửa tên bài khác với tài liệu.\n`;
  section += `3. NẾU TÀI LIỆU CÓ CỘT NĂNG LỰC SỐ / AI / CÔNG CỤ: BẮT BUỘC giữ nguyên 100% mã NLS và mã AI từ tài liệu đính kèm.\n`;
  section += `4. Nếu tài liệu tham khảo là đề cương/sách giáo khoa/khung chương trình, đối chiếu chuẩn xác với CT GDPT 2018 và phân bổ trải dài đủ 35 tuần thực học.\n`;
  section += `============================================================\n\n`;

  return section;
}

function buildReferenceCurriculumHint(config: ConfigFormData): string {
  const isEn = config.subject.toLowerCase().includes('tiếng anh') || config.subject.toLowerCase().includes('english');
  // If user uploaded PPCT files for non-English subjects, do NOT inject standard curriculum hint to avoid overriding user's file
  if (!isEn && config.attachedFiles && config.attachedFiles.some((f) => f.content && f.content.trim().length > 0)) {
    return '';
  }

  const std = getCurriculumBySubjectAndGrade(config.subject, config.grade, config.schoolType);
  if (!std || std.length === 0) return '';

  let hint = `\nKHUNG MỤC LỤC SGK VÀ CT GDPT 2018 THAM CHIẾU CHUẨN MÔN ${config.subject.toUpperCase()} LỚP ${config.grade} (${isEn ? 'GLOBAL SUCCESS' : 'KẾT NỐI TRI THỨC'}):\n`;
  std.slice(0, 35).forEach((item) => {
    hint += `- ${item.week} | ${item.topic} | ${item.lessonName} (${item.periods} tiết) | YCCĐ: ${(item.yccd || '').replace(/\n/g, ' ')}\n`;
  });
  hint += `\nHÃY DÙNG CHÍNH XÁC DANH MỤC VÀ TÊN BÀI HỌC CHUẨN TRÊN ĐỂ XÂY DỰNG TOÀN BỘ 35 TUẦN HỌC, KHÔNG ĐƯỢC THIẾU TUẦN NÀO.\n\n`;
  return hint;
}

export function buildPhase1Prompt(config: ConfigFormData): string {
  const isPrimary = config.schoolType === 'primary';
  const circular = isPrimary ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';
  const isEn = config.subject.toLowerCase().includes('tiếng anh') || config.subject.toLowerCase().includes('english');

  const exampleNls = isEn
    ? getNlsCodeForEnglishLesson(config.grade, config.schoolType, { lessonName: 'Introduction', subject: config.subject, lessonIndex: 0 })
    : getNlsCodeForSubjectLesson(config.grade, config.schoolType, { lessonName: 'Bài mở đầu', subject: config.subject, lessonIndex: 0 });

  const exampleAi = isEn
    ? getAiCodeForEnglishLesson(config.grade, { lessonName: 'Introduction', subject: config.subject, lessonIndex: 0 })
    : getAiCodeForSubjectLesson(config.grade, { lessonName: 'Bài mở đầu', subject: config.subject, lessonIndex: 0 });

  const { level, guideText } = isEn
    ? getNlsGuideByGradeAndSchoolEn(config.grade, config.schoolType)
    : getNlsGuideByGradeAndSchool(config.grade, config.schoolType);

  const aiGuideText = isEn
    ? (AI_GUIDES_EN[config.grade.trim()] || AI_GUIDES_EN['8'])
    : (AI_GUIDES[config.grade.trim()] || AI_GUIDES['8']);

  const hasAttached = config.attachedFiles && config.attachedFiles.some((f) => f.content && f.content.trim().length > 0);
  const attachedSection = buildAttachedFilesSection(config);
  const referenceHint = buildReferenceCurriculumHint(config);
  const periodInfo = getOfficialPeriods(config.subject, config.grade, config.schoolType);

  let priorityInstruction = '';
  if (hasAttached) {
    if (isEn) {
      priorityInstruction = `\n*** CHỈ THỊ ĐẶC QUYỀN MÔN TIẾNG ANH (GLOBAL SUCCESS) - TUÂN THỦ 100% ***:
- BẮT BUỘC giữ nguyên 100% CẤU TRÚC 35 TUẦN CHUẨN SGK TIẾNG ANH GLOBAL SUCCESS (với đầy đủ các Unit, Getting Started, A Closer Look 1, A Closer Look 2, Communication, Skills 1, Skills 2, Looking Back & Project, Review, Test định kỳ) theo khung chuẩn CT GDPT 2018.
- TỆP ĐÍNH KÈM CHỈ DÙNG ĐỂ ĐỌC VÀ TRÍCH XUẤT CÁC MÃ/NỘI DUNG NĂNG LỰC SỐ (NLS) VÀ AI DO GIÁO VIÊN ĐÃ SOẠN ĐỂ GÁN VÀO CỘT "digitalCompetency" CỦA TỪNG BÀI TRONG KHUNG CHUẨN GLOBAL SUCCESS, KHÔNG THAY ĐỔI CẤU TRÚC BÀI DẠY CHUẨN.\n`;
    } else {
      priorityInstruction = `\n*** CHỈ THỊ ƯU TIÊN SỐ 1 (ĐẶC BIỆT QUAN TRỌNG - TUÂN THỦ 100%) ***:
Người dùng ĐÃ TẢI LÊN TỆP PHÂN PHỐI CHƯƠNG TRÌNH (PPCT).
BẮT BUỘC PHẢI DỰA TRÊN 100% NỘI DUNG TỆP PPCT ĐƯỢC TẢI LÊN Ở DƯỚI ĐỂ XÂY DỰNG PHỤ LỤC 1.
- TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ ĐỘNG THAY THẾ BẰNG BỘ DỮ LIỆU MẪU MẶC ĐỊNH HAY DANH MỤC BÀI KHÁC.
- Trích xuất ĐẦY ĐỦ TOÀN BỘ các tiết dạy, bài học, tuần học, số tiết và mục tiêu/YCCĐ (Objectives) từ bảng trong tệp.
- Giữ đúng tên bài, thứ tự bài, tuần học từ tệp.
- NẾU TỆP ĐÃ CÓ CỘT NLS / AI: BẢO LƯU 100% MÃ VÀ MÔ TẢ TỪ TỆP GỐC.
- Nếu tệp chưa có, tích hợp và chuẩn hóa cột "digitalCompetency" với mã Năng lực số (theo CV 3456 cấp độ ${level}) và mã AI (theo QĐ 2422 Khối ${config.grade}) phù hợp với nội dung từng bài học.\n`;
    }
  }

  return `Hãy xây dựng PHỤ LỤC 1: KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN theo chuẩn ${circular}, SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG, tích hợp KHUNG NĂNG LỰC SỐ (CV 3456 cấp độ ${level}) và KHUNG NĂNG LỰC AI (QĐ 2422 Khối ${config.grade}) cho:
- Cơ quan chủ quản: ${config.governingBody}
- Tên trường: ${config.schoolName}
- Tổ chuyên môn: ${config.departmentName}
- Môn học: ${config.subject}
- Khối lớp: ${config.grade} (Cấp độ NLS: ${level})
- Năm học: ${config.academicYear}
- Số lớp: ${config.totalClasses}, Tổng số học sinh: ${config.totalStudents}
- Bộ SGK tham chiếu: KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (NXB Giáo dục Việt Nam; Môn Tiếng Anh dùng bộ Global Success)
- Định mức thời lượng dạy học theo CT GDPT 2018: ${periodInfo.description} (Tổng số tiết cả năm: ${periodInfo.totalAnnualPeriods} tiết, tương ứng ${periodInfo.periodsPerWeek} tiết/tuần).
- Ghi chú định hướng: ${config.notes || 'Tích hợp STEM, Năng lực số (CV 3456) và AI (QĐ 2422)'}

${priorityInstruction}
${attachedSection}
${referenceHint}

DANH MỤC TIÊU CHÍ NĂNG LỰC SỐ THAM CHIẾU (MỨC ĐỘ ${level}):
${guideText}

DANH MỤC TIÊU CHÍ NĂNG LỰC AI THAM CHIẾU (KHỐI ${config.grade}):
${aiGuideText}

YÊU CẦU ĐẶC BIỆT QUAN TRỌNG VỀ KHUNG THỜI GIAN 35 TUẦN THỰC HỌC (CT GDPT 2018):
1. BẮT BUỘC danh sách "curriculum" PHẢI TRẢI DÀI ĐỦ 35 TUẦN THỰC HỌC (TỪ TUẦN 1 ĐẾN TUẦN 35). TUYỆT ĐỐI KHÔNG ĐƯỢC THIẾU TUẦN HOẶC DỪNG LẠI Ở GIỮA CHỪNG.
2. NỘI DUNG YÊU CẦU CẦN ĐẠT (YCCĐ) PHẢI LẤY TRỰC TIẾP TỪ CHƯƠNG TRÌNH GDPT 2018 (Thông tư 32/2018/TT-BGDĐT):
   - Cột "yccd" của TẤT CẢ các môn học từ Lớp 1 đến Lớp 12 BẮT BUỘC viết bằng các động từ hành vi chuẩn ("Nhận biết được...", "Trình bày được...", "Mô tả được...", "Thực hiện được...", "Vận dụng được...").
   - Trình bày thành 2-3 gạch đầu dòng rõ ràng (- Kiến thức & Năng lực đặc thù; - Kỹ năng thực hành & Vận dụng; - Phẩm chất và Năng lực chung).
   - Tuyệt đối KHÔNG viết YCCĐ chung chung một dòng.
3. QUY TẮC TÍCH HỢP NLS & AI TỪNG BÀI:
   - Dựa vào nội dung và YCCĐ của từng bài để chọn mã NLS và mã AI tương ứng từ danh mục tham chiếu ở trên.
   - Ví dụ: bài thực hành/lập trình/bảng tính chọn mã miền 3.x hoặc 5.x; bài làm việc nhóm/thuyết trình chọn miền 2.x; bài an toàn chọn miền 4.x; bài kiểm tra đánh giá chọn an toàn bài thi.
4. HỌC KỲ I (Tuần 1 đến Tuần 18):
   - Tuần 1 đến Tuần 8: Các bài học/chủ đề mở đầu và trọng tâm theo đúng SGK Kết nối tri thức.
   - Tuần 9: Ôn tập & Kiểm tra, đánh giá giữa Học kỳ 1 (GK1).
   - Tuần 10 đến Tuần 17: Các bài học/chủ đề tiếp theo của HK1.
   - Tuần 18: Ôn tập & Kiểm tra, đánh giá cuối Học kỳ 1 (CK1) & Sơ kết HK1.
5. HỌC KỲ II (Tuần 19 đến Tuần 35):
   - Tuần 19 đến Tuần 25: Các bài học/chủ đề Học kỳ 2.
   - Tuần 26: Ôn tập & Kiểm tra, đánh giá giữa Học kỳ 2 (GK2).
   - Tuần 27 đến Tuần 33: Các bài học/chủ đề tiếp theo & Chuyên đề / Dự án STEM.
   - Tuần 34: Hoạt động thực hành trải nghiệm & Ôn tập cuối năm.
   - Tuần 35: Kiểm tra, đánh giá cuối Học kỳ 2 (CK2) & Tổng kết năm học.
${isEn ? '6. Cột "week" BẮT BUỘC ghi rõ ràng bằng Tiếng Anh từ "Week 1", "Week 2", ..., đến "Week 35".' : '6. Cột "week" phải ghi rõ ràng từ "Tuần 1", "Tuần 2", ..., đến "Tuần 35".'}

Hãy tạo JSON có cấu trúc sau:
{
  "curriculum": [
    {
      "stt": 1,
      "topic": "${isEn ? 'Unit 1: Leisure Time' : 'Chủ đề 1 / Bài 1: Tên chủ đề SGK Kết nối tri thức'}",
      "lessonName": "${isEn ? 'Unit 1: Leisure Time - Getting Started' : 'Bài 1: Tên bài chính xác theo SGK Kết nối tri thức'}",
      "periods": 1,
      "week": "${isEn ? 'Week 1' : 'Tuần 1'}",
      "yccd": "${isEn ? '- Master key vocabulary, expressions and communicative structures of the lesson.\\n- Demonstrate communicative fluency in speaking and listening tasks.\\n- Develop digital competency and autonomous learning skills.' : '- Nêu rõ ràng kiến thức cốt lõi của bài học.\\n- Nêu thành thạo các kỹ năng thực hành và vận dụng.\\n- Phẩm chất và năng lực hình thành.'}",
      "equipment": "${isEn ? 'Audio CD/MP3 Global Success, Smartboard, Flashcards, LMS' : 'Thiết bị dạy học bộ môn, máy chiếu, học liệu số'}",
      "location": "${isEn ? 'English Language Lab / Classroom' : 'Lớp học / Phòng học bộ môn'}",
      "nlsCode": "${exampleNls.code}",
      "aiCode": "${exampleAi.code}",
      "digitalCompetency": "• [${isEn ? 'NLS Code' : 'Mã NLS'}: ${exampleNls.code}] ${exampleNls.requirement}\\n• [${isEn ? 'AI Code' : 'Mã AI'}: ${exampleAi.code}] ${exampleAi.requirement}",
      "notes": ""
    }
    // ... BẮT BUỘC TẠO ĐỦ 35 TUẦN HỌC (TỪ TUẦN 1 ĐẾN TUẦN 35), CHUẨN MỤC LỤC SGK KẾT NỐI TRI THỨC KÈM MÃ NLS VÀ MÃ AI PHÙ HỢP NỘI DUNG TỪNG BÀI
  ],
  "equipments": [
    {
      "stt": 1,
      "equipmentName": "Tên bộ thiết bị chi tiết theo TT 37/38/39/2021/TT-BGDĐT",
      "quantity": "08 bộ/phòng",
      "experiments": "Các bài thí nghiệm/thực hành tương ứng",
      "notes": "Quy chuẩn thông tư"
    }
  ],
  "classrooms": [
    {
      "stt": 1,
      "roomName": "Tên phòng học bộ môn",
      "quantity": "02 phòng",
      "features": "Trang thiết bị hiện đại và đặc điểm",
      "notes": "Quy định sử dụng"
    }
  ],
  "assessments": [
    {
      "stt": 1,
      "assessmentName": "${isEn ? 'Mid-term Test 1 (English ' + config.grade + ')' : 'Kiểm tra, đánh giá giữa Học kỳ 1'}",
      "time": "${isEn ? '45 minutes' : '45 phút / 90 phút'}",
      "week": "${isEn ? 'Week 9' : 'Tuần 9'}",
      "form": "${isEn ? 'Written Test & Speaking' : 'Viết trên giấy / Trắc nghiệm + Tự luận / Thực hành'}",
      "units": "${isEn ? 'Units 1 - 5 (Global Success)' : 'Mạch kiến thức từ tuần 1 đến 8 theo SGK Kết nối tri thức'}",
      "requirements": "${isEn ? '- Assess 4 language skills according to MOET matrix.\\n- Evaluate communicative competency and vocabulary mastery.' : '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng.\\n- Kiểm tra năng lực vận dụng và giải quyết vấn đề.'}"
    },
    {
      "stt": 2,
      "assessmentName": "${isEn ? 'End-of-Term 1 Test (English ' + config.grade + ')' : 'Kiểm tra, đánh giá cuối Học kỳ 1'}",
      "time": "${isEn ? '45 minutes / 60 minutes' : '45 phút / 90 phút'}",
      "week": "${isEn ? 'Week 18' : 'Tuần 18'}",
      "form": "${isEn ? 'Standardized Semester Exam (4 Skills)' : 'Đề kiểm tra chuẩn hóa tập trung theo ma trận Bộ GD&ĐT'}",
      "units": "${isEn ? 'Comprehensive Term 1 Curriculum' : 'Toàn bộ kiến thức Học kỳ 1 theo SGK Kết nối tri thức'}",
      "requirements": "${isEn ? '- Comprehensive assessment of Term 1 learning outcomes.' : '- Đánh giá tổng kết kết quả học tập và rèn luyện Học kỳ 1.'}"
    },
    {
      "stt": 3,
      "assessmentName": "${isEn ? 'Mid-term Test 2 (English ' + config.grade + ')' : 'Kiểm tra, đánh giá giữa Học kỳ 2'}",
      "time": "${isEn ? '45 minutes' : '45 phút / 90 phút'}",
      "week": "${isEn ? 'Week 26' : 'Tuần 26'}",
      "form": "${isEn ? 'Written Test & Oral Interaction' : 'Thực hành / Báo cáo sản phẩm / Viết'}",
      "units": "${isEn ? 'Units 7 - 9 / Term 2 Topics' : 'Mạch kiến thức từ tuần 19 đến 25 theo SGK Kết nối tri thức'}",
      "requirements": "${isEn ? '- Assess language skills and communication progress in Term 2.' : '- Kiểm tra kỹ năng thực hành và vận dụng kiến thức giữa HK2.'}"
    },
    {
      "stt": 4,
      "assessmentName": "${isEn ? 'End-of-Year Test / Final Examination (English ' + config.grade + ')' : 'Kiểm tra, đánh giá cuối Học kỳ 2 & Cả năm'}",
      "time": "${isEn ? '45 minutes / 60 minutes' : '45 phút / 90 phút'}",
      "week": "${isEn ? 'Week 35' : 'Tuần 35'}",
      "form": "${isEn ? 'School-wide Standardized Final Exam' : 'Đề kiểm tra chuẩn hóa cấp trường theo ma trận Bộ GD&ĐT'}",
      "units": "${isEn ? 'Core language competencies of the school year' : 'Kiến thức trọng tâm Học kỳ 2 và cả năm học'}",
      "requirements": "${isEn ? '- Evaluate overall English competency for grade completion.' : '- Đánh giá toàn diện kết quả học tập cả năm học, xét hoàn thành chương trình.'}"
    }
  ],
  "otherTasks": {
    "advancedTraining": "Kế hoạch bồi dưỡng HSG cụ thể",
    "remedialTeaching": "Kế hoạch phụ đạo học sinh chưa đạt",
    "lessonStudyGroup": "Sinh hoạt chuyên môn theo NCBH",
    "otherActivities": "Hoạt động giáo dục khác"
  }
}`;
}

export function buildPhase2Prompt(config: ConfigFormData): string {
  const attachedSection = buildAttachedFilesSection(config);

  return `Hãy xây dựng PHỤ LỤC 2: KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN (Hoạt động trải nghiệm, Chuyên đề STEM, Trải nghiệm số & AI theo QĐ 2422 & CV 3456) bám sát mạch bài học SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG cho môn ${config.subject} Khối ${config.grade} - Năm học ${config.academicYear} tại ${config.schoolName}.

${attachedSection}

Hãy trả về JSON có cấu trúc:
{
  "activities": [
    {
      "stt": 1,
      "title": "Tên hoạt động giáo dục / Hội thảo / Ngày hội trải nghiệm môn ${config.subject}",
      "requirements": "- Nêu mục tiêu kiến thức.\\n- Nêu kỹ năng và phẩm chất học sinh đạt được.\\n- Tích hợp khung NLS (CV 3456) và AI (QĐ 2422).",
      "periods": 4,
      "timeline": "Thời điểm (Tuần / Tháng)",
      "location": "Địa điểm thực hiện",
      "host": "Người chủ trì",
      "collaborate": "Lực lượng phối hợp",
      "conditions": "Điều kiện cơ sở vật chất cần thiết",
      "targetAudience": "Đối tượng tham gia"
    }
  ],
  "stemProjects": [
    {
      "stt": 1,
      "title": "Dự án STEM: Tên dự án thực tế môn ${config.subject}",
      "requirements": "- Vận dụng kiến thức bài học SGK Kết nối tri thức.\\n- Chế tạo sản phẩm thực tiễn và thuyết trình báo cáo.",
      "periods": 3,
      "timeline": "Thời điểm thực hiện",
      "location": "Phòng thực hành STEM / Lớp học",
      "host": "Giáo viên giảng dạy",
      "collaborate": "Nhóm học sinh",
      "conditions": "Nguyên vật liệu, dụng cụ",
      "targetAudience": "Học sinh các lớp"
    }
  ]
}`;
}

export function buildPhase3Prompt(config: ConfigFormData): string {
  return `Hãy xây dựng PHỤ LỤC 3: KẾ HOẠCH GIÁO DỤC CỦA CÁ NHÂN GIÁO VIÊN (${config.teacherName}) môn ${config.subject} Khối ${config.grade} trong năm học ${config.academicYear} tại ${config.schoolName} (giảng dạy theo SGK Kết nối tri thức, nâng cao năng lực NLS theo CV 3456 và AI theo QĐ 2422).

Hãy trả về JSON có cấu trúc:
{
  "personalPlans": [
    {
      "stt": 1,
      "taskName": "Tên nhiệm vụ giảng dạy và giáo dục môn ${config.subject}",
      "timeFrame": "Khung thời gian thực hiện",
      "content": "Nội dung công việc chi tiết",
      "targets": "Chỉ tiêu phấn đấu cụ thể",
      "measures": "Biện pháp thực hiện hiệu quả"
    }
  ],
  "selfTraining": {
    "professionalStudy": "Nội dung tự học bồi dưỡng thường xuyên theo SGK Kết nối tri thức môn ${config.subject}",
    "itAndAiUpskilling": "Kế hoạch nâng cao năng lực CNTT (CV 3456) và ứng dụng AI (QĐ 2422)",
    "homeroomWork": "Công tác chủ nhiệm và phối hợp phụ huynh",
    "extraDuties": "Các nhiệm vụ kiêm nhiệm khác"
  }
}`;
}
