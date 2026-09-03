import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * PHÂN PHỐI CHƯƠNG TRÌNH CHI TIẾT MÔN ÂM NHẠC THCS (LỚP 6, 7, 8, 9)
 * 100% CHUẨN THEO BỘ SÁCH GIÁO KHOA "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"
 * Quy mô: 35 tiết/năm (1 tiết/tuần x 35 tuần).
 * Định kỳ kiểm tra chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (1 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (1 tiết)
 * - Tuần 17: Chữa bài kiểm tra cuối HK1 & Ôn tập (1 tiết)
 * - Tuần 18: Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 (1 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (1 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (1 tiết)
 * - Tuần 32: Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường (1 tiết)
 * - Tuần 33: Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS (1 tiết)
 * - Tuần 34: Ôn tập tổng hợp toàn diện cả năm (1 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại cả năm (1 tiết)
 */
export function getMusicSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. ÂM NHẠC LỚP 6 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 6) {
    const grade6Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Tuổi học trò',
        n: 'Chủ đề 1: Tuổi học trò - Hát: Bài hát Con đường học trò & LTAN: Các thuộc tính cơ bản của âm thanh có tính nhạc (1 tiết)',
        y: '- Hát đúng cao độ, trường độ, sắc thái tươi vui bài Con đường học trò (Nhạc: Nguyễn Văn Hiên; Ý thơ: Từ Nguyễn Thạch).\n- Nhận biết và phân biệt được 4 thuộc tính cơ bản của âm thanh có tính nhạc: Cao độ, Trường độ, Cường độ, Âm sắc.',
        dc: '• [Mã NLS: 1.1.TC1b] Sử dụng công cụ tìm kiếm trực tuyến để nghe bản thu mẫu chuẩn bài hát Con đường học trò.\n• [Mã AI: 6.C2.2] Trải nghiệm ứng dụng AI phân tích và hiển thị trực quan dạng sóng âm thanh (waveform) của 4 thuộc tính âm nhạc.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Tuổi học trò',
        n: 'Chủ đề 1: Tuổi học trò - Nghe nhạc: Tháng năm học trò & TTAN: Giới thiệu đàn piano (1 tiết)',
        y: '- Cảm nhận được giai điệu trong sáng, tình cảm của bài hát Tháng năm học trò.\n- Nắm được nguồn gốc, cấu tạo cơ bản, âm vực và vai trò của đàn piano trong nền âm nhạc thế giới.',
        dc: '• [Mã NLS: 1.1.TC1b] Tra cứu thông tin và xem clip nghệ sĩ biểu diễn đàn piano trên nguồn dữ liệu số uy tín.\n• [Mã AI: 6.A1.1] Nhận biết sự khác biệt giữa âm thanh biểu diễn piano trực tiếp của nghệ sĩ và âm thanh nhạc cụ ảo do AI tạo ra.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Tuổi học trò',
        n: 'Chủ đề 1: Tuổi học trò - Đọc nhạc: Bài đọc nhạc số 1 & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Đọc đúng cao độ các nốt Đô - Rê - Mi - Son - La và trường độ nốt đen, nốt trắng trong Bài đọc nhạc số 1.\n- Biết gõ đệm theo phách, nhịp và thực hiện hoạt động Vận dụng - Sáng tạo theo nhóm.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng ứng dụng phím đàn ảo / máy đập nhịp số (Metronome online) để luyện đọc nhạc đúng phách.\n• [Mã AI: 6.C1.1] Làm quen với phần mềm nhận diện cao độ giọng hát thời gian thực bằng thuật toán phân tích tần số âm thanh.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Cuộc sống tươi đẹp',
        n: 'Chủ đề 2: Cuộc sống tươi đẹp - Hát: Đời sống không già vì có chúng em & LTAN: Kí hiệu âm bằng hệ thống chữ cái Latin (1 tiết)',
        y: '- Hát đúng giai điệu, lời ca hồn nhiên bài hát Đời sống không già vì có chúng em (Trịnh Công Sơn).\n- Nhận biết và chuyển đổi thành thạo 7 bậc âm cơ bản tương ứng với hệ thống chữ cái Latin (C, D, E, F, G, A, B).',
        dc: '• [Mã NLS: 1.3.TC1a] Lưu trữ và sắp xếp các tài liệu học tập nhạc lí hệ thống chữ cái Latin trên không gian lưu trữ số.\n• [Mã AI: 6.D1.1] Khám phá công cụ AI hỗ trợ ghi nhớ nốt nhạc và ký hiệu Latin thông qua trò chơi flashcard tương tác.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Cuộc sống tươi đẹp',
        n: 'Chủ đề 2: Cuộc sống tươi đẹp - Nghe nhạc: Tác phẩm The Blue Danube (Dòng sông Đa-nuýp xanh) (1 tiết)',
        y: '- Cảm nhận được vẻ đẹp êm đềm, nhịp điệu valse duyên dáng của kiệt tác The Blue Danube (Johann Strauss II).\n- Bộc lộ cảm xúc thẩm mỹ và vận động cơ thể nhịp nhàng theo giai điệu bản nhạc.',
        dc: '• [Mã NLS: 2.1.TC1b] Tương tác nghe nhạc chất lượng cao trên các nền tảng số hóa di sản âm nhạc cổ điển.\n• [Mã AI: 6.B1.1] Thảo luận về việc AI đề xuất danh sách phát nhạc cổ điển tự động dựa trên sở thích người nghe.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Cuộc sống tươi đẹp',
        n: 'Chủ đề 2: Cuộc sống tươi đẹp - Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Nắm vững tư thế cầm đàn/thổi sáo, kỹ thuật bấm ngón các nốt B, A, G trên Recorder hoặc nốt C, D, E trên kèn phím.\n- Thực hành hòa tấu giai điệu ngắn và thể hiện sự tự tin trong hoạt động Vận dụng - Sáng tạo.',
        dc: '• [Mã NLS: 3.2.TC1a] Quay video ngắn quá trình luyện tập nhạc cụ để tự đối chiếu, đánh giá và chỉnh sửa tư thế ngón bấm.\n• [Mã AI: 6.A1.3] Sử dụng ứng dụng so sánh nốt thổi thực tế với cao độ chuẩn thông qua AI phát hiện âm thanh.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Nhớ ơn thầy cô',
        n: 'Chủ đề 3: Nhớ ơn thầy cô - Hát: Bài hát Thầy cô là tất cả & LTAN: Tìm hiểu nhịp 4/4 (1 tiết)',
        y: '- Hát đúng giai điệu, tính chất tha thiết, trang trọng của bài hát Thầy cô là tất cả.\n- Nắm vững định nghĩa nhịp 4/4 (nhịp C), số lượng phách trong mỗi ô nhịp, giá trị trường độ và độ mạnh nhẹ của từng phách.',
        dc: '• [Mã NLS: 1.1.TC1d] Tìm kiếm và phân tích video bài giảng số về quy tắc đánh nhịp 4/4 tay chỉ huy.\n• [Mã AI: 6.C2.2] Thử nghiệm ứng dụng AI đếm phách và vẽ sơ đồ tay chỉ huy nhịp 4/4 tự động trên màn hình.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Nhớ ơn thầy cô',
        n: 'Chủ đề 3: Nhớ ơn thầy cô - Nghe nhạc: Nhớ ơn thầy cô & Đọc nhạc: Bài đọc nhạc số 2 (1 tiết)',
        y: '- Lắng nghe và cảm thụ tình cảm tri ân sâu sắc qua bài hát Nhớ ơn thầy cô (Phong Nhã).\n- Đọc đúng cao độ và trường độ Bài đọc nhạc số 2 viết ở nhịp 4/4, kết hợp gõ đệm theo phách.',
        dc: '• [Mã NLS: 2.2.TC1a] Chia sẻ bản ghi âm đọc nhạc số 2 lên nhóm học tập trực tuyến để cùng nhận xét chéo.\n• [Mã AI: 6.D1.1] Dùng công cụ AI nhận diện giọng đọc nốt nhạc để tự kiểm tra lỗi cao độ cá nhân.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp 6',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 1 đến Tuần 8.\n- Rèn luyện phong thái biểu diễn tự tin, tính trung thực và tinh thần cố gắng học tập.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng thiết bị ghi hình/thu âm số trong quá trình kiểm tra thực hành biểu diễn.\n• [Mã AI: 6.A1.3] Đối chiếu kết quả biểu diễn cá nhân với thang đo tiêu chí đánh giá số hóa.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Nhớ ơn thầy cô',
        n: 'Chủ đề 3: Nhớ ơn thầy cô - TTAN: Giới thiệu hình thức hát bè & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Hiểu được khái niệm hát bè (bè đuổi, bè hòa âm), tác dụng tạo nên sự phong phú, nhiều tầng âm sắc của hát bè.\n- Thực hành hát bè đuổi đơn giản theo nhóm và sáng tạo động tác phụ họa.',
        dc: '• [Mã NLS: 2.5.TC1b] Hợp tác nhóm trên nền tảng số để phân chia bè và chia sẻ tệp âm thanh luyện bè.\n• [Mã AI: 6.C1.1] Trải nghiệm công cụ tách bè âm thanh bằng AI để nghe riêng từng bè mẫu khi tự tập.'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Ước mơ hoà bình',
        n: 'Chủ đề 4: Ước mơ hoà bình - Hát: Bài hát Những ước mơ (1 tiết)',
        y: '- Hát đúng cao độ, trường độ bài hát Những ước mơ với tính chất rộn ràng, khát khao hòa bình.\n- Biết thể hiện sắc thái tình cảm và phối hợp nhịp nhàng với bạn khi hát tập thể.',
        dc: '• [Mã NLS: 1.1.TC1b] Truy cập kho học liệu số để nghe các phiên bản phối khí khác nhau của ca khúc.\n• [Mã AI: 6.C2.2] Ứng dụng trợ lí ảo AI tìm kiếm lời bài hát, hoàn cảnh sáng tác và các thông tin liên quan.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Ước mơ hoà bình',
        n: 'Chủ đề 4: Ước mơ hoà bình - Nghe nhạc: Trích đoạn chương IV Giao hưởng số 9 (Beethoven) & TTAN: Nhạc sĩ Văn Ký và tác phẩm Bài ca hy vọng (1 tiết)',
        y: '- Cảm nhận giai điệu hoành tráng bản Khúc ca hoan ngập (Ode to Joy) trong Giao hưởng số 9 của L.V.Beethoven.\n- Nắm được cuộc đời, sự nghiệp âm nhạc của nhạc sĩ Văn Ký và giá trị trường tồn của Bài ca hy vọng.',
        dc: '• [Mã NLS: 1.2.TC1a] Tra cứu tư liệu tiểu sử nhạc sĩ L.V.Beethoven và Văn Ký trên bách khoa toàn thư trực tuyến.\n• [Mã AI: 6.A1.1] Phân biệt giá trị nghệ thuật nguyên bản của tác phẩm giao hưởng bất hủ với các bản remix tự động.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Ước mơ hoà bình',
        n: 'Chủ đề 4: Ước mơ hoà bình - Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Thực hành thổi/bấm ngón hòa tấu giai điệu Khúc ca hoan ngập trên sáo Recorder hoặc kèn phím.\n- Sáng tạo mẫu tiết tấu gõ đệm bằng nhạc cụ gõ cơ thể (body percussion) cho bài hát.',
        dc: '• [Mã NLS: 3.2.TC1a] Ghi lại sản phẩm hòa tấu nhạc cụ của nhóm và tải lên kho dữ liệu số của lớp.\n• [Mã AI: 6.D1.1] Sử dụng AI gợi ý các mẫu gõ đệm tiết tấu đa dạng phù hợp với bài thực hành.'
      },
      {
        w: 14,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc cụ Chủ đề 1 & Chủ đề 2 (1 tiết)',
        y: '- Củng cố kĩ năng hát đúng cao độ, truyền cảm các bài hát Chủ đề 1, 2.\n- Đọc thuần thục Bài đọc nhạc số 1 và thực hành nhạc cụ Recorder / kèn phím nhịp nhàng.',
        dc: '• [Mã NLS: 1.3.TC1b] Tự tổng hợp danh mục các bài hát, bài đọc nhạc HK1 vào bảng theo dõi tiến độ học tập số.\n• [Mã AI: 6.A1.3] Dùng ứng dụng AI rà soát lỗi phát âm và nhịp phách trong các bài đã học.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc lí Chủ đề 3 & Chủ đề 4 (1 tiết)',
        y: '- Ôn luyện thuần thục bài hát Thầy cô là tất cả, Những ước mơ; Bài đọc nhạc số 2.\n- Nắm vững lí thuyết nhịp 4/4, hình thức hát bè và hoàn thiện các bài tập Vận dụng - Sáng tạo.',
        dc: '• [Mã NLS: 2.2.TC1c] Tham gia trò chơi trắc nghiệm tương tác trực tuyến (Kahoot/Quizizz) ôn tập nhạc lí HK1.\n• [Mã AI: 6.C2.2] Tương tác với chatbot AI giải đáp các câu hỏi thắc mắc về nhạc lí và quy tắc đọc nhạc.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp 6',
        y: '- Đánh giá tổng hợp toàn diện các nội dung Hát, Đọc nhạc, Nhạc cụ và Nhạc lí trong toàn bộ Học kỳ 1.\n- Thể hiện sự tiến bộ về năng lực cảm thụ âm nhạc, kĩ năng biểu diễn và tinh thần trách nhiệm.',
        dc: '• [Mã NLS: 3.2.TC1a] Lưu trữ video bài thi thực hành vào hồ sơ học tập số cá nhân.\n• [Mã AI: 6.B1.1] Ý thức về việc bảo mật hình ảnh và video cá nhân khi tham gia đánh giá trực tuyến.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Âm nhạc Lớp 6 (1 tiết)',
        y: '- Nhận xét, rút kinh nghiệm các ưu điểm và hạn chế trong bài kiểm tra cuối học kì 1.\n- Ôn tập bổ sung những kĩ năng còn yếu về cao độ, phách nhịp và nhạc lí.',
        dc: '• [Mã NLS: 5.4.TC1a] Xác định nội dung kĩ năng âm nhạc cần cải thiện thông qua bảng phân tích kết quả học tập số.\n• [Mã AI: 6.D1.1] Nhận gợi ý bài tập luyện thanh và đọc nốt cá nhân hóa từ phần mềm hỗ trợ học tập.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 Lớp 6 (1 tiết)',
        y: '- Trình diễn báo cáo các tiết mục đơn ca, song ca, tốp ca và hòa tấu nhạc cụ xuất sắc trong HK1.\n- Đánh giá tổng kết tinh thần học tập HK1 và khơi dậy niềm đam mê âm nhạc chuẩn bị cho HK2.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video clip tổng hợp chương trình biểu diễn báo cáo âm nhạc HK1 của lớp.\n• [Mã AI: 6.A1.1] Ứng dụng AI tinh chỉnh âm lượng nhạc nền và cân bằng âm thanh video báo cáo.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Giai điệu quê hương',
        n: 'Chủ đề 5: Giai điệu quê hương - Hát: Bài hát Mưa rơi (Dân ca Khơ-mú, Phối âm: Thanh Vân) (1 tiết)',
        y: '- Hát đúng giai điệu, lời ca rộn ràng, hồn nhiên của bài dân ca Mưa rơi.\n- Biết gõ đệm theo nhịp và vận động cơ thể phụ họa nhịp nhàng thể hiện nét văn hóa vùng cao.',
        dc: '• [Mã NLS: 1.1.TC1b] Khám phá kho tàng dân ca các dân tộc thiểu số Việt Nam trên nền tảng số hóa văn hóa.\n• [Mã AI: 6.C1.1] Tìm hiểu cách AI phân loại và gợi ý các làn điệu dân ca theo vùng miền địa lí.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Giai điệu quê hương',
        n: 'Chủ đề 5: Giai điệu quê hương - Nghe nhạc: Hoà tấu Mừng hội hoa bông & TTAN: Giới thiệu kèn và sáo trúc (1 tiết)',
        y: '- Cảm nhận không khí vui tươi, rộn rã qua bản hoà tấu nhạc cụ dân tộc Mừng hội hoa bông.\n- Nhận biết hình dáng, cấu tạo, âm sắc và cách phát âm đặc trưng của kèn và sáo trúc Việt Nam.',
        dc: '• [Mã NLS: 1.2.TC1b] Xem các clip biểu diễn sáo trúc và kèn dân tộc của các nghệ sĩ ưu tú trên Internet.\n• [Mã AI: 6.A1.2] Nhận diện sự độc đáo trong âm sắc sáo trúc truyền thống mà nhạc cụ điện tử khó mô phỏng trọn vẹn.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Giai điệu quê hương',
        n: 'Chủ đề 5: Giai điệu quê hương - Đọc nhạc: Bài đọc nhạc số 3 & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Đọc đúng cao độ và trường độ Bài đọc nhạc số 3 viết ở nhịp 2/4 với các nốt Đô - Rê - Mi - Son - La.\n- Thực hiện hoạt động Vận dụng - Sáng tạo: Sáng tác lời ca mới hoặc gõ đệm tiết tấu cho bài đọc nhạc.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng phần mềm chép nhạc số (MuseScore/Flat.io) để nhập và nghe thử Bài đọc nhạc số 3.\n• [Mã AI: 6.D1.1] Trải nghiệm AI gợi ý lời ca theo vần điệu cho giai điệu dân gian ngắn.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Mẹ trong trái tim em',
        n: 'Chủ đề 6: Mẹ trong trái tim em - Hát: Bài hát Chỉ có một trên đời & LTAN: Giới thiệu cung và nửa cung (1 tiết)',
        y: '- Hát đúng cao độ, trường độ, sắc thái trìu mến của bài hát Chỉ có một trên đời (Trương Quang Lục).\n- Hiểu rõ khái niệm cung và nửa cung - đơn vị đo khoảng cách cao độ giữa hai âm thanh liền bậc trong âm nhạc.',
        dc: '• [Mã NLS: 1.1.TC1c] Xem mô phỏng trực quan khoảng cách cung và nửa cung trên bàn phím đàn piano điện tử.\n• [Mã AI: 6.C2.2] Sử dụng trợ lí học tập AI kiểm tra các câu hỏi về khoảng cách cung giữa 7 nốt nhạc cơ bản.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Mẹ trong trái tim em',
        n: 'Chủ đề 6: Mẹ trong trái tim em - TTAN: Nhạc sĩ Johannes Brahms và tác phẩm Lullaby & Đọc nhạc: Bài đọc nhạc số 4 (1 tiết)',
        y: '- Nắm được đôi nét về nhạc sĩ vĩ đại Johannes Brahms và giai điệu êm dịu của tác phẩm Khúc hát ru (Lullaby).\n- Đọc chuẩn xác Bài đọc nhạc số 4 có nốt hoa mỹ và khoảng cách nửa cung.',
        dc: '• [Mã NLS: 1.2.TC1b] Nghe và so sánh các bản phối khúc Lullaby trên các định dạng số khác nhau.\n• [Mã AI: 6.A1.1] Phân tích cảm xúc êm dịu của bài hát ru bằng công cụ AI nhận diện sắc thái âm nhạc.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Mẹ trong trái tim em',
        n: 'Chủ đề 6: Mẹ trong trái tim em - Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Luyện tập thổi Recorder hoặc bấm ngón kèn phím giai điệu bài Khúc hát ru (Lullaby).\n- Tự tin hòa tấu nhạc cụ kết hợp hát và vận động cơ thể theo nhóm.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video hòa tấu nhạc cụ của nhóm lồng ghép hình ảnh mẹ và gia đình.\n• [Mã AI: 6.D1.1] Dùng ứng dụng chỉnh sửa video có AI tự động căn khớp âm thanh nhạc cụ với hình ảnh.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Âm nhạc nước ngoài',
        n: 'Chủ đề 7: Âm nhạc nước ngoài - Hát: Bài hát Hãy để mặt trời luôn chiếu sáng & LTAN: Các bậc chuyển hoá, dấu hoá (1 tiết)',
        y: '- Hát chuẩn giai điệu, nhịp điệu bài hát thiếu nhi nước ngoài Hãy để mặt trời luôn chiếu sáng.\n- Nhận biết và hiểu tác dụng của các loại dấu hoá: Dấu thăng (#), Dấu giáng (b), Dấu bình (♮); phân biệt dấu hoá theo khoá và dấu hoá bất thường.',
        dc: '• [Mã NLS: 1.3.TC1b] Tạo bảng tóm tắt kĩ thuật số về các loại dấu hóa và công dụng trong bản nhạc.\n• [Mã AI: 6.C1.1] Khám phá cách AI xử lý và nhận diện ký hiệu dấu thăng, dấu giáng khi quét ảnh bản nhạc số (OMR).'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp 6',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 19 đến Tuần 25.\n- Khuyến khích sự sáng tạo, tinh thần tự giác và khả năng trình diễn nhóm.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng thiết bị thu âm số để thực hiện phần kiểm tra đánh giá định kì.\n• [Mã AI: 6.A1.3] Đối chiếu bài kiểm tra với biểu điểm số hóa để nâng cao tính khách quan.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Âm nhạc nước ngoài',
        n: 'Chủ đề 7: Âm nhạc nước ngoài - Nghe nhạc: Auld Lang Syne & Đọc nhạc: Bài đọc nhạc số 5 & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Cảm nhận vẻ đẹp giai điệu tha thiết của bài dân ca Scotland Auld Lang Syne (Bài ca tạm biệt).\n- Đọc đúng cao độ có dấu hoá trong Bài đọc nhạc số 5; hoàn thành hoạt động Vận dụng - Sáng tạo.',
        dc: '• [Mã NLS: 2.5.TC1b] Nghe và tìm hiểu lịch sử lan tỏa toàn cầu của bài hát Auld Lang Syne qua tài liệu đa phương tiện.\n• [Mã AI: 6.C2.2] Sử dụng AI dịch nghĩa lời gốc tiếng Anh/Scotland của bài hát sang tiếng Việt.'
      },
      {
        w: 28,
        t: 'Chủ đề 8: Bác Hồ với thiếu nhi',
        n: 'Chủ đề 8: Bác Hồ với thiếu nhi - Hát: Bác Hồ - Người cho em tất cả & Nghe nhạc: Việt Nam quê hương tôi (1 tiết)',
        y: '- Hát với cảm xúc kính yêu, tự hào bài hát Bác Hồ - Người cho em tất cả (Hoàng Long - Hoàng Lân).\n- Cảm nhận tình yêu quê hương đất nước tha thiết qua ca khúc Việt Nam quê hương tôi (Đỗ Nhuận).',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và xem lại các thước phim tài liệu lịch sử số về Bác Hồ với thiếu niên, nhi đồng.\n• [Mã AI: 6.A1.1] Phân tích tình cảm kính yêu Bác Hồ qua ngôn từ âm nhạc với sự trợ giúp của AI ngôn ngữ.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Bác Hồ với thiếu nhi',
        n: 'Chủ đề 8: Bác Hồ với thiếu nhi - TTAN: Bài hát Như có Bác trong ngày đại thắng & Nhạc cụ: Recorder hoặc kèn phím (1 tiết)',
        y: '- Hiểu hoàn cảnh ra đời đặc biệt và ý nghĩa lịch sử thiêng liêng của bài hát Như có Bác trong ngày đại thắng (Phạm Tuyên).\n- Thực hành hòa tấu giai điệu bài hát trên Recorder / kèn phím kết hợp gõ đệm.',
        dc: '• [Mã NLS: 2.2.TC1a] Chia sẻ cảm nghĩ về bài hát và ngày toàn thắng lên diễn đàn học tập trực tuyến.\n• [Mã AI: 6.B1.1] Thảo luận về việc tôn trọng bản quyền tác giả khi biểu diễn các ca khúc cách mạng lịch sử.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Bác Hồ với thiếu nhi',
        n: 'Chủ đề 8: Bác Hồ với thiếu nhi - Vận dụng – Sáng tạo & Ôn tập cuối năm (1 tiết)',
        y: '- Biểu diễn tổng hợp các tiết mục hát, đọc nhạc và hòa tấu nhạc cụ Chủ đề 8.\n- Hệ thống hóa toàn bộ kiến thức nhạc lí, bài hát, bài đọc nhạc và thường thức âm nhạc đã học trong năm học Lớp 6.',
        dc: '• [Mã NLS: 1.3.TC1a] Sơ đồ hóa toàn bộ kiến thức môn Âm nhạc 6 bằng bản đồ tư duy số (Mindmap online).\n• [Mã AI: 6.D1.1] Sử dụng AI tổng hợp và tạo bộ câu hỏi ôn tập tổng hợp cuối năm.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp 6',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Âm nhạc Lớp 6 cả năm học.\n- Đánh giá sự trưởng thành về thị hiếu thẩm mỹ, sự tự tin và năng lực thực hành âm nhạc.',
        dc: '• [Mã NLS: 3.1.TC1b] Ghi hình bài kiểm tra thực hành cuối năm phục vụ lưu trữ học bạ số.\n• [Mã AI: 6.A1.3] Tự đánh giá mức độ đạt được theo các tiêu chí chuẩn đầu ra GDPT 2018.'
      },
      {
        w: 32,
        t: 'Chữa bài & Giao lưu',
        n: 'Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường Lớp 6 (1 tiết)',
        y: '- Nhận xét, đánh giá kết quả kiểm tra cuối năm; biểu dương tinh thần nỗ lực của học sinh.\n- Tổ chức giao lưu văn nghệ học đường, khuyến khích học sinh biểu diễn tự tin các bài hát yêu thích.',
        dc: '• [Mã NLS: 2.1.TC1b] Trình chiếu hình ảnh, video hoạt động học tập âm nhạc trong suốt năm học.\n• [Mã AI: 6.C2.2] Trải nghiệm trò chơi âm nhạc tương tác có ứng dụng AI nhận diện giai điệu.'
      },
      {
        w: 33,
        t: 'Dự án Âm nhạc',
        n: 'Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp 6 (1 tiết)',
        y: '- Vận dụng kiến thức, kĩ năng đã học để dàn dựng và biểu diễn một chương trình văn nghệ chủ đề hoàn chỉnh.\n- Rèn luyện kĩ năng làm việc nhóm, điều hành sân khấu và năng lực biểu diễn tập thể.',
        dc: '• [Mã NLS: 3.2.TC1a] Ứng dụng công nghệ số thiết kế poster, vé mời và trình chiếu slide sân khấu cho Ngày hội Âm nhạc.\n• [Mã AI: 6.D1.1] Dùng AI tạo kịch bản dẫn chương trình (MC script) và danh mục bài hát theo chủ đề ngày hội.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập tổng hợp toàn diện các bài hát, bài đọc nhạc và nhạc cụ cả năm Lớp 6 (1 tiết)',
        y: '- Hệ thống hóa và hoàn thiện các kĩ năng thực hành âm nhạc cốt lõi của Lớp 6.\n- Tự tin thực hành hòa tấu nhạc cụ và đọc đúng các bài đọc nhạc đã học.',
        dc: '• [Mã NLS: 1.3.TC1b] Hoàn thiện danh mục hồ sơ sản phẩm âm nhạc số cá nhân cả năm học.\n• [Mã AI: 6.C1.1] Khám phá các công nghệ số mới hỗ trợ việc tự học âm nhạc tại nhà trong dịp hè.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Âm nhạc Lớp 6 cả năm (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả rèn luyện và học tập môn Âm nhạc Lớp 6.\n- Tuyên dương các cá nhân, nhóm có thành tích xuất sắc và định hướng phát triển năng khiếu âm nhạc.',
        dc: '• [Mã NLS: 2.2.TC1a] Đăng tải thư viện video biểu diễn xuất sắc của học sinh lên chuyên trang học tập của trường.\n• [Mã AI: 6.A1.1] Nhận thức về vai trò của công nghệ số và AI trong việc gìn giữ và lan tỏa tình yêu âm nhạc.'
      }
    ];

    grade6Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        digitalCompetency: item.dc,
        equipment: 'Đàn Organ/Piano điện tử, thanh phách, song loan, sáo Recorder, kèn Melodica, tệp âm thanh mẫu, máy chiếu',
        location: 'Phòng học bộ môn Âm nhạc',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Âm nhạc học đường' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. ÂM NHẠC LỚP 7 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 7) {
    const grade7Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Ngày khai trường',
        n: 'Chủ đề 1: Ngày khai trường - Hát: Bài hát Khai trường & LTAN: Nhịp lấy đà (1 tiết)',
        y: '- Hát đúng cao độ, trường độ, sắc thái tươi vui rộn ràng bài hát Khai trường (Nhạc: Quỳnh Hợp; Lời: Dương Xuân Linh).\n- Nhận biết và hiểu được khái niệm nhịp lấy đà (ô nhịp đầu tiên không đủ số phách quy định theo số chỉ nhịp).',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm các bản thu mẫu bài Khai trường trên các kho học liệu số để tự luyện tập.\n• [Mã AI: 7.C5.1] Trải nghiệm ứng dụng AI đếm nhịp tự động nhận biết chính xác điểm rơi của nhịp lấy đà.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Ngày khai trường',
        n: 'Chủ đề 1: Ngày khai trường - Đọc nhạc: Bài đọc nhạc số 1 & TTAN: Nhạc sĩ Trịnh Công Sơn và bài hát Tuổi đời mênh mông (1 tiết)',
        y: '- Đọc chuẩn xác Bài đọc nhạc số 1 viết ở nhịp 2/4 có nhịp lấy đà.\n- Nắm được cuộc đời, sự nghiệp âm nhạc của nhạc sĩ Trịnh Công Sơn và cảm nhận giai điệu trong sáng của ca khúc Tuổi đời mênh mông.',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu các bài viết phân tích phong cách âm nhạc Trịnh Công Sơn từ nguồn báo chí chính thống.\n• [Mã AI: 7.A1.1] Phân biệt nét cảm xúc tinh tế nhân văn trong nhạc Trịnh do con người thể hiện so với giai điệu AI tạo.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Ngày khai trường',
        n: 'Chủ đề 1: Ngày khai trường - Vận dụng – Sáng tạo (Gõ đệm & Biểu diễn) (1 tiết)',
        y: '- Vận dụng gõ đệm bằng nhạc cụ gõ cơ thể (body percussion) hoặc Recorder / kèn phím cho bài hát Khai trường.\n- Tự tin biểu diễn kết hợp động tác phụ họa theo hình thức tam ca, tốp ca.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng smartphone ghi lại clip biểu diễn của nhóm để chia sẻ và nhận xét chéo.\n• [Mã AI: 7.D1.1] Dùng phần mềm AI hỗ trợ phân tích độ đồng đều nhịp phách của các thành viên trong nhóm.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Môi trường xanh',
        n: 'Chủ đề 2: Môi trường xanh - Hát: Bài hát Vì cuộc sống tươi đẹp & Nghe nhạc: Tác phẩm Alouette (Tiếng chim sơn ca) (1 tiết)',
        y: '- Hát đúng cao độ, giai điệu trong sáng bài Vì cuộc sống tươi đẹp, thể hiện ý thức bảo vệ môi trường.\n- Lắng nghe và cảm thụ vẻ đẹp tươi vui, ríu rít của bài dân ca Pháp Alouette.',
        dc: '• [Mã NLS: 2.2.TC1c] Tìm hiểu thông điệp bảo vệ Trái Đất qua các tác phẩm âm nhạc thế giới trên Internet.\n• [Mã AI: 7.C4.1] Khám phá cách AI phân loại các bài hát thiếu nhi theo chủ đề thiên nhiên và môi trường.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Môi trường xanh',
        n: 'Chủ đề 2: Môi trường xanh - Nhạc cụ: Recorder hoặc kèn phím (1 tiết)',
        y: '- Luyện tập thổi Recorder hoặc bấm ngón kèn phím các nốt C, D, E, F, G, A, B; thực hành giai điệu bài Vì cuộc sống tươi đẹp.\n- Thể hiện sự phối hợp nhịp nhàng, đúng tiết tấu khi hòa tấu theo nhóm.',
        dc: '• [Mã NLS: 3.2.TC1a] Thu âm bài hòa tấu nhạc cụ và biên tập chèn nhạc nền backing track bằng phần mềm số.\n• [Mã AI: 7.A1.MR1] Dùng ứng dụng AI hỗ trợ chỉnh phím để kiểm tra độ chính xác cao độ của nhạc cụ trước khi chơi.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Môi trường xanh',
        n: 'Chủ đề 2: Môi trường xanh - TTAN: Nhạc sĩ Hoàng Việt và ca khúc Nhạc rừng & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Nắm được tiểu sử anh hùng liệt sĩ - Nhạc sĩ Hoàng Việt và hoàn cảnh sáng tác ca khúc bất hủ Nhạc rừng.\n- Thực hiện hoạt động Vận dụng - Sáng tạo: Mô phỏng âm thanh thiên nhiên (tiếng chim, tiếng suối) bằng nhạc cụ.',
        dc: '• [Mã NLS: 1.1.TC1c] Nghe bản thu âm chuẩn bài Nhạc rừng do dàn hợp xướng biểu diễn trên kho nhạc số.\n• [Mã AI: 7.C5.1] Thử nghiệm công cụ tạo hiệu ứng âm thanh môi trường rừng bằng AI để lồng ghép vào tiết mục.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Thầy cô và mái trường',
        n: 'Chủ đề 3: Thầy cô và mái trường - Hát: Bài hát Nhớ ơn thầy cô & LTAN: Dấu nhắc lại, dấu quay lại, khung thay đổi (1 tiết)',
        y: '- Hát chuẩn xác giai điệu, tình cảm tha thiết của bài hát Nhớ ơn thầy cô (Phong Nhã).\n- Nhận biết và hiểu đúng quy tắc thực hiện bản nhạc khi gặp Dấu nhắc lại, Dấu quay lại (D.C., D.S., Coda, Fine) và Khung thay đổi 1, 2.',
        dc: '• [Mã NLS: 1.3.TC1b] Sử dụng sơ đồ số trực quan để ghi nhớ quy trình di chuyển của mắt khi đọc bản nhạc có dấu nhắc lại.\n• [Mã AI: 7.A3.1] Trải nghiệm công cụ AI tự động đọc và cuộn bản nhạc số theo đúng cấu trúc dấu quay lại.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Thầy cô và mái trường',
        n: 'Chủ đề 3: Thầy cô và mái trường - Đọc nhạc: Bài đọc nhạc số 2 & TTAN: Giới thiệu một số thể loại ca khúc (1 tiết)',
        y: '- Đọc đúng cao độ và trường độ Bài đọc nhạc số 2 có sử dụng khung thay đổi.\n- Phân biệt được các thể loại ca khúc phổ biến: Ca khúc hành khúc, Ca khúc trữ tình, Ca khúc sinh hoạt - thiếu nhi, Ca khúc nghi lễ.',
        dc: '• [Mã NLS: 2.2.TC1a] Tạo danh sách phát (playlist) trên nền tảng số phân loại các bài hát theo 4 thể loại ca khúc.\n• [Mã AI: 7.C4.1] Khám phá mô hình AI phân loại thể loại âm nhạc tự động dựa trên đặc trưng nhịp điệu và phổ âm.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp 7',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 1 đến Tuần 8.\n- Rèn luyện phong thái tự tin, khả năng làm chủ sân khấu và tính trung thực trong học tập.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng thiết bị thu âm số ghi lại phần kiểm tra đánh giá cá nhân.\n• [Mã AI: 7.B3.1] Thực hiện cam kết trung thực học đường trong quá trình kiểm tra thực hành.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Thầy cô và mái trường',
        n: 'Chủ đề 3: Thầy cô và mái trường - Vận dụng – Sáng tạo (Biểu diễn tri ân thầy cô) (1 tiết)',
        y: '- Dàn dựng hoạt cảnh ca múa hoặc hòa tấu nhạc cụ chủ đề Thầy cô và mái trường nhân dịp 20/11.\n- Thể hiện lòng biết ơn sâu sắc và tinh thần đoàn kết trong tập thể lớp.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video ca nhạc ngắn tri ân thầy cô giáo bằng phần mềm làm phim trên máy tính/điện thoại.\n• [Mã AI: 7.D1.1] Ứng dụng AI tạo thiệp âm nhạc kỹ thuật số có gắn liên kết bản thu âm của học sinh gửi tặng thầy cô.'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Giai điệu quê hương',
        n: 'Chủ đề 4: Giai điệu quê hương - Hát: Bài hát Lí kéo chài (Dân ca Nam Bộ) (1 tiết)',
        y: '- Hát đúng cao độ, nhịp điệu khỏe khoắn, hào sảng bài Lí kéo chài (Dân ca Nam Bộ; Lời mới: Hoàng Lân).\n- Biết hát lĩnh xướng và hòa giọng xô theo đúng phong cách diễn xướng dân ca sông nước.',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và xem các tư liệu số về đời sống ngư dân và điệu hò, lí kéo chài miền sông nước Nam Bộ.\n• [Mã AI: 7.C5.1] Trải nghiệm AI mô phỏng tiếng sóng biển và gió biển làm hiệu ứng âm thanh nền cho bài hát.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Giai điệu quê hương',
        n: 'Chủ đề 4: Giai điệu quê hương - TTAN: Dân ca một số vùng miền Việt Nam & Đọc nhạc: Bài đọc nhạc số 3 (1 tiết)',
        y: '- Nhận biết đặc trưng phong cách dân ca các vùng miền: Quan họ Bắc Ninh, Hát Xoan Phú Thọ, Ca Huế, Cải lương Nam Bộ, Dân ca Tây Nguyên.\n- Đọc đúng giai điệu và tiết tấu mang âm hưởng dân ca của Bài đọc nhạc số 3.',
        dc: '• [Mã NLS: 1.2.TC1b] Khám phá bản đồ số Di sản Âm nhạc cổ truyền Việt Nam trên không gian mạng.\n• [Mã AI: 7.A1.1] Đánh giá vai trò của con người trong việc bảo tồn các nghệ nhân dân ca cổ truyền.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Giai điệu quê hương',
        n: 'Chủ đề 4: Giai điệu quê hương - Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Lí kéo chài trên sáo Recorder hoặc kèn phím.\n- Sáng tạo động tác chèo thuyền, kéo lưới phụ họa cho bài biểu diễn.',
        dc: '• [Mã NLS: 3.2.TC1a] Ghi lại video hòa tấu nhạc cụ kết hợp phụ họa của nhóm.\n• [Mã AI: 7.D1.1] Sử dụng AI gợi ý các mẫu đệm trống gõ dân tộc phù hợp với nhịp điệu điệu Lí.'
      },
      {
        w: 14,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc cụ Chủ đề 1 & Chủ đề 2 (1 tiết)',
        y: '- Củng cố kĩ năng hát chuẩn xác và biểu diễn truyền cảm các bài hát Khai trường, Vì cuộc sống tươi đẹp.\n- Đọc thuần thục Bài đọc nhạc số 1 và hòa tấu nhạc cụ nhịp nhàng.',
        dc: '• [Mã NLS: 1.3.TC1a] Hệ thống hóa bài học HK1 trên bảng tính học tập trực tuyến.\n• [Mã AI: 7.A1.MR1] Dùng ứng dụng AI phân tích và đưa ra lời khuyên cải thiện hơi thở khi hát.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc lí Chủ đề 3 & Chủ đề 4 (1 tiết)',
        y: '- Ôn luyện bài hát Nhớ ơn thầy cô, Lí kéo chài; Bài đọc nhạc số 2, 3.\n- Củng cố kiến thức về nhịp lấy đà, dấu nhắc lại, khung thay đổi và các thể loại ca khúc.',
        dc: '• [Mã NLS: 2.5.TC1b] Tham gia thi đấu trắc nghiệm kiến thức âm nhạc trực tuyến giữa các tổ trong lớp.\n• [Mã AI: 7.C5.1] Tương tác với hệ thống AI kiểm tra kiến thức đọc nhạc theo thời gian thực.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp 7',
        y: '- Đánh giá tổng hợp toàn diện kết quả học tập môn Âm nhạc Lớp 7 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực thực hành và cảm thụ âm nhạc của học sinh.',
        dc: '• [Mã NLS: 3.1.TC1b] Lưu trữ kết quả kiểm tra vào hồ sơ học tập số của học sinh.\n• [Mã AI: 7.B3.1] Thực hiện văn hóa thi cử nghiêm túc và tôn trọng kết quả đánh giá số hóa.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Âm nhạc Lớp 7 (1 tiết)',
        y: '- Nhận xét, phân tích các lỗi thường gặp trong bài kiểm tra cuối HK1 về cao độ, phách nhịp.\n- Rèn luyện bổ sung kĩ năng lấy hơi và bấm ngón nhạc cụ cho học sinh.',
        dc: '• [Mã NLS: 5.4.TC1a] Xem báo cáo phân tích kĩ năng số hóa cá nhân để tự khắc phục điểm yếu.\n• [Mã AI: 7.D1.1] Nhận lộ trình bài tập tự luyện thanh nhạc cá nhân hóa từ AI.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 Lớp 7 (1 tiết)',
        y: '- Trình diễn báo cáo các tiết mục xuất sắc; sơ kết phong trào học tập âm nhạc HK1.\n- Tạo động lực, hứng thú học tập âm nhạc chuẩn bị bước vào Học kỳ 2.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video clip tổng kết hoạt động âm nhạc học đường HK1 của khối 7.\n• [Mã AI: 7.A1.1] Dùng AI hỗ trợ cân bằng âm thanh và tạo hiệu ứng chuyển cảnh cho video báo cáo.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Nhịp điệu mùa xuân',
        n: 'Chủ đề 5: Nhịp điệu mùa xuân - Hát: Bài hát Mùa xuân ơi & Nghe nhạc: Sông Đakrông mùa xuân về (1 tiết)',
        y: '- Hát với cảm xúc vui tươi rộn rã bài hát Mùa xuân ơi (Nguyễn Ngọc Thiện).\n- Lắng nghe và cảm nhận giai điệu rực rỡ, đậm đà bản sắc Tây Nguyên qua bài hát Sông Đakrông mùa xuân về (Tố Hải).',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và thưởng thức các tiết mục biểu diễn ca khúc mùa xuân trên nền tảng số.\n• [Mã AI: 7.C5.1] Trải nghiệm phần mềm AI phân tích âm hưởng giai điệu mang âm giai ngũ cung Tây Nguyên.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Nhịp điệu mùa xuân',
        n: 'Chủ đề 5: Nhịp điệu mùa xuân - TTAN: Giới thiệu cồng chiêng, đàn t\'rưng của Tây Nguyên (1 tiết)',
        y: '- Nắm được giá trị của Không gian văn hóa Cồng chiêng Tây Nguyên (Di sản phi vật thể nhân loại).\n- Nhận biết cấu tạo, nguyên lý phát âm và âm sắc róc rách của đàn T\'rưng Tây Nguyên.',
        dc: '• [Mã NLS: 1.2.TC1b] Khám phá bảo tàng số về Không gian văn hóa Cồng chiêng Tây Nguyên bằng kính VR 3D.\n• [Mã AI: 7.A1.1] Nhận thức về giá trị di sản sống của nghệ nhân cồng chiêng mà AI không thể thay thế.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Nhịp điệu mùa xuân',
        n: 'Chủ đề 5: Nhịp điệu mùa xuân - LTAN: Các kí hiệu tăng trường độ & Đọc nhạc: Bài đọc nhạc số 4 (1 tiết)',
        y: '- Nhận biết và hiểu cách sử dụng các kí hiệu tăng trường độ: Dấu chấm dôi, Dấu nối, Dấu lưu không (dấu ngân tự do).\n- Đọc chuẩn xác Bài đọc nhạc số 4 có nốt móc đơn chấm dôi và dấu nối.',
        dc: '• [Mã NLS: 1.3.TC1b] Sử dụng phần mềm chép nhạc số mô phỏng sự tăng giảm trường độ của dấu chấm dôi.\n• [Mã AI: 7.C4.1] Khám phá thuật toán AI nhận diện trường độ nốt nhạc trong bản phổ số.'
      },
      {
        w: 22,
        t: 'Chủ đề 5: Nhịp điệu mùa xuân',
        n: 'Chủ đề 5: Nhịp điệu mùa xuân - Vận dụng – Sáng tạo (Hòa tấu & Trình diễn mùa xuân) (1 tiết)',
        y: '- Thực hành gõ đệm tiết tấu hoặc hòa tấu nhạc cụ cho bài hát Mùa xuân ơi.\n- Tự tin biểu diễn kết hợp múa phụ họa mang âm hưởng lễ hội mùa xuân.',
        dc: '• [Mã NLS: 3.2.TC1a] Ghi hình bài trình diễn nhóm và tạo mã QR để chia sẻ trong triển lãm học tập của trường.\n• [Mã AI: 7.D1.1] Ứng dụng AI tạo phông nền ảo sân khấu mùa xuân cho video biểu diễn.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Hát: Bài hát Santa Lucia & LTAN: Kí hiệu, thuật ngữ về nhịp độ và cường độ (1 tiết)',
        y: '- Hát đúng cao độ, trường độ, giai điệu êm đềm của bài dân ca Ý nổi tiếng Santa Lucia.\n- Nắm được các thuật ngữ, kí hiệu về nhịp độ (Adagio, Andante, Moderato, Allegro, Presto) và cường độ (pp, p, mp, mf, f, ff, Crescendo, Decrescendo).',
        dc: '• [Mã NLS: 1.1.TC1c] Tra cứu từ điển thuật ngữ âm nhạc quốc tế tiếng Ý - tiếng Việt trên không gian mạng.\n• [Mã AI: 7.C2.1] Sử dụng ứng dụng AI phân tích tốc độ BPM (Beats Per Minute) của bài hát theo thời gian thực.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Nhạc cụ: Recorder hoặc kèn phím & TTAN: Đàn cello và contrabass (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Santa Lucia trên Recorder hoặc kèn phím.\n- Nhận biết hình dáng, kích thước lớn, âm sắc trầm ấm của đàn Cello và âm sắc cực trầm của Contrabass trong dàn nhạc giao hưởng.',
        dc: '• [Mã NLS: 1.1.TC1b] Xem clip so sánh âm vực của 4 cây đàn thuộc họ vĩ cầm (Violin, Viola, Cello, Contrabass).\n• [Mã AI: 7.C5.1] Trải nghiệm AI nhận diện âm sắc nhạc cụ trong bản hòa tấu giao hưởng.'
      },
      {
        w: 25,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Vận dụng – Sáng tạo (1 tiết)',
        y: '- Biểu diễn bài hát Santa Lucia bằng tiếng Việt hoặc tiếng Ý; hòa tấu nhạc cụ kết hợp thay đổi sắc thái cường độ theo kí hiệu.\n- Thể hiện sự tự tin và năng lực cảm thụ âm nhạc thế giới.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video biểu diễn nhạc phẩm nước ngoài có phụ đề song ngữ.\n• [Mã AI: 7.A1.MR1] Dùng AI tạo phụ đề tự động cho video bài hát của nhóm.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp 7',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 19 đến Tuần 25.\n- Đánh giá khả năng cảm thụ nhịp độ, sắc thái và kĩ năng diễn tấu.',
        dc: '• [Mã NLS: 3.1.TC1b] Ghi âm bài thi thực hành lưu vào kho học liệu đánh giá số của nhà trường.\n• [Mã AI: 7.B3.1] Nêu cao tinh thần tự giác, trung thực trong thực hiện bài kiểm tra.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Cuộc sống tươi đẹp',
        n: 'Chủ đề 7: Cuộc sống tươi đẹp - Hát: Bài hát Đời cho em những nốt nhạc vui & Đọc nhạc: Bài đọc nhạc số 5 (1 tiết)',
        y: '- Hát với tính chất tươi vui, rộn ràng bài hát Đời cho em những nốt nhạc vui (Thập Nhất).\n- Đọc chuẩn xác Bài đọc nhạc số 5 viết ở nhịp 3/4 với giai điệu nhịp nhàng uyển chuyển.',
        dc: '• [Mã NLS: 1.1.TC1b] Sử dụng ứng dụng luyện đọc nhạc trực tuyến để luyện xướng âm Bài đọc nhạc số 5.\n• [Mã AI: 7.D1.1] Nhận gợi ý từ AI về các mẫu bè phụ họa cho ca khúc thiếu nhi.'
      },
      {
        w: 28,
        t: 'Chủ đề 7: Cuộc sống tươi đẹp',
        n: 'Chủ đề 7: Cuộc sống tươi đẹp - TTAN: Nhạc sĩ P.I.Tchaikovsky và khúc nhạc Chèo thuyền & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Nắm được cuộc đời, sự nghiệp của thiên tài âm nhạc Nga P.I.Tchaikovsky và cảm nhận giai điệu mênh mang của khúc nhạc Chèo thuyền (Barcarolle).\n- Thực hiện hoạt động Vận dụng - Sáng tạo theo nhóm.',
        dc: '• [Mã NLS: 1.2.TC1b] Thưởng thức tác phẩm Barcarolle qua các clip biểu diễn piano của các nghệ sĩ quốc tế.\n• [Mã AI: 7.A1.1] Nhận thức về chiều sâu cảm xúc nghệ thuật của kiệt tác cổ điển vượt lên trên thuật toán máy móc.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Mùa hè của em',
        n: 'Chủ đề 8: Mùa hè của em - Hát: Bài hát Mưa hè & Nghe nhạc: Ca khúc Hè về (1 tiết)',
        y: '- Hát đúng giai điệu, tiết tấu bài hát Mưa hè (Lê Quốc Thắng) với cảm xúc háo hức đón hè.\n- Lắng nghe và cảm thụ không khí rộn rã của bài hát Hè về (Hùng Lân).',
        dc: '• [Mã NLS: 2.1.TC1b] Tìm kiếm các ca khúc chủ đề mùa hè và tuổi học trò trên nền tảng âm nhạc số.\n• [Mã AI: 7.C2.1] Khám phá cách AI gợi ý các bài hát có cùng tâm trạng và giai điệu mùa hè.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Mùa hè của em',
        n: 'Chủ đề 8: Mùa hè của em - Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo & Ôn tập (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Mưa hè trên Recorder hoặc kèn phím.\n- Vận dụng - Sáng tạo và hệ thống hóa toàn bộ nội dung âm nhạc Lớp 7.',
        dc: '• [Mã NLS: 1.3.TC1a] Tạo bản đồ tư duy số tổng kết toàn bộ kiến thức âm nhạc Lớp 7.\n• [Mã AI: 7.D1.1] Dùng chatbot AI tạo ngân hàng câu hỏi ôn tập tổng hợp nhạc lí Lớp 7.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp 7',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Âm nhạc Lớp 7 cả năm học.\n- Đánh giá sự tiến bộ về thẩm mỹ âm nhạc, kĩ năng biểu diễn và tinh thần hợp tác.',
        dc: '• [Mã NLS: 3.2.TC1a] Ghi hình bài kiểm tra thực hành cuối năm phục vụ lưu trữ học bạ số.\n• [Mã AI: 7.A1.MR1] Học sinh tự đối chiếu phần trình diễn với bảng rubric tiêu chí đánh giá.'
      },
      {
        w: 32,
        t: 'Chữa bài & Giao lưu',
        n: 'Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường Lớp 7 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối năm; tuyên dương các học sinh có kết quả học tập tốt.\n- Tổ chức buổi giao lưu âm nhạc học đường, tạo không khí vui tươi, gắn kết trước khi kết thúc năm học.',
        dc: '• [Mã NLS: 2.2.TC1a] Chia sẻ video các tiết mục đặc sắc của buổi giao lưu lên trang thông tin học sinh.\n• [Mã AI: 7.C2.1] Trải nghiệm ứng dụng nhận diện cao độ giọng hát qua trò chơi âm nhạc AI.'
      },
      {
        w: 33,
        t: 'Dự án Âm nhạc',
        n: 'Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp 7 (1 tiết)',
        y: '- Dàn dựng và biểu diễn chương trình văn nghệ tổng hợp với các thể loại: Đơn ca, song ca, tốp ca, hòa tấu nhạc cụ và hoạt cảnh âm nhạc.\n- Phát triển năng lực tổ chức sự kiện âm nhạc, sự tự tin và kỹ năng biểu diễn sân khấu.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng công nghệ số thiết kế ấn phẩm truyền thông, visual màn hình LED cho Ngày hội Âm nhạc.\n• [Mã AI: 7.D1.1] Sử dụng AI hỗ trợ phối ghép âm thanh, lọc tạp âm và cân bằng âm lượng cho chương trình.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập tổng hợp toàn diện các bài hát, bài đọc nhạc và nhạc cụ cả năm Lớp 7 (1 tiết)',
        y: '- Ôn luyện và hoàn thiện toàn bộ các bài hát, bài đọc nhạc và kĩ thuật chơi nhạc cụ Recorder / kèn phím cả năm Lớp 7.\n- Nâng cao năng lực cảm thụ và biểu diễn tự tin.',
        dc: '• [Mã NLS: 1.3.TC1b] Lưu trữ toàn bộ bài tập và video thực hành vào không gian đám mây cá nhân.\n• [Mã AI: 7.C5.1] Tìm hiểu các công cụ học tập âm nhạc trực tuyến có tích hợp AI chuẩn bị cho Lớp 8.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Âm nhạc Lớp 7 cả năm (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Âm nhạc Lớp 7 cả năm học.\n- Biểu dương thành tích xuất sắc và khuyến khích học sinh duy trì thói quen thưởng thức âm nhạc lành mạnh.',
        dc: '• [Mã NLS: 2.1.TC1b] Đóng góp ý kiến khảo sát trực tuyến về chất lượng hoạt động âm nhạc trong năm học.\n• [Mã AI: 7.A1.1] Khẳng định vai trò làm chủ công nghệ và tình yêu nghệ thuật đích thực của con người trong kỉ nguyên số.'
      }
    ];

    grade7Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        digitalCompetency: item.dc,
        equipment: 'Đàn Organ/Piano điện tử, thanh phách, song loan, sáo Recorder, kèn Melodica, tệp âm thanh mẫu, máy chiếu',
        location: 'Phòng học bộ môn Âm nhạc',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Âm nhạc học đường' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. ÂM NHẠC LỚP 8 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 8) {
    const grade8Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Chào năm học mới',
        n: 'Chủ đề 1: Chào năm học mới - Bài 1: Hát Chào năm học mới & Nghe nhạc Bay lên nhé nụ cười (1 tiết)',
        y: '- Hát đúng cao độ, trường độ, sắc thái rộn ràng, tự hào bài Chào năm học mới (Phạm Tuyên).\n- Cảm nhận giai điệu tươi sáng, truyền cảm hứng của bài hát Bay lên nhé nụ cười.',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và tải bản thu âm chất lượng cao trên kho học liệu số để tự luyện thanh.\n• [Mã AI: 8.C1.1] Trải nghiệm phần mềm AI phân tích âm phổ giọng hát và gợi ý điều chỉnh kỹ thuật thanh nhạc.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Chào năm học mới',
        n: 'Chủ đề 1: Chào năm học mới - Bài 2: LTAN: Gam trưởng, giọng trưởng, giọng Đô trưởng & Đọc nhạc: Bài đọc nhạc số 1 (1 tiết)',
        y: '- Hiểu rõ cấu trúc gam trưởng (công thức cung và nửa cung: 1 - 1 - 1/2 - 1 - 1 - 1 - 1/2), giọng trưởng và giọng Đô trưởng (C-dur).\n- Đọc chuẩn xác Bài đọc nhạc số 1 ở giọng Đô trưởng kết hợp gõ đệm.',
        dc: '• [Mã NLS: 1.3.TC2a] Thiết kế bảng tổng hợp trực quan về cấu trúc các gam trưởng trên phần mềm đồ họa số.\n• [Mã AI: 8.D1.1] Khám phá ứng dụng AI hỗ trợ học nhạc lí và tự động chấm điểm độ chính xác khi đọc nốt nhạc.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Chào năm học mới',
        n: 'Chủ đề 1: Chào năm học mới - Vận dụng – Sáng tạo (Biểu diễn & Gõ đệm bài hát) (1 tiết)',
        y: '- Thực hành gõ đệm bằng nhạc cụ gõ cơ thể (body percussion) phức hợp hoặc hòa tấu kèn phím/recorder cho bài hát Chào năm học mới.\n- Biểu diễn tự tin theo nhóm kết hợp đội hình di chuyển linh hoạt.',
        dc: '• [Mã NLS: 3.2.TC2a] Ghi lại video biểu diễn nhóm và chỉnh sửa hiệu ứng âm thanh chuyên nghiệp.\n• [Mã AI: 8.D2.1] Sử dụng AI tạo kịch bản phân công bè phối và vũ đạo phụ họa phù hợp với bài hát.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Tôi yêu Việt Nam',
        n: 'Chủ đề 2: Tôi yêu Việt Nam - Bài 3: Hát Việt Nam ơi & Nghe nhạc Ngàn ước mơ Việt Nam (1 tiết)',
        y: '- Hát với cảm xúc tự hào, hào hùng, tràn đầy năng lượng bài hát Việt Nam ơi (Minh Beta).\n- Cảm nhận được khát vọng vươn lên và niềm tin yêu Tổ quốc qua ca khúc Ngàn ước mơ Việt Nam (Nguyễn Hồng Thuận).',
        dc: '• [Mã NLS: 2.2.TC2c] Tìm kiếm và phân tích các video cổ động yêu nước có sử dụng ca khúc Việt Nam ơi.\n• [Mã AI: 8.B1.1] Thảo luận về việc bảo vệ quyền tác giả âm nhạc kỹ thuật số khi lan tỏa các ca khúc nổi tiếng.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Tôi yêu Việt Nam',
        n: 'Chủ đề 2: Tôi yêu Việt Nam - Bài 4: Nhạc cụ: Recorder hoặc kèn phím (1 tiết)',
        y: '- Luyện tập thổi Recorder hoặc bấm ngón kèn phím giai điệu bài Việt Nam ơi với tốc độ vừa phải, ngón bấm linh hoạt.\n- Thực hiện hòa tấu 2 bè đơn giản theo nhóm.',
        dc: '• [Mã NLS: 3.2.TC2a] Ghi âm nhiều track nhạc cụ và ghép bè hòa âm trên phần mềm chỉnh sửa âm thanh số (Audacity/GarageBand).\n• [Mã AI: 8.C5.1] Dùng AI phân tích độ chính xác cao độ và nhịp độ của từng track bè nhạc cụ.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Tôi yêu Việt Nam',
        n: 'Chủ đề 2: Tôi yêu Việt Nam - Bài 4: TTAN: Dân ca Quan họ Bắc Ninh & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Hiểu được nguồn gốc, lề lối ca hát và giá trị nhân văn của Dân ca Quan họ Bắc Ninh (Di sản văn hóa phi vật thể đại diện của nhân loại).\n- Thực hiện hoạt động Vận dụng - Sáng tạo mang đậm nét văn hóa Quan họ.',
        dc: '• [Mã NLS: 1.1.TC2b] Truy cập kho tư liệu số hóa di sản văn hóa Quan họ của Viện Âm nhạc Việt Nam.\n• [Mã AI: 8.A1.1] Nhận thức về sự tinh tế trong lối hát "vang, rền, nền, nảy" độc nhất của con người mà công nghệ không thể thay thế.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Hoà ca',
        n: 'Chủ đề 3: Hoà ca - Bài 5: Hát Ngàn ước mơ Việt Nam & TTAN: Thể loại hợp xướng (1 tiết)',
        y: '- Hát đúng giai điệu, lời ca tha thiết bài hát Ngàn ước mơ Việt Nam.\n- Nắm được đặc điểm của nghệ thuật Hợp xướng (dàn hợp xướng thiếu nhi, hợp xướng nam nữ, các giọng Soprano, Alto, Tenor, Bass).',
        dc: '• [Mã NLS: 1.1.TC2d] Tìm kiếm và xem các video biểu diễn của các dàn hợp xướng thiếu nhi quốc tế tiêu biểu.\n• [Mã AI: 8.C1.1] Khám phá cách công nghệ AI mô phỏng các bè giọng hát và tạo bản phối hợp xướng ảo.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Hoà ca',
        n: 'Chủ đề 3: Hoà ca - Bài 6: LTAN: Nhịp 3/8 & Đọc nhạc: Bài đọc nhạc số 2 (1 tiết)',
        y: '- Nắm vững định nghĩa nhịp 3/8 (mỗi ô nhịp có 3 phách, mỗi phách có giá trị bằng một nốt móc đơn).\n- Đọc chuẩn xác cao độ và trường độ Bài đọc nhạc số 2 viết ở nhịp 3/8.',
        dc: '• [Mã NLS: 1.3.TC2b] Sử dụng phần mềm tạo nhịp số mô phỏng sự khác biệt giữa nhịp 3/4 và nhịp 3/8.\n• [Mã AI: 8.D1.1] Sử dụng AI tự động tạo các bài tập luyện đọc nốt ở nhịp 3/8 theo cấp độ từ dễ đến nâng cao.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp 8',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 1 đến Tuần 8.\n- Đánh giá khả năng cảm thụ nhịp 3/8, gam trưởng và kĩ năng diễn tấu nhạc cụ.',
        dc: '• [Mã NLS: 3.1.TC2b] Ghi hình bài kiểm tra thực hành lưu vào hồ sơ đánh giá năng lực số của học sinh.\n• [Mã AI: 8.A3.3] Thực hiện trách nhiệm giải trình và tính trung thực trong quá trình đánh giá kết quả học tập.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Hoà ca',
        n: 'Chủ đề 3: Hoà ca - Vận dụng – Sáng tạo (Hòa ca & Phối bè hợp xướng) (1 tiết)',
        y: '- Thực hành hát lĩnh xướng kết hợp hòa giọng và chia bè hợp xướng đơn giản cho bài Ngàn ước mơ Việt Nam.\n- Thể hiện sự hòa quyện âm thanh và tinh thần gắn kết tập thể.',
        dc: '• [Mã NLS: 2.4.TC2a] Hợp tác trực tuyến chia sẻ tệp âm thanh thu âm từng bè để giáo viên góp ý.\n• [Mã AI: 8.D2.1] Ứng dụng AI tinh chỉnh độ cân bằng âm lượng giữa các bè giọng hát trong bản thu nhóm.'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Biển đảo quê hương',
        n: 'Chủ đề 4: Biển đảo quê hương - Bài 7: Hát Nơi ấy Trường Sa & Nghe nhạc Nơi đảo xa (1 tiết)',
        y: '- Hát với cảm xúc dạt dào, xúc động bài hát Nơi ấy Trường Sa (Nhạc: Phạm Tuyên; Lời: Phỏng thơ Vũ Thị Khương).\n- Cảm nhận tình yêu tha thiết gửi tới những người lính biển qua tuyệt phẩm Nơi đảo xa (Thế Song).',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và xem các phóng sự số về đời sống và tình cảm thiêng liêng hướng về Trường Sa.\n• [Mã AI: 8.B2.1] Nhận thức về việc sử dụng nguồn tư liệu số chính thống khi thực hiện bài thuyết trình âm nhạc biển đảo.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Biển đảo quê hương',
        n: 'Chủ đề 4: Biển đảo quê hương - Bài 8: TTAN: Đàn guitar và ukulele (1 tiết)',
        y: '- Nắm được lịch sử, cấu tạo (thùng đàn, cần đàn, 6 dây đàn guitar; 4 dây đàn ukulele) và âm sắc mộc mạc, gần gũi của đàn guitar và ukulele.\n- Phân biệt đàn guitar cổ điển (classic), guitar đệm hát (acoustic) và đàn ukulele.',
        dc: '• [Mã NLS: 1.2.TC2a] Xem clip biểu diễn solo và hòa tấu guitar/ukulele của các nghệ sĩ nổi tiếng thế giới.\n• [Mã AI: 8.C1.1] Khám phá các ứng dụng AI hỗ trợ học hợp âm guitar và nhận diện âm thanh dây đàn.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Biển đảo quê hương',
        n: 'Chủ đề 4: Biển đảo quê hương - Bài 8: Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Nơi ấy Trường Sa trên Recorder hoặc kèn phím kết hợp gõ đệm.\n- Sáng tạo lời ca mới hoặc động tác phụ họa ngợi ca biển đảo quê hương.',
        dc: '• [Mã NLS: 3.2.TC2a] Sản xuất video clip ngắn kết hợp âm nhạc và hình ảnh biển đảo Trường Sa.\n• [Mã AI: 8.D1.1] Sử dụng AI hỗ trợ tìm kiếm và tạo các hình ảnh minh họa biển đảo chân thực cho video.'
      },
      {
        w: 14,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc cụ Chủ đề 1 & Chủ đề 2 (1 tiết)',
        y: '- Củng cố toàn diện kĩ năng hát và biểu diễn bài Chào năm học mới, Việt Nam ơi.\n- Đọc thuần thục Bài đọc nhạc số 1 và thực hành nhạc cụ nhịp nhàng.',
        dc: '• [Mã NLS: 1.3.TC2a] Tổng hợp các bài học HK1 vào hệ thống thư mục đám mây cá nhân.\n• [Mã AI: 8.A1.2] Nhận diện việc lạm dụng AI tạo nhạc tự động và khẳng định giá trị của việc rèn luyện kĩ năng thực tế.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc lí Chủ đề 3 & Chủ đề 4 (1 tiết)',
        y: '- Ôn luyện bài hát Ngàn ước mơ Việt Nam, Nơi ấy Trường Sa; Bài đọc nhạc số 2.\n- Củng cố lí thuyết gam trưởng, nhịp 3/8, thể loại hợp xướng và kiến thức về guitar, ukulele.',
        dc: '• [Mã NLS: 2.5.TC2b] Tham gia ôn tập nhạc lí qua trò chơi trắc nghiệm trực tuyến nhiều người chơi.\n• [Mã AI: 8.D1.1] Chatbot AI hỗ trợ ôn tập tổng kết và giải đáp nhanh các bài tập nhạc lí nâng cao.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp 8',
        y: '- Đánh giá tổng hợp toàn diện kết quả học tập môn Âm nhạc Lớp 8 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực biểu diễn, nhạc lí và thẩm mỹ âm nhạc của học sinh.',
        dc: '• [Mã NLS: 3.2.TC2a] Thu âm và lưu trữ bài kiểm tra vào học bạ số của học sinh.\n• [Mã AI: 8.A3.3] Thực hiện nghiêm túc quy chế kiểm tra đánh giá số hóa.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Âm nhạc Lớp 8 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối học kì 1; chỉ rõ các lỗi về phách nhịp, tư thế bấm ngón nhạc cụ.\n- Hướng dẫn phương pháp tự luyện tập âm nhạc tại nhà cho học sinh.',
        dc: '• [Mã NLS: 5.4.TC2a] Phân tích điểm cần cải thiện dựa trên bảng kết quả đánh giá năng lực số.\n• [Mã AI: 8.D1.1] Nhận bài tập luyện ngón kèn phím / recorder cá nhân hóa từ phần mềm hỗ trợ.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 Lớp 8 (1 tiết)',
        y: '- Trình diễn báo cáo các tiết mục đơn ca, hòa ca, hòa tấu nhạc cụ xuất sắc trong HK1.\n- Sơ kết, đánh giá phong trào học tập âm nhạc và khơi dậy đam mê sáng tạo âm nhạc chuẩn bị cho HK2.',
        dc: '• [Mã NLS: 3.2.TC2a] Biên tập video gala âm nhạc học đường HK1 của khối 8.\n• [Mã AI: 8.A1.1] Ứng dụng AI tinh chỉnh chất lượng âm thanh và lọc tiếng ồn cho video gala.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Chào xuân',
        n: 'Chủ đề 5: Chào xuân - Bài 9: Hát Ngày Tết quê em & TTAN: Nhạc sĩ Trần Hoàn và Một mùa xuân nho nhỏ (1 tiết)',
        y: '- Hát rộn ràng, vui tươi bài hát Ngày Tết quê em (Từ Huy) tái hiện không khí ngày Tết cổ truyền.\n- Nắm được cuộc đời, sự nghiệp của Nhạc sĩ Trần Hoàn và giá trị trường tồn của ca khúc Một mùa xuân nho nhỏ (thơ Thanh Hải).',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và thưởng thức các bản thu âm tuyệt tác Một mùa xuân nho nhỏ qua nhiều thế hệ ca sĩ.\n• [Mã AI: 8.C1.1] Khám phá cách AI phân tích nhịp điệu và cảm xúc hân hoan trong các ca khúc Tết Việt Nam.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Chào xuân',
        n: 'Chủ đề 5: Chào xuân - Bài 10: LTAN: Nhịp 6/8 & Đọc nhạc: Bài đọc nhạc số 3 (1 tiết)',
        y: '- Nắm vững định nghĩa nhịp 6/8 (mỗi ô nhịp có 6 phách móc đơn, chia làm 2 phách chính mạnh - nhẹ, mang tính chất đu đưa nhịp nhàng).\n- Đọc chuẩn xác Bài đọc nhạc số 3 ở nhịp 6/8.',
        dc: '• [Mã NLS: 1.3.TC2b] Sử dụng ứng dụng metronome số để luyện tập phân biệt phách chính và phách phụ trong nhịp 6/8.\n• [Mã AI: 8.D1.1] Dùng AI phân tích độ ổn định nhịp điệu khi đọc bài đọc nhạc số 3.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Chào xuân',
        n: 'Chủ đề 5: Chào xuân - Vận dụng – Sáng tạo (Biểu diễn & Gõ đệm mùa xuân) (1 tiết)',
        y: '- Vận dụng gõ đệm theo nhịp 6/8 hoặc hòa tấu nhạc cụ cho bài hát Ngày Tết quê em.\n- Sáng tạo động tác múa quạt, múa lụa mang đậm không khí Tết truyền thống.',
        dc: '• [Mã NLS: 3.1.TC2b] Quay clip biểu diễn chúc Tết của nhóm và chia sẻ lên trang mạng học đường.\n• [Mã AI: 8.D2.1] Sử dụng AI gợi ý kịch bản lời chúc Tết gắn liền với giai điệu bài hát.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Bài 11: Hát Hát lên cho ngày mai & Nghe nhạc Trở về Surriento (1 tiết)',
        y: '- Hát đúng cao độ, giai điệu thiết tha, hi vọng của bài Hát lên cho ngày mai.\n- Lắng nghe và cảm nhận nét đẹp trữ tình đằm thắm của bài dân ca Ý nổi tiếng Trở về Surriento (Torna a Surriento).',
        dc: '• [Mã NLS: 1.1.TC2c] Nghe và tìm hiểu về nghệ thuật ca xướng Bel Canto của Ý qua các nền tảng số.\n• [Mã AI: 8.C2.1] Khám phá công cụ AI dịch thuật và phân tích nghĩa nghệ thuật của ca từ tiếng Ý.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Bài 11: Nhạc cụ: Recorder hoặc kèn phím & Bài 12: LTAN: Gam thứ, giọng thứ, giọng La thứ (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Trở về Surriento trên Recorder hoặc kèn phím.\n- Hiểu rõ cấu trúc gam thứ tự nhiên (1 - 1/2 - 1 - 1 - 1/2 - 1 - 1), giọng thứ và giọng La thứ (a-moll).',
        dc: '• [Mã NLS: 1.3.TC2a] Thiết kế bảng so sánh trực quan giữa gam Đô trưởng (C-dur) và gam La thứ (a-moll) trên máy tính.\n• [Mã AI: 8.C1.1] Trải nghiệm AI nhận diện giọng trưởng / giọng thứ tự động khi phát đoạn âm thanh.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Âm nhạc nước ngoài',
        n: 'Chủ đề 6: Âm nhạc nước ngoài - Bài 12: Đọc nhạc: Bài đọc nhạc số 4 & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Đọc chuẩn xác Bài đọc nhạc số 4 viết ở giọng La thứ với giai điệu sâu lắng, tha thiết.\n- Hoàn thành hoạt động Vận dụng - Sáng tạo theo nhóm.',
        dc: '• [Mã NLS: 3.2.TC2a] Biên tập video đọc nhạc kết hợp đệm đàn của nhóm.\n• [Mã AI: 8.D1.1] Sử dụng AI hỗ trợ tạo bài đệm hòa âm tự động cho Bài đọc nhạc số 4.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Giai điệu quê hương',
        n: 'Chủ đề 7: Giai điệu quê hương - Bài 13: Hát Soi bóng bên hồ & TTAN: Đàn nguyệt và đàn tính (1 tiết)',
        y: '- Hát đúng cao độ, giai điệu trong sáng mang âm hưởng dân ca miền núi phía Bắc bài Soi bóng bên hồ (Lê Minh Châu).\n- Nhận biết cấu tạo, âm sắc vang giòn của Đàn Nguyệt (đàn Kìm) và âm sắc ấm áp của Đàn Tính (đàn Then dân tộc Tày, Nùng).',
        dc: '• [Mã NLS: 1.2.TC2b] Xem clip biểu diễn hát Then đàn Tính và độc tấu Đàn Nguyệt trong nghệ thuật Chèo, Chầu Văn.\n• [Mã AI: 8.A1.1] Tôn vinh tài năng chế tác đàn tính từ quả bầu khô của nghệ nhân truyền thống.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp 8',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 19 đến Tuần 25.\n- Đánh giá khả năng phân biệt giọng trưởng - giọng thứ, nhịp 6/8 và nhạc cụ dân tộc.',
        dc: '• [Mã NLS: 3.2.TC2a] Ghi âm và lưu trữ bài kiểm tra thực hành vào hồ sơ học sinh số.\n• [Mã AI: 8.A3.3] Thực hiện nghiêm túc quy trình kiểm tra đánh giá số hóa.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Giai điệu quê hương',
        n: 'Chủ đề 7: Giai điệu quê hương - Bài 14: LTAN: Đảo phách & Đọc nhạc: Bài đọc nhạc số 5 & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Hiểu rõ khái niệm đảo phách (âm nhấn xuất hiện ở phách nhẹ hoặc phần nhẹ của phách và kéo dài sang phách mạnh tiếp theo).\n- Đọc đúng cao độ và tiết tấu đảo phách trong Bài đọc nhạc số 5; thực hiện hoạt động Vận dụng - Sáng tạo.',
        dc: '• [Mã NLS: 1.3.TC2b] Sử dụng phần mềm chép nhạc mô phỏng trực quan hiện tượng đảo phách trong ô nhịp.\n• [Mã AI: 8.C5.1] Trải nghiệm AI nhận diện các tiết tấu syncopation (đảo phách) trong các bản nhạc hiện đại.'
      },
      {
        w: 28,
        t: 'Chủ đề 8: Nhịp điệu mùa hè',
        n: 'Chủ đề 8: Nhịp điệu mùa hè - Bài 15: Nghe nhạc Xôn xao mùa hè & TTAN: Nhạc sĩ Frederic Chopin và Fantaisie Impromptu (1 tiết)',
        y: '- Cảm nhận giai điệu rộn rã, sôi nổi của bài hát Xôn xao mùa hè.\n- Nắm được cuộc đời "nhà thơ của cây đàn piano" Frederic Chopin và kiệt tác Khúc tuỳ hứng giọng Đô thăng thứ (Fantaisie Impromptu in C Sharp Minor).',
        dc: '• [Mã NLS: 1.1.TC2c] Thưởng thức tác phẩm Fantaisie Impromptu qua phần trình diễn của các nghệ sĩ piano hàng đầu.\n• [Mã AI: 8.A1.1] Nhận thức về sự thăng hoa cảm xúc và kỹ thuật piano đỉnh cao của con người vượt qua mọi phần mềm mô phỏng.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Nhịp điệu mùa hè',
        n: 'Chủ đề 8: Nhịp điệu mùa hè - Bài 16: Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
        y: '- Luyện tập hòa tấu giai điệu bài Xôn xao mùa hè trên Recorder hoặc kèn phím.\n- Vận dụng - Sáng tạo: Sáng tạo mẫu gõ đệm hoặc nhảy dân vũ phụ họa cho giai điệu mùa hè.',
        dc: '• [Mã NLS: 3.2.TC2a] Biên tập video hòa tấu và dân vũ mùa hè của nhóm để tham gia ngày hội học đường.\n• [Mã AI: 8.D1.1] Sử dụng AI gợi ý các động tác flashmob đồng đều và sôi động phù hợp với bài hát.'
      },
      {
        w: 30,
        t: 'Ôn tập cuối năm',
        n: 'Ôn tập toàn diện kiến thức nhạc lí, bài hát, bài đọc nhạc và nhạc cụ Lớp 8 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức nhạc lí: Gam trưởng/thứ, giọng Đô trưởng/La thứ, nhịp 3/8, nhịp 6/8, đảo phách.\n- Ôn luyện thuần thục các bài hát và bài đọc nhạc đã học trong năm học Lớp 8.',
        dc: '• [Mã NLS: 1.3.TC2a] Sơ đồ hóa toàn bộ kiến thức Âm nhạc 8 bằng bản đồ tư duy số.\n• [Mã AI: 8.D2.1] Tạo bộ câu hỏi ôn tập thông minh bằng AI để tự luyện tập và đánh giá cá nhân.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp 8',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Âm nhạc Lớp 8 cả năm học.\n- Đánh giá năng lực thực hành nhạc cụ, đọc nhạc và thẩm mỹ âm nhạc của học sinh.',
        dc: '• [Mã NLS: 3.1.TC2b] Ghi hình bài kiểm tra thực hành cuối năm phục vụ lưu trữ học bạ số.\n• [Mã AI: 8.A3.3] Tự đánh giá và đối chiếu năng lực âm nhạc cá nhân theo chuẩn đầu ra CT GDPT 2018.'
      },
      {
        w: 32,
        t: 'Chữa bài & Giao lưu',
        n: 'Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường Lớp 8 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối năm; tuyên dương các học sinh và nhóm có thành tích xuất sắc.\n- Tổ chức buổi giao lưu âm nhạc học đường sôi nổi, gắn kết tinh thần bạn bè.',
        dc: '• [Mã NLS: 2.2.TC2a] Đăng tải hình ảnh và video biểu diễn giao lưu lên trang thông tin của lớp.\n• [Mã AI: 8.C2.1] Trải nghiệm các tính năng AI nhận diện bài hát qua giai điệu ngân nga (Hum to Search).'
      },
      {
        w: 33,
        t: 'Dự án Âm nhạc',
        n: 'Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp 8 (1 tiết)',
        y: '- Dàn dựng và tổ chức chương trình Ngày hội Âm nhạc với chủ đề "Giai điệu kết nối yêu thương".\n- Thể hiện năng lực chỉ huy, dàn dựng, dẫn chương trình và biểu diễn sân khấu chuyên nghiệp.',
        dc: '• [Mã NLS: 3.2.TC2a] Ứng dụng công nghệ số làm video visual sân khấu, trailer giới thiệu Ngày hội Âm nhạc.\n• [Mã AI: 8.D1.1] Ứng dụng AI tinh chỉnh kịch bản sân khấu và hiệu ứng âm thanh ánh sáng cho đêm diễn.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập tổng hợp toàn diện các bài hát, bài đọc nhạc và nhạc cụ cả năm Lớp 8 (1 tiết)',
        y: '- Củng cố kĩ năng hòa tấu nhạc cụ và đọc nhạc chuẩn xác cả năm Lớp 8.\n- Chuẩn bị nền tảng nhạc lí và kĩ năng thực hành vững chắc bước vào Lớp 9.',
        dc: '• [Mã NLS: 1.3.TC2b] Hoàn thiện bộ sưu tập sản phẩm âm nhạc số cá nhân cả năm học.\n• [Mã AI: 8.A1.1] Tìm hiểu các công nghệ AI ứng dụng trong sản xuất âm nhạc chuyên nghiệp hiện đại.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Âm nhạc Lớp 8 cả năm (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Âm nhạc Lớp 8.\n- Định hướng phát triển năng khiếu âm nhạc và nuôi dưỡng thẩm mỹ nghệ thuật lành mạnh.',
        dc: '• [Mã NLS: 2.5.TC2b] Tham gia bình chọn và đóng góp ý kiến nâng cao chất lượng dạy học âm nhạc qua biểu mẫu số.\n• [Mã AI: 8.B2.1] Ý thức về việc tôn trọng bản quyền và văn hóa ứng xử văn minh trong không gian âm nhạc số.'
      }
    ];

    grade8Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        digitalCompetency: item.dc,
        equipment: 'Đàn Organ/Piano điện tử, thanh phách, song loan, sáo Recorder, kèn Melodica, tệp âm thanh mẫu, máy chiếu',
        location: 'Phòng học bộ môn Âm nhạc',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Âm nhạc học đường' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. ÂM NHẠC LỚP 9 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  const grade9Lessons = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Chủ đề 1: Nối vòng tay lớn',
      n: 'Chủ đề 1: Nối vòng tay lớn - Bài 1: Hát Nối vòng tay lớn & Đọc nhạc: Bài đọc nhạc số 1 (1 tiết)',
      y: '- Hát với khí thế hào hùng, gắn kết hàng triệu trái tim bài hát Nối vòng tay lớn (Trịnh Công Sơn).\n- Đọc chuẩn xác Bài đọc nhạc số 1 ở giọng Đô trưởng kết hợp gõ đệm nhịp nhàng.',
      dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và nghe các bản phối khí hợp xướng hoành tráng của bài Nối vòng tay lớn.\n• [Mã AI: 9.C2.1] Trải nghiệm ứng dụng AI phân tích giọng hát và hiển thị độ chính xác nốt nhạc trực quan.'
    },
    {
      w: 2,
      t: 'Chủ đề 1: Nối vòng tay lớn',
      n: 'Chủ đề 1: Nối vòng tay lớn - Bài 2: LTAN: Sơ lược về quãng & TTAN: Nhạc sĩ Huy Du và ca khúc Đường chúng ta đi (1 tiết)',
      y: '- Hiểu định nghĩa quãng (khoảng cách cao độ giữa hai âm thanh), cách xác định tên quãng và tính chất quãng (quãng đúng, quãng trưởng, quãng thứ, quãng tăng, quãng giảm).\n- Nắm được cuộc đời, sự nghiệp của Nhạc sĩ Huy Du và giá trị hào hùng của ca khúc bất hủ Đường chúng ta đi.',
      dc: '• [Mã NLS: 1.3.TC2b] Sử dụng phần mềm chép nhạc số để xây dựng và nghe thử các loại quãng khác nhau.\n• [Mã AI: 9.D1.1] Khám phá công cụ AI nhận diện và luyện tập nghe các loại quãng âm thanh (Ear Training AI).'
    },
    {
      w: 3,
      t: 'Chủ đề 1: Nối vòng tay lớn',
      n: 'Chủ đề 1: Nối vòng tay lớn - Vận dụng – Sáng tạo (1 tiết)',
      y: '- Thực hành biểu diễn bài hát Nối vòng tay lớn kết hợp hòa âm, phụ họa theo nhóm.\n- Tự tin thể hiện sự gắn kết và tinh thần đoàn kết học đường.',
      dc: '• [Mã NLS: 3.2.TC2a] Ghi lại video biểu diễn nhóm và biên tập clip ngắn có chèn hiệu ứng âm nhạc chuyên nghiệp.\n• [Mã AI: 9.D1.1] Sử dụng AI hỗ trợ phối ghép âm thanh và cân bằng âm lượng tự động.'
    },
    {
      w: 4,
      t: 'Chủ đề 2: Khát vọng tuổi trẻ',
      n: 'Chủ đề 2: Khát vọng tuổi trẻ - Bài 3: Hát Bảy sắc cầu vồng & Nghe nhạc Thời thanh niên sôi nổi (1 tiết)',
      y: '- Hát với cảm xúc trong sáng, tươi vui bài Bảy sắc cầu vồng (Nhạc: Hoàng Vân; Lời: Phỏng thơ Như Mai).\n- Lắng nghe và cảm thụ khí thế hào hùng, tràn đầy nhiệt huyết tuổi trẻ của ca khúc nước Nga Thời thanh niên sôi nổi.',
      dc: '• [Mã NLS: 2.1.TC2b] Tìm hiểu hoàn cảnh sáng tác và các bản hòa tấu giao hưởng bài Thời thanh niên sôi nổi.\n• [Mã AI: 9.A1.1] Thảo luận về việc gìn giữ tinh thần nhiệt huyết của con người trong kỉ nguyên số và tự động hóa.'
    },
    {
      w: 5,
      t: 'Chủ đề 2: Khát vọng tuổi trẻ',
      n: 'Chủ đề 2: Khát vọng tuổi trẻ - Bài 4: Nhạc cụ: Recorder hoặc kèn phím & TTAN: Kèn oboe và kèn cor (1 tiết)',
      y: '- Luyện tập hòa tấu giai điệu bài Bảy sắc cầu vồng trên Recorder hoặc kèn phím.\n- Nhận biết hình dáng, âm sắc đượm buồn da diết của kèn Oboe (nhạc cụ hơi gỗ) và âm sắc dũng mãnh, ấm áp của kèn Cor (kèn săn, kèn hơi đồng) trong dàn nhạc giao hưởng.',
      dc: '• [Mã NLS: 1.1.TC2b] Xem clip so sánh âm sắc các loại kèn trong dàn nhạc giao hưởng quốc tế.\n• [Mã AI: 9.C2.1] Trải nghiệm AI mô phỏng âm thanh kèn Oboe và Cor trong phần mềm sáng tác nhạc.'
    },
    {
      w: 6,
      t: 'Chủ đề 2: Khát vọng tuổi trẻ',
      n: 'Chủ đề 2: Khát vọng tuổi trẻ - Vận dụng – Sáng tạo (1 tiết)',
      y: '- Biểu diễn bài hát Bảy sắc cầu vồng kết hợp hòa tấu kèn phím/recorder và vận động cơ thể.\n- Thể hiện sự sáng tạo và năng lượng tích cực của tuổi học trò.',
      dc: '• [Mã NLS: 3.2.TC2a] Sản xuất video clip biểu diễn nghệ thuật của nhóm đạt chất lượng cao.\n• [Mã AI: 9.D1.1] Ứng dụng AI tinh chỉnh màu sắc và ánh sáng video cho phù hợp với chủ đề Cầu vồng.'
    },
    {
      w: 7,
      t: 'Chủ đề 3: Kỉ niệm dưới mái trường',
      n: 'Chủ đề 3: Kỉ niệm dưới mái trường - Bài 5: Hát Tháng năm học trò & TTAN: Một số thể loại nhạc đàn (1 tiết)',
      y: '- Hát với cảm xúc lắng đọng, bồi hồi bài hát Tháng năm học trò (Nguyễn Đức Trung).\n- Nắm được các thể loại khí nhạc (nhạc đàn) tiêu biểu: Khúc dạo đầu (Prelude), Bản Dạ khúc (Nocturne), Bản Xô-nát (Sonata), Bản Giao hưởng (Symphony), Bản Hòa tấu (Concerto).',
      dc: '• [Mã NLS: 1.1.TC2d] Phân loại và tạo danh sách phát các thể loại nhạc đàn trên nền tảng nghe nhạc số.\n• [Mã AI: 9.C4.1] Khám phá cách AI phân tích cấu trúc các chương trong bản Giao hưởng cổ điển.'
    },
    {
      w: 8,
      t: 'Chủ đề 3: Kỉ niệm dưới mái trường',
      n: 'Chủ đề 3: Kỉ niệm dưới mái trường - Bài 6: LTAN: Sơ lược về dịch giọng & Đọc nhạc: Bài đọc nhạc số 2 (1 tiết)',
      y: '- Hiểu khái niệm dịch giọng (chuyển dịch độ cao của toàn bộ bản nhạc sang một giọng mới phù hợp với tầm cử giọng hát người biểu diễn).\n- Đọc chuẩn xác Bài đọc nhạc số 2 và biết cách dịch giọng đơn giản.',
      dc: '• [Mã NLS: 1.3.TC2a] Thực hành thao tác dịch giọng tự động trên phần mềm chép nhạc số (Transpose feature).\n• [Mã AI: 9.D1.1] Trải nghiệm công cụ AI tự động phát hiện cự ly âm vực của người dùng và đề xuất giọng dịch tối ưu.'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp 9',
      y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 1 đến Tuần 8.\n- Đánh giá năng lực nhạc lí nâng cao (quãng, dịch giọng, nhạc đàn) và kĩ năng biểu diễn.',
      dc: '• [Mã NLS: 3.1.TC2b] Ghi hình bài kiểm tra thực hành lưu vào học bạ số của học sinh.\n• [Mã AI: 9.A3.1] Thực hiện đánh giá trung thực, phát huy tinh thần tự học và tự hoàn thiện bản thân.'
    },
    {
      w: 10,
      t: 'Chủ đề 3: Kỉ niệm dưới mái trường',
      n: 'Chủ đề 3: Kỉ niệm dưới mái trường - Vận dụng – Sáng tạo (1 tiết)',
      y: '- Dàn dựng tiết mục tri ân thầy cô và mái trường THCS bằng hình thức tốp ca kết hợp đệm đàn.\n- Thể hiện lòng biết ơn và tình cảm gắn bó với bạn bè, thầy cô.',
      dc: '• [Mã NLS: 3.2.TC2a] Biên tập video kỉ niệm mái trường THCS với nhạc nền bài Tháng năm học trò.\n• [Mã AI: 9.C2.1] Dùng AI tạo video hoạt hình anime minh họa cho kỉ niệm tuổi học trò.'
    },
    {
      w: 11,
      t: 'Chủ đề 4: Giai điệu quê hương',
      n: 'Chủ đề 4: Giai điệu quê hương - Bài 7: Hát Lí ngựa ô (Dân ca Nam Bộ) & Nghe nhạc Lí ngựa ô (Dân ca Trung Bộ) (1 tiết)',
      y: '- Hát đúng giai điệu rộn ràng, dí dỏm, phóng khoáng của bài Lí ngựa ô (Dân ca Nam Bộ).\n- Lắng nghe và so sánh sự khác biệt về giai điệu, phong cách giữa Lí ngựa ô Nam Bộ và Lí ngựa ô Trung Bộ (Huế).',
      dc: '• [Mã NLS: 1.2.TC2a] So sánh hai phong cách dân ca vùng miền trên tư liệu nghe nhìn số hóa.\n• [Mã AI: 9.C4.1] Khám phá cách AI so sánh tần số và cao độ của các làn điệu dân ca khác nhau.'
    },
    {
      w: 12,
      t: 'Chủ đề 4: Giai điệu quê hương',
      n: 'Chủ đề 4: Giai điệu quê hương - Bài 8: TTAN: Nhã nhạc Cung đình Huế (1 tiết)',
      y: '- Nắm được lịch sử, quy mô dàn nhạc (Đại nhạc, Nhã nhạc), vai trò và giá trị đỉnh cao của Nhã nhạc Cung đình Huế - Kiệt tác Di sản phi vật thể đại diện của nhân loại đầu tiên của Việt Nam.',
      dc: '• [Mã NLS: 1.1.TC2b] Khám phá không gian Cung đình Huế và dàn nhạc Nhã nhạc qua công nghệ thực tế ảo VR 360.\n• [Mã AI: 9.A1.1] Nhận thức về giá trị vô giá của di sản âm nhạc bác học cổ truyền do nghệ nhân tiền bối gìn giữ.'
    },
    {
      w: 13,
      t: 'Chủ đề 4: Giai điệu quê hương',
      n: 'Chủ đề 4: Giai điệu quê hương - Bài 8: Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
      y: '- Luyện tập hòa tấu giai điệu bài Lí ngựa ô trên Recorder hoặc kèn phím kết hợp gõ đệm phách.\n- Hoàn thành hoạt động Vận dụng - Sáng tạo mang đậm nét văn hóa truyền thống.',
      dc: '• [Mã NLS: 3.2.TC2a] Thu âm và biên tập clip hòa tấu nhạc cụ dân gian của nhóm.\n• [Mã AI: 9.D1.1] Ứng dụng AI tạo hiệu ứng âm thanh tiếng vó ngựa gõ đệm sinh động cho bài biểu diễn.'
    },
    {
      w: 14,
      t: 'Ôn tập học kì 1',
      n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc cụ Chủ đề 1 & Chủ đề 2 (1 tiết)',
      y: '- Củng cố kĩ năng biểu diễn bài Nối vòng tay lớn, Bảy sắc cầu vồng.\n- Đọc thuần thục Bài đọc nhạc số 1 và hòa tấu nhạc cụ nhuần nhuyễn.',
      dc: '• [Mã NLS: 1.3.TC2b] Tổ chức kho tài liệu học tập âm nhạc HK1 trên ổ đĩa trực tuyến cá nhân.\n• [Mã AI: 9.A2.2] Đánh giá khách quan chất lượng các bản thu cá nhân bằng phần mềm phân tích giọng hát.'
    },
    {
      w: 15,
      t: 'Ôn tập học kì 1',
      n: 'Ôn tập học kì 1: Ôn tập các bài hát, bài đọc nhạc và nhạc lí Chủ đề 3 & Chủ đề 4 (1 tiết)',
      y: '- Ôn luyện bài hát Tháng năm học trò, Lí ngựa ô; Bài đọc nhạc số 2.\n- Củng cố kiến thức về quãng, dịch giọng, các thể loại nhạc đàn và Nhã nhạc Cung đình Huế.',
      dc: '• [Mã NLS: 2.2.TC2c] Tham gia đấu trường tri thức âm nhạc trực tuyến giữa các lớp khối 9.\n• [Mã AI: 9.D1.1] Tương tác với chatbot AI giải đáp các câu hỏi hóc búa về nhạc lí nâng cao.'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Âm nhạc Lớp 9',
      y: '- Đánh giá tổng hợp toàn diện kết quả học tập môn Âm nhạc Lớp 9 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực nhạc lí, kĩ năng biểu diễn và cảm thụ nghệ thuật của học sinh cuối cấp.',
      dc: '• [Mã NLS: 3.1.TC2b] Ghi hình và lưu trữ bài kiểm tra vào hồ sơ học sinh THCS.\n• [Mã AI: 9.A3.1] Nâng cao ý thức trách nhiệm và tính tự giác trung thực trong đánh giá.'
    },
    {
      w: 17,
      t: 'Chữa bài & Ôn tập',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Âm nhạc Lớp 9 (1 tiết)',
      y: '- Nhận xét, chữa bài kiểm tra cuối học kì 1; phân tích các ưu điểm và điểm cần hoàn thiện.\n- Rèn luyện kĩ năng thanh nhạc và nâng cao chất lượng hòa tấu.',
      dc: '• [Mã NLS: 5.4.TC2a] Tự đánh giá và xây dựng kế hoạch khắc phục điểm hạn chế qua bảng theo dõi số.\n• [Mã AI: 9.D1.1] Nhận lộ trình bài tập tự luyện nâng cao từ hệ thống trợ lí học tập AI.'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Sơ kết Học kỳ 1 & Biểu diễn báo cáo âm nhạc học đường HK1 Lớp 9 (1 tiết)',
      y: '- Trình diễn báo cáo các tiết mục xuất sắc; sơ kết phong trào học tập âm nhạc HK1 của khối 9.\n- Động viên, khích lệ tinh thần học tập hướng tới học kì cuối cùng của cấp THCS.',
      dc: '• [Mã NLS: 3.2.TC2a] Biên tập video gala âm nhạc học đường HK1 khối 9 chất lượng cao.\n• [Mã AI: 9.A1.1] Ứng dụng AI xử lý âm thanh vòm và cân bằng dải tần cho video báo cáo.'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Chủ đề 5: Trái đất xanh',
      n: 'Chủ đề 5: Trái đất xanh - Bài 9: Hát Ngôi nhà của chúng ta & Nghe nhạc Tác phẩm Mùa xuân (1 tiết)',
      y: '- Hát với cảm xúc tha thiết, tràn đầy tình yêu Trái Đất bài Ngôi nhà của chúng ta (Hình Phước Liên).\n- Lắng nghe và cảm nhận giai điệu rạng ngời của Bản Concerto Mùa xuân (La Primavera trong Bộ bốn mùa - The Four Seasons của Antonio Vivaldi).',
      dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và thưởng thức trọn vẹn chương 1 tác phẩm Mùa xuân của A.Vivaldi qua dàn nhạc giao hưởng.\n• [Mã AI: 9.C2.1] Trải nghiệm ứng dụng AI hiển thị trực quan cấu trúc bè đàn vĩ cầm trong bản Concerto.'
    },
    {
      w: 20,
      t: 'Chủ đề 5: Trái đất xanh',
      n: 'Chủ đề 5: Trái đất xanh - Bài 10: LTAN: Sơ lược về hợp âm & Đọc nhạc: Bài đọc nhạc số 3 (1 tiết)',
      y: '- Hiểu rõ khái niệm hợp âm (sự kết hợp từ 3 âm thanh trở lên vang lên cùng lúc theo quy luật quãng 3), cấu trúc hợp âm 3 (hợp âm 3 trưởng, hợp âm 3 thứ) và hợp âm 7.\n- Đọc chuẩn xác Bài đọc nhạc số 3 có rải hợp âm 3.',
      dc: '• [Mã NLS: 1.3.TC2a] Sử dụng phần mềm chép nhạc số để xây dựng và nghe thử các loại hợp âm 3 và hợp âm 7.\n• [Mã AI: 9.D1.1] Khám phá công cụ AI gợi ý tiến trình hợp âm (chord progression) cho giai điệu bài hát.'
    },
    {
      w: 21,
      t: 'Chủ đề 5: Trái đất xanh',
      n: 'Chủ đề 5: Trái đất xanh - Vận dụng – Sáng tạo (Biểu diễn bảo vệ hành tinh xanh) (1 tiết)',
      y: '- Biểu diễn bài hát Ngôi nhà của chúng ta kết hợp hòa tấu nhạc cụ và thuyết trình thông điệp bảo vệ môi trường.\n- Nâng cao ý thức công dân toàn cầu gìn giữ hành tinh xanh.',
      dc: '• [Mã NLS: 3.2.TC2a] Ghi hình bài biểu diễn và biên tập video tuyên truyền môi trường trên mạng xã hội học đường.\n• [Mã AI: 9.D1.1] Dùng AI tạo các slide thuyết trình trực quan về biến đổi khí hậu lồng ghép vào tiết mục.'
    },
    {
      w: 22,
      t: 'Chủ đề 6: Tiếng hát hoà bình',
      n: 'Chủ đề 6: Tiếng hát hoà bình - Bài 11: Hát Nụ cười & Nghe nhạc Chúng em cần hoà bình (1 tiết)',
      y: '- Hát với cảm xúc trong sáng, lạc quan, rạng rỡ bài hát thiếu nhi quốc tế Nụ cười (Nhạc Nga: V. Shainsky; Phỏng lời Việt: Phạm Tuyên).\n- Cảm nhận khát khao hòa bình mãnh liệt của trẻ em thế giới qua bài hát Chúng em cần hoà bình (Hoàng Long - Hoàng Lân).',
      dc: '• [Mã NLS: 1.1.TC2c] Nghe và tìm hiểu về các ca khúc thiếu nhi Nga nổi tiếng thế giới qua tài liệu đa phương tiện.\n• [Mã AI: 9.B2.3] Thảo luận về việc dùng công nghệ số và AI lan tỏa thông điệp hòa bình, chống bạo lực mạng.'
    },
    {
      w: 23,
      t: 'Chủ đề 6: Tiếng hát hoà bình',
      n: 'Chủ đề 6: Tiếng hát hoà bình - Bài 12: Nhạc cụ: Recorder hoặc kèn phím & TTAN: Đàn đá và đàn đáy (1 tiết)',
      y: '- Luyện tập hòa tấu giai điệu bài Nụ cười trên Recorder hoặc kèn phím.\n- Nhận biết cấu tạo, nguồn gốc tiền sử và âm sắc nguyên sơ, vang vọng của Đàn Đá; nắm được cấu tạo 3 dây độc đáo và vai trò của Đàn Đáy trong nghệ thuật Ca Trù.',
      dc: '• [Mã NLS: 1.2.TC2b] Xem clip nghệ nhân biểu diễn Đàn Đá Tây Nguyên và nghệ nhân Ca Trù gảy Đàn Đáy.\n• [Mã AI: 9.A1.1] Khẳng định giá trị độc bản của Đàn Đá và Đàn Đáy Việt Nam trong kho tàng nhạc khí nhân loại.'
    },
    {
      w: 24,
      t: 'Chủ đề 6: Tiếng hát hoà bình',
      n: 'Chủ đề 6: Tiếng hát hoà bình - Vận dụng – Sáng tạo (1 tiết)',
      y: '- Biểu diễn bài hát Nụ cười kết hợp đệm nhạc cụ gõ và phụ họa theo phong cách hợp xướng thiếu nhi.\n- Lan tỏa niềm vui, nụ cười và năng lượng tích cực.',
      dc: '• [Mã NLS: 3.2.TC2a] Biên tập video ca nhạc Nụ cười của tập thể lớp làm quà tặng kỉ niệm.\n• [Mã AI: 9.D1.1] Dùng AI hỗ trợ lọc tạp âm sân khấu và tối ưu hóa âm thanh giọng hát tập thể.'
    },
    {
      w: 25,
      t: 'Chủ đề 7: Âm nhạc nước ngoài',
      n: 'Chủ đề 7: Âm nhạc nước ngoài - Bài 13: Hát Donna Donna & TTAN: Nhạc sĩ Franz Schubert và Serenade (1 tiết)',
      y: '- Hát với cảm xúc tha thiết, man mác buồn bài hát Donna Donna (Nhạc: S. Secunda; Lời Việt: Phạm Trọng Cầu).\n- Nắm được cuộc đời "ông vua ca khúc" Franz Schubert và tuyệt tác Khúc ca ban chiều (Serenade / Ständchen).',
      dc: '• [Mã NLS: 1.1.TC2b] Thưởng thức tác phẩm Serenade qua giọng hát thính phòng và tiếng đàn guitar/violin.\n• [Mã AI: 9.C2.1] Khám phá cách AI phân tích sự chuyển điệu tinh tế trong các ca khúc nghệ thuật (Lied) của Schubert.'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp 9',
      y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Hát, Đọc nhạc, Nhạc cụ và Nhạc lí từ Tuần 19 đến Tuần 25.\n- Đánh giá khả năng cảm thụ hợp âm, nhạc cụ dân tộc và năng lực biểu diễn ca khúc nước ngoài.',
      dc: '• [Mã NLS: 3.1.TC2b] Ghi âm và lưu trữ bài kiểm tra vào hồ sơ đánh giá năng lực số của học sinh.\n• [Mã AI: 9.A3.1] Thực hiện tự kiểm chứng và nghiêm túc tuân thủ quy chế kiểm tra.'
    },
    {
      w: 27,
      t: 'Chủ đề 7: Âm nhạc nước ngoài',
      n: 'Chủ đề 7: Âm nhạc nước ngoài - Bài 14: LTAN: Một số hợp âm của giọng Đô trưởng và giọng La thứ & Đọc nhạc: Bài đọc nhạc số 4 (1 tiết)',
      y: '- Nhận biết và bấm được các hợp âm cơ bản của giọng Đô trưởng (C, Dm, Em, F, G, Am) và giọng La thứ (Am, Bdim, C, Dm, Em, F, G/E7) trên đàn phím hoặc đàn guitar.\n- Đọc chuẩn xác Bài đọc nhạc số 4 có ứng dụng hợp âm đệm.',
      dc: '• [Mã NLS: 1.3.TC2b] Sử dụng phần mềm chép nhạc để lập bảng tra cứu thế bấm hợp âm giọng Đô trưởng và La thứ.\n• [Mã AI: 9.D1.1] Trải nghiệm AI tự động bắt hợp âm cho file âm thanh bài hát bất kỳ.'
    },
    {
      w: 28,
      t: 'Chủ đề 8: Một thời để nhớ',
      n: 'Chủ đề 8: Một thời để nhớ - Bài 15: Hát Một thời để nhớ & Nghe nhạc Khi tóc thầy bạc trắng (1 tiết)',
      y: '- Hát với cảm xúc bồi hồi, tha thiết, khắc sâu tình bạn bài hát Một thời để nhớ (Nguyễn Văn Hiên).\n- Lắng nghe và cảm nhận lòng tri ân sâu nặng với thầy cô qua ca khúc Khi tóc thầy bạc trắng (Trần Đức).',
      dc: '• [Mã NLS: 2.5.TC2b] Tìm kiếm và sưu tầm các tác phẩm âm nhạc về thời học sinh cuối cấp trên kho tư liệu số.\n• [Mã AI: 9.A1.1] Khẳng định cảm xúc thiêng liêng về tình thầy trò của con người là giá trị nhân văn cốt lõi không thể thay thế.'
    },
    {
      w: 29,
      t: 'Chủ đề 8: Một thời để nhớ',
      n: 'Chủ đề 8: Một thời để nhớ - Bài 16: Nhạc cụ: Recorder hoặc kèn phím & Vận dụng – Sáng tạo (1 tiết)',
      y: '- Luyện tập hòa tấu giai điệu bài Một thời để nhớ trên Recorder hoặc kèn phím.\n- Sáng tạo lời ca tạm biệt mái trường THCS hoặc hoạt cảnh âm nhạc tri ân.',
      dc: '• [Mã NLS: 3.2.TC2a] Biên tập video clip kỉ yếu âm nhạc của lớp 9 trước khi ra trường.\n• [Mã AI: 9.D1.1] Sử dụng AI hỗ trợ phối nhạc nền và thiết kế trình chiếu kỉ yếu âm nhạc số.'
    },
    {
      w: 30,
      t: 'Ôn tập cuối năm',
      n: 'Ôn tập toàn diện kiến thức âm nhạc toàn cấp THCS (Lớp 6 - 9) (1 tiết)',
      y: '- Hệ thống hóa toàn bộ kiến thức nhạc lí: Thuộc tính âm thanh, nhịp 2/4, 3/4, 4/4, 3/8, 6/8, gam trưởng/thứ, quãng, hợp âm, dịch giọng, đảo phách.\n- Hoàn thiện kĩ năng hát, đọc nhạc và hòa tấu nhạc cụ chuẩn bị kiểm tra cuối năm.',
      dc: '• [Mã NLS: 1.3.TC2b] Xây dựng cổng thông tin số cá nhân tổng kết toàn bộ kiến thức âm nhạc 4 năm THCS.\n• [Mã AI: 9.D1.1] Sử dụng AI tổng hợp sơ đồ tri thức âm nhạc toàn diện cấp THCS.'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Âm nhạc Lớp 9',
      y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn đầu ra môn Âm nhạc cấp THCS theo Chương trình GDPT 2018.\n- Đánh giá toàn diện phẩm chất, năng lực thẩm mỹ âm nhạc và khả năng thực hành nghệ thuật.',
      dc: '• [Mã NLS: 3.2.TC2a] Lưu trữ toàn bộ hồ sơ đánh giá và video thi thực hành vào học bạ điện tử cấp THCS.\n• [Mã AI: 9.A3.1] Khẳng định sự trưởng thành về năng lực tự chủ và trách nhiệm trong học tập.'
    },
    {
      w: 32,
      t: 'Chữa bài & Giao lưu',
      n: 'Chữa bài kiểm tra cuối HK2 & Giao lưu âm nhạc học đường Lớp 9 (1 tiết)',
      y: '- Nhận xét, đánh giá kết quả kiểm tra cuối năm; tuyên dương thành tích của học sinh toàn khóa.\n- Tổ chức buổi giao lưu âm nhạc chia tay mái trường THCS chan chứa tình cảm thầy trò, bè bạn.',
      dc: '• [Mã NLS: 2.2.TC2a] Đăng tải video các tiết mục biểu diễn chia tay lên trang truyền thông của trường.\n• [Mã AI: 9.C2.1] Trải nghiệm trò chơi âm nhạc AI tổng kết 4 năm học THCS.'
    },
    {
      w: 33,
      t: 'Dự án Âm nhạc',
      n: 'Dự án Âm nhạc: Biểu diễn báo cáo Ngày hội Âm nhạc học sinh THCS Lớp 9 (1 tiết)',
      y: '- Tổ chức và biểu diễn chương trình Gala Âm nhạc tốt nghiệp THCS "Khát vọng tuổi 15".\n- Thể hiện sự tự tin, bản lĩnh sân khấu, năng lực hợp tác và kĩ năng tổ chức sự kiện nghệ thuật.',
      dc: '• [Mã NLS: 3.2.TC2a] Ứng dụng công nghệ số làm video visual sân khấu, trailer giới thiệu Gala Tốt nghiệp THCS.\n• [Mã AI: 9.D1.1] Sử dụng AI hỗ trợ phối khí âm thanh, tinh chỉnh kịch bản và đạo diễn chương trình.'
    },
    {
      w: 34,
      t: 'Ôn tập tổng hợp',
      n: 'Ôn tập tổng hợp và định hướng âm nhạc cấp THPT (1 tiết)',
      y: '- Củng cố, đúc kết các năng lực cảm thụ và thực hành âm nhạc cốt lõi đã tích lũy trong 4 năm THCS.\n- Định hướng lựa chọn môn học Nghệ thuật (Âm nhạc) ở cấp THPT và phát triển năng khiếu trọn đời.',
      dc: '• [Mã NLS: 1.3.TC2b] Đóng gói toàn bộ hồ sơ năng lực âm nhạc số cá nhân phục vụ chuyển cấp THPT.\n• [Mã AI: 9.A1.1] Khẳng định vai trò đồng hành sáng tạo của AI và vị thế trung tâm của con người trong thưởng thức nghệ thuật.'
    },
    {
      w: 35,
      t: 'Tổng kết năm học',
      n: 'Tổng kết năm học & Đánh giá xếp loại môn Âm nhạc Lớp 9 cả năm (1 tiết)',
      y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Âm nhạc Lớp 9 và toàn khóa THCS.\n- Chúc mừng học sinh hoàn thành chương trình môn Âm nhạc cấp THCS và sẵn sàng bước vào bậc THPT.',
      dc: '• [Mã NLS: 2.1.TC2b] Lưu trữ và chia sẻ kỉ yếu âm nhạc điện tử của khối 9 lên thư viện số nhà trường.\n• [Mã AI: 9.D1.1] Lan tỏa tình yêu âm nhạc và năng lực số vững vàng bước vào tương lai.'
    }
  ];

  grade9Lessons.forEach(item => {
    list.push({
      week: item.w,
      topic: item.t,
      name: item.n,
      periods: 1,
      yccd: item.y,
      digitalCompetency: item.dc,
      equipment: 'Đàn Organ/Piano điện tử, thanh phách, song loan, sáo Recorder, kèn Melodica, tệp âm thanh mẫu, máy chiếu',
      location: 'Phòng học bộ môn Âm nhạc',
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Âm nhạc học đường' : ''
    });
  });

  return list;
}
