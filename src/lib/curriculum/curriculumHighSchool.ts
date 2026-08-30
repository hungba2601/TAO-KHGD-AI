import { CurriculumItem, SchoolType } from '../../types';
import { getNlsCodeForSubjectLesson } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../constants/aiGuides';
import { getNlsCodeForEnglishLesson } from '../constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson } from '../constants/aiGuidesEn';
import { getTinHocHighSchoolCurriculum } from './curriculumInformatics';

export { getTinHocHighSchoolCurriculum };

export interface RawHighSchoolLesson {
  week: number;
  topic: string;
  name: string;
  periods: number;
  yccd: string;
  equipment: string;
  location: string;
  notes?: string;
}

// =========================================================================
// HELPER: TỰ ĐỘNG TẠO YCCĐ CHI TIẾT THEO CHUẨN CT GDPT 2018 CHO TỪNG BÀI THPT
// =========================================================================
export function generateHighSchoolYccd(subject: string, grade: string, lessonName: string): string {
  const s = subject.toLowerCase().trim();
  const name = lessonName.trim();
  const g = grade.trim();

  // ĐÁNH GIÁ ĐỊNH KỲ
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 1')) {
    return `- Đánh giá toàn diện mức độ đạt chuẩn kiến thức, kĩ năng và phẩm chất năng lực học sinh theo CT GDPT 2018 môn ${subject} Lớp ${g} từ Tuần 1 đến Tuần 8.\n- Phân hóa rõ rệt trình độ học sinh, làm căn cứ định hướng ôn luyện thi tốt nghiệp THPT và xét tuyển đại học.\n- Rèn luyện bản lĩnh phòng thi, tính trung thực, kỷ luật và kỹ năng quản lý thời gian làm bài thi trắc nghiệm - tự luận.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 1') || name.includes('Sơ kết HK1')) {
    return `- Đánh giá tổng hợp toàn diện kết quả học tập và rèn luyện môn ${subject} Lớp ${g} trong toàn bộ Học kỳ 1 theo ma trận đề chuẩn.\n- Đánh giá năng lực tư duy chuyên sâu, khả năng vận dụng kiến thức giải quyết vấn đề phức hợp; làm căn cứ điều chỉnh kế hoạch dạy học HK2.`;
  }
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 2')) {
    return `- Đánh giá mức độ tiếp thu các nội dung trọng tâm môn ${subject} Lớp ${g} từ Tuần 19 đến Tuần 25.\n- Giúp học sinh tự đánh giá năng lực, phát hiện các điểm yếu để kịp thời bổ sung tri thức trước kỳ thi tốt nghiệp / cuối năm.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 2') || name.includes('Tổng kết năm học')) {
    return `- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn ${subject} Lớp ${g} cả năm học.\n- Đánh giá sự trưởng thành về tư duy học thuật, năng lực tự học và hành trang vững chắc cho ngưỡng cửa đại học, nghề nghiệp.`;
  }

  // DỰ ÁN STEM & SẢN PHẨM
  if (name.includes('Dự án') || name.includes('STEM')) {
    return `- Vận dụng kiến thức chuyên sâu liên ngành (Toán - Kỹ thuật - Công nghệ - Khoa học) để nghiên cứu và chế tạo giải pháp thực tế trong: "${name}".\n- Thực hiện quy trình nghiên cứu khoa học kỹ thuật chuẩn mực, viết báo cáo khoa học và thuyết trình bảo vệ đề tài trước hội đồng.\n- Phát triển tư duy đổi mới sáng tạo, năng lực giải quyết vấn đề phức hợp và kỹ năng làm việc nhóm chuyên nghiệp.`;
  }

  // 1. TOÁN THPT (10 - 12)
  if (s.includes('toán') || s.includes('toan')) {
    if (name.includes('Mệnh đề') || name.includes('Tập hợp')) return `- Nắm vững định nghĩa mệnh đề toán học, mệnh đề phủ định, mệnh đề kéo theo; thực hiện các phép toán giao, hợp, hiệu của hai tập hợp.`;
    if (name.includes('Bất phương trình bậc nhất hai ẩn')) return `- Biểu diễn miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ; giải bài toán tối ưu quy hoạch tuyến tính.`;
    if (name.includes('Hệ thức lượng trong tam giác') || name.includes('Định lí Cosin') || name.includes('Định lí Sin')) return `- Vận dụng thành thạo định lí Cosin, định lí Sin và các công thức tính diện tích tam giác vào giải tam giác và đo đạc khoảng cách thực tế.`;
    if (name.includes('Vectơ') || name.includes('vectơ')) return `- Nắm vững khái niệm vectơ, hai vectơ cùng phương, cùng hướng, bằng nhau; thực hiện phép cộng, trừ, nhân vectơ với một số và tích vô hướng của hai vectơ.`;
    if (name.includes('Hàm số bậc hai') || name.includes('Tam thức bậc hai')) return `- Khảo sát và vẽ đồ thị hàm số bậc hai y = ax2 + bx + c; xét dấu tam thức bậc hai và giải bất phương trình bậc hai một ẩn.`;
    if (name.includes('Đại số tổ hợp') || name.includes('Nhị thức Newton') || name.includes('Quy tắc đếm')) return `- Vận dụng quy tắc cộng, quy tắc nhân, hoán vị, chỉnh hợp, tổ hợp và công thức khai triển nhị thức Newton vào giải toán và tính xác suất.`;
    if (name.includes('Phương pháp tọa độ trong mặt phẳng') || name.includes('Đường thẳng') || name.includes('Đường tròn') || name.includes('Ba đường conic')) return `- Lập phương trình tổng quát, tham số của đường thẳng; phương trình đường tròn; nhận dạng và viết phương trình chính tắc của Elip, Hyperbol, Parabol.`;
    if (name.includes('Lượng giác') || name.includes('Công thức lượng giác') || name.includes('Phương trình lượng giác')) return `- Nắm vững các công thức lượng giác (cộng, nhân đôi, biến đổi tích thành tổng/tổng thành tích); giải phương trình lượng giác cơ bản sin x = m, cos x = m.`;
    if (name.includes('Dãy số') || name.includes('Cấp số cộng') || name.includes('Cấp số nhân')) return `- Nắm định nghĩa, số hạng tổng quát, tính chất và công thức tính tổng n số hạng đầu của cấp số cộng, cấp số nhân; giải bài toán lãi suất ngân hàng.`;
    if (name.includes('Giới hạn') || name.includes('Hàm số liên tục')) return `- Nắm định nghĩa và các định lí về giới hạn của dãy số, giới hạn của hàm số tại một điểm, vô cực; xét tính liên tục của hàm số trên một khoảng.`;
    if (name.includes('Đạo hàm') || name.includes('đạo hàm')) return `- Nắm định nghĩa đạo hàm, ý nghĩa hình học/vật lí của đạo hàm; thuộc bảng công thức đạo hàm và viết phương trình tiếp tuyến của đồ thị hàm số.`;
    if (name.includes('Khảo sát') || name.includes('sự biến thiên') || name.includes('Cực trị') || name.includes('Tiệm cận')) return `- Khảo sát sự biến thiên và vẽ đồ thị hàm số bậc ba, hàm phân thức; tìm cực trị, giá trị lớn nhất - nhỏ nhất và đường tiệm cận đứng, tiệm cận ngang.`;
    if (name.includes('Mũ') || name.includes('Logarit') || name.includes('logarit')) return `- Nắm vững tính chất của lũy thừa, logarit; giải phương trình, bất phương trình mũ và logarit; ứng dụng vào mô hình tăng trưởng dân số, phân rã phóng xạ.`;
    if (name.includes('Nguyên hàm') || name.includes('Tích phân') || name.includes('tích phân')) return `- Nắm định nghĩa nguyên hàm, bảng nguyên hàm cơ bản; tính tích phân bằng phương pháp đổi biến số, từng phần; tính diện tích hình phẳng, thể tích khối tròn xoay.`;
    if (name.includes('Tọa độ trong không gian') || name.includes('Oxyz') || name.includes('Mặt cầu') || name.includes('Mặt phẳng')) return `- Thiết lập hệ tọa độ Oxyz; viết phương trình mặt cầu, mặt phẳng, đường thẳng trong không gian; tính khoảng cách và góc giữa các đối tượng hình học 3D.`;
    return `- Nắm vững chuẩn kiến thức chuyên sâu và phương pháp giải toán của bài học: "${name}" (SGK Kết nối tri thức Lớp ${g}).\n- Vận dụng linh hoạt công cụ toán học giải quyết các bài toán phân hóa cao và ứng dụng thực tiễn kỹ thuật.`;
  }

  // 2. NGỮ VĂN THPT (10 - 12)
  if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    if (name.includes('Đọc:') || name.includes('Thơ') || name.includes('Truyện') || name.includes('Kịch') || name.includes('Văn bản')) {
      return `- Phân tích sâu sắc giá trị nội dung tư tưởng, hình tượng nghệ thuật, phong cách tác giả và đặc trưng thể loại trong tác phẩm: "${name}".\n- Đánh giá được vị trí của tác phẩm trong tiến trình lịch sử văn học dân tộc và bối cảnh văn hóa - thời đại.\n- Phát triển năng lực thẩm mỹ, tư duy phản biện văn học và bồi dưỡng thế giới quan nhân văn sâu sắc.`;
    }
    if (name.includes('Viết:') || name.includes('Nghị luận')) {
      return `- Nắm vững kỹ thuật lập luận, xây dựng hệ thống luận điểm chặt chẽ, dẫn chứng xác đáng và văn phong nghị luận chuẩn mực cho: "${name}".\n- Thể hiện chính kiến, tư duy độc lập và quan điểm sống tích cực trước các vấn đề xã hội hoặc hiện tượng văn học.\n- Rèn luyện kỹ năng diễn đạt học thuật, cảm xúc chân thành và năng lực tạo lập văn bản thuyết phục.`;
    }
    return `- Đọc hiểu thành thạo các văn bản văn học, nghị luận và thông tin phức tạp của bài học: "${name}".\n- Phát triển kỹ năng giao tiếp học thuật, thuyết trình tự tin và đối thoại văn hóa tôn trọng đa chiều.`;
  }

  // 3. TIẾNG ANH THPT (10 - 12) - GLOBAL SUCCESS (8 TIẾT/UNIT)
  if (s.includes('tiếng anh') || s.includes('english') || s.includes('ngoại ngữ')) {
    if (name.includes('Getting Started')) {
      return `- Listen and read the introductory dialogue to activate topic background knowledge.\n- Identify key vocabulary, expressions and communicative context of the unit.\n- Develop initial communicative confidence and engagement through warm-up pairwork.`;
    }
    if (name.includes('Language')) {
      return `- Master advanced academic vocabulary, collocations and word forms of the unit topic.\n- Pronounce target sentence stress, rhythm and assimilation accurately in context.\n- Formulate and apply target grammatical structures in contextualized spoken and written drills.`;
    }
    if (name.includes('Reading')) {
      return `- Skim for main ideas and scan for specific details in authentic academic texts.\n- Deduce meaning of unfamiliar words from context and summarize paragraph content.\n- Develop critical reading analysis and evaluate arguments presented in the text.`;
    }
    if (name.includes('Speaking')) {
      return `- Express viewpoints, argue logically and discuss topic-related questions fluently.\n- Use functional phrases to justify opinions, agree, disagree, and negotiate ideas.\n- Deliver structured individual presentations or engage in dynamic group debates.`;
    }
    if (name.includes('Listening')) {
      return `- Listen to authentic lectures, interviews and conversations for gist and detailed information.\n- Identify speakers' attitudes, viewpoints, and implied meanings in complex audio.\n- Note down essential points to answer analytical comprehension questions accurately.`;
    }
    if (name.includes('Writing')) {
      return `- Plan, draft and edit a well-structured essay, article, formal letter or proposal.\n- Apply appropriate academic register, linking words, cohesive devices and complex syntax.\n- Demonstrate accurate spelling, punctuation and paragraph organisation.`;
    }
    if (name.includes('Communication') || name.includes('Culture') || name.includes('CLIL')) {
      return `- Explore cross-cultural perspectives, global citizenship topics and CLIL subjects.\n- Compare Vietnamese cultural practices with international traditions constructively.\n- Engage actively in real-life intercultural dialogues and communicative scenarios.`;
    }
    if (name.includes('Looking Back') || name.includes('Project')) {
      return `- Consolidate and self-evaluate vocabulary, phonetics and grammar mastery of the unit.\n- Present collaborative research projects using digital presentation slides, videos or artifacts.\n- Enhance autonomous learning, teamwork and public speaking proficiency.`;
    }
    if (name.includes('Review')) {
      return `- Synthesize language items (phonetics, vocabulary, grammar) and skills across units.\n- Practice integrated exam-oriented reading, listening, writing and speaking tasks.`;
    }
    if (name.includes('Test') || name.includes('Kiểm tra') || name.includes('Assessment')) {
      return `- Assess students' academic language proficiency and 4-skill competence according to MOET matrix.\n- Prepare students for the National High School Graduation Examination and CEFR B1/B2 standards.`;
    }
    if (name.includes('Feedback') || name.includes('Correction') || name.includes('Sprint')) {
      return `- Analyze test results, rectify errors in cloze test and reading comprehension, and consolidate language foundation.`;
    }
    return `- By the end of the lesson, students will master advanced academic vocabulary, complex grammatical structures and phonetics of: "${name}" (Global Success Grade ${g}).\n- Demonstrate fluent, accurate communicative proficiency across all four language skills (Listening, Speaking, Reading, Writing) aligned with CEFR B1-B2 standards.`;
  }

  // 4. VẬT LÍ THPT (10 - 12)
  if (s.includes('vật lí') || s.includes('vật lý') || s.includes('vat li')) {
    if (name.includes('Động học') || name.includes('Chuyển động') || name.includes('Vận tốc')) return `- Nắm vững công thức chuyển động thẳng đều, biến đổi đều, rơi tự do, ném ngang; biểu diễn và phân tích đồ thị tọa độ - thời gian, vận tốc - thời gian.`;
    if (name.includes('Động lực học') || name.includes('Định luật Newton') || name.includes('Lực')) return `- Vận dụng 3 định luật Newton, các lực cơ học (trọng lực, ma sát, đàn hồi, hướng tâm) vào giải bài toán động lực học chất điểm.`;
    if (name.includes('Năng lượng') || name.includes('Công') || name.includes('Động năng') || name.includes('Thế năng') || name.includes('Cơ năng')) return `- Nắm công thức tính công A = F.s.cosα, công suất P = A/t; vận dụng định luật bảo toàn cơ năng và định lí động năng vào bài toán va chạm.`;
    if (name.includes('Dao động điều hòa') || name.includes('Con lắc')) return `- Viết phương trình li độ x = A.cos(ωt + φ), vận tốc, gia tốc của dao động điều hòa; tính chu kỳ, tần số con lắc lò xo và con lắc đơn.`;
    if (name.includes('Sóng cơ') || name.includes('Giao thoa sóng') || name.includes('Sóng dừng') || name.includes('Sóng âm')) return `- Trình bày phương trình sóng, điều kiện giao thoa cực đại/cực tiểu, điều kiện tạo sóng dừng trên dây và các đặc trưng sinh lí, vật lí của âm.`;
    if (name.includes('Điện trường') || name.includes('Từ trường') || name.includes('Cảm ứng điện từ')) return `- Tính cường độ điện trường, điện thế, lực Lorentz, từ thông qua khung dây; vận dụng định luật Faraday và Lenz về dòng điện cảm ứng.`;
    if (name.includes('Dòng điện xoay chiều') || name.includes('Mạch RLC') || name.includes('Máy biến áp')) return `- Viết biểu thức dòng điện i = I0.cos(ωt + φ), điện áp u; tính tổng trở Z, độ lệch pha, công suất P = U.I.cosφ và hiện tượng cộng hưởng điện.`;
    if (name.includes('Vật lí nhiệt') || name.includes('Chất khí') || name.includes('Nội năng')) return `- Nắm mô hình động học phân tử chất khí, phương trình trạng thái khí lí tưởng pV = nRT; tính nhiệt lượng, nhiệt dung riêng và độ biến thiên nội năng.`;
    if (name.includes('Hạt nhân nguyên tử') || name.includes('Phóng xạ') || name.includes('Năng lượng hạt nhân')) return `- Tính độ hụt khối, năng lượng liên kết riêng; viết phương trình phóng xạ alpha, beta, gamma; vận dụng định luật phóng xạ và phản ứng phân hạch, nhiệt hạch.`;
    return `- Nắm vững định luật vật lí, công thức toán học và hiện tượng thực nghiệm trong bài: "${name}".\n- Rèn luyện tư duy thực nghiệm khoa học, phân tích đồ thị và giải quyết bài toán kỹ thuật thực tiễn.`;
  }

  // 5. HÓA HỌC THPT (10 - 12)
  if (s.includes('hóa học') || s.includes('hoa hoc')) {
    if (name.includes('Cấu tạo nguyên tử') || name.includes('Bảng tuần hoàn')) return `- Viết cấu hình electron nguyên tử; xác định vị trí nguyên tố trong bảng tuần hoàn; giải thích quy luật biến đổi bán kính, độ âm điện, tính kim loại/phi kim.`;
    if (name.includes('Liên kết hóa học') || name.includes('Liên kết ion') || name.includes('Liên kết cộng hóa trị')) return `- Giải thích sự hình thành liên kết ion, liên kết cộng hóa trị (phân cực/không phân cực), liên kết hydrogen và tương tác van der Waals.`;
    if (name.includes('Oxi hóa - khử') || name.includes('Phản ứng oxi hóa')) return `- Xác định số oxi hóa; phân biệt chất khử, chất oxi hóa; cân bằng phương trình phản ứng oxi hóa - khử bằng phương pháp thăng bằng electron.`;
    if (name.includes('Năng lượng hóa học') || name.includes('Biến thiên enthalpy')) return `- Nắm khái niệm phản ứng tỏa nhiệt, thu nhiệt; tính biến thiên enthalpy chuẩn ΔrH0298 từ nhiệt tạo thành chuẩn hoặc năng lượng liên kết.`;
    if (name.includes('Tốc độ phản ứng') || name.includes('Cân bằng hóa học')) return `- Viết biểu thức định luật tác dụng khối lượng; giải thích các yếu tố ảnh hưởng đến tốc độ phản ứng; vận dụng nguyên lí Le Chatelier chuyển dịch cân bằng.`;
    if (name.includes('Halogen') || name.includes('Sulfur') || name.includes('Nitrogen')) return `- Trình bày tính chất vật lí, hóa học đặc trưng của nhóm Halogen (Cl2, Br2, I2), đơn chất và hợp chất của Nitrogen (NH3, HNO3), Sulfur (H2SO4).`;
    if (name.includes('Hydrocarbon') || name.includes('Alkane') || name.includes('Alkene') || name.includes('Arene')) return `- Viết công thức cấu tạo, gọi tên IUPAC; trình bày tính chất hóa học (thế, cộng, trùng hợp, oxi hóa) và ứng dụng của Alkane, Alkene, Alkyne, Benzene.`;
    if (name.includes('Dẫn xuất halogen') || name.includes('Alcohol') || name.includes('Phenol') || name.includes('Aldehyde') || name.includes('Carboxylic acid')) return `- Nắm cấu tạo nhóm chức -OH, -CHO, -COOH; giải thích tính chất hóa học đặc trưng, liên kết hydrogen và các phản ứng định tính nhận biết.`;
    if (name.includes('Ester') || name.includes('Lipid') || name.includes('Chất béo')) return `- Trình bày cấu tạo phân tử ester, triglyceride; viết phương trình phản ứng thủy phân trong môi trường acid và môi trường kiềm (phản ứng xà phòng hóa).`;
    if (name.includes('Carbohydrate') || name.includes('Glucose') || name.includes('Saccharose') || name.includes('Tinh bột') || name.includes('Cellulose')) return `- Trình bày cấu trúc mạch hở/mạch vòng của Glucose, Fructose; phản ứng tráng bạc; phản ứng thủy phân của Saccharose, Tinh bột, Cellulose.`;
    if (name.includes('Amine') || name.includes('Amino acid') || name.includes('Peptide') || name.includes('Protein')) return `- Nắm tính chất lưỡng tính của amino acid, liên kết peptide; phản ứng màu biuret của protein; cấu tạo và vai trò sinh học của acid nucleic.`;
    if (name.includes('Polymer') || name.includes('Vật liệu polymer')) return `- Phân loại polymer trùng hợp, trùng ngưng; trình bày cấu tạo và ứng dụng của chất dẻo, tơ tổng hợp, cao su, keo dán sinh học.`;
    if (name.includes('Kim loại') || name.includes('Điện phân') || name.includes('Ăn mòn kim loại')) return `- Trình bày thế điện cực chuẩn, quy tắc alpha; viết phương trình điện phân dung dịch/nóng chảy; giải thích cơ chế ăn mòn điện hóa và biện pháp bảo vệ kim loại.`;
    return `- Giải thích cơ chế phản ứng, tính chất chất hóa học và viết đúng PTHH trong bài: "${name}".\n- Thực hành thí nghiệm hóa học an toàn, tư duy phân tích định lượng và bảo vệ môi trường.`;
  }

  // 6. SINH HỌC THPT (10 - 12)
  if (s.includes('sinh học') || s.includes('sinh hoc')) {
    if (name.includes('Phân tử sinh học') || name.includes('Nước') || name.includes('Protein') || name.includes('Axit nucleic')) return `- Trình bày cấu trúc và chức năng của nước, carbohydrate, lipid, protein, ADN, ARN trong tế bào sống.`;
    if (name.includes('Cấu trúc tế bào') || name.includes('Màng sinh chất') || name.includes('Bào quan')) return `- Phân tích cấu trúc và chức năng của màng sinh chất, nhân, ti thể, lục lạp, lưới nội chất, bộ máy Golgi; so sánh tế bào nhân sơ và nhân thực.`;
    if (name.includes('Chuyển hóa vật chất') || name.includes('Enzyme') || name.includes('Hô hấp tế bào') || name.includes('Quang hợp')) return `- Trình bày cơ chế xúc tác của enzyme; sơ đồ các giai đoạn đường phân, chu trình Krebs, chuỗi truyền electron hô hấp và các pha của quang hợp.`;
    if (name.includes('Chu kỳ tế bào') || name.includes('Nguyên phân') || name.includes('Giảm phân')) return `- Mô tả các pha của chu kỳ tế bào; diễn biến các kỳ trong nguyên phân, giảm phân; giải thích ý nghĩa di truyền và ứng dụng nhân giống vô tính.`;
    if (name.includes('Vi sinh vật') || name.includes('Virus') || name.includes('Bệnh truyền nhiễm')) return `- Trình bày các hình thức dinh dưỡng của vi sinh vật; cấu tạo virus, chu trình nhân lên của virus (tiềm tan, sinh tan) và các biện pháp phòng chống dịch bệnh.`;
    if (name.includes('Di truyền phân tử') || name.includes('Tái bản ADN') || name.includes('Phiên mã') || name.includes('Dịch mã')) return `- Trình bày cơ chế tái bản ADN theo nguyên tắc bán bảo tồn; quá trình phiên mã tạo mARN và dịch mã tổng hợp chuỗi polypeptide; điều hòa Operon Lac.`;
    if (name.includes('Quy luật di truyền') || name.includes('Mendel') || name.includes('Liên kết gen') || name.includes('Hoán vị gen')) return `- Giải thích quy luật phân ly, phân ly độc lập của Mendel; di truyền liên kết, hoán vị gen, di truyền liên kết giới tính và tương tác gen.`;
    if (name.includes('Đột biến gen') || name.includes('Đột biến nhiễm sắc thể')) return `- Phân loại đột biến điểm (thay thế, thêm, mất nucleotit), đột biến cấu trúc/số lượng NST; giải thích nguyên nhân và hậu quả gây bệnh tật di truyền.`;
    if (name.includes('Tiến hóa') || name.includes('Thuyết chọn lọc tự nhiên') || name.includes('Nhân tố tiến hóa')) return `- Trình bày học thuyết Đacuyn và thuyết tiến hóa tổng hợp hiện đại; phân tích vai trò của 5 nhân tố tiến hóa (đột biến, di - nhập gen, chọn lọc tự nhiên, phiêu bạt di truyền, giao phối không ngẫu nhiên).`;
    if (name.includes('Sinh thái học') || name.includes('Quần thể') || name.includes('Quần xã') || name.includes('Hệ sinh thái')) return `- Nắm các đặc trưng cơ bản của quần thể (mật độ, cấu trúc tuổi, tỉ lệ giới tính); cấu trúc lưới thức ăn, tháp sinh thái và chu trình tuần hoàn vật chất toàn cầu.`;
    return `- Nắm vững cơ chế sinh học phân tử, quy luật di truyền - tiến hóa và sinh thái học trong bài: "${name}".\n- Bồi dưỡng tư duy hệ thống sinh học, thế giới quan khoa học và ý thức bảo vệ sự sống.`;
  }

  // 7. LỊCH SỬ THPT (10 - 12)
  if (s.includes('lịch sử') || s.includes('lich su')) {
    return `- Phân tích bối cảnh lịch sử, nguyên nhân, diễn biến chính, kết quả và bài học kinh nghiệm sâu sắc của sự kiện/chủ đề trong bài: "${name}".\n- Rèn luyện kỹ năng phân tích sử liệu khách quan, tư duy phản biện lịch sử và bồi đắp lòng yêu nước, tự hào dân tộc.`;
  }

  // 8. ĐỊA LÍ THPT (10 - 12)
  if (s.includes('địa lí') || s.includes('địa lý') || s.includes('dia li')) {
    return `- Trình bày và giải thích các quy luật địa lí tự nhiên, dân cư, đô thị hóa và sự phát triển các ngành kinh tế trong bài: "${name}".\n- Khai thác thành thạo Atlat Địa lí Việt Nam, biểu đồ, bản đồ và dữ liệu thống kê để phân tích mối liên hệ không gian.`;
  }

  // 9. TIN HỌC THPT (10 - 12)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    return `- Nắm vững kiến thức khoa học máy tính chuyên sâu, lập trình Python nâng cao, OOP, CSDL quan hệ SQL, thiết kế web hoặc AI trong bài: "${name}".\n- Thực hành viết mã nguồn sạch, tối ưu hóa thuật toán và tuân thủ an toàn an ninh mạng số.`;
  }

  // 10. CÔNG NGHỆ THPT (10 - 12)
  if (s.includes('công nghệ') || s.includes('cong nghe')) {
    return `- Nắm vững quy trình thiết kế kỹ thuật, bản vẽ CAD, công nghệ gia công cơ khí, hệ thống điện tử hoặc công nghệ thông minh trong: "${name}".\n- Phát triển tư duy kỹ thuật công nghiệp, năng lực sáng tạo công nghệ và định hướng nghề nghiệp kỹ sư.`;
  }

  // 11. GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT THPT (10 - 12)
  if (s.includes('kinh tế') || s.includes('pháp luật') || s.includes('gdkt&pl') || s.includes('ktpl')) {
    return `- Nắm vững các quy luật kinh tế thị trường, quản lý tài chính doanh nghiệp/cá nhân hoặc các quy định của Hiến pháp, pháp luật trong bài: "${name}".\n- Phân tích và đánh giá các tình huống kinh tế - pháp lý thực tế; biết bảo vệ quyền lợi hợp pháp và tuân thủ pháp luật.`;
  }

  // 12. GIÁO DỤC QUỐC PHÒNG VÀ AN NINH THPT (10 - 12)
  if (s.includes('quốc phòng') || s.includes('gdqp') || s.includes('an ninh')) {
    return `- Nắm vững đường lối quốc phòng - an ninh của Đảng, truyền thống vẻ vang của lực lượng vũ trang nhân dân Việt Nam trong: "${name}".\n- Thực hiện chuẩn xác kỹ thuật bắn súng, tháo lắp súng, ném lựu đạn và sơ cấp cứu chiến thương an toàn.`;
  }

  // 13. GIÁO DỤC THỂ CHẤT THPT (10 - 12)
  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục')) {
    return `- Nắm vững và thực hiện chuẩn xác kỹ thuật thể thao chuyên sâu, nguyên lý vận động và chiến thuật thi đấu trong bài: "${name}".\n- Tích cực rèn luyện nâng cao thể lực và hình thành thói quen rèn luyện thân thể suốt đời.`;
  }

  // 14. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THPT (10 - 12)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn')) {
    return `- Chủ động tham gia các hoạt động phát triển năng lực lãnh đạo bản thân, quản trị tài chính và trách nhiệm xã hội trong: "${name}".\n- Khảo sát thị trường lao động, lập đề án khởi nghiệp và xác định chính xác mục tiêu nghề nghiệp đại học.`;
  }

  // 15. ÂM NHẠC & MĨ THUẬT THPT
  if (s.includes('âm nhạc') || s.includes('am nhac')) {
    return `- Cảm thụ và biểu diễn các tác phẩm âm nhạc đỉnh cao; nắm vững lý thuyết âm nhạc chuyên sâu và hòa thanh trong bài: "${name}".`;
  }
  if (s.includes('mĩ thuật') || s.includes('mỹ thuật')) {
    return `- Sáng tạo tác phẩm hội họa / đồ họa / thiết kế mỹ thuật công nghiệp có chiều sâu nghệ thuật và bản sắc riêng trong bài: "${name}".`;
  }

  // 16. GIÁO DỤC ĐỊA PHƯƠNG THPT
  return `- Phân tích sâu sắc các thế mạnh kinh tế - xã hội, văn hóa truyền thống và chiến lược phát triển bền vững của địa phương trong: "${name}".\n- Bồi đắp tình yêu quê hương và khát vọng cống hiến xây dựng quê hương đất nước.`;
}

