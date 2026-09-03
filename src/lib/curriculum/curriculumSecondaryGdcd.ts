import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * PHÂN PHỐI CHƯƠNG TRÌNH CHI TIẾT MÔN GIÁO DỤC CÔNG DÂN (GDCD) THCS (LỚP 6, 7, 8, 9)
 * 100% CHUẨN THEO BỘ SÁCH GIÁO KHOA "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"
 * DỰA TRÊN FILE CHUẨN: gdcd-thcs.md
 *
 * Quy mô: 35 tiết/năm (1 tiết/tuần x 35 tuần).
 * Định kỳ kiểm tra giữ nguyên theo quy định Thông tư 22/2021/TT-BGDĐT:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (1 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (1 tiết)
 * - Tuần 17: Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 (1 tiết)
 * - Tuần 18: Sơ kết Học kỳ 1 môn GDCD (1 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (1 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (1 tiết)
 * - Tuần 32: Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức HK2 (1 tiết)
 * - Tuần 33: Dự án GDCD / Hoạt động trải nghiệm GDCD (1 tiết)
 * - Tuần 34: Ôn tập tổng hợp cuối năm môn GDCD (1 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại cả năm môn GDCD (1 tiết)
 *
 * Tích hợp đầy đủ:
 * - Yêu cầu cần đạt (YCCĐ) chuẩn Chương trình GDPT 2018 môn GDCD (Thông tư 32/2018/TT-BGDĐT)
 * - Khung Năng lực số (NLS) theo Công văn 3456/BGDĐT-GDPT (Lớp 6, 7: Mức TC1; Lớp 8, 9: Mức TC2)
 * - Khung Năng lực AI theo Quyết định 2422/QĐ-BGDĐT (Phân theo từng khối lớp và chủ đề đạo đức, kĩ năng sống, kinh tế, pháp luật)
 */

export function getGdcdSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. GIÁO DỤC CÔNG DÂN LỚP 6 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // Gồm 12 bài học: Đạo đức (Bài 1-5), Kĩ năng sống (Bài 6-7), Kinh tế (Bài 8), Pháp luật (Bài 9-12)
  // =========================================================================
  if (g === 6) {
    const grade6Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống gia đình, dòng họ (Tiết 1)',
        y: '- Nêu được một số truyền thống tốt đẹp của gia đình, dòng họ (hiếu học, cần cù lao động, yêu nước, nhân ái...).\n- Giải thích được ý nghĩa của truyền thống gia đình, dòng họ đối với bản thân.',
        dc: '• [Mã NLS: 1.1.TC1c] Sử dụng công cụ tìm kiếm trực tuyến tra cứu tư liệu, hình ảnh về các dòng họ vẻ vang trong lịch sử Việt Nam.\n• [Mã AI: 6.A1.1] Nhận biết sự khác biệt giữa cảm xúc tự hào, truyền thống gia đình của con người với hệ thống dữ liệu số của AI.'
      },
      {
        w: 2,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống gia đình, dòng họ (Tiết 2)',
        y: '- Thực hiện được những việc làm phù hợp để giữ gìn, phát huy truyền thống gia đình, dòng họ.\n- Phê phán những biểu hiện tự ti, phủ nhận hoặc làm tổn hại đến danh dự, truyền thống gia đình.',
        dc: '• [Mã NLS: 2.5.TC1b] Thiết kế sơ đồ cây gia phả hoặc bài thuyết trình số giới thiệu truyền thống gia đình mình.\n• [Mã AI: 6.C1.1] Khám phá cách các công cụ AI hỗ trợ phục chế ảnh cũ gia đình và nhận diện gương mặt qua nhiều thế hệ.'
      },
      {
        w: 3,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Yêu thương con người (Tiết 1)',
        y: '- Nêu được khái niệm và các biểu hiện của tình yêu thương con người trong gia đình, nhà trường và xã hội.\n- Hiểu được giá trị, ý nghĩa nhân văn sâu sắc của tình yêu thương con người.',
        dc: '• [Mã NLS: 1.1.TC1b] Thu thập các bài viết, video phóng sự về những tấm gương nhân ái, thiện nguyện vì cộng đồng trên nguồn báo chí điện tử uy tín.\n• [Mã AI: 6.A1.3] Tìm hiểu cách AI được ứng dụng hỗ trợ cảnh báo sớm thiên tai, giúp đỡ người có hoàn cảnh khó khăn.'
      },
      {
        w: 4,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Yêu thương con người (Tiết 2)',
        y: '- Thể hiện được tình cảm yêu thương, quan tâm, sẵn sàng giúp đỡ bạn bè, người thân và người khó khăn bằng việc làm cụ thể.\n- Lên án, phê phán các hành vi thờ ơ, vô cảm, bạo lực hoặc xúc phạm người khác.',
        dc: '• [Mã NLS: 2.5.TC1b] Phối hợp nhóm trên mạng xã hội trường học chia sẻ thông điệp lan tỏa tình yêu thương và văn hóa nhân ái.\n• [Mã AI: 6.D1.1] Thảo luận về việc xây dựng không gian mạng nhân văn, ứng xử có văn hóa khi tương tác với các ứng dụng chatbot AI.'
      },
      {
        w: 5,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Siêng năng, kiên trì (Tiết 1)',
        y: '- Hiểu thế nào là siêng năng, kiên trì và nêu được các biểu hiện của siêng năng, kiên trì trong học tập, lao động.\n- Đánh giá được ý nghĩa của đức tính siêng năng, kiên trì đối với thành công của mỗi người.',
        dc: '• [Mã NLS: 1.3.TC1a] Xây dựng và lưu trữ bảng kế hoạch học tập, rèn luyện tính kiên trì cá nhân trên phần mềm ghi chú số.\n• [Mã AI: 6.A1.1] Nhận diện nguyên lý AI học máy (Machine Learning) cần hàng triệu dữ liệu huấn luyện kiên trì để đạt độ chính xác.'
      },
      {
        w: 6,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Siêng năng, kiên trì (Tiết 2)',
        y: '- Luôn nỗ lực, chăm chỉ, không ngại khó khăn trong học tập và công việc hàng ngày.\n- Phê phán thói lười biếng, ỷ lại, nản lòng khi gặp thử thách; biết khích lệ bạn bè cùng cố gắng.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng ứng dụng Pomodoro hoặc ứng dụng quản lý thời gian trên điện thoại để duy trì sự tập trung kiên trì.\n• [Mã AI: 6.C2.2] Trải nghiệm ứng dụng gia sư AI nhắc nhở thói quen tự học và theo dõi tiến độ hoàn thành bài tập.'
      },
      {
        w: 7,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Tôn trọng sự thật (Tiết 1)',
        y: '- Hiểu được thế nào là tôn trọng sự thật và các biểu hiện tôn trọng sự thật trong cuộc sống.\n- Phân tích được ý nghĩa của việc sống trung thực, dũng cảm tôn trọng và bảo vệ sự thật.',
        dc: '• [Mã NLS: 1.1.TC1b] Phân biệt thông tin chính xác và tin giả (fake news), tin sai sự thật trên không gian mạng xã hội.\n• [Mã AI: 6.A3.3] Khám phá công nghệ Deepfake sử dụng AI để giả mạo hình ảnh, giọng nói và nhận thức nguy cơ làm sai lệch sự thật.'
      },
      {
        w: 8,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Tôn trọng sự thật (Tiết 2)',
        y: '- Luôn nói thật, bảo vệ sự thật và trung thực trong học tập, thi cử và giao tiếp hàng ngày.\n- Lên án, dũng cảm đấu tranh với các hành vi dối trá, bao che cho cái sai hoặc xuyên tạc sự thật.',
        dc: '• [Mã NLS: 4.1.TC1c] Thực hiện nghiêm túc tính trung thực số: không gian lận bài tập, không sao chép tác phẩm của người khác khi nộp bài.\n• [Mã AI: 6.A1.1] Thảo luận về việc không dùng AI để làm bài hộ hoặc tạo ra các thông tin gian dối trong học tập.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục công dân Lớp 6 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng và thái độ từ Bài 1 đến Bài 4 (Mạch Đạo đức).\n- Rèn luyện kỹ năng giải quyết tình huống đạo đức, ý thức trung thực và trách nhiệm làm bài thi.',
        dc: '• [Mã NLS: 4.2.TC1b] Tuân thủ quy chế phòng thi, bảo mật thông tin và trung thực số khi làm bài kiểm tra.\n• [Mã AI: 6.A3.3] Tìm hiểu quy trình chấm thi tự động và bảo mật kết quả học tập bằng hệ thống quản lý số.'
      },
      {
        w: 10,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Tự lập (Tiết 1)',
        y: '- Hiểu thế nào là tự lập và nêu được các biểu hiện của tính tự lập trong học tập, sinh hoạt hàng ngày.\n- Nhận thức được tầm quan trọng của tính tự lập giúp bản thân trưởng thành, tự tin và được tôn trọng.',
        dc: '• [Mã NLS: 1.3.TC1b] Tự lập tìm kiếm và quản lý kho tài liệu học tập điện tử cá nhân trên Google Drive.\n• [Mã AI: 6.D1.1] Sử dụng AI trợ lý ảo để thiết lập thời gian biểu tự lập trong sinh hoạt và học tập tại nhà.'
      },
      {
        w: 11,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Tự lập (Tiết 2)',
        y: '- Biết tự hoàn thành các công việc của bản thân, không dựa dẫm, ỷ lại vào cha mẹ, thầy cô hay bạn bè.\n- Phê phán lối sống thụ động, lười biếng và thói ỷ lại của một bộ phận giới trẻ hiện nay.',
        dc: '• [Mã NLS: 2.1.TC1b] Chia sẻ nhật ký hành trình tự lập của bản thân qua bài viết hoặc blog học tập trực tuyến.\n• [Mã AI: 6.A1.1] Nhận thức rằng AI là công cụ hỗ trợ gợi ý, con người phải tự lập tư duy và đưa ra quyết định cuối cùng.'
      },
      {
        w: 12,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Tự nhận thức bản thân (Tiết 1)',
        y: '- Hiểu được thế nào là tự nhận thức bản thân; biết cách xác định điểm mạnh, điểm yếu, sở thích và giá trị của bản thân.\n- Nhận thức được ý nghĩa quan trọng của việc tự nhận thức bản thân để hoàn thiện và phát triển.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng bảng trắc nghiệm tính cách hoặc phần mềm trực tuyến để tự đánh giá năng lực cá nhân.\n• [Mã AI: 6.C1.1] Tìm hiểu cách AI phân tích hành vi người dùng trên mạng xã hội để cá nhân hóa nội dung hiển thị.'
      },
      {
        w: 13,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Tự nhận thức bản thân (Tiết 2)',
        y: '- Rèn luyện các phương pháp tự nhận thức bản thân (lắng nghe phản hồi, tự soi xét, trải nghiệm thử thách).\n- Lập được kế hoạch cụ thể phát huy ưu điểm, sửa chữa và khắc phục những hạn chế của bản thân.',
        dc: '• [Mã NLS: 2.1.TC1b] Thiết kế sơ đồ tư duy SWOT (Điểm mạnh - Điểm yếu - Cơ hội - Thách thức) của bản thân bằng Canva/Mindmap.\n• [Mã AI: 6.D1.1] Trải nghiệm công cụ AI gợi ý các lộ trình rèn luyện kĩ năng mềm phù hợp với sở thích cá nhân.'
      },
      {
        w: 14,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Tự nhận thức bản thân (Tiết 3)',
        y: '- Tự tin thể hiện bản sắc cá nhân trong tập thể lớp và các hoạt động Đội TNTP Hồ Chí Minh.\n- Biết tôn trọng sự khác biệt của người khác, không tự ti cũng như không kiêu căng, tự mãn.',
        dc: '• [Mã NLS: 2.2.TC1c] Tham gia diễn đàn thảo luận nhóm về chủ đề "Khám phá bản thân và tôn trọng sự khác biệt".\n• [Mã AI: 6.A1.3] Nhận diện AI không có cảm xúc tự ý thức như con người, tránh nhầm lẫn năng lực tính toán của máy móc với nhân cách.'
      },
      {
        w: 15,
        t: 'Ôn tập học kỳ 1',
        n: 'Ôn tập tổng hợp kiến thức môn Giáo dục công dân Lớp 6 Học kỳ 1 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ các chuẩn mực đạo đức và kĩ năng sống đã học trong Học kỳ 1 (Bài 1 đến Bài 6).\n- Rèn luyện kỹ năng phân tích và giải quyết các tình huống ứng xử thực tế; chuẩn bị kiểm tra cuối HK1.',
        dc: '• [Mã NLS: 1.3.TC1a] Khai thác đề cương ôn tập và kho câu hỏi tương tác trắc nghiệm trên nền tảng số trường học.\n• [Mã AI: 6.A1.3] Sử dụng AI chatbot hỏi - đáp kiến thức trọng tâm học kỳ 1 để tự kiểm tra năng lực ghi nhớ.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục công dân Lớp 6 (1 tiết)',
        y: '- Đánh giá tổng kết mức độ nắm vững kiến thức và kỹ năng thực hành đạo đức, kĩ năng sống của HK1.\n- Đánh giá khả năng vận dụng bài học vào xử lý tình huống thực tế; rèn luyện tính trung thực và kỷ luật.',
        dc: '• [Mã NLS: 4.3.TC1a] Tuân thủ nghiêm ngặt quy chế kiểm tra, giữ gìn đạo đức học đường trong không gian số.\n• [Mã AI: 6.A3.3] Tìm hiểu cách hệ thống AI hỗ trợ phân tích độ khó câu hỏi và thống kê phổ điểm bài thi.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức GDCD 6 HK1 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1; chỉ ra các lỗi sai phổ biến và giải đáp thắc mắc cho học sinh.\n- Củng cố phương pháp học tập và định hướng rèn luyện hành vi cho Học kỳ 2.',
        dc: '• [Mã NLS: 1.2.TC1a] Lưu trữ nhận xét sửa bài và tài liệu tổng kết học kỳ trên sổ liên lạc điện tử.\n• [Mã AI: 6.D1.1] Khám phá công cụ AI gợi ý kế hoạch tự khắc phục các điểm kiến thức còn yếu trong kỳ kiểm tra.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Giáo dục công dân Lớp 6 (1 tiết)',
        y: '- Sơ kết, đánh giá ý thức học tập, việc tu dưỡng đạo đức và thực hiện nền nếp của học sinh trong HK1.\n- Tuyên dương các cá nhân tiêu biểu và phát động thi đua học tập tốt trong Học kỳ 2.',
        dc: '• [Mã NLS: 2.4.TC1a] Trình chiếu video clip tóm tắt các hoạt động đạo đức, phong trào Đội tiêu biểu của lớp trong HK1.\n• [Mã AI: 6.A1.1] Thảo luận về việc xây dựng môi trường học đường số văn minh, an toàn trong học kỳ tiếp theo.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Ứng phó với tình huống nguy hiểm (Tiết 1)',
        y: '- Nhận biết được các tình huống nguy hiểm thường gặp từ con người (bắt cóc, bạo lực, lừa đảo, xâm hại).\n- Nắm vững các bước và kỹ năng xử lý an toàn khi đối mặt với tình huống nguy hiểm do con người gây ra.',
        dc: '• [Mã NLS: 1.1.TC1d] Tra cứu số điện thoại khẩn cấp (111, 112, 113, 114, 115) và cài đặt ứng dụng cảnh báo an toàn trên điện thoại.\n• [Mã AI: 6.A1.3] Nhận diện các hình thức lừa đảo mạo danh tinh vi trên không gian mạng sử dụng công nghệ AI giả giọng nói.'
      },
      {
        w: 20,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Ứng phó với tình huống nguy hiểm (Tiết 2)',
        y: '- Nhận biết được các tình huống nguy hiểm từ thiên nhiên (sấm sét, lũ quét, sạt lở đất, đuối nước, hỏa hoạn).\n- Thực hành kỹ năng phòng tránh, thoát hiểm an toàn và tìm kiếm sự trợ giúp khẩn cấp khi gặp thiên tai.',
        dc: '• [Mã NLS: 1.2.TC1b] Xem video mô phỏng kỹ năng thoát hiểm khi hỏa hoạn và bão lũ trên kênh truyền thông chính thống của Cảnh sát PCCC.\n• [Mã AI: 6.C1.1] Tìm hiểu ứng dụng AI trong dự báo sớm thời tiết cực đoan, động đất và cảnh báo người dân sơ tán kịp thời.'
      },
      {
        w: 21,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Ứng phó với tình huống nguy hiểm (Tiết 3)',
        y: '- Thực hành diễn tập tình huống giả định: thoát hiểm khi có cháy nổ hoặc xử lý khi bị kẻ xấu theo dõi, tiếp cận.\n- Có ý thức cảnh giác cao, không hoảng loạn và luôn biết tự bảo vệ bản thân và hỗ trợ người khác.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập tờ rơi số hoặc infographic hướng dẫn kỹ năng tự vệ cho học sinh THCS.\n• [Mã AI: 6.C2.2] Khám phá hệ thống camera thông minh tích hợp AI nhận diện hành vi bất thường và tự động báo động khẩn cấp.'
      },
      {
        w: 22,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Tiết kiệm (Tiết 1)',
        y: '- Hiểu thế nào là tiết kiệm và nêu được các biểu hiện của tiết kiệm (thời gian, tiền bạc, điện nước, của cải).\n- Giải thích được ý nghĩa to lớn của lối sống tiết kiệm đối với bản thân, gia đình và toàn xã hội.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng bảng tính Excel/Google Sheets lập bảng theo dõi chi tiêu và tiết kiệm tiền tiêu vặt hàng tuần.\n• [Mã AI: 6.D1.1] Tìm hiểu các ứng dụng ngân hàng số tích hợp AI giúp phân tích thói quen tiêu dùng và gợi ý quỹ tiết kiệm tích lũy.'
      },
      {
        w: 23,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Tiết kiệm (Tiết 2)',
        y: '- Thực hiện được lối sống tiết kiệm trong sinh hoạt hàng ngày (tắt điện khi ra khỏi phòng, không lãng phí thức ăn, giữ gìn sách vở).\n- Phê phán lối sống lãng phí, xa hoa, đua đòi; phân biệt rõ giữa tiết kiệm và bủn xỉn, keo kiệt.',
        dc: '• [Mã NLS: 2.5.TC1b] Thiết kế poster số tuyên truyền "Hưởng ứng Giờ Trái Đất - Tiết kiệm năng lượng vì tương lai".\n• [Mã AI: 6.A1.1] Khám phá cách các tòa nhà thông minh ứng dụng AI tự động điều chỉnh ánh sáng, điều hòa để tiết kiệm điện năng tối ưu.'
      },
      {
        w: 24,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam (Tiết 1)',
        y: '- Nêu được khái niệm công dân và căn cứ xác định công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam (theo Luật Quốc tịch).\n- Hiểu được mối quan hệ gắn bó thiêng liêng giữa công dân và Nhà nước Việt Nam.',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu Luật Quốc tịch Việt Nam và Cổng dịch vụ công quốc gia về đăng ký khai sinh số.\n• [Mã AI: 6.C1.1] Tìm hiểu ứng dụng thẻ Căn cước công dân gắn chip và hệ thống định danh điện tử VNeID ứng dụng AI xác thực khuôn mặt.'
      },
      {
        w: 25,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Công dân nước Cộng hoà xã hội chủ nghĩa Việt Nam (Tiết 2)',
        y: '- Tự hào là công dân nước CHXHCN Việt Nam; xác định được trách nhiệm học tập, rèn luyện để xây dựng đất nước.\n- Phê phán các hành vi phân biệt đối xử hoặc vi phạm các quy định về quyền công dân.',
        dc: '• [Mã NLS: 2.5.TC1b] Viết bài cảm nghĩ "Tự hào mang quốc tịch Việt Nam" và chia sẻ trên bảng tương tác Padlet của lớp.\n• [Mã AI: 6.D1.1] Thảo luận về quyền công dân trên không gian số và nghĩa vụ tuân thủ pháp luật khi sử dụng mạng xã hội.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục công dân Lớp 6 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng từ Bài 7 đến Bài 9 (Kĩ năng sống, Kinh tế và Pháp luật sơ khởi).\n- Rèn luyện kỹ năng phân tích tình huống pháp lý và kĩ năng sống; đánh giá sự tiến bộ của học sinh.',
        dc: '• [Mã NLS: 4.1.TC1b] Nghiêm túc chấp hành nội quy thi cử, bảo đảm tính trung thực tuyệt đối trong làm bài kiểm tra.\n• [Mã AI: 6.A3.3] Tìm hiểu cách AI hỗ trợ giáo viên thống kê kết quả học tập giữa kỳ và lập biểu đồ tiến bộ học tập.'
      },
      {
        w: 27,
        t: 'Giáo dục pháp luật',
        n: 'Bài 10: Quyền và nghĩa vụ cơ bản của công dân (Tiết 1)',
        y: '- Nêu được các quyền và nghĩa vụ cơ bản của công dân Việt Nam theo Hiến pháp 2013 (chính trị, dân sự, kinh tế, văn hóa - xã hội).\n- Hiểu rằng quyền công dân luôn đi liền với nghĩa vụ công dân; không có quyền lợi nào tách rời nghĩa vụ.',
        dc: '• [Mã NLS: 1.1.TC1b] Tra cứu các điều khoản quy định về Quyền và Nghĩa vụ cơ bản của công dân trong Hiến pháp 2013 trực tuyến.\n• [Mã AI: 6.A1.1] Phân tích cách trợ lý AI pháp luật hỗ trợ người dân tra cứu nhanh quyền lợi và nghĩa vụ công dân theo luật định.'
      },
      {
        w: 28,
        t: 'Giáo dục pháp luật',
        n: 'Bài 10: Quyền và nghĩa vụ cơ bản của công dân (Tiết 2)',
        y: '- Thực hiện đúng các quyền và nghĩa vụ cơ bản của người học sinh trong nhà trường và xã hội.\n- Tôn trọng quyền của người khác; lên án, phản đối các hành vi vi phạm pháp luật xâm phạm quyền công dân.',
        dc: '• [Mã NLS: 2.1.TC1b] Thiết kế sơ đồ thông tin Infographic tóm tắt 4 nhóm quyền và nghĩa vụ cơ bản của công dân.\n• [Mã AI: 6.A1.3] Thảo luận về quyền bảo vệ hình ảnh, quyền riêng tư của cá nhân khi đăng tải ảnh lên mạng xã hội có sử dụng bộ lọc AI.'
      },
      {
        w: 29,
        t: 'Giáo dục pháp luật',
        n: 'Bài 11: Quyền cơ bản của trẻ em (1 tiết)',
        y: '- Nêu được 4 nhóm quyền cơ bản của trẻ em theo Công ước Liên Hợp Quốc và Luật Trẻ em 2016 (Sống còn, Bảo vệ, Phát triển, Tham gia).\n- Nhận thức sâu sắc về giá trị và tầm quan trọng của việc tôn trọng, bảo vệ quyền trẻ em.',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm hiểu về Tổng đài Quốc gia Bảo vệ Trẻ em 111 qua trang web chính thức và ứng dụng di động bảo vệ trẻ em.\n• [Mã AI: 6.C1.1] Khám phá các công cụ AI tự động phát hiện và chặn nội dung bạo lực, độc hại nhắm vào đối tượng trẻ em trên Youtube/Tiktok.'
      },
      {
        w: 30,
        t: 'Giáo dục pháp luật',
        n: 'Bài 12: Thực hiện quyền trẻ em (1 tiết)',
        y: '- Trình bày được trách nhiệm của gia đình, nhà trường, xã hội và bản thân học sinh trong việc thực hiện quyền trẻ em.\n- Thực hiện tốt bổn phận của trẻ em đối với gia đình, nhà trường và quê hương đất nước.',
        dc: '• [Mã NLS: 2.1.TC1b] Tham gia chiến dịch truyền thông trực tuyến "Lắng nghe trẻ em bằng trái tim - Bảo vệ quyền trẻ em".\n• [Mã AI: 6.D1.1] Thảo luận về quyền được bảo vệ an toàn của trẻ em trên không gian số trước các rủi ro từ công nghệ AI.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục công dân Lớp 6 (1 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn GDCD Lớp 6 trong cả năm học.\n- Đánh giá năng lực giải quyết tình huống pháp lý, chuẩn mực đạo đức và kỹ năng sống toàn diện.',
        dc: '• [Mã NLS: 4.1.TC1c] Tuân thủ quy chế thi cuối năm nghiêm túc, thể hiện phẩm chất trung thực và trách nhiệm công dân.\n• [Mã AI: 6.A3.3] Tìm hiểu cách AI tổng hợp dữ liệu đánh giá phẩm chất, năng lực học sinh theo chuẩn Thông tư 22.'
      },
      {
        w: 32,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức HK2 (1 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2, giải đáp các thắc mắc và củng cố kiến thức trọng tâm GDCD 6.\n- Nhận xét quá trình học tập và rèn luyện hành vi của học sinh trong toàn bộ học kỳ 2.',
        dc: '• [Mã NLS: 1.2.TC1a] Lưu trữ kết quả và xem xét lại quá trình rèn luyện bản thân qua hồ sơ học tập số.\n• [Mã AI: 6.D1.1] Trải nghiệm công cụ AI gợi ý các đầu sách hay về phát triển nhân cách và kỹ năng sống phù hợp lứa tuổi.'
      },
      {
        w: 33,
        t: 'Dự án GDCD',
        n: 'Dự án GDCD: "Tuyên truyền Quyền và Bổn phận của trẻ em trong trường học & gia đình" (1 tiết)',
        y: '- Vận dụng kiến thức Bài 11 và 12 xây dựng sản phẩm truyền thông (tờ rơi, video kịch ngắn, vẽ tranh số).\n- Phát triển kỹ năng làm việc nhóm, kỹ năng thuyết trình và lan tỏa ý thức chấp hành Luật Trẻ em.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng phần mềm làm video CapCut hoặc thiết kế đồ họa Canva hoàn thiện sản phẩm dự án.\n• [Mã AI: 6.C2.2] Ứng dụng AI tạo giọng đọc thuyết minh tự động (Text-to-Speech) cho video clip dự án tuyên truyền.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài 29: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDCD 6 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ 12 bài học của chương trình GDCD Lớp 6 theo 4 mạch kiến thức chính.\n- Khắc sâu các bài học đạo đức, nâng cao ý thức chấp hành pháp luật và kỹ năng sống trong dịp hè.',
        dc: '• [Mã NLS: 2.4.TC1a] Hệ thống hóa toàn bộ kiến thức GDCD 6 bằng sơ đồ tư duy số tổng thể.\n• [Mã AI: 6.A1.3] Khám phá cách các mô hình AI tạo sinh tóm tắt nội dung sách giáo khoa thành các ý chính cô đọng.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn GDCD Lớp 6 cả năm (1 tiết)',
        y: '- Tổng kết đánh giá kết quả rèn luyện phẩm chất, năng lực môn GDCD Lớp 6 theo Thông tư số 22/2021/TT-BGDĐT.\n- Biểu dương các học sinh có tiến bộ vượt bậc; dặn dò kế hoạch tự rèn luyện phẩm chất trong dịp hè.',
        dc: '• [Mã NLS: 5.1.TC1a] Hoàn thiện hồ sơ học tập số cá nhân môn GDCD cả năm học.\n• [Mã AI: 6.D1.1] Đánh giá tổng thể vai trò của chuyển đổi số và công nghệ AI trong việc nâng cao hiệu quả học tập môn Giáo dục công dân.'
      }
    ];

    grade6Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Bộ tranh ảnh đạo đức, Hiến pháp 2013, Luật Trẻ em 2016, máy chiếu, video tình huống',
        location: 'Phòng học / Lớp học',
        dc: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án GDCD' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. GIÁO DỤC CÔNG DÂN LỚP 7 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // Gồm 10 bài học: Đạo đức (Bài 1-5), Kĩ năng sống (Bài 6-7), Kinh tế (Bài 8), Pháp luật (Bài 9-10)
  // =========================================================================
  if (g === 7) {
    const grade7Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống quê hương (Tiết 1)',
        y: '- Nêu được một số truyền thống văn hóa, truyền thống yêu nước, chống giặc ngoại xâm của quê hương.\n- Hiểu được ý nghĩa thiêng liêng của việc tự hào và phát huy truyền thống tốt đẹp của quê hương.',
        dc: '• [Mã NLS: 1.1.TC1c] Tìm kiếm và chọn lọc tư liệu lịch sử, di tích văn hóa địa phương trên cổng thông tin điện tử của tỉnh/thành phố.\n• [Mã AI: 7.A1.1] Khám phá các mô hình AI bảo tồn và tái hiện không gian lịch sử, lễ hội truyền thống qua mô phỏng thực tế ảo.'
      },
      {
        w: 2,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống quê hương (Tiết 2)',
        y: '- Thực hiện được những việc làm cụ thể để giữ gìn, giới thiệu và phát huy truyền thống quê hương.\n- Phê phán những hành vi làm tổn hại hoặc làm sai lệch hình ảnh, giá trị truyền thống của quê hương.',
        dc: '• [Mã NLS: 2.5.TC1b] Thiết kế ấn phẩm số hoặc video clip ngắn quảng bá nét đẹp truyền thống quê hương mình.\n• [Mã AI: 7.A1.MR1] Đối chiếu các thông tin lịch sử do AI cung cấp với tư liệu chính thống của địa phương để đảm bảo tính xác thực.'
      },
      {
        w: 3,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Quan tâm, cảm thông và chia sẻ (Tiết 1)',
        y: '- Nêu được khái niệm, các biểu hiện của sự quan tâm, cảm thông và chia sẻ với mọi người xung quanh.\n- Giải thích được vì sao phải biết quan tâm, cảm thông và chia sẻ trong các mối quan hệ xã hội.',
        dc: '• [Mã NLS: 1.2.TC1b] Sưu tầm các câu chuyện cảm động về tình bạn, sự giúp đỡ lẫn nhau trong hoạn nạn trên báo điện tử uy tín.\n• [Mã AI: 7.A3.1] Khám phá công nghệ xử lý ngôn ngữ tự nhiên nhận diện cảm xúc (Sentiment Analysis) trong giao tiếp văn bản.'
      },
      {
        w: 4,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Quan tâm, cảm thông và chia sẻ (Tiết 2)',
        y: '- Thường xuyên có hành động quan tâm, chia sẻ khó khăn với người thân, bạn bè và những người xung quanh.\n- Phê phán thái độ ích kỷ, thờ ơ, vô cảm trước nỗi đau hoặc hoàn cảnh ngặt nghèo của đồng loại.',
        dc: '• [Mã NLS: 2.2.TC1c] Lập nhóm trực tuyến kêu gọi và tổ chức phong trào kế hoạch nhỏ giúp đỡ các bạn học sinh vùng cao.\n• [Mã AI: 7.D1.1] Thảo luận về văn hóa thấu cảm số: không bình luận ác ý, không lan truyền clip bắt nạt trên không gian mạng.'
      },
      {
        w: 5,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Học tập tự giác, tích cực (Tiết 1)',
        y: '- Nêu được các biểu hiện của học tập tự giác, tích cực (chủ động làm bài, tự tìm tòi, đào sâu suy nghĩ).\n- Giải thích được ý nghĩa to lớn của tinh thần tự giác, tích cực đối với kết quả học tập và tương lai cá nhân.',
        dc: '• [Mã NLS: 1.3.TC1b] Khai thác kho học liệu số, bài giảng điện tử trực tuyến để tự học và mở rộng kiến thức.\n• [Mã AI: 7.A1.1] Nhận thức rằng AI chỉ là công cụ bổ trợ học tập, tinh thần tự giác và tư duy độc lập của con người là yếu tố quyết định.'
      },
      {
        w: 6,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Học tập tự giác, tích cực (Tiết 2)',
        y: '- Xây dựng và thực hiện kế hoạch tự học một cách nghiêm túc, khoa học; không để thầy cô hay bố mẹ nhắc nhở.\n- Phê phán thái độ học đối phó, ỷ lại, học vẹt, lười biếng hoặc gian dối trong kiểm tra thi cử.',
        dc: '• [Mã NLS: 3.1.TC1b] Ứng dụng công cụ số lập thời gian biểu và theo dõi mục tiêu học tập hàng tuần.\n• [Mã AI: 7.C2.1] Sử dụng trợ lý AI để tạo sơ đồ tư duy tóm tắt bài học và tạo câu hỏi tự kiểm tra kiến thức.'
      },
      {
        w: 7,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Giữ chữ tín (Tiết 1)',
        y: '- Hiểu thế nào là giữ chữ tín và nêu được các biểu hiện của việc giữ chữ tín trong đời sống và học tập.\n- Phân tích được ý nghĩa của việc giữ chữ tín giúp tạo dựng niềm tin, sự tôn trọng và thành công trong các mối quan hệ.',
        dc: '• [Mã NLS: 4.2.TC1b] Tuân thủ cam kết bảo mật thông tin và tôn trọng lời hứa khi làm việc nhóm trực tuyến.\n• [Mã AI: 7.A1.MR1] Tìm hiểu khái niệm "Độ tin cậy của AI" (AI Trustworthiness) và các biện pháp giảm thiểu thông tin sai lệch do AI tạo sinh (hallucination).'
      },
      {
        w: 8,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Giữ chữ tín (Tiết 2)',
        y: '- Luôn giữ lời hứa, làm đúng cam kết, có trách nhiệm với lời nói và hành vi của bản thân trong mọi hoàn cảnh.\n- Phê phán thói quen thất hứa, nói một đằng làm một nẻo, lừa dối người khác để trục lợi cá nhân.',
        dc: '• [Mã NLS: 2.5.TC1b] Viết bài tham luận ngắn về "Chữ tín trong kỷ nguyên số" và đăng tải trên chuyên trang học tập của lớp.\n• [Mã AI: 7.D1.1] Thảo luận về việc xây dựng uy tín cá nhân trên mạng xã hội và trách nhiệm với những phát ngôn số.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục công dân Lớp 7 (1 tiết)',
        y: '- Đánh giá chuẩn kiến thức, kĩ năng và thái độ từ Bài 1 đến Bài 4 (Mạch Giáo dục Đạo đức Lớp 7).\n- Đánh giá khả năng phân tích tình huống thực tiễn và rèn luyện tính trung thực khi làm bài.',
        dc: '• [Mã NLS: 4.3.TC1a] Thực hiện bài thi nghiêm túc, tuân thủ các quy định thi cử và an toàn thông tin.\n• [Mã AI: 7.A3.1] Khám phá cách các hệ thống số ứng dụng thuật toán để phân tích cấu trúc đề thi công bằng, khách quan.'
      },
      {
        w: 10,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo tồn di sản văn hoá (Tiết 1)',
        y: '- Nêu được khái niệm di sản văn hóa; phân biệt được di sản văn hóa vật thể và di sản văn hóa phi vật thể.\n- Kể tên được một số di sản văn hóa tiêu biểu của Việt Nam được UNESCO công nhận là di sản thế giới.',
        dc: '• [Mã NLS: 1.1.TC1d] Khám phá bảo tàng ảo 3D và tra cứu cơ sở dữ liệu di sản văn hóa Việt Nam của Cục Di sản Văn hóa.\n• [Mã AI: 7.C1.1] Tìm hiểu cách AI dựng hình 3D và công nghệ số hóa di tích phục vụ việc bảo tồn các di sản đang xuống cấp.'
      },
      {
        w: 11,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo tồn di sản văn hoá (Tiết 2)',
        y: '- Phân tích được ý nghĩa lịch sử, văn hóa và kinh tế to lớn của các di sản văn hóa đối với đất nước và nhân loại.\n- Nhận biết được các quy định cơ bản của pháp luật Việt Nam về bảo tồn di sản văn hóa.',
        dc: '• [Mã NLS: 1.1.TC1b] Sưu tầm các văn bản pháp luật và bài viết về chế tài xử phạt hành vi xâm hại di tích lịch sử trên Thư viện Pháp luật.\n• [Mã AI: 7.A1.1] Khám phá ứng dụng AI hướng dẫn viên du lịch ảo cung cấp thông tin thuyết minh đa ngôn ngữ tại các khu di tích.'
      },
      {
        w: 12,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo tồn di sản văn hoá (Tiết 3)',
        y: '- Thực hiện được các việc làm cụ thể, thiết thực để bảo vệ, giữ gìn và quảng bá di sản văn hóa ở địa phương.\n- Phê phán, dũng cảm ngăn chặn các hành vi viết vẽ bậy, phá hoại hoặc chiếm đoạt di vật, cổ vật, di sản văn hóa.',
        dc: '• [Mã NLS: 3.2.TC1a] Thiết kế poster số hoặc video clip tuyên truyền "Chung tay bảo vệ di sản văn hóa quê hương".\n• [Mã AI: 7.C2.1] Sử dụng AI tạo hình ảnh phục dựng trang phục truyền thống của các dân tộc Việt Nam đúng chuẩn mực.'
      },
      {
        w: 13,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Ứng phó với tâm lí căng thẳng (Tiết 1)',
        y: '- Nêu được khái niệm tâm lí căng thẳng; nhận diện các nguyên nhân gây ra căng thẳng (áp lực học tập, thi cử, bạn bè, gia đình).\n- Nhận biết các biểu hiện về thể chất, cảm xúc và hành vi khi bản thân rơi vào trạng thái tâm lí căng thẳng.',
        dc: '• [Mã NLS: 1.3.TC1a] Sử dụng thang đo mức độ stress trực tuyến chuẩn khoa học để tự đánh giá sức khỏe tinh thần bản thân.\n• [Mã AI: 7.A3.1] Tìm hiểu cách các thuật toán AI theo dõi đồng hồ thông minh (nhịp tim, giấc ngủ) để phát hiện dấu hiệu căng thẳng sớm.'
      },
      {
        w: 14,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Ứng phó với tâm lí căng thẳng (Tiết 2)',
        y: '- Thực hành thành thạo các kỹ năng giải tỏa căng thẳng: hít thở sâu, tập thể thao, chia sẻ với người tin cậy, nghe nhạc lành mạnh.\n- Biết cách phòng ngừa căng thẳng bằng cách sắp xếp thời gian hợp lý; biết tìm kiếm sự trợ giúp từ chuyên gia tâm lý khi cần.',
        dc: '• [Mã NLS: 3.2.TC1a] Cài đặt và sử dụng ứng dụng thiền, hướng dẫn hít thở và nghe nhạc sóng não thư giãn trên điện thoại.\n• [Mã AI: 7.D1.1] Thảo luận về việc không lạm dụng Chatbot AI làm nơi trút bỏ cảm xúc tiêu cực thay thế các mối quan hệ con người ngoài đời thực.'
      },
      {
        w: 15,
        t: 'Ôn tập học kỳ 1',
        n: 'Ôn tập tổng hợp kiến thức môn Giáo dục công dân Lớp 7 Học kỳ 1 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức đạo đức và kỹ năng sống từ Bài 1 đến Bài 6 của chương trình GDCD Lớp 7.\n- Rèn luyện kỹ năng phân tích tình huống, tư duy phản biện và kỹ năng làm bài kiểm tra cuối học kỳ.',
        dc: '• [Mã NLS: 1.3.TC1b] Sử dụng ngân hàng câu hỏi ôn tập trực tuyến trên hệ thống quản lý học tập (LMS) của trường.\n• [Mã AI: 7.A1.MR1] Sử dụng AI hỗ trợ giải đáp các tình huống đạo đức giả định và đối chiếu với đáp án chuẩn của SGK.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục công dân Lớp 7 (1 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDCD Lớp 7 trong toàn bộ Học kỳ 1 theo chuẩn CT GDPT 2018.\n- Đánh giá năng lực giải quyết vấn đề, phẩm chất đạo đức và ý thức chấp hành kỷ luật của học sinh.',
        dc: '• [Mã NLS: 4.1.TC1b] Giữ vững đạo đức phòng thi, trung thực tuyệt đối và tuân thủ các quy tắc bảo mật số.\n• [Mã AI: 7.A3.1] Tìm hiểu quy trình số hóa bài thi và ứng dụng công nghệ chấm trắc nghiệm tự động.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức GDCD 7 HK1 (1 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1, phân tích các lỗi sai về nhận thức và xử lý tình huống đạo đức của học sinh.\n- Củng cố kiến thức cốt lõi và định hướng mục tiêu rèn luyện cho Học kỳ 2.',
        dc: '• [Mã NLS: 1.2.TC1a] Cập nhật kết quả sửa bài và rút kinh nghiệm cá nhân vào sổ tay học tập trực tuyến.\n• [Mã AI: 7.D1.1] Khám phá công cụ AI gợi ý phương pháp học tập cá nhân hóa phù hợp với kết quả kiểm tra.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Giáo dục công dân Lớp 7 (1 tiết)',
        y: '- Sơ kết, đánh giá mức độ đạt được về phẩm chất (yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm) của học sinh trong HK1.\n- Tuyên dương các tấm gương tiêu biểu và triển khai kế hoạch học tập, hoạt động Đội cho HK2.',
        dc: '• [Mã NLS: 2.1.TC1b] Trình chiếu báo cáo tổng kết HK1 dạng infographic đa phương tiện trước toàn lớp.\n• [Mã AI: 7.A1.1] Thảo luận về văn hóa học đường số và cam kết xây dựng tình bạn văn minh trong học kỳ mới.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực học đường (Tiết 1)',
        y: '- Nêu được khái niệm bạo lực học đường và các hình thức bạo lực học đường (thể chất, tinh thần, tình dục, bạo lực mạng).\n- Phân tích được các nguyên nhân và hậu quả nghiêm trọng của bạo lực học đường đối với nạn nhân và kẻ bạo lực.',
        dc: '• [Mã NLS: 1.2.TC1b] Thu thập thông tin, số liệu thống kê về tình trạng bạo lực học đường và bắt nạt trên mạng (cyberbullying) từ nguồn chính thống.\n• [Mã AI: 7.C1.1] Khám phá cách các nền tảng mạng xã hội ứng dụng AI tự động quét và ẩn các bình luận thù địch, xúc phạm danh dự.'
      },
      {
        w: 20,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực học đường (Tiết 2)',
        y: '- Nhận biết được một số quy định pháp luật cơ bản về xử lý hành vi bạo lực học đường (xử phạt vi phạm hành chính, trách nhiệm hình sự).\n- Hiểu được tầm quan trọng của việc xây dựng môi trường học đường an toàn, lành mạnh, thân thiện.',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu Nghị định 130/2021/NĐ-CP và Bộ luật Hình sự về xử lý hành vi cố ý gây thương tích và làm nhục người khác.\n• [Mã AI: 7.A1.MR1] Phản biện các trường hợp sử dụng AI tạo ảnh chế (meme) bôi nhọ bạn bè là hành vi vi phạm pháp luật và đạo đức.'
      },
      {
        w: 21,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực học đường (Tiết 3)',
        y: '- Thực hành các kỹ năng phòng ngừa, can ngăn và ứng phó an toàn khi bản thân hoặc bạn bè bị bạo lực học đường.\n- Biết cách tìm kiếm sự trợ giúp kịp thời từ thầy cô, gia đình và các cơ quan chức năng; kiên quyết nói "KHÔNG" với bạo lực.',
        dc: '• [Mã NLS: 2.1.TC1b] Tham gia diễn đàn trực tuyến "Xây dựng tình bạn đẹp - Nói không với bạo lực học đường".\n• [Mã AI: 7.D1.1] Thảo luận về trách nhiệm không chia sẻ, không like, không bình luận cổ súy các video clip đánh nhau trên mạng xã hội.'
      },
      {
        w: 22,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Quản lí tiền (Tiết 1)',
        y: '- Hiểu được ý nghĩa của việc quản lý tiền hiệu quả đối với cuộc sống của mỗi cá nhân hiện tại và tương lai.\n- Phân biệt được rõ ràng giữa nhu cầu thiết yếu (needs) và mong muốn sở thích cá nhân (wants).',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng bảng tính Excel lập bảng phân loại nhu cầu chi tiêu thiết yếu và mong muốn cá nhân.\n• [Mã AI: 7.A3.1] Khám phá cách các ứng dụng quản lý tài chính sử dụng AI để tự động phân loại các khoản chi tiêu hàng tháng.'
      },
      {
        w: 23,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Quản lí tiền (Tiết 2)',
        y: '- Nắm vững và vận dụng các nguyên tắc quản lý tiền hiệu quả (nguyên tắc 6 chiếc lọ, lập ngân sách chi tiêu, tạo quỹ tiết kiệm).\n- Biết cách chi tiêu hợp lý trong phạm vi số tiền cho phép của bản thân; không đua đòi lãng phí.',
        dc: '• [Mã NLS: 1.3.TC1a] Cài đặt và thực hành quản lý tiền tiêu vặt trên ứng dụng số (Money Lover, Sổ Thu Chi).\n• [Mã AI: 7.C2.1] Trải nghiệm AI mô phỏng tình huống tài chính: nếu tiết kiệm 20.000đ mỗi ngày thì sau 1 năm và 5 năm sẽ tích lũy được bao nhiêu.'
      },
      {
        w: 24,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Quản lí tiền (Tiết 3)',
        y: '- Thực hành lập kế hoạch quản lý tiền cá nhân cho một tháng cụ thể và theo dõi việc thực hiện kế hoạch đó.\n- Chia sẻ kinh nghiệm tiết kiệm và chi tiêu thông minh với các bạn trong lớp; có ý thức quý trọng mồ hôi công sức lao động của cha mẹ.',
        dc: '• [Mã NLS: 2.4.TC1a] Thiết kế bảng kế hoạch tài chính cá nhân dạng infographic trực quan và khoa học.\n• [Mã AI: 7.D1.1] Nhận diện các cạm bẫy tài chính trực tuyến, trò chơi nạp tiền may rủi và cảnh giác trước các chiêu trò lừa đảo qua mạng.'
      },
      {
        w: 25,
        t: 'Ôn tập giữa HK2',
        n: 'Ôn tập kiến thức môn Giáo dục công dân Lớp 7 chuẩn bị kiểm tra giữa HK2 (1 tiết)',
        y: '- Củng cố toàn diện kiến thức về phòng chống bạo lực học đường (Bài 7) và kỹ năng quản lý tiền hiệu quả (Bài 8).\n- Rèn luyện kỹ năng xử lý tình huống tài chính và ứng phó với bạo lực học đường.',
        dc: '• [Mã NLS: 1.3.TC1b] Khai thác ngân hàng câu hỏi tình huống trực tuyến trên nền tảng học tập của trường.\n• [Mã AI: 7.A1.3] Sử dụng trợ lý AI giải đáp thắc mắc về các bước xử lý xung đột trong trường học.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục công dân Lớp 7 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng từ Bài 7 đến Bài 8 (Kĩ năng sống và Giáo dục Kinh tế).\n- Đánh giá khả năng vận dụng bài học vào thực tế đời sống; rèn luyện tính trung thực và tự giác.',
        dc: '• [Mã NLS: 4.1.TC1c] Thực hiện bài kiểm tra nghiêm túc, tuân thủ kỷ luật phòng thi và bảo mật thông tin.\n• [Mã AI: 7.A3.1] Tìm hiểu cách AI hỗ trợ phân tích kết quả học tập giữa kỳ và xác định các nội dung cần bổ trợ.'
      },
      {
        w: 27,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng, chống tệ nạn xã hội (Tiết 1)',
        y: '- Nêu được khái niệm tệ nạn xã hội và một số loại tệ nạn xã hội phổ biến (ma túy, cờ bạc, mại dâm, mê tín dị đoan, nghiện game).\n- Phân tích được các nguyên nhân dẫn đến sa vào tệ nạn xã hội và hậu quả khôn lường của tệ nạn xã hội đối với cá nhân, gia đình và xã hội.',
        dc: '• [Mã NLS: 1.1.TC1b] Tra cứu thông tin, xem phim tài liệu tuyên truyền phòng chống ma túy học đường trên Cổng thông tin Bộ Công an.\n• [Mã AI: 7.C1.1] Tìm hiểu cách AI hỗ trợ lực lượng chức năng phát hiện các đường dây đánh bạc trực tuyến và buôn bán chất cấm qua mạng.'
      },
      {
        w: 28,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng, chống tệ nạn xã hội (Tiết 2)',
        y: '- Trình bày được một số quy định cơ bản của pháp luật về phòng, chống tệ nạn xã hội và các chế tài xử phạt nghiêm khắc.\n- Hiểu được trách nhiệm của công dân, đặc biệt là học sinh trong việc chấp hành pháp luật phòng chống tệ nạn xã hội.',
        dc: '• [Mã NLS: 1.1.TC1b] Tra cứu Luật Phòng, chống ma túy và các điều khoản xử phạt hành chính về hành vi đánh bạc trực tuyến.\n• [Mã AI: 7.A1.1] Nhận diện các chiêu trò dụ dỗ học sinh tham gia hội nhóm cờ bạc, cá độ bóng đá trực tuyến ứng dụng công nghệ tinh vi.'
      },
      {
        w: 29,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng, chống tệ nạn xã hội (Tiết 3)',
        y: '- Thực hiện được các kỹ năng tự bảo vệ bản thân, kiên quyết từ chối trước lời rủ rê, lôi kéo của kẻ xấu; không tham gia tệ nạn xã hội.\n- Tuyên truyền, vận động bạn bè, người thân cùng phòng chống tệ nạn xã hội; báo cáo cơ quan công an khi phát hiện hành vi vi phạm.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video ngắn hoặc tờ rơi số tuyên truyền "Học sinh THCS nói không với ma túy và tệ nạn xã hội".\n• [Mã AI: 7.D1.1] Thảo luận về việc xây dựng lối sống lành mạnh, không sa đà vào không gian mạng ảo và các ứng dụng cá cược số.'
      },
      {
        w: 30,
        t: 'Giáo dục pháp luật',
        n: 'Bài 10: Quyền và nghĩa vụ của công dân trong gia đình (1 tiết)',
        y: '- Trình bày được một số quy định cơ bản của Luật Hôn nhân và Gia đình về quyền và nghĩa vụ giữa vợ chồng, cha mẹ và con cái, ông bà và các cháu.\n- Thực hiện tốt bổn phận hiếu thảo với ông bà cha mẹ; yêu thương hòa thuận với anh chị em trong gia đình.',
        dc: '• [Mã NLS: 1.1.TC1c] Tra cứu Luật Hôn nhân và Gia đình 2014 và Luật Trẻ em về nghĩa vụ chăm sóc, nuôi dưỡng và quyền thừa kế.\n• [Mã AI: 7.D1.1] Thảo luận về giá trị tình cảm gia đình truyền thống trong bối cảnh các thành viên bị chi phối bởi thiết bị thông minh và mạng xã hội.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục công dân Lớp 7 (1 tiết)',
        y: '- Đánh giá tổng kết mức độ nắm vững chuẩn kiến thức, kĩ năng môn GDCD Lớp 7 trong toàn bộ năm học.\n- Đánh giá năng lực giải quyết tình huống đạo đức, pháp lý và kỹ năng sống; phân hóa năng lực học sinh.',
        dc: '• [Mã NLS: 4.2.TC1b] Chấp hành kỷ luật phòng thi nghiêm túc, thể hiện phẩm chất trung thực và trách nhiệm công dân.\n• [Mã AI: 7.A3.1] Tìm hiểu cách hệ thống AI tổng hợp kết quả học tập và đánh giá sự tiến bộ của học sinh cả năm.'
      },
      {
        w: 32,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức HK2 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK2; phân tích sâu các tình huống pháp lý về tệ nạn xã hội và quyền gia đình.\n- Củng cố phương pháp tự học và bồi dưỡng ý thức chấp hành pháp luật cho học sinh.',
        dc: '• [Mã NLS: 1.2.TC1a] Lưu trữ kết quả đánh giá và phản hồi của giáo viên trên hệ thống sổ điểm điện tử.\n• [Mã AI: 7.D1.1] Khám phá công cụ AI gợi ý các hoạt động tình nguyện hè và câu lạc bộ kỹ năng sống bổ ích.'
      },
      {
        w: 33,
        t: 'Dự án GDCD',
        n: 'Dự án GDCD: "Xây dựng cẩm nang Tuyên truyền Phòng chống bạo lực học đường và Tệ nạn xã hội" (1 tiết)',
        y: '- Vận dụng kiến thức Bài 7 và Bài 9 thiết kế cẩm nang điện tử (E-book) tuyên truyền phòng chống bạo lực học đường và tệ nạn xã hội.\n- Nâng cao năng lực làm việc nhóm, tư duy sáng tạo và ý thức trách nhiệm bảo vệ môi trường học đường.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng các nền tảng Canva, Book Creator tạo sách lật số (Flipbook) sinh động và hấp dẫn.\n• [Mã AI: 7.C2.1] Ứng dụng công cụ AI hỗ trợ tạo hình ảnh minh họa chân thực và viết lời bình ý nghĩa cho cẩm nang.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài 29: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDCD 7 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ 10 bài học GDCD Lớp 7 qua 4 mạch nội dung cốt lõi: Đạo đức, Kĩ năng sống, Kinh tế và Pháp luật.\n- Nâng cao ý thức thượng tôn pháp luật và rèn luyện các phẩm chất nhân cách tốt đẹp trong kỳ nghỉ hè.',
        dc: '• [Mã NLS: 2.5.TC1b] Xây dựng sơ đồ tư duy tổng hợp toàn bộ chương trình GDCD 7 bằng phần mềm Coggle/XMind.\n• [Mã AI: 7.A1.MR1] Khám phá cách các công cụ AI tổng hợp kiến thức trọng tâm giúp học sinh tự ôn tập dễ dàng.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn GDCD Lớp 7 cả năm (1 tiết)',
        y: '- Tổng kết đánh giá kết quả rèn luyện phẩm chất và năng lực học sinh môn GDCD Lớp 7 theo Thông tư 22/2021/TT-BGDĐT.\n- Khen thưởng các học sinh xuất sắc; dặn dò kế hoạch sống lành mạnh, an toàn và có ích trong kỳ nghỉ hè.',
        dc: '• [Mã NLS: 5.2.TC1b] Đóng gói và lưu trữ hồ sơ học tập số cá nhân môn GDCD cả năm học trên đám mây.\n• [Mã AI: 7.D1.1] Thảo luận về việc tiếp tục phát huy năng lực số và đạo đức công dân số trong cuộc sống hàng ngày.'
      }
    ];

    grade7Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Bộ tranh ảnh di sản văn hóa, Luật Hôn nhân & Gia đình, Luật Phòng chống ma túy, máy chiếu, video tình huống',
        location: 'Phòng học / Lớp học',
        dc: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án GDCD' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. GIÁO DỤC CÔNG DÂN LỚP 8 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // Gồm 10 bài học: Đạo đức (Bài 1-5), Kĩ năng sống (Bài 6-7), Kinh tế (Bài 8), Pháp luật (Bài 9-10)
  // =========================================================================
  if (g === 8) {
    const grade8Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống dân tộc Việt Nam (Tiết 1)',
        y: '- Kể được các truyền thống tốt đẹp của dân tộc Việt Nam (yêu nước, bất khuất, đoàn kết, nhân nghĩa, cần cù, hiếu học...).\n- Hiểu sâu sắc ý nghĩa của truyền thống dân tộc là cội nguồn sức mạnh làm nên lịch sử dựng nước và giữ nước.',
        dc: '• [Mã NLS: 1.1.TC2c] Khai thác kho lưu trữ lịch sử quốc gia trực tuyến và bảo tàng số về các cuộc kháng chiến vệ quốc vĩ đại.\n• [Mã AI: 8.A1.1] Khám phá cách AI phục chế màu các thước phim tài liệu lịch sử Việt Nam và nhận thức giá trị của tư liệu chân thực.'
      },
      {
        w: 2,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Tự hào về truyền thống dân tộc Việt Nam (Tiết 2)',
        y: '- Thể hiện lòng tự hào dân tộc bằng các hành động cụ thể trong học tập, lao động và gìn giữ bản sắc văn hóa.\n- Kiên quyết đấu tranh phản bác các luận điệu xuyên tạc lịch sử, hạ thấp truyền thống dân tộc trên không gian mạng.',
        dc: '• [Mã NLS: 2.5.TC2b] Thiết kế ấn phẩm số Infographic hoặc video ngắn giới thiệu niềm tự hào về truyền thống dân tộc Việt Nam.\n• [Mã AI: 8.D1.1] Thảo luận về việc xây dựng "Chủ quyền số quốc gia" và trách nhiệm của công dân số trong việc bảo vệ hình ảnh đất nước.'
      },
      {
        w: 3,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Tôn trọng sự đa dạng của các dân tộc (Tiết 1)',
        y: '- Nêu được một số biểu hiện về sự đa dạng của các dân tộc và các nền văn hóa trên thế giới cũng như 54 dân tộc Việt Nam.\n- Hiểu được ý nghĩa to lớn của việc tôn trọng sự đa dạng về văn hóa, phong tục, tập quán giữa các dân tộc.',
        dc: '• [Mã NLS: 1.2.TC2a] Tra cứu kho dữ liệu văn hóa các dân tộc thiểu số Việt Nam trên Cổng thông tin của Ủy ban Dân tộc.\n• [Mã AI: 8.C1.1] Khám phá các công cụ AI dịch thuật tự động đa ngôn ngữ giúp xóa nhòa rào cản giao tiếp giữa các nền văn hóa.'
      },
      {
        w: 4,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Tôn trọng sự đa dạng của các dân tộc (Tiết 2)',
        y: '- Tôn trọng sự khác biệt về ngôn ngữ, trang phục, phong tục của các dân tộc; sẵn sàng học hỏi tinh hoa văn hóa các dân tộc.\n- Lên án, phê phán các hành vi phân biệt chủng tộc, kì thị dân tộc, miệt thị vùng miền.',
        dc: '• [Mã NLS: 2.5.TC2b] Phối hợp nhóm trực tuyến xây dựng triển lãm ảnh số "Bản sắc 54 dân tộc anh em Việt Nam".\n• [Mã AI: 8.A1.1] Nhận diện và thảo luận về định kiến (bias) trong các mô hình AI khi phản ánh văn hóa và chủng tộc.'
      },
      {
        w: 5,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Lao động cần cù, sáng tạo (Tiết 1)',
        y: '- Hiểu thế nào là lao động cần cù, sáng tạo và nêu được các biểu hiện của lao động cần cù, sáng tạo trong đời sống và học tập.\n- Giải thích được ý nghĩa của lao động cần cù, sáng tạo đối với sự phát triển cá nhân và tiến bộ xã hội.',
        dc: '• [Mã NLS: 1.3.TC2b] Tìm kiếm và phân tích các bài viết về các nhà khoa học, nông dân sáng chế máy móc nông nghiệp trên báo điện tử.\n• [Mã AI: 8.A3.1] Khám phá cách tự động hóa và AI đang thay đổi thế giới lao động, đòi hỏi con người phải không ngừng sáng tạo.'
      },
      {
        w: 6,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Lao động cần cù, sáng tạo (Tiết 2)',
        y: '- Luôn chăm chỉ, tích cực tìm tòi các phương pháp học tập và lao động cải tiến, nâng cao năng suất và chất lượng công việc.\n- Phê phán thái độ lười lao động, làm việc cẩu thả, thụ động, bảo thủ và sao chép rập khuôn.',
        dc: '• [Mã NLS: 3.1.TC2b] Sử dụng các công cụ số và phần mềm sơ đồ tư duy để đổi mới phương pháp tự học và làm bài tập.\n• [Mã AI: 8.C2.1] Sử dụng AI như một người đồng hành hỗ trợ tư duy (brainstorming ý tưởng) chứ không để AI làm thay tư duy sáng tạo.'
      },
      {
        w: 7,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Bảo vệ lẽ phải (Tiết 1)',
        y: '- Hiểu thế nào là lẽ phải và thế nào là bảo vệ lẽ phải; nêu được các biểu hiện của người biết bảo vệ lẽ phải.\n- Phân tích được ý nghĩa của việc tôn trọng và bảo vệ lẽ phải giúp xây dựng xã hội công bằng, kỷ cương và văn minh.',
        dc: '• [Mã NLS: 1.1.TC2d] Khai thác các bài viết chính luận, văn bản pháp luật bảo vệ người tố giác tội phạm trên Thư viện Pháp luật.\n• [Mã AI: 8.A1.1] Phân tích trách nhiệm đạo đức của con người khi kiểm chứng thông tin trước các nội dung do AI tạo sinh xuyên tạc lẽ phải.'
      },
      {
        w: 8,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Bảo vệ lẽ phải (Tiết 2)',
        y: '- Tôn trọng, ủng hộ và bảo vệ những việc làm đúng đắn, chính nghĩa; dũng cảm phê phán cái sai, cái xấu và sự gian dối.\n- Lên án thái độ a dua, bao che cho hành vi tiêu cực hoặc im lặng thỏa hiệp với cái xấu.',
        dc: '• [Mã NLS: 4.2.TC2b] Rèn luyện bản lĩnh số: không chia sẻ thông tin thất thiệt, dũng cảm báo cáo (report) các nội dung bẩn, độc hại trên mạng.\n• [Mã AI: 8.D1.1] Thảo luận về việc xây dựng các chuẩn mực đạo đức AI (AI Ethics) phục vụ chân lý và bảo vệ lẽ phải.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục công dân Lớp 8 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng và thái độ từ Bài 1 đến Bài 4 (Mạch Giáo dục Đạo đức Lớp 8).\n- Đánh giá năng lực tư duy phản biện, kỹ năng xử lý tình huống đạo đức và tính trung thực khi làm bài.',
        dc: '• [Mã NLS: 4.3.TC2b] Chấp hành quy chế thi nghiêm túc, thể hiện phẩm chất trung thực số và kỷ luật phòng thi.\n• [Mã AI: 8.A3.1] Tìm hiểu các công nghệ giám sát phòng thi và thuật toán chống gian lận thi cử hiện đại.'
      },
      {
        w: 10,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên (Tiết 1)',
        y: '- Nêu được khái niệm môi trường, tài nguyên thiên nhiên và thực trạng môi trường, tài nguyên hiện nay ở nước ta.\n- Hiểu được tầm quan trọng đặc biệt của môi trường và tài nguyên thiên nhiên đối với sự sống và phát triển bền vững.',
        dc: '• [Mã NLS: 1.2.TC2b] Tra cứu chỉ số chất lượng không khí (AQI) thời gian thực và bản đồ biến đổi khí hậu trên Cổng thông tin Bộ TN&MT.\n• [Mã AI: 8.C1.1] Khám phá cách AI phân tích ảnh vệ tinh để giám sát tình trạng mất rừng, cháy rừng và ô nhiễm nguồn nước biển.'
      },
      {
        w: 11,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên (Tiết 2)',
        y: '- Trình bày được một số quy định cơ bản của Luật Bảo vệ môi trường 2020 về quyền và trách nhiệm của công dân.\n- Phân tích được các biện pháp bảo vệ môi trường, tiết kiệm tài nguyên (giảm rác thải nhựa, phân loại rác, năng lượng tái tạo).',
        dc: '• [Mã NLS: 1.2.TC2b] Tìm hiểu Luật Bảo vệ môi trường 2020 và các quy định xử phạt vi phạm xả thải gây ô nhiễm trên Thư viện Pháp luật.\n• [Mã AI: 8.C2.1] Tìm hiểu các hệ thống AI điều khiển thùng rác thông minh tự động phân loại rác tái chế và rác hữu cơ.'
      },
      {
        w: 12,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ môi trường và tài nguyên thiên nhiên (Tiết 3)',
        y: '- Tích cực tham gia các hoạt động bảo vệ môi trường ở trường và địa phương (trồng cây xanh, dọn dẹp vệ sinh, gom pin cũ).\n- Phê phán, tố cáo các hành vi phá hoại môi trường, hủy hoại rừng, săn bắt động vật hoang dã trái phép.',
        dc: '• [Mã NLS: 3.2.TC2a] Thiết kế chiến dịch truyền thông xanh trên mạng xã hội trường học: "Nói không với đồ nhựa dùng một lần".\n• [Mã AI: 8.D1.1] Thảo luận về việc ứng dụng công nghệ AI trong việc tối ưu hóa mạng lưới điện thông minh và giảm phát thải khí nhà kính.'
      },
      {
        w: 13,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Xác định mục tiêu cá nhân (Tiết 1)',
        y: '- Hiểu thế nào là mục tiêu cá nhân và các loại mục tiêu cá nhân (ngắn hạn, trung hạn, dài hạn).\n- Giải thích được ý nghĩa to lớn của việc xác định mục tiêu cá nhân giúp định hướng hành động và tạo động lực vươn lên.',
        dc: '• [Mã NLS: 3.2.TC2a] Sử dụng phần mềm quản lý công việc (Trello, Notion) để lập danh sách mục tiêu năm học của cá nhân.\n• [Mã AI: 8.A3.1] Khám phá cách các thuật toán AI phân tích dữ liệu mục tiêu để đưa ra lộ trình học tập tối ưu cho từng người học.'
      },
      {
        w: 14,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Xác định mục tiêu cá nhân (Tiết 2)',
        y: '- Nắm vững và thực hành thành thạo nguyên tắc SMART trong xác định mục tiêu cá nhân.\n- Lập được kế hoạch hành động cụ thể để đạt được mục tiêu; kiên trì theo đuổi và linh hoạt điều chỉnh khi hoàn cảnh thay đổi.',
        dc: '• [Mã NLS: 2.1.TC2b] Thiết kế bảng tầm nhìn (Vision Board) và sơ đồ lộ trình thực hiện mục tiêu bằng Canva/Mindmap.\n• [Mã AI: 8.D1.1] Trải nghiệm ứng dụng trợ lý ảo AI hỗ trợ theo dõi tiến độ hoàn thành mục tiêu và nhắc nhở thói quen hàng ngày.'
      },
      {
        w: 15,
        t: 'Ôn tập học kỳ 1',
        n: 'Ôn tập tổng hợp kiến thức môn Giáo dục công dân Lớp 8 Học kỳ 1 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức đạo đức và kỹ năng sống từ Bài 1 đến Bài 6 của chương trình GDCD Lớp 8.\n- Rèn luyện kỹ năng phân tích tình huống thực tiễn, năng lực phản biện và kỹ năng làm bài kiểm tra học kỳ.',
        dc: '• [Mã NLS: 1.3.TC2a] Truy cập kho tài liệu số và ngân hàng đề thi trực tuyến của nhà trường để ôn tập.\n• [Mã AI: 8.A1.1] Sử dụng AI để tạo bộ câu hỏi tình huống đạo đức giả định giúp nhóm học tập thảo luận và đối chiếu.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục công dân Lớp 8 (1 tiết)',
        y: '- Đánh giá tổng hợp mức độ nắm vững chuẩn kiến thức và năng lực môn GDCD Lớp 8 trong toàn bộ Học kỳ 1.\n- Đánh giá khả năng giải quyết các vấn đề đạo đức, môi trường và mục tiêu cá nhân; rèn luyện tính trung thực.',
        dc: '• [Mã NLS: 4.4.TC2a] Thực hiện nghiêm túc quy chế kiểm tra, giữ gìn đạo đức học sinh và tính trung thực tuyệt đối.\n• [Mã AI: 8.A3.1] Tìm hiểu quy trình ứng dụng công nghệ số trong việc chấm bài, thống kê và lưu trữ kết quả học tập.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức GDCD 8 HK1 (1 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1, phân tích sâu các ưu điểm và thiếu sót trong bài làm của học sinh.\n- Củng cố phương pháp học tập tư duy phản biện và định hướng mục tiêu rèn luyện cho Học kỳ 2.',
        dc: '• [Mã NLS: 1.1.TC2b] Lưu trữ nhận xét đánh giá của thầy cô trên hệ thống học bạ điện tử.\n• [Mã AI: 8.D1.1] Khám phá công cụ AI gợi ý kế hoạch cá nhân hóa để cải thiện các năng lực còn hạn chế.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Giáo dục công dân Lớp 8 (1 tiết)',
        y: '- Sơ kết, đánh giá ý thức tu dưỡng đạo đức, thực hiện mục tiêu học tập và nền nếp của học sinh trong HK1.\n- Tuyên dương các cá nhân tiêu biểu và phát động phong trào học tập, rèn luyện tốt trong Học kỳ 2.',
        dc: '• [Mã NLS: 2.4.TC2a] Thiết kế và trình chiếu báo cáo sơ kết HK1 dạng video clip đa phương tiện trước tập thể lớp.\n• [Mã AI: 8.A1.1] Thảo luận về việc xây dựng không gian trường học số văn minh, an toàn và hòa nhập trong học kỳ tiếp theo.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực gia đình (Tiết 1)',
        y: '- Nêu được khái niệm bạo lực gia đình và các hình thức bạo lực gia đình (thể xác, tinh thần, kinh tế, tình dục).\n- Phân tích được các nguyên nhân và hậu quả nặng nề của bạo lực gia đình đối với các thành viên và xã hội.',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu số liệu, bài viết phân tích về thực trạng bạo lực gia đình từ Cổng thông tin Bộ LĐ-TB&XH.\n• [Mã AI: 8.C1.1] Tìm hiểu các công nghệ AI phân tích âm thanh, giọng nói nhận diện các cuộc gọi khẩn cấp báo bạo lực gia đình.'
      },
      {
        w: 20,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực gia đình (Tiết 2)',
        y: '- Trình bày được một số quy định cơ bản của Luật Phòng, chống bạo lực gia đình 2022 về các hành vi bị cấm và chế tài xử lý.\n- Nắm vững trách nhiệm của cá nhân, gia đình, nhà trường và xã hội trong phòng ngừa bạo lực gia đình.',
        dc: '• [Mã NLS: 1.2.TC2a] Tra cứu toàn văn Luật Phòng, chống bạo lực gia đình 2022 và các biện pháp bảo vệ người bị bạo lực.\n• [Mã AI: 8.A1.1] Thảo luận về trách nhiệm bảo vệ dữ liệu nhạy cảm của các nạn nhân bạo lực gia đình trong các cơ sở dữ liệu số.'
      },
      {
        w: 21,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Phòng, chống bạo lực gia đình (Tiết 3)',
        y: '- Thực hành các kỹ năng phòng ngừa, ứng phó an toàn khi có nguy cơ hoặc xảy ra bạo lực gia đình.\n- Biết cách tìm kiếm sự trợ giúp (Tổng đài 111, công an, hội phụ nữ); có ý thức xây dựng gia đình hòa thuận, yêu thương.',
        dc: '• [Mã NLS: 3.2.TC2a] Thiết kế tờ rơi số hoặc infographic hướng dẫn các số điện thoại khẩn cấp và nơi lánh nạn an toàn khi bị bạo lực.\n• [Mã AI: 8.D1.1] Nhận diện các ứng dụng bảo vệ phụ nữ và trẻ em tích hợp nút bấm khẩn cấp SOS định vị vị trí tự động.'
      },
      {
        w: 22,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Lập kế hoạch chi tiêu (Tiết 1)',
        y: '- Hiểu thế nào là kế hoạch chi tiêu và sự cần thiết phải lập kế hoạch chi tiêu cá nhân cũng như kế hoạch chi tiêu gia đình.\n- Nêu được các bước cơ bản để lập một kế hoạch chi tiêu khoa học, hợp lý và cân đối.',
        dc: '• [Mã NLS: 3.1.TC2b] Sử dụng bảng tính Excel/Google Sheets thiết lập mẫu bảng cân đối thu chi hàng tháng.\n• [Mã AI: 8.A3.1] Khám phá cách các mô hình AI tài chính cá nhân tự động phân tích biểu đồ thu - chi và cảnh báo khi vượt quá ngân sách.'
      },
      {
        w: 23,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Lập kế hoạch chi tiêu (Tiết 2)',
        y: '- Rèn luyện kỹ năng xác định các khoản thu, khoản chi ưu tiên và cắt giảm các khoản chi tiêu không cần thiết.\n- Nắm vững nguyên tắc "Thu nhập - Tiết kiệm = Chi tiêu", luôn duy trì quỹ dự phòng rủi ro khẩn cấp.',
        dc: '• [Mã NLS: 1.3.TC2b] Thực hành lưu trữ hóa đơn điện tử và ghi chép chi tiêu trên các ứng dụng tài chính thông minh.\n• [Mã AI: 8.C2.1] Sử dụng AI mô phỏng các phương án chi tiêu với ngân sách giả định để tìm ra phương án tối ưu nhất.'
      },
      {
        w: 24,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Lập kế hoạch chi tiêu (Tiết 3)',
        y: '- Thực hành lập kế hoạch chi tiêu cho một dự án cụ thể (chuyến dã ngoại của lớp, mua sắm đồ dùng học tập năm học mới).\n- Có thói quen chi tiêu thông minh, có trách nhiệm với đồng tiền; biết chia sẻ gánh nặng tài chính với gia đình.',
        dc: '• [Mã NLS: 2.1.TC2b] Phối hợp nhóm trên bảng tính đám mây để lập và duyệt dự toán kinh phí cho hoạt động tập thể lớp.\n• [Mã AI: 8.D1.1] Thảo luận về việc cẩn trọng với các bẫy quảng cáo cá nhân hóa của AI kích thích mua sắm bốc đồng trên sàn thương mại điện tử.'
      },
      {
        w: 25,
        t: 'Ôn tập giữa HK2',
        n: 'Ôn tập kiến thức môn Giáo dục công dân Lớp 8 chuẩn bị kiểm tra giữa HK2 (1 tiết)',
        y: '- Củng cố toàn diện kiến thức về phòng chống bạo lực gia đình (Bài 7) và kỹ năng lập kế hoạch chi tiêu (Bài 8).\n- Rèn luyện kỹ năng phân tích tình huống thực tế và kỹ năng làm bài kiểm tra định kỳ.',
        dc: '• [Mã NLS: 1.3.TC2a] Khai thác ngân hàng câu hỏi ôn tập trực tuyến trên hệ thống quản lý học tập (LMS) của trường.\n• [Mã AI: 8.A1.1] Sử dụng trợ lý AI giải đáp thắc mắc về các bước giải quyết tình huống bạo lực gia đình an toàn.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục công dân Lớp 8 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng từ Bài 7 đến Bài 8 (Kĩ năng sống và Giáo dục Kinh tế Lớp 8).\n- Đánh giá khả năng lập kế hoạch tài chính và nhận thức về bạo lực gia đình; rèn luyện tính trung thực.',
        dc: '• [Mã NLS: 4.1.TC2b] Thực hiện bài kiểm tra nghiêm túc, tuân thủ kỷ luật phòng thi và bảo mật thông tin cá nhân.\n• [Mã AI: 8.A3.1] Tìm hiểu cách AI hỗ trợ phân tích kết quả học tập giữa kỳ và xác định các nội dung cần bổ trợ.'
      },
      {
        w: 27,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại (Tiết 1)',
        y: '- Nhận biết được các loại vũ khí, chất cháy nổ và các chất độc hại thường gây ra tai nạn thương tâm trong đời sống.\n- Phân tích được nguyên nhân và hậu quả thảm khốc của tai nạn vũ khí, cháy nổ và ngộ độc thực phẩm, hóa chất.',
        dc: '• [Mã NLS: 1.1.TC2c] Tra cứu thông tin, xem các phóng sự truyền hình về các vụ cháy nổ thương tâm từ Cổng thông tin Cục Cảnh sát PCCC.\n• [Mã AI: 8.C1.1] Khám phá hệ thống camera giám sát ứng dụng AI tự động phát hiện đám khói và tia lửa điện cảnh báo cháy sớm.'
      },
      {
        w: 28,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại (Tiết 2)',
        y: '- Nắm vững một số quy định cơ bản của pháp luật về quản lý, sử dụng vũ khí, vật liệu nổ và phòng cháy chữa cháy.\n- Hiểu rõ các hành vi bị pháp luật nghiêm cấm (tự chế pháo nổ, tàng trữ vũ khí, buôn bán hóa chất độc hại).',
        dc: '• [Mã NLS: 1.2.TC2b] Tra cứu Luật Phòng cháy và chữa cháy và Nghị định 137/2020/NĐ-CP về quản lý, sử dụng pháo trên Thư viện Pháp luật.\n• [Mã AI: 8.A1.1] Nhận diện và thảo luận về việc không tìm kiếm, không làm theo các video hướng dẫn chế tạo pháo nổ nguy hiểm trên mạng.'
      },
      {
        w: 29,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Phòng ngừa tai nạn vũ khí, cháy, nổ và các chất độc hại (Tiết 3)',
        y: '- Thực hành các kỹ năng phòng ngừa, kỹ năng thoát nạn an toàn khi xảy ra cháy nổ hoặc phát hiện vật nghi là bom mìn.\n- Tuyên truyền, nhắc nhở mọi người tuân thủ quy định an toàn PCCC; dũng cảm báo cáo cơ quan chức năng khi phát hiện vi phạm.',
        dc: '• [Mã NLS: 3.2.TC2a] Thiết kế Infographic hướng dẫn kỹ năng sử dụng bình chữa cháy mini và kỹ năng thoát hiểm khi hỏa hoạn.\n• [Mã AI: 8.C2.1] Tìm hiểu các robot chữa cháy và thiết bị bay không người lái (drone) ứng dụng AI hỗ trợ cứu nạn trong đám cháy lớn.'
      },
      {
        w: 30,
        t: 'Giáo dục pháp luật',
        n: 'Bài 10: Quyền và nghĩa vụ lao động của công dân (1 tiết)',
        y: '- Nêu được khái niệm quyền và nghĩa vụ lao động của công dân theo Bộ luật Lao động 2019.\n- Nắm được các quy định của pháp luật đối với lao động chưa thành niên; có ý thức tôn trọng người lao động và yêu lao động.',
        dc: '• [Mã NLS: 1.1.TC2d] Tra cứu Bộ luật Lao động 2019 về độ tuổi lao động tối thiểu và các công việc cấm sử dụng lao động dưới 18 tuổi.\n• [Mã AI: 8.D1.1] Thảo luận về tác động của trí tuệ nhân tạo đối với thị trường lao động tương lai và định hướng nghề nghiệp của bản thân.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục công dân Lớp 8 (1 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn GDCD Lớp 8 trong cả năm học.\n- Đánh giá năng lực giải quyết tình huống pháp lý, kĩ năng sống và phẩm chất công dân; phân hóa học sinh.',
        dc: '• [Mã NLS: 4.1.TC2c] Thực hiện nghiêm túc quy chế thi cử, giữ gìn tính trung thực và trách nhiệm công dân.\n• [Mã AI: 8.A3.1] Tìm hiểu quy trình chấm thi và thống kê kết quả học tập tự động bằng hệ thống số.'
      },
      {
        w: 32,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức HK2 (1 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2, phân tích sâu các tình huống pháp lý về an toàn cháy nổ và quyền lao động.\n- Nhận xét quá trình học tập và rèn luyện đạo đức, lối sống của học sinh trong học kỳ 2.',
        dc: '• [Mã NLS: 1.1.TC2b] Cập nhật kết quả đánh giá và phản hồi của thầy cô trên hệ thống học bạ điện tử.\n• [Mã AI: 8.D1.1] Khám phá công cụ AI gợi ý các kỹ năng thực tế cần rèn luyện thêm trong kỳ nghỉ hè.'
      },
      {
        w: 33,
        t: 'Dự án GDCD',
        n: 'Dự án GDCD: "Phiên tòa Giả định Tuyên truyền Phòng chống bạo lực gia đình & An toàn cháy nổ" (1 tiết)',
        y: '- Thực hành đóng vai trong kịch bản "Phiên tòa Giả định" xét xử vụ án vi phạm quy định về PCCC hoặc bạo lực gia đình.\n- Nâng cao ý thức thượng tôn pháp luật, rèn luyện kỹ năng hùng biện, tranh tụng và tư duy pháp lý.',
        dc: '• [Mã NLS: 3.2.TC2a] Sử dụng các phần mềm biên tập video ghi hình lại phiên tòa giả định làm tư liệu tuyên truyền pháp luật học đường.\n• [Mã AI: 8.C2.1] Ứng dụng AI tạo phụ đề tự động và hiệu ứng âm thanh chuyên nghiệp cho video phiên tòa giả định.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài 29: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDCD 8 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ 10 bài học GDCD Lớp 8 qua 4 mạch nội dung: Đạo đức, Kĩ năng sống, Kinh tế và Pháp luật.\n- Nâng cao ý thức công dân, tinh thần trách nhiệm với cộng đồng và định hướng chuẩn bị cho năm học cuối cấp Lớp 9.',
        dc: '• [Mã NLS: 2.5.TC2b] Vẽ sơ đồ tư duy tổng kết toàn bộ kiến thức môn GDCD 8 trên phần mềm GitMind/XMind.\n• [Mã AI: 8.A1.1] Thảo luận về việc vận dụng tư duy logic và đạo đức vào cuộc sống hàng ngày trong kỷ nguyên số.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn GDCD Lớp 8 cả năm (1 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và rèn luyện môn GDCD Lớp 8 theo Thông tư 22/2021/TT-BGDĐT.\n- Khen thưởng các học sinh xuất sắc; dặn dò kế hoạch tự rèn luyện đạo đức và giữ gìn an toàn trong kỳ nghỉ hè.',
        dc: '• [Mã NLS: 5.3.TC2b] Hoàn thiện và lưu trữ hồ sơ học tập số cá nhân môn GDCD cả năm học trên Google Drive.\n• [Mã AI: 8.D1.1] Đánh giá tổng thể hiệu quả của việc tích hợp công nghệ AI và năng lực số vào môn Giáo dục công dân.'
      }
    ];

    grade8Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Luật Bảo vệ môi trường 2020, Luật Phòng chống bạo lực gia đình 2022, Luật PCCC, máy chiếu, video tình huống',
        location: 'Phòng học / Lớp học',
        dc: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Phiên tòa Giả định' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. GIÁO DỤC CÔNG DÂN LỚP 9 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // Gồm 10 bài học: Đạo đức (Bài 1-5), Kĩ năng sống (Bài 6-7), Kinh tế (Bài 8), Pháp luật (Bài 9-10)
  // =========================================================================
  if (g === 9) {
    const grade9Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Sống có lí tưởng (Tiết 1)',
        y: '- Hiểu thế nào là sống có lí tưởng và lí tưởng sống cao đẹp của thanh niên Việt Nam trong thời đại mới.\n- Giải thích được ý nghĩa to lớn của việc sống có lí tưởng giúp định hướng cuộc đời và đóng góp cho đất nước.',
        dc: '• [Mã NLS: 1.2.TC2b] Tìm kiếm và nghiên cứu các tài liệu, bài phát biểu của Chủ tịch Hồ Chí Minh về lí tưởng thanh niên trên Cổng thông tin điện tử Đảng CSVN.\n• [Mã AI: 9.A1.1] Nhận thức rằng AI là công cụ tính toán vô cảm; chỉ có con người mới có lí tưởng sống, khát vọng cống hiến và lòng yêu nước.'
      },
      {
        w: 2,
        t: 'Giáo dục đạo đức - Yêu nước',
        n: 'Bài 1: Sống có lí tưởng (Tiết 2)',
        y: '- Xác định được lí tưởng sống đúng đắn của bản thân: nỗ lực học tập, rèn luyện để trở thành công dân có ích.\n- Phê phán lối sống thờ ơ, buông thả, thực dụng, thiếu lý tưởng và sống không có mục đích của một bộ phận thanh niên.',
        dc: '• [Mã NLS: 2.1.TC2b] Thiết kế bài thuyết trình số hoặc video ngắn chia sẻ về "Lí tưởng sống của tuổi trẻ thời đại 4.0".\n• [Mã AI: 9.D1.1] Thảo luận về việc xây dựng lý tưởng cống hiến tri thức khoa học, công nghệ số để xây dựng đất nước phồn vinh.'
      },
      {
        w: 3,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Khoan dung (Tiết 1)',
        y: '- Hiểu thế nào là khoan dung và nêu được các biểu hiện của lòng khoan dung trong quan hệ giữa người với người.\n- Phân tích được ý nghĩa to lớn của lòng khoan dung giúp hàn gắn xung đột, nuôi dưỡng tâm hồn và gắn kết xã hội.',
        dc: '• [Mã NLS: 1.2.TC2a] Sưu tầm các câu chuyện lịch sử và danh ngôn thế giới về đức tính khoan dung trên các nguồn học liệu số uy tín.\n• [Mã AI: 9.A3.1] Khám phá cách công nghệ AI phân tích ngôn từ thù địch (hate speech) và gợi ý các giải pháp hòa giải bất đồng trực tuyến.'
      },
      {
        w: 4,
        t: 'Giáo dục đạo đức - Nhân ái',
        n: 'Bài 2: Khoan dung (Tiết 2)',
        y: '- Biết tha thứ cho lỗi lầm của người khác khi họ đã biết ăn năn, hối lỗi; tự kiểm điểm và sửa chữa sai sót của bản thân.\n- Phê phán thái độ hẹp hòi, định kiến, thù dai, ích kỷ; phân biệt rõ giữa khoan dung và bao che, dung túng cho cái sai.',
        dc: '• [Mã NLS: 2.2.TC2c] Viết bài cảm nghĩ trên diễn đàn học sinh về chủ đề "Khoan dung với bạn bè để xây dựng tình bạn bền chặt".\n• [Mã AI: 9.D1.1] Thảo luận về văn hóa ứng xử bao dung, văn minh trên mạng xã hội: không "ném đá" hội đồng, không bạo lực mạng.'
      },
      {
        w: 5,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Tích cực tham gia các hoạt động cộng đồng (Tiết 1)',
        y: '- Nêu được khái niệm và các hình thức hoạt động cộng đồng (thiện nguyện, đền ơn đáp nghĩa, bảo vệ môi trường, văn hóa thể thao).\n- Giải thích được ý nghĩa của việc tích cực tham gia hoạt động cộng đồng đối với sự hoàn thiện nhân cách và tiến bộ xã hội.',
        dc: '• [Mã NLS: 1.3.TC2b] Khai thác thông tin về các chiến dịch tình nguyện quốc gia (Mùa hè xanh, Tiếp sức mùa thi) trên Cổng thông tin Đoàn TNCS Hồ Chí Minh.\n• [Mã AI: 9.A3.1] Tìm hiểu cách các tổ chức nhân đạo sử dụng AI để điều phối nguồn lực cứu trợ và kết nối tình nguyện viên hiệu quả.'
      },
      {
        w: 6,
        t: 'Giáo dục đạo đức - Chăm chỉ',
        n: 'Bài 3: Tích cực tham gia các hoạt động cộng đồng (Tiết 2)',
        y: '- Tự giác, nhiệt tình tham gia các hoạt động cộng đồng do nhà trường, Đoàn - Đội và địa phương tổ chức.\n- Vận động bạn bè cùng tham gia; phê phán thái độ ích kỷ, thờ ơ, trốn tránh trách nhiệm với cộng đồng xã hội.',
        dc: '• [Mã NLS: 3.2.TC2a] Lập kế hoạch và thiết kế ấn phẩm số truyền thông kêu gọi quyên góp sách vở cho học sinh vùng khó khăn.\n• [Mã AI: 9.C2.1] Ứng dụng công cụ AI hỗ trợ tạo bài viết truyền thông chạm đến cảm xúc cộng đồng trên các trang mạng xã hội.'
      },
      {
        w: 7,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Khách quan và công bằng (Tiết 1)',
        y: '- Hiểu thế nào là khách quan và công bằng; nêu được các biểu hiện của lối sống khách quan, công bằng trong học tập và đời sống.\n- Phân tích được ý nghĩa của sự khách quan, công bằng giúp tạo dựng sự tôn trọng, niềm tin và trật tự xã hội.',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu các bài viết phân tích về nguyên tắc công bằng tư pháp và minh bạch thông tin trên Cổng thông tin Tòa án Nhân dân Tối cao.\n• [Mã AI: 9.A1.1] Phân tích vấn đề thiên lệch (bias) trong thuật toán AI và nhận thức tầm quan trọng của việc kiểm tra tính khách quan của dữ liệu.'
      },
      {
        w: 8,
        t: 'Giáo dục đạo đức - Trung thực',
        n: 'Bài 4: Khách quan và công bằng (Tiết 2)',
        y: '- Luôn nhìn nhận, đánh giá sự vật, hiện tượng và con người một cách vô tư, đúng sự thật, không thiên vị hay định kiến cá nhân.\n- Dũng cảm đấu tranh chống lại sự bất công, định kiến, gian dối và thói thiên vị, bè phái trong tập thể.',
        dc: '• [Mã NLS: 4.2.TC2b] Thể hiện sự công tâm khi bỏ phiếu bình bầu, nhận xét đánh giá thi đua bạn bè trên các biểu mẫu trực tuyến (Google Forms).\n• [Mã AI: 9.D1.1] Thảo luận về đạo đức AI trong việc ra quyết định tự động: đảm bảo không phân biệt đối xử và bảo vệ quyền con người.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục công dân Lớp 9 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng và thái độ từ Bài 1 đến Bài 4 (Mạch Giáo dục Đạo đức Lớp 9).\n- Đánh giá năng lực tư duy phản biện, kỹ năng phân tích tình huống đạo đức và tính trung thực khi làm bài.',
        dc: '• [Mã NLS: 4.3.TC2b] Thực hiện bài kiểm tra nghiêm túc, tuân thủ kỷ luật phòng thi và bảo mật thông tin tuyệt đối.\n• [Mã AI: 9.A3.1] Tìm hiểu các thuật toán AI hỗ trợ phát hiện gian lận và đánh giá độ tin cậy của bài kiểm tra trực tuyến.'
      },
      {
        w: 10,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ hoà bình (Tiết 1)',
        y: '- Hiểu thế nào là hòa bình và bảo vệ hòa bình; phân biệt được chiến tranh chính nghĩa và chiến tranh phi nghĩa.\n- Giải thích được vì sao hòa bình là khát vọng thiêng liêng của toàn nhân loại; thảm họa diệt vong do chiến tranh gây ra.',
        dc: '• [Mã NLS: 1.1.TC2c] Tìm kiếm tư liệu, hình ảnh và video về hậu quả của chiến tranh và các hoạt động gìn giữ hòa bình của Liên Hợp Quốc.\n• [Mã AI: 9.A1.1] Khám phá ứng dụng AI trong việc phân tích nguy cơ xung đột vũ trang và hỗ trợ cảnh báo sớm các thảm họa nhân đạo.'
      },
      {
        w: 11,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ hoà bình (Tiết 2)',
        y: '- Nêu được đường lối hòa bình, hữu nghị, hợp tác và phát triển của Đảng và Nhà nước Việt Nam trong hội nhập quốc tế.\n- Tự hào về truyền thống yêu chuộng hòa bình của dân tộc Việt Nam và vai trò tích cực của Việt Nam trên trường quốc tế.',
        dc: '• [Mã NLS: 1.2.TC2b] Tra cứu thông tin về lực lượng gìn giữ hòa bình của Quân đội nhân dân Việt Nam tham gia phái bộ LHQ trên báo Quân đội nhân dân.\n• [Mã AI: 9.C1.1] Tìm hiểu các mô hình AI ngoại giao số hỗ trợ phân tích xu hướng quan hệ quốc tế và hợp tác đa phương.'
      },
      {
        w: 12,
        t: 'Giáo dục đạo đức - Trách nhiệm',
        n: 'Bài 5: Bảo vệ hoà bình (Tiết 3)',
        y: '- Tham gia các hoạt động vì hòa bình ở trường và địa phương; biết ứng xử hòa nhã, giải quyết các bất đồng bằng đối thoại.\n- Phê phán các hành vi gây chia rẽ, kích động chiến tranh, bạo lực, khủng bố và thù hằn sắc tộc.',
        dc: '• [Mã NLS: 3.2.TC2a] Thiết kế thông điệp số "Việt Nam - Điểm đến của hòa bình và hữu nghị" bằng ngôn ngữ hình ảnh sinh động.\n• [Mã AI: 9.D1.1] Thảo luận về nguy cơ vũ khí tự hành sát thương (Lethal Autonomous Weapons - LAWS) và kêu gọi kiểm soát AI phục vụ hòa bình.'
      },
      {
        w: 13,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Quản lí thời gian hiệu quả (Tiết 1)',
        y: '- Hiểu thế nào là quản lý thời gian hiệu quả và sự cần thiết phải biết quản lý thời gian đối với học sinh Lớp 9 chuẩn bị thi chuyển cấp.\n- Nhận diện các "kẻ cắp thời gian" phổ biến (nghiện mạng xã hội, chơi game, chần chừ, làm việc không kế hoạch).',
        dc: '• [Mã NLS: 1.3.TC2a] Sử dụng ứng dụng quản lý thời gian trên điện thoại (Google Calendar, Notion) để phân bổ lịch học tập và nghỉ ngơi.\n• [Mã AI: 9.A3.1] Khám phá cách các thuật toán AI phân tích thói quen sử dụng thiết bị để cảnh báo thời gian sử dụng màn hình (screen time).'
      },
      {
        w: 14,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 6: Quản lí thời gian hiệu quả (Tiết 2)',
        y: '- Nắm vững và thực hành thành thạo ma trận Eisenhower (chia việc theo 4 mức độ: Khẩn cấp - Quan trọng).\n- Lập được kế hoạch thời gian biểu khoa học cho tuần và tháng; rèn luyện thói quen đúng giờ và tập trung cao độ.',
        dc: '• [Mã NLS: 3.2.TC2a] Ứng dụng ma trận Eisenhower trên bảng tính Excel để sắp xếp độ ưu tiên các môn học thi vào lớp 10.\n• [Mã AI: 9.D1.1] Trải nghiệm trợ lý AI thông minh tự động tối ưu hóa lịch trình cá nhân dựa trên thói quen làm việc hiệu quả.'
      },
      {
        w: 15,
        t: 'Ôn tập học kỳ 1',
        n: 'Ôn tập tổng hợp kiến thức môn Giáo dục công dân Lớp 9 Học kỳ 1 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức đạo đức và kỹ năng sống từ Bài 1 đến Bài 6 của chương trình GDCD Lớp 9.\n- Rèn luyện kỹ năng phân tích tình huống thực tiễn, năng lực phản biện và kỹ năng làm bài thi học kỳ.',
        dc: '• [Mã NLS: 1.3.TC2b] Khai thác kho học liệu số và ngân hàng đề thi trực tuyến của nhà trường để tự ôn tập.\n• [Mã AI: 9.A1.1] Sử dụng AI để tổng hợp các câu hỏi trắc nghiệm và tự luận phân hóa cao giúp ôn tập hiệu quả.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Giáo dục công dân Lớp 9 (1 tiết)',
        y: '- Đánh giá tổng hợp kết quả học tập môn GDCD Lớp 9 trong toàn bộ Học kỳ 1 theo chuẩn CT GDPT 2018.\n- Đánh giá năng lực tư duy pháp lý, chuẩn mực đạo đức và kỹ năng sống toàn diện của học sinh cuối cấp.',
        dc: '• [Mã NLS: 4.4.TC2a] Thực hiện bài kiểm tra nghiêm túc, thể hiện phẩm chất trung thực và kỷ luật công dân.\n• [Mã AI: 9.A3.1] Tìm hiểu quy trình ứng dụng công nghệ trong việc chấm thi tự động và thống kê phổ điểm học kỳ.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức GDCD 9 HK1 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK1, phân tích sâu các lỗi sai về nhận thức lí tưởng, hòa bình và quản lý thời gian.\n- Củng cố phương pháp học tập tư duy phản biện và định hướng mục tiêu học tập cho Học kỳ 2.',
        dc: '• [Mã NLS: 1.1.TC2b] Cập nhật kết quả sửa bài và rút kinh nghiệm cá nhân vào sổ tay học tập trực tuyến.\n• [Mã AI: 9.D1.1] Khám phá công cụ AI gợi ý kế hoạch cá nhân hóa để cải thiện các năng lực còn hạn chế.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 môn Giáo dục công dân Lớp 9 (1 tiết)',
        y: '- Sơ kết, đánh giá mức độ đạt được về phẩm chất và năng lực của học sinh Lớp 9 trong HK1.\n- Tuyên dương các học sinh gương mẫu và phát động phong trào thi đua bứt phá trong học kỳ cuối cùng của cấp THCS.',
        dc: '• [Mã NLS: 2.4.TC2a] Trình chiếu báo cáo tổng kết HK1 dạng video clip đa phương tiện trước toàn lớp.\n• [Mã AI: 9.A1.1] Thảo luận về việc chuẩn bị tâm thế vững vàng cho kỳ thi tuyển sinh vào Lớp 10 THPT.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Thích ứng với thay đổi (Tiết 1)',
        y: '- Hiểu thế nào là thích ứng với thay đổi và nhận thức được rằng thay đổi là quy luật tất yếu của cuộc sống.\n- Nhận diện các thay đổi lớn của bản thân khi chuẩn bị bước vào giai đoạn chuyển cấp từ THCS lên THPT.',
        dc: '• [Mã NLS: 1.1.TC2d] Tra cứu thông tin, tìm hiểu môi trường học tập và các mô hình trường THPT trên cổng thông tin Sở GD&ĐT.\n• [Mã AI: 9.A3.1] Khám phá tốc độ phát triển nhanh chóng của công nghệ AI và yêu cầu con người phải liên tục thích ứng, học tập suốt đời.'
      },
      {
        w: 20,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Thích ứng với thay đổi (Tiết 2)',
        y: '- Phân tích được các yếu tố giúp con người thích ứng tốt (tâm thế cởi mở, tư duy tích cực, kiên trì, linh hoạt giải quyết vấn đề).\n- Hiểu được hậu quả của thái độ bảo thủ, sợ thay đổi, thụ động và thu mình trước các biến động của môi trường.',
        dc: '• [Mã NLS: 1.2.TC2a] Sưu tầm các tấm gương vượt qua biến cố và thích ứng thành công trong cuộc sống trên báo chí uy tín.\n• [Mã AI: 9.C1.1] Tìm hiểu khái niệm "Trí tuệ thích ứng" (AQ - Adversity Quotient) và sự hỗ trợ của các công cụ AI trong phân tích tình huống đổi mới.'
      },
      {
        w: 21,
        t: 'Giáo dục kĩ năng sống',
        n: 'Bài 7: Thích ứng với thay đổi (Tiết 3)',
        y: '- Thực hành các kỹ năng thích ứng cụ thể: điều chỉnh cảm xúc, rèn luyện kỹ năng mới, chủ động hòa nhập môi trường mới.\n- Tự tin, sẵn sàng đón nhận và làm chủ những thay đổi trong học tập và cuộc sống tương lai.',
        dc: '• [Mã NLS: 2.5.TC2b] Tham gia diễn đàn trực tuyến "Tâm thế vững vàng - Tự tin bước vào cánh cổng trường THPT".\n• [Mã AI: 9.D1.1] Thảo luận về kỹ năng thích nghi với môi trường làm việc số và tương tác cộng tác cùng các trợ lý AI thông minh.'
      },
      {
        w: 22,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Tiêu dùng thông minh (Tiết 1)',
        y: '- Hiểu thế nào là tiêu dùng thông minh và các đặc trưng của người tiêu dùng thông minh trong nền kinh tế thị trường.\n- Phân tích được ý nghĩa của tiêu dùng thông minh đối với việc bảo vệ tài chính cá nhân và thúc đẩy kinh tế bền vững.',
        dc: '• [Mã NLS: 1.2.TC2b] So sánh giá cả, chất lượng và đọc đánh giá thực tế (review) của sản phẩm trên các sàn thương mại điện tử uy tín.\n• [Mã AI: 9.A3.1] Khám phá cách các thuật toán AI phân tích dữ liệu hành vi người tiêu dùng để gợi ý sản phẩm và nhận thức bẫy tâm lý tiêu dùng.'
      },
      {
        w: 23,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Tiêu dùng thông minh (Tiết 2)',
        y: '- Nắm vững các tiêu chí lựa chọn hàng hóa an toàn, nguồn gốc rõ ràng, thân thiện với môi trường (tiêu dùng xanh).\n- Nhận biết các chiêu trò lừa đảo mua sắm online, hàng giả, hàng nhái, đa cấp biến tướng và cách phòng tránh.',
        dc: '• [Mã NLS: 1.3.TC2a] Sử dụng các ứng dụng quét mã vạch (Barcode, QR code) để kiểm tra nguồn gốc xuất xứ và chứng nhận chất lượng sản phẩm.\n• [Mã AI: 9.C2.1] Tìm hiểu các công cụ AI phát hiện website bán hàng lừa đảo và tài khoản giả mạo trên mạng xã hội.'
      },
      {
        w: 24,
        t: 'Giáo dục kinh tế',
        n: 'Bài 8: Tiêu dùng thông minh (Tiết 3)',
        y: '- Thực hành thói quen tiêu dùng thông minh: lập danh sách trước khi mua, chỉ mua thứ mình cần, nói không với hàng giả.\n- Nhận biết được các quyền cơ bản của người tiêu dùng theo Luật Bảo vệ quyền lợi người tiêu dùng và cách khiếu nại khi bị xâm hại.',
        dc: '• [Mã NLS: 2.5.TC2b] Thiết kế cẩm nang số "Bí quyết tiêu dùng thông minh và an toàn trên không gian mạng dành cho học sinh".\n• [Mã AI: 9.D1.1] Thảo luận về việc bảo vệ quyền riêng tư dữ liệu cá nhân khi thanh toán trực tuyến qua ví điện tử và ngân hàng số.'
      },
      {
        w: 25,
        t: 'Ôn tập giữa HK2',
        n: 'Ôn tập kiến thức môn Giáo dục công dân Lớp 9 chuẩn bị kiểm tra giữa HK2 (1 tiết)',
        y: '- Củng cố toàn diện kiến thức về kỹ năng thích ứng với thay đổi (Bài 7) và kỹ năng tiêu dùng thông minh (Bài 8).\n- Rèn luyện kỹ năng phân tích tình huống kinh tế - xã hội và kỹ năng làm bài kiểm tra định kỳ.',
        dc: '• [Mã NLS: 1.3.TC2b] Khai thác ngân hàng câu hỏi ôn tập trực tuyến trên hệ thống quản lý học tập (LMS) của trường.\n• [Mã AI: 9.A1.1] Sử dụng trợ lý AI hỗ trợ giải đáp các thắc mắc về kỹ năng tiêu dùng thông minh.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục công dân Lớp 9 (1 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng từ Bài 7 đến Bài 8 (Kĩ năng sống và Giáo dục Kinh tế Lớp 9).\n- Đánh giá năng lực giải quyết vấn đề, tư duy kinh tế và kỹ năng sống; rèn luyện tính trung thực.',
        dc: '• [Mã NLS: 4.1.TC2b] Chấp hành nghiêm túc quy chế thi cử, thể hiện tính trung thực số và kỷ luật phòng thi.\n• [Mã AI: 9.A3.1] Tìm hiểu cách AI hỗ trợ phân tích kết quả học tập giữa kỳ và xác định các nội dung cần bổ trợ.'
      },
      {
        w: 27,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Vi phạm pháp luật và trách nhiệm pháp lí (Tiết 1)',
        y: '- Hiểu thế nào là vi phạm pháp luật và các dấu hiệu cơ bản của vi phạm pháp luật (hành vi, trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lý thực hiện).\n- Phân biệt được 4 loại vi phạm pháp luật: hình sự, dân sự, hành chính và kỷ luật.',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu Bộ luật Hình sự 2015, Bộ luật Dân sự 2015 và Luật Xử lý vi phạm hành chính trên Cổng thông tin Chính phủ.\n• [Mã AI: 9.A1.1] Phân tích tình huống pháp lý: việc sử dụng AI mạo danh người khác hoặc tấn công mạng bị xử lý hình sự theo điều luật nào.'
      },
      {
        w: 28,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Vi phạm pháp luật và trách nhiệm pháp lí (Tiết 2)',
        y: '- Nêu được khái niệm và ý nghĩa của trách nhiệm pháp lý đối với việc răn đe, giáo dục và duy trì trật tự xã hội.\n- Phân biệt được 4 loại trách nhiệm pháp lý tương ứng: hình sự, dân sự, hành chính và kỷ luật.',
        dc: '• [Mã NLS: 1.2.TC2b] Tra cứu các bản án hình sự sơ thẩm công khai trên Cổng thông tin Tòa án Nhân dân Tối cao để tìm hiểu thực tế xét xử.\n• [Mã AI: 9.C1.1] Tìm hiểu ứng dụng AI trong hỗ trợ nghiên cứu hồ sơ án lệ và phân loại dữ liệu pháp lý của các cơ quan tư pháp.'
      },
      {
        w: 29,
        t: 'Giáo dục pháp luật',
        n: 'Bài 9: Vi phạm pháp luật và trách nhiệm pháp lí (Tiết 3)',
        y: '- Nắm vững độ tuổi chịu trách nhiệm hình sự và hành chính của người chưa thành niên theo quy định pháp luật Việt Nam.\n- Có ý thức thượng tôn pháp luật; nghiêm túc tuân thủ pháp luật và dũng cảm đấu tranh ngăn chặn các hành vi vi phạm pháp luật.',
        dc: '• [Mã NLS: 2.1.TC2b] Tham gia tọa đàm trực tuyến "Ý thức thượng tôn pháp luật của học sinh THCS trong kỷ nguyên số".\n• [Mã AI: 9.D1.1] Thảo luận về trách nhiệm pháp lý đối với các hành vi phát tán tin giả, bôi nhọ danh dự người khác trên không gian mạng sử dụng AI.'
      },
      {
        w: 30,
        t: 'Giáo dục pháp luật',
        n: 'Bài 10: Quyền tự do kinh doanh và nghĩa vụ nộp thuế (1 tiết)',
        y: '- Nêu được quyền tự do kinh doanh theo quy định của pháp luật và nghĩa vụ của người kinh doanh (kinh doanh đúng ngành nghề, bảo đảm chất lượng, bảo vệ môi trường).\n- Hiểu thế nào là thuế và nghĩa vụ nộp thuế của công dân; vai trò to lớn của tiền thuế đối với việc phát triển đất nước.',
        dc: '• [Mã NLS: 1.1.TC2c] Tra cứu Luật Doanh nghiệp, Luật Quản lý thuế và tìm hiểu ứng dụng nộp thuế điện tử eTax Mobile của Tổng cục Thuế.\n• [Mã AI: 9.C2.1] Khám phá cách cơ quan thuế ứng dụng AI phân tích dữ liệu lớn để chống thất thu thuế trong thương mại điện tử và kinh doanh số.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Giáo dục công dân Lớp 9 (1 tiết)',
        y: '- Đánh giá tổng kết mức độ hoàn thành toàn bộ Chương trình GDPT 2018 môn GDCD cấp THCS.\n- Đánh giá năng lực tư duy pháp lý, trách nhiệm công dân và phẩm chất đạo đức toàn diện của học sinh tốt nghiệp THCS.',
        dc: '• [Mã NLS: 4.1.TC2c] Thực hiện nghiêm túc quy chế thi, giữ gìn phẩm chất trung thực và danh dự người học sinh.\n• [Mã AI: 9.A3.1] Tìm hiểu quy trình số hóa hồ sơ thi và chấm bài thi tự động bằng công nghệ AI.'
      },
      {
        w: 32,
        t: 'Chữa bài & Ôn tập',
        n: 'Chữa bài kiểm tra cuối HK2 & Ôn tập củng cố kiến thức HK2 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối HK2; giải đáp cặn kẽ các tình huống pháp lý về vi phạm pháp luật và nghĩa vụ nộp thuế.\n- Tổng kết quá trình tu dưỡng đạo đức và chấp hành pháp luật của học sinh trong suốt 4 năm học THCS.',
        dc: '• [Mã NLS: 1.1.TC2b] Lưu trữ kết quả và xem xét lại hồ sơ học tập số cá nhân trên hệ thống trường học điện tử.\n• [Mã AI: 9.D1.1] Khám phá công cụ AI gợi ý các kỹ năng hội nhập cần thiết cho học sinh chuẩn bị bước vào cấp THPT.'
      },
      {
        w: 33,
        t: 'Dự án GDCD',
        n: 'Dự án GDCD: "Phiên tòa Giả định Tuyên truyền Ý thức Thượng tôn Pháp luật và Trách nhiệm Công dân" (1 tiết)',
        y: '- Thực hành đóng vai trong kịch bản "Phiên tòa Giả định" xét xử vụ án vi phạm pháp luật của lứa tuổi thanh thiếu niên.\n- Khắc sâu bài học về hậu quả của hành vi vi phạm pháp luật; lan tỏa ý thức sống và làm việc theo Hiến pháp và pháp luật.',
        dc: '• [Mã NLS: 3.2.TC2a] Sử dụng các công cụ quay phim, biên tập video số hoàn thiện tác phẩm truyền thông phiên tòa giả định của lớp.\n• [Mã AI: 9.C2.1] Ứng dụng AI tạo phụ đề tự động và thiết kế poster quảng bá phiên tòa giả định trên fanpage nhà trường.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài 29: Ôn tập toàn diện chuẩn bị tổng kết năm học môn GDCD 9 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức môn GDCD Lớp 9 và tổng hợp các mạch kiến thức cốt lõi của toàn cấp THCS (Lớp 6 đến Lớp 9).\n- Khắc sâu lòng yêu nước, tinh thần thượng tôn pháp luật và trách nhiệm của người công dân trẻ tuổi đối với tương lai đất nước.',
        dc: '• [Mã NLS: 2.1.TC2b] Hệ thống hóa toàn bộ chương trình GDCD cấp THCS bằng sơ đồ tư duy đa chiều trên phần mềm số.\n• [Mã AI: 9.A1.1] Thảo luận về việc vận dụng tư duy pháp lý và đạo đức công dân làm kim chỉ nam trong cuộc sống.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn GDCD Lớp 9 cả năm (1 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập và rèn luyện môn GDCD Lớp 9 theo Thông tư số 22/2021/TT-BGDĐT.\n- Khen thưởng học sinh xuất sắc; dặn dò hành trang đạo đức, kỹ năng sống và tinh thần trách nhiệm bước vào cấp THPT.',
        dc: '• [Mã NLS: 5.1.TC2b] Hoàn thiện và xuất hồ sơ học tập số cá nhân (E-portfolio) môn GDCD toàn cấp THCS.\n• [Mã AI: 9.D1.1] Đánh giá tổng thể vai trò của AI và công nghệ số trong việc định hình công dân toàn cầu thời đại mới.'
      }
    ];

    grade9Lessons.forEach(item => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Bộ luật Hình sự 2015, Bộ luật Dân sự 2015, Luật Quản lý thuế, Luật Bảo vệ người tiêu dùng, máy chiếu, video tình huống',
        location: 'Phòng học / Lớp học',
        dc: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Phiên tòa Giả định' : ''
      });
    });

    return list;
  }

  return [];
}
