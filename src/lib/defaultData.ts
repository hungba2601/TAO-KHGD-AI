import {
  ConfigFormData,
  Appendix1Data,
  Appendix2Data,
  Appendix3Data,
  PersonalPlanData,
  TeacherPlanItem,
  TeacherSelfTraining,
  PlanData,
  SchoolType,
  CurriculumItem
} from '../types';
import { getCurriculumBySubjectAndGrade } from './curriculum';
import { applyUploadedNlsAiToEnglishCurriculum } from './fileParser';

export const SUBJECTS_BY_SCHOOL_TYPE: Record<SchoolType, string[]> = {
  primary: [
    'Toán',
    'Tiếng Việt',
    'Tiếng Anh',
    'Tự nhiên và Xã hội',
    'Lịch sử và Địa lý',
    'Khoa học',
    'Tin học và Công nghệ',
    'Đạo đức',
    'Âm nhạc',
    'Mỹ thuật',
    'Giáo dục thể chất',
    'Hoạt động trải nghiệm'
  ],
  secondary: [
    'Tin học',
    'Tiếng Anh',
    'Toán',
    'Ngữ văn',
    'Khoa học tự nhiên',
    'Lịch sử và Địa lí',
    'Công nghệ',
    'Giáo dục công dân',
    'Âm nhạc',
    'Mĩ thuật',
    'Giáo dục thể chất',
    'Hoạt động trải nghiệm, hướng nghiệp',
    'Giáo dục địa phương'
  ],
  high_school: [
    'Tin học',
    'Tiếng Anh',
    'Toán',
    'Ngữ văn',
    'Vật lí',
    'Hóa học',
    'Sinh học',
    'Lịch sử',
    'Địa lí',
    'Công nghệ',
    'Giáo dục kinh tế và pháp luật',
    'Âm nhạc',
    'Mĩ thuật',
    'Giáo dục thể chất',
    'Giáo dục quốc phòng và an ninh',
    'Hoạt động trải nghiệm, hướng nghiệp',
    'Giáo dục địa phương'
  ],
  multi_level: [
    'Tin học',
    'Tiếng Anh',
    'Toán',
    'Ngữ văn / Tiếng Việt',
    'Khoa học tự nhiên',
    'Lịch sử và Địa lí',
    'Công nghệ',
    'Vật lí',
    'Hóa học',
    'Sinh học',
    'Giáo dục công dân',
    'Hoạt động trải nghiệm, hướng nghiệp'
  ]
};

export const GRADES_BY_SCHOOL_TYPE: Record<SchoolType, string[]> = {
  primary: ['1', '2', '3', '4', '5'],
  secondary: ['6', '7', '8', '9'],
  high_school: ['10', '11', '12'],
  multi_level: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
};

export const INITIAL_CONFIG: ConfigFormData = {
  schoolType: 'secondary',
  governingBody: 'UBND PHƯỜNG AN NHƠN',
  schoolName: 'TRƯỜNG THCS AN NHƠN',
  principalName: 'Phạm Dương Hoàng Dũng',
  departmentName: 'TỔ CÔNG NGHỆ - TIN',
  departmentHead: 'Nguyễn Phi Hùng',
  teacherName: 'Nguyễn Phi Hùng',
  academicYear: '2026 - 2027',
  term1Start: '2025-09-05',
  term1End: '2026-01-15',
  term2Start: '2026-01-19',
  term2End: '2026-05-25',
  grade: '8',
  subject: 'Tin học',
  totalClasses: 14,
  totalStudents: 621,
  teachersCollege: 0,
  teachersUniversity: 5,
  teachersMasterDoc: 0,
  evalExcellent: 5,
  evalGood: 0,
  evalPass: 0,
  evalFail: 0,
  notes: 'Đẩy mạnh chuyển đổi số trong giáo dục, Nội dung giáo dục giáo dục trí tuệ nhân tạo (AI) cho học sinh phổ thông và tích hợp giáo dục STEM vào các bài học theo định hướng CV 5512 & CV 3456 và QĐ 2422.',
  attachedFiles: []
};

// Chuẩn hóa 100% tên bài học và Yêu cầu cần đạt (YCCĐ) theo SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG & TIẾNG ANH GLOBAL SUCCESS - ĐỦ 35 TUẦN THỰC HỌC (CT GDPT 2018)
export function getSubjectCurriculum(subject: string, grade: string, schoolType: SchoolType): CurriculumItem[] {
  return getCurriculumBySubjectAndGrade(subject, grade, schoolType);
}