// =========================================================================
// 1. TOÁN THPT (LỚP 10, 11, 12) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
export function getMathHighSchoolCurriculum(grade: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const list: RawHighSchoolLesson[] = [];

  const mathDataByGrade: Record<number, { term1: string[]; term2: string[] }> = {
    10: {
      term1: [
        'Chương I: Mệnh đề và tập hợp - Bài 1: Mệnh đề toán học và mệnh đề chứa biến (3 tiết)',
        'Bài 2: Tập hợp và các phép toán trên tập hợp (Hợp, Giao, Hiệu, Phần bù) (3 tiết)',
        'Chương II: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn - Bài 3: Bất phương trình bậc nhất hai ẩn (3 tiết)',
        'Bài 4: Hệ bất phương trình bậc nhất hai ẩn và bài toán tối ưu thực tế (3 tiết)',
        'Chương III: Hệ thức lượng trong tam giác - Bài 5: Giá trị lượng giác của một góc từ 0° đến 180° (3 tiết)',
        'Bài 6: Hệ thức lượng trong tam giác (Định lí côsin, Định lí sin, Công thức diện tích) (3 tiết)',
        'Chương IV: Vectơ - Bài 7: Các khái niệm mở đầu về vectơ (3 tiết)',
        'Bài 8: Tổng và hiệu của hai vectơ (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 10 (3 tiết)',
        'Bài 9: Tích của một số với một vectơ (3 tiết)',
        'Bài 10: Vectơ trong mặt phẳng tọa độ Oxy (3 tiết)',
        'Bài 11: Tích vô hướng của hai vectơ và ứng dụng (3 tiết)',
        'Chương V: Các số đặc trưng đo xu thế trung tâm - Bài 12: Số gần đúng và sai số (3 tiết)',
        'Bài 13: Các số đặc trưng đo xu thế trung tâm cho mẫu số liệu không ghép nhóm (3 tiết)',
        'Bài 14: Các số đặc trưng đo mức độ phân tán (Khoảng biến thiên, Khoảng tứ phân vị, Phương sai, Độ lệch chuẩn) (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 10 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Toán Học kỳ 1 Lớp 10 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo sản phẩm mô hình Toán học Lớp 10 (3 tiết)'
      ],
      term2: [
        'Chương VI: Hàm số, đồ thị và ứng dụng - Bài 15: Hàm số và đồ thị (3 tiết)',
        'Bài 16: Hàm số bậc hai, đồ thị hàm số bậc hai và ứng dụng (3 tiết)',
        'Bài 17: Dấu của tam thức bậc hai (3 tiết)',
        'Bài 18: Phương trình quy về phương trình bậc hai (3 tiết)',
        'Chương VII: Phương pháp tọa độ trong mặt phẳng - Bài 19: Phương trình đường thẳng (Tổng quát, tham số) (3 tiết)',
        'Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách (3 tiết)',
        'Bài 21: Đường tròn trong mặt phẳng tọa độ (3 tiết)',
        'Bài 22: Ba đường conic trong mặt phẳng tọa độ (Ellipse, Hyperbol, Parabol) (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 10 (3 tiết)',
        'Chương VIII: Đại số tổ hợp - Bài 23: Quy tắc đếm (Quy tắc cộng, Quy tắc nhân, Sơ đồ hình cây) (3 tiết)',
        'Bài 24: Hoán vị, Chỉnh hợp và Tổ hợp (3 tiết)',
        'Bài 25: Nhị thức Newton (Khai triển lũy thừa bậc 4, bậc 5) (3 tiết)',
        'Chương IX: Tính xác suất theo định nghĩa cổ điển - Bài 26: Biến cố và định nghĩa cổ điển của xác suất (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán 10 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành giải toán thực tiễn (3 tiết)',
        'Dự án STEM Toán 10: "Mô hình Parabol Ăng-ten Vệ tinh & Phân tích Rủi ro Tài chính Bằng Xác suất" (3 tiết)',
        'Bài 28: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 10 (3 tiết)',
        'Tổng kết năm học & Đánh giá xếp loại cả năm môn Toán 10 (3 tiết)'
      ]
    },
    11: {
      term1: [
        'Chương I: Hàm số lượng giác và phương trình lượng giác - Bài 1: Giá trị lượng giác của góc lượng giác (3 tiết)',
        'Bài 2: Công thức lượng giác (Công thức cộng, nhân đôi, biến đổi tích thành tổng) (3 tiết)',
        'Bài 3: Hàm số lượng giác và đồ thị (sin, cos, tan, cot) (3 tiết)',
        'Bài 4: Phương trình lượng giác cơ bản (3 tiết)',
        'Chương II: Dãy số. Cấp số cộng và cấp số nhân - Bài 5: Dãy số (3 tiết)',
        'Bài 6: Cấp số cộng và công thức số hạng tổng quát, tổng n số hạng (3 tiết)',
        'Bài 7: Cấp số nhân và ứng dụng tính lãi kép ngân hàng (3 tiết)',
        'Chương III: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm - Bài 8: Mẫu số liệu ghép nhóm (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 11 (3 tiết)',
        'Bài 9: Các số đặc trưng đo xu thế trung tâm (Số trung bình, Trung vị, Mốt, Tứ phân vị) (3 tiết)',
        'Chương IV: Quan hệ song song trong không gian - Bài 10: Đường thẳng và mặt phẳng trong không gian (3 tiết)',
        'Bài 11: Hai đường thẳng song song trong không gian (3 tiết)',
        'Bài 12: Đường thẳng song song với mặt phẳng (3 tiết)',
        'Bài 13: Hai mặt phẳng song song (3 tiết)',
        'Bài 14: Phép chiếu song song và hình biểu diễn của một hình không gian (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 11 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Toán Học kỳ 1 Lớp 11 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo sản phẩm mô hình Hình học không gian Lớp 11 (3 tiết)'
      ],
      term2: [
        'Chương V: Giới hạn. Hàm số liên tục - Bài 15: Giới hạn của dãy số (3 tiết)',
        'Bài 16: Giới hạn của hàm số tại một điểm và tại vô cực (3 tiết)',
        'Bài 17: Hàm số liên tục và định lí giá trị trung gian (3 tiết)',
        'Chương VI: Hàm số mũ và hàm số lôgarit - Bài 18: Lũy thừa với số mũ thực (3 tiết)',
        'Bài 19: Lôgarit và các tính chất của lôgarit (3 tiết)',
        'Bài 20: Hàm số mũ và hàm số lôgarit (3 tiết)',
        'Bài 21: Phương trình, bất phương trình mũ và lôgarit (3 tiết)',
        'Chương VII: Đạo hàm - Bài 22: Khái niệm đạo hàm và ý nghĩa hình học của đạo hàm (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 11 (3 tiết)',
        'Bài 23: Các quy tắc tính đạo hàm (Đạo hàm hàm hợp, đạo hàm các hàm sơ cấp) (3 tiết)',
        'Bài 24: Đạo hàm cấp hai và ý nghĩa gia tốc trong vật lí (3 tiết)',
        'Chương VIII: Quan hệ vuông góc trong không gian - Bài 25: Hai đường thẳng vuông góc (3 tiết)',
        'Bài 26: Đường thẳng vuông góc với mặt phẳng và Định lí ba đường vuông góc (3 tiết)',
        'Bài 27: Hai mặt phẳng vuông góc và Góc giữa hai mặt phẳng (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán 11 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành giải toán hình học không gian (3 tiết)',
        'Dự án STEM Toán 11: "Mô hình Khối Đa diện Xoay 3D & Ứng dụng Hàm số Mũ trong Dự báo Dân số" (3 tiết)',
        'Ôn tập toàn diện kiến thức Toán 11 chuẩn bị lên Lớp 12 (3 tiết)',
        'Tổng kết năm học & Đánh giá xếp loại cả năm môn Toán 11 (3 tiết)'
      ]
    },
    12: {
      term1: [
        'Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số - Bài 1: Tính đơn điệu của hàm số (3 tiết)',
        'Bài 2: Cực trị của hàm số (3 tiết)',
        'Bài 3: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên một đoạn (3 tiết)',
        'Bài 4: Đường tiệm cận của đồ thị hàm số (Tiệm cận đứng, Tiệm cận ngang, Tiệm cận xiên) (3 tiết)',
        'Bài 5: Khảo sát sự biến thiên và vẽ đồ thị của một số hàm đa thức, phân thức (3 tiết)',
        'Bài 6: Ứng dụng đạo hàm giải bài toán tối ưu kinh tế và kỹ thuật thực tế (3 tiết)',
        'Chương II: Vectơ và hệ tọa độ trong không gian - Bài 7: Vectơ trong không gian (3 tiết)',
        'Bài 8: Hệ trục tọa độ Oxyz trong không gian (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 12 (3 tiết)',
        'Bài 9: Biểu thức tọa độ của các phép toán vectơ (3 tiết)',
        'Bài 10: Tích vô hướng của hai vectơ trong không gian Oxyz và ứng dụng (3 tiết)',
        'Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm - Bài 11: Khoảng biến thiên và Khoảng tứ phân vị (3 tiết)',
        'Bài 12: Phương sai và Độ lệch chuẩn của mẫu số liệu ghép nhóm (3 tiết)',
        'Chương IV: Nguyên hàm và Tích phân - Bài 13: Nguyên hàm và bảng nguyên hàm cơ bản (3 tiết)',
        'Bài 14: Phương pháp đổi biến số và Phương pháp từng phần trong tính nguyên hàm (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 12 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Giải tích và Tọa độ Oxyz HK1 Lớp 12 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo sản phẩm mô hình Toán học ứng dụng Lớp 12 (3 tiết)'
      ],
      term2: [
        'Bài 16: Phương pháp tính tích phân (Đổi biến và Từng phần) (3 tiết)',
        'Bài 17: Ứng dụng hình học của tích phân (Tính diện tích hình phẳng và thể tích vật thể tròn xoay) (3 tiết)',
        'Chương V: Phương pháp tọa độ trong không gian Oxyz - Bài 18: Phương trình mặt phẳng (3 tiết)',
        'Bài 19: Phương trình đường thẳng trong không gian (3 tiết)',
        'Bài 20: Phương trình mặt cầu (3 tiết)',
        'Bài 21: Vị trí tương đối giữa mặt phẳng, đường thẳng và mặt cầu (3 tiết)',
        'Chương VI: Xác suất có điều kiện - Bài 22: Xác suất có điều kiện và Công thức nhân xác suất (3 tiết)',
        'Bài 23: Công thức xác suất toàn phần và Công thức Bayes (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 12 (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán 12 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành giải toán thực tiễn (3 tiết)',
        'Dự án STEM Toán 12: "Mô hình Không gian 3D GeoGebra Oxyz & Ứng dụng Tích phân Thiết kế Thùng chứa" (3 tiết)',
        'Luyện giải bộ đề thi Tốt nghiệp THPT môn Toán theo cấu trúc đề minh họa mới nhất của Bộ GD&ĐT (3 tiết)',
        'Luyện giải các chuyên đề vận dụng cao (Hàm số, Oxyz, Tích phân, Xác suất) (3 tiết)',
        'Thi thử Tốt nghiệp THPT chuẩn format Bộ GD&ĐT (3 tiết)',
        'Ôn tập tổng kết và rèn luyện kỹ năng làm bài thi trắc nghiệm (3 tiết)',
        'Tổng kết năm học & Xét hoàn thành chương trình môn Toán cấp THPT (3 tiết)'
      ]
    }
  };

  const currentGradeData = mathDataByGrade[g] || mathDataByGrade[10];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 16 || w === 31;
    const isExamPrep = w >= 32;

    list.push({
      week: w,
      topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 3,
      yccd: `- Nắm vững và vận dụng xuất sắc các chuyên đề toán cao cấp THPT: ${name} (SGK Toán ${g} Kết nối tri thức).\n- Phát triển tư duy logic, mô hình hóa toán học, kỹ năng giải toán trắc nghiệm nhanh và chính xác.\n- Chuẩn bị vững vàng cho Kỳ thi Tốt nghiệp THPT Quốc gia và xét tuyển Đại học.`,
      equipment: isExamPrep ? 'Bộ đề thi Tốt nghiệp THPT chuẩn hóa, máy tính Casio FX-580VNX / 880BTG, máy chiếu' : 'Máy chiếu, phần mềm GeoGebra 3D, máy tính Casio, phiếu học tập',
      location: 'Phòng học bộ môn Toán / Lớp học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isExamPrep ? 'Luyện thi Tốt nghiệp THPT' : ''
    });
  });

  return list;
}

