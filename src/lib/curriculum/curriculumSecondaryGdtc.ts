import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Giáo dục thể chất (GDTC) THCS (Lớp 6, 7, 8, 9)
 * Khung chuẩn: 70 tiết/năm = 2 tiết/tuần x 35 tuần
 * 100% chuẩn SGK Kết nối tri thức với cuộc sống & tài liệu gdtc-thcs.md
 * Các tuần kiểm tra, đánh giá định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (2 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (2 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (2 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (2 tiết)
 * - Tuần 35: Tổng kết năm học (2 tiết)
 */
export function getGdtcSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: GIÁO DỤC THỂ CHẤT (35 TUẦN X 2 TIẾT = 70 TIẾT)
  // Bám sát 100% danh mục bài học SGK GDTC 6 Kết nối tri thức trong gdtc-thcs.md
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Kiến thức chung & Chạy cự li ngắn (60 m)',
        n: 'Phần một: Kiến thức chung - Chế độ dinh dưỡng trong luyện tập thể dục thể thao (1 tiết) & Phần hai: Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 1: Các động tác bổ trợ kĩ thuật chạy cự li ngắn (1 tiết)',
        y: '- Nêu được khái quát các yếu tố ảnh hưởng đến sức khỏe và sự phát triển thể chất (Dinh dưỡng, Vận động, Nghỉ ngơi).\n- Thực hiện đúng các động tác bổ trợ: Chạy bước nhỏ, Chạy nâng cao đùi, Chạy gót chạm mông.',
        eq: 'Tranh ảnh dinh dưỡng thể thao, còi, đồng hồ bấm giây',
        nls: '1.1.TC1b',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm thông tin chế độ dinh dưỡng và tháp dinh dưỡng thể thao trên môi trường số.\n• [Mã AI: 6.C1.1] Khám phá ứng dụng AI nhận diện và đếm số bước chân (Pedometer AI) khi vận động.'
      },
      {
        w: 2,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 1: Các động tác bổ trợ kĩ thuật chạy cự li ngắn (tiếp) (1 tiết) & Bài 2: Chạy giữa quãng (1 tiết)',
        y: '- Thực hiện thuần thục các động tác bổ trợ chạy ngắn với biên độ chuẩn xác.\n- Nắm vững và thực hiện đúng kỹ thuật chạy giữa quãng: đặt nửa trước bàn chân tiếp đất, thân người hơi ngả về trước, phối hợp đánh tay nhịp nhàng.',
        eq: 'Còi thể thao, đường chạy 60m thẳng, nón chóp nón đánh dấu cự li',
        nls: '5.2.TC1b',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng thiết bị số (đồng hồ bấm giây điện tử, camera smartphone) ghi lại nhịp bước chạy giữa quãng.\n• [Mã AI: 6.C2.2] Xem mô phỏng AI phân tích góc đánh tay và góc ngả thân người chuẩn xác.'
      },
      {
        w: 3,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 3: Xuất phát và chạy lao sau xuất phát (2 tiết)',
        y: '- Nắm vững và thực hiện đúng các khẩu lệnh: "Vào chỗ", "Sẵn sàng", "Chạy!".\n- Thực hiện đúng kỹ thuật xuất phát cao và duy trì độ nghiêng thân người trong giai đoạn chạy lao tăng tốc độ.',
        eq: 'Còi thể thao, cờ hiệu xuất phát, đường chạy 60m',
        nls: '2.1.TC1b',
        ai: '6.A1.1',
        dc: '• [Mã NLS: 2.2.TC1c] Tương tác qua video mẫu chuẩn kỹ thuật xuất phát cao trên hệ thống học liệu số LMS.\n• [Mã AI: 6.A1.1] Nhận biết cảm biến âm thanh AI hỗ trợ báo hiệu xuất phát tự động trong thi đấu.'
      },
      {
        w: 4,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 4: Chạy về đích & Phối hợp các giai đoạn chạy cự li ngắn (60 m) (2 tiết)',
        y: '- Nắm vững kỹ thuật chạy về đích: duy trì tốc độ cực đại, chủ động gập thân đánh đích bằng ngực hoặc vai, không nhảy cắm đích.\n- Phối hợp liên hoàn và nhuần nhuyễn 4 giai đoạn: Xuất phát, Chạy lao, Chạy giữa quãng và Về đích 60m.',
        eq: 'Dây đích, còi, đồng hồ bấm giây điện tử, đường chạy 60m',
        nls: '5.3.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 5.3.TC1a] Sử dụng ứng dụng đo thời gian phản xạ và tính toán vận tốc trung bình trên đường chạy 60m.\n• [Mã AI: 6.D1.1] Ứng dụng AI phân tích thời gian chạm đích từ video quay chậm (Slow-motion AI Analysis).'
      },
      {
        w: 5,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 1: Bài thể dục liên hoàn (từ nhịp 1 đến nhịp 11) (2 tiết)',
        y: '- Thuộc tên, thứ tự và thực hiện đúng biên độ động tác từ nhịp 1 đến nhịp 11 của Bài thể dục liên hoàn lớp 6.\n- Động tác dứt khoát, tay chân duỗi thẳng, thể hiện tính nhịp điệu và phối hợp vận động.',
        eq: 'Loa kéo Bluetooth phát nhạc thể dục, thảm tập thể dục',
        nls: '3.2.TC1a',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Quay video thực hành bài tập thể dục nhóm và lưu trữ lên thư mục số Google Drive/LMS.\n• [Mã AI: 6.C1.1] Sử dụng AI nhận diện tư thế (Pose Estimation AI) kiểm tra độ chính xác của góc giơ tay.'
      },
      {
        w: 6,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 2: Bài thể dục liên hoàn (từ nhịp 12 đến nhịp 23) (2 tiết)',
        y: '- Tiếp tục học thuộc và thực hiện chính xác các động tác từ nhịp 12 đến nhịp 23 (các nhịp vặn mình, lườn, gập bụng, nghiêng thân).\n- Phối hợp liên kết mượt mà từ nhịp 1 đến nhịp 23 theo nhịp đếm hoặc nhạc nền.',
        eq: 'Loa phát nhạc, sân tập thoáng mát, thảm thể dục',
        nls: '2.1.TC1b',
        ai: '6.B1.1',
        dc: '• [Mã NLS: 2.4.TC1a] Hợp tác nhóm tổ chức tập luyện đồng diễn theo nhịp nhạc trên nền tảng âm thanh số.\n• [Mã AI: 6.B1.1] Đánh giá tính thẩm mỹ và nhịp điệu động tác qua gợi ý chấm điểm tự động từ công cụ hỗ trợ.'
      },
      {
        w: 7,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 3: Bài thể dục liên hoàn (từ nhịp 24 đến nhịp 30) & Hoàn thiện toàn bài (2 tiết)',
        y: '- Nắm vững các động tác nhảy bật, điều hòa từ nhịp 24 đến nhịp 30; hoàn thiện trọn vẹn 30 nhịp bài thể dục liên hoàn lớp 6.\n- Thể hiện tinh thần tập thể, đồng đều, nhịp nhàng và chuẩn xác về hướng, biên độ.',
        eq: 'Loa âm thanh, nhạc bài tập thể dục liên hoàn lớp 6 chuẩn',
        nls: '3.2.TC1a',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 3.2.TC1a] Ghép nhạc nền kỹ thuật số phù hợp với nhịp độ động tác của bài thể dục liên hoàn 30 nhịp.\n• [Mã AI: 6.C2.2] Ứng dụng trợ lý ảo đếm nhịp thông minh tự động điều chỉnh tốc độ đếm theo năng lực học sinh.'
      },
      {
        w: 8,
        t: 'Ôn tập tổng hợp & Kiểm tra thể lực',
        n: 'Ôn tập toàn diện Bài thể dục liên hoàn (30 nhịp) & Luyện tập nâng cao thành tích Chạy cự li ngắn 60m (2 tiết)',
        y: '- Rèn luyện độ thuần thục bài thể dục liên hoàn 30 nhịp và kỹ thuật chạy ngắn 60m.\n- Chuẩn bị tâm lí thi đấu tự tin, kỷ luật và tác phong sẵn sàng cho bài kiểm tra giữa kỳ 1.',
        eq: 'Còi, đồng hồ bấm giây, vạch xuất phát, loa nhạc',
        nls: '1.3.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 1.3.TC1b] Nhập số liệu thành tích chạy 60m và điểm kiểm tra thử vào bảng tính số theo dõi tiến độ.\n• [Mã AI: 6.D1.1] Sử dụng biểu đồ số dự báo mức độ sẵn sàng thể lực trước kỳ kiểm tra định kỳ.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục thể chất 6 (Bài thể dục liên hoàn 30 nhịp & Chạy cự li ngắn 60m) (2 tiết)',
        y: '- Đánh giá mức độ thực hiện đúng kỹ thuật Bài thể dục liên hoàn 30 nhịp và thành tích chạy cự li ngắn 60m theo chuẩn quy định.\n- Nâng cao tính kỷ luật, ý thức trung thực và tinh thần cố gắng vượt qua giới hạn bản thân.',
        eq: 'Biểu điểm kiểm tra, đồng hồ bấm giây chuyên dụng, còi, dây đích',
        nls: '1.2.TC1a',
        ai: '6.A1.3',
        dc: '• [Mã NLS: 1.2.TC1b] Số hóa và tra cứu bảng tiêu chuẩn đánh giá xếp loại thể lực học sinh lớp 6.\n• [Mã AI: 6.A1.3] Đối chiếu dữ liệu bấm giờ kỹ thuật số với kết quả ghi nhận của trọng tài đảm bảo công bằng.'
      },
      {
        w: 10,
        t: 'Chủ đề 2. Ném bóng',
        n: 'Chủ đề 2. Ném bóng - Bài 1: Các động tác bổ trợ kĩ thuật ném bóng (2 tiết)',
        y: '- Nắm vững cách cầm bóng bằng các ngón tay và tư thế chuẩn bị ném bóng cơ bản.\n- Thực hiện đúng các động tác bổ trợ: đứng mặt/nghiêng hướng ném ném bóng, giương cung xoay thân.',
        eq: 'Bóng ném 150g, còi, sân ném bóng an toàn có lưới chắn',
        nls: '4.3.TC1a',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 4.1.TC1b] Xem infographic hướng dẫn an toàn khu vực ném bóng và quy tắc nhặt bóng trên sân tập.\n• [Mã AI: 6.C1.1] Mô phỏng 3D quỹ đạo bay tối ưu của quả bóng ném theo góc ném 38-42 độ.'
      },
      {
        w: 11,
        t: 'Chủ đề 2. Ném bóng',
        n: 'Chủ đề 2. Ném bóng - Bài 2: Ra sức cuối cùng và giữ thăng bằng (2 tiết)',
        y: '- Thực hiện đúng kỹ thuật ra sức cuối cùng: đạp chân sau, xoay hông, ưỡn ngực tạo tư thế cánh cung, gập cổ tay ném bóng mạnh mẽ về trước - lên cao.\n- Thực hiện động tác nhảy đổi chân giữ thăng bằng sau khi bóng rời tay, không phạm quy vạch ném.',
        eq: 'Bóng ném tiêu chuẩn 150g, thước dây đo thành tích, vạch ném',
        nls: '5.2.TC1b',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng thước đo laser kỹ thuật số hoặc ứng dụng đo khoảng cách thành tích ném bóng.\n• [Mã AI: 6.C2.2] Ứng dụng AI phân tích góc độ ra sức cuối cùng từ ảnh chụp chuyển động (Burst mode AI).'
      },
      {
        w: 12,
        t: 'Chủ đề 2. Ném bóng',
        n: 'Chủ đề 2. Ném bóng - Bài 3: Chuẩn bị chạy đà và chạy đà & Phối hợp các giai đoạn ném bóng (2 tiết)',
        y: '- Xác định được cự li chạy đà phù hợp (4 bước chéo); nhịp điệu chạy đà nhịp nhàng, tăng dần tốc độ.\n- Phối hợp liên hoàn: Chạy đà $\\rightarrow$ Đặt chân giậm $\\rightarrow$ Ra sức cuối cùng $\\rightarrow$ Giữ thăng bằng ném bóng xa đạt thành tích tốt.',
        eq: 'Bóng ném, thước dây, cờ hiệu đánh dấu thành tích ném bóng',
        nls: '2.5.TC1b',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 2.1.TC1b] Làm việc nhóm phân công quay video và đo đạc cự li ném bóng của các thành viên.\n• [Mã AI: 6.D1.1] Trợ lý AI gợi ý điều chỉnh số bước đà dựa trên chiều cao và sải tay học sinh.'
      },
      {
        w: 13,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 1: Các động tác bổ trợ kĩ thuật chạy cự li trung bình (2 tiết)',
        y: '- Thực hiện đúng các động tác bổ trợ phát triển sức bền: chạy chậm phối hợp nhịp thở (2 bước hít vào - 2 bước thở ra).\n- Nắm vững kỹ thuật thả lỏng cơ bắp, chạy nhẹ nhàng, tiết kiệm năng lượng.',
        eq: 'Sân chạy vòng quanh trường, còi thể thao, đồng hồ bấm giây',
        nls: '1.1.TC1c',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 1.1.TC1d] Tra cứu kỹ thuật thở yếm khí/hiếu khí trong thể thao qua tài liệu số.\n• [Mã AI: 6.C1.1] Ứng dụng AI phân tích nhịp tim thông minh (Smart Band AI) cảnh báo ngưỡng an toàn khi chạy bền.'
      },
      {
        w: 14,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 2: Chạy giữa quãng trên đường thẳng, đường vòng (2 tiết)',
        y: '- Nắm vững kỹ thuật chạy giữa quãng trên đường thẳng và đường vòng (nghiêng người vào phía trong đường cong, tay ngoài đánh rộng hơn tay trong).\n- Rèn luyện sức bền tim mạch, ý chí kiên trì vượt qua hiện tượng "cực điểm".',
        eq: 'Đường chạy vòng sân trường (300m - 500m), nón chóp đánh dấu cung vòng',
        nls: '4.3.TC1a',
        ai: '6.A1.1',
        dc: '• [Mã NLS: 4.3.TC1a] Nhận biết các biểu hiện thể lực khi quá tải và phương pháp hồi tĩnh an toàn sau chạy bền.\n• [Mã AI: 6.A1.1] Sử dụng AI lập lộ trình chạy bền quanh sân trường tối ưu cự li và nhịp độ (Pacing AI).'
      },
      {
        w: 15,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 3: Xuất phát và tăng tốc độ sau xuất phát - Chạy về đích (2 tiết)',
        y: '- Thực hiện đúng kỹ thuật xuất phát cao cự li trung bình, nhanh chóng chiếm vị trí thuận lợi ở đường vòng trong.\n- Phân phối sức hợp lí trên toàn cự li 500m (nam) / 400m (nữ) và bứt tốc về đích dũng mãnh.',
        eq: 'Còi, đồng hồ bấm giây điện tử, đường chạy tiêu chuẩn',
        nls: '5.2.TC1b',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 5.2.TC1b] Ghi nhận đồ thị biến thiên tốc độ của từng học sinh qua ứng dụng thể thao số.\n• [Mã AI: 6.D1.1] AI gợi ý chiến thuật phân phối sức (Pacing strategy) phù hợp với thể trạng cá nhân.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục thể chất 6 (Ném bóng xa có đà & Chạy cự li trung bình) (2 tiết)',
        y: '- Đánh giá mức độ hoàn thiện kỹ thuật Ném bóng xa có đà và thành tích Chạy cự li trung bình theo chuẩn chương trình.\n- Rèn luyện tinh thần thi đấu trung thực, tự tin, nâng cao ý thức rèn luyện thể thao tự giác.',
        eq: 'Đề kiểm tra ma trận chuẩn, bóng ném, còi, đồng hồ bấm giây, sổ theo dõi',
        nls: '1.1.TC1b',
        ai: '6.A1.3',
        dc: '• [Mã NLS: 1.2.TC1a] Tra cứu chuẩn đánh giá xếp loại thể lực cuối học kỳ 1 theo quy định Bộ GD&ĐT.\n• [Mã AI: 6.A1.3] Hệ thống số tự động xuất bảng điểm học tập và xếp loại thể lực học sinh HK1.'
      },
      {
        w: 17,
        t: 'Chữa bài & Thể thao tự chọn',
        n: 'Chữa bài kiểm tra cuối HK1 & Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 1: Bài tập bổ trợ và kĩ thuật di chuyển cơ bản (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; Cầu lông: Thực hiện đúng tư thế chuẩn bị, di chuyển đơn bước.\n- Bóng đá: Bài tập cảm giác bóng; Bóng rổ: Bài tập chuyền bóng cơ bản.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 4, bóng rổ số 5, cột lưới',
        nls: '2.5.TC1b',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 2.1.TC1b] Xem video 3D hướng dẫn kỹ thuật di chuyển chân bước đơn/bước kép trong thể thao.\n• [Mã AI: 6.C2.2] Ứng dụng AI phân tích bộ chân di chuyển và độ cân bằng cơ thể (Footwork AI tracker).'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Giao lưu trò chơi vận động, thể thao học đường Lớp 6 (2 tiết)',
        y: '- Sơ kết, đánh giá quá trình học tập và rèn luyện thể chất trong Học kỳ 1; tổ chức giao lưu trò chơi vận động phát triển thể lực.',
        eq: 'Còi, bóng, cờ, loa truyền thông',
        nls: '2.4.TC1a',
        ai: '6.B1.1',
        dc: '• [Mã NLS: 2.5.TC1b] Hợp tác tổ chức hoạt động thi đua trò chơi thể thao tập thể.\n• [Mã AI: 6.B1.1] AI hỗ trợ chia đội ngẫu nhiên cân bằng thể lực cho các trò chơi vận động.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Kiến thức chung & Chạy cự li ngắn (60 m)',
        n: 'Phần một: Vận dụng chế độ dinh dưỡng, nghỉ ngơi trong tập luyện thể thao (1 tiết) & Chủ đề 1. Chạy cự li ngắn (60 m): Củng cố kỹ thuật xuất phát và chạy lao (1 tiết)',
        y: '- Biết cách lựa chọn thực phẩm giàu protein, vitamin và bổ sung nước khoáng đúng cách trước, trong và sau tập luyện.\n- Hoàn thiện phản xạ xuất phát nhanh và kỹ thuật chạy lao sau xuất phát.',
        eq: 'Tranh ảnh hướng dẫn dinh dưỡng học đường, còi, đường chạy 60m',
        nls: '1.1.TC1b',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm công thức tính chỉ số BMR và nhu cầu năng lượng calo hàng ngày trên Internet.\n• [Mã AI: 6.C1.1] Sử dụng Chatbot AI tư vấn khẩu phần ăn hợp lí cho lứa tuổi học sinh THCS.'
      },
      {
        w: 20,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Luyện tập nâng cao tốc độ chạy giữa quãng và kỹ thuật về đích 60m (2 tiết)',
        y: '- Tăng cường tần số và độ dài bước chạy giữa quãng; không giảm tốc độ khi cách đích 5-10m.\n- Đạt thành tích chạy ngắn 60m nâng cao so với học kỳ 1.',
        eq: 'Đồng hồ bấm giây, còi thể thao, nón chóp cự li',
        nls: '5.2.TC1b',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 5.2.TC1b] Ghi lại chỉ số tốc độ bước chạy bằng ứng dụng cảm biến chuyển động điện thoại.\n• [Mã AI: 6.C2.2] AI phân tích biểu đồ tăng tốc để đề xuất bài tập bổ trợ cơ đùi phù hợp.'
      },
      {
        w: 21,
        t: 'Chủ đề 2. Ném bóng',
        n: 'Chủ đề 2. Ném bóng - Luyện tập phối hợp 4 bước đà chéo và ra sức cuối cùng ném bóng xa (2 tiết)',
        y: '- Nhuần nhuyễn nhịp điệu 4 bước đà chéo: bước 1 chuẩn bị, bước 2-3 chéo chân tạo sức căng thân, bước 4 cắm chân giậm giương cung ném bóng.\n- Nâng cao thành tích ném bóng xa và rèn luyện sức mạnh bộc phát cánh tay.',
        eq: 'Bóng ném 150g, cờ hiệu, thước cuộn đo thành tích',
        nls: '3.2.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Lưu trữ và chia sẻ video kỹ thuật ném bóng của nhóm lên nhóm học tập số.\n• [Mã AI: 6.D1.1] AI hỗ trợ nhận diện lỗi sai thường gặp khi bước chéo chạy đà ném bóng.'
      },
      {
        w: 22,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Luyện tập đồng diễn Bài thể dục liên hoàn 30 nhịp kết hợp nhạc nền (2 tiết)',
        y: '- Biểu diễn thuần thục toàn bộ 30 nhịp bài thể dục liên hoàn theo đội hình nhóm, tổ đều đẹp.\n- Thể hiện tư thế chuẩn, phong thái khỏe khoắn, đúng nhịp phách âm nhạc.',
        eq: 'Loa kéo Bluetooth công suất lớn, bài nhạc thể dục liên hoàn lớp 6',
        nls: '2.1.TC1b',
        ai: '6.B1.1',
        dc: '• [Mã NLS: 2.4.TC1a] Hợp tác đội nhóm xếp đội hình hoa thị, chữ V đồng diễn thể dục sáng tạo.\n• [Mã AI: 6.B1.1] Sử dụng ứng dụng AI tạo nhịp điệu phối nhạc điện tử cho bài tập thể dục.'
      },
      {
        w: 23,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 2: Kĩ thuật đánh cầu thấp tay bên phải, bên trái / Đá bóng bằng lòng bàn chân / Dẫn bóng rổ (2 tiết)',
        y: '- Cầu lông: Thực hiện đúng kỹ thuật đánh cầu thấp tay bên phải và bên trái đưa cầu qua lưới.\n- Bóng đá: Thực hiện đúng kỹ thuật tiếp xúc bóng bằng lòng bàn chân khi đá bóng cố định và bóng lăn.\n- Bóng rổ: Thực hiện kỹ thuật dẫn bóng tại chỗ và di chuyển dẫn bóng đổi hướng.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá, bóng rổ, cọc tiêu zíc zắc',
        nls: '2.2.TC1c',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 2.5.TC1b] Xem hình ảnh 3D mô phỏng điểm tiếp xúc giữa bàn chân/mặt vợt với bóng/cầu.\n• [Mã AI: 6.C2.2] Ứng dụng AI phân tích góc tiếp xúc mặt vợt để tối ưu đường bay của quả cầu.'
      },
      {
        w: 24,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 3: Kĩ thuật phát cầu trái tay / Dừng và dẫn bóng bằng lòng bàn chân / Chuyền bắt bóng hai tay (2 tiết)',
        y: '- Cầu lông: Thực hiện đúng kỹ thuật phát cầu trái tay đưa cầu vào ô giao cầu hợp lệ.\n- Bóng đá: Thực hiện thuần thục kỹ thuật dừng bóng và dẫn bóng bằng lòng bàn chân.\n- Bóng rổ: Nắm vững kỹ thuật chuyền và bắt bóng hai tay trước ngực an toàn, chuẩn xác.',
        eq: 'Sân cầu lông / sân bóng đá mini / sân bóng rổ, dụng cụ bóng/cầu',
        nls: '5.2.TC1b',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng bảng chiến thuật số trên máy tính bảng để mô phỏng bài tập chuyền bóng.\n• [Mã AI: 6.C1.1] Trợ lý AI gợi ý các bài tập cảm giác bóng/cầu thích ứng theo trình độ từng bạn.'
      },
      {
        w: 25,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Phối hợp các kỹ thuật cơ bản và tổ chức đấu tập mini có luật (2 tiết)',
        y: '- Phối hợp thuần thục các kỹ thuật đã học trong tình huống thực tế thi đấu mini.\n- Hiểu và chấp hành nghiêm túc luật thi đấu cơ bản, tôn trọng đối thủ và quyết định của trọng tài.',
        eq: 'Còi, bảng điểm số lật tay, đồng hồ thi đấu, dụng cụ thể thao',
        nls: '2.5.TC1b',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 2.1.TC1b] Sử dụng ứng dụng quản lý giải đấu số (Tournament Manager App) xếp lịch đấu lớp.\n• [Mã AI: 6.D1.1] AI hỗ trợ thống kê số lần đánh cầu qua lưới/chuyền bóng thành công trong trận đấu.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục thể chất 6 (Thể thao tự chọn: Cầu lông / Bóng đá / Bóng rổ & Chạy cự li ngắn 60m) (2 tiết)',
        y: '- Đánh giá mức độ nắm vững kỹ thuật Thể thao tự chọn và thành tích Chạy cự li ngắn 60m.\n- Đảm bảo tính khách quan, an toàn và tinh thần thể thao cao thượng.',
        eq: 'Đề kiểm tra chuẩn, sân bãi, đồng hồ bấm giây, dụng cụ môn tự chọn',
        nls: '1.2.TC1b',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Nhập kết quả kiểm tra vào biểu mẫu chấm điểm số trực tiếp trên sân tập.\n• [Mã AI: 6.D1.1] Hệ thống AI hỗ trợ tính điểm trung bình và phân loại kết quả học sinh tức thì.'
      },
      {
        w: 27,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Nâng cao kỹ thuật đánh cầu cao sâu / Đá bóng bằng mu trong / Ném rổ một tay trên vai (2 tiết)',
        y: '- Cầu lông: Kỹ thuật đánh cầu cao sâu cuối sân tạo quỹ đạo cầu bổng an toàn.\n- Bóng đá: Kỹ thuật đá bóng bằng mu trong bàn chân tạo đường bóng xoáy bổng.\n- Bóng rổ: Hoàn thiện kỹ thuật ném rổ một tay trên vai chuẩn xác.',
        eq: 'Sân bãi, trụ rổ, cầu lông, bóng đá',
        nls: '2.1.TC1b',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 2.2.TC1c] Xem hình ảnh mô phỏng kỹ thuật quay cổ tay và duỗi gối tăng lực ném/sút.\n• [Mã AI: 6.C2.2] AI phân tích quỹ đạo bóng/cầu để tư vấn điểm ngắm tối ưu.'
      },
      {
        w: 28,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Kỹ thuật phòng thủ và di chuyển chiến thuật (2 tiết)',
        y: '- Cầu lông: Kỹ thuật đỡ đập cầu và di chuyển đổi hướng linh hoạt.\n- Bóng đá: Kỹ thuật tranh cướp bóng bằng cách tì đè hợp lệ và kèm người.\n- Bóng rổ: Kỹ thuật di chuyển trượt phòng thủ một kèm một (1 vs 1).',
        eq: 'Cọc tiêu phân làn di chuyển, còi, dụng cụ chuyên môn',
        nls: '5.2.TC1b',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng đồng hồ thông minh đo nhịp tim và quãng đường di chuyển phòng thủ.\n• [Mã AI: 6.C1.1] Trợ lý AI đưa ra gợi ý điều chỉnh tư thế trọng tâm thấp khi trượt phòng thủ.'
      },
      {
        w: 29,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Phối hợp chiến thuật nhóm và đấu tập theo luật hiện hành (2 tiết)',
        y: '- Nắm vững vị trí đứng, cách di chuyển phối hợp bọc lót trong thi đấu đôi (Cầu lông) hoặc phối hợp nhóm 3 người (Bóng đá).\n- Nâng cao tư duy chiến thuật và khả năng quan sát tình huống trên sân.',
        eq: 'Sân bãi tiêu chuẩn, dụng cụ thi đấu đầy đủ, còi',
        nls: '2.4.TC1a',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 2.5.TC1b] Hợp tác lập sơ đồ chiến thuật tấn công và phòng thủ trên bảng tương tác số.\n• [Mã AI: 6.C2.2] Xem video phân tích trận đấu quốc tế bằng công cụ AI Heatmap thể hiện phạm vi di chuyển.'
      },
      {
        w: 30,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Tổ chức giải đấu giao hữu cấp lớp và thực hành công tác trọng tài (2 tiết)',
        y: '- Trực tiếp tham gia thi đấu giải giao hữu hoặc đảm nhận vai trò trọng tài chính, trọng tài biên, thư ký bàn ghi điểm.\n- Rèn luyện tác phong công minh, chính xác, dứt khoát và am hiểu sâu sắc luật thể thao.',
        eq: 'Bảng điểm số, thẻ trọng tài, còi, biên bản thi đấu',
        nls: '3.2.TC1a',
        ai: '6.B1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng phần mềm chấm điểm và tính hiệu số bàn thắng/điểm số tự động.\n• [Mã AI: 6.B1.1] Ứng dụng hỗ trợ công nghệ VAR/Hawk-eye AI đơn giản kiểm tra cầu/bóng trong hay ngoài sân.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục thể chất 6 (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập và rèn luyện thể chất của học sinh trong cả năm học lớp 6 theo chuẩn GDPT 2018.\n- Đảm bảo tính công bằng, khách quan, chính xác.',
        eq: 'Đề kiểm tra ma trận chuẩn, còi, đồng hồ bấm giây, bóng ném, sân bãi',
        nls: '1.2.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu barem đánh giá xếp loại thể chất cuối năm học theo Thông tư 22/2021/TT-BGDĐT.\n• [Mã AI: 6.D1.1] Hệ thống tự động xuất bảng điểm học tập và xếp loại môn GDTC 6.'
      },
      {
        w: 32,
        t: 'Chữa bài & Đánh giá thể lực',
        n: 'Chữa bài kiểm tra cuối HK2 & Kiểm tra đánh giá thể lực học sinh lớp 6 theo tiêu chuẩn rèn luyện thân thể (QĐ 53/2008/QĐ-BGDĐT) (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; thực hiện nghiêm túc các nội dung tiêu chuẩn rèn luyện thân thể: Chạy 30m xuất phát cao, Bật xa tại chỗ, Chạy bền 500m/400m, Nằm ngửa gập bụng.',
        eq: 'Thảm đo bật xa, đồng hồ bấm giây, thước đo chiều cao - cân nặng BMI',
        nls: '1.3.TC1a',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 1.3.TC1b] Nhập kết quả kiểm tra thể lực vào hệ thống cơ sở dữ liệu quốc gia về thể lực học sinh.\n• [Mã AI: 6.C1.1] AI tự động đối chiếu phân loại thể lực Tốt/Đạt/Chưa đạt theo Quyết định 53/2008/QĐ-BGDĐT.'
      },
      {
        w: 32,
        t: 'Hoạt động trải nghiệm thể thao',
        n: 'Hoạt động trải nghiệm thể thao / Ngày hội Thể dục thể thao học sinh khối 6 cấp trường (2 tiết)',
        y: '- Tích cực tham gia các hoạt động biểu diễn đồng diễn thể dục, thi đấu các môn điền kinh và trò chơi dân gian.\n- Lan tỏa thông điệp rèn luyện thân thể theo gương Bác Hồ vĩ đại trong toàn trường.',
        eq: 'Sân vận động, cờ hoa, âm thanh, biểu ngữ ngày hội thể thao',
        nls: '3.2.TC1a',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 3.1.TC1b] Thiết kế poster kỹ thuật số cổ động ngày hội thể thao bằng công cụ Canva.\n• [Mã AI: 6.C2.2] Ứng dụng AI tạo video highlight các khoảnh khắc thể thao đẹp mắt của khối lớp.'
      },
      {
        w: 33,
        t: 'Ôn tập tổng hợp cuối năm',
        n: 'Ôn tập tổng hợp toàn diện Vận động cơ bản (Chạy cự li ngắn 60m, Ném bóng xa có đà, Bài thể dục liên hoàn) (2 tiết)',
        y: '- Hệ thống hóa toàn bộ các kỹ năng vận động cơ bản đã học trong năm học lớp 6.\n- Khắc phục các sai sót kỹ thuật, nâng cao sự tự tin trước kỳ kiểm tra cuối năm.',
        eq: 'Bóng ném, còi, dây đích, thước đo, thảm tập',
        nls: '5.4.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 5.4.TC1a] Tự đánh giá mức độ tiến bộ của bản thân qua bảng nhật ký luyện tập số (Digital Fitness Log).\n• [Mã AI: 6.D1.1] AI đưa ra lộ trình rèn luyện cá nhân hóa khắc phục các điểm yếu thể chất.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp & Hướng dẫn rèn luyện hè',
        n: 'Ôn tập tổng hợp Thể thao tự chọn & Hướng dẫn xây dựng kế hoạch tự rèn luyện thể lực trong dịp hè (2 tiết)',
        y: '- Củng cố kỹ thuật thể thao tự chọn; biết cách lựa chọn môn thể thao phù hợp để tập luyện hàng ngày trong dịp hè.\n- Nâng cao ý thức phòng chống đuối nước, tai nạn thương tích và bảo vệ sức khỏe mùa hè.',
        eq: 'Tài liệu hướng dẫn phòng chống đuối nước, infographic kế hoạch rèn luyện hè',
        nls: '4.3.TC1a',
        ai: '6.A1.1',
        dc: '• [Mã NLS: 4.3.TC1a] Tra cứu kỹ năng an toàn phòng chống đuối nước và kỹ năng bơi lội cơ bản trên môi trường số.\n• [Mã AI: 6.A1.1] Chatbot AI hỗ trợ thiết lập thời khóa biểu tập luyện thể thao mùa hè tại nhà.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Giáo dục thể chất 6 cả năm (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập và rèn luyện thể chất của học sinh trong cả năm học lớp 6.\n- Tuyên dương các cá nhân, tập thể có thành tích thể thao xuất sắc; bế mạc chương trình GDTC 6.',
        eq: 'Bảng điểm tổng hợp năm học, sổ theo dõi giáo viên, giấy khen thể thao',
        nls: '1.3.TC1a',
        ai: '6.A1.3',
        dc: '• [Mã NLS: 1.3.TC1b] Lưu trữ và đồng bộ hồ sơ đánh giá thể chất điện tử của học sinh lớp 6 lên phần mềm VNEDU/SMAS.\n• [Mã AI: 6.A1.3] AI tổng kết thống kê tỉ lệ đạt chuẩn thể lực toàn khối gửi ban giám hiệu nhà trường.'
      }
    ];

    grade6Weeks.forEach((item) => {
      const isGK = item.w === 9 || item.w === 26;
      const isCK = item.w === 16 || item.w === 31;

      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 2,
        yccd: item.y,
        equipment: item.eq,
        location: 'Sân thể dục / Sân vận động trường học',
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Đánh giá thể lực QĐ 53' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: GIÁO DỤC THỂ CHẤT (35 TUẦN X 2 TIẾT = 70 TIẾT)
  // Bám sát 100% danh mục bài học SGK GDTC 7 Kết nối tri thức trong gdtc-thcs.md
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Kiến thức chung & Chạy cự li ngắn (60 m)',
        n: 'Phần một: Kiến thức chung - Lựa chọn và sử dụng các yếu tố của môi trường tự nhiên trong luyện tập (1 tiết) & Phần hai: Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 1: Phối hợp trong giai đoạn xuất phát cao và chạy lao sau xuất phát (1 tiết)',
        y: '- Nhận biết được các yếu tố môi trường tự nhiên (ánh nắng, không khí trong lành, nhiệt độ, độ ẩm, địa hình) và nguyên tắc lựa chọn để tập luyện TDTT nâng cao sức khỏe.\n- Thực hiện đúng kỹ thuật phối hợp nhịp nhàng giữa xuất phát cao và tăng tốc độ giai đoạn chạy lao.',
        eq: 'Tranh ảnh môi trường tự nhiên và sức khỏe, còi, đường chạy 60m',
        nls: '1.1.TC1b',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tra cứu dữ liệu chỉ số chất lượng không khí (AQI) và chỉ số tia UV trước khi tập luyện ngoài trời.\n• [Mã AI: 7.A1.1] Sử dụng ứng dụng thời tiết tích hợp AI để lựa chọn khung giờ tập luyện thể dục tối ưu.'
      },
      {
        w: 2,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 2: Phối hợp trong giai đoạn chạy lao sau xuất phát và chạy giữa quãng (2 tiết)',
        y: '- Nắm vững và thực hiện thuần thục kỹ thuật chuyển tiếp nhịp nhàng từ chạy lao (thân người từ từ nâng cao dần) sang chạy giữa quãng.\n- Duy trì độ dài và tần số bước chạy ổn định, tiếp đất bằng nửa trước bàn chân.',
        eq: 'Còi thể thao, đồng hồ bấm giây, nón chóp đánh dấu giai đoạn chạy',
        nls: '5.2.TC1b',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng máy tính bảng quay video góc nghiêng chuyển tiếp giữa chạy lao và chạy giữa quãng.\n• [Mã AI: 7.C5.1] AI phân tích độ mượt mà của quỹ đạo trọng tâm cơ thể trong giai đoạn chuyển tiếp.'
      },
      {
        w: 3,
        t: 'Chủ đề 1. Chạy cự li ngắn (60 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (60 m) - Bài 3: Phối hợp các giai đoạn chạy cự li ngắn (60 m) & Luyện tập nâng cao thành tích (2 tiết)',
        y: '- Phối hợp hoàn chỉnh và liên tục 4 giai đoạn kỹ thuật chạy cự li ngắn (60 m): Xuất phát cao $\\rightarrow$ Chạy lao $\\rightarrow$ Chạy giữa quãng $\\rightarrow$ Về đích.\n- Nâng cao tốc độ cực đại và cải thiện thành tích chạy 60m cá nhân.',
        eq: 'Đường chạy 60m tiêu chuẩn, dây đích, còi, đồng hồ bấm giây điện tử',
        nls: '5.3.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 5.3.TC1a] Ghi chép dữ liệu thành tích chạy 60m vào phần mềm đo lường thể thao trường học.\n• [Mã AI: 7.D1.1] AI so sánh biểu đồ tốc độ cá nhân với các thông số chuẩn của lứa tuổi 12-13.'
      },
      {
        w: 4,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 1: Bài thể dục liên hoàn (từ nhịp 1 đến nhịp 10) (2 tiết)',
        y: '- Thuộc tên, thứ tự động tác và thực hiện đúng biên độ, phương hướng từ nhịp 1 đến nhịp 10 của Bài thể dục liên hoàn lớp 7.\n- Thể hiện sự phối hợp nhịp nhàng giữa tay, chân, lườn và nhịp thở.',
        eq: 'Loa kéo phát nhạc, sân tập thể dục thoáng mát',
        nls: '3.2.TC1a',
        ai: '7.A1.MR1',
        dc: '• [Mã NLS: 3.1.TC1b] Xem video mẫu kỹ thuật 3D trực quan các nhịp 1-10 bài thể dục liên hoàn lớp 7.\n• [Mã AI: 7.A1.MR1] AI hỗ trợ kiểm chứng tư thế đúng/sai qua công cụ nhận diện cử động Pose Estimation.'
      },
      {
        w: 5,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 2: Bài thể dục liên hoàn (từ nhịp 11 đến nhịp 20) (2 tiết)',
        y: '- Học thuộc và thực hiện chính xác các động tác từ nhịp 11 đến nhịp 20 (các động tác vặn mình, cúi gập, xoay khớp và giữ thăng bằng).\n- Phối hợp liên kết mượt mà từ nhịp 1 đến nhịp 20 theo nhịp đếm của người chỉ huy.',
        eq: 'Loa nhạc, thảm thể dục nhóm',
        nls: '2.1.TC1b',
        ai: '7.C4.1',
        dc: '• [Mã NLS: 2.4.TC1a] Làm việc nhóm phân công chỉ huy đếm nhịp và tự ghi hình luyện tập qua điện thoại.\n• [Mã AI: 7.C4.1] Đánh giá sự đồng đều của cả nhóm thông qua phần mềm nhận diện chuyển động AI.'
      },
      {
        w: 6,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 3: Bài thể dục liên hoàn (từ nhịp 21 đến nhịp 30) & Hoàn thiện toàn bài (2 tiết)',
        y: '- Nắm vững các động tác bật nhảy, điều hòa từ nhịp 21 đến nhịp 30; hoàn thiện trọn vẹn 30 nhịp bài thể dục liên hoàn lớp 7.\n- Thực hiện bài tập với phong thái khỏe khoắn, tự tin, đúng nhịp phách âm nhạc.',
        eq: 'Loa âm thanh, bài nhạc thể dục liên hoàn lớp 7 chuẩn',
        nls: '3.2.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video clip đồng diễn bài thể dục liên hoàn 30 nhịp của tổ có lồng ghép âm nhạc.\n• [Mã AI: 7.D1.1] Ứng dụng AI tinh chỉnh tốc độ nhạc nền khớp hoàn hảo với nhịp độ vận động của tổ.'
      },
      {
        w: 7,
        t: 'Ôn tập & Luyện tập phối hợp',
        n: 'Luyện tập phối hợp kỹ thuật Chạy cự li ngắn 60m và Bài thể dục liên hoàn 30 nhịp lớp 7 (2 tiết)',
        y: '- Rèn luyện độ thuần thục bài thể dục liên hoàn 30 nhịp và kỹ thuật chạy ngắn 60m.\n- Chuẩn bị tâm lí thi đấu tự tin, kỷ luật và tác phong sẵn sàng cho bài kiểm tra giữa kỳ 1.',
        eq: 'Còi, đồng hồ bấm giây, vạch xuất phát, loa nhạc',
        nls: '1.3.TC1a',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 1.3.TC1b] Nhập kết quả tự kiểm tra thử vào bảng biểu số theo dõi tiến trình cá nhân.\n• [Mã AI: 7.A1.1] AI gợi ý trọng tâm cần ôn luyện thêm trước kỳ thi giữa học kỳ.'
      },
      {
        w: 8,
        t: 'Ôn tập chuẩn bị kiểm tra giữa HK1',
        n: 'Ôn tập tổng hợp kỹ năng vận động chuẩn bị kiểm tra giữa Học kỳ 1 môn GDTC 7 (2 tiết)',
        y: '- Nắm chắc các tiêu chí đánh giá kỹ thuật và chuẩn thành tích của bài thể dục và chạy ngắn 60m.\n- Khắc phục triệt để các lỗi sai kỹ thuật thường gặp; nâng cao sự tự tin.',
        eq: 'Đồng hồ bấm giây, còi thể thao, loa nhạc',
        nls: '5.4.TC1a',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 5.4.TC1a] Tự rà soát kỹ năng vận động qua bảng kiểm kỹ thuật số trên nền tảng học tập LMS.\n• [Mã AI: 7.C5.1] AI hỗ trợ chỉ ra các lỗi sai về biên độ tay chân để học sinh tự điều chỉnh.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục thể chất 7 (Chạy cự li ngắn 60m & Bài thể dục liên hoàn 30 nhịp) (2 tiết)',
        y: '- Đánh giá mức độ hoàn thiện kỹ thuật Bài thể dục liên hoàn 30 nhịp và thành tích Chạy cự li ngắn 60m theo chuẩn quy định.\n- Nâng cao tính kỷ luật, ý thức trung thực và tinh thần cố gắng vượt qua giới hạn bản thân.',
        eq: 'Biểu điểm kiểm tra, đồng hồ bấm giây chuyên dụng, còi, dây đích',
        nls: '1.1.TC1b',
        ai: '7.B3.1',
        dc: '• [Mã NLS: 1.2.TC1a] Số hóa bảng điểm kiểm tra giữa kỳ 1 môn GDTC 7 trên cơ sở dữ liệu số trường học.\n• [Mã AI: 7.B3.1] Đảm bảo tính minh bạch, công bằng trong đánh giá với sự hỗ trợ ghi nhận kết quả số.'
      },
      {
        w: 10,
        t: 'Chủ đề 2. Nhảy xa kiểu ngồi',
        n: 'Chủ đề 2. Nhảy xa kiểu ngồi - Bài 1: Kĩ thuật giậm nhảy và chạy đà kết hợp giậm nhảy (2 tiết)',
        y: '- Xác định được chân giậm nhảy thuận và thực hiện đúng kỹ thuật giậm nhảy bước bộ trên không.\n- Nắm vững cách đo đà và thực hiện chạy đà ngắn (3-5 bước) kết hợp giậm nhảy chính xác vào ván giậm.',
        eq: 'Hố nhảy xa xới cát xốp mềm, ván giậm nhảy, thước đo, còi',
        nls: '4.1.TC1c',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 4.2.TC1b] Xem infographic quy tắc an toàn khi tập luyện tại hố nhảy xa (xới cát mềm, tránh chấn thương).\n• [Mã AI: 7.C5.1] Mô phỏng 3D góc giậm nhảy tối ưu 18-24 độ trong kỹ thuật nhảy xa kiểu ngồi.'
      },
      {
        w: 11,
        t: 'Chủ đề 2. Nhảy xa kiểu ngồi',
        n: 'Chủ đề 2. Nhảy xa kiểu ngồi - Bài 2: Kĩ thuật chạy đà và giậm nhảy (2 tiết)',
        y: '- Thực hiện đúng kỹ thuật chạy đà tự do (7-9 bước đà): tăng dần tốc độ, duy trì nhịp điệu và không giảm tốc độ ở 3 bước đà cuối.\n- Đặt chân giậm nhảy nhanh, mạnh, chính xác vào ván giậm, kết hợp đánh tay và chân lăng tạo lực bật cao.',
        eq: 'Hố cát nhảy xa, thước dây, ván giậm, cờ hiệu đánh dấu đà',
        nls: '5.2.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng thiết bị quay chậm (Slow-motion) phân tích khoảnh khắc đặt chân lên ván giậm.\n• [Mã AI: 7.D1.1] Trợ lý AI hỗ trợ tính toán vị trí vạch đo đà chuẩn xác dựa trên chiều dài sải chân.'
      },
      {
        w: 12,
        t: 'Chủ đề 2. Nhảy xa kiểu ngồi',
        n: 'Chủ đề 2. Nhảy xa kiểu ngồi - Bài 3: Kĩ thuật bay trên không và rơi xuống cát (2 tiết)',
        y: '- Thực hiện đúng tư thế "ngồi trên không": gập đùi chân lăng, kéo chân giậm nhảy lên song song với chân lăng, hai tay đánh ra trước - xuống dưới.\n- Thực hiện kỹ thuật rơi xuống cát an toàn: vươn chân ra trước, uốn gối hoãn xung, người đổ về trước, không chống tay ra sau.',
        eq: 'Hố cát nhảy xa đã xới phẳng, cào cát, thước đo thành tích',
        nls: '4.3.TC1a',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 4.3.TC1a] Tra cứu các bài tập bổ trợ khớp gối và cổ chân giúp tiếp đất an toàn tuyệt đối.\n• [Mã AI: 7.C5.1] AI phân tích góc gập thân và hướng đổ người khi rơi xuống hố cát để tối ưu hóa thành tích.'
      },
      {
        w: 13,
        t: 'Chủ đề 2. Nhảy xa kiểu ngồi',
        n: 'Chủ đề 2. Nhảy xa kiểu ngồi - Bài 4: Phối hợp các giai đoạn kĩ thuật nhảy xa kiểu ngồi & Nâng cao thành tích (2 tiết)',
        y: '- Phối hợp hoàn chỉnh liên tục 4 giai đoạn: Chạy đà $\\rightarrow$ Giậm nhảy $\\rightarrow$ Bay trên không kiểu ngồi $\\rightarrow$ Rơi xuống cát an toàn.\n- Đạt thành tích nhảy xa kiểu ngồi vượt trội (từ 3.2m đến 4.2m) theo chuẩn lứa tuổi.',
        eq: 'Hố cát, thước dây đo thành tích, ván giậm, cờ báo hiệu thành tích',
        nls: '2.5.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 2.1.TC1b] Hợp tác nhóm tổ chức đo đạc và quay video phân tích thành tích nhảy xa của từng bạn.\n• [Mã AI: 7.D1.1] AI lập đồ thị so sánh thành tích qua từng lần nhảy để điều chỉnh lực giậm nhảy.'
      },
      {
        w: 14,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 1: Phối hợp trong giai đoạn chạy giữa quãng (2 tiết)',
        y: '- Thực hiện đúng kỹ thuật chạy giữa quãng cự li trung bình: bước chạy êm, thả lỏng cơ vai và cổ, phối hợp nhịp thở 2 bước hít vào sâu - 2 bước thở ra mạnh.\n- Rèn luyện sức bền chung và khả năng chịu đựng của hệ tuần hoàn, hô hấp.',
        eq: 'Đường chạy quanh sân trường (500m - 600m), còi, đồng hồ bấm giây',
        nls: '1.2.TC1b',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm tài liệu khoa học về nguyên lí trao đổi khí và nhịp tim tối đa khi chạy bền.\n• [Mã AI: 7.A1.1] Ứng dụng AI phân tích dữ liệu đồng hồ thông minh theo dõi chỉ số VO2 Max ước tính.'
      },
      {
        w: 15,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 2: Phối hợp trong giai đoạn xuất phát và tăng tốc độ sau xuất phát & Bài 3: Phối hợp các giai đoạn (2 tiết)',
        y: '- Thực hiện xuất phát cao, nhanh chóng tăng tốc độ sau xuất phát để chiếm vị trí thuận lợi ở đường vòng.\n- Phân phối sức hợp lí trên toàn cự li 600m (nam) / 500m (nữ) và duy trì tốc độ về đích mạnh mẽ.',
        eq: 'Đường chạy tiêu chuẩn, còi thể thao, đồng hồ bấm giây điện tử',
        nls: '5.2.TC1b',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 5.2.TC1b] Thu thập dữ liệu thời gian từng vòng chạy (Split time) bằng phần mềm bấm giờ số.\n• [Mã AI: 7.C5.1] AI mô phỏng biểu đồ phân bổ năng lượng tối ưu cho cự li trung bình 600m.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục thể chất 7 (Nhảy xa kiểu ngồi & Chạy cự li trung bình) (2 tiết)',
        y: '- Đánh giá mức độ hoàn thiện 4 giai đoạn kỹ thuật Nhảy xa kiểu ngồi và thành tích Chạy cự li trung bình.\n- Rèn luyện tính trung thực, tác phong kỷ luật và ý chí phấn đấu trong thể thao.',
        eq: 'Đề kiểm tra chuẩn ma trận, hố cát, đồng hồ bấm giây, thước dây, sổ điểm',
        nls: '1.2.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Số hóa và tra cứu bảng phân loại thể lực cuối học kỳ 1 lớp 7.\n• [Mã AI: 7.D1.1] Hệ thống số tự động phân tích phổ điểm và xếp loại thể chất học sinh HK1.'
      },
      {
        w: 17,
        t: 'Chữa bài & Thể thao tự chọn',
        n: 'Chữa bài kiểm tra cuối HK1 & Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Kỹ thuật chuyên môn lớp 7 (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; Cầu lông: Kỹ thuật phát cầu thuận tay và đánh cầu cao tay bên phải.\n- Bóng đá: Đá bóng bằng mu trong; Bóng rổ: Chuyền bóng hai tay trước ngực.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 4, bóng rổ số 6, bảng rổ, cột lưới',
        nls: '2.5.TC1b',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 2.1.TC1b] Xem video 3D mô phỏng góc nghiêng tiếp xúc bóng/cầu của vận động viên chuyên nghiệp.\n• [Mã AI: 7.C5.1] AI phân tích quỹ đạo bóng rổ/cầu lông bay vào rổ/sân đối phương.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Giao lưu trò chơi vận động, thể thao học đường Lớp 7 (2 tiết)',
        y: '- Sơ kết, đánh giá quá trình học tập và rèn luyện thể chất trong Học kỳ 1; tổ chức giao lưu thể thao và trò chơi vận động.',
        eq: 'Còi, bóng, cờ, loa truyền thông',
        nls: '2.4.TC1a',
        ai: '7.A1.MR1',
        dc: '• [Mã NLS: 2.5.TC1b] Hợp tác tổ chức hoạt động thi đua trò chơi thể thao tập thể lớp 7.\n• [Mã AI: 7.A1.MR1] AI hỗ trợ lập bảng tổng kết thành tích và xếp hạng thi đua rèn luyện thể chất HK1.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Kiến thức chung & Chạy cự li ngắn',
        n: 'Phần một: Lựa chọn và sử dụng các yếu tố của môi trường tự nhiên để luyện tập (1 tiết) & Chủ đề 1. Chạy cự li ngắn: Luyện tập củng cố (1 tiết)',
        y: '- Vận dụng các yếu tố tự nhiên (tập thể dục buổi sáng đón ánh nắng sớm tổng hợp vitamin D, hít thở không khí trong lành) vào thói quen hàng ngày.\n- Củng cố tốc độ xuất phát và chạy lao cự li ngắn.',
        eq: 'Tranh ảnh khoa học thể thao, còi, sân chạy 60m',
        nls: '1.1.TC1b',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm các bài viết khoa học về lợi ích của rèn luyện thể thao ngoài trời với thị lực và thể lực.\n• [Mã AI: 7.A1.1] AI gợi ý bài tập ngoài trời theo mùa khí hậu tại địa phương.'
      },
      {
        w: 20,
        t: 'Chủ đề 2. Nhảy xa kiểu ngồi',
        n: 'Chủ đề 2. Nhảy xa kiểu ngồi - Luyện tập hoàn thiện 4 giai đoạn kỹ thuật, nâng cao thành tích (2 tiết)',
        y: '- Nhuần nhuyễn kỹ thuật chạy đà 9-11 bước kết hợp giậm nhảy cực đại.\n- Thực hiện động tác bay trên không kiểu ngồi chuẩn đẹp và tiếp đất an toàn trên hố cát.',
        eq: 'Hố cát nhảy xa, thước dây, ván giậm nhảy, còi',
        nls: '5.2.TC1b',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 5.2.TC1b] Ghi lại chuyển động giậm nhảy qua camera tốc độ cao trên smartphone.\n• [Mã AI: 7.C5.1] AI phân tích góc giậm nhảy và thời gian bay trên không (Hang time AI analysis).'
      },
      {
        w: 21,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Luyện tập đồng diễn Bài thể dục liên hoàn 30 nhịp theo đội hình khối (2 tiết)',
        y: '- Biểu diễn thuần thục 30 nhịp bài thể dục liên hoàn lớp 7 theo giai điệu nhạc nền đồng đều, đẹp mắt.\n- Rèn luyện ý thức tổ chức kỷ luật và tác phong đồng đội.',
        eq: 'Loa kéo phát nhạc thể dục, sân tập thoáng mát',
        nls: '2.1.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 2.4.TC1a] Phối hợp đội hình chuyển tiếp từ vòng tròn sang hàng ngang trên nền tảng sơ đồ số.\n• [Mã AI: 7.D1.1] Ứng dụng AI chấm điểm tự động độ đồng bộ các động tác của cả tổ.'
      },
      {
        w: 22,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 1: Kĩ thuật phát cầu thuận tay / Đá bóng bằng mu trong bàn chân / Dẫn bóng (2 tiết)',
        y: '- Cầu lông: Thực hiện đúng kỹ thuật phát cầu thuận tay đưa cầu đi bổng sâu cuối sân hoặc phát cầu lao nhanh.\n- Bóng đá: Thực hiện chuẩn xác kỹ thuật đá bóng bằng mu trong bàn chân cho đồng đội hoặc sút cầu môn.\n- Bóng rổ: Nhuần nhuyễn kỹ thuật dẫn bóng biến tốc, đổi hướng qua cọc tiêu.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá, bóng rổ, cọc tiêu zíc zắc',
        nls: '2.2.TC1c',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 2.5.TC1b] Xem video 3D slow-motion phân tích trục xoay của hông khi phát cầu/đá bóng mu trong.\n• [Mã AI: 7.C5.1] AI phân tích độ xoáy và góc bay của đường bóng đá mu trong bàn chân.'
      },
      {
        w: 23,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 2: Kĩ thuật đánh cầu cao tay bên phải / Dừng bóng lăn bằng mu giữa / Chuyền bóng bật đất (2 tiết)',
        y: '- Cầu lông: Nắm vững kỹ thuật đánh cầu cao tay bên phải (phông cầu) tấn công đối thủ về cuối sân.\n- Bóng đá: Thực hiện kỹ thuật dừng bóng lăn bằng mu giữa bàn chân êm ái, khống chế bóng trong tầm kiểm soát.\n- Bóng rổ: Thực hiện kỹ thuật chuyền và bắt bóng hai tay trước ngực bật đất chuẩn xác.',
        eq: 'Sân cầu lông / bóng đá mini / bóng rổ, dụng cụ thể thao',
        nls: '5.2.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 5.2.TC1b] Sử dụng cảm biến số đo vận tốc bay của quả cầu lông khi đánh cao tay.\n• [Mã AI: 7.D1.1] Trợ lý AI gợi ý bài tập cải thiện cảm giác bóng cho từng học sinh.'
      },
      {
        w: 24,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 3: Di chuyển ngang đánh cầu cao tay / Dẫn bóng bằng mu trong / Hai bước ném rổ (2 tiết)',
        y: '- Cầu lông: Phối hợp kỹ thuật di chuyển ngang đánh cầu cao tay bên phải đưa cầu vào góc hiểm.\n- Bóng đá: Nhuần nhuyễn kỹ thuật dẫn bóng bằng mu trong bàn chân theo đường zíc zắc luồn cọc.\n- Bóng rổ: Thực hiện đúng nhịp điệu hai bước ném rổ một tay trên vai (Lay-up) chuẩn xác.',
        eq: 'Sân bãi, dụng cụ chuyên môn thể thao tự chọn lớp 7',
        nls: '2.5.TC1b',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 2.1.TC1b] Hợp tác nhóm xây dựng kịch bản phối hợp tấn công 2 đánh 1 trên bảng sơ đồ số.\n• [Mã AI: 7.C5.1] AI phân tích nhịp bước chân thứ nhất (dài) và bước chân thứ hai (ngắn) khi lên rổ.'
      },
      {
        w: 25,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Phối hợp kỹ thuật và tổ chức thi đấu tập luyện theo luật (2 tiết)',
        y: '- Vận dụng linh hoạt các kỹ thuật đã học vào trận đấu tập thực tế.\n- Hiểu và chấp hành nghiêm chỉnh luật thi đấu chính thức, rèn luyện bản lĩnh thi đấu và tinh thần fair-play.',
        eq: 'Còi, đồng hồ đếm ngược, bảng điểm số, bóng/cầu',
        nls: '3.2.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng bảng tỷ số điện tử trên tablet để điều hành trận đấu trực quan.\n• [Mã AI: 7.D1.1] AI thống kê tỷ lệ ném rổ thành công và tỷ lệ kiểm soát bóng của hai đội.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục thể chất 7 (Thể thao tự chọn & Nhảy xa kiểu ngồi) (2 tiết)',
        y: '- Đánh giá mức độ thành thạo kỹ thuật Thể thao tự chọn và thành tích Nhảy xa kiểu ngồi theo chuẩn.\n- Đảm bảo tính khách quan, nghiêm túc và an toàn trong kiểm tra.',
        eq: 'Hố cát nhảy xa, thước dây, dụng cụ thể thao, phiếu kiểm tra',
        nls: '1.2.TC1a',
        ai: '7.B3.1',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu barem điểm kiểm tra kỹ thuật thể thao tự chọn lớp 7 theo phân phối chương trình.\n• [Mã AI: 7.B3.1] Ghi nhận minh chứng hình ảnh/video kiểm tra đảm bảo tính công bằng, minh bạch.'
      },
      {
        w: 27,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Rèn luyện sức bền, kỹ năng phân phối sức và nhịp thở (2 tiết)',
        y: '- Thực hiện chạy cự li 600m (nam) / 500m (nữ) với tốc độ ổn định và nhịp thở đều đặn.\n- Thực hiện đúng các bài tập hồi tĩnh và phương pháp thả lỏng cơ xương khớp sau vận động nặng.',
        eq: 'Đường chạy quanh sân trường, còi thể thao, đồng hồ bấm giây',
        nls: '4.3.TC1a',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 4.3.TC1a] Sử dụng ứng dụng thông minh theo dõi nhịp tim phục hồi sau 1 phút, 3 phút, 5 phút.\n• [Mã AI: 7.C5.1] AI đánh giá mức độ thích ứng tim mạch của học sinh sau bài tập chạy bền.'
      },
      {
        w: 28,
        t: 'Trò chơi vận động & Rèn thể lực',
        n: 'Chủ đề 1. Chạy cự li ngắn & Chủ đề 2. Nhảy xa kiểu ngồi - Trò chơi vận động phát triển sức bật và tốc độ (2 tiết)',
        y: '- Tham gia hào hứng các trò chơi vận động: "Nhảy lò cò tiếp sức", "Bật cóc vượt chướng ngại vật", "Chạy tốc độ đón cầu".\n- Phát triển tối đa sức bật của đôi chân, sức mạnh bộc phát và tinh thần thi đua sôi nổi.',
        eq: 'Cọc tiêu, vạch nhảy, cờ hiệu, bóng ném, gậy tiếp sức',
        nls: '2.1.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 2.2.TC1c] Xem hướng dẫn sơ đồ thi đấu trò chơi vận động qua máy chiếu/tablet ngoài trời.\n• [Mã AI: 7.D1.1] AI gợi ý cách phân nhóm thi đua cân bằng thể lực tạo không khí hào hứng.'
      },
      {
        w: 29,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Luyện tập chiến thuật phối hợp nhóm và đấu tập theo vị trí (2 tiết)',
        y: '- Hiểu rõ nhiệm vụ của từng vị trí trên sân (tấn công, phòng ngự, tiền vệ/hậu vệ, chủ công/phụ công).\n- Thực hiện phối hợp chiến thuật nhóm nhịp nhàng, hiệu quả trong thi đấu.',
        eq: 'Sân bãi tiêu chuẩn, còi, áo bib phân đội màu, dụng cụ thể thao',
        nls: '2.4.TC1a',
        ai: '7.C5.1',
        dc: '• [Mã NLS: 2.5.TC1b] Phân tích video tình huống chiến thuật nhóm qua phần mềm phân tích thể thao số.\n• [Mã AI: 7.C5.1] AI mô phỏng các khoảng trống di chuyển chiến thuật hiệu quả trên sân đấu.'
      },
      {
        w: 30,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Tổ chức giải thi đấu thể thao học sinh và thực hành làm trọng tài (2 tiết)',
        y: '- Trực tiếp tham gia thi đấu giải cấp lớp hoặc thực hành các hiệu lệnh còi, ký hiệu tay của trọng tài thể thao.\n- Rèn luyện tác phong quyết đoán, chính xác và trung thực tuyệt đối.',
        eq: 'Thẻ trọng tài (vàng/đỏ), còi, cờ biên, bảng lật điểm, biên bản thi đấu',
        nls: '3.2.TC1a',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng phần mềm quản lý bảng đấu và xếp hạng giải đấu tự động.\n• [Mã AI: 7.A1.1] Công cụ hỗ trợ trọng tài kiểm tra lỗi vị trí và phát bóng/giao cầu tự động.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục thể chất 7 (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 7 theo chuẩn chương trình GDPT 2018.\n- Đảm bảo tính công bằng, khách quan, chính xác.',
        eq: 'Đề kiểm tra ma trận chuẩn, hố cát, đồng hồ bấm giây, dụng cụ chuyên môn, sổ điểm',
        nls: '1.1.TC1b',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 1.2.TC1a] Tra cứu barem đánh giá xếp loại thể chất cuối năm học theo Thông tư 22/2021/TT-BGDĐT.\n• [Mã AI: 7.D1.1] Hệ thống tự động xuất bảng điểm học tập và xếp loại môn GDTC 7.'
      },
      {
        w: 32,
        t: 'Chữa bài & Đánh giá thể lực',
        n: 'Chữa bài kiểm tra cuối HK2 & Kiểm tra đánh giá thể lực học sinh lớp 7 theo tiêu chuẩn rèn luyện thân thể (QĐ 53/2008/QĐ-BGDĐT) (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; thực hiện đầy đủ 4 nội dung kiểm tra thể lực chuẩn: Chạy 30m xuất phát cao, Bật xa tại chỗ, Chạy bền 600m/500m, Nằm ngửa gập bụng 30 giây.',
        eq: 'Thảm đo bật xa, đồng hồ bấm giây, đồng hồ đo thời gian gập bụng',
        nls: '1.3.TC1a',
        ai: '7.C4.1',
        dc: '• [Mã NLS: 1.3.TC1b] Nhập dữ liệu thành tích 4 nội dung thể lực vào cổng thông tin quản trị thể lực học sinh.\n• [Mã AI: 7.C4.1] AI tự động so sánh dữ liệu thể lực lớp 7 với năm học trước để đánh giá mức độ phát triển.'
      },
      {
        w: 33,
        t: 'Hoạt động trải nghiệm thể thao',
        n: 'Hoạt động trải nghiệm thể thao / Ngày hội Hội khỏe Phù Đổng cấp trường môn Điền kinh và Thể thao tự chọn (2 tiết)',
        y: '- Tham gia tranh tài hoặc cổ vũ các môn thi đấu: Chạy 60m, Nhảy xa, Cầu lông, Bóng đá mini.\n- Xây dựng tinh thần đoàn kết, tự hào tập thể và lan tỏa nếp sống rèn luyện thể thao học đường.',
        eq: 'Sân bãi thi đấu, cờ giải thưởng, băng rôn, loa phát thanh',
        nls: '3.2.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 3.1.TC1b] Thiết kế bảng tin truyền thông và tường thuật hình ảnh ngày hội thể thao trường học.\n• [Mã AI: 7.D1.1] AI tự động tạo video tổng hợp các pha bóng đẹp và kỷ lục thể thao mới của khối 7.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp & Kế hoạch rèn luyện hè',
        n: 'Ôn tập tổng hợp Thể thao tự chọn & Xây dựng kế hoạch rèn luyện thân thể trong kỳ nghỉ hè (2 tiết)',
        y: '- Hoàn thiện kỹ thuật môn thể thao tự chọn yêu thích; lập kế hoạch tự tập luyện thể thao mỗi ngày trong dịp hè (chạy bộ, đạp xe, bơi lội, đánh cầu).\n- Nắm vững kiến thức phòng tránh chấn thương và đuối nước mùa hè.',
        eq: 'Cẩm nang hướng dẫn thể dục thể thao hè, infographic kế hoạch luyện tập',
        nls: '4.3.TC1a',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 4.3.TC1a] Tìm kiếm các bài tập thể lực tại nhà (Home Workout) khoa học trên Internet.\n• [Mã AI: 7.A1.1] AI tạo lịch trình tập luyện thể chất cá nhân hóa trong suốt 3 tháng hè.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Giáo dục thể chất 7 cả năm (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 7 theo chuẩn chương trình GDPT 2018.\n- Biểu dương tinh thần rèn luyện và trao giải thưởng phong trào thể thao khối 7.',
        eq: 'Bảng tổng hợp điểm số năm học, sổ theo dõi giáo viên, giấy khen',
        nls: '1.3.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 1.3.TC1b] Hoàn tất đồng bộ học bạ số môn Giáo dục thể chất 7 trên phần mềm quản lý trường học.\n• [Mã AI: 7.D1.1] AI tổng hợp báo cáo chỉ số phát triển thể chất toàn diện học sinh khối 7.'
      }
    ];

    grade7Weeks.forEach((item) => {
      const isGK = item.w === 9 || item.w === 26;
      const isCK = item.w === 16 || item.w === 31;

      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 2,
        yccd: item.y,
        equipment: item.eq,
        location: 'Sân thể dục / Sân vận động trường học',
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Đánh giá thể lực QĐ 53' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: GIÁO DỤC THỂ CHẤT (35 TUẦN X 2 TIẾT = 70 TIẾT)
  // Bám sát 100% danh mục bài học SGK GDTC 8 Kết nối tri thức trong gdtc-thcs.md
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Kiến thức chung & Chạy cự li ngắn (100 m)',
        n: 'Phần một: Kiến thức chung - Sử dụng chế độ dinh dưỡng thích hợp với bản thân trong luyện tập thể dục thể thao (1 tiết) & Phần hai: Chủ đề 1. Chạy cự li ngắn (100 m) - Bài 1: Xuất phát thấp và chạy lao sau xuất phát (1 tiết)',
        y: '- Hiểu rõ vai trò dinh dưỡng, nguyên tắc xây dựng chế độ ăn uống lành mạnh và biết cách tự điều chỉnh lượng calo phù hợp với cường độ vận động thể thao cá nhân.\n- Thực hiện đúng cách đóng bàn đạp xuất phát thấp, tư thế "Vào chỗ", "Sẵn sàng" và bứt tốc chạy lao sau xuất phát.',
        eq: 'Bàn đạp xuất phát thấp, còi thể thao, tranh ảnh tháp dinh dưỡng thể thao',
        nls: '1.1.TC2b',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu và tính toán chỉ số TDEE (Total Daily Energy Expenditure) và macro dinh dưỡng qua phần mềm số.\n• [Mã AI: 8.C1.1] Sử dụng AI dinh dưỡng (Nutrition AI) thiết kế thực đơn phù hợp với thể trạng cá nhân.'
      },
      {
        w: 2,
        t: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (100 m) - Bài 2: Phối hợp chạy lao sau xuất phát và chạy giữa quãng (2 tiết)',
        y: '- Nắm vững kỹ thuật nâng dần thân người từ chạy lao sang chạy giữa quãng mà không bị hẫng nhịp hoặc giảm tốc độ.\n- Thực hiện đúng kỹ thuật chạy giữa quãng cự li 100m: đạp sau mạnh mẽ, nâng đùi cao, đánh tay đúng trục dọc.',
        eq: 'Bàn đạp xuất phát, còi, đồng hồ bấm giây, đường chạy 100m thẳng',
        nls: '5.2.TC2b',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 5.2.TC2b] Quay video góc nghiêng bằng camera độ phân giải cao phân tích độ ngả thân người.\n• [Mã AI: 8.C2.1] AI Motion Analysis nhận diện góc độ tiếp đất của bàn chân và góc đánh tay.'
      },
      {
        w: 3,
        t: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
        n: 'Chủ đề 1. Chạy cự li ngắn (100 m) - Bài 3: Phối hợp các giai đoạn chạy cự li ngắn (100 m) (2 tiết)',
        y: '- Phối hợp hoàn chỉnh 4 giai đoạn kỹ thuật chạy cự li ngắn 100m: Xuất phát thấp $\\rightarrow$ Chạy lao $\\rightarrow$ Chạy giữa quãng $\\rightarrow$ Về đích.\n- Nâng cao tốc độ cực đại, kỹ thuật đánh đích bằng ngực hoặc vai và không dừng đột ngột sau vạch đích.',
        eq: 'Bàn đạp xuất phát, dây đích, còi, đồng hồ bấm giây điện tử',
        nls: '5.3.TC2a',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 5.3.TC2a] Ứng dụng công nghệ bấm giờ điện tử không dây hoặc cảm biến hồng ngoại trên đường chạy 100m.\n• [Mã AI: 8.D1.1] AI lập đồ thị gia tốc và phân tích từng đoạn 30m, 60m, 100m.'
      },
      {
        w: 4,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 1: Bài thể dục nhịp điệu (động tác chạy tại chỗ, tay ngực, vươn người, bật tách chụm chân) (2 tiết)',
        y: '- Nắm vững kỹ thuật và thực hiện đúng các động tác chạy tại chỗ, tay ngực, vươn người, bật tách chụm chân của Bài thể dục nhịp điệu lớp 8.\n- Thể hiện sự sôi nổi, khỏe khoắn, dẻo dai và cảm thụ âm nhạc tốt.',
        eq: 'Loa âm thanh công suất lớn, bài nhạc thể dục Aerobic lớp 8 sôi động',
        nls: '3.2.TC2a',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 3.1.TC2b] Ghi lại video đồng diễn nhóm và biên tập clip ngắn có chèn hiệu ứng âm nhạc.\n• [Mã AI: 8.D1.1] AI phân tích nhịp phách âm nhạc (BPM) và gợi ý bài nhạc phù hợp với tốc độ vận động.'
      },
      {
        w: 5,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Bài 2: Bài thể dục nhịp điệu (động tác lườn, bật nhảy co gối, di chuyển chéo, bật nhảy - tay cao) (2 tiết)',
        y: '- Thực hiện chuẩn xác các động tác lườn, bật nhảy co gối, di chuyển chéo và bật nhảy tay cao.\n- Phối hợp liên kết hoàn chỉnh toàn bộ Bài thể dục nhịp điệu lớp 8 trên nền nhạc sôi động.',
        eq: 'Loa kéo Bluetooth, thảm tập thể dục nhịp điệu',
        nls: '2.1.TC2b',
        ai: '8.C5.1',
        dc: '• [Mã NLS: 2.4.TC2a] Hợp tác nhóm sáng tạo đội hình đồng diễn thể dục nhịp điệu trên bảng tương tác số.\n• [Mã AI: 8.C5.1] AI nhận diện tư thế đánh giá độ cao bật nhảy và độ đồng đều của đội hình.'
      },
      {
        w: 6,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Hoàn thiện Bài thể dục nhịp điệu lớp 8 theo nhóm tổ (2 tiết)',
        y: '- Biểu diễn thuần thục toàn bộ bài thể dục nhịp điệu theo nhóm tổ đều, đẹp, phong thái tự tin.\n- Rèn luyện năng lực thẩm mỹ vận động và tinh thần đồng đội gắn kết.',
        eq: 'Loa nhạc, sân tập thoáng mát',
        nls: '3.2.TC2a',
        ai: '8.B1.1',
        dc: '• [Mã NLS: 3.2.TC2a] Sản xuất video clip hoàn chỉnh dự thi đồng diễn thể dục nhịp điệu cấp trường.\n• [Mã AI: 8.B1.1] Nhận thức vấn đề bản quyền âm nhạc kỹ thuật số khi sử dụng nhạc nền cho bài thi thể dục.'
      },
      {
        w: 7,
        t: 'Ôn tập & Luyện tập phối hợp',
        n: 'Luyện tập phối hợp kỹ thuật Chạy cự li ngắn 100m và Bài thể dục nhịp điệu lớp 8 (2 tiết)',
        y: '- Rèn luyện độ thuần thục bài thể dục nhịp điệu và hoàn thiện phản xạ xuất phát thấp chạy 100m.\n- Nâng cao thể lực tốc độ và sức bền chung.',
        eq: 'Bàn đạp xuất phát, còi, đồng hồ bấm giây, loa nhạc',
        nls: '1.3.TC2a',
        ai: '8.A1.1',
        dc: '• [Mã NLS: 1.3.TC2b] Quản lý nhật ký rèn luyện thể lực cá nhân trên ứng dụng điện tử trường học.\n• [Mã AI: 8.A1.1] AI tổng hợp và đưa ra lời khuyên phân bổ thời gian tập luyện và nghỉ ngơi hợp lí.'
      },
      {
        w: 8,
        t: 'Ôn tập chuẩn bị kiểm tra giữa HK1',
        n: 'Ôn tập tổng hợp kỹ năng vận động chuẩn bị kiểm tra giữa Học kỳ 1 môn GDTC 8 (2 tiết)',
        y: '- Nắm vững quy chuẩn đánh giá kỹ thuật chạy 100m và biểu diễn thể dục nhịp điệu.\n- Khắc phục các lỗi sai sót về biên độ và kỹ thuật tiếp đất; tự tin bước vào kỳ kiểm tra.',
        eq: 'Bàn đạp xuất phát, đồng hồ bấm giây, còi, loa nhạc',
        nls: '5.4.TC2a',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 5.4.TC2a] Tự đánh giá mức độ thuần thục qua bảng tiêu chí số (Rubric đánh giá kỹ thuật thể thao).\n• [Mã AI: 8.C2.1] AI hỗ trợ so sánh video thực hành của học sinh với video mẫu của vận động viên chuẩn.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục thể chất 8 (Chạy cự li ngắn 100m & Bài thể dục nhịp điệu) (2 tiết)',
        y: '- Đánh giá mức độ hoàn thiện kỹ thuật Chạy cự li ngắn 100m (xuất phát thấp) và Bài thể dục nhịp điệu theo quy định.\n- Nâng cao tính kỷ luật, ý thức trung thực và tinh thần vượt khó trong tập luyện.',
        eq: 'Bàn đạp xuất phát, đồng hồ bấm giây chuyên dụng, còi, loa nhạc, phiếu chấm điểm',
        nls: '1.1.TC2b',
        ai: '8.A3.3',
        dc: '• [Mã NLS: 1.2.TC2a] Số hóa bảng kết quả đánh giá giữa kỳ 1 môn GDTC 8 lên cơ sở dữ liệu học tập.\n• [Mã AI: 8.A3.3] Thực hiện trách nhiệm giải trình và bảo mật thông tin điểm số thể lực của học sinh.'
      },
      {
        w: 10,
        t: 'Chủ đề 2. Nhảy cao kiểu bước qua',
        n: 'Chủ đề 2. Nhảy cao kiểu bước qua - Bài 1: Kĩ thuật giậm nhảy đá lăng (2 tiết)',
        y: '- Xác định được chân giậm nhảy và chân đá lăng; thực hiện đúng kỹ thuật giậm nhảy đá lăng thẳng hướng lên cao.\n- Thực hiện các bài tập bổ trợ phát triển sức bật: nhảy đá lăng chạm vật trên cao, nhảy cóc, bật cao có đà.',
        eq: 'Trụ nhảy cao, xà mềm (dây cao su), đệm nhảy cao êm, còi',
        nls: '4.1.TC2c',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 4.2.TC2b] Xem infographic quy chuẩn an toàn khi tập nhảy cao (sử dụng đệm dày, xà mềm chống va đập).\n• [Mã AI: 8.C1.1] Mô phỏng 3D góc đá lăng và lực giậm nhảy tạo động năng nâng trọng tâm cơ thể qua xà.'
      },
      {
        w: 11,
        t: 'Chủ đề 2. Nhảy cao kiểu bước qua',
        n: 'Chủ đề 2. Nhảy cao kiểu bước qua - Bài 2: Kĩ thuật chạy đà kết hợp với giậm nhảy (2 tiết)',
        y: '- Nắm vững góc độ chạy đà (30-40 độ so với xà) và cự li đà (5-7 bước đà).\n- Thực hiện nhịp nhàng 3 bước đà cuối (nhanh, dài, thấp dần trọng tâm) kết hợp giậm nhảy bộc phát cực đại vào điểm giậm.',
        eq: 'Trụ xà nhảy cao, thước đo xà, đệm mút thể thao, cờ đánh dấu đà',
        nls: '5.2.TC2b',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 5.2.TC2b] Sử dụng ứng dụng quay chậm (Slow-motion) phân tích khoảnh khắc đặt chân giậm nhảy gót $\\rightarrow$ mũi.\n• [Mã AI: 8.C2.1] AI Motion Tracking đo đạc góc giậm nhảy và tốc độ chạy đà trước xà.'
      },
      {
        w: 12,
        t: 'Chủ đề 2. Nhảy cao kiểu bước qua',
        n: 'Chủ đề 2. Nhảy cao kiểu bước qua - Bài 3: Kĩ thuật trên không và rơi xuống cát (đệm) (2 tiết)',
        y: '- Nắm vững kỹ thuật qua xà: khi chân lăng qua xà nhanh chóng gập thân về trước và xoay mũi chân vào trong; tiếp theo nâng nhanh chân giậm qua xà.\n- Tiếp đất bằng chân lăng (hoặc hai chân), uốn gối hoãn xung giảm chấn an toàn tuyệt đối trên đệm.',
        eq: 'Trụ xà nhảy cao tiêu chuẩn, đệm mút dày 40cm, thước đo xà',
        nls: '4.3.TC2a',
        ai: '8.C5.1',
        dc: '• [Mã NLS: 4.3.TC2a] Tra cứu kỹ thuật hoãn xung và phục hồi cơ bắp chống chấn thương khớp gối, cổ chân.\n• [Mã AI: 8.C5.1] AI phân tích quỹ đạo trọng tâm cơ thể (Center of Mass) vượt qua xà nhảy cao.'
      },
      {
        w: 13,
        t: 'Chủ đề 2. Nhảy cao kiểu bước qua',
        n: 'Chủ đề 2. Nhảy cao kiểu bước qua - Bài 4: Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu bước qua & Nâng mức xà (2 tiết)',
        y: '- Phối hợp hoàn chỉnh liên tục 4 giai đoạn: Chạy đà $\\rightarrow$ Giậm nhảy $\\rightarrow$ Qua xà $\\rightarrow$ Rơi xuống đệm an toàn.\n- Vượt qua các mức xà thử thách từ 1.05m đến 1.25m theo chuẩn lứa tuổi lớp 8.',
        eq: 'Trụ xà nhảy cao, đệm nhảy cao, thước đo xà chuẩn',
        nls: '2.5.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 2.1.TC2b] Làm việc nhóm phân công điều chỉnh mức xà, đo đạc và quay video phân tích kỹ thuật.\n• [Mã AI: 8.D1.1] AI phân tích nguyên nhân phạm quy (chạm xà bằng gót/mông) và đưa ra bài tập sửa lỗi.'
      },
      {
        w: 14,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 1: Bài tập bổ trợ trong chạy giữa quãng & Bài 2: Bài tập bổ trợ trong xuất phát và tăng tốc độ (2 tiết)',
        y: '- Thực hiện thuần thục các bài tập bổ trợ chạy giữa quãng và phân phối sức trên cự li 800m (nam) / 600m (nữ).\n- Thực hiện xuất phát cao và tăng tốc độ vào đường vòng trong hợp lí.',
        eq: 'Đường chạy quanh sân trường, còi, đồng hồ bấm giây',
        nls: '1.1.TC2b',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm các bài tập phát triển ngưỡng yếm khí (Lactate Threshold) trong chạy cự li trung bình.\n• [Mã AI: 8.C1.1] AI phân tích đồ thị nhịp tim từ thiết bị đeo tay thông minh để cảnh báo quá tải.'
      },
      {
        w: 15,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Bài 3: Phối hợp các giai đoạn trong chạy cự li trung bình (2 tiết)',
        y: '- Phối hợp hoàn chỉnh các giai đoạn trong chạy cự li trung bình: Xuất phát $\\rightarrow$ Chạy giữa quãng $\\rightarrow$ Về đích.\n- Rèn luyện ý chí kiên trì, khả năng phân phối sức bền bỉ trên toàn cự li.',
        eq: 'Đường chạy tiêu chuẩn, còi, đồng hồ bấm giây điện tử',
        nls: '5.2.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 5.2.TC2b] Lưu trữ và vẽ biểu đồ tốc độ (Pacing chart) qua từng vòng chạy trên phần mềm bảng tính.\n• [Mã AI: 8.D1.1] AI gợi ý chiến thuật Pacing tối ưu hóa thành tích chạy bền lớp 8.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục thể chất 8 (Nhảy cao kiểu bước qua & Chạy cự li trung bình) (2 tiết)',
        y: '- Đánh giá mức độ hoàn thiện 4 giai đoạn kỹ thuật Nhảy cao kiểu bước qua và thành tích Chạy cự li trung bình.\n- Nâng cao tinh thần thi đấu trung thực, kỷ luật và ý thức tự giác rèn luyện thân thể.',
        eq: 'Đề kiểm tra chuẩn ma trận, trụ xà nhảy cao, đệm mút, đồng hồ bấm giây, sổ điểm',
        nls: '1.2.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu chuẩn đánh giá xếp loại thể chất cuối học kỳ 1 lớp 8 theo quy định Bộ GD&ĐT.\n• [Mã AI: 8.D1.1] Hệ thống số tự động phân tích dữ liệu và xếp loại thể chất học sinh HK1.'
      },
      {
        w: 17,
        t: 'Chữa bài & Thể thao tự chọn',
        n: 'Chữa bài kiểm tra cuối HK1 & Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Kỹ thuật chuyên sâu lớp 8 (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; Cầu lông: Kỹ thuật di chuyển lùi đánh cầu cao tay bên phải và đập cầu thuận tay.\n- Bóng đá: Đá bóng bằng mu ngoài; Bóng rổ: Chuyền bóng hai tay trên đầu.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 5, bóng rổ số 7, trụ rổ, cột lưới',
        nls: '2.5.TC2b',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 2.1.TC2b] Xem video 3D slow-motion phân tích điểm tiếp xúc bóng/cầu và góc gập cổ tay khi đập cầu/sút mu ngoài.\n• [Mã AI: 8.C2.1] AI phân tích lực va chạm và vận tốc xuất phát của quả cầu lông khi đập cầu.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Giao lưu trò chơi vận động, thể thao học đường Lớp 8 (2 tiết)',
        y: '- Sơ kết, đánh giá quá trình học tập và rèn luyện thể chất trong Học kỳ 1; tổ chức giao lưu thể thao và trò chơi vận động.',
        eq: 'Còi, bóng, cờ, loa truyền thông',
        nls: '2.4.TC2a',
        ai: '8.A1.1',
        dc: '• [Mã NLS: 2.5.TC2b] Hợp tác tổ chức hoạt động thi đua trò chơi thể thao tập thể lớp 8.\n• [Mã AI: 8.A1.1] AI hỗ trợ lập bảng tổng kết thành tích và xếp hạng thi đua rèn luyện thể chất HK1.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Kiến thức chung & Chạy cự li ngắn',
        n: 'Phần một: Đánh giá và điều chỉnh chế độ dinh dưỡng trong tập luyện thể thao (1 tiết) & Chủ đề 1. Chạy cự li ngắn 100m: Củng cố xuất phát thấp (1 tiết)',
        y: '- Biết cách theo dõi cân nặng, chỉ số BMI và tự điều chỉnh thực đơn dinh dưỡng khi cường độ tập luyện tăng cao.\n- Củng cố kỹ thuật đóng bàn đạp xuất phát thấp và phản xạ bứt tốc nhanh.',
        eq: 'Cân đo sức khỏe, bàn đạp xuất phát thấp, còi, đường chạy 100m',
        nls: '1.1.TC2b',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 1.1.TC2b] Sử dụng ứng dụng quản lý dinh dưỡng (MyFitnessPal/YAZIO) theo dõi lượng calo nạp vào.\n• [Mã AI: 8.C1.1] AI Nutrition Bot đưa ra khuyến nghị thực đơn giàu dinh dưỡng thể thao.'
      },
      {
        w: 20,
        t: 'Chủ đề 2. Nhảy cao kiểu bước qua',
        n: 'Chủ đề 2. Nhảy cao kiểu bước qua - Luyện tập nâng cao mức xà và kỹ thuật tiếp đất an toàn (2 tiết)',
        y: '- Hoàn thiện kỹ thuật giậm nhảy tạo lực bật cao tối đa và phối hợp uốn thân qua xà.\n- Tiếp đất êm ái trên đệm mút, nâng cao mức xà chinh phục thành tích mới.',
        eq: 'Trụ xà nhảy cao, đệm mút thể thao, thước đo xà',
        nls: '5.2.TC2b',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 5.2.TC2b] Quay video góc chậm (240fps) phân tích chuyển động chân giậm qua xà.\n• [Mã AI: 8.C2.1] AI nhận diện và cảnh báo nguy cơ va chạm xà dựa trên góc tiếp cận.'
      },
      {
        w: 21,
        t: 'Chủ đề 4. Bài tập thể dục',
        n: 'Chủ đề 4. Bài tập thể dục - Đồng diễn Bài thể dục nhịp điệu theo nhóm tổ trên nền nhạc sôi động (2 tiết)',
        y: '- Đồng diễn bài thể dục nhịp điệu với tính đồng bộ cao, động tác dứt khoát, biểu cảm tự tin.\n- Rèn luyện thể lực chung và phát triển năng khiếu nghệ thuật vận động.',
        eq: 'Loa âm thanh, nhạc bài tập thể dục nhịp điệu lớp 8',
        nls: '2.1.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 2.4.TC2a] Hợp tác trực tuyến chỉnh sửa kịch bản âm nhạc và video biểu diễn của nhóm.\n• [Mã AI: 8.D1.1] Ứng dụng AI phân tích độ đồng bộ nhịp nhàng của các thành viên trong tổ.'
      },
      {
        w: 22,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 1: Di chuyển lùi đánh cầu cao tay bên phải / Đá bóng bằng mu ngoài và đánh đầu / Dẫn bóng (2 tiết)',
        y: '- Cầu lông: Thực hiện thuần thục kỹ thuật di chuyển lùi đánh cầu cao tay bên phải đón cầu sâu cuối sân.\n- Bóng đá: Thực hiện chuẩn xác kỹ thuật đá bóng bằng mu ngoài bàn chân và kỹ thuật đánh đầu bằng trán giữa đưa bóng vào lưới.\n- Bóng rổ: Nhuần nhuyễn kỹ thuật dẫn bóng qua người và đổi hướng linh hoạt.',
        eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 5, bóng rổ, cọc tiêu',
        nls: '2.2.TC2c',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 2.5.TC2b] Xem mô phỏng 3D vùng tiếp xúc trán giữa với bóng khi bật nhảy đánh đầu.\n• [Mã AI: 8.C2.1] AI phân tích lực bật nhảy và điểm rơi của quả bóng bổng.'
      },
      {
        w: 23,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 2: Kĩ thuật đập cầu thuận tay / Dừng bóng bổng bằng đùi và lòng bàn chân / Chuyền bóng hai tay trên đầu (2 tiết)',
        y: '- Cầu lông: Nắm vững kỹ thuật đập cầu thuận tay (Smash) tạo đường cầu cắm nhanh uy lực.\n- Bóng đá: Thực hiện chuẩn xác kỹ thuật dừng bóng bổng bằng đùi và lòng bàn chân khống chế bóng êm.\n- Bóng rổ: Thực hiện kỹ thuật chuyền và bắt bóng hai tay trên đầu vượt qua tầm với của đối phương.',
        eq: 'Sân bãi chuyên môn, dụng cụ thể thao tự chọn lớp 8',
        nls: '5.2.TC2b',
        ai: '8.D2.1',
        dc: '• [Mã NLS: 5.2.TC2b] Sử dụng thiết bị đo tốc độ đập cầu (Speed radar) trong luyện tập cầu lông.\n• [Mã AI: 8.D2.1] AI phân tích góc cắm của quả đập cầu để đề xuất điểm rơi hiểm hóc.'
      },
      {
        w: 24,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 3: Di chuyển ngang đập cầu thuận tay / Dẫn bóng bằng mu giữa / Hai bước ném rổ một tay dưới thấp (2 tiết)',
        y: '- Cầu lông: Phối hợp kỹ thuật di chuyển ngang đập cầu thuận tay tấn công linh hoạt.\n- Bóng đá: Thực hiện kỹ thuật dẫn bóng bằng mu giữa bàn chân với tốc độ cao luồn lách qua cọc tiêu.\n- Bóng rổ: Thực hiện đúng kỹ thuật hai bước ném rổ một tay dưới thấp (Underhand Layup).',
        eq: 'Sân bãi tiêu chuẩn, còi, dụng cụ chuyên môn thể thao tự chọn lớp 8',
        nls: '2.5.TC2b',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 2.1.TC2b] Phân tích chiến thuật nhóm 3 đánh 2 qua ứng dụng mô phỏng chiến thuật số.\n• [Mã AI: 8.C2.1] AI phân tích độ cao và góc tiếp xúc bóng rổ vào bảng rổ để đạt tỷ lệ vào rổ cao nhất.'
      },
      {
        w: 25,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Phối hợp kỹ chiến thuật tấn công, phòng ngự và đấu tập theo luật chính thức (2 tiết)',
        y: '- Phối hợp nhịp nhàng giữa các tuyến tấn công và phòng ngự trong thi đấu thực tế.\n- Nắm vững và chấp hành nghiêm chỉnh luật thi đấu chính thức của môn thể thao tự chọn.',
        eq: 'Còi, đồng hồ điện tử, bảng điểm số, dụng cụ thi đấu đầy đủ',
        nls: '3.2.TC2a',
        ai: '8.D2.1',
        dc: '• [Mã NLS: 3.1.TC2b] Vận hành hệ thống tính điểm và hiển thị thời gian thi đấu trên màn hình LED số.\n• [Mã AI: 8.D2.1] AI thống kê chỉ số hiệu quả thi đấu cá nhân (Player Efficiency Rating - PER).'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục thể chất 8 (Thể thao tự chọn & Nhảy cao kiểu bước qua) (2 tiết)',
        y: '- Đánh giá mức độ thành thạo kỹ thuật Thể thao tự chọn và thành tích Nhảy cao kiểu bước qua theo chuẩn.\n- Đảm bảo tính khách quan, nghiêm túc và an toàn trong thi cử.',
        eq: 'Trụ xà nhảy cao, đệm mút, thước đo xà, dụng cụ thể thao, phiếu chấm điểm',
        nls: '1.2.TC2a',
        ai: '8.A3.3',
        dc: '• [Mã NLS: 1.2.TC2b] Tra cứu thang điểm đánh giá kỹ thuật và thành tích thể thao lớp 8 trên cổng thông tin số.\n• [Mã AI: 8.A3.3] Thực hiện lưu trữ hồ sơ minh chứng kiểm tra minh bạch trên nền tảng đám mây.'
      },
      {
        w: 27,
        t: 'Chủ đề 3. Chạy cự li trung bình',
        n: 'Chủ đề 3. Chạy cự li trung bình - Luyện tập sức bền tốc độ và phương pháp phân phối sức (2 tiết)',
        y: '- Thực hiện chạy cự li 800m (nam) / 600m (nữ) với chiến thuật phân bổ sức hợp lí, bứt phá về đích.\n- Thực hiện đúng các bài tập căng cơ, thả lỏng, hít thở sâu hồi tĩnh sau vận động.',
        eq: 'Đường chạy quanh sân trường, còi thể thao, đồng hồ bấm giây',
        nls: '4.3.TC2a',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 4.3.TC2a] Theo dõi chỉ số phục hồi nhịp tim sau vận động cường độ cao qua vòng đeo tay thông minh.\n• [Mã AI: 8.C1.1] AI đưa ra khuyến nghị thời gian nghỉ ngơi và lượng nước điện giải cần bổ sung.'
      },
      {
        w: 28,
        t: 'Trò chơi vận động & Rèn thể lực',
        n: 'Chủ đề 1. Chạy cự li ngắn 100m & Chủ đề 2. Nhảy cao - Trò chơi phát triển sức bộc phát cơ chân và sức nhanh (2 tiết)',
        y: '- Tham gia hào hứng các trò chơi: "Chạy tiếp sức con thoi 4x50m", "Bật xa tiếp sức vượt chướng ngại vật".\n- Phát triển tối đa sức mạnh tốc độ và sức bật của đôi chân.',
        eq: 'Gậy tiếp sức, cọc tiêu, cờ hiệu, vạch đích',
        nls: '2.1.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 2.2.TC2c] Xem sơ đồ bố trí trò chơi vận động trực quan trên tablet ngoài trời.\n• [Mã AI: 8.D1.1] AI gợi ý điều chỉnh luật chơi để tạo tính thử thách và cạnh tranh công bằng giữa các tổ.'
      },
      {
        w: 29,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Chiến thuật thi đấu đơn, đôi / phối hợp nhóm nâng cao (2 tiết)',
        y: '- Vận dụng các chiến thuật: tấn công nhanh, phòng ngự khu vực, bọc lót không gian trong thi đấu.\n- Nâng cao tư duy chiến thuật và bản lĩnh thi đấu thể thao.',
        eq: 'Sân bãi tiêu chuẩn, còi, áo bib phân đội, dụng cụ thể thao',
        nls: '2.4.TC2a',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 2.5.TC2b] Phân tích video băng ghi hình trận đấu bằng phần mềm chiến thuật thể thao số.\n• [Mã AI: 8.C2.1] AI vẽ bản đồ nhiệt (Heatmap) thể hiện tầm hoạt động của từng vị trí trên sân.'
      },
      {
        w: 30,
        t: 'Phần ba: Thể thao tự chọn',
        n: 'Phần ba: Thể thao tự chọn - Tổ chức giải đấu giao hữu và thực hành điều hành trọng tài (2 tiết)',
        y: '- Trực tiếp tham gia thi đấu giải giao hữu hoặc thực hành điều hành công tác trọng tài chính, trọng tài bàn.\n- Rèn luyện tác phong quyết đoán, chính xác và trung thực tuyệt đối.',
        eq: 'Bảng điểm số điện tử, còi, thẻ trọng tài, biên bản thi đấu',
        nls: '3.2.TC2a',
        ai: '8.A1.1',
        dc: '• [Mã NLS: 3.1.TC2b] Sử dụng ứng dụng quản lý giải đấu tự động cập nhật bảng xếp hạng và lịch thi đấu.\n• [Mã AI: 8.A1.1] Công cụ AI hỗ trợ phát hiện lỗi chạm lưới/chạm tay/việt vị từ góc quay camera.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục thể chất 8 (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 8 theo chuẩn chương trình GDPT 2018.\n- Đảm bảo tính công bằng, khách quan, chính xác.',
        eq: 'Đề kiểm tra ma trận chuẩn, trụ xà nhảy cao, đệm mút, còi, đồng hồ bấm giây, sổ điểm',
        nls: '1.1.TC2b',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 1.2.TC2a] Tra cứu barem đánh giá xếp loại thể chất cuối năm học theo Thông tư 22/2021/TT-BGDĐT.\n• [Mã AI: 8.D1.1] Hệ thống tự động xuất bảng điểm học tập và xếp loại môn GDTC 8.'
      },
      {
        w: 32,
        t: 'Chữa bài & Đánh giá thể lực',
        n: 'Chữa bài kiểm tra cuối HK2 & Kiểm tra đánh giá thể lực học sinh lớp 8 theo tiêu chuẩn rèn luyện thân thể (QĐ 53/2008/QĐ-BGDĐT) (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; thực hiện nghiêm túc 4 nội dung kiểm tra thể lực chuẩn: Chạy 30m xuất phát cao, Bật xa tại chỗ, Chạy bền 800m/600m, Nằm ngửa gập bụng 30 giây.',
        eq: 'Thảm đo bật xa, đồng hồ bấm giây, đồng hồ đo thời gian gập bụng',
        nls: '1.3.TC2a',
        ai: '8.C4.1',
        dc: '• [Mã NLS: 1.3.TC2b] Nhập kết quả kiểm tra thể lực vào hệ thống cơ sở dữ liệu quốc gia về thể chất học sinh.\n• [Mã AI: 8.C4.1] AI tự động phân tích biểu đồ tăng trưởng thể lực và thể lực tim mạch học sinh lớp 8.'
      },
      {
        w: 33,
        t: 'Hoạt động trải nghiệm thể thao',
        n: 'Hoạt động trải nghiệm thể thao / Hội thao học đường cấp trường môn Điền kinh và Thể thao tự chọn (2 tiết)',
        y: '- Tham gia tranh tài hoặc cổ vũ các môn thi đấu: Chạy 100m, Nhảy cao, Cầu lông, Bóng đá mini.\n- Xây dựng tinh thần đoàn kết, tự hào tập thể và lan tỏa nếp sống rèn luyện thể thao học đường.',
        eq: 'Sân bãi thi đấu, cờ giải thưởng, băng rôn, loa phát thanh',
        nls: '3.2.TC2a',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 3.1.TC2b] Thiết kế bảng tin truyền thông và tường thuật hình ảnh ngày hội thể thao trường học.\n• [Mã AI: 8.D1.1] AI tự động tạo video tổng hợp các pha bóng đẹp và kỷ lục thể thao mới của khối 8.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp & Kế hoạch rèn luyện hè',
        n: 'Ôn tập tổng hợp Thể thao tự chọn & Hướng dẫn kế hoạch tự rèn luyện thể thao trong dịp hè (2 tiết)',
        y: '- Hoàn thiện kỹ thuật môn thể thao tự chọn yêu thích; lập kế hoạch tự tập luyện thể thao mỗi ngày trong dịp hè.\n- Nâng cao ý thức phòng chống đuối nước, tai nạn thương tích và bảo vệ sức khỏe mùa hè.',
        eq: 'Tài liệu hướng dẫn rèn luyện thể lực hè, infographic kỹ năng an toàn',
        nls: '4.3.TC2a',
        ai: '8.A1.1',
        dc: '• [Mã NLS: 4.3.TC2a] Tra cứu kỹ năng an toàn phòng chống đuối nước và kỹ năng bơi lội cơ bản trên môi trường số.\n• [Mã AI: 8.A1.1] Chatbot AI hỗ trợ thiết lập thời khóa biểu tập luyện thể thao mùa hè tại nhà.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Giáo dục thể chất 8 cả năm (2 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 8 theo chuẩn chương trình GDPT 2018.\n- Biểu dương tinh thần rèn luyện và trao giải thưởng phong trào thể thao khối 8.',
        eq: 'Bảng tổng hợp điểm số năm học, sổ theo dõi giáo viên, giấy khen',
        nls: '1.3.TC2a',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 1.3.TC2b] Hoàn tất đồng bộ học bạ số môn Giáo dục thể chất 8 trên phần mềm quản lý trường học.\n• [Mã AI: 8.D1.1] AI tổng hợp báo cáo chỉ số phát triển thể chất toàn diện học sinh khối 8.'
      }
    ];

    grade8Weeks.forEach((item) => {
      const isGK = item.w === 9 || item.w === 26;
      const isCK = item.w === 16 || item.w === 31;

      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 2,
        yccd: item.y,
        equipment: item.eq,
        location: 'Sân thể dục / Sân vận động trường học',
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Đánh giá thể lực QĐ 53' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: GIÁO DỤC THỂ CHẤT (35 TUẦN X 2 TIẾT = 70 TIẾT)
  // Bám sát 100% danh mục bài học SGK GDTC 9 Kết nối tri thức trong gdtc-thcs.md
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Kiến thức chung & Chạy cự li ngắn (100 m)',
      n: 'Phần một: Kiến thức chung - Sử dụng các yếu tố tự nhiên và dinh dưỡng để rèn luyện sức khoẻ, phát triển thể chất (1 tiết) & Phần hai: Chủ đề 1. Chạy cự li ngắn (100 m) - Bài 1: Củng cố kĩ thuật xuất phát thấp và chạy lao sau xuất phát (1 tiết)',
      y: '- Biết cách phối hợp nhuần nhuyễn giữa chế độ dinh dưỡng lành mạnh với các tác nhân tự nhiên (không khí, nước, ánh sáng, nhiệt độ) nhằm tối ưu hiệu quả nâng cao sức bền và rèn luyện thể chất.\n- Thực hiện chuẩn xác kỹ thuật đóng bàn đạp xuất phát thấp, phản xạ xuất phát tức thì theo tiếng còi và duy trì góc ngả thân người bứt tốc trong giai đoạn chạy lao.',
      eq: 'Bàn đạp xuất phát thấp, còi chuyên dụng, tranh ảnh yếu tố tự nhiên và thể chất',
      nls: '1.1.TC2b',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 1.1.TC2b] Tra cứu các nghiên cứu khoa học thể thao về tác động của vi chất dinh dưỡng và tắm nắng sớm đối với mật độ xương và sức bền thể lực.\n• [Mã AI: 9.A1.1] Nhận thức về các thách thức đạo đức khi sử dụng dữ liệu sinh trắc học cá nhân trên các ứng dụng sức khỏe AI.'
    },
    {
      w: 2,
      t: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
      n: 'Chủ đề 1. Chạy cự li ngắn (100 m) - Bài 2: Củng cố kĩ thuật chạy giữa quãng và về đích & Phối hợp các giai đoạn chạy cự li ngắn (100 m) (2 tiết)',
      y: '- Củng cố kỹ thuật chạy giữa quãng: đạp sau mạnh, đẩy hông về trước, nâng cao đùi, tiếp xúc đất bằng nửa trước bàn chân.\n- Nắm vững kỹ thuật về đích và đánh đích dũng mãnh bằng ngực/vai; phối hợp liên hoàn 4 giai đoạn chạy ngắn 100m đạt tốc độ cực đại.',
      eq: 'Bàn đạp xuất phát, dây đích, còi, đồng hồ bấm giây điện tử, đường chạy 100m',
      nls: '5.2.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 5.2.TC2b] Ghi lại video chuyển động chạy 100m bằng thiết bị số để phân tích độ dài và tần số bước chạy.\n• [Mã AI: 9.C2.1] Ứng dụng AI phân tích dáng chạy (Running Gait AI Analysis) để phát hiện và chỉnh sửa các lỗi lệch trục cơ thể.'
    },
    {
      w: 3,
      t: 'Chủ đề 1. Chạy cự li ngắn (100 m)',
      n: 'Chủ đề 1. Chạy cự li ngắn (100 m) - Luyện tập nâng cao tốc độ cực đại và kỹ thuật đánh đích 100m (2 tiết)',
      y: '- Thực hiện các bài tập bổ trợ phát triển tốc độ tối đa: chạy đạp sau, chạy biến tốc 30m x 3 lần, chạy lặp lại tốc độ cao.\n- Cải thiện thành tích chạy 100m cá nhân đạt chuẩn học sinh giỏi thể dục.',
      eq: 'Bàn đạp xuất phát, đồng hồ bấm giây, còi, dây đích',
      nls: '5.3.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 5.3.TC2a] Ứng dụng hệ thống cảm biến quang học đo thời gian phản xạ xuất phát và vận tốc từng chặng 10m.\n• [Mã AI: 9.D1.1] AI lập mô hình dự báo thành tích chạy 100m dựa trên các thông số thể lực đầu vào.'
    },
    {
      w: 4,
      t: 'Chủ đề 4. Bài tập thể dục',
      n: 'Chủ đề 4. Bài tập thể dục - Bài 1: Bài thể dục nhịp điệu (Phần 1) (2 tiết)',
      y: '- Nắm vững và thực hiện chuẩn xác các động tác trong Phần 1 của Bài thể dục nhịp điệu lớp 9 (các động tác tay ngực, vươn người, lườn, xoay vặn thân).\n- Thể hiện sự dẻo dai, uyển chuyển, động tác dứt khoát theo nhịp nhạc sôi động.',
      eq: 'Loa kéo Bluetooth công suất lớn, bài nhạc thể dục Aerobic lớp 9 sôi động',
      nls: '3.2.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 3.1.TC2b] Ghi hình bài tập thể dục nhịp điệu Phần 1 và biên tập video số chất lượng cao.\n• [Mã AI: 9.D1.1] Sử dụng AI hỗ trợ phối ghép âm nhạc điện tử khớp với nhịp phách của bài thể dục.'
    },
    {
      w: 5,
      t: 'Chủ đề 4. Bài tập thể dục',
      n: 'Chủ đề 4. Bài tập thể dục - Bài 2: Bài thể dục nhịp điệu (Phần 2) (2 tiết)',
      y: '- Học thuộc và thực hiện chính xác các động tác trong Phần 2 của Bài thể dục nhịp điệu lớp 9 (các động tác bật nhảy, co gối, di chuyển đổi hướng, điều hòa).\n- Phối hợp liên kết hoàn chỉnh giữa Phần 1 và Phần 2 tạo thành bài thể dục nhịp điệu hoàn chỉnh.',
      eq: 'Loa âm thanh, thảm thể dục nhịp điệu',
      nls: '2.1.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.4.TC2a] Hợp tác nhóm xây dựng sơ đồ di chuyển đội hình đồng diễn thể dục nhịp điệu trên nền tảng số.\n• [Mã AI: 9.C2.1] AI Motion Tracking đánh giá độ đồng đều và biên độ động tác của các thành viên.'
    },
    {
      w: 6,
      t: 'Chủ đề 4. Bài tập thể dục',
      n: 'Chủ đề 4. Bài tập thể dục - Hoàn thiện toàn bộ Bài thể dục nhịp điệu Lớp 9 trên nền nhạc sôi động (2 tiết)',
      y: '- Biểu diễn thuần thục toàn bộ bài thể dục nhịp điệu theo nhóm tổ đều, đẹp, phong thái tự tin, khỏe khoắn.\n- Rèn luyện năng lực cảm thụ âm nhạc, thẩm mỹ vận động và tinh thần đồng đội gắn kết.',
      eq: 'Loa âm thanh, sân tập thể dục thoáng mát',
      nls: '3.2.TC2a',
      ai: '9.B2.3',
      dc: '• [Mã NLS: 3.2.TC2a] Xuất bản video clip đồng diễn hoàn chỉnh dự thi Hội khỏe Phù Đổng cấp trường.\n• [Mã AI: 9.B2.3] Tôn trọng quyền tác giả và kiểm tra bản quyền số khi sử dụng các đoạn nhạc remix trên môi trường mạng.'
    },
    {
      w: 7,
      t: 'Ôn tập & Luyện tập phối hợp',
      n: 'Luyện tập phối hợp kỹ thuật Chạy cự li ngắn 100m và Bài thể dục nhịp điệu lớp 9 (2 tiết)',
      y: '- Rèn luyện độ thuần thục bài thể dục nhịp điệu và hoàn thiện phản xạ xuất phát thấp chạy 100m.\n- Nâng cao thể lực tốc độ và sức bền chung.',
      eq: 'Bàn đạp xuất phát, còi, đồng hồ bấm giây, loa nhạc',
      nls: '1.3.TC2a',
      ai: '9.A3.1',
      dc: '• [Mã NLS: 1.3.TC2b] Quản lý nhật ký rèn luyện thể lực cá nhân trên ứng dụng điện tử trường học.\n• [Mã AI: 9.A3.1] AI tổng hợp và đưa ra lời khuyên phân bổ thời gian tập luyện và nghỉ ngơi hợp lí.'
    },
    {
      w: 8,
      t: 'Ôn tập chuẩn bị kiểm tra giữa HK1',
      n: 'Ôn tập tổng hợp kỹ năng vận động chuẩn bị kiểm tra giữa Học kỳ 1 môn GDTC 9 (2 tiết)',
      y: '- Nắm vững quy chuẩn đánh giá kỹ thuật chạy 100m và biểu diễn thể dục nhịp điệu.\n- Khắc phục các lỗi sai sót về biên độ và kỹ thuật tiếp đất; tự tin bước vào kỳ kiểm tra.',
      eq: 'Bàn đạp xuất phát, đồng hồ bấm giây, còi, loa nhạc',
      nls: '5.4.TC2a',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 5.4.TC2a] Tự đánh giá mức độ thuần thục qua bảng tiêu chí số (Rubric đánh giá kỹ thuật thể thao).\n• [Mã AI: 9.C2.1] AI hỗ trợ so sánh video thực hành của học sinh với video mẫu của vận động viên chuẩn.'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục thể chất 9 (Chạy cự li ngắn 100m & Bài thể dục nhịp điệu) (2 tiết)',
      y: '- Đánh giá mức độ hoàn thiện kỹ thuật Chạy cự li ngắn 100m (xuất phát thấp) và Bài thể dục nhịp điệu theo quy định.\n- Nâng cao tính kỷ luật, ý thức trung thực và tinh thần vượt khó trong tập luyện.',
      eq: 'Bàn đạp xuất phát, đồng hồ bấm giây chuyên dụng, còi, loa nhạc, phiếu chấm điểm',
      nls: '1.2.TC2b',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 1.1.TC2b] Số hóa bảng kết quả đánh giá giữa kỳ 1 môn GDTC 9 lên cơ sở dữ liệu học tập.\n• [Mã AI: 9.A1.1] Thực hiện trách nhiệm giải trình và bảo mật thông tin điểm số thể lực của học sinh.'
    },
    {
      w: 10,
      t: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng',
      n: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng - Bài 1: Kĩ thuật giậm nhảy và chạy đà kết hợp giậm nhảy (2 tiết)',
      y: '- Xác định được chân giậm nhảy, góc độ chạy đà (30-40 độ so với xà) và cự li đà (7-9 bước đà).\n- Thực hiện đúng kỹ thuật giậm nhảy kết hợp đá lăng xoay thân nằm nghiêng về phía xà.',
      eq: 'Trụ xà nhảy cao, đệm nhảy cao êm, còi, thước đo xà',
      nls: '4.3.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 4.4.TC2a] Xem infographic quy chuẩn an toàn khi tập nhảy cao kiểu nằm nghiêng trên đệm mút.\n• [Mã AI: 9.C2.1] Mô phỏng 3D góc xoay hông và thân người nằm nghiêng song song với xà.'
    },
    {
      w: 11,
      t: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng',
      n: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng - Bài 2: Kĩ thuật trên không và rơi xuống cát (đệm) (2 tiết)',
      y: '- Nắm vững kỹ thuật qua xà kiểu nằm nghiêng: khi chân lăng qua xà thân người xoay nằm nghiêng song song với xà, gập nhanh chân giậm rút qua xà.\n- Tiếp đất an toàn bằng chân giậm (hoặc hai tay và chân giậm) trên đệm mút, uốn gối hoãn xung triệt để.',
      eq: 'Trụ xà nhảy cao tiêu chuẩn, đệm mút dày 40cm, thước đo xà',
      nls: '4.3.TC2a',
      ai: '9.C4.1',
      dc: '• [Mã NLS: 4.3.TC2a] Tra cứu các bài tập giãn cơ và bổ trợ lưng lườn phòng chống chấn thương cột sống.\n• [Mã AI: 9.C4.1] AI phân tích quỹ đạo trọng tâm cơ thể và thời điểm co chân giậm rút qua xà.'
    },
    {
      w: 12,
      t: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng',
      n: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng - Bài 3: Phối hợp các giai đoạn kĩ thuật nhảy cao kiểu nằm nghiêng (2 tiết)',
      y: '- Phối hợp hoàn chỉnh liên tục 4 giai đoạn: Chạy đà $\\rightarrow$ Giậm nhảy $\\rightarrow$ Qua xà kiểu nằm nghiêng $\\rightarrow$ Rơi xuống đệm an toàn.\n- Đạt thành tích nhảy cao đỉnh cao cấp THCS (từ 1.15m đến 1.35m) theo chuẩn lứa tuổi.',
      eq: 'Trụ xà nhảy cao, đệm nhảy cao, thước đo xà chuẩn',
      nls: '5.2.TC2b',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 5.2.TC2b] Quay video slow-motion (240fps) phân tích chuyển động xoay thân trên không.\n• [Mã AI: 9.D1.1] AI phân tích nguyên nhân chạm xà (do vai hay do gót chân) và đưa ra bài tập khắc phục.'
    },
    {
      w: 13,
      t: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng',
      n: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng - Luyện tập nâng cao thành tích qua xà và tiếp đất an toàn (2 tiết)',
      y: '- Hoàn thiện kỹ thuật giậm nhảy tạo lực bật cao tối đa và phối hợp uốn thân nằm nghiêng qua xà.\n- Tiếp đất êm ái trên đệm mút, nâng cao mức xà chinh phục kỷ lục cá nhân mới.',
      eq: 'Trụ xà nhảy cao, đệm mút thể thao, thước đo xà',
      nls: '2.5.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.1.TC2b] Làm việc nhóm phân công điều chỉnh mức xà, đo đạc và quay video phân tích kỹ thuật.\n• [Mã AI: 9.C2.1] AI lập đồ thị so sánh thành tích qua từng lần nhảy để điều chỉnh lực giậm nhảy.'
    },
    {
      w: 14,
      t: 'Chủ đề 3. Chạy cự li trung bình',
      n: 'Chủ đề 3. Chạy cự li trung bình - Bài 1: Củng cố kĩ thuật xuất phát và tăng tốc độ sau xuất phát (2 tiết)',
      y: '- Nắm vững kỹ thuật xuất phát cao cự li trung bình và kỹ năng tăng tốc độ chiếm vị trí đường chạy số 1.\n- Thực hiện các bài tập phân phối sức và kiểm soát nhịp tim trên cự li 1000m (nam) / 800m (nữ).',
      eq: 'Đường chạy quanh sân trường, còi, đồng hồ bấm giây',
      nls: '1.1.TC2b',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm các bài tập phát triển ngưỡng yếm khí (Lactate Threshold) trong chạy cự li trung bình.\n• [Mã AI: 9.A1.1] AI phân tích đồ thị nhịp tim từ thiết bị đeo tay thông minh để cảnh báo quá tải.'
    },
    {
      w: 15,
      t: 'Chủ đề 3. Chạy cự li trung bình',
      n: 'Chủ đề 3. Chạy cự li trung bình - Bài 2: Củng cố kĩ thuật chạy giữa quãng và về đích & Phối hợp các giai đoạn (2 tiết)',
      y: '- Phối hợp hoàn chỉnh các giai đoạn trong chạy cự li trung bình: Xuất phát $\\rightarrow$ Chạy giữa quãng $\\rightarrow$ Về đích.\n- Rèn luyện ý chí kiên trì, khả năng phân phối sức bền bỉ và bứt tốc về đích dũng mãnh.',
      eq: 'Đường chạy tiêu chuẩn, còi, đồng hồ bấm giây điện tử',
      nls: '5.2.TC2b',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 5.2.TC2b] Lưu trữ và vẽ biểu đồ tốc độ (Pacing chart) qua từng vòng chạy trên phần mềm bảng tính.\n• [Mã AI: 9.D1.1] AI gợi ý chiến thuật Pacing tối ưu hóa thành tích chạy bền lớp 9.'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục thể chất 9 (Nhảy cao kiểu nằm nghiêng & Chạy cự li trung bình) (2 tiết)',
      y: '- Đánh giá mức độ hoàn thiện 4 giai đoạn kỹ thuật Nhảy cao kiểu nằm nghiêng và thành tích Chạy cự li trung bình.\n- Nâng cao tinh thần thi đấu trung thực, kỷ luật và ý thức tự giác rèn luyện thân thể.',
      eq: 'Đề kiểm tra chuẩn ma trận, trụ xà nhảy cao, đệm mút, đồng hồ bấm giây, sổ điểm',
      nls: '1.2.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 1.2.TC2b] Tra cứu chuẩn đánh giá xếp loại thể chất cuối học kỳ 1 lớp 9 theo quy định Bộ GD&ĐT.\n• [Mã AI: 9.D1.1] Hệ thống số tự động phân tích dữ liệu và xếp loại thể chất học sinh HK1.'
    },
    {
      w: 17,
      t: 'Chữa bài & Thể thao tự chọn',
      n: 'Chữa bài kiểm tra cuối HK1 & Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Kỹ thuật đỉnh cao lớp 9 (2 tiết)',
      y: '- Chữa bài kiểm tra cuối HK1; Cầu lông: Bật nhảy đập cầu (Jump Smash); Bóng đá: Đá bóng bằng mu giữa; Bóng rổ: Đột phá qua người.',
      eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 5, bóng rổ số 7, trụ rổ, cột lưới',
      nls: '2.5.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.1.TC2b] Xem video 3D slow-motion phân tích điểm tiếp xúc bóng/cầu và động tác bật nhảy đập cầu/đột phá.\n• [Mã AI: 9.C2.1] AI phân tích lực bật nhảy và vận tốc xuất phát của quả cầu lông khi Jump Smash.'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Sơ kết Học kỳ 1 & Giao lưu trò chơi vận động, thể thao học đường Lớp 9 (2 tiết)',
      y: '- Sơ kết, đánh giá quá trình học tập và rèn luyện thể chất trong Học kỳ 1; tổ chức giao lưu thể thao và trò chơi vận động.',
      eq: 'Còi, bóng, cờ, loa truyền thông',
      nls: '2.4.TC2a',
      ai: '9.A3.1',
      dc: '• [Mã NLS: 2.5.TC2b] Hợp tác tổ chức hoạt động thi đua trò chơi thể thao tập thể lớp 9.\n• [Mã AI: 9.A3.1] AI hỗ trợ lập bảng tổng kết thành tích và xếp hạng thi đua rèn luyện thể chất HK1.'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Kiến thức chung & Chạy cự li ngắn',
      n: 'Phần một: Kết hợp yếu tố tự nhiên và dinh dưỡng lành mạnh để nâng cao sức bền thể lực (1 tiết) & Chủ đề 1. Chạy cự li ngắn 100m: Củng cố kỹ thuật (1 tiết)',
      y: '- Biết cách xây dựng chế độ dinh dưỡng giàu năng lượng và tận dụng ánh sáng tự nhiên, không khí sạch để phục hồi thể lực nhanh chóng chuẩn bị cho kỳ thi tuyển sinh vào lớp 10.\n- Củng cố kỹ thuật xuất phát thấp và bứt tốc chạy 100m.',
      eq: 'Tranh ảnh dinh dưỡng thể thao, bàn đạp xuất phát, còi, đường chạy 100m',
      nls: '1.1.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 1.1.TC2b] Sử dụng ứng dụng quản lý dinh dưỡng và thể thao cá nhân hóa trên smartphone.\n• [Mã AI: 9.C2.1] AI Nutrition Bot đưa ra khuyến nghị thực đơn giàu dinh dưỡng thể thao cho học sinh cuối cấp.'
    },
    {
      w: 20,
      t: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng',
      n: 'Chủ đề 2. Nhảy cao kiểu nằm nghiêng - Luyện tập hoàn thiện kỹ thuật xoay thân trên không (2 tiết)',
      y: '- Nhuần nhuyễn kỹ thuật giậm nhảy tạo lực bật cao tối đa và phối hợp xoay thân nằm nghiêng qua xà.\n- Tiếp đất êm ái trên đệm mút, nâng cao mức xà chinh phục thành tích đỉnh cao.',
      eq: 'Trụ xà nhảy cao, đệm mút thể thao, thước đo xà',
      nls: '5.2.TC2b',
      ai: '9.C4.1',
      dc: '• [Mã NLS: 5.2.TC2b] Quay video góc chậm (240fps) phân tích chuyển động xoay thân và rút chân giậm qua xà.\n• [Mã AI: 9.C4.1] AI nhận diện và cảnh báo nguy cơ va chạm xà dựa trên góc tiếp cận.'
    },
    {
      w: 21,
      t: 'Chủ đề 4. Bài tập thể dục',
      n: 'Chủ đề 4. Bài tập thể dục - Đồng diễn Bài thể dục nhịp điệu khối 9 chào mừng tốt nghiệp THCS (2 tiết)',
      y: '- Đồng diễn bài thể dục nhịp điệu với tính đồng bộ cao, động tác dứt khoát, biểu cảm tự tin.\n- Rèn luyện thể lực chung và phát triển năng khiếu nghệ thuật vận động.',
      eq: 'Loa âm thanh, nhạc bài tập thể dục nhịp điệu lớp 9',
      nls: '2.1.TC2b',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 2.4.TC2a] Hợp tác trực tuyến chỉnh sửa kịch bản âm nhạc và video biểu diễn của nhóm.\n• [Mã AI: 9.D1.1] Ứng dụng AI phân tích độ đồng bộ nhịp nhàng của các thành viên trong khối.'
    },
    {
      w: 22,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 1: Kĩ thuật bật nhảy đánh cầu cao tay bên phải / Đá bóng bằng mu giữa và ném biên / Đột phá bước thuận (2 tiết)',
      y: '- Cầu lông: Thực hiện thuần thục kỹ thuật bật nhảy đánh cầu cao tay bên phải tạo góc đánh cầu dốc hiểm hóc.\n- Bóng đá: Thực hiện chuẩn xác kỹ thuật đá bóng bằng mu giữa bàn chân uy lực và kỹ thuật tại chỗ ném biên đúng luật.\n- Bóng rổ: Nhuần nhuyễn kỹ thuật đột phá bước thuận qua người đối phương tấn công cận rổ.',
      eq: 'Vợt cầu lông, quả cầu lông, bóng đá số 5, bóng rổ, cọc tiêu',
      nls: '2.2.TC2c',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.5.TC2b] Xem mô phỏng 3D vùng tiếp xúc mu giữa bàn chân với bóng khi sút xa uy lực.\n• [Mã AI: 9.C2.1] AI phân tích lực bật nhảy và góc độ ném biên hợp lệ theo luật bóng đá.'
    },
    {
      w: 23,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 2: Kĩ thuật bật nhảy đập cầu thuận tay / Dừng bóng bổng bằng mu giữa / Đột phá bước chéo (2 tiết)',
      y: '- Cầu lông: Nắm vững kỹ thuật bật nhảy đập cầu thuận tay (Jump Smash) uy lực cắm thẳng xuống sân đối phương.\n- Bóng đá: Thực hiện chuẩn xác kỹ thuật dừng bóng bổng bằng mu giữa bàn chân khống chế bóng êm.\n- Bóng rổ: Thực hiện kỹ thuật đột phá bước chéo qua người đối phương khi bị kèm sát.',
      eq: 'Sân bãi chuyên môn, dụng cụ thể thao tự chọn lớp 9',
      nls: '5.2.TC2b',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 5.2.TC2b] Sử dụng thiết bị đo tốc độ đập cầu (Speed radar) trong luyện tập cầu lông.\n• [Mã AI: 9.D1.1] AI phân tích góc cắm của quả đập cầu để đề xuất điểm rơi hiểm hóc.'
    },
    {
      w: 24,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn (Cầu lông / Bóng đá / Bóng rổ) - Bài 3: Kĩ thuật bỏ nhỏ / Dẫn bóng bằng mu ngoài / Tại chỗ chuyền bóng một tay trên vai (2 tiết)',
      y: '- Cầu lông: Thực hiện tinh tế kỹ thuật bỏ nhỏ (Drop shot) sát lưới đánh lừa đối phương.\n- Bóng đá: Nhuần nhuyễn kỹ thuật dẫn bóng bằng mu ngoài bàn chân đổi hướng nhanh nhẹn.\n- Bóng rổ: Thực hiện đúng kỹ thuật tại chỗ chuyền bóng một tay trên vai vượt tuyến phát động tấn công nhanh.',
      eq: 'Sân bãi tiêu chuẩn, còi, dụng cụ chuyên môn thể thao tự chọn lớp 9',
      nls: '2.5.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.1.TC2b] Phân tích chiến thuật nhóm 3 đánh 2 qua ứng dụng mô phỏng chiến thuật số.\n• [Mã AI: 9.C2.1] AI phân tích độ cao và góc tiếp xúc bóng rổ vào bảng rổ để đạt tỷ lệ vào rổ cao nhất.'
    },
    {
      w: 25,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn - Phối hợp kỹ chiến thuật tấn công đa dạng và đấu tập theo luật chính thức (2 tiết)',
      y: '- Phối hợp nhịp nhàng giữa các tuyến tấn công và phòng ngự trong thi đấu thực tế.\n- Nắm vững và chấp hành nghiêm chỉnh luật thi đấu chính thức của môn thể thao tự chọn.',
      eq: 'Còi, đồng hồ điện tử, bảng điểm số, dụng cụ thi đấu đầy đủ',
      nls: '3.2.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 3.1.TC2b] Vận hành hệ thống tính điểm và hiển thị thời gian thi đấu trên màn hình LED số.\n• [Mã AI: 9.D1.1] AI thống kê chỉ số hiệu quả thi đấu cá nhân (Player Efficiency Rating - PER).'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục thể chất 9 (Thể thao tự chọn & Nhảy cao kiểu nằm nghiêng) (2 tiết)',
      y: '- Đánh giá mức độ thành thạo kỹ thuật Thể thao tự chọn và thành tích Nhảy cao kiểu nằm nghiêng theo chuẩn.\n- Đảm bảo tính khách quan, nghiêm túc và an toàn trong thi cử.',
      eq: 'Trụ xà nhảy cao, đệm mút, thước đo xà, dụng cụ thể thao, phiếu chấm điểm',
      nls: '1.1.TC2b',
      ai: '9.B2.3',
      dc: '• [Mã NLS: 1.2.TC2a] Tra cứu thang điểm đánh giá kỹ thuật và thành tích thể thao lớp 9 trên cổng thông tin số.\n• [Mã AI: 9.B2.3] Thực hiện lưu trữ hồ sơ minh chứng kiểm tra minh bạch trên nền tảng đám mây.'
    },
    {
      w: 27,
      t: 'Chủ đề 3. Chạy cự li trung bình',
      n: 'Chủ đề 3. Chạy cự li trung bình - Luyện tập nâng cao sức bền thể lực (800m nữ, 1500m nam) (2 tiết)',
      y: '- Thực hiện chạy cự li 1500m (nam) / 800m (nữ) với chiến thuật phân bổ sức hợp lí, bứt phá về đích.\n- Thực hiện đúng các bài tập căng cơ, thả lỏng, hít thở sâu hồi tĩnh sau vận động.',
      eq: 'Đường chạy quanh sân trường, còi thể thao, đồng hồ bấm giây',
      nls: '4.3.TC2a',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 4.3.TC2a] Theo dõi chỉ số phục hồi nhịp tim sau vận động cường độ cao qua vòng đeo tay thông minh.\n• [Mã AI: 9.A1.1] AI đưa ra khuyến nghị thời gian nghỉ ngơi và lượng nước điện giải cần bổ sung.'
    },
    {
      w: 28,
      t: 'Trò chơi vận động & Rèn thể lực',
      n: 'Chủ đề 1. Chạy cự li ngắn 100m & Chủ đề 2. Nhảy cao nằm nghiêng - Trò chơi vận động rèn sức mạnh tốc độ (2 tiết)',
      y: '- Tham gia hào hứng các trò chơi phát triển tố chất thể lực bộc phát.\n- Phát triển tối đa sức mạnh tốc độ và sức bật của đôi chân.',
      eq: 'Gậy tiếp sức, cọc tiêu, cờ hiệu, vạch đích',
      nls: '2.1.TC2b',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.2.TC2c] Xem sơ đồ bố trí trò chơi vận động trực quan trên tablet ngoài trời.\n• [Mã AI: 9.C2.1] AI gợi ý điều chỉnh luật chơi để tạo tính thử thách và cạnh tranh công bằng giữa các tổ.'
    },
    {
      w: 29,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn - Phân tích chiến thuật thi đấu và rèn luyện tâm lí thi đấu thể thao (2 tiết)',
      y: '- Vận dụng các chiến thuật: tấn công nhanh, phòng ngự khu vực, bọc lót không gian trong thi đấu.\n- Nâng cao tư duy chiến thuật và bản lĩnh thi đấu thể thao.',
      eq: 'Sân bãi tiêu chuẩn, còi, áo bib phân đội, dụng cụ thể thao',
      nls: '2.4.TC2a',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 2.5.TC2b] Phân tích video băng ghi hình trận đấu bằng phần mềm chiến thuật thể thao số.\n• [Mã AI: 9.C2.1] AI vẽ bản đồ nhiệt (Heatmap) thể hiện tầm hoạt động của từng vị trí trên sân.'
    },
    {
      w: 30,
      t: 'Phần ba: Thể thao tự chọn',
      n: 'Phần ba: Thể thao tự chọn - Tổ chức giải đấu thể thao cấp trường và thực hành điều hành trọng tài (2 tiết)',
      y: '- Trực tiếp tham gia thi đấu giải giao hữu hoặc thực hành điều hành công tác trọng tài chính, trọng tài bàn.\n- Rèn luyện tác phong quyết đoán, chính xác và trung thực tuyệt đối.',
      eq: 'Bảng điểm số điện tử, còi, thẻ trọng tài, biên bản thi đấu',
      nls: '3.2.TC2a',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 3.1.TC2b] Sử dụng ứng dụng quản lý giải đấu tự động cập nhật bảng xếp hạng và lịch thi đấu.\n• [Mã AI: 9.A1.1] Công cụ AI hỗ trợ phát hiện lỗi chạm lưới/chạm tay/việt vị từ góc quay camera.'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục thể chất 9 (2 tiết)',
      y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 9 và xét hoàn thành chương trình GDTC cấp THCS theo chuẩn GDPT 2018.\n- Đảm bảo tính công bằng, khách quan, chính xác.',
      eq: 'Đề kiểm tra chuẩn ma trận, trụ xà nhảy cao, đệm mút, đồng hồ bấm giây, sổ điểm',
      nls: '1.2.TC2b',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 1.1.TC2b] Tra cứu barem đánh giá xếp loại thể chất cuối năm học theo Thông tư 22/2021/TT-BGDĐT.\n• [Mã AI: 9.D1.1] Hệ thống tự động xuất bảng điểm học tập và xếp loại môn GDTC 9.'
    },
    {
      w: 32,
      t: 'Chữa bài & Đánh giá thể lực',
      n: 'Chữa bài kiểm tra cuối HK2 & Kiểm tra đánh giá thể lực học sinh lớp 9 theo tiêu chuẩn rèn luyện thân thể (QĐ 53/2008/QĐ-BGDĐT) (2 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2; thực hiện nghiêm túc 4 nội dung kiểm tra thể lực chuẩn: Chạy 30m xuất phát cao, Bật xa tại chỗ, Chạy bền 1500m/800m, Nằm ngửa gập bụng 30 giây.',
      eq: 'Thảm đo bật xa, đồng hồ bấm giây, đồng hồ đo thời gian gập bụng',
      nls: '1.3.TC2a',
      ai: '9.C4.1',
      dc: '• [Mã NLS: 1.3.TC2b] Nhập kết quả kiểm tra thể lực vào hệ thống cơ sở dữ liệu quốc gia về thể chất học sinh.\n• [Mã AI: 9.C4.1] AI tự động phân tích biểu đồ tăng trưởng thể lực 4 năm THCS của học sinh.'
    },
    {
      w: 33,
      t: 'Hoạt động trải nghiệm thể thao',
      n: 'Hoạt động trải nghiệm thể thao / Ngày hội Thể dục thể thao học sinh THCS chào mừng Lễ ra trường (2 tiết)',
      y: '- Tham gia tranh tài hoặc cổ vũ các môn thi đấu: Chạy 100m, Nhảy cao, Cầu lông, Bóng đá mini.\n- Xây dựng tinh thần đoàn kết, tự hào tập thể và lan tỏa nếp sống rèn luyện thể thao học đường.',
      eq: 'Sân bãi thi đấu, cờ giải thưởng, băng rôn, loa phát thanh',
      nls: '3.2.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 3.1.TC2b] Thiết kế bảng tin truyền thông và tường thuật hình ảnh ngày hội thể thao trường học.\n• [Mã AI: 9.D1.1] AI tự động tạo video tổng hợp các pha bóng đẹp và kỷ lục thể thao của khối 9.'
    },
    {
      w: 34,
      t: 'Ôn tập tổng hợp & Kế hoạch rèn luyện hè',
      n: 'Ôn tập Thể thao tự chọn & Định hướng xây dựng thói quen rèn luyện thể chất chuẩn bị bước vào THPT (2 tiết)',
      y: '- Hoàn thiện kỹ thuật môn thể thao tự chọn yêu thích; lập kế hoạch tự tập luyện thể thao mỗi ngày trong dịp hè chuẩn bị bước vào lớp 10.\n- Nâng cao ý thức tự giác rèn luyện thân thể suốt đời.',
      eq: 'Tài liệu hướng dẫn rèn luyện thể lực hè, infographic kỹ năng an toàn',
      nls: '4.3.TC2a',
      ai: '9.A3.1',
      dc: '• [Mã NLS: 4.3.TC2a] Tra cứu kỹ năng an toàn và các môn thể thao nâng cao cấp THPT trên môi trường số.\n• [Mã AI: 9.A3.1] Chatbot AI hỗ trợ thiết lập thời khóa biểu tập luyện thể thao chuẩn bị vào THPT.'
    },
    {
      w: 35,
      t: 'Tổng kết năm học & Xét hoàn thành chương trình',
      n: 'Tổng kết năm học & Xét hoàn thành chương trình GDTC cấp THCS (2 tiết)',
      y: '- Đánh giá tổng hợp kết quả học tập môn GDTC lớp 9 và xét hoàn thành chương trình GDTC cấp THCS theo chuẩn GDPT 2018.\n- Biểu dương tinh thần rèn luyện và trao giải thưởng Vận động viên học sinh tiêu biểu.',
      eq: 'Bảng tổng hợp điểm số năm học, sổ theo dõi giáo viên, giấy chứng nhận',
      nls: '1.3.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 1.3.TC2b] Hoàn tất đồng bộ học bạ số môn Giáo dục thể chất 9 trên phần mềm quản lý trường học.\n• [Mã AI: 9.D1.1] AI tổng hợp báo cáo chỉ số phát triển thể chất toàn diện học sinh tốt nghiệp THCS.'
    }
  ];

  grade9Weeks.forEach((item) => {
    const isGK = item.w === 9 || item.w === 26;
    const isCK = item.w === 16 || item.w === 31;

    list.push({
      week: item.w,
      topic: item.t,
      name: item.n,
      periods: 2,
      yccd: item.y,
      equipment: item.eq,
      location: 'Sân thể dục / Sân vận động trường học',
      nlsCode: item.nls,
      aiCode: item.ai,
      digitalCompetency: item.dc,
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Đánh giá thể lực QĐ 53' : ''
    });
  });

  return list;
}