export function getDefaultEquipments(subject: string, grade: string, schoolType: SchoolType) {
  const s = subject.toLowerCase().trim();
  const g = grade.trim();

  if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it')) {
    return [
      {
        id: 'eq-1',
        stt: 1,
        equipmentName: `Dàn máy vi tính cấu hình cao kết nối mạng LAN / Internet tốc độ cao (Phòng Tin học Lớp ${g})`,
        quantity: '45 máy/phòng',
        experiments: 'Thực hành bảng tính Excel, lọc sắp xếp dữ liệu, lập trình trực quan Scratch/Python, kiểm tra trực tuyến',
        notes: 'TT 38/2021/TT-BGDĐT'
      },
      {
        id: 'eq-2',
        stt: 2,
        equipmentName: 'Bộ Kit thực hành Robotics & Lập trình Vi điều khiển STEM (Arduino, Micro:bit, cảm biến ánh sáng, độ ẩm)',
        quantity: '08 bộ/phòng',
        experiments: 'Thực hành lắp ráp mô hình IoT, hệ thống đèn tự động thông minh và cánh tay robot',
        notes: 'Phục vụ dự án STEM Tin học'
      },
      {
        id: 'eq-3',
        stt: 3,
        equipmentName: 'Màn hình tương tác thông minh 75 inch, camera hội thảo và hệ thống âm thanh trợ giảng',
        quantity: '01 bộ/phòng',
        experiments: 'Trình chiếu bài giảng số, hướng dẫn thao tác mẫu và demo sản phẩm lập trình',
        notes: 'Thiết bị số hiện đại'
      },
      {
        id: 'eq-4',
        stt: 4,
        equipmentName: 'Tài khoản phần mềm LMS, công cụ AI trải nghiệm (EduPlan AI / Canva Edu) và hệ thống thi trực tuyến',
        quantity: 'Toàn trường',
        experiments: 'Giao bài tập số, trải nghiệm công cụ AI tạo sinh và kiểm tra đánh giá tự động',
        notes: 'Bản quyền số'
      }
    ];
  }

  if (s.includes('tiếng anh') || s.includes('ngoại ngữ') || s.includes('english')) {
    return [
      {
        id: 'eq-1',
        stt: 1,
        equipmentName: `Hệ thống phòng Lab Ngoại ngữ thông minh lớp ${g}: Tai nghe Headphone chống ồn có micro, máy tính chủ điều khiển`,
        quantity: '45 bộ/phòng',
        experiments: 'Luyện phát âm chuẩn bản xứ, thực hành hội thoại theo cặp và kiểm tra nghe trực tuyến',
        notes: 'TT 38/2021/TT-BGDĐT'
      },
      {
        id: 'eq-2',
        stt: 2,
        equipmentName: `Bộ thẻ từ Flashcard, tranh ảnh tình huống giao tiếp theo SGK Tiếng Anh Global Success Lớp ${g}`,
        quantity: '04 bộ/khối',
        experiments: 'Hoạt động Warm-up, trò chơi từ vựng và đóng vai theo tình huống giao tiếp thực tế',
        notes: 'SGK chuẩn Bộ GD&ĐT'
      },
      {
        id: 'eq-3',
        stt: 3,
        equipmentName: 'Ứng dụng Luyện phát âm AI (EduPlan Voice AI / ELSA Speak) và Nền tảng học liệu số tương tác',
        quantity: 'Toàn trường',
        experiments: 'Tự học có hướng dẫn, nhận dạng giọng nói, phát hiện và chỉnh sửa ngữ âm tức thời',
        notes: 'Bản quyền số'
      }
    ];
  }

  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    return [
      {
        id: 'eq-1',
        stt: 1,
        equipmentName: `Bộ dụng cụ Điền kinh chuẩn Lớp ${g}: Bàn đạp xuất phát, cờ lệnh, đồng hồ bấm giây kỹ thuật số, dây đích`,
        quantity: '04 bộ/trường',
        experiments: 'Thực hành kỹ thuật chạy cự li ngắn 60m/100m và chạy cự li trung bình',
        notes: 'TT 38/2021/TT-BGDĐT'
      },
      {
        id: 'eq-2',
        stt: 2,
        equipmentName: 'Bộ dụng cụ Nhảy cao: Cột nhảy cao chia vạch, xà nệm mút tiếp đất an toàn (dày 40-50cm)',
        quantity: '02 bộ/khu',
        experiments: 'Thực hành kỹ thuật Nhảy cao kiểu bước qua và tiếp đất an toàn',
        notes: 'Tiêu chuẩn an toàn thể thao'
      },
      {
        id: 'eq-3',
        stt: 3,
        equipmentName: 'Bộ bóng ném cao su 150g và thước dây đo thành tích (50m)',
        quantity: '30 quả/khóa',
        experiments: 'Thực hành kỹ thuật ném bóng xa có đà và ném bóng trúng đích',
        notes: 'Đạt chuẩn thi đấu'
      },
      {
        id: 'eq-4',
        stt: 4,
        equipmentName: 'Dụng cụ Thể thao tự chọn: Bóng đá tiêu chuẩn số 4/5 (20 quả), áo pitch phân đội, khung thành mini, còi thể thao',
        quantity: '04 bộ/môn',
        experiments: 'Tập luyện kỹ chiến thuật bóng đá, đá phạt, phối hợp nhóm và thi đấu giao hữu',
        notes: 'TT 38/2021/TT-BGDĐT'
      }
    ];
  }

  // General default
  return [
    {
      id: 'eq-1',
      stt: 1,
      equipmentName: `Bộ tranh ảnh, bản đồ giáo khoa, học liệu số chuyên ngành môn ${subject} Lớp ${g}`,
      quantity: '04 bộ/môn',
      experiments: 'Minh họa nội dung các bài học cốt lõi',
      notes: 'TT 38/2021/TT-BGDĐT'
    },
    {
      id: 'eq-2',
      stt: 2,
      equipmentName: 'Hệ thống thiết bị số: Máy chiếu / Màn hình TV tương tác, micro không dây, loa trợ giảng',
      quantity: '01 bộ/lớp',
      experiments: 'Giảng dạy tương tác đa phương tiện, trình chiếu tư liệu số',
      notes: 'Trang bị phòng học'
    },
    {
      id: 'eq-3',
      stt: 3,
      equipmentName: 'Tài khoản phần mềm LMS và ngân hàng câu hỏi trắc nghiệm số hóa',
      quantity: '01 gói/trường',
      experiments: 'Tổ chức kiểm tra thường xuyên và ôn tập trực tuyến',
      notes: 'Nền tảng số'
    }
  ];
}