// =========================================================================
// 2. NGỮ VĂN THPT (LỚP 10, 11, 12) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
export function getNguVanHighSchoolCurriculum(grade: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const list: RawHighSchoolLesson[] = [];

  const nguVanHighSchoolData: Record<number, { term1: string[]; term2: string[] }> = {
    10: {
      term1: [
        'Bài 1: Sức hấp dẫn của truyện kể - Đọc: Thần Trụ trời & Prô-mê-tê và loài người & Thực hành tiếng Việt: Sử dụng từ Hán Việt (3 tiết)',
        'Đọc: Đi san mặt đất & Viết: Bài văn nghị luận phân tích, đánh giá một tác phẩm thần thoại (3 tiết)',
        'Nói và nghe: Giới thiệu, đánh giá về nội dung và nghệ thuật của một truyện kể thần thoại (3 tiết)',
        'Bài 2: Vẻ đẹp của thơ ca - Đọc: Cảm xúc mùa thu (Thu hứng - Đỗ Phủ) & Thực hành tiếng Việt: Lỗi dùng từ và cách sửa (3 tiết)',
        'Đọc: Tự tình II (Hồ Xuân Hương) & Đọc: Câu cá mùa thu (Thu điếu - Nguyễn Khuyến) (3 tiết)',
        'Viết: Bài văn nghị luận phân tích, đánh giá một tác phẩm thơ Đường luật (3 tiết)',
        'Nói và nghe: Thảo luận về một vấn đề đời sống có ý kiến khác nhau (3 tiết)',
        'Bài 3: Nghệ thuật thuyết phục trong văn nghị luận - Đọc: Hiền tài là nguyên khí của quốc gia (Thân Nhân Trung) (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 10 (3 tiết)',
        'Đọc: Yêu và đồng cảm (Phong Tử Khải) & Thực hành tiếng Việt: Biện pháp chêm xen và liệt kê (3 tiết)',
        'Đọc: Chữ bầu lên nhà thơ (Lê Đạt) & Viết: Bài văn nghị luận xã hội về một tư tưởng, đạo lí (3 tiết)',
        'Nói và nghe: Thuyết trình về một vấn đề xã hội có sử dụng phương tiện phi ngôn ngữ (3 tiết)',
        'Bài 4: Sức sống của sử thi - Đọc: Héc-to từ biệt Ăng-đrô-mác (Trích I-li-át - Hô-me-rơ) (3 tiết)',
        'Đọc: Đăm Săn đi bắt Nữ Thần Mặt Trời (Sử thi Ê-đê) & Thực hành tiếng Việt: Trích dẫn tài liệu (3 tiết)',
        'Viết: Bài văn nghị luận phân tích nhân vật anh hùng sử thi (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 10 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn Học kỳ 1 Lớp 10 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo tập san Văn học Học kỳ 1 Lớp 10 (3 tiết)'
      ],
      term2: [
        'Bài 6: Nguyễn Trãi - "Dành còn để trợ dân này" - Đọc: Bình Ngô đại cáo (Nguyễn Trãi) (3 tiết)',
        'Thực hành tiếng Việt: Biện pháp tu từ đối và tác dụng trong văn chính luận (3 tiết)',
        'Đọc: Bảo kính cảnh giới - Bài 43 (Gương báu khuyên răn) & Đọc: Dục Thúy sơn (3 tiết)',
        'Viết: Bài văn nghị luận về một tác phẩm văn học trung đại (3 tiết)',
        'Bài 7: Quyền năng của người kể chuyện - Đọc: Người cầm quyền khôi phục uy quyền (V.Huy-gô) (3 tiết)',
        'Đọc: Dưới bóng hoàng lan (Thạch Lam) & Thực hành tiếng Việt: Điểm nhìn trần thuật (3 tiết)',
        'Đọc: Một chuyện đùa nho nhỏ (A.Sê-khốp) & Viết: Bài văn phân tích một tác phẩm truyện hiện đại (3 tiết)',
        'Nói và nghe: Thảo luận về vai trò của điểm nhìn trần thuật trong văn xuôi (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 10 (3 tiết)',
        'Bài 8: Thế giới đa dạng của thông tin - Đọc: Sự sống và cái chết & Đọc: Nghệ thuật truyền thống của người Việt (3 tiết)',
        'Thực hành tiếng Việt: Sử dụng dữ liệu, số liệu và phương tiện phi ngôn ngữ (3 tiết)',
        'Viết: Báo cáo kết quả nghiên cứu về một vấn đề văn hóa truyền thống (3 tiết)',
        'Bài 9: Hành trang cuộc sống - Đọc: Về chính chúng ta (C.Rô-ve-li) & Thực hành tiếng Việt: Sử dụng phương tiện liên kết (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 10 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành viết văn nghị luận chuyên sâu (3 tiết)',
        'Dự án Ngữ văn 10: "Sân khấu hóa Trích đoạn Sân khấu Dân gian & Tập san Văn học Tuổi trẻ" (3 tiết)',
        'Bài 10: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Ngữ văn 10 (3 tiết)',
        'Tổng kết năm học & Đánh giá xếp loại cả năm môn Ngữ văn 10 (3 tiết)'
      ]
    },
    11: {
      term1: [
        'Bài 1: Câu chuyện của truyện ngắn - Đọc: Vợ nhặt (Kim Lân) & Thực hành tiếng Việt: Ngôn ngữ trang trọng và thân mật (3 tiết)',
        'Đọc: Chí Phèo (Nam Cao) & Viết: Bài văn nghị luận phân tích một tác phẩm truyện ngắn hiện thực (3 tiết)',
        'Nói và nghe: Thuyết trình về một tác phẩm truyện ngắn đặc sắc (3 tiết)',
        'Bài 2: Cấu tứ và hình ảnh trong thơ trữ tình - Đọc: Nhớ đồng (Tố Hữu) & Thực hành tiếng Việt: Biện pháp tu từ lặp cấu trúc (3 tiết)',
        'Đọc: Tràng giang (Huy Cận) & Đọc: Đây thôn Vĩ Dạ (Hàn Mặc Tử) (3 tiết)',
        'Viết: Bài văn nghị luận phân tích hình ảnh và cấu tứ trong một bài thơ trữ tình (3 tiết)',
        'Nói và nghe: Giới thiệu về một tác giả thơ Mới 1932 - 1945 (3 tiết)',
        'Bài 3: Khát vọng độc lập và tự do - Đọc: Chiếu cầu hiền (Ngô Thì Nhậm) & Thực hành tiếng Việt: Lỗi logic (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 11 (3 tiết)',
        'Đọc: Tôi có một ước mơ (M.L.King) & Viết: Bài văn nghị luận về một vấn đề xã hội trong tác phẩm văn học (3 tiết)',
        'Bài 4: Tự sự trong thơ và kịch bản - Đọc: Sống hay không sống (Trích Hăm-lét - Sếch-xpia) (3 tiết)',
        'Đọc: Vĩnh biệt Cửu Trùng Đài (Trích Vũ Như Tô - Nguyễn Huy Tưởng) (3 tiết)',
        'Thực hành tiếng Việt: Ngôn ngữ kịch & Viết: Bài văn phân tích xung đột kịch (3 tiết)',
        'Bài 5: Chứng nhân của thời đại - Đọc: Một thời đại trong thi ca (Hoài Thanh) & Thực hành tiếng Việt: Thuật ngữ phê bình (3 tiết)',
        'Đọc: Tiếp xúc với nghệ thuật & Viết: Báo cáo nghiên cứu về một trào lưu văn học (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 11 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn Học kỳ 1 Lớp 11 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo tập san Diễn đàn Văn học Trẻ Lớp 11 (3 tiết)'
      ],
      term2: [
        'Bài 6: Nguyễn Du - "Những điều trông thấy mà đau đớn lòng" - Đọc: Trao duyên (Trích Truyện Kiều - Nguyễn Du) (3 tiết)',
        'Đọc: Độc Tiểu Thanh kí (Nguyễn Du) & Thực hành tiếng Việt: Điển cố và cách tiếp nhận (3 tiết)',
        'Viết: Bài văn nghị luận phân tích một đoạn trích trong Truyện Kiều (3 tiết)',
        'Bài 7: Những chân trời kí ức - Đọc: Ai đã đặt tên cho dòng sông? (Hoàng Phủ Ngọc Tường) (3 tiết)',
        'Đọc: Người lái đò Sông Đà (Nguyễn Tuân) & Thực hành tiếng Việt: Phong cách ngôn ngữ văn chương (3 tiết)',
        'Viết: Bài văn thuyết minh có lồng ghép các yếu tố miêu tả, tự sự, biểu cảm (3 tiết)',
        'Bài 8: Tiếng nói của công lý - Đọc: Tuyên ngôn Độc lập (Hồ Chí Minh) & Thực hành tiếng Việt: Nghệ thuật lập luận (3 tiết)',
        'Viết: Bài văn nghị luận so sánh, đánh giá hai tác phẩm văn chính luận (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 11 (3 tiết)',
        'Bài 9: Hành trang tri thức - Đọc: Pa-xtơ và cuộc chiến chống bệnh dại & Viết: Văn bản thuyết minh quy trình (3 tiết)',
        'Thực hành tiếng Việt: Biện pháp tu từ chêm xen và liên kết văn bản nâng cao (3 tiết)',
        'Bài 10: Sách và người đọc - Đọc: Đọc sách và sự phát triển trí tuệ & Viết: Thư trao đổi công việc (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 11 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành viết văn nghị luận chuyên sâu (3 tiết)',
        'Dự án Ngữ văn 11: "Diễn đàn Văn học Trẻ & Tuyển tập Bài viết Nghị luận Đương đại" (3 tiết)',
        'Luyện giải đề thi Ngữ văn 11 chuẩn cấu trúc Đánh giá năng lực của Bộ GD&ĐT (3 tiết)',
        'Tổng kết năm học & Đánh giá xếp loại cả năm môn Ngữ văn 11 (3 tiết)'
      ]
    },
    12: {
      term1: [
        'Bài 1: Khát vọng tự do và công lí - Đọc: Tuyên ngôn Độc lập (Hồ Chí Minh) & Thực hành tiếng Việt: Giữ gìn sự trong sáng của tiếng Việt (3 tiết)',
        'Đọc: Nguyễn Đình Chiểu, ngôi sao sáng trong văn nghệ của dân tộc (Phạm Văn Đồng) (3 tiết)',
        'Viết: Bài văn nghị luận so sánh, đánh giá hai tác phẩm văn chính luận tiêu biểu (3 tiết)',
        'Nói và nghe: Thuyết trình so sánh, đánh giá hai tác phẩm văn học (3 tiết)',
        'Bài 2: Thế giới thơ ca hiện đại - Đọc: Tây Tiến (Quang Dũng) & Thực hành tiếng Việt: Phong cách cổ điển và hiện đại (3 tiết)',
        'Đọc: Việt Bắc (Tố Hữu) & Thực hành tiếng Việt: Biện pháp điệp từ, điệp ngữ và cặp đại từ Mình - Ta (3 tiết)',
        'Đọc: Đất Nước (Trích Trường ca Mặt đường khát vọng - Nguyễn Khoa Điềm) (3 tiết)',
        'Viết: Bài văn nghị luận phân tích đoạn trích thơ trữ tình chính trị (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 12 (3 tiết)',
        'Đọc: Sóng (Xuân Quỳnh) & Nói và nghe: Trao đổi về vẻ đẹp tình yêu và khát vọng sống của tuổi trẻ (3 tiết)',
        'Bài 3: Văn xuôi tự sự và số phận con người - Đọc: Vợ chồng A Phủ (Tô Hoài) (3 tiết)',
        'Thực hành tiếng Việt: Nghệ thuật miêu tả tâm lý nhân vật và ngôn ngữ trần thuật (3 tiết)',
        'Đọc: Chiếc thuyền ngoài xa (Nguyễn Minh Châu) (3 tiết)',
        'Viết: Bài văn nghị luận phân tích một nhân vật trong truyện ngắn hiện đại (3 tiết)',
        'Bài 4: Sức mạnh của kịch bản văn học - Đọc: Hồn Trương Ba, da hàng thịt (Lưu Quang Vũ) (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 12 (3 tiết)',
        'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Đọc hiểu Thơ ca và Văn xuôi HK1 Lớp 12 (3 tiết)',
        'Sơ kết Học kỳ 1 & Báo cáo sản phẩm Tập san Văn học Lớp 12 (3 tiết)'
      ],
      term2: [
        'Bài 5: Tiếng nói của văn hóa và dân tộc - Đọc: Nhìn về vốn văn hóa dân tộc (Trần Đình Hượu) (3 tiết)',
        'Đọc: Đàn ghi ta của Lor-ca (Thanh Thảo) & Thực hành tiếng Việt: Biện pháp tu từ siêu thực, tượng trưng (3 tiết)',
        'Viết: Bài văn nghị luận xã hội về một vấn đề tư tưởng, đạo lí trong cuộc sống hiện đại (3 tiết)',
        'Bài 6: Khám phá thế giới thông tin - Đọc: Trí tuệ nhân tạo và tương lai của loài người (3 tiết)',
        'Thực hành tiếng Việt: Sử dụng dữ liệu số và đánh giá tính chuẩn xác của thông tin (3 tiết)',
        'Viết: Báo cáo kết quả nghiên cứu khoa học xã hội về một đề tài tự chọn (3 tiết)',
        'Nói và nghe: Báo cáo kết quả nghiên cứu và trả lời chất vấn trước hội đồng (3 tiết)',
        'Bài 7: Hành trang người trẻ - Đọc: Đêm hội Long Trì (Nguyễn Huy Tưởng) & Viết: Thư xin việc và CV cá nhân (3 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 12 (3 tiết)',
        'Hệ thống hóa toàn bộ các tác phẩm văn học trọng tâm lớp 12 phục vụ thi Tốt nghiệp THPT (3 tiết)',
        'Chuyên đề 1: Kỹ năng đọc hiểu văn bản văn học và văn bản nghị luận/thông tin ngoài SGK (3 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 12 (3 tiết)',
        'Chữa bài kiểm tra cuối HK2 & Kỹ năng viết đoạn văn nghị luận xã hội 200 chữ đạt điểm tối đa (3 tiết)',
        'Chuyên đề 3: Kỹ năng viết bài văn nghị luận văn học 600 chữ so sánh, đánh giá tác phẩm (3 tiết)',
        'Luyện giải bộ đề thi Tốt nghiệp THPT môn Ngữ văn chuẩn ma trận mới nhất của Bộ GD&ĐT (3 tiết)',
        'Thi thử Tốt nghiệp THPT Quốc gia môn Ngữ văn và chữa bài chi tiết (3 tiết)',
        'Tổng kết năm học & Xét hoàn thành chương trình môn Ngữ văn cấp THPT (3 tiết)'
      ]
    }
  };

  const currentGradeData = nguVanHighSchoolData[g] || nguVanHighSchoolData[10];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 16 || w === 31;
    const isExam = w >= 32;

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(' - ')[0] : name.includes('Chuyên đề') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 3,
      yccd: `- Phân tích, so sánh và đánh giá sâu sắc giá trị tư tưởng nhân đạo, nghệ thuật biểu đạt của ${name} (SGK Ngữ văn ${g} Kết nối tri thức).\n- Viết bài văn nghị luận văn học và nghị luận xã hội chuẩn xác, lập luận chặt chẽ, dẫn chứng thuyết phục và giàu cảm xúc.\n- Bồi dưỡng tâm hồn yêu nước, trách nhiệm công dân và năng lực thẩm mỹ văn học xuất sắc.`,
      equipment: 'Văn bản tác phẩm, chân dung tác giả, tư liệu lịch sử, máy chiếu, bộ đề ôn thi Tốt nghiệp THPT',
      location: 'Phòng học bộ môn Ngữ văn / Lớp học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isExam ? 'Luyện thi Tốt nghiệp THPT' : ''
    });
  });

  return list;
}

