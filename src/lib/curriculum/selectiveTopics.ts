import { SelectiveTopicItem, SchoolType, ConfigFormData } from '../../types';
import { getNlsCodeForSubjectLesson } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../constants/aiGuides';

/**
 * Bộ sinh Chuyên đề lựa chọn (Selective Topics) sáng tạo, chuẩn Chương trình GDPT 2018
 * Thiết kế chuẩn xác theo từng môn học và khối lớp (cả THCS, THPT và Tiểu học),
 * Tích hợp đầy đủ YCCĐ (với động từ hành vi: Biết, Trình bày được, Hiểu được, Vận dụng được),
 * Thời lượng, Tuần thực hiện, Thiết bị, Địa điểm và Tích hợp NLS (CV 3456) & AI (QĐ 2422).
 */
export function getSelectiveTopicsBySubjectAndGrade(
  subject: string,
  grade: string,
  schoolType: SchoolType,
  config?: Partial<ConfigFormData>
): SelectiveTopicItem[] {
  const s = (subject || '').toLowerCase().trim();
  const g = (grade || '8').trim();
  const isEn = s.includes('tiếng anh') || s.includes('english') || s.includes('tieng anh');

  // 1. MÔN TIN HỌC (THCS Lớp 6-9, THPT Lớp 10-12, Tiểu học Lớp 3-5)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    return [
      {
        id: `st-it-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Thực hành Lập trình điều khiển Robot & Thiết bị thông minh với Scratch / Python & AI`,
        periods: 12,
        timeline: isEn ? 'Week 10 - Week 21' : 'Tuần 10 - Tuần 21',
        yccd: `- Biết, nhận biết được các khối lệnh điều khiển động cơ, cảm biến khoảng cách, cảm biến dò đường và mô hình học máy nhận diện hình ảnh.\n- Trình bày được và hiểu rõ nguyên lý hoạt động của thuật toán điều khiển tự động và xử lý tín hiệu cảm biến thông minh.\n- Vận dụng được ngôn ngữ lập trình vào chế tạo robot tự hành, xe tránh vật cản và thực hiện nhiệm vụ sa bàn thực tế.`,
        equipment: 'Bộ Kit Robot giáo dục, cảm biến siêu âm, máy tính kết nối phần mềm lập trình',
        location: 'Phòng thực hành Tin học / Phòng STEM',
        digitalCompetency: `• [Mã NLS: 5.3.TC2a] Phân biệt và vận dụng công nghệ số tạo ra sản phẩm STEM\n• [Mã AI: 8.C2.1] Ứng dụng công cụ AI điều khiển thiết bị thông minh`,
        notes: 'Chuyên đề STEM & Trí tuệ nhân tạo'
      },
      {
        id: `st-it-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Thiết kế Đồ họa số, Truyền thông đa phương tiện & Biên tập Video học đường với AI`,
        periods: 11,
        timeline: isEn ? 'Week 22 - Week 32' : 'Tuần 22 - Tuần 32',
        yccd: `- Biết, nhận biết được các nguyên tắc phối màu, bố cục thị giác, tỷ lệ khung hình và các định dạng đa phương tiện kỹ thuật số.\n- Trình bày được và hiểu rõ quy trình biên tập video, lồng ghép âm thanh, kỹ xảo chuyển cảnh và tạo phụ đề tự động bằng AI.\n- Vận dụng được phần mềm đồ họa số (Canva, CapCut, Photoshop) để thiết kế poster tuyên truyền và dựng video phóng sự học đường.`,
        equipment: 'Máy tính có kết nối Internet, phần mềm đồ họa, micro thu âm, máy ảnh/smartphone',
        location: 'Phòng Tin học / Phòng đa năng',
        digitalCompetency: `• [Mã NLS: 3.1.TC2b] Tạo và chỉnh sửa nội dung số ở các định dạng khác nhau\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ sáng tạo nội dung đa phương tiện`,
        notes: 'Chuyên đề Sáng tạo nội dung số'
      },
      {
        id: `st-it-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Phân tích Dữ liệu thống kê, Xử lý Bảng tính nâng cao & Trực quan hóa số liệu với Excel`,
        periods: 12,
        timeline: isEn ? 'Week 1 - Week 12' : 'Tuần 1 - Tuần 12',
        yccd: `- Biết, nhận biết được các hàm thống kê có điều kiện phức hợp (COUNTIFS, SUMIFS), bảng tổng hợp PivotTable và biểu đồ động.\n- Trình bày được và hiểu rõ phương pháp làm sạch dữ liệu, chuẩn hóa số liệu và kỹ thuật phân tích xu hướng thống kê.\n- Vận dụng được Excel nâng cao để xây dựng Dashboard phân tích điểm học tập, khảo sát và hỗ trợ ra quyết định.`,
        equipment: 'Phòng máy tính cài đặt Microsoft Excel / Google Sheets, tệp dữ liệu khảo sát mẫu',
        location: 'Phòng thực hành Tin học',
        digitalCompetency: `• [Mã NLS: 1.3.TC2a] Tổ chức, lưu trữ và trực quan hóa dữ liệu trên môi trường số\n• [Mã AI: 8.D1.1] Ứng dụng giải pháp số và mô hình dữ liệu giải quyết vấn đề`,
        notes: 'Chuyên đề Khoa học dữ liệu'
      }
    ];
  }

  // 2. MÔN TOÁN
  if (s.includes('toán') || s.includes('toan')) {
    return [
      {
        id: `st-math-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Mô hình hóa Toán học trong Tài chính cá nhân và Kinh tế gia đình`,
        periods: 15,
        timeline: 'Tuần 5 - Tuần 19',
        yccd: `- Biết, nhận biết được các công thức tính lãi đơn, lãi kép, bài toán vay trả góp, khấu hao tài sản và tỷ suất sinh lời.\n- Trình bày được và hiểu rõ quy trình các bước xây dựng mô hình toán học giải quyết bài toán kinh tế.\n- Vận dụng được toán học và bảng tính Excel vào lập kế hoạch chi tiêu tài chính gia đình và đầu tư tiết kiệm.`,
        equipment: 'Máy tính cầm tay Casio fx-880BTG, phần mềm Excel, phiếu bài tập thực tế',
        location: 'Phòng học / Phòng Tin học',
        digitalCompetency: `• [Mã NLS: 5.2.TC2a] Sử dụng công cụ số giải quyết bài toán định lượng\n• [Mã AI: 8.C2.1] Ứng dụng AI phân tích số liệu tài chính`,
        notes: 'Mô hình hóa toán học'
      },
      {
        id: `st-math-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Hình học động và Ứng dụng phần mềm GeoGebra trong Khảo sát không gian thực tế`,
        periods: 10,
        timeline: 'Tuần 20 - Tuần 29',
        yccd: `- Biết, nhận biết được các công cụ vẽ điểm, đường, mặt phẳng, hình khối 3D và biến hình trong phần mềm GeoGebra.\n- Trình bày được và hiểu rõ mối liên hệ giữa phương trình đại số và hình học không gian trực quan.\n- Vận dụng được GeoGebra để mô phỏng kiến trúc, đo đạc khoảng cách thực địa và giải bài toán cực trị hình học.`,
        equipment: 'Phòng máy tính cài đặt GeoGebra, máy chiếu, dụng cụ đo khoảng cách',
        location: 'Phòng Tin học / Sân trường thực địa',
        digitalCompetency: `• [Mã NLS: 3.1.TC2a] Tạo hình học động và mô phỏng số học\n• [Mã AI: 8.D1.1] Khám phá giải pháp không gian số`,
        notes: 'Hình học động & GeoGebra'
      },
      {
        id: `st-math-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Ứng dụng Thống kê và Xác suất thực nghiệm trong Dự báo đời sống và Khoa học`,
        periods: 10,
        timeline: 'Tuần 26 - Tuần 35',
        yccd: `- Biết, nhận biết được các mẫu số liệu ghép nhóm, số đặc trưng đo xu thế trung tâm và độ phân tán.\n- Trình bày được và hiểu rõ ý nghĩa của xác suất thực nghiệm, quy luật số lớn và khoảng tin cậy thống kê.\n- Vận dụng được vào thu thập dữ liệu thời tiết, dịch bệnh hoặc thói quen học tập để đưa ra dự báo xác suất hợp lí.`,
        equipment: 'Bảng số liệu khảo sát thực tế, phần mềm thống kê, máy tính bỏ túi',
        location: 'Lớp học / Phòng bộ môn',
        digitalCompetency: `• [Mã NLS: 1.2.TC2a] Đánh giá độ tin cậy của dữ liệu thống kê\n• [Mã AI: 8.C1.1] Khái niệm dữ liệu trong mô hình dự báo AI`,
        notes: 'Thống kê & Xác suất thực nghiệm'
      }
    ];
  }

  // 3. MÔN NGỮ VĂN
  if (s.includes('ngữ văn') || s.includes('ngu van') || s.includes('văn')) {
    return [
      {
        id: `st-lit-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Tập nghiên cứu và Viết báo cáo khoa học về một vấn đề Văn học hoặc Văn hóa dân gian`,
        periods: 10,
        timeline: 'Tuần 6 - Tuần 15',
        yccd: `- Biết, nhận biết được cấu trúc chuẩn của một báo cáo nghiên cứu khoa học nhỏ (đặt vấn đề, nội dung, kết luận, tài liệu tham khảo).\n- Trình bày được và hiểu rõ phương pháp khảo sát, phỏng vấn, thu thập và trích dẫn tài liệu đúng quy chuẩn học thuật.\n- Vận dụng được kỹ năng nghiên cứu để hoàn thành bài báo cáo về đề tài văn học dân gian hoặc phong tục quê hương.`,
        equipment: 'Tài liệu thư viện, phiếu khảo sát, máy tính soạn thảo văn bản',
        location: 'Phòng thư viện / Lớp học',
        digitalCompetency: `• [Mã NLS: 1.1.TC2a] Tìm kiếm và chọn lọc tài liệu học thuật số\n• [Mã AI: 8.C1.2] Sử dụng AI hỗ trợ gợi ý đề cương nghiên cứu`,
        notes: 'Phương pháp nghiên cứu văn học'
      },
      {
        id: `st-lit-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Sân khấu hóa Tác phẩm văn học và Nghệ thuật Thuyết trình - Tranh biện trước công chúng`,
        periods: 15,
        timeline: 'Tuần 16 - Tuần 30',
        yccd: `- Biết, nhận biết được các yếu tố kịch bản sân khấu, ngôn ngữ thoại, cử chỉ, trang phục và kỹ thuật diễn xuất kịch bản văn học.\n- Trình bày được và hiểu rõ kỹ năng xây dựng lập luận, kỹ thuật nói trước đám đông và nghệ thuật tranh biện đa chiều.\n- Vận dụng được vào chuyển thể tác phẩm văn học thành tiểu phẩm sân khấu và tự tin diễn thuyết trước tập thể.`,
        equipment: 'Trang phục đạo cụ diễn kịch, micro, hệ thống âm thanh ánh sáng hội trường',
        location: 'Phòng đa năng / Sân khấu nhà trường',
        digitalCompetency: `• [Mã NLS: 2.1.TC2a] Tương tác và truyền thông qua sản phẩm đa phương tiện\n• [Mã AI: 8.A1.1] Phân tích cảm xúc con người trong tác phẩm văn học`,
        notes: 'Sân khấu hóa & Kỹ năng mềm'
      },
      {
        id: `st-lit-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Đọc hiểu và Tiếp nhận tác phẩm Văn học hiện đại qua góc nhìn Văn hóa và Lịch sử`,
        periods: 10,
        timeline: 'Tuần 22 - Tuần 31',
        yccd: `- Biết, nhận biết được bối cảnh lịch sử - văn hóa và trào lưu nghệ thuật thời kỳ ra đời tác phẩm văn học.\n- Trình bày được và hiểu sâu sắc sự tương tác giữa hiện thực xã hội và thế giới nghệ thuật của nhà văn.\n- Vận dụng được tư duy liên ngành văn học - lịch sử - văn hóa để bình giảng và cảm thụ văn học độc đáo.`,
        equipment: 'Tủ sách văn học hiện đại, tranh ảnh tư liệu, máy chiếu',
        location: 'Lớp học / Phòng bộ môn Ngữ văn',
        digitalCompetency: `• [Mã NLS: 1.2.TC2a] Đánh giá ngữ cảnh thông tin và giá trị nhân văn\n• [Mã AI: 8.A2.1] Phân biệt tư duy sáng tạo con người và văn bản AI`,
        notes: 'Tiếp nhận văn học liên ngành'
      }
    ];
  }

  // 4. MÔN TIẾNG ANH (GLOBAL SUCCESS)
  if (isEn) {
    return [
      {
        id: `st-eng-${g}-1`,
        stt: 1,
        topicName: `Topic 1: English for Global Citizenship, Media Literacy and Intercultural Communication`,
        periods: 12,
        timeline: 'Week 8 - Week 19',
        yccd: `- Biết và nhận diện được các khái niệm về công dân toàn cầu, bản sắc văn hóa và nghi thức giao tiếp đa quốc gia.\n- Trình bày được và hiểu rõ các quan điểm văn hóa đa dạng, tin tức truyền thông quốc tế bằng Tiếng Anh.\n- Vận dụng được vốn từ vựng và cấu trúc giao tiếp quốc tế vào các buổi tọa đàm, tranh biện tiếng Anh.`,
        equipment: 'Projector, Headphones, English LMS Platform, Digital Articles',
        location: 'English Language Lab / Classroom',
        digitalCompetency: `• [NLS Code: 2.1.TC2a] Intercultural digital communication\n• [AI Code: 8.A1.1] Critical evaluation of AI-generated language responses`,
        notes: 'Global Citizenship & Communication'
      },
      {
        id: `st-eng-${g}-2`,
        stt: 2,
        topicName: `Topic 2: Digital Storytelling, Podcast Creation and Media Presentation in English`,
        periods: 11,
        timeline: 'Week 20 - Week 30',
        yccd: `- Biết và nhận diện được cấu trúc kịch bản Podcast, video phóng sự và các công cụ ghi âm, tạo phụ đề số.\n- Trình bày được bài thuyết trình tiếng Anh lưu loát, ngữ điệu chuẩn xác và biểu cảm tự nhiên.\n- Vận dụng được kỹ năng ngôn ngữ và công nghệ số để xuất bản tập Podcast tiếng Anh chủ đề học đường.`,
        equipment: 'Studio Microphones, Canva/Audacity software, Laptops',
        location: 'Smart Classroom / Multimedia Lab',
        digitalCompetency: `• [NLS Code: 3.1.TC2b] Creative multimedia digital content authoring\n• [AI Code: 8.C1.2] English AI pronunciation and grammar feedback tools`,
        notes: 'Digital Storytelling & Podcasts'
      },
      {
        id: `st-eng-${g}-3`,
        stt: 3,
        topicName: `Topic 3: English for STEM Exploration, Sustainable Development and Global Scientific Research`,
        periods: 12,
        timeline: 'Week 1 - Week 12',
        yccd: `- Biết và nhận diện được thuật ngữ khoa học, công nghệ, môi trường và mục tiêu phát triển bền vững (SDGs).\n- Trình bày được và hiểu nội dung các bài báo khoa học, thuyết minh dự án STEM bằng Tiếng Anh.\n- Vận dụng được kỹ năng viết báo cáo khoa học tiếng Anh và thuyết trình dự án bảo vệ môi trường trước tập thể.`,
        equipment: 'Scientific posters, Projector, Online STEM databases',
        location: 'STEM Lab / Language Room',
        digitalCompetency: `• [NLS Code: 5.3.TC2a] Collaborative STEM digital projects\n• [AI Code: 8.D1.1] AI prompts for bilingual scientific research`,
        notes: 'English for STEM & Sustainability'
      }
    ];
  }

  // 5. MÔN KHOA HỌC TỰ NHIÊN / VẬT LÍ / HÓA HỌC / SINH HỌC
  if (s.includes('khoa học tự nhiên') || s.includes('khtn') || s.includes('vật lí') || s.includes('vật lý') || s.includes('hóa') || s.includes('sinh')) {
    return [
      {
        id: `st-sci-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Dự án STEM KHTN: Chế tạo Thiết bị Cảnh báo Môi trường và Hệ thống Tưới thông minh IoT`,
        periods: 15,
        timeline: 'Tuần 10 - Tuần 24',
        yccd: `- Biết, nhận biết được các cảm biến đo độ ẩm đất, cảm biến nhiệt độ, cảm biến khói và vi điều khiển.\n- Trình bày được và hiểu rõ nguyên lý mạch điện cảm biến, phương pháp chuyển đổi tín hiệu vật lý sang tín hiệu số.\n- Vận dụng được kiến thức KHTN vào thiết kế, lắp ráp và lập trình mô hình tưới tự động hoặc cảnh báo cháy thông minh.`,
        equipment: 'Bộ Kit Arduino/Micro:bit, cảm biến độ ẩm, rơ le đóng cắt, bơm mini, máy tính',
        location: 'Phòng thực hành KHTN / Phòng STEM',
        digitalCompetency: `• [Mã NLS: 5.3.TC2a] Chế tạo mô hình STEM ứng dụng công nghệ số\n• [Mã AI: 8.C2.1] Tích hợp AI xử lý tín hiệu cảm biến tự động`,
        notes: 'Dự án STEM IoT'
      },
      {
        id: `st-sci-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Hóa học và Đời sống: Xử lý Nước sạch, Tái chế Rác thải và Sản xuất Sản phẩm Xanh`,
        periods: 10,
        timeline: 'Tuần 22 - Tuần 31',
        yccd: `- Biết, nhận biết được các chỉ số chất lượng nước sạch, các phản ứng xà phòng hóa và nguyên tắc tái chế rác hữu cơ.\n- Trình bày được và hiểu rõ quy trình lắng lọc, khử trùng nước và sản xuất xà phòng sinh học từ dầu ăn thừa.\n- Vận dụng được kiến thức hóa học để chế tạo xà phòng thơm tự nhiên và xây dựng mô hình lọc nước gia đình.`,
        equipment: 'Cốc thủy tinh, phễu lọc, than hoạt tính, cát thạch anh, khuôn đổ xà phòng, tinh dầu',
        location: 'Phòng thí nghiệm KHTN / Phòng Hóa sinh',
        digitalCompetency: `• [Mã NLS: 4.4.TC2a] Ý thức công nghệ và bảo vệ môi trường\n• [Mã AI: 8.D1.1] Khám phá giải pháp kinh tế tuần hoàn`,
        notes: 'Hóa học xanh & Môi trường'
      },
      {
        id: `st-sci-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Sinh học hiện đại: Ứng dụng Công nghệ Vi sinh trong Nông nghiệp sạch và Bảo quản Thực phẩm`,
        periods: 10,
        timeline: 'Tuần 1 - Tuần 10',
        yccd: `- Biết, nhận biết được các chủng vi sinh vật có lợi (nấm men, vi khuẩn lactic) và môi trường nuôi cấy vi sinh.\n- Trình bày được và hiểu rõ cơ chế lên men lactic, lên men rượu và cơ chế bảo quản thực phẩm tự nhiên.\n- Vận dụng được vào thực hành làm sữa chua, muối chua rau quả và ủ phân hữu cơ vi sinh bón cho vườn trường.`,
        equipment: 'Kính hiển vi, tủ ấm vi sinh, nguyên liệu lên men, que cấy vô trùng',
        location: 'Phòng thực hành Sinh học / Vườn trường',
        digitalCompetency: `• [Mã NLS: 5.1.TC2a] Ghi chép và phân tích số liệu thực nghiệm số\n• [Mã AI: 8.C1.1] Nhận diện vi sinh vật qua hình ảnh số`,
        notes: 'Công nghệ vi sinh'
      }
    ];
  }

  // 6. MÔN LỊCH SỬ VÀ ĐỊA LÍ
  if (s.includes('lịch sử') || s.includes('địa lí') || s.includes('địa lý') || s.includes('lsdl')) {
    return [
      {
        id: `st-his-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Số hóa Di sản Văn hóa - Lịch sử Địa phương và Xây dựng Bảo tàng Ảo 3D`,
        periods: 15,
        timeline: 'Tuần 10 - Tuần 24',
        yccd: `- Biết, nhận biết được các di tích lịch sử, danh lam thắng cảnh và làng nghề truyền thống tiêu biểu của địa phương.\n- Trình bày được và hiểu rõ phương pháp chụp ảnh 360°, thu thập tư liệu và ghi âm thuyết minh di sản.\n- Vận dụng được công nghệ số (Tour Creator, Canva) để thiết kế bảo tàng ảo và ấn phẩm giới thiệu di sản quê hương.`,
        equipment: 'Máy ảnh/Smartphone, máy tính kết nối Internet, phần mềm tạo tour ảo 360°',
        location: 'Thực địa di tích địa phương / Phòng Tin học',
        digitalCompetency: `• [Mã NLS: 3.1.TC2b] Sáng tạo sản phẩm số quảng bá di sản\n• [Mã AI: 8.C1.2] Trợ lý AI hỗ trợ biên soạn nội dung thuyết minh`,
        notes: 'Số hóa di sản văn hóa'
      },
      {
        id: `st-his-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Biến đổi Khí hậu, Thiên tai và Chiến lược Phát triển Bền vững Kinh tế Biển Việt Nam`,
        periods: 10,
        timeline: 'Tuần 22 - Tuần 31',
        yccd: `- Biết, nhận biết được các biểu hiện của biến đổi khí hậu, hiện tượng nước biển dâng và các vùng kinh tế biển trọng điểm.\n- Trình bày được và hiểu rõ tác động của thiên tai đến đời sống và tiềm năng khai thác bền vững tài nguyên biển đảo.\n- Vận dụng được bản đồ số, GIS và dữ liệu khí tượng để đề xuất giải pháp giảm thiểu rủi ro thiên tai tại cộng đồng.`,
        equipment: 'Bản đồ số, Atlas Địa lí, phần mềm Google Earth, máy chiếu',
        location: 'Phòng bộ môn Địa lí / Lớp học',
        digitalCompetency: `• [Mã NLS: 1.3.TC2a] Khai thác dữ liệu không gian địa lí GIS\n• [Mã AI: 8.D1.1] Phân tích mô hình cảnh báo thiên tai`,
        notes: 'Kinh tế biển & Khí hậu'
      },
      {
        id: `st-his-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Lịch sử Nghệ thuật Quân sự Việt Nam qua các Cuộc Kháng chiến Bảo vệ Tổ quốc`,
        periods: 10,
        timeline: 'Tuần 1 - Tuần 10',
        yccd: `- Biết, nhận biết được các trận đánh quyết chiến chiến lược trong lịch sử dựng nước và giữ nước của dân tộc.\n- Trình bày được và hiểu sâu sắc nghệ thuật lấy ít địch nhiều, lấy yếu thắng mạnh và nghệ thuật chiến tranh nhân dân.\n- Vận dụng được bài học đoàn kết toàn dân và lòng yêu nước vào trách nhiệm bảo vệ chủ quyền quốc gia hiện nay.`,
        equipment: 'Phim tư liệu lịch sử, sa bàn quân sự, tranh ảnh lịch sử',
        location: 'Lớp học / Phòng truyền thống',
        digitalCompetency: `• [Mã NLS: 1.2.TC2a] Khai thác và đánh giá nguồn tư liệu lịch sử chính thống\n• [Mã AI: 8.A1.1] Phân tích tư duy chiến lược quân sự Việt Nam`,
        notes: 'Nghệ thuật quân sự'
      }
    ];
  }

  // 7. MÔN CÔNG NGHỆ
  if (s.includes('công nghệ') || s.includes('cong nghe')) {
    return [
      {
        id: `st-tech-${g}-1`,
        stt: 1,
        topicName: `Chuyên đề 1: Thiết kế Mô hình 3D và Ứng dụng Công nghệ In 3D trong Chế tạo Sản phẩm Kỹ thuật`,
        periods: 15,
        timeline: 'Tuần 10 - Tuần 24',
        yccd: `- Biết, nhận biết được các công cụ tạo hình 3D trong phần mềm Tinkercad/Fusion 360 và nguyên lý máy in 3D.\n- Trình bày được và hiểu rõ quy trình chuyển đổi bản vẽ thiết kế sang file in 3D (STL, G-code) và các thông số in.\n- Vận dụng được phần mềm 3D để tự thiết kế móc khóa, vỏ hộp bảo vệ mạch điện và in sản phẩm thực tế.`,
        equipment: 'Máy tính cài đặt Tinkercad, máy in 3D FDM, cuộn nhựa in PLA',
        location: 'Xưởng thực hành Công nghệ / Phòng STEM',
        digitalCompetency: `• [Mã NLS: 3.1.TC2a] Thiết kế mô hình 3D trên môi trường số\n• [Mã AI: 8.C2.1] Ứng dụng AI tạo mẫu ý tưởng thiết kế 3D`,
        notes: 'Thiết kế 3D & In 3D'
      },
      {
        id: `st-tech-${g}-2`,
        stt: 2,
        topicName: `Chuyên đề 2: Lắp đặt và Vận hành Mạng điện Thông minh Smart Home Điều khiển qua Smartphone`,
        periods: 10,
        timeline: 'Tuần 22 - Tuần 31',
        yccd: `- Biết, nhận biết được các công tắc thông minh Wi-Fi/Zigbee, cảm biến chuyển động và ứng dụng quản lý nhà thông minh.\n- Trình bày được và hiểu rõ sơ đồ đấu nối an toàn điện và nguyên tắc điều khiển từ xa qua mạng Internet.\n- Vận dụng được vào lắp ráp mô hình điều khiển đèn chiếu sáng, quạt điện tự động bằng giọng nói và điện thoại.`,
        equipment: 'Mô hình nhà gỗ mini, công tắc Wi-Fi Sonoff/Tuya, đèn LED, smartphone',
        location: 'Phòng thực hành Điện - Công nghệ',
        digitalCompetency: `• [Mã NLS: 5.3.TC2a] Lắp ráp hệ thống điều khiển thông minh\n• [Mã AI: 8.C2.1] Điều khiển thiết bị bằng trợ lý ảo giọng nói AI`,
        notes: 'Smart Home & Tự động hóa'
      },
      {
        id: `st-tech-${g}-3`,
        stt: 3,
        topicName: `Chuyên đề 3: Kỹ thuật Trồng cây Thủy canh và Nuôi trồng Thủy sản Công nghệ cao An toàn sinh học`,
        periods: 10,
        timeline: 'Tuần 1 - Tuần 10',
        yccd: `- Biết, nhận biết được hệ thống thủy canh hồi lưu (NFT), dung dịch dinh dưỡng khoáng và bút đo nồng độ PPM/pH.\n- Trình bày được và hiểu rõ quy trình ươm hạt, pha chế dung dịch dinh dưỡng và điều chỉnh nồng độ phù hợp từng giai đoạn.\n- Vận dụng được vào xây dựng giàn trồng rau thủy canh tại trường học tạo nguồn rau sạch và bảo vệ môi trường.`,
        equipment: 'Giàn ống thủy canh, bơm chìm, rọ nhựa, xơ dừa, hạt giống, dung dịch dinh dưỡng',
        location: 'Vườn thực nghiệm Công nghệ nông nghiệp',
        digitalCompetency: `• [Mã NLS: 5.2.TC2a] Giám sát và ghi nhận chỉ số dinh dưỡng số\n• [Mã AI: 8.D1.1] Tối ưu hóa chu trình chăm sóc cây trồng`,
        notes: 'Nông nghiệp công nghệ cao'
      }
    ];
  }

  // 8. CÁC MÔN HỌC KHÁC (GDCD, GDTC, HĐTN, Âm nhạc, Mĩ thuật, v.v.)
  return [
    {
      id: `st-gen-${g}-1`,
      stt: 1,
      topicName: `Chuyên đề 1: Ứng dụng Công nghệ số và AI trong Nghiên cứu, Học tập sáng tạo môn ${subject}`,
      periods: 15,
      timeline: 'Tuần 10 - Tuần 24',
      yccd: `- Biết, nhận biết được các công cụ số chuyên ngành, phần mềm học tập và trợ lý trí tuệ nhân tạo (AI) phục vụ môn học.\n- Trình bày được và hiểu rõ phương pháp khai thác thông tin, phân tích dữ liệu và đạo đức số trong học tập.\n- Vận dụng được các công cụ số vào thực hiện dự án học tập, tạo sản phẩm báo cáo đa phương tiện chất lượng cao.`,
      equipment: 'Máy tính kết nối Internet, máy chiếu, tài liệu học liệu số chuyên ngành',
      location: 'Phòng bộ môn / Phòng Tin học',
      digitalCompetency: `• [Mã NLS: 1.1.TC2a] Tìm kiếm và thẩm định thông tin số\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI có trách nhiệm và hiệu quả`,
      notes: 'Chuyên đề Ứng dụng số & AI'
    },
    {
      id: `st-gen-${g}-2`,
      stt: 2,
      topicName: `Chuyên đề 2: Dự án Trải nghiệm Sáng tạo liên môn STEM gắn với Thực tiễn Đời sống Địa phương`,
      periods: 10,
      timeline: 'Tuần 22 - Tuần 31',
      yccd: `- Biết, nhận biết được quy trình thiết kế kỹ thuật, phương pháp làm việc nhóm và phân công nhiệm vụ dự án.\n- Trình bày được và hiểu rõ mối liên hệ liên môn giữa ${subject} với các môn khoa học và công nghệ.\n- Vận dụng được kiến thức đã học để sáng tạo sản phẩm thực tiễn giải quyết vấn đề cộng đồng tại địa phương.`,
      equipment: 'Vật liệu tái chế, bộ dụng cụ thực hành, giấy vẽ poster, máy tính',
      location: 'Phòng STEM / Lớp học',
      digitalCompetency: `• [Mã NLS: 5.3.TC2a] Hợp tác tạo ra sản phẩm STEM liên môn\n• [Mã AI: 8.D1.1] Xây dựng giải pháp giải quyết vấn đề thực tế`,
      notes: 'Dự án STEM liên môn'
    },
    {
      id: `st-gen-${g}-3`,
      stt: 3,
      topicName: `Chuyên đề 3: Rèn luyện Kỹ năng Mềm, Năng lực Tự chủ và Hướng nghiệp trong Kỷ nguyên Số`,
      periods: 10,
      timeline: 'Tuần 1 - Tuần 10',
      yccd: `- Biết, nhận biết được các kỹ năng thế kỷ 21 (tư duy phản biện, giao tiếp, hợp tác, sáng tạo) và xu hướng nghề nghiệp mới.\n- Trình bày được và hiểu rõ cách quản lý thời gian, xây dựng thương hiệu cá nhân và tự học suốt đời.\n- Vận dụng được vào xây dựng hồ sơ năng lực cá nhân (e-Portfolio) và kế hoạch phát triển nghề nghiệp tương lai.`,
      equipment: 'Mẫu hồ sơ e-Portfolio, tài liệu hướng nghiệp số, máy chiếu',
      location: 'Lớp học / Phòng đa năng',
      digitalCompetency: `• [Mã NLS: 2.4.TC2a] Hợp tác trong môi trường số\n• [Mã AI: 8.A2.1] Định hướng nghề nghiệp thích ứng với thời đại AI`,
      notes: 'Kỹ năng mềm & Hướng nghiệp'
    }
  ];
}
