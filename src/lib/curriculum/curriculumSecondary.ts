import { CurriculumItem, SchoolType } from '../../types';
import { getNlsCodeForSubjectLesson } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../constants/aiGuides';
import { getNlsCodeForEnglishLesson } from '../constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson } from '../constants/aiGuidesEn';

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
    if (name.includes('Tập hợp') || name.includes('số tự nhiên')) return `- Nắm vững khái niệm tập hợp, phần tử; biểu diễn tập hợp bằng cách liệt kê hoặc nêu tính chất đặc trưng; thực hiện 4 phép tính với số tự nhiên.`;
    if (name.includes('Lũy thừa') || name.includes('lũy thừa')) return `- Hiểu khái niệm lũy thừa với số mũ tự nhiên; thực hiện phép nhân, chia hai lũy thừa cùng cơ số và thứ tự thực hiện phép tính.`;
    if (name.includes('chia hết') || name.includes('Số nguyên tố')) return `- Nắm vững dấu hiệu chia hết cho 2, 3, 5, 9; phân biệt số nguyên tố và hợp số; tìm ước chung lớn nhất (ƯCLN) và bội chung nhỏ nhất (BCNN).`;
    if (name.includes('số nguyên') || name.includes('Số nguyên')) return `- Nhận biết tập hợp số nguyên Z, số đối, thứ tự trong Z; thực hiện thành thạo cộng, trừ, nhân, chia hai số nguyên và quy tắc dấu ngoặc.`;
    if (name.includes('Hình tam giác đều') || name.includes('hình thoi') || name.includes('hình chữ nhật') || name.includes('hình bình hành')) return `- Nhận biết và vẽ được tam giác đều, hình vuông, hình lục giác đều, hình thoi, hình bình hành, hình thang cân; tính chu vi và diện tích.`;
    if (name.includes('đối xứng') || name.includes('Đối xứng')) return `- Nhận biết hình có trục đối xứng và hình có tâm đối xứng trong hình học, trong tự nhiên và trong kiến trúc thực tế.`;
    if (name.includes('Phân số') || name.includes('phân số')) return `- Nắm khái niệm phân số, phân số bằng nhau, rút gọn, quy đồng mẫu số; thực hiện 4 phép tính với phân số và giải bài toán thực tế.`;
    if (name.includes('Số thập phân') || name.includes('số thập phân')) return `- Nắm khái niệm số thập phân, làm tròn số, ước lượng kết quả và giải toán về tỉ số, tỉ số phần trăm.`;
    if (name.includes('Số hữu tỉ') || name.includes('số hữu tỉ')) return `- Nhận biết tập hợp số hữu tỉ Q, biểu diễn số hữu tỉ trên trục số; thực hiện cộng, trừ, nhân, chia và lũy thừa số hữu tỉ.`;
    if (name.includes('Số thực') || name.includes('Căn bậc hai') || name.includes('căn bậc hai')) return `- Nắm khái niệm số vô tỉ, số thực R, căn bậc hai số học, giá trị tuyệt đối của một số thực; tính toán và làm tròn số thực.`;
    if (name.includes('Góc') || name.includes('Hai đường thẳng song song')) return `- Nhận biết góc ở vị trí đặc biệt (kề bù, so le trong, đồng vị); nắm dấu hiệu nhận biết hai đường thẳng song song và định lí toán học.`;
    if (name.includes('Tam giác bằng nhau') || name.includes('tam giác bằng nhau')) return `- Nắm vững 3 trường hợp bằng nhau của tam giác (c-c-c, c-g-c, g-c-g) và các trường hợp bằng nhau của tam giác vuông; chứng minh hình học.`;
    if (name.includes('Đơn thức') || name.includes('Đa thức') || name.includes('đa thức')) return `- Nhận biết đơn thức, đa thức nhiều biến; xác định bậc, hệ số; thực hiện cộng, trừ, nhân, chia đơn thức, đa thức thành thạo.`;
    if (name.includes('Hằng đẳng thức') || name.includes('hằng đẳng thức')) return `- Thuộc và vận dụng thành thạo 7 hằng đẳng thức đáng nhớ vào biến đổi đại số, tính nhanh và phân tích đa thức thành nhân tử.`;
    if (name.includes('Phân thức') || name.includes('phân thức đại số')) return `- Nắm định nghĩa phân thức đại số, điều kiện xác định, tính chất cơ bản; thực hiện cộng, trừ, nhân, chia các phân thức đại số.`;
    if (name.includes('Pythagore') || name.includes('Định lí Pythagore')) return `- Nắm vững định lí Pythagore thuận và đảo; tính độ dài cạnh trong tam giác vuông và ứng dụng vào giải toán thực tế.`;
    if (name.includes('Tam giác đồng dạng') || name.includes('đồng dạng')) return `- Nắm định nghĩa và 3 trường hợp đồng dạng của hai tam giác (c-c-c, c-g-c, g-g); vận dụng chứng minh hệ thức hình học và tính khoảng cách.`;
    if (name.includes('Phương trình bậc nhất') || name.includes('Hệ phương trình')) return `- Giải thành thạo phương trình bậc nhất một ẩn và hệ hai phương trình bậc nhất hai ẩn; giải bài toán bằng cách lập phương trình/hệ phương trình.`;
    if (name.includes('Hàm số bậc nhất') || name.includes('y = ax + b')) return `- Hiểu khái niệm hàm số, vẽ đồ thị hàm số y = ax + b; xác định hệ số góc a và xét vị trí tương đối của hai đường thẳng.`;
    if (name.includes('Phương trình bậc hai') || name.includes('Vi-ét') || name.includes('Vi-et')) return `- Nắm công thức nghiệm phương trình bậc hai ax2 + bx + c = 0 và hệ thức Vi-ét; tính nhẩm nghiệm và giải toán thực tế.`;
    if (name.includes('Đường tròn') || name.includes('tiếp tuyến') || name.includes('Góc ở tâm') || name.includes('Góc nội tiếp')) return `- Nắm tính chất đường kính và dây cung, tiếp tuyến của đường tròn; tính số đo góc ở tâm, góc nội tiếp và chứng minh tứ giác nội tiếp.`;
    return `- Nắm vững chuẩn kiến thức, định lí và phương pháp giải toán của bài học: "${name}".\n- Phát triển năng lực tư duy logic, lập luận hình học, mô hình hóa toán học và giải quyết vấn đề.`;
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
    if (name.includes('Ai Cập') || name.includes('Lưỡng Hà') || name.includes('Hy Lạp') || name.includes('La Mã') || name.includes('Văn minh')) return `- Trình bày vị trí địa lí, điều kiện tự nhiên và những thành tựu văn hóa tiêu biểu của các nền văn minh cổ đại thế giới.`;
    if (name.includes('Phong kiến') || name.includes('Đại Việt') || name.includes('Lý') || name.includes('Trần') || name.includes('Lê')) return `- Trình bày tiến trình lịch sử dựng nước, giữ nước và những chiến công hiển hách đánh thắng giặc ngoại xâm thời kỳ phong kiến Đại Việt.`;
    if (name.includes('Cách mạng tư sản') || name.includes('Chiến tranh thế giới') || name.includes('Kháng chiến')) return `- Phân tích nguyên nhân, diễn biến chính, kết quả và ý nghĩa lịch sử sâu sắc của cuộc cách mạng / cuộc kháng chiến trong bài học.`;
    if (name.includes('Khí hậu') || name.includes('Địa hình') || name.includes('Sông ngòi') || name.includes('Châu lục')) return `- Trình bày đặc điểm tự nhiên, phân bố dân cư, đô thị hóa và sự phát triển kinh tế của các khu vực/châu lục trên thế giới.`;
    if (name.includes('Biển đảo') || name.includes('Hoàng Sa') || name.includes('Trường Sa') || name.includes('Địa lí Việt Nam')) return `- Xác định vị trí chiến lược của Biển Đông và hai quần đảo Hoàng Sa, Trường Sa; khẳng định chủ quyền lãnh thổ thiêng liêng của Tổ quốc.`;
    return `- Nắm vững kiến thức lịch sử, địa lý trọng tâm của bài: "${name}".\n- Khai thác bản đồ, tư liệu lịch sử hiệu quả; bồi đắp lòng yêu nước và ý thức trách nhiệm công dân.`;
  }

  // 6. TIN HỌC THCS (6 - 9)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    if (name.includes('Bảng tính') || name.includes('Excel') || name.includes('hàm')) return `- Sử dụng thành thạo các hàm tính toán SUM, AVERAGE, MAX, MIN, COUNTIF, IF; thực hiện định dạng bảng tính, sắp xếp, lọc và vẽ biểu đồ.`;
    if (name.includes('Mạng máy tính') || name.includes('Internet') || name.includes('An toàn')) return `- Mô tả cấu trúc mạng LAN, WAN, thiết bị mạng (Router, Switch); thực hiện chia sẻ dữ liệu và các biện pháp bảo vệ an toàn thông tin mạng.`;
    if (name.includes('Thuật toán') || name.includes('Lập trình') || name.includes('Python') || name.includes('Scratch')) return `- Khai báo biến, kiểu dữ liệu, viết câu lệnh rẽ nhánh if-else, vòng lặp for/while; viết hàm và gỡ lỗi chương trình chạy chính xác.`;
    if (name.includes('Cơ sở dữ liệu') || name.includes('Dữ liệu') || name.includes('AI')) return `- Nắm khái niệm CSDL quan hệ, bảng dữ liệu, khóa chính; bước đầu tìm hiểu ứng dụng Trí tuệ nhân tạo (AI) và đạo đức số.`;
    return `- Nắm vững lý thuyết và thực hành thành thạo kỹ năng công nghệ thông tin của bài: "${name}".\n- Phát triển năng lực số (NLS), tư duy thuật toán và văn hóa ứng xử chuẩn mực trên không gian mạng.`;
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

  // 9. GIÁO DỤC THỂ CHẤT THCS (6 - 9)
  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục')) {
    if (name.includes('Đội hình đội ngũ') || name.includes('Bài thể dục')) return `- Thực hiện thành thạo khẩu lệnh ĐHĐN; thuộc và thực hiện chính xác Bài thể dục liên hoàn nhịp nhàng, đúng biên độ.`;
    if (name.includes('Chạy cự li ngắn') || name.includes('Xuất phát thấp')) return `- Nắm vững 4 giai đoạn kỹ thuật chạy ngắn (Xuất phát thấp, Chạy lao, Chạy giữa quãng, Về đích); nâng cao tốc độ tối đa.`;
    if (name.includes('Nhảy cao') || name.includes('Nhảy xa')) return `- Thực hiện chuẩn xác 4 giai đoạn kỹ thuật Nhảy cao (kiểu bước qua/lưng qua xà) / Nhảy xa (kiểu ngồi/ưỡn thân); tiếp đất an toàn.`;
    if (name.includes('Ném bóng') || name.includes('Đẩy tạ')) return `- Thực hiện đúng tư thế chuẩn bị, kỹ thuật ra sức cuối cùng ném bóng / đẩy tạ đúng góc độ bay đạt thành tích tối ưu.`;
    if (name.includes('Chạy bền') || name.includes('Thể thao tự chọn')) return `- Nắm phương pháp phân phối sức khi chạy bền; thực hiện kỹ thuật tâng bóng, chuyền bóng, ném rổ / đập cầu trong thi đấu thể thao.`;
    return `- Nắm vững kỹ thuật động tác, tích cực rèn luyện nâng cao thể lực qua bài: "${name}".\n- Bồi dưỡng tinh thần thể thao cao thượng, tính kỷ luật và thói quen rèn luyện thân thể suốt đời.`;
  }

  // 10. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THCS (6 - 9)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn')) {
    if (name.includes('Khám phá bản thân') || name.includes('Nhà trường')) return `- Nhận diện được nét riêng về tính cách, năng lực và giá trị bản thân; xây dựng các mối quan hệ tích cực với thầy cô và bạn bè.`;
    if (name.includes('Gia đình') || name.includes('Cộng đồng')) return `- Thể hiện sự quan tâm, chăm sóc người thân trong gia đình; chủ động tham gia các hoạt động thiện nguyện, phục vụ cộng đồng.`;
    if (name.includes('Nghề nghiệp') || name.includes('Hướng nghiệp')) return `- Khảo sát các nghề phổ biến tại địa phương; đối chiếu yêu cầu của nghề với năng lực, sở thích bản thân để xây dựng kế hoạch học tập hướng nghiệp.`;
    return `- Chủ động, sáng tạo tham gia các hoạt động trải nghiệm trong bài: "${name}".\n- Phát triển năng lực tự chủ, kỹ năng thích ứng, quản lý cảm xúc và định hướng nghề nghiệp tương lai.`;
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
export function getMathSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 7;
  const list: RawSecondaryLesson[] = [];

  const mathDataByGrade: Record<number, { term1: string[]; term2: string[] }> = {
    6: {
      term1: [
        'Bài 1: Tập hợp (2 tiết) & Bài 2: Cách ghi số tự nhiên (2 tiết)',
        'Bài 3: Phép cộng và phép trừ hai số tự nhiên (2 tiết) & Bài 4: Phép nhân và phép chia (2 tiết)',
        'Bài 5: Phép nâng lên lũy thừa với số mũ tự nhiên (2 tiết) & Bài 6: Thứ tự thực hiện phép tính (2 tiết)',
        'Bài 7: Quan hệ chia hết và tính chất chia hết (2 tiết) & Bài 8: Dấu hiệu chia hết cho 2, 3, 5, 9 (2 tiết)',
        'Bài 9: Số nguyên tố và hợp số (2 tiết) & Bài 10: Ước chung và Bội chung (2 tiết)',
        'Bài 11: Luyện tập chung & Bài 13: Tập hợp các số nguyên (2 tiết)',
        'Bài 14: Phép cộng và phép trừ hai số nguyên (4 tiết)',
        'Bài 15: Phép nhân và phép chia hai số nguyên (2 tiết) & Ôn tập giữa HK1 (2 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 6 (4 tiết)',
        'Bài 18: Hình tam giác đều, hình vuông, hình lục giác đều (4 tiết)',
        'Bài 19: Hình chữ nhật, hình thoi, hình bình hành, hình thang cân (4 tiết)',
        'Bài 20: Chu vi và diện tích của một số tứ giác đã học (4 tiết)',
        'Bài 21: Hình có trục đối xứng và Hình có tâm đối xứng (4 tiết)',
        'Bài 22: Vai trò của tính đối xứng trong tự nhiên và nghệ thuật (4 tiết)',
        'Bài 23: Mở rộng phân số. Phân số bằng nhau (4 tiết)',
        'Bài 24: So sánh phân số. Hỗn số dương (4 tiết)',
        'Ôn tập tổng hợp kiến thức Toán Học kỳ 1 Lớp 6 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 6 (4 tiết)'
      ],
      term2: [
        'Bài 25: Phép cộng và phép trừ phân số (4 tiết)',
        'Bài 26: Phép nhân và phép chia phân số (4 tiết)',
        'Bài 27: Hai bài toán cơ bản về phân số (4 tiết)',
        'Bài 28: Số thập phân và các phép tính với số thập phân (4 tiết)',
        'Bài 29: Tỉ số và tỉ số phần trăm (4 tiết)',
        'Bài 30: Làm tròn và ước lượng số (4 tiết)',
        'Bài 31: Dữ liệu và thu thập dữ liệu (4 tiết)',
        'Bài 32: Bảng dữ liệu và biểu đồ tranh (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 6 (4 tiết)',
        'Bài 33: Biểu đồ cột và biểu đồ cột kép (4 tiết)',
        'Bài 34: Điểm và đường thẳng (4 tiết)',
        'Bài 35: Tia và Đoạn thẳng. Độ dài đoạn thẳng (4 tiết)',
        'Bài 36: Trung điểm của đoạn thẳng (4 tiết)',
        'Bài 37: Góc. Số đo góc và Các góc đặc biệt (4 tiết)',
        'Dự án STEM Toán 6: "Mô hình Hình học Không gian & Phân tích Biểu đồ Thống kê Xanh" (4 tiết)',
        'Bài 38: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 6 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 6 (4 tiết)'
      ]
    },
    7: {
      term1: [
        'Chương I: Số hữu tỉ - Bài 1: Tập hợp các số hữu tỉ (4 tiết)',
        'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ (4 tiết)',
        'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ (4 tiết)',
        'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc dấu ngoặc (4 tiết)',
        'Chương II: Số thực - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn (4 tiết)',
        'Bài 6: Số vô tỉ. Căn bậc hai số học (4 tiết)',
        'Bài 7: Tập hợp các số thực (4 tiết)',
        'Chương III: Góc và đường thẳng song song - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 7 (4 tiết)',
        'Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết (4 tiết)',
        'Bài 10: Tiên đề Euclid về đường thẳng song song (4 tiết)',
        'Bài 11: Định lí và chứng minh định lí hình học (4 tiết)',
        'Chương IV: Tam giác bằng nhau - Bài 12: Tổng các góc trong một tam giác (4 tiết)',
        'Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất c-c-c (4 tiết)',
        'Bài 14: Trường hợp bằng nhau thứ hai c-g-c và thứ ba g-c-g (4 tiết)',
        'Bài 15: Các trường hợp bằng nhau của tam giác vuông (4 tiết)',
        'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 7 (4 tiết)'
      ],
      term2: [
        'Chương V: Thu thập và biểu diễn dữ liệu - Bài 17: Thu thập và phân loại dữ liệu (4 tiết)',
        'Bài 18: Biểu đồ hình quạt tròn (4 tiết)',
        'Bài 19: Biểu đồ đoạn thẳng (4 tiết)',
        'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ - Bài 20: Tỉ lệ thức (4 tiết)',
        'Bài 21: Tính chất của dãy tỉ số bằng nhau (4 tiết)',
        'Bài 22: Đại lượng tỉ lệ thuận và Đại lượng tỉ lệ nghịch (4 tiết)',
        'Chương VII: Biểu thức đại số - Bài 24: Biểu thức đại số (4 tiết)',
        'Bài 25: Đa thức một biến (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 7 (4 tiết)',
        'Bài 26: Phép cộng và phép trừ đa thức một biến (4 tiết)',
        'Bài 27: Phép nhân đa thức một biến (4 tiết)',
        'Bài 28: Phép chia đa thức một biến (4 tiết)',
        'Chương VIII: Các hình khối trong thực tiễn - Bài 29: Hình lăng trụ đứng tam giác và tứ giác (4 tiết)',
        'Bài 30: Diện tích xung quanh và thể tích hình lăng trụ đứng (4 tiết)',
        'Dự án STEM Toán 7: "Thiết kế Nhà Lăng trụ Xanh & Biểu đồ Quản lý Tài chính Học đường" (4 tiết)',
        'Bài 31: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 7 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 7 (4 tiết)'
      ]
    },
    8: {
      term1: [
        'Chương I: Đa thức - Bài 1: Đơn thức (3 tiết) & Bài 2: Đa thức (1 tiết)',
        'Bài 3: Phép cộng và phép trừ đa thức (4 tiết)',
        'Bài 4: Phép nhân đa thức (4 tiết)',
        'Bài 5: Phép chia đa thức cho đơn thức (4 tiết)',
        'Chương II: Hằng đẳng thức đáng nhớ - Bài 6: Hiệu hai bình phương. Bình phương của một tổng/hiệu (4 tiết)',
        'Bài 7: Lập phương của một tổng/hiệu (4 tiết)',
        'Bài 8: Tổng và hiệu hai lập phương (4 tiết)',
        'Bài 9: Phân tích đa thức thành nhân tử (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 8 (4 tiết)',
        'Chương III: Tứ giác - Bài 10: Tứ giác và tính chất tổng các góc (4 tiết)',
        'Bài 11: Hình thang cân (4 tiết)',
        'Bài 12: Hình bình hành (4 tiết)',
        'Bài 13: Hình chữ nhật (4 tiết)',
        'Bài 14: Hình thoi và Hình vuông (4 tiết)',
        'Chương IV: Định lí Thalès - Bài 15: Định lí Thalès trong tam giác (4 tiết)',
        'Bài 16: Định lí đảo và hệ quả của định lí Thalès (4 tiết)',
        'Bài 17: Tính chất đường phân giác của tam giác (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 8 (4 tiết)'
      ],
      term2: [
        'Chương V: Dữ liệu và biểu đồ - Bài 18: Thu thập và xử lý dữ liệu (4 tiết)',
        'Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ (4 tiết)',
        'Chương VI: Phân thức đại số - Bài 21: Phân thức đại số (4 tiết)',
        'Bài 22: Tính chất cơ bản của phân thức đại số (4 tiết)',
        'Bài 23: Phép cộng và phép trừ phân thức đại số (4 tiết)',
        'Bài 24: Phép nhân và phép chia phân thức đại số (4 tiết)',
        'Chương VII: Phương trình bậc nhất - Bài 25: Phương trình bậc nhất một biến (4 tiết)',
        'Bài 26: Giải bài toán bằng cách lập phương trình (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 8 (4 tiết)',
        'Chương VIII: Hình đồng dạng - Bài 29: Hai tam giác đồng dạng (4 tiết)',
        'Bài 30: Các trường hợp đồng dạng của hai tam giác (4 tiết)',
        'Bài 31: Các trường hợp đồng dạng của hai tam giác vuông (4 tiết)',
        'Chương IX: Một số hình khối trong thực tiễn - Bài 33: Hình chóp tam giác đều và hình chóp tứ giác đều (4 tiết)',
        'Bài 34: Diện tích xung quanh và thể tích hình chóp đều (4 tiết)',
        'Dự án STEM Toán 8: "Chế tạo Mô hình Kim tự tháp Chóp đều & Thước đo Khoảng cách Thalès" (4 tiết)',
        'Bài 35: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 8 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 8 (4 tiết)'
      ]
    },
    9: {
      term1: [
        'Chương I: Phương trình và hệ phương trình - Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn (4 tiết)',
        'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và cộng đại số (4 tiết)',
        'Bài 3: Giải bài toán bằng cách lập hệ phương trình (4 tiết)',
        'Chương II: Phương trình và bất phương trình bậc nhất một biến - Bài 4: Bất đẳng thức và tính chất (4 tiết)',
        'Bài 5: Bất phương trình bậc nhất một biến (4 tiết)',
        'Chương III: Căn bậc hai và căn bậc ba - Bài 6: Căn bậc hai và căn thức bậc hai (4 tiết)',
        'Bài 7: Khai căn bậc hai một tích và một thương (4 tiết)',
        'Bài 8: Biến đổi đơn giản biểu thức chứa căn thức bậc hai (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 9 (4 tiết)',
        'Bài 9: Rút gọn biểu thức chứa căn thức bậc hai và Căn bậc ba (4 tiết)',
        'Chương IV: Hệ thức lượng trong tam giác vuông - Bài 11: Tỉ số lượng giác của góc nhọn (4 tiết)',
        'Bài 12: Một số hệ thức về cạnh và góc trong tam giác vuông (4 tiết)',
        'Bài 13: Ứng dụng thực tế của tỉ số lượng giác (Đo chiều cao cây, tháp) (4 tiết)',
        'Chương V: Đường tròn - Bài 14: Sự xác định đường tròn. Tính chất đối xứng của đường tròn (4 tiết)',
        'Bài 15: Vị trí tương đối của đường thẳng và đường tròn (4 tiết)',
        'Bài 16: Tiếp tuyến của đường tròn và tính chất hai tiếp tuyến cắt nhau (4 tiết)',
        'Bài 17: Vị trí tương đối của hai đường tròn (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán 9 (4 tiết)'
      ],
      term2: [
        'Chương VI: Hàm số y = ax2 (a ≠ 0). Phương trình bậc hai một biến - Bài 18: Hàm số y = ax2 và đồ thị Parabol (4 tiết)',
        'Bài 19: Phương trình bậc hai một biến và công thức nghiệm (4 tiết)',
        'Bài 20: Định lí Viète và ứng dụng (4 tiết)',
        'Bài 21: Giải bài toán bằng cách lập phương trình bậc hai (4 tiết)',
        'Chương VII: Tần số và tần số tương đối - Bài 22: Bảng tần số và biểu đồ tần số (4 tiết)',
        'Bài 23: Tần số tương đối và biểu đồ tần số tương đối (4 tiết)',
        'Chương VIII: Xác suất của biến cố - Bài 24: Không gian mẫu và biến cố (4 tiết)',
        'Bài 25: Xác suất của biến cố trong một số trò chơi đơn giản (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 9 (4 tiết)',
        'Chương IX: Đường tròn ngoại tiếp và nội tiếp - Bài 27: Góc nội tiếp và góc ở tâm (4 tiết)',
        'Bài 28: Tứ giác nội tiếp đường tròn và điều kiện nội tiếp (4 tiết)',
        'Chương X: Các hình khối trong thực tiễn - Bài 29: Hình trụ. Diện tích xung quanh và thể tích hình trụ (4 tiết)',
        'Bài 30: Hình nón. Diện tích xung quanh và thể tích hình nón (4 tiết)',
        'Bài 31: Hình cầu. Diện tích mặt cầu và thể tích hình cầu (4 tiết)',
        'Dự án STEM Toán 9: "Mô hình Parabol Cầu treo Văng & Đo lường Thể tích Hình học Không gian" (4 tiết)',
        'Luyện giải bộ đề thi tuyển sinh vào Lớp 10 THPT môn Toán (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 9 (4 tiết)'
      ]
    }
  };

  const currentGradeData = mathDataByGrade[g] || mathDataByGrade[7];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 33 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 4,
      yccd: `- Nắm vững và vận dụng chuẩn xác kiến thức đại số, hình học, xác suất thống kê của ${name} (SGK Toán ${g} Kết nối tri thức).\n- Phát triển tư duy logic, năng lực mô hình hóa toán học và kỹ năng giải quyết bài toán thực tế phức hợp.\n- Chuẩn bị nền tảng toán học vững vàng cho các kỳ thi học sinh giỏi và thi tuyển sinh lớp 10.`,
      equipment: isStem ? 'Phần mềm GeoGebra, máy tính cầm tay Casio FX-580VNX, mô hình STEM' : 'Compa, ê ke, thước đo độ, máy chiếu, máy tính Casio',
      location: 'Phòng học bộ môn Toán / Lớp học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án STEM Toán học' : ''
    });
  });

  return list;
}

