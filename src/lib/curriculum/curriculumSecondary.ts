import { CurriculumItem, SchoolType, ConfigFormData } from '../../types';
import { getNlsCodeForSubjectLesson, lookupNlsRequirement } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson, lookupAiRequirement } from '../constants/aiGuides';
import { getNlsCodeForEnglishLesson } from '../constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson } from '../constants/aiGuidesEn';
import { getTechnologySecondaryCurriculum } from './curriculumSecondaryTechnology';
import { getKhtnSecondaryCurriculum } from './curriculumSecondaryScience';

export interface RawSecondaryLesson {
  week: number;
  topic: string;
  name: string;
  periods: number;
  yccd: string;
  equipment: string;
  location: string;
  nlsCode?: string;
  aiCode?: string;
  digitalCompetency?: string;
  notes?: string;
}

// =========================================================================
// HELPER: TỰ ĐỘNG TẠO YCCĐ CHI TIẾT THEO CHUẨN CT GDPT 2018 CHO TỪNG BÀI THCS
// =========================================================================
export function generateSecondaryYccd(subject: string, grade: string, lessonName: string): string {
  const s = subject.toLowerCase().trim();
  const name = lessonName.trim();
  const g = grade.trim();

  // ĐÁNH GIÁ ĐỊNH KỲ
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 1')) {
    return `- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng và năng lực môn ${subject} Lớp ${g} từ Tuần 1 đến Tuần 8.\n- Phát hiện các khó khăn của học sinh để kịp thời bồi dưỡng, phụ đạo; rèn luyện tính trung thực và kỹ năng làm bài thi.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 1') || name.includes('Sơ kết HK1')) {
    return `- Đánh giá tổng hợp toàn diện kết quả học tập và rèn luyện môn ${subject} Lớp ${g} trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh, làm căn cứ điều chỉnh kế hoạch giáo dục Học kỳ 2; rèn luyện kỷ luật phòng thi.`;
  }
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 2')) {
    return `- Đánh giá mức độ tiếp thu các nội dung trọng tâm môn ${subject} Lớp ${g} từ Tuần 19 đến Tuần 25.\n- Giúp học sinh tự đánh giá năng lực và chuẩn bị tốt cho kỳ kiểm tra cuối năm; rèn luyện tư duy độc lập.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 2') || name.includes('Tổng kết năm học')) {
    return `- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn ${subject} Lớp ${g} cả năm học.\n- Đánh giá sự tiến bộ về phẩm chất, năng lực chuyên biệt và tạo nền tảng vững chắc cho năm học tiếp theo.`;
  }

  // DỰ ÁN STEM & SẢN PHẨM
  if (name.includes('Dự án') || name.includes('STEM')) {
    return `- Vận dụng kiến thức khoa học, công nghệ, toán học và kỹ thuật để nghiên cứu, thiết kế, chế tạo sản phẩm trong bài: "${name}".\n- Thực hiện đúng quy trình thiết kế kỹ thuật, giải quyết vấn đề sáng tạo và phát triển kỹ năng làm việc nhóm.`;
  }

  // 1. TOÁN THCS (6 - 9)
  if (s.includes('toán') || s.includes('toan')) {
    if (name.includes('Tập hợp') || name.includes('số tự nhiên') || name.includes('Ghi số')) {
      return `- Nắm vững khái niệm tập hợp, phần tử thuộc/không thuộc tập hợp, cách mô tả tập hợp.\n- Đọc, viết và biểu diễn thành thạo số tự nhiên trong hệ thập phân và số La Mã; thực hiện 4 phép tính cộng, trừ, nhân, chia số tự nhiên.`;
    }
    if (name.includes('Lũy thừa') || name.includes('lũy thừa') || name.includes('Thứ tự thực hiện')) {
      return `- Hiểu khái niệm lũy thừa với số mũ tự nhiên; thực hiện phép nhân, chia hai lũy thừa cùng cơ số.\n- Thực hiện đúng thứ tự các phép tính có chứa dấu ngoặc và lũy thừa trong tính toán và giải toán tìm x.`;
    }
    if (name.includes('chia hết') || name.includes('Số nguyên tố') || name.includes('Ước chung') || name.includes('Bội chung')) {
      return `- Nắm vững dấu hiệu chia hết cho 2, 3, 5, 9; phân biệt số nguyên tố và hợp số; phân tích một số ra thừa số nguyên tố.\n- Tìm ƯCLN và BCNN của hai hay nhiều số; vận dụng giải các bài toán thực tiễn về chia phần và chu kì lặp.`;
    }
    if (name.includes('số nguyên') || name.includes('Số nguyên') || name.includes('dấu ngoặc')) {
      return `- Nhận biết tập hợp số nguyên Z, biểu diễn số nguyên trên trục số, số đối và so sánh số nguyên.\n- Thực hiện thành thạo phép cộng, trừ, nhân, chia số nguyên và vận dụng linh hoạt quy tắc dấu ngoặc để tính hợp lí.`;
    }
    if (name.includes('Hình tam giác đều') || name.includes('hình thoi') || name.includes('hình chữ nhật') || name.includes('hình bình hành') || name.includes('hình thang cân')) {
      return `- Nhận biết và vẽ được tam giác đều, hình vuông, hình lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân.\n- Vận dụng chuẩn xác công thức tính chu vi và diện tích các tứ giác vào bài toán thực tế đời sống.`;
    }
    if (name.includes('đối xứng') || name.includes('Đối xứng')) {
      return `- Nhận biết hình có trục đối xứng và hình có tâm đối xứng trong hình học phẳng, trong tự nhiên và kiến trúc nghệ thuật.\n- Vẽ hình đối xứng qua trục hoặc qua tâm bằng thước và compa.`;
    }
    if (name.includes('Phân số') || name.includes('phân số') || name.includes('Hỗn số')) {
      return `- Nắm vững khái niệm phân số, phân số bằng nhau, so sánh phân số và hỗn số dương.\n- Thực hiện thành thạo cộng, trừ, nhân, chia phân số; giải quyết hai bài toán cơ bản về phân số trong thực tế.`;
    }
    if (name.includes('Số thập phân') || name.includes('số thập phân') || name.includes('ước lượng') || name.includes('tỉ số phần trăm')) {
      return `- Thực hiện thành thạo các phép tính với số thập phân, quy tắc làm tròn và ước lượng kết quả.\n- Giải quyết các bài toán thực tiễn về tỉ số, tỉ số phần trăm, tính lãi suất ngân hàng và chiết khấu thương mại.`;
    }
    if (name.includes('Số hữu tỉ') || name.includes('số hữu tỉ') || name.includes('chuyển vế')) {
      return `- Nhận biết tập hợp số hữu tỉ Q, biểu diễn số hữu tỉ trên trục số; thực hiện 4 phép tính và lũy thừa của số hữu tỉ.\n- Vận dụng thành thạo quy tắc dấu ngoặc và quy tắc chuyển vế trong giải phương trình tìm x.`;
    }
    if (name.includes('Số thực') || name.includes('Căn bậc hai') || name.includes('vô tỉ') || name.includes('tuần hoàn')) {
      return `- Nhận biết số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học và tập hợp số thực R.\n- Tính giá trị tuyệt đối của số thực, làm tròn số thực với độ chính xác cho trước và tính căn bậc hai bằng máy tính cầm tay.`;
    }
    if (name.includes('Góc') || name.includes('đường thẳng song song') || name.includes('Tiên đề Euclid') || name.includes('Định lí')) {
      return `- Nhận biết hai góc kề bù, đối đỉnh, so le trong, đồng vị; vẽ tia phân giác của một góc.\n- Vận dụng dấu hiệu nhận biết hai đường thẳng song song, tiên đề Euclid để chứng minh định lí hình học logic.`;
    }
    if (name.includes('Tam giác bằng nhau') || name.includes('tam giác cân') || name.includes('tam giác vuông')) {
      return `- Nắm vững 3 trường hợp bằng nhau của tam giác (c-c-c, c-g-c, g-c-g) và các trường hợp bằng nhau đặc thù của tam giác vuông.\n- Hiểu tính chất tam giác cân, đường trung trực của đoạn thẳng và vận dụng chứng minh hình học.`;
    }
    if (name.includes('Tỉ lệ thức') || name.includes('tỉ số bằng nhau') || name.includes('tỉ lệ thuận') || name.includes('tỉ lệ nghịch')) {
      return `- Nắm vững định nghĩa, tính chất của tỉ lệ thức và dãy tỉ số bằng nhau; giải bài toán chia phần tỉ lệ.\n- Nhận biết và giải các bài toán thực tế về đại lượng tỉ lệ thuận, đại lượng tỉ lệ nghịch.`;
    }
    if (name.includes('Đơn thức') || name.includes('Đa thức') || name.includes('đa thức')) {
      return `- Nhận biết đơn thức, đa thức nhiều biến; xác định bậc, hệ số; thu gọn đa thức.\n- Thực hiện thành thạo phép cộng, trừ, nhân đa thức và chia đa thức cho đơn thức.`;
    }
    if (name.includes('Hằng đẳng thức') || name.includes('hằng đẳng thức') || name.includes('nhân tử')) {
      return `- Thuộc và vận dụng thành thạo 7 hằng đẳng thức đáng nhớ vào biến đổi đại số, tính nhanh.\n- Áp dụng linh hoạt các phương pháp phân tích đa thức thành nhân tử để giải phương trình và rút gọn biểu thức.`;
    }
    if (name.includes('Tứ giác') || name.includes('Hình thang cân') || name.includes('Hình bình hành') || name.includes('Hình chữ nhật') || name.includes('Hình thoi') || name.includes('Hình vuông')) {
      return `- Nắm vững định lí tổng các góc trong tứ giác; định nghĩa, tính chất và dấu hiệu nhận biết các tứ giác đặc biệt.\n- Chứng minh mối liên hệ giữa các hình và vận dụng giải toán hình học tổng hợp.`;
    }
    if (name.includes('Thalès') || name.includes('Đường trung bình') || name.includes('phân giác của tam giác')) {
      return `- Nắm vững định lí Thalès thuận, đảo và hệ quả trong tam giác; định nghĩa và tính chất đường trung bình, đường phân giác.\n- Ứng dụng định lí Thalès đo khoảng cách và chiều cao của vật thể ngoài thực địa.`;
    }
    if (name.includes('Phân thức') || name.includes('phân thức đại số')) {
      return `- Nắm định nghĩa phân thức đại số, điều kiện xác định, tính chất cơ bản để rút gọn và quy đồng mẫu thức.\n- Thực hiện thành thạo 4 phép tính cộng, trừ, nhân, chia phân thức đại số; rút gọn biểu thức tổng hợp.`;
    }
    if (name.includes('Phương trình bậc nhất') || name.includes('Giải bài toán bằng cách lập phương trình')) {
      return `- Giải phương trình bậc nhất một ẩn ax + b = 0 và các phương trình quy về bậc nhất.\n- Giải thành thạo các bài toán thực tế bằng cách lập phương trình (toán chuyển động, năng suất, quan hệ số, phần trăm).`;
    }
    if (name.includes('Hàm số') || name.includes('đồ thị') || name.includes('Hệ số góc') || name.includes('y = ax + b')) {
      return `- Nắm vững khái niệm hàm số, tọa độ điểm trên mặt phẳng Oxy; vẽ đồ thị hàm số bậc nhất y = ax + b.\n- Xác định hệ số góc, góc tạo bởi đường thẳng với trục Ox và vị trí tương đối giữa hai đường thẳng.`;
    }
    if (name.includes('đồng dạng') || name.includes('Pythagore')) {
      return `- Nắm định nghĩa và 3 trường hợp đồng dạng của hai tam giác (c-c-c, c-g-c, g-g), các trường hợp đồng dạng của tam giác vuông.\n- Vận dụng định lí Pythagore và tam giác đồng dạng tính độ dài đoạn thẳng và giải bài toán thực tiễn.`;
    }
    if (name.includes('chóp tam giác đều') || name.includes('chóp tứ giác đều') || name.includes('lăng trụ đứng') || name.includes('hình hộp chữ nhật') || name.includes('hình trụ') || name.includes('hình nón') || name.includes('hình cầu')) {
      return `- Nhận biết các yếu tố đáy, mặt bên, chiều cao của các hình khối không gian thực tiễn.\n- Vận dụng chuẩn xác công thức tính diện tích xung quanh, diện tích toàn phần và thể tích vào các bài toán đo lường thực tế.`;
    }
    if (name.includes('hệ phương trình') || name.includes('Hệ phương trình') || name.includes('Bất phương trình')) {
      return `- Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế, cộng đại số và máy tính cầm tay.\n- Giải bất phương trình bậc nhất một ẩn và biểu diễn tập nghiệm trên trục số; giải bài toán thực tế bằng cách lập hệ phương trình.`;
    }
    if (name.includes('Căn bậc hai') || name.includes('căn thức') || name.includes('Căn bậc ba')) {
      return `- Nắm vững điều kiện xác định, hằng đẳng thức √(A²) = |A| và quy tắc khai phương một tích, một thương.\n- Thực hiện đưa thừa số vào/ra dấu căn, trục căn thức ở mẫu và rút gọn biểu thức chứa căn bậc hai, căn bậc ba.`;
    }
    if (name.includes('Hệ thức lượng') || name.includes('lượng giác') || name.includes('tam giác vuông')) {
      return `- Nắm vững tỉ số lượng giác sin, cos, tan, cot của góc nhọn và các hệ thức giữa cạnh, góc trong tam giác vuông.\n- Giải tam giác vuông và ứng dụng đo chiều cao, khoảng cách vật thể ngoài thực tế.`;
    }
    if (name.includes('Đường tròn') || name.includes('tiếp tuyến') || name.includes('Góc nội tiếp') || name.includes('Tứ giác nội tiếp')) {
      return `- Nắm vững tính chất đối xứng, liên hệ đường kính - dây cung, tiếp tuyến của đường tròn và góc nội tiếp.\n- Chứng minh tứ giác nội tiếp đường tròn và tính toán độ dài cung tròn, diện tích hình quạt tròn, hình vành khuyên.`;
    }
    if (name.includes('Phương trình bậc hai') || name.includes('Parabol') || name.includes('Viète') || name.includes('Vi-ét')) {
      return `- Vẽ đồ thị Parabol y = ax² (a ≠ 0); giải phương trình bậc hai một ẩn bằng công thức nghiệm.\n- Vận dụng thành thạo định lí Viète nhẩm nghiệm, tìm hai số biết tổng và tích, xét dấu nghiệm và giải toán lập phương trình bậc hai.`;
    }
    if (name.includes('tần số') || name.includes('Tần số') || name.includes('ghép nhóm') || name.includes('xác suất') || name.includes('Xác suất') || name.includes('biểu đồ')) {
      return `- Thu thập, phân loại dữ liệu; lập bảng tần số, tần số tương đối, bảng ghép nhóm và vẽ biểu đồ thích hợp.\n- Tính xác suất của biến cố trong các mô hình xác suất đơn giản bằng phương pháp liệt kê, sơ đồ cây hoặc phần mềm Excel.`;
    }
    if (name.includes('GeoGebra') || name.includes('Excel') || name.includes('máy tính cầm tay')) {
      return `- Sử dụng thành thạo phần mềm GeoGebra vẽ hình học phẳng, đồ thị hàm số và mô phỏng toán học.\n- Khai thác phần mềm Excel và máy tính Casio hỗ trợ tính toán, phân tích số liệu thống kê và xác suất thực nghiệm.`;
    }
    return `- Nắm vững chuẩn kiến thức, định lí và phương pháp giải toán của bài học: "${name}" (SGK Toán Kết nối tri thức).\n- Phát triển năng lực tư duy logic, mô hình hóa toán học, giải quyết vấn đề và năng lực ứng dụng công nghệ số trong học toán.`;
  }

  // 2. NGỮ VĂN THCS (6 - 9)
  if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    if (name.includes('Đọc:') || name.includes('Truyện') || name.includes('Thơ') || name.includes('Kịch') || name.includes('Văn bản')) {
      return `- Phân tích được các đặc trưng thể loại (đề tài, cốt truyện, nhân vật, ngôi kể, chi tiết nghệ thuật, hình ảnh, vần nhịp, tu từ) trong: "${name}".\n- Hiểu được chủ đề, thông điệp nhân văn và tình cảm tác giả gửi gắm qua tác phẩm.\n- Bồi dưỡng tâm hồn nhân ái, lòng yêu nước, ý thức trách nhiệm và năng lực cảm thụ văn học.`;
    }
    if (name.includes('Viết:') || name.includes('Tập làm văn')) {
      return `- Nắm vững quy trình viết (chuẩn bị, tìm ý, lập dàn ý, viết bài, chỉnh sửa) cho kiểu bài: "${name}".\n- Viết bài văn đúng cấu trúc, luận điểm sáng rõ, dẫn chứng thuyết phục và ngôn ngữ trong sáng, giàu cảm xúc.`;
    }
    if (name.includes('Thực hành tiếng Việt')) {
      return `- Nhận diện và giải thích tác dụng của các đơn vị ngữ pháp, từ vựng, biện pháp tu từ trong bài: "${name}".\n- Vận dụng kiến thức tiếng Việt vào đọc hiểu và tạo lập văn bản chính xác, biểu cảm.`;
    }
    if (name.includes('Nói và nghe')) {
      return `- Tự tin trình bày ý kiến, thuyết trình bài văn hoặc trao đổi, thảo luận nhóm về vấn đề đặt ra trong bài học.\n- Biết lắng nghe tích cực, tôn trọng ý kiến người khác và phản hồi lịch sự.`;
    }
    return `- Đọc hiểu sâu sắc văn bản, viết bài đúng quy chuẩn thể loại và tự tin trong giao tiếp nói - nghe của: "${name}".\n- Bồi dưỡng phẩm chất đạo đức tốt đẹp và phát triển toàn diện năng lực văn học.`;
  }

  // 3. TIẾNG ANH THCS (6 - 9) - GLOBAL SUCCESS (7 TIẾT/UNIT)
  if (s.includes('tiếng anh') || s.includes('english') || s.includes('ngoại ngữ')) {
    if (name.includes('Getting Started')) {
      return `- Listen and read the introductory dialogue on the topic of the unit.\n- Identify key vocabulary, expressions and communicative context.\n- Develop initial interest and communicative confidence through warm-up pairwork.`;
    }
    if (name.includes('A Closer Look 1')) {
      return `- Master target vocabulary items, word collocations and phrases related to the unit topic.\n- Pronounce target phonetic sounds and stress patterns accurately in sentences.\n- Apply new lexis into communicative drills and interactive vocabulary games.`;
    }
    if (name.includes('A Closer Look 2')) {
      return `- Master grammatical structures, verb tenses and syntax patterns of the unit.\n- Formulate correct affirmative, negative and question sentences.\n- Apply grammar accuracy into contextualized spoken and written exercises.`;
    }
    if (name.includes('Communication')) {
      return `- Understand everyday English conversational phrases and cultural insights.\n- Practice functional language (inviting, giving opinions, making suggestions, asking for advice).\n- Engage actively in real-life communicative role-plays and pair discussions.`;
    }
    if (name.includes('Skills 1')) {
      return `- Read for gist (skimming) and specific details (scanning) about the unit topic.\n- Practice spoken interaction, sharing ideas and presenting opinions fluently.\n- Develop critical thinking and collaborative speaking skills.`;
    }
    if (name.includes('Skills 2')) {
      return `- Listen to monologues and conversations for main ideas and specific details.\n- Write a coherent, well-structured paragraph, email or travel guide on the unit topic.\n- Apply correct spelling, punctuation, and transition connectors.`;
    }
    if (name.includes('Looking Back') || name.includes('Project')) {
      return `- Review and consolidate all vocabulary, phonetics and grammar of the unit.\n- Present collaborative group projects with visual slides, posters or digital artifacts.\n- Self-assess learning outcomes and language competency.`;
    }
    if (name.includes('Review')) {
      return `- Consolidate language items (phonetics, vocabulary, grammar) across units.\n- Practice integrated test-taking skills (Listening, Reading, Writing, Speaking).\n- Identify areas for improvement before examination.`;
    }
    if (name.includes('Test') || name.includes('Kiểm tra') || name.includes('Assessment')) {
      return `- Assess students' language proficiency and four skill competencies according to MOET matrix.\n- Evaluate achievement of CEFR-aligned learning objectives; provide constructive feedback.`;
    }
    if (name.includes('Feedback') || name.includes('Correction')) {
      return `- Review test results, correct common errors, and consolidate language weaknesses.\n- Guide self-correction and set learning improvement goals.`;
    }
    return `- Master target vocabulary, phonetics, and grammatical structures in: "${name}" (Global Success Grade ${g}).\n- Develop integrated four language skills (Listening, Speaking, Reading, Writing) aligned with CEFR standards.`;
  }

  // 4. KHOA HỌC TỰ NHIÊN THCS (6 - 9)
  if (s.includes('khoa học tự nhiên') || s.includes('khtn')) {
    if (name.includes('Tế bào') || name.includes('tế bào')) return `- Nắm vững cấu trúc tế bào nhân sơ và nhân thực; phân biệt tế bào động vật và thực vật; quan sát tế bào dưới kính hiển vi.`;
    if (name.includes('Đa dạng thế giới sống') || name.includes('Phân loại')) return `- Trình bày hệ thống 5 giới sinh vật (Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật); nhận biết giá trị của đa dạng sinh học.`;
    if (name.includes('Nguyên tử') || name.includes('Nguyên tố') || name.includes('Bảng tuần hoàn')) return `- Mô tả cấu tạo nguyên tử (hạt p, n, e), liên kết hóa học; đọc và giải thích thông tin ô nguyên tố trong Bảng tuần hoàn.`;
    if (name.includes('Phản ứng hóa học') || name.includes('Bảo toàn khối lượng') || name.includes('Mol')) return `- Viết phương trình chữ và PTHH; vận dụng định luật bảo toàn khối lượng và công thức tính mol n = m/M, n = V/24.79, CM.`;
    if (name.includes('Acid') || name.includes('Base') || name.includes('Muối') || name.includes('Oxide') || name.includes('pH')) return `- Nắm tính chất hóa học của Acid, Base, Oxide, Muối; thực hành đo độ pH bằng giấy quỳ/chỉ thị; viết PTHH minh họa.`;
    if (name.includes('Kim loại') || name.includes('Phi kim') || name.includes('Hydrocarbon')) return `- Trình bày dãy hoạt động hóa học của kim loại; tính chất của nhôm, sắt, hợp kim; cấu tạo và ứng dụng của Methane, Ethylene, Rượu etylic.`;
    if (name.includes('Tốc độ') || name.includes('Lực') || name.includes('Áp suất') || name.includes('Archimedes')) return `- Tính tốc độ v = s/t, biểu diễn vectơ lực; giải thích hiện tượng ma sát, quán tính, áp suất chất lỏng và lực đẩy Archimedes.`;
    if (name.includes('Nhiệt') || name.includes('Năng lượng') || name.includes('Truyền nhiệt')) return `- Phân biệt nhiệt năng, nội năng; giải thích 3 hình thức truyền nhiệt (dẫn nhiệt, đối lưu, bức xạ nhiệt) và định luật bảo toàn năng lượng.`;
    if (name.includes('Ánh sáng') || name.includes('Khúc xạ') || name.includes('Thấu kính') || name.includes('Mắt')) return `- Vẽ tia sáng qua gương phẳng, lăng kính, thấu kính hội tụ/phân kì; dựng ảnh của vật qua thấu kính; giải thích các tật của mắt.`;
    if (name.includes('Điện') || name.includes('Từ') || name.includes('Cảm ứng điện từ') || name.includes('Máy biến áp')) return `- Nắm định luật Ohm, công thức đoạn mạch nối tiếp/song song, hiện tượng cảm ứng điện từ và nguyên lý truyền tải điện năng đi xa.`;
    if (name.includes('Di truyền') || name.includes('Mendel') || name.includes('ADN') || name.includes('Nhiễm sắc thể')) return `- Giải thích các quy luật di truyền của Mendel; mô tả cấu trúc ADN, ARN, Protein; phân tích cơ chế nguyên phân, giảm phân và đột biến gen.`;
    return `- Nắm vững bản chất định luật khoa học, quy luật tự nhiên và hiện tượng trong bài: "${name}".\n- Thực hành thí nghiệm an toàn, tư duy khoa học thực nghiệm và ý thức bảo vệ môi trường, sinh thái.`;
  }

  // 5. LỊCH SỬ VÀ ĐỊA LÍ THCS (6 - 9)
  if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('ls&đl') || s.includes('lsdl')) {
    if (name.includes('Ai Cập') || name.includes('Lưỡng Hà') || name.includes('Hy Lạp') || name.includes('La Mã') || name.includes('Văn minh')) {
      return `- Trình bày vị trí địa lí, điều kiện tự nhiên và những thành tựu văn hóa tiêu biểu của các nền văn minh cổ đại thế giới.\n- Nhận diện những đóng góp to lớn của các nền văn minh nhân loại đối với lịch sử thế giới.`;
    }
    if (name.includes('Tây Âu') || name.includes('Phát kiến') || name.includes('Phục hưng')) {
      return `- Phân tích quá trình hình thành chế độ phong kiến Tây Âu, các cuộc phát kiến địa lí lớn và phong trào Văn hóa Phục hưng rực rỡ.\n- Khái quát sự nảy sinh quan hệ sản xuất tư bản chủ nghĩa tại Tây Âu.`;
    }
    if (name.includes('Cách mạng tư sản') || name.includes('Cách mạng công nghiệp') || name.includes('Chiến tranh thế giới') || name.includes('Chiến tranh lạnh')) {
      return `- Phân tích nguyên nhân, diễn biến chính, kết quả và ý nghĩa lịch sử sâu sắc của cuộc cách mạng / cuộc chiến tranh trong bài học.\n- Rút ra bài học lịch sử về hòa bình, dân chủ và tiến bộ xã hội.`;
    }
    if (name.includes('Văn Lang') || name.includes('Âu Lạc') || name.includes('Bắc thuộc') || name.includes('Bạch Đằng') || name.includes('Khởi nghĩa')) {
      return `- Trình bày tiến trình lịch sử dựng nước thời Hùng Vương - An Dương Vương và phong trào bền bỉ đấu tranh giành độc lập dân tộc trước thế kỉ X.\n- Bồi đắp niềm tự hào dân tộc và lòng biết ơn sâu sắc đối với các vị anh hùng dựng nước và giữ nước.`;
    }
    if (name.includes('Đại Việt') || name.includes('Lý') || name.includes('Trần') || name.includes('Lê sơ') || name.includes('Lam Sơn') || name.includes('Tây Sơn')) {
      return `- Trình bày và phân tích các trang sử hào hùng xây dựng đất nước và những chiến công hiển hách đánh bại quân xâm lược (Tống, Mông - Nguyên, Minh, Xiêm, Thanh).\n- Tự hào về truyền thống yêu nước, nghệ thuật quân sự độc đáo và các giá trị di sản văn hóa Thăng Long - Đại Việt.`;
    }
    if (name.includes('Nguyễn Ái Quốc') || name.includes('Đảng Cộng sản') || name.includes('Cách mạng tháng Tám') || name.includes('Điện Biên Phủ') || name.includes('kháng chiến') || name.includes('1975') || name.includes('Đổi mới')) {
      return `- Nắm vững bước ngoặt lịch sử khi Đảng Cộng sản Việt Nam ra đời, thắng lợi vĩ đại của Cách mạng tháng Tám 1945, hai cuộc kháng chiến chống Pháp - Mỹ và thành tựu Đổi mới đất nước.\n- Bồi dưỡng niềm tin son sắt vào sự lãnh đạo của Đảng và khát vọng cống hiến xây dựng Tổ quốc.`;
    }
    if (name.includes('Bản đồ') || name.includes('Kinh, vĩ tuyến') || name.includes('Trái Đất') || name.includes('Khí hậu') || name.includes('Địa hình') || name.includes('Sông') || name.includes('Thuỷ văn')) {
      return `- Sử dụng thành thạo bản đồ, Atlas Địa lí, biểu đồ số liệu để phân tích đặc điểm tự nhiên, địa hình, khí hậu, sông ngòi của Trái Đất và Việt Nam.\n- Giải thích được các quy luật tự nhiên và hiện tượng địa lí thực tế.`;
    }
    if (name.includes('Dân số') || name.includes('Nông nghiệp') || name.includes('Công nghiệp') || name.includes('Dịch vụ') || name.includes('Vùng') || name.includes('kinh tế')) {
      return `- Phân tích được bức tranh phân bố dân cư, đô thị hóa, các ngành kinh tế trọng điểm và thế mạnh phát triển kinh tế - xã hội của các vùng trên cả nước.\n- Vận dụng kiến thức giải thích các vấn đề kinh tế - xã hội ở địa phương.`;
    }
    if (name.includes('Biển đảo') || name.includes('Biển Đông') || name.includes('Hoàng Sa') || name.includes('Trường Sa') || name.includes('chủ quyền')) {
      return `- Xác định vị trí chiến lược của Biển Đông; khẳng định chủ quyền biển, đảo thiêng liêng và quyền lợi hợp pháp của Việt Nam tại hai quần đảo Hoàng Sa, Trường Sa.\n- Nâng cao ý thức trách nhiệm công dân trong sự nghiệp bảo vệ chủ quyền biển đảo Tổ quốc.`;
    }
    return `- Nắm vững chuẩn kiến thức lịch sử, địa lý trọng tâm của bài: "${name}" (SGK Lịch sử và Địa lí Kết nối tri thức).\n- Khai thác thành thạo bản đồ, Atlas Địa lí, tranh ảnh tư liệu; bồi đắp lòng yêu nước và ý thức giữ gìn di sản dân tộc.`;
  }

  // 6. TIN HỌC THCS (6 - 9)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    if (name.includes('Bảng tính') || name.includes('Excel') || name.includes('hàm') || name.includes('COUNTIF') || name.includes('SUMIF') || name.includes('xác thực')) {
      return `- Nắm vững thao tác bảng tính, địa chỉ tương đối/tuyệt đối; sử dụng thành thạo các hàm tính toán SUM, AVERAGE, MAX, MIN, COUNTIF, SUMIF, IF; thực hiện định dạng bảng tính, sắp xếp, lọc dữ liệu và vẽ biểu đồ.`;
    }
    if (name.includes('Mạng máy tính') || name.includes('Internet') || name.includes('An toàn') || name.includes('Mạng xã hội') || name.includes('pháp lí')) {
      return `- Mô tả cấu trúc mạng LAN, WAN, dịch vụ Internet, mạng xã hội; thực hiện chia sẻ dữ liệu an toàn, tuân thủ pháp luật, bảo vệ bí mật thông tin và văn hóa ứng xử trực tuyến.`;
    }
    if (name.includes('Thuật toán') || name.includes('Lập trình') || name.includes('Python') || name.includes('Scratch') || name.includes('Gỡ lỗi') || name.includes('Bài toán tin học') || name.includes('Cấu trúc điều khiển')) {
      return `- Xác định Input, Output bài toán; mô tả thuật toán bằng sơ đồ khối; khai báo biến, biểu thức; lập trình cấu trúc rẽ nhánh, vòng lặp và thực hành gỡ lỗi chương trình.`;
    }
    if (name.includes('Mô phỏng') || name.includes('phần mềm mô phỏng')) {
      return `- Hiểu nguyên lí và vai trò của phần mềm mô phỏng trong nghiên cứu, học tập; thao tác tương tác các thông số đầu vào và quan sát, ghi chép kết quả thí nghiệm ảo.`;
    }
    if (name.includes('Sơ đồ tư duy') || name.includes('Định dạng văn bản') || name.includes('Trình chiếu') || name.includes('trang chiếu') || name.includes('sổ lưu niệm') || name.includes('video')) {
      return `- Sử dụng thành thạo phần mềm sơ đồ tư duy, soạn thảo văn bản nâng cao, Slide Master trình chiếu hoặc biên tập video; hoàn thiện sản phẩm số trực quan, chuyên nghiệp.`;
    }
    if (name.includes('nghề nghiệp') || name.includes('Hướng nghiệp') || name.includes('thế giới kĩ thuật số') || name.includes('Lược sử')) {
      return `- Trình bày lược sử phát triển công cụ tính toán, vai trò của thế giới số và các ngành nghề thuộc lĩnh vực CNTT; định hướng rèn luyện năng lực số cá nhân.`;
    }
    return `- Nắm vững chuẩn kiến thức và thực hành thành thạo kĩ năng công nghệ thông tin của bài học: "${name}".\n- Phát triển năng lực số (NLS), tư duy thuật toán và văn hóa ứng xử chuẩn mực trên môi trường số.`;
  }

  // 7. CÔNG NGHỆ THCS (6 - 9)
  if (s.includes('công nghệ') || s.includes('cong nghe')) {
    if (name.includes('Nhà ở') || name.includes('Trang phục') || name.includes('Thực phẩm')) return `- Trình bày vai trò của nhà ở, nguyên tắc phối hợp và bảo quản trang phục; quy trình bảo quản, chế biến thực phẩm an toàn vệ sinh.`;
    if (name.includes('Trồng trọt') || name.includes('Chăn nuôi') || name.includes('Thủy sản')) return `- Nắm vững quy trình kỹ thuật làm đất, gieo trồng, bón phân hữu cơ, chăm sóc vật nuôi và phòng trừ dịch bệnh an toàn sinh học.`;
    if (name.includes('Bản vẽ kỹ thuật') || name.includes('Hình chiếu') || name.includes('Cơ khí')) return `- Đọc bản vẽ hình chiếu vuông góc, bản vẽ chi tiết; sử dụng dụng cụ cơ khí đo đạc, cưa, đục, dũa kim loại đúng quy trình an toàn.`;
    if (name.includes('Mạch điện') || name.includes('Điện gia dụng') || name.includes('Thiết kế kỹ thuật')) return `- Đọc sơ đồ mạch điện; lắp ráp mạch điện điều khiển, chiếu sáng gia đình; thực hiện các bước trong quy trình thiết kế kỹ thuật.`;
    return `- Hiểu rõ nguyên lý kỹ thuật, quy trình công nghệ và thao tác an toàn của bài: "${name}".\n- Rèn luyện tác phong công nghiệp, tư duy sáng tạo kỹ thuật và định hướng nghề nghiệp.`;
  }

  // 8. GIÁO DỤC CÔNG DÂN THCS (6 - 9)
  if (s.includes('công dân') || s.includes('gdcd')) {
    if (name.includes('Truyền thống') || name.includes('Tự hào') || name.includes('Yêu thương')) return `- Nêu được truyền thống tốt đẹp của gia đình, dòng họ, quê hương; có hành động cụ thể gìn giữ, phát huy truyền thống và yêu thương con người.`;
    if (name.includes('Pháp luật') || name.includes('Kỷ luật') || name.includes('Quyền')) return `- Nắm vững các quy định pháp luật về quyền và nghĩa vụ công dân; tự giác chấp hành nội quy, pháp luật và phê phán hành vi vi phạm.`;
    if (name.includes('Kỹ năng sống') || name.includes('Quản lý cảm xúc') || name.includes('Bạo lực')) return `- Nhận biết và rèn luyện kỹ năng kiểm soát cảm xúc, giải quyết mâu thuẫn bất hòa; kiên quyết phòng chống bạo lực học đường.`;
    return `- Nắm vững chuẩn mực đạo đức và pháp luật của bài học: "${name}".\n- Bồi dưỡng bản lĩnh công dân, lối sống văn minh, tự chủ và thượng tôn pháp luật.`;
  }

  // 9. GIÁO DỤC THỂ CHẤT THCS (6 - 9) - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    if (name.includes('dinh dưỡng') || name.includes('môi trường tự nhiên') || name.includes('Kiến thức chung')) {
      return `- Hiểu và vận dụng kiến thức về dinh dưỡng, vận động, nghỉ ngơi hợp lí và các yếu tố môi trường tự nhiên để nâng cao sức khỏe, phát triển thể chất bền vững.`;
    }
    if (name.includes('Chạy cự li ngắn') || name.includes('Xuất phát thấp') || name.includes('Xuất phát cao') || name.includes('60 m') || name.includes('60m') || name.includes('100 m') || name.includes('100m')) {
      return `- Nắm vững và thực hiện chuẩn xác các giai đoạn kỹ thuật chạy cự li ngắn (Xuất phát, Chạy lao, Chạy giữa quãng, Về đích); nâng cao tốc độ cực đại và phản xạ nhanh.`;
    }
    if (name.includes('Nhảy cao kiểu nằm nghiêng')) {
      return `- Thực hiện đúng 4 giai đoạn kỹ thuật Nhảy cao kiểu nằm nghiêng (Chạy đà, Giậm nhảy, Bay trên không xoay thân nằm nghiêng qua xà, Tiếp đất an toàn trên đệm).`;
    }
    if (name.includes('Nhảy cao kiểu bước qua') || name.includes('Nhảy cao')) {
      return `- Thực hiện thuần thục 4 giai đoạn kỹ thuật Nhảy cao kiểu bước qua (Chạy đà uốn cong, Giậm nhảy đá lăng, Vượt xà chân lăng trước chân giậm sau, Tiếp đất hoãn xung).`;
    }
    if (name.includes('Nhảy xa kiểu ngồi') || name.includes('Nhảy xa')) {
      return `- Nắm vững và phối hợp liên hoàn 4 giai đoạn kỹ thuật Nhảy xa kiểu ngồi (Chạy đà tăng tốc, Giậm nhảy cắm ván, Bay trên không kiểu ngồi, Rơi xuống cát an toàn).`;
    }
    if (name.includes('Ném bóng')) {
      return `- Nắm vững kỹ thuật cầm bóng, chạy đà 4 bước chéo và ra sức cuối cùng tạo tư thế cánh cung ném bóng xa đạt thành tích tối ưu, giữ thăng bằng an toàn.`;
    }
    if (name.includes('Chạy cự li trung bình') || name.includes('chạy bền')) {
      return `- Nắm vững kỹ thuật chạy cự li trung bình: phối hợp nhịp thở 2 bước hít vào - 2 bước thở ra, kỹ thuật chạy đường thẳng/đường vòng và phân phối sức hợp lí.`;
    }
    if (name.includes('Bài thể dục liên hoàn')) {
      return `- Thuộc thứ tự, thực hiện chính xác phương hướng, biên độ và tính nhịp điệu của Bài thể dục liên hoàn 30 nhịp (lớp 6, 7) khỏe khoắn, dứt khoát.`;
    }
    if (name.includes('Bài thể dục nhịp điệu')) {
      return `- Thực hiện đúng các chuỗi động tác của Bài thể dục nhịp điệu (lớp 8, 9) sôi nổi, đúng nhịp phách âm nhạc, phát triển năng lực thẩm mỹ vận động.`;
    }
    if (name.includes('Cầu lông') || name.includes('Bóng đá') || name.includes('Bóng rổ') || name.includes('Thể thao tự chọn')) {
      return `- Nắm vững kỹ thuật di chuyển, kỹ năng đánh cầu/đá bóng/ném rổ và phối hợp chiến thuật nhóm hiệu quả; chấp hành nghiêm túc luật thi đấu thể thao.`;
    }
    if (name.includes('Kiểm tra') || name.includes('đánh giá')) {
      return `- Đánh giá mức độ đạt chuẩn kỹ thuật động tác và thành tích thể lực theo quy định; rèn luyện tính trung thực, kỷ luật và tinh thần thể thao cao thượng.`;
    }
    return `- Nắm vững kỹ thuật động tác, tích cực rèn luyện nâng cao thể lực qua bài học: "${name}".\n- Bồi dưỡng tinh thần thể thao cao thượng, tính kỷ luật và thói quen rèn luyện thân thể suốt đời.`;
  }

  // 10. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THCS (6 - 9)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn') || s.includes('hướng nghiệp')) {
    if (name.includes('nhà trường') || name.includes('tình bạn') || name.includes('bắt nạt')) {
      return `- Tự hào truyền thống nhà trường, xây dựng nếp sống văn minh và giữ gìn tình bạn trong sáng.\n- Rèn luyện kỹ năng phòng tránh bắt nạt học đường và tạo dựng môi trường học đường an toàn, thân thiện.`;
    }
    if (name.includes('bản thân') || name.includes('tính cách') || name.includes('cảm xúc') || name.includes('tranh biện') || name.includes('từ chối') || name.includes('thích nghi') || name.includes('áp lực')) {
      return `- Nhận diện sâu sắc nét tính cách, cảm xúc, điểm mạnh và điểm cần hoàn thiện của bản thân.\n- Rèn luyện kỹ năng làm chủ cảm xúc, tranh biện tích cực, kĩ năng từ chối cám dỗ và ứng phó linh hoạt với áp lực thi cử.`;
    }
    if (name.includes('gia đình') || name.includes('người thân') || name.includes('việc nhà') || name.includes('kinh tế gia đình')) {
      return `- Thể hiện tình yêu thương, lòng biết ơn cha mẹ và sự tôn trọng người thân trong gia đình.\n- Chủ động chia sẻ công việc gia đình, giải quyết bất đồng hòa nhã và cùng gia đình thực hiện chi tiêu tiết kiệm, hợp lí.`;
    }
    if (name.includes('cộng đồng') || name.includes('thiện nguyện') || name.includes('mạng xã hội') || name.includes('truyền thông')) {
      return `- Thực hiện giao tiếp văn minh nơi công cộng, tích cực tham gia các hoạt động thiện nguyện vì cộng đồng.\n- Khảo sát và ứng xử chuẩn mực trên mạng xã hội, lan tỏa các thông điệp nhân văn trong học đường.`;
    }
    if (name.includes('thiên nhiên') || name.includes('môi trường') || name.includes('Tổ quốc') || name.includes('thiên tai')) {
      return `- Khám phá, tự hào và có hành động thiết thực bảo tồn cảnh quan thiên nhiên quê hương Việt Nam.\n- Thực hiện lối sống xanh, giảm thiểu rác thải nhựa và truyền thông kỹ năng phòng chống rủi ro thiên tai, thích ứng biến đổi khí hậu.`;
    }
    if (name.includes('nghề nghiệp') || name.includes('hướng nghiệp') || name.includes('nghề') || name.includes('cơ sở giáo dục') || name.includes('tuyển sinh') || name.includes('Lớp 10')) {
      return `- Khám phá thế giới nghề nghiệp trong xã hội hiện đại; đánh giá sự phù hợp giữa năng lực, sở thích bản thân với ngành nghề định chọn.\n- Nắm vững thông tin tuyển sinh THPT / GDNN và xây dựng kế hoạch rèn luyện, định hướng học tập sau tốt nghiệp THCS.`;
    }
    return `- Chủ động, tích cực tham gia các hoạt động trải nghiệm trong bài: "${name}" (SGK HĐTN&HN Kết nối tri thức).\n- Phát triển toàn diện năng lực tự chủ, kỹ năng thích ứng, quản lý cảm xúc, phục vụ cộng đồng và định hướng nghề nghiệp tương lai.`;
  }

  // 11. ÂM NHẠC & MĨ THUẬT THCS
  if (s.includes('âm nhạc') || s.includes('am nhac')) {
    return `- Thể hiện đúng cao độ, trường độ, sắc thái của bài hát / bài đọc nhạc / hòa tấu nhạc cụ trong bài: "${name}".\n- Cảm thụ vẻ đẹp giai điệu âm nhạc Việt Nam và thế giới; nuôi dưỡng cảm xúc thẩm mỹ trong sáng.`;
  }
  if (s.includes('mĩ thuật') || s.includes('mỹ thuật')) {
    return `- Vận dụng kiến thức bố cục, đường nét, màu sắc, không gian để sáng tạo tác phẩm hội họa / đồ họa / điêu khắc trong bài: "${name}".\n- Biết phân tích, đánh giá và cảm nhận giá trị nghệ thuật của tác phẩm mĩ thuật.`;
  }

  // 12. GIÁO DỤC ĐỊA PHƯƠNG THCS
  return `- Trình bày được các giá trị lịch sử, địa lí, văn hóa truyền thống, làng nghề và kinh tế - xã hội địa phương trong: "${name}".\n- Bồi đắp tình yêu quê hương, niềm tự hào và ý thức đóng góp xây dựng quê hương giàu đẹp.`;
}