export function getDefaultClassrooms(schoolType: SchoolType) {
  return [
    {
      id: 'cr-1',
      stt: 1,
      roomName: 'Phòng học bộ môn Tin học & Không gian STEM - AI',
      quantity: '02 phòng',
      features: 'Mỗi phòng có 45 máy vi tính kết nối mạng nội bộ tốc độ cao, điều hòa nhiệt độ, máy chiếu tương tác và khu vực bàn tròn lắp ráp mô hình Robotics',
      notes: 'Hoạt động liên tục các ngày trong tuần'
    },
    {
      id: 'cr-2',
      stt: 2,
      roomName: 'Phòng học Ngoại ngữ thông minh / Smart Lab',
      quantity: '02 phòng',
      features: 'Hệ thống cabin cách âm, tai nghe micro chất lượng cao, màn hình cảm ứng 86 inch và phần mềm tương tác lớp học đa kênh',
      notes: 'Phục vụ các tiết thực hành Nghe - Nói và thi Speaking'
    },
    {
      id: 'cr-3',
      stt: 3,
      roomName: 'Phòng học bộ môn Khoa học tự nhiên / Thí nghiệm',
      quantity: '02 phòng',
      features: 'Được trang bị đầy đủ hệ thống cấp thoát nước, điện an toàn tại từng bàn học sinh, tủ hút mùi, bồn rửa chuyên dụng và bộ sơ cứu y tế đạt chuẩn',
      notes: 'Đạt chuẩn Thông tư 14/2020/TT-BGDĐT'
    },
    {
      id: 'cr-4',
      stt: 4,
      roomName: 'Nhà tập đa năng & Sân bãi Thể dục thể thao',
      quantity: '01 khu',
      features: 'Mặt sân phủ thảm cao su chống trơn trượt, lưới bóng chuyền, sân cầu lông, bàn bóng bàn, đệm nhảy cao, cột bóng rổ tiêu chuẩn',
      notes: 'Phục vụ GDTC và hoạt động ngoại khóa'
    }
  ];
}

