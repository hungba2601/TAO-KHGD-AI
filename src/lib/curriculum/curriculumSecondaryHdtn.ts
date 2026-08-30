import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Hoạt động trải nghiệm, hướng nghiệp Lớp 6, 7, 8, 9 (105 tiết/năm = 3 tiết/tuần x 35 tuần)
 * 100% chuẩn SGK Kết nối tri thức với cuộc sống & file tổng hợp tong-hop-chuong-trinh-lop-6-7-8-9.md
 * Các tuần kiểm tra định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (3 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (3 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (3 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (3 tiết)
 * - Tuần 35: Ngày hội Tổng kết Hoạt động trải nghiệm cả năm (3 tiết)
 */
export function getHdtnSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Khám phá trường THCS và xây dựng nếp sống văn minh học đường (3 tiết)',
        y: '- Làm quen với môi trường học tập THCS, thầy cô giáo và bạn bè mới.\n- Xác định được những nội quy, nền nếp cần tuân thủ và xây dựng không gian học tập thân thiện.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Thiết lập mối quan hệ thân thiện với thầy cô và bạn bè (3 tiết)',
        y: '- Rèn luyện kỹ năng chào hỏi, lắng nghe tích cực và chủ động kết bạn mới.\n- Biết cách chia sẻ khó khăn, hợp tác trong các hoạt động học tập và sinh hoạt tập thể.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Xây dựng nội quy lớp học và giữ gìn cảnh quan trường lớp xanh sạch đẹp (3 tiết)',
        y: '- Thảo luận và thống nhất cam kết thi đua, nội quy tự quản của lớp.\n- Tích cực tham gia chăm sóc bồn hoa cây cảnh, bảo vệ tài sản lớp học và giữ gìn vệ sinh chung.'
      },
      {
        w: 4,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Tự hào truyền thống nhà trường và ngày hội Chào năm học mới (3 tiết)',
        y: '- Tìm hiểu lịch sử hình thành, thành tích vẻ vang của nhà trường và các tấm gương thầy trò tiêu biểu.\n- Bồi dưỡng niềm tự hào, ý thức giữ gìn và phát huy danh dự người học sinh.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Nhận diện sự thay đổi về vóc dáng và tâm sinh lý lứa tuổi (3 tiết)',
        y: '- Nhận biết được những thay đổi tự nhiên về chiều cao, cân nặng, giọng nói ở lứa tuổi dậy thì.\n- Có thái độ đúng đắn, tự tin chấp nhận sự thay đổi cơ thể và chăm sóc vệ sinh cá nhân đúng cách.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Khám phá sở thích, khả năng và nét tính cách riêng của bản thân (3 tiết)',
        y: '- Chỉ ra được những sở thích, năng khiếu (âm nhạc, hội họa, thể thao, tính toán) và nét tính cách nổi bật.\n- Tự đánh giá điểm mạnh cần phát huy và điểm hạn chế cần khắc phục.'
      },
      {
        w: 7,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Rèn luyện tính tự lập, tự giác trong học tập và sinh hoạt hàng ngày (3 tiết)',
        y: '- Xây dựng thời gian biểu cá nhân hợp lý, tự giác chuẩn bị sách vở, đồ dùng học tập trước khi đến lớp.\n- Tự giác làm việc nhà và chăm sóc bản thân không đợi nhắc nhở.'
      },
      {
        w: 8,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Kĩ năng ứng phó với căng thẳng và điều chỉnh cảm xúc tích cực (3 tiết)',
        y: '- Nhận diện các nguyên nhân gây căng thẳng (áp lực thi cử, bất đồng bạn bè); thực hành các kỹ thuật thư giãn (thở sâu, nghe nhạc, chia sẻ).\n- Hình thành thói quen tư duy lạc quan.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 6 (3 tiết)',
        y: '- Đánh giá mức độ tham gia các hoạt động chủ đề 1 và 2; khả năng tự quản, tinh thần hợp tác nhóm và ý thức kỷ luật.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Kĩ năng chăm sóc sức khoẻ thể chất và an toàn cho bản thân (3 tiết)',
        y: '- Nhận thức tầm quan trọng của rèn luyện thể dục thể thao, dinh dưỡng hợp lý và ngủ đủ giấc.\n- Nhận biết các nguy cơ mất an toàn tại trường học, gia đình và ngoài đường.'
      },
      {
        w: 11,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Phòng tránh tai nạn thương tích, đuối nước và nguy cơ xâm hại (3 tiết)',
        y: '- Thực hành quy tắc "5 ngón tay" phòng chống xâm hại tình dục; kỹ năng sơ cứu vết thương nhẹ và xử lý khi gặp đuối nước, hỏa hoạn.'
      },
      {
        w: 12,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Kĩ năng chi tiêu hợp lý và quản lý tiền tiêu vặt cá nhân (3 tiết)',
        y: '- Phân biệt nhu cầu thiết yếu ("cần") và mong muốn tức thời ("muốn"); lập kế hoạch tiết kiệm tiền tiêu vặt để phục vụ học tập.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Rèn luyện sự tự tin khi nói trước đám đông và thể hiện năng khiếu (3 tiết)',
        y: '- Vượt qua sự e ngại, rụt rè để tự tin giới thiệu bản thân, thuyết trình ý tưởng trước tập thể lớp.'
      },
      {
        w: 14,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Kĩ năng giải quyết bất đồng và mâu thuẫn trong tình bạn văn minh (3 tiết)',
        y: '- Biết lắng nghe quan điểm của bạn, không dùng bạo lực lời nói hay hành động; tìm kiếm tiếng nói chung để giữ gìn tình bạn đẹp.'
      },
      {
        w: 15,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Thiết lập mục tiêu học tập và rèn luyện kỹ năng tư duy phản biện (3 tiết)',
        y: '- Xác định mục tiêu điểm số các môn học cuối kỳ, lập kế hoạch hành động cụ thể và kiên trì theo đuổi mục tiêu.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp 6 (3 tiết)',
        y: '- Đánh giá tổng hợp mức độ tham gia và năng lực tự chủ, thích ứng của học sinh trong toàn bộ HK1.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập, báo cáo hồ sơ trải nghiệm cá nhân Học kỳ 1 Lớp 6 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; tổng kết các sản phẩm hoạt động trải nghiệm, sổ tay rèn luyện cá nhân trong Học kỳ 1.\n- Chia sẻ những tiến bộ nổi bật về tính tự lập, kỹ năng sống và sự tự tin.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 Hoạt động trải nghiệm, hướng nghiệp Lớp 6 (3 tiết)',
        y: '- Đánh giá tổng kết các hoạt động trải nghiệm trong Học kỳ 1; tuyên dương học sinh tích cực và định hướng HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Thể hiện tình cảm, lòng biết ơn và sự quan tâm tới cha mẹ, người thân (3 tiết)',
        y: '- Biết nói lời cảm ơn, xin lỗi chân thành; thể hiện sự quan tâm chăm sóc ông bà, cha mẹ bằng hành động cụ thể.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Kĩ năng lắng nghe và ứng xử để người thân hài lòng (3 tiết)',
        y: '- Biết lắng nghe lời khuyên bảo của người lớn với thái độ lễ phép, cầu thị.\n- Ứng xử hòa nhã, nhường nhịn em nhỏ và gắn kết các thành viên trong gia đình.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Tham gia công việc gia đình và chia sẻ trách nhiệm chăm sóc nhà cửa (3 tiết)',
        y: '- Tự giác thực hiện các công việc nhà: quét nhà, rửa bát, nấu cơm, giặt quần áo, chăm sóc cây cảnh.'
      },
      {
        w: 22,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Tổ chức ngày lễ kỉ niệm ấm áp và giải quyết bất đồng trong gia đình (3 tiết)',
        y: '- Lên ý tưởng và cùng người thân chuẩn bị bữa cơm sum họp, quà tặng handmade trong các dịp lễ tết, sinh nhật.\n- Biết kiềm chế và tìm cách trao đổi hòa bình khi có bất đồng ý kiến.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Giao tiếp văn minh nơi công cộng và xây dựng tình làng nghĩa xóm (3 tiết)',
        y: '- Thực hiện xếp hàng, nói năng nhẹ nhàng, nhường ghế cho người già/phụ nữ trên xe buýt.\n- Chào hỏi thân thiện với bà con lối xóm và giữ gìn trật tự công cộng.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Tham gia các hoạt động thiện nguyện và sẻ chia với hoàn cảnh khó khăn (3 tiết)',
        y: '- Tích cực tham gia phong trào "Nuôi heo đất giúp bạn nghèo", quyên góp sách vở, quần áo ủng hộ vùng lũ lụt.\n- Nuôi dưỡng lòng trắc ẩn, sự đồng cảm và tinh thần tương thân tương ái.'
      },
      {
        w: 25,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Tuyên truyền phòng chống bạo lực học đường và xây dựng môi trường an toàn (3 tiết)',
        y: '- Nhận diện các hình thức bạo lực (thể xác, lời nói, tinh thần, trên mạng); biết cách tìm kiếm sự hỗ trợ khi bị bắt nạt.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 6 (3 tiết)',
        y: '- Đánh giá việc tham gia các hoạt động gia đình, phục vụ cộng đồng từ Tuần 19 đến 25.\n- Khích lệ tinh thần trách nhiệm và lòng nhân ái của học sinh.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Khám phá vẻ đẹp cảnh quan quê hương và danh lam thắng cảnh (3 tiết)',
        y: '- Sưu tầm hình ảnh, viết bài giới thiệu về vẻ đẹp sông núi, di tích lịch sử và danh lam thắng cảnh quê hương.'
      },
      {
        w: 28,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Thực hiện các hành động bảo vệ môi trường, giảm thiểu rác thải nhựa (3 tiết)',
        y: '- Thực hành phân loại rác thải tại nguồn (vô cơ, hữu cơ, tái chế), hạn chế túi nilon và đồ nhựa dùng một lần.'
      },
      {
        w: 29,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Tuyên truyền phòng chống thiên tai và thích ứng với biến đổi khí hậu (3 tiết)',
        y: '- Nắm vững kỹ năng an toàn khi có sấm sét, bão lũ, lốc xoáy và tiết kiệm điện, nước sinh hoạt hàng ngày.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
        n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Tìm hiểu các nghề truyền thống và nghề hiện đại tại địa phương (3 tiết)',
        y: '- Kể tên được các nghề thủ công truyền thống (làm gốm, đan lát, dệt chiếu...) và các nghề dịch vụ hiện đại quanh em.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 6 (3 tiết)',
        y: '- Đánh giá tổng hợp sự trưởng thành về phẩm chất, năng lực và kỹ năng sống của học sinh trong cả năm học Lớp 6.'
      },
      {
        w: 32,
        t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
        n: 'Chữa bài kiểm tra cuối HK2 & Nhận diện hứng thú nghề nghiệp, đối chiếu năng lực cá nhân (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; bày tỏ ước mơ nghề nghiệp tương lai và nhận ra những môn học thế mạnh hỗ trợ cho ước mơ đó.'
      },
      {
        w: 33,
        t: 'Dự án / Ngày hội Trải nghiệm',
        n: 'Ngày hội Trải nghiệm & Hướng nghiệp sáng tạo Lớp 6: Báo cáo sản phẩm và kế hoạch tương lai (3 tiết)',
        y: '- Trưng bày các sản phẩm sáng tạo, sổ tay trải nghiệm và chia sẻ kế hoạch phát triển bản thân.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Tổng kết hồ sơ trải nghiệm cả năm học môn Hoạt động trải nghiệm, hướng nghiệp 6 (3 tiết)',
        y: '- Hoàn thiện hồ sơ minh chứng trải nghiệm cả năm học; tự đánh giá sự tiến bộ của bản thân qua 9 chủ đề.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Ngày hội Tổng kết Hoạt động trải nghiệm cả năm & Tuyên dương học sinh Lớp 6 (3 tiết)',
        y: '- Tổ chức Ngày hội báo cáo sản phẩm trải nghiệm, trưng bày triển lãm và tuyên dương học sinh tiêu biểu.'
      }
    ];

    grade6Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Máy chiếu, video tình huống trải nghiệm, phiếu khảo sát bản thân, bảng phụ nhóm, cẩm nang hướng nghiệp',
        location: 'Lớp học / Hội trường / Sân trường',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Tự hào và phát huy truyền thống Đội TNTP và nhà trường (3 tiết)',
        y: '- Tìm hiểu và tham gia tích cực các phong trào thi đua của Đội Thiếu niên Tiền phong Hồ Chí Minh.\n- Thể hiện sự tôn sư trọng đạo và lòng tự hào về mái trường thân yêu.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Rèn luyện nền nếp học tập và văn hóa ứng xử trong nhà trường (3 tiết)',
        y: '- Thực hiện nghiêm túc nội quy trang phục, tác phong và phát ngôn chuẩn mực với thầy cô, bạn bè.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Xây dựng tinh thần đoàn kết, giúp đỡ bạn bè cùng tiến bộ (3 tiết)',
        y: '- Thành lập các đôi bạn cùng tiến, nhóm học tập tương trợ; biết chia sẻ phương pháp học tập hiệu quả.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Nhận diện điểm mạnh, điểm hạn chế và sự tự tin của bản thân (3 tiết)',
        y: '- Phân tích sâu sắc thế mạnh và mặt hạn chế trong học tập, giao tiếp; xây dựng kế hoạch khắc phục điểm yếu.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Khám phá khả năng kiểm soát cảm xúc và làm chủ bản thân (3 tiết)',
        y: '- Nhận diện các yếu tố kích hoạt cảm xúc tiêu cực; thực hành kỹ năng kiềm chế cơn giận và bình tĩnh giải quyết vấn đề.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Nhận diện giá trị cá nhân và tôn trọng sự khác biệt của người khác (3 tiết)',
        y: '- Nhận ra giá trị của sự trung thực, lòng tự trọng và tôn trọng sự đa dạng về tính cách, hoàn cảnh của người khác.'
      },
      {
        w: 7,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Rèn luyện tư duy phản biện và khả năng giải quyết vấn đề (3 tiết)',
        y: '- Biết đặt câu hỏi chất vấn trước thông tin chưa rõ ràng; tìm kiếm nhiều giải pháp cho một tình huống thực tiễn.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Sống có trách nhiệm và thực hiện lời hứa (3 tiết)',
        y: '- Thể hiện tinh thần dám nhận lỗi và sửa đổi khi mắc khuyết điểm; luôn giữ chữ tín trong các cam kết cá nhân.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 7 (3 tiết)',
        y: '- Đánh giá kết quả rèn luyện chủ đề Nhà trường, Khám phá bản thân và Trách nhiệm cá nhân Lớp 7.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Kĩ năng từ chối trước những cám dỗ và tình huống tiêu cực (3 tiết)',
        y: '- Thực hành kỹ năng từ chối dứt khoát trước lời rủ rê trốn học, chơi game quá độ, thuốc lá điện tử hoặc bạo lực.'
      },
      {
        w: 11,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Quản lý cảm xúc và vượt qua căng thẳng, áp lực học đường (3 tiết)',
        y: '- Vận dụng các bài tập thư giãn tâm lý, sắp xếp khối lượng bài vở hợp lí và cân bằng cuộc sống.'
      },
      {
        w: 12,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Xây dựng thói quen chăm sóc sức khỏe và lối sống lành mạnh (3 tiết)',
        y: '- Duy trì thói quen vệ sinh thân thể, dinh dưỡng khoa học, tập luyện thể thao đều đặn nâng cao sức đề kháng.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Quản lý tài chính cá nhân và chi tiêu thông minh (3 tiết)',
        y: '- Lập sổ theo dõi chi tiêu cá nhân; biết cách so sánh giá cả, cân nhắc tính cần thiết trước khi mua sắm.'
      },
      {
        w: 14,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Kĩ năng giao tiếp và ứng xử có văn hóa trên mạng xã hội (3 tiết)',
        y: '- Không bình luận xúc phạm, không lan truyền tin giả, tôn trọng bản quyền và bảo vệ quyền riêng tư trực tuyến.'
      },
      {
        w: 15,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Rèn luyện tính tự lập và kiên trì theo đuổi mục tiêu (3 tiết)',
        y: '- Tự giác chuẩn bị bài vở, đồ dùng hàng ngày; kiên trì rèn luyện một kỹ năng mới (chơi nhạc cụ, học ngoại ngữ).'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp 7 (3 tiết)',
        y: '- Đánh giá tổng hợp sự trưởng thành về phẩm chất, năng lực của học sinh trong Học kỳ 1.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập, báo cáo hồ sơ năng lực trải nghiệm học sinh Học kỳ 1 Lớp 7 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; tổng kết hồ sơ trải nghiệm, trình bày các dự án học tập nhỏ đã thực hiện trong Học kỳ 1.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 Hoạt động trải nghiệm, hướng nghiệp Lớp 7 (3 tiết)',
        y: '- Đánh giá tổng kết các hoạt động trải nghiệm trong Học kỳ 1; tuyên dương học sinh tích cực và định hướng HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Thể hiện sự tôn trọng, thấu hiểu và gắn kết tình cảm gia đình (3 tiết)',
        y: '- Thấu hiểu sự vất vả, hi sinh của cha mẹ; chủ động tâm sự, chia sẻ niềm vui nỗi buồn với người thân.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Kĩ năng thuyết phục và giải quyết mâu thuẫn trong gia đình hòa nhã (3 tiết)',
        y: '- Biết trình bày nguyện vọng cá nhân một cách lễ độ, thuyết phục; hòa giải xích mích giữa anh chị em.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Chủ động làm việc nhà và cùng gia đình tiết kiệm chi tiêu (3 tiết)',
        y: '- Tham gia nấu ăn, dọn dẹp, bảo quản đồ dùng gia đình; cùng gia đình thực hiện kế hoạch tiết kiệm điện nước.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Giao tiếp lịch sự nơi công cộng và tôn trọng sự đa dạng văn hóa (3 tiết)',
        y: '- Thực hiện nếp sống văn minh đô thị, tôn trọng phong tục tập quán và sự đa dạng văn hóa vùng miền.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Lập và thực hiện kế hoạch hoạt động thiện nguyện tại địa phương (3 tiết)',
        y: '- Lập kế hoạch thăm hỏi gia đình chính sách, dọn vệ sinh nghĩa trang liệt sĩ hoặc giúp đỡ bạn khó khăn.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Tuyên truyền giữ gìn an ninh trật tự và phòng chống tệ nạn xã hội (3 tiết)',
        y: '- Tuyên truyền an toàn giao thông, phòng chống ma túy, tệ nạn cờ bạc và bảo vệ an ninh khu dân cư.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Khám phá cảnh quan thiên nhiên và bảo tồn di sản địa phương (3 tiết)',
        y: '- Viết bài tuyên truyền hoặc làm video ngắn giới thiệu di sản văn hóa, danh thắng quê hương.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 7 (3 tiết)',
        y: '- Đánh giá mức độ tham gia các hoạt động gia đình, cộng đồng và ý thức bảo vệ môi trường.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Thực hiện dự án phân loại rác và lối sống xanh không rác thải nhựa (3 tiết)',
        y: '- Thiết kế các sản phẩm tái chế từ rác thải nhựa; trồng thêm cây xanh tại lớp học và gia đình.'
      },
      {
        w: 28,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Truyền thông về phòng chống rủi ro thiên tai và bảo vệ nguồn nước (3 tiết)',
        y: '- Tuyên truyền các biện pháp giữ gìn nguồn nước sạch, phòng chống đuối nước và ứng phó biến đổi khí hậu.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
        n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Tìm hiểu các nhóm nghề sản xuất, dịch vụ tại địa phương (3 tiết)',
        y: '- Phân loại các nhóm ngành nghề: Nông - Lâm - Ngư nghiệp, Công nghiệp - Xây dựng, Dịch vụ - Thương mại.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
        n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Yêu cầu về phẩm chất, năng lực và an toàn lao động trong nghề nghiệp (3 tiết)',
        y: '- Phân tích yêu cầu trình độ chuyên môn, đạo đức nghề nghiệp và quy chuẩn an toàn của một số nghề tiêu biểu.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp 7 (3 tiết)',
        y: '- Đánh giá kết quả học tập và rèn luyện trải nghiệm cả năm học môn Hoạt động trải nghiệm, hướng nghiệp Lớp 7.'
      },
      {
        w: 32,
        t: 'Chủ đề 9: Hiểu bản thân – Chọn đúng nghề',
        n: 'Chữa bài kiểm tra cuối HK2 & Xác định xu hướng nghề nghiệp phù hợp với phẩm chất bản thân (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; sử dụng các công cụ trắc nghiệm tính cách (MBTI/Holland cơ bản) để khám phá thiên hướng nghề nghiệp.'
      },
      {
        w: 33,
        t: 'Dự án / Ngày hội Trải nghiệm',
        n: 'Ngày hội Trải nghiệm & Hướng nghiệp sáng tạo Lớp 7: Báo cáo sản phẩm và định hướng tương lai (3 tiết)',
        y: '- Trưng bày các sản phẩm sáng tạo, dự án cộng đồng và chia sẻ kế hoạch học tập, rèn luyện theo định hướng nghề nghiệp.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Tổng kết hồ sơ trải nghiệm cả năm học môn Hoạt động trải nghiệm, hướng nghiệp 7 (3 tiết)',
        y: '- Tổng kết hồ sơ học tập và rèn luyện trải nghiệm cả năm học Lớp 7; tự đánh giá và phản hồi đa chiều.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Ngày hội Tổng kết Hoạt động trải nghiệm cả năm & Tuyên dương học sinh Lớp 7 (3 tiết)',
        y: '- Tổ chức Ngày hội Tổng kết, tuyên dương cá nhân và tập thể tiêu biểu trong hoạt động trải nghiệm.'
      }
    ];

    grade7Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Máy chiếu, video tư liệu trải nghiệm, bảng khảo sát nghề nghiệp, giấy A0, bút dạ, loa kéo',
        location: 'Lớp học / Hội trường / Sân trường',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // Bám sát 100% từng bài học trong tong-hop-chuong-trinh-lop-6-7-8-9.md
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Bài 1: Xây dựng và giữ gìn tình bạn (3 tiết)',
        y: '- Nhận diện các tiêu chuẩn của tình bạn đẹp, trong sáng, chân thành; biết lắng nghe, sẻ chia và giúp đỡ bạn cùng tiến bộ.\n- Thực hành kỹ năng giải quyết bất đồng, mâu thuẫn trong tình bạn bằng đối thoại xây dựng.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Bài 2: Phòng, tránh bắt nạt học đường (3 tiết)',
        y: '- Nhận diện các dấu hiệu, hành vi bắt nạt học đường (bắt nạt thể xác, tinh thần, ngôn ngữ và trên không gian mạng).\n- Rèn luyện kỹ năng tự bảo vệ, kiên quyết lên tiếng phản đối và tìm kiếm sự trợ giúp từ thầy cô, nhà trường, gia đình.'
      },
      {
        w: 3,
        t: 'Chủ đề 1: Em với nhà trường',
        n: 'Chủ đề 1: Em với nhà trường - Bài 3: Xây dựng truyền thống nhà trường (3 tiết)',
        y: '- Tìm hiểu và tích cực tham gia các hoạt động tôn vinh truyền thống hiếu học, phong trào thi đua của nhà trường.\n- Lập và thực hiện kế hoạch giữ gìn danh dự người học sinh, lan tỏa hình ảnh đẹp về trường lớp.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Bài 1: Tính cách và cảm xúc của tôi (Tiết 1 - 3) (3 tiết)',
        y: '- Phân tích các nét tính cách đặc trưng của bản thân; nhận diện các phản ứng cảm xúc trước những tình huống đời sống khác nhau.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Bài 1: Nhận diện và điều chỉnh cảm xúc cá nhân (3 tiết)',
        y: '- Thực hành kỹ năng làm chủ cảm xúc, chuyển hóa cảm xúc tiêu cực thành động lực phấn đấu, rèn luyện sự bình tĩnh và tự chủ.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Bài 2: Khả năng tranh biện, thương thuyết của tôi (Tiết 1 - 3) (3 tiết)',
        y: '- Hiểu nguyên tắc tranh biện văn minh: tôn trọng đối phương, dựa trên lập luận logic, bằng chứng xác thực và ngôn ngữ lịch thiệp.'
      },
      {
        w: 7,
        t: 'Chủ đề 2: Khám phá bản thân',
        n: 'Chủ đề 2: Khám phá bản thân - Bài 2: Rèn luyện kĩ năng tranh biện và bảo vệ quan điểm tích cực (3 tiết)',
        y: '- Thực hành tranh biện về các chủ đề học đường, kỹ năng thương thuyết để đạt được sự đồng thuận trong công việc nhóm.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Bài 1: Sống có trách nhiệm (3 tiết)',
        y: '- Thể hiện trách nhiệm với bản thân trong chăm sóc sức khỏe, thời gian học tập, thực hiện cam kết và dám chịu trách nhiệm về hành vi cá nhân.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 8 (3 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn phẩm chất tự chủ, trách nhiệm và kỹ năng tranh biện qua các chủ đề đã học.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Bài 2: Kĩ năng từ chối (3 tiết)',
        y: '- Thực hành kỹ năng từ chối kiên quyết và khéo léo trước những lời lôi kéo tham gia hành vi sai trái, cám dỗ tệ nạn xã hội.'
      },
      {
        w: 11,
        t: 'Chủ đề 3: Trách nhiệm với bản thân',
        n: 'Chủ đề 3: Trách nhiệm với bản thân - Thực hành kĩ năng làm chủ bản thân và kiên định mục tiêu (3 tiết)',
        y: '- Xây dựng bản kế hoạch rèn luyện ý chí vượt khó, duy trì thói quen tự học và lối sống lành mạnh.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Bài 1: Người tiêu dùng thông thái (3 tiết)',
        y: '- Nêu các tiêu chí lựa chọn hàng hóa an toàn, chất lượng, nguồn gốc rõ ràng; so sánh giá cả và tránh mua sắm lãng phí.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Bài 2: Nhà kinh doanh nhỏ (Tiết 1 - 3) (3 tiết)',
        y: '- Tìm hiểu các bước cơ bản để hình thành ý tưởng kinh doanh nhỏ, tính toán chi phí, doanh thu và lợi nhuận đơn giản.'
      },
      {
        w: 14,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Bài 2: Trải nghiệm xây dựng kế hoạch kinh doanh nhỏ học sinh (3 tiết)',
        y: '- Thực hành lập dự án kinh doanh sản phẩm handmade, đồ dùng tái chế gây quỹ từ thiện lớp học.'
      },
      {
        w: 15,
        t: 'Chủ đề 4: Rèn luyện bản thân',
        n: 'Chủ đề 4: Rèn luyện bản thân - Bài 3: Rèn luyện sự tự chủ (3 tiết)',
        y: '- Đánh giá mức độ tự chủ trong suy nghĩ, cảm xúc và hành động; rèn luyện bản lĩnh trước áp lực bạn bè và môi trường xung quanh.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp 8 (3 tiết)',
        y: '- Đánh giá toàn diện kết quả học tập và rèn luyện của học sinh trong Học kỳ 1 môn HĐTN, HN Lớp 8.'
      },
      {
        w: 17,
        t: 'Chữa bài & Ôn tập Học kỳ 1',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập, báo cáo hồ sơ trải nghiệm cá nhân Học kỳ 1 Lớp 8 (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1; tổng kết đánh giá kết quả thực hiện các chủ đề HK1, hoàn thiện hồ sơ học tập và chia sẻ trải nghiệm.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 Hoạt động trải nghiệm, hướng nghiệp Lớp 8 (3 tiết)',
        y: '- Đánh giá tổng kết các hoạt động trải nghiệm trong Học kỳ 1; tuyên dương học sinh tích cực và định hướng HK2.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Bài 1: Tôn trọng, thuyết phục và ứng xử để người thân hài lòng (3 tiết)',
        y: '- Thể hiện sự tôn trọng quan điểm của người lớn; biết cách thuyết phục cha mẹ về nguyện vọng cá nhân một cách lễ phép.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Bài 2: Tiết kiệm và thực hiện công việc gia đình (3 tiết)',
        y: '- Lập kế hoạch quản lý chi tiêu gia đình hợp lý; chủ động đảm nhận các công việc nhà phù hợp với lứa tuổi.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Em với gia đình',
        n: 'Chủ đề 5: Em với gia đình - Tổ chức cuộc sống gia đình khoa học và đầm ấm (3 tiết)',
        y: '- Đề xuất các sáng kiến gắn kết các thành viên, tổ chức bữa ăn gia đình ấm cúng và chăm sóc sức khỏe người thân.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Bài 1: Tham gia các hoạt động giáo dục truyền thống và phát triển cộng đồng ở địa phương (3 tiết)',
        y: '- Tích cực tham gia các hoạt động gìn giữ di tích lịch sử, lễ hội truyền thống và phong trào xây dựng nông thôn mới/đô thị văn minh.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Em với cộng đồng',
        n: 'Chủ đề 6: Em với cộng đồng - Bài 2: Lập và thực hiện kế hoạch hoạt động thiện nguyện (3 tiết)',
        y: '- Lập kế hoạch chi tiết cho một chương trình thiện nguyện (mục tiêu, đối tượng, thời gian, kinh phí, phân công).'
      },
      {
        w: 24,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Bài 1: Cảnh quan thiên nhiên quê hương tôi (3 tiết)',
        y: '- Khảo sát, viết bài thuyết minh hoặc thiết kế ấn phẩm số quảng bá vẻ đẹp cảnh quan thiên nhiên quê hương.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
        n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Bài 2: Truyền thông về biện pháp đề phòng và giảm nhẹ rủi ro thiên tai ở địa phương (3 tiết)',
        y: '- Thiết kế các sản phẩm truyền thông (infographic, poster, video ngắn) tuyên truyền kỹ năng phòng chống bão lũ, hạn hán, sạt lở đất.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 8 (3 tiết)',
        y: '- Đánh giá mức độ tham gia các dự án gia đình, cộng đồng, truyền thông môi trường từ Tuần 19 đến 25.'
      },
      {
        w: 27,
        t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
        n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Bài 1: Nghề phổ biến trong xã hội hiện đại (Tiết 1 - 3) (3 tiết)',
        y: '- Khảo sát các ngành nghề mới nổi trong kỷ nguyên số (IT, trí tuệ nhân tạo, truyền thông số, logistics, thương mại điện tử).'
      },
      {
        w: 28,
        t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
        n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Tìm hiểu yêu cầu phẩm chất và năng lực của các nghề hiện đại (3 tiết)',
        y: '- Phân tích yêu cầu về ngoại ngữ, kỹ năng số, năng lực thích ứng và tư duy đổi mới sáng tạo trong thị trường lao động 4.0.'
      },
      {
        w: 29,
        t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
        n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Bài 1: Hứng thú nghề nghiệp (3 tiết)',
        y: '- Khám phá sở thích, đam mê và xu hướng hứng thú nghề nghiệp của bản thân qua các bài tập tình huống thực tế.'
      },
      {
        w: 30,
        t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
        n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Bài 2: Rèn luyện, học tập theo định hướng nghề nghiệp (Tiết 1 - 3) (3 tiết)',
        y: '- Đối chiếu yêu cầu của ngành nghề mong muốn với năng lực hiện tại; xác định các kỹ năng cần bồi dưỡng thêm.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp 8 (3 tiết)',
        y: '- Đánh giá kết quả học tập và rèn luyện trải nghiệm cả năm học môn Hoạt động trải nghiệm, hướng nghiệp Lớp 8 theo chuẩn Thông tư 32/2018/TT-BGDĐT.'
      },
      {
        w: 32,
        t: 'Diễn đàn học đường',
        n: 'Chữa bài kiểm tra cuối HK2 & Diễn đàn: "Tuổi trẻ THCS & Ngày hội Trải nghiệm Sáng tạo Hướng nghiệp 8" (3 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2; tổ chức diễn đàn giao lưu, trao đổi về khát vọng tuổi trẻ, định hướng học tập và trải nghiệm sáng tạo.'
      },
      {
        w: 33,
        t: 'Hồ sơ trải nghiệm',
        n: 'Hoàn thiện hồ sơ đánh giá năng lực và tự đánh giá kết quả hoạt động trải nghiệm cả năm (3 tiết)',
        y: '- Tổng hợp minh chứng, tự chấm điểm theo thang tiêu chí và ghi nhận phản hồi đánh giá từ bạn bè, giáo viên.'
      },
      {
        w: 34,
        t: 'Chủ đề: Ôn tập cuối năm',
        n: 'Tổng kết hồ sơ trải nghiệm cả năm học môn Hoạt động trải nghiệm, hướng nghiệp 8 (3 tiết)',
        y: '- Hệ thống hóa các bài học kỹ năng sống, dự án cộng đồng và định hướng nghề nghiệp Lớp 8.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Ngày hội Tổng kết Hoạt động trải nghiệm cả năm & Trao chứng nhận hoàn thành Lớp 8 (3 tiết)',
        y: '- Tổng kết và trao chứng nhận hoàn thành chương trình HĐTN, HN Lớp 8.'
      }
    ];

    grade8Weeks.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 3,
        yccd: item.y,
        equipment: 'Máy chiếu, video tư liệu tranh biện, bảng kế hoạch kinh doanh nhỏ, cẩm nang thị trường lao động số, loa',
        location: 'Lớp học / Hội trường / Sân trường',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: HOẠT ĐỘNG TRẢI NGHIỆM, HƯỚNG NGHIỆP (35 TUẦN X 3 TIẾT = 105 TIẾT)
  // Bám sát 100% từng bài học trong tong-hop-chuong-trinh-lop-6-7-8-9.md
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Chủ đề 1: Em với nhà trường',
      n: 'Chủ đề 1: Em với nhà trường - Bài 1: Tôn trọng sự khác biệt và sống hài hoà với các bạn, thầy cô (3 tiết)',
      y: '- Thể hiện thái độ tôn trọng sự khác biệt về năng lực, cá tính, văn hóa của bạn bè và thầy cô; biết ứng xử bao dung, chan hòa.'
    },
    {
      w: 2,
      t: 'Chủ đề 1: Em với nhà trường',
      n: 'Chủ đề 1: Em với nhà trường - Bài 2: Phòng chống bắt nạt học đường (3 tiết)',
      y: '- Phân tích nguyên nhân sâu xa và hậu quả nghiêm trọng của bắt nạt học đường; xây dựng mạng lưới hỗ trợ tâm lý học sinh trong trường.'
    },
    {
      w: 3,
      t: 'Chủ đề 1: Em với nhà trường',
      n: 'Chủ đề 1: Em với nhà trường - Bài 3: Xây dựng truyền thống nhà trường và lập kế hoạch lao động công ích (3 tiết)',
      y: '- Phát huy vai trò đầu tàu của học sinh khối 9 trong các phong trào thi đua; lập và thực hiện kế hoạch lao động công ích làm đẹp trường.'
    },
    {
      w: 4,
      t: 'Chủ đề 2: Khám phá bản thân',
      n: 'Chủ đề 2: Khám phá bản thân - Bài 1: Nhận diện điểm tích cực và chưa tích cực trong hành vi giao tiếp, ứng xử của bản thân (3 tiết)',
      y: '- Tự soi rọi, phân tích hành vi ứng xử hàng ngày; nhận diện các thói quen giao tiếp chưa tích cực để điều chỉnh phù hợp chuẩn mực.'
    },
    {
      w: 5,
      t: 'Chủ đề 2: Khám phá bản thân',
      n: 'Chủ đề 2: Khám phá bản thân - Bài 2: Khám phá khả năng thích nghi của bản thân (3 tiết)',
      y: '- Đánh giá mức độ linh hoạt và thích ứng trước những thay đổi về môi trường học tập, áp lực thi cử và các tình huống bất ngờ.'
    },
    {
      w: 6,
      t: 'Chủ đề 3: Trách nhiệm với bản thân',
      n: 'Chủ đề 3: Trách nhiệm với bản thân - Bài 1: Trách nhiệm với nhiệm vụ được giao (3 tiết)',
      y: '- Thể hiện tinh thần trách nhiệm cao nhất khi nhận nhiệm vụ của tập thể; chủ động lập kế hoạch và hoàn thành đúng tiến độ cam kết.'
    },
    {
      w: 7,
      t: 'Chủ đề 3: Trách nhiệm với bản thân',
      n: 'Chủ đề 3: Trách nhiệm với bản thân - Bài 2: Ứng phó với căng thẳng và áp lực (3 tiết)',
      y: '- Nhận diện các triệu chứng stress mùa thi; thực hành các phương pháp quản lý căng thẳng, điều hòa nhịp thở và xây dựng tâm lý vững vàng.'
    },
    {
      w: 8,
      t: 'Chủ đề 4: Rèn luyện bản thân',
      n: 'Chủ đề 4: Rèn luyện bản thân - Bài 1: Tạo động lực cho bản thân (3 tiết)',
      y: '- Khám phá các nguồn động lực nội tại (ước mơ, khát vọng, lòng biết ơn cha mẹ); xây dựng câu thần chú tích cực giúp vượt qua khó khăn.'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 9 (3 tiết)',
      y: '- Đánh giá mức độ đạt chuẩn kỹ năng thích ứng, quản lý áp lực và tinh thần trách nhiệm của học sinh khối 9.'
    },
    {
      w: 10,
      t: 'Chủ đề 4: Rèn luyện bản thân',
      n: 'Chủ đề 4: Rèn luyện bản thân - Bài 2: Xây dựng ngân sách cá nhân hợp lí (3 tiết)',
      y: '- Thực hành lập bảng dự toán thu chi cá nhân cho năm học cuối cấp; thực hiện nguyên tắc chi tiêu thông minh và tiết kiệm tài chính.'
    },
    {
      w: 11,
      t: 'Chủ đề 5: Em với gia đình',
      n: 'Chủ đề 5: Em với gia đình - Bài 1: Tạo bầu không khí vui vẻ, yêu thương và giải quyết bất đồng trong gia đình (3 tiết)',
      y: '- Chủ động tạo niềm vui cho người thân qua những lời hỏi thăm ân cần, giúp đỡ việc nhà và ứng xử điềm tĩnh khi có xung đột thế hệ.'
    },
    {
      w: 12,
      t: 'Chủ đề 5: Em với gia đình',
      n: 'Chủ đề 5: Em với gia đình - Bài 2: Tổ chức, sắp xếp khoa học công việc gia đình (3 tiết)',
      y: '- Biết phân công, sắp xếp lịch sinh hoạt gia đình khoa học, tạo sự cân bằng giữa học tập của con cái và công việc của cha mẹ.'
    },
    {
      w: 13,
      t: 'Chủ đề 5: Em với gia đình',
      n: 'Chủ đề 5: Em với gia đình - Bài 3: Biện pháp phát triển kinh tế gia đình (3 tiết)',
      y: '- Tìm hiểu các mô hình kinh tế gia đình hiệu quả; đề xuất các giải pháp tiết kiệm chi phí sinh hoạt và phụ giúp cha mẹ tăng thu nhập.'
    },
    {
      w: 14,
      t: 'Chủ đề 6: Em với cộng đồng',
      n: 'Chủ đề 6: Em với cộng đồng - Bài 1: Xây dựng và phát triển cộng đồng (3 tiết)',
      y: '- Tham gia các dự án phát triển cộng đồng địa phương: dọn dẹp vệ sinh môi trường, tuyên truyền an toàn giao thông, văn minh đô thị.'
    },
    {
      w: 15,
      t: 'Chủ đề 6: Em với cộng đồng',
      n: 'Chủ đề 6: Em với cộng đồng - Bài 2: Khảo sát thực trạng giao tiếp của học sinh trên mạng xã hội (3 tiết)',
      y: '- Thiết kế phiếu khảo sát số (Google Forms), thu thập và phân tích thực trạng sử dụng mạng xã hội của học sinh THCS.'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Hoạt động trải nghiệm, hướng nghiệp 9 (3 tiết)',
      y: '- Đánh giá tổng hợp toàn diện kết quả học tập và rèn luyện môn HĐTN, HN Lớp 9 trong Học kỳ 1.'
    },
    {
      w: 17,
      t: 'Chữa bài & Ôn tập Học kỳ 1',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập, báo cáo hồ sơ trải nghiệm học sinh Lớp 9 Học kỳ 1 (3 tiết)',
      y: '- Chữa bài kiểm tra cuối HK1; hệ thống hóa các kết quả rèn luyện, bài báo cáo khảo sát và hồ sơ năng lực học sinh trong Học kỳ 1.'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Sơ kết Học kỳ 1 Hoạt động trải nghiệm, hướng nghiệp Lớp 9 (3 tiết)',
      y: '- Đánh giá tổng kết các hoạt động trải nghiệm trong Học kỳ 1; tuyên dương học sinh tích cực và định hướng HK2.'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
      n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Bài 1: Việt Nam - Tổ quốc tôi (3 tiết)',
      y: '- Khơi dậy lòng yêu nước, niềm tự hào về di sản thiên nhiên, văn hóa và vị thế đất nước trên trường quốc tế.'
    },
    {
      w: 20,
      t: 'Chủ đề 7: Em với thiên nhiên và môi trường',
      n: 'Chủ đề 7: Em với thiên nhiên và môi trường - Bài 2: Phòng chống ô nhiễm và bảo vệ môi trường (3 tiết)',
      y: '- Phân tích thực trạng ô nhiễm rác thải nhựa, ô nhiễm không khí và đề xuất các giải pháp sống xanh bền vững.'
    },
    {
      w: 21,
      t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
      n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Bài 1: Nghề em quan tâm (Tìm hiểu đặc điểm và xu hướng nghề nghiệp) (3 tiết)',
      y: '- Tìm hiểu sâu về một nghề mong muốn theo đuổi: mô tả công việc, yêu cầu tuyển dụng, thu nhập và cơ hội thăng tiến.'
    },
    {
      w: 22,
      t: 'Chủ đề 8: Khám phá thế giới nghề nghiệp',
      n: 'Chủ đề 8: Khám phá thế giới nghề nghiệp - Khảo sát các ngành nghề trong xã hội 4.0 và kỷ nguyên số (3 tiết)',
      y: '- Phân tích sự chuyển dịch cơ cấu ngành nghề dưới tác động của trí tuệ nhân tạo (AI), tự động hóa và dữ liệu lớn (Big Data).'
    },
    {
      w: 23,
      t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
      n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Bài 1: Hệ thống các cơ sở giáo dục nghề nghiệp của Trung ương và địa phương (3 tiết)',
      y: '- Nắm vững hệ thống phân luồng sau THCS: Trường THPT công lập/tư thục, Trung tâm GDNN-GDTX, Trường Trung cấp nghề, Cao đẳng nghề.'
    },
    {
      w: 24,
      t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
      n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Tìm hiểu thông tin tuyển sinh THPT, Trung cấp nghề và Cao đẳng nghề (3 tiết)',
      y: '- Tra cứu đề án tuyển sinh, điểm chuẩn các năm gần nhất và điều kiện học phí, học bổng của các trường trên địa bàn.'
    },
    {
      w: 25,
      t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
      n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Bài 2: Rèn luyện, phát triển bản thân theo yêu cầu của định hướng nghề nghiệp (3 tiết)',
      y: '- Đánh giá độ phù hợp giữa năng lực học tập, điều kiện gia đình với nghề định chọn; lập kế hoạch bồi dưỡng năng lực chuyên biệt.'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 9 (3 tiết)',
      y: '- Đánh giá mức độ rõ ràng, khả thi trong kế hoạch hướng nghiệp và định hướng phân luồng sau tốt nghiệp THCS.'
    },
    {
      w: 27,
      t: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề',
      n: 'Chủ đề 9: Hiểu bản thân - Chọn đúng nghề - Xây dựng và hoàn thiện kế hoạch học tập, chọn trường, chọn nghề sau tốt nghiệp THCS (3 tiết)',
      y: '- Hoàn thiện phương án chọn nguyện vọng thi vào Lớp 10 THPT hoặc trường nghề phù hợp năng lực và đam mê.'
    },
    {
      w: 28,
      t: 'Diễn đàn Hướng nghiệp',
      n: 'Diễn đàn Hướng nghiệp: "Tư vấn mùa thi - Vững bước vào Lớp 10 và định hướng tương lai" (3 tiết)',
      y: '- Giao lưu với các chuyên gia tâm lý giáo dục, đại diện các trường THPT và trường nghề; giải đáp thắc mắc mùa thi.'
    },
    {
      w: 29,
      t: 'Trải nghiệm thực tế',
      n: 'Trải nghiệm thực tế: Tham quan hướng nghiệp các trường THPT / Cơ sở đào tạo nghề địa phương (3 tiết)',
      y: '- Tham quan cơ sở vật chất, phòng thực hành kỹ thuật số, giao lưu với học sinh khóa trên để có hình dung chân thực.'
    },
    {
      w: 30,
      t: 'Tọa đàm tâm lý mùa thi',
      n: 'Tọa đàm tâm lý mùa thi: Giải tỏa áp lực và tạo động lực bứt phá trong kỳ thi vào 10 (3 tiết)',
      y: '- Chia sẻ phương pháp ôn thi khoa học, giữ gìn sức khỏe, chế độ ngủ nghỉ hợp lý và tự tin bước vào phòng thi.'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Hoạt động trải nghiệm, hướng nghiệp Lớp 9 (3 tiết)',
      y: '- Đánh giá tổng hợp sự trưởng thành về phẩm chất, năng lực và kế hoạch hướng nghiệp của học sinh sau 4 năm THCS.'
    },
    {
      w: 32,
      t: 'Báo cáo tổng kết Portfolio',
      n: 'Chữa bài kiểm tra cuối HK2 & Báo cáo hoàn thiện Portfolio hồ sơ năng lực học sinh tốt nghiệp THCS (3 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2; hoàn thiện hồ sơ năng lực học sinh (Portfolio) gồm các chứng nhận, sản phẩm học tập chuẩn bị vào cấp 3.'
    },
    {
      w: 33,
      t: 'Dự án Trải nghiệm',
      n: 'Dự án Trải nghiệm: "Tri ân thầy cô, mái trường THCS & Kỷ yếu Tuổi học trò" (3 tiết)',
      y: '- Thực hiện kỷ yếu số lớp học, thiết kế thiệp tri ân, video phóng sự ghi lại những kỷ niệm đẹp 4 năm học dưới mái trường THCS.'
    },
    {
      w: 34,
      t: 'Chủ đề: Hệ thống hóa',
      n: 'Hệ thống hóa toàn bộ nội dung và hoàn tất hồ sơ hướng nghiệp chuẩn bị thi vào 10 (3 tiết)',
      y: '- Tổng kết các bài học lớn về làm chủ bản thân, thích ứng xã hội, tinh thần trách nhiệm và kỹ năng định hướng nghề nghiệp.'
    },
    {
      w: 35,
      t: 'Tổng kết năm học',
      n: 'Ngày hội Tổng kết Hoạt động trải nghiệm & Lễ trưởng thành học sinh Lớp 9 (3 tiết)',
      y: '- Tổ chức Ngày hội Tổng kết, Lễ trưởng thành và tri ân thầy cô, cha mẹ cho toàn thể học sinh Lớp 9 trước kỳ thi vào 10.'
    }
  ];

  grade9Weeks.forEach((item) => {
    list.push({
      week: item.w,
      topic: item.t,
      name: item.n,
      periods: 3,
      yccd: item.y,
      equipment: 'Máy chiếu, cẩm nang tuyển sinh Lớp 10, biểu mẫu khảo sát số Google Forms, portfolio điện tử, loa',
      location: 'Lớp học / Hội trường / Sân trường',
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : ''
    });
  });

  return list;
}