// =========================================================================
// 1. TOÁN THCS (LỚP 6, 7, 8, 9) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
import { getMathSecondaryCurriculum } from './curriculumSecondaryMath';
export { getMathSecondaryCurriculum };

// =========================================================================
// 2. NGỮ VĂN THCS (LỚP 6, 7, 8, 9) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
import { getNguVanSecondaryCurriculum } from './curriculumSecondaryLiterature';
export { getNguVanSecondaryCurriculum };


// =========================================================================
// 3. TIẾNG ANH THCS (LỚP 6, 7, 8, 9) - GLOBAL SUCCESS
// =========================================================================
import { getEnglishSecondaryCurriculum } from './curriculumSecondaryEnglish';
import { getTinHocSecondaryCurriculum } from './curriculumInformatics';
import { getLsdlSecondaryCurriculum } from './curriculumSecondaryLsdl';
import { getHdtnSecondaryCurriculum } from './curriculumSecondaryHdtn';
export {
  getEnglishSecondaryCurriculum,
  getTinHocSecondaryCurriculum,
  getLsdlSecondaryCurriculum,
  getHdtnSecondaryCurriculum
};

// =========================================================================
// 4. KHOA HỌC TỰ NHIÊN THCS (LỚP 6, 7, 8, 9) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
export { getKhtnSecondaryCurriculum };


