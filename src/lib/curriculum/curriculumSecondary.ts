import { CurriculumItem, SchoolType, ConfigFormData } from '../../types';
import { getNlsCodeForSubjectLesson, lookupNlsRequirement } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson, lookupAiRequirement } from '../constants/aiGuides';
import { getNlsCodeForEnglishLesson } from '../constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson } from '../constants/aiGuidesEn';
import { getTechnologySecondaryCurriculum } from './curriculumSecondaryTechnology';
import { getKhtnSecondaryCurriculum } from './curriculumSecondaryScience';
import { getGdcdSecondaryCurriculum } from './curriculumSecondaryGdcd';

export interface RawSecondaryLesson {
  week: number | string;
  topic: string;
  name: string;
  periods: number;
  yccd: string;
  equipment: string;
  location: string;
  nlsCode?: string;
  aiCode?: string;
  digitalCompetency?: string;
  dc?: string;
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
      return `- Biết, nhận biết được khái niệm tập hợp, các phần tử thuộc/không thuộc tập hợp và cách ghi số tự nhiên trong hệ thập phân, số La Mã.\n- Trình bày được và hiểu rõ các tính chất cơ bản của tập hợp số tự nhiên.\n- Vận dụng được các phép tính cộng, trừ, nhân, chia để giải quyết các bài toán tính toán và tình huống thực tế.`;
    }
    if (name.includes('Lũy thừa') || name.includes('lũy thừa') || name.includes('Thứ tự thực hiện')) {
      return `- Biết, nhận biết được định nghĩa lũy thừa với số mũ tự nhiên và thứ tự thực hiện các phép tính.\n- Trình bày được và hiểu rõ quy tắc nhân, chia hai lũy thừa cùng cơ số và quy tắc dấu ngoặc.\n- Vận dụng được quy tắc thứ tự phép tính vào tính giá trị biểu thức và giải bài toán tìm x.`;
    }
    if (name.includes('chia hết') || name.includes('Số nguyên tố') || name.includes('Ước chung') || name.includes('Bội chung')) {
      return `- Biết, nhận biết được dấu hiệu chia hết cho 2, 3, 5, 9, số nguyên tố và hợp số.\n- Trình bày được và hiểu rõ cách phân tích một số ra thừa số nguyên tố, quy tắc tìm ƯCLN và BCNN.\n- Vận dụng được ƯCLN và BCNN vào giải các bài toán thực tiễn về chia nhóm, chia phần và chu kì.`;
    }
    if (name.includes('số nguyên') || name.includes('Số nguyên') || name.includes('dấu ngoặc')) {
      return `- Biết, nhận biết được tập hợp số nguyên Z, số đối và biểu diễn số nguyên trên trục số.\n- Trình bày được và hiểu rõ quy tắc cộng, trừ, nhân, chia số nguyên cùng dấu, khác dấu và quy tắc dấu ngoặc.\n- Vận dụng được các phép tính số nguyên vào giải bài toán thực tế về độ cao, nhiệt độ, tài chính.`;
    }
    if (name.includes('Hình tam giác đều') || name.includes('hình thoi') || name.includes('hình chữ nhật') || name.includes('hình bình hành') || name.includes('hình thang cân')) {
      return `- Biết, nhận biết được đặc điểm cạnh, góc, đường chéo của các hình phẳng thực tiễn.\n- Trình bày được và hiểu rõ công thức tính chu vi, diện tích hình chữ nhật, hình bình hành, hình thoi, hình thang cân.\n- Vận dụng được công thức hình học vào tính toán diện tích khuôn viên, lát nền và vẽ hình bằng thước, compa.`;
    }
    if (name.includes('đối xứng') || name.includes('Đối xứng')) {
      return `- Biết, nhận biết được hình có trục đối xứng và hình có tâm đối xứng trong hình học và tự nhiên.\n- Trình bày được và hiểu rõ tính chất đối xứng trong kiến trúc, nghệ thuật và đời sống hàng ngày.\n- Vận dụng được vào vẽ hình đối xứng qua trục, qua tâm và cắt gấp hình trang trí.`;
    }
    if (name.includes('Phân số') || name.includes('phân số') || name.includes('Hỗn số')) {
      return `- Biết, nhận biết được khái niệm phân số, phân số bằng nhau, hỗn số dương và số đối, số nghịch đảo.\n- Trình bày được và hiểu rõ quy tắc rút gọn, quy đồng mẫu và thực hiện 4 phép tính phân số.\n- Vận dụng được hai bài toán cơ bản về phân số vào giải quyết các bài toán đo lường, tỉ lệ thực tiễn.`;
    }
    if (name.includes('Số thập phân') || name.includes('số thập phân') || name.includes('ước lượng') || name.includes('tỉ số phần trăm')) {
      return `- Biết, nhận biết được số thập phân âm, số thập phân dương và tỉ số phần trăm.\n- Trình bày được và hiểu rõ quy tắc làm tròn số, ước lượng kết quả và tính tỉ số phần trăm.\n- Vận dụng được vào giải bài toán thực tế về lãi suất, giảm giá khuyến mãi và tính phần trăm thành phần.`;
    }
    if (name.includes('Số hữu tỉ') || name.includes('số hữu tỉ') || name.includes('chuyển vế')) {
      return `- Biết, nhận biết được tập hợp số hữu tỉ Q, số đối của số hữu tỉ và biểu diễn trên trục số.\n- Trình bày được và hiểu rõ các phép tính số hữu tỉ, quy tắc chuyển vế và quy tắc dấu ngoặc.\n- Vận dụng được quy tắc chuyển vế và tính chất phép tính vào giải phương trình tìm x và tính nhanh.`;
    }
    if (name.includes('Số thực') || name.includes('Căn bậc hai') || name.includes('vô tỉ') || name.includes('tuần hoàn')) {
      return `- Biết, nhận biết được số vô tỉ, căn bậc hai số học, số thập phân vô hạn tuần hoàn và tập hợp số thực R.\n- Trình bày được và hiểu rõ giá trị tuyệt đối của một số thực và quy tắc làm tròn số thực.\n- Vận dụng được máy tính cầm tay tính căn bậc hai và giải quyết các bài toán đo lường số thực.`;
    }
    if (name.includes('Góc') || name.includes('đường thẳng song song') || name.includes('Tiên đề Euclid') || name.includes('Định lí')) {
      return `- Biết, nhận biết được hai góc kề bù, đối đỉnh, so le trong, đồng vị và tia phân giác của một góc.\n- Trình bày được và hiểu rõ dấu hiệu nhận biết hai đường thẳng song song, tiên đề Euclid và cấu trúc của một định lí.\n- Vận dụng được định lí và dấu hiệu song song vào chứng minh hình học và tính số đo góc.`;
    }
    if (name.includes('Tam giác bằng nhau') || name.includes('tam giác cân') || name.includes('tam giác vuông')) {
      return `- Biết, nhận biết được các yếu tố cạnh, góc tương ứng trong hai tam giác bằng nhau và định nghĩa tam giác cân.\n- Trình bày được và hiểu rõ 3 trường hợp bằng nhau của tam giác (c-c-c, c-g-c, g-c-g) và các trường hợp bằng nhau của tam giác vuông.\n- Vận dụng được các trường hợp bằng nhau để chứng minh đoạn thẳng bằng nhau, góc bằng nhau và tính khoảng cách.`;
    }
    if (name.includes('Tỉ lệ thức') || name.includes('tỉ số bằng nhau') || name.includes('tỉ lệ thuận') || name.includes('tỉ lệ nghịch')) {
      return `- Biết, nhận biết được định nghĩa tỉ lệ thức, dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận và tỉ lệ nghịch.\n- Trình bày được và hiểu rõ tính chất cơ bản của tỉ lệ thức và tính chất dãy tỉ số bằng nhau.\n- Vận dụng được tính chất dãy tỉ số bằng nhau để giải bài toán chia phần tỉ lệ và giải toán thực tiễn.`;
    }
    if (name.includes('Đơn thức') || name.includes('Đa thức') || name.includes('đa thức')) {
      return `- Biết, nhận biết được đơn thức, đa thức nhiều biến, bậc và các hệ số của đa thức.\n- Trình bày được và hiểu rõ quy tắc cộng, trừ đa thức và nhân đơn thức với đa thức.\n- Vận dụng được vào thu gọn đa thức, tính giá trị biểu thức và biểu diễn đại số các đại lượng hình học.`;
    }
    if (name.includes('Hằng đẳng thức') || name.includes('hằng đẳng thức') || name.includes('nhân tử')) {
      return `- Biết, nhận biết được dạng tổng quát của 7 hằng đẳng thức đáng nhớ.\n- Trình bày được và hiểu rõ các phương pháp phân tích đa thức thành nhân tử (đặt nhân tử chung, dùng HĐT, nhóm hạng tử).\n- Vận dụng được hằng đẳng thức vào tính nhanh, rút gọn biểu thức và giải phương trình tích.`;
    }
    if (name.includes('Tứ giác') || name.includes('Hình thang cân') || name.includes('Hình bình hành') || name.includes('Hình chữ nhật') || name.includes('Hình thoi') || name.includes('Hình vuông')) {
      return `- Biết, nhận biết được định nghĩa và các dấu hiệu nhận biết của hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông.\n- Trình bày được và hiểu rõ định lí tổng các góc trong tứ giác và các tính chất hình học đặc thù.\n- Vận dụng được tính chất và dấu hiệu nhận biết để chứng minh tứ giác đặc biệt và tính toán độ dài, góc.`;
    }
    if (name.includes('Thalès') || name.includes('Đường trung bình') || name.includes('phân giác của tam giác')) {
      return `- Biết, nhận biết được định lí Thalès thuận, đảo, hệ quả và định nghĩa đường trung bình, đường phân giác.\n- Trình bày được và hiểu rõ tỉ lệ đoạn thẳng tỉ lệ trên hai cạnh tam giác và tính chất đường phân giác.\n- Vận dụng được định lí Thalès vào tính độ dài đoạn thẳng và đo đạc chiều cao, khoảng cách ngoài thực địa.`;
    }
    if (name.includes('Phân thức') || name.includes('phân thức đại số')) {
      return `- Biết, nhận biết được định nghĩa phân thức đại số, điều kiện xác định và phân thức bằng nhau.\n- Trình bày được và hiểu rõ tính chất cơ bản để rút gọn, quy đồng mẫu và thực hiện 4 phép tính phân thức.\n- Vận dụng được phép toán phân thức vào rút gọn biểu thức đại số và giải các bài toán thực tiễn.`;
    }
    if (name.includes('Phương trình bậc nhất') || name.includes('Giải bài toán bằng cách lập phương trình')) {
      return `- Biết, nhận biết được dạng tổng quát của phương trình bậc nhất một ẩn ax + b = 0 (a ≠ 0).\n- Trình bày được và hiểu rõ quy trình các bước giải bài toán bằng cách lập phương trình.\n- Vận dụng được phương pháp lập phương trình giải thành thạo bài toán chuyển động, năng suất, quan hệ số.`;
    }
    if (name.includes('Hàm số') || name.includes('đồ thị') || name.includes('Hệ số góc') || name.includes('y = ax + b')) {
      return `- Biết, nhận biết được khái niệm hàm số, mặt phẳng tọa độ Oxy và dạng đồ thị hàm số bậc nhất y = ax + b.\n- Trình bày được và hiểu rõ ý nghĩa của hệ số góc a, vị trí tương đối giữa hai đường thẳng (song song, cắt nhau, trùng nhau).\n- Vận dụng được vào vẽ đồ thị hàm số và giải quyết các bài toán kinh tế, chuyển động thực tiễn.`;
    }
    if (name.includes('đồng dạng') || name.includes('Pythagore')) {
      return `- Biết, nhận biết được định nghĩa hai tam giác đồng dạng và định lí Pythagore trong tam giác vuông.\n- Trình bày được và hiểu rõ 3 trường hợp đồng dạng của tam giác (c-c-c, c-g-c, g-g) và các trường hợp đồng dạng tam giác vuông.\n- Vận dụng được tam giác đồng dạng và định lí Pythagore vào tính độ dài, chứng minh hình học và giải toán thực tiễn.`;
    }
    if (name.includes('chóp tam giác đều') || name.includes('chóp tứ giác đều') || name.includes('lăng trụ đứng') || name.includes('hình hộp chữ nhật') || name.includes('hình trụ') || name.includes('hình nón') || name.includes('hình cầu')) {
      return `- Biết, nhận biết được các yếu tố đỉnh, cạnh bên, mặt đáy, chiều cao của hình khối không gian thực tế.\n- Trình bày được và hiểu rõ công thức tính diện tích xung quanh, diện tích toàn phần và thể tích các hình khối.\n- Vận dụng được công thức hình không gian vào giải các bài toán đo lường thể tích, bao bì, kiến trúc thực tế.`;
    }
    if (name.includes('hệ phương trình') || name.includes('Hệ phương trình') || name.includes('Bất phương trình')) {
      return `- Biết, nhận biết được hệ hai phương trình bậc nhất hai ẩn và bất phương trình bậc nhất một ẩn.\n- Trình bày được và hiểu rõ phương pháp thế, phương pháp cộng đại số và quy tắc biểu diễn tập nghiệm trên trục số.\n- Vận dụng được vào giải hệ phương trình và giải bài toán thực tế bằng cách lập hệ phương trình.`;
    }
    if (name.includes('Căn bậc hai') || name.includes('căn thức') || name.includes('Căn bậc ba')) {
      return `- Biết, nhận biết được điều kiện xác định của căn thức bậc hai, căn bậc ba và hằng đẳng thức √(A²) = |A|.\n- Trình bày được và hiểu rõ quy tắc khai phương tích, thương, đưa thừa số vào/ra dấu căn và trục căn thức ở mẫu.\n- Vận dụng được các phép biến đổi căn thức vào rút gọn biểu thức chứa căn bậc hai tổng hợp.`;
    }
    if (name.includes('Hệ thức lượng') || name.includes('lượng giác') || name.includes('tam giác vuông')) {
      return `- Biết, nhận biết được tỉ số lượng giác (sin, cos, tan, cot) của góc nhọn và các hệ thức cạnh - góc trong tam giác vuông.\n- Trình bày được và hiểu rõ mối liên hệ lượng giác giữa hai góc phụ nhau và bảng tỉ số lượng giác góc đặc biệt.\n- Vận dụng được hệ thức lượng và tỉ số lượng giác để giải tam giác vuông và đo khoảng cách ngoài thực tế.`;
    }
    if (name.includes('Đường tròn') || name.includes('tiếp tuyến') || name.includes('Góc nội tiếp') || name.includes('Tứ giác nội tiếp')) {
      return `- Biết, nhận biết được các yếu tố đường kính, dây cung, tiếp tuyến, góc ở tâm, góc nội tiếp và tứ giác nội tiếp.\n- Trình bày được và hiểu rõ tính chất đối xứng, định lí góc nội tiếp và điều kiện để một tứ giác nội tiếp đường tròn.\n- Vận dụng được tính chất đường tròn để chứng minh tứ giác nội tiếp và tính độ dài cung tròn, diện tích hình quạt.`;
    }
    if (name.includes('Phương trình bậc hai') || name.includes('Parabol') || name.includes('Viète') || name.includes('Vi-ét')) {
      return `- Biết, nhận biết được dạng phương trình bậc hai ax² + bx + c = 0 (a ≠ 0), biệt thức Δ và đồ thị Parabol y = ax².\n- Trình bày được và hiểu rõ công thức nghiệm của phương trình bậc hai và định lí Viète về tổng, tích hai nghiệm.\n- Vận dụng được định lí Viète nhẩm nghiệm, tìm hai số và giải bài toán thực tế bằng cách lập phương trình bậc hai.`;
    }
    if (name.includes('tần số') || name.includes('Tần số') || name.includes('ghép nhóm') || name.includes('xác suất') || name.includes('Xác suất') || name.includes('biểu đồ')) {
      return `- Biết, nhận biết được bảng tần số, tần số tương đối, bảng ghép nhóm và các mô hình xác suất thực nghiệm.\n- Trình bày được và hiểu rõ cách chọn dạng biểu đồ thích hợp và công thức tính xác suất của biến cố.\n- Vận dụng được vào phân tích dữ liệu thống kê, tính xác suất thực nghiệm và đưa ra kết luận thực tiễn.`;
    }
    if (name.includes('GeoGebra') || name.includes('Excel') || name.includes('máy tính cầm tay')) {
      return `- Biết, nhận biết được các công cụ vẽ hình, lập bảng số liệu trong GeoGebra, Excel và máy tính Casio.\n- Trình bày được và hiểu rõ các lệnh mô phỏng hình học, vẽ đồ thị hàm số và các hàm thống kê cơ bản.\n- Vận dụng được phần mềm GeoGebra và Excel vào mô phỏng bài toán thực tế và kiểm tra kết quả tính toán.`;
    }
    return `- Biết, nhận biết được các khái niệm, định nghĩa và công thức trọng tâm của bài học: "${name}".\n- Trình bày được và hiểu rõ bản chất toán học, các quy tắc và phương pháp biến đổi đại số / hình học.\n- Vận dụng được kiến thức bài học vào giải toán, phát triển tư duy logic và giải quyết vấn đề thực tiễn.`;
  }

  // 2. NGỮ VĂN THCS (6 - 9)
  if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    if (name.includes('Đọc:') || name.includes('Truyện') || name.includes('Thơ') || name.includes('Kịch') || name.includes('Văn bản')) {
      return `- Biết, nhận biết được các đặc trưng thể loại (đề tài, cốt truyện, nhân vật, ngôi kể, chi tiết nghệ thuật, hình ảnh, vần nhịp, tu từ) trong: "${name}".\n- Trình bày được và hiểu sâu sắc chủ đề, thông điệp nhân văn và tình cảm tác giả gửi gắm qua tác phẩm.\n- Vận dụng được năng lực cảm thụ văn học để liên hệ bản thân, bồi dưỡng tâm hồn nhân ái và ý thức trách nhiệm.`;
    }
    if (name.includes('Viết:') || name.includes('Tập làm văn')) {
      return `- Biết, nhận biết được yêu cầu thể loại và quy trình các bước tạo lập văn bản (chuẩn bị, tìm ý, lập dàn ý, viết bài, chỉnh sửa) cho kiểu bài: "${name}".\n- Trình bày được và hiểu rõ cách triển khai luận điểm sáng rõ, luận cứ xác thực và liên kết đoạn văn chặt chẽ.\n- Vận dụng được kỹ năng viết để hoàn thành bài văn đúng chuẩn mực, giàu cảm xúc và sức thuyết phục.`;
    }
    if (name.includes('Thực hành tiếng Việt')) {
      return `- Biết, nhận biết được các đơn vị ngữ pháp, từ vựng, thành ngữ và biện pháp tu từ trong bài: "${name}".\n- Trình bày được và hiểu rõ tác dụng nghệ thuật của các hiện tượng ngôn ngữ tiếng Việt trong ngữ cảnh.\n- Vận dụng được kiến thức tiếng Việt vào đọc hiểu văn bản và tạo lập câu văn, đoạn văn chuẩn xác, biểu cảm.`;
    }
    if (name.includes('Nói và nghe')) {
      return `- Biết, nhận biết được mục đích giao tiếp, đối tượng người nghe và các bước chuẩn bị cho bài nói, thuyết trình.\n- Trình bày được ý kiến cá nhân mạch lạc, tự tin, tôn trọng người nghe và phản hồi lịch sự.\n- Vận dụng được kỹ năng lắng nghe tích cực, tranh biện có văn hóa và giải quyết vấn đề qua đối thoại.`;
    }
    return `- Biết, nhận biết được các yếu tố nội dung và hình thức nghệ thuật của bài học: "${name}".\n- Trình bày được và hiểu sâu sắc thông điệp, giá trị nhân văn của tác phẩm / bài học.\n- Vận dụng được năng lực ngôn ngữ và cảm thụ thẩm mỹ vào học tập và giao tiếp hàng ngày.`;
  }

  // 3. TIẾNG ANH THCS (6 - 9) - GLOBAL SUCCESS (7 TIẾT/UNIT)
  if (s.includes('tiếng anh') || s.includes('english') || s.includes('ngoại ngữ')) {
    if (name.includes('Getting Started')) {
      return `- Biết và nhận diện được từ vựng, ngữ cảnh giao tiếp mở đầu của chủ đề bài học qua hội thoại mẫu.\n- Trình bày được và hiểu các cụm từ, câu hỏi - đáp cơ bản về chủ đề unit.\n- Vận dụng được cấu trúc câu vào thực hành hội thoại đôi và giao tiếp tự tin.`;
    }
    if (name.includes('A Closer Look 1')) {
      return `- Biết và nhận diện được cách phát âm chuẩn các âm/trọng âm mục tiêu và nhóm từ vựng cốt lõi.\n- Trình bày được và hiểu rõ ngữ nghĩa, cấu tạo từ và cụm từ theo ngữ cảnh bài học.\n- Vận dụng được từ vựng và ngữ âm chuẩn xác vào các câu văn và bài tập giao tiếp.`;
    }
    if (name.includes('A Closer Look 2')) {
      return `- Biết và nhận diện được cấu trúc ngữ pháp, thì của động từ và quy tắc biến đổi câu.\n- Trình bày được và hiểu rõ cách dùng ngữ pháp trong ngữ cảnh giao tiếp cụ thể.\n- Vận dụng được cấu trúc ngữ pháp để đặt câu, viết đoạn và làm bài tập biến đổi câu chuẩn xác.`;
    }
    if (name.includes('Communication')) {
      return `- Biết và nhận diện các mẫu câu giao tiếp hàng ngày và đặc trưng văn hóa các quốc gia.\n- Trình bày được và hiểu cách bày tỏ ý kiến, mời, đề nghị, xin lời khuyên bằng Tiếng Anh.\n- Vận dụng được vào các tình huống nhập vai, thuyết trình ngắn và thảo luận nhóm.`;
    }
    if (name.includes('Skills 1')) {
      return `- Biết và nhận diện các từ khóa, cấu trúc đoạn văn qua kỹ năng đọc lướt và đọc quét thông tin.\n- Trình bày được và hiểu rõ nội dung bài đọc, tổng hợp ý chính của chủ đề.\n- Vận dụng được thông tin bài đọc để thuyết trình, chia sẻ quan điểm cá nhân bằng kỹ năng Nói.`;
    }
    if (name.includes('Skills 2')) {
      return `- Biết và nhận diện thông tin chi tiết qua bài Nghe về chủ đề bài học.\n- Trình bày được và hiểu dàn ý cấu trúc của một đoạn văn, email, bài viết hướng dẫn.\n- Vận dụng được kỹ năng Viết để hoàn thành bài viết đúng ngữ pháp, liên kết mạch lạc và giàu ý tưởng.`;
    }
    if (name.includes('Looking Back') || name.includes('Project')) {
      return `- Biết và hệ thống hóa toàn bộ từ vựng, ngữ âm, ngữ pháp trọng tâm của cả đơn vị bài học.\n- Trình bày được sản phẩm dự án học tập (poster, slide, video) trước lớp.\n- Vận dụng được năng lực ngôn ngữ tổng hợp và năng lực số để tự đánh giá và hợp tác nhóm.`;
    }
    if (name.includes('Review')) {
      return `- Biết và ôn tập toàn diện hệ thống kiến thức ngôn ngữ qua các Unit.\n- Trình bày được và hiểu rõ các dạng bài kiểm tra tích hợp 4 kỹ năng Nghe - Nói - Đọc - Viết.\n- Vận dụng được chiến lược làm bài thi hiệu quả và khắc phục các lỗi ngôn ngữ thường gặp.`;
    }
    if (name.includes('Test') || name.includes('Kiểm tra') || name.includes('Assessment')) {
      return `- Biết và hệ thống hóa chuẩn kiến thức kỹ năng môn học phục vụ bài kiểm tra định kỳ.\n- Trình bày được bài làm kiểm tra rõ ràng, trung thực theo đúng ma trận và đặc tả đề thi.\n- Vận dụng được tổng hợp 4 kỹ năng ngôn ngữ đạt chuẩn đầu ra theo CT GDPT 2018.`;
    }
    return `- Biết, nhận biết được từ vựng, ngữ âm và cấu trúc ngữ pháp trọng tâm của bài: "${name}".\n- Trình bày được và hiểu rõ ngữ cảnh sử dụng ngôn ngữ trong giao tiếp thực tế.\n- Vận dụng được 4 kỹ năng Nghe, Nói, Đọc, Viết đạt chuẩn CEFR và phát triển năng lực số.`;
  }

  // 4. KHOA HỌC TỰ NHIÊN THCS (6 - 9)
  if (s.includes('khoa học tự nhiên') || s.includes('khtn')) {
    if (name.includes('Tế bào') || name.includes('tế bào')) return `- Biết, nhận biết được cấu trúc cơ bản của tế bào nhân sơ và nhân thực; phân biệt tế bào động vật và thực vật.\n- Trình bày được và hiểu rõ chức năng của các bào quan trong hoạt động sống của tế bào.\n- Vận dụng được kỹ năng sử dụng kính hiển vi quang học quan sát tiêu bản tế bào thực tế.`;
    if (name.includes('Đa dạng thế giới sống') || name.includes('Phân loại')) return `- Biết, nhận biết được hệ thống 5 giới sinh vật (Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật).\n- Trình bày được và hiểu rõ vai trò của đa dạng sinh học và các nguyên nhân gây suy giảm đa dạng sinh học.\n- Vận dụng được khóa lưỡng phân để phân loại một số sinh vật quen thuộc và đề xuất biện pháp bảo vệ sinh thái.`;
    if (name.includes('Nguyên tử') || name.includes('Nguyên tố') || name.includes('Bảng tuần hoàn')) return `- Biết, nhận biết được cấu tạo nguyên tử (hạt p, n, e), khái niệm nguyên tố hóa học và kí hiệu hóa học.\n- Trình bày được và hiểu rõ nguyên tắc sắp xếp và cấu tạo của Bảng tuần hoàn các nguyên tố hóa học.\n- Vận dụng được thông tin ô nguyên tố để suy ra cấu tạo nguyên tử và tính chất hóa học cơ bản.`;
    if (name.includes('Phản ứng hóa học') || name.includes('Bảo toàn khối lượng') || name.includes('Mol')) return `- Biết, nhận biết được dấu hiệu xảy ra phản ứng hóa học, khái niệm mol, khối lượng mol và thể tích mol chất khí.\n- Trình bày được và hiểu rõ định luật bảo toàn khối lượng và phương pháp cân bằng phương trình hóa học.\n- Vận dụng được công thức tính mol n = m/M, n = V/24.79 và nồng độ dung dịch vào tính toán hóa học.`;
    if (name.includes('Acid') || name.includes('Base') || name.includes('Muối') || name.includes('Oxide') || name.includes('pH')) return `- Biết, nhận biết được công thức hóa học và phân loại các hợp chất vô cơ: Oxide, Acid, Base, Muối.\n- Trình bày được và hiểu rõ tính chất hóa học đặc trưng và thang đo độ pH.\n- Vận dụng được vào viết phương trình phản ứng, đo độ pH thực tế và giải thích hiện tượng ăn mòn, cải tạo đất chua.`;
    if (name.includes('Kim loại') || name.includes('Phi kim') || name.includes('Hydrocarbon')) return `- Biết, nhận biết được tính chất vật lí và hóa học của kim loại, phi kim và các hợp chất hữu cơ thông dụng.\n- Trình bày được và hiểu rõ dãy hoạt động hóa học của kim loại và cấu tạo của Methane, Ethylene, Rượu etylic.\n- Vận dụng được vào giải bài tập chuỗi phản ứng và giải thích các ứng dụng thực tiễn trong công nghiệp, đời sống.`;
    if (name.includes('Tốc độ') || name.includes('Lực') || name.includes('Áp suất') || name.includes('Archimedes')) return `- Biết, nhận biết được khái niệm tốc độ, lực, lực ma sát, áp suất và lực đẩy Archimedes.\n- Trình bày được và hiểu rõ công thức v = s/t, p = F/S và điều kiện chìm, nổi của vật trong chất lỏng.\n- Vận dụng được công thức tính toán và giải thích hiện tượng an toàn giao thông, tàu thuyền nổi trên mặt nước.`;
    if (name.includes('Nhiệt') || name.includes('Năng lượng') || name.includes('Truyền nhiệt')) return `- Biết, nhận biết được khái niệm nhiệt độ, nhiệt năng, nội năng và các dạng năng lượng.\n- Trình bày được và hiểu rõ 3 hình thức truyền nhiệt (dẫn nhiệt, đối lưu, bức xạ nhiệt) và định luật bảo toàn năng lượng.\n- Vận dụng được vào giải thích các biện pháp cách nhiệt, thiết kế nhà ở xanh tiết kiệm năng lượng.`;
    if (name.includes('Ánh sáng') || name.includes('Khúc xạ') || name.includes('Thấu kính') || name.includes('Mắt')) return `- Biết, nhận biết được hiện tượng phản xạ, khúc xạ ánh sáng và cấu tạo thấu kính hội tụ, phân kì.\n- Trình bày được và hiểu rõ đường truyền các tia sáng đặc biệt và tật cận thị, viễn thị của mắt.\n- Vận dụng được vào vẽ hình dựng ảnh qua thấu kính và đề xuất biện pháp bảo vệ thị lực học đường.`;
    if (name.includes('Điện') || name.includes('Từ') || name.includes('Cảm ứng điện từ') || name.includes('Máy biến áp')) return `- Biết, nhận biết được định luật Ohm, tác dụng của dòng điện và hiện tượng cảm ứng điện từ.\n- Trình bày được và hiểu rõ công thức đoạn mạch nối tiếp, song song và nguyên lý máy biến áp.\n- Vận dụng được vào tính toán điện trở, điện năng tiêu thụ và sử dụng điện an toàn, tiết kiệm.`;
    if (name.includes('Di truyền') || name.includes('Mendel') || name.includes('ADN') || name.includes('Nhiễm sắc thể')) return `- Biết, nhận biết được các thuật ngữ di truyền, cấu trúc ADN, ARN, Nhiễm sắc thể và đột biến gen.\n- Trình bày được và hiểu rõ các quy luật di truyền của Mendel, cơ chế nguyên phân, giảm phân và tổng hợp Protein.\n- Vận dụng được vào giải bài tập di truyền và giải thích các ứng dụng công nghệ sinh học trong chọn giống, y học.`;
    return `- Biết, nhận biết được các khái niệm, quy luật tự nhiên và hiện tượng khoa học của bài học: "${name}".\n- Trình bày được và hiểu rõ bản chất định luật khoa học, cơ chế hoạt động và phương pháp thực nghiệm.\n- Vận dụng được kiến thức vào làm thí nghiệm an toàn, giải bài tập và bảo vệ môi trường, sinh thái.`;
  }

  // 5. LỊCH SỬ VÀ ĐỊA LÍ THCS (6 - 9)
  if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('ls&đl') || s.includes('lsdl')) {
    if (name.includes('Ai Cập') || name.includes('Lưỡng Hà') || name.includes('Hy Lạp') || name.includes('La Mã') || name.includes('Văn minh')) {
      return `- Biết, nhận biết được vị trí địa lí, thời gian hình thành và các thành tựu văn hóa tiêu biểu của các nền văn minh cổ đại.\n- Trình bày được và hiểu rõ giá trị lịch sử và đóng góp to lớn của các nền văn minh nhân loại.\n- Vận dụng được kiến thức để liên hệ, đánh giá các di sản văn hóa thế giới còn tồn tại đến ngày nay.`;
    }
    if (name.includes('Tây Âu') || name.includes('Phát kiến') || name.includes('Phục hưng')) {
      return `- Biết, nhận biết được quá trình hình thành chế độ phong kiến Tây Âu, các cuộc phát kiến địa lí lớn và phong trào Phục hưng.\n- Trình bày được và hiểu rõ nguyên nhân, hệ quả của phát kiến địa lí và nội dung tư tưởng phong trào Văn hóa Phục hưng.\n- Vận dụng được tư liệu lịch sử để đánh giá sự chuyển biến kinh tế - xã hội hướng tới chủ nghĩa tư bản.`;
    }
    if (name.includes('Cách mạng tư sản') || name.includes('Cách mạng công nghiệp') || name.includes('Chiến tranh thế giới') || name.includes('Chiến tranh lạnh')) {
      return `- Biết, nhận biết được các mốc thời gian, sự kiện then chốt và các giai đoạn diễn ra cuộc cách mạng / chiến tranh.\n- Trình bày được và hiểu rõ nguyên nhân sâu xa, diễn biến chính và ý nghĩa lịch sử to lớn của sự kiện.\n- Vận dụng được bài học lịch sử để nhận thức sâu sắc về giá trị của hòa bình, hợp tác và tiến bộ xã hội.`;
    }
    if (name.includes('Văn Lang') || name.includes('Âu Lạc') || name.includes('Bắc thuộc') || name.includes('Bạch Đằng') || name.includes('Khởi nghĩa')) {
      return `- Biết, nhận biết được tiến trình lịch sử thời Hùng Vương - An Dương Vương và các cuộc khởi nghĩa chống Bắc thuộc trước thế kỉ X.\n- Trình bày được và hiểu rõ tổ chức nhà nước sơ khai, nguyên nhân thắng lợi của chiến thắng Bạch Đằng năm 938.\n- Vận dụng được niềm tự hào dân tộc vào việc giữ gìn truyền thống yêu nước và bảo tồn di tích lịch sử quê hương.`;
    }
    if (name.includes('Đại Việt') || name.includes('Lý') || name.includes('Trần') || name.includes('Lê sơ') || name.includes('Lam Sơn') || name.includes('Tây Sơn')) {
      return `- Biết, nhận biết được các triều đại phong kiến Đại Việt và những chiến công hiển hách chống ngoại xâm.\n- Trình bày được và hiểu rõ nghệ thuật quân sự độc đáo, thành tựu kinh tế, văn hóa, giáo dục thời Thăng Long - Đại Việt.\n- Vận dụng được các giá trị di sản văn hóa và tinh thần đoàn kết toàn dân vào học tập và rèn luyện.`;
    }
    if (name.includes('Bản đồ') || name.includes('Kinh, vĩ tuyến') || name.includes('Trái Đất') || name.includes('Khí hậu') || name.includes('Địa hình') || name.includes('Sông') || name.includes('Thuỷ văn')) {
      return `- Biết, nhận biết được các yếu tố trên bản đồ, lưới kinh vĩ tuyến, đặc điểm cấu tạo Trái Đất và địa hình, khí hậu, sông ngòi.\n- Trình bày được và hiểu rõ mối quan hệ giữa các thành phần tự nhiên và quy luật phân hóa địa lí.\n- Vận dụng được bản đồ, Atlas Địa lí và số liệu thống kê để giải thích các hiện tượng thời tiết, thủy văn thực tế.`;
    }
    if (name.includes('Dân số') || name.includes('Nông nghiệp') || name.includes('Công nghiệp') || name.includes('Dịch vụ') || name.includes('Vùng') || name.includes('kinh tế')) {
      return `- Biết, nhận biết được bức tranh phân bố dân cư, đô thị hóa và các ngành kinh tế trọng điểm của các vùng miền.\n- Trình bày được và hiểu rõ thế mạnh, hạn chế và xu hướng phát triển kinh tế - xã hội của từng vùng kinh tế.\n- Vận dụng được kiến thức để phân tích tình hình phát triển kinh tế và định hướng việc làm tại địa phương.`;
    }
    if (name.includes('Biển đảo') || name.includes('Biển Đông') || name.includes('Hoàng Sa') || name.includes('Trường Sa') || name.includes('chủ quyền')) {
      return `- Biết, nhận biết được vị trí chiến lược, phạm vi không gian biển đảo của Việt Nam và hai quần đảo Hoàng Sa, Trường Sa.\n- Trình bày được và hiểu rõ cơ sở pháp lí, tài nguyên thiên nhiên và vai trò kinh tế - an ninh quốc phòng của biển đảo.\n- Vận dụng được ý thức trách nhiệm công dân tích cực tham gia tuyên truyền bảo vệ chủ quyền biển đảo thiêng liêng.`;
    }
    return `- Biết, nhận biết được các sự kiện lịch sử, nhân vật tiêu biểu và vị trí địa lí của bài học: "${name}".\n- Trình bày được và hiểu rõ nguyên nhân, tiến trình phát triển và mối liên hệ giữa các hiện tượng lịch sử - địa lí.\n- Vận dụng được kiến thức vào khai thác bản đồ, tư liệu lịch sử và giải thích các vấn đề thực tiễn.`;
  }

  // 6. TIN HỌC THCS (6 - 9)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    if (name.includes('Bảng tính') || name.includes('Excel') || name.includes('hàm') || name.includes('COUNTIF') || name.includes('SUMIF') || name.includes('xác thực')) {
      return `- Biết, nhận biết được giao diện bảng tính, các kiểu dữ liệu và địa chỉ ô tương đối/tuyệt đối trong Excel.\n- Trình bày được và hiểu rõ cú pháp các hàm tính toán cơ bản (SUM, AVERAGE, MAX, MIN, IF, COUNTIF, SUMIF).\n- Vận dụng được bảng tính để sắp xếp, lọc dữ liệu, vẽ biểu đồ và giải quyết bài toán quản lý tài chính, điểm số.`;
    }
    if (name.includes('Mạng máy tính') || name.includes('Internet') || name.includes('An toàn') || name.includes('Mạng xã hội') || name.includes('pháp lí')) {
      return `- Biết, nhận biết được cấu trúc mạng máy tính, các dịch vụ Internet, mạng xã hội và nguy cơ mất an toàn thông tin.\n- Trình bày được và hiểu rõ các quy định pháp luật về bản quyền, bảo mật thông tin cá nhân và văn hóa ứng xử trên mạng.\n- Vận dụng được các biện pháp an toàn số như đặt mật khẩu mạnh, phòng chống mã độc và chia sẻ thông tin văn minh.`;
    }
    if (name.includes('Thuật toán') || name.includes('Lập trình') || name.includes('Python') || name.includes('Scratch') || name.includes('Gỡ lỗi') || name.includes('Bài toán tin học') || name.includes('Cấu trúc điều khiển')) {
      return `- Biết, nhận biết được khái niệm bài toán, thuật toán, biến, kiểu dữ liệu và các cấu trúc điều khiển cơ bản.\n- Trình bày được và hiểu rõ thuật toán bằng sơ đồ khối; giải thích được hoạt động của cấu trúc rẽ nhánh, vòng lặp.\n- Vận dụng được ngôn ngữ Scratch/Python để viết chương trình hoàn chỉnh, gỡ lỗi và giải bài toán thực tế.`;
    }
    if (name.includes('Mô phỏng') || name.includes('phần mềm mô phỏng')) {
      return `- Biết, nhận biết được khái niệm và vai trò của phần mềm mô phỏng trong nghiên cứu và học tập.\n- Trình bày được và hiểu rõ nguyên lý hoạt động của mô hình mô phỏng khoa học.\n- Vận dụng được phần mềm mô phỏng để thay đổi tham số, quan sát và thu thập dữ liệu thí nghiệm ảo.`;
    }
    if (name.includes('Sơ đồ tư duy') || name.includes('Định dạng văn bản') || name.includes('Trình chiếu') || name.includes('trang chiếu') || name.includes('sổ lưu niệm') || name.includes('video')) {
      return `- Biết, nhận biết được các công cụ biên tập sơ đồ tư duy, văn bản, bài trình chiếu và đa phương tiện.\n- Trình bày được và hiểu rõ nguyên tắc bố cục trực quan, thẩm mỹ trong thiết kế sản phẩm số.\n- Vận dụng được phần mềm chuyên dụng tạo ra sơ đồ tư duy, slide báo cáo hoặc video học tập chuyên nghiệp.`;
    }
    return `- Biết, nhận biết được các kiến thức công nghệ thông tin và khái niệm số trong bài: "${name}".\n- Trình bày được và hiểu rõ quy trình thao tác phần mềm, nguyên lý thuật toán và xử lý dữ liệu số.\n- Vận dụng được kỹ năng tin học để tạo ra sản phẩm số hữu ích, an toàn và sáng tạo.`;
  }

  // 7. CÔNG NGHỆ THCS (6 - 9)
  if (s.includes('công nghệ') || s.includes('cong nghe')) {
    if (name.includes('Nhà ở') || name.includes('Trang phục') || name.includes('Thực phẩm')) {
      return `- Biết, nhận biết được vai trò của nhà ở thông minh, đặc điểm trang phục và các nhóm thực phẩm dinh dưỡng.\n- Trình bày được và hiểu rõ nguyên tắc phối hợp trang phục, quy trình chế biến và bảo quản thực phẩm an toàn.\n- Vận dụng được kiến thức vào việc lựa chọn trang phục phù hợp, xây dựng thực đơn hợp lí và giữ gìn nhà ở ngăn nắp.`;
    }
    if (name.includes('Trồng trọt') || name.includes('Chăn nuôi') || name.includes('Thủy sản')) {
      return `- Biết, nhận biết được các loại cây trồng, vật nuôi phổ biến và các phương thức sản xuất nông nghiệp công nghệ cao.\n- Trình bày được và hiểu rõ quy trình kỹ thuật làm đất, gieo trồng, bón phân, chăm sóc và phòng trừ dịch bệnh an toàn sinh học.\n- Vận dụng được quy trình vào thực hành gieo trồng cây xanh, chăm sóc thú cưng và sản xuất nông sản sạch.`;
    }
    if (name.includes('Bản vẽ kỹ thuật') || name.includes('Hình chiếu') || name.includes('Cơ khí')) {
      return `- Biết, nhận biết được các loại hình chiếu vuông góc, kí hiệu quy ước trên bản vẽ kỹ thuật và dụng cụ cơ khí.\n- Trình bày được và hiểu rõ các bước đọc bản vẽ chi tiết, quy trình gia công cưa, đục, dũa kim loại an toàn.\n- Vận dụng được vào đọc bản vẽ vật thể đơn giản và thực hành gia công cơ khí đảm bảo an toàn lao động.`;
    }
    if (name.includes('Mạch điện') || name.includes('Điện gia dụng') || name.includes('Thiết kế kỹ thuật')) {
      return `- Biết, nhận biết được các phần tử trong sơ đồ mạch điện điều khiển, chiếu sáng gia đình và quy trình thiết kế kỹ thuật.\n- Trình bày được và hiểu rõ nguyên lý hoạt động của các thiết bị đóng cắt, bảo vệ và lấy điện trong gia đình.\n- Vận dụng được vào lắp ráp mô hình mạch điện đơn giản và sử dụng thiết bị điện an toàn, tiết kiệm điện năng.`;
    }
    return `- Biết, nhận biết được các khái niệm, quy chuẩn kỹ thuật và quy trình công nghệ của bài học: "${name}".\n- Trình bày được và hiểu rõ nguyên lý kỹ thuật, tác phong an toàn lao động và giá trị kinh tế của công nghệ.\n- Vận dụng được kiến thức vào thực hành chế tạo, chăm sóc và giải quyết các vấn đề kỹ thuật trong đời sống.`;
  }

  // 8. GIÁO DỤC CÔNG DÂN THCS (6 - 9)
  if (s.includes('công dân') || s.includes('gdcd')) {
    if (name.includes('Truyền thống') || name.includes('Tự hào') || name.includes('Yêu thương')) {
      return `- Biết, nhận biết được các truyền thống tốt đẹp của gia đình, dòng họ, quê hương và biểu hiện của tình yêu thương con người.\n- Trình bày được và hiểu rõ ý nghĩa của việc giữ gìn truyền thống và lòng nhân ái đối với sự phát triển nhân cách.\n- Vận dụng được vào các việc làm cụ thể để phát huy truyền thống, chia sẻ và giúp đỡ những người có hoàn cảnh khó khăn.`;
    }
    if (name.includes('Pháp luật') || name.includes('Kỷ luật') || name.includes('Quyền')) {
      return `- Biết, nhận biết được các quy định pháp luật về quyền và nghĩa vụ cơ bản của công dân trong bài học.\n- Trình bày được và hiểu rõ tính bắt buộc của pháp luật và mối quan hệ giữa quyền và nghĩa vụ công dân.\n- Vận dụng được vào việc tự giác chấp hành pháp luật, nội quy nhà trường và nhắc nhở mọi người cùng thực hiện.`;
    }
    if (name.includes('Kỹ năng sống') || name.includes('Quản lý cảm xúc') || name.includes('Bạo lực')) {
      return `- Biết, nhận biết được các biểu hiện của cảm xúc tích cực/tiêu cực và các hành vi bạo lực học đường.\n- Trình bày được và hiểu rõ kỹ năng kiểm soát cảm xúc, nguyên nhân và tác hại của bạo lực học đường.\n- Vận dụng được các biện pháp giải tỏa căng thẳng lành mạnh và kỹ năng phòng chống, can ngăn bạo lực học đường.`;
    }
    return `- Biết, nhận biết được các chuẩn mực đạo đức và quy định pháp luật của bài học: "${name}".\n- Trình bày được và hiểu rõ ý nghĩa của lối sống văn minh, tự chủ, trung thực và thượng tôn pháp luật.\n- Vận dụng được vào tự đánh giá, điều chỉnh hành vi bản thân và ứng xử chuẩn mực trong gia đình, học đường, xã hội.`;
  }

  // 9. GIÁO DỤC THỂ CHẤT THCS (6 - 9) - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    if (name.includes('dinh dưỡng') || name.includes('môi trường tự nhiên') || name.includes('Kiến thức chung')) {
      return `- Biết, nhận biết được các yếu tố dinh dưỡng, vận động, nghỉ ngơi hợp lí và các yếu tố môi trường tự nhiên.\n- Trình bày được và hiểu rõ nguyên tắc vệ sinh cá nhân, phòng tránh chấn thương trong tập luyện thể thao.\n- Vận dụng được kiến thức vào xây dựng chế độ sinh hoạt lành mạnh, rèn luyện thân thể hàng ngày.`;
    }
    if (name.includes('Chạy cự li ngắn') || name.includes('Xuất phát thấp') || name.includes('Xuất phát cao') || name.includes('60 m') || name.includes('60m') || name.includes('100 m') || name.includes('100m')) {
      return `- Biết, nhận biết được các giai đoạn kỹ thuật chạy cự li ngắn (Xuất phát, Chạy lao, Chạy giữa quãng, Về đích).\n- Trình bày được và hiểu rõ cách phối hợp nhịp thở, độ ngả thân người và góc đạp sau.\n- Vận dụng được kỹ thuật xuất phát và chạy tăng tốc đạt thành tích tối ưu trong tập luyện và thi đấu.`;
    }
    if (name.includes('Nhảy cao kiểu nằm nghiêng') || name.includes('Nhảy cao kiểu bước qua') || name.includes('Nhảy cao')) {
      return `- Biết, nhận biết được 4 giai đoạn kỹ thuật nhảy cao (Chạy đà, Giậm nhảy, Bay trên không qua xà, Tiếp đất an toàn).\n- Trình bày được và hiểu rõ nguyên lý chuyển hóa tốc độ nằm ngang thành lực bật nhảy thẳng đứng.\n- Vận dụng được kỹ thuật giậm nhảy đá lăng, uốn thân qua xà và tiếp đất hoãn xung an toàn trên đệm.`;
    }
    if (name.includes('Nhảy xa kiểu ngồi') || name.includes('Nhảy xa')) {
      return `- Biết, nhận biết được 4 giai đoạn kỹ thuật nhảy xa kiểu ngồi (Chạy đà tăng tốc, Giậm nhảy cắm ván, Bay trên không, Rơi xuống cát).\n- Trình bày được và hiểu rõ quy tắc đo đà, kỹ thuật giậm nhảy chính xác ván và tư thế co chân kiểu ngồi trên không.\n- Vận dụng được phối hợp liên hoàn các giai đoạn để đạt thành tích nhảy xa tối đa và tiếp đất an toàn.`;
    }
    if (name.includes('Ném bóng')) {
      return `- Biết, nhận biết được kỹ thuật cầm bóng, chạy đà 4 bước chéo và tư thế ra sức cuối cùng.\n- Trình bày được và hiểu rõ góc ném tối ưu (khoảng 38° - 42°) và cơ chế tạo lực cánh cung toàn thân.\n- Vận dụng được kỹ thuật ném bóng xa đúng hướng, đạt thành tích cao và giữ thăng bằng sau khi ném.`;
    }
    if (name.includes('Chạy cự li trung bình') || name.includes('chạy bền')) {
      return `- Biết, nhận biết được kỹ thuật chạy cự li trung bình, phân phối sức trên đường thẳng và đường vòng.\n- Trình bày được và hiểu rõ kỹ thuật thở 2 bước hít vào - 2 bước thở ra và hiện tượng cực điểm.\n- Vận dụng được phương pháp phân phối sức hợp lí, duy trì tốc độ và vượt qua cực điểm khi chạy bền.`;
    }
    if (name.includes('Bài thể dục liên hoàn') || name.includes('Bài thể dục nhịp điệu')) {
      return `- Biết, nhận biết được thứ tự các động tác của Bài thể dục liên hoàn / Bài thể dục nhịp điệu.\n- Trình bày được và hiểu rõ phương hướng, biên độ, tính nhịp điệu và phối hợp tay - chân nhịp nhàng.\n- Vận dụng được chuỗi động tác vào tập thể dục buổi sáng, thể dục giữa giờ phát triển thể lực và thẩm mỹ.`;
    }
    if (name.includes('Cầu lông') || name.includes('Bóng đá') || name.includes('Bóng rổ') || name.includes('Thể thao tự chọn')) {
      return `- Biết, nhận biết được các tư thế chuẩn bị, kỹ thuật di chuyển và động tác đánh cầu / đá bóng / ném rổ.\n- Trình bày được và hiểu rõ chiến thuật phối hợp nhóm cơ bản và các điều luật thi đấu thể thao.\n- Vận dụng được kỹ thuật và chiến thuật vào tập luyện, thi đấu giao hữu trung thực, cao thượng.`;
    }
    return `- Biết, nhận biết được các giai đoạn kỹ thuật động tác và điều luật của môn học: "${name}".\n- Trình bày được và hiểu rõ nguyên lý chuyển động, phương pháp thở và an toàn trong tập luyện.\n- Vận dụng được vào rèn luyện thân thể thường xuyên, nâng cao thể lực và tố chất vận động.`;
  }

  // 10. HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP THCS (6 - 9)
  if (s.includes('trải nghiệm') || s.includes('hđtn') || s.includes('hdtn') || s.includes('hướng nghiệp')) {
    if (name.includes('nhà trường') || name.includes('tình bạn') || name.includes('bắt nạt')) {
      return `- Biết, nhận biết được truyền thống nhà trường, giá trị của tình bạn đẹp và các biểu hiện bắt nạt học đường.\n- Trình bày được và hiểu rõ quy tắc xây dựng nếp sống văn minh và các biện pháp phòng tránh bắt nạt học đường.\n- Vận dụng được kỹ năng giao tiếp tích cực để xây dựng môi trường học đường an toàn, thân thiện.`;
    }
    if (name.includes('bản thân') || name.includes('tính cách') || name.includes('cảm xúc') || name.includes('tranh biện') || name.includes('từ chối') || name.includes('thích nghi') || name.includes('áp lực')) {
      return `- Biết, nhận biết được các nét tính cách, cảm xúc, điểm mạnh, điểm yếu của bản thân.\n- Trình bày được và hiểu rõ phương pháp làm chủ cảm xúc, kỹ năng từ chối cám dỗ và ứng phó với áp lực thi cử.\n- Vận dụng được tư duy phản biện, tranh biện tích cực và xây dựng kế hoạch tự hoàn thiện bản thân.`;
    }
    if (name.includes('gia đình') || name.includes('người thân') || name.includes('việc nhà') || name.includes('kinh tế gia đình')) {
      return `- Biết, nhận biết được vai trò, trách nhiệm của bản thân trong gia đình và các khoản chi tiêu gia đình.\n- Trình bày được và hiểu rõ cách thể hiện lòng biết ơn cha mẹ, giải quyết hòa nhã bất đồng gia đình.\n- Vận dụng được kỹ năng làm việc nhà, chia sẻ trách nhiệm và cùng gia đình thực hiện chi tiêu tiết kiệm, hợp lí.`;
    }
    if (name.includes('cộng đồng') || name.includes('thiện nguyện') || name.includes('mạng xã hội') || name.includes('truyền thông')) {
      return `- Biết, nhận biết được các hoạt động thiện nguyện, văn hóa nơi công cộng và chuẩn mực ứng xử trên mạng xã hội.\n- Trình bày được và hiểu rõ ý nghĩa của tinh thần vì cộng đồng và tác động của truyền thông số.\n- Vận dụng được kỹ năng giao tiếp văn minh, tích cực tham gia hoạt động xã hội và lan tỏa thông điệp nhân văn.`;
    }
    if (name.includes('thiên nhiên') || name.includes('môi trường') || name.includes('Tổ quốc') || name.includes('thiên tai')) {
      return `- Biết, nhận biết được vẻ đẹp cảnh quan thiên nhiên quê hương, các nguy cơ ô nhiễm môi trường và rủi ro thiên tai.\n- Trình bày được và hiểu rõ các biện pháp bảo tồn danh lam thắng cảnh, thực hiện lối sống xanh và ứng phó biến đổi khí hậu.\n- Vận dụng được kỹ năng phân loại rác, tiết kiệm năng lượng và tuyên truyền phòng chống thiên tai tại địa phương.`;
    }
    if (name.includes('nghề nghiệp') || name.includes('hướng nghiệp') || name.includes('nghề') || name.includes('cơ sở giáo dục') || name.includes('tuyển sinh') || name.includes('Lớp 10')) {
      return `- Biết, nhận biết được các nhóm ngành nghề trong xã hội hiện đại và thông tin tuyển sinh sau THCS.\n- Trình bày được và hiểu rõ các yêu cầu về phẩm chất, năng lực của từng nghề và đánh giá sự phù hợp của bản thân.\n- Vận dụng được kiến thức hướng nghiệp để xây dựng kế hoạch học tập, rèn luyện định hướng nghề nghiệp tương lai.`;
    }
    return `- Biết, nhận biết được các chủ đề trải nghiệm và kỹ năng sống cần thiết trong bài: "${name}".\n- Trình bày được và hiểu rõ phương pháp phát triển bản thân, kỹ năng thích ứng và phục vụ cộng đồng.\n- Vận dụng được vào xây dựng kế hoạch hành động cụ thể, tự chủ và định hướng tương lai.`;
  }

  // 11. ÂM NHẠC & MĨ THUẬT THCS
  if (s.includes('âm nhạc') || s.includes('am nhac')) {
    return `- Biết, nhận biết được cao độ, trường độ, giai điệu bài hát và nhạc cụ âm nhạc trong bài: "${name}".\n- Trình bày được bài hát / bài đọc nhạc đúng nhịp phách, sắc thái và hiểu giá trị nghệ thuật của tác phẩm.\n- Vận dụng được kỹ năng biểu diễn, hòa tấu nhạc cụ và cảm thụ âm nhạc trong các hoạt động văn nghệ học đường.`;
  }
  if (s.includes('mĩ thuật') || s.includes('mỹ thuật')) {
    return `- Biết, nhận biết được các yếu tố thị giác (đường nét, hình khối, màu sắc, bố cục) trong bài: "${name}".\n- Trình bày được và hiểu rõ ngôn ngữ tạo hình và ý tưởng nghệ thuật của tác phẩm mĩ thuật.\n- Vận dụng được các kỹ thuật hội họa, đồ họa, điêu khắc để sáng tạo sản phẩm mĩ thuật độc đáo và thẩm mỹ.`;
  }

  // 12. GIÁO DỤC ĐỊA PHƯƠNG THCS
  return `- Biết, nhận biết được các giá trị lịch sử, địa lí, văn hóa truyền thống, làng nghề và kinh tế của địa phương trong: "${name}".\n- Trình bày được và hiểu sâu sắc niềm tự hào quê hương, các thành tựu và tiềm năng phát triển của địa phương.\n- Vận dụng được kiến thức vào việc giữ gìn bản sắc văn hóa, quảng bá du lịch và đóng góp xây dựng quê hương giàu đẹp.`;
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
import { getMusicSecondaryCurriculum } from './curriculumSecondaryMusic';
import { getArtSecondaryCurriculum } from './curriculumSecondaryArt';
export {
  getEnglishSecondaryCurriculum,
  getTinHocSecondaryCurriculum,
  getLsdlSecondaryCurriculum,
  getHdtnSecondaryCurriculum,
  getMusicSecondaryCurriculum,
  getArtSecondaryCurriculum
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
    return getGdcdSecondaryCurriculum(String(g));
  }

  // 6.5. ÂM NHẠC THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('âm nhạc') || s.includes('am nhac') || s.includes('music')) {
    return getMusicSecondaryCurriculum(String(g));
  }

  // 6.6. MĨ THUẬT THCS (1 tiết/tuần x 35 tuần = 35 tiết)
  if (s.includes('mĩ thuật') || s.includes('mỹ thuật') || s.includes('art') || s.includes('mi thuat')) {
    return getArtSecondaryCurriculum(String(g));
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
  } else if (s.includes('âm nhạc') || s.includes('am nhac') || s.includes('music')) {
    rawList = getMusicSecondaryCurriculum(g);
  } else if (s.includes('mĩ thuật') || s.includes('mỹ thuật') || s.includes('art') || s.includes('mi thuat')) {
    rawList = getArtSecondaryCurriculum(g);
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

    const nlsMatch = (item.digitalCompetency || item.dc || '').match(/\[(?:Mã NLS|NLS Code):\s*([^\]]+)\]/i);
    const aiMatch = (item.digitalCompetency || item.dc || '').match(/\[(?:Mã AI|AI Code):\s*([^\]]+)\]/i);
    const extractedNlsCode = item.nlsCode !== undefined ? item.nlsCode : (nlsMatch ? nlsMatch[1].trim() : undefined);
    const extractedAiCode = item.aiCode !== undefined ? item.aiCode : (aiMatch ? aiMatch[1].trim() : undefined);

    const nls = extractedNlsCode !== undefined
      ? { code: extractedNlsCode, requirement: lookupNlsRequirement(extractedNlsCode) || '' }
      : isBlankTest
      ? { code: '', requirement: '' }
      : isEnglish
      ? getNlsCodeForEnglishLesson(g, schoolType, lessonCtx)
      : getNlsCodeForSubjectLesson(g, schoolType, lessonCtx);

    const ai = extractedAiCode !== undefined
      ? { code: extractedAiCode, requirement: lookupAiRequirement(extractedAiCode)?.requirement || '' }
      : isBlankTest
      ? { code: '', requirement: '' }
      : isEnglish
      ? getAiCodeForEnglishLesson(g, lessonCtx)
      : getAiCodeForSubjectLesson(g, lessonCtx);

    const digitalComp = (item.digitalCompetency !== undefined ? item.digitalCompetency : item.dc) !== undefined
      ? (item.digitalCompetency ?? item.dc)
      : isBlankTest
      ? ''
      : (isEnglish
      ? [
          nls.code ? `• [NLS Code: ${nls.code}] ${nls.requirement}` : '',
          ai.code ? `• [AI Code: ${ai.code}] ${ai.requirement}` : ''
        ].filter(Boolean).join('\n')
      : [
          nls.code ? `• [Mã NLS: ${nls.code}] ${nls.requirement}` : '',
          ai.code ? `• [Mã AI: ${ai.code}] ${ai.requirement}` : ''
        ].filter(Boolean).join('\n'));

    const formattedWeek = typeof item.week === 'number'
      ? (isEnglish ? `Week ${item.week}` : `Tuần ${item.week}`)
      : (isEnglish
          ? (String(item.week).startsWith('Week') ? String(item.week) : `Week ${item.week}`)
          : (String(item.week).startsWith('Tuần') ? String(item.week) : `Tuần ${item.week}`));

    return {
      id: `curr-sec-${g}-${idx + 1}`,
      stt: idx + 1,
      topic: item.topic,
      lessonName: item.name,
      periods: item.periods,
      week: formattedWeek,
      yccd: customYccd,
      equipment: item.equipment,
      location: item.location,
      nlsCode: extractedNlsCode !== undefined ? extractedNlsCode : nls.code,
      aiCode: extractedAiCode !== undefined ? extractedAiCode : ai.code,
      digitalCompetency: digitalComp,
      notes: item.notes || (item.name.includes('Dự án') || item.name.includes('STEM') ? 'Tích hợp STEM & Năng lực số' : '')
    };
  });
}