export function getDefaultAssessments(grade: string, subject: string) {
  const s = (subject || '').toLowerCase().trim();
  const g = grade.trim();
  const isEn = s.includes('tiếng anh') || s.includes('ngoại ngữ') || s.includes('english') || s.includes('tieng anh');

  if (isEn) {
    return [
      {
        id: 'as-1',
        stt: 1,
        assessmentName: `Mid-term Test 1 (English ${g})`,
        time: '45 minutes',
        week: 'Week 9',
        form: 'Written Test (Listening, Language, Reading, Writing) & Speaking Test (70% - 30%)',
        units: 'Knowledge and language skills covered in Units 1 to 5 (Global Success SGK)',
        requirements: 'Assess 4 communicative skills (Listening, Speaking, Reading, Writing) aligned with CEFR & MOET matrix standards.'
      },
      {
        id: 'as-2',
        stt: 2,
        assessmentName: `End-of-Term 1 Test (English ${g})`,
        time: '45 minutes / 60 minutes',
        week: 'Week 18',
        form: 'Standardized Semester Examination (4 Skills Assessment: Listening, Reading, Writing, Speaking)',
        units: 'Comprehensive curriculum covered in Term 1 (Units 1 - 6 for Secondary/High School / Units 1 - 10 for Primary)',
        requirements: 'Evaluate Term 1 learning outcomes and communicative language competencies of students.'
      },
      {
        id: 'as-3',
        stt: 3,
        assessmentName: `Mid-term Test 2 (English ${g})`,
        time: '45 minutes',
        week: 'Week 26',
        form: 'Written Test & Project Presentation / Speaking Interaction',
        units: 'Knowledge and skills covered in Term 2 (Units 7 to 9 / Units 11 to 15)',
        requirements: 'Evaluate language retention, speaking fluency, and problem-solving skills in English.'
      },
      {
        id: 'as-4',
        stt: 4,
        assessmentName: `End-of-Year Test / Final Examination (English ${g})`,
        time: '45 minutes / 60 minutes',
        week: 'Week 35',
        form: 'Standardized School-wide Final Examination (4 Skills + Grammar & Vocabulary)',
        units: 'Key language focus of Term 2 and overall core competence of the school year',
        requirements: 'Comprehensive assessment of year-end English proficiency as basis for grade progression and completion.'
      }
    ];
  }

  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    return [
      {
        id: 'as-1',
        stt: 1,
        assessmentName: `Kiểm tra, đánh giá giữa Học kỳ 1 (GDTC ${g})`,
        time: '45 phút (02 tiết)',
        week: 'Tuần 9',
        form: 'Thực hành kiểm tra kỹ năng động tác bài thể dục liên hoàn hoặc Chạy ngắn 60m',
        units: 'Đội hình đội ngũ, Bài thể dục liên hoàn (32 động tác), Chạy cự li ngắn',
        requirements: 'Đánh giá mức độ thuộc động tác, biên độ nhịp nhàng hoặc thành tích chạy 60m theo chuẩn Bộ GD&ĐT.'
      },
      {
        id: 'as-2',
        stt: 2,
        assessmentName: `Kiểm tra, đánh giá cuối Học kỳ 1 (GDTC ${g})`,
        time: '45 phút (02 tiết)',
        week: 'Tuần 18',
        form: 'Thực hành kiểm tra kỹ thuật môn thể thao tự chọn (Bóng đá/Bóng rổ/Cầu lông) hoặc Chạy bền',
        units: 'Kỹ thuật dẫn bóng, đá bóng, phối hợp chuyền bóng hoặc Chạy cự li trung bình',
        requirements: 'Đánh giá kỹ năng thực hành thể thao và sự phát triển sức bền theo chuẩn CT GDPT 2018.'
      },
      {
        id: 'as-3',
        stt: 3,
        assessmentName: `Kiểm tra, đánh giá giữa Học kỳ 2 (GDTC ${g})`,
        time: '45 phút (02 tiết)',
        week: 'Tuần 26',
        form: 'Thực hành kiểm tra kỹ thuật Nhảy cao kiểu bước qua hoặc Ném bóng xa có đà',
        units: 'Kỹ thuật chạy đà, giậm nhảy, bay trên không, tiếp đất an toàn hoặc Chạy đà 4 bước ném bóng',
        requirements: 'Đánh giá kỹ thuật động tác đúng quy chuẩn và mức thành tích đạt được theo lứa tuổi.'
      },
      {
        id: 'as-4',
        stt: 4,
        assessmentName: `Kiểm tra, đánh giá cuối Học kỳ 2 & Cả năm (GDTC ${g})`,
        time: '45 phút (02 tiết)',
        week: 'Tuần 35',
        form: 'Thực hành kiểm tra tổng hợp kỹ năng vận động và Tiêu chuẩn rèn luyện thể lực học sinh',
        units: 'Chạy 30m xuất phát cao, Bật xa tại chỗ, Gập bụng 30s, Chạy con thoi 4x10m (QĐ 53/2008/QĐ-BGDĐT)',
        requirements: 'Đánh giá toàn diện kết quả rèn luyện thể chất cả năm học và xếp loại thể lực học sinh theo chuẩn Bộ GD&ĐT.'
      }
    ];
  }

  return [
    {
      id: 'as-1',
      stt: 1,
      assessmentName: `Kiểm tra, đánh giá giữa Học kỳ 1 (${subject} ${grade})`,
      time: '45 phút',
      week: 'Tuần 9',
      form: 'Viết trên giấy kết hợp trắc nghiệm khách quan (70%) và tự luận/thực hành (30%)',
      units: 'Toàn bộ mạch kiến thức, kỹ năng đã học từ Tuần 1 đến hết Tuần 8 (Theo SGK Kết nối tri thức)',
      requirements: 'Đánh giá mức độ đạt chuẩn kiến thức kỹ năng; năng lực tư duy và vận dụng kiến thức vào thực tiễn theo CT GDPT 2018.'
    },
    {
      id: 'as-2',
      stt: 2,
      assessmentName: `Kiểm tra, đánh giá cuối Học kỳ 1 (${subject} ${grade})`,
      time: '45 phút / 90 phút',
      week: 'Tuần 18',
      form: 'Đề kiểm tra chuẩn hóa tập trung toàn khối theo ma trận chuẩn của Bộ GD&ĐT',
      units: 'Toàn bộ nội dung chương trình Học kỳ 1 theo SGK Kết nối tri thức',
      requirements: 'Đánh giá tổng kết kết quả rèn luyện và học tập HK1 theo định hướng phát triển phẩm chất, năng lực học sinh.'
    },
    {
      id: 'as-3',
      stt: 3,
      assessmentName: `Kiểm tra, đánh giá giữa Học kỳ 2 (${subject} ${grade})`,
      time: '45 phút',
      week: 'Tuần 26',
      form: 'Thực hành / Báo cáo sản phẩm dự án / Viết',
      units: 'Mạch kiến thức từ Tuần 19 đến hết Tuần 25 theo SGK Kết nối tri thức',
      requirements: 'Kiểm tra kỹ năng thực hành giải quyết vấn đề và năng lực làm việc nhóm sáng tạo.'
    },
    {
      id: 'as-4',
      stt: 4,
      assessmentName: `Kiểm tra, đánh giá cuối Học kỳ 2 & Cả năm (${subject} ${grade})`,
      time: '45 phút / 90 phút',
      week: 'Tuần 35',
      form: 'Đề kiểm tra chuẩn hóa cấp trường theo ma trận chuẩn của Bộ GD&ĐT',
      units: 'Nội dung cốt lõi của Học kỳ 2 và kiến thức trọng tâm cả năm học',
      requirements: 'Đánh giá toàn diện kết quả học tập cả năm, làm căn cứ xét hoàn thành chương trình môn học.'
    }
  ];
}