// =========================================================================
// 3. TIẾNG ANH THPT (LỚP 10, 11, 12) - GLOBAL SUCCESS (NXB GIÁO DỤC VIỆT NAM)
// Chuẩn 105 tiết / năm học (3 tiết/tuần x 35 tuần thực học)
// Mỗi Unit gồm 8 tiết riêng biệt: Getting Started, Language, Reading, Speaking, Listening, Writing, Communication and Culture / CLIL, Looking Back & Project
// =========================================================================
export function getEnglishHighSchoolCurriculum(grade: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const list: RawHighSchoolLesson[] = [];

  interface HighSchoolUnitDetails {
    unitNum: number;
    title: string;
    topicName: string;
    gettingStarted: string;
    language: string;
    reading: string;
    speaking: string;
    listening: string;
    writing: string;
    communication: string;
    lookingBack: string;
  }

  const highSchoolEnglishUnits: Record<number, { term1: HighSchoolUnitDetails[]; term2: HighSchoolUnitDetails[] }> = {
    10: {
      term1: [
        {
          unitNum: 1,
          title: 'Unit 1: Family Life',
          topicName: 'Family Life',
          gettingStarted: 'Household chores and family values',
          language: 'Pronunciation (/br/, /kr/, /tr/) & Present Simple vs Present Continuous',
          reading: 'Benefits of sharing household chores in families',
          speaking: 'Talking about family routines and household responsibilities',
          listening: 'Family life experiences and bonding moments',
          writing: 'Writing an essay about family chores and mutual support',
          communication: 'Culture: Family values in Viet Nam and the UK',
          lookingBack: 'Review & Project: Family Chore Rules Guide'
        },
        {
          unitNum: 2,
          title: 'Unit 2: Humans and the Environment',
          topicName: 'Humans and the Environment',
          gettingStarted: 'Go Green Club & environmental awareness',
          language: 'Pronunciation (/kl/, /pl/, /gr/, /pr/) & Future with Will and Be going to / Passive voice',
          reading: 'A green lifestyle and adopting sustainable living habits',
          speaking: 'Giving presentations on ways to live greener and reduce waste',
          listening: 'An announcement about eco-friendly school community events',
          writing: 'Writing an article advising how to make a school greener',
          communication: 'Culture: Green initiatives in Germany and Viet Nam',
          lookingBack: 'Review & Project: Go Green Club School Campaign'
        },
        {
          unitNum: 3,
          title: 'Unit 3: Music',
          topicName: 'Music',
          gettingStarted: 'A world of music & musical instruments',
          language: 'Pronunciation (Stress in two-syllable words) & Compound sentences with coordinators and to-infinitive/bare-infinitive',
          reading: 'A famous music show / Vietnamese traditional Quan ho music',
          speaking: 'Talking about a favourite singer, band or music genre',
          listening: 'An interview about an international youth music festival',
          writing: 'Writing a review of a live music performance or show',
          communication: 'Culture: Traditional music festivals around the world',
          lookingBack: 'Review & Project: Music Talent Show & Poster'
        },
        {
          unitNum: 4,
          title: 'Unit 4: For a Better Community',
          topicName: 'For a Better Community',
          gettingStarted: 'Volunteering in our neighbourhood',
          language: 'Pronunciation (Stress in words ending in -ed) & Past Simple vs Past Continuous with When/While',
          reading: 'Volunteer work and community development projects',
          speaking: 'Discussing reasons for volunteering and selecting projects',
          listening: 'Experiences of teenage community volunteers',
          writing: 'Writing an application letter for a volunteer job',
          communication: 'Culture: Volunteering traditions in ASEAN countries',
          lookingBack: 'Review & Project: Volunteer Project Proposal'
        },
        {
          unitNum: 5,
          title: 'Unit 5: Inventions',
          topicName: 'Inventions',
          gettingStarted: 'Smart inventions transforming our daily lives',
          language: 'Pronunciation (Stress in three-syllable nouns) & Present Perfect tense and gerunds/infinitives',
          reading: 'AI, 3D printing and smartphones as transformative inventions',
          speaking: 'Discussing the pros and cons of artificial intelligence gadgets',
          listening: 'A lecture on flying cars and smart future appliances',
          writing: 'Writing a description of a smart invention and its functions',
          communication: 'Culture: Famous inventions that changed human history',
          lookingBack: 'Review & Project: Smart AI Invention Showcase'
        }
      ],
      term2: [
        {
          unitNum: 6,
          title: 'Unit 6: Gender Equality',
          topicName: 'Gender Equality',
          gettingStarted: 'Equal opportunities for men and women in society',
          language: 'Pronunciation (Stress in two-syllable adjectives) & Passive voice with modal verbs (can, must, should)',
          reading: 'Eliminating gender bias in career choices and employment',
          speaking: 'Expressing viewpoints on gender equality in the workplace',
          listening: 'A radio talk on women in science, technology, and leadership',
          writing: 'Writing an essay on career choices and gender equality',
          communication: 'Culture: Global achievements in female empowerment',
          lookingBack: 'Review & Project: Career Fair for All Poster'
        },
        {
          unitNum: 7,
          title: 'Unit 7: Viet Nam and International Organisations',
          topicName: 'Viet Nam and International Organisations',
          gettingStarted: 'Viet Nam\'s active role in the United Nations, ASEAN & WTO',
          language: 'Pronunciation (Stress in words ending in -ee, -eer, -ese) & Comparative and superlative adjectives',
          reading: 'International cooperation, UNICEF, UNESCO and development goals',
          speaking: 'Talking about international youth organisations and programmes',
          listening: 'A speech on international educational aid and scholarships',
          writing: 'Writing a paragraph about an international organization in Viet Nam',
          communication: 'Culture: Model United Nations (MUN) simulation and diplomacy',
          lookingBack: 'Review & Project: Model United Nations Presentation'
        },
        {
          unitNum: 8,
          title: 'Unit 8: New Ways to Learn',
          topicName: 'New Ways to Learn',
          gettingStarted: 'Digital tools, AI and smart classroom technology',
          language: 'Pronunciation (Sentence stress in rhythm) & Defining and non-defining relative clauses with who, which, that',
          reading: 'Blended learning, flipped classrooms and AI educational tools',
          speaking: 'Discussing electronic devices used for learning English',
          listening: 'A discussion on online learning platforms and cyber safety',
          writing: 'Writing a paragraph about the advantages of mobile learning apps',
          communication: 'Culture: High-tech education trends around the globe',
          lookingBack: 'Review & Project: Digital Learning App Proposal'
        },
        {
          unitNum: 9,
          title: 'Unit 9: Protecting the Environment',
          topicName: 'Protecting the Environment',
          gettingStarted: 'Climate change and environmental threats',
          language: 'Pronunciation (Rhythm in connected speech) & Reported Speech (Statements and commands)',
          reading: 'Single-use plastic, wildlife habitat destruction and solutions',
          speaking: 'Delivering presentations on wildlife protection and reducing carbon footprints',
          listening: 'A talk on global warming consequences and ocean pollution',
          writing: 'Writing an essay suggesting solutions to combat plastic pollution',
          communication: 'Culture: Earth Hour and global youth climate movements',
          lookingBack: 'Review & Project: Eco-Action Campaign Presentation'
        },
        {
          unitNum: 10,
          title: 'Unit 10: Ecotourism',
          topicName: 'Ecotourism',
          gettingStarted: 'Sustainable travel and national parks',
          language: 'Pronunciation (Intonation in listing and questions) & Conditional sentences Type 1 and Type 2',
          reading: 'Ecotourism destinations and responsible traveler ethics',
          speaking: 'Discussing sustainable travel habits and eco-friendly tours',
          listening: 'A guided audio tour of Phong Nha - Ke Bang National Park',
          writing: 'Writing a travel brochure promoting an ecotourism destination',
          communication: 'Culture: Ecotourism models in Costa Rica and Viet Nam',
          lookingBack: 'Review & Project: Ecotourism Destination Brochure'
        }
      ]
    },
    11: {
      term1: [
        {
          unitNum: 1,
          title: 'Unit 1: A Long and Healthy Life',
          topicName: 'A Long and Healthy Life',
          gettingStarted: 'Healthy habits, diet and fitness routines',
          language: 'Pronunciation (Strong and weak forms of auxiliary verbs) & Past Simple vs Present Perfect',
          reading: 'Longevity secrets from the world\'s Blue Zones',
          speaking: 'Giving advice on maintaining a healthy diet and lifestyle',
          listening: 'A doctor\'s interview on bacteria, viruses and immune health',
          writing: 'Writing a health guide article for school magazine',
          communication: 'Culture: Traditional medicine vs modern healthcare',
          lookingBack: 'Review & Project: Healthy Habits Guide presentation'
        },
        {
          unitNum: 2,
          title: 'Unit 2: The Generation Gap',
          topicName: 'The Generation Gap',
          gettingStarted: 'Different views between parents and teenagers',
          language: 'Pronunciation (Contracted forms) & Modal verbs: must, have to, should, ought to',
          reading: 'Bridging the generational gap and family communication',
          speaking: 'Discussing rules, curfew and generational conflicts',
          listening: 'Opinions of parents and teens on lifestyle differences',
          writing: 'Writing an essay discussing family generation gap solutions',
          communication: 'Culture: Extended vs nuclear families in different cultures',
          lookingBack: 'Review & Project: Bridge the Gap Forum presentation'
        },
        {
          unitNum: 3,
          title: 'Unit 3: Cities of the Future',
          topicName: 'Cities of the Future',
          gettingStarted: 'Smart, sustainable eco-cities of tomorrow',
          language: 'Pronunciation (Linking consonant to vowel) & Stative verbs in continuous forms',
          reading: 'Urban planning, IoT, AI transport and green architecture',
          speaking: 'Describing features of a futuristic smart city',
          listening: 'A talk on renewable energy integration in modern cities',
          writing: 'Writing an article describing your vision of a future city',
          communication: 'Culture: Smart city models in Singapore and Copenhagen',
          lookingBack: 'Review & Project: Future Smart City Model presentation'
        },
        {
          unitNum: 4,
          title: 'Unit 4: ASEAN and Viet Nam',
          topicName: 'ASEAN and Viet Nam',
          gettingStarted: 'ASEAN community and cultural diversity',
          language: 'Pronunciation (Elision of vowels) & Gerunds as subjects and objects',
          reading: 'ASEAN integration, youth exchange and educational agreements',
          speaking: 'Presenting an ASEAN member nation\'s culture and economy',
          listening: 'A report on the ASEAN Youth Volunteer Program',
          writing: 'Writing a proposal for an ASEAN cultural exchange event',
          communication: 'Culture: Cultural festivals and heritage sites in Southeast Asia',
          lookingBack: 'Review & Project: ASEAN Youth Summit presentation'
        },
        {
          unitNum: 5,
          title: 'Unit 5: Global Warming',
          topicName: 'Global Warming',
          gettingStarted: 'Causes and severe impacts of climate change',
          language: 'Pronunciation (Intonation in tag questions) & Present Participle and Perfect Participle clauses',
          reading: 'Greenhouse gas emissions, rising sea levels and renewable energy',
          speaking: 'Debating carbon tax policies and individual green actions',
          listening: 'An environmental expert\'s speech on COP climate conferences',
          writing: 'Writing an essay on human impacts causing global warming',
          communication: 'Culture: Global climate youth activism and reforestation',
          lookingBack: 'Review & Project: Climate Action Campaign presentation'
        }
      ],
      term2: [
        {
          unitNum: 6,
          title: 'Unit 6: Preserving Our Heritage',
          topicName: 'Preserving Our Heritage',
          gettingStarted: 'Tangible and intangible cultural heritage in Viet Nam',
          language: 'Pronunciation (Sentence stress in contrast) & To-infinitive clauses after nouns/adjectives',
          reading: 'Preserving Hoi An Ancient Town and Hue Imperial Citadel',
          speaking: 'Presenting solutions to restore and protect cultural relics',
          listening: 'A talk on preserving folk music and traditional craft villages',
          writing: 'Writing an essay on preserving local historical heritage',
          communication: 'Culture: UNESCO World Heritage sites and preservation ethics',
          lookingBack: 'Review & Project: Heritage Promotion Video presentation'
        },
        {
          unitNum: 7,
          title: 'Unit 7: Education Options for School-Leavers',
          topicName: 'Education Options for School-Leavers',
          gettingStarted: 'University vs vocational education pathways',
          language: 'Pronunciation (Intonation in choice questions) & Perfect gerunds and perfect participles',
          reading: 'Higher education, apprenticeships and career readiness',
          speaking: 'Discussing post-graduation options and career choices',
          listening: 'Career counseling advice for high school graduates',
          writing: 'Writing a formal letter asking for university course information',
          communication: 'Culture: Vocational education systems in Germany and Japan',
          lookingBack: 'Review & Project: Career Pathway Map presentation'
        },
        {
          unitNum: 8,
          title: 'Unit 8: Becoming Independent',
          topicName: 'Becoming Independent',
          gettingStarted: 'Essential life skills for independent living',
          language: 'Pronunciation (Linking /r/ and intrusive /w/, /j/) & Cleft sentences with It is/was... that...',
          reading: 'Time management, financial literacy and emotional autonomy',
          speaking: 'Talking about life skills high school students should master',
          listening: 'A podcast about teenager self-reliance and study routines',
          writing: 'Writing an article on how to develop independent study habits',
          communication: 'Culture: Teenage independence in Western and Asian cultures',
          lookingBack: 'Review & Project: Independence Handbook presentation'
        },
        {
          unitNum: 9,
          title: 'Unit 9: Social Issues',
          topicName: 'Social Issues',
          gettingStarted: 'Cyberbullying, peer pressure and youth anxiety',
          language: 'Pronunciation (Intonation in wh-questions) & Linking words and phrases of cause, consequence and concession',
          reading: 'Combating bullying in schools and online safety measures',
          speaking: 'Expressing viewpoints on social media impact and mental health',
          listening: 'A talk on youth peer support networks and psychological counseling',
          writing: 'Writing an essay suggesting measures to stop school bullying',
          communication: 'Culture: International youth campaigns against cyberbullying',
          lookingBack: 'Review & Project: Anti-Bullying Campaign presentation'
        },
        {
          unitNum: 10,
          title: 'Unit 10: The Ecosystem',
          topicName: 'The Ecosystem',
          gettingStarted: 'Ecosystem balance and biodiversity restoration',
          language: 'Pronunciation (Rhythm in long sentences) & Compound nouns and compound adjectives',
          reading: 'Marine ecosystems, coral reefs and mangrove forest conservation',
          speaking: 'Presenting ideas for restoring local wetland and forest habitats',
          listening: 'A documentary audio on endangered wildlife rescue stations',
          writing: 'Writing a report on local environmental conservation efforts',
          communication: 'Culture: Global biodiversity restoration conventions',
          lookingBack: 'Review & Project: Ecosystem Restoration Plan presentation'
        }
      ]
    },
    12: {
      term1: [
        {
          unitNum: 1,
          title: 'Unit 1: Life Stories We Admire',
          topicName: 'Life Stories We Admire',
          gettingStarted: 'Inspiring figures and outstanding life achievements',
          language: 'Pronunciation (Homophones and weak forms) & Past Simple vs Past Continuous and Past Perfect',
          reading: 'Biographies of renowned leaders, scientists and philanthropists',
          speaking: 'Giving a talk about an inspiring historical or modern personality',
          listening: 'An audio biography of a Nobel laureate / heroic figure',
          writing: 'Writing a biographical profile of a person you admire',
          communication: 'Culture: Heroes and inspirational role models in world cultures',
          lookingBack: 'Review & Project: Inspiring Biography Poster presentation'
        },
        {
          unitNum: 2,
          title: 'Unit 2: A Multicultural World',
          topicName: 'A Multicultural World',
          gettingStarted: 'Cultural diversity, traditions and global exchange',
          language: 'Pronunciation (Connected speech: assimilation) & Articles: definite, indefinite, zero article',
          reading: 'Multicultural societies, culinary fusion and cultural preservation',
          speaking: 'Discussing cultural assimilation, identity and intercultural etiquette',
          listening: 'Interviews with people living in multicultural cities',
          writing: 'Writing an essay discussing advantages of multiculturalism',
          communication: 'Culture: Cultural etiquette and traditions around the world',
          lookingBack: 'Review & Project: Cultural Exchange Expo presentation'
        },
        {
          unitNum: 3,
          title: 'Unit 3: Green Living',
          topicName: 'Green Living',
          gettingStarted: 'Zero-waste lifestyle, circular economy and clean energy',
          language: 'Pronunciation (Stress in compound words) & Adverbial clauses of condition, concession and comparison',
          reading: 'Zero-waste living practices and renewable energy innovations',
          speaking: 'Debating plastic bans, carbon neutrality and renewable power',
          listening: 'A presentation on circular economy principles and eco-living',
          writing: 'Writing a problem-solution essay on urban waste management',
          communication: 'Culture: Eco-communities and green city rankings in Europe',
          lookingBack: 'Review & Project: Zero-Waste School Campaign presentation'
        },
        {
          unitNum: 4,
          title: 'Unit 4: Urbanisation',
          topicName: 'Urbanisation',
          gettingStarted: 'Urban migration, infrastructure and city expansion',
          language: 'Pronunciation (Diphthongs and triphthongs) & Inversion with negative adverbials (Not only... but also, Never...)',
          reading: 'Causes and consequences of rapid urbanisation in developing nations',
          speaking: 'Discussing urban problems (traffic, slums, pollution) and remedies',
          listening: 'An interview with an urban planner on sustainable mega-cities',
          writing: 'Writing an essay discussing pros and cons of urbanisation',
          communication: 'Culture: Urbanisation trends in Asian and European capitals',
          lookingBack: 'Review & Project: Smart Urban Solutions presentation'
        },
        {
          unitNum: 5,
          title: 'Unit 5: The World of Work',
          topicName: 'The World of Work',
          gettingStarted: 'Job market trends, 21st-century workplace and AI automation',
          language: 'Pronunciation (Intonation in job interviews) & Double comparatives and subjunctive mood',
          reading: 'Emerging jobs in AI, biotechnology and remote work culture',
          speaking: 'Practicing professional job interview simulations and inquiries',
          listening: 'A recruiter\'s advice on CV building, portfolio and interview etiquette',
          writing: 'Writing a formal job application cover letter and CV in English',
          communication: 'Culture: Work ethics and workplace culture in international corporations',
          lookingBack: 'Review & Project: Job Application & Mock Interview presentation'
        }
      ],
      term2: [
        {
          unitNum: 6,
          title: 'Unit 6: Artificial Intelligence',
          topicName: 'Artificial Intelligence',
          gettingStarted: 'AI revolution: Machine learning, LLMs and robotics',
          language: 'Pronunciation (Sentence stress in complex syntax) & Passive voice with reporting verbs (It is believed that...)',
          reading: 'Applications of AI in healthcare, education, agriculture and ethical dilemmas',
          speaking: 'Debating AI ethics, intellectual property and the future of human labor',
          listening: 'A keynote speech from an AI conference on generative models',
          writing: 'Writing an argumentative essay on whether AI will replace human jobs',
          communication: 'Culture: Global AI governance, ethics and international AI safety treaties',
          lookingBack: 'Review & Project: AI in Education Debate & Presentation'
        },
        {
          unitNum: 7,
          title: 'Unit 7: Lifelong Learning',
          topicName: 'Lifelong Learning',
          gettingStarted: 'Continuous education, online courses and upskilling',
          language: 'Pronunciation (Intonation in complex clauses) & Reduced relative clauses with V-ing, V-ed and to-V',
          reading: 'Importance of lifelong learning in a fast-evolving knowledge economy',
          speaking: 'Discussing personal self-study habits, MOOCs and skill development',
          listening: 'A podcast about digital learning platforms and micro-credentials',
          writing: 'Writing a personal learning statement and future development plan',
          communication: 'Culture: Lifelong learning culture in Scandinavian countries',
          lookingBack: 'Review & Project: Online Learning Portfolio presentation'
        },
        {
          unitNum: 8,
          title: 'Unit 8: Choosing a Career',
          topicName: 'Choosing a Career',
          gettingStarted: 'Career orientation, passion, skills and personality matching',
          language: 'Pronunciation (Rhythm in rapid speech) & Mixed conditionals (Type 2 and Type 3)',
          reading: 'Career assessment tools (MBTI, Holland codes) and vocation insights',
          speaking: 'Presenting career path choices and required professional certifications',
          listening: 'A webinar on university vs vocational employment opportunities',
          writing: 'Writing a reflective essay outlining personal 5-year career roadmap',
          communication: 'Culture: Career guidance models and mentorship around the world',
          lookingBack: 'Review & Project: Career Fair & Grade 12 Transition Expo'
        },
        {
          unitNum: 9,
          title: 'Unit 9: Protecting Endangered Species',
          topicName: 'Protecting Endangered Species',
          gettingStarted: 'Biodiversity crisis, poaching, habitat destruction and red lists',
          language: 'Pronunciation (Weak and strong forms of prepositions) & Compound nouns and complex prepositional phrases',
          reading: 'Conservation efforts for the Javan rhino, Saola and sea turtles',
          speaking: 'Delivering a presentation on stopping illegal wildlife trafficking',
          listening: 'An interview with a wildlife ranger at Cat Tien National Park',
          writing: 'Writing an essay appealing for wildlife habitat protection funds',
          communication: 'Culture: CITES treaty and international wildlife sanctuaries',
          lookingBack: 'Review & Project: Wildlife Protection Fund Campaign presentation'
        },
        {
          unitNum: 10,
          title: 'Unit 10: Career Paths',
          topicName: 'Career Paths',
          gettingStarted: 'Global workplace, international certifications and mobility',
          language: 'Pronunciation (Intonation in diplomatic discourse) & Advanced grammatical structures synthesis',
          reading: 'Thriving in global corporations and entrepreneurial ventures',
          speaking: 'Presenting high school graduation portfolio and university plans',
          listening: 'A graduation commencement speech on resilience and lifelong purpose',
          writing: 'Writing a formal statement of purpose for university / scholarship',
          communication: 'Culture: Global citizenship and international career opportunities',
          lookingBack: 'Review & Project: Graduation English Portfolio & Exhibition'
        }
      ]
    }
  };

  const currentGradeData = highSchoolEnglishUnits[g] || highSchoolEnglishUnits[10];

  // Build Term 1: 54 lessons (18 weeks x 3 periods)
  const term1Units = currentGradeData.term1;
  const term1Items: { topic: string; name: string; isGK?: boolean; isCK?: boolean; isProject?: boolean }[] = [];

  // Units 1 - 3 (3 x 8 = 24 periods: Weeks 1 - 8)
  for (let uIdx = 0; uIdx < 3; uIdx++) {
    const u = term1Units[uIdx];
    term1Items.push({ topic: u.title, name: `Getting Started: ${u.gettingStarted}` });
    term1Items.push({ topic: u.title, name: `Language: ${u.language}` });
    term1Items.push({ topic: u.title, name: `Reading: ${u.reading}` });
    term1Items.push({ topic: u.title, name: `Speaking: ${u.speaking}` });
    term1Items.push({ topic: u.title, name: `Listening: ${u.listening}` });
    term1Items.push({ topic: u.title, name: `Writing: ${u.writing}` });
    term1Items.push({ topic: u.title, name: `Communication and Culture / CLIL: ${u.communication}` });
    term1Items.push({ topic: u.title, name: `Looking Back & Project: ${u.lookingBack}`, isProject: true });
  }

  // Review 1 & Mid-Term 1 (Week 9: periods 25, 26, 27)
  term1Items.push({ topic: 'Review 1 (Units 1-3)', name: 'Review 1: Language (Phonetics, Vocabulary, Grammar Synthesis)' });
  term1Items.push({ topic: 'Review 1 (Units 1-3)', name: 'Review 1: Skills (Academic Reading, Listening, Writing, Speaking)' });
  term1Items.push({ topic: 'Assessment', name: `Mid-term Test 1 (Grade ${g})`, isGK: true });

  // Units 4 - 5 (Weeks 10 - 15, periods 28 to 45: 18 periods)
  term1Items.push({ topic: 'Assessment', name: `Mid-term Test 1 Feedback & Diagnostic Error Correction (Grade ${g})` });
  for (let uIdx = 3; uIdx < 5; uIdx++) {
    const u = term1Units[uIdx];
    term1Items.push({ topic: u.title, name: `Getting Started: ${u.gettingStarted}` });
    term1Items.push({ topic: u.title, name: `Language: ${u.language}` });
    term1Items.push({ topic: u.title, name: `Reading: ${u.reading}` });
    term1Items.push({ topic: u.title, name: `Speaking: ${u.speaking}` });
    term1Items.push({ topic: u.title, name: `Listening: ${u.listening}` });
    term1Items.push({ topic: u.title, name: `Writing: ${u.writing}` });
    term1Items.push({ topic: u.title, name: `Communication and Culture / CLIL: ${u.communication}` });
    term1Items.push({ topic: u.title, name: `Looking Back & Project: ${u.lookingBack}`, isProject: true });
  }
  term1Items.push({ topic: 'Semester Revision', name: `Intensive Semester 1 Language Consolidation & Exam Preparation` });

  // Review 2 & End-of-Term 1 in Week 16 (periods 46, 47, 48)
  term1Items.push({ topic: 'Review 2 (Units 4-5)', name: 'Review 2: Language & Integrated Skills Revision' });
  term1Items.push({ topic: 'Assessment', name: `End-of-Term 1 Test (Grade ${g})`, isCK: true });
  term1Items.push({ topic: 'Assessment', name: `End-of-Term 1 Speaking Assessment & Project Evaluation` });

  // Week 17 (periods 49, 50, 51): Feedback & Exam Practice
  term1Items.push({ topic: 'Assessment', name: `End-of-Term 1 Test Feedback & Semester 1 Diagnostic Review` });
  term1Items.push({ topic: 'Academic Debate', name: `High School English Debate Workshop: Global Citizenship & AI Trends` });
  term1Items.push({ topic: 'Exam Preparation', name: `National High School Exam Intensive Practice: Reading & Cloze Test` });

  // Week 18 (periods 52, 53, 54): STEM & Showcase
  term1Items.push({ topic: 'STEM Project', name: `STEM Project 1: "AI-Powered English Learning Assistant & Speech Synthesis" (Part 1)`, isProject: true });
  term1Items.push({ topic: 'STEM Project', name: `STEM Project 1: "AI-Powered English Learning Assistant & Speech Synthesis" (Part 2)`, isProject: true });
  term1Items.push({ topic: 'Language Portfolio', name: `Term 1 High School English Digital Portfolio Exhibition & Evaluation`, isProject: true });

  // Build Term 2: 51 lessons (17 weeks x 3 periods: 55 to 105)
  const term2Units = currentGradeData.term2;
  const term2Items: { topic: string; name: string; isGK?: boolean; isCK?: boolean; isProject?: boolean }[] = [];

  // Units 6 - 8 (3 x 7 = 21 periods: Weeks 19 - 25, periods 55 to 75)
  for (let uIdx = 0; uIdx < 3; uIdx++) {
    const u = term2Units[uIdx];
    term2Items.push({ topic: u.title, name: `Getting Started: ${u.gettingStarted}` });
    term2Items.push({ topic: u.title, name: `Language: ${u.language}` });
    term2Items.push({ topic: u.title, name: `Reading: ${u.reading}` });
    term2Items.push({ topic: u.title, name: `Speaking: ${u.speaking}` });
    term2Items.push({ topic: u.title, name: `Listening: ${u.listening}` });
    term2Items.push({ topic: u.title, name: `Writing: ${u.writing}` });
    term2Items.push({ topic: u.title, name: `Communication and Culture / CLIL: ${u.communication}` });
  }

  // Review 3 & Mid-Term 2 in Week 26 (periods 76, 77, 78)
  term2Items.push({ topic: 'Review 3 (Units 6-8)', name: 'Review 3: Language & Integrated Skills Revision' });
  term2Items.push({ topic: 'Review 3 (Units 6-8)', name: 'Looking Back & Project Presentation (Units 6-8)', isProject: true });
  term2Items.push({ topic: 'Assessment', name: `Mid-term Test 2 (Grade ${g})`, isGK: true });

  // Units 9 - 10 (Weeks 27 - 30, periods 79 to 90: 12 periods)
  term2Items.push({ topic: 'Assessment', name: `Mid-term Test 2 Feedback & Diagnostic Error Correction (Grade ${g})` });
  for (let uIdx = 3; uIdx < 5; uIdx++) {
    const u = term2Units[uIdx];
    term2Items.push({ topic: u.title, name: `Getting Started: ${u.gettingStarted}` });
    term2Items.push({ topic: u.title, name: `Language: ${u.language}` });
    term2Items.push({ topic: u.title, name: `Reading: ${u.reading}` });
    term2Items.push({ topic: u.title, name: `Speaking: ${u.speaking}` });
    term2Items.push({ topic: u.title, name: `Listening: ${u.listening}` });
  }
  term2Items.push({ topic: term2Units[4].title, name: `Writing: ${term2Units[4].writing}` });

  // Review 4 & End-of-Year Test in Week 31 (periods 91, 92, 93)
  term2Items.push({ topic: term2Units[4].title, name: `Communication and Culture / CLIL: ${term2Units[4].communication}` });
  term2Items.push({ topic: 'Review 4 (Units 9-10)', name: 'Review 4: Language & Comprehensive Exam Strategy' });
  term2Items.push({ topic: 'Assessment', name: `End-of-Year Test (Grade ${g})`, isCK: true });

  // Week 32 (periods 94, 95, 96): Feedback & Sprint
  term2Items.push({ topic: 'Assessment', name: `End-of-Year Test Feedback & Overall Revision for High School Graduation` });
  term2Items.push({ topic: 'Exam Sprint', name: `National High School Exam Final Sprint: 50 Questions Mock Test (Part 1)` });
  term2Items.push({ topic: 'Exam Sprint', name: `National High School Exam Final Sprint: Advanced Reading & Paraphrasing Techniques (Part 2)` });

  // Week 33 (periods 97, 98, 99): STEM & Academic Workshop
  term2Items.push({ topic: 'STEM Project', name: `STEM Project 2: "AI-Powered Multilingual Digital Assistant" (Part 1)`, isProject: true });
  term2Items.push({ topic: 'STEM Project', name: `STEM Project 2: "AI-Powered Multilingual Digital Assistant" (Part 2)`, isProject: true });
  term2Items.push({ topic: 'Academic Workshop', name: `High School English Academic Presentation & Critical Thinking Seminar` });

  // Week 34 (periods 100, 101, 102): Intensive Exam Simulation
  term2Items.push({ topic: 'Exam Simulation', name: `National High School Graduation Exam Simulation Test (50 Questions)` });
  term2Items.push({ topic: 'Exam Simulation', name: `Test Analysis, Time Management Strategies & Common Pitfalls Correction` });
  term2Items.push({ topic: 'Consolidation', name: `Final Comprehensive Grammar, Lexis & Reading Strategies Mastery` });

  // Week 35 (periods 103, 104, 105): Summary & Graduation Exhibition
  term2Items.push({ topic: 'Graduation Exhibition', name: `High School Graduation English Digital Portfolio Exhibition`, isProject: true });
  term2Items.push({ topic: 'Farewell Presentation', name: `Farewell English Presentation: "My Journey and Future Aspirations"` });
  term2Items.push({ topic: 'School Year Summary', name: `School Year Summary & Outstanding English Achievement Awards Ceremony` });

  // Combine all 105 lessons
  const all105Lessons = [...term1Items, ...term2Items];

  all105Lessons.forEach((item, idx) => {
    const periodNum = idx + 1;
    const weekNum = Math.min(35, Math.floor(idx / 3) + 1);

    list.push({
      week: weekNum,
      topic: item.topic,
      name: item.name,
      periods: 1,
      yccd: generateHighSchoolYccd('Tiếng Anh', String(g), item.name),
      equipment: 'Audio CD/MP3 Global Success, Smartboard, Cambridge Dictionary, LMS, IELTS/National Exam practice sets',
      location: 'English Language Lab / Classroom',
      notes: item.isGK ? 'Mid-term Assessment (GK)' : item.isCK ? 'End-of-term Assessment (CK)' : item.isProject ? 'Project Presentation' : ''
    });
  });

  return list;
}