// =========================================================================
// 5. GIÁO DỤC THỂ CHẤT THCS (LỚP 6, 7, 8, 9) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
import { getGdtcSecondaryCurriculum } from './curriculumSecondaryGdtc';
export { getGdtcSecondaryCurriculum };
export { getTechnologySecondaryCurriculum };

// =========================================================================
// 6. CÁC MÔN CÒN LẠI THCS: LỊCH SỬ & ĐỊA LÍ, TIN HỌC, CÔNG NGHỆ, GDCD, ÂM NHẠC, MĨ THUẬT, HĐTN, GDĐP
// =========================================================================
export function getGeneralSecondaryCurriculum(grade: string, subject: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 7;
  const s = subject.toLowerCase().trim();
  const list: RawSecondaryLesson[] = [];

  // 6.1. LỊCH SỬ VÀ ĐỊA LÍ THCS (3 tiết/tuần x 35 tuần = 105 tiết)
  if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('lich su')) {
    return getLsdlSecondaryCurriculum(String(g));
  }

  // 6.2. MÔN TIN HỌC THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('informatics')) {
    return getTinHocSecondaryCurriculum(String(g));
  }

  // 6.3. MÔN CÔNG NGHỆ THCS (Lớp 6, 7, 8, 9)
  if (s.includes('công nghệ') || s.includes('cong nghe') || s.includes('technology')) {
    return getTechnologySecondaryCurriculum(String(g));
  }

  // 6.4. MÔN GIÁO DỤC CÔNG DÂN THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('công dân') || s.includes('gdcd') || s.includes('đạo đức')) {
    const gdcdTopics = [
      { t: 'Chủ đề 1: Tự hào truyền thống gia đình', n: `Bài 1: Tự hào về truyền thống gia đình, dòng họ (Lớp ${g})` },
      { t: 'Chủ đề 1: Tự hào truyền thống gia đình', n: `Bài 2: Tôn trọng sự đa dạng của các dân tộc và bản sắc văn hóa` },
      { t: 'Chủ đề 2: Yêu thương con người', n: `Bài 3: Quan tâm, cảm thông và chia sẻ với mọi người xung quanh` },
      { t: 'Chủ đề 2: Yêu thương con người', n: `Bài 4: Giữ chữ tín trong học tập, quan hệ bạn bè và cuộc sống` },
      { t: 'Chủ đề 2: Yêu thương con người', n: `Bài 5: Yêu thương con người và lan tỏa lòng nhân ái` },
      { t: 'Chủ đề 3: Tự giác và trách nhiệm', n: `Bài 6: Tự giác, tích cực trong hoạt động tập thể và hoạt động xã hội` },
      { t: 'Chủ đề 3: Tự giác và trách nhiệm', n: `Bài 7: Bảo tồn di sản văn hóa vật thể và phi vật thể của dân tộc` },
      { t: 'Chủ đề 4: Quản lý tài chính cá nhân', n: `Bài 8: Quản lý tiền hiệu quả và xây dựng thói quen tiết kiệm` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục công dân Lớp ${g}` },
      { t: 'Chủ đề 5: Kỹ năng sống học đường', n: `Bài 9: Phòng chống bạo lực học đường và xây dựng tình bạn trong sáng` },
      { t: 'Chủ đề 5: Kỹ năng sống học đường', n: `Bài 10: Xây dựng nền nếp gia đình hòa thuận, hạnh phúc` },
      { t: 'Chủ đề 5: Kỹ năng sống học đường', n: `Bài 11: Phòng chống tai nạn thương tích và tệ nạn xã hội` },
      { t: 'Chủ đề 6: Quyền và nghĩa vụ công dân', n: `Bài 12: Quyền và nghĩa vụ của công dân trong gia đình` },
      { t: 'Chủ đề 6: Quyền và nghĩa vụ công dân', n: `Bài 13: Phòng chống thiên tai và ứng phó với biến đổi khí hậu` },
      { t: 'Chủ đề 6: Quyền và nghĩa vụ công dân', n: `Bài 14: Kỹ năng kiểm soát cảm xúc tiêu cực và vượt qua áp lực` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục công dân Lớp ${g}` },
      { t: 'Chữa bài & Ôn tập', n: `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức GDCD ${g} HK1` },
      { t: 'Sơ kết Học kỳ 1', n: `Sơ kết Học kỳ 1 môn Giáo dục công dân Lớp ${g}` },
      { t: 'Chủ đề 7: Nhà nước và Pháp luật', n: `Bài 16: Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam và Bộ máy nhà nước` },
      { t: 'Chủ đề 7: Nhà nước và Pháp luật', n: `Bài 17: Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam` },
      { t: 'Chủ đề 7: Nhà nước và Pháp luật', n: `Bài 18: Pháp luật và kỷ luật trong đời sống xã hội` },
      { t: 'Chủ đề 8: Quyền tự do cơ bản', n: `Bài 19: Quyền bình đẳng của công dân trước pháp luật` },
      { t: 'Chủ đề 8: Quyền tự do cơ bản', n: `Bài 20: Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín` },
      { t: 'Chủ đề 8: Quyền tự do cơ bản', n: `Bài 21: Quyền bất khả xâm phạm về chỗ ở và thân thể của công dân` },
      { t: 'Chủ đề 8: Quyền tự do cơ bản', n: `Bài 22: Quyền tự do ngôn luận và tiếp cận thông tin đúng pháp luật` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục công dân Lớp ${g}` },
      { t: 'Chủ đề 9: Quyền học tập và lao động', n: `Bài 23: Quyền và nghĩa vụ học tập của công dân` },
      { t: 'Chủ đề 9: Quyền học tập và lao động', n: `Bài 24: Quyền và nghĩa vụ lao động của công dân` },
      { t: 'Chủ đề 10: Tham gia quản lý nhà nước', n: `Bài 25: Quyền tham gia quản lý nhà nước và xã hội của công dân` },
      { t: 'Chủ đề 10: Tham gia quản lý nhà nước', n: `Bài 26: Quyền khiếu nại, tố cáo của công dân và nghĩa vụ tôn trọng pháp luật` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục công dân Lớp ${g}` },
      { t: 'Chữa bài & Ôn tập', n: `Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức GDCD ${g} HK2` },
      { t: 'Dự án GDCD', n: `Dự án GDCD: "Phiên tòa Giả định Tuyên truyền Pháp luật Học đường & Phòng chống Bạo lực"` },
      { t: 'Chủ đề: Ôn tập cuối năm', n: `Bài 29: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDCD ${g}` },
      { t: 'Tổng kết năm học', n: `Tổng kết năm học & Đánh giá xếp loại môn GDCD ${g} cả năm` }
    ];

    gdcdTopics.forEach((item, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: `- Nhận biết và thực hiện đúng chuẩn mực đạo đức, kỹ năng sống và pháp luật của ${item.n} (SGK GDCD ${g} Kết nối tri thức).\n- Phân tích và xử lý các tình huống đạo đức, pháp lý thực tế một cách chuẩn mực, nhân văn.\n- Nâng cao ý thức thượng tôn pháp luật, tinh thần trách nhiệm công dân và lòng tự hào dân tộc.`,
        equipment: 'Hiến pháp 2013, Luật Trẻ em, video tình huống đạo đức và pháp luật, máy chiếu',
        location: 'Phòng học / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Phiên tòa Giả định' : ''
      });
    });

    return list;
  }

  // 6.5. ÂM NHẠC THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('âm nhạc') || s.includes('am nhac') || s.includes('music')) {
    const amNhacTopics = [
      `Chủ đề 1: Khai trường - Hát: Mùa khai trường (Phan Trần Bảng) (Lớp ${g})`,
      `Chủ đề 1: Khai trường - Nhạc cụ: Nhạc cụ gõ & Sáo Recorder / Kèn phím Melodica`,
      `Chủ đề 1: Khai trường - Đọc nhạc: Bài đọc nhạc số 1 (Giọng Đô trưởng)`,
      `Chủ đề 1: Khai trường - Thường thức âm nhạc: Giới thiệu đàn Bầu và Dân ca Việt Nam`,
      `Chủ đề 2: Tình bạn - Hát: Lí cây đa (Dân ca quan họ Bắc Ninh)`,
      `Chủ đề 2: Tình bạn - Hát: Lí cây đa (Vận động phụ họa & Gõ đệm)`,
      `Chủ đề 2: Tình bạn - Đọc nhạc: Bài đọc nhạc số 2 kết hợp hòa tấu`,
      `Chủ đề 2: Tình bạn - Thường thức âm nhạc: Nhạc sĩ Trịnh Công Sơn và ca khúc thiếu nhi`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp ${g}`,
      `Chủ đề 3: Thầy cô và mái trường - Hát: Thầy cô là tất cả`,
      `Chủ đề 3: Thầy cô và mái trường - Nhạc cụ: Luyện tập mẫu tiết tấu đệm bài hát`,
      `Chủ đề 3: Thầy cô và mái trường - Đọc nhạc: Bài đọc nhạc số 3`,
      `Chủ đề 4: Giai điệu quê hương - Hát: Bài ca đất phương Nam`,
      `Chủ đề 4: Giai điệu quê hương - Thường thức âm nhạc: Nhạc cụ dân tộc Đàn Tranh, Đàn Nguyệt`,
      `Chủ đề 4: Giai điệu quê hương - Đọc nhạc: Bài đọc nhạc số 4`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố các bài hát, bài đọc nhạc HK1 Lớp ${g}`,
      `Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 Lớp ${g}`,
      `Chủ đề 5: Mùa xuân ước mơ - Hát: Mùa xuân trên quê hương`,
      `Chủ đề 5: Mùa xuân ước mơ - Nhạc cụ: Độc tấu / Hòa tấu Recorder & Kèn Melodica`,
      `Chủ đề 5: Mùa xuân ước mơ - Đọc nhạc: Bài đọc nhạc số 5`,
      `Chủ đề 5: Mùa xuân ước mơ - Thường thức âm nhạc: Nghệ thuật Hát chèo / Hát Xoan Phú Thọ`,
      `Chủ đề 6: Tuổi hồng - Hát: Khát vọng tuổi trẻ / Tiến lên đoàn viên`,
      `Chủ đề 6: Tuổi hồng - Nhạc cụ gõ đệm tiết tấu phức hợp`,
      `Chủ đề 6: Tuổi hồng - Đọc nhạc: Bài đọc nhạc số 6`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp ${g}`,
      `Chủ đề 7: Âm nhạc thế giới - Hát: Niềm vui thế giới (Beethoven) / Khúc ca ban mai`,
      `Chủ đề 7: Âm nhạc thế giới - Thường thức âm nhạc: Nhạc sĩ thiên tài W.A.Mozart & L.V.Beethoven`,
      `Chủ đề 7: Âm nhạc thế giới - Đọc nhạc: Bài đọc nhạc số 7`,
      `Chủ đề 8: Giai điệu mùa hè - Hát: Tia nắng hạt mưa`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường Lớp ${g}`,
      `Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp ${g}`,
      `Ôn tập tổng hợp toàn diện các bài hát, bài đọc nhạc và nhạc cụ cả năm Lớp ${g}`,
      `Tổng kết năm học & Đánh giá xếp loại môn Âm nhạc Lớp ${g} cả năm`
    ];

    amNhacTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 1,
        yccd: `- Hát đúng cao độ, trường độ, sắc thái cảm xúc và kỹ thuật biểu diễn của ${name} (SGK Âm nhạc ${g} Kết nối tri thức).\n- Đọc đúng nhạc bản, gõ đệm chuẩn xác bằng nhạc cụ gõ/Recorder/Melodica và nhận biết giá trị di sản âm nhạc dân tộc.\n- Phát triển năng lực thẩm mỹ âm nhạc, sự tự tin và tinh thần hợp tác nhóm.`,
        equipment: 'Đàn Organ/Piano điện tử, thanh phách, song loan, sáo Recorder, kèn Melodica, file âm thanh mẫu',
        location: 'Phòng học bộ môn Âm nhạc',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Dự án Âm nhạc học đường' : ''
      });
    });

    return list;
  }

  // 6.6. MĨ THUẬT THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('mĩ thuật') || s.includes('mỹ thuật') || s.includes('art')) {
    const miThuatTopics = [
      `Chủ đề 1: Mĩ thuật thế giới thời kì Cổ đại và Trung đại - Bài 1: Mĩ thuật thời Cổ đại (Lớp ${g})`,
      `Chủ đề 1: Mĩ thuật thế giới Cổ đại - Bài 1: Thực hành mô phỏng họa tiết kiến trúc cổ`,
      `Chủ đề 1: Mĩ thuật thế giới Cổ đại - Bài 2: Tranh kính màu kiến trúc Trung đại Gothic`,
      `Chủ đề 2: Di sản mĩ thuật Việt Nam thời phong kiến - Bài 3: Nghệ thuật điêu khắc thời Lí - Trần`,
      `Chủ đề 2: Di sản mĩ thuật Lí - Trần - Bài 3: Thực hành vẽ trang trí họa tiết Rồng thời Lí`,
      `Chủ đề 3: Hội họa & Tranh tĩnh vật màu - Bài 4: Khám phá nguồn sáng, bóng đổ và hòa sắc`,
      `Chủ đề 3: Hội họa & Tranh tĩnh vật màu - Bài 4: Thực hành vẽ tranh tĩnh vật màu lọ hoa và quả`,
      `Chủ đề 3: Hội họa & Tranh tĩnh vật màu - Trưng bày và đánh giá sản phẩm tranh tĩnh vật`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp ${g}`,
      `Chủ đề 4: Nghệ thuật Thiết kế đồ họa - Bài 5: Thiết kế Logo biểu trưng trường lớp`,
      `Chủ đề 4: Nghệ thuật Thiết kế đồ họa - Bài 5: Thực hành hoàn thiện biểu trưng Logo nhóm`,
      `Chủ đề 4: Nghệ thuật Thiết kế đồ họa - Bài 6: Thiết kế Áp phích (Poster) Bảo vệ môi trường`,
      `Chủ đề 4: Nghệ thuật Thiết kế đồ họa - Bài 6: Thực hành hoàn thiện Poster tuyên truyền`,
      `Chủ đề 5: Nghệ thuật Điêu khắc & Tạo hình 3D - Bài 7: Tạo hình nhân vật từ dây thép và đất sét`,
      `Chủ đề 5: Nghệ thuật Điêu khắc - Bài 7: Đắp khối tạo dáng động thể thao nhân vật 3D`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 & Triển lãm Mĩ thuật HK1 môn Mĩ thuật Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 Lớp ${g}`,
      `Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 Lớp ${g}`,
      `Chủ đề 6: Thiết kế thời trang - Bài 8: Thiết kế trang phục từ vật liệu tái chế (Phác thảo ý tưởng)`,
      `Chủ đề 6: Thiết kế thời trang - Bài 8: Thực hành cắt dán mô hình trang phục thời trang`,
      `Chủ đề 7: Tranh phong cảnh quê hương - Bài 9: Luật xa gần (Viễn cận) trong tranh phong cảnh`,
      `Chủ đề 7: Tranh phong cảnh quê hương - Bài 9: Thực hành vẽ tranh phong cảnh quê hương đất nước`,
      `Chủ đề 8: Trang trí ứng dụng - Bài 10: Thiết kế Trang trí bìa sách văn học nghệ thuật`,
      `Chủ đề 8: Trang trí ứng dụng - Bài 10: Thực hành hoàn thiện bìa sách yêu thích`,
      `Chủ đề 8: Trang trí ứng dụng - Trưng bày và thuyết trình tác phẩm bìa sách sáng tạo`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp ${g}`,
      `Chủ đề 9: Nghệ thuật Nhiếp ảnh & Đồ họa số - Bài 11: Góc nhìn nhiếp ảnh và bố cục ảnh đẹp`,
      `Chủ đề 9: Nghệ thuật Nhiếp ảnh - Bài 11: Thực hành chụp ảnh khoảnh khắc trường lớp`,
      `Chủ đề 10: Nghệ thuật Điêu khắc dân gian - Bài 12: Chạm khắc gỗ đình làng Việt Nam`,
      `Chủ đề 10: Điêu khắc dân gian - Bài 12: Thực hành khắc hoa văn phù điêu trên xốp EVA`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp ${g}`,
      `Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm Lớp ${g}`,
      `Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp ${g}`,
      `Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm Lớp ${g}`,
      `Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật Lớp ${g} toàn trường`
    ];

    miThuatTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 1,
        yccd: `- Nắm vững nguyên lý thị giác, kỹ thuật tạo hình hội họa, đồ họa, điêu khắc và thiết kế của ${name} (SGK Mĩ thuật ${g} Kết nối tri thức).\n- Sáng tạo được các sản phẩm mĩ thuật độc đáo, thể hiện tư duy thẩm mỹ và cảm xúc cá nhân sâu sắc.\n- Phát triển năng lực cảm thụ nghệ thuật và trân trọng các giá trị di sản văn hóa dân tộc.`,
        equipment: 'Giấy vẽ A3, màu nước, màu goát, acrylic, đất nặn tạo hình, dây thép dẻo, vật liệu tái chế, kéo, keo dán',
        location: 'Phòng học bộ môn Mĩ thuật / Sảnh triển lãm',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Dự án Không gian Xanh 3D' : ''
      });
    });

    return list;
  }

  // 6.7. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THCS (3 tiết/tuần x 35 tuần = 105 tiết)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn') || s.includes('hướng nghiệp')) {
    return getHdtnSecondaryCurriculum(String(g));
  }

  // 6.8. GIÁO DỤC ĐỊA PHƯƠNG THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  const gddpTopics = [
    `Chủ đề 1: Địa lí địa phương - Vị trí địa lí, phạm vi lãnh thổ và ý nghĩa chiến lược (Lớp ${g})`,
    `Chủ đề 1: Địa lí địa phương - Đặc điểm địa hình, khí hậu, thủy văn và thổ nhưỡng tỉnh/thành phố`,
    `Chủ đề 1: Địa lí địa phương - Tài nguyên khoáng sản, sinh vật và tiềm năng phát triển kinh tế`,
    `Chủ đề 1: Địa lí địa phương - Dân cư, phân bố dân cư và cơ cấu lao động tại địa phương`,
    `Chủ đề 2: Lịch sử địa phương - Các dấu tích tiền sử và thời dựng nước trên địa bàn tỉnh`,
    `Chủ đề 2: Lịch sử địa phương - Nhân vật lịch sử và các cuộc khởi nghĩa chống ngoại xâm tiêu biểu`,
    `Chủ đề 2: Lịch sử địa phương - Phong trào đấu tranh cách mạng giành chính quyền tại địa phương (1930 - 1945)`,
    `Chủ đề 2: Lịch sử địa phương - Truyền thống đấu tranh anh dũng trong hai cuộc kháng chiến chống Pháp và Mỹ`,
    `Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục địa phương Lớp ${g}`,
    `Chủ đề 3: Văn hóa truyền thống - Hệ thống di tích lịch sử - văn hóa và danh lam thắng cảnh xếp hạng`,
    `Chủ đề 3: Văn hóa truyền thống - Các lễ hội dân gian đặc sắc và phong tục tập quán tốt đẹp`,
    `Chủ đề 3: Văn hóa truyền thống - Nghệ thuật dân gian truyền thống (Hát chèo/quan họ/cải lương/đờn ca tài tử)`,
    `Chủ đề 3: Văn hóa truyền thống - Ẩm thực truyền thống và các đặc sản vùng miền nổi tiếng`,
    `Chủ đề 4: Kinh tế - xã hội địa phương - Hiện trạng phát triển ngành Nông - Lâm - Ngư nghiệp`,
    `Chủ đề 4: Kinh tế địa phương - Phát triển các ngành Công nghiệp chế biến và tiểu thủ công nghiệp`,
    `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Giáo dục địa phương Lớp ${g}`,
    `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 Lớp ${g}`,
    `Sơ kết Học kỳ 1 & Báo cáo tìm hiểu nét đẹp văn hóa địa phương Lớp ${g}`,
    `Chủ đề 5: Làng nghề truyền thống - Lịch sử hình thành và nét tinh hoa của các làng nghề cổ truyền`,
    `Chủ đề 5: Làng nghề truyền thống - Thực trạng bảo tồn, phát triển làng nghề gắn với du lịch sinh thái`,
    `Chủ đề 5: Làng nghề truyền thống - Thực hành làm một sản phẩm thủ công truyền thống đơn giản`,
    `Chủ đề 6: Bảo vệ môi trường địa phương - Thực trạng môi trường không khí, nguồn nước và rác thải`,
    `Chủ đề 6: Bảo vệ môi trường địa phương - Các giải pháp bảo vệ hệ sinh thái rừng, sông biển địa phương`,
    `Chủ đề 6: Bảo vệ môi trường địa phương - Hành động cụ thể của học sinh giữ gìn quê hương xanh sạch đẹp`,
    `Chủ đề 7: Danh nhân văn hóa địa phương - Cuộc đời, sự nghiệp và cống hiến của các danh nhân tiêu biểu`,
    `Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục địa phương Lớp ${g}`,
    `Chủ đề 7: Danh nhân văn hóa - Lòng tự hào và ý thức noi gương các thế hệ tiền bối ưu tú`,
    `Chủ đề 8: Quy hoạch và Tương lai địa phương - Tầm nhìn phát triển kinh tế - đô thị thông minh đến 2030`,
    `Chủ đề 8: Tương lai địa phương - Cơ hội nghề nghiệp và thị trường lao động cho thanh thiếu niên`,
    `Dự án GDĐP: "Cẩm nang Du lịch Văn hóa & Bản đồ Số Di sản Quê hương em" (Tiết 1)`,
    `Kiểm tra, đánh giá cuối Học kỳ 2 & Sơ kết môn Giáo dục địa phương Lớp ${g}`,
    `Chữa bài kiểm tra cuối HK2 & Hoạt động trải nghiệm văn hóa địa phương Lớp ${g}`,
    `Báo cáo và thuyết trình dự án Tìm hiểu Giáo dục địa phương trước hội đồng lớp`,
    `Ôn tập toàn diện chuẩn bị tổng kết môn Giáo dục địa phương Lớp ${g}`,
    `Tổng kết năm học & Đánh giá kết quả môn Giáo dục địa phương Lớp ${g}`
  ];

  gddpTopics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    list.push({
      week: w,
      topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 1,
      yccd: `- Hiểu rõ và trình bày được các giá trị lịch sử, địa lí, văn hóa, làng nghề, kinh tế - xã hội của ${name} (Tài liệu Giáo dục địa phương Lớp ${g}).\n- Có kỹ năng tìm hiểu, sưu tầm tư liệu thực tế và quảng bá vẻ đẹp di sản quê hương.\n- Khơi dậy tình yêu quê hương đất nước, niềm tự hào và ý thức cống hiến xây dựng quê hương giàu đẹp.`,
      equipment: 'Tài liệu Giáo dục địa phương tỉnh/thành phố, bản đồ hành chính địa phương, hình ảnh tư liệu di tích',
      location: 'Phòng học / Lớp học',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 16 || w === 31 ? 'Kiểm tra cuối kỳ' : w === 30 ? 'Dự án Cẩm nang Du lịch' : ''
    });
  });

  return list;
}