// =========================================================================
// 2. NGỮ VĂN THCS (LỚP 6, 7, 8, 9) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
// =========================================================================
export function getNguVanSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 7;
  const list: RawSecondaryLesson[] = [];

  const nguVanDataByGrade: Record<number, { term1: string[]; term2: string[] }> = {
    6: {
      term1: [
        'Bài 1: Tôi và các bạn - Đọc: Bài học đường đời đầu tiên (Tô Hoài) & Thực hành tiếng Việt: Từ đơn và từ phức (4 tiết)',
        'Đọc: Nếu cậu muốn có một người bạn (Trích Hoàng tử bé) & Viết: Kể lại một trải nghiệm của bản thân (4 tiết)',
        'Đọc: Bắt nạt (Nguyễn Thế Hoàng Linh) & Nói và nghe: Chia sẻ về một trải nghiệm đáng nhớ (4 tiết)',
        'Bài 2: Gõ cửa trái tim - Đọc: Chuyện cổ tích về loài người (Xuân Quỳnh) & Thực hành tiếng Việt: Biện pháp tu từ ẩn dụ (4 tiết)',
        'Đọc: Mây và sóng (Ta-go) & Viết: Đoạn văn ghi lại cảm nghĩ về một bài thơ có yếu tố tự sự và miêu tả (4 tiết)',
        'Đọc: Bức tranh của em gái tôi (Tạ Duy Anh) & Nói và nghe: Trình bày ý kiến về một vấn đề đời sống (4 tiết)',
        'Bài 3: Yêu thương và chia sẻ - Đọc: Cô bé bán diêm (An-đéc-xen) & Thực hành tiếng Việt: Cụm danh từ (4 tiết)',
        'Đọc: Gió lạnh đầu mùa (Thạch Lam) & Viết: Kể lại một trải nghiệm sâu sắc (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 6 (4 tiết)',
        'Đọc: Con chào mào (Mai Văn Phấn) & Nói và nghe: Kể lại một câu chuyện cổ tích (4 tiết)',
        'Bài 4: Quê hương yêu dấu - Đọc: Chùm ca dao về quê hương đất nước & Thực hành tiếng Việt: Từ láy và từ ghép (4 tiết)',
        'Đọc: Chuyện cổ nước mình (Lâm Thị Mỹ Dạ) & Viết: Bài văn thuyết minh thuật lại một sự kiện lễ hội (4 tiết)',
        'Đọc: Cây tre Việt Nam (Thép Mới) & Nói và nghe: Giới thiệu về vẻ đẹp quê hương em (4 tiết)',
        'Bài 5: Những nẻo đường xứ sở - Đọc: Cô Tô (Nguyễn Tuân) & Thực hành tiếng Việt: Cụm động từ, Cụm tính từ (4 tiết)',
        'Đọc: Hang Én (Hà My) & Viết: Bài văn tả cảnh sinh hoạt (4 tiết)',
        'Đọc: Cửu Long Giang ta ơi (Nguyên Hồng) & Nói và nghe: Thuyết minh về một danh lam thắng cảnh (4 tiết)',
        'Ôn tập tổng hợp kiến thức Đọc hiểu, Tiếng Việt, Tập làm văn Học kỳ 1 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 6 (4 tiết)'
      ],
      term2: [
        'Bài 6: Bài học từ cuộc sống - Đọc: Bài học từ cây cau & Thực hành tiếng Việt: Dấu chấm phẩy, Dấu ngoặc kép (4 tiết)',
        'Đọc: Thế giới ra sao nếu không có cây xanh? & Viết: Bài văn nghị luận bày tỏ ý kiến về một hiện tượng đời sống (4 tiết)',
        'Bài 7: Thế giới cổ tích - Đọc: Thạch Sanh & Thực hành tiếng Việt: Thành ngữ (4 tiết)',
        'Đọc: Cây khế & Viết: Bài văn đóng vai nhân vật kể lại một truyện cổ tích (4 tiết)',
        'Đọc: Vua chích chòe & Nói và nghe: Kể lại một truyện cổ tích bằng lời một nhân vật (4 tiết)',
        'Bài 8: Khác biệt và gần gũi - Đọc: Xem người ta kìa! (Lạc Thanh) & Thực hành tiếng Việt: Đại từ (4 tiết)',
        'Đọc: Hai loại khác biệt (Gia-mơ Cai) & Viết: Bài văn trình bày ý kiến về một vấn đề xã hội (4 tiết)',
        'Đọc: Gặp lá cơm nếp (Thanh Thảo) & Nói và nghe: Thảo luận nhóm về sự tôn trọng khác biệt (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 6 (4 tiết)',
        'Bài 9: Trái Đất - ngôi nhà chung - Đọc: Trái Đất - cái nôi của sự sống & Thực hành tiếng Việt: Trạng ngữ (4 tiết)',
        'Đọc: Các loài tuyệt chủng đang tăng nhanh & Viết: Biên bản cuộc họp, thảo luận (4 tiết)',
        'Đọc: Sinh vật trên Trái Đất được hình thành như thế nào? & Viết: Tóm tắt văn bản thông tin (4 tiết)',
        'Bài 10: Cuốn sách tôi yêu - Đọc: Nhà thơ Lò Ngân Sủn - người con của núi & Thực hành tiếng Việt: Lựa chọn từ ngữ (4 tiết)',
        'Đọc: Bức thư của thủ lĩnh da đỏ (Xi-át-tơn) & Viết: Bài văn thuyết minh giới thiệu một cuốn sách (4 tiết)',
        'Dự án Ngữ văn 6: "Tuyển tập Tác phẩm Văn học Thiếu nhi & Sân khấu hóa Truyện cổ tích" (4 tiết)',
        'Bài 11: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Ngữ văn 6 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Ngữ văn 6 (4 tiết)'
      ]
    },
    7: {
      term1: [
        'Bài 1: Bầu trời tuổi thơ - Đọc: Bầy chim chìa vôi (Nguyễn Quang Thiều) & Thực hành tiếng Việt: Mở rộng trạng ngữ (4 tiết)',
        'Đọc: Đi lấy mật (Trích Đất rừng phương Nam - Đoàn Giỏi) & Viết: Đoạn văn ghi lại cảm nghĩ về một bài thơ bốn chữ hoặc năm chữ (4 tiết)',
        'Đọc: Ngàn sao làm việc (Võ Quảng) & Nói và nghe: Tóm tắt ý chính do người khác trình bày (4 tiết)',
        'Bài 2: Khúc nhạc tâm hồn - Đọc: Đồng dao mùa xuân (Nguyễn Khoa Điềm) & Thực hành tiếng Việt: Biện pháp tu từ nói giảm nói tránh (4 tiết)',
        'Đọc: Gặp lá cơm nếp (Thanh Thảo) & Viết: Tập làm một bài thơ bốn chữ hoặc năm chữ (4 tiết)',
        'Đọc: Trở gió (Nguyễn Ngọc Tư) & Nói và nghe: Trao đổi về một vấn đề mà em quan tâm (4 tiết)',
        'Bài 3: Cội nguồn yêu thương - Đọc: Vừa nhắm mắt vừa mở cửa sổ (Nguyễn Ngọc Thuần) & Thực hành tiếng Việt: Thuật ngữ (4 tiết)',
        'Đọc: Người thầy đầu tiên (Ai-tơ-ma-tốp) & Viết: Phân tích đặc điểm nhân vật trong tác phẩm văn học (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 7 (4 tiết)',
        'Đọc: Quê hương (Tế Hanh) & Nói và nghe: Thảo luận nhóm về một nhân vật văn học (4 tiết)',
        'Bài 4: Giai điệu đất nước - Đọc: Mùa xuân nho nhỏ (Thanh Hải) & Thực hành tiếng Việt: Phó từ và chức năng (4 tiết)',
        'Đọc: Gò Me (Hoàng Tố Nguyên) & Viết: Bài văn biểu cảm về con người hoặc sự việc (4 tiết)',
        'Đọc: Bài ca Côn Sơn (Nguyễn Trãi) & Nói và nghe: Trình bày cảm xúc về một bài thơ (4 tiết)',
        'Bài 5: Màu sắc trăm miền - Đọc: Tháng Giêng, mơ về trăng non rét ngọt (Vũ Bằng) & Thực hành tiếng Việt: Dấu gạch nối (4 tiết)',
        'Đọc: Chuyện cơm hến (Hoàng Phủ Ngọc Tường) & Viết: Bài văn thuyết minh về quy tắc một trò chơi dân gian (4 tiết)',
        'Đọc: Hội lồng tồng & Nói và nghe: Giới thiệu quy tắc một lễ hội hoặc trò chơi dân gian (4 tiết)',
        'Ôn tập tổng hợp kiến thức Đọc hiểu, Tiếng Việt, Văn biểu cảm Học kỳ 1 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 7 (4 tiết)'
      ],
      term2: [
        'Bài 6: Bài học cuộc sống - Đọc: Đẽo cày giữa đường & Thực hành tiếng Việt: Nói quá và tác dụng (4 tiết)',
        'Đọc: Ếch ngồi đáy giếng & Thầy bói xem voi & Viết: Bài văn nghị luận về một vấn đề trong đời sống (4 tiết)',
        'Bài 7: Thế giới viễn tưởng - Đọc: Cuộc chạm trán trên đại dương (Trích Hai vạn dặm dưới đáy biển) & Thực hành tiếng Việt: Mở rộng vị ngữ (4 tiết)',
        'Đọc: Đường vào trung tâm vũ trụ & Viết: Bài văn kể lại một sự việc có thật liên quan đến nhân vật lịch sử (4 tiết)',
        'Đọc: Dấu chân sinh thái & Nói và nghe: Thảo luận về một vấn đề khoa học viễn tưởng (4 tiết)',
        'Bài 8: Trải nghiệm để trưởng thành - Đọc: Bản đồ dẫn đường & Thực hành tiếng Việt: Biến đổi câu (4 tiết)',
        'Đọc: Hãy cầm lấy và đọc & Viết: Bài văn nghị luận thể hiện sự tán thành về một tư tưởng đạo lý (4 tiết)',
        'Đọc: Trò chơi trời cho & Nói và nghe: Trình bày suy nghĩ về ý nghĩa của việc đọc sách (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 7 (4 tiết)',
        'Bài 9: Hòa điệu với tự nhiên - Đọc: Thủy hải sản sông Cửu Long & Thực hành tiếng Việt: Phương tiện giao tiếp phi ngôn ngữ (4 tiết)',
        'Đọc: Thiên nhiên và con người trong truyện "Đất rừng phương Nam" & Viết: Bản tường trình sự việc (4 tiết)',
        'Đọc: Vẻ đẹp của dòng sông quê & Nói và nghe: Giải thích một quy tắc hoặc hiện tượng tự nhiên (4 tiết)',
        'Bài 10: Trang sách và cuộc sống - Đọc: Bác Hồ và thiếu nhi & Thực hành tiếng Việt: Rút gọn câu (4 tiết)',
        'Đọc: Tự học - chìa khóa của thành công & Viết: Bài văn phân tích một tác phẩm truyện ngắn (4 tiết)',
        'Dự án Ngữ văn 7: "Tuyển tập Tản văn Quê hương & Sân khấu Diễn xướng Thơ ca" (4 tiết)',
        'Bài 11: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Ngữ văn 7 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Ngữ văn 7 (4 tiết)'
      ]
    },
    8: {
      term1: [
        'Bài 1: Câu chuyện của lịch sử - Đọc: Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng) & Thực hành tiếng Việt: Biệt ngữ xã hội (4 tiết)',
        'Đọc: Quang Trung đại phá quân Thanh (Trích Hoàng Lê nhất thống chí) & Viết: Kể lại một chuyến đi trải nghiệm (4 tiết)',
        'Đọc: Ta đi tới (Tố Hữu) & Nói và nghe: Trình bày bài giới thiệu ngắn về một di tích lịch sử (4 tiết)',
        'Bài 2: Vẻ đẹp cổ điển - Đọc: Thu điếu (Nguyễn Khuyến) & Thực hành tiếng Việt: Từ Hán Việt (4 tiết)',
        'Đọc: Thiên Trường vãn vọng (Trần Nhân Tông) & Viết: Đoạn văn ghi lại cảm nghĩ về một bài thơ thất ngôn bát cú (4 tiết)',
        'Đọc: Ca Huế trên sông Hương (Hà Ánh Minh) & Nói và nghe: Trình bày cảm nhận về vẻ đẹp di sản văn hóa (4 tiết)',
        'Bài 3: Lời sông núi - Đọc: Hịch tướng sĩ (Trần Quốc Tuấn) & Thực hành tiếng Việt: Đoạn văn diễn dịch, quy nạp (4 tiết)',
        'Đọc: Tinh thần yêu nước của nhân dân ta (Hồ Chí Minh) & Viết: Bài văn nghị luận về một vấn đề đời sống (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 8 (4 tiết)',
        'Đọc: Chiếu dời đô (Lý Công Uẩn) & Nói và nghe: Thảo luận về tinh thần trách nhiệm của công dân trẻ (4 tiết)',
        'Bài 4: Tiếng cười trào phúng trong thơ - Đọc: Lễ xướng danh khoa Đinh Dậu (Trần Tế Xương) & Thực hành tiếng Việt: Nghĩa tường minh và hàm ý (4 tiết)',
        'Đọc: Lai Tân (Hồ Chí Minh) & Viết: Bài văn phân tích một tác phẩm thơ trào phúng (4 tiết)',
        'Đọc: Một số giọng điệu của tiếng cười trong ca dao & Nói và nghe: Trình bày ý kiến về tác dụng của tiếng cười (4 tiết)',
        'Bài 5: Những gương mặt thân yêu - Đọc: Trong lòng mẹ (Trích Những ngày thơ ấu - Nguyên Hồng) & Thực hành tiếng Việt: Trợ từ, Thán từ (4 tiết)',
        'Đọc: Lão Hạc (Nam Cao) & Viết: Bài văn thuyết minh về một danh lam thắng cảnh (4 tiết)',
        'Đọc: Cô bé bán diêm & Nói và nghe: Giới thiệu cuốn sách yêu thích về đề tài tình thương (4 tiết)',
        'Ôn tập tổng hợp kiến thức Đọc hiểu, Tiếng Việt, Văn nghị luận Học kỳ 1 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 8 (4 tiết)'
      ],
      term2: [
        'Bài 6: Chân dung cuộc sống - Đọc: Mắt biếc (Nguyễn Nhật Ánh) & Thực hành tiếng Việt: Câu đơn và câu ghép (4 tiết)',
        'Đọc: Lặng lẽ Sa Pa (Nguyễn Thành Long) & Viết: Bài văn phân tích một tác phẩm truyện ngắn (4 tiết)',
        'Bài 7: Tin yêu và ước vọng - Đọc: Đồng chí (Chính Hữu) & Thực hành tiếng Việt: Thành phần biệt lập (Tình thái, cảm thán) (4 tiết)',
        'Đọc: Bài thơ về tiểu đội xe không kính (Phạm Tiến Duật) & Viết: Đoạn văn cảm nhận vẻ đẹp người lính (4 tiết)',
        'Đọc: Bếp lửa (Bằng Việt) & Nói và nghe: Trình bày suy nghĩ về tình cảm gia đình và tình yêu nước (4 tiết)',
        'Bài 8: Nhà văn và trang viết - Đọc: Chiếc lá cuối cùng (O Henry) & Thực hành tiếng Việt: Khởi ngữ (4 tiết)',
        'Đọc: Chuyện người con gái Nam Xương (Nguyễn Dữ) & Viết: Bài văn nghị luận về một tư tưởng đạo lý (4 tiết)',
        'Đọc: Bến quê (Nguyễn Minh Châu) & Nói và nghe: Thảo luận về giá trị nhân đạo của tác phẩm (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 8 (4 tiết)',
        'Bài 9: Hôm nay và ngày mai - Đọc: Cột mốc chủ quyền trên biển Đông & Thực hành tiếng Việt: Lựa chọn câu đơn/ghép (4 tiết)',
        'Đọc: Thông điệp nhân ngày Môi trường thế giới & Viết: Bản kiến nghị về một vấn đề đời sống (4 tiết)',
        'Đọc: Rác thải nhựa và hiểm họa môi trường & Viết: Bài văn thuyết minh giải thích một hiện tượng tự nhiên (4 tiết)',
        'Bài 10: Sách - người bạn đồng hành - Đọc: Bàn về đọc sách (Chu Quang Tiềm) & Thực hành tiếng Việt: Chữa lỗi ngữ pháp (4 tiết)',
        'Đọc: Ý nghĩa của văn chương (Hoài Thanh) & Viết: Giới thiệu cuốn sách làm thay đổi suy nghĩ của em (4 tiết)',
        'Dự án Ngữ văn 8: "Sáng tác Truyện ngắn & Diễn đàn Đọc sách Học đường THCS" (4 tiết)',
        'Bài 11: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Ngữ văn 8 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Ngữ văn 8 (4 tiết)'
      ]
    },
    9: {
      term1: [
        'Bài 1: Khát vọng sống - Đọc: Chuyện người con gái Nam Xương (Nguyễn Dữ) & Thực hành tiếng Việt: Điển tích, điển cố (4 tiết)',
        'Đọc: Kiều ở lầu Ngưng Bích (Trích Truyện Kiều - Nguyễn Du) & Viết: Bài văn nghị luận về một vấn đề cần giải quyết (4 tiết)',
        'Đọc: Chị em Thúy Kiều & Nói và nghe: Thảo luận về thân phận người phụ nữ trong xã hội phong kiến (4 tiết)',
        'Bài 2: Vẻ đẹp của tâm hồn - Đọc: Cảnh ngày xuân (Trích Truyện Kiều) & Thực hành tiếng Việt: Biện pháp tu từ chơi chữ, điệp thanh (4 tiết)',
        'Đọc: Lục Vân Tiên cứu Kiều Nguyệt Nga (Nguyễn Đình Chiểu) & Viết: Bài văn phân tích một đoạn trích truyện thơ Nôm (4 tiết)',
        'Đọc: Đồng chí (Chính Hữu) & Nói và nghe: Trình bày cảm nhận về tình đồng chí, đồng đội (4 tiết)',
        'Bài 3: Tiếng nói của tình yêu thương - Đọc: Bếp lửa (Bằng Việt) & Thực hành tiếng Việt: Câu rút gọn và câu đặc biệt (4 tiết)',
        'Đọc: Khúc hát ru những em bé lớn trên lưng mẹ (Nguyễn Khoa Điềm) & Viết: Bài văn nghị luận xã hội về tình mẫu tử (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 9 (4 tiết)',
        'Đọc: Ánh trăng (Nguyễn Duy) & Nói và nghe: Bàn về lối sống ân nghĩa, thủy chung (4 tiết)',
        'Bài 4: Sắc hương cuộc sống - Đọc: Làng (Kim Lân) & Thực hành tiếng Việt: Ngôn ngữ đối thoại, độc thoại và độc thoại nội tâm (4 tiết)',
        'Đọc: Lặng lẽ Sa Pa (Nguyễn Thành Long) & Viết: Bài văn phân tích nhân vật anh thanh niên trong Lặng lẽ Sa Pa (4 tiết)',
        'Đọc: Chiếc lược ngà (Nguyễn Quang Sáng) & Nói và nghe: Phân tích tình cha con sâu sắc trong chiến tranh (4 tiết)',
        'Bài 5: Nhịp cầu kết nối - Đọc: Mùa xuân nho nhỏ (Thanh Hải) & Thực hành tiếng Việt: Sự liên kết câu và đoạn văn (4 tiết)',
        'Đọc: Viếng lăng Bác (Viễn Phương) & Viết: Bài văn thuyết minh về một danh nhân văn hóa (4 tiết)',
        'Đọc: Sang thu (Hữu Thỉnh) & Nói và nghe: Lắng nghe và phản hồi ý kiến về một bài thơ trữ tình (4 tiết)',
        'Ôn tập tổng hợp kiến thức Đọc hiểu truyện ngắn, thơ hiện đại và Kỹ năng viết bài nghị luận HK1 (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 9 (4 tiết)'
      ],
      term2: [
        'Bài 6: Vẻ đẹp của sự cống hiến - Đọc: Những ngôi sao xa xôi (Lê Minh Khuê) & Thực hành tiếng Việt: Thành phần gọi đáp, phụ chú (4 tiết)',
        'Đọc: Bàn về lòng dũng cảm và đức hy sinh & Viết: Bài văn nghị luận về một phẩm chất của tuổi trẻ (4 tiết)',
        'Bài 7: Tiếng vọng non sông - Đọc: Tuyên ngôn Độc lập (Hồ Chí Minh) & Thực hành tiếng Việt: Tính chuẩn xác trong dùng từ (4 tiết)',
        'Đọc: Lời kêu gọi toàn quốc kháng chiến & Viết: Bài văn phân tích một tác phẩm văn chính luận (4 tiết)',
        'Đọc: Tiếng nói của văn nghệ (Nguyễn Đình Thi) & Nói và nghe: Trình bày quan điểm về vai trò của nghệ thuật (4 tiết)',
        'Bài 8: Khát vọng hòa bình - Đọc: Con cò (Chế Lan Viên) & Thực hành tiếng Việt: Chuyển đổi câu chủ động sang bị động (4 tiết)',
        'Đọc: Mùa lá rụng trong vườn (Ma Văn Kháng) & Viết: Bài văn nghị luận so sánh đánh giá hai tác phẩm văn học (4 tiết)',
        'Đọc: Bến quê (Nguyễn Minh Châu) & Nói và nghe: Thảo luận về những triết lý nhân sinh trong cuộc sống (4 tiết)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 9 (4 tiết)',
        'Bài 9: Hướng về tương lai - Đọc: Chuẩn bị hành trang vào thế kỉ mới (Vũ Khoan) & Thực hành tiếng Việt: Lỗi logic (4 tiết)',
        'Đọc: Bàn về bản lĩnh và khát vọng hội nhập & Viết: Bài văn nghị luận bàn về trách nhiệm của thanh niên thế hệ 2K (4 tiết)',
        'Đọc: Thư gửi học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Độc lập & Nói và nghe: Hùng biện học đường (4 tiết)',
        'Bài 10: Hành trang người học trò - Đọc: Phong cách Hồ Chí Minh (Lê Anh Trà) & Thực hành tiếng Việt: Tổng kết ngữ pháp (4 tiết)',
        'Đọc: Tiếng Việt - nguồn cội và tương lai & Viết: Thư chia tay tuổi học trò và tri ân thầy cô trước ngày thi vào 10 (4 tiết)',
        'Dự án Ngữ văn 9: "Tuyển tập Tản văn Kỷ yếu Khóa học THCS & Sân khấu Diễn xướng Tác phẩm Lớp 9" (4 tiết)',
        'Luyện giải các đề thi tuyển sinh vào Lớp 10 THPT môn Ngữ văn chuẩn ma trận Bộ GD&ĐT (4 tiết)',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Ngữ văn 9 (4 tiết)'
      ]
    }
  };

  const currentGradeData = nguVanDataByGrade[g] || nguVanDataByGrade[7];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isProject = name.includes('Dự án') || name.includes('Sân khấu');

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 4,
      yccd: `- Phân tích sâu sắc giá trị nội dung, tư tưởng nhân đạo và nét đặc sắc nghệ thuật của tác phẩm trong ${name} (SGK Ngữ văn ${g} Kết nối tri thức).\n- Nắm vững kiến thức Tiếng Việt, viết bài văn nghị luận/thuyết minh mạch lạc, dẫn chứng thuyết phục và giàu cảm xúc.\n- Bồi dưỡng tâm hồn nhân ái, lòng yêu nước, niềm tự hào dân tộc và bản lĩnh của người công dân trẻ.`,
      equipment: 'Chân dung tác giả, văn bản tác phẩm, video ngâm thơ, tư liệu lịch sử, máy chiếu',
      location: 'Phòng học / Thư viện trường',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isProject ? 'Dự án Văn học' : ''
    });
  });

  return list;
}

