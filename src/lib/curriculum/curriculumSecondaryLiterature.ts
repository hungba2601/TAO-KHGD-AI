import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Ngữ văn THCS (Lớp 6, 7, 8, 9)
 * Khung chuẩn: 140 tiết/năm = 4 tiết/tuần x 35 tuần
 * 100% chuẩn SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG & tài liệu van-thcs.md
 * Tích hợp chuẩn Khung Năng lực số (CV 3456/BGDĐT-GDPT) & Khung Năng lực AI (QĐ 2422/QĐ-BGDĐT)
 *
 * Các tuần kiểm tra, đánh giá định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (4 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (4 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (4 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (4 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại môn Ngữ văn cả năm (4 tiết)
 */

export function getNguVanSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: NGỮ VĂN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - TẬP 1 & TẬP 2
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Bài 1: Tôi và các bạn',
        n: 'Bài 1: Tôi và các bạn - Đọc: Bài học đường đời đầu tiên (Tô Hoài) & Thực hành tiếng Việt: Từ đơn và từ phức (4 tiết)',
        y: '- Đọc hiểu văn bản truyện: nhận biết cốt truyện, nhân vật Dế Mèn, Dế Choắt; bài học về thói hung hăng, kiêu ngạo.\n- Nhận diện và phân biệt từ đơn, từ phức (từ ghép, từ láy) và hiểu tác dụng của chúng trong diễn đạt.',
        eq: 'Tranh ảnh minh họa truyện Dế Mèn phiêu lưu ký, phiếu học tập',
        nlsCode: '1.1.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 2,
        t: 'Bài 1: Tôi và các bạn',
        n: 'Bài 1: Tôi và các bạn - Đọc: Nếu cậu muốn có một người bạn... (Trích Hoàng tử bé) & Bắt nạt (Nguyễn Thế Hoàng Linh) & Thực hành tiếng Việt (4 tiết)',
        y: '- Hiểu ý nghĩa tình bạn, sự gắn kết và tinh thần trách nhiệm trong đoạn trích Hoàng tử bé.\n- Phân tích thái độ phê phán hành vi bắt nạt học đường trong bài thơ Bắt nạt; mở rộng vốn từ về tình bạn.',
        eq: 'Video/Audio đọc thơ Bắt nạt, trích đoạn Hoàng tử bé, máy chiếu',
        nlsCode: '2.1.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 3,
        t: 'Bài 1 & Bài 2',
        n: 'Bài 1: Viết bài văn kể lại một trải nghiệm của em & Nói và nghe & Thực hành đọc: Những người bạn (Nguyễn Nhật Ánh) & Bài 2: Gõ cửa trái tim (4 tiết)',
        y: '- Nắm vững quy trình viết bài văn tự sự kể lại trải nghiệm của bản thân bằng ngôi thứ nhất.\n- Trình bày bài nói tự tin; đọc mở rộng tác phẩm Những người bạn và bắt đầu làm quen chủ đề Gõ cửa trái tim.',
        eq: 'Phiếu hướng dẫn lập dàn ý, bảng tiêu chí đánh giá bài nói',
        nlsCode: '3.1.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 4,
        t: 'Bài 2: Gõ cửa trái tim',
        n: 'Bài 2: Gõ cửa trái tim - Đọc: Chuyện cổ tích về loài người (Xuân Quỳnh) & Thực hành tiếng Việt: Biện pháp tu từ so sánh, điệp ngữ (4 tiết)',
        y: '- Cảm nhận tình yêu thương vô bờ bến dành cho trẻ thơ qua lời thơ hồn nhiên của Xuân Quỳnh.\n- Nhận diện và phân tích tác dụng biểu cảm của các biện pháp tu từ so sánh, điệp từ, điệp ngữ.',
        eq: 'Văn bản thơ Xuân Quỳnh, tranh ảnh thiếu nhi, phiếu thực hành tu từ',
        nlsCode: '1.2.TC1a',
        aiCode: '6.B1.1'
      },
      {
        w: 5,
        t: 'Bài 2: Gõ cửa trái tim',
        n: 'Bài 2: Gõ cửa trái tim - Đọc: Mây và sóng (R. Tagore) & Bức tranh của em gái tôi (Tạ Duy Anh) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận tình mẫu tử thiêng liêng trong thơ Ta-go và vẻ đẹp tâm hồn trong sáng, lòng nhân hậu trong truyện Tạ Duy Anh.\n- Thực hành tiếng Việt: dấu chấm lửng và nghĩa của từ ngữ trong ngữ cảnh.',
        eq: 'Chân dung R. Tagore, tranh minh họa Bức tranh của em gái tôi',
        nlsCode: '2.2.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 6,
        t: 'Bài 2 & Bài 3',
        n: 'Bài 2: Viết đoạn văn ghi lại cảm xúc về một bài thơ có yếu tố tự sự và miêu tả & Nói và nghe & Thực hành đọc: Những cánh buồm & Bài 3: Yêu thương và chia sẻ (4 tiết)',
        y: '- Viết đoạn văn biểu cảm về bài thơ có yếu tố tự sự, miêu tả; thảo luận về một vấn đề đời sống gia đình.\n- Đọc mở rộng bài thơ Những cánh buồm (Hoàng Trung Thông); khám phá chủ đề Yêu thương và chia sẻ.',
        eq: 'Phiếu tiêu chí viết đoạn văn, sơ đồ tư duy phân tích thơ',
        nlsCode: '3.1.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 7,
        t: 'Bài 3: Yêu thương và chia sẻ',
        n: 'Bài 3: Yêu thương và chia sẻ - Đọc: Cô bé bán diêm (H.C. Andersen) & Thực hành tiếng Việt: Cụm danh từ (4 tiết)',
        y: '- Cảm thông sâu sắc với số phận bất hạnh của cô bé bán diêm và trân trọng những ước mơ trong sáng của tuổi thơ.\n- Nhận biết cấu tạo và chức năng của cụm danh từ; vận dụng mở rộng câu bằng cụm danh từ.',
        eq: 'Tranh ảnh truyện cổ tích Andersen, phiếu phân tích cấu tạo cụm danh từ',
        nlsCode: '1.1.TC1b',
        aiCode: '6.C1.1'
      },
      {
        w: 8,
        t: 'Bài 3: Yêu thương và chia sẻ',
        n: 'Bài 3: Yêu thương và chia sẻ - Đọc: Gió lạnh đầu mùa (Thạch Lam) & Con chào mào (Mai Văn Phấn) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận tình người ấm áp, sự sẻ chia của những đứa trẻ nghèo trong truyện ngắn Thạch Lam.\n- Thưởng thức vẻ đẹp thiên nhiên và tình yêu tự do trong bài thơ Con chào mào; thực hành cụm động từ, cụm tính từ.',
        eq: 'Văn bản Gió lạnh đầu mùa, phiếu học tập so sánh nhân vật',
        nlsCode: '2.4.TC1a',
        aiCode: '6.A1.3'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 6 (4 tiết)',
        y: '- Đánh giá năng lực đọc hiểu văn bản văn học (truyện, thơ) và năng lực viết bài văn tự sự kể lại trải nghiệm theo ma trận đề Bộ GD&ĐT.\n- Rèn luyện kỹ năng phân tích đề, tư duy sáng tạo và tính trung thực trong kiểm tra.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn, ma trận và hướng dẫn chấm',
        nlsCode: '4.1.TC1a',
        aiCode: '6.A3.3'
      },
      {
        w: 10,
        t: 'Bài 3 & Bài 4',
        n: 'Bài 3: Viết bài văn kể lại một trải nghiệm của em & Nói và nghe & Thực hành đọc: Lắc-ki thực sự may mắn & Bài 4: Quê hương yêu dấu (4 tiết)',
        y: '- Hoàn thiện kĩ năng viết bài văn tự sự trải nghiệm; kể lại câu chuyện về tình yêu thương.\n- Đọc hiểu Lắc-ki thực sự may mắn (Chuyện con mèo dạy hải âu bay); làm quen chủ đề Quê hương yêu dấu.',
        eq: 'Trích đoạn phim hoạt hình Chuyện con mèo dạy hải âu bay, bài mẫu tự sự',
        nlsCode: '3.2.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 11,
        t: 'Bài 4: Quê hương yêu dấu',
        n: 'Bài 4: Quê hương yêu dấu - Đọc: Chùm ca dao về quê hương đất nước & Thực hành tiếng Việt: Thể thơ lục bát, Từ láy (4 tiết)',
        y: '- Cảm nhận vẻ đẹp phong cảnh, lịch sử và tình yêu tha thiết với quê hương qua chùm ca dao.\n- Nắm vững đặc điểm thể thơ lục bát (vần, nhịp, thanh điệu) và tác dụng gợi hình của từ láy.',
        eq: 'Audio ngâm ca dao dân ca ba miền, bảng quy tắc gieo vần lục bát',
        nlsCode: '1.2.TC1b',
        aiCode: '6.A1.1'
      },
      {
        w: 12,
        t: 'Bài 4: Quê hương yêu dấu',
        n: 'Bài 4: Quê hương yêu dấu - Đọc: Chuyện cổ nước mình (Lâm Thị Mỹ Dạ) & Cây tre Việt Nam (Thép Mới) & Thực hành tiếng Việt (4 tiết)',
        y: '- Thấm thía những giá trị đạo đức, nhân văn qua truyện cổ dân gian và biểu tượng cây tre kiên cường của dân tộc.\n- Thực hành tiếng Việt: các biện pháp tu từ nhân hóa, ẩn dụ trong văn bản ký.',
        eq: 'Hình ảnh cây tre làng quê Việt Nam, video tư liệu văn hóa',
        nlsCode: '2.1.TC1b',
        aiCode: '6.B1.1'
      },
      {
        w: 13,
        t: 'Bài 4 & Bài 5',
        n: 'Bài 4: Tập làm một bài thơ lục bát; Viết đoạn văn thể hiện cảm xúc về một bài thơ lục bát & Nói và nghe & Bài 5: Những nẻo đường xứ sở (4 tiết)',
        y: '- Thực hành tập làm thơ lục bát đúng luật; viết đoạn văn biểu cảm về bài thơ lục bát; thuyết trình về tình yêu quê hương.\n- Đọc mở rộng Hành trình của bầy ong; bắt đầu chủ đề Những nẻo đường xứ sở.',
        eq: 'Phiếu sáng tác thơ lục bát, tiêu chí đánh giá bài thuyết trình',
        nlsCode: '3.1.TC1a',
        aiCode: '6.D1.1'
      },
      {
        w: 14,
        t: 'Bài 5: Những nẻo đường xứ sở',
        n: 'Bài 5: Những nẻo đường xứ sở - Đọc: Cô Tô (Nguyễn Tuân) & Thực hành tiếng Việt: Nghệ thuật miêu tả, so sánh (4 tiết)',
        y: '- Thưởng thức cảnh sắc biển đảo Cô Tô tuyệt đẹp, trong trẻo qua ngòi bút tài hoa, độc đáo của Nguyễn Tuân.\n- Nhận diện và phân tích nghệ thuật dùng từ ngữ gợi cảm, hình ảnh so sánh đặc sắc trong bài ký.',
        eq: 'Hình ảnh, video phóng sự về đảo Cô Tô, bản đồ địa lí Quảng Ninh',
        nlsCode: '1.3.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 15,
        t: 'Bài 5: Những nẻo đường xứ sở',
        n: 'Bài 5: Những nẻo đường xứ sở - Đọc: Hang Én (Hà My) & Cửu Long Giang ta ơi (Nguyễn Hồng) & Viết: Bài văn tả cảnh sinh hoạt (4 tiết)',
        y: '- Khám phá sự kì vĩ của thiên nhiên Hang Én và dòng sông Mê Kông dạt dào sức sống trong thơ Nguyễn Hồng.\n- Nắm phương pháp quan sát và quy trình viết bài văn tả cảnh sinh hoạt giàu hình ảnh, âm thanh.',
        eq: 'Video khám phá hang Sơn Đoòng - Hang Én, tranh cảnh sinh hoạt',
        nlsCode: '3.1.TC1b',
        aiCode: '6.A1.3'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 6 (4 tiết)',
        y: '- Đánh giá tổng hợp năng lực đọc hiểu văn bản (thơ lục bát, văn ký/miêu tả) và năng lực viết bài văn miêu tả/tự sự theo chuẩn CT GDPT 2018.\n- Phân hóa năng lực học sinh làm căn cứ định hướng kế hoạch giáo dục Học kỳ 2.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và đáp án chính thức',
        nlsCode: '4.1.TC1b',
        aiCode: '6.A3.3'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn 6 HK1 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1; chỉ ra ưu điểm và khắc phục các lỗi diễn đạt, chính tả, ngữ pháp.\n- Hệ thống hóa các kiến thức đọc hiểu, tiếng Việt và phương pháp viết các kiểu bài trong HK1.',
        eq: 'Bài làm học sinh, bảng tổng hợp lỗi sai, sơ đồ tư duy ôn tập',
        nlsCode: '5.2.TC1a',
        aiCode: '6.D1.1'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm Đọc hiểu văn học Lớp 6 (4 tiết)',
        y: '- Sơ kết kết quả học tập môn Ngữ văn HK1; trình bày các sản phẩm sáng tạo (tập san, tranh vẽ, poster giới thiệu sách).\n- Rèn luyện kỹ năng làm việc nhóm, tự đánh giá và xây dựng mục tiêu phấn đấu trong HK2.',
        eq: 'Sản phẩm tập san, video giới thiệu sách của học sinh',
        nlsCode: '2.4.TC1b',
        aiCode: '6.C2.2'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Bài 6: Chuyện kể về những người anh hùng',
        n: 'Bài 6: Chuyện kể về những người anh hùng - Đọc: Thánh Gióng & Sơn Tinh, Thuỷ Tinh & Thực hành tiếng Việt (4 tiết)',
        y: '- Nắm vững đặc trưng thể loại truyền thuyết: nhân vật anh hùng, chi tiết kì ảo, cốt lõi lịch sử.\n- Tự hào về tinh thần chống giặc cứu nước và khát vọng chế ngự thiên tai; thực hành dấu chấm phẩy, dấu ngoặc kép.',
        eq: 'Tranh minh họa Thánh Gióng, Sơn Tinh Thủy Tinh, phiếu học tập',
        nlsCode: '1.1.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 20,
        t: 'Bài 6: Chuyện kể về những người anh hùng',
        n: 'Bài 6: Chuyện kể về những người anh hùng - Đọc: Ai ơi mồng 9 tháng 4 & Viết: Bài văn thuyết minh thuật lại một sự kiện & Kể lại một truyền thuyết (4 tiết)',
        y: '- Hiểu nét đẹp văn hóa lễ hội Gióng; nắm cấu trúc và viết bài văn thuyết minh thuật lại một sự kiện sinh hoạt văn hóa.\n- Nói và nghe: tự tin kể lại một truyện truyền thuyết bằng giọng điệu truyền cảm; đọc mở rộng Bánh chưng, bánh giầy.',
        eq: 'Video tư liệu Lễ hội Gióng Đền Phù Đổng, phiếu dàn ý bài thuyết minh',
        nlsCode: '3.1.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 21,
        t: 'Bài 7: Thế giới cổ tích',
        n: 'Bài 7: Thế giới cổ tích - Đọc: Thạch Sanh & Cây khế & Thực hành tiếng Việt: Trạng ngữ (4 tiết)',
        y: '- Nhận biết đặc trưng truyện cổ tích: xung đột thiện - ác, nhân vật dũng sĩ/bất hạnh, yếu tố thần kì và ước mơ công lý.\n- Nhận diện các loại trạng ngữ (thời gian, nơi chốn, nguyên nhân, mục đích) và tác dụng liên kết câu.',
        eq: 'Bộ tranh truyện cổ tích Thạch Sanh, Cây khế, phiếu bài tập trạng ngữ',
        nlsCode: '1.2.TC1a',
        aiCode: '6.B1.1'
      },
      {
        w: 22,
        t: 'Bài 7: Thế giới cổ tích',
        n: 'Bài 7: Thế giới cổ tích - Đọc: Vua chích choè & Viết: Bài văn đóng vai nhân vật kể lại một truyện cổ tích & Kể chuyện (4 tiết)',
        y: '- Hiểu bài học về sự khiêm tốn và tôn trọng người khác trong truyện cổ Grimm Vua chích choè.\n- Nắm vững kĩ năng nhập vai nhân vật (ngôi thứ nhất) để viết và kể lại truyện cổ tích sáng tạo; đọc mở rộng Sọ Dừa.',
        eq: 'Trang phục đạo cụ đóng vai, phiếu tiêu chí nhập vai kể chuyện',
        nlsCode: '3.2.TC1a',
        aiCode: '6.D1.1'
      },
      {
        w: 23,
        t: 'Bài 8: Khác biệt và gần gũi',
        n: 'Bài 8: Khác biệt và gần gũi - Đọc: Xem người ta kìa! (Lạc Thanh) & Hai loại khác biệt (Giong-mi Mun) & Thực hành tiếng Việt (4 tiết)',
        y: '- Nhận biết đặc điểm văn bản nghị luận: ý kiến, lí lẽ, dẫn chứng; hiểu giá trị của sự khác biệt cá nhân và sự hòa nhập.\n- Thực hành tiếng Việt: nhận diện và sử dụng đại từ, từ Hán Việt chính xác.',
        eq: 'Văn bản Xem người ta kìa, Hai loại khác biệt, bảng phân tích luận điểm',
        nlsCode: '1.1.TC1b',
        aiCode: '6.A1.3'
      },
      {
        w: 24,
        t: 'Bài 8: Khác biệt và gần gũi',
        n: 'Bài 8: Khác biệt và gần gũi - Đọc: Bài tập làm văn (Nhóc Ni-cô-la) & Viết: Bài văn trình bày ý kiến về một hiện tượng đời sống (4 tiết)',
        y: '- Thưởng thức tiếng cười hóm hỉnh, hồn nhiên của tuổi thơ trong truyện Nhóc Ni-cô-la.\n- Nắm vững quy trình viết bài văn nghị luận xã hội trình bày ý kiến tán thành hoặc phản đối về một hiện tượng đời sống.',
        eq: 'Trích đoạn truyện Nhóc Ni-cô-la, phiếu hướng dẫn lập luận nghị luận',
        nlsCode: '3.1.TC1b',
        aiCode: '6.C1.1'
      },
      {
        w: 25,
        t: 'Bài 8 & Bài 9',
        n: 'Bài 8: Nói và nghe: Trình bày ý kiến về một hiện tượng đời sống & Bài 9: Trái Đất - ngôi nhà chung - Đọc: Trái Đất - cái nôi của sự sống (4 tiết)',
        y: '- Thuyết trình tự tin về vấn đề tôn trọng sự khác biệt trong học đường; đọc hiểu văn bản thông tin Trái Đất - cái nôi của sự sống.\n- Đọc mở rộng Tiếng cười không muốn nghe; nhận biết các yếu tố sa-pô, đề mục, hình ảnh trong văn bản thông tin.',
        eq: 'Hình ảnh Trái Đất nhìn từ vũ trụ, bảng tiêu chí tranh biện nói - nghe',
        nlsCode: '2.1.TC1a',
        aiCode: '6.A1.1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 6 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn năng lực đọc hiểu (truyền thuyết, cổ tích, văn bản nghị luận) và năng lực viết bài văn đóng vai nhân vật/nghị luận.\n- Đánh giá khả năng vận dụng ngữ pháp tiếng Việt và tư duy phản biện.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn ma trận Bộ GD&ĐT',
        nlsCode: '4.1.TC1a',
        aiCode: '6.A3.3'
      },
      {
        w: 27,
        t: 'Bài 9: Trái Đất - ngôi nhà chung',
        n: 'Bài 9: Trái Đất - ngôi nhà chung - Đọc: Các loài chung sống với nhau như thế nào? & Trái Đất (R. Gamzatov) & Thực hành tiếng Việt (4 tiết)',
        y: '- Hiểu mối quan hệ cân bằng sinh thái giữa các loài sinh vật và tình yêu Trái Đất sâu nặng qua thơ Gam-da-tốp.\n- Thực hành tiếng Việt: trạng ngữ và các phương tiện liên kết câu trong văn bản thông tin.',
        eq: 'Infographic đa dạng sinh học thế giới, audio bài thơ Trái Đất',
        nlsCode: '1.3.TC1b',
        aiCode: '6.B1.1'
      },
      {
        w: 28,
        t: 'Bài 9: Trái Đất - ngôi nhà chung',
        n: 'Bài 9: Trái Đất - ngôi nhà chung - Viết: Biên bản cuộc họp, cuộc thảo luận; Tóm tắt bằng sơ đồ & Thảo luận môi trường (4 tiết)',
        y: '- Nắm vững thể thức và viết đúng quy chuẩn một biên bản cuộc họp/thảo luận; biết tóm tắt văn bản bằng sơ đồ trực quan.\n- Nói và nghe: Thảo luận về các giải pháp thiết thực khắc phục ô nhiễm môi trường và giảm thiểu rác thải nhựa.',
        eq: 'Mẫu văn bản biên bản chuẩn, phần mềm vẽ sơ đồ tư duy Canva/Mindmap',
        nlsCode: '3.1.TC1a',
        aiCode: '6.C2.2'
      },
      {
        w: 29,
        t: 'Bài 9 & Bài 10',
        n: 'Bài 9: Thực hành đọc: Sinh vật trên Trái Đất được hình thành như thế nào? & Bài 10: Cuốn sách tôi yêu - Đọc & Thách thức đọc sách (4 tiết)',
        y: '- Đọc hiểu văn bản khoa học thường thức về nguồn gốc sự sống; tham gia Ngày hội đọc sách với các thách thức đọc thú vị.\n- Khơi dậy niềm đam mê đọc sách, phát triển văn hóa đọc và kĩ năng ghi chép nhật kí đọc sách.',
        eq: 'Sách giáo khoa, danh mục sách hay tuổi học trò, nhật kí đọc sách',
        nlsCode: '1.2.TC1b',
        aiCode: '6.A1.3'
      },
      {
        w: 30,
        t: 'Bài 10: Cuốn sách tôi yêu',
        n: 'Bài 10: Cuốn sách tôi yêu - Sáng tạo sản phẩm nghệ thuật; Viết bài văn trình bày ý kiến về hiện tượng từ sách & Ngày hội với sách (4 tiết)',
        y: '- Sáng tạo sản phẩm minh họa sách (bìa sách, podcast, video review); viết bài văn nghị luận về thông điệp gợi ra từ cuốn sách.\n- Trình bày bài giới thiệu sách trước tập thể; chuẩn bị toàn diện kiến thức cho kì kiểm tra cuối năm.',
        eq: 'Sản phẩm bìa sách sáng tạo của học sinh, máy chiếu, micro',
        nlsCode: '3.2.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 6 (4 tiết)',
        y: '- Đánh giá toàn diện năng lực đọc hiểu văn bản thông tin, nghị luận xã hội và năng lực viết văn bản hoàn chỉnh cả năm.\n- Đánh giá sự tiến bộ về phẩm chất nhân ái, trung thực, trách nhiệm và tình yêu quê hương đất nước.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm',
        nlsCode: '4.1.TC1b',
        aiCode: '6.A3.3'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức Ngữ văn 6 HK2 (4 tiết)',
        y: '- Phân tích, sửa chữa chi tiết bài kiểm tra cuối HK2; tổng kết các kĩ năng đọc hiểu và tạo lập văn bản trong HK2.\n- Củng cố hệ thống ngữ pháp tiếng Việt lớp 6.',
        eq: 'Bài làm học sinh, đáp án chi tiết và biểu điểm sửa sai',
        nlsCode: '5.2.TC1b',
        aiCode: '6.A1.3'
      },
      {
        w: 33,
        t: 'Dự án Ngữ văn 6',
        n: 'Dự án Ngữ văn 6: "Tuyển tập Tác phẩm Văn học Thiếu nhi & Sân khấu hóa Truyện cổ tích" (4 tiết)',
        y: '- Thực hiện dự án sân khấu hóa một truyện truyền thuyết/cổ tích hoặc triển lãm tuyển tập truyện ngắn tự sáng tác.\n- Phát triển năng lực biểu đạt thẩm mỹ, làm việc nhóm và ứng dụng công nghệ số làm tư liệu sân khấu.',
        eq: 'Kịch bản sân khấu hóa, đạo cụ, video ghi hình tiết mục',
        nlsCode: '2.4.TC1b',
        aiCode: '6.C2.2'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Bài 11: Ôn tập toàn diện chuẩn bị tổng kết năm học môn Ngữ văn 6 (4 tiết)',
        y: '- Tổng kết toàn bộ hệ thống thể loại văn học (thơ, truyện, ký, kịch, nghị luận, thông tin) và kiểu văn bản đã học trong chương trình Lớp 6.\n- Chuẩn bị nền tảng tri thức và phương pháp học tập vững chắc cho môn Ngữ văn Lớp 7.',
        eq: 'Sơ đồ tư duy toàn bộ chương trình Ngữ văn 6',
        nlsCode: '1.3.TC1b',
        aiCode: '6.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Ngữ văn 6 cả năm (4 tiết)',
        y: '- Tổng kết, đánh giá quá trình học tập và rèn luyện môn Ngữ văn 6 cả năm theo Thông tư số 22/2021/TT-BGDĐT.\n- Biểu dương học sinh có thành tích xuất sắc và giao nhiệm vụ đọc sách trong kỳ nghỉ hè.',
        eq: 'Sổ theo dõi đánh giá học sinh, danh mục sách hè lớp 7',
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
        location: 'Phòng học / Thư viện trường',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Văn học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: NGỮ VĂN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - TẬP 1 & TẬP 2
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Bài 1: Bầu trời tuổi thơ',
        n: 'Bài 1: Bầu trời tuổi thơ - Đọc: Bầy chim chìa vôi (Nguyễn Quang Thiều) & Thực hành tiếng Việt: Mở rộng trạng ngữ (4 tiết)',
        y: '- Đọc hiểu truyện ngắn: cảm nhận tình cảm yêu thương động vật trong sáng và lòng nhân hậu của hai anh em Mên, Mon.\n- Nhận diện và thực hành mở rộng trạng ngữ của câu bằng cụm từ nhằm bổ sung thông tin chi tiết.',
        eq: 'Tranh minh họa đàn chim chìa vôi cất cánh trên bãi sông, phiếu bài tập',
        nlsCode: '1.1.TC1a',
        aiCode: '7.A1.1'
      },
      {
        w: 2,
        t: 'Bài 1: Bầu trời tuổi thơ',
        n: 'Bài 1: Bầu trời tuổi thơ - Đọc: Đi lấy mật (Đoàn Giỏi) & Ngàn sao làm việc (Võ Quảng) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận vẻ đẹp thiên nhiên rừng tràm U Minh hoang sơ, trù phú và tính cách nhân vật An, Cò, tía nuôi.\n- Thưởng thức bức tranh lao động vũ trụ lung linh trong thơ Võ Quảng; nhận biết tác dụng của trạng ngữ.',
        eq: 'Video/Hình ảnh rừng tràm U Minh phương Nam, phiếu phân tích nhân vật',
        nlsCode: '2.1.TC1a',
        aiCode: '7.C5.1'
      },
      {
        w: 3,
        t: 'Bài 1 & Bài 2',
        n: 'Bài 1: Tóm tắt văn bản theo yêu cầu khác nhau về độ dài & Nói và nghe & Đọc: Ngôi nhà trên cây & Bài 2: Khúc nhạc tâm hồn (4 tiết)',
        y: '- Nắm vững quy trình tóm tắt văn bản tự sự theo các mức độ ngắn, vừa; trao đổi ý kiến về tình bạn tuổi thơ.\n- Đọc mở rộng Ngôi nhà trên cây (Tốt-tô-chan); làm quen chủ đề thơ bốn chữ, năm chữ trong Khúc nhạc tâm hồn.',
        eq: 'Sách Tốt-tô-chan bên cửa sổ, phiếu hướng dẫn tóm tắt văn bản',
        nlsCode: '3.1.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 4,
        t: 'Bài 2: Khúc nhạc tâm hồn',
        n: 'Bài 2: Khúc nhạc tâm hồn - Đọc: Đồng dao mùa xuân (Nguyễn Khoa Điềm) & Thực hành tiếng Việt: Biện pháp tu từ nói giảm nói tránh (4 tiết)',
        y: '- Cảm nhận hình tượng người lính trẻ kiên cường, bất tử giữa mùa xuân đại ngàn qua thể thơ bốn chữ sâu lắng.\n- Nhận biết và hiểu tác dụng biểu đạt tế nhị, nhân văn của biện pháp tu từ nói giảm nói tránh.',
        eq: 'Audio ngâm thơ Đồng dao mùa xuân, hình ảnh người lính Trường Sơn',
        nlsCode: '1.2.TC1a',
        aiCode: '7.B3.1'
      },
      {
        w: 5,
        t: 'Bài 2: Khúc nhạc tâm hồn',
        n: 'Bài 2: Khúc nhạc tâm hồn - Đọc: Gặp lá cơm nếp (Thanh Thảo) & Trở gió (Nguyễn Ngọc Tư) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận tình yêu tha thiết dành cho mẹ và quê hương qua mùi hương lá cơm nếp; xúc cảm đón gió chướng Nam Bộ.\n- Nhận diện các biện pháp tu từ điệp ngữ, nhân hóa trong văn bản tản văn.',
        eq: 'Hình ảnh mùa gặt và gió chướng Nam Bộ, phiếu so sánh thơ và tản văn',
        nlsCode: '2.2.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 6,
        t: 'Bài 2 & Bài 3',
        n: 'Bài 2: Tập làm thơ bốn/năm chữ; Viết đoạn văn ghi lại cảm xúc về bài thơ bốn/năm chữ & Nói và nghe & Bài 3: Cội nguồn yêu thương (4 tiết)',
        y: '- Nắm luật thơ bốn chữ, năm chữ và thực hành sáng tác thơ; viết đoạn văn biểu cảm; đọc Chiều sông Thương.\n- Bắt đầu chủ đề Cội nguồn yêu thương: tìm hiểu tình cảm gia đình, thầy trò sâu nặng.',
        eq: 'Phiếu sáng tác thơ tự do 4/5 chữ, tiêu chí đánh giá đoạn văn biểu cảm',
        nlsCode: '3.1.TC1b',
        aiCode: '7.D1.1'
      },
      {
        w: 7,
        t: 'Bài 3: Cội nguồn yêu thương',
        n: 'Bài 3: Cội nguồn yêu thương - Đọc: Vừa nhắm mắt vừa mở cửa sổ (Nguyễn Ngọc Thuần) & Thực hành tiếng Việt: Thuật ngữ (4 tiết)',
        y: '- Cảm nhận cách lắng nghe cuộc sống bằng mọi giác quan và tình yêu thương muôn loài trong truyện Nguyễn Ngọc Thuần.\n- Nắm vững khái niệm thuật ngữ khoa học, cách nhận biết thuật ngữ và phân biệt với từ ngữ thông thường.',
        eq: 'Văn bản Vừa nhắm mắt vừa mở cửa sổ, phiếu bài tập phân biệt thuật ngữ',
        nlsCode: '1.1.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 8,
        t: 'Bài 3: Cội nguồn yêu thương',
        n: 'Bài 3: Cội nguồn yêu thương - Đọc: Người thầy đầu tiên (Ch. Aitmatov) & Quê hương (Tế Hanh) & Thực hành tiếng Việt (4 tiết)',
        y: '- Khắc sâu lòng biết ơn người thầy Đuy-sen tận tụy thắp sáng ước mơ cho cô bé An-tư-nai nghèo khó.\n- Cảm nhận bức tranh làng chài rực rỡ sức sống và tình yêu quê hương nồng nàn trong thơ Tế Hanh.',
        eq: 'Chân dung Ch. Aitmatov, tranh làng chài miền biển, phiếu học tập nhân vật',
        nlsCode: '2.4.TC1a',
        aiCode: '7.C5.1'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 7 (4 tiết)',
        y: '- Đánh giá năng lực đọc hiểu văn bản thơ bốn chữ, năm chữ, truyện ngắn và năng lực viết bài văn biểu cảm/phân tích nhân vật.\n- Đánh giá kiến thức tiếng Việt (trạng ngữ, thuật ngữ, nói giảm nói tránh) theo chuẩn ma trận Bộ GD&ĐT.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn, ma trận và đáp án chính thức',
        nlsCode: '4.1.TC1a',
        aiCode: '7.A3.1'
      },
      {
        w: 10,
        t: 'Bài 3 & Bài 4',
        n: 'Bài 3: Viết bài văn phân tích đặc điểm nhân vật trong tác phẩm văn học & Nói và nghe & Đọc: Trong lòng mẹ & Bài 4: Giai điệu đất nước (4 tiết)',
        y: '- Nắm cấu trúc và quy trình viết bài văn nghị luận phân tích nhân vật văn học; trình bày ý kiến tự tin.\n- Đọc mở rộng trích đoạn Trong lòng mẹ (Nguyên Hồng); khởi động chủ đề Giai điệu đất nước.',
        eq: 'Dàn ý mẫu phân tích nhân vật, tiêu chí đánh giá bài thuyết trình',
        nlsCode: '3.2.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 11,
        t: 'Bài 4: Giai điệu đất nước',
        n: 'Bài 4: Giai điệu đất nước - Đọc: Mùa xuân nho nhỏ (Thanh Hải) & Thực hành tiếng Việt: Phó từ và chức năng (4 tiết)',
        y: '- Cảm nhận vẻ đẹp mùa xuân thiên nhiên, mùa xuân đất nước và khát vọng dâng hiến một mùa xuân nho nhỏ của Thanh Hải.\n- Nhận diện các loại phó từ (chỉ thời gian, mức độ, tiếp diễn, phủ định) và tác dụng ngữ nghĩa trong câu.',
        eq: 'Audio bài hát Mùa xuân nho nhỏ (nhạc Trần Hoàn), phiếu bài tập phó từ',
        nlsCode: '1.2.TC1b',
        aiCode: '7.B3.1'
      },
      {
        w: 12,
        t: 'Bài 4: Giai điệu đất nước',
        n: 'Bài 4: Giai điệu đất nước - Đọc: Gò Me (Hoàng Tố Nguyên) & Bài thơ "Đường núi" của Nguyễn Đình Thi (Vũ Quần Phương) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận vẻ đẹp trù phú, bình dị của vùng đất Gò Me Nam Bộ và cái hay của bài bình thơ Đường núi.\n- Thực hành tiếng Việt: phân tích nghệ thuật dùng phó từ và từ ngữ tượng thanh, tượng hình.',
        eq: 'Tranh ảnh miền quê Gò Me (Tiền Giang), văn bản Đường núi',
        nlsCode: '2.1.TC1b',
        aiCode: '7.C4.1'
      },
      {
        w: 13,
        t: 'Bài 4 & Bài 5',
        n: 'Bài 4: Viết bài văn biểu cảm về con người hoặc sự việc & Nói và nghe: Hoạt động thiện nguyện & Đọc: Chiều biên giới & Bài 5: Màu sắc trăm miền (4 tiết)',
        y: '- Nắm vững kĩ năng viết bài văn biểu cảm về con người hoặc sự việc; thuyết trình về hoạt động thiện nguyện vì cộng đồng.\n- Đọc mở rộng Chiều biên giới (Lò Ngân Sủn); tìm hiểu nét đẹp văn hóa các vùng miền.',
        eq: 'Phiếu tiêu chí viết văn biểu cảm, tư liệu hoạt động tình nguyện học đường',
        nlsCode: '3.1.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 14,
        t: 'Bài 5: Màu sắc trăm miền',
        n: 'Bài 5: Màu sắc trăm miền - Đọc: Tháng Giêng, mơ về trăng non rét ngọt (Vũ Bằng) & Thực hành tiếng Việt: Dấu gạch nối (4 tiết)',
        y: '- Cảm nhận phong vị Tết cổ truyền đất Bắc và nét đẹp thiên nhiên mùa xuân xứ Bắc qua ngòi bút tinh tế của Vũ Bằng.\n- Nhận biết công dụng của dấu gạch nối trong từ ghép, từ phiên âm và liên kết số liệu.',
        eq: 'Hình ảnh Hà Nội mùa xuân, tranh hoa đào ngày Tết, phiếu bài tập ngữ pháp',
        nlsCode: '1.3.TC1a',
        aiCode: '7.A1.1'
      },
      {
        w: 15,
        t: 'Bài 5: Màu sắc trăm miền',
        n: 'Bài 5: Màu sắc trăm miền - Đọc: Chuyện cơm hến (Hoàng Phủ Ngọc Tường) & Hội lồng tồng & Viết: Bản tường trình & Nói và nghe (4 tiết)',
        y: '- Khám phá nét độc đáo của ẩm thực Huế qua Chuyện cơm hến và sắc màu lễ hội Lồng tồng của đồng bào Tày, Nùng.\n- Nắm vững thể thức và viết đúng quy chuẩn văn bản tường trình; trao đổi về văn hóa truyền thống.',
        eq: 'Video giới thiệu ẩm thực xứ Huế và Lễ hội Lồng tồng Tây Bắc, mẫu văn bản',
        nlsCode: '3.1.TC1b',
        aiCode: '7.C5.1'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 7 (4 tiết)',
        y: '- Đánh giá toàn diện kết quả học tập môn Ngữ văn HK1: đọc hiểu văn bản (thơ, truyện, tùy bút/tản văn) và viết bài văn phân tích/biểu cảm.\n- Đánh giá năng lực tiếng Việt và cảm thụ văn học theo chuẩn CT GDPT 2018.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và biểu điểm',
        nlsCode: '4.1.TC1b',
        aiCode: '7.A3.1'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn 7 HK1 (4 tiết)',
        y: '- Nhận xét, phân tích kĩ lưỡng bài kiểm tra cuối HK1; chữa lỗi chính tả, ngữ pháp và lập luận.\n- Củng cố hệ thống các thể loại văn học và kiến thức tiếng Việt đã học trong HK1.',
        eq: 'Bài làm học sinh, bảng tổng hợp kết quả và đáp án chi tiết',
        nlsCode: '5.2.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm Đọc hiểu văn học Lớp 7 (4 tiết)',
        y: '- Sơ kết thi đua môn Ngữ văn HK1; trình bày các sản phẩm sáng tạo (tập san tản văn, video ngâm thơ, sổ tay đọc sách).\n- Rèn luyện kỹ năng thuyết trình, hợp tác nhóm và định hướng học tập HK2.',
        eq: 'Sản phẩm tập san, video clip của học sinh, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '7.D1.1'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Bài 6: Bài học cuộc sống',
        n: 'Bài 6: Bài học cuộc sống - Đọc: Đẽo cày giữa đường & Ếch ngồi đáy giếng & Con mối và con kiến & Thực hành tiếng Việt (4 tiết)',
        y: '- Nhận biết đặc trưng truyện ngụ ngôn: tình huống, nhân vật, mượn chuyện loài vật để khuyên răn con người bài học sâu sắc.\n- Nhận diện và phân tích tác dụng của biện pháp tu từ nói quá trong ngụ ngôn.',
        eq: 'Tranh minh họa truyện ngụ ngôn Việt Nam, phiếu học tập phân tích bài học',
        nlsCode: '1.1.TC1a',
        aiCode: '7.A1.1'
      },
      {
        w: 20,
        t: 'Bài 6: Bài học cuộc sống',
        n: 'Bài 6: Bài học cuộc sống - Đọc: Một số câu tục ngữ Việt Nam & Con hổ có nghĩa (Vũ Trinh) & Viết bài văn nghị luận xã hội (4 tiết)',
        y: '- Hiểu ý nghĩa triết lý, kinh nghiệm sống trong tục ngữ và lòng biết ơn, nghĩa tình trong truyện Con hổ có nghĩa.\n- Nắm vững kĩ năng viết bài văn nghị luận bày tỏ ý kiến tán thành về một vấn đề đời sống.',
        eq: 'Phiếu học tập phân loại tục ngữ, dàn ý bài văn nghị luận xã hội',
        nlsCode: '3.1.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 21,
        t: 'Bài 7: Thế giới viễn tưởng',
        n: 'Bài 7: Thế giới viễn tưởng - Đọc: Cuộc chạm trán trên đại dương (J. Verne) & Đường vào trung tâm vũ trụ & Thực hành tiếng Việt (4 tiết)',
        y: '- Nhận biết đặc trưng truyện khoa học viễn tưởng: đề tài, không gian, thời gian, nhân vật và yếu tố khoa học giả tưởng.\n- Thực hành tiếng Việt: mở rộng thành phần chính của câu bằng cụm từ.',
        eq: 'Tranh ảnh tàu ngầm Nautilus trong Hai vạn dặm dưới đáy biển, phiếu bài tập',
        nlsCode: '1.2.TC1a',
        aiCode: '7.B3.1'
      },
      {
        w: 22,
        t: 'Bài 7: Thế giới viễn tưởng',
        n: 'Bài 7: Thế giới viễn tưởng - Đọc: Dấu ấn Hồ Khanh (Nhật Văn) & Viết bài văn kể lại sự việc có thật liên quan đến nhân vật lịch sử & Thảo luận (4 tiết)',
        y: '- Cảm phục người thợ rừng Hồ Khanh phát hiện hang Sơn Đoòng kì vĩ; nắm quy trình viết bài văn tự sự kết hợp miêu tả.\n- Nói và nghe: Thảo luận về vai trò của công nghệ đối với đời sống con người; đọc Chiếc đũa thần.',
        eq: 'Video khám phá hang Sơn Đoòng, phiếu tiêu chí viết bài văn kể chuyện lịch sử',
        nlsCode: '3.2.TC1a',
        aiCode: '7.D1.1'
      },
      {
        w: 23,
        t: 'Bài 8: Trải nghiệm để trưởng thành',
        n: 'Bài 8: Trải nghiệm để trưởng thành - Đọc: Bản đồ dẫn đường (D. Gotlieb) & Hãy cầm lấy và đọc (Huỳnh Như Phương) & Thực hành tiếng Việt (4 tiết)',
        y: '- Hiểu ý nghĩa của việc tự tìm ra bản đồ dẫn đường cho cuộc đời và tầm quan trọng to lớn của văn hóa đọc sách.\n- Thực hành tiếng Việt: nhận diện thuật ngữ, các phép liên kết câu và nghĩa của từ ngữ trong ngữ cảnh.',
        eq: 'Văn bản Bản đồ dẫn đường, sách Hãy cầm lấy và đọc, bảng phân tích lập luận',
        nlsCode: '1.1.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 24,
        t: 'Bài 8: Trải nghiệm để trưởng thành',
        n: 'Bài 8: Trải nghiệm để trưởng thành - Đọc: Nói với con (Y Phương) & Viết bài văn nghị luận thể hiện sự phản đối & Nói và nghe (4 tiết)',
        y: '- Cảm nhận lời dặn dò tha thiết của người cha về cội nguồn sinh dưỡng và niềm tự hào về người đồng mình trong thơ Y Phương.\n- Nắm vững kĩ năng viết bài văn nghị luận trình bày ý kiến phản đối về một quan niệm sai lầm.',
        eq: 'Audio ngâm thơ Nói với con, phiếu hướng dẫn lập luận phản biện',
        nlsCode: '3.1.TC1b',
        aiCode: '7.C5.1'
      },
      {
        w: 25,
        t: 'Bài 8 & Bài 9',
        n: 'Bài 8: Thực hành đọc: Câu chuyện về con đường & Bài 9: Hòa điệu với tự nhiên - Đọc: Thủy tiên tháng Một (T.L. Friedman) (4 tiết)',
        y: '- Đọc hiểu Câu chuyện về con đường (Đoàn Công Lê Huy); khám phá thông điệp về biến đổi khí hậu trong Thủy tiên tháng Một.\n- Nhận biết đặc điểm văn bản nghị luận xã hội về mối quan hệ giữa con người và thiên nhiên.',
        eq: 'Infographic biến đổi khí hậu toàn cầu, tư liệu Thủy tiên tháng Một',
        nlsCode: '1.3.TC1a',
        aiCode: '7.A1.MR1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 7 (4 tiết)',
        y: '- Đánh giá năng lực đọc hiểu (truyện ngụ ngôn, truyện viễn tưởng, văn bản nghị luận) và năng lực viết bài văn nghị luận xã hội.\n- Đánh giá kiến thức tiếng Việt và tư duy phản biện theo chuẩn ma trận Bộ GD&ĐT.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn, ma trận và đáp án',
        nlsCode: '4.1.TC1a',
        aiCode: '7.A3.1'
      },
      {
        w: 27,
        t: 'Bài 9: Hòa điệu với tự nhiên',
        n: 'Bài 9: Hòa điệu với tự nhiên - Đọc: Lễ rửa làng của người Lô Lô & Bản tin về hoa anh đào & Thực hành tiếng Việt (4 tiết)',
        y: '- Hiểu phong tục văn hóa độc đáo bảo vệ môi trường của người Lô Lô và nét đẹp văn hóa ứng xử với thiên nhiên trong Bản tin hoa anh đào.\n- Thực hành tiếng Việt: nhận diện và sử dụng các phương tiện phi ngôn ngữ (hình ảnh, số liệu, sơ đồ).',
        eq: 'Hình ảnh Lễ rửa làng của người Lô Lô, video lễ hội hoa anh đào Đà Lạt',
        nlsCode: '1.3.TC1b',
        aiCode: '7.B3.1'
      },
      {
        w: 28,
        t: 'Bài 9: Hòa điệu với tự nhiên',
        n: 'Bài 9: Hòa điệu với tự nhiên - Viết bài văn thuyết minh về quy tắc hoặc luật lệ trong trò chơi hay hoạt động & Thuyết minh (4 tiết)',
        y: '- Nắm vững bố cục và quy trình viết bài văn thuyết minh giải thích quy tắc, luật lệ của một trò chơi dân gian hoặc hoạt động tập thể.\n- Nói và nghe: Giải thích rõ ràng, sinh động quy tắc luật lệ trò chơi trước tập thể; đọc Thân thiện với môi trường.',
        eq: 'Video minh họa các trò chơi dân gian (Kéo co, Ô ăn quan), phiếu dàn ý',
        nlsCode: '3.1.TC1a',
        aiCode: '7.C4.1'
      },
      {
        w: 29,
        t: 'Bài 10: Trang sách và cuộc sống',
        n: 'Bài 10: Trang sách và cuộc sống - Thách thức đầu tiên; Chinh phục những cuốn sách mới & Viết: Từ ý tưởng đến sản phẩm (4 tiết)',
        y: '- Tham gia hành trình đọc sách, mở rộng thể loại; vận dụng ý tưởng từ trang sách để sáng tạo các sản phẩm học tập độc đáo.\n- Rèn luyện thói quen tự học, phát triển tư duy sáng tạo và lòng say mê khám phá tri thức.',
        eq: 'Danh mục sách hay dành cho lứa tuổi THCS, mẫu phiếu sản phẩm đọc sách',
        nlsCode: '1.2.TC1b',
        aiCode: '7.A1.1'
      },
      {
        w: 30,
        t: 'Bài 10: Trang sách và cuộc sống',
        n: 'Bài 10: Trang sách và cuộc sống - Viết bài văn phân tích nhân vật văn học trong sách đã đọc & Về đích: Ngày hội với sách (4 tiết)',
        y: '- Viết bài văn hoàn chỉnh phân tích nhân vật văn học yêu thích trong cuốn sách đã đọc.\n- Tổ chức Ngày hội với sách: thuyết trình giới thiệu sản phẩm và chia sẻ trải nghiệm đọc sách; ôn tập HK2.',
        eq: 'Poster, slide thuyết trình giới thiệu sách của học sinh, máy chiếu',
        nlsCode: '3.2.TC1b',
        aiCode: '7.D1.1'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 7 (4 tiết)',
        y: '- Đánh giá tổng hợp năng lực đọc hiểu văn bản thông tin, nghị luận xã hội và năng lực viết văn bản thuyết minh/nghị luận cả năm.\n- Đánh giá phẩm chất tự chủ, trách nhiệm công dân và năng lực thẩm mỹ văn học.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm',
        nlsCode: '4.1.TC1b',
        aiCode: '7.A3.1'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức Ngữ văn 7 HK2 (4 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2 chi tiết; khắc phục các lỗi diễn đạt và phương pháp viết bài.\n- Hệ thống hóa các đơn vị kiến thức trọng tâm của môn Ngữ văn Lớp 7.',
        eq: 'Bài làm học sinh, đáp án và bảng biểu điểm',
        nlsCode: '5.2.TC1b',
        aiCode: '7.A1.MR1'
      },
      {
        w: 33,
        t: 'Dự án Ngữ văn 7',
        n: 'Dự án Ngữ văn 7: "Tuyển tập Tản văn Quê hương & Sân khấu Diễn xướng Thơ ca" (4 tiết)',
        y: '- Thực hiện dự án diễn xướng thơ ca, ngâm thơ hoặc biên soạn tập san tản văn về danh lam thắng cảnh quê hương.\n- Ứng dụng công nghệ thông tin trong thiết kế ấn phẩm số và trình diễn nghệ thuật.',
        eq: 'Tập san số, bản ghi âm diễn xướng thơ, máy chiếu',
        nlsCode: '2.4.TC1b',
        aiCode: '7.C5.1'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Bài 11: Ôn tập toàn diện chuẩn bị tổng kết năm học môn Ngữ văn 7 (4 tiết)',
        y: '- Khái quát toàn bộ hệ thống thể loại và kiến thức tiếng Việt lớp 7; rèn luyện kĩ năng giải đề tổng hợp.\n- Chuẩn bị hành trang học tập cho chương trình Ngữ văn Lớp 8.',
        eq: 'Sơ đồ tư duy toàn bộ chương trình Ngữ văn 7',
        nlsCode: '1.3.TC1b',
        aiCode: '7.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Ngữ văn 7 cả năm (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và xếp loại môn Ngữ văn Lớp 7 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Hướng dẫn học sinh phương pháp đọc sách và tự học trong dịp hè.',
        eq: 'Bảng theo dõi đánh giá học sinh, danh mục sách gợi ý hè lớp 8',
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
        location: 'Phòng học / Thư viện trường',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Văn học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: NGỮ VĂN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - TẬP 1 & TẬP 2
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Bài 1: Câu chuyện của lịch sử',
        n: 'Bài 1: Câu chuyện của lịch sử - Đọc: Lá cờ thêu sáu chữ vàng (Nguyễn Huy Tưởng) & Thực hành tiếng Việt: Biệt ngữ xã hội (4 tiết)',
        y: '- Nắm vững đặc trưng truyện lịch sử: bối cảnh, nhân vật lịch sử, lòng yêu nước sục sôi của người anh hùng trẻ tuổi Trần Quốc Toản.\n- Nhận diện và phân tích tác dụng của biệt ngữ xã hội, từ ngữ lịch sử trong việc tái hiện không khí thời đại.',
        eq: 'Tranh ảnh minh họa truyện Lá cờ thêu sáu chữ vàng, bản đồ trận chiến Bạch Đằng',
        nlsCode: '1.1.TC2a',
        aiCode: '8.A1.1'
      },
      {
        w: 2,
        t: 'Bài 1: Câu chuyện của lịch sử',
        n: 'Bài 1: Câu chuyện của lịch sử - Đọc: Quang Trung đại phá quân Thanh (Hoàng Lê nhất thống chí) & Ta đi tới (Tố Hữu) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm phục tài trí quân sự và khí phách lẫm liệt của vua Quang Trung; hào khí cách mạng trong trường ca Tố Hữu.\n- Thực hành tiếng Việt: từ ngữ toàn dân và từ ngữ địa phương, biệt ngữ xã hội.',
        eq: 'Tượng đài Quang Trung - Nguyễn Huệ, lược đồ chiến dịch Ngọc Hồi - Đống Đa',
        nlsCode: '2.1.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 3,
        t: 'Bài 1 & Bài 2',
        n: 'Bài 1: Viết bài văn kể lại một chuyến đi (di tích lịch sử, văn hóa) & Nói và nghe & Đọc: Minh sư & Bài 2: Vẻ đẹp cổ điển (4 tiết)',
        y: '- Nắm vững quy trình viết bài văn tự sự kể lại một chuyến tham quan di tích lịch sử, văn hóa; giới thiệu cuốn sách lịch sử.\n- Đọc mở rộng trích đoạn Minh sư (Thái Bá Lợi); bước đầu tìm hiểu thơ Đường luật trong Vẻ đẹp cổ điển.',
        eq: 'Hình ảnh các di tích lịch sử nổi tiếng (Cố đô Hoa Lư, Hoàng thành Thăng Long)',
        nlsCode: '3.1.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 4,
        t: 'Bài 2: Vẻ đẹp cổ điển',
        n: 'Bài 2: Vẻ đẹp cổ điển - Đọc: Thu điếu (Nguyễn Khuyến) & Thực hành tiếng Việt: Từ Hán Việt, sắc thái nghĩa (4 tiết)',
        y: '- Cảm nhận vẻ đẹp trong trẻo, tĩnh lặng của mùa thu đồng bằng Bắc Bộ và tấm lòng thanh bạch, ưu thời mẫn thế của cụ Tam nguyên Yên Đổ.\n- Nhận diện và phân tích tác dụng tạo sắc thái cổ kính, trang trọng của từ Hán Việt trong thơ Đường luật.',
        eq: 'Tranh phong cảnh mùa thu làng quê Bắc Bộ, audio ngâm thơ Thu điếu',
        nlsCode: '1.2.TC2a',
        aiCode: '8.B1.1'
      },
      {
        w: 5,
        t: 'Bài 2: Vẻ đẹp cổ điển',
        n: 'Bài 2: Vẻ đẹp cổ điển - Đọc: Thiên Trường vãn vọng (Trần Nhân Tông) & Ca Huế trên sông Hương (Hà Ánh Minh) & Thực hành tiếng Việt (4 tiết)',
        y: '- Thưởng thức bức tranh hoàng hôn thôn dã thanh bình trong thơ Phật hoàng Trần Nhân Tông và nét quyến rũ của dân ca Huế trên sông Hương.\n- Thực hành tiếng Việt: biện pháp tu từ đảo ngữ, đối xứng trong thơ Đường luật.',
        eq: 'Audio dân ca Ca Huế, hình ảnh di tích Thiên Trường (Nam Định), sông Hương (Huế)',
        nlsCode: '2.2.TC2a',
        aiCode: '8.C5.1'
      },
      {
        w: 6,
        t: 'Bài 2 & Bài 3',
        n: 'Bài 2: Viết bài văn phân tích một tác phẩm văn học (thơ thất ngôn bát cú/tứ tuyệt) & Nói và nghe & Đọc: Qua Đèo Ngang & Bài 3: Lời sông núi (4 tiết)',
        y: '- Viết bài văn nghị luận phân tích bài thơ thất ngôn bát cú hoặc tứ tuyệt Đường luật; trao đổi về di sản văn hóa truyền thống.\n- Đọc mở rộng Qua Đèo Ngang (Bà Huyện Thanh Quan); bắt đầu chủ đề Lời sông núi.',
        eq: 'Phiếu tiêu chí phân tích thơ Đường luật, tranh minh họa Đèo Ngang',
        nlsCode: '3.1.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 7,
        t: 'Bài 3: Lời sông núi',
        n: 'Bài 3: Lời sông núi - Đọc: Hịch tướng sĩ (Trần Quốc Tuấn) & Thực hành tiếng Việt: Đoạn văn diễn dịch, quy nạp (4 tiết)',
        y: '- Cảm nhận lòng yêu nước nồng nàn, tinh thần quyết chiến quyết thắng và nghệ thuật văn chính luận mẫu mực của Hưng Đạo Đại Vương.\n- Nhận diện và thực hành viết đoạn văn theo cấu trúc diễn dịch, quy nạp, song song, phối hợp.',
        eq: 'Tượng đài Trần Quốc Tuấn, sơ đồ cấu trúc đoạn văn lập luận',
        nlsCode: '1.1.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 8,
        t: 'Bài 3: Lời sông núi',
        n: 'Bài 3: Lời sông núi - Đọc: Tinh thần yêu nước của nhân dân ta (Hồ Chí Minh) & Nam quốc sơn hà & Thực hành tiếng Việt (4 tiết)',
        y: '- Thấm nhuần truyền thống yêu nước nồng nàn của dân tộc ta qua áng văn chính luận đanh thép của Bác Hồ và bản Tuyên ngôn Độc lập đầu tiên.\n- Thực hành liên kết câu, liên kết đoạn trong văn bản nghị luận.',
        eq: 'Chân dung Chủ tịch Hồ Chí Minh, tư liệu bài thơ Thần Nam quốc sơn hà',
        nlsCode: '2.4.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 8 (4 tiết)',
        y: '- Đánh giá năng lực đọc hiểu văn bản thơ Đường luật, văn chính luận lịch sử và năng lực viết bài văn phân tích thơ Đường luật/nghị luận xã hội.\n- Đánh giá kiến thức tiếng Việt (từ Hán Việt, đoạn văn diễn dịch/quy nạp) theo ma trận đề chuẩn Bộ GD&ĐT.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn, ma trận và thang điểm chính thức',
        nlsCode: '4.1.TC2a',
        aiCode: '8.A3.3'
      },
      {
        w: 10,
        t: 'Bài 3 & Bài 4',
        n: 'Bài 3: Viết bài văn nghị luận về một vấn đề đời sống (con người với cộng đồng) & Nói và nghe & Đọc: Chiếu dời đô & Bài 4: Tiếng cười trào phúng trong thơ (4 tiết)',
        y: '- Viết bài văn nghị luận xã hội về trách nhiệm của học sinh với cộng đồng, đất nước; thảo luận nhóm tự tin.\n- Đọc mở rộng Chiếu dời đô (Lý Công Uẩn); làm quen chủ đề thơ trào phúng.',
        eq: 'Tượng đài Lý Thái Tổ, phiếu hướng dẫn lập dàn ý bài văn nghị luận xã hội',
        nlsCode: '3.2.TC2a',
        aiCode: '8.B2.1'
      },
      {
        w: 11,
        t: 'Bài 4: Tiếng cười trào phúng trong thơ',
        n: 'Bài 4: Tiếng cười trào phúng trong thơ - Đọc: Lễ xướng danh khoa Đinh Dậu (Trần Tế Xương) & Thực hành tiếng Việt: Nghĩa tường minh và hàm ý (4 tiết)',
        y: '- Cảm nhận tiếng cười chua chát, xót xa trước cảnh thi cử nhố nhăng của xã hội thực dân nửa phong kiến qua thơ Tú Xương.\n- Phân biệt nghĩa tường minh và hàm ý của câu; giải mã các hàm ý châm biếm sâu cay trong thơ trào phúng.',
        eq: 'Chân dung Tú Xương, tranh biếm họa cảnh trường thi thời phong kiến',
        nlsCode: '1.2.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 12,
        t: 'Bài 4: Tiếng cười trào phúng trong thơ',
        n: 'Bài 4: Tiếng cười trào phúng trong thơ - Đọc: Lai Tân (Hồ Chí Minh) & Một số giọng điệu của tiếng cười trong thơ trào phúng & Thực hành tiếng Việt (4 tiết)',
        y: '- Thấy được nghệ thuật châm biếm đòn đả, sâu cay vạch trần bộ mặt thối nát của bộ máy cai trị Tưởng Giới Thạch trong thơ Hồ Chí Minh.\n- Nhận biết các cung bậc và giọng điệu của tiếng cười trào phúng (hài hước, mỉa mai, châm biếm, đả kích).',
        eq: 'Tập thơ Nhật kí trong tù, phiếu phân tích giọng điệu trào phúng',
        nlsCode: '2.1.TC2b',
        aiCode: '8.C5.1'
      },
      {
        w: 13,
        t: 'Bài 4 & Bài 5',
        n: 'Bài 4: Viết bài văn phân tích một tác phẩm thơ trào phúng & Nói và nghe & Đọc: Vịnh cây vông & Bài 5: Những câu chuyện hài (4 tiết)',
        y: '- Nắm vững kĩ năng viết bài văn phân tích nghệ thuật trào phúng trong tác phẩm thơ; trình bày suy nghĩ về ý nghĩa của tiếng cười.\n- Đọc mở rộng Vịnh cây vông (Nguyễn Công Trứ); khám phá thể loại kịch hài và truyện cười.',
        eq: 'Phiếu tiêu chí đánh giá bài phân tích thơ trào phúng, tranh truyện hài hước',
        nlsCode: '3.1.TC2a',
        aiCode: '8.D1.1'
      },
      {
        w: 14,
        t: 'Bài 5: Những câu chuyện hài',
        n: 'Bài 5: Những câu chuyện hài - Đọc: Trưởng giả học làm sang (Molière) & Thực hành tiếng Việt: Trợ từ, Thán từ (4 tiết)',
        y: '- Nhận biết đặc trưng kịch hài: xung đột kịch, hành động kịch, nghệ thuật gây cười qua nhân vật ông Giuốc-đanh ngớ ngẩn.\n- Nhận diện trợ từ, thán từ và hiểu giá trị biểu cảm, nhấn mạnh của chúng trong hội thoại kịch.',
        eq: 'Trích đoạn kịch Trưởng giả học làm sang, phiếu bài tập trợ từ, thán từ',
        nlsCode: '1.3.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 15,
        t: 'Bài 5: Những câu chuyện hài',
        n: 'Bài 5: Những câu chuyện hài - Đọc: Chùm truyện cười dân gian Việt Nam & Chùm ca dao trào phúng & Viết: Nghị luận thói xấu xã hội & Nói và nghe (4 tiết)',
        y: '- Thưởng thức tiếng cười phê phán thói khoe của, lười biếng, mê tín trong truyện cười dân gian và ca dao trào phúng.\n- Viết bài văn nghị luận bàn về một thói xấu của con người trong xã hội hiện đại; đọc Giá không có ruồi! & Ôn tập HK1.',
        eq: 'Tranh dân gian Đông Hồ, truyện cười Tam đại con gà, Lợn cưới áo mới',
        nlsCode: '3.1.TC2b',
        aiCode: '8.C1.1'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 8 (4 tiết)',
        y: '- Đánh giá tổng hợp năng lực đọc hiểu văn bản (thơ trào phúng, truyện ngụ ngôn/kịch hài, văn chính luận) và năng lực viết bài văn phân tích/nghị luận.\n- Đánh giá năng lực sử dụng tiếng Việt và tư duy phản biện văn học theo chuẩn CT GDPT 2018.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2b',
        aiCode: '8.A3.3'
      },
      {
        w: 17,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn 8 HK1 (4 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1 chi tiết; phân tích nguyên nhân lỗi sai và biểu dương các bài viết xuất sắc.\n- Củng cố hệ thống thể loại văn học và kiến thức tiếng Việt học trong HK1.',
        eq: 'Bài làm học sinh, đáp án và bảng thống kê kết quả',
        nlsCode: '5.2.TC2a',
        aiCode: '8.A1.2'
      },
      {
        w: 18,
        t: 'Sơ kết & Dự án học tập',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm Đọc hiểu văn học Lớp 8 (4 tiết)',
        y: '- Sơ kết thi đua môn Ngữ văn HK1; trình bày các sản phẩm sáng tạo (video kịch ngắn, sơ đồ tư duy phân tích tác phẩm, tuyển tập thơ).\n- Đánh giá mức độ hoàn thành nhiệm vụ học tập và lập kế hoạch rèn luyện HK2.',
        eq: 'Sản phẩm tập san, video trích đoạn kịch của học sinh, máy chiếu',
        nlsCode: '2.4.TC2b',
        aiCode: '8.D2.1'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Bài 6: Chân dung cuộc sống',
        n: 'Bài 6: Chân dung cuộc sống - Đọc: Mắt sói (Daniel Pennac) & Thực hành tiếng Việt: Câu đơn và câu ghép (4 tiết)',
        y: '- Đọc hiểu truyện hiện đại: cảm nhận tình bạn kì diệu giữa cậu bé Phi-chơ và con sói Lam qua ánh mắt thấu cảm.\n- Nhận diện câu đơn và câu ghép; phân tích các mối quan hệ ngữ nghĩa giữa các vế trong câu ghép.',
        eq: 'Tranh ảnh tiểu thuyết Mắt sói, phiếu bài tập nhận diện câu ghép',
        nlsCode: '1.1.TC2a',
        aiCode: '8.A1.1'
      },
      {
        w: 20,
        t: 'Bài 6: Chân dung cuộc sống',
        n: 'Bài 6: Chân dung cuộc sống - Đọc: Lặng lẽ Sa Pa (Nguyễn Thành Long) & Bếp lửa (Bằng Việt) & Viết: Phân tích truyện ngắn (4 tiết)',
        y: '- Cảm phục vẻ đẹp lý tưởng sống cống hiến thầm lặng của anh thanh niên Sa Pa và tình bà cháu thiêng liêng trong thơ Bằng Việt.\n- Nắm vững phương pháp và viết bài văn nghị luận phân tích một tác phẩm truyện ngắn; đọc Chiếc lá cuối cùng.',
        eq: 'Hình ảnh trạm khí tượng Sa Pa, audio bài thơ Bếp lửa, phiếu dàn ý phân tích truyện',
        nlsCode: '3.1.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 21,
        t: 'Bài 7: Tin yêu và ước vọng',
        n: 'Bài 7: Tin yêu và ước vọng - Đọc: Đồng chí (Chính Hữu) & Thực hành tiếng Việt: Thành phần biệt lập tình thái, cảm thán (4 tiết)',
        y: '- Cảm nhận vẻ đẹp chân thực, mộc mạc và cao cả của tình đồng chí, đồng đội keo sơn gắn bó trong kháng chiến chống Pháp.\n- Nhận diện thành phần tình thái và cảm thán; hiểu chức năng bộc lộ cảm xúc và thái độ của người nói.',
        eq: 'Audio bài hát Tình đồng chí (nhạc Minh Quốc), tranh ảnh người lính Vệ quốc quân',
        nlsCode: '1.2.TC2a',
        aiCode: '8.B1.1'
      },
      {
        w: 22,
        t: 'Bài 7: Tin yêu và ước vọng',
        n: 'Bài 7: Tin yêu và ước vọng - Đọc: Lá đỏ (Nguyễn Đình Thi) & Những ngôi sao xa xôi (Lê Minh Khuê) & Thực hành tiếng Việt (4 tiết)',
        y: '- Cảm nhận khí thế hành quân ra trận trên dãy Trường Sơn và tinh thần dũng cảm, lạc quan của ba nữ trinh sát mặt đường.\n- Thực hành tiếng Việt: thành phần gọi - đáp và thành phần phụ chú trong câu.',
        eq: 'Video/Hình ảnh ngã ba Đồng Lộc, đường Trường Sơn, phiếu phân tích nhân vật',
        nlsCode: '2.1.TC2a',
        aiCode: '8.C5.1'
      },
      {
        w: 23,
        t: 'Bài 7 & Bài 8',
        n: 'Bài 7: Tập làm thơ tự do; Viết đoạn văn ghi lại cảm xúc về bài thơ tự do & Nói và nghe & Đọc: Bài thơ về tiểu đội xe không kính & Bài 8 (4 tiết)',
        y: '- Thực hành sáng tác thơ tự do; viết đoạn văn biểu cảm; trao đổi về lý tưởng tuổi trẻ; đọc Bài thơ về tiểu đội xe không kính.\n- Bắt đầu chủ đề Nhà văn và trang viết: tìm hiểu mối liên hệ giữa nhà văn và phong cách nghệ thuật.',
        eq: 'Hình ảnh xe không kính thời chống Mỹ, phiếu sáng tác thơ tự do',
        nlsCode: '3.1.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 24,
        t: 'Bài 8: Nhà văn và trang viết',
        n: 'Bài 8: Nhà văn và trang viết - Đọc: Nhà thơ của quê hương làng cảnh Việt Nam (Xuân Diệu) & Đọc văn – cuộc chơi tìm ý nghĩa (4 tiết)',
        y: '- Hiểu sâu sắc phong cách thơ Nguyễn Khuyến qua bài phê bình tài hoa của Xuân Diệu và nghệ thuật đọc hiểu văn bản của Trần Đình Sử.\n- Nắm vững đặc trưng văn bản nghị luận văn học: hệ thống luận điểm, luận cứ, thao tác bình luận sắc bén.',
        eq: 'Chân dung Xuân Diệu, GS. Trần Đình Sử, tài liệu nghị luận văn học',
        nlsCode: '1.1.TC2b',
        aiCode: '8.A1.1'
      },
      {
        w: 25,
        t: 'Bài 8: Nhà văn và trang viết',
        n: 'Bài 8: Nhà văn và trang viết - Thực hành tiếng Việt: Khởi ngữ & Viết: Phân tích bài thơ tự do hoặc truyện & Nói và nghe (4 tiết)',
        y: '- Nhận diện khởi ngữ và phân tích tác dụng nhấn mạnh chủ đề câu; viết bài văn phân tích bài thơ tự do/truyện.\n- Nói và nghe: Thảo luận về vai trò của văn học đối với đời sống tâm hồn hiện nay; đọc Nắng mới (Lê Quang Hưng).',
        eq: 'Phiếu bài tập khởi ngữ, dàn ý bài văn phân tích tác phẩm tự do',
        nlsCode: '3.2.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 8 (4 tiết)',
        y: '- Đánh giá năng lực đọc hiểu văn bản (thơ hiện đại, truyện ngắn, nghị luận văn học) và năng lực viết bài văn phân tích tác phẩm văn học.\n- Đánh giá kiến thức tiếng Việt (câu ghép, thành phần biệt lập, khởi ngữ) theo ma trận chuẩn Bộ GD&ĐT.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn, ma trận và hướng dẫn chấm',
        nlsCode: '4.1.TC2a',
        aiCode: '8.A3.3'
      },
      {
        w: 27,
        t: 'Bài 9: Hôm nay và ngày mai',
        n: 'Bài 9: Hôm nay và ngày mai - Đọc: Miền châu thổ sông Cửu Long cần chuyển đổi từ sống chung sang chào đón lũ & Choáng ngợp... (4 tiết)',
        y: '- Nắm vững đặc trưng văn bản thông tin giải thích hiện tượng tự nhiên và cảnh báo hiểm họa sinh thái toàn cầu từ loạt phim Hành tinh của chúng ta.\n- Thực hành tiếng Việt: câu đơn và câu ghép trong văn bản thông tin.',
        eq: 'Video trích đoạn phim tài liệu Our Planet, bản đồ đồng bằng sông Cửu Long',
        nlsCode: '1.3.TC2a',
        aiCode: '8.B1.1'
      },
      {
        w: 28,
        t: 'Bài 9: Hôm nay và ngày mai',
        n: 'Bài 9: Hôm nay và ngày mai - Đọc: Diễn từ ứng khẩu của thủ lĩnh da đỏ Xi-át-tơn & Viết văn bản thuyết minh hiện tượng tự nhiên & Kiến nghị (4 tiết)',
        y: '- Thấm thía bức thông điệp thiêng liêng về đất đai và môi trường trong diễn từ của thủ lĩnh da đỏ Xi-át-tơn.\n- Nắm vững kĩ năng viết bài văn thuyết minh giải thích một hiện tượng tự nhiên và viết văn bản kiến nghị về vấn đề đời sống.',
        eq: 'Chân dung thủ lĩnh Xi-át-tơn, mẫu văn bản kiến nghị chuẩn',
        nlsCode: '3.1.TC2a',
        aiCode: '8.C1.1'
      },
      {
        w: 29,
        t: 'Bài 9 & Bài 10',
        n: 'Bài 9: Thảo luận nề nếp sinh hoạt & Đọc: Dấu chân sinh thái & Bài 10: Sách – Người bạn đồng hành - Đọc như một hành trình (4 tiết)',
        y: '- Nói và nghe: Thảo luận về nề nếp sinh hoạt hợp lí; đọc mở rộng Dấu chân sinh thái của mỗi người; bắt đầu hành trình đọc sách.\n- Phát triển văn hóa đọc và kĩ năng chọn lọc, đánh giá chất lượng sách học thuật.',
        eq: 'Infographic Dấu chân sinh thái (Ecological Footprint), nhật kí đọc sách',
        nlsCode: '1.2.TC2b',
        aiCode: '8.A1.2'
      },
      {
        w: 30,
        t: 'Bài 10: Sách – Người bạn đồng hành',
        n: 'Bài 10: Sách – Người bạn đồng hành - Kết nối cộng đồng người đọc & Về đích: Ngày hội với sách & Ôn tập Học kì II (4 tiết)',
        y: '- Xây dựng mạng lưới kết nối chia sẻ sách; thuyết trình sản phẩm truyền thông lan tỏa tình yêu sách.\n- Ôn tập hệ thống hóa kiến thức văn học, tiếng Việt và kiểu văn bản HK2 chuẩn bị kiểm tra cuối năm.',
        eq: 'Sản phẩm podcast/video review sách của học sinh, bảng ôn tập',
        nlsCode: '3.2.TC2b',
        aiCode: '8.D2.1'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 8 (4 tiết)',
        y: '- Đánh giá tổng hợp toàn diện năng lực đọc hiểu (văn bản thông tin, nghị luận, thơ, truyện) và năng lực viết văn bản hoàn chỉnh cả năm.\n- Đánh giá năng lực tự học, tư duy phản biện và phẩm chất đạo đức theo chuẩn CT GDPT 2018.',
        eq: 'Đề kiểm tra cuối kỳ 2 chuẩn, ma trận và thang điểm chi tiết',
        nlsCode: '4.1.TC2b',
        aiCode: '8.A3.3'
      },
      {
        w: 32,
        t: 'Ôn tập & Đánh giá định kỳ',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức Ngữ văn 8 HK2 (4 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2 chi tiết; tổng kết điểm mạnh và khắc phục hạn chế trong diễn đạt, lập luận.\n- Củng cố toàn diện kiến thức ngữ pháp và kĩ năng làm bài thi văn học.',
        eq: 'Bài làm học sinh, đáp án và biểu điểm sửa sai',
        nlsCode: '5.2.TC2b',
        aiCode: '8.A1.2'
      },
      {
        w: 33,
        t: 'Dự án Ngữ văn 8',
        n: 'Dự án Ngữ văn 8: "Sáng tác Truyện ngắn & Diễn đàn Đọc sách Học đường THCS" (4 tiết)',
        y: '- Thực hiện dự án sáng tác truyện ngắn học đường hoặc tổ chức Diễn đàn truyền thông văn hóa đọc sách trực tuyến.\n- Ứng dụng công nghệ số làm kỷ yếu điện tử, thiết kế bìa sách và ấn phẩm văn học số.',
        eq: 'Tuyển tập truyện ngắn điện tử (E-book/PDF) của lớp, máy chiếu',
        nlsCode: '2.4.TC2b',
        aiCode: '8.D2.1'
      },
      {
        w: 34,
        t: 'Ôn tập tổng kết',
        n: 'Bài 11: Ôn tập toàn diện chuẩn bị tổng kết năm học môn Ngữ văn 8 (4 tiết)',
        y: '- Hệ thống hóa toàn bộ các thể loại văn học và kĩ năng viết văn bản đã học trong chương trình Lớp 8.\n- Chuẩn bị nền tảng kiến thức vững vàng để bước vào năm học lớp 9 bản lề.',
        eq: 'Sơ đồ tư duy toàn bộ chương trình Ngữ văn 8',
        nlsCode: '1.3.TC2b',
        aiCode: '8.D1.1'
      },
      {
        w: 35,
        t: 'Đánh giá xếp loại',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Ngữ văn 8 cả năm (4 tiết)',
        y: '- Tổng kết, đánh giá quá trình học tập và xếp loại môn Ngữ văn Lớp 8 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Khen thưởng học sinh tiến bộ và giao nhiệm vụ chuẩn bị kiến thức môn Ngữ văn Lớp 9.',
        eq: 'Sổ theo dõi đánh giá học sinh, danh mục tài liệu ôn tập hè lớp 9',
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
        location: 'Phòng học / Thư viện trường',
        nlsCode: item.nlsCode,
        aiCode: item.aiCode,
        notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Văn học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: NGỮ VĂN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - TẬP 1 & TẬP 2
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Bài 1: Thế giới kì ảo',
      n: 'Bài 1: Thế giới kì ảo - Đọc: Chuyện người con gái Nam Xương (Nguyễn Dữ) & Thực hành tiếng Việt: Điển tích, điển cố (4 tiết)',
      y: '- Nắm vững đặc trưng thể loại truyền kì mạn lục: yếu tố kì ảo kết hợp hiện thực; cảm thương sâu sắc số phận oan khuất của Vũ Nương và ca ngợi phẩm hạnh đoan trang.\n- Nhận biết và hiểu tác dụng biểu đạt hàm súc, trang nhã của điển tích, điển cố trong văn học trung đại.',
      eq: 'Tranh minh họa Chuyện người con gái Nam Xương, phiếu tra cứu điển cố',
      nlsCode: '1.1.TC2a',
      aiCode: '9.A1.1'
    },
    {
      w: 2,
      t: 'Bài 1: Thế giới kì ảo',
      n: 'Bài 1: Thế giới kì ảo - Đọc: Dế chọi (Bồ Tùng Linh) & Sơn Tinh – Thuỷ Tinh (Nguyễn Nhược Pháp) & Thực hành tiếng Việt (4 tiết)',
      y: '- Thấy được tính chất phê phán hiện thực sâu sắc qua ngòi bút kì ảo của Bồ Tùng Linh và vẻ đẹp thơ mộng, hóm hỉnh trong thơ Nguyễn Nhược Pháp.\n- Thực hành tiếng Việt: phân tích tác dụng của điển tích và các biện pháp tu từ trong văn bản truyền kì.',
      eq: 'Văn bản Liêu trai chí dị, audio ngâm thơ Sơn Tinh - Thủy Tinh',
      nlsCode: '2.1.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 3,
      t: 'Bài 1 & Bài 2',
      n: 'Bài 1: Viết bài văn nghị luận về một vấn đề cần giải quyết (con người với tự nhiên) & Nói và nghe & Đọc: Ngọc nữ về tay chân chủ & Bài 2 (4 tiết)',
      y: '- Nắm vững phương pháp và viết bài văn nghị luận xã hội đề xuất giải pháp giải quyết mối quan hệ con người - tự nhiên; thuyết trình tự tin.\n- Đọc mở rộng Ngọc nữ về tay chân chủ; bắt đầu chủ đề Những cung bậc tâm trạng.',
      eq: 'Phiếu tiêu chí bài văn nghị luận giải quyết vấn đề, tranh phong cảnh',
      nlsCode: '3.1.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 4,
      t: 'Bài 2: Những cung bậc tâm trạng',
      n: 'Bài 2: Những cung bậc tâm trạng - Đọc: Nỗi niềm chinh phụ (Chinh phụ ngâm) & Thực hành tiếng Việt: Biện pháp tu từ chơi chữ, điệp thanh (4 tiết)',
      y: '- Cảm nhận nỗi cô đơn, sầu muộn và khát vọng hạnh phúc lứa đôi tha thiết của người chinh phụ qua thể ngâm song thất lục bát.\n- Nhận diện và phân tích tác dụng nhạc điệu, biểu cảm của phép chơi chữ, điệp thanh, điệp vần.',
      eq: 'Audio ngâm khúc Chinh phụ ngâm, bảng quy luật vần nhịp song thất lục bát',
      nlsCode: '1.2.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 5,
      t: 'Bài 2: Những cung bậc tâm trạng',
      n: 'Bài 2: Những cung bậc tâm trạng - Đọc: Tiếng đàn mưa (Bích Khê) & Một thể thơ độc đáo của người Việt & Thực hành tiếng Việt (4 tiết)',
      y: '- Cảm nhận vẻ đẹp âm thanh huyền ảo, nhạc tính du dương trong thơ tượng trưng Bích Khê và hiểu nguồn gốc thể thơ song thất lục bát thuần Việt.\n- Thực hành tiếng Việt: phân tích nghệ thuật hòa âm, phối thanh trong thơ trữ tình.',
      eq: 'Chân dung nhà thơ Bích Khê, bản nhạc hòa tấu Tiếng đàn mưa',
      nlsCode: '2.2.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 6,
      t: 'Bài 2 & Bài 3',
      n: 'Bài 2: Viết bài văn nghị luận phân tích một tác phẩm văn học (thơ song thất lục bát) & Nói và nghe & Đọc: Nỗi sầu oán của người cung nữ & Bài 3 (4 tiết)',
      y: '- Viết bài văn nghị luận phân tích tác phẩm thơ song thất lục bát; thảo luận về tâm trạng tuổi mới lớn.\n- Đọc mở rộng trích đoạn Cung oán ngâm khúc (Nguyễn Gia Thiều); bước vào chủ đề Hồn nước nằm trong tiếng mẹ cha.',
      eq: 'Dàn ý phân tích thơ song thất lục bát, văn bản Cung oán ngâm khúc',
      nlsCode: '3.1.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 7,
      t: 'Bài 3: Hồn nước nằm trong tiếng mẹ cha',
      n: 'Bài 3: Hồn nước nằm trong tiếng mẹ cha - Đọc: Kim – Kiều gặp gỡ (Truyện Kiều – Nguyễn Du) & Thực hành tiếng Việt: Ngôn ngữ đối thoại, độc thoại (4 tiết)',
      y: '- Cảm nhận bức tranh ngày xuân tao ngộ tuyệt đẹp và mối tình đầu trong sáng, say đắm giữa Kim Trọng - Thúy Kiều qua ngòi bút thiên tài của Nguyễn Du.\n- Phân biệt ngôn ngữ đối thoại, độc thoại và độc thoại nội tâm trong tác phẩm truyện thơ Nôm.',
      eq: 'Chân dung Đại thi hào Nguyễn Du, tranh minh họa Truyện Kiều',
      nlsCode: '1.1.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 8,
      t: 'Bài 3: Hồn nước nằm trong tiếng mẹ cha',
      n: 'Bài 3: Hồn nước nằm trong tiếng mẹ cha - Đọc: Lục Vân Tiên đánh cướp, cứu Kiều Nguyệt Nga & Tự tình (bài 2) (Hồ Xuân Hương) (4 tiết)',
      y: '- Khắc sâu hình tượng Lục Vân Tiên trượng nghĩa, vị tha và bản lĩnh người phụ nữ khát khao hạnh phúc, vượt lên nghịch cảnh trong thơ Hồ Xuân Hương.\n- Thực hành tiếng Việt: từ ngữ Hán Việt và nghệ thuật xây dựng ngôn ngữ nhân vật.',
      eq: 'Chân dung Nguyễn Đình Chiểu, Hồ Xuân Hương, tranh minh họa Lục Vân Tiên',
      nlsCode: '2.4.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Ngữ văn 9 (4 tiết)',
      y: '- Đánh giá năng lực đọc hiểu văn bản truyện truyền kì, thơ song thất lục bát, truyện thơ Nôm và năng lực viết bài văn nghị luận phân tích tác phẩm văn học.\n- Đánh giá kiến thức tiếng Việt và tư duy thẩm mỹ theo ma trận chuẩn thi tuyển sinh Lớp 10.',
      eq: 'Đề kiểm tra giữa kỳ 1 chuẩn ma trận Bộ GD&ĐT',
      nlsCode: '4.1.TC2a',
      aiCode: '9.B2.3'
    },
    {
      w: 10,
      t: 'Bài 3 & Bài 4',
      n: 'Bài 3: Viết bài văn nghị luận về một vấn đề cần giải quyết (trong đời sống học sinh) & Nói và nghe & Đọc: Kiều ở lầu Ngưng Bích & Bài 4 (4 tiết)',
      y: '- Viết bài văn nghị luận xã hội bàn về vấn đề bức thiết trong đời sống học sinh (áp lực học tập, nghiện mạng xã hội); đọc Kiều ở lầu Ngưng Bích.\n- Khởi động chủ đề Khám phá vẻ đẹp văn chương: tìm hiểu văn bản nghị luận văn học.',
      eq: 'Đoạn trích Kiều ở lầu Ngưng Bích, phiếu hướng dẫn lập luận nghị luận',
      nlsCode: '3.2.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 11,
      t: 'Bài 4: Khám phá vẻ đẹp văn chương',
      n: 'Bài 4: Khám phá vẻ đẹp văn chương - Đọc: “Người con gái Nam Xương” – một bi kịch của con người (Nguyễn Đăng Na) & Thực hành tiếng Việt (4 tiết)',
      y: '- Thấy được những phát hiện sâu sắc, độc đáo của nhà nghiên cứu về tấn bi kịch tình yêu và thân phận người phụ nữ phong kiến trong thiên truyện của Nguyễn Dữ.\n- Nhận diện và thực hành chuyển đổi cách dẫn trực tiếp và cách dẫn gián tiếp trong bài viết.',
      eq: 'Văn bản nghiên cứu của GS. Nguyễn Đăng Na, phiếu bài tập dẫn trực tiếp/gián tiếp',
      nlsCode: '1.2.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 12,
      t: 'Bài 4: Khám phá vẻ đẹp văn chương',
      n: 'Bài 4: Khám phá vẻ đẹp văn chương - Đọc: Từ “Thằng quỷ nhỏ”... nghĩ về phẩm chất tác phẩm thiếu nhi & Ngày xưa (Vũ Cao) & Thực hành tiếng Việt (4 tiết)',
      y: '- Hiểu các tiêu chí nghệ thuật cốt lõi của tác phẩm viết cho thiếu nhi và cảm nhận vẻ đẹp giản dị, trong sáng của bài thơ Ngày xưa.\n- Thực hành tiếng Việt: lựa chọn từ ngữ và cấu trúc câu phù hợp trong văn nghị luận.',
      eq: 'Bìa sách Thằng quỷ nhỏ (Nguyễn Nhật Ánh), văn bản Ngày xưa',
      nlsCode: '2.1.TC2b',
      aiCode: '9.C4.1'
    },
    {
      w: 13,
      t: 'Bài 4 & Bài 5',
      n: 'Bài 4: Viết bài văn nghị luận phân tích một tác phẩm truyện & Thảo luận: Làm thế nào để học tốt môn Ngữ văn? & Đọc: Hoàng Hạc lâu... & Bài 5 (4 tiết)',
      y: '- Viết bài văn nghị luận phân tích tác phẩm truyện hoàn chỉnh; trao đổi phương pháp đọc hiểu và học giỏi môn Ngữ văn.\n- Đọc Hoàng Hạc lâu tống Mạnh Hạo Nhiên chi Quảng Lăng (Nguyễn Khắc Phi); làm quen chủ đề Đối diện với nỗi đau.',
      eq: 'Phiếu tiêu chí phân tích tác phẩm truyện, tranh minh họa lầu Hoàng Hạc',
      nlsCode: '3.1.TC2a',
      aiCode: '9.D1.1'
    },
    {
      w: 14,
      t: 'Bài 5: Đối diện với nỗi đau',
      n: 'Bài 5: Đối diện với nỗi đau - Đọc: Rô-mê-ô và Giu-li-ét (W. Shakespeare) & Thực hành tiếng Việt: Sự phát triển của từ vựng (4 tiết)',
      y: '- Nhận biết đặc trưng bi kịch cổ điển: xung đột giữa tình yêu say đắm và mối thù hằn dòng họ; ca ngợi tình yêu chân chính bất diệt.\n- Nhận diện các phương thức phát triển từ vựng tiếng Việt (tạo từ ngữ mới, mượn từ nước ngoài, biến đổi nghĩa).',
      eq: 'Chân dung Shakespeare, trích đoạn vở kịch Romeo và Juliet',
      nlsCode: '1.3.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 15,
      t: 'Bài 5: Đối diện với nỗi đau',
      n: 'Bài 5: Đối diện với nỗi đau - Đọc: Lơ Xít (P. Corneille) & Bí ẩn của làn nước (Bảo Ninh) & Viết: Phân tích tác phẩm kịch & Nói và nghe (4 tiết)',
      y: '- Cảm nhận sự giằng xé giữa danh dự dòng tộc và tình yêu trong bi kịch Lơ Xít; nỗi đau và tình người thời hậu chiến trong truyện Bảo Ninh.\n- Viết bài văn nghị luận phân tích tác phẩm kịch; đọc Âm mưu và tình yêu (Schiller) & Ôn tập Học kì I.',
      eq: 'Trích đoạn kịch Lơ Xít, truyện ngắn Bảo Ninh, dàn ý phân tích kịch',
      nlsCode: '3.1.TC2b',
      aiCode: '9.C2.1'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Ngữ văn 9 (4 tiết)',
      y: '- Đánh giá tổng hợp năng lực đọc hiểu văn bản (truyền kì, truyện thơ Nôm, bi kịch, nghị luận) và năng lực viết bài văn nghị luận văn học/xã hội.\n- Đánh giá kiến thức tiếng Việt và rèn luyện kỹ năng làm bài thi vào Lớp 10 THPT.',
      eq: 'Đề kiểm tra cuối kỳ 1 chuẩn ma trận tuyển sinh Lớp 10',
      nlsCode: '4.1.TC2b',
      aiCode: '9.B2.3'
    },
    {
      w: 17,
      t: 'Ôn tập & Đánh giá định kỳ',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức Ngữ văn 9 HK1 (4 tiết)',
      y: '- Nhận xét, chữa bài kiểm tra cuối HK1 chi tiết; phân tích ma trận điểm thi và định hướng phương pháp ôn thi vào lớp 10.\n- Củng cố hệ thống tác phẩm văn học trung đại và kiến thức tiếng Việt HK1.',
      eq: 'Bài làm học sinh, đáp án và bảng thống kê lỗi sai',
      nlsCode: '5.2.TC2a',
      aiCode: '9.A3.1'
    },
    {
      w: 18,
      t: 'Sơ kết & Báo cáo chuyên đề',
      n: 'Sơ kết Học kỳ 1 & Báo cáo chuyên đề Văn học Lớp 9 (4 tiết)',
      y: '- Sơ kết thi đua môn Ngữ văn HK1; báo cáo chuyên đề nghiên cứu văn học (hình tượng người phụ nữ trong văn học trung đại, vẻ đẹp Truyện Kiều).\n- Rèn luyện kĩ năng thuyết trình báo cáo khoa học và tinh thần làm việc nhóm.',
      eq: 'Slide báo cáo chuyên đề của các nhóm học sinh, máy chiếu',
      nlsCode: '2.4.TC2b',
      aiCode: '9.D1.1'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Bài 6: Giải mã những bí mật',
      n: 'Bài 6: Giải mã những bí mật - Đọc: Ba chàng sinh viên (A. Conan Doyle) & Thực hành tiếng Việt: Nghĩa của từ trong ngữ cảnh (4 tiết)',
      y: '- Nhận biết đặc trưng truyện trinh thám: tình huống li kì, nghệ thuật suy luận logic sắc bén của thám tử đại tài Sherlock Holmes.\n- Nhận diện và giải thích nghĩa của từ ngữ trong ngữ cảnh văn bản truyện trinh thám.',
      eq: 'Chân dung Conan Doyle, tranh minh họa thám tử Sherlock Holmes',
      nlsCode: '1.1.TC2a',
      aiCode: '9.A1.1'
    },
    {
      w: 20,
      t: 'Bài 6: Giải mã những bí mật',
      n: 'Bài 6: Giải mã những bí mật - Đọc: Bài hát đồng sáu xu (Agatha Christie) & Phạm Xuân Ẩn – tên người như cuộc đời & Viết truyện sáng tạo (4 tiết)',
      y: '- Thưởng thức nghệ thuật điều tra tâm lý của thám tử Poirot và lòng yêu nước mưu trí của nhà tình báo huyền thoại Phạm Xuân Ẩn.\n- Nắm vững kĩ năng viết một truyện kể sáng tạo (xây dựng cốt truyện bất ngờ, nhân vật, ngôi kể); đọc Ba viên ngọc bích.',
      eq: 'Chân dung Thiếu tướng Phạm Xuân Ẩn, sách Điệp viên hoàn hảo, phiếu sáng tác',
      nlsCode: '3.1.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 21,
      t: 'Bài 7: Hồn thơ muôn điệu',
      n: 'Bài 7: Hồn thơ muôn điệu - Đọc: Tiếng Việt (Lưu Quang Vũ) & Thực hành tiếng Việt: Sự biến đổi của ngôn ngữ (4 tiết)',
      y: '- Thấm thía vẻ đẹp giàu có, trong trẻo, linh hồn bất diệt của tiếng mẹ đẻ qua những vần thơ dạt dào cảm xúc của Lưu Quang Vũ.\n- Nhận diện sự biến đổi và phát triển của ngôn ngữ tiếng Việt theo dòng lịch sử.',
      eq: 'Audio bài hát Tiếng Việt (nhạc Nguyễn Lê Tâm), chân dung Lưu Quang Vũ',
      nlsCode: '1.2.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 22,
      t: 'Bài 7: Hồn thơ muôn điệu',
      n: 'Bài 7: Hồn thơ muôn điệu - Đọc: Mưa xuân (Nguyễn Bính) & Một kiểu phát biểu luận đề độc đáo của Xuân Diệu ở bài thơ “Vội vàng” (4 tiết)',
      y: '- Cảm nhận không khí hội xuân làng quê Bắc Bộ và tâm trạng bổi hổi của cô thôn nữ trong thơ Nguyễn Bính; hiểu cách phân tích luận đề của Xuân Diệu.\n- Thực hành tiếng Việt: nghệ thuật dùng từ ngữ tượng hình, nhạc điệu trong thơ tám chữ.',
      eq: 'Tranh mùa xuân làng quê Bắc Bộ, văn bản phân tích bài thơ Vội vàng',
      nlsCode: '2.1.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 23,
      t: 'Bài 7 & Bài 8',
      n: 'Bài 7: Tập làm thơ tám chữ; Viết đoạn văn ghi lại cảm xúc về bài thơ tám chữ & Nói và nghe & Đọc: Miền quê & Bài 8: Tiếng nói của lương tri (4 tiết)',
      y: '- Nắm vững luật thơ tám chữ và thực hành sáng tác thơ tám chữ; viết đoạn văn biểu cảm; đọc Miền quê (Nguyễn Khoa Điềm).\n- Khởi động chủ đề Tiếng nói của lương tri: tìm hiểu các văn bản nghị luận thời đại.',
      eq: 'Phiếu sáng tác thơ tám chữ, tiêu chí đánh giá đoạn văn biểu cảm',
      nlsCode: '3.1.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 24,
      t: 'Bài 8: Tiếng nói của lương tri',
      n: 'Bài 8: Tiếng nói của lương tri - Đọc: Đấu tranh cho một thế giới hoà bình (G.G. Márquez) & Biến đổi khí hậu... (A. Guterres) (4 tiết)',
      y: '- Thấu hiểu hiểm họa hạt nhân đe dọa sự sống loài người qua lời cảnh báo đanh thép của Mác-két và lời kêu gọi hành động vì khí hậu của Tổng Thư ký LHQ.\n- Thực hành tiếng Việt: nhận diện và sửa lỗi logic trong lập luận nghị luận.',
      eq: 'Tư liệu về thảm họa vũ khí hạt nhân, phát biểu của Tổng Thư ký LHQ',
      nlsCode: '1.1.TC2b',
      aiCode: '9.A1.1'
    },
    {
      w: 25,
      t: 'Bài 8: Tiếng nói của lương tri',
      n: 'Bài 8: Tiếng nói của lương tri - Đọc: Bài ca chúc Tết thanh niên (Phan Bội Châu) & Viết bài văn nghị luận về một vấn đề xã hội cần giải quyết (4 tiết)',
      y: '- Cảm phục nhiệt huyết cứu nước nồng cháy và lời kêu gọi thanh niên dấn thân cống hiến của chí sĩ Phan Bội Châu.\n- Nắm vững phương pháp và viết bài văn nghị luận xã hội đề xuất giải pháp cho một vấn đề thời sự (ô nhiễm, bạo lực mạng); đọc Chuẩn bị hành trang.',
      eq: 'Chân dung Cụ Phan Bội Châu, phiếu tiêu chí bài văn nghị luận xã hội',
      nlsCode: '3.2.TC2a',
      aiCode: '9.C2.1'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Ngữ văn 9 (4 tiết)',
      y: '- Đánh giá năng lực đọc hiểu văn bản (truyện trinh thám, thơ tám chữ, văn bản nghị luận xã hội) và năng lực viết bài văn nghị luận xã hội/văn học.\n- Đánh giá kiến thức tiếng Việt và rèn luyện kỹ năng làm bài thi thử tuyển sinh Lớp 10.',
      eq: 'Đề kiểm tra giữa kỳ 2 chuẩn ma trận tuyển sinh Lớp 10 THPT',
      nlsCode: '4.1.TC2a',
      aiCode: '9.B2.3'
    },
    {
      w: 27,
      t: 'Bài 9: Đi và suy ngẫm',
      n: 'Bài 9: Đi và suy ngẫm - Đọc: Yên Tử, núi thiêng (Thi Sảnh) & Văn hoá hoa – cây cảnh (Trần Quốc Vượng) & Thực hành tiếng Việt (4 tiết)',
      y: '- Cảm nhận vẻ đẹp linh thiêng, cổ kính của danh thắng Yên Tử và nét đẹp thanh tao trong nghệ thuật chơi hoa cây cảnh của người Việt.\n- Thực hành tiếng Việt: nhận diện và sử dụng phương tiện phi ngôn ngữ (hình ảnh, bản đồ du lịch) trong văn bản thông tin.',
      eq: 'Video/Hình ảnh non thiêng Yên Tử, chùa Đồng, chậu cây thế nghệ thuật',
      nlsCode: '1.3.TC2a',
      aiCode: '9.A2.2'
    },
    {
      w: 28,
      t: 'Bài 9: Đi và suy ngẫm',
      n: 'Bài 9: Đi và suy ngẫm - Đọc: Tình sông núi (Trần Mai Ninh) & Viết: Bài thuyết minh về danh lam thắng cảnh hay di tích lịch sử & Thuyết minh (4 tiết)',
      y: '- Cảm nhận tình yêu non sông tha thiết, sôi nổi trong bài thơ Tình sông núi; đọc Khu trung tâm Hoàng thành Thăng Long.\n- Nắm vững kĩ năng viết bài văn thuyết minh kết hợp miêu tả và biểu cảm về một danh lam thắng cảnh hay di tích lịch sử.',
      eq: 'Hình ảnh Hoàng thành Thăng Long, phiếu dàn ý bài thuyết minh di tích',
      nlsCode: '3.1.TC2a',
      aiCode: '9.C4.1'
    },
    {
      w: 29,
      t: 'Bài 10: Văn học – Lịch sử tâm hồn',
      n: 'Bài 10: Văn học – Lịch sử tâm hồn - Thách thức đầu tiên; Đọc để trưởng thành & Viết: Quảng bá giá trị của sách (4 tiết)',
      y: '- Nhận thức sâu sắc vai trò của văn học trong việc bồi đắp tâm hồn và nhân cách; tham gia dự án đọc sách để trưởng thành.\n- Thực hiện bài viết hoặc sản phẩm truyền thông số quảng bá giá trị của sách đến cộng đồng học đường.',
      eq: 'Danh mục tác phẩm văn học kinh điển, cẩm nang đọc sách tuổi trưởng thành',
      nlsCode: '1.2.TC2b',
      aiCode: '9.A3.1'
    },
    {
      w: 30,
      t: 'Bài 10: Văn học – Lịch sử tâm hồn',
      n: 'Bài 10: Văn học – Lịch sử tâm hồn - Về đích: Ngày hội với sách; Phát triển văn hoá đọc & Ôn tập Học kì II (4 tiết)',
      y: '- Tổ chức Ngày hội với sách: trình bày sản phẩm sáng tạo và thuyết trình kế hoạch phát triển văn hóa đọc cá nhân.\n- Ôn tập hệ thống hóa toàn bộ các mảng kiến thức văn học, tiếng Việt, tập làm văn chuẩn bị kiểm tra cuối năm và thi vào Lớp 10.',
      eq: 'Sản phẩm triển lãm sách, slide tổng ôn tập kiến thức Ngữ văn 9',
      nlsCode: '3.2.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Ngữ văn 9 (4 tiết)',
      y: '- Đánh giá tổng kết toàn diện kết quả học tập môn Ngữ văn Lớp 9 cả năm và chuẩn bị cho kì thi tuyển sinh vào Lớp 10 THPT.\n- Đánh giá năng lực đọc hiểu đa dạng thể loại và năng lực tạo lập văn bản hoàn chỉnh theo chuẩn CT GDPT 2018.',
      eq: 'Đề kiểm tra cuối kỳ 2 chuẩn ma trận tuyển sinh Lớp 10 của Sở GD&ĐT',
      nlsCode: '4.1.TC2b',
      aiCode: '9.B2.3'
    },
    {
      w: 32,
      t: 'Ôn tập & Đánh giá định kỳ',
      n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức Ngữ văn 9 HK2 (4 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2; phân tích chi tiết cấu trúc đề thi vào Lớp 10, các lỗi hay mất điểm và kĩ năng phân bổ thời gian làm bài.\n- Củng cố toàn diện các chủ đề văn học hiện đại và kiến thức tiếng Việt 9.',
      eq: 'Bài làm học sinh, đáp án và bảng phân tích thang điểm chi tiết',
      nlsCode: '5.2.TC2b',
      aiCode: '9.A3.1'
    },
    {
      w: 33,
      t: 'Dự án Ngữ văn 9',
      n: 'Dự án Ngữ văn 9: "Tuyển tập Tản văn Kỷ yếu Khóa học THCS & Sân khấu Diễn xướng Tác phẩm Lớp 9" (4 tiết)',
      y: '- Thực hiện dự án kỷ yếu số lưu giữ ký ức 4 năm học THCS hoặc sân khấu hóa các trích đoạn văn học kinh điển Lớp 9.\n- Rèn luyện kỹ năng làm việc nhóm, sáng tạo nghệ thuật số và nuôi dưỡng tình cảm thầy trò, bè bạn.',
      eq: 'Kỷ yếu điện tử, video tư liệu kỷ niệm 4 năm học THCS, trang phục sân khấu',
      nlsCode: '2.4.TC2b',
      aiCode: '9.D1.1'
    },
    {
      w: 34,
      t: 'Luyện thi vào 10',
      n: 'Luyện giải các đề thi tuyển sinh vào Lớp 10 THPT môn Ngữ văn chuẩn ma trận Bộ GD&ĐT (4 tiết)',
      y: '- Rèn luyện kĩ năng giải đề thi vào Lớp 10 THPT: kĩ năng đọc hiểu văn bản ngoài SGK, viết đoạn văn nghị luận xã hội và viết bài văn nghị luận văn học.\n- Rèn luyện tâm lý phòng thi vững vàng và sự tự tin cao độ.',
      eq: 'Tuyển tập các đề thi tuyển sinh vào Lớp 10 chính thức của các tỉnh/thành',
      nlsCode: '1.3.TC2b',
      aiCode: '9.C2.1'
    },
    {
      w: 35,
      t: 'Đánh giá xếp loại',
      n: 'Tổng kết năm học & Đánh giá xếp loại môn Ngữ văn 9 cả năm (4 tiết)',
      y: '- Tổng kết, đánh giá quá trình học tập và xếp loại môn Ngữ văn Lớp 9 cả năm học theo Thông tư số 22/2021/TT-BGDĐT.\n- Hoàn tất hồ sơ học bạ, công nhận tốt nghiệp THCS và chúc các em học sinh thi đỗ vào trường THPT nguyện vọng 1.',
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
      location: 'Phòng học / Thư viện trường',
      nlsCode: item.nlsCode,
      aiCode: item.aiCode,
      notes: item.w === 9 ? 'Kiểm tra giữa kỳ' : item.w === 16 ? 'Kiểm tra cuối kỳ' : item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Văn học' : ''
    });
  });

  return list;
}