// =========================================================================
// MASTER RESOLVER FOR SECONDARY CURRICULUM (LỚP 6 - 9)
// =========================================================================
export function buildSecondaryCurriculum(
  subject: string,
  grade: string,
  schoolType: SchoolType,
  config?: Partial<ConfigFormData>
): CurriculumItem[] {
  const s = subject.toLowerCase().trim();
  const g = grade.trim();
  const isEnglish = s.includes('tiếng anh') || s.includes('tieng anh') || s.includes('english') || s.includes('ngoại ngữ');

  let rawList: RawSecondaryLesson[] = [];

  if (isEnglish) {
    rawList = getEnglishSecondaryCurriculum(g);
  } else if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('informatics')) {
    rawList = getTinHocSecondaryCurriculum(g);
  } else if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    rawList = getGdtcSecondaryCurriculum(g);
  } else if (s.includes('toán') || s.includes('toan')) {
    rawList = getMathSecondaryCurriculum(g);
  } else if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    rawList = getNguVanSecondaryCurriculum(g);
  } else if (s.includes('khoa học tự nhiên') || s.includes('khtn')) {
    rawList = getKhtnSecondaryCurriculum(g);
  } else if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('ls&đl') || s.includes('lsdl') || s.includes('lich su')) {
    rawList = getLsdlSecondaryCurriculum(g);
  } else if (s.includes('công nghệ') || s.includes('cong nghe') || s.includes('technology')) {
    rawList = getTechnologySecondaryCurriculum(g, config);
  } else if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn') || s.includes('hướng nghiệp')) {
    rawList = getHdtnSecondaryCurriculum(g);
  } else {
    rawList = getGeneralSecondaryCurriculum(g, subject);
  }

  return rawList.map((item, idx) => {
    const customYccd = isEnglish ? (item.yccd ?? '') : (item.yccd || generateSecondaryYccd(subject, g, item.name));

    const lessonCtx = {
      lessonName: item.name,
      topic: item.topic,
      yccd: customYccd,
      subject,
      lessonIndex: idx
    };

    const isBlankTest = isEnglish && customYccd === '';

    const nls = item.nlsCode !== undefined
      ? { code: item.nlsCode, requirement: lookupNlsRequirement(item.nlsCode) || '' }
      : isBlankTest
      ? { code: '', requirement: '' }
      : isEnglish
      ? getNlsCodeForEnglishLesson(g, schoolType, lessonCtx)
      : getNlsCodeForSubjectLesson(g, schoolType, lessonCtx);

    const ai = item.aiCode !== undefined
      ? { code: item.aiCode, requirement: lookupAiRequirement(item.aiCode)?.requirement || '' }
      : isBlankTest
      ? { code: '', requirement: '' }
      : isEnglish
      ? getAiCodeForEnglishLesson(g, lessonCtx)
      : getAiCodeForSubjectLesson(g, lessonCtx);

    const digitalComp = item.digitalCompetency !== undefined
      ? item.digitalCompetency
      : isBlankTest
      ? ''
      : (isEnglish
      ? (nls.code || ai.code ? `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}` : '')
      : `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`);

    return {
      id: `curr-sec-${g}-${idx + 1}`,
      stt: idx + 1,
      topic: item.topic,
      lessonName: item.name,
      periods: item.periods,
      week: isEnglish ? `Week ${item.week}` : `Tuần ${item.week}`,
      yccd: customYccd,
      equipment: item.equipment,
      location: item.location,
      nlsCode: item.nlsCode !== undefined ? item.nlsCode : nls.code,
      aiCode: item.aiCode !== undefined ? item.aiCode : ai.code,
      digitalCompetency: digitalComp,
      notes: item.notes || (item.name.includes('Dự án') || item.name.includes('STEM') ? 'Tích hợp STEM & Năng lực số' : '')
    };
  });
}