// =========================================================================
// 3. TIẾNG ANH THCS (LỚP 6, 7, 8, 9) - GLOBAL SUCCESS
// =========================================================================
import { getEnglishSecondaryCurriculum } from './curriculumSecondaryEnglish';
import { getTinHocSecondaryCurriculum } from './curriculumInformatics';
export { getEnglishSecondaryCurriculum, getTinHocSecondaryCurriculum };

// =========================================================================
// 4. KHOA HỌC TỰ NHIÊN THCS (LỚP 6, 7, 8, 9) - KHUNG 140 TIẾT (4 TIẾT/TUẦN)
// =========================================================================
export function getKhtnSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 7;
  const list: RawSecondaryLesson[] = [];

  const khtnTopicsByGrade: Record<number, string[]> = {
    6: [
      'Mở đầu: Giới thiệu về Khoa học tự nhiên, dụng cụ đo và an toàn trong phòng thực hành (4 tiết)',
      'Bài 1: Phép đo chiều dài, khối lượng và thời gian (4 tiết)',
      'Bài 2: Thang nhiệt độ Celsius và đo nhiệt độ bằng nhiệt kế (4 tiết)',
      'Bài 3: Các thể của chất (Rắn, lỏng, khí) và sự chuyển thể của chất (4 tiết)',
      'Bài 4: Tính chất của chất (Tính chất vật lí và tính chất hóa học) (4 tiết)',
      'Bài 5: Oxygen và không khí. Vai trò của không khí và bảo vệ môi trường không khí (4 tiết)',
      'Bài 6: Một số vật liệu, nhiên liệu, nguyên liệu, lương thực - thực phẩm thông dụng (4 tiết)',
      'Bài 7: Tách chất ra khỏi hỗn hợp (Lọc, cô cạn, chiết) (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 6 (4 tiết)',
      'Bài 8: Tế bào - Đơn vị cơ sở của sự sống (Cấu tạo và chức năng của tế bào) (4 tiết)',
      'Bài 9: Sự lớn lên và sinh sản của tế bào. Cơ thể đơn bào và cơ thể đa bào (4 tiết)',
      'Bài 10: Các cấp độ tổ chức trong cơ thể đa bào (Tế bào - Mô - Cơ quan - Hệ cơ quan - Cơ thể) (4 tiết)',
      'Bài 11: Khóa lưỡng phân và phân loại thế giới sống (5 giới sinh vật) (4 tiết)',
      'Bài 12: Virus và Vi khuẩn (Cấu tạo, vai trò và một số bệnh do virus, vi khuẩn gây ra) (4 tiết)',
      'Bài 13: Đa dạng nguyên sinh vật và Đa dạng các loài nấm (4 tiết)',
      'Bài 14: Đa dạng thực vật (Rêu, Dương xỉ, Hạt trần, Hạt kín) (4 tiết)',
      'Ôn tập tổng hợp kiến thức Chất và Thế giới sống Học kỳ 1 (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 6 (4 tiết)',
      'Bài 15: Đa dạng động vật không xương sống (Ruột khoang, Giun, Thân mềm, Chân khớp) (4 tiết)',
      'Bài 16: Đa dạng động vật có xương sống (Cá, Lưỡng cư, Bò sát, Chim, Thú) (4 tiết)',
      'Bài 17: Đa dạng sinh học và Bảo vệ đa dạng sinh học ở Việt Nam (4 tiết)',
      'Bài 18: Lực và tác dụng của lực. Biểu diễn lực (4 tiết)',
      'Bài 19: Lực tiếp xúc và lực không tiếp xúc (4 tiết)',
      'Bài 20: Lực ma sát (Ma sát trượt, ma sát nghỉ) và tác dụng của ma sát trong đời sống (4 tiết)',
      'Bài 21: Lực cản của nước và không khí (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 6 (4 tiết)',
      'Bài 22: Trọng lực và khối lượng. Độ biến dạng của lò xo và lực đàn hồi (4 tiết)',
      'Bài 23: Năng lượng và các dạng năng lượng (Động năng, thế năng, nhiệt năng, quang năng, điện năng) (4 tiết)',
      'Bài 24: Sự chuyển hóa năng lượng và Định luật bảo toàn năng lượng (4 tiết)',
      'Bài 25: Năng lượng tái tạo (Năng lượng mặt trời, gió, nước) và Tiết kiệm năng lượng (4 tiết)',
      'Bài 26: Trái Đất và Mặt Trời: Hiện tượng ngày đêm, chuyển động nhìn thấy của Mặt Trời (4 tiết)',
      'Bài 27: Mặt Trăng và các pha của Mặt Trăng (4 tiết)',
      'Dự án STEM KHTN 6: "Mô hình Bình lọc nước thông minh & Xe chạy bằng lực đàn hồi của lò xo" (4 tiết)',
      'Bài 28: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm KHTN 6 (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn KHTN 6 (4 tiết)'
    ],
    7: [
      'Mở đầu: Phương pháp và kĩ năng học tập môn KHTN (2 tiết) & Bài 1: Nguyên tử (2 tiết)',
      'Bài 2: Nguyên tố hóa học và Bảng tuần hoàn các nguyên tố hóa học (4 tiết)',
      'Bài 3: Phân tử, đơn chất và hợp chất (4 tiết)',
      'Bài 4: Giới thiệu liên kết hóa học (Liên kết ion và liên kết cộng hóa trị) (4 tiết)',
      'Bài 5: Hóa trị và Công thức hóa học (4 tiết)',
      'Bài 6: Tốc độ chuyển động. Đo tốc độ bằng đồng hồ bấm giây và cổng quang điện (4 tiết)',
      'Bài 7: Đồ thị quãng đường - thời gian và ý nghĩa thực tế (4 tiết)',
      'Bài 8: Sóng âm. Nguồn âm và sự truyền âm trong các môi trường (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 7 (4 tiết)',
      'Bài 9: Độ to và độ cao của âm. Phản xạ âm và ô nhiễm tiếng ồn (4 tiết)',
      'Bài 10: Ánh sáng, tia sáng và chùm sáng. Định luật phản xạ ánh sáng (4 tiết)',
      'Bài 11: Ảnh của vật tạo bởi gương phẳng (4 tiết)',
      'Bài 12: Nam châm, từ tính và từ trường. Từ phổ và đường sức từ (4 tiết)',
      'Bài 13: Từ trường Trái Đất và La bàn định hướng (4 tiết)',
      'Bài 14: Nam châm điện và ứng dụng trong công nghiệp (4 tiết)',
      'Bài 15: Trao đổi chất và chuyển hóa năng lượng ở sinh vật (4 tiết)',
      'Ôn tập tổng hợp kiến thức Vật lí và Hóa học Học kỳ 1 (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 7 (4 tiết)',
      'Bài 16: Quang hợp ở thực vật (Bản chất, phương trình và các nhân tố ảnh hưởng) (4 tiết)',
      'Bài 17: Hô hấp tế bào ở sinh vật (4 tiết)',
      'Bài 18: Khí khổng và sự trao đổi khí ở thực vật và động vật (4 tiết)',
      'Bài 19: Vai trò của nước và chất dinh dưỡng đối với sinh vật (4 tiết)',
      'Bài 20: Vận chuyển các chất trong cây và sự thoát hơi nước ở lá (4 tiết)',
      'Bài 21: Cảm ứng ở sinh vật và tập tính ở động vật (4 tiết)',
      'Bài 22: Sinh trưởng và phát triển ở sinh vật (Các giai đoạn vòng đời) (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 7 (4 tiết)',
      'Bài 23: Sinh sản vô tính ở sinh vật (Sinh sản sinh dưỡng, phân đôi, nảy chồi) (4 tiết)',
      'Bài 24: Sinh sản hữu tính ở sinh vật (Thụ phấn, thụ tinh, hình thành hạt và quả) (4 tiết)',
      'Bài 25: Các yếu tố ảnh hưởng đến sinh sản và điều khiển sinh sản ở sinh vật (4 tiết)',
      'Bài 26: Cơ thể sinh vật là một thể thống nhất (4 tiết)',
      'Dự án STEM KHTN 7: "Mô hình Nam châm điện nâng tải & Hệ thống trồng cây thủy canh thông minh" (4 tiết)',
      'Bài 27: Ôn tập toàn diện kiến thức Sinh học và Sinh thái học Lớp 7 (4 tiết)',
      'Bài 28: Hệ thống hóa kiến thức KHTN cả năm học (4 tiết)',
      'Luyện giải đề thi KHTN 7 chuẩn ma trận Bộ GD&ĐT (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn KHTN 7 (4 tiết)'
    ],
    8: [
      'Chương I: Phản ứng hóa học - Bài 1: Biến đổi vật lí và biến đổi hóa học. Phản ứng hóa học (4 tiết)',
      'Bài 2: Định luật bảo toàn khối lượng và Phương trình hóa học (4 tiết)',
      'Bài 3: Mol và tỉ khối của chất khí (4 tiết)',
      'Bài 4: Dung dịch và nồng độ dung dịch (Nồng độ C% và nồng độ mol CM) (4 tiết)',
      'Bài 5: Tốc độ phản ứng và các yếu tố ảnh hưởng đến tốc độ phản ứng (4 tiết)',
      'Chương II: Một số hợp chất thông dụng - Bài 6: Acid (HCl, H2SO4) và tính chất hóa học của acid (4 tiết)',
      'Bài 7: Base (NaOH, Ca(OH)2) và Thang đo pH (4 tiết)',
      'Bài 8: Oxide (Oxide acid, Oxide base) và Muối (NaCl, CaCO3) (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 8 (4 tiết)',
      'Bài 9: Phân bón hóa học (Phân đạm, lân, kali, phân NPK) (4 tiết)',
      'Chương III: Khối lượng riêng và Áp suất - Bài 10: Khối lượng riêng và phép đo khối lượng riêng (4 tiết)',
      'Bài 11: Áp suất tác dụng lên bề mặt chất rắn (4 tiết)',
      'Bài 12: Áp suất chất lỏng và áp suất khí quyển (4 tiết)',
      'Bài 13: Lực đẩy Archimedes và điều kiện vật nổi, vật chìm (4 tiết)',
      'Chương IV: Tác dụng làm quay của lực - Bài 14: Đòn bẩy và ứng dụng của đòn bẩy trong đời sống (4 tiết)',
      'Bài 15: Moment lực và điều kiện cân bằng của vật có trục quay cố định (4 tiết)',
      'Ôn tập tổng hợp kiến thức Hóa học và Cơ học Học kỳ 1 (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 8 (4 tiết)',
      'Chương V: Điện - Bài 16: Hiện tượng nhiễm điện do cọ xát. Dòng điện và nguồn điện (4 tiết)',
      'Bài 17: Mạch điện đơn giản. Cường độ dòng điện và Hiệu điện thế (4 tiết)',
      'Bài 18: Tác dụng nhiệt, phát sáng, hóa học và từ của dòng điện (4 tiết)',
      'Chương VI: Nhiệt - Bài 19: Năng lượng nhiệt và Nội năng của vật (4 tiết)',
      'Bài 20: Sự truyền nhiệt (Dẫn nhiệt, đối lưu, bức xạ nhiệt) (4 tiết)',
      'Bài 21: Sự nở vì nhiệt của các chất rắn, lỏng, khí (4 tiết)',
      'Chương VII: Sinh học cơ thể người - Bài 22: Khái quát về cơ thể người và Hệ vận động (Xương, cơ) (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 8 (4 tiết)',
      'Bài 23: Hệ tiêu hóa và Dinh dưỡng vệ sinh an toàn thực phẩm (4 tiết)',
      'Bài 24: Hệ tuần hoàn và Máu (Nhóm máu, truyền máu, bảo vệ tim mạch) (4 tiết)',
      'Bài 25: Hệ hô hấp và bảo vệ hệ hô hấp khỏe mạnh (4 tiết)',
      'Bài 26: Hệ bài tiết và chăm sóc hệ bài tiết nước tiểu (4 tiết)',
      'Bài 27: Hệ thần kinh và các giác quan (Thị giác, thính giác) (4 tiết)',
      'Bài 28: Hệ nội tiết và Hệ sinh sản (Vệ sinh tuổi dậy thì) (4 tiết)',
      'Dự án STEM KHTN 8: "Chế tạo Tàu ngầm Mini ứng dụng Lực đẩy Archimedes & Máy đo Nồng độ Dung dịch" (4 tiết)',
      'Bài 29: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm KHTN 8 (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn KHTN 8 (4 tiết)'
    ],
    9: [
      'Chương I: Kim loại và Phi kim - Bài 1: Tính chất vật lí và tính chất hóa học của kim loại (4 tiết)',
      'Bài 2: Dãy hoạt động hóa học của kim loại và ý nghĩa (4 tiết)',
      'Bài 3: Nhôm (Al) và Sắt (Fe): Tính chất và ứng dụng (4 tiết)',
      'Bài 4: Hợp kim: Gang và Thép. Sự ăn mòn kim loại và bảo vệ kim loại (4 tiết)',
      'Bài 5: Phi kim (Carbon, Silicon) và Bảng tuần hoàn các nguyên tố hóa học nâng cao (4 tiết)',
      'Chương II: Hợp chất hữu cơ và Hydrocarbon - Bài 6: Khái niệm hợp chất hữu cơ và Hóa học hữu cơ (4 tiết)',
      'Bài 7: Methane (CH4) và Ethylene (C2H4) (4 tiết)',
      'Bài 8: Acetylene (C2H2) và Benzene (C6H6) (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 9 (4 tiết)',
      'Bài 9: Dầu mỏ, khí thiên nhiên và Nhiên liệu sạch tương lai (4 tiết)',
      'Chương III: Dẫn xuất Hydrocarbon - Bài 10: Rượu etylic (C2H5OH) và Axit axetic (CH3COOH) (4 tiết)',
      'Bài 11: Chất béo, Glucose và Saccharose (4 tiết)',
      'Bài 12: Tinh bột, Cellulose và Polymer tổng hợp (4 tiết)',
      'Chương IV: Ánh sáng - Bài 13: Hiện tượng khúc xạ ánh sáng (4 tiết)',
      'Bài 14: Thấu kính hội tụ và Thấu kính phân kì (4 tiết)',
      'Bài 15: Ảnh của một vật tạo bởi thấu kính. Kính lúp và Máy ảnh (4 tiết)',
      'Bài 16: Mắt và các tật của mắt (Cận thị, viễn thị) và cách khắc phục (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 9 (4 tiết)',
      'Chương V: Điện từ học nâng cao - Bài 17: Hiện tượng cảm ứng điện từ (4 tiết)',
      'Bài 18: Dòng điện xoay chiều và Máy phát điện xoay chiều (4 tiết)',
      'Bài 19: Máy biến áp và Sự truyền tải điện năng đi xa (4 tiết)',
      'Chương VI: Năng lượng và Sự bảo toàn - Bài 20: Năng lượng tái tạo và Năng lượng hạt nhân (4 tiết)',
      'Chương VII: Di truyền học Mendel và Nhiễm sắc thể - Bài 21: Di truyền học Mendel và lai một cặp tính trạng (4 tiết)',
      'Bài 22: Lai hai cặp tính trạng và Quy luật phân ly độc lập (4 tiết)',
      'Bài 23: Nhiễm sắc thể và Quá trình Nguyên phân, Giảm phân (4 tiết)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 9 (4 tiết)',
      'Bài 24: Cấu trúc và chức năng của phân tử ADN, ARN và Protein (4 tiết)',
      'Bài 25: Mối quan hệ giữa ADN - ARN - Protein - Tính trạng (4 tiết)',
      'Bài 26: Đột biến gen và Đột biến nhiễm sắc thể (4 tiết)',
      'Bài 27: Di truyền học người và Ứng dụng công nghệ gen trong y học (4 tiết)',
      'Chương VIII: Sinh thái học và Môi trường - Bài 28: Quần thể sinh vật và Quần xã sinh vật (4 tiết)',
      'Bài 29: Hệ sinh thái, Chuỗi thức ăn và Lưới thức ăn (4 tiết)',
      'Bài 30: Bảo vệ môi trường và Phát triển bền vững (4 tiết)',
      'Dự án STEM KHTN 9: "Chế tạo Máy phát điện gió Mini & Mô hình Chuỗi ADN 3D Tương tác" (4 tiết)',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn KHTN 9 (4 tiết)'
    ]
  };

  const topics = khtnTopicsByGrade[g] || khtnTopicsByGrade[7];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 33 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Chương') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 4,
      yccd: `- Nắm vững các định luật vật lí, phản ứng hóa học, cơ chế di truyền và cấu trúc sinh thái của ${name} (SGK KHTN ${g} Kết nối tri thức).\n- Thành thạo kỹ năng tiến hành thí nghiệm khoa học an toàn, thu thập và phân tích dữ liệu thực nghiệm.\n- Bồi dưỡng tư duy khoa học thực nghiệm, tinh thần khám phá và ý thức bảo vệ môi trường sinh thái.`,
      equipment: 'Phòng thí nghiệm KHTN, bộ hóa chất, dụng cụ quang học, kính hiển vi điện tử, máy đo điện tử',
      location: 'Phòng thực hành KHTN / Phòng STEM',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án STEM Khoa học' : ''
    });
  });

  return list;
}