export function generateMockPlan(config: ConfigFormData): PlanData {
  const subjectName = config.subject;
  const gradeNum = config.grade;
  const isEn = config.subject.toLowerCase().includes('tiếng anh') || config.subject.toLowerCase().includes('english') || config.subject.toLowerCase().includes('tieng anh');

  // 1. Check curriculum generation strategy
  let curriculum: CurriculumItem[] = [];

  if (isEn) {
    // ĐẶC QUYỀN MÔN TIẾNG ANH (GLOBAL SUCCESS):
    // Luôn giữ nguyên 100% cấu trúc 35 tuần chuẩn SGK Global Success từ data hệ thống.
    // Chỉ đọc và trích xuất nội dung NLS & AI từ file tải lên (nếu có) để áp dụng vào từng bài học.
    const standardCurriculum = getSubjectCurriculum(config.subject, config.grade, config.schoolType);
    if (config.attachedFiles && config.attachedFiles.length > 0) {
      curriculum = applyUploadedNlsAiToEnglishCurriculum(
        standardCurriculum,
        config.attachedFiles,
        config.grade,
        config.schoolType
      );
    } else {
      curriculum = standardCurriculum;
    }
  } else {
    // CÁC MÔN HỌC KHÁC: Nếu người dùng tải lên file PPCT thì dùng PPCT từ file tải lên
    const fileWithCurriculum = config.attachedFiles?.find(
      (f) => f.parsedCurriculum && f.parsedCurriculum.length > 0
    );

    if (fileWithCurriculum && fileWithCurriculum.parsedCurriculum) {
      curriculum = fileWithCurriculum.parsedCurriculum;
    } else {
      // Generate 100% genuine curriculum with authentic lesson names and YCCD
      curriculum = getSubjectCurriculum(config.subject, config.grade, config.schoolType);
    }
  }

  // Appendix 2 Activities & STEM
  const activities: Appendix2Data['activities'] = isEn
    ? [
        {
          id: 'act-1',
          stt: 1,
          title: `English Festival & Digital Language Showcase (Grade ${gradeNum}) - Academic Year ${config.academicYear}`,
          requirements: `Apply Global Success Grade ${gradeNum} communicative skills to design digital presentations and speaking performances.`,
          periods: 4,
          timeline: 'November (Week 11)',
          location: 'School Hall & English Lab',
          host: `Head of Department (${config.departmentHead || config.teacherName})`,
          collaborate: 'Youth Union & Homeroom Teachers',
          conditions: 'Stage, sound system, smart screens, display booths',
          targetAudience: `All Grade ${gradeNum} students`
        },
        {
          id: 'act-2',
          stt: 2,
          title: 'Interactive Workshop: "AI-Powered English Learning & Smart Digital Tools for Students"',
          requirements: 'Equip students with digital language skills, AI chatbot practice, and safe online communication ethics.',
          periods: 3,
          timeline: 'January (Week 19)',
          location: 'Digital Language Lab / LMS Online',
          host: `English Teacher (${config.teacherName})`,
          collaborate: 'IT Department',
          conditions: 'Interactive Smartboard, student computers & internet',
          targetAudience: `Students of Grade ${gradeNum}`
        }
      ]
    : [
        {
          id: 'act-1',
          stt: 1,
          title: `Ngày hội Sáng tạo STEM & Chuyển đổi số môn ${subjectName} Khối ${gradeNum} - Năm học ${config.academicYear}`,
          requirements: `Vận dụng kiến thức SGK Kết nối tri thức môn ${subjectName} để thiết kế sản phẩm số, giải quyết các vấn đề thực tiễn.`,
          periods: 4,
          timeline: 'Tháng 11/2025 (Tuần 11)',
          location: 'Sân trường & Hội trường đa năng',
          host: `Tổ trưởng ${config.departmentName}`,
          collaborate: 'Đoàn Thanh niên, GVCN các lớp khối ' + gradeNum,
          conditions: 'Bàn ghế trưng bày, hệ thống âm thanh, pano áp phích',
          targetAudience: `Toàn bộ học sinh khối ${gradeNum}`
        },
        {
          id: 'act-2',
          stt: 2,
          title: 'Hội thảo: "Ứng dụng Trí tuệ nhân tạo (AI) và Công nghệ số trong Học tập an toàn"',
          requirements: 'Trang bị cho học sinh kỹ năng số, văn hóa ứng xử trên không gian mạng và cách khai thác công cụ AI hỗ trợ tự học.',
          periods: 3,
          timeline: 'Tháng 01/2026 (Tuần 19)',
          location: 'Phòng Đa năng / Trực tuyến LMS',
          host: `Giáo viên bộ môn (${config.teacherName})`,
          collaborate: 'Tổ Công nghệ thông tin',
          conditions: 'Màn hình LED lớn, máy tính thực hành',
          targetAudience: `Học sinh các lớp`
        }
      ];

  const stemProjects: Appendix2Data['stemProjects'] = isEn
    ? [
        {
          id: 'stem-1',
          stt: 1,
          title: `Interdisciplinary STEM Project: "Designing Interactive English Digital Flashcards & Vocabulary Game"`,
          requirements: `Integrate IT and English knowledge to program language learning games using Scratch/AI tools.`,
          periods: 3,
          timeline: 'Week 12 - Term 1',
          location: 'Computer Lab / STEM Room',
          host: `Teacher: ${config.teacherName}`,
          collaborate: 'Grade ' + gradeNum + ' Student Groups',
          conditions: 'Computers, Scratch/Python programming software, headphones',
          targetAudience: 'Classes in charge'
        },
        {
          id: 'stem-2',
          stt: 2,
          title: `STEM & AI Project: "AI English Chatbot & Pronunciation Practice Assistant"`,
          requirements: `Build and train a basic AI chatbot with prompts and voice recognition for daily dialogue practice.`,
          periods: 4,
          timeline: 'Week 31 - Term 2',
          location: 'STEM & AI Lab',
          host: `Teacher: ${config.teacherName}`,
          collaborate: 'Informatics - English Department',
          conditions: 'Computers, microphones, AI learning platforms',
          targetAudience: 'Classes in charge'
        }
      ]
    : [
        {
          id: 'stem-1',
          stt: 1,
          title: `Dự án STEM: "Thiết kế Trò chơi Học tập Tương tác / Sản phẩm số thông minh"`,
          requirements: `Vận dụng kiến thức bài học SGK Kết nối tri thức để lập trình và thiết kế sản phẩm ứng dụng.`,
          periods: 3,
          timeline: 'Tuần 12 - Học kỳ 1',
          location: 'Phòng học bộ môn Tin học',
          host: `GV bộ môn: ${config.teacherName}`,
          collaborate: 'Nhóm học sinh các lớp khối ' + gradeNum,
          conditions: 'Dàn máy tính, phần mềm lập trình Scratch/Python',
          targetAudience: 'Học sinh các lớp giảng dạy'
        },
        {
          id: 'stem-2',
          stt: 2,
          title: `Dự án STEM & AI: "Hệ thống Cảnh báo Thông minh ứng dụng Cảm biến và Vi điều khiển"`,
          requirements: `Chế tạo mạch điều khiển cảm biến thông minh kết nối máy tính cảnh báo an toàn.`,
          periods: 4,
          timeline: 'Tuần 31 - Học kỳ 2',
          location: 'Phòng thực hành STEM',
          host: `GV bộ môn: ${config.teacherName}`,
          collaborate: 'Tổ Công nghệ - Tin học',
          conditions: 'Bộ Kit vi điều khiển, cảm biến, máy tính',
          targetAudience: 'Học sinh các lớp giảng dạy'
        }
      ];

  // Appendix 3: Kế hoạch Giáo dục của Giáo viên (Chuẩn CV 5512)
  const teachingPlan = curriculum.map((c, index) => ({
    id: `tp-${c.id || index + 1}`,
    stt: index + 1,
    lessonName: c.lessonName,
    periods: c.periods,
    timeline: typeof c.week === 'number' ? (isEn ? `Week ${c.week}` : `Tuần ${c.week}`) : (isEn ? String(c.week).replace(/tuần\s*/i, 'Week ') : c.week),
    equipment: c.equipment || (isEn ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, Flashcards, LMS' : 'Máy tính, máy chiếu/Tivi thông minh, SGK, phần mềm dạy học'),
    location: c.location || (isEn ? 'English Language Lab / Classroom' : (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn')),
    digitalCompetency: c.digitalCompetency || '',
    nlsCode: c.nlsCode || '',
    aiCode: c.aiCode || '',
    notes: c.notes || ''
  }));

  // Phụ lục: Kế hoạch Cá nhân (Nhiệm vụ sư phạm & AI)
  const personalPlans: TeacherPlanItem[] = isEn
    ? [
        {
          id: 'pp-1',
          stt: 1,
          taskName: `Execute the English Teaching Plan (Grade ${gradeNum})`,
          timeFrame: 'Throughout the academic year (35 weeks)',
          content: `Deliver Grade ${gradeNum} English curriculum compliant with CT GDPT 2018 (Global Success); foster communicative competencies, digital literacy, and AI-driven autonomous learning.`,
          targets: '100% lesson plans prepared according to CV 5512/2345 standards; over 98% students meeting proficiency standards; over 35% achieving Good/Excellent grades.',
          measures: 'Implement student-centered communicative language teaching, integrate AI tools for differentiated learning, and use interactive multimedia flashcards.'
        },
        {
          id: 'pp-2',
          stt: 2,
          taskName: 'Regular & Periodic English Assessment',
          timeFrame: 'According to the school academic schedule (Weeks 9, 18, 26, 35)',
          content: 'Design standardized test matrices, specification grids, and 4-skill evaluation papers; provide timely feedback and diagnostic error analysis.',
          targets: '100% assessments conducted on schedule; objective, transparent grading and continuous digital portfolio tracking.',
          measures: 'Utilize digital question banks, speaking interaction rubrics, and project presentation assessments.'
        },
        {
          id: 'pp-3',
          stt: 3,
          taskName: 'Advanced English Training & Remedial Student Tutoring',
          timeFrame: 'From October 2025 to April 2026',
          content: 'Nurture high-performing students for English Competitions; conduct remedial tutoring sessions for students requiring language foundation reinforcement.',
          targets: 'Win at least 02 District/City awards in English competitions; 100% remedial students improve grades and achieve completion.',
          measures: 'Develop specialized advanced topic modules; establish peer tutoring pairs and maintain close communication with parents.'
        },
        {
          id: 'pp-4',
          stt: 4,
          taskName: 'Professional Lesson Study & Department Meetings',
          timeFrame: 'Every 2 weeks',
          content: 'Actively participate in English department meetings, inter-school workshops, open lesson observations, and pedagogical discussions.',
          targets: 'Deliver at least 02 open showcase lessons; submit 01 innovative pedagogical initiative recognized by the school evaluation council.',
          measures: 'Research MOET communicative guidance, share digital teaching materials, and adopt generative AI workflows for lesson preparation.'
        }
      ]
    : [
        {
          id: 'pp-1',
          stt: 1,
          taskName: 'Thực hiện kế hoạch giảng dạy môn ' + subjectName,
          timeFrame: 'Suốt năm học (35 tuần thực học)',
          content: `Giảng dạy đảm bảo chuẩn kiến thức kỹ năng môn ${subjectName} lớp ${gradeNum} theo SGK; tích hợp giáo dục đạo đức, kỹ năng sống và năng lực số cho học sinh.`,
          targets: '100% tiết dạy có giáo án chất lượng theo CV 5512/2345; 98% học sinh đạt chuẩn yêu cầu trở lên; trên 35% học sinh xếp loại Tốt/Xuất sắc.',
          measures: 'Đổi mới phương pháp dạy học lấy học sinh làm trung tâm, ứng dụng công cụ AI hỗ trợ phân hóa đối tượng.'
        },
        {
          id: 'pp-2',
          stt: 2,
          taskName: 'Công tác Kiểm tra, đánh giá thường xuyên & định kỳ',
          timeFrame: 'Theo biên chế năm học của nhà trường',
          content: 'Xây dựng ma trận, bảng đặc tả và đề kiểm tra chuẩn hóa; chấm chữa bài kịp thời, nhận xét chi tiết sự tiến bộ của từng học sinh.',
          targets: '100% bài kiểm tra đúng tiến độ, lưu trữ hồ sơ sổ điểm điện tử minh bạch, khách quan.',
          measures: 'Ứng dụng ngân hàng câu hỏi trắc nghiệm số hóa, đa dạng hóa hình thức đánh giá qua sản phẩm dự án và thuyết trình.'
        },
        {
          id: 'pp-3',
          stt: 3,
          taskName: 'Bồi dưỡng học sinh giỏi & Phụ đạo học sinh cần hỗ trợ',
          timeFrame: 'Từ tháng 10/2025 đến tháng 04/2026',
          content: 'Phát hiện nhân tố có năng khiếu để bồi dưỡng thi HSG các cấp; tổ chức kèm cặp phụ đạo nhóm học sinh còn hạn chế kiến thức.',
          targets: 'Đạt tối thiểu 02 giải HSG cấp Quận/Huyện; 100% học sinh diện phụ đạo cải thiện điểm số và hoàn thành môn học.',
          measures: 'Xây dựng chuyên đề nâng cao riêng biệt; phân công học tập đôi bạn cùng tiến và liên hệ chặt chẽ với phụ huynh.'
        },
        {
          id: 'pp-4',
          stt: 4,
          taskName: 'Sinh hoạt tổ chuyên môn & Nghiên cứu bài học (SHCM theo NCBH)',
          timeFrame: 'Định kỳ 2 tuần/lần',
          content: 'Tham gia đầy đủ các buổi sinh hoạt chuyên môn, thao giảng cụm trường, đóng góp ý kiến xây dựng bài học minh họa.',
          targets: 'Thực hiện ít nhất 02 tiết thao giảng chuyên đề cấp trường/cụm; viết 01 sáng kiến kinh nghiệm được hội đồng công nhận.',
          measures: 'Chủ động nghiên cứu tài liệu hướng dẫn của Bộ GD&ĐT, chia sẻ kinh nghiệm giảng dạy số và ứng dụng CNTT.'
        }
      ];

  const selfTraining: TeacherSelfTraining = isEn
    ? {
        professionalStudy: `Self-study and complete 100% of TEMIS regular professional development modules for English with Good/Excellent ratings.`,
        itAndAiUpskilling: 'Participate in training courses on Generative AI in ELT (English Language Teaching), mastering prompt engineering, Canva for Education, LMS, and EduPlan AI tools.',
        homeroomWork: 'Execute homeroom teacher responsibilities diligently, organize creative English-infused class activities, foster student communication skills and positive classroom environment.',
        extraDuties: 'Strictly comply with school board assignments, actively participate in pedagogical competitions, English club activities, and community educational movements.'
      }
    : {
        professionalStudy: `Tự học và hoàn thành 100% các mô-đun bồi dưỡng thường xuyên môn ${subjectName} trên hệ thống TEMIS đạt kết quả Tốt.`,
        itAndAiUpskilling: 'Tham gia các khóa đào tạo về Trí tuệ nhân tạo tạo sinh (Generative AI) trong giáo dục, thành thạo thiết kế bài giảng tương tác trên Canva, LMS và EduPlan AI.',
        homeroomWork: 'Thực hiện nghiêm túc công tác quản lý nề nếp lớp, tổ chức các buổi sinh hoạt lớp sáng tạo, giáo dục kỹ năng giao tiếp và xây dựng lớp học hạnh phúc.',
        extraDuties: 'Chấp hành nghiêm sự phân công của Ban Giám hiệu, tham gia tích cực các phong trào thi đua dạy tốt - học tốt của ngành và địa phương.'
      };

  const otherTasks: Appendix1Data['otherTasks'] = isEn
    ? {
        advancedTraining: `Organize advanced English training for talented students in Grade ${gradeNum} with 2 sessions/week (starting from Week 4). Goal: achieving high results in District/City English Competitions.`,
        remedialTeaching: `Classify slow-progress students after Mid-term tests, providing remedial English tutoring 1 period/week on Thursday afternoons to consolidate core foundation.`,
        lessonStudyGroup: 'Professional lesson study group meetings every 2 weeks; focusing on communicative language teaching, digital tools & AI integration.',
        otherActivities: 'Organize English Speaking Club, English Festival, AI & Digital Fair, and school-wide extracurricular activities.'
      }
    : {
        advancedTraining: `Tổ chức bồi dưỡng đội tuyển Học sinh giỏi môn ${subjectName} khối ${gradeNum} với thời lượng 2 buổi/tuần (bắt đầu từ Tuần 4). Mục tiêu đạt giải cao tại kỳ thi chọn HSG cấp cơ sở.`,
        remedialTeaching: `Phân loại học sinh tiếp thu chậm sau bài kiểm tra GK1 và GK2 môn ${subjectName}, bố trí giáo viên phụ đạo tăng cường 1 tiết/tuần vào chiều thứ 5, giúp các em củng cố kiến thức nền tảng.`,
        lessonStudyGroup: 'Tổ chức sinh hoạt chuyên môn theo nghiên cứu bài học 02 tuần/lần; chú trọng đổi mới phương pháp giảng dạy, ứng dụng AI soạn giáo án điện tử và chia sẻ học liệu số trong cụm trường.',
        otherActivities: 'Tổ chức các hoạt động ngoại khóa, câu lạc bộ bộ môn, hội thi sáng tạo khoa học kỹ thuật cấp trường và tham gia đầy đủ các phong trào thi đua của ngành GD&ĐT.'
      };

  return {
    config,
    appendix1: {
      curriculum,
      equipments: getDefaultEquipments(config.subject, config.grade, config.schoolType),
      classrooms: getDefaultClassrooms(config.schoolType),
      assessments: getDefaultAssessments(config.grade, config.subject),
      otherTasks
    },
    appendix2: {
      activities,
      stemProjects
    },
    appendix3: {
      teachingPlan,
      selectiveTopics: [],
      otherDuties: {
        advancedTraining: otherTasks.advancedTraining,
        remedialTeaching: otherTasks.remedialTeaching,
        scienceResearch: isEn
          ? `Guide students in scientific research projects, STEM creations and digital AI applications.`
          : `Hướng dẫn học sinh nghiên cứu khoa học kỹ thuật, sáng tạo sản phẩm STEM và ứng dụng công nghệ số / AI cấp trường.`,
        extracurricularAndDuties: otherTasks.otherActivities
      }
    },
    personalPlan: {
      personalPlans,
      selfTraining
    },
    generatedAt: new Date().toLocaleString('vi-VN'),
    summary: `Kế hoạch Giáo dục & Dạy học môn ${subjectName} Khối ${gradeNum} - Năm học ${config.academicYear} được xây dựng hoàn chỉnh theo chuẩn SGK Kết nối tri thức / Global Success (CV 5512/BGDĐT-GDTrH & CV 2345/BGDĐT-GDTH), tích hợp giáo dục STEM và nâng cao năng lực số.`
  };
}