// =========================================================================
// 4. GIÁO DỤC THỂ CHẤT THPT (LỚP 10, 11, 12) - KHUNG 70 TIẾT (2 TIẾT/TUẦN)
// =========================================================================
export function getGdtcHighSchoolCurriculum(grade: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const list: RawHighSchoolLesson[] = [];

  const gdtcHighSchoolData: Record<number, string[]> = {
    10: [
      'Tiết 1: Sử dụng các yếu tố tự nhiên và dinh dưỡng để rèn luyện sức khỏe & Tiết 2: Đội hình đội ngũ chuẩn hóa',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình phức hợp & Tiết 4: Đi đều, chạy đều đổi hướng',
      'Tiết 5: Bài thể dục nhịp điệu phát triển chung nam/nữ: Động tác 1-8 & Tiết 6: Động tác 9-16',
      'Tiết 7: Hoàn thiện bài thể dục nhịp điệu 16 động tác & Tiết 8: Luyện tập đồng diễn theo nhóm',
      'Tiết 9: Kỹ thuật chạy cự li ngắn 100m: Kỹ thuật xuất phát thấp bằng bàn đạp & Tiết 10: Chạy lao sau xuất phát',
      'Tiết 11: Kỹ thuật chạy giữa quãng và về đích 100m & Tiết 12: Chạy tiếp sức 4x100m',
      'Tiết 13: Bật xa tại chỗ và Bật cao có đà & Tiết 14: Bài tập phát triển sức bật chân',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (1000m nam / 800m nữ) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 10 (Chạy ngắn 100m & Bài thể dục nhịp điệu)',
      'Tiết 19: Nhảy cao kiểu lưng qua xà (Fosbury Flop) / Bước qua: Chạy đà và giậm nhảy & Tiết 20: Bay trên không',
      'Tiết 21: Hoàn thiện kỹ thuật Nhảy cao mức xà 120-135cm & Tiết 22: Tiếp đất an toàn trên đệm mút dày',
      'Tiết 23: Ném bóng xa có đà / Đẩy tạ lưng hướng ném: Kỹ thuật cầm tạ & Tiết 24: Kỹ thuật ra sức cuối cùng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ / Bóng chuyền - Kỹ thuật chuyên sâu & Tiết 26: Chiến thuật nhóm',
      'Tiết 27: Thể thao tự chọn: Trận đấu tập luyện theo luật thi đấu quốc gia & Tiết 28: Bài tập phát triển thể lực',
      'Tiết 29: Kỹ năng phòng ngừa và xử lý chấn thương thể thao nghiêm trọng & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng thói quen rèn luyện thể lực suốt đời & Tiết 32: Ôn tập chạy bền',
      'Tiết 31 & Tiết 32: Kiểm tra, đánh giá cuối Học kỳ 1 môn GDTC 10 (Chạy ngắn 100m & Nhảy cao)',
      'Tiết 33 & Tiết 34: Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kỹ năng GDTC HK1',
      'Tiết 35 & Tiết 36: Sơ kết Học kỳ 1 & Giao lưu thể thao học sinh khối 10',
      'Tiết 37: Phương pháp kiểm soát căng thẳng và phục hồi năng lượng sau vận động & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục Aerobic phát triển thể lực lớp 10 & Tiết 40: Đồng diễn bài thể dục theo nhạc',
      'Tiết 41: Nhảy xa kiểu ưỡn thân: Kỹ thuật chạy đà 15-19 bước & Tiết 42: Giậm nhảy và bay trên không',
      'Tiết 43: Hoàn thiện 4 giai đoạn kỹ thuật Nhảy xa kiểu ưỡn thân mức 4.5m - 5.5m & Tiết 44: Tiếp đất an toàn',
      'Tiết 45: Chạy nhanh cự li ngắn 100m nâng cao tốc độ tối đa & Tiết 46: Chạy lặp lại cự li ngắn 60m x 3 lần',
      'Tiết 47: Chạy chậm rèn sức bền 1500m nam / 800m nữ & Tiết 48: Phương pháp hít thở sâu hồi tĩnh',
      'Tiết 49: Ôn tập nhảy cao và ném bóng có đà / đẩy tạ & Tiết 50: Trò chơi vận động rèn sức mạnh tốc độ',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 10 (Nhảy xa kiểu ưỡn thân & Đẩy tạ)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu góc hiểm / Đập bóng chuyền trên lưới & Tiết 54: Phòng thủ bọc lót',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu giải chính thức & Tiết 56: Chiến thuật tấn công ghi điểm',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải thi đấu thể thao học sinh khối 10 & Tiết 58: Thực hành làm trọng tài',
      'Tiết 59: Ôn tập toàn diện kỹ năng GDTC 10 chuẩn bị kiểm tra cuối năm',
      'Tiết 61 & Tiết 62: Kiểm tra, đánh giá cuối Học kỳ 2 môn GDTC 10 (Nhảy xa & Thể thao tự chọn)',
      'Tiết 63 & Tiết 64: Chữa bài kiểm tra cuối HK2 & Kiểm tra tiêu chuẩn đánh giá thể lực học sinh lớp 10 theo QĐ 53/2008/QĐ-BGDĐT',
      'Tiết 65 & Tiết 66: Hội khỏe Phù Đổng cấp trường: Thi đấu các môn Điền kinh và Bóng đá/Cầu lông/Bóng rổ',
      'Tiết 67 & Tiết 68: Biểu diễn đồng diễn bài thể dục toàn trường & Hướng dẫn tự rèn luyện thể thao hè',
      'Tiết 69 & Tiết 70: Tổng kết năm học & Đánh giá xếp loại cả năm môn GDTC 10'
    ],
    11: [
      'Tiết 1: Nguyên tắc lựa chọn môn thể thao phù hợp với tố chất cá nhân & Tiết 2: Đội hình đội ngũ chuẩn hóa',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình nâng cao & Tiết 4: Đi đều và chạy đều nhịp nhàng',
      'Tiết 5: Bài thể dục phát triển chung với tạ tay / dải lụa: Động tác 1-8 & Tiết 6: Động tác 9-16',
      'Tiết 7: Hoàn thiện bài thể dục với dụng cụ & Tiết 8: Luyện tập theo tổ nhóm',
      'Tiết 9: Kỹ thuật chạy cự li ngắn 100m: Hoàn thiện kỹ thuật xuất phát thấp & Tiết 10: Chạy lao và chạy giữa quãng',
      'Tiết 11: Kỹ thuật đánh đích chạy cự li ngắn 100m & Tiết 12: Chạy tiếp sức 4x100m',
      'Tiết 13: Bật xa tại chỗ phát triển sức mạnh bộc phát & Tiết 14: Bài tập nhảy bước bộ, nhảy cóc',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (1000m nam / 800m nữ) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 11 (Chạy ngắn 100m & Bài thể dục phát triển chung)',
      'Tiết 19: Nhảy cao kiểu lưng qua xà: Kỹ thuật chạy đà uốn vòng cung & Tiết 20: Giậm nhảy và vượt xà mức 125-140cm',
      'Tiết 21: Hoàn thiện kỹ thuật Nhảy cao kiểu lưng qua xà & Tiết 22: Tiếp đất an toàn trên đệm mút dày',
      'Tiết 23: Đẩy tạ lưng hướng ném (Tạ 5kg nam / 3kg nữ): Kỹ thuật trượt đà & Tiết 24: Ra sức cuối cùng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ / Bóng chuyền - Kỹ chiến thuật nâng cao & Tiết 26: Di chuyển chiến thuật',
      'Tiết 27: Thể thao tự chọn: Trận đấu tập luyện theo luật thi đấu quốc gia & Tiết 28: Bài tập phát triển thể lực',
      'Tiết 29: Kỹ năng xử lý chấn thương khớp vai, dây chằng & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng kế hoạch phát triển thể lực 5 năm & Tiết 32: Ôn tập chạy bền',
      'Tiết 31 & Tiết 32: Kiểm tra, đánh giá cuối Học kỳ 1 môn GDTC 11 (Chạy ngắn 100m & Nhảy cao)',
      'Tiết 33 & Tiết 34: Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kỹ năng GDTC HK1',
      'Tiết 35 & Tiết 36: Sơ kết Học kỳ 1 & Giao lưu thể thao học sinh khối 11',
      'Tiết 37: Phương pháp xây dựng chế độ dinh dưỡng thi đấu thể thao & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục nhịp điệu Aerobic lớp 11 & Tiết 40: Đồng diễn bài thể dục Aerobic theo nhạc',
      'Tiết 41: Nhảy xa kiểu ưỡn thân: Kỹ thuật chạy đà tốc độ cao 17-21 bước & Tiết 42: Giậm nhảy và ưỡn thân trên không',
      'Tiết 43: Hoàn thiện kỹ thuật Nhảy xa kiểu ưỡn thân mức 4.8m - 5.8m & Tiết 44: Tiếp đất an toàn',
      'Tiết 45: Chạy nhanh cự li ngắn 100m nâng cao tốc độ tối đa & Tiết 46: Chạy tiếp sức 4x100m hoàn chỉnh',
      'Tiết 47: Chạy chậm rèn sức bền 1500m nam / 800m nữ & Tiết 48: Phương pháp phân phối sức khi chạy',
      'Tiết 49: Ôn tập nhảy cao và đẩy tạ & Tiết 50: Trò chơi vận động rèn sức mạnh tốc độ',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 11 (Nhảy xa kiểu ưỡn thân & Đẩy tạ)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu smash / Chuyền hai bóng chuyền & Tiết 54: Chắn bóng trên lưới',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu giải chính thức & Tiết 56: Chiến thuật toàn diện',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải thi đấu thể thao học sinh khối 11 & Tiết 58: Điều hành trọng tài',
      'Tiết 59: Ôn tập toàn diện kỹ năng GDTC 11 chuẩn bị kiểm tra cuối năm',
      'Tiết 61 & Tiết 62: Kiểm tra, đánh giá cuối Học kỳ 2 môn GDTC 11 (Nhảy xa & Thể thao tự chọn)',
      'Tiết 63 & Tiết 64: Chữa bài kiểm tra cuối HK2 & Kiểm tra tiêu chuẩn đánh giá thể lực học sinh lớp 11 theo QĐ 53/2008/QĐ-BGDĐT',
      'Tiết 65 & Tiết 66: Hội khỏe Phù Đổng cấp trường: Thi đấu các môn Điền kinh và Thể thao tự chọn',
      'Tiết 67 & Tiết 68: Biểu diễn đồng diễn thể dục toàn trường & Hướng dẫn tự rèn luyện hè',
      'Tiết 69 & Tiết 70: Tổng kết năm học & Đánh giá xếp loại cả năm môn GDTC 11'
    ],
    12: [
      'Tiết 1: Xây dựng kế hoạch tự tập luyện thể dục thể thao suốt đời & Tiết 2: Đội hình đội ngũ chuẩn hóa',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình và chỉ huy đội ngũ & Tiết 4: Đi đều và chạy đều thuần thục',
      'Tiết 5: Bài thể dục phát triển chung 36 động tác nâng cao nam/nữ: Động tác 1-18 & Tiết 6: Động tác 19-36',
      'Tiết 7: Hoàn thiện bài thể dục liên hoàn 36 động tác & Tiết 8: Luyện tập đồng diễn nhóm',
      'Tiết 9: Kỹ thuật chạy cự li ngắn 100m: Tối ưu hóa kỹ thuật xuất phát thấp & Tiết 10: Chạy lao và giữa quãng',
      'Tiết 11: Kỹ thuật về đích và đánh đích 100m & Tiết 12: Chạy tiếp sức 4x100m hoàn chỉnh',
      'Tiết 13: Bật xa tại chỗ và Bật cao có đà nâng cao thành tích & Tiết 14: Bài tập sức mạnh chân',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (1500m nam / 800m nữ) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 12 (Chạy ngắn 100m & Bài thể dục liên hoàn)',
      'Tiết 19: Nhảy cao kiểu lưng qua xà: Hoàn thiện kỹ thuật chạy đà uốn cong & Tiết 20: Giậm nhảy và vượt xà mức 130-145cm',
      'Tiết 21: Hoàn thiện 4 giai đoạn kỹ thuật Nhảy cao kiểu lưng qua xà & Tiết 22: Tiếp đất an toàn',
      'Tiết 23: Đẩy tạ lưng hướng ném (Tạ 5kg nam / 3kg nữ): Hoàn thiện kỹ thuật trượt đà & Tiết 24: Ra sức cuối cùng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ / Bóng chuyền - Kỹ chiến thuật đỉnh cao & Tiết 26: Phối hợp tổ đấu',
      'Tiết 27: Thể thao tự chọn: Trận đấu tập luyện theo luật thi đấu quốc gia & Tiết 28: Bài tập phát triển thể lực',
      'Tiết 29: Kỹ năng sơ cấp cứu và phòng ngừa chấn thương thể thao nặng & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng thói quen rèn luyện thể chất chuẩn bị vào Đại học & Tiết 32: Ôn tập chạy bền',
      'Tiết 31 & Tiết 32: Kiểm tra, đánh giá cuối Học kỳ 1 môn GDTC 12 (Chạy ngắn 100m & Nhảy cao)',
      'Tiết 33 & Tiết 34: Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kỹ năng GDTC HK1',
      'Tiết 35 & Tiết 36: Sơ kết Học kỳ 1 & Giao lưu thể thao học sinh khối 12',
      'Tiết 37: Phương pháp giải tỏa căng thẳng kỳ thi Tốt nghiệp THPT bằng vận động thể thao & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục Aerobic phát triển thể lực lớp 12 & Tiết 40: Đồng diễn bài thể dục tốt nghiệp',
      'Tiết 41: Nhảy xa kiểu ưỡn thân: Kỹ thuật chạy đà 19-23 bước & Tiết 42: Giậm nhảy và bay trên không',
      'Tiết 43: Hoàn thiện kỹ thuật Nhảy xa thành tích 5.0m - 6.2m & Tiết 44: Rơi xuống hố cát an toàn',
      'Tiết 45: Chạy nhanh cự li ngắn 100m nâng cao tối đa tốc độ cá nhân & Tiết 46: Chạy tiếp sức 4x100m',
      'Tiết 47: Chạy chậm rèn sức bền 1500m nam / 800m nữ & Tiết 48: Phương pháp phân phối thể lực',
      'Tiết 49: Ôn tập nhảy cao và đẩy tạ & Tiết 50: Trò chơi vận động rèn luyện bản lĩnh thi đấu',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 12 (Nhảy xa kiểu ưỡn thân & Đẩy tạ)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu smash hiểm hóc / Sút bóng xa uy lực & Tiết 54: Phối hợp chiến thuật toàn đội',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu chính thức cấp trường & Tiết 56: Chiến thuật tấn công ghi điểm',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải thi đấu thể thao học sinh khối 12 & Tiết 58: Điều hành trọng tài',
      'Tiết 59: Ôn tập toàn diện kỹ năng thể chất 12 chuẩn bị kiểm tra cuối năm',
      'Tiết 61 & Tiết 62: Kiểm tra, đánh giá cuối Học kỳ 2 môn GDTC 12 (Nhảy xa & Thể thao tự chọn)',
      'Tiết 63 & Tiết 64: Chữa bài kiểm tra cuối HK2 & Kiểm tra tiêu chuẩn đánh giá thể lực học sinh lớp 12 theo QĐ 53/2008/QĐ-BGDĐT',
      'Tiết 65 & Tiết 66: Hội khỏe Phù Đổng cấp trường: Thi đấu Điền kinh và Thể thao tự chọn',
      'Tiết 67 & Tiết 68: Biểu diễn đồng diễn bài thể dục chào mừng Lễ tốt nghiệp THPT & Hướng dẫn rèn luyện thể lực vào Đại học',
      'Tiết 69 & Tiết 70: Tổng kết năm học & Xét hoàn thành chương trình GDTC THPT'
    ]
  };

  const topics = gdtcHighSchoolData[g] || gdtcHighSchoolData[10];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 16 || w === 31;

    list.push({
      week: w,
      topic: name.includes('Đội hình') ? 'Đội hình đội ngũ' : name.includes('Bài thể dục') ? 'Bài thể dục phát triển chung' : name.includes('Nhảy cao') ? 'Nhảy cao' : name.includes('Nhảy xa') ? 'Nhảy xa' : name.includes('Đẩy tạ') ? 'Đẩy tạ' : name.includes('Chạy') ? 'Chạy cự li ngắn / Chạy bền' : name.includes('Thể thao') ? 'Thể thao tự chọn' : isCK || isGK ? 'Đánh giá định kỳ' : 'Vận động thể lực',
      name: name,
      periods: 2,
      yccd: `- Thực hiện đúng kỹ thuật động tác, nhịp điệu và an toàn của bài học: ${name} (SGK GDTC ${g} Kết nối tri thức).\n- Tự giác, tích cực tập luyện cá nhân và phối hợp hiệu quả trong hoạt động nhóm, thi đấu thể thao.\n- Đạt chuẩn đánh giá thể lực học sinh THPT theo quy định của Bộ GD&ĐT (QĐ 53/2008/QĐ-BGDĐT).`,
      equipment: 'Còi thể thao, bàn đạp xuất phát, nệm nhảy cao Fosbury, tạ đẩy 3kg/5kg, bóng đá/cầu lông/bóng rổ',
      location: 'Sân vận động / Sân thể dục trường học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : ''
    });
  });

  return list;
}