// =========================================================================
// 5. GIÁO DỤC THỂ CHẤT THCS (LỚP 6, 7, 8, 9) - KHUNG 70 TIẾT (2 TIẾT/TUẦN)
// =========================================================================
export function getGdtcSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  const gdtcSecondaryData: Record<number, string[]> = {
    6: [
      'Tiết 1: Ý nghĩa của tập luyện TDTT đối với sự phát triển thể chất lứa tuổi dậy thì & Tiết 2: Đội hình đội ngũ: Biến đổi đội hình',
      'Tiết 3: Đội hình đội ngũ: Đi đều, đứng lại, vòng phải, vòng trái & Tiết 4: Đổi chân khi đi đều sai nhịp',
      'Tiết 5: Bài thể dục liên hoàn 30 động tác: Động tác 1-10 & Tiết 6: Ôn tập động tác 1-10',
      'Tiết 7: Bài thể dục liên hoàn: Động tác 11-20 & Tiết 8: Hoàn thiện động tác 1-20',
      'Tiết 9: Bài thể dục liên hoàn: Động tác 21-30 & Tiết 10: Hoàn thiện bài thể dục liên hoàn 30 động tác',
      'Tiết 11: Điền kinh: Kỹ thuật chạy cự li ngắn 60m xuất phát thấp bằng bàn đạp & Tiết 12: Chạy lao sau xuất phát',
      'Tiết 13: Kỹ thuật chạy giữa quãng và về đích 60m & Tiết 14: Chạy tiếp sức 4x100m',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (500m) & Tiết 16: Ôn tập tổng hợp chuẩn bị kiểm tra giữa kỳ 1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 6 (Bài thể dục liên hoàn & Chạy ngắn 60m)',
      'Tiết 19: Nhảy cao kiểu bước qua: Giai đoạn chạy đà và giậm nhảy & Tiết 20: Giai đoạn bay trên không và tiếp đất',
      'Tiết 21: Hoàn thiện kỹ thuật Nhảy cao kiểu bước qua mức xà 100-115cm & Tiết 22: Nâng cao thành tích nhảy cao',
      'Tiết 23: Ném bóng xa có đà 4 bước chéo: Kỹ thuật ra sức cuối cùng & Tiết 24: Giữ thăng bằng sau khi ném',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông - Kỹ thuật tâng cầu / Tâng bóng & Tiết 26: Kỹ thuật chuyền bóng / Chuyền cầu',
      'Tiết 27: Thể thao tự chọn: Đấu tập mini có hướng dẫn luật & Tiết 28: Bài tập phát triển thể lực',
      'Tiết 29: Kỹ năng phòng ngừa chấn thương khớp gối, cổ chân & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng kế hoạch tập luyện thể thao cá nhân & Tiết 32: Ôn tập chạy bền',
      'Tiết 33: Ôn tập tổng hợp toàn diện kiến thức kỹ năng GDTC Học kỳ 1',
      'Tiết 35 & Tiết 36: Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn GDTC 6',
      'Tiết 37: Dinh dưỡng hợp lý trong tập luyện thể thao & Tiết 38: Đội hình đội ngũ nâng cao',
      'Tiết 39: Bài thể dục Aerobic phát triển thể lực lớp 6 & Tiết 40: Đồng diễn Aerobic theo nhạc',
      'Tiết 41: Nhảy xa kiểu ngồi: Giai đoạn chạy đà và giậm nhảy & Tiết 42: Giai đoạn bay trên không và tiếp đất',
      'Tiết 43: Hoàn thiện 4 giai đoạn kỹ thuật Nhảy xa kiểu ngồi vào hố cát & Tiết 44: Nâng cao thành tích nhảy xa',
      'Tiết 45: Chạy cự li ngắn 100m xuất phát thấp nâng cao tốc độ & Tiết 46: Chạy biến tốc 100m',
      'Tiết 47: Chạy chậm rèn sức bền quanh sân trường (600m) & Tiết 48: Hít thở sâu hồi tĩnh',
      'Tiết 49: Ôn tập kỹ thuật nhảy xa và chạy ngắn & Tiết 50: Trò chơi vận động rèn sức mạnh tốc độ',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 6 (Nhảy xa kiểu ngồi & Chạy ngắn 100m)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu / Sút bóng cầu môn uy lực & Tiết 54: Di chuyển linh hoạt trên sân',
      'Tiết 55: Thể thao tự chọn: Trận đấu tập luyện theo luật thi đấu chính thức & Tiết 56: Chiến thuật thi đấu',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải đấu giao hữu cấp lớp & Tiết 58: Thực hành công tác trọng tài',
      'Tiết 59: Kiểm tra đánh giá thể lực học sinh lớp 6 theo Quyết định 53/2008/QĐ-BGDĐT (Chạy 30m, Bật xa, Chạy bền)',
      'Tiết 61: Hội khỏe Phù Đổng cấp trường: Thi đấu môn Điền kinh (Chạy 100m, Nhảy cao, Nhảy xa)',
      'Tiết 63: Hội khỏe Phù Đổng: Thi đấu các môn Bóng đá, Cầu lông, Bóng rổ, Bóng chuyền',
      'Tiết 65: Đồng diễn bài thể dục toàn trường & Lễ tổng kết phong trào rèn luyện thân thể',
      'Tiết 67: Ôn tập toàn diện kỹ năng vận động lớp 6 & Hướng dẫn tự rèn luyện thể thao hè',
      'Tiết 69 & Tiết 70: Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn GDTC 6'
    ],
    7: [
      'Tiết 1: Phòng tránh chấn thương khi tập luyện TDTT và phương pháp sơ cứu ban đầu & Tiết 2: Đội hình đội ngũ',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình từ hai hàng thành bốn hàng & Tiết 4: Đi đều đổi chân',
      'Tiết 5: Bài thể dục liên hoàn 32 động tác: Động tác 1-10 & Tiết 6: Động tác 11-20',
      'Tiết 7: Bài thể dục liên hoàn: Động tác 21-32 & Tiết 8: Hoàn thiện bài thể dục liên hoàn 32 động tác',
      'Tiết 9: Chạy cự li ngắn 60m: Kỹ thuật xuất phát thấp bằng bàn đạp & Tiết 10: Giai đoạn chạy lao và chạy giữa quãng',
      'Tiết 11: Kỹ thuật đánh đích chạy cự li ngắn 60m & Tiết 12: Chạy tiếp sức 4x100m',
      'Tiết 13: Bật xa tại chỗ và Bật cao có đà phát triển sức bật & Tiết 14: Bài tập bổ trợ cơ chân',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (600m) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 7 (Chạy ngắn 60m & Bài thể dục liên hoàn)',
      'Tiết 19: Nhảy cao kiểu bước qua: Kỹ thuật đo đà và chạy đà 5-7 bước & Tiết 20: Giậm nhảy và vượt qua xà',
      'Tiết 21: Hoàn thiện 4 giai đoạn Nhảy cao kiểu bước qua mức xà 105-120cm & Tiết 22: Tiếp đất an toàn',
      'Tiết 23: Ném bóng xa có đà 4 bước chéo: Kỹ thuật tạo tư thế cánh cung & Tiết 24: Kỹ thuật ra sức cuối cùng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ - Kỹ thuật nâng cao & Tiết 26: Kỹ thuật phòng ngự',
      'Tiết 27: Thể thao tự chọn: Phối hợp chiến thuật nhóm 2-3 người & Tiết 28: Trận đấu tập luyện',
      'Tiết 29: Kỹ năng thở sâu và phục hồi thể lực sau tập luyện nặng & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Ý thức tự giác rèn luyện thân thể mỗi ngày & Tiết 32: Ôn tập chạy bền',
      'Tiết 33: Ôn tập tổng hợp toàn diện kiến thức GDTC Học kỳ 1',
      'Tiết 35 & Tiết 36: Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn GDTC 7',
      'Tiết 37: Nguyên tắc dinh dưỡng và giấc ngủ đối với VĐV học đường & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục nhịp điệu phát triển thể lực lớp 7 & Tiết 40: Luyện tập đồng diễn theo nhạc',
      'Tiết 41: Nhảy xa kiểu ngồi: Kỹ thuật chạy đà tự do 11-13 bước & Tiết 42: Giậm nhảy chính xác vào ván giậm',
      'Tiết 43: Hoàn thiện kỹ thuật Nhảy xa kiểu ngồi thành tích 3.5m - 4.2m & Tiết 44: Tiếp đất uốn gối giảm chấn',
      'Tiết 45: Chạy nhanh cự li ngắn 100m nâng cao tốc độ & Tiết 46: Chạy lặp lại cự li ngắn 30m x 3 lần',
      'Tiết 47: Chạy chậm rèn sức bền 800m & Tiết 48: Phương pháp phân phối sức khi chạy bền',
      'Tiết 49: Ôn tập nhảy xa và ném bóng có đà & Tiết 50: Trò chơi vận động phát triển thể lực',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 7 (Nhảy xa kiểu ngồi & Ném bóng có đà)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật phát bóng / Giao cầu tấn công & Tiết 54: Đỡ bóng / Đón cầu chính xác',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu đơn và đôi theo luật & Tiết 56: Chiến thuật phản công nhanh',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải đấu thể thao khối 7 & Tiết 58: Thực hành làm trọng tài',
      'Tiết 59: Kiểm tra tiêu chuẩn rèn luyện thân thể học sinh lớp 7 (Chạy 30m, Bật xa, Gập bụng 30s, Chạy 800m)',
      'Tiết 61: Hội thao Phù Đổng cấp trường: Thi đấu Điền kinh (Chạy 100m, Nhảy cao, Nhảy xa, Ném bóng)',
      'Tiết 63: Hội thao: Thi đấu các môn Bóng đá mini, Cầu lông, Bóng rổ, Bóng bàn',
      'Tiết 65: Biểu diễn bài thể dục đồng diễn & Bế mạc Hội khỏe Phù Đổng',
      'Tiết 67: Ôn tập toàn diện kỹ năng GDTC 7 & Hướng dẫn kế hoạch tập luyện trong kỳ nghỉ hè',
      'Tiết 69 & Tiết 70: Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn GDTC 7'
    ],
    8: [
      'Tiết 1: Đánh giá thể lực bản thân và phương pháp phát triển sức mạnh bền bỉ & Tiết 2: Đội hình đội ngũ chuẩn hóa',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình từ ba hàng thành sáu hàng & Tiết 4: Đi đều và chạy đều đổi hướng',
      'Tiết 5: Bài thể dục liên hoàn 35 động tác: Động tác 1-15 & Tiết 6: Động tác 16-35',
      'Tiết 7: Hoàn thiện bài thể dục liên hoàn 35 động tác nam/nữ & Tiết 8: Luyện tập theo tổ nhóm',
      'Tiết 9: Kỹ thuật chạy cự li ngắn 100m: Kỹ thuật đóng bàn đạp xuất phát thấp & Tiết 10: Chạy lao và chạy giữa quãng',
      'Tiết 11: Kỹ thuật đánh đích 100m & Tiết 12: Chạy tiếp sức 4x100m trao gậy từ dưới lên',
      'Tiết 13: Bật xa tại chỗ phát triển sức mạnh bộc phát & Tiết 14: Bài tập nhảy cóc, nhảy bước bộ',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (800m) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 8 (Chạy ngắn 100m & Bài thể dục liên hoàn)',
      'Tiết 19: Nhảy cao kiểu bước qua: Kỹ thuật chạy đà uốn cong & Tiết 20: Giậm nhảy và vượt xà mức 110-125cm',
      'Tiết 21: Hoàn thiện kỹ thuật Nhảy cao kiểu bước qua nâng cao & Tiết 22: Kỹ thuật tiếp đất an toàn',
      'Tiết 23: Ném bóng xa có đà 5 bước chéo: Kỹ thuật tạo sức căng thân người & Tiết 24: Ra sức cuối cùng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ - Kỹ chiến thuật chuyên sâu & Tiết 26: Di chuyển không bóng',
      'Tiết 27: Thể thao tự chọn: Phối hợp tổ đấu 3 người & Tiết 28: Trận đấu tập luyện theo luật',
      'Tiết 29: Kỹ năng xử lý chấn thương bong gân, căng cơ & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng lối sống năng động, lành mạnh & Tiết 32: Ôn tập chạy bền',
      'Tiết 33: Ôn tập tổng hợp kiến thức toàn diện GDTC Học kỳ 1',
      'Tiết 35 & Tiết 36: Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn GDTC 8',
      'Tiết 37: Phương pháp hồi phục thể lực sau vận động cường độ cao & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục Aerobic phát triển thể lực khối 8 & Tiết 40: Đồng diễn bài thể dục nhịp điệu',
      'Tiết 41: Nhảy xa kiểu ngồi: Kỹ thuật chạy đà tốc độ cao 13-15 bước & Tiết 42: Giậm nhảy bay trên không kiểu ngồi',
      'Tiết 43: Hoàn thiện 4 giai đoạn Nhảy xa kiểu ngồi mức 4.0m - 4.8m & Tiết 44: Rơi xuống hố cát an toàn',
      'Tiết 45: Chạy nhanh cự li ngắn 100m rèn luyện tốc độ tối đa & Tiết 46: Chạy tiếp sức 4x100m',
      'Tiết 47: Chạy chậm rèn sức bền 1000m nam / 800m nữ & Tiết 48: Phương pháp hít thở sâu hồi phục',
      'Tiết 49: Ôn tập nhảy xa và ném bóng có đà & Tiết 50: Trò chơi vận động rèn sức mạnh tốc độ',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 8 (Nhảy xa kiểu ngồi & Ném bóng có đà)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu góc hiểm / Sút bóng má ngoài & Tiết 54: Bọc lót phòng ngự',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu giải chính thức & Tiết 56: Chiến thuật pressing / Tấn công biên',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải thi đấu thể thao học sinh & Tiết 58: Điều hành trọng tài trận đấu',
      'Tiết 59: Kiểm tra tiêu chuẩn rèn luyện thân thể học sinh lớp 8 theo chuẩn Bộ GD&ĐT',
      'Tiết 61: Hội khỏe Phù Đổng cấp trường: Thi đấu môn Điền kinh (Chạy 100m, Nhảy cao, Nhảy xa, Ném bóng)',
      'Tiết 63: Hội khỏe Phù Đổng: Thi đấu các môn Bóng đá, Cầu lông, Bóng rổ, Bóng chuyền',
      'Tiết 65: Biểu diễn đồng diễn thể dục toàn trường & Trao huy chương Hội khỏe Phù Đổng',
      'Tiết 67: Ôn tập toàn diện kỹ năng GDTC 8 & Hướng dẫn rèn luyện thể lực hè',
      'Tiết 69 & Tiết 70: Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn GDTC 8'
    ],
    9: [
      'Tiết 1: Lập kế hoạch tự rèn luyện thể lực và dinh dưỡng cho kỳ thi vào 10 & Tiết 2: Đội hình đội ngũ chuẩn hóa',
      'Tiết 3: Đội hình đội ngũ: Biến đổi đội hình phức hợp & Tiết 4: Đi đều, chạy đều chuyển hướng nhịp nhàng',
      'Tiết 5: Bài thể dục phát triển chung 36 động tác: Động tác 1-18 & Tiết 6: Động tác 19-36',
      'Tiết 7: Hoàn thiện bài thể dục liên hoàn 36 động tác nam/nữ & Tiết 8: Luyện tập đồng diễn nhóm',
      'Tiết 9: Kỹ thuật chạy cự li ngắn 100m: Kỹ thuật xuất phát thấp bằng bàn đạp & Tiết 10: Chạy lao và chạy giữa quãng',
      'Tiết 11: Kỹ thuật về đích và đánh đích 100m & Tiết 12: Chạy tiếp sức 4x100m hoàn chỉnh',
      'Tiết 13: Bật xa tại chỗ và Bật cao có đà nâng cao thành tích & Tiết 14: Bài tập tăng cường sức bật chân',
      'Tiết 15: Chạy cự li trung bình rèn luyện sức bền (1000m nam / 800m nữ) & Tiết 16: Ôn tập giữa HK1',
      'Tiết 17 & Tiết 18: Kiểm tra, đánh giá giữa Học kỳ 1 môn GDTC 9 (Chạy ngắn 100m & Bài thể dục liên hoàn)',
      'Tiết 19: Nhảy cao kiểu bước qua: Kỹ thuật chạy đà 7-9 bước & Tiết 20: Giậm nhảy và vượt xà mức 115-130cm',
      'Tiết 21: Hoàn thiện 4 giai đoạn kỹ thuật Nhảy cao kiểu bước qua & Tiết 22: Tiếp đất an toàn trên đệm mút',
      'Tiết 23: Ném bóng xa có đà 5 bước chéo: Hoàn thiện kỹ thuật ra sức cuối cùng & Tiết 24: Giữ thăng bằng',
      'Tiết 25: Thể thao tự chọn: Bóng đá / Cầu lông / Bóng rổ - Kỹ chiến thuật nâng cao & Tiết 26: Di chuyển chiến thuật',
      'Tiết 27: Thể thao tự chọn: Trận đấu tập luyện theo luật thi đấu quốc gia & Tiết 28: Bài tập phát triển thể lực',
      'Tiết 29: Kỹ năng xử lý chấn thương thể thao nặng và hồi sức & Tiết 30: Ôn tập thể thao tự chọn',
      'Tiết 31: Xây dựng thói quen thể dục thể thao suốt đời & Tiết 32: Ôn tập chạy bền',
      'Tiết 33: Ôn tập tổng hợp kiến thức GDTC Học kỳ 1',
      'Tiết 35 & Tiết 36: Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn GDTC 9',
      'Tiết 37: Phương pháp giải tỏa căng thẳng học tập thi cử bằng vận động thể thao & Tiết 38: Đội hình đội ngũ',
      'Tiết 39: Bài thể dục nhịp điệu phát triển thể lực lớp 9 & Tiết 40: Đồng diễn Aerobic khối 9',
      'Tiết 41: Nhảy xa kiểu ngồi / kiểu ưỡn thân: Kỹ thuật chạy đà 15-17 bước & Tiết 42: Giậm nhảy và bay trên không',
      'Tiết 43: Hoàn thiện kỹ thuật Nhảy xa thành tích 4.2m - 5.2m & Tiết 44: Rơi xuống hố cát an toàn',
      'Tiết 45: Chạy cự li ngắn 100m nâng cao tối đa tốc độ cá nhân & Tiết 46: Chạy tiếp sức 4x100m',
      'Tiết 47: Chạy chậm rèn sức bền 1500m nam / 800m nữ & Tiết 48: Phương pháp phân phối thể lực',
      'Tiết 49: Ôn tập nhảy cao và nhảy xa & Tiết 50: Trò chơi vận động rèn luyện bản lĩnh thi đấu',
      'Tiết 51 & Tiết 52: Kiểm tra, đánh giá giữa Học kỳ 2 môn GDTC 9 (Nhảy cao kiểu bước qua & Nhảy xa)',
      'Tiết 53: Thể thao tự chọn: Kỹ thuật đập cầu smash / Sút bóng xa hiểm hóc & Tiết 54: Phối hợp phòng thủ - phản công',
      'Tiết 55: Thể thao tự chọn: Trận đấu thi đấu chính thức cấp trường & Tiết 56: Chiến thuật toàn diện',
      'Tiết 57: Thể thao tự chọn: Tổ chức giải thi đấu thể thao học sinh khối 9 & Tiết 58: Điều hành trọng tài',
      'Tiết 59: Kiểm tra tiêu chuẩn đánh giá thể lực học sinh lớp 9 theo QĐ 53/2008/QĐ-BGDĐT',
      'Tiết 61: Hội khỏe Phù Đổng cấp trường: Thi đấu Điền kinh (Chạy 100m, Nhảy cao, Nhảy xa, Ném bóng)',
      'Tiết 63: Hội khỏe Phù Đổng: Thi đấu các môn Bóng đá, Cầu lông, Bóng rổ, Bóng bàn, Bơi lội',
      'Tiết 65: Biểu diễn đồng diễn bài thể dục chào mừng Lễ tốt nghiệp THCS & Trao giải VĐV tiêu biểu',
      'Tiết 67: Ôn tập toàn diện kỹ năng thể chất 4 năm THCS & Hướng dẫn chuẩn bị thể lực vào THPT',
      'Tiết 69 & Tiết 70: Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình GDTC THCS'
    ]
  };

  const topics = gdtcSecondaryData[g] || gdtcSecondaryData[6];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;

    list.push({
      week: w,
      topic: name.includes('Đội hình') ? 'Đội hình đội ngũ' : name.includes('Bài thể dục') ? 'Bài thể dục liên hoàn' : name.includes('Nhảy cao') ? 'Nhảy cao kiểu bước qua' : name.includes('Nhảy xa') ? 'Nhảy xa kiểu ngồi' : name.includes('Ném bóng') ? 'Ném bóng xa có đà' : name.includes('Chạy') ? 'Chạy cự li ngắn / Chạy bền' : name.includes('Thể thao') ? 'Thể thao tự chọn' : isCK || isGK ? 'Đánh giá định kỳ' : 'Vận động thể lực',
      name: name,
      periods: 2,
      yccd: `- Thực hiện đúng kỹ thuật động tác, nhịp điệu và an toàn của bài học: ${name} (SGK GDTC ${g} Kết nối tri thức).\n- Tự giác, tích cực tập luyện cá nhân và phối hợp hiệu quả trong hoạt động nhóm, thi đấu thể thao.\n- Đạt chuẩn đánh giá thể lực học sinh THCS theo quy định của Bộ GD&ĐT (QĐ 53/2008/QĐ-BGDĐT).`,
      equipment: 'Còi thể thao, bàn đạp xuất phát, nệm nhảy cao, hố nhảy xa, bóng đá/cầu lông/bóng rổ',
      location: 'Sân vận động / Sân thể dục trường học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : ''
    });
  });

  return list;
}

