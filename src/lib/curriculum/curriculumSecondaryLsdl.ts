import { RawSecondaryLesson } from './curriculumSecondary';

export interface LsdlSecondaryGradeConfig {
  grade: number;
  lessons: Array<{
    week: number;
    topic: string;
    name: string;
    periods: number;
    yccd: string;
    equipment: string;
    location: string;
    notes?: string;
  }>;
}

/**
 * Phân phối chương trình chi tiết môn Lịch sử và Địa lí Lớp 6, 7, 8, 9 (105 tiết/năm = 3 tiết/tuần x 35 tuần)
 * 100% chuẩn SGK Kết nối tri thức với cuộc sống & file tổng hợp tong-hop-chuong-trinh-lop-6-7-8-9.md
 * Các tuần kiểm tra định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (3 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (3 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (3 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (3 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại cả năm (3 tiết)
 */
export function getLsdlSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: LỊCH SỬ & ĐỊA LÍ (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Mở đầu & Phân môn Địa lí: Bản đồ',
        n: 'Lịch sử - Bài 1: Lịch sử và cuộc sống & Địa lí: Bài mở đầu (3 tiết)',
        y: '- Nêu được khái niệm lịch sử và môn Lịch sử; giải thích được vì sao cần phải học lịch sử.\n- Làm quen với môn Địa lí 6, nhận biết vai trò của kiến thức địa lí trong đời sống hàng ngày.'
      },
      {
        w: 2,
        t: 'Lịch sử: Phương pháp phục dựng & Địa lí: Hệ thống kinh vĩ tuyến',
        n: 'Lịch sử - Bài 2: Dựa vào đâu để biết và phục dựng lại lịch sử? & Địa lí - Bài 1: Hệ thống kinh, vĩ tuyến. Toạ độ địa lí (3 tiết)',
        y: '- Phân biệt được các nguồn sử liệu: hiện vật, chữ viết, truyền miệng và tư liệu gốc.\n- Xác định được kinh tuyến gốc, vĩ tuyến gốc, các bán cầu và cách ghi toạ độ địa lí của một điểm.'
      },
      {
        w: 3,
        t: 'Lịch sử: Thời gian & Địa lí: Bản đồ và phương hướng',
        n: 'Lịch sử - Bài 3: Thời gian trong lịch sử & Địa lí - Bài 2: Bản đồ. Một số lưới kinh, vĩ tuyến. Phương hướng trên bản đồ (3 tiết)',
        y: '- Hiểu được các cách tính thời gian trong lịch sử: Âm lịch, Dương lịch, Công nguyên, Thiên niên kỉ, Thế kỉ, Thập kỉ.\n- Biết cách xác định phương hướng trên bản đồ dựa vào hệ thống kinh vĩ tuyến hoặc kim chỉ nam.'
      },
      {
        w: 4,
        t: 'Lịch sử: Nguồn gốc loài người & Địa lí: Tỉ lệ bản đồ',
        n: 'Lịch sử - Bài 4: Nguồn gốc loài người & Địa lí - Bài 3: Tỉ lệ bản đồ. Tính khoảng cách thực tế dựa vào tỉ lệ bản đồ (3 tiết)',
        y: '- Trình bày được quá trình tiến hóa từ Vượn người thành Người tối cổ và Người tinh khôn.\n- Hiểu ý nghĩa của tỉ lệ bản đồ và tính được khoảng cách thực tế trên thực địa dựa vào tỉ lệ bản đồ.'
      },
      {
        w: 5,
        t: 'Lịch sử: Xã hội nguyên thuỷ & Địa lí: Kí hiệu bản đồ',
        n: 'Lịch sử - Bài 5: Xã hội nguyên thuỷ & Địa lí - Bài 4: Kí hiệu và bảng chú giải bản đồ. Tìm đường đi trên bản đồ (3 tiết)',
        y: '- Nêu được các giai đoạn phát triển của xã hội nguyên thủy: bầy người nguyên thủy, công xã thị tộc và bộ lạc.\n- Đọc và phân biệt các loại kí hiệu bản đồ (điểm, đường, diện tích); tìm đường đi trên bản đồ.'
      },
      {
        w: 6,
        t: 'Lịch sử: Kim loại & Địa lí: Lược đồ trí nhớ',
        n: 'Lịch sử - Bài 6: Sự chuyển biến và phân hoá của xã hội nguyên thuỷ & Địa lí - Bài 5: Lược đồ trí nhớ (3 tiết)',
        y: '- Giải thích sự xuất hiện của công cụ kim loại dẫn đến của cải dư thừa, gia đình phụ hệ và phân hóa giàu nghèo.\n- Vẽ và sử dụng lược đồ trí nhớ định hướng không gian xung quanh trường học/nơi ở.'
      },
      {
        w: 7,
        t: 'Lịch sử: Ai Cập và Lưỡng Hà & Địa lí: Trái Đất trong hệ Mặt Trời',
        n: 'Lịch sử - Bài 7: Ai Cập và Lưỡng Hà cổ đại & Địa lí - Bài 6: Trái Đất trong hệ Mặt Trời (3 tiết)',
        y: '- Trình bày điều kiện tự nhiên, quá trình thành lập nhà nước và thành tựu văn hóa Ai Cập, Lưỡng Hà (Kim tự tháp, chữ tượng hình, số học).\n- Nêu vị trí Trái Đất trong hệ Mặt Trời, hình dạng và kích thước của Trái Đất.'
      },
      {
        w: 8,
        t: 'Lịch sử: Ấn Độ cổ đại & Địa lí: Chuyển động tự quay của Trái Đất',
        n: 'Lịch sử - Bài 8: Ấn Độ cổ đại & Địa lí - Bài 7: Chuyển động tự quay quanh trục của Trái Đất và hệ quả (3 tiết)',
        y: '- Nêu điều kiện tự nhiên sông Ấn, sông Hằng, chế độ đẳng cấp Vác-na và tôn giáo (Bà La Môn, Phật giáo).\n- Giải thích hiện tượng ngày đêm luân phiên, giờ trên Trái Đất và sự lệch hướng chuyển động của các vật thể.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng Lịch sử nguyên thủy, Lịch sử cổ đại phương Đông và Địa lí bản đồ, Trái Đất.\n- Rèn luyện kỹ năng phân tích lược đồ và trả lời câu hỏi trắc nghiệm/tự luận.'
      },
      {
        w: 10,
        t: 'Lịch sử: Trung Quốc cổ đại & Địa lí: Trái Đất quay quanh Mặt Trời',
        n: 'Lịch sử - Bài 9: Trung Quốc từ thời cổ đại đến thế kỉ VII & Địa lí - Bài 8: Chuyển động của Trái Đất quanh Mặt Trời và hệ quả (3 tiết)',
        y: '- Trình bày quá trình Tần Thủy Hoàng thống nhất Trung Quốc, con đường tơ lụa và các thành tựu văn hóa Nho giáo, chữ viết, Vạn Lý Trường Thành.\n- Giải thích hiện tượng mùa và hiện tượng ngày đêm dài ngắn theo mùa trên Trái Đất.'
      },
      {
        w: 11,
        t: 'Lịch sử: Hy Lạp và La Mã cổ đại & Địa lí: Cấu tạo Trái Đất',
        n: 'Lịch sử - Bài 10: Hy Lạp và La Mã cổ đại & Địa lí - Bài 9: Cấu tạo của Trái Đất. Động đất và núi lửa (3 tiết)',
        y: '- Nêu tổ chức nhà nước thành bang dân chủ Hy Lạp, đế chế La Mã và thành tựu văn hóa (Đấu trường La Mã, Thế vận hội Ô-lim-pích, luật La Mã).\n- Mô tả cấu tạo 3 lớp của Trái Đất, nguyên nhân và tác hại của động đất, núi lửa.'
      },
      {
        w: 12,
        t: 'Lịch sử: Đông Nam Á cổ đại & Địa lí: Ngoại lực và nội lực',
        n: 'Lịch sử - Bài 11: Các quốc gia sơ kì ở Đông Nam Á & Địa lí - Bài 10: Quá trình nội lực và ngoại lực. Hiện tượng tạo núi (3 tiết)',
        y: '- Nêu sự xuất hiện của các quốc gia sơ kì ở ĐNA từ thế kỉ VII TCN đến thế kỉ VII; phân biệt tác động của nội lực (nâng cao, hạ thấp) và ngoại lực (bào mòn, bồi tụ).'
      },
      {
        w: 13,
        t: 'Lịch sử: ĐNA từ thế kỉ VII - X & Địa lí: Địa hình Trái Đất',
        n: 'Lịch sử - Bài 12: Sự hình thành và phát triển của các vương quốc phong kiến Đông Nam Á & Địa lí - Bài 11: Các dạng địa hình chính trên Trái Đất. Khoáng sản (3 tiết)',
        y: '- Trình bày sự phát triển hưng thịnh của các vương quốc ĐNA (Phù Nam, Chân Lạp, Sri Vi-giay-a); phân biệt núi, đồi, cao nguyên, đồng bằng và khoáng sản.'
      },
      {
        w: 14,
        t: 'Lịch sử: Nhà nước Văn Lang, Âu Lạc & Địa lí: Núi lửa, động đất',
        n: 'Lịch sử - Bài 13: Giao lưu thương mại và văn hoá ở Đông Nam Á từ đầu Công nguyên đến thế kỉ X & Bài 14: Nhà nước Văn Lang, Âu Lạc (Tiết 1) & Địa lí - Bài 12: Thực hành: Đọc lược đồ địa hình tỉ lệ lớn và lát cắt địa hình đơn giản (3 tiết)',
        y: '- Nêu tác động của giao lưu thương mại Ấn Độ, Trung Quốc đến ĐNA; phân tích sự ra đời của nhà nước Văn Lang thời Hùng Vương; đọc lược đồ địa hình lát cắt.'
      },
      {
        w: 15,
        t: 'Lịch sử: Nước Âu Lạc & Địa lí: Khí quyển và nhiệt độ',
        n: 'Lịch sử - Bài 14: Nhà nước Văn Lang, Âu Lạc (Tiết 2) & Địa lí - Bài 13: Các dạng địa hình chính (tiếp) & Bài 14: Lớp vỏ khí. Khối khí. Khí áp và gió trên Trái Đất (3 tiết)',
        y: '- Trình bày sự thành lập nước Âu Lạc thời Thục Phán An Dương Vương, thành Cổ Loa, truyền thuyết nỏ thần; mô tả các tầng của lớp vỏ khí và các đai khí áp, gió chính.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Đánh giá tổng hợp toàn diện kết quả học tập phân môn Lịch sử và Địa lí trong Học kỳ 1.\n- Phân loại học lực học sinh làm căn cứ triển khai kế hoạch giáo dục Học kỳ 2.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1, phân tích lỗi sai; hệ thống hóa các kiến thức Lịch sử thế giới cổ đại, Lịch sử Việt Nam thời dựng nước và Địa lí tự nhiên đại cương HK1.',
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Đánh giá tổng kết quá trình học tập và rèn luyện môn Lịch sử và Địa lí trong Học kỳ 1; định hướng học tập HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Lịch sử: Thời Bắc thuộc & Địa lí: Nhiệt độ không khí, mưa',
        n: 'Lịch sử - Bài 15: Chính sách cai trị của các triều đại phong kiến phương Bắc và sự chuyển biến về kinh tế - xã hội của Việt Nam thời Bắc thuộc & Địa lí - Bài 16: Nhiệt độ không khí. Mây và mưa (3 tiết)',
        y: '- Nêu được chính sách cai trị bóc lột của phong kiến phương Bắc và những chuyển biến kinh tế, xã hội nước ta.\n- Tính nhiệt độ trung bình ngày/tháng/năm và giải thích sự hình thành mây, mưa.'
      },
      {
        w: 20,
        t: 'Lịch sử: Khởi nghĩa trước thế kỉ X & Địa lí: Thời tiết, khí hậu',
        n: 'Lịch sử - Bài 16: Các cuộc khởi nghĩa tiêu biểu giành độc lập trước thế kỉ X & Địa lí - Bài 17: Thời tiết và khí hậu. Biến đổi khí hậu (3 tiết)',
        y: '- Tóm tắt được diễn biến chính và ý nghĩa của các cuộc khởi nghĩa Hai Bà Trưng, Bà Triệu, Lý Bí, Mai Thúc Loan, Phùng Hưng.\n- Phân biệt thời tiết và khí hậu; nêu biểu hiện và tác động của biến đổi khí hậu toàn cầu.'
      },
      {
        w: 21,
        t: 'Địa lí: Biểu đồ nhiệt độ mưa & Thuỷ quyển',
        n: 'Địa lí - Bài 18: Thực hành: Phân tích biểu đồ nhiệt độ, lượng mưa & Bài 19: Thuỷ quyển và vòng tuần hoàn lớn của nước (3 tiết)',
        y: '- Phân tích biểu đồ nhiệt ẩm; trình bày được vòng tuần hoàn lớn của nước trong tự nhiên.'
      },
      {
        w: 22,
        t: 'Lịch sử: Bảo tồn văn hoá & Địa lí: Sông, hồ, nước ngầm',
        n: 'Lịch sử - Bài 17: Cuộc đấu tranh bảo tồn và phát triển văn hoá dân tộc của người Việt & Địa lí - Bài 20: Sông và hồ. Nước ngầm và băng hà (3 tiết)',
        y: '- Nêu được các nét văn hóa truyền thống được nhân dân giữ gìn và tiếp thu có chọn lọc trong thời Bắc thuộc.\n- Mô tả các bộ phận của một dòng sông; nêu vai trò của nước ngầm và băng hà.'
      },
      {
        w: 23,
        t: 'Lịch sử: Bước ngoặt đầu thế kỉ X & Địa lí: Biển và đại dương',
        n: 'Lịch sử - Bài 18: Bước ngoặt lịch sử đầu thế kỉ X & Địa lí - Bài 21: Biển và đại dương (3 tiết)',
        y: '- Phân tích ý nghĩa cuộc vận động tự chủ của Khúc Thừa Dụ và Chiến thắng Bạch Đằng năm 938 của Ngô Quyền chấm dứt 1000 năm Bắc thuộc.\n- Trình bày được các hiện tượng sóng biển, thủy triều và dòng biển trong đại dương.'
      },
      {
        w: 24,
        t: 'Lịch sử: Vương quốc Chăm-pa & Địa lí: Lớp đất Trái Đất',
        n: 'Lịch sử - Bài 19: Vương quốc Chăm-pa từ thế kỉ II đến thế kỉ X & Địa lí - Bài 22: Lớp đất trên Trái Đất (3 tiết)',
        y: '- Nêu được quá trình hình thành, tổ chức chính quyền và thành tựu văn hóa Chăm-pa.\n- Trình bày các tầng đất, thành phần của đất và các nhân tố hình thành đất.'
      },
      {
        w: 25,
        t: 'Lịch sử: Vương quốc Phù Nam & Địa lí: Sự sống & Rừng nhiệt đới',
        n: 'Lịch sử - Bài 20: Vương quốc Phù Nam & Địa lí - Bài 23: Sự sống trên Trái Đất & Bài 24: Rừng nhiệt đới (3 tiết)',
        y: '- Mô tả được sự phát triển hưng thịnh của Phù Nam qua di chỉ Óc Eo; đặc điểm đa dạng sinh vật và các tầng tán của rừng nhiệt đới.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Đánh giá mức độ tiếp thu các chuyên đề lịch sử chống Bắc thuộc và địa lí thủy quyển, sinh quyển từ Tuần 19 đến 25.\n- Rèn luyện kỹ năng làm bài kiểm tra trắc nghiệm kết hợp tự luận.'
      },
      {
        w: 27,
        t: 'Địa lí: Đới thiên nhiên & Môi trường tự nhiên địa phương',
        n: 'Địa lí - Bài 25: Sự phân bố các đới thiên nhiên trên Trái Đất & Bài 26: Thực hành: Tìm hiểu môi trường tự nhiên địa phương (3 tiết)',
        y: '- Xác định được phạm vi, đặc điểm của đới nóng, đới ôn hòa, đới lạnh; thu thập tư liệu về môi trường địa phương.'
      },
      {
        w: 28,
        t: 'Địa lí: Dân số và phân bố dân cư',
        n: 'Địa lí - Bài 27: Dân số và sự phân bố dân cư trên thế giới (3 tiết)',
        y: '- Đọc được quy mô dân số thế giới; phân tích sự phân bố dân cư không đồng đều qua bản đồ mật độ dân số.'
      },
      {
        w: 29,
        t: 'Địa lí: Con người và thiên nhiên',
        n: 'Địa lí - Bài 28: Mối quan hệ giữa con người và thiên nhiên (3 tiết)',
        y: '- Phân tích tác động hai chiều: thiên nhiên cung cấp tài nguyên, môi trường sống; con người khai thác và tác động lại tự nhiên.'
      },
      {
        w: 30,
        t: 'Địa lí: Bảo vệ tự nhiên và phát triển bền vững',
        n: 'Địa lí - Bài 29: Bảo vệ tự nhiên và khai thác thông minh các tài nguyên thiên nhiên vì sự phát triển bền vững (3 tiết)',
        y: '- Nêu được ý nghĩa của phát triển bền vững và các biện pháp bảo vệ tài nguyên rừng, đất, nước, khoáng sản.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Đánh giá kết quả học tập cả năm môn Lịch sử và Địa lí 6 theo chuẩn CT GDPT 2018; tổng kết, xếp loại học sinh.'
      },
      {
        w: 32,
        t: 'Địa lí: Thực hành môi trường địa phương & Chữa bài kiểm tra',
        n: 'Chữa bài kiểm tra cuối HK2 & Địa lí - Bài 30: Thực hành: Tìm hiểu mối quan hệ giữa con người và thiên nhiên ở địa phương (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; điều tra, viết báo cáo ngắn về việc sử dụng tài nguyên và bảo vệ môi trường tại nơi học sinh sinh sống.'
      },
      {
        w: 33,
        t: 'Dự án STEM',
        n: 'Dự án STEM Lịch sử Địa lí 6: "Mô hình Khám phá Trái Đất & Sa bàn Văn hóa Thời kỳ Văn Lang - Âu Lạc" (3 tiết)',
        y: '- Ứng dụng công nghệ số và vật liệu tái chế để chế tạo mô hình địa cầu/sa bàn lịch sử.\n- Phát triển năng lực sáng tạo, tư duy liên môn và kỹ năng thuyết trình nhóm.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Hệ thống hóa toàn bộ kiến thức và ôn tập cuối năm Lịch sử và Địa lí Lớp 6 (3 tiết)',
        y: '- Khái quát toàn bộ mạch kiến thức Lịch sử từ thời nguyên thủy đến đầu thế kỉ X và Địa lí tự nhiên, con người Trái Đất.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Lịch sử và Địa lí Lớp 6 cả năm (3 tiết)',
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Lịch sử và Địa lí Lớp 6 của học sinh.'
      }
    ];

    grade6Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Bản đồ thế giới, Bản đồ lịch sử Việt Nam, Atlas Địa lí 6, tranh ảnh hiện vật khảo cổ, máy chiếu',
        location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: LỊCH SỬ & ĐỊA LÍ (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Lịch sử: Phong kiến Tây Âu & Địa lí: Vị trí tự nhiên Châu Âu',
        n: 'Lịch sử - Bài 1: Quá trình hình thành và phát triển của chế độ phong kiến ở Tây Âu & Địa lí - Bài 1: Vị trí địa lí, đặc điểm tự nhiên châu Âu (3 tiết)',
        y: '- Trình bày được quá trình hình thành xã hội phong kiến, lãnh địa và thành thị trung đại ở Tây Âu.\n- Xác định được vị trí địa lí, giới hạn và các khu vực địa hình, khí hậu, sông ngòi chính của Châu Âu.'
      },
      {
        w: 2,
        t: 'Lịch sử: Phát kiến địa lí & Chủ đề chung 1: Đại phát kiến',
        n: 'Lịch sử - Bài 2: Các cuộc phát kiến địa lí và sự hình thành quan hệ sản xuất tư bản chủ nghĩa ở Tây Âu & Chủ đề chung 1: Các cuộc đại phát kiến địa lí (3 tiết)',
        y: '- Phân tích nguyên nhân, các cuộc phát kiến vĩ đại (C.Cô-lôm-bô, Ma-gien-lăng) và sự nảy sinh CNTB ở Tây Âu.'
      },
      {
        w: 3,
        t: 'Lịch sử: Văn hóa Phục hưng & Địa lí: Dân cư Châu Âu',
        n: 'Lịch sử - Bài 3: Phong trào Văn hoá Phục hưng và Cải cách tôn giáo & Địa lí - Bài 2: Đặc điểm dân cư, xã hội châu Âu (3 tiết)',
        y: '- Trình bày những thành tựu văn hóa Phục hưng, tư tưởng nhân văn và phong trào Cải cách tôn giáo.\n- Nêu đặc điểm cơ cấu dân số già, mức độ đô thị hóa cao và di cư ở Châu Âu.'
      },
      {
        w: 4,
        t: 'Địa lí: Khai thác thiên nhiên Châu Âu & Liên minh Châu Âu (EU)',
        n: 'Địa lí - Bài 3: Khai thác, sử dụng và bảo vệ thiên nhiên ở châu Âu & Bài 4: Liên minh châu Âu (3 tiết)',
        y: '- Phân tích vấn đề bảo vệ môi trường nước, không khí và đa dạng sinh học ở Châu Âu; vị thế của Liên minh Châu Âu EU.'
      },
      {
        w: 5,
        t: 'Lịch sử: Trung Quốc trung đại & Địa lí: Vị trí tự nhiên Châu Á',
        n: 'Lịch sử - Bài 4: Trung Quốc từ thế kỉ VII đến giữa thế kỉ XIX & Địa lí - Bài 5: Vị trí địa lí, đặc điểm tự nhiên châu Á (3 tiết)',
        y: '- Trình bày sự phát triển kinh tế, chính trị thời Đường, Tống, Minh, Thanh và các thành tựu văn hóa TQ.\n- Nêu đặc điểm vị trí, kích thước khổng lồ, các đới địa hình và khí hậu đa dạng của Châu Á.'
      },
      {
        w: 6,
        t: 'Lịch sử: Ấn Độ trung đại & Địa lí: Dân cư Châu Á',
        n: 'Lịch sử - Bài 5: Ấn Độ từ thế kỉ IV đến giữa thế kỉ XIX & Địa lí - Bài 6: Đặc điểm dân cư, xã hội châu Á (3 tiết)',
        y: '- Trình bày các triều đại Gúp-ta, Hồi giáo Đê-li, Mô-gôn và các thành tựu kiến trúc, tôn giáo Ấn Độ.\n- Nêu đặc điểm đông dân nhất thế giới, sự phân bố dân cư và nơi ra đời của các tôn giáo lớn.'
      },
      {
        w: 7,
        t: 'Lịch sử: Đông Nam Á phong kiến & Địa lí: Bản đồ chính trị Châu Á',
        n: 'Lịch sử - Bài 6: Các vương quốc phong kiến Đông Nam Á từ nửa sau thế kỉ X đến nửa đầu thế kỉ XVI & Địa lí - Bài 7: Bản đồ chính trị châu Á, các khu vực của châu Á (3 tiết)',
        y: '- Mô tả sự phát triển rực rỡ của các vương quốc phong kiến ĐNA; xác định các khu vực: Đông Á, Nam Á, Đông Nam Á, Tây Á, Trung Á.'
      },
      {
        w: 8,
        t: 'Lịch sử: Vương quốc Lào, Cam-pu-chia & Địa lí: Kinh tế Châu Á',
        n: 'Lịch sử - Bài 7: Vương quốc Lào & Bài 8: Vương quốc Cam-pu-chia & Địa lí - Bài 8: Thực hành: Tìm hiểu về các nền kinh tế lớn và kinh tế mới nổi của châu Á (3 tiết)',
        y: '- Trình bày sự hình thành, phát triển của Vương quốc Lan Xang và Vương quốc Chân Lạp (Ăng-co); phân tích sự phát triển kinh tế của Nhật Bản, Trung Quốc, Hàn Quốc, Singapore.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng Lịch sử & Địa lí lớp 7 từ Tuần 1 đến Tuần 8.\n- Rèn luyện kỹ năng làm bài kiểm tra tổng hợp.'
      },
      {
        w: 10,
        t: 'Lịch sử: Đất nước buổi đầu độc lập (939 - 1009)',
        n: 'Lịch sử - Bài 9: Đất nước buổi đầu độc lập (939 - 967) & Bài 10: Đại Cồ Việt thời Đinh và Tiền Lê (968 - 1009) (3 tiết)',
        y: '- Trình bày công cuộc xây dựng chính quyền của Ngô Quyền, dẹp loạn 12 sứ quân của Đinh Bộ Lĩnh và cuộc kháng chiến chống Tống thời Tiền Lê.'
      },
      {
        w: 11,
        t: 'Lịch sử: Đại Việt thời Lý (1009 - 1225)',
        n: 'Lịch sử - Bài 11: Nhà Lý xây dựng và phát triển đất nước (1009 - 1225) (3 tiết)',
        y: '- Trình bày sự thành lập nhà Lý, dời đô về Thăng Long (1010), xây dựng quân đội, luật pháp (Hình thư) và văn hóa - giáo dục (Văn Miếu).'
      },
      {
        w: 12,
        t: 'Lịch sử: Kháng chiến chống Tống thời Lý',
        n: 'Lịch sử - Bài 12: Cuộc kháng chiến chống quân xâm lược Tống (1075 - 1077) (3 tiết)',
        y: '- Phân tích nghệ thuật quân sự độc đáo của Lý Thường Kiệt (chủ động tiến công phòng vệ và phòng tuyến sông Như Nguyệt, Nam quốc sơn hà).'
      },
      {
        w: 13,
        t: 'Địa lí: Tự nhiên và Dân cư Châu Phi',
        n: 'Địa lí - Bài 9: Vị trí địa lí, đặc điểm tự nhiên châu Phi & Bài 10: Đặc điểm dân cư, xã hội châu Phi (3 tiết)',
        y: '- Xác định vị trí địa lí, khí hậu khô nóng, các hoang mạc lớn ở Châu Phi; đặc điểm gia tăng dân số nhanh và xung đột sắc tộc.'
      },
      {
        w: 14,
        t: 'Địa lí: Khai thác thiên nhiên Châu Phi & Nam Phi',
        n: 'Địa lí - Bài 11: Phương thức con người khai thác, sử dụng và bảo vệ thiên nhiên ở châu Phi & Bài 12: Thực hành: Tìm hiểu khái quát Cộng hoà Nam Phi (3 tiết)',
        y: '- Nêu phương thức khai thác khoáng sản, môi trường hoang mạc Xa-ha-ra; tìm hiểu tiềm năng phát triển kinh tế Cộng hòa Nam Phi.'
      },
      {
        w: 15,
        t: 'Chủ đề chung 2: Đô thị: Lịch sử và hiện tại',
        n: 'Chủ đề chung 2: Đô thị: Lịch sử và hiện tại (Tiết 1 - 3) (3 tiết)',
        y: '- Trình bày điều kiện hình thành và vai trò của các đô thị cổ, trung đại đối với sự phát triển kinh tế, văn hóa và xã hội.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập phân môn Lịch sử và Địa lí trong toàn bộ Học kỳ 1 Lớp 7.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; hệ thống hóa toàn bộ kiến thức Lịch sử thế giới trung đại, lịch sử Đại Việt TK X-XI và Địa lí Châu Âu, Châu Á, Châu Phi.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Đánh giá tổng kết quá trình học tập và rèn luyện môn Lịch sử và Địa lí trong Học kỳ 1; định hướng học tập HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Lịch sử: Đại Việt thời Trần (1226 - 1400)',
        n: 'Lịch sử - Bài 13: Đại Việt thời Trần (1226 - 1400) (3 tiết)',
        y: '- Nêu sự thành lập nhà Trần, tổ chức chính quyền quân quản, kinh tế nông nghiệp và chế độ Thái thượng hoàng.'
      },
      {
        w: 20,
        t: 'Lịch sử: Ba lần kháng chiến chống Mông - Nguyên',
        n: 'Lịch sử - Bài 14: Ba lần kháng chiến chống quân xâm lược Mông - Nguyên (3 tiết)',
        y: '- Trình bày diễn biến chính, nghệ thuật quân sự "vườn không nhà trống", Hội nghị Diên Hồng và Chiến thắng Bạch Đằng 1288 lẫy lừng.'
      },
      {
        w: 21,
        t: 'Lịch sử: Nước Đại Ngu thời Hồ (1400 - 1407)',
        n: 'Lịch sử - Bài 15: Nước Đại Ngu thời Hồ (1400 - 1407) (3 tiết)',
        y: '- Trình bày sự thành lập nhà Hồ, các chính sách cải cách táo bạo của Hồ Quý Ly và cuộc kháng chiến chống quân Minh.'
      },
      {
        w: 22,
        t: 'Địa lí: Phát hiện Châu Mỹ & Tự nhiên Bắc Mỹ',
        n: 'Địa lí - Bài 13: Vị trí địa lí, phạm vi châu Mỹ. Sự phát hiện ra châu Mỹ & Bài 14: Đặc điểm tự nhiên Bắc Mỹ (3 tiết)',
        y: '- Mô tả vị trí lãnh thổ châu Mỹ trải dài từ vùng cực Bắc đến cực Nam; đặc điểm địa hình, khí hậu, sông ngòi Bắc Mỹ.'
      },
      {
        w: 23,
        t: 'Địa lí: Khai thác Bắc Mỹ & Tự nhiên Nam Mỹ',
        n: 'Địa lí - Bài 15: Đặc điểm dân cư, xã hội, phương thức khai thác tài nguyên thiên nhiên bền vững ở Bắc Mỹ & Bài 16: Đặc điểm tự nhiên Trung và Nam Mỹ (3 tiết)',
        y: '- Trình bày đặc điểm đô thị hóa, khai thác tài nguyên bền vững Bắc Mỹ; địa hình dãy An-đét và đồng bằng A-ma-dôn.'
      },
      {
        w: 24,
        t: 'Địa lí: Rừng nhiệt đới Amazon & Dân cư Nam Mỹ',
        n: 'Địa lí - Bài 17: Đặc điểm dân cư, xã hội Trung và Nam Mỹ, khai thác, sử dụng và bảo vệ rừng A-ma-dôn (3 tiết)',
        y: '- Phân tích vấn đề suy giảm diện tích rừng A-ma-dôn và các giải pháp cấp bách bảo vệ "lá phổi xanh của Trái Đất".'
      },
      {
        w: 25,
        t: 'Lịch sử: Khởi nghĩa Lam Sơn (1418 - 1427)',
        n: 'Lịch sử - Bài 16: Khởi nghĩa Lam Sơn (1418 - 1427) (3 tiết)',
        y: '- Tóm tắt các giai đoạn khởi nghĩa Lam Sơn (Lê Lợi, Nguyễn Trãi), chiến thắng Tốt Động - Chúc Động và Chi Lăng - Xương Giang.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Đánh giá mức độ nắm vững kiến thức Lịch sử Đại Việt thời Trần - Hồ - Lê sơ và Địa lí Châu Mỹ.'
      },
      {
        w: 27,
        t: 'Lịch sử: Đại Việt thời Lê sơ (1428 - 1527)',
        n: 'Lịch sử - Bài 17: Đại Việt thời Lê sơ (1428 - 1527) (3 tiết)',
        y: '- Trình bày sự phát triển đỉnh cao của Đại Việt thời vua Lê Thánh Tông (Bộ luật Hồng Đức, bản đồ Hồng Đức, văn hóa, giáo dục).'
      },
      {
        w: 28,
        t: 'Địa lí: Châu Đại Dương',
        n: 'Địa lí - Bài 18: Châu Đại Dương (3 tiết)',
        y: '- Xác định vị trí địa lí, lục địa Ô-xtrây-li-a và các chuỗi đảo; đặc điểm tự nhiên độc đáo và nền kinh tế phát triển.'
      },
      {
        w: 29,
        t: 'Địa lí: Châu Nam Cực',
        n: 'Địa lí - Bài 19: Châu Nam Cực (3 tiết)',
        y: '- Mô tả vị trí địa lí, khí hậu lạnh giá khắc nghiệt bậc nhất, địa hình băng tuyết bao phủ và lịch sử nghiên cứu khoa học.'
      },
      {
        w: 30,
        t: 'Tổng kết: Lịch sử Đại Việt & Địa lí thế giới',
        n: 'Tổng kết chuyên đề Lịch sử phong kiến Đại Việt và Địa lí các châu lục thế giới (3 tiết)',
        y: '- Hệ thống hóa các cuộc kháng chiến giữ nước vĩ đại của dân tộc và bức tranh tự nhiên, kinh tế các châu lục.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Lịch sử và Địa lí 7 (3 tiết)',
        y: '- Đánh giá kết quả học tập cả năm học môn Lịch sử và Địa lí Lớp 7.'
      },
      {
        w: 32,
        t: 'Chữa bài kiểm tra & Ôn tập HK2',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức trọng tâm Lớp 7 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; chỉ ra lỗi sai phổ biến và củng cố kiến thức Lịch sử Đại Việt, Địa lí Châu Mỹ, Châu Đại Dương.'
      },
      {
        w: 33,
        t: 'Dự án STEM',
        n: 'Dự án STEM Lịch sử Địa lí 7: "Mô hình Sa bàn Chiến thắng Bạch Đằng & Bản đồ Khám phá Thế giới" (3 tiết)',
        y: '- Vận dụng công nghệ số làm sa bàn trận đánh Bạch Đằng hoặc bản đồ số tương tác khám phá các châu lục.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Hệ thống hóa toàn bộ kiến thức và ôn tập cuối năm Lịch sử và Địa lí Lớp 7 (3 tiết)',
        y: '- Tổng kết toàn diện kiến thức Lịch sử và Địa lí lớp 7 theo chuẩn chương trình GDPT 2018; luyện giải đề cương ôn tập.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Lịch sử và Địa lí 7 cả năm (3 tiết)',
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Lịch sử và Địa lí Lớp 7 của học sinh.'
      }
    ];

    grade7Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Bản đồ các châu lục thế giới, Bản đồ lịch sử thời Lý - Trần - Lê, Atlas Địa lí thế giới, sa bàn chiến dịch',
        location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: LỊCH SỬ & ĐỊA LÍ (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Lịch sử: CM Tư sản Anh & Mỹ | Địa lí: Vị trí lãnh thổ VN',
        n: 'Lịch sử - Bài 1: Cách mạng tư sản Anh và Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ & Địa lí - Bài 1: Vị trí địa lí và phạm vi lãnh thổ Việt Nam (3 tiết)',
        y: '- Phân tích nguyên nhân, diễn biến chính và ý nghĩa của Cách mạng tư sản Anh, Chiến tranh giành độc lập ở Bắc Mỹ (Tuyên ngôn Độc lập 1776).\n- Xác định vị trí địa lí, tọa độ, giới hạn phạm vi lãnh thổ vùng đất, vùng biển, vùng trời của Việt Nam.'
      },
      {
        w: 2,
        t: 'Lịch sử: CM Tư sản Pháp | Địa lí: Địa hình Việt Nam',
        n: 'Lịch sử - Bài 2: Cách mạng tư sản Pháp cuối thế kỉ XVIII & Địa lí - Bài 2: Địa hình Việt Nam (3 tiết)',
        y: '- Trình bày các giai đoạn phát triển của CM tư sản Pháp 1789, Tuyên ngôn Nhân quyền và Dân quyền; nêu đặc điểm địa hình nhiều đồi núi, hướng nghiêng TB-ĐN của VN.'
      },
      {
        w: 3,
        t: 'Lịch sử: Cách mạng công nghiệp | Địa lí: Khoáng sản VN',
        n: 'Lịch sử - Bài 3: Cách mạng công nghiệp (nửa sau thế kỉ XVIII - giữa thế kỉ XIX) & Địa lí - Bài 3: Khoáng sản Việt Nam (3 tiết)',
        y: '- Nêu các phát minh máy hơi nước, động cơ hơi nước và tác động kinh tế - xã hội của CM công nghiệp.\n- Trình bày đặc điểm tài nguyên khoáng sản VN, sự phân bố các mỏ than, dầu mỏ, quặng sắt, bô-xít.'
      },
      {
        w: 4,
        t: 'Lịch sử: Đông Nam Á (TK XVI - XIX) | Địa lí: Khí hậu VN',
        n: 'Lịch sử - Bài 4: Đông Nam Á từ nửa sau thế kỉ XVI đến giữa thế kỉ XIX & Địa lí - Bài 4: Khí hậu Việt Nam (3 tiết)',
        y: '- Mô tả quá trình xâm nhập của thực dân phương Tây vào ĐNA.\n- Phân tích tính chất nhiệt đới gió mùa ẩm, sự phân hóa đa dạng theo không gian và thời gian của khí hậu VN.'
      },
      {
        w: 5,
        t: 'Lịch sử: Xung đột Nam - Bắc triều | Địa lí: Thực hành khí hậu',
        n: 'Lịch sử - Bài 5: Cuộc xung đột Nam - Bắc triều và Trịnh - Nguyễn & Địa lí - Bài 5: Thực hành: Đọc bản đồ khí hậu (3 tiết)',
        y: '- Giải thích nguyên nhân, hậu quả của xung đột Nam - Bắc triều và Trịnh - Nguyễn (chia cắt Đàng Trong - Đàng Ngoài).\n- Đọc bản đồ khí hậu, phân tích biểu đồ nhiệt độ lượng mưa các trạm Hà Nội, Huế, TP.HCM.'
      },
      {
        w: 6,
        t: 'Lịch sử: Khai phá đất phía Nam | Địa lí: Thuỷ văn VN',
        n: 'Lịch sử - Bài 6: Công cuộc khai phá vùng đất phía Nam từ thế kỉ XVI đến thế kỉ XVIII & Địa lí - Bài 6: Thuỷ văn Việt Nam (3 tiết)',
        y: '- Trình bày công lao của các chúa Nguyễn trong khai phá, sáp nhập Nam Bộ và xác lập chủ quyền Hoàng Sa, Trường Sa.\n- Nêu đặc điểm mạng lưới sông ngòi dày đặc, nhiều nước, nhiều phù sa và chế độ nước theo mùa của VN.'
      },
      {
        w: 7,
        t: 'Lịch sử: Khởi nghĩa Đàng Ngoài & Phong trào Tây Sơn',
        n: 'Lịch sử - Bài 7: Khởi nghĩa nông dân ở Đàng Ngoài thế kỉ XVIII & Bài 8: Phong trào Tây Sơn (3 tiết)',
        y: '- Trình bày nguyên nhân bùng nổ các cuộc khởi nghĩa nông dân Đàng Ngoài.\n- Tóm tắt diễn biến phong trào Tây Sơn lật đổ các tập đoàn phong kiến, đánh tan quân Xiêm (Rạch Gầm - Xoài Mút) và quân Thanh (Ngọc Hồi - Đống Đa).'
      },
      {
        w: 8,
        t: 'Lịch sử: Kinh tế, văn hoá (TK XVI - XVIII) | Địa lí: Tài nguyên nước',
        n: 'Lịch sử - Bài 9: Tình hình kinh tế, văn hoá, tôn giáo trong các thế kỉ XVI - XVIII & Địa lí - Bài 7: Vai trò của tài nguyên khí hậu và tài nguyên nước đối với sự phát triển kinh tế - xã hội của nước ta (3 tiết)',
        y: '- Nêu sự phát triển của đô thị Thăng Long, Phố Hiến, Hội An, sự ra đời của chữ Quốc ngữ; phân tích vai trò kinh tế của khí hậu và nguồn nước.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lí Lớp 8 (3 tiết)',
        y: '- Đánh giá chuẩn kiến thức kỹ năng Lịch sử & Địa lí lớp 8 từ Tuần 1 đến Tuần 8.\n- Rèn luyện kỹ năng tự đánh giá và phân tích đề bài.'
      },
      {
        w: 10,
        t: 'Lịch sử: Chủ nghĩa đế quốc | Địa lí: Biến đổi khí hậu VN',
        n: 'Lịch sử - Bài 10: Sự hình thành chủ nghĩa đế quốc ở các nước Âu - Mỹ (cuối thế kỉ XIX - đầu thế kỉ XX) & Địa lí - Bài 8: Tác động của biến đổi khí hậu đối với khí hậu và thuỷ văn Việt Nam (3 tiết)',
        y: '- Trình bày sự hình thành các tổ chức độc quyền ở Anh, Pháp, Đức, Mỹ; phân tích tác động của biến đổi khí hậu đến thời tiết cực đoan, xâm nhập mặn ở VN.'
      },
      {
        w: 11,
        t: 'Lịch sử: Phong trào công nhân & Chủ nghĩa xã hội khoa học',
        n: 'Lịch sử - Bài 11: Phong trào công nhân từ cuối thế kỉ XVIII đến đầu thế kỉ XX và sự ra đời của chủ nghĩa xã hội khoa học (3 tiết)',
        y: '- Trình bày sự ra đời của học thuyết Mác, Tuyên ngôn của Đảng Cộng sản (1848) và Công xã Pa-ri (1871).'
      },
      {
        w: 12,
        t: 'Lịch sử: Chiến tranh TG 1 & Cách mạng tháng Mười Nga',
        n: 'Lịch sử - Bài 12: Chiến tranh thế giới thứ nhất (1914 - 1918) và Cách mạng tháng Mười Nga năm 1917 (3 tiết)',
        y: '- Phân tích nguyên nhân phi nghĩa, hậu quả tàn khốc của CTTG 1 và ý nghĩa lịch sử vĩ đại của Cách mạng tháng Mười Nga 1917.'
      },
      {
        w: 13,
        t: 'Lịch sử: Sự phát triển KH-KT-NT (TK XVIII - XIX)',
        n: 'Lịch sử - Bài 13: Sự phát triển của khoa học, kĩ thuật, văn học, nghệ thuật trong các thế kỉ XVIII - XIX (3 tiết)',
        y: '- Kể tên các thành tựu khoa học tự nhiên, xã hội và các tác phẩm văn học, nghệ thuật hiện thực phê phán kinh điển.'
      },
      {
        w: 14,
        t: 'Địa lí: Thổ nhưỡng và Sinh vật Việt Nam',
        n: 'Địa lí - Bài 9: Thổ nhưỡng Việt Nam & Bài 10: Sinh vật Việt Nam (3 tiết)',
        y: '- Phân tích đặc điểm nhóm đất feralit, đất phù sa sông; đặc điểm đa dạng sinh vật và vấn đề bảo tồn vườn quốc gia, khu dự trữ sinh quyển.'
      },
      {
        w: 15,
        t: 'Chủ đề chung 1: Văn minh châu thổ sông Hồng và sông Cửu Long',
        n: 'Chủ đề chung 1: Văn minh châu thổ sông Hồng và sông Cửu Long (Tiết 1 - 3) (3 tiết)',
        y: '- So sánh điều kiện tự nhiên, quá trình khai khẩn, đời sống văn hóa và phương thức canh tác lúa nước ở hai châu thổ lớn nhất Việt Nam.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử và Địa lí Lớp 8 (3 tiết)',
        y: '- Đánh giá tổng hợp toàn diện kết quả học tập phân môn Lịch sử và Địa lí trong Học kỳ 1 Lớp 8.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Lịch sử và Địa lí Lớp 8 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; hệ thống hóa toàn diện kiến thức Lịch sử thế giới cận đại, Lịch sử VN TK XVI-XVIII và Địa lí tự nhiên đại cương Việt Nam.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Lịch sử và Địa lí Lớp 8 (3 tiết)',
        y: '- Đánh giá tổng kết quá trình học tập và rèn luyện môn Lịch sử và Địa lí trong Học kỳ 1; định hướng học tập HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Lịch sử: Châu Á cuối TK XIX - đầu TK XX',
        n: 'Lịch sử - Bài 14: Trung Quốc và Nhật Bản từ nửa sau thế kỉ XIX đến đầu thế kỉ XX (3 tiết)',
        y: '- Trình bày quá trình các nước đế quốc xâu xé Trung Quốc, CM Tân Hợi 1911 và cuộc Duy tân Minh Trị biến Nhật Bản thành cường quốc.'
      },
      {
        w: 20,
        t: 'Lịch sử: Ấn Độ và Đông Nam Á cuối TK XIX',
        n: 'Lịch sử - Bài 15: Ấn Độ và Đông Nam Á từ nửa sau thế kỉ XIX đến đầu thế kỉ XX (3 tiết)',
        y: '- Nêu phong trào giải phóng dân tộc ở Ấn Độ dưới sự lãnh đạo của Đảng Quốc đại và phong trào chống thực dân ở các nước ĐNA.'
      },
      {
        w: 21,
        t: 'Lịch sử: Việt Nam dưới thời Nguyễn (nửa đầu TK XIX)',
        n: 'Lịch sử - Bài 16: Việt Nam dưới thời Nguyễn (nửa đầu thế kỉ XIX) (3 tiết)',
        y: '- Trình bày sự thành lập nhà Nguyễn, công cuộc khôi phục kinh tế, củng cố quốc phòng, xây dựng Kinh thành Huế và Hoàng triều luật lệ.'
      },
      {
        w: 22,
        t: 'Lịch sử: Kháng chiến chống Pháp (1858 - 1884)',
        n: 'Lịch sử - Bài 17: Cuộc kháng chiến chống thực dân Pháp xâm lược từ năm 1858 đến năm 1884 (3 tiết)',
        y: '- Trình bày quá trình Pháp nổ súng tại Đà Nẵng, Gia Định, đánh chiếm Bắc Kì và tinh thần kháng chiến anh dũng của nhân dân ta (Nguyễn Trung Trực, Trương Định).'
      },
      {
        w: 23,
        t: 'Lịch sử: Phong trào chống Pháp (1885 - 1896)',
        n: 'Lịch sử - Bài 18: Phong trào chống Pháp trong những năm 1885 - 1896 (3 tiết)',
        y: '- Phân tích phong trào Cần vương (Khởi nghĩa Ba Đình, Bãi Sậy, Hương Khê) và Khởi nghĩa Yên Thế của Hoàng Hoa Thám.'
      },
      {
        w: 24,
        t: 'Lịch sử: Phong trào yêu nước đầu TK XX đến 1917',
        n: 'Lịch sử - Bài 19: Phong trào yêu nước chống Pháp ở Việt Nam từ đầu thế kỉ XX đến năm 1917 (3 tiết)',
        y: '- Trình bày xu hướng bạo động của Phan Bội Châu (phong trào Đông du) và xu hướng cải cách của Phan Châu Trinh (Duy tân); hành trình tìm đường cứu nước của Nguyễn Tất Thành 1911.'
      },
      {
        w: 25,
        t: 'Địa lí: Môi trường tài nguyên biển đảo VN',
        n: 'Địa lí - Bài 12: Môi trường và tài nguyên biển đảo Việt Nam (3 tiết)',
        y: '- Phân tích tiềm năng kinh tế biển (thủy sản, khoáng sản, du lịch, giao thông biển) và vấn đề bảo vệ môi trường biển đảo.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lí Lớp 8 (3 tiết)',
        y: '- Đánh giá mức độ nắm vững phong trào yêu nước chống Pháp cuối TK XIX - đầu XX và địa lí biển đảo VN.'
      },
      {
        w: 27,
        t: 'Chủ đề chung 2: Bảo vệ chủ quyền Biển Đông',
        n: 'Chủ đề chung 2: Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông (Tiết 1 - 3) (3 tiết)',
        y: '- Khẳng định cơ sở lịch sử và căn cứ pháp lí quốc tế chứng minh chủ quyền thiêng liêng của Việt Nam đối với hai quần đảo Hoàng Sa và Trường Sa.'
      },
      {
        w: 28,
        t: 'Tổng kết: Phong trào chống Pháp thế kỉ XIX - XX',
        n: 'Tổng kết phong trào giải phóng dân tộc Việt Nam cuối thế kỉ XIX - đầu thế kỉ XX (3 tiết)',
        y: '- So sánh các khuynh hướng cứu nước phong kiến, dân chủ tư sản và rút ra bài học lịch sử tìm đường cứu nước mới.'
      },
      {
        w: 29,
        t: 'Tổng kết: Địa lí tự nhiên & Biển đảo Việt Nam',
        n: 'Tổng kết đặc điểm địa lí tự nhiên, tài nguyên và biển đảo Việt Nam (3 tiết)',
        y: '- Hệ thống hóa các đặc điểm địa hình, khoáng sản, khí hậu, sông ngòi, thổ nhưỡng, sinh vật và biển đảo VN.'
      },
      {
        w: 30,
        t: 'Thực hành: Khai thác tư liệu lịch sử & Bản đồ',
        n: 'Thực hành: Khai thác tư liệu lịch sử và bản đồ địa lí Việt Nam (3 tiết)',
        y: '- Rèn luyện kỹ năng phân tích biểu đồ số liệu, vẽ lược đồ phân bố tài nguyên và giải thích hiện tượng tự nhiên.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Lịch sử và Địa lí 8 (3 tiết)',
        y: '- Đánh giá tổng kết năm học môn Lịch sử và Địa lí Lớp 8 theo chuẩn Thông tư 32/2018/TT-BGDĐT.'
      },
      {
        w: 32,
        t: 'Chữa bài kiểm tra & Ôn tập HK2',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức trọng tâm Lớp 8 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; chỉ ra lỗi sai phổ biến và củng cố kiến thức Lịch sử cận đại và Địa lí biển đảo VN.'
      },
      {
        w: 33,
        t: 'Dự án STEM',
        n: 'Dự án STEM Lịch sử Địa lí 8: "Bản đồ Số Chủ quyền Biển Đảo Hoàng Sa - Trường Sa & Sa bàn Chiến dịch Tây Sơn" (3 tiết)',
        y: '- Thiết kế bản đồ số GIS tương tác về chủ quyền biển đảo VN hoặc sa bàn trận đánh Rạch Gầm - Xoài Mút, Ngọc Hồi - Đống Đa.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Hệ thống hóa toàn bộ kiến thức và ôn tập cuối năm Lịch sử và Địa lí 8 (3 tiết)',
        y: '- Khái quát toàn bộ mạch kiến thức Lịch sử thế giới, Lịch sử VN và Địa lí tự nhiên Việt Nam lớp 8; luyện giải đề cương ôn tập.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Lịch sử và Địa lí 8 cả năm (3 tiết)',
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Lịch sử và Địa lí Lớp 8 của học sinh.'
      }
    ];

    grade8Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Bản đồ tự nhiên Việt Nam, Bản đồ hành chính VN, Atlas Địa lí VN, tư liệu hình ảnh lịch sử chống Pháp, máy chiếu',
        location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: LỊCH SỬ & ĐỊA LÍ (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Lịch sử: Nước Nga & Thế giới (1918-1945) | Địa lí: Dân cư VN',
      n: 'Lịch sử - Bài 1: Nước Nga và Liên Xô từ năm 1918 đến năm 1945 & Địa lí - Bài 1: Dân tộc và dân số (3 tiết)',
      y: '- Trình bày công cuộc xây dựng CNXH ở Liên Xô (1921-1941); nêu đặc điểm 54 dân tộc anh em và sự gia tăng dân số, cơ cấu dân số VN.'
    },
    {
      w: 2,
      t: 'Lịch sử: Âu - Mỹ (1918-1945) | Địa lí: Phân bố dân cư',
      n: 'Lịch sử - Bài 2: Châu Âu và nước Mỹ từ năm 1918 đến năm 1945 & Địa lí - Bài 2: Phân bố dân cư và các loại hình quần cư (3 tiết)',
      y: '- Phân tích khủng hoảng kinh tế 1929-1933, Chính sách mới của Ru-dơ-ven và chủ nghĩa phát xít; phân tích mật độ dân số và quần cư nông thôn, thành thị VN.'
    },
    {
      w: 3,
      t: 'Lịch sử: Châu Á (1918-1945) | Địa lí: Lao động việc làm',
      n: 'Lịch sử - Bài 3: Châu Á từ năm 1918 đến năm 1945 & Địa lí - Bài 3: Lao động và việc làm & Bài 4: Thực hành: Tìm hiểu vấn đề việc làm ở địa phương và phân hoá thu nhập theo vùng (3 tiết)',
      y: '- Nêu phong trào Ngũ Tứ ở Trung Quốc, phong trào độc lập ở Ấn Độ; phân tích nguồn lao động dồi dào, chất lượng nâng cao và vấn đề giải quyết việc làm.'
    },
    {
      w: 4,
      t: 'Lịch sử: Chiến tranh thế giới 2 | Địa lí: Nông nghiệp VN',
      n: 'Lịch sử - Bài 4: Chiến tranh thế giới thứ hai (1939 - 1945) & Địa lí - Bài 5: Nông nghiệp (3 tiết)',
      y: '- Trình bày nguyên nhân, các giai đoạn và hậu quả của CTTG 2, vai trò quyết định của Liên Xô tiêu diệt phát xít; đặc điểm phát triển ngành trồng trọt và chăn nuôi VN.'
    },
    {
      w: 5,
      t: 'Lịch sử: Phong trào dân tộc (1918-1930) | Địa lí: Lâm nghiệp, thuỷ sản',
      n: 'Lịch sử - Bài 5: Phong trào dân tộc dân chủ trong những năm 1918 - 1930 & Địa lí - Bài 6: Lâm nghiệp và thuỷ sản (3 tiết)',
      y: '- Trình bày các phong trào yêu nước của tư sản, tiểu tư sản và sự phát triển của phong trào công nhân VN; tiềm năng, hiện trạng ngành lâm nghiệp và thủy sản.'
    },
    {
      w: 6,
      t: 'Lịch sử: Nguyễn Ái Quốc & Thành lập Đảng | Địa lí: Mô hình nông nghiệp',
      n: 'Lịch sử - Bài 6: Hoạt động của Nguyễn Ái Quốc và sự thành lập Đảng Cộng sản Việt Nam & Địa lí - Bài 7: Thực hành: Viết báo cáo về một mô hình sản xuất nông nghiệp có hiệu quả (3 tiết)',
      y: '- Phân tích công lao to lớn của Nguyễn Ái Quốc và ý nghĩa lịch sử bước ngoặt của việc thành lập ĐCSVN đầu năm 1930; viết báo cáo mô hình nông nghiệp công nghệ cao.'
    },
    {
      w: 7,
      t: 'Lịch sử: Phong trào CM (1930-1939) | Địa lí: Công nghiệp VN',
      n: 'Lịch sử - Bài 7: Phong trào cách mạng Việt Nam thời kì 1930 - 1939 & Địa lí - Bài 8: Công nghiệp (3 tiết)',
      y: '- Trình bày phong trào 1930-1931 với đỉnh cao Xô viết Nghệ - Tĩnh và phong trào Dân chủ 1936-1939; cơ cấu ngành công nghiệp và các trung tâm công nghiệp lớn VN.'
    },
    {
      w: 8,
      t: 'Lịch sử: Cách mạng tháng Tám 1945 | Địa lí: Dịch vụ VN',
      n: 'Lịch sử - Bài 8: Cách mạng tháng Tám năm 1945 & Địa lí - Bài 9: Thực hành: Xác định một số hình thức tổ chức lãnh thổ công nghiệp ở nước ta & Bài 10: Dịch vụ (3 tiết)',
      y: '- Tóm tắt diễn biến Tổng khởi nghĩa tháng Tám 1945 và Tuyên ngôn Độc lập ngày 2/9/1945 khai sinh nước VNDCCH; vai trò các ngành GTVT, thương mại và du lịch.'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lí Lớp 9 (3 tiết)',
      y: '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng Lịch sử & Địa lí lớp 9 từ Tuần 1 đến Tuần 8.\n- Rèn luyện kỹ năng phân tích sự kiện lịch sử và xử lý số liệu địa lí.'
    },
    {
      w: 10,
      t: 'Lịch sử: Chiến tranh lạnh & Liên Xô - Đông Âu',
      n: 'Lịch sử - Bài 9: Chiến tranh lạnh (1947 - 1989) & Bài 10: Liên Xô và Đông Âu từ năm 1945 đến năm 1991 (3 tiết)',
      y: '- Nêu nguyên nhân, biểu hiện của Chiến tranh lạnh (Mỹ - Liên Xô) và quá trình phát triển, sụp đổ của hệ thống XHCN ở Liên Xô và Đông Âu.'
    },
    {
      w: 11,
      t: 'Lịch sử: Nước Mỹ, Tây Âu, Châu Á, Mỹ La-tinh (1945-1991)',
      n: 'Lịch sử - Bài 11: Nước Mỹ và Tây Âu từ năm 1945 đến năm 1991 & Bài 12: Khu vực Mỹ La-tinh và châu Á từ năm 1945 đến năm 1991 (3 tiết)',
      y: '- Nêu sự phát triển kinh tế của Mỹ, Tây Âu, Nhật Bản; phong trào giải phóng dân tộc ở Cuba, Trung Quốc, Ấn Độ và các nước Đông Nam Á.'
    },
    {
      w: 12,
      t: 'Lịch sử: Nước VNDCCH năm đầu sau CMT8 (1945-1946)',
      n: 'Lịch sử - Bài 13: Việt Nam trong năm đầu sau Cách mạng tháng Tám năm 1945 (3 tiết)',
      y: '- Phân tích thế "ngàn cân treo sợi tóc" của nước ta và các chủ trương sáng suốt của Đảng, Chủ tịch Hồ Chí Minh (diệt giặc đói, giặc dốt, giặc ngoại xâm).'
    },
    {
      w: 13,
      t: 'Lịch sử: Kháng chiến chống Pháp (1946 - 1950)',
      n: 'Lịch sử - Bài 14: Việt Nam kháng chiến chống thực dân Pháp xâm lược giai đoạn 1946 - 1950 (3 tiết)',
      y: '- Trình bày Lời kêu gọi toàn quốc kháng chiến 19/12/1946, đường lối kháng chiến toàn dân, toàn diện; Chiến dịch Việt Bắc thu đông 1947 và Chiến dịch Biên giới thu đông 1950.'
    },
    {
      w: 14,
      t: 'Lịch sử: Chiến thắng Điện Biên Phủ (1951 - 1954)',
      n: 'Lịch sử - Bài 15: Việt Nam kháng chiến chống thực dân Pháp xâm lược giai đoạn 1951 - 1954 (3 tiết)',
      y: '- Trình bày Đại hội Đảng toàn quốc lần thứ II, Chiến dịch Đông Xuân 1953-1954, Chiến thắng lịch sử Điện Biên Phủ "lừng lẫy năm châu" và Hiệp định Genève 1954.'
    },
    {
      w: 15,
      t: 'Địa lí: Trung du và miền núi Bắc Bộ',
      n: 'Địa lí - Bài 11: Thực hành: Tìm hiểu xu hướng phát triển ngành thương mại, du lịch & Bài 12: Vùng Trung du và miền núi phía Bắc (3 tiết)',
      y: '- Phân tích vị trí địa lí, thế mạnh thủy điện, khoáng sản, cây công nghiệp cận nhiệt và ôn đới của vùng Trung du miền núi phía Bắc.'
    },
    {
      w: 16,
      t: 'Địa lí: Đồng bằng sông Hồng & Bắc Trung Bộ',
      n: 'Địa lí - Bài 13: Vùng Đồng bằng sông Hồng & Bài 14: Vùng Bắc Trung Bộ & Bài 15: Thực hành: Tìm hiểu vấn đề phòng, chống thiên tai và ứng phó với biến đổi khí hậu ở vùng Bắc Trung Bộ (3 tiết)',
      y: '- Phân tích vị trí chiến lược, điều kiện phát triển nông nghiệp, công nghiệp ĐBSH và Bắc Trung Bộ; giải pháp phòng chống bão lũ, hạn hán.'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Lịch sử và Địa lí Lớp 9 (3 tiết)',
      y: '- Đánh giá tổng hợp toàn diện kết quả học tập phân môn Lịch sử và Địa lí trong Học kỳ 1 Lớp 9.'
    },
    {
      w: 17,
      t: 'Chữa bài & Ôn tập Học kỳ 1',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Lịch sử và Địa lí Lớp 9 (3 tiết)',
      y: '- Chữa bài kiểm tra cuối HK1; hệ thống hóa toàn bộ Lịch sử thế giới hiện đại, Lịch sử cách mạng Việt Nam 1918-1954 và Địa lí các ngành kinh tế, các vùng kinh tế Bắc Bộ HK1.'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Sơ kết Học kỳ 1 môn Lịch sử và Địa lí Lớp 9 (3 tiết)',
      y: '- Đánh giá tổng kết quá trình học tập và rèn luyện môn Lịch sử và Địa lí trong Học kỳ 1; định hướng học tập HK2.'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Lịch sử: Kháng chiến chống Mỹ (1954 - 1965)',
      n: 'Lịch sử - Bài 16: Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1954 - 1965 (3 tiết)',
      y: '- Trình bày phong trào Đồng khởi 1959-1960, xây dựng CNXH ở miền Bắc và đánh bại chiến lược "Chiến tranh đặc biệt" của đế quốc Mỹ ở miền Nam.'
    },
    {
      w: 20,
      t: 'Lịch sử: Đại thắng mùa Xuân 1975 (1965 - 1975)',
      n: 'Lịch sử - Bài 17: Việt Nam kháng chiến chống Mỹ, cứu nước, thống nhất đất nước giai đoạn 1965 - 1975 (3 tiết)',
      y: '- Trình bày chiến thắng "Chiến tranh cục bộ", "Việt Nam hóa chiến tranh", Hiệp định Paris 1973 và cuộc Tổng tiến công mùa Xuân 1975 giải phóng miền Nam thống nhất đất nước.'
    },
    {
      w: 21,
      t: 'Lịch sử: Trật tự thế giới mới & Châu Á từ 1991 đến nay',
      n: 'Lịch sử - Bài 18: Trật tự thế giới mới từ năm 1991 đến nay. Liên bang Nga và nước Mỹ từ năm 1991 đến nay & Bài 19: Châu Á từ năm 1991 đến nay (3 tiết)',
      y: '- Nêu xu thế đa cực, hợp tác và cạnh tranh trong trật tự thế giới mới; sự trỗi dậy mạnh mẽ của các nước châu Á (Trung Quốc, Ấn Độ, ASEAN).'
    },
    {
      w: 22,
      t: 'Lịch sử: Việt Nam đổi mới (1976 - nay) & CM KH-CN',
      n: 'Lịch sử - Bài 20: Việt Nam từ năm 1976 đến nay & Bài 21: Cách mạng khoa học - kĩ thuật và xu thế toàn cầu hoá (3 tiết)',
      y: '- Trình bày đường lối Đổi mới đất nước từ Đại hội VI (1986) và những thành tựu to lớn; tác động của CM KH-CN và xu thế toàn cầu hóa.'
    },
    {
      w: 23,
      t: 'Địa lí: Duyên hải Nam Trung Bộ, Tây Nguyên & Đông Nam Bộ',
      n: 'Địa lí - Bài 16: Vùng Duyên hải Nam Trung Bộ và Tây Nguyên & Bài 17: Vùng Đông Nam Bộ (3 tiết)',
      y: '- Phân tích thế mạnh kinh tế biển DH Nam Trung Bộ, cây công nghiệp Tây Nguyên và vai trò đầu tàu kinh tế công nghiệp, dịch vụ của Đông Nam Bộ.'
    },
    {
      w: 24,
      t: 'Địa lí: Liên vùng Đông Nam Bộ & Đồng bằng sông Cửu Long',
      n: 'Địa lí - Bài 18: Thực hành: Phân tích ý nghĩa của việc tăng cường kết nối liên vùng đối với sự phát triển của vùng Đông Nam Bộ & Bài 19: Vùng Đồng bằng sông Cửu Long (3 tiết)',
      y: '- Phân tích ý nghĩa liên kết vùng kinh tế trọng điểm phía Nam; thế mạnh sản xuất lương thực, thực phẩm, thủy sản lớn nhất nước của ĐBSCL.'
    },
    {
      w: 25,
      t: 'Địa lí: Biến đổi khí hậu ĐBSCL & Kinh tế biển đảo',
      n: 'Địa lí - Bài 20: Thực hành: Tìm hiểu tác động của biến đổi khí hậu đối với vùng Đồng bằng sông Cửu Long & Bài 21: Phát triển tổng hợp kinh tế và bảo vệ tài nguyên, môi trường biển, đảo (3 tiết)',
      y: '- Nêu tác động xâm nhập mặn, sạt lở bờ sông ĐBSCL; phân tích phát triển 4 ngành kinh tế biển tổng hợp và bảo vệ chủ quyền biển đảo.'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lí Lớp 9 (3 tiết)',
      y: '- Đánh giá mức độ tiếp thu Lịch sử kháng chiến chống Mỹ, thời kỳ Đổi mới và Địa lí các vùng kinh tế miền Trung, miền Nam.'
    },
    {
      w: 27,
      t: 'Chủ đề chung 1 & 2: Đô thị và Văn minh châu thổ',
      n: 'Chủ đề chung 1: Đô thị: Lịch sử và hiện tại & Chủ đề chung 2: Văn minh châu thổ sông Hồng và sông Cửu Long (3 tiết)',
      y: '- Phân tích vai trò các đô thị trong lịch sử và hiện tại (Hà Nội, TP.HCM, Đà Nẵng); sự thích ứng tự nhiên của văn minh hai châu thổ sông lớn.'
    },
    {
      w: 28,
      t: 'Chủ đề chung 3: Chủ quyền Biển Đông',
      n: 'Chủ đề chung 3: Bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở Biển Đông (Tiết 1 - 3) (3 tiết)',
      y: '- Trình bày tầm quan trọng chiến lược của Biển Đông và trách nhiệm của công dân trong bảo vệ chủ quyền biển đảo thiêng liêng.'
    },
    {
      w: 29,
      t: 'Tổng kết: Lịch sử Việt Nam thời kì hiện đại (1945 - nay)',
      n: 'Tổng kết toàn diện lịch sử dân tộc Việt Nam thời kì hiện đại (1945 - nay) (3 tiết)',
      y: '- Khái quát tiến trình hai cuộc kháng chiến chống Pháp, Mỹ và 40 năm công cuộc Đổi mới hội nhập quốc tế.'
    },
    {
      w: 30,
      t: 'Tổng kết: Địa lí kinh tế - xã hội các vùng Việt Nam',
      n: 'Tổng kết địa lí các vùng kinh tế trọng điểm và chiến lược phát triển bền vững (3 tiết)',
      y: '- Hệ thống hóa đặc điểm tự nhiên, thế mạnh kinh tế và định hướng phát triển của 7 vùng kinh tế - xã hội Việt Nam.'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Lịch sử và Địa lí 9 (3 tiết)',
      y: '- Đánh giá tổng kết năm học môn Lịch sử và Địa lí 9; xét hoàn thành chương trình THCS.'
    },
    {
      w: 32,
      t: 'Chữa bài kiểm tra & Ôn tập HK2',
      n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức trọng tâm Lớp 9 (3 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2; củng cố phương pháp giải câu hỏi tư duy và kỹ năng làm bài thi trắc nghiệm - tự luận.'
    },
    {
      w: 33,
      t: 'Dự án STEM',
      n: 'Dự án STEM Lịch sử Địa lí 9: "Infographic Số Di sản Lịch sử Việt Nam Hiện đại & Bản đồ Phát triển Kinh tế Biển Đảo" (3 tiết)',
      y: '- Thiết kế infographic số hoặc bản đồ số tương tác tổng kết di sản lịch sử kháng chiến và tiềm năng phát triển kinh tế biển đảo VN.'
    },
    {
      w: 34,
      t: 'Chủ đề: Ôn tập ôn thi vào 10',
      n: 'Hệ thống hóa toàn bộ kiến thức và luyện giải bộ đề ôn thi tuyển sinh vào Lớp 10 THPT môn Lịch sử - Địa lí (3 tiết)',
      y: '- Hệ thống hóa toàn bộ kiến thức trọng tâm Lịch sử và Địa lí 9 chuẩn cấu trúc ma trận đề thi tuyển sinh vào Lớp 10 THPT; luyện đề thi thử.'
    },
    {
      w: 35,
      t: 'Tổng kết năm học',
      n: 'Tổng kết năm học & Hoàn tất chương trình Lịch sử và Địa lí THCS Lớp 9 (3 tiết)',
      y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Lịch sử và Địa lí Lớp 9 của học sinh.'
    }
  ];

  grade9Weeks.forEach((item) => {
    list.push({
      week: item.w,
      topic: item.t,
      name: item.n,
      periods: 3,
      yccd: item.y,
      equipment: 'Bản đồ kinh tế các vùng Việt Nam, Atlas Địa lí VN, tư liệu ảnh hai cuộc kháng chiến chống Pháp - Mỹ, máy chiếu',
      location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM' : ''
    });
  });

  return list;
}
