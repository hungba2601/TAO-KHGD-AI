import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Khoa học tự nhiên (KHTN) THCS (Lớp 6, 7, 8, 9)
 * Khung chuẩn: 140 tiết/năm = 4 tiết/tuần x 35 tuần
 * 100% chuẩn SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG & tài liệu khtn-thcs.md
 * Bài mở đầu các khối lớp được thiết kế chiếm đúng 1 tiết theo yêu cầu chuyên môn.
 * Tích hợp chuẩn Khung Năng lực số (CV 3456/BGDĐT-GDPT) & Khung Năng lực AI (QĐ 2422/QĐ-BGDĐT)
 *
 * Các tuần kiểm tra, đánh giá định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (4 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (4 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (4 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (4 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại môn KHTN cả năm (4 tiết)
 */

export function getKhtnSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: KHOA HỌC TỰ NHIÊN (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (10 CHƯƠNG, 55 BÀI)
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18: 72 tiết)
      {
        w: 1,
        t: 'Chương I: Mở đầu về Khoa học tự nhiên',
        n: 'Chương I - Bài 1: Giới thiệu về Khoa học tự nhiên (1 tiết) & Bài 2: An toàn trong phòng thực hành (1 tiết) & Bài 3: Sử dụng kính lúp (1 tiết) & Bài 4: Sử dụng kính hiển vi quang học (1 tiết)',
        y: '- Nêu được khái niệm KHTN và vai trò của KHTN trong cuộc sống (1 tiết).\n- Trình bày và thực hiện đúng các quy định an toàn trong phòng thực hành; sử dụng thành thạo kính lúp và kính hiển vi quang học để quan sát mẫu vật.',
        eq: 'Kính lúp, kính hiển vi quang học, tiêu bản mẫu, tranh nội quy phòng thực hành',
        nlsCode: '1.1.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 2,
        t: 'Chương I: Mở đầu về Khoa học tự nhiên',
        n: 'Chương I - Bài 5: Đo chiều dài (1 tiết) & Bài 6: Đo khối lượng (1 tiết) & Bài 7: Đo thời gian (1 tiết) & Bài 8: Đo nhiệt độ (1 tiết)',
        y: '- Lựa chọn đúng dụng cụ đo và thực hiện chuẩn xác các phép đo chiều dài, khối lượng, thời gian và nhiệt độ.\n- Xác định GHĐ, ĐCNN, đọc kết quả và tính toán xử lí sai số của các phép đo thực nghiệm.',
        eq: 'Thước cuộn, thước kẻ, cân đồng hồ, cân điện tử, đồng hồ bấm giây, nhiệt kế',
        nlsCode: '1.3.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 3,
        t: 'Chương II: Chất quanh ta',
        n: 'Chương II: Chất quanh ta - Bài 9: Sự đa dạng của chất (1 tiết) & Bài 10: Các thể của chất và sự chuyển thể (3 tiết)',
        y: '- Nhận biết sự đa dạng của chất quanh ta; nêu được các đặc điểm cơ bản ở ba thể của chất (rắn, lỏng, khí).\n- Trình bày được quá trình chuyển thể: nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi; vẽ đường biểu diễn sự thay đổi nhiệt độ theo thời gian.',
        eq: 'Bộ thí nghiệm đo nhiệt độ nóng chảy của nến/băng phiến, đèn cồn, cốc đun',
        nlsCode: '1.1.TC1b',
        aiCode: '6.C1.1'
      },
      {
        w: 4,
        t: 'Chương II & Chương III: Vật liệu, nguyên liệu, nhiên liệu, thực phẩm',
        n: 'Chương II - Bài 11: Oxygen. Không khí (2 tiết) & Chương III - Bài 12: Một số vật liệu (2 tiết)',
        y: '- Nêu được thành phần của không khí, tính chất và vai trò của oxygen đối với sự sống và sự cháy; ý thức bảo vệ môi trường không khí.\n- Trình bày tính chất và ứng dụng của một số vật liệu thông dụng (kim loại, nhựa, thủy tinh, cao su, gốm).',
        eq: 'Mẫu vật kim loại, nhựa, cao su; bình thu khí oxygen, que đóm, tàn đóm đỏ',
        nlsCode: '1.2.TC1a',
        aiCode: '6.B1.1'
      },
      {
        w: 5,
        t: 'Chương III: Vật liệu, nguyên liệu, nhiên liệu, thực phẩm',
        n: 'Chương III - Bài 13: Một số nguyên liệu (1 tiết) & Bài 14: Một số nhiên liệu (1 tiết) & Bài 15: Một số lương thực, thực phẩm (2 tiết)',
        y: '- Phân biệt nguyên liệu, nhiên liệu, lương thực - thực phẩm; sử dụng an toàn, hiệu quả và phát triển bền vững nguồn tài nguyên.\n- Nêu được vai trò của các nhóm chất dinh dưỡng đối với cơ thể người; bảo quản thực phẩm đúng cách.',
        eq: 'Mẫu quặng, mẫu than đá, xăng dầu, ngũ cốc, tinh bột, bảng tháp dinh dưỡng',
        nlsCode: '2.1.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 6,
        t: 'Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp',
        n: 'Chương IV: Hỗn hợp. Tách chất ra khỏi hỗn hợp - Bài 16: Hỗn hợp các chất (2 tiết) & Bài 17: Tách chất khỏi hỗn hợp (2 tiết)',
        y: '- Phân biệt chất tinh khiết và hỗn hợp, dung dịch, huyền phù, nhũ tương; nêu các yếu tố ảnh hưởng đến độ tan.\n- Thực hành thành thạo các phương pháp tách chất: lọc, cô cạn, chiết để tách chất ra khỏi hỗn hợp đơn giản.',
        eq: 'Bộ dụng cụ thí nghiệm: phễu lọc, giấy lọc, cốc thủy tinh, phễu chiết, bát sứ cô cạn',
        nlsCode: '3.1.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 7,
        t: 'Chương V: Tế bào',
        n: 'Chương V: Tế bào - Bài 18: Tế bào – Đơn vị cơ bản của sự sống (1 tiết) & Bài 19: Cấu tạo và chức năng các thành phần của tế bào (2 tiết) & Bài 20: Sự lớn lên và sinh sản của tế bào (1 tiết)',
        y: '- Nêu được khái niệm tế bào, hình dạng, kích thước và cấu tạo tế bào nhân sơ, nhân thực; phân biệt tế bào động vật và thực vật.\n- Trình bày được sự lớn lên và sinh sản của tế bào, ý nghĩa đối với sự lớn lên của cơ thể sinh vật.',
        eq: 'Mô hình tế bào thực vật và động vật, tranh cấu tạo tế bào nhân sơ/nhân thực',
        nlsCode: '1.2.TC1b',
        aiCode: '6.A1.1'
      },
      {
        w: 8,
        t: 'Chương V & Chương VI: Từ tế bào đến cơ thể',
        n: 'Chương V - Bài 21: Thực hành: Quan sát và phân biệt một số loại tế bào (2 tiết) & Chương VI - Bài 22: Cơ thể sinh vật (2 tiết)',
        y: '- Tự làm tiêu bản và quan sát tế bào biểu bì vảy hành, tế bào niêm mạc khoang miệng dưới kính hiển vi.\n- Nêu được khái niệm cơ thể sinh vật, phân biệt cơ thể đơn bào (trùng roi, vi khuẩn) và cơ thể đa bào (thực vật, động vật).',
        eq: 'Kính hiển vi quang học, củ hành ta, tăm tre, lam kính, lamen, xanh methylen',
        nlsCode: '3.2.TC1a',
        aiCode: '6.D1.1'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 6 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng KHTN 6 từ Tuần 1 đến Tuần 8 (Chương I đến Chương VI) theo ma trận đề Bộ GD&ĐT.\n- Đánh giá năng lực tìm hiểu tự nhiên, tư duy khoa học thực nghiệm và tính trung thực trong kiểm tra.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn ma trận, bảng đặc tả và hướng dẫn chấm',
        nlsCode: '4.1.TC1a',
        aiCode: '6.A3.3'
      },
      {
        w: 10,
        t: 'Chương VI & Chương VII: Đa dạng thế giới sống',
        n: 'Chương VI - Bài 23: Tổ chức cơ thể đa bào (2 tiết) & Bài 24: Thực hành: Quan sát và mô tả cơ thể đơn bào, đa bào (1 tiết) & Chương VII - Bài 25: Hệ thống phân loại sinh vật (1 tiết)',
        y: '- Trình bày các cấp độ tổ chức của cơ thể đa bào: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.\n- Quan sát mô hình/tiêu bản cơ thể đơn bào, đa bào; nêu các bậc phân loại sinh vật và cách gọi tên khoa học.',
        eq: 'Kính hiển vi, tiêu bản trùng giày, mô hình cơ thể người, sơ đồ 5 giới sinh vật',
        nlsCode: '2.2.TC1a',
        aiCode: '6.C1.1'
      },
      {
        w: 11,
        t: 'Chương VII: Đa dạng thế giới sống',
        n: 'Chương VII - Bài 26: Khoá lưỡng phân (1 tiết) & Bài 27: Vi khuẩn (1 tiết) & Bài 28: Thực hành: Làm sữa chua và quan sát vi khuẩn (1 tiết) & Bài 29: Virus (1 tiết)',
        y: '- Xây dựng được khóa lưỡng phân phân loại sinh vật; mô tả hình dạng, cấu tạo và vai trò/tác hại của vi khuẩn và virus.\n- Thực hành làm sữa chua tại nhà hoặc lớp học, quan sát vi khuẩn lactic; nêu các biện pháp phòng chống bệnh do virus gây ra.',
        eq: 'Hộp sữa chua mẫu, sữa đặc, kính hiển vi, tranh cấu tạo virus Corona, HIV',
        nlsCode: '3.1.TC1b',
        aiCode: '6.B1.1'
      },
      {
        w: 12,
        t: 'Chương VII: Đa dạng thế giới sống',
        n: 'Chương VII - Bài 30: Nguyên sinh vật (1 tiết) & Bài 31: Thực hành: Quan sát nguyên sinh vật (1 tiết) & Bài 32: Nấm (1 tiết) & Bài 33: Thực hành: Quan sát các loại nấm (1 tiết)',
        y: '- Mô tả hình dạng, cấu tạo của nguyên sinh vật (trùng roi, trùng giày, tảo lục) và nấm (nấm men, nấm mốc, nấm đảm).\n- Tự làm tiêu bản nước ao/ruộng quan sát nguyên sinh vật và quan sát mẫu nấm mốc, nấm rơm, nấm linh chi.',
        eq: 'Mẫu nước rãnh ao, mẫu bánh mì mốc, nấm sò/nấm rơm, kính hiển vi',
        nlsCode: '2.4.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 13,
        t: 'Chương VII: Đa dạng thế giới sống',
        n: 'Chương VII - Bài 34: Thực vật (2 tiết) & Bài 35: Thực hành: Quan sát và phân biệt một số nhóm thực vật (2 tiết)',
        y: '- Phân biệt 4 nhóm thực vật chính: Rêu, Dương xỉ, Hạt trần, Hạt kín dựa vào đặc điểm cơ quan sinh dưỡng và sinh sản.\n- Thực hành phân chia và nhận biết các mẫu thực vật trong khuôn viên trường hoặc địa phương.',
        eq: 'Mẫu cây rêu tường, cây dương xỉ, cành thông có nón, cây bưởi/cây đậu hạt kín',
        nlsCode: '1.2.TC1b',
        aiCode: '6.C2.2'
      },
      {
        w: 14,
        t: 'Chương VII: Đa dạng thế giới sống',
        n: 'Chương VII - Bài 36: Động vật (2 tiết) & Bài 37: Thực hành: Quan sát và nhận biết một số nhóm động vật ngoài thiên nhiên (2 tiết)',
        y: '- Phân biệt động vật không xương sống (ruột khoang, giun, thân mềm, chân khớp) và động vật có xương sống (cá, lưỡng cư, bò sát, chim, thú).\n- Thực hành quan sát, phân loại mẫu động vật mẫu ngâm hoặc video tư liệu thế giới động vật.',
        eq: 'Bộ tranh/mẫu ngâm động vật không xương sống và có xương sống, kính lúp',
        nlsCode: '1.3.TC1b',
        aiCode: '6.A1.1'
      },
      {
        w: 15,
        t: 'Chương VII: Đa dạng thế giới sống',
        n: 'Chương VII - Bài 38: Đa dạng sinh học (2 tiết) & Bài 39: Tìm hiểu sinh vật ngoài thiên nhiên (2 tiết)',
        y: '- Nêu vai trò của đa dạng sinh học trong tự nhiên và thực tiễn; nguyên nhân suy giảm và các biện pháp bảo vệ đa dạng sinh học.\n- Thực hành dã ngoại tìm hiểu, chụp ảnh, ghi chép và lập danh lục các loài sinh vật tại địa phương.',
        eq: 'Kính lúp cầm tay, máy ảnh/smartphone, sổ tay dã ngoại tự nhiên',
        nlsCode: '2.1.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 6 (4 tiết)',
        y: '- Đánh giá tổng hợp toàn diện chuẩn kiến thức, kĩ năng KHTN 6 HK1 (Chương I đến Chương VII) theo chuẩn CT GDPT 2018.\n- Phân hóa năng lực học sinh, làm căn cứ điều chỉnh kế hoạch dạy học Học kỳ 2.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC1b',
        aiCode: '6.A3.3'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức KHTN 6 HK1 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1; giải thích cặn kẽ các câu hỏi khó và sửa chữa các lỗi sai thường gặp.\n- Củng cố hệ thống kiến thức chất, tế bào, đa dạng thế giới sống và phương pháp học tập KHTN.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm thực hành KHTN 6 (4 tiết)',
        y: '- Sơ kết kết quả học tập KHTN 6 HK1; trưng bày các sản phẩm thực hành (mẫu thực vật ép khô, tranh ảnh sinh vật, bộ sưu tập nấm).\n- Rèn luyện kỹ năng làm việc nhóm, báo cáo khoa học và xây dựng mục tiêu phấn đấu trong HK2.',
        eq: 'Sản phẩm tập san, video clip thực hành của học sinh, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '6.C2.2'
      },

      // HỌC KỲ 2 (Tuần 19 - 35: 68 tiết)
      {
        w: 19,
        t: 'Chương VIII: Lực trong đời sống',
        n: 'Chương VIII - Bài 40: Lực là gì? (2 tiết) & Bài 41: Biểu diễn lực (2 tiết)',
        y: '- Nắm vững khái niệm lực, tác dụng của lực làm biến đổi chuyển động hoặc làm biến dạng vật; phân biệt lực tiếp xúc và lực không tiếp xúc.\n- Biểu diễn được lực bằng một mũi tên có gốc, hướng và độ dài tỉ lệ với độ lớn của lực (theo tỉ xích cho trước).',
        eq: 'Lực kế, xe lăn, nam châm, quả nặng, thước kẻ có vạch chia',
        nlsCode: '1.1.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 20,
        t: 'Chương VIII: Lực trong đời sống',
        n: 'Chương VIII - Bài 42: Biến dạng của lò xo (2 tiết) & Bài 43: Trọng lượng, lực hấp dẫn (2 tiết)',
        y: '- Thực hành đo độ dãn của lò xo treo thẳng đứng tỉ lệ với khối lượng quả nặng; tính độ dãn của lò xo.\n- Phân biệt khối lượng và trọng lượng của vật; nắm công thức liên hệ P = 10m; hiểu khái niệm lực hấp dẫn.',
        eq: 'Giá thí nghiệm, lò xo xoắn, bộ quả nặng 50g, thước đo chia milimet',
        nlsCode: '3.1.TC1a',
        aiCode: '6.C1.1'
      },
      {
        w: 21,
        t: 'Chương VIII: Lực trong đời sống',
        n: 'Chương VIII - Bài 44: Lực ma sát (2 tiết) & Bài 45: Lực cản của nước (2 tiết)',
        y: '- Nêu được khái niệm lực ma sát trượt, ma sát nghỉ; tác dụng cản trở và thúc đẩy chuyển động của lực ma sát trong thực tế.\n- Giải thích được lực cản của nước và không khí đối với chuyển động của vật; các biện pháp làm giảm lực cản.',
        eq: 'Khối gỗ, lực kế 5N, máng trượt, bình nước hình trụ thí nghiệm lực cản',
        nlsCode: '1.2.TC1a',
        aiCode: '6.B1.1'
      },
      {
        w: 22,
        t: 'Chương IX: Năng lượng',
        n: 'Chương IX: Năng lượng - Bài 46: Năng lượng và sự truyền năng lượng (2 tiết) & Bài 47: Một số dạng năng lượng (2 tiết)',
        y: '- Nêu được mọi vật đều có năng lượng; năng lượng có thể truyền từ vật này sang vật khác qua tác dụng lực hoặc truyền nhiệt.\n- Phân biệt các dạng năng lượng: động năng, thế năng hấp dẫn, thế năng đàn hồi, quang năng, nhiệt năng, điện năng, hóa năng.',
        eq: 'Mô hình con lắc đơn, lò xo nén, đèn pin, pin tiểu, quạt điện mini',
        nlsCode: '1.1.TC1b',
        aiCode: '6.C2.2'
      },
      {
        w: 23,
        t: 'Chương IX: Năng lượng',
        n: 'Chương IX - Bài 48: Sự chuyển hoá năng lượng (2 tiết) & Bài 49: Năng lượng hao phí (2 tiết)',
        y: '- Nắm vững định luật bảo toàn năng lượng; phân tích các quá trình chuyển hóa năng lượng trong thiết bị điện, phương tiện giao thông.\n- Nhận diện năng lượng có ích và năng lượng hao phí (nhiệt tỏa ra, âm thanh vô ích) trong các hoạt động hàng ngày.',
        eq: 'Mô hình máy phát điện quay tay, bóng đèn LED, nhiệt kế đo nhiệt hao phí',
        nlsCode: '2.1.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 24,
        t: 'Chương IX: Năng lượng',
        n: 'Chương IX - Bài 50: Năng lượng tái tạo (2 tiết) & Bài 51: Tiết kiệm năng lượng (2 tiết)',
        y: '- Nêu được các nguồn năng lượng tái tạo (mặt trời, gió, thủy triều, địa nhiệt, sinh khối) và năng lượng không tái tạo (hóa thạch).\n- Đề xuất và thực hiện các hành động cụ thể tiết kiệm năng lượng điện, nước tại trường học và gia đình.',
        eq: 'Pin năng lượng mặt trời mini, mô hình tuabin gió phát điện mini',
        nlsCode: '3.1.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 25,
        t: 'Chương X: Trái Đất và bầu trời',
        n: 'Chương X: Trái Đất và bầu trời - Bài 52: Chuyển động nhìn thấy của Mặt Trời. Thiên thể (2 tiết) & Bài 53: Mặt Trăng (2 tiết)',
        y: '- Giải thích được hiện tượng mọc, lặn của Mặt Trời là do sự tự quay quanh trục của Trái Đất từ Tây sang Đông.\n- Giải thích được các hình dạng nhìn thấy của Mặt Trăng (pha Mặt Trăng: Trăng tròn, Trăng khuyết, Trăng non) trong tháng.',
        eq: 'Mô hình hệ Mặt Trời - Trái Đất - Mặt Trăng (Tellurion), đèn chiếu',
        nlsCode: '1.2.TC1b',
        aiCode: '6.C1.1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 6 (4 tiết)',
        y: '- Đánh giá năng lực tiếp thu kiến thức phần Lực trong đời sống và Năng lượng (Chương VIII, IX) theo chuẩn ma trận Bộ GD&ĐT.\n- Rèn luyện kĩ năng giải bài tập tính toán lực, phân tích năng lượng và tư duy logic.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn, ma trận và đáp án',
        nlsCode: '4.1.TC1a',
        aiCode: '6.A3.3'
      },
      {
        w: 27,
        t: 'Chương X: Trái Đất và bầu trời',
        n: 'Chương X: Trái Đất và bầu trời - Bài 54: Hệ Mặt Trời (2 tiết) & Bài 55: Ngân Hà (2 tiết)',
        y: '- Mô tả được cấu trúc của Hệ Mặt Trời: Mặt Trời ở trung tâm và 8 hành tinh quay quanh; phân biệt hành tinh đá và hành tinh khí.\n- Nhận biết Ngân Hà (Milky Way) là một thiên hà xoắn ốc chứa Hệ Mặt Trời của chúng ta.',
        eq: 'Tranh ảnh thiên văn, video mô phỏng vũ trụ 3D, phần mềm Stellarium',
        nlsCode: '1.3.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 28,
        t: 'Luyện tập tổng hợp & STEM',
        n: 'Luyện tập tổng hợp kiến thức Vật lí - Hóa học - Sinh học KHTN 6 & Thực hành giải quyết vấn đề (4 tiết)',
        y: '- Hệ thống hóa các kiến thức liên môn Vật lí, Hóa học, Sinh học và Thiên văn học trong chương trình KHTN Lớp 6.\n- Rèn luyện kỹ năng giải các câu hỏi trắc nghiệm, bài tập tự luận và tình huống khoa học thực tiễn.',
        eq: 'Phiếu bài tập tổng hợp KHTN 6, bảng ma trận câu hỏi',
        nlsCode: '2.2.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 29,
        t: 'Dự án STEM KHTN 6',
        n: 'Dự án STEM KHTN 6: "Thiết kế Mô hình Bình lọc nước mini & Xe thế năng" (4 tiết)',
        y: '- Vận dụng kiến thức tách chất khỏi hỗn hợp để thiết kế, chế tạo bình lọc nước mini từ cát, sỏi, than hoạt tính.\n- Vận dụng kiến thức lực và năng lượng chế tạo mô hình xe chạy bằng năng lượng lò xo/thế năng dây thun.',
        eq: 'Chai nhựa, cát thạch anh, than hoạt tính, sỏi, bánh xe đồ chơi, dây chun',
        nlsCode: '3.2.TC1a',
        aiCode: '6.D1.1'
      },
      {
        w: 30,
        t: 'Ôn tập học kì II',
        n: 'Ôn tập toàn diện chuẩn bị kiểm tra đánh giá cuối Học kì II môn KHTN 6 (4 tiết)',
        y: '- Ôn tập hệ thống hóa toàn bộ kiến thức 10 chương KHTN Lớp 6; củng cố kĩ năng thực hành thí nghiệm và tính toán.\n- Hướng dẫn học sinh phương pháp làm bài thi tổng hợp đạt kết quả cao.',
        eq: 'Đề cương ôn tập chi tiết KHTN 6 HK2, sơ đồ tư duy',
        nlsCode: '1.1.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn KHTN 6 (4 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn KHTN Lớp 6 cả năm học.\n- Đánh giá sự tiến bộ về phẩm chất, năng lực tìm hiểu thế giới tự nhiên và năng lực ứng dụng khoa học vào đời sống.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC1b',
        aiCode: '6.A3.3'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức KHTN 6 HK2 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK2; phân tích chi tiết các dạng bài tập thực hành và tính toán.\n- Củng cố hệ thống kiến thức cốt lõi chuẩn bị cho chương trình KHTN Lớp 7.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC1b',
        aiCode: '6.A1.3'
      },
      {
        w: 33,
        t: 'Dự án Khoa học KHTN 6',
        n: 'Báo cáo sản phẩm Dự án STEM & Triển lãm Khoa học Khám phá Thiên nhiên Lớp 6 (4 tiết)',
        y: '- Trưng bày và thuyết trình các mô hình STEM (Bình lọc nước, Xe thế năng, Kính thiên văn đơn giản).\n- Đánh giá chéo sản phẩm giữa các nhóm và rèn luyện năng lực thuyết trình khoa học.',
        eq: 'Sản phẩm mô hình STEM của học sinh, poster báo cáo khoa học, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '6.C2.2'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Tổng kết nội dung thực hành thí nghiệm và phương pháp nghiên cứu KHTN 6 (4 tiết)',
        y: '- Tổng kết các kĩ năng thao tác phòng thí nghiệm: đo lường, pha chế, sử dụng kính hiển vi, an toàn hóa chất.\n- Đánh giá hồ sơ học tập và năng lực thực hành thí nghiệm của từng học sinh.',
        eq: 'Bảng theo dõi kĩ năng thực hành, phiếu đánh giá năng lực thí nghiệm',
        nlsCode: '1.3.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn KHTN 6 cả năm (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và xếp loại môn KHTN Lớp 6 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Biểu dương các học sinh xuất sắc trong nghiên cứu khoa học và giao nhiệm vụ tìm hiểu KHTN Lớp 7 trong dịp hè.',
        eq: 'Sổ theo dõi đánh giá học sinh, danh mục tài liệu hè KHTN 7',
        nlsCode: '5.4.TC1a',
        aiCode: '6.A3.3'
      }
    ];

    grade6Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 4,
        yccd: item.y,
        equipment: item.eq,
        location: 'Phòng học / Phòng thực hành KHTN',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 29 || item.w === 33 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: KHOA HỌC TỰ NHIÊN (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (10 CHƯƠNG, 42 BÀI)
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18: 72 tiết)
      {
        w: 1,
        t: 'Mở đầu & Chương I: Nguyên tử - Bảng tuần hoàn',
        n: 'Mở đầu - Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên (1 tiết) & Chương I - Bài 2: Nguyên tử (3 tiết)',
        y: '- Trình bày các bước trong phương pháp tìm hiểu tự nhiên và kĩ năng tiến hành nghiên cứu khoa học (1 tiết).\n- Trình bày mô hình nguyên tử Rutherford - Bohr, hạt nhân (proton, neutron) và vỏ electron; tính khối lượng nguyên tử theo amu.',
        eq: 'Mô hình nguyên tử Rutherford - Bohr, bảng mô tả các hạt p, n, e, phiếu học tập',
        nlsCode: '1.1.TC1a',
        aiCode: '7.A1.1'
      },
      {
        w: 2,
        t: 'Chương I: Nguyên tử. Sơ lược về bảng tuần hoàn các nguyên tố hoá học',
        n: 'Chương I - Bài 3: Nguyên tố hoá học (2 tiết) & Bài 4: Sơ lược về bảng tuần hoàn các nguyên tố hoá học (2 tiết)',
        y: '- Nêu được khái niệm nguyên tố hoá học, kí hiệu hoá học; giải thích cấu trúc bảng tuần hoàn (ô nguyên tố, chu kì, nhóm).\n- Xác định vị trí của kim loại, phi kim, khí hiếm trong Bảng tuần hoàn các nguyên tố hoá học.',
        eq: 'Bảng tuần hoàn các nguyên tố hóa học cỡ lớn, thẻ nguyên tố flashcard',
        nlsCode: '1.2.TC1a',
        aiCode: '7.C5.1'
      },
      {
        w: 3,
        t: 'Chương I & Chương II: Phân tử. Liên kết hoá học',
        n: 'Chương I - Bài 4: Bảng tuần hoàn (tiếp) (1 tiết) & Chương II - Bài 5: Phân tử - Đơn chất - Hợp chất (2 tiết) & Bài 6: Giới thiệu về liên kết hoá học (1 tiết)',
        y: '- Phân biệt đơn chất và hợp chất, phân tử khối; nêu bản chất liên kết ion (kim loại - phi kim) và liên kết cộng hóa trị (phi kim - phi kim).\n- Mô tả sự hình thành liên kết trong phân tử NaCl, H2O, CO2.',
        eq: 'Mô hình lắp ghép phân tử H2, O2, H2O, NaCl, phần mềm mô phỏng 3D',
        nlsCode: '1.3.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 4,
        t: 'Chương II: Phân tử. Liên kết hoá học',
        n: 'Chương II - Bài 6: Giới thiệu về liên kết hoá học (tiếp) (2 tiết) & Bài 7: Hoá trị và công thức hoá học (2 tiết)',
        y: '- Nắm vững quy tắc hóa trị trong hợp chất hai nguyên tố; viết công thức hóa học và tính phần trăm khối lượng các nguyên tố.\n- Xác định hóa trị của nguyên tố trong hợp chất và lập CTHH khi biết hóa trị hoặc phần trăm khối lượng.',
        eq: 'Bảng hóa trị các nguyên tố thông dụng, phiếu bài tập lập CTHH',
        nlsCode: '3.1.TC1a',
        aiCode: '7.B3.1'
      },
      {
        w: 5,
        t: 'Chương III: Tốc độ',
        n: 'Chương III: Tốc độ - Bài 8: Tốc độ chuyển động (2 tiết) & Bài 9: Đo tốc độ (2 tiết)',
        y: '- Nêu được ý nghĩa của tốc độ, công thức tính tốc độ v = s/t và các đơn vị đo tốc độ (m/s, km/h).\n- Thực hành đo tốc độ bằng đồng hồ bấm giây và cổng quang điện kết hợp đồng hồ đo thời gian hiện số.',
        eq: 'Máng nghiêng, xe lăn, đồng hồ bấm giây, cổng quang điện, đồng hồ đo thời gian hiện số',
        nlsCode: '2.1.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 6,
        t: 'Chương III: Tốc độ',
        n: 'Chương III - Bài 10: Đồ thị quãng đường – thời gian (2 tiết) & Bài 11: Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông (2 tiết)',
        y: '- Vẽ và phân tích đồ thị quãng đường - thời gian để xác định tốc độ và vị trí của vật chuyển động.\n- Thảo luận các quy định về tốc độ, khoảng cách an toàn và tác động của tốc độ đến an toàn giao thông đường bộ.',
        eq: 'Giấy kẻ ô li, thước kẻ, tư liệu/video về khoảng cách an toàn giao thông',
        nlsCode: '3.1.TC1b',
        aiCode: '7.D1.1'
      },
      {
        w: 7,
        t: 'Chương IV: Âm thanh',
        n: 'Chương IV: Âm thanh - Bài 12: Sóng âm (2 tiết) & Bài 13: Độ to và độ cao của âm (2 tiết)',
        y: '- Nêu được sóng âm là sự lan truyền dao động trong các môi trường rắn, lỏng, khí (không truyền được trong chân không).\n- Phân biệt độ cao của âm phụ thuộc vào tần số dao động (Hz) và độ to của âm phụ thuộc vào biên độ dao động (dB).',
        eq: 'Âm thoa, búa cao su, đàn guitar/đàn bầu mini, dao động kí hiển thị dạng sóng',
        nlsCode: '1.1.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 8,
        t: 'Chương IV & Chương V: Ánh sáng',
        n: 'Chương IV - Bài 14: Phản xạ âm, chống ô nhiễm tiếng ồn (2 tiết) & Chương V - Bài 15: Năng lượng ánh sáng. Tia sáng, vùng tối (2 tiết)',
        y: '- Nêu được hiện tượng phản xạ âm, tiếng vang; phân biệt vật phản xạ âm tốt/kém; đề xuất giải pháp chống ô nhiễm tiếng ồn.\n- Nắm vững khái niệm tia sáng, chùm sáng; giải thích hiện tượng bóng tối, bóng nửa tối và nhật thực, nguyệt thực.',
        eq: 'Gương phẳng, đèn pin tạo tia sáng hẹp, mô hình nhật thực - nguyệt thực',
        nlsCode: '2.4.TC1a',
        aiCode: '7.C5.1'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 7 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng KHTN 7 từ Tuần 1 đến Tuần 8 (Chương I đến Chương IV) theo ma trận đề Bộ GD&ĐT.\n- Đánh giá năng lực tính toán tốc độ, lập công thức hóa học và giải thích hiện tượng âm thanh.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn, ma trận và thang điểm chính thức',
        nlsCode: '4.1.TC1a',
        aiCode: '7.A3.1'
      },
      {
        w: 10,
        t: 'Chương V: Ánh sáng',
        n: 'Chương V - Bài 16: Sự phản xạ ánh sáng (2 tiết) & Bài 17: Ảnh của vật qua gương phẳng (2 tiết)',
        y: '- Phát biểu và vận dụng định luật phản xạ ánh sáng; vẽ tia phản xạ và tính góc tới, góc phản xạ.\n- Trình bày tính chất ảnh tạo bởi gương phẳng (ảnh ảo, bằng vật, đối xứng); vẽ ảnh của một vật qua gương phẳng.',
        eq: 'Gương phẳng, bảng chia độ tròn, đèn chiếu laser, thước kẻ',
        nlsCode: '3.2.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 11,
        t: 'Chương VI: Từ',
        n: 'Chương VI: Từ - Bài 18: Nam châm (2 tiết) & Bài 19: Từ trường (2 tiết)',
        y: '- Trình bày tính chất từ của nam châm (cực Bắc N, cực Nam S), sự tương tác giữa các cực từ.\n- Nêu khái niệm từ trường, từ phổ; vẽ đường sức từ của nam châm thẳng và nam châm chữ U; giải thích tác dụng của la bàn.',
        eq: 'Nam châm thẳng, nam châm chữ U, mạt sắt, la bàn, tấm nhựa trong',
        nlsCode: '1.2.TC1b',
        aiCode: '7.B3.1'
      },
      {
        w: 12,
        t: 'Chương VI & Chương VII: Trao đổi chất và chuyển hoá năng lượng',
        n: 'Chương VI - Bài 20: Chế tạo nam châm điện đơn giản (2 tiết) & Chương VII - Bài 21: Khái quát về trao đổi chất và chuyển hoá năng lượng (2 tiết)',
        y: '- Thực hành chế tạo nam châm điện từ ống dây dẫn cuốn quanh lõi sắt non; khảo sát yếu tố làm tăng từ trường của nam châm điện.\n- Nêu khái niệm trao đổi chất và chuyển hóa năng lượng, mối quan hệ biện chứng giữa trao đổi chất và chuyển hóa năng lượng ở sinh vật.',
        eq: 'Ống dây đồng, đinh sắt lớn, pin 1.5V/4.5V, kẹp giấy kim loại, công tắc',
        nlsCode: '3.1.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 13,
        t: 'Chương VII: Trao đổi chất và chuyển hoá năng lượng ở sinh vật',
        n: 'Chương VII - Bài 22: Quang hợp ở thực vật (2 tiết) & Bài 23: Một số yếu tố ảnh hưởng đến quang hợp (1 tiết) & Bài 24: Thực hành: Chứng minh quang hợp ở cây xanh (1 tiết)',
        y: '- Viết phương trình chữ của quang hợp; nêu vai trò của lục lạp, ánh sáng, nước, CO2 và nhiệt độ đối với quang hợp.\n- Thực hành chứng minh lá cây tạo ra tinh bột và giải phóng khí oxygen trong quá trình quang hợp.',
        eq: 'Cây rong đuôi chó, cồn 90 độ, dung dịch iodine, đèn cồn, ống nghiệm, cốc đun',
        nlsCode: '1.3.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 14,
        t: 'Chương VII: Trao đổi chất và chuyển hoá năng lượng ở sinh vật',
        n: 'Chương VII - Bài 25: Hô hấp tế bào (2 tiết) & Bài 26: Một số yếu tố ảnh hưởng đến hô hấp tế bào (1 tiết) & Bài 27: Thực hành: Hô hấp ở thực vật (1 tiết)',
        y: '- Nêu khái niệm và viết phương trình hô hấp tế bào; phân tích vai trò của ti thể và các yếu tố ảnh hưởng (nhiệt độ, độ ẩm, oxygen, CO2).\n- Thực hành chứng minh hạt nảy mầm hút oxygen, thải khí CO2 và tỏa nhiệt.',
        eq: 'Hạt đỗ nảy mầm, bình thủy tinh kín, nước vôi trong, nhiệt kế đo nhiệt độ',
        nlsCode: '2.1.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 15,
        t: 'Chương VII: Trao đổi chất và chuyển hoá năng lượng ở sinh vật',
        n: 'Chương VII - Bài 28: Trao đổi khí ở sinh vật (2 tiết) & Bài 29: Vai trò của nước và chất dinh dưỡng đối với sinh vật (2 tiết)',
        y: '- Mô tả cấu tạo khí khổng ở lá cây và cơ chế đóng mở; mô tả cơ quan trao đổi khí ở động vật (phổi, mang, da, ống khí).\n- Trình bày vai trò thiết yếu của nước và muối khoáng đối với đời sống thực vật và động vật.',
        eq: 'Kính hiển vi quang học, biểu bì lá thài lài tía, tranh sơ đồ trao đổi khí ở người',
        nlsCode: '1.2.TC1a',
        aiCode: '7.C5.1'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 7 (4 tiết)',
        y: '- Đánh giá tổng hợp toàn diện kết quả học tập KHTN 7 HK1 (Chương I đến Chương VII) theo chuẩn Chương trình GDPT 2018.\n- Phân hóa năng lực học sinh làm căn cứ định hướng kế hoạch giáo dục Học kỳ 2.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC1b',
        aiCode: '7.A3.1'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức KHTN 7 HK1 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1 chi tiết; giải đáp thắc mắc và khắc phục các lỗ hổng kiến thức.\n- Hệ thống hóa các chủ đề Nguyên tử, Tốc độ, Âm thanh, Ánh sáng, Từ học và Quang hợp - Hô hấp.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm thực hành KHTN 7 (4 tiết)',
        y: '- Sơ kết thi đua môn KHTN 7 HK1; trưng bày sản phẩm nam châm điện tự chế, tranh vẽ mô hình nguyên tử, báo cáo thực hành quang hợp.\n- Rèn luyện năng lực tự chủ, hợp tác nhóm và định hướng nhiệm vụ học tập HK2.',
        eq: 'Sản phẩm nam châm điện, video thực hành của học sinh, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '7.D1.1'
      },

      // HỌC KỲ 2 (Tuần 19 - 35: 68 tiết)
      {
        w: 19,
        t: 'Chương VII: Trao đổi chất và chuyển hoá năng lượng ở sinh vật',
        n: 'Chương VII - Bài 30: Trao đổi nước và chất dinh dưỡng ở thực vật (2 tiết) & Bài 31: Trao đổi nước và chất dinh dưỡng ở động vật (2 tiết)',
        y: '- Trình bày con đường hấp thụ nước và khoáng từ lông hút vào mạch gỗ, mạch rây và sự thoát hơi nước qua khí khổng.\n- Mô tả quá trình tiêu hóa thức ăn, hấp thụ chất dinh dưỡng và tuần hoàn vận chuyển máu trong cơ thể động vật và người.',
        eq: 'Tranh con đường vận chuyển dòng mạch gỗ/rây, mô hình hệ tiêu hóa - tuần hoàn người',
        nlsCode: '1.1.TC1a',
        aiCode: '7.A1.1'
      },
      {
        w: 20,
        t: 'Chương VII & Chương VIII: Cảm ứng ở sinh vật',
        n: 'Chương VII - Bài 32: Thực hành: Chứng minh thân vận chuyển nước và lá thoát hơi nước (2 tiết) & Chương VIII - Bài 33: Cảm ứng ở sinh vật và tập tính ở động vật (2 tiết)',
        y: '- Thực hành cắm cành hoa trắng vào nước pha mực đỏ để chứng minh dòng mạch gỗ vận chuyển nước lên thân và lá.\n- Nêu khái niệm cảm ứng ở thực vật (hướng sáng, hướng trọng lực, hướng nước) và tập tính bẩm sinh/học được ở động vật.',
        eq: 'Cành hoa cúc/hồng trắng, dung dịch mực đỏ, túi nilon bọc lá, tranh tập tính động vật',
        nlsCode: '3.1.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 21,
        t: 'Chương VIII: Cảm ứng ở sinh vật',
        n: 'Chương VIII - Bài 34: Vận dụng hiện tượng cảm ứng ở sinh vật vào thực tiễn (2 tiết) & Bài 35: Thực hành: Cảm ứng ở sinh vật (2 tiết)',
        y: '- Vận dụng cảm ứng để tăng năng suất cây trồng (làm giàn cho cây thân leo, chiếu sáng kích thích ra hoa) và huấn luyện vật nuôi.\n- Tự làm thí nghiệm chứng minh tính hướng sáng của ngọn cây mầm và tính hướng đất của rễ.',
        eq: 'Hạt đỗ gieo trong hộp xốp có khe sáng bên cạnh, cây trinh nữ (cây xấu hổ)',
        nlsCode: '1.2.TC1a',
        aiCode: '7.B3.1'
      },
      {
        w: 22,
        t: 'Chương IX: Sinh trưởng và phát triển ở sinh vật',
        n: 'Chương IX: Sinh trưởng và phát triển ở sinh vật - Bài 36: Khái quát về sinh trưởng và phát triển ở sinh vật (2 tiết) & Bài 37: Ứng dụng sinh trưởng và phát triển vào thực tiễn (2 tiết)',
        y: '- Phân biệt sinh trưởng (tăng kích thước, khối lượng) và phát triển (phân hóa chức năng, hình thành cơ quan); mô tả vòng đời của sinh vật.\n- Vận dụng hiểu biết về các yếu tố ảnh hưởng (nhiệt độ, dinh dưỡng, ánh sáng) để điều khiển sinh trưởng vật nuôi, cây trồng.',
        eq: 'Tranh vòng đời của ếch, bướm, cây hạt kín; bảng số liệu sinh trưởng',
        nlsCode: '1.1.TC1b',
        aiCode: '7.A1.MR1'
      },
      {
        w: 23,
        t: 'Chương IX & Chương X: Sinh sản ở sinh vật',
        n: 'Chương IX - Bài 38: Thực hành: Quan sát sự sinh trưởng và phát triển ở sinh vật (2 tiết) & Chương X - Bài 39: Sinh sản vô tính ở sinh vật (2 tiết)',
        y: '- Thực hành đo kích thước thân lá cây, đếm số lá qua các tuần theo dõi; chụp ảnh ghi chép tiến trình phát triển.\n- Nêu khái niệm sinh sản vô tính ở thực vật (sinh dưỡng) và động vật (phân đôi, nảy chồi); các ứng dụng giâm cành, chiết cành, ghép cành.',
        eq: 'Mẫu cành giâm, cành chiết, củ khoai tây nảy mầm, dao chiết cành, túi bầu',
        nlsCode: '3.1.TC1b',
        aiCode: '7.C5.1'
      },
      {
        w: 24,
        t: 'Chương X: Sinh sản ở sinh vật',
        n: 'Chương X: Sinh sản ở sinh vật - Bài 40: Sinh sản hữu tính ở sinh vật (2 tiết) & Bài 41: Một số yếu tố ảnh hưởng và điều hoà sinh sản (2 tiết)',
        y: '- Mô tả các bộ phận của hoa lưỡng tính; quá trình thụ phấn, thụ tinh, hình thành quả và hạt; sinh sản hữu tính ở động vật (đẻ trứng, đẻ con).\n- Nêu các yếu tố ảnh hưởng đến sinh sản và các biện pháp thụ phấn nhân tạo, nhân giống vô tính trong nông nghiệp.',
        eq: 'Mẫu hoa dâm bụt/hoa ly, tranh cấu tạo nhị và nhụy hoa, kính lúp cầm tay',
        nlsCode: '2.1.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 25,
        t: 'Chương X: Sinh sản ở sinh vật',
        n: 'Chương X - Bài 42: Cơ thể sinh vật là một thể thống nhất (2 tiết) & Ôn tập củng cố Sinh học cơ thể KHTN 7 (2 tiết)',
        y: '- Chứng minh cơ thể sinh vật là một thể thống nhất: mối quan hệ mật thiết giữa các quá trình trao đổi chất, cảm ứng, sinh trưởng và sinh sản.\n- Hệ thống hóa toàn bộ kiến thức Sinh học cơ thể sinh vật Lớp 7 chuẩn bị kiểm tra giữa kỳ 2.',
        eq: 'Sơ đồ tư duy cơ thể sinh vật là một thể thống nhất, phiếu ôn tập',
        nlsCode: '1.2.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 7 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức Sinh học cơ thể sinh vật (Trao đổi chất, Cảm ứng, Sinh trưởng, Sinh sản) theo ma trận đề Bộ GD&ĐT.\n- Rèn luyện kỹ năng giải bài tập tình huống thực tiễn và tư duy phân tích sinh học.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn ma trận, bảng đặc tả và đáp án',
        nlsCode: '4.1.TC1a',
        aiCode: '7.A3.1'
      },
      {
        w: 27,
        t: 'Luyện tập tổng hợp & Nghiên cứu',
        n: 'Luyện tập phương pháp tích hợp Vật lí - Hóa học - Sinh học KHTN 7 (4 tiết)',
        y: '- Vận dụng kiến thức liên môn giải thích các hiện tượng thực tế: quang hợp (Hóa - Sinh), dẫn truyền xung thần kinh (Lý - Sinh), hô hấp tế bào.\n- Rèn luyện kỹ năng giải các đề bài trắc nghiệm tổng hợp chuẩn cấu trúc Bộ GD&ĐT.',
        eq: 'Bộ câu hỏi trắc nghiệm tích hợp KHTN 7, phần mềm Kahoot/Quizizz',
        nlsCode: '2.2.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 28,
        t: 'Dự án STEM KHTN 7',
        n: 'Dự án STEM KHTN 7: "Chế tạo Kính tiềm vọng / Kính vạn hoa & Mô hình Nhân giống vô tính cây trồng" (4 tiết)',
        y: '- Vận dụng định luật phản xạ ánh sáng thiết kế kính tiềm vọng hoặc kính vạn hoa.\n- Thực hành kỹ thuật giâm cành, chiết cành, ghép cành trên cây ăn quả hoặc cây cảnh tại vườn trường.',
        eq: 'Gương phẳng mini, bìa carton, kéo, băng dính, cành hoa hồng/cây ăn quả',
        nlsCode: '3.2.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 29,
        t: 'Báo cáo dự án STEM',
        n: 'Báo cáo sản phẩm Dự án STEM & Trưng bày Cây giống nhân tạo Lớp 7 (4 tiết)',
        y: '- Thuyết trình báo cáo kỹ thuật chế tạo kính tiềm vọng/kính vạn hoa và trưng bày các bầu cây giâm/chiết thành công.\n- Đánh giá sản phẩm theo tiêu chí khoa học, tính ứng dụng thực tế và thẩm mỹ.',
        eq: 'Sản phẩm kính tiềm vọng, chậu cây giống của học sinh, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '7.C5.1'
      },
      {
        w: 30,
        t: 'Ôn tập học kì II',
        n: 'Ôn tập toàn diện chuẩn bị kiểm tra đánh giá cuối Học kì II môn KHTN 7 (4 tiết)',
        y: '- Tổng kết toàn bộ kiến thức 10 chương KHTN Lớp 7 (Hóa học nguyên tử, Vật lí sóng/âm/ánh sáng/từ và Sinh học cơ thể).\n- Hướng dẫn chiến lược giải đề thi cuối năm đạt điểm tối ưu.',
        eq: 'Sơ đồ tư duy toàn bộ chương trình KHTN 7, hệ thống câu hỏi trọng tâm',
        nlsCode: '1.3.TC1b',
        aiCode: '7.A1.MR1'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn KHTN 7 (4 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn KHTN Lớp 7 cả năm học.\n- Đánh giá năng lực tư duy khoa học, kĩ năng thực nghiệm và phẩm chất chăm chỉ, trung thực.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm chính thức',
        nlsCode: '4.1.TC1b',
        aiCode: '7.A3.1'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức KHTN 7 HK2 (4 tiết)',
        y: '- Phân tích, sửa chữa bài kiểm tra cuối HK2 chi tiết; tổng kết những ưu điểm và những điểm cần cải thiện.\n- Củng cố các kĩ năng tính toán và tư duy liên môn chuẩn bị cho KHTN Lớp 8.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC1b',
        aiCode: '7.A1.3'
      },
      {
        w: 33,
        t: 'Thực hành nâng cao',
        n: 'Thực hành nâng cao: Kĩ năng phòng thí nghiệm và Khám phá khoa học sinh học KHTN 7 (4 tiết)',
        y: '- Thực hành đo đạc các thông số môi trường (nhiệt độ, độ ẩm, cường độ ánh sáng) và khảo sát ảnh hưởng đến sinh vật.\n- Ứng dụng công nghệ số và cảm biến thông minh trong thu thập số liệu khoa học.',
        eq: 'Cảm biến nhiệt độ - ánh sáng, máy tính, bảng ghi số liệu thực nghiệm',
        nlsCode: '3.1.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Tổng kết nội dung thực hành thí nghiệm và phương pháp nghiên cứu KHTN 7 (4 tiết)',
        y: '- Đánh giá tổng thể hồ sơ thực hành thí nghiệm và sản phẩm học tập KHTN 7 của học sinh cả năm học.\n- Chuẩn bị nền tảng kiến thức Hóa học vô cơ, Cơ học áp suất và Giải phẫu người cho KHTN Lớp 8.',
        eq: 'Bảng tổng hợp đánh giá kĩ năng thực hành, sơ đồ liên thông KHTN 7-8',
        nlsCode: '1.1.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn KHTN 7 cả năm (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và xếp loại môn KHTN Lớp 7 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Khen thưởng học sinh có thành tích xuất sắc trong học tập và hoạt động trải nghiệm STEM.',
        eq: 'Sổ theo dõi đánh giá học sinh, danh mục sách hướng dẫn tự học hè lớp 8',
        nlsCode: '5.4.TC1a',
        aiCode: '7.A3.1'
      }
    ];

    grade7Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 4,
        yccd: item.y,
        equipment: item.eq,
        location: 'Phòng học / Phòng thực hành KHTN',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 28 || item.w === 29 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: KHOA HỌC TỰ NHIÊN (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (8 CHƯƠNG, 47 BÀI)
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18: 72 tiết)
      {
        w: 1,
        t: 'Mở đầu & Chương I: Phản ứng hoá học',
        n: 'Mở đầu - Bài 1: Sử dụng một số hoá chất, thiết bị cơ bản trong phòng thí nghiệm (1 tiết) & Chương I - Bài 2: Phản ứng hoá học (3 tiết)',
        y: '- Nhận biết và sử dụng đúng quy tắc các dụng cụ, thiết bị đo và hóa chất an toàn trong phòng thí nghiệm (1 tiết).\n- Nêu khái niệm phản ứng hoá học, chất phản ứng, sản phẩm; nhận biết dấu hiệu có phản ứng hoá học xảy ra; phân biệt phản ứng tỏa nhiệt và thu nhiệt.',
        eq: 'Ống nghiệm, đèn cồn, kẹp gỗ, giá để ống nghiệm, hóa chất BaCl2, Na2SO4, Fe, HCl',
        nlsCode: '1.1.TC2a',
        aiCode: '8.A1.1'
      },
      {
        w: 2,
        t: 'Chương I: Phản ứng hoá học',
        n: 'Chương I - Bài 3: Mol và tỉ khối chất khí (2 tiết) & Bài 4: Dung dịch và nồng độ (2 tiết)',
        y: '- Nắm vững khái niệm mol, khối lượng mol (M), thể tích mol chất khí ở đkc (24.79 L/mol); tính tỉ khối của chất khí.\n- Tính nồng độ phần trăm (C%), nồng độ mol (CM); thực hành pha chế dung dịch theo nồng độ cho trước.',
        eq: 'Cân điện tử, bình định mức, cốc thủy tinh, đũa khuấy, muối ăn NaCl, đường saccharose',
        nlsCode: '1.2.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 3,
        t: 'Chương I: Phản ứng hoá học',
        n: 'Chương I - Bài 5: Định luật bảo toàn khối lượng và phương trình hoá học (2 tiết) & Bài 6: Tính theo phương trình hoá học (2 tiết)',
        y: '- Phát biểu định luật bảo toàn khối lượng; lập phương trình hoá học và cân bằng hệ số đúng.\n- Thực hiện thành thạo các bước tính theo phương trình hoá học (tính khối lượng, thể tích chất khí và hiệu suất phản ứng).',
        eq: 'Cân đĩa thí nghiệm bảo toàn khối lượng dung dịch BaCl2 + Na2SO4, bảng nguyên tử khối',
        nlsCode: '3.1.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 4,
        t: 'Chương I & Chương II: Một số hợp chất thông dụng',
        n: 'Chương I - Bài 7: Tốc độ phản ứng và chất xúc tác (2 tiết) & Chương II - Bài 8: Acid (2 tiết)',
        y: '- Trình bày các yếu tố ảnh hưởng đến tốc độ phản ứng (nồng độ, nhiệt độ, diện tích tiếp xúc, chất xúc tác).\n- Nêu khái niệm acid, công thức phân tử; tính chất hoá học của acid (đổi màu quỳ tím, tác dụng với kim loại); ứng dụng của HCl, H2SO4.',
        eq: 'Dung dịch HCl, H2SO4 loãng, giấy quỳ tím, kim loại Zn, Mg, đá vôi CaCO3, bình tam giác',
        nlsCode: '1.2.TC2b',
        aiCode: '8.B1.1'
      },
      {
        w: 5,
        t: 'Chương II: Một số hợp chất thông dụng',
        n: 'Chương II - Bài 9: Base. Thang pH (2 tiết) & Bài 10: Oxide (2 tiết)',
        y: '- Nêu khái niệm base, phân loại base kiềm/không tan; thang pH và ý nghĩa trong đời sống; tính chất hoá học của base.\n- Nêu khái niệm oxide, phân loại oxide base, oxide acid, oxide lưỡng tính, oxide trung tính; tính chất hoá học của oxide.',
        eq: 'Dung dịch NaOH, Ca(OH)2, phenolphtalein, giấy đo pH, vôi sống CaO, đồng oxide CuO',
        nlsCode: '2.1.TC2a',
        aiCode: '8.C5.1'
      },
      {
        w: 6,
        t: 'Chương II: Một số hợp chất thông dụng',
        n: 'Chương II - Bài 11: Muối (2 tiết) & Bài 12: Phân bón hoá học (2 tiết)',
        y: '- Nêu khái niệm muối, tính chất hoá học của muối; điều kiện xảy ra phản ứng trao đổi trong dung dịch.\n- Trình bày thành phần và vai trò của phân bón hoá học (phân đạm N, phân lân P, phân kali K, phân NPK); sử dụng phân bón an toàn.',
        eq: 'Mẫu phân đạm urê, supephotphat, phân kali KCl, phân NPK, dung dịch BaCl2, AgNO3',
        nlsCode: '3.1.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 7,
        t: 'Chương III: Khối lượng riêng và áp suất',
        n: 'Chương III - Bài 13: Khối lượng riêng (2 tiết) & Bài 14: Thực hành xác định khối lượng riêng (2 tiết)',
        y: '- Nắm định nghĩa khối lượng riêng D = m/V và các đơn vị kg/m3, g/cm3.\n- Thực hành xác định khối lượng riêng của khối hình hộp chữ nhật và vật có hình dạng bất kì bằng cân điện tử và bình chia độ.',
        eq: 'Cân điện tử, bình chia độ, khối gỗ, khối sắt, sỏi đá, nước',
        nlsCode: '1.1.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 8,
        t: 'Chương III: Khối lượng riêng và áp suất',
        n: 'Chương III - Bài 15: Áp suất trên một bề mặt (2 tiết) & Bài 16: Áp suất chất lỏng. Áp suất khí quyển (2 tiết)',
        y: '- Nêu định nghĩa áp lực, áp suất p = F/S; giải thích các biện pháp tăng/giảm áp suất trong thực tế.\n- Trình bày đặc điểm của áp suất chất lỏng truyền nguyên vẹn theo mọi hướng; giải thích sự tồn tại của áp suất khí quyển.',
        eq: 'Khối kim loại hình hộp, khay cát mịn, ống hình trụ màng cao su thí nghiệm áp suất chất lỏng',
        nlsCode: '2.4.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 8 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức Hóa học vô cơ (Phản ứng hóa học, Acid, Base, Muối) và Khối lượng riêng - Áp suất theo ma trận đề Bộ GD&ĐT.\n- Đánh giá kĩ năng tính toán nồng độ, giải toán theo PTHH và tính áp suất.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2a',
        aiCode: '8.A3.3'
      },
      {
        w: 10,
        t: 'Chương III & Chương IV: Tác dụng làm quay của lực',
        n: 'Chương III - Bài 17: Lực đẩy Archimedes (2 tiết) & Chương IV - Bài 18: Tác dụng làm quay của lực. Moment lực (2 tiết)',
        y: '- Viết công thức tính lực đẩy Archimedes FA = d.V; giải thích điều kiện chìm, lơ lửng, nổi của vật trong chất lỏng.\n- Mô tả tác dụng làm quay của lực quanh một trục; nêu định nghĩa moment lực và quy tắc đòn bẩy.',
        eq: 'Lực kế, bình tràn, cốc đong, quả nặng, đòn bẩy thí nghiệm có trục quay',
        nlsCode: '3.2.TC2a',
        aiCode: '8.B2.1'
      },
      {
        w: 11,
        t: 'Chương IV & Chương V: Điện',
        n: 'Chương IV - Bài 19: Đòn bẩy và ứng dụng (2 tiết) & Chương V - Bài 20: Hiện tượng nhiễm điện do cọ xát (2 tiết)',
        y: '- Phân loại và giải thích ứng dụng của các loại đòn bẩy (kéo cắt giấy, bập bênh, kìm, xe cút kít, mở nắp chai).\n- Giải thích hiện tượng nhiễm điện do cọ xát; hai loại điện tích (dương và âm) và sự tương tác giữa các điện tích.',
        eq: 'Kéo, kìm, mở nút chai, thanh thủy tinh, thanh nhựa, mảnh dạ, lụa, quả cầu kim loại',
        nlsCode: '1.2.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 12,
        t: 'Chương V: Điện',
        n: 'Chương V - Bài 21: Dòng điện, nguồn điện (1 tiết) & Bài 22: Mạch điện đơn giản (1 tiết) & Bài 23: Tác dụng của dòng điện (2 tiết)',
        y: '- Nêu khái niệm dòng điện là dòng các điện tích dịch chuyển có hướng; vẽ sơ đồ mạch điện bằng các kí hiệu chuẩn.\n- Trình bày 5 tác dụng chính của dòng điện: tác dụng nhiệt, quang, từ, hóa học và sinh lí.',
        eq: 'Pin, bóng đèn, công tắc, dây nối, chuông điện, bình điện phân dung dịch CuSO4',
        nlsCode: '2.1.TC2b',
        aiCode: '8.C5.1'
      },
      {
        w: 13,
        t: 'Chương V & Chương VI: Nhiệt',
        n: 'Chương V - Bài 24: Cường độ dòng điện và hiệu điện thế (2 tiết) & Bài 25: Thực hành đo I và U (1 tiết) & Chương VI - Bài 26: Năng lượng nhiệt và nội năng (1 tiết)',
        y: '- Sử dụng ampe kế đo cường độ dòng điện (I) và vôn kế đo hiệu điện thế (U) trong đoạn mạch mắc nối tiếp/song song.\n- Nêu khái niệm năng lượng nhiệt, nội năng và các cách làm biến đổi nội năng (thực hiện công và truyền nhiệt).',
        eq: 'Ampe kế, vôn kế, nguồn điện, bóng đèn pin, biến trở, cốc nước nóng, nhiệt kế',
        nlsCode: '3.1.TC2a',
        aiCode: '8.D1.1'
      },
      {
        w: 14,
        t: 'Chương VI: Nhiệt',
        n: 'Chương VI - Bài 27: Thực hành đo năng lượng nhiệt bằng joulemeter (1 tiết) & Bài 28: Sự truyền nhiệt (2 tiết) & Bài 29: Sự nở vì nhiệt (1 tiết)',
        y: '- Thực hành đo năng lượng nhiệt bằng joulemeter; phân biệt 3 hình thức truyền nhiệt: dẫn nhiệt, đối lưu và bức xạ nhiệt.\n- Giải thích hiện tượng nở vì nhiệt của chất rắn, lỏng, khí và các ứng dụng trong đời sống, kỹ thuật.',
        eq: 'Nhiệt lượng kế, joulemeter, que đồng, nhôm, thủy tinh, đèn cồn, bình cầu đo độ nở',
        nlsCode: '1.3.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 15,
        t: 'Chương VII: Sinh học cơ thể người',
        n: 'Chương VII - Bài 30: Khái quát về cơ thể người (1 tiết) & Bài 31: Hệ vận động ở người (2 tiết) & Bài 32: Dinh dưỡng và tiêu hoá ở người (1 tiết)',
        y: '- Nêu các hệ cơ quan chính trong cơ thể người; cấu tạo và chức năng của hệ xương, hệ cơ; các tật cong vẹo cột sống và phòng tránh.\n- Trình bày cấu tạo hệ tiêu hóa, quá trình biến đổi cơ học và hóa học của thức ăn; các bệnh đường tiêu hóa thường gặp.',
        eq: 'Mô hình bộ xương người, mô hình giải phẫu cơ bắp và hệ tiêu hóa ở người',
        nlsCode: '2.4.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 8 (4 tiết)',
        y: '- Đánh giá toàn diện kiến thức KHTN 8 HK1 (Chương I đến Chương VII) theo chuẩn CT GDPT 2018.\n- Đánh giá năng lực giải quyết vấn đề, kĩ năng thực hành thí nghiệm và tư duy phân tích khoa học.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2b',
        aiCode: '8.A3.3'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức KHTN 8 HK1 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1 chi tiết; phân tích ma trận điểm và khắc phục sai sót.\n- Củng cố hệ thống các chuyên đề Hóa vô cơ, Cơ học áp suất, Điện học, Nhiệt học và Hệ vận động.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm thực hành KHTN 8 (4 tiết)',
        y: '- Sơ kết thi đua môn KHTN HK1; báo cáo các sản phẩm STEM (Mô hình đòn bẩy, Mạch điện thông minh, Thiết bị đo nhiệt độ).\n- Rèn luyện kỹ năng làm việc nhóm, thuyết trình khoa học và định hướng học tập HK2.',
        eq: 'Sản phẩm mô hình của học sinh, video thí nghiệm, máy chiếu',
        nlsCode: '2.4.TC2b',
        aiCode: '8.D2.1'
      },

      // HỌC KỲ 2 (Tuần 19 - 35: 68 tiết)
      {
        w: 19,
        t: 'Chương VII: Sinh học cơ thể người',
        n: 'Chương VII - Bài 32: Dinh dưỡng và tiêu hoá (tiếp) (2 tiết) & Bài 33: Máu và hệ tuần hoàn của cơ thể người (2 tiết)',
        y: '- Lập khẩu phần ăn hợp lí; trình bày thành phần của máu (hồng cầu, bạch cầu, tiểu cầu, huyết tương); cơ chế đông máu và miễn dịch.\n- Mô tả cấu tạo tim và hệ mạch; giải thích sự tuần hoàn máu qua vòng tuần hoàn lớn và nhỏ; đo nhịp tim và huyết áp.',
        eq: 'Huyết áp kế điện tử, ống nghe y tế, tranh sơ đồ vòng tuần hoàn máu ở người',
        nlsCode: '1.1.TC2a',
        aiCode: '8.A1.1'
      },
      {
        w: 20,
        t: 'Chương VII: Sinh học cơ thể người',
        n: 'Chương VII - Bài 34: Hệ hô hấp ở người (2 tiết) & Bài 35: Hệ bài tiết ở người (2 tiết)',
        y: '- Trình bày cấu tạo hệ hô hấp (đường dẫn khí, phổi); cơ chế cử động hô hấp và trao đổi khí ở phế nang; tác hại của thuốc lá.\n- Trình bày cấu tạo hệ bài tiết nước tiểu (thận, cầu thận, ống thận); cơ chế tạo thành nước tiểu; phòng tránh bệnh sỏi thận.',
        eq: 'Mô hình phổi và lồng ngực người, mô hình cấu tạo thận và đơn vị thận (nephron)',
        nlsCode: '3.1.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 21,
        t: 'Chương VII: Sinh học cơ thể người',
        n: 'Chương VII - Bài 36: Điều hoà môi trường trong của cơ thể người (1 tiết) & Bài 37: Hệ thần kinh và các giác quan ở người (3 tiết)',
        y: '- Nêu khái niệm môi trường trong và vai trò của gan, thận trong việc cân bằng nội môi (đường huyết, áp suất thẩm thấu).\n- Mô tả cấu tạo nơ-ron, não bộ, tủy sống; phân biệt hệ thần kinh vận động và sinh dưỡng; cấu tạo mắt, tai và các tật khúc xạ.',
        eq: 'Mô hình não bộ người, mô hình nhãn cầu mắt và cấu tạo tai trong',
        nlsCode: '1.2.TC2a',
        aiCode: '8.B1.1'
      },
      {
        w: 22,
        t: 'Chương VII: Sinh học cơ thể người',
        n: 'Chương VII - Bài 38: Hệ nội tiết ở người (2 tiết) & Bài 39: Da và điều hoà thân nhiệt ở người (2 tiết)',
        y: '- Trình bày vai trò của các tuyến nội tiết chính: tuyến yên, tuyến giáp, tuyến tụy, tuyến trên thận, tuyến sinh dục.\n- Mô tả cấu tạo của da và các chức năng bảo vệ, cảm giác, bài tiết, điều hòa thân nhiệt; các biện pháp chăm sóc da và chống sốc nhiệt.',
        eq: 'Tranh vị trí các tuyến nội tiết ở người, mô hình cấu tạo da 3 lớp',
        nlsCode: '2.1.TC2a',
        aiCode: '8.C5.1'
      },
      {
        w: 23,
        t: 'Chương VII & Chương VIII: Sinh vật và môi trường',
        n: 'Chương VII - Bài 40: Sinh sản ở người (2 tiết) & Chương VIII - Bài 41: Môi trường và các nhân tố sinh thái (2 tiết)',
        y: '- Trình bày cấu tạo cơ quan sinh dục nam/nữ, sự thụ tinh, thụ thai và phát triển của thai nhi; các biện pháp tránh thai an toàn.\n- Nêu khái niệm môi trường sống, các nhân tố sinh thái vô sinh và hữu sinh; giới hạn sinh thái của sinh vật.',
        eq: 'Tranh giải phẫu hệ sinh dục người, tranh giới hạn sinh thái cá rô phi',
        nlsCode: '3.1.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 24,
        t: 'Chương VIII: Sinh vật và môi trường',
        n: 'Chương VIII - Bài 42: Quần thể sinh vật (2 tiết) & Bài 43: Quần xã sinh vật (2 tiết)',
        y: '- Nêu khái niệm quần thể sinh vật và các đặc trưng cơ bản (tỉ lệ giới tính, thành phần nhóm tuổi, mật độ cá thể).\n- Nêu khái niệm quần xã sinh vật và các đặc trưng (độ đa dạng, loài ưu thế, loài đặc trưng); các mối quan hệ hỗ trợ và đối kháng giữa các loài.',
        eq: 'Hình ảnh các quần thể chim cánh cụt, rừng tràm, sơ đồ lưới thức ăn rừng nhiệt đới',
        nlsCode: '1.1.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 25,
        t: 'Chương VIII: Sinh vật và môi trường',
        n: 'Chương VIII - Bài 44: Hệ sinh thái (2 tiết) & Bài 45: Sinh quyển (2 tiết)',
        y: '- Nêu cấu trúc của hệ sinh thái (thành phần vô sinh, sinh vật sản xuất, tiêu thụ, phân giải); chuỗi và lưới thức ăn, tháp sinh thái.\n- Nêu khái niệm sinh quyển, các khu sinh học lớn trên Trái Đất (đồng rêu, rừng taiga, rừng nhiệt đới, sa mạc, thảo nguyên).',
        eq: 'Bản đồ các khu sinh học trên Trái Đất, tranh sơ đồ chuỗi thức ăn đồng cỏ',
        nlsCode: '2.4.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 8 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức Sinh học cơ thể người và Sinh thái học (Chương VII, VIII) theo chuẩn ma trận đề Bộ GD&ĐT.\n- Rèn luyện kỹ năng phân tích sơ đồ sinh học và tư duy giải quyết vấn đề sức khỏe, môi trường.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2a',
        aiCode: '8.A3.3'
      },
      {
        w: 27,
        t: 'Chương VIII: Sinh vật và môi trường',
        n: 'Chương VIII - Bài 46: Cân bằng tự nhiên (2 tiết) & Bài 47: Bảo vệ môi trường (2 tiết)',
        y: '- Giải thích được trạng thái cân bằng tự nhiên trong hệ sinh thái; nguyên nhân và hậu quả của việc mất cân bằng tự nhiên.\n- Đề xuất và thực hiện các biện pháp cụ thể bảo vệ môi trường, hạn chế rác thải nhựa và bảo tồn đa dạng sinh học.',
        eq: 'Video/Hình ảnh tác động của ô nhiễm môi trường, biến đổi khí hậu',
        nlsCode: '1.3.TC2a',
        aiCode: '8.B1.1'
      },
      {
        w: 28,
        t: 'Luyện tập tổng hợp & STEM',
        n: 'Luyện tập tích hợp Hóa học - Vật lí - Sinh học KHTN 8 (4 tiết)',
        y: '- Hệ thống hóa các kiến thức liên môn: phản ứng sinh hóa trong cơ thể người, đòn bẩy trong hệ vận động, áp suất máu và hô hấp.\n- Giải các đề bài trắc nghiệm và câu hỏi thực tiễn chuẩn bị cho kỳ kiểm tra cuối năm.',
        eq: 'Bộ phiếu bài tập liên môn KHTN 8, phần mềm trắc nghiệm trực tuyến',
        nlsCode: '3.1.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 29,
        t: 'Dự án STEM KHTN 8',
        n: 'Dự án STEM KHTN 8: "Thiết kế Cánh tay robot thủy lực / Đòn bẩy & Mô hình Hệ sinh thái khép kín (Terrarium)" (4 tiết)',
        y: '- Vận dụng nguyên lý áp suất chất lỏng và đòn bẩy để chế tạo cánh tay robot bằng ống tiêm xilanh.\n- Vận dụng kiến thức hệ sinh thái và chu trình vật chất để thiết kế bình sinh thái Terrarium tự cân bằng.',
        eq: 'Xilanh y tế, dây truyền dịch, bìa formex/carton, bình thủy tinh, sỏi, rêu, cây mini',
        nlsCode: '3.2.TC2b',
        aiCode: '8.D2.1'
      },
      {
        w: 30,
        t: 'Ôn tập học kì II',
        n: 'Ôn tập toàn diện chuẩn bị kiểm tra đánh giá cuối Học kì II môn KHTN 8 (4 tiết)',
        y: '- Tổng kết toàn bộ kiến thức 8 chương KHTN Lớp 8; củng cố các kĩ năng giải bài tập Hóa vô cơ, Vật lí nhiệt/điện/áp suất và Sinh học người.\n- Hướng dẫn chiến lược làm bài thi phân hóa cao.',
        eq: 'Sơ đồ tư duy toàn bộ chương trình KHTN 8, đề cương ôn thi chi tiết',
        nlsCode: '1.2.TC2b',
        aiCode: '8.A1.2'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn KHTN 8 (4 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn KHTN Lớp 8 cả năm học.\n- Đánh giá năng lực tự học, năng lực ứng dụng khoa học vào bảo vệ sức khỏe và môi trường.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2b',
        aiCode: '8.A3.3'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức KHTN 8 HK2 (4 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2 chi tiết; phân tích lỗi sai và tổng kết kết quả học tập của từng học sinh.\n- Củng cố hệ thống kiến thức chuẩn bị cho năm học lớp 9 bản lề.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm sửa sai',
        nlsCode: '5.2.TC2b',
        aiCode: '8.A1.2'
      },
      {
        w: 33,
        t: 'Dự án Khoa học KHTN 8',
        n: 'Báo cáo sản phẩm Dự án STEM & Triển lãm Khoa học Đời sống và Sức khỏe Lớp 8 (4 tiết)',
        y: '- Báo cáo sản phẩm cánh tay robot thủy lực và bình Terrarium; thuyết trình về dự án lối sống xanh học đường.\n- Rèn luyện kỹ năng giao tiếp, phản biện khoa học và làm việc nhóm.',
        eq: 'Mô hình robot thủy lực, bình Terrarium của học sinh, máy chiếu',
        nlsCode: '2.4.TC2b',
        aiCode: '8.D2.1'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Tổng kết nội dung thực hành thí nghiệm và định hướng môn học KHTN 9 (4 tiết)',
        y: '- Tổng kết toàn bộ hệ thống thí nghiệm định lượng KHTN 8; giới thiệu tổng quan các chủ đề lớn của KHTN Lớp 9.\n- Chuẩn bị nền tảng Hóa hữu cơ, Quang học và Di truyền học cho năm lớp 9.',
        eq: 'Bảng theo dõi kĩ năng thực hành, sơ đồ liên thông kiến thức KHTN 8-9',
        nlsCode: '1.3.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn KHTN 8 cả năm (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và xếp loại môn KHTN Lớp 8 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Khen thưởng học sinh tiến bộ và giao nhiệm vụ chuẩn bị kiến thức KHTN Lớp 9 trong kỳ nghỉ hè.',
        eq: 'Sổ theo dõi đánh giá học sinh, danh mục tài liệu ôn tập hè KHTN 9',
        nlsCode: '5.4.TC2a',
        aiCode: '8.A3.3'
      }
    ];

    grade8Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 4,
        yccd: item.y,
        equipment: item.eq,
        location: 'Phòng học / Phòng thực hành KHTN',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 29 || item.w === 33 ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: KHOA HỌC TỰ NHIÊN (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (14 CHƯƠNG, 51 BÀI)
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18: 72 tiết)
    {
      w: 1,
      t: 'Mở đầu & Chương I: Năng lượng cơ học',
      n: 'Mở đầu - Bài 1: Nhận biết một số dụng cụ, hoá chất. Thuyết trình một vấn đề khoa học (1 tiết) & Chương I - Bài 2: Động năng. Thế năng (3 tiết)',
      y: '- Nhận biết dụng cụ, hoá chất thí nghiệm nâng cao và nắm kĩ năng xây dựng bài thuyết trình báo cáo khoa học (1 tiết).\n- Viết công thức tính động năng Wđ = 1/2.m.v² và thế năng trọng trường Wt = P.h; phân tích các yếu tố ảnh hưởng.',
      eq: 'Dụng cụ thí nghiệm cơ năng: máng nghiêng, bi lăn, vật cản, thước đo, máy chiếu',
      nlsCode: '1.1.TC2a',
      aiCode: '9.A1.1'
    },
    {
      w: 2,
      t: 'Chương I: Năng lượng cơ học',
      n: 'Chương I - Bài 3: Cơ năng (2 tiết) & Bài 4: Công và công suất (2 tiết)',
      y: '- Nêu định nghĩa cơ năng W = Wđ + Wt; định luật bảo toàn cơ năng của vật trong trọng trường; giải bài toán rơi tự do.\n- Viết công thức tính công A = F.s và công suất P = A/t; tính công và công suất của động cơ, máy móc trong thực tế.',
      eq: 'Bộ thí nghiệm con lắc đơn, lực kế, đồng hồ bấm giây, mô hình ròng rọc nâng vật',
      nlsCode: '1.2.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 3,
      t: 'Chương II: Ánh sáng',
      n: 'Chương II: Ánh sáng - Bài 5: Khúc xạ ánh sáng (2 tiết) & Bài 6: Phản xạ toàn phần (2 tiết)',
      y: '- Nắm vững hiện tượng khúc xạ ánh sáng; định luật khúc xạ n1.sin(i) = n2.sin(r); vẽ đường truyền tia sáng qua mặt phân cách.\n- Giải thích hiện tượng phản xạ toàn phần; điều kiện xảy ra phản xạ toàn phần; ứng dụng trong sợi quang học viễn thông.',
      eq: 'Bình bán trụ chứa nước, nguồn laser chiếu tia sáng, bảng chia độ tròn',
      nlsCode: '3.1.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 4,
      t: 'Chương II: Ánh sáng',
      n: 'Chương II - Bài 7: Lăng kính (1 tiết) & Bài 8: Thấu kính (3 tiết)',
      y: '- Mô tả đường truyền tia sáng qua lăng kính, hiện tượng tán sắc ánh sáng mặt trời tạo cầu vồng.\n- Phân biệt thấu kính hội tụ và phân kì; xác định quang tâm, tiêu điểm, tiêu cự; vẽ đường truyền của 3 tia sáng đặc biệt.',
      eq: 'Lăng kính thủy tinh, thấu kính hội tụ, thấu kính phân kì, giá quang học, nguồn sáng',
      nlsCode: '1.2.TC2b',
      aiCode: '9.A2.2'
    },
    {
      w: 5,
      t: 'Chương II & Chương III: Điện',
      n: 'Chương II - Bài 9: Thực hành đo tiêu cự của thấu kính hội tụ (1 tiết) & Bài 10: Kính lúp. Bài tập thấu kính (1 tiết) & Chương III - Bài 11: Điện trở. Định luật Ohm (2 tiết)',
      y: '- Thực hành đo tiêu cự thấu kính hội tụ bằng phương pháp Silbermann; vẽ ảnh và tính khoảng cách d, d\', f.\n- Phát biểu định luật Ohm I = U/R; vẽ đồ thị biểu diễn mối quan hệ giữa I và U; tính điện trở của dây dẫn.',
      eq: 'Giá quang học, màn hứng ảnh, thấu kính hội tụ, nguồn điện, biến trở, ampe kế, vôn kế',
      nlsCode: '2.1.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 6,
      t: 'Chương III: Điện & Chương IV: Điện từ',
      n: 'Chương III - Bài 12: Đoạn mạch nối tiếp, song song (2 tiết) & Bài 13: Năng lượng của dòng điện và công suất điện (1 tiết) & Chương IV - Bài 14: Cảm ứng điện từ (1 tiết)',
      y: '- Tính điện trở tương đương, cường độ dòng điện và hiệu điện thế của đoạn mạch nối tiếp và song song.\n- Tính công suất điện P = U.I và điện năng tiêu thụ A = P.t; hiểu hiện tượng cảm ứng điện từ và nguyên tắc tạo dòng điện xoay chiều.',
      eq: 'Bảng mạch điện, điện trở mẫu, bóng đèn, nguồn điện, cuộn dây dẫn kín, nam châm',
      nlsCode: '3.1.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 7,
      t: 'Chương IV & Chương V: Năng lượng với cuộc sống',
      n: 'Chương IV - Bài 15: Tác dụng của dòng điện xoay chiều (2 tiết) & Chương V - Bài 16: Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch (2 tiết)',
      y: '- Phân tích các tác dụng nhiệt, quang, từ của dòng điện xoay chiều; nguyên lý máy biến áp và truyền tải điện năng đi xa.\n- Mô tả vòng năng lượng trên Trái Đất; thực trạng khai thác và hiểm họa cạn kiệt của nhiên liệu hoá thạch.',
      eq: 'Máy biến áp mô hình, vôn kế xoay chiều, tranh sơ đồ truyền tải điện năng quốc gia',
      nlsCode: '1.1.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 8,
      t: 'Chương V & Chương VI: Kim loại',
      n: 'Chương V - Bài 17: Một số dạng năng lượng tái tạo (2 tiết) & Chương VI - Bài 18: Tính chất chung của kim loại (2 tiết)',
      y: '- Đánh giá ưu điểm và thách thức của các nguồn năng lượng tái tạo (mặt trời, gió, thủy triều, địa nhiệt, hydrogen xanh).\n- Trình bày tính chất vật lí chung (tính dẻo, dẫn điện, dẫn nhiệt, ánh kim) và tính chất hoá học chung của kim loại.',
      eq: 'Mô hình pin mặt trời, dây đồng, nhôm, đinh sắt, dung dịch HCl, CuSO4, AgNO3',
      nlsCode: '2.4.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn KHTN 9 (4 tiết)',
      y: '- Đánh giá năng lực giải quyết các bài toán Năng lượng cơ học, Quang hình học, Định luật Ohm và Kim loại theo ma trận đề chuẩn Bộ GD&ĐT.\n- Rèn luyện kĩ năng tính toán, vẽ hình quang học và tư duy khoa học.',
      eq: 'Đề kiểm tra giữa kỳ 1 chuẩn ma trận, bảng đặc tả và đáp án',
      nlsCode: '4.1.TC2a',
      aiCode: '9.B2.3'
    },
    {
      w: 10,
      t: 'Chương VI: Kim loại. Sự khác nhau cơ bản giữa phi kim và kim loại',
      n: 'Chương VI - Bài 19: Dãy hoạt động hoá học (2 tiết) & Bài 20: Tách kim loại và việc sử dụng hợp kim (1 tiết) & Bài 21: Sự khác nhau cơ bản giữa phi kim và kim loại (1 tiết)',
      y: '- Nắm vững dãy hoạt động hoá học của kim loại và ý nghĩa; viết PTHH minh họa phản ứng kim loại tác dụng với nước, acid, dung dịch muối.\n- Trình bày phương pháp luyện gang thép, sản xuất nhôm; so sánh tính chất giữa kim loại và phi kim (C, S, Cl2).',
      eq: 'Dãy kim loại K, Na, Mg, Al, Zn, Fe, Cu, Ag; dung dịch muối và acid thí nghiệm',
      nlsCode: '3.2.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 11,
      t: 'Chương VII: Giới thiệu về chất hữu cơ. Hydrocarbon và nguồn nhiên liệu',
      n: 'Chương VII - Bài 22: Giới thiệu về hợp chất hữu cơ (2 tiết) & Bài 23: Alkane (Methane) (2 tiết)',
      y: '- Nêu khái niệm hợp chất hữu cơ, hoá học hữu cơ; đặc điểm cấu tạo phân tử hợp chất hữu cơ (hoá trị C, mạch C).\n- Viết CTPT, CTCT, tính chất vật lí, hoá học của methane (CH4) - đại diện cho alkane; phản ứng cháy và phản ứng thế với clo.',
      eq: 'Mô hình phân tử hợp chất hữu cơ rỗng và đặc, khí methane thu sẵn, nước vôi trong',
      nlsCode: '1.2.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 12,
      t: 'Chương VII & Chương VIII: Ethylic alcohol và acetic acid',
      n: 'Chương VII - Bài 24: Alkene (Ethylene) (1 tiết) & Bài 25: Nguồn nhiên liệu (1 tiết) & Chương VIII - Bài 26: Ethylic alcohol (2 tiết)',
      y: '- Viết CTCT của ethylene (C2H4) có liên kết đôi C=C; phản ứng cộng dung dịch bromine và phản ứng trùng hợp tạo PE.\n- Trình bày CTPT, CTCT của ethylic alcohol (C2H5OH); tính chất hoá học (phản ứng với Na, phản ứng cháy); độ rượu.',
      eq: 'Dung dịch bromine, bình sinh khí ethylene, cồn 96 độ, kim loại Na, đèn cồn',
      nlsCode: '2.1.TC2b',
      aiCode: '9.C4.1'
    },
    {
      w: 13,
      t: 'Chương VIII & Chương IX: Lipid. Carbohydrate. Protein. Polymer',
      n: 'Chương VIII - Bài 27: Acetic acid (2 tiết) & Chương IX - Bài 28: Lipid (Chất béo) (1 tiết) & Bài 29: Carbohydrate. Glucose và saccharose (1 tiết)',
      y: '- Viết CTCT của acetic acid (CH3COOH) có nhóm -COOH; tính acid và phản ứng ester hóa với alcohol; công thức chất béo.\n- Phân biệt glucose và saccharose; tính chất hoá học (phản ứng tráng bạc của glucose, phản ứng thủy phân của saccharose).',
      eq: 'Dung dịch CH3COOH, dung dịch AgNO3/NH3, đường glucose, saccharose, dầu ăn',
      nlsCode: '3.1.TC2a',
      aiCode: '9.D1.1'
    },
    {
      w: 14,
      t: 'Chương IX: Lipid. Carbohydrate. Protein. Polymer',
      n: 'Chương IX - Bài 30: Tinh bột và cellulose (1 tiết) & Bài 31: Protein (1 tiết) & Bài 32: Polymer (2 tiết)',
      y: '- Nêu tính chất của tinh bột, cellulose (phản ứng màu với iodine, phản ứng thủy phân); cấu tạo và sự đông tụ của protein.\n- Nêu định nghĩa polymer, monomer; phân loại polymer thiên nhiên và nhân tạo (PE, PVC, tơ tằm, cao su); tác hại của rác thải nhựa.',
      eq: 'Hồ tinh bột, dung dịch iodine, lòng trắng trứng, mẫu nhựa PE, PVC, tơ nilon',
      nlsCode: '1.3.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 15,
      t: 'Chương X: Khai thác tài nguyên từ vỏ Trái Đất',
      n: 'Chương X - Bài 33: Sơ lược về hoá học vỏ Trái Đất (1 tiết) & Bài 34: Khai thác đá vôi. Công nghiệp silicate (1 tiết) & Bài 35: Khai thác nhiên liệu hoá thạch. Chu trình carbon (2 tiết)',
      y: '- Trình bày thành phần hóa học của vỏ Trái Đất; quy trình sản xuất vôi, xi măng, thủy tinh, gốm sứ.\n- Mô tả chu trình carbon trong tự nhiên; giải thích hiệu ứng nhà kính và biến đổi khí hậu; giải pháp giảm phát thải ròng Net Zero.',
      eq: 'Mẫu đá vôi, đất sét, xi măng, cát trắng, infographic chu trình carbon toàn cầu',
      nlsCode: '3.1.TC2b',
      aiCode: '9.C2.1'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn KHTN 9 (4 tiết)',
      y: '- Đánh giá tổng hợp toàn diện kiến thức Vật lí, Hóa học vô cơ & hữu cơ KHTN 9 HK1 (Chương I đến Chương X) theo chuẩn CT GDPT 2018.\n- Đánh giá năng lực làm bài thi tuyển sinh vào Lớp 10 THPT.',
      eq: 'Đề kiểm tra cuối kỳ 1 chuẩn ma trận tuyển sinh Lớp 10',
      nlsCode: '4.1.TC2b',
      aiCode: '9.B2.3'
    },
    {
      w: 17,
      t: 'Ôn tập & Đánh giá định kỳ',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức KHTN 9 HK1 (4 tiết)',
      y: '- Chữa bài kiểm tra cuối HK1 chi tiết; phân tích cấu trúc đề thi tuyển sinh Lớp 10 và các bẫy câu hỏi thường gặp.\n- Củng cố toàn diện các chủ đề Năng lượng cơ học, Quang học, Điện từ và Hóa học hữu cơ.',
      eq: 'Bài làm học sinh, đáp án và bảng thống kê kết quả',
      nlsCode: '5.2.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 18,
      t: 'Sơ kết & Báo cáo chuyên đề',
      n: 'Sơ kết Học kỳ 1 & Báo cáo chuyên đề Khoa học và Công nghệ Lớp 9 (4 tiết)',
      y: '- Sơ kết thi đua môn KHTN 9 HK1; báo cáo các chuyên đề khoa học ứng dụng (Chuyển dịch năng lượng xanh, Ứng dụng polymer thân thiện môi trường).\n- Rèn luyện kĩ năng thuyết trình báo cáo khoa học và tinh thần làm việc nhóm.',
      eq: 'Slide báo cáo chuyên đề của học sinh, máy chiếu',
      nlsCode: '2.4.TC2b',
      aiCode: '9.D1.1'
    },

    // HỌC KỲ 2 (Tuần 19 - 35: 68 tiết)
    {
      w: 19,
      t: 'Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền',
      n: 'Chương XI - Bài 36: Khái quát về di truyền học (1 tiết) & Bài 37: Các quy luật di truyền của Mendel (3 tiết)',
      y: '- Nêu khái niệm di truyền, biến dị, kiểu gen, kiểu hình, tính trạng trội/lặn; phương pháp lai phân tích của Mendel.\n- Phát biểu quy luật phân li và quy luật phân li độc lập; viết sơ đồ lai từ P đến F1, F2; giải các bài tập di truyền đơn giản.',
      eq: 'Tranh ảnh thí nghiệm lai đậu Hà Lan của Mendel, hạt đậu vàng/xanh trơn/nhăn',
      nlsCode: '1.1.TC2a',
      aiCode: '9.A1.1'
    },
    {
      w: 20,
      t: 'Chương XI: Di truyền học Mendel. Cơ sở phân tử của hiện tượng di truyền',
      n: 'Chương XI - Bài 38: Nucleic acid và gene (2 tiết) & Bài 39: Tái bản DNA và phiên mã tạo RNA (2 tiết)',
      y: '- Mô tả cấu trúc xoắn kép của phân tử DNA theo Watson - Crick (nguyên tắc đa phân và nguyên tắc bổ sung A-T, G-C); khái niệm gene.\n- Trình bày cơ chế nhân đôi DNA (nguyên tắc bán bảo tồn) và cơ chế phiên mã tổng hợp phân tử mRNA.',
      eq: 'Mô hình cấu trúc không gian phân tử DNA, video mô phỏng 3D quá trình tái bản DNA',
      nlsCode: '3.1.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 21,
      t: 'Chương XI & Chương XII: Di truyền nhiễm sắc thể',
      n: 'Chương XI - Bài 40: Dịch mã và mối quan hệ từ gene đến tính trạng (2 tiết) & Bài 41: Đột biến gene (1 tiết) & Chương XII - Bài 42: Nhiễm sắc thể và bộ nhiễm sắc thể (1 tiết)',
      y: '- Giải thích cơ chế dịch mã tổng hợp chuỗi polypeptide và sơ đồ dòng thông tin: Gene (DNA) → mRNA → Protein → Tính trạng.\n- Nêu khái niệm và nguyên nhân đột biến gene; mô tả cấu trúc hiển vi của NST và bộ NST lưỡng bội (2n), đơn bội (n).',
      eq: 'Bảng mã di truyền 64 bộ ba, tranh đột biến gene, mô hình hiển vi nhiễm sắc thể',
      nlsCode: '1.2.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 22,
      t: 'Chương XII: Di truyền nhiễm sắc thể',
      n: 'Chương XII - Bài 43: Nguyên phân và giảm phân (2 tiết) & Bài 44: Nhiễm sắc thể giới tính và cơ chế xác định giới tính (2 tiết)',
      y: '- Mô tả diễn biến các kì của quá trình nguyên phân và giảm phân; ý nghĩa sinh học của nguyên phân, giảm phân và thụ tinh.\n- Phân biệt NST thường và NST giới tính (XX, XY); giải thích cơ chế xác định giới tính ở người (tỉ lệ nam : nữ xấp xỉ 1 : 1).',
      eq: 'Kính hiển vi quang học, tiêu bản rễ hành nguyên phân, tinh hoàn châu chấu giảm phân',
      nlsCode: '2.1.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 23,
      t: 'Chương XII & Chương XIII: Di truyền học với con người và đời sống',
      n: 'Chương XII - Bài 45: Di truyền liên kết (1 tiết) & Bài 46: Đột biến nhiễm sắc thể (1 tiết) & Chương XIII - Bài 47: Di truyền học với con người (2 tiết)',
      y: '- Trình bày thí nghiệm di truyền liên kết của Morgan; phân biệt đột biến cấu trúc và đột biến số lượng NST (Down, Turner, Klinefelter).\n- Lập phả hệ nghiên cứu di truyền ở người; các biện pháp tư vấn di truyền y học và sàng lọc trước sinh.',
      eq: 'Hình ảnh bộ NST bệnh nhân Down (3 NST 21), sơ đồ phả hệ di truyền bệnh máu khó đông',
      nlsCode: '3.1.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 24,
      t: 'Chương XIII & Chương XIV: Tiến hoá',
      n: 'Chương XIII - Bài 48: Ứng dụng công nghệ di truyền vào đời sống (2 tiết) & Chương XIV - Bài 49: Khái niệm tiến hoá và các hình thức chọn lọc (2 tiết)',
      y: '- Trình bày thành tựu của công nghệ tế bào (nhân bản vô tính, nuôi cấy mô) và công nghệ gene (sinh vật biến đổi gen GMO, vaccine tái tổ hợp).\n- Nêu khái niệm tiến hoá, chọn lọc nhân tạo và chọn lọc tự nhiên theo học thuyết của Charles Darwin.',
      eq: 'Chân dung Charles Darwin, tranh quy trình tạo giống lúa vàng giàu vitamin A',
      nlsCode: '1.1.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 25,
      t: 'Chương XIV: Tiến hoá',
      n: 'Chương XIV - Bài 50: Cơ chế tiến hoá (2 tiết) & Bài 51: Sự phát sinh và phát triển sự sống trên Trái Đất (2 tiết)',
      y: '- Phân tích các nhân tố tiến hóa (đột biến, giao phối, chọn lọc tự nhiên, cách li) hình thành loài mới thích nghi.\n- Trình bày các giai đoạn tiến hóa của sự sống: tiến hóa hóa học, tiền sinh học và sinh học; các mốc phát triển sinh giới qua các đại địa chất.',
      eq: 'Bảng các đại địa chất và hóa thạch sinh vật tiêu biểu, cây phát sinh chủng loại',
      nlsCode: '2.4.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn KHTN 9 (4 tiết)',
      y: '- Đánh giá năng lực giải quyết các bài toán Di truyền học Mendel, Cơ sở phân tử DNA, NST và Tiến hoá theo ma trận chuẩn thi tuyển sinh Lớp 10.\n- Rèn luyện kỹ năng giải bài tập trắc nghiệm và tự luận phân hóa cao.',
      eq: 'Đề kiểm tra giữa kỳ 2 chuẩn ma trận tuyển sinh Lớp 10 THPT',
      nlsCode: '4.1.TC2a',
      aiCode: '9.B2.3'
    },
    {
      w: 27,
      t: 'Luyện tập tổng hợp KHTN 9',
      n: 'Hệ thống hóa kiến thức Di truyền học, Sinh học phân tử và Sinh học tiến hoá (4 tiết)',
      y: '- Hệ thống hóa toàn bộ các công thức tính toán số nucleotit, chiều dài, liên kết hydro của DNA; số liên kết peptide; quy luật phân li.\n- Rèn luyện kỹ năng đọc hiểu sơ đồ phả hệ và phân tích cơ chế di truyền tế bào.',
      eq: 'Bộ phiếu bài tập Di truyền học nâng cao, máy tính cầm tay',
      nlsCode: '1.3.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 28,
      t: 'Dự án STEM KHTN 9',
      n: 'Dự án STEM KHTN 9: "Thiết kế Mô hình Cấu trúc Phân tử DNA 3D & Ứng dụng Cảm biến Quang học" (4 tiết)',
      y: '- Vận dụng kiến thức sinh học phân tử thiết kế mô hình xoắn kép DNA chính xác về kích thước và số cặp bazơ nitơ.\n- Ứng dụng quang hình học và điện từ chế tạo thiết bị đo khoảng cách bằng cảm biến laser/siêu âm.',
      eq: 'Vật liệu tái chế, que gỗ, xốp màu, hạt cườm, vi mạch Arduino/Microbit đơn giản',
      nlsCode: '3.1.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 29,
      t: 'Báo cáo dự án STEM',
      n: 'Báo cáo sản phẩm Dự án STEM & Triển lãm Sáng tạo Khoa học Trẻ Khóa học THCS (4 tiết)',
      y: '- Báo cáo sản phẩm mô hình DNA và thiết bị cảm biến thông minh trước hội đồng lớp.\n- Đánh giá sản phẩm khoa học dựa trên tính chính xác, tính thẩm mỹ và khả năng ứng dụng thực tiễn.',
      eq: 'Sản phẩm mô hình của các nhóm học sinh, slide thuyết trình, máy chiếu',
      nlsCode: '3.2.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 30,
      t: 'Tổng ôn tập chuẩn bị thi vào 10',
      n: 'Tổng ôn tập toàn diện chuẩn bị kiểm tra cuối năm và ôn thi vào Lớp 10 THPT môn KHTN (4 tiết)',
      y: '- Hệ thống hóa toàn diện 14 chương KHTN Lớp 9: Năng lượng cơ học, Quang học, Điện từ, Hóa vô cơ/hữu cơ và Di truyền học.\n- Luyện giải các dạng đề thi phân hóa cao đạt điểm 9, điểm 10.',
      eq: 'Bộ đề tổng ôn thi vào Lớp 10 THPT chuẩn cấu trúc ma trận Sở GD&ĐT',
      nlsCode: '1.2.TC2b',
      aiCode: '9.A3.1'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn KHTN 9 (4 tiết)',
      y: '- Đánh giá tổng kết toàn diện kết quả học tập môn KHTN Lớp 9 cả năm học và mức độ sẵn sàng cho kì thi tuyển sinh vào Lớp 10 THPT.\n- Đánh giá năng lực tư duy khoa học, năng lực mô hình hóa và vận dụng thực tiễn theo chuẩn CT GDPT 2018.',
      eq: 'Đề kiểm tra cuối kỳ 2 chuẩn ma trận tuyển sinh Lớp 10 của Sở GD&ĐT',
      nlsCode: '4.1.TC2b',
      aiCode: '9.B2.3'
    },
    {
      w: 32,
      t: 'Ôn tập & Đánh giá định kỳ',
      n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức KHTN 9 HK2 (4 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2 chi tiết; phân tích ma trận điểm thi, các lỗi hay mất điểm và kĩ năng phân bổ thời gian làm bài.\n- Củng cố toàn diện các chuyên đề trọng tâm chuẩn bị thi vào Lớp 10.',
      eq: 'Bài làm học sinh, đáp án và bảng phân tích thang điểm chi tiết',
      nlsCode: '5.2.TC2b',
      aiCode: '9.A3.1'
    },
    {
      w: 33,
      t: 'Luyện đề tuyển sinh Lớp 10',
      n: 'Luyện giải các đề thi tuyển sinh vào Lớp 10 THPT môn KHTN chuẩn ma trận Bộ GD&ĐT (4 tiết)',
      y: '- Thực chiến giải đề thi thử tuyển sinh vào Lớp 10: rèn luyện phản xạ đọc đề nhanh, kĩ năng bấm máy tính Casio và trình bày tự luận mạch lạc.\n- Xây dựng tâm lý phòng thi vững vàng và sự tự tin cao độ.',
      eq: 'Tuyển tập các đề thi tuyển sinh vào Lớp 10 chính thức của các tỉnh/thành',
      nlsCode: '1.3.TC2b',
      aiCode: '9.C2.1'
    },
    {
      w: 34,
      t: 'Luyện đề tuyển sinh Lớp 10',
      n: 'Luyện giải các đề thi tuyển sinh vào Lớp 10 THPT môn KHTN (tiếp) & Rèn kĩ năng làm bài thi (4 tiết)',
      y: '- Chữa các câu hỏi phân loại học sinh giỏi trong đề thi tuyển sinh (bài tập di truyền liên kết, quang hình học nâng cao, hóa học hữu cơ tổng hợp).\n- Chuẩn bị hành trang tri thức vững chắc cho bậc THPT.',
      eq: 'Bộ đề thi thử tuyển sinh số 2 và số 3, bảng hướng dẫn mẹo làm bài thi',
      nlsCode: '2.4.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 35,
      t: 'Đánh giá xếp loại',
      n: 'Tổng kết năm học & Đánh giá xếp loại môn KHTN 9 cả năm (4 tiết)',
      y: '- Tổng kết, đánh giá quá trình học tập và xếp loại môn KHTN Lớp 9 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Hoàn tất hồ sơ học bạ, công nhận tốt nghiệp THCS và chúc các em học sinh thi đỗ vào trường THPT nguyện vọng 1.',
      eq: 'Sổ theo dõi đánh giá học sinh Lớp 9, hồ sơ xét tốt nghiệp THCS',
      nlsCode: '5.4.TC2a',
      aiCode: '9.A3.1'
    }
  ];

  grade9Weeks.forEach((item) => {
    list.push({
      week: item.w,
      topic: item.t,
      name: item.n,
      periods: 4,
      yccd: item.y,
      equipment: item.eq,
      location: 'Phòng học / Phòng thực hành KHTN',
      nlsCode: item.nlsCode,
      aiCode: item.aiCode,
      notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 28 || item.w === 29 ? 'Dự án STEM' : ''
    });
  });

  return list;
}