// =========================================================================
// 6. CÁC MÔN CÒN LẠI THCS: LỊCH SỬ & ĐỊA LÍ, TIN HỌC, CÔNG NGHỆ, GDCD, ÂM NHẠC, MĨ THUẬT, HĐTN, GDĐP
// =========================================================================
export function getGeneralSecondaryCurriculum(grade: string, subject: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 7;
  const s = subject.toLowerCase().trim();
  const list: RawSecondaryLesson[] = [];

  // 6.1. LỊCH SỬ VÀ ĐỊA LÍ THCS (3 tiết/tuần x 35 tuần = 105 tiết)
  if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('lich su')) {
    const lsdlTopics = [
      { t: 'Chủ đề: Tây Âu thời kì phong kiến', n: `Bài 1: Lịch sử - Quá trình hình thành xã hội phong kiến ở Tây Âu (Lớp ${g} - 3 tiết)` },
      { t: 'Chủ đề: Tây Âu thời kì phong kiến', n: `Bài 2: Các cuộc phát kiến địa lí lớn và sự nảy sinh chủ nghĩa tư bản ở Tây Âu (3 tiết)` },
      { t: 'Chủ đề: Tây Âu thời kì phong kiến', n: `Bài 3: Phong trào Văn hóa Phục hưng và Cải cách tôn giáo ở Tây Âu (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Âu', n: `Bài 4: Địa lí - Vị trí địa lí, phạm vi và đặc điểm tự nhiên Châu Âu (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Âu', n: `Bài 5: Đặc điểm dân cư, xã hội và Đô thị hóa ở Châu Âu (3 tiết)` },
      { t: 'Chủ đề: Liên minh Châu Âu (EU)', n: `Bài 6: Liên minh Châu Âu (EU) - Một thực thể kinh tế, chính trị lớn của thế giới (3 tiết)` },
      { t: 'Chủ đề: Lịch sử Châu Á thời phong kiến', n: `Bài 7: Lịch sử - Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX (Thời Đường, Tống, Minh, Thanh) (3 tiết)` },
      { t: 'Chủ đề: Lịch sử Châu Á thời phong kiến', n: `Bài 8: Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX (Vương triều Gúp-ta, Hồi giáo Đê-li, Mô-gôn) (3 tiết)` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lí Lớp ${g} (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Á', n: `Bài 9: Địa lí - Vị trí địa lí, đặc điểm tự nhiên và tài nguyên khoáng sản Châu Á (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Á', n: `Bài 10: Dân cư, tôn giáo và sự phân bố dân cư Châu Á (3 tiết)` },
      { t: 'Chủ đề: Đông Nam Á thời kì phong kiến', n: `Bài 11: Lịch sử - Các vương quốc phong kiến Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI (3 tiết)` },
      { t: 'Chủ đề: Việt Nam từ thế kỉ X đến thế kỉ XV', n: `Bài 12: Đất nước dưới thời Ngô - Đinh - Tiền Lê (Thế kỉ X) (3 tiết)` },
      { t: 'Chủ đề: Việt Nam từ thế kỉ X đến thế kỉ XV', n: `Bài 13: Đại Việt thời Lý (1009 - 1225): Chính trị, kinh tế, luật pháp và văn hóa (3 tiết)` },
      { t: 'Chủ đề: Việt Nam từ thế kỉ X đến thế kỉ XV', n: `Bài 14: Cuộc kháng chiến chống quân xâm lược Tống dưới thời Lý (Lý Thường Kiệt) (3 tiết)` },
      { t: 'Chủ đề: Bản đồ và phương pháp thể hiện', n: `Bài 15: Địa lí - Bản đồ và Phương pháp biểu hiện các đối tượng địa lí (3 tiết)` },
      { t: 'Chủ đề: Ôn tập Học kỳ 1', n: `Ôn tập tổng hợp Lịch sử thế giới và Địa lí các châu lục Học kỳ 1 (3 tiết)` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử và Địa lí Lớp ${g} (3 tiết)` },
      { t: 'Chủ đề: Đại Việt thời Trần', n: `Bài 16: Lịch sử - Đại Việt thời Trần (1226 - 1400): Xây dựng quân đội và củng cố chính quyền (3 tiết)` },
      { t: 'Chủ đề: Ba lần kháng chiến chống Mông - Nguyên', n: `Bài 17: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên thế kỉ XIII (3 tiết)` },
      { t: 'Chủ đề: Kinh tế, văn hóa thời Trần', n: `Bài 18: Sự phát triển kinh tế, văn hóa, giáo dục và khoa học thời Trần (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Phi', n: `Bài 19: Địa lí - Vị trí địa lí, tự nhiên và khí hậu Châu Phi (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên và dân cư Châu Phi', n: `Bài 20: Dân cư, xã hội và vấn đề khai thác tài nguyên thiên nhiên ở Châu Phi (3 tiết)` },
      { t: 'Chủ đề: Khởi nghĩa Lam Sơn & Triều Hậu Lê', n: `Bài 21: Lịch sử - Khởi nghĩa Lam Sơn và sự thành lập Triều Hậu Lê (1418 - 1427) (3 tiết)` },
      { t: 'Chủ đề: Đại Việt thời Lê sơ', n: `Bài 22: Đại Việt thời Lê sơ (1428 - 1527): Thời kỳ hoàng kim phát triển rực rỡ (3 tiết)` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lí Lớp ${g} (3 tiết)` },
      { t: 'Chủ đề: Tự nhiên Châu Mỹ', n: `Bài 23: Địa lí - Vị trí địa lí, địa hình và mạng lưới sông ngòi Châu Mỹ (3 tiết)` },
      { t: 'Chủ đề: Rừng Amazon và môi trường', n: `Bài 24: Khám phá Rừng nhiệt đới Amazon và vấn đề bảo vệ môi trường toàn cầu (3 tiết)` },
      { t: 'Chủ đề: Phong trào Tây Sơn', n: `Bài 25: Lịch sử - Phong trào Tây Sơn và Quang Trung đại phá 29 vạn quân Thanh (3 tiết)` },
      { t: 'Chủ đề: Châu Nam Cực và Châu Đại Dương', n: `Bài 26: Địa lí - Châu Nam Cực và Châu Đại Dương (3 tiết)` },
      { t: 'Chủ đề: Chủ quyền biển đảo Việt Nam', n: `Bài 27: Lịch sử - Bảo vệ chủ quyền biển, đảo Việt Nam qua các thời kỳ lịch sử (3 tiết)` },
      { t: 'Dự án STEM', n: `Dự án STEM Lịch sử Địa lí 7: "Mô hình Sa bàn Chiến thắng Bạch Đằng & Bản đồ Khám phá Thế giới" (3 tiết)` },
      { t: 'Chủ đề: Ôn tập cuối năm', n: `Bài 28: Hệ thống hóa toàn bộ kiến thức Lịch sử và Địa lí Lớp ${g} (3 tiết)` },
      { t: 'Chủ đề: Ôn tập cuối năm', n: `Bài 29: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Lịch sử và Địa lí ${g} (3 tiết)` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Lịch sử và Địa lí ${g} (3 tiết)` }
    ];

    lsdlTopics.forEach((item, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: `- Trình bày và phân tích được các tiến trình lịch sử, sự kiện vẻ vang, nhân vật anh hùng và đặc điểm tự nhiên, dân cư, kinh tế của ${item.n} (SGK Lịch sử và Địa lí ${g} Kết nối tri thức).\n- Khai thác thành thạo bản đồ, Atlas Địa lí, biểu đồ số liệu thống kê và tranh ảnh tư liệu lịch sử.\n- Khơi dậy niềm tự hào dân tộc, tình yêu quê hương, ý thức giữ gìn di sản và chủ quyền biển đảo thiêng liêng.`,
        equipment: 'Bản đồ lịch sử Việt Nam, Bản đồ các châu lục trên thế giới, Atlas Địa lí, tranh ảnh tư liệu',
        location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Dự án STEM Lịch sử Địa lí' : ''
      });
    });

    return list;
  }

  // 6.2. MÔN TIN HỌC THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('informatics')) {
    return getTinHocSecondaryCurriculum(String(g));
  }

  // 6.3. MÔN CÔNG NGHỆ THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('công nghệ') || s.includes('cong nghe') || s.includes('technology')) {
    const congNgheTopics = [
      { t: 'Chương I: Vẽ kỹ thuật', n: `Bài 1: Giới thiệu về ngành nghề kỹ thuật công nghệ và tiêu chuẩn an toàn lao động (Lớp ${g})` },
      { t: 'Chương I: Vẽ kỹ thuật', n: `Bài 2: Tiêu chuẩn bản vẽ kỹ thuật: Khổ giấy, tỉ lệ, nét vẽ và ghi kích thước` },
      { t: 'Chương I: Vẽ kỹ thuật', n: `Bài 3: Hình chiếu vuông góc và phương pháp chiếu ba hình chiếu` },
      { t: 'Chương I: Vẽ kỹ thuật', n: `Bài 4: Bản vẽ chi tiết và cách đọc bản vẽ chi tiết đơn giản` },
      { t: 'Chương I: Vẽ kỹ thuật', n: `Bài 5: Bản vẽ lắp và bản vẽ nhà (Mặt bằng, mặt đứng, mặt cắt)` },
      { t: 'Chương II: Gia công cơ khí', n: `Bài 6: Vật liệu cơ khí: Kim loại đen, kim loại màu và phi kim loại` },
      { t: 'Chương II: Gia công cơ khí', n: `Bài 7: Dụng cụ gia công cơ khí cầm tay: Thước lá, đục, dũa, cưa kim loại` },
      { t: 'Chương II: Gia công cơ khí', n: `Bài 8: Thực hành dũa và cưa kim loại an toàn đúng quy trình` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp ${g}` },
      { t: 'Chương II: Cơ khí truyền động', n: `Bài 9: Chi tiết máy và mối ghép (Mối ghép cố định và mối ghép động)` },
      { t: 'Chương II: Cơ khí truyền động', n: `Bài 10: Truyền và biến đổi chuyển động: Bộ truyền đai, xích, bánh răng` },
      { t: 'Chương III: Kỹ thuật điện', n: `Bài 11: Cấu tạo và nguyên lí làm việc của động cơ điện và quạt điện` },
      { t: 'Chương III: Kỹ thuật điện', n: `Bài 12: Đồ dùng loại điện - nhiệt: Bàn là điện, nồi cơm điện thông minh` },
      { t: 'Chương III: Kỹ thuật điện', n: `Bài 13: Đồ dùng loại điện - quang: Đèn sợi đốt, đèn huỳnh quang, đèn LED tiết kiệm điện` },
      { t: 'Chương III: Kỹ thuật điện', n: `Bài 14: Sử dụng năng lượng tiết kiệm và hiệu quả trong gia đình` },
      { t: 'Chương III: Kỹ thuật điện', n: `Bài 15: Sơ đồ mạch điện và các ký hiệu quy ước trong mạch điện gia đình` },
      { t: 'Chương III: Kỹ thuật điện', n: `Ôn tập tổng hợp kiến thức Vẽ kỹ thuật và Cơ khí - Điện Học kỳ 1 Lớp ${g}` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Công nghệ ${g}` },
      { t: 'Chương III: Mạng điện trong nhà', n: `Bài 16: Mạng điện trong nhà: Cấu tạo, đặc điểm và các phần tử bảo vệ (Aptomat, cầu chì)` },
      { t: 'Chương III: Mạng điện trong nhà', n: `Bài 17: Thiết bị đóng cắt và lấy điện: Công tắc, ổ cắm, phích cắm điện` },
      { t: 'Chương III: Mạng điện trong nhà', n: `Bài 18: Thực hành lắp đặt mạch điện chiếu sáng gia đình có cầu chì bảo vệ` },
      { t: 'Chương III: Mạng điện trong nhà', n: `Bài 19: An toàn điện và các biện pháp sơ cứu người bị điện giật` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 20: Giới thiệu về Nông nghiệp công nghệ cao: Trồng trọt và Chăn nuôi thông minh` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 21: Đất trồng và các biện pháp cải tạo, bón phân an toàn sinh học` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 22: Kỹ thuật trồng cây trong nhà màng, nhà kính và hệ thống tưới tự động` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp ${g}` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 23: Phòng trừ sâu bệnh hại cây trồng bằng phương pháp sinh học VietGAP` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 24: Kỹ thuật chăn nuôi gia súc, gia cầm an toàn sinh học` },
      { t: 'Chương IV: Nông nghiệp công nghệ cao', n: `Bài 25: Chế biến và bảo quản nông sản, thực phẩm tại gia đình` },
      { t: 'Dự án STEM', n: `Bài 26: Dự án STEM Công nghệ: "Chế tạo Mô hình Hệ thống Tưới Tự động IoT & Đèn Ngủ Thông minh" (Tiết 1)` },
      { t: 'Dự án STEM', n: `Bài 27: Dự án STEM Công nghệ: Lắp ráp hoàn thiện sản phẩm và thử nghiệm (Tiết 2)` },
      { t: 'Dự án STEM', n: `Bài 28: Thuyết minh và trưng bày sản phẩm công nghệ trước hội đồng lớp` },
      { t: 'Chương V: Định hướng nghề nghiệp', n: `Bài 29: Định hướng nghề nghiệp trong lĩnh vực Kỹ thuật - Công nghệ tương lai` },
      { t: 'Chương V: Ôn tập cuối năm', n: `Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm môn Công nghệ ${g}` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Công nghệ ${g}` }
    ];

    congNgheTopics.forEach((item, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: `- Nắm vững nguyên lý bản vẽ kỹ thuật, an toàn điện, kỹ thuật cơ khí và nông nghiệp công nghệ cao của ${item.n} (SGK Công nghệ ${g} Kết nối tri thức).\n- Rèn luyện kỹ năng thực hành chế tạo, lắp ráp mạch điện và vận dụng quy trình thiết kế kỹ thuật an toàn.\n- Bồi dưỡng niềm đam mê sáng tạo công nghệ và định hướng nghề nghiệp trong khối ngành kỹ thuật.`,
        equipment: 'Bộ dụng cụ thực hành cơ khí, mạch điện thực hành, Aptomat, bóng đèn LED, mô hình STEM',
        location: 'Phòng học bộ môn Công nghệ / Xưởng thực hành STEM',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 26 ? 'Dự án STEM Công nghệ' : ''
      });
    });

    return list;
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
      { t: 'Chủ đề 6: Quyền và nghĩa vụ công dân', n: `Bài 15: Trách nhiệm của công dân đối với cộng đồng và xã hội` },
      { t: 'Chủ đề 6: Ôn tập Học kỳ 1', n: `Ôn tập tổng hợp kiến thức Đạo đức và Kỹ năng sống Học kỳ 1 Lớp ${g}` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn GDCD ${g}` },
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
      { t: 'Chủ đề 10: Tham gia quản lý nhà nước', n: `Bài 27: Trách nhiệm của học sinh trong việc chấp hành và bảo vệ pháp luật` },
      { t: 'Dự án GDCD', n: `Dự án GDCD: "Phiên tòa Giả định Tuyên truyền Pháp luật Học đường & Phòng chống Bạo lực"` },
      { t: 'Chủ đề: Ôn tập cuối năm', n: `Bài 28: Hệ thống hóa toàn bộ kiến thức Đạo đức và Pháp luật Lớp ${g}` },
      { t: 'Chủ đề: Ôn tập cuối năm', n: `Bài 29: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm môn GDCD ${g}` },
      { t: 'Đánh giá định kỳ', n: `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn GDCD ${g}` }
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
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 32 ? 'Phiên tòa Giả định' : ''
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
      `Chủ đề 4: Giai điệu quê hương - Góc âm nhạc sáng tạo: Biểu diễn tốp ca`,
      `Ôn tập tổng hợp kiến thức Âm nhạc Học kỳ 1 Lớp ${g}`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Âm nhạc ${g}`,
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
      `Chủ đề 8: Giai điệu mùa hè - Dàn dựng tiết mục tốp ca kết hợp múa phụ họa`,
      `Dự án Âm nhạc: Sáng tạo ban nhạc học đường & Hòa tấu nhạc cụ (Tiết 1)`,
      `Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp ${g}`,
      `Ôn tập tổng hợp toàn diện các bài hát, bài đọc nhạc và nhạc cụ cả năm`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Âm nhạc ${g}`
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
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Dự án Âm nhạc học đường' : ''
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
      `Chủ đề 5: Nghệ thuật Điêu khắc - Trưng bày tác phẩm tượng dáng người mini`,
      `Ôn tập tổng hợp kiến thức Hội họa, Đồ họa và Điêu khắc Học kỳ 1 Lớp ${g}`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 & Triển lãm Mĩ thuật HK1 môn Mĩ thuật ${g}`,
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
      `Dự án Mĩ thuật: Thiết kế Ngôi nhà Ước mơ & Mô hình Không gian Xanh 3D (Tiết 1)`,
      `Dự án Mĩ thuật: Hoàn thiện mô hình kiến trúc xanh thông minh (Tiết 2)`,
      `Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp ${g}`,
      `Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 & Triển lãm Tổng kết Mĩ thuật ${g} toàn trường`
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
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Dự án Không gian Xanh 3D' : ''
      });
    });

    return list;
  }

  // 6.7. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THCS (3 tiết/tuần x 35 tuần = 105 tiết)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hướng nghiệp')) {
    const hdtnTopics = [
      `Chủ đề 1: Em với nhà trường - Bài 1: Phát triển mối quan hệ hòa đồng với thầy cô và các bạn (Lớp ${g} - 3 tiết)`,
      `Chủ đề 1: Em với nhà trường - Bài 2: Tự hào truyền thống trường em và xây dựng nếp sống văn minh (3 tiết)`,
      `Chủ đề 2: Khám phá bản thân - Bài 1: Nhận diện điểm mạnh, điểm yếu và sở thích cá nhân (3 tiết)`,
      `Chủ đề 2: Khám phá bản thân - Bài 2: Kỹ năng kiểm soát cảm xúc và ứng phó với căng thẳng học đường (3 tiết)`,
      `Chủ đề 3: Trách nhiệm với bản thân - Bài 1: Quản lý thời gian và lập thời gian biểu khoa học (3 tiết)`,
      `Chủ đề 3: Trách nhiệm với bản thân - Bài 2: Chi tiêu hợp lý và thói quen tiết kiệm tài chính cá nhân (3 tiết)`,
      `Chủ đề 4: Rèn luyện bản thân - Bài 1: Kiên trì vượt qua khó khăn và tự chủ trong cuộc sống (3 tiết)`,
      `Chủ đề 4: Rèn luyện bản thân - Bài 2: Ứng xử văn hóa trên không gian mạng và phòng tránh lừa đảo (3 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp Lớp ${g} (3 tiết)`,
      `Chủ đề 5: Em với gia đình - Bài 1: Thể hiện tình yêu thương, lòng biết ơn và chăm sóc người thân (3 tiết)`,
      `Chủ đề 5: Em với gia đình - Bài 2: Kỹ năng lắng nghe và giải quyết mâu thuẫn trong gia đình (3 tiết)`,
      `Chủ đề 5: Em với gia đình - Bài 3: Tham gia lao động và chia sẻ việc nhà với cha mẹ (3 tiết)`,
      `Chủ đề 6: Em với cộng đồng - Bài 1: Giao tiếp văn minh, lịch sự nơi công cộng (3 tiết)`,
      `Chủ đề 6: Em với cộng đồng - Bài 2: Tham gia các hoạt động thiện nguyện vì cộng đồng (3 tiết)`,
      `Chủ đề 6: Em với cộng đồng - Bài 3: Tuyên truyền phòng chống tệ nạn xã hội và bạo lực học đường (3 tiết)`,
      `Chủ đề 7: Em với thiên nhiên - Bài 1: Khám phá cảnh quan thiên nhiên và danh lam thắng cảnh quê hương (3 tiết)`,
      `Ôn tập và báo cáo hồ sơ trải nghiệm sáng tạo cá nhân Học kỳ 1 Lớp ${g} (3 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Hoạt động trải nghiệm, hướng nghiệp ${g} (3 tiết)`,
      `Chủ đề 7: Em với thiên nhiên - Bài 2: Thực hiện các hành động bảo vệ môi trường và giảm thiểu rác thải nhựa (3 tiết)`,
      `Chủ đề 7: Em với thiên nhiên - Bài 3: Phòng chống và ứng phó với thiên tai, biến đổi khí hậu (3 tiết)`,
      `Chủ đề 8: Khám phá thế giới nghề nghiệp - Bài 1: Tìm hiểu các nghề truyền thống tại địa phương (3 tiết)`,
      `Chủ đề 8: Khám phá nghề nghiệp - Bài 2: Yêu cầu về năng lực, phẩm chất và an toàn lao động của các ngành nghề (3 tiết)`,
      `Chủ đề 8: Khám phá nghề nghiệp - Bài 3: Gặp gỡ và giao lưu với các nghệ nhân, chuyên gia nghề nghiệp (3 tiết)`,
      `Chủ đề 8: Khám phá nghề nghiệp - Bài 4: Trải nghiệm thử làm một công việc nghề nghiệp yêu thích (3 tiết)`,
      `Chủ đề 9: Định hướng nghề nghiệp tương lai - Bài 1: Đánh giá sự phù hợp của bản thân với nghề định chọn (3 tiết)`,
      `Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp ${g} (3 tiết)`,
      `Chủ đề 9: Định hướng nghề nghiệp - Bài 2: Xây dựng kế hoạch học tập và rèn luyện hướng nghiệp (3 tiết)`,
      `Chủ đề 9: Định hướng nghề nghiệp - Bài 3: Tìm hiểu các trường THPT, trường nghề và cơ hội học tập (3 tiết)`,
      `Dự án Trải nghiệm: "Ngày hội Hướng nghiệp & Gian hàng Khởi nghiệp Học sinh THCS" (Tiết 1 - 3 tiết)`,
      `Dự án Trải nghiệm: Tổ chức hội chợ trưng bày sản phẩm khởi nghiệp và định hướng nghề nghiệp (Tiết 2 - 3 tiết)`,
      `Diễn đàn Học đường: "Tuổi trẻ THCS - Sống cống hiến, Khát vọng tương lai" (3 tiết)`,
      `Báo cáo và đánh giá kết quả tham gia hoạt động phục vụ cộng đồng cả năm (3 tiết)`,
      `Tổng kết và hoàn thiện Portfolio hồ sơ năng lực trải nghiệm học sinh (3 tiết)`,
      `Ôn tập toàn diện chuẩn bị đánh giá cuối năm Hoạt động trải nghiệm, hướng nghiệp ${g} (3 tiết)`,
      `Kiểm tra, đánh giá cuối Học kỳ 2 & Ngày hội Tổng kết Hoạt động trải nghiệm cả năm (3 tiết)`
    ];

    hdtnTopics.forEach((name, idx) => {
      const w = idx + 1;
      if (w > 35) return;
      list.push({
        week: w,
        topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
        name: name,
        periods: 3,
        yccd: `- Thực hiện hiệu quả các hoạt động rèn luyện bản thân, gắn kết gia đình, phục vụ cộng đồng và bảo vệ môi trường của ${name} (SGK HĐTN&HN ${g} Kết nối tri thức).\n- Khám phá đặc điểm nghề nghiệp địa phương, tự đánh giá năng lực sở trường và xây dựng kế hoạch hướng nghiệp rõ ràng.\n- Phát triển phẩm chất trách nhiệm, tinh thần tự chủ, năng lực giao tiếp và thích ứng xã hội.`,
        equipment: 'Máy chiếu, video tư liệu trải nghiệm, phiếu bài tập hướng nghiệp, cẩm nang thị trường lao động',
        location: 'Lớp học / Hội trường trường / Sân trường',
        notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 29 ? 'Ngày hội Hướng nghiệp' : ''
      });
    });

    return list;
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
    `Chủ đề 4: Kinh tế địa phương - Tiềm năng và định hướng phát triển ngành Dịch vụ - Du lịch`,
    `Ôn tập tổng hợp kiến thức Lịch sử, Địa lí, Văn hóa địa phương Học kỳ 1 Lớp ${g}`,
    `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Giáo dục địa phương ${g}`,
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
    `Dự án GDĐP: Hoàn thiện sản phẩm truyền thông số quảng bá di tích quê hương (Tiết 2)`,
    `Báo cáo và thuyết trình dự án Tìm hiểu Giáo dục địa phương trước hội đồng lớp`,
    `Hệ thống hóa toàn bộ kiến thức Giáo dục địa phương Lớp ${g}`,
    `Ôn tập toàn diện chuẩn bị kiểm tra cuối năm môn Giáo dục địa phương ${g}`,
    `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Giáo dục địa phương ${g}`
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
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 30 ? 'Dự án Cẩm nang Du lịch' : ''
    });
  });

  return list;
}

// =========================================================================
// MASTER RESOLVER FOR SECONDARY CURRICULUM (LỚP 6 - 9)
// =========================================================================
export function buildSecondaryCurriculum(subject: string, grade: string, schoolType: SchoolType): CurriculumItem[] {
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
      ? { code: item.nlsCode, requirement: '' }
      : isBlankTest
      ? { code: '', requirement: '' }
      : isEnglish
      ? getNlsCodeForEnglishLesson(g, schoolType, lessonCtx)
      : getNlsCodeForSubjectLesson(g, schoolType, lessonCtx);

    const ai = item.aiCode !== undefined
      ? { code: item.aiCode, requirement: '' }
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