// =========================================================================
// 5. CÁC MÔN CÒN LẠI THPT: VẬT LÍ, HÓA HỌC, SINH HỌC, LỊCH SỬ, ĐỊA LÍ, TIN HỌC, CÔNG NGHỆ, GDKT&PL, GDQP&AN, HĐTN&HN, ÂM NHẠC, MĨ THUẬT, GDĐP
// =========================================================================
export function getGeneralHighSchoolCurriculum(grade: string, subject: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const s = subject.toLowerCase().trim();
  const list: RawHighSchoolLesson[] = [];

  // 5.1. VẬT LÍ THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('vật lí') || s.includes('vật lý') || s.includes('vat li') || s.includes('physics')) {
    const vatLiTopics = [
      `Chương I: Mô tả chuyển động - Bài 1: Làm quen với Vật lí (Lớp ${g}) (2 tiết)`,
      `Bài 2: Vấn đề an toàn trong phòng thực hành Vật lí (2 tiết)`,
      `Bài 3: Thực hành tính sai số trong phép đo đại lượng vật lí (2 tiết)`,
      `Bài 4: Độ dịch chuyển và quãng đường đi được (2 tiết)`,
      `Bài 5: Tốc độ và vận tốc. Vận tốc tổng hợp (2 tiết)`,
      `Bài 6: Thực hành đo tốc độ của vật chuyển động (2 tiết)`,
      `Bài 7: Gia tốc và chuyển động thẳng biến đổi đều (2 tiết)`,
      `Bài 8: Thực hành đo gia tốc rơi tự do (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Vật lí Lớp ${g} (2 tiết)`,
      `Bài 9: Chuyển động ném ngang và ném xiên (2 tiết)`,
      `Chương II: Lực và chuyển động - Bài 10: Ba định luật Newton về chuyển động (2 tiết)`,
      `Bài 11: Một số lực trong thực tiễn: Trọng lực, Lực ma sát, Lực cản, Lực đẩy Archimedes (2 tiết)`,
      `Bài 12: Biến dạng của vật rắn và Lực đàn hồi của lò xo (Định luật Hooke) (2 tiết)`,
      `Chương III: Cân bằng của vật rắn - Bài 13: Moment lực và Điều kiện cân bằng của vật (2 tiết)`,
      `Chương IV: Năng lượng, công, công suất - Bài 14: Năng lượng và Công cơ học (2 tiết)`,
      `Bài 15: Công suất và Hiệu suất sinh công (2 tiết)`,
      `Ôn tập tổng hợp kiến thức Cơ học và Năng lượng Học kỳ 1 (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Vật lí Lớp ${g} (2 tiết)`,
      `Bài 16: Động năng và Thế năng (Thế năng trọng trường, thế năng đàn hồi) (2 tiết)`,
      `Bài 17: Cơ năng và Định luật bảo toàn cơ năng (2 tiết)`,
      `Chương V: Động lượng - Bài 18: Động lượng và Xung lượng của lực (2 tiết)`,
      `Bài 19: Định luật bảo toàn động lượng và Chuyển động bằng phản lực (2 tiết)`,
      `Chương VI: Chuyển động tròn - Bài 20: Động học của chuyển động tròn đều (Tốc độ góc, chu kì, tần số) (2 tiết)`,
      `Bài 21: Động lực học của chuyển động tròn: Lực hướng tâm và Gia tốc hướng tâm (2 tiết)`,
      `Chương VII: Biến dạng của vật rắn và Áp suất chất lỏng - Bài 22: Biến dạng kéo, nén của vật rắn (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Vật lí Lớp ${g} (2 tiết)`,
      `Bài 23: Khối lượng riêng và Áp suất chất lỏng (2 tiết)`,
      `Bài 24: Thực hành đo khối lượng riêng và áp suất chất lỏng (2 tiết)`,
      `Bài 25: Năng lượng nhiệt và Hiện tượng truyền nhiệt (2 tiết)`,
      `Dự án STEM Vật lí 10: "Chế tạo Tên lửa Nước Ứng dụng Định luật Bảo toàn Động lượng & Máy Nâng Thủy lực" (2 tiết)`,
      `Bài 26: Thực hành bắn tên lửa nước và phân tích tầm bay xa (2 tiết)`,
      `Bài 27: Hệ thống hóa toàn bộ kiến thức Vật lí Lớp ${g} (2 tiết)`,
      `Bài 28: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Vật lí ${g} (2 tiết)`,
      `Luyện giải bộ đề thi Vật lí chuẩn hóa ma trận Bộ GD&ĐT (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Vật lí ${g} (2 tiết)`
    ];

    vatLiTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững các định luật cơ học, nhiệt học, điện từ học, sóng và quang học của ${name} (SGK Vật lí ${g} Kết nối tri thức).\n- Thành thạo kỹ năng tiến hành thí nghiệm vật lí, đo lường sai số và mô hình hóa toán học các hiện tượng vật lí.\n- Bồi dưỡng tư duy khoa học thực nghiệm, năng lực sáng tạo kỹ thuật và định hướng nghề nghiệp kỹ sư, công nghệ.`,
        equipment: 'Bộ thí nghiệm chuyển động thẳng, cổng quang điện, đồng hồ đo thời gian hiện số, cảm biến lực kế, máy chiếu',
        location: 'Phòng học bộ môn Vật lí / Phòng thực hành STEM',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 30 ? 'Dự án STEM Vật lí' : ''
      });
    });

    return list;
  }

  // 5.2. HÓA HỌC THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('hóa học') || s.includes('hóa') || s.includes('hoa hoc') || s.includes('chemistry')) {
    const hoaHocTopics = [
      `Chương I: Cấu tạo nguyên tử - Bài 1: Thành phần của nguyên tử (Proton, Neutron, Electron) (Lớp ${g}) (2 tiết)`,
      `Bài 2: Hạt nhân nguyên tử. Nguyên tố hóa học và Đồng vị (2 tiết)`,
      `Bài 3: Cấu trúc lớp vỏ electron nguyên tử (Orbital nguyên tử, Cấu hình electron) (2 tiết)`,
      `Chương II: Bảng tuần hoàn các nguyên tố hóa học - Bài 4: Cấu tạo Bảng tuần hoàn (Ô, Chu kì, Nhóm) (2 tiết)`,
      `Bài 5: Xu hướng biến đổi bán kính nguyên tử, độ âm điện và tính kim loại, phi kim (2 tiết)`,
      `Bài 6: Xu hướng biến đổi tính acid, tính base của các oxide và hydroxide (2 tiết)`,
      `Bài 7: Định luật tuần hoàn và Ý nghĩa của bảng tuần hoàn các nguyên tố hóa học (2 tiết)`,
      `Chương III: Liên kết hóa học - Bài 8: Quy tắc Octet (Bát tử) (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Hóa học Lớp ${g} (2 tiết)`,
      `Bài 9: Liên kết ion và Tinh thể ion (2 tiết)`,
      `Bài 10: Liên kết cộng hóa trị (Phân cực và không phân cực, Liên kết cho - nhận) (2 tiết)`,
      `Bài 11: Liên kết Hydrogen và Tương tác Van der Waals (2 tiết)`,
      `Chương IV: Phản ứng oxi hóa - khử - Bài 12: Phản ứng oxi hóa - khử và Số oxi hóa (2 tiết)`,
      `Bài 13: Cân bằng phản ứng oxi hóa - khử bằng phương pháp thăng bằng electron (2 tiết)`,
      `Chương V: Năng lượng hóa học - Bài 14: Biến thiên enthalpy trong các phản ứng hóa học (2 tiết)`,
      `Bài 15: Tính biến thiên enthalpy của phản ứng hóa học theo enthalpy tạo thành và năng lượng liên kết (2 tiết)`,
      `Ôn tập tổng hợp kiến thức Cấu tạo chất và Năng lượng hóa học Học kỳ 1 (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Hóa học Lớp ${g} (2 tiết)`,
      `Chương VI: Tốc độ phản ứng hóa học - Bài 16: Các yếu tố ảnh hưởng đến tốc độ phản ứng (Nồng độ, nhiệt độ, áp suất, diện tích bề mặt, xúc tác) (2 tiết)`,
      `Bài 17: Biểu thức tốc độ phản ứng và Hằng số tốc độ phản ứng (Định luật tác dụng khối lượng) (2 tiết)`,
      `Bài 18: Thực hành nghiên cứu tốc độ phản ứng hóa học (2 tiết)`,
      `Chương VII: Nhóm nguyên tố Halogen - Bài 19: Tính chất vật lí và hóa học của đơn chất Halogen (F2, Cl2, Br2, I2) (2 tiết)`,
      `Bài 20: Hydrogen halide và Muối halide (HCl, NaCl, AgCl) (2 tiết)`,
      `Bài 21: Hợp chất chứa oxygen của chlorine (Nước Javel, Clorua vôi) và Ứng dụng tẩy trùng (2 tiết)`,
      `Bài 22: Thực hành nhận biết các ion halide trong phòng thí nghiệm (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Hóa học Lớp ${g} (2 tiết)`,
      `Bài 23: Đại cương về Hóa học hữu cơ và Cấu trúc phân tử hợp chất hữu cơ (2 tiết)`,
      `Bài 24: Phương pháp tách biệt và tinh chế hợp chất hữu cơ (Chưng cất, chiết, kết tinh, sắc kí) (2 tiết)`,
      `Bài 25: Công thức phân tử và Phổ khối lượng MS (2 tiết)`,
      `Dự án STEM Hóa học: "Tổng hợp Xà phòng Sinh học & Dung dịch Sát khuẩn Cồn Y tế Nano Bạc" (2 tiết)`,
      `Bài 26: Báo cáo kết quả sản phẩm dự án STEM Hóa học (2 tiết)`,
      `Bài 27: Hệ thống hóa toàn bộ kiến thức Hóa học Lớp ${g} (2 tiết)`,
      `Bài 28: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Hóa học ${g} (2 tiết)`,
      `Luyện giải bộ đề thi Hóa học chuẩn hóa ma trận Bộ GD&ĐT (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Hóa học ${g} (2 tiết)`
    ];

    hoaHocTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững cấu trúc nguyên tử, liên kết hóa học, nhiệt động học, tốc độ phản ứng và hóa học các nguyên tố của ${name} (SGK Hóa học ${g} Kết nối tri thức).\n- Thành thạo kỹ năng thao tác hóa chất an toàn, giải bài toán hóa học bằng phương pháp bảo toàn e, bảo toàn khối lượng.\n- Bồi dưỡng tư duy khoa học thực nghiệm và định hướng nghề nghiệp trong ngành hóa dược, vật liệu mới.`,
        equipment: 'Phòng thí nghiệm Hóa học, bộ hóa chất Halogen, ống nghiệm, nhiệt lượng kế, cân điện tử',
        location: 'Phòng thực hành Hóa học / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 30 ? 'Dự án STEM Hóa học' : ''
      });
    });

    return list;
  }

  // 5.3. SINH HỌC THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('sinh học') || s.includes('sinh') || s.includes('sinh hoc') || s.includes('biology')) {
    const sinhHocTopics = [
      `Chương I: Giới thiệu chung về Sinh học - Bài 1: Đối tượng, các lĩnh vực nghiên cứu và mục tiêu môn Sinh học (Lớp ${g}) (2 tiết)`,
      `Bài 2: Các phương pháp nghiên cứu và học tập môn Sinh học (2 tiết)`,
      `Bài 3: Các cấp độ tổ chức của thế giới sống (2 tiết)`,
      `Chương II: Sinh học tế bào - Bài 4: Các nguyên tố hóa học và Nước trong tế bào (2 tiết)`,
      `Bài 5: Các phân tử sinh học trong tế bào: Carbohydrate và Lipid (2 tiết)`,
      `Bài 6: Các phân tử sinh học: Protein và Nucleic acid (ADN, ARN) (2 tiết)`,
      `Bài 7: Thực hành xác định một số thành phần hóa học của tế bào (2 tiết)`,
      `Bài 8: Tế bào nhân sơ (Vi khuẩn) (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Sinh học Lớp ${g} (2 tiết)`,
      `Bài 9: Tế bào nhân thực (Nhân, Ti thể, Lục lạp, Lưới nội chất, Bộ máy Golgi) (2 tiết)`,
      `Bài 10: Cấu trúc màng sinh chất và Khung xương tế bào (2 tiết)`,
      `Bài 11: Thực hành quan sát tế bào dưới kính hiển vi quang học (2 tiết)`,
      `Chương III: Trao đổi chất và chuyển hóa năng lượng ở tế bào - Bài 12: Vận chuyển các chất qua màng sinh chất (2 tiết)`,
      `Bài 13: Chuyển hóa vật chất và năng lượng. Enzyme và vai trò của enzyme (2 tiết)`,
      `Bài 14: Hô hấp tế bào (Đường phân, Chu trình Krebs, Chuỗi chuyền electron hô hấp) (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Sinh học Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Sinh học tế bào HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm thực hành Sinh học HK1 Lớp ${g} (2 tiết)`,
      `Chương IV: Thông tin giữa các tế bào và Chu kì tế bào - Bài 16: Thông tin giữa các tế bào (2 tiết)`,
      `Bài 17: Chu kì tế bào và Quá trình Nguyên phân (2 tiết)`,
      `Bài 18: Quá trình Giảm phân và Thụ tinh tạo biến dị tổ hợp (2 tiết)`,
      `Bài 19: Thực hành quan sát các kì nguyên phân và giảm phân của tế bào (2 tiết)`,
      `Bài 20: Công nghệ tế bào động vật và thực vật (Nhân bản vô tính, Liệu pháp tế bào gốc) (2 tiết)`,
      `Chương V: Vi sinh vật và Virus - Bài 21: Khái niệm, các nhóm vi sinh vật và các kiểu dinh dưỡng (2 tiết)`,
      `Bài 22: Sinh trưởng và sinh sản của vi sinh vật (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Sinh học Lớp ${g} (2 tiết)`,
      `Bài 23: Các yếu tố ảnh hưởng đến sinh trưởng của vi sinh vật và Ứng dụng lên men (2 tiết)`,
      `Bài 24: Cấu tạo và các giai đoạn nhân lên của Virus trong tế bào chủ (2 tiết)`,
      `Bài 25: Một số bệnh do virus gây ra ở người, động vật, thực vật và Miễn dịch (2 tiết)`,
      `Bài 26: Ứng dụng của virus trong y học và nông nghiệp (Vaccine, thể truyền gen) (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Sinh học Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành bổ trợ Sinh học ${g} (2 tiết)`,
      `Dự án STEM Sinh học: "Mô hình Lên men Thực phẩm Probiotic & Nuôi cấy Nấm Men Tự nhiên" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học và Luyện thi Tốt nghiệp THPT môn Sinh học (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn Sinh học Lớp ${g} (2 tiết)`
    ];

    sinhHocTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững cơ chế sinh học phân tử, cấu trúc tế bào, trao đổi chất, chu kì tế bào, di truyền và vi sinh vật của ${name} (SGK Sinh học ${g} Kết nối tri thức).\n- Rèn luyện kỹ năng làm tiêu bản hiển vi, nuôi cấy vi sinh vật và giải thích các hiện tượng y học, nông nghiệp thực tế.\n- Bồi dưỡng tình yêu thiên nhiên, ý thức bảo vệ đa dạng sinh học và định hướng nghề nghiệp trong ngành y dược, công nghệ sinh học.`,
        equipment: 'Kính hiển vi quang học độ phóng đại lớn, lam kính, lamen, bộ hóa chất nhuộm màu tế bào, máy chiếu',
        location: 'Phòng thực hành Sinh học / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 30 ? 'Dự án STEM Sinh học' : ''
      });
    });

    return list;
  }

  // 5.4. LỊCH SỬ THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('lịch sử') || s.includes('lich su') || s.includes('history')) {
    const lichSuTopics = [
      `Chủ đề 1: Lịch sử và Sử học - Bài 1: Hiện thực lịch sử và nhận thức lịch sử (Lớp ${g}) (2 tiết)`,
      `Bài 2: Tri thức lịch sử và cuộc sống (2 tiết)`,
      `Bài 3: Sử học với các lĩnh vực khoa học khác (2 tiết)`,
      `Bài 4: Sử học với công tác bảo tồn và phát huy giá trị di sản văn hóa (2 tiết)`,
      `Chủ đề 2: Một số nền văn minh thế giới Cổ - Trung đại - Bài 5: Khái niệm văn minh và Văn minh Ai Cập cổ đại (2 tiết)`,
      `Bài 6: Văn minh Ấn Độ và Trung Hoa cổ - trung đại (2 tiết)`,
      `Bài 7: Văn minh Hy Lạp - La Mã cổ đại (2 tiết)`,
      `Bài 8: Văn minh Tây Âu thời Phục hưng (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử Lớp ${g} (2 tiết)`,
      `Chủ đề 3: Các cuộc cách mạng công nghiệp trong lịch sử - Bài 9: Cách mạng công nghiệp lần thứ nhất và lần thứ hai (2 tiết)`,
      `Bài 10: Cách mạng công nghiệp lần thứ ba và lần thứ tư (Cách mạng 4.0) (2 tiết)`,
      `Chủ đề 4: Văn minh Đông Nam Á Cổ - Trung đại - Bài 11: Hành trình phát triển văn minh Đông Nam Á (2 tiết)`,
      `Chủ đề 5: Một số nền văn minh trên đất nước Việt Nam - Bài 12: Văn minh Văn Lang - Âu Lạc (2 tiết)`,
      `Bài 13: Văn minh Chăm-pa và Văn minh Phù Nam (2 tiết)`,
      `Bài 14: Văn minh Đại Việt: Kinh tế, chính trị và xã hội (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Lịch sử thế giới và Lịch sử Việt Nam HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm Di sản Văn hóa Lịch sử Lớp ${g} (2 tiết)`,
      `Chủ đề 6: Chiến tranh bảo vệ Tổ quốc trong lịch sử Việt Nam - Bài 16: Một số cuộc kháng chiến tiêu biểu trước 1945 (2 tiết)`,
      `Bài 17: Cuộc khởi nghĩa Lam Sơn và phong trào Tây Sơn (2 tiết)`,
      `Bài 18: Bài học lịch sử từ các cuộc kháng chiến và khởi nghĩa bảo vệ Tổ quốc (2 tiết)`,
      `Chủ đề 7: Một số cuộc cải cách lớn trong lịch sử Việt Nam - Bài 19: Cải cách Hồ Quý Ly và Triều Hồ (2 tiết)`,
      `Bài 20: Cuộc cải cách của Lê Thánh Tông (thế kỉ XV) (2 tiết)`,
      `Bài 21: Cuộc cải cách của Minh Mạng (nửa đầu thế kỉ XIX) (2 tiết)`,
      `Chủ đề 8: Lịch sử bảo vệ chủ quyền biển đảo - Bài 22: Vị trí chiến lược của Biển Đông và quần đảo Hoàng Sa, Trường Sa (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử Lớp ${g} (2 tiết)`,
      `Bài 23: Quá trình xác lập và thực thi chủ quyền của Việt Nam đối với Hoàng Sa và Trường Sa (2 tiết)`,
      `Chủ đề 9: Khối đại đoàn kết dân tộc - Bài 24: Quá trình hình thành và phát triển khối đại đoàn kết dân tộc Việt Nam (2 tiết)`,
      `Bài 25: Chính sách dân tộc của Đảng và Nhà nước Việt Nam trong thời kỳ Đổi mới (2 tiết)`,
      `Chủ đề 10: Hồ Chí Minh trong tiến trình lịch sử dân tộc - Bài 26: Di sản tư tưởng Hồ Chí Minh về độc lập dân tộc và CNXH (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Lịch sử Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành bổ trợ Lịch sử ${g} (2 tiết)`,
      `Dự án Lịch sử: "Sa bàn Số 3D Chiến dịch Điện Biên Phủ & Triển lãm Hành trình Di sản Lịch sử Việt Nam" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học và Luyện thi Tốt nghiệp THPT môn Lịch sử (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn Lịch sử Lớp ${g} (2 tiết)`
    ];

    lichSuTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Trình bày và phân tích sâu sắc các sự kiện, tiến trình lịch sử, bài học kinh nghiệm và thành tựu văn minh của ${name} (SGK Lịch sử ${g} Kết nối tri thức).\n- Phát triển năng lực tư duy lịch sử, khả năng phản biện tư liệu và đánh giá khách quan các nhân vật lịch sử.\n- Khơi dậy lòng yêu nước nồng nàn, niềm tự hào dân tộc và ý thức trách nhiệm bảo vệ chủ quyền Tổ quốc.`,
        equipment: 'Bản đồ lịch sử Việt Nam và thế giới, tranh ảnh tư liệu, video tài liệu lịch sử, máy chiếu',
        location: 'Phòng học bộ môn Lịch sử / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 31 ? 'Dự án Lịch sử Số 3D' : ''
      });
    });

    return list;
  }

  // 5.5. ĐỊA LÍ THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('địa lí') || s.includes('địa lý') || s.includes('dia li') || s.includes('geography')) {
    const diaLiTopics = [
      `Chương I: Sử dụng bản đồ - Bài 1: Một số phương pháp biểu hiện các đối tượng địa lí trên bản đồ (Lớp ${g}) (2 tiết)`,
      `Bài 2: Sử dụng bản đồ số và Hệ thống thông tin địa lí (GIS) trong học tập và đời sống (2 tiết)`,
      `Chương II: Trái Đất - Bài 3: Trái Đất trong hệ Mặt Trời. Hệ quả chuyển động tự quay quanh trục (2 tiết)`,
      `Bài 4: Hệ quả chuyển động của Trái Đất quanh Mặt Trời (Mùa, ngày đêm dài ngắn) (2 tiết)`,
      `Chương III: Thạch quyển - Bài 5: Thạch quyển. Nội lực và tác động của nội lực đến địa hình bề mặt Trái Đất (2 tiết)`,
      `Bài 6: Ngoại lực và tác động của ngoại lực đến địa hình bề mặt Trái Đất (2 tiết)`,
      `Chương IV: Khí quyển - Bài 7: Khí quyển. Sự phân bố nhiệt độ không khí trên Trái Đất (2 tiết)`,
      `Bài 8: Khí áp, gió và các hoàn lưu khí quyển (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Địa lí Lớp ${g} (2 tiết)`,
      `Bài 9: Độ ẩm không khí và sự ngưng kết hơi nước. Mưa trên Trái Đất (2 tiết)`,
      `Chương V: Thủy quyển - Bài 10: Thủy quyển. Nước trên lục địa (Sông, hồ, nước ngầm, băng hà) (2 tiết)`,
      `Bài 11: Nước biển và đại dương (Sóng biển, thủy triều, dòng biển) (2 tiết)`,
      `Chương VI: Sinh quyển và Thổ nhưỡng - Bài 12: Đất và các nhân tố hình thành đất (2 tiết)`,
      `Bài 13: Sinh quyển và các nhân tố ảnh hưởng đến sự phát triển, phân bố sinh vật (2 tiết)`,
      `Chương VII: Một số quy luật của vỏ địa lí - Bài 14: Quy luật thống nhất và hoàn chỉnh, quy luật địa đới (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Địa lí Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Địa lí tự nhiên và Địa lí dân cư HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm Bản đồ Địa lí Lớp ${g} (2 tiết)`,
      `Bài 16: Đô thị hóa và các vấn đề xã hội của đô thị hóa toàn cầu (2 tiết)`,
      `Chương IX: Nguồn lực phát triển kinh tế - Bài 17: Các nguồn lực phát triển kinh tế và Cơ cấu kinh tế (2 tiết)`,
      `Chương X: Địa lí nông nghiệp - Bài 18: Vai trò, đặc điểm và các nhân tố ảnh hưởng đến nông nghiệp (2 tiết)`,
      `Bài 19: Địa lí ngành trồng trọt và chăn nuôi thế giới (2 tiết)`,
      `Bài 20: Địa lí ngành lâm nghiệp và thủy sản (2 tiết)`,
      `Chương XI: Địa lí công nghiệp - Bài 21: Vai trò, đặc điểm và cơ cấu ngành công nghiệp (2 tiết)`,
      `Bài 22: Địa lí các ngành công nghiệp năng lượng, luyện kim, điện tử - tin học (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Địa lí Lớp ${g} (2 tiết)`,
      `Chương XII: Địa lí dịch vụ - Bài 23: Vai trò, đặc điểm và cơ cấu ngành dịch vụ (2 tiết)`,
      `Bài 24: Địa lí ngành giao thông vận tải và bưu chính viễn thông (2 tiết)`,
      `Bài 25: Địa lí ngành thương mại và du lịch thế giới (2 tiết)`,
      `Chương XIII: Môi trường và Phát triển bền vững - Bài 26: Môi trường và tài nguyên thiên nhiên (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Địa lí Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành bổ trợ Địa lí ${g} (2 tiết)`,
      `Dự án Địa lí: "Xây dựng Bản đồ Web GIS Phân tích Biến đổi Khí hậu & Kế hoạch Phát triển Du lịch Xanh" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học và Luyện thi Tốt nghiệp THPT môn Địa lí (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn Địa lí Lớp ${g} (2 tiết)`
    ];

    diaLiTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chương') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững các quy luật tự nhiên của vỏ địa lí, đặc điểm kinh tế - xã hội, dân cư và ngành nghề của ${name} (SGK Địa lí ${g} Kết nối tri thức).\n- Khai thác thành thạo bản đồ, Atlas Địa lí, số liệu thống kê, biểu đồ và ứng dụng công nghệ GIS.\n- Bồi dưỡng ý thức bảo vệ tài nguyên môi trường, thích ứng biến đổi khí hậu và phát triển bền vững.`,
        equipment: 'Quả địa cầu, Atlas Địa lí Việt Nam và thế giới, phần mềm GIS, bản đồ chuyên đề, máy chiếu',
        location: 'Phòng học bộ môn Địa lí / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Dự án Bản đồ Web GIS' : ''
      });
    });

    return list;
  }

  // 5.6. TIN HỌC THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('computer')) {
    const tinHocTopics = [
      `Chủ đề 1: Máy tính và xã hội tri thức - Bài 1: Thông tin và xử lý thông tin trong kỷ nguyên số (Lớp ${g}) (2 tiết)`,
      `Bài 2: Vai trò của thiết bị thông minh và mạng máy tính trong xã hội (2 tiết)`,
      `Bài 3: Thực hành sử dụng thiết bị số và lưu trữ đám mây an toàn (2 tiết)`,
      `Chủ đề 2: Mạng máy tính và Internet - Bài 4: Mạng máy tính và các dịch vụ Internet hiện đại (2 tiết)`,
      `Bài 5: An toàn thông tin trên không gian mạng và phòng chống mã độc (2 tiết)`,
      `Chủ đề 3: Đạo đức, pháp luật và văn hóa số - Bài 6: Bản quyền, sở hữu trí tuệ và văn hóa ứng xử số (2 tiết)`,
      `Chủ đề 4: Ứng dụng tin học - Bài 7: Thiết kế đồ họa vector với Inkscape / Canva (2 tiết)`,
      `Bài 8: Xử lý hình ảnh số và thiết kế banner truyền thông (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp ${g} (2 tiết)`,
      `Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính - Bài 9: Làm quen với ngôn ngữ lập trình Python (2 tiết)`,
      `Bài 10: Các kiểu dữ liệu cơ bản, biến và câu lệnh gán trong Python (2 tiết)`,
      `Bài 11: Các phép toán số học, logic và câu lệnh rẽ nhánh if-else (2 tiết)`,
      `Bài 12: Câu lệnh lặp for và while trong Python (2 tiết)`,
      `Bài 13: Xử lý danh sách (List) và các thao tác trên danh sách (2 tiết)`,
      `Bài 14: Xử lý xâu ký tự (String) và các phương thức xử lý văn bản (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Tin học ứng dụng và Lập trình Python HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm phần mềm Lớp ${g} (2 tiết)`,
      `Bài 16: Thao tác đọc ghi tệp dữ liệu (File I/O) trong Python (2 tiết)`,
      `Bài 17: Kỹ thuật kiểm thử và gỡ lỗi chương trình (Debugging) (2 tiết)`,
      `Bài 18: Thuật toán tìm kiếm (Tìm kiếm tuần tự và tìm kiếm nhị phân) (2 tiết)`,
      `Bài 19: Thuật toán sắp xếp (Sắp xếp nổi bọt, chèn, chọn) (2 tiết)`,
      `Bài 20: Đánh giá độ phức tạp thuật toán và tối ưu hóa mã nguồn (2 tiết)`,
      `Chủ đề 6: Cơ sở dữ liệu và Web - Bài 21: Giới thiệu Cơ sở dữ liệu quan hệ và SQL (2 tiết)`,
      `Bài 22: Tạo bảng, truy vấn dữ liệu SELECT, WHERE, ORDER BY trong SQL (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp ${g} (2 tiết)`,
      `Bài 23: Thiết kế trang web cơ bản với ngôn ngữ HTML5 (2 tiết)`,
      `Bài 24: Định dạng giao diện web responsive hiện đại với CSS3 (2 tiết)`,
      `Bài 25: Lập trình kịch bản tương tác web với JavaScript (2 tiết)`,
      `Chủ đề 7: Trí tuệ nhân tạo (AI) và Hướng nghiệp - Bài 26: Khám phá Trí tuệ nhân tạo (AI) và Khoa học dữ liệu (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Tin học Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành tối ưu hóa mã nguồn Python (2 tiết)`,
      `Dự án Tin học & AI: "Phát triển Ứng dụng Web / Chatbot AI Hỗ trợ Học tập Thông minh" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học môn Tin học ${g} (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn Tin học Lớp ${g} (2 tiết)`
    ];

    tinHocTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Thực hành thành thạo lập trình Python, cơ sở dữ liệu SQL, thiết kế web HTML/CSS và ứng dụng đồ họa số của ${name} (SGK Tin học ${g} Kết nối tri thức).\n- Phát triển tư duy thuật toán, kỹ năng giải quyết vấn đề bằng máy tính và năng lực ứng dụng AI an toàn.\n- Bồi dưỡng niềm đam mê công nghệ và định hướng nghề nghiệp trong ngành CNTT.`,
        equipment: 'Phòng máy tính kết nối Internet tốc độ cao, Python IDLE / VS Code, MS Access / MySQL, LMS',
        location: 'Phòng học bộ môn Tin học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Dự án Web & AI' : ''
      });
    });

    return list;
  }

  // 5.7. CÔNG NGHỆ THPT (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('công nghệ') || s.includes('cong nghe') || s.includes('technology')) {
    const congNgheTopics = [
      `Chương I: Đại cương về Công nghệ - Bài 1: Công nghệ và đời sống trong thời đại 4.0 (Lớp ${g}) (2 tiết)`,
      `Bài 2: Hệ thống kỹ thuật và các thành phần cơ bản (2 tiết)`,
      `Bài 3: Công nghệ phổ biến trong các lĩnh vực sản xuất (2 tiết)`,
      `Bài 4: Thị trường lao động trong lĩnh vực kỹ thuật, công nghệ (2 tiết)`,
      `Chương II: Vẽ kỹ thuật ứng dụng - Bài 5: Tiêu chuẩn trình bày bản vẽ kỹ thuật (2 tiết)`,
      `Bài 6: Hình chiếu vuông góc và hình chiếu trục đo (2 tiết)`,
      `Bài 7: Bản vẽ chi tiết và Bản vẽ lắp cơ khí (2 tiết)`,
      `Bài 8: Bản vẽ xây dựng và bản vẽ kiến trúc ngôi nhà (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp ${g} (2 tiết)`,
      `Bài 9: Vẽ kỹ thuật có sự trợ giúp của máy tính (AutoCAD / SolidWorks cơ bản) (2 tiết)`,
      `Chương III: Thiết kế kỹ thuật - Bài 10: Khái quát về quy trình thiết kế kỹ thuật (2 tiết)`,
      `Bài 11: Các giai đoạn của quy trình thiết kế kỹ thuật (2 tiết)`,
      `Bài 12: Đánh giá và tối ưu hóa giải pháp thiết kế sản phẩm (2 tiết)`,
      `Chương IV: Công nghệ Trồng trọt / Chăn nuôi công nghệ cao - Bài 13: Thổ nhưỡng và Dinh dưỡng cây trồng (2 tiết)`,
      `Bài 14: Nhà màng, nhà kính thông minh và hệ thống tưới tự động IoT (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Công nghệ Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Vẽ kỹ thuật và Thiết kế công nghệ HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm mô hình Kỹ thuật Lớp ${g} (2 tiết)`,
      `Chương V: Công nghệ Cơ khí và Động lực - Bài 16: Vật liệu cơ khí mới và vật liệu nano (2 tiết)`,
      `Bài 17: Các phương pháp gia công cơ khí hiện đại (Gia công CNC, in 3D) (2 tiết)`,
      `Bài 18: Động cơ đốt trong và Xu hướng phát triển Ô tô điện / Xe lai Hybrid (2 tiết)`,
      `Chương VI: Công nghệ Điện - Điện tử - Bài 19: Mạch điện xoay chiều 3 pha và mạng điện hạ áp (2 tiết)`,
      `Bài 20: Khí cụ điện đóng cắt và bảo vệ mạch điện (Aptomat, Rơ le nhiệt) (2 tiết)`,
      `Bài 21: Máy điện xoay chiều: Máy biến áp và Động cơ không đồng bộ 3 pha (2 tiết)`,
      `Bài 22: Mạch điện tử điều khiển và Cảm biến thông minh (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp ${g} (2 tiết)`,
      `Chương VII: Ngôi nhà thông minh (Smart Home) - Bài 23: Kiến trúc hệ thống Smart Home và điều khiển IoT (2 tiết)`,
      `Bài 24: Tiết kiệm năng lượng và Năng lượng tái tạo (Điện mặt trời, điện gió) (2 tiết)`,
      `Bài 25: An toàn điện và các biện pháp bảo vệ môi trường công nghiệp (2 tiết)`,
      `Bài 26: Định hướng lựa chọn nghề nghiệp thuộc khối ngành Kỹ thuật - Công nghệ (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Công nghệ Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành lắp ráp mạch bổ trợ (2 tiết)`,
      `Dự án STEM Công nghệ: "Thiết kế Hệ thống Tưới Tự động IoT & Mạch Báo Cháy Thông minh Smart Home" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học môn Công nghệ ${g} (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn Công nghệ Lớp ${g} (2 tiết)`
    ];

    congNgheTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chương') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững các nguyên lý kỹ thuật, bản vẽ CAD, công nghệ chế tạo, điện tử và tự động hóa của ${name} (SGK Công nghệ ${g} Kết nối tri thức).\n- Vận dụng quy trình thiết kế kỹ thuật, chế tạo mô hình thử nghiệm và tuân thủ an toàn lao động tuyệt đối.\n- Bồi dưỡng tư duy sáng tạo kỹ thuật và định hướng nghề nghiệp tương lai.`,
        equipment: 'Bộ dụng cụ cơ khí, phần mềm AutoCAD, mô hình mạch điện Smart Home, Kit Arduino/ESP32, cảm biến',
        location: 'Phòng học bộ môn Công nghệ / Xưởng thực hành STEM',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 31 ? 'Dự án STEM IoT' : ''
      });
    });

    return list;
  }

  // 5.8. GIÁO DỤC KINH TẾ VÀ PHÁP LUẬT (GDKT&PL) (2 tiết/tuần x 35 tuần = 70 tiết)
  if (s.includes('kinh tế') || s.includes('pháp luật') || s.includes('gdkt&pl') || s.includes('gdkt')) {
    const gdktplTopics = [
      `Chủ đề 1: Nền kinh tế và các chủ thể kinh tế - Bài 1: Các hoạt động kinh tế cơ bản trong đời sống (Lớp ${g}) (2 tiết)`,
      `Bài 2: Các chủ thể của nền kinh tế (Chủ thể sản xuất, tiêu dùng, trung gian, Nhà nước) (2 tiết)`,
      `Chủ đề 2: Thị trường và cơ chế thị trường - Bài 3: Thị trường và các chức năng của thị trường (2 tiết)`,
      `Bài 4: Cơ chế thị trường và các quy luật kinh tế cơ bản (2 tiết)`,
      `Chủ đề 3: Ngân sách nhà nước và Thuế - Bài 5: Ngân sách nhà nước và vai trò của ngân sách (2 tiết)`,
      `Bài 6: Thuế và các loại thuế phổ biến ở Việt Nam (Thuế GTGT, TNDN, TNCN) (2 tiết)`,
      `Chủ đề 4: Sản xuất kinh doanh và Tài chính - Bài 7: Sản xuất kinh doanh và các mô hình kinh doanh (2 tiết)`,
      `Bài 8: Tín dụng và các dịch vụ tín dụng ngân hàng (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn GDKT&PL Lớp ${g} (2 tiết)`,
      `Bài 9: Quản lý tài chính cá nhân và Lập kế hoạch tài chính hiệu quả (2 tiết)`,
      `Chủ đề 5: Hệ thống chính trị nước CHXHCN Việt Nam - Bài 10: Hệ thống chính trị Việt Nam (2 tiết)`,
      `Bài 11: Bộ máy Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam (2 tiết)`,
      `Bài 12: Quốc hội, Chủ tịch nước, Chính phủ và Tòa án, Viện kiểm sát (2 tiết)`,
      `Chủ đề 6: Hiến pháp nước CHXHCN Việt Nam - Bài 13: Vị trí, vai trò của Hiến pháp (2 tiết)`,
      `Bài 14: Quyền con người, quyền và nghĩa vụ cơ bản của công dân trong Hiến pháp (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn GDKT&PL Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Kinh tế học và Hiến pháp HK1 Lớp ${g} (2 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm Tìm hiểu Pháp luật Lớp ${g} (2 tiết)`,
      `Chủ đề 7: Cạnh tranh, cung cầu trong kinh tế thị trường - Bài 16: Cạnh tranh trong kinh tế thị trường (2 tiết)`,
      `Bài 17: Cung - cầu trong nền kinh tế thị trường và sự hình thành giá cả (2 tiết)`,
      `Chủ đề 8: Lạm phát và Thất nghiệp - Bài 18: Lạm phát: Khái niệm, nguyên nhân và biện pháp kiểm soát (2 tiết)`,
      `Bài 19: Thất nghiệp và Thị trường lao động, việc làm trong kỷ nguyên số (2 tiết)`,
      `Chủ đề 9: Khởi nghiệp và Đạo đức kinh doanh - Bài 20: Ý tưởng, cơ hội kinh doanh và Khởi nghiệp sáng tạo (2 tiết)`,
      `Bài 21: Đạo đức kinh doanh và Văn hóa tiêu dùng thông minh (2 tiết)`,
      `Chủ đề 10: Quyền bình đẳng của công dân trước pháp luật - Bài 22: Quyền bình đẳng của công dân trước pháp luật (2 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn GDKT&PL Lớp ${g} (2 tiết)`,
      `Bài 23: Quyền bình đẳng giới trong các lĩnh vực đời sống xã hội (2 tiết)`,
      `Chủ đề 11: Một số quyền tự do, dân chủ cơ bản của công dân - Bài 24: Quyền bầu cử, ứng cử và tham gia quản lý nhà nước (2 tiết)`,
      `Bài 25: Quyền khiếu nại, tố cáo và phòng chống tham nhũng (2 tiết)`,
      `Bài 26: Quyền bất khả xâm phạm về thân thể, danh dự, nhân phẩm và chỗ ở của công dân (2 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn GDKT&PL Lớp ${g} (2 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành phân tích tình huống pháp lý (2 tiết)`,
      `Dự án GDKT&PL: "Phiên tòa Giả định Học đường THPT & Kế hoạch Khởi nghiệp Kinh doanh Xanh" (2 tiết)`,
      `Bài 27: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDKT&PL ${g} (2 tiết)`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn GDKT&PL Lớp ${g} (2 tiết)`
    ];

    gdktplTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 2,
        yccd: `- Nắm vững các quy luật kinh tế thị trường, tài chính cá nhân, khởi nghiệp và hệ thống pháp luật của ${name} (SGK GDKT&PL ${g} Kết nối tri thức).\n- Phân tích và giải quyết các tình huống pháp lý, kinh doanh thực tế một cách chuẩn mực và văn minh.\n- Nâng cao ý thức thượng tôn pháp luật, tinh thần trách nhiệm công dân và đạo đức kinh doanh.`,
        equipment: 'Hiến pháp năm 2013, Bộ luật Dân sự, Bộ luật Lao động, Luật Doanh nghiệp, máy chiếu',
        location: 'Phòng học / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Phiên tòa Giả định' : ''
      });
    });

    return list;
  }

  // 5.9. GIÁO DỤC QUỐC PHÒNG VÀ AN NINH (GDQP&AN) (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('quốc phòng') || s.includes('an ninh') || s.includes('gdqp')) {
    const gdqpTopics = [
      `Bài 1: Lịch sử, truyền thống vẻ vang của Quân đội nhân dân và Công an nhân dân Việt Nam (Lớp ${g})`,
      `Bài 1: Truyền thống đánh giặc giữ nước của dân tộc Việt Nam qua các thời kỳ`,
      `Bài 2: Một số nội dung cơ bản của Luật Giáo dục quốc phòng và an ninh`,
      `Bài 2: Luật Sĩ quan Quân đội nhân dân Việt Nam và Luật Công an nhân dân`,
      `Bài 3: Ma túy và tác hại khôn lường của ma túy đối với học đường và xã hội`,
      `Bài 3: Trách nhiệm của học sinh trong phòng chống ma túy và tệ nạn xã hội`,
      `Bài 4: Điều lệnh đội ngũ từng người không có súng: Động tác đứng nghiêm, đứng nghỉ, quay tại chỗ`,
      `Bài 4: Điều lệnh đội ngũ: Động tác đi đều, đứng lại, đổi chân khi đi đều sai nhịp`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn GDQP&AN Lớp ${g}`,
      `Bài 4: Điều lệnh đội ngũ: Động tác tiến, lùi, qua phải, qua trái, ngồi xuống, đứng dậy`,
      `Bài 5: Đội ngũ đơn vị: Đội hình tiểu đội hàng dọc và tiểu đội hàng ngang`,
      `Bài 5: Đội ngũ đơn vị: Đội hình trung đội hàng dọc và trung đội hàng ngang`,
      `Bài 6: Cấp cứu ban đầu các tai nạn thông thường: Cứu đuối nước, say nắng, bỏng, điện giật`,
      `Bài 6: Kỹ thuật băng bó vết thương: Băng cuộn, băng tam giác các vị trí trên cơ thể`,
      `Bài 6: Kỹ thuật cố định gãy xương tạm thời bằng nẹp gỗ và chuyển thương an toàn`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn GDQP&AN Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Điều lệnh đội ngũ HK1 Lớp ${g}`,
      `Sơ kết Học kỳ 1 & Giao lưu nếp sống quân sự học sinh khối ${g}`,
      `Bài 8: Bảo vệ chủ quyền lãnh thổ và biên giới quốc gia nước CHXHCN Việt Nam`,
      `Bài 8: Trách nhiệm của công dân trong bảo vệ chủ quyền biển đảo Tổ quốc`,
      `Bài 9: Luật Nghĩa vụ quân sự và trách nhiệm của thanh niên học sinh`,
      `Bài 10: Kỹ thuật bắn súng tiểu liên AK: Cấu tạo, tính năng chiến đấu và tác dụng của súng AK`,
      `Bài 10: Thao tác tháo, lắp súng tiểu liên AK thông thường ban ngày`,
      `Bài 10: Quy tắc bắn súng tiểu liên AK và ngắm bắn mục tiêu cố định ban ngày`,
      `Bài 10: Thực hành tư thế nằm bắn súng tiểu liên AK có bệ tì`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn GDQP&AN Lớp ${g}`,
      `Bài 11: Tính năng, tác dụng và cách sử dụng một số loại lựu đạn thường dùng (Lựu đạn F1, LĐ-01)`,
      `Bài 11: Kỹ thuật ném lựu đạn trúng đích và đảm bảo an toàn tuyệt đối`,
      `Bài 12: Kỹ thuật chiến đấu bộ binh: Từng người trong chiến đấu tiến công và phòng ngự`,
      `Bài 12: Các tư thế vận động trên chiến trường: Bò, trườn, lê, lăn, chạy khom vượt địa hình`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn GDQP&AN Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành kỹ năng phòng thủ dân sự ${g}`,
      `Hội thao Giáo dục Quốc phòng & An ninh cấp trường Lớp ${g}: Bắn súng Laser, Ném lựu đạn, Băng bó cứu thương`,
      `Bài 14: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDQP&AN ${g}`,
      `Tổng kết năm học & Đánh giá xếp loại cả năm môn GDQP&AN Lớp ${g}`
    ];

    gdqpTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 1,
        yccd: `- Nắm vững truyền thống QĐND, điều lệnh đội ngũ, kỹ thuật quân sự (tháo lắp súng AK, bắn súng, ném lựu đạn, băng bó) của ${name} (SGK GDQP&AN ${g} Kết nối tri thức).\n- Rèn luyện tác phong quân sự nghiêm túc, tính kỷ luật cao, tinh thần sẵn sàng bảo vệ Tổ quốc.\n- Nâng cao phẩm chất yêu nước, ý thức tự giác và trách nhiệm công dân.`,
        equipment: 'Mô hình súng tiểu liên AK tập luyện, mô hình lựu đạn tập, la bàn quân sự, bộ nẹp cố định gãy xương, băng gạc cứu thương',
        location: 'Sân tập quân sự / Phòng học bộ môn GDQP&AN',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Hội thao GDQP&AN' : ''
      });
    });

    return list;
  }

  // 5.10. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THPT (3 tiết/tuần x 35 tuần = 105 tiết)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hướng nghiệp')) {
    const hdtnTopics = [
      `Chủ đề 1: Xây dựng phong cách bản thân và tư duy phản biện - Bài 1: Khám phá giá trị cá nhân và nét riêng của bản thân (Lớp ${g} - 3 tiết)`,
      `Chủ đề 1: Phong cách bản thân - Bài 2: Phát triển tư duy phản biện và kỹ năng ra quyết định độc lập (3 tiết)`,
      `Chủ đề 2: Quản lý bản thân và thích ứng môi trường - Bài 1: Quản lý thời gian, công việc và cảm xúc bản thân (3 tiết)`,
      `Chủ đề 2: Quản lý bản thân - Bài 2: Vượt qua áp lực học tập thi cử và xây dựng tinh thần kiên trì (3 tiết)`,
      `Chủ đề 3: Xây dựng và phát triển mối quan hệ - Bài 1: Kỹ năng giao tiếp ứng xử văn minh và giải quyết xung đột (3 tiết)`,
      `Chủ đề 3: Phát triển mối quan hệ - Bài 2: Lan tỏa lối sống nhân ái, thấu hiểu và tôn trọng sự khác biệt (3 tiết)`,
      `Chủ đề 4: Trách nhiệm với gia đình - Bài 1: Chăm sóc, gắn kết tình cảm và thực hiện bổn phận với gia đình (3 tiết)`,
      `Chủ đề 4: Trách nhiệm với gia đình - Bài 2: Quản lý tài chính cá nhân và tham gia kế hoạch tài chính gia đình (3 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn HĐTN&HN Lớp ${g} (3 tiết)`,
      `Chủ đề 5: Trách nhiệm với cộng đồng và xã hội - Bài 1: Xây dựng và thực hiện các dự án thiện nguyện vì cộng đồng (3 tiết)`,
      `Chủ đề 5: Trách nhiệm xã hội - Bài 2: Tuyên truyền văn hóa giao thông và nếp sống văn minh đô thị (3 tiết)`,
      `Chủ đề 5: Trách nhiệm xã hội - Bài 3: Ứng xử văn hóa trên không gian mạng và trách nhiệm công dân số (3 tiết)`,
      `Chủ đề 6: Bảo vệ môi trường và cảnh quan thiên nhiên - Bài 1: Bảo tồn danh lam thắng cảnh và di sản văn hóa địa phương (3 tiết)`,
      `Chủ đề 6: Bảo vệ môi trường - Bài 2: Kế hoạch hành động giảm rác thải nhựa và tiêu dùng xanh (3 tiết)`,
      `Chủ đề 6: Bảo vệ môi trường - Bài 3: Ứng phó với biến đổi khí hậu và phòng chống thiên tai (3 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn HĐTN&HN Lớp ${g} (3 tiết)`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HĐTN&HN HK1 Lớp ${g} (3 tiết)`,
      `Sơ kết Học kỳ 1 & Báo cáo sản phẩm dự án Trải nghiệm HK1 Lớp ${g} (3 tiết)`,
      `Chủ đề 7: Xu hướng thị trường lao động - Bài 2: Yêu cầu về phẩm chất, năng lực và kỹ năng mềm của các nhóm nghề tương lai (3 tiết)`,
      `Chủ đề 7: Xu hướng thị trường lao động - Bài 3: Giao lưu với các nhà tuyển dụng và doanh nhân thành đạt (3 tiết)`,
      `Chủ đề 8: Định hướng nghề nghiệp bản thân - Bài 1: Đánh giá sự phù hợp của năng lực cá nhân với nhóm nghề yêu thích (3 tiết)`,
      `Chủ đề 8: Định hướng nghề nghiệp - Bài 2: Tìm hiểu hệ thống các trường Đại học, Cao đẳng và cơ sở đào tạo nghề (3 tiết)`,
      `Chủ đề 8: Định hướng nghề nghiệp - Bài 3: Trải nghiệm thực tế một ngày làm nghề tại doanh nghiệp / trường đại học (3 tiết)`,
      `Chủ đề 9: Lựa chọn ngành nghề và chọn trường - Bài 1: Xây dựng chiến lược ôn thi và chọn tổ hợp môn học phù hợp (3 tiết)`,
      `Chủ đề 9: Chọn ngành chọn trường - Bài 2: Lập kế hoạch phát triển nghề nghiệp 5 năm của bản thân (3 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn HĐTN&HN Lớp ${g} (3 tiết)`,
      `Chủ đề 9: Chọn ngành chọn trường - Bài 3: Chuẩn bị tâm thế, kỹ năng hội nhập môi trường đại học và cuộc sống tự lập (3 tiết)`,
      `Chủ đề 10: Dự án Khởi nghiệp Thanh niên - Bài 1: Lên ý tưởng và xây dựng đề án khởi nghiệp đổi mới sáng tạo (3 tiết)`,
      `Dự án Khởi nghiệp: Tổ chức "Ngày hội Hướng nghiệp & Diễn đàn Khởi nghiệp Sáng tạo Học sinh THPT" (Tiết 1 - 3 tiết)`,
      `Dự án Khởi nghiệp: Thuyết trình gọi vốn dự án trước ban giám khảo và phụ huynh (Tiết 2 - 3 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn HĐTN&HN Lớp ${g} (3 tiết)`,
      `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành lập kế hoạch phát triển cá nhân (3 tiết)`,
      `Diễn đàn Học đường: "Tuổi trẻ THPT - Khát vọng cống hiến, Hội nhập toàn cầu" (3 tiết)`,
      `Hoàn thiện Portfolio Hồ sơ Năng lực Trải nghiệm & Định hướng Nghề nghiệp cá nhân (3 tiết)`,
      `Tổng kết năm học & Ngày hội Tổng kết Hoạt động trải nghiệm cả năm (3 tiết)`
    ];

    hdtnTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 3,
        yccd: `- Thực hiện hiệu quả các hoạt động phát triển phong cách bản thân, tư duy phản biện, quản lý tài chính, phục vụ cộng đồng và định hướng nghề nghiệp đại học của ${name} (SGK HĐTN&HN ${g} Kết nối tri thức).\n- Nắm bắt xu hướng thị trường lao động, tự đánh giá năng lực sở trường và xây dựng kế hoạch tương lai rõ ràng.\n- Phát triển phẩm chất trách nhiệm, tinh thần tự chủ, năng lực lãnh đạo và thích ứng xã hội.`,
        equipment: 'Máy chiếu, cẩm nang tuyển sinh Đại học, phiếu trắc nghiệm tính cách nghề nghiệp Holland/MBTI, hồ sơ Portfolio',
        location: 'Lớp học / Hội trường / Sân trường',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 29 ? 'Ngày hội Hướng nghiệp' : ''
      });
    });

    return list;
  }

  // 5.11. ÂM NHẠC, MĨ THUẬT, GDĐP THPT
  const defaultHighSchoolNames = s.includes('âm nhạc') || s.includes('am nhac')
    ? [
        `Chủ đề 1: Tuổi trẻ và ước mơ - Hát: Khát vọng tuổi trẻ (Lớp ${g})`,
        `Chủ đề 1: Tuổi trẻ và ước mơ - Nhạc cụ: Luyện đệm hợp âm Đàn Guitar / Organ`,
        `Chủ đề 1: Tuổi trẻ và ước mơ - Đọc nhạc: Bài đọc nhạc nâng cao số 1`,
        `Chủ đề 1: Tuổi trẻ và ước mơ - Thường thức âm nhạc: Lịch sử Âm nhạc Việt Nam thời kỳ đổi mới`,
        `Chủ đề 2: Tình yêu quê hương - Hát: Giai điệu Tổ quốc / Đất nước trọn niềm vui`,
        `Chủ đề 2: Tình yêu quê hương - Nhạc cụ hòa tấu dàn nhạc học đường`,
        `Chủ đề 2: Tình yêu quê hương - Đọc nhạc: Bài đọc nhạc số 2 (Giọng La thứ)`,
        `Chủ đề 2: Tình yêu quê hương - Thường thức âm nhạc: Nghệ thuật Hát Ca trù và Đờn ca tài tử Nam Bộ`,
        `Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp ${g}`,
        `Chủ đề 3: Khúc ca người thầy - Hát: Người thầy / Bài học đầu tiên`,
        `Chủ đề 3: Khúc ca người thầy - Nhạc cụ: Độc tấu nhạc cụ tự chọn`,
        `Chủ đề 3: Khúc ca người thầy - Đọc nhạc: Bài đọc nhạc số 3`,
        `Chủ đề 4: Âm nhạc cổ điển thế giới - Thường thức âm nhạc: Giao hưởng số 5 của L.V.Beethoven`,
        `Chủ đề 4: Âm nhạc cổ điển thế giới - Đọc nhạc và cảm thụ tác phẩm cổ điển`,
        `Chủ đề 4: Âm nhạc cổ điển thế giới - Biểu diễn tốp ca tác phẩm nước ngoài dịch lời Việt`,
        `Chủ đề 4: Âm nhạc cổ điển thế giới - Góc sáng tạo âm nhạc: Phối khí cho ca khúc`,
        `Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Âm nhạc HK1 Lớp ${g}`,
        `Sơ kết Học kỳ 1 & Báo cáo sản phẩm hòa tấu Âm nhạc HK1 Lớp ${g}`,
        `Chủ đề 5: Mùa xuân hy vọng - Hát: Mùa xuân nho nhỏ / Cung đàn mùa xuân`,
        `Chủ đề 5: Mùa xuân hy vọng - Nhạc cụ: Hòa tấu Guitar và Melodica`,
        `Chủ đề 5: Mùa xuân hy vọng - Đọc nhạc: Bài đọc nhạc số 4`,
        `Chủ đề 5: Mùa xuân hy vọng - Thường thức âm nhạc: Nghệ thuật Nhã nhạc cung đình Huế`,
        `Chủ đề 6: Âm vang thời đại - Hát: Bài ca thanh niên / Hát vang lý tưởng`,
        `Chủ đề 6: Âm vang thời đại - Nhạc cụ gõ đệm tiết tấu hiện đại`,
        `Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp ${g}`,
        `Chủ đề 7: Nhạc kịch thế giới - Thường thức âm nhạc: Nghệ thuật Opera và Nhạc kịch Broadway`,
        `Chủ đề 7: Nhạc kịch thế giới - Hát: Trích đoạn ca khúc trong vở nhạc kịch nổi tiếng`,
        `Chủ đề 7: Nhạc kịch thế giới - Đọc nhạc: Bài đọc nhạc số 6`,
        `Chủ đề 8: Giai điệu mùa hạ - Hát: Nỗi buồn hoa phượng / Tạm biệt mái trường`,
        `Dự án Âm nhạc: Sáng tác ca khúc học đường & Hòa tấu ban nhạc THPT`,
        `Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành hòa tấu âm nhạc`,
        `Dự án Âm nhạc: Biểu diễn báo cáo Gala Âm nhạc THPT Lớp ${g}`,
        `Tổng kết năm học & Đánh giá xếp loại cả năm môn Âm nhạc Lớp ${g}`
      ]
    : s.includes('mĩ thuật') || s.includes('mỹ thuật')
    ? [
        `Chủ đề 1: Hội họa hiện đại thế giới - Bài 1: Trường phái Ấn tượng và Hậu ấn tượng (Lớp ${g})`,
        `Chủ đề 1: Hội họa hiện đại - Bài 1: Thực hành vẽ tranh phong cảnh phong cách Ấn tượng`,
        `Chủ đề 1: Hội họa hiện đại - Bài 2: Trường phái Lập thể và Trừu tượng (Picasso, Kandinsky)`,
        `Chủ đề 2: Di sản mĩ thuật Việt Nam - Bài 3: Nghệ thuật tranh khắc gỗ dân gian Đông Hồ, Hàng Trống`,
        `Chủ đề 2: Di sản mĩ thuật Việt Nam - Bài 3: Thực hành in tranh khắc gỗ / khắc cao su`,
        `Chủ đề 3: Thiết kế Đồ họa & Nhận diện thương hiệu - Bài 4: Thiết kế hệ thống nhận diện thương hiệu`,
        `Chủ đề 3: Thiết kế Đồ họa - Bài 4: Thực hành thiết kế bao bì sản phẩm và Poster quảng cáo`,
        `Chủ đề 3: Thiết kế Đồ họa - Trưng bày và thuyết minh sản phẩm đồ họa ứng dụng`,
        `Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp ${g}`,
        `Chủ đề 4: Thiết kế Thời trang - Bài 5: Xu hướng thời trang bền vững và phác thảo mẫu trang phục`,
        `Chủ đề 4: Thiết kế Thời trang - Bài 5: Thực hành hoàn thiện bộ sưu tập thời trang dạ hội`,
        `Chủ đề 5: Điêu khắc đương đại - Bài 6: Nghệ thuật sắp đặt (Installation Art) và nghệ thuật thị giác`,
        `Chủ đề 5: Điêu khắc đương đại - Bài 6: Thực hành tạo tác phẩm nghệ thuật sắp đặt từ vật liệu tái chế`,
        `Chủ đề 5: Điêu khắc đương đại - Trưng bày không gian nghệ thuật sắp đặt`,
        `Chủ đề 6: Thiết kế Kiến trúc xanh - Bài 7: Nguyên tắc thiết kế công trình kiến trúc tiết kiệm năng lượng`,
        `Chủ đề 6: Thiết kế Kiến trúc xanh - Bài 7: Vẽ phác thảo mô hình biệt thự vườn thông minh`,
        `Kiểm tra, đánh giá cuối Học kỳ 1 môn Mĩ thuật Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Hội họa, Đồ họa HK1 Lớp ${g}`,
        `Sơ kết Học kỳ 1 & Triển lãm Mĩ thuật HK1 môn Mĩ thuật ${g}`,
        `Chủ đề 7: Nghệ thuật Nhiếp ảnh & Đồ họa đa phương tiện - Bài 8: Kỹ thuật xử lý ảnh số chuyên nghiệp`,
        `Chủ đề 7: Nhiếp ảnh & Đồ họa số - Bài 8: Thực hành chụp bộ ảnh phóng sự trường học`,
        `Chủ đề 8: Tranh Sơn mài và Lụa Việt Nam - Bài 9: Khám phá chất liệu sơn mài truyền thống`,
        `Chủ đề 8: Tranh Sơn mài và Lụa - Bài 9: Thực hành vẽ tranh mô phỏng kỹ thuật sơn mài trên gỗ`,
        `Chủ đề 9: Thiết kế Mỹ thuật Công nghiệp - Bài 10: Thiết kế kiểu dáng công nghiệp đồ gia dụng`,
        `Chủ đề 9: Thiết kế Công nghiệp - Bài 10: Thực hành tạo dáng sản phẩm 3D`,
        `Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp ${g}`,
        `Chủ đề 10: Nghệ thuật Công cộng (Public Art) - Bài 11: Tranh tường (Mural) và điêu khắc công viên`,
        `Chủ đề 10: Nghệ thuật Công cộng - Bài 11: Dự án vẽ tranh tường bích họa làm đẹp cảnh quan trường học`,
        `Chủ đề 11: Phê bình Mĩ thuật - Bài 12: Phương pháp thưởng thức và viết bài phê bình tác phẩm mĩ thuật`,
        `Dự án Mĩ thuật: "Triển lãm Không gian Nghệ thuật Đương đại & Hội chợ Mỹ thuật Học sinh THPT"`,
        `Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành hoàn thiện không gian trưng bày tranh`,
        `Báo cáo và thuyết trình dự án Mĩ thuật trước hội đồng nghệ thuật trường`,
        `Hệ thống hóa toàn bộ kiến thức Mĩ thuật THPT Lớp ${g}`,
        `Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật ${g} toàn trường`
      ]
    : [
        `Chủ đề 1: Địa lí kinh tế địa phương - Đánh giá vị thế chiến lược và tiềm năng phát triển của tỉnh/thành phố (Lớp ${g})`,
        `Chủ đề 1: Kinh tế địa phương - Thực trạng phát triển các khu kinh tế, khu công nghệ cao và cụm công nghiệp`,
        `Chủ đề 1: Kinh tế địa phương - Cơ cấu ngành nông nghiệp công nghệ cao và xuất khẩu nông sản chủ lực`,
        `Chủ đề 1: Kinh tế địa phương - Tiềm năng phát triển kinh tế biển, cảng biển và dịch vụ logistics`,
        `Chủ đề 2: Lịch sử và Văn hóa địa phương - Tiến trình lịch sử đấu tranh cách mạng kiên cường của quân dân tỉnh`,
        `Chủ đề 2: Lịch sử địa phương - Các nhân vật lịch sử lỗi lạc và anh hùng lực lượng vũ trang nhân dân`,
        `Chủ đề 2: Văn hóa địa phương - Hệ thống di sản văn hóa phi vật thể quốc gia và di sản văn hóa thế giới UNESCO`,
        `Chủ đề 2: Văn hóa địa phương - Bảo tồn và phát huy giá trị các lễ hội truyền thống gắn với phát triển du lịch`,
        `Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục địa phương Lớp ${g}`,
        `Chủ đề 3: Đô thị hóa và Quản lý xã hội - Thực trạng đô thị hóa và quy hoạch mạng lưới đô thị thông minh`,
        `Chủ đề 3: Quản lý xã hội - Các vấn đề về an sinh xã hội, giải quyết việc làm và giảm nghèo bền vững`,
        `Chủ đề 3: Quản lý xã hội - Phát triển hệ thống y tế, giáo dục và chuyển đổi số chính quyền địa phương`,
        `Chủ đề 4: Làng nghề và Sản phẩm OCOP - Nét tinh hoa các làng nghề thủ công mỹ nghệ truyền thống`,
        `Chủ đề 4: Sản phẩm OCOP - Xây dựng thương hiệu và xúc tiến thương mại sản phẩm đặc sản quê hương`,
        `Chủ đề 4: Làng nghề truyền thống - Tham quan thực tế và trải nghiệm tại một làng nghề tiêu biểu`,
        `Chủ đề 4: Làng nghề truyền thống - Đề xuất giải pháp quảng bá sản phẩm làng nghề trên nền tảng số`,
        `Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục địa phương Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Kinh tế, Lịch sử, Văn hóa địa phương HK1 Lớp ${g}`,
        `Sơ kết Học kỳ 1 & Báo cáo sản phẩm Giới thiệu Di sản Văn hóa Địa phương ${g}`,
        `Chủ đề 5: Môi trường và Biến đổi khí hậu tại địa phương - Đánh giá hiện trạng ô nhiễm nguồn nước, không khí`,
        `Chủ đề 5: Môi trường địa phương - Các giải pháp bảo vệ hệ sinh thái rừng phòng hộ, rừng ngập mặn và đa dạng sinh học`,
        `Chủ đề 5: Môi trường địa phương - Kế hoạch hành động của thanh niên ứng phó với hạn mặn, sạt lở bờ sông biển`,
        `Chủ đề 6: Thị trường lao động và Định hướng nghề nghiệp - Nhu cầu nhân lực các ngành trọng điểm của tỉnh đến 2030`,
        `Chủ đề 6: Hướng nghiệp địa phương - Cơ hội việc làm tại các tập đoàn FDI, doanh nghiệp lớn trên địa bàn`,
        `Chủ đề 6: Hướng nghiệp địa phương - Chính sách thu hút nhân tài và hỗ trợ thanh niên khởi nghiệp của địa phương`,
        `Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục địa phương Lớp ${g}`,
        `Chủ đề 7: Hội nhập quốc tế của địa phương - Các chương trình hợp tác quốc tế, giao lưu văn hóa và xúc tiến đầu tư`,
        `Chủ đề 7: Hội nhập quốc tế - Vị thế của địa phương trong vùng kinh tế trọng điểm và chuỗi cung ứng toàn cầu`,
        `Chủ đề 8: Tương lai và Khát vọng quê hương - Tầm nhìn phát triển kinh tế - xã hội địa phương đến năm 2045`,
        `Dự án GDĐP: "Bản đồ Số 3D Du lịch Sinh thái & Cẩm nang Hướng nghiệp Tương lai tại Quê hương em"`,
        `Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục địa phương Lớp ${g}`,
        `Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành sản phẩm truyền thông đa phương tiện quảng bá địa phương`,
        `Báo cáo và thuyết trình dự án Giáo dục địa phương trước hội đồng lớp`,
        `Hệ thống hóa toàn bộ kiến thức Giáo dục địa phương THPT Lớp ${g}`,
        `Tổng kết năm học & Đánh giá xếp loại cả năm môn Giáo dục địa phương Lớp ${g}`
      ];

  defaultHighSchoolNames.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const periods = 1;

    list.push({
      week: w,
      topic: name.includes('Chủ đề') || name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: periods,
      yccd: `- Nắm vững chuẩn kiến thức, kỹ năng và giá trị thẩm mỹ/văn hóa của ${name} theo chuẩn CT GDPT 2018 và SGK Kết nối tri thức Lớp ${g}.\n- Phát triển năng lực cảm thụ nghệ thuật, tư duy sáng tạo hoặc năng lực nghiên cứu thực tế địa phương.\n- Bồi dưỡng tình yêu quê hương đất nước, lòng tự hào văn hóa và định hướng tương lai.`,
      equipment: `Thiết bị dạy học chuẩn môn ${subject}, máy chiếu, học liệu số chuyên ngành, LMS`,
      location: 'Phòng học bộ môn / Lớp học',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 31 ? 'Dự án Sáng tạo' : ''
    });
  });

  return list;
}

// =========================================================================
// MASTER RESOLVER FOR HIGH SCHOOL CURRICULUM (LỚP 10 - 12)
// =========================================================================
export function buildHighSchoolCurriculum(subject: string, grade: string, schoolType: SchoolType): CurriculumItem[] {
  const s = subject.toLowerCase().trim();
  const g = grade.trim();
  const isEnglish = s.includes('tiếng anh') || s.includes('tieng anh') || s.includes('english') || s.includes('ngoại ngữ');

  let rawList: RawHighSchoolLesson[] = [];

  if (isEnglish) {
    rawList = getEnglishHighSchoolCurriculum(g);
  } else if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('informatics')) {
    rawList = getTinHocHighSchoolCurriculum(g);
  } else if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    rawList = getGdtcHighSchoolCurriculum(g);
  } else if (s.includes('toán') || s.includes('toan')) {
    rawList = getMathHighSchoolCurriculum(g);
  } else if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    rawList = getNguVanHighSchoolCurriculum(g);
  } else {
    rawList = getGeneralHighSchoolCurriculum(g, subject);
  }

  return rawList.map((item, idx) => {
    const customYccd = isEnglish ? (item.yccd ?? '') : (item.yccd || generateHighSchoolYccd(subject, g, item.name));

    const lessonCtx = {
      lessonName: item.name,
      topic: item.topic,
      yccd: customYccd,
      subject,
      lessonIndex: idx
    };

    const nls = isEnglish
      ? getNlsCodeForEnglishLesson(g, schoolType, lessonCtx)
      : getNlsCodeForSubjectLesson(g, schoolType, lessonCtx);

    const ai = isEnglish
      ? getAiCodeForEnglishLesson(g, lessonCtx)
      : getAiCodeForSubjectLesson(g, lessonCtx);

    return {
      id: `curr-high-${g}-${idx + 1}`,
      stt: idx + 1,
      topic: item.topic,
      lessonName: item.name,
      periods: item.periods,
      week: isEnglish ? `Week ${item.week}` : `Tuần ${item.week}`,
      yccd: customYccd,
      equipment: item.equipment,
      location: item.location,
      nlsCode: nls.code,
      aiCode: ai.code,
      digitalCompetency: isEnglish
        ? `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}`
        : `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`,
      notes: item.notes || (item.name.includes('Dự án') || item.name.includes('STEM') ? 'Tích hợp STEM & Năng lực số' : '')
    };
  });
}
