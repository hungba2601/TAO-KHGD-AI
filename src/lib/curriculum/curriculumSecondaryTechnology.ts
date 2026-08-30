import { RawSecondaryLesson } from './curriculumSecondary';
import { ConfigFormData } from '../../types';

export type TechnologyModuleGrade9 = 'dien_gia_dung' | 'che_bien_thuc_pham' | 'trong_cay_an_qua';

/**
 * Phân phối chương trình môn Công nghệ THCS Lớp 6, 7, 8, 9
 * Chuẩn 100% SGK Kết nối tri thức với cuộc sống (NXB Giáo dục Việt Nam)
 * Đáp ứng Thông tư 32/2018/TT-BGDĐT & Công văn 5512/BGDĐT-GDTrH
 * Tích hợp Năng lực số (CV 3456/BGDĐT-GDPT) & Trí tuệ nhân tạo (QĐ 2422/QĐ-BGDĐT)
 */
export function getTechnologySecondaryCurriculum(
  grade: string,
  config?: Partial<ConfigFormData>
): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. CÔNG NGHỆ LỚP 6 - CÔNG NGHỆ TRONG GIA ĐÌNH (35 tiết / 35 tuần)
  // =========================================================================
  if (g === 6) {
    const grade6Plan = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Nhà ở',
        n: 'Bài 1: Khái quát về nhà ở (Tiết 1)',
        p: 1,
        y: '- Nêu được vai trò, đặc điểm chung của nhà ở và các kiến trúc nhà ở đặc trưng của Việt Nam (nhà nông thôn, nhà thành thị, nhà sàn, nhà nổi).\n- Nhận biết các khu vực chức năng chính trong nhà ở.',
        eq: 'Tranh ảnh các kiểu kiến trúc nhà ở Việt Nam, máy chiếu, sơ đồ mặt bằng nhà',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1b',
        ai: '6.A1.1',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và chọn lọc hình ảnh tư liệu số về các kiểu nhà ở truyền thống và hiện đại tại Việt Nam.\n• [Mã AI: 6.A1.1] Trải nghiệm công cụ AI nhận diện các kiểu kiến trúc nhà ở qua hình ảnh.'
      },
      {
        w: 2,
        t: 'Chương I: Nhà ở',
        n: 'Bài 1: Khái quát về nhà ở (Tiết 2)',
        p: 1,
        y: '- Phân tích sự phù hợp của các kiểu kiến trúc nhà ở với điều kiện tự nhiên và tập quán sinh hoạt từng vùng miền.\n- Có ý thức giữ gìn nhà ở sạch sẽ, ngăn nắp.',
        eq: 'Video tư liệu về kiến trúc nhà ở ba miền, phiếu học tập',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1a',
        ai: '6.C1.1',
        dc: '• [Mã NLS: 2.1.TC1a] Sử dụng sơ đồ tư duy số (Mindmap/Canva) hệ thống hóa đặc điểm các kiểu nhà ở đặc thù.\n• [Mã AI: 6.C1.1] Đặt câu hỏi cho AI trợ lý để so sánh ưu điểm của nhà nổi và nhà sàn.'
      },
      {
        w: 3,
        t: 'Chương I: Nhà ở',
        n: 'Bài 2: Xây dựng nhà ở (Tiết 1)',
        p: 1,
        y: '- Nhận biết được các loại vật liệu xây dựng tự nhiên và nhân tạo thông dụng trong xây dựng nhà ở.\n- Nêu được vai trò của từng loại vật liệu đối với độ bền vững của công trình.',
        eq: 'Mẫu vật liệu thực tế: gạch, cát, xi măng, đá sỏi; tranh ảnh công trình xây dựng',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1a',
        ai: '6.B1.1',
        dc: '• [Mã NLS: 3.1.TC1a] Tra cứu thông số kỹ thuật và báo giá vật liệu xây dựng trên các website uy tín.\n• [Mã AI: 6.B1.1] Nhận biết tính an toàn và nguồn gốc thông tin vật liệu xây dựng thân thiện môi trường từ AI.'
      },
      {
        w: 4,
        t: 'Chương I: Nhà ở',
        n: 'Bài 2: Xây dựng nhà ở (Tiết 2)',
        p: 1,
        y: '- Trình bày được các bước chính trong quy trình xây dựng nhà ở (Thiết kế -> Thi công thô -> Hoàn thiện).\n- Hiểu được tầm quan trọng của an toàn lao động trong xây dựng.',
        eq: 'Video quy trình thi công xây dựng nhà ở dân dụng, mô hình khung nhà',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.3.TC1a',
        ai: '6.D1.1',
        dc: '• [Mã NLS: 5.3.TC1a] Sử dụng phần mềm đồ họa mô phỏng 3 bước xây dựng ngôi nhà đơn giản.\n• [Mã AI: 6.D1.1] Trải nghiệm ứng dụng thiết kế mô phỏng 3D nội thất hỗ trợ bởi AI.'
      },
      {
        w: 5,
        t: 'Chương I: Nhà ở',
        n: 'Bài 3: Ngôi nhà thông minh (Tiết 1)',
        p: 1,
        y: '- Nhận biết được khái niệm ngôi nhà thông minh (Smart Home) và các đặc điểm nổi bật (tiện ích, an ninh an toàn, tiết kiệm năng lượng).\n- Mô tả được hoạt động của các thiết bị thông minh cơ bản trong gia đình.',
        eq: 'Mô hình Smart Home mini, cảm biến hồng ngoại, đèn tự động bật tắt, máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '5.2.TC1b',
        ai: '6.A2.1',
        dc: '• [Mã NLS: 5.2.TC1b] Tìm hiểu nguyên lý kết nối thiết bị IoT và điều khiển ngôi nhà qua Smartphone.\n• [Mã AI: 6.A2.1] Khám phá cách Trí tuệ nhân tạo (AI) học thói quen người dùng để điều khiển điều hòa, ánh sáng tự động.'
      },
      {
        w: 6,
        t: 'Chương I: Nhà ở',
        n: 'Bài 3: Ngôi nhà thông minh (Tiết 2)',
        p: 1,
        y: '- Đề xuất các giải pháp ứng dụng thiết bị thông minh và tiết kiệm năng lượng trong ngôi nhà của gia đình.\n- Rèn luyện ý thức bảo vệ môi trường và sử dụng năng lượng hiệu quả.',
        eq: 'Video thực tế nhà thông minh, phiếu thiết kế kịch bản nhà thông minh',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.4.TC1a',
        ai: '6.D1.2',
        dc: '• [Mã NLS: 2.4.TC1a] Làm việc nhóm trực tuyến xây dựng ý tưởng thiết kế góc học tập thông minh.\n• [Mã AI: 6.D1.2] Thiết kế sơ đồ kịch bản tự động hóa cho ngôi nhà thông minh với sự trợ giúp của AI.'
      },
      {
        w: 7,
        t: 'Chương I: Nhà ở',
        n: 'Ôn tập Chương I: Nhà ở',
        p: 1,
        y: '- Hệ thống hóa toàn bộ kiến thức về vai trò, kiến trúc nhà ở, vật liệu, quy trình xây dựng và ngôi nhà thông minh.\n- Vận dụng giải quyết các tình huống thực tiễn bài trí không gian sống.',
        eq: 'Hệ thống câu hỏi ôn tập, sơ đồ tư duy tổng kết chương, bảng phụ',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1a',
        ai: '6.B1.2',
        dc: '• [Mã NLS: 1.2.TC1a] Tham gia trò chơi trắc nghiệm tương tác số (Kahoot/Quizizz) củng cố kiến thức Chương I.\n• [Mã AI: 6.B1.2] Sử dụng AI tạo bảng tóm tắt so sánh giữa nhà ở truyền thống và nhà ở thông minh.'
      },
      {
        w: 8,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 4: Thực phẩm và dinh dưỡng (Tiết 1)',
        p: 1,
        y: '- Nêu được vai trò của thực phẩm và các nhóm chất dinh dưỡng chính đối với cơ thể (chất đạm, chất bột đường, chất béo, vitamin, khoáng chất, chất xơ và nước).\n- Nhận biết các thực phẩm giàu từng nhóm chất dinh dưỡng.',
        eq: 'Tháp dinh dưỡng hợp lý, tranh ảnh các nhóm thực phẩm, mô hình thực phẩm mẫu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1a',
        ai: '6.C1.2',
        dc: '• [Mã NLS: 1.1.TC1a] Tra cứu tháp dinh dưỡng và bảng thành phần dinh dưỡng thực phẩm Việt Nam online.\n• [Mã AI: 6.C1.2] Dùng AI phân tích bảng thành phần dinh dưỡng của bữa ăn học đường.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 6',
        p: 1,
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Chương I (Nhà ở) và Bài 4 (Thực phẩm & dinh dưỡng).\n- Rèn luyện tính trung thực, cẩn thận và khả năng làm bài tự luận/trắc nghiệm nghiêm túc.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1a',
        ai: '6.B2.1',
        dc: '• [Mã NLS: 4.1.TC1a] Tuân thủ quy chế kiểm tra đánh giá, bảo mật dữ liệu bài làm cá nhân.\n• [Mã AI: 6.B2.1] Thể hiện tính trung thực học thuật và tư duy độc lập khi làm bài kiểm tra.'
      },
      {
        w: 10,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 4: Thực phẩm và dinh dưỡng (Tiết 2)',
        p: 1,
        y: '- Trình bày được nguyên tắc xây dựng khẩu phần ăn hợp lý, cân đối dinh dưỡng theo độ tuổi và thể trạng.\n- Có thói quen ăn uống khoa học, vệ sinh an toàn thực phẩm.',
        eq: 'Tháp dinh dưỡng cho lứa tuổi học sinh THCS, bảng tính calo thực phẩm',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1b',
        ai: '6.C2.1',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng bảng tính tính toán tổng năng lượng (Calo) và cơ cấu dinh dưỡng của thực đơn trong ngày.\n• [Mã AI: 6.C2.1] Nhờ AI gợi ý thực đơn cân bằng dinh dưỡng cho học sinh 11-12 tuổi.'
      },
      {
        w: 11,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 5: Phương pháp bảo quản và chế biến thực phẩm (Tiết 1)',
        p: 1,
        y: '- Trình bày được mục đích và các phương pháp bảo quản thực phẩm thông dụng (làm lạnh, đông lạnh, làm khô, ướp muối, ướp đường).\n- Phân tích ưu nhược điểm của từng phương pháp bảo quản.',
        eq: 'Tranh ảnh các phương pháp bảo quản thực phẩm, túi hút chân không, hộp bảo quản',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.3.TC1a',
        ai: '6.A1.2',
        dc: '• [Mã NLS: 1.3.TC1a] Thu thập tài liệu số về kỹ thuật bảo quản thực phẩm hiện đại trong công nghiệp.\n• [Mã AI: 6.A1.2] Xem video mô phỏng nguyên lý ức chế vi khuẩn trong bảo quản lạnh do AI hỗ trợ.'
      },
      {
        w: 12,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 5: Phương pháp bảo quản và chế biến thực phẩm (Tiết 2)',
        p: 1,
        y: '- Nhận biết và phân loại các phương pháp chế biến thực phẩm có sử dụng nhiệt (luộc, hấp, kho, nướng, rán/chiên).\n- Nêu được quy trình và yêu cầu kỹ thuật của các món luộc, hấp, kho.',
        eq: 'Hình ảnh, video quy trình chế biến món ăn có nhiệt; phiếu hướng dẫn an toàn bếp',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.2.TC1a',
        ai: '6.C1.3',
        dc: '• [Mã NLS: 2.2.TC1a] Chia sẻ công thức chế biến món ăn gia đình trên nhóm học tập trực tuyến.\n• [Mã AI: 6.C1.3] Sử dụng AI dịch thuật và tìm kiếm các công thức ẩm thực dân gian truyền thống.'
      },
      {
        w: 13,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 5: Phương pháp bảo quản và chế biến thực phẩm (Tiết 3)',
        p: 1,
        y: '- Trình bày được quy trình và nguyên tắc chế biến thực phẩm không sử dụng nhiệt (trộn dầu giấm, trộn nộm/gỏi, muối chua).\n- Nêu được các biện pháp đảm bảo vệ sinh an toàn thực phẩm khi chế biến.',
        eq: 'Dụng cụ nhà bếp mẫu, găng tay thực phẩm, gia vị và nguyên liệu tươi sạch',
        loc: 'Phòng học bộ môn Công nghệ / Phòng thực hành',
        nls: '4.4.TC1a',
        ai: '6.B1.3',
        dc: '• [Mã NLS: 4.4.TC1a] Tuyên truyền giảm thiểu rác thải nhựa và thực phẩm dư thừa trên nền tảng số.\n• [Mã AI: 6.B1.3] Đánh giá an toàn thực phẩm dựa trên hướng dẫn tra cứu từ công cụ số.'
      },
      {
        w: 14,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 5: Phương pháp bảo quản và chế biến thực phẩm (Tiết 4 - Thực hành)',
        p: 1,
        y: '- Thực hành chế biến món trộn dầu giấm hoặc trộn nộm đơn giản, an toàn, đảm bảo dinh dưỡng và thẩm mỹ.\n- Rèn luyện kỹ năng làm việc nhóm, vệ sinh an toàn lao động.',
        eq: 'Rau củ quả tươi, bát trộn, đĩa, thìa, nước sốt mẫu, găng tay thực phẩm',
        loc: 'Phòng thực hành Nữ công / Bếp STEM',
        nls: '5.3.TC1b',
        ai: '6.D1.3',
        dc: '• [Mã NLS: 5.3.TC1b] Chụp ảnh, quay video ngắn ghi lại quy trình thực hành làm món trộn nộm.\n• [Mã AI: 6.D1.3] Tạo video hướng dẫn nấu ăn ngắn bằng ứng dụng Canva/CapCut kết hợp AI lồng tiếng.'
      },
      {
        w: 15,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Bài 6: Dự án: Bữa ăn kết nối yêu thương (Tiết 1)',
        p: 1,
        y: '- Lập kế hoạch và xây dựng thực đơn bữa ăn gia đình đáp ứng nhu cầu dinh dưỡng, sở thích và điều kiện kinh tế.\n- Tính toán chi phí mua nguyên liệu thực tế cho bữa ăn 4 người.',
        eq: 'Phiếu dự án, bảng giá thị trường thực phẩm, máy tính cầm tay',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1c',
        ai: '6.C2.2',
        dc: '• [Mã NLS: 3.1.TC1c] Thiết lập bảng tính Excel quản lý chi phí nguyên liệu và phân công nhiệm vụ dự án.\n• [Mã AI: 6.C2.2] Nhờ AI gợi ý kịch bản tổ chức bữa cơm sum họp gia đình ấm cúng, tiết kiệm.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Công nghệ 6',
        p: 1,
        y: '- Đánh giá tổng hợp kết quả học tập môn Công nghệ 6 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh, làm căn cứ điều chỉnh kế hoạch dạy học Học kỳ 2; rèn luyện kỷ luật phòng thi.',
        eq: 'Đề kiểm tra in sẵn, ma trận, bảng đặc tả đề kiểm tra cuối kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1b',
        ai: '6.B2.2',
        dc: '• [Mã NLS: 4.1.TC1b] Thực hiện nghiêm túc quy chế kiểm tra đánh giá định kỳ trên giấy hoặc máy tính.\n• [Mã AI: 6.B2.2] Tự đánh giá mức độ đạt được mục tiêu học tập HK1 và xây dựng kế hoạch HK2.'
      },
      {
        w: 17,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Ôn tập Học kỳ 1 môn Công nghệ Lớp 6',
        p: 1,
        y: '- Hệ thống hóa toàn bộ kiến thức Chương I (Nhà ở) và Chương II (Bảo quản & chế biến thực phẩm).\n- Rèn luyện kỹ năng phân tích, tổng hợp và chuẩn bị tốt cho kiểm tra cuối học kỳ 1.',
        eq: 'Đề cương ôn tập HK1, ngân hàng câu hỏi trắc nghiệm tương tác',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1b',
        ai: '6.B1.4',
        dc: '• [Mã NLS: 1.2.TC1b] Hệ thống hóa sơ đồ tư duy tổng hợp kiến thức HK1 bằng phần mềm XMind/Canva.\n• [Mã AI: 6.B1.4] Luyện tập trắc nghiệm trực tuyến trên hệ thống ôn tập số có phản hồi gợi ý AI.'
      },
      {
        w: 18,
        t: 'Chương II: Bảo quản và chế biến thực phẩm',
        n: 'Dự án: Bữa ăn kết nối yêu thương (Tiết 2 - Báo cáo)',
        p: 1,
        y: '- Báo cáo sản phẩm dự án: thuyết minh thực đơn, bảng tính chi phí và thông điệp tình cảm gia đình.\n- Đánh giá sản phẩm và tự đánh giá năng lực hợp tác giải quyết vấn đề.',
        eq: 'Slide thuyết trình, poster thực đơn, sản phẩm hình ảnh món ăn',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1b',
        ai: '6.D2.1',
        dc: '• [Mã NLS: 2.1.TC1b] Thuyết trình báo cáo dự án bằng bài trình chiếu số đa phương tiện.\n• [Mã AI: 6.D2.1] Ứng dụng AI tạo hình ảnh minh họa món ăn trực quan cho bài báo cáo dự án.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 7: Trang phục trong đời sống (Tiết 1)',
        p: 1,
        y: '- Nêu được vai trò của trang phục trong đời sống (bảo vệ cơ thể, làm đẹp, thể hiện nghề nghiệp và văn hóa).\n- Phân loại được các loại trang phục theo thời tiết, công dụng, giới tính và lứa tuổi.',
        eq: 'Mẫu các loại trang phục, tranh ảnh thời trang các ngành nghề, máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1c',
        ai: '6.A1.3',
        dc: '• [Mã NLS: 1.1.TC1c] Tìm kiếm hình ảnh trang phục truyền thống các dân tộc Việt Nam trên Internet.\n• [Mã AI: 6.A1.3] Trải nghiệm AI nhận diện phong cách trang phục qua hình ảnh.'
      },
      {
        w: 20,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 7: Trang phục trong đời sống (Tiết 2)',
        p: 1,
        y: '- Nhận biết nguồn gốc, tính chất của một số loại vải thông dụng (vải sợi thiên nhiên, vải sợi hóa học, vải sợi pha).\n- Biết cách chọn vải may trang phục phù hợp với mùa và hoàn cảnh sử dụng.',
        eq: 'Mẫu các loại vải thực tế (cotton, lụa, nylon, polyester, vải pha), kính lúp, bật lửa thử vải',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1d',
        ai: '6.C1.4',
        dc: '• [Mã NLS: 3.1.TC1d] Lập bảng so sánh đặc tính thấm hút, độ bền, độ nhăn của các loại vải trên phần mềm Word.\n• [Mã AI: 6.C1.4] Đặt câu hỏi cho AI về công nghệ sản xuất vải sợi sinh học bảo vệ môi trường.'
      },
      {
        w: 21,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 8: Sử dụng và bảo quản trang phục (Tiết 1)',
        p: 1,
        y: '- Trình bày được nguyên tắc phối hợp trang phục phù hợp với vóc dáng cơ thể (màu sắc, họa tiết, kiểu dáng) và hoàn cảnh giao tiếp.\n- Hình thành phong cách ăn mặc lịch sự, trang nhã.',
        eq: 'Tranh ảnh người mẫu các vóc dáng khác nhau, mẫu phối màu trang phục',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1c',
        ai: '6.C2.3',
        dc: '• [Mã NLS: 2.1.TC1c] Thiết kế bộ sưu tập phối đồ học sinh thanh lịch trên ứng dụng Canva.\n• [Mã AI: 6.C2.3] Thử nghiệm tính năng tư vấn phối màu trang phục tự động từ công cụ AI.'
      },
      {
        w: 22,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 8: Sử dụng và bảo quản trang phục (Tiết 2)',
        p: 1,
        y: '- Trình bày được quy trình bảo quản trang phục (giặt, phơi, là/ủi, cất giữ) và ý nghĩa của các ký hiệu giặt là trên nhãn quần áo.\n- Có ý thức tự giác bảo quản trang phục cá nhân.',
        eq: 'Nhãn mác quần áo thật, bảng giải mã ký hiệu giặt là quốc tế',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.3.TC1b',
        ai: '6.A2.2',
        dc: '• [Mã NLS: 1.3.TC1b] Sử dụng điện thoại quét mã QR/nhãn mác tra cứu hướng dẫn bảo quản quần áo.\n• [Mã AI: 6.A2.2] Nhận diện các ký hiệu giặt là quốc tế bằng ứng dụng camera thông minh AI.'
      },
      {
        w: 23,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 8: Sử dụng và bảo quản trang phục (Tiết 3 - Thực hành)',
        p: 1,
        y: '- Thực hành đọc ký hiệu giặt là, gấp quần áo đúng cách và là/ủi phẳng một chiếc áo sơ mi hoặc quần âu an toàn.\n- Đảm bảo an toàn điện và phòng tránh bỏng nhiệt khi sử dụng bàn là.',
        eq: 'Bàn là điện, cầu là, áo sơ mi mẫu, găng tay chống nóng, bình xịt nước',
        loc: 'Phòng thực hành Nữ công / Lớp học',
        nls: '4.3.TC1a',
        ai: '6.B1.5',
        dc: '• [Mã NLS: 4.3.TC1a] Tuân thủ quy tắc an toàn khi sử dụng thiết bị nhiệt điện trong sinh hoạt.\n• [Mã AI: 6.B1.5] Xem video mô phỏng thao tác là quần áo an toàn, tránh nhiệt độ quá cao.'
      },
      {
        w: 24,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 9: Thời trang (Tiết 1)',
        p: 1,
        y: '- Nêu được khái niệm thời trang và một số phong cách thời trang phổ biến (cổ điển, thể thao, dân gian, lãng mạn).\n- Nhận biết sự thay đổi của thời trang qua các giai đoạn lịch sử.',
        eq: 'Tranh ảnh các bộ sưu tập thời trang theo phong cách, máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1d',
        ai: '6.A1.4',
        dc: '• [Mã NLS: 1.1.TC1d] Tìm kiếm tư liệu hình ảnh lịch sử thời trang Việt Nam qua các thập niên.\n• [Mã AI: 6.A1.4] Trải nghiệm AI tạo ảnh phong cách thời trang từ câu lệnh mô tả (Text-to-Image).'
      },
      {
        w: 25,
        t: 'Chương III: Trang phục và thời trang',
        n: 'Bài 9: Thời trang (Tiết 2)',
        p: 1,
        y: '- Lựa chọn được phong cách thời trang phù hợp với lứa tuổi học sinh, vóc dáng và sở thích cá nhân.\n- Tôn trọng phong cách thời trang của người khác, sống giản dị và văn minh.',
        eq: 'Phiếu trắc nghiệm phong cách thời trang cá nhân, bảng màu sắc',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.5.TC1a',
        ai: '6.B1.6',
        dc: '• [Mã NLS: 2.5.TC1a] Thảo luận chuẩn mực văn hóa ứng xử và trang phục học đường trên diễn đàn lớp.\n• [Mã AI: 6.B1.6] Tự đánh giá mức độ phù hợp của trang phục với môi trường học đường.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 6',
        p: 1,
        y: '- Đánh giá mức độ tiếp thu kiến thức trọng tâm Chương III: Trang phục và thời trang (Bài 7, 8, 9).\n- Giúp học sinh tự đánh giá năng lực và chuẩn bị tốt cho các bài học kỹ thuật điện gia đình.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 2',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1c',
        ai: '6.B2.3',
        dc: '• [Mã NLS: 4.1.TC1c] Thực hiện bài kiểm tra nghiêm túc, đúng thời gian quy định.\n• [Mã AI: 6.B2.3] Thể hiện tư duy độc lập và kỹ năng giải quyết tình huống thực tế trong bài thi.'
      },
      {
        w: 27,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 10: Khái quát về đồ dùng điện trong gia đình',
        p: 1,
        y: '- Hiểu được các thông số kĩ thuật quan trọng của đồ dùng điện (điện áp định mức U, công suất định mức P).\n- Lựa chọn được đồ dùng điện an toàn, tiết kiệm năng lượng có dán nhãn năng lượng uy tín.',
        eq: 'Mẫu nhãn năng lượng thực tế (nhãn sao chép, nhãn xác nhận), thiết bị điện gia dụng',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1c',
        ai: '6.A2.3',
        dc: '• [Mã NLS: 1.2.TC1c] Tra cứu cơ sở dữ liệu nhãn năng lượng của Bộ Công Thương online.\n• [Mã AI: 6.A2.3] Nhận diện và đọc thông số nhãn năng lượng tiết kiệm điện bằng AI Camera.'
      },
      {
        w: 28,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 11: Đèn điện',
        p: 1,
        y: '- Nêu được cấu tạo, nguyên lý làm việc và ưu nhược điểm của các loại đèn điện: đèn sợi đốt, đèn huỳnh quang/compact, đèn LED.\n- Lựa chọn và sử dụng đèn LED chiếu sáng tiết kiệm điện và bảo vệ thị lực.',
        eq: 'Mẫu bóng đèn sợi đốt, bóng huỳnh quang, bóng LED, đui đèn, đồng hồ đo công suất',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1e',
        ai: '6.C1.5',
        dc: '• [Mã NLS: 3.1.TC1e] So sánh hiệu suất phát quang và tuổi thọ của đèn LED với đèn sợi đốt trên bảng tính.\n• [Mã AI: 6.C1.5] Khám phá nguyên lý hoạt động của đèn chiếu sáng cảm ứng thông minh điều khiển bằng AI.'
      },
      {
        w: 29,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 12: Nồi cơm điện',
        p: 1,
        y: '- Trình bày được cấu tạo (thân nồi, nồi nấu, mâm nhiệt, rơ-le nhiệt) và nguyên lí hoạt động của nồi cơm điện.\n- Sử dụng và bảo quản nồi cơm điện đúng quy trình kĩ thuật, đảm bảo an toàn.',
        eq: 'Nồi cơm điện tháo lắp mẫu, sơ đồ cấu tạo, rơ-le nhiệt rời',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1c',
        ai: '6.A2.4',
        dc: '• [Mã NLS: 5.2.TC1c] Xem video đồ họa 3D mô phỏng nguyên lý đóng ngắt của rơ-le nhiệt khi cạn nước.\n• [Mã AI: 6.A2.4] Tìm hiểu công nghệ nấu cơm điện tử cao tần (IH) ứng dụng thuật toán vi điều khiển AI.'
      },
      {
        w: 30,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 13: Bếp hồng ngoại',
        p: 1,
        y: '- Mô tả được cấu tạo (mặt bếp, mâm nhiệt hồng ngoại, thân bếp, bảng điều khiển) và nguyên lí làm việc của bếp hồng ngoại.\n- Nắm vững các lưu ý an toàn khi sử dụng bếp hồng ngoại tránh bị bỏng nhiệt và quá tải.',
        eq: 'Bếp hồng ngoại thực tế, mặt kính gốm chịu nhiệt, dây mayso nhiệt',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '4.3.TC1b',
        ai: '6.C1.6',
        dc: '• [Mã NLS: 4.3.TC1b] Đọc và tóm tắt cẩm nang sử dụng an toàn thiết bị nấu ăn cảm ứng điện từ trên web.\n• [Mã AI: 6.C1.6] Đặt câu hỏi so sánh ưu nhược điểm giữa bếp từ và bếp hồng ngoại cho trợ lý AI.'
      },
      {
        w: 31,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 14: Dự án: An toàn và tiết kiệm điện năng trong gia đình (Tiết 1)',
        p: 1,
        y: '- Tiến hành khảo sát thực trạng sử dụng điện năng và các nguy cơ mất an toàn điện tại gia đình.\n- Tính toán điện năng tiêu thụ hàng tháng của các đồ dùng điện chính.',
        eq: 'Hóa đơn tiền điện thực tế, bảng kê công suất thiết bị, phiếu khảo sát gia đình',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1f',
        ai: '6.C2.4',
        dc: '• [Mã NLS: 3.1.TC1f] Tạo bảng tính Excel tự động tính điện năng tiêu thụ (kWh) và ước tính tiền điện theo bậc thang.\n• [Mã AI: 6.C2.4] Nhờ AI phân tích hóa đơn điện và đề xuất các giải pháp giảm 15% điện năng tiêu thụ.'
      },
      {
        w: 32,
        t: 'Chương IV: Đồ dùng điện trong gia đình',
        n: 'Bài 14: Dự án: An toàn và tiết kiệm điện năng trong gia đình (Tiết 2)',
        p: 1,
        y: '- Xây dựng cẩm nang/poster tuyên truyền "10 quy tắc vàng sử dụng điện an toàn và tiết kiệm trong gia đình".\n- Báo cáo kết quả dự án và lan tỏa thông điệp Giờ Trái Đất.',
        eq: 'Poster dự án, bài thuyết trình đa phương tiện, video phỏng vấn người thân',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1d',
        ai: '6.D1.4',
        dc: '• [Mã NLS: 2.1.TC1d] Thiết kế Infographic tuyên truyền tiết kiệm điện năng bằng Canva/Photoshop.\n• [Mã AI: 6.D1.4] Tạo video ngắn kêu gọi hưởng ứng Giờ Trái Đất kết hợp lồng tiếng và hiệu ứng AI.'
      },
      {
        w: 33,
        t: 'Ôn tập cuối năm',
        n: 'Ôn tập toàn diện Học kỳ 2 môn Công nghệ 6 (Tiết 1)',
        p: 1,
        y: '- Hệ thống hóa kiến thức Chương III (Trang phục và thời trang) và Chương IV (Đồ dùng điện trong gia đình).\n- Giải các bài tập tính toán điện năng và bài toán phối hợp trang phục thực tiễn.',
        eq: 'Đề cương ôn tập HK2, sơ đồ tư duy liên kết chương',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1d',
        ai: '6.B1.7',
        dc: '• [Mã NLS: 1.2.TC1d] Sử dụng sơ đồ cây kỹ thuật số tổng hợp toàn bộ nhánh kiến thức Công nghệ 6.\n• [Mã AI: 6.B1.7] Thực hiện bài test kiểm tra kiến thức tự động do AI sinh ra.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Ôn tập toàn diện chuẩn bị kiểm tra cuối năm môn Công nghệ 6 (Tiết 2)',
        p: 1,
        y: '- Rèn luyện kỹ năng làm bài kiểm tra tổng hợp cả năm học, kỹ năng giải quyết tình huống kỹ thuật gia đình.\n- Chuẩn bị tâm thế tự tin bước vào kỳ kiểm tra đánh giá cuối năm.',
        eq: 'Bộ đề thi thử nghiệm trực tuyến, phiếu trả lời trắc nghiệm chuẩn hóa',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1d',
        ai: '6.B2.4',
        dc: '• [Mã NLS: 5.2.TC1d] Luyện đề thi mẫu trên nền tảng thi trực tuyến LMS của trường.\n• [Mã AI: 6.B2.4] Phân tích các lỗi sai thường gặp khi làm bài trắc nghiệm với sự trợ giúp của AI.'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Công nghệ 6',
        p: 1,
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn Công nghệ Lớp 6 cả năm học.\n- Đánh giá sự tiến bộ về năng lực công nghệ gia đình và kỹ năng thực hành.',
        eq: 'Đề kiểm tra in sẵn, ma trận, bảng đặc tả đề kiểm tra cuối năm',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1d',
        ai: '6.B2.5',
        dc: '• [Mã NLS: 4.1.TC1d] Hoàn thành bài kiểm tra cuối năm nghiêm túc, khách quan, đúng quy chế.\n• [Mã AI: 6.B2.5] Tổng kết hồ sơ học tập số môn Công nghệ 6 và hướng tới kiến thức Lớp 7.'
      }
    ];

    grade6Plan.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: item.p,
        yccd: item.y,
        equipment: item.eq,
        location: item.loc,
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 18 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.n.includes('Dự án') ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. CÔNG NGHỆ LỚP 7 - NÔNG NGHIỆP (35 tiết / 35 tuần)
  // =========================================================================
  if (g === 7) {
    const grade7Plan = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 1: Giới thiệu về trồng trọt',
        p: 1,
        y: '- Nêu được vai trò và triển vọng của ngành trồng trọt ở Việt Nam (lương thực, thực phẩm, xuất khẩu, nông nghiệp công nghệ cao).\n- Kể tên được một số nhóm cây trồng phổ biến và phương thức trồng trọt chính.',
        eq: 'Tranh ảnh các mô hình nông nghiệp công nghệ cao, video giới thiệu nông nghiệp 4.0',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1a',
        ai: '7.A1.1',
        dc: '• [Mã NLS: 1.1.TC1a] Tra cứu số liệu xuất khẩu nông sản chủ lực của Việt Nam trên website Bộ NN&PTNT.\n• [Mã AI: 7.A1.1] Khám phá ứng dụng của Trí tuệ nhân tạo (AI) trong nông nghiệp chính xác (dự báo mùa vụ, tưới tự động).'
      },
      {
        w: 2,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 2: Làm đất trồng cây (Tiết 1)',
        p: 1,
        y: '- Nêu được mục đích của việc làm đất trồng cây (tơi xốp, giữ ẩm, diệt mầm sâu bệnh).\n- Trình bày được các công việc chính trong quy trình làm đất (cày đất, bừa đập đất, lên luống).',
        eq: 'Mẫu các loại đất trồng, khay đất, xẻng con, cuốc mini, tranh ảnh quy trình làm đất',
        loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
        nls: '3.1.TC1a',
        ai: '7.C1.1',
        dc: '• [Mã NLS: 3.1.TC1a] Lập bảng so sánh đặc tính đất cát, đất thịt, đất sét trên Google Sheets.\n• [Mã AI: 7.C1.1] Đặt câu hỏi cho AI về các biện pháp cải tạo đất bị chua phèn hoặc nhiễm mặn.'
      },
      {
        w: 3,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 2: Làm đất trồng cây (Tiết 2 - Bón phân lót)',
        p: 1,
        y: '- Nhận biết được các loại phân bón lót (phân hữu cơ, phân vi sinh, phân lân) và kỹ thuật bón phân lót an toàn cho đất và cây trồng.\n- Có ý thức bảo vệ môi trường đất trồng.',
        eq: 'Mẫu phân hữu cơ hoai mục, phân vi sinh, dụng cụ bón phân, găng tay bảo hộ',
        loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
        nls: '4.4.TC1a',
        ai: '7.B1.1',
        dc: '• [Mã NLS: 4.4.TC1a] Tìm hiểu tác hại của lạm dụng phân bón hóa học đối với nguồn nước và đất qua tư liệu số.\n• [Mã AI: 7.B1.1] Đánh giá các giải pháp ủ phân hữu cơ vi sinh tuần hoàn từ rác nhà bếp do AI gợi ý.'
      },
      {
        w: 4,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 3: Gieo trồng, chăm sóc và phòng trừ sâu bệnh cho cây trồng (Tiết 1)',
        p: 1,
        y: '- Nêu được yêu cầu kỹ thuật khi chọn hạt giống, cây con và các phương pháp gieo trồng (gieo hạt trực tiếp, trồng bằng cây con).\n- Thực hiện đúng khoảng cách và mật độ gieo trồng.',
        eq: 'Khay ươm hạt, hạt giống rau cải, rau mầm, cây con có bầu đất',
        loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
        nls: '1.3.TC1a',
        ai: '7.C1.2',
        dc: '• [Mã NLS: 1.3.TC1a] Xem video hướng dẫn kỹ thuật ươm hạt và chăm sóc cây con trong nhà màng.\n• [Mã AI: 7.C1.2] Sử dụng AI tính toán lượng hạt giống cần gieo trên diện tích đất cụ thể.'
      },
      {
        w: 5,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 3: Gieo trồng, chăm sóc và phòng trừ sâu bệnh cho cây trồng (Tiết 2)',
        p: 1,
        y: '- Trình bày được các công việc chăm sóc cây trồng: tỉa dặm cây, làm cỏ vun xới, tưới tiêu nước và bón phân thúc.\n- Hiểu được nhu cầu nước và dinh dưỡng của cây ở từng giai đoạn sinh trưởng.',
        eq: 'Bình tưới nước, xới đất, phân bón thúc (NPK), tranh ảnh các giai đoạn phát triển cây',
        loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
        nls: '5.2.TC1a',
        ai: '7.D1.1',
        dc: '• [Mã NLS: 5.2.TC1a] Khám phá mô hình hệ thống tưới nhỏ giọt tự động điều khiển qua Internet.\n• [Mã AI: 7.D1.1] Thiết kế sơ đồ hệ thống tưới thông minh có cảm biến độ ẩm đất hỗ trợ bởi AI.'
      },
      {
        w: 6,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 3: Gieo trồng, chăm sóc và phòng trừ sâu bệnh cho cây trồng (Tiết 3)',
        p: 1,
        y: '- Nhận biết được dấu hiệu cây trồng bị sâu, bệnh hại tấn công.\n- Trình bày được các biện pháp phòng trừ sâu bệnh theo nguyên tắc IPM (biện pháp canh tác, thủ công, sinh học, hóa học an toàn).',
        eq: 'Mẫu lá cây bị sâu bệnh hại, chế phẩm sinh học trừ sâu, tranh ảnh thiên địch (bọ rùa, ong mắt đỏ)',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1a',
        ai: '7.A2.1',
        dc: '• [Mã NLS: 1.2.TC1a] Sử dụng ứng dụng Plantix/Google Lens quét lá nhận diện sâu bệnh hại cây trồng.\n• [Mã AI: 7.A2.1] Trải nghiệm mô hình AI thị giác máy tính nhận biết bệnh đốm lá, rầy mềm qua ảnh chụp.'
      },
      {
        w: 7,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 4: Thu hoạch sản phẩm trồng trọt',
        p: 1,
        y: '- Nêu được mục đích và thời điểm thu hoạch sản phẩm trồng trọt (độ chín sinh lý/kỹ thuật).\n- Trình bày các phương pháp thu hoạch (hái, cắt, nhổ, đào) và yêu cầu bảo quản nông sản sau thu hoạch.',
        eq: 'Dụng cụ thu hoạch (kéo cắt cành, bao tay), tranh ảnh máy gặt đập liên hợp',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1b',
        ai: '7.C1.3',
        dc: '• [Mã NLS: 3.1.TC1b] Lập bảng theo dõi thời gian sinh trưởng và ngày dự kiến thu hoạch của các loại rau.\n• [Mã AI: 7.C1.3] Tìm hiểu công nghệ robot thu hoạch nông sản tự động bằng AI trong nhà kính.'
      },
      {
        w: 8,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 5: Nhân giống vô tính cây trồng',
        p: 1,
        y: '- Nêu được khái niệm và ưu nhược điểm của nhân giống vô tính cây trồng.\n- Trình bày quy trình kỹ thuật giâm cành, chiết cành và ghép cây đơn giản.',
        eq: 'Dao chiết cành, kéo cắt cành, giá thể đất ẩm, cành hoa hồng/rau ngót, dây nylon buộc',
        loc: 'Phòng thực hành Sinh học - Công nghệ / Vườn trường',
        nls: '5.3.TC1a',
        ai: '7.D1.2',
        dc: '• [Mã NLS: 5.3.TC1a] Xem video 3D mô phỏng quy trình tạo tầng sinh mô liền sẹo khi ghép mắt cây.\n• [Mã AI: 7.D1.2] Tạo video ngắn hướng dẫn thao tác giâm cành rau ngót bằng ứng dụng số.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 7',
        p: 1,
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Chương I: Trồng trọt (Bài 1 - 5).\n- Rèn luyện kỹ năng giải quyết tình huống kỹ thuật canh tác thực tiễn và tính trung thực học thuật.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1a',
        ai: '7.B2.1',
        dc: '• [Mã NLS: 4.1.TC1a] Tuân thủ quy chế phòng thi, bảo mật thông tin tài khoản làm bài trắc nghiệm.\n• [Mã AI: 7.B2.1] Tự kiểm tra và đánh giá năng lực tư duy kỹ thuật độc lập trong bài thi.'
      },
      {
        w: 10,
        t: 'Chương I: Trồng trọt',
        n: 'Bài 6: Dự án trồng rau an toàn',
        p: 1,
        y: '- Lập kế hoạch, tính toán chi phí và thực hành quy trình trồng một loại rau an toàn (rau cải, rau mầm) tại trường/nhà.\n- Ghi chép nhật ký sinh trưởng và đánh giá chất lượng sản phẩm rau thu hoạch.',
        eq: 'Khay xốp, đất sạch hữu cơ Tribat, hạt giống rau mầm, bình phun sương, nhật ký dự án',
        loc: 'Phòng học bộ môn Công nghệ / Vườn thực nghiệm',
        nls: '2.4.TC1a',
        ai: '7.D2.1',
        dc: '• [Mã NLS: 2.4.TC1a] Sử dụng Google Docs làm việc nhóm trực tuyến ghi nhật ký chăm sóc cây hàng ngày.\n• [Mã AI: 7.D2.1] Ứng dụng AI phân tích tốc độ sinh trưởng của rau mầm qua các mốc ảnh chụp.'
      },
      {
        w: 11,
        t: 'Chương II: Lâm nghiệp',
        n: 'Bài 7: Giới thiệu về rừng (Tiết 1)',
        p: 1,
        y: '- Nêu được vai trò to lớn của rừng đối với môi trường sinh thái (điều hòa khí hậu, chắn gió bão, giữ nước ngầm, bảo tồn đa dạng sinh học) và đời sống con người.\n- Phân biệt được các loại rừng chính: rừng phòng hộ, rừng đặc dụng, rừng sản xuất.',
        eq: 'Bản đồ hiện trạng rừng Việt Nam, video phóng sự về lá phổi xanh rừng ngập mặn Cần Giờ',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1b',
        ai: '7.A1.2',
        dc: '• [Mã NLS: 1.1.TC1b] Khai thác bản đồ GIS trực tuyến theo dõi độ che phủ rừng tại các tỉnh thành Việt Nam.\n• [Mã AI: 7.A1.2] Khám phá công nghệ AI phân tích ảnh vệ tinh giám sát diện tích rừng bị suy giảm.'
      },
      {
        w: 12,
        t: 'Chương II: Lâm nghiệp',
        n: 'Bài 7: Giới thiệu về rừng (Tiết 2)',
        p: 1,
        y: '- Trình bày được thực trạng tài nguyên rừng ở nước ta hiện nay và các nguyên nhân làm suy giảm diện tích rừng.\n- Nâng cao ý thức trách nhiệm bảo vệ rừng và tài nguyên thiên nhiên.',
        eq: 'Tranh ảnh nạn cháy rừng, phá rừng; tài liệu Luật Lâm nghiệp',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '4.4.TC1b',
        ai: '7.B1.2',
        dc: '• [Mã NLS: 4.4.TC1b] Tuyên truyền chiến dịch trồng 1 tỷ cây xanh trên mạng xã hội trường học.\n• [Mã AI: 7.B1.2] Đặt câu hỏi cho AI về các chính sách chi trả dịch vụ môi trường rừng bền vững.'
      },
      {
        w: 13,
        t: 'Chương II: Lâm nghiệp',
        n: 'Bài 8: Trồng, chăm sóc và bảo vệ rừng (Tiết 1)',
        p: 1,
        y: '- Trình bày được quy trình trồng rừng bằng cây con có bầu và cây con rễ trần; xác định được thời vụ trồng rừng phù hợp ở các vùng miền.\n- Nêu các bước chăm sóc rừng sau khi trồng (làm cỏ, xới đất, tỉa dặm).',
        eq: 'Mô hình bầu ươm cây lâm nghiệp (keo, bạch đàn, lim xẹt), cuốc xẻng',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1c',
        ai: '7.C1.4',
        dc: '• [Mã NLS: 3.1.TC1c] Lập bảng tiến độ trồng và chăm sóc rừng theo chu kỳ 3 năm đầu trên Excel.\n• [Mã AI: 7.C1.4] Tìm hiểu kỹ thuật bay drone gieo hạt giống phục hồi rừng tự nhiên hỗ trợ AI.'
      },
      {
        w: 14,
        t: 'Chương II: Lâm nghiệp',
        n: 'Bài 8: Trồng, chăm sóc và bảo vệ rừng (Tiết 2)',
        p: 1,
        y: '- Nêu được các biện pháp bảo vệ rừng: phòng chống cháy rừng, ngăn chặn chặt phá rừng trái phép và chăn thả gia súc bừa bãi.\n- Phân tích hậu quả nghiêm trọng của việc mất rừng gây ra lũ quét, sạt lở đất.',
        eq: 'Video công tác tuần tra bảo vệ rừng và hệ thống camera cảm biến báo cháy rừng',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1a',
        ai: '7.A2.2',
        dc: '• [Mã NLS: 2.1.TC1a] Thiết kế áp phích số tuyên truyền "Phòng cháy chữa cháy rừng mùa khô" bằng Canva.\n• [Mã AI: 7.A2.2] Xem video mô phỏng hệ thống AI phát hiện khói và điểm cháy rừng từ xa qua camera nhiệt.'
      },
      {
        w: 15,
        t: 'Chương II: Lâm nghiệp',
        n: 'Bài 8: Trồng, chăm sóc và bảo vệ rừng (Tiết 3 - Dự án xanh)',
        p: 1,
        y: '- Học sinh xây dựng kế hoạch "Vườn ươm mầm xanh học đường" hoặc tham gia hoạt động chăm sóc cây xanh quanh trường/khu dân cư.\n- Rèn luyện tinh thần yêu thiên nhiên, bảo vệ môi trường sống.',
        eq: 'Hạt giống cây xanh, chậu ươm mầm, bình tưới nước, bảng phân công nhiệm vụ',
        loc: 'Phòng học bộ môn Công nghệ / Khu vườn trường',
        nls: '5.3.TC1b',
        ai: '7.D1.3',
        dc: '• [Mã NLS: 5.3.TC1b] Tạo mã QR gán vào các cây xanh trong khuôn viên trường để tra cứu tên khoa học và công dụng.\n• [Mã AI: 7.D1.3] Sử dụng AI tạo nội dung tóm tắt giới thiệu hệ thực vật trong sân trường.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Công nghệ 7',
        p: 1,
        y: '- Đánh giá toàn diện kiến thức, kĩ năng môn Công nghệ 7 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh, làm căn cứ định hướng kế hoạch dạy học Chăn nuôi & Thủy sản HK2.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1b',
        ai: '7.B2.3',
        dc: '• [Mã NLS: 4.1.TC1b] Tuân thủ quy chế thi nghiêm túc, thể hiện tác phong công nghiệp và trung thực.\n• [Mã AI: 7.B2.3] Tự phản hồi kết quả thi và thiết lập mục tiêu học tập cho Học kỳ 2.'
      },
      {
        w: 17,
        t: 'Chương II: Lâm nghiệp',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Công nghệ 7',
        p: 1,
        y: '- Chữa bài kiểm tra cuối HK1; chỉ ra lỗi sai phổ biến và củng cố kiến thức trọng tâm Chương I và Chương II.\n- Rèn luyện kỹ năng giải quyết tình huống kỹ thuật nông nghiệp thực tế.',
        eq: 'Đề kiểm tra, đáp án biểu điểm, ngân hàng câu hỏi bổ trợ',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1b',
        ai: '7.B1.3',
        dc: '• [Mã NLS: 1.2.TC1b] Sử dụng sơ đồ tư duy liên kết kiến thức Trồng trọt và Lâm nghiệp trên XMind.\n• [Mã AI: 7.B1.3] Luyện tập trắc nghiệm tương tác trên Quizizz với ngân hàng câu hỏi phân hóa AI.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm dự án Nông - Lâm nghiệp Lớp 7',
        p: 1,
        y: '- Báo cáo sản phẩm dự án cây xanh học đường, kế hoạch trồng và chăm sóc hoa trong khuôn viên trường.\n- Đánh giá tổng kết quá trình học tập và rèn luyện môn Công nghệ trong Học kỳ 1.',
        eq: 'Slide thuyết trình, sản phẩm chậu hoa cây cảnh, bảng tổng kết HK1',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1b',
        ai: '7.B2.2',
        dc: '• [Mã NLS: 5.2.TC1b] Tự đánh giá mức độ hoàn thành các chỉ tiêu kiến thức HK1 trên phần mềm LMS.\n• [Mã AI: 7.B2.2] Nhờ AI gợi ý phương pháp ôn tập tập trung vào các nội dung còn yếu.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 9: Giới thiệu về chăn nuôi',
        p: 1,
        y: '- Nêu được vai trò và triển vọng của ngành chăn nuôi ở Việt Nam (cung cấp thực phẩm giàu đạm, sức kéo, phân bón, xuất khẩu).\n- Kể tên các nhóm vật nuôi phổ biến và một số phương thức chăn nuôi (chăn thả tự do, bán thâm canh, nuôi công nghiệp tập trung).',
        eq: 'Tranh ảnh các giống vật nuôi cao sản, video trang trại chăn nuôi khép kín tự động',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1c',
        ai: '7.A1.3',
        dc: '• [Mã NLS: 1.1.TC1c] Tìm kiếm hình ảnh các giống vật nuôi bản địa đặc sản nổi tiếng của Việt Nam.\n• [Mã AI: 7.A1.3] Tìm hiểu công nghệ AI quản lý trang trại bò sữa thông minh (đo sản lượng sữa, theo dõi sức khỏe).'
      },
      {
        w: 20,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 10: Nuôi dưỡng và chăm sóc vật nuôi (Tiết 1)',
        p: 1,
        y: '- Nêu được kỹ thuật nuôi dưỡng và chăm sóc vật nuôi non (giữ ấm, bú sữa đầu, tập ăn sớm) và vật nuôi đực giống.\n- Hiểu được nhu cầu dinh dưỡng đặc thù của từng nhóm vật nuôi.',
        eq: 'Tranh ảnh chuồng nuôi úm gia cầm con, đèn hồng ngoại sưởi ấm, máng ăn uống',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1d',
        ai: '7.C1.5',
        dc: '• [Mã NLS: 3.1.TC1d] Lập bảng chế độ dinh dưỡng và nhiệt độ úm gà con theo từng tuần tuổi trên Excel.\n• [Mã AI: 7.C1.5] Đặt câu hỏi cho AI về tầm quan trọng của kháng thể trong sữa đầu của gia súc mẹ.'
      },
      {
        w: 21,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 10: Nuôi dưỡng và chăm sóc vật nuôi (Tiết 2)',
        p: 1,
        y: '- Nêu được kỹ thuật nuôi dưỡng và chăm sóc vật nuôi cái sinh sản (giai đoạn mang thai và nuôi con).\n- Vận dụng vào chăm sóc vật nuôi cảnh hoặc gia súc, gia cầm tại gia đình.',
        eq: 'Video quy trình chăm sóc lợn nái/chó mèo sinh sản, bảng thành phần thức ăn',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.2.TC1a',
        ai: '7.C2.1',
        dc: '• [Mã NLS: 2.2.TC1a] Chia sẻ kinh nghiệm chăm sóc thú cưng sinh sản trên nhóm học tập trực tuyến.\n• [Mã AI: 7.C2.1] Nhờ AI tư vấn khẩu phần thức ăn phù hợp cho mèo mẹ đang nuôi con.'
      },
      {
        w: 22,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 11: Phòng và trị bệnh cho vật nuôi (Tiết 1)',
        p: 1,
        y: '- Nêu được nguyên nhân gây bệnh cho vật nuôi (do vi sinh vật, ký sinh trùng, dinh dưỡng, môi trường sống).\n- Trình bày tầm quan trọng của nguyên tắc "Phòng bệnh hơn chữa bệnh" trong chăn nuôi.',
        eq: 'Lịch tiêm phòng vắc-xin cho vật nuôi, mẫu lọ vắc-xin rỗng, thuốc khử trùng chuồng trại',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.3.TC1b',
        ai: '7.A2.3',
        dc: '• [Mã NLS: 1.3.TC1b] Tra cứu lịch tiêm phòng bắt buộc cho chó mèo (dại) và gia cầm (cúm H5N1) trên Cục Thú y.\n• [Mã AI: 7.A2.3] Xem mô phỏng AI cơ chế vắc-xin tạo miễn dịch chống virus cho vật nuôi.'
      },
      {
        w: 23,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 11: Phòng và trị bệnh cho vật nuôi (Tiết 2)',
        p: 1,
        y: '- Trình bày các biện pháp phòng trị bệnh tổng hợp: vệ sinh tiêu độc khử trùng chuồng trại, tiêm vắc-xin định kỳ, cách ly vật nuôi ốm và xử lý chất thải chăn nuôi (hầm Biogas, đệm lót sinh học).\n- Có ý thức phòng chống dịch bệnh lây từ động vật sang người.',
        eq: 'Mô hình hầm Biogas xử lý chất thải, chế phẩm đệm lót sinh học Balasa N01',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '4.4.TC1c',
        ai: '7.B1.4',
        dc: '• [Mã NLS: 4.4.TC1c] Tìm hiểu các giải pháp xử lý chất thải chăn nuôi tuần hoàn bảo vệ môi trường nông thôn.\n• [Mã AI: 7.B1.4] Đánh giá mô hình chăn nuôi an toàn sinh học VietGAHP hỗ trợ bởi công nghệ số.'
      },
      {
        w: 24,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 12: Kĩ thuật nuôi gà thịt trong nông hộ (Tiết 1)',
        p: 1,
        y: '- Trình bày được yêu cầu kỹ thuật làm chuồng trại, chọn giống gà thịt khỏe mạnh (gà ri, gà mía, gà đông tảo, gà tam hoàng).\n- Nắm vững quy trình chuẩn bị chuồng nuôi và dụng cụ úm gà.',
        eq: 'Mô hình chuồng gà thả vườn có sân chơi, máng ăn máng uống tự động',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1e',
        ai: '7.C1.6',
        dc: '• [Mã NLS: 3.1.TC1e] Thiết kế sơ đồ mặt bằng chuồng nuôi gà thả vườn 50 con bằng phần mềm vẽ kỹ thuật.\n• [Mã AI: 7.C1.6] Tra cứu các giống gà thịt thương phẩm đạt hiệu quả kinh tế cao qua AI.'
      },
      {
        w: 25,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 12: Kĩ thuật nuôi gà thịt trong nông hộ (Tiết 2)',
        p: 1,
        y: '- Nêu được kỹ thuật chăm sóc gà thịt giai đoạn úm (1 - 4 tuần tuổi) và giai đoạn thả vườn (5 tuần đến xuất bán).\n- Xác định được thời điểm xuất bán đạt chất lượng thịt thơm ngon và hiệu quả kinh tế cao.',
        eq: 'Thức ăn hỗn hợp cho gà thịt theo giai đoạn, cân điện tử, nhiệt kế đo phòng úm',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1c',
        ai: '7.C2.2',
        dc: '• [Mã NLS: 5.2.TC1c] Tạo bảng tính theo dõi mức tiêu tốn thức ăn (FCR) và tăng trọng của đàn gà theo tuần.\n• [Mã AI: 7.C2.2] Nhờ AI dự toán chi phí thức ăn, thuốc thú y và lợi nhuận nuôi 100 con gà ri thả vườn.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 7',
        p: 1,
        y: '- Đánh giá mức độ tiếp thu kiến thức trọng tâm Chương III: Chăn nuôi (Bài 9 - 12).\n- Rèn luyện kỹ năng phân tích tình huống bệnh học và quy trình chăm sóc vật nuôi thực tế.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 2',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1c',
        ai: '7.B2.4',
        dc: '• [Mã NLS: 4.1.TC1c] Thực hiện bài kiểm tra nghiêm túc, đúng quy chế và thời gian quy định.\n• [Mã AI: 7.B2.4] Thể hiện tư duy độc lập và kỹ năng giải quyết tình huống kỹ thuật chăn nuôi.'
      },
      {
        w: 27,
        t: 'Chương III: Chăn nuôi',
        n: 'Bài 13: Thực hành: Lập kế hoạch nuôi vật nuôi trong gia đình',
        p: 1,
        y: '- Lập được bản kế hoạch chi tiết nuôi một loại vật nuôi cụ thể trong gia đình (chó, mèo, thỏ hoặc đàn gà nhỏ).\n- Tính toán dự trù chi phí con giống, thức ăn, chuồng trại và phương án phòng bệnh an toàn.',
        eq: 'Mẫu bản kế hoạch chăn nuôi, bảng báo giá thị trường con giống và thức ăn',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.4.TC1b',
        ai: '7.D1.4',
        dc: '• [Mã NLS: 2.4.TC1b] Sử dụng bảng tính và công cụ thuyết trình trực tuyến hoàn thiện dự án chăn nuôi gia đình.\n• [Mã AI: 7.D1.4] Ứng dụng AI phân tích tính khả thi và rủi ro dịch bệnh của dự án chăn nuôi.'
      },
      {
        w: 28,
        t: 'Chương IV: Thuỷ sản',
        n: 'Bài 14: Giới thiệu về thuỷ sản (Tiết 1)',
        p: 1,
        y: '- Nêu được vai trò và triển vọng phát triển của ngành thủy sản Việt Nam (cung cấp đạm, tạo việc làm, xuất khẩu tôm cá tỷ đô).\n- Nhận biết các nhóm thủy sản nuôi phổ biến (cá nước ngọt, cá nước lợ, tôm, nhuyễn thể).',
        eq: 'Tranh ảnh các loài thủy sản có giá trị kinh tế cao (cá tra, cá basa, tôm sú, tôm thẻ), máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC1d',
        ai: '7.A1.4',
        dc: '• [Mã NLS: 1.1.TC1d] Tra cứu số liệu kim ngạch xuất khẩu tôm và cá tra Việt Nam trên Hiệp hội VASEP.\n• [Mã AI: 7.A1.4] Tìm hiểu công nghệ camera AI dưới nước giám sát sức ăn của tôm trong ao nuôi công nghệ cao.'
      },
      {
        w: 29,
        t: 'Chương IV: Thuỷ sản',
        n: 'Bài 14: Giới thiệu về thuỷ sản (Tiết 2)',
        p: 1,
        y: '- Phân tích các yếu tố môi trường nước nuôi thủy sản (nhiệt độ, độ trong, độ pH, hàm lượng oxy hòa tan).\n- Nhận thức được tầm quan trọng của việc bảo vệ nguồn nước và hệ sinh thái thủy sinh.',
        eq: 'Bộ dụng cụ đo môi trường nước (giấy đo pH, đĩa Secci đo độ trong, nhiệt kế nước)',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC1f',
        ai: '7.C1.7',
        dc: '• [Mã NLS: 3.1.TC1f] Ghi chép và phân tích số liệu chất lượng nước ao nuôi trên Google Sheets.\n• [Mã AI: 7.C1.7] Đặt câu hỏi cho AI về các biện pháp xử lý nước ao nuôi bị ô nhiễm khí độc NH3, H2S.'
      },
      {
        w: 30,
        t: 'Chương IV: Thuỷ sản',
        n: 'Bài 15: Nuôi cá ao (Tiết 1)',
        p: 1,
        y: '- Trình bày được các bước chuẩn bị ao nuôi cá (tát cạn, dọn bùn, rắc vôi khử trùng, phơi đáy, lấy nước qua lưới lọc).\n- Nắm vững kỹ thuật thả cá giống an toàn (thuần nhiệt, mật độ phù hợp).',
        eq: 'Video quy trình cải tạo ao nuôi cá truyền thống và ao lót bạt công nghệ cao',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1d',
        ai: '7.C2.3',
        dc: '• [Mã NLS: 5.2.TC1d] Xem video mô phỏng quy trình cân bằng nhiệt độ túi cá giống trước khi thả ao.\n• [Mã AI: 7.C2.3] Nhờ AI gợi ý mật độ thả ghép các loài cá ở các tầng nước khác nhau (trắm, trôi, mè, chép).'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Công nghệ 7',
        p: 1,
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn Công nghệ Lớp 7 cả năm học.\n- Đánh giá năng lực tư duy kỹ thuật nông nghiệp và ý thức bảo vệ môi trường sinh thái.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối năm',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1d',
        ai: '7.B2.6',
        dc: '• [Mã NLS: 4.1.TC1d] Hoàn thành bài kiểm tra cuối năm nghiêm túc, đúng quy chế phòng thi.\n• [Mã AI: 7.B2.6] Đánh giá tổng kết danh mục sản phẩm học tập và chuẩn bị chuyển cấp lên Công nghệ 8.'
      },
      {
        w: 32,
        t: 'Chương IV: Thuỷ sản',
        n: 'Chữa bài kiểm tra cuối HK2 & Bài 16: Thực hành: Lập kế hoạch nuôi cá cảnh',
        p: 1,
        y: '- Chữa bài kiểm tra cuối HK2; lập kế hoạch nuôi một bể cá cảnh mini (chọn bể, hệ thống lọc nước, máy sục khí, ánh sáng và chế độ cho ăn).\n- Rèn luyện kỹ năng quan sát, yêu thiên nhiên và giải trí lành mạnh.',
        eq: 'Đề kiểm tra, đáp án biểu điểm, bể cá mini mẫu, cây thủy sinh, máy lọc thác nước, thức ăn cá cảnh',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC1b',
        ai: '7.D2.2',
        dc: '• [Mã NLS: 2.1.TC1b] Thiết kế mô hình bể cá cảnh thủy sinh mini trên phần mềm đồ họa SketchUp/Canva.\n• [Mã AI: 7.D2.2] Nhờ AI tư vấn chọn loài cá cảnh hiền lành nuôi chung và cây thủy sinh dễ sống.'
      },
      {
        w: 33,
        t: 'Ôn tập cuối năm',
        n: 'Hệ thống hóa toàn bộ kiến thức Nông nghiệp Lớp 7 (Tiết 1)',
        p: 1,
        y: '- Tổng hợp kiến thức cả năm 4 chương: Trồng trọt, Lâm nghiệp, Chăn nuôi, Thủy sản.\n- Rèn luyện kỹ năng liên kết các mắt xích trong chuỗi nông nghiệp tuần hoàn (Trồng trọt -> Chăn nuôi -> Biogas -> Trồng trọt/Thủy sản).',
        eq: 'Sơ đồ tư duy nông nghiệp tuần hoàn, phiếu ôn tập tổng hợp',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC1c',
        ai: '7.B1.5',
        dc: '• [Mã NLS: 1.2.TC1c] Xây dựng Infographic tổng kết hệ sinh thái nông nghiệp công nghệ cao Lớp 7.\n• [Mã AI: 7.B1.5] Luyện tập các câu hỏi tình huống Nông nghiệp 4.0 với sự trợ giúp của AI.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Ôn tập toàn diện chuẩn bị tổng kết năm học môn Công nghệ 7 (Tiết 2)',
        p: 1,
        y: '- Luyện giải các bộ đề kiểm tra cuối năm chuẩn hóa ma trận Thông tư 32/2018/TT-BGDĐT.\n- Chuẩn bị đầy đủ kiến thức và tâm thế tự tin hoàn thành môn học.',
        eq: 'Bộ đề thi thử nghiệm trực tuyến, phiếu trả lời trắc nghiệm chuẩn hóa',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC1e',
        ai: '7.B2.5',
        dc: '• [Mã NLS: 5.2.TC1e] Làm bài thi thử nghiệm trên nền tảng số LMS của trường.\n• [Mã AI: 7.B2.5] Phân tích thống kê kết quả thi thử và củng cố kiến thức trọng tâm cùng AI.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Công nghệ 7 cả năm',
        p: 1,
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Công nghệ Lớp 7 của học sinh.\n- Định hướng chuẩn bị kiến thức và kỹ năng cho môn Công nghệ Lớp 8 (Công nghiệp và Thiết kế kĩ thuật).',
        eq: 'Hồ sơ học tập, bảng tổng kết điểm số cả năm',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC1d',
        ai: '7.B2.6',
        dc: '• [Mã NLS: 4.1.TC1d] Đánh giá tổng kết danh mục sản phẩm học tập và chuẩn bị chuyển cấp lên Công nghệ 8.\n• [Mã AI: 7.B2.6] Nhờ AI gợi ý lộ trình khám phá các ứng dụng STEM trong nông nghiệp tương lai.'
      }
    ];

    grade7Plan.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: item.p,
        yccd: item.y,
        equipment: item.eq,
        location: item.loc,
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.n.includes('Dự án') ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. CÔNG NGHỆ LỚP 8 - CÔNG NGHIỆP & THIẾT KẾ KĨ THUẬT
  // Linh hoạt phân bổ số tiết / tuần HK1 và HK2 (VD: 52 tiết = HK1 1t/tuần, HK2 2t/tuần)
  // =========================================================================
  if (g === 8) {
    const pWeek1 = config?.periodsPerWeekTerm1 && config.periodsPerWeekTerm1 > 0 ? config.periodsPerWeekTerm1 : 1;
    const pWeek2 = config?.periodsPerWeekTerm2 && config.periodsPerWeekTerm2 > 0 ? config.periodsPerWeekTerm2 : 1;
    const grade8Plan = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 1: Một số tiêu chuẩn trình bày bản vẽ kĩ thuật',
        p: 1,
        y: '- Nhận biết được các khổ giấy tiêu chuẩn (A0 - A4), tỉ lệ bản vẽ, các nét vẽ kỹ thuật (nét liền đậm, nét liền mảnh, nét đứt, nét gạch chấm mảnh) và quy tắc ghi kích thước.\n- Trình bày được tầm quan trọng của bản vẽ kỹ thuật trong sản xuất và đời sống.',
        eq: 'Bộ thước vẽ kỹ thuật, compa, mẫu bản vẽ kỹ thuật cơ khí, máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC2a',
        ai: '8.A1.1',
        dc: '• [Mã NLS: 1.1.TC2a] Tra cứu Tiêu chuẩn Quốc gia TCVN về trình bày bản vẽ kỹ thuật trên thư viện số.\n• [Mã AI: 8.A1.1] Khám phá công nghệ AI tự động nhận diện và phân tích nét vẽ kỹ thuật trong bản vẽ CAD.'
      },
      {
        w: 2,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 2: Hình chiếu vuông góc (Tiết 1)',
        p: 1,
        y: '- Nêu được khái niệm về phép chiếu vuông góc và hệ thống ba mặt phẳng hình chiếu (mặt phẳng chiếu đứng, chiếu bằng, chiếu cạnh).\n- Xác định được vị trí của hình chiếu đứng, hình chiếu bằng, hình chiếu cạnh trên bản vẽ.',
        eq: 'Mô hình ba mặt phẳng hình chiếu 3D, vật thể mẫu (hình hộp chữ nhật, hình chóp cụt)',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC2a',
        ai: '8.C1.1',
        dc: '• [Mã NLS: 3.1.TC2a] Sử dụng phần mềm mô phỏng không gian 3D GeoGebra xoay các góc nhìn vật thể.\n• [Mã AI: 8.C1.1] Trải nghiệm AI chuyển đổi từ ảnh chụp vật thể thực tế sang 3 hình chiếu vuông góc 2D.'
      },
      {
        w: 3,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 2: Hình chiếu vuông góc (Tiết 2 - Thực hành)',
        p: 1,
        y: '- Vẽ được ba hình chiếu vuông góc của một số vật thể đơn giản (hình lăng trụ, hình trụ, hình nón, hình cầu) đúng quy cách.\n- Rèn luyện tính cẩn thận, chính xác và tư duy không gian.',
        eq: 'Giấy vẽ A4, bút chì 2B, thước kẻ, ê ke, tẩy, vật thể khối mẫu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.3.TC2a',
        ai: '8.D1.1',
        dc: '• [Mã NLS: 5.3.TC2a] Thực hành vẽ bản vẽ hình chiếu bằng phần mềm CAD đơn giản (Tinkercad/AutoCAD Web).\n• [Mã AI: 8.D1.1] Dùng AI kiểm tra độ chính xác của các đường gióng kích thước trên bản vẽ vừa thực hiện.'
      },
      {
        w: 4,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 3: Bản vẽ chi tiết (Tiết 1)',
        p: 1,
        y: '- Nêu được nội dung của bản vẽ chi tiết (hình biểu diễn, kích thước, yêu cầu kỹ thuật, khung tên).\n- Nắm vững trình tự đọc bản vẽ chi tiết (Khung tên -> Hình biểu diễn -> Kích thước -> Yêu cầu kỹ thuật).',
        eq: 'Mẫu bản vẽ chi tiết trục, ống lót, gối đỡ; chi tiết máy thực tế',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC2a',
        ai: '8.A2.1',
        dc: '• [Mã NLS: 1.2.TC2a] Tra cứu ký hiệu dung sai và độ nhám bề mặt trên cơ sở dữ liệu cơ khí online.\n• [Mã AI: 8.A2.1] Sử dụng AI giải thích các ký hiệu kỹ thuật chuyên ngành trong bản vẽ cơ khí.'
      },
      {
        w: 5,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 3: Bản vẽ chi tiết (Tiết 2 - Thực hành đọc bản vẽ)',
        p: 1,
        y: '- Đọc thành thạo bản vẽ chi tiết của một số sản phẩm cơ khí đơn giản (ví dụ: vòng đệm, côn có ren).\n- Tổng hợp các thông số kỹ thuật và hình dung chính xác hình dạng 3D của chi tiết.',
        eq: 'Tập bản vẽ chi tiết cơ khí, phiếu bài tập thực hành đọc bản vẽ',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.1.TC2a',
        ai: '8.C2.1',
        dc: '• [Mã NLS: 2.1.TC2a] Chia sẻ bài đọc bản vẽ chi tiết trên bảng tương tác số Padlet của lớp.\n• [Mã AI: 8.C2.1] Nhờ AI đối chiếu kết quả đọc bản vẽ và tự sửa các sai sót thông số.'
      },
      {
        w: 6,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 4: Bản vẽ lắp',
        p: 1,
        y: '- Nêu được nội dung của bản vẽ lắp (hình biểu diễn, kích thước chung, bảng kê danh sách chi tiết, khung tên).\n- Đọc được bản vẽ lắp đơn giản (bộ ròng rọc, bộ van nước) theo đúng trình tự kỹ thuật.',
        eq: 'Mẫu bản vẽ lắp bộ ròng rọc, mô hình ròng rọc thật tháo lắp',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC2b',
        ai: '8.C1.2',
        dc: '• [Mã NLS: 3.1.TC2b] Xem mô hình 3D tháo lắp từng bộ phận của thiết bị trên nền tảng số.\n• [Mã AI: 8.C1.2] Khám phá video mô phỏng quy trình lắp ráp cơ khí do AI tự động tạo sinh.'
      },
      {
        w: 7,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 5: Bản vẽ nhà (Tiết 1)',
        p: 1,
        y: '- Nêu được nội dung của bản vẽ nhà và các hình biểu diễn chính: Mặt bằng (hình biểu diễn quan trọng nhất), Mặt đứng, Mặt cắt.\n- Đọc được các kí hiệu quy ước trên bản vẽ nhà (cửa đi, cửa sổ, cầu thang, khu vệ sinh).',
        eq: 'Bản vẽ thiết kế nhà ở 1 tầng, 2 tầng; bảng ký hiệu quy ước kiến trúc xây dựng',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.3.TC2a',
        ai: '8.A1.2',
        dc: '• [Mã NLS: 1.3.TC2a] Khai thác các mẫu bản vẽ mặt bằng nhà phố hiện đại trên thư viện kiến trúc số.\n• [Mã AI: 8.A1.2] Trải nghiệm AI tự động tạo sơ đồ bố trí nội thất từ bản vẽ mặt bằng 2D.'
      },
      {
        w: 8,
        t: 'Chương I: Vẽ kĩ thuật',
        n: 'Bài 5: Bản vẽ nhà (Tiết 2 - Thực hành)',
        p: 1,
        y: '- Thực hành đọc bản vẽ một ngôi nhà đơn giản: xác định số phòng, diện tích từng phòng, vị trí cửa và kích thước tổng thể.\n- Phác thảo mặt bằng ngôi nhà mơ ước của bản thân.',
        eq: 'Phiếu thực hành đọc bản vẽ nhà, giấy kẻ ô, thước vẽ kiến trúc',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.3.TC2b',
        ai: '8.D1.2',
        dc: '• [Mã NLS: 5.3.TC2b] Vẽ phác thảo mặt bằng phòng học thông minh trên phần mềm Sweet Home 3D/Canva.\n• [Mã AI: 8.D1.2] Nhờ AI tư vấn tối ưu hướng đón ánh sáng tự nhiên và thông gió cho ngôi nhà.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 8',
        p: 1,
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng Chương I: Vẽ kỹ thuật (Bài 1 - 5).\n- Đánh giá kỹ năng vẽ hình chiếu vuông góc và đọc bản vẽ kỹ thuật; rèn luyện tính kỷ luật và trung thực.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC2a',
        ai: '8.B2.1',
        dc: '• [Mã NLS: 4.1.TC2a] Thực hiện nghiêm túc quy chế kiểm tra đánh giá định kỳ, bảo mật thông tin.\n• [Mã AI: 8.B2.1] Thể hiện năng lực tư duy không gian và độc lập làm bài kiểm tra.'
      },
      {
        w: 10,
        t: 'Chương II: Cơ khí',
        n: 'Bài 6: Vật liệu cơ khí',
        p: 1,
        y: '- Nhận biết và phân loại các vật liệu cơ khí thông dụng: Kim loại đen (thép, gang), Kim loại màu (đồng, nhôm và hợp kim), Phi kim loại (chất dẻo, cao su).\n- Nêu được tính chất cơ học, vật lí, hóa học và công nghệ của vật liệu.',
        eq: 'Mẫu vật liệu cơ khí: mẫu thép, gang, thanh nhôm, đồng đỏ, cao su, nhựa PVC',
        loc: 'Phòng học bộ môn Công nghệ / Xưởng thực hành',
        nls: '1.1.TC2b',
        ai: '8.A2.2',
        dc: '• [Mã NLS: 1.1.TC2b] Tra cứu bảng tính chất cơ lí hóa và ứng dụng của vật liệu cơ khí trên cơ sở dữ liệu số.\n• [Mã AI: 8.A2.2] Khám phá vật liệu mới (vật liệu composite, hợp kim titan) trong công nghệ hàng không do AI phân tích.'
      },
      {
        w: 11,
        t: 'Chương II: Cơ khí',
        n: 'Bài 7: Truyền và biến đổi chuyển động (Tiết 1)',
        p: 1,
        y: '- Nêu được nguyên lí làm việc và công thức tính tỉ số truyền của các cơ cấu truyền chuyển động: truyền động ma sát (đai), truyền động ăn khớp (bánh răng, xích).\n- Vận dụng tính toán tỉ số truyền của bộ truyền xích xe đạp.',
        eq: 'Mô hình bộ truyền động đai, bộ truyền động bánh răng, bộ truyền xích líp xe đạp',
        loc: 'Phòng học bộ môn Công nghệ / Xưởng thực hành',
        nls: '3.1.TC2c',
        ai: '8.C1.3',
        dc: '• [Mã NLS: 3.1.TC2c] Tạo bảng tính Excel tính toán tự động tỉ số truyền và tốc độ quay trục bị dẫn.\n• [Mã AI: 8.C1.3] Xem mô phỏng 3D hoạt động của hộp số xe máy và ô tô do AI tạo sinh.'
      },
      {
        w: 12,
        t: 'Chương II: Cơ khí',
        n: 'Bài 7: Truyền và biến đổi chuyển động (Tiết 2)',
        p: 1,
        y: '- Trình bày được cấu tạo và nguyên lí làm việc của các cơ cấu biến đổi chuyển động: cơ cấu tay quay con trượt, cơ cấu tay quay thanh lắc.\n- Nhận biết ứng dụng của các cơ cấu trong động cơ xe máy, máy khâu, quạt điện.',
        eq: 'Mô hình cơ cấu tay quay con trượt, mô hình tay quay thanh lắc hoạt động thật',
        loc: 'Phòng học bộ môn Công nghệ / Xưởng thực hành',
        nls: '5.2.TC2a',
        ai: '8.D1.3',
        dc: '• [Mã NLS: 5.2.TC2a] Sử dụng phần mềm mô phỏng cơ cấu chuyển động cơ học Algodoo/PhET.\n• [Mã AI: 8.D1.3] Tìm hiểu nguyên lý hoạt động của cánh tay robot công nghiệp ứng dụng cơ cấu biến đổi chuyển động AI.'
      },
      {
        w: 13,
        t: 'Chương II: Cơ khí',
        n: 'Bài 8: Gia công cơ khí bằng tay (Tiết 1)',
        p: 1,
        y: '- Nhận biết được các dụng cụ đo và kiểm tra kích thước (thước lá, thước cặp, thước cuộn, ê ke) và dụng cụ gia công cầm tay (cưa sắt, đục, dũa).\n- Đọc được chỉ số đo trên thước cặp chính xác.',
        eq: 'Thước cặp cơ khí 0.02mm, thước lá, mũi vạch, cưa sắt, dũa thép, phôi kim loại mẫu',
        loc: 'Xưởng thực hành Cơ khí / Phòng STEM',
        nls: '3.1.TC2d',
        ai: '8.C1.4',
        dc: '• [Mã NLS: 3.1.TC2d] Thực hành đọc chỉ số đo thước cặp qua phần mềm mô phỏng tương tác số.\n• [Mã AI: 8.C1.4] Đặt câu hỏi cho AI về các tiêu chuẩn an toàn lao động tuyệt đối trong xưởng cơ khí.'
      },
      {
        w: 14,
        t: 'Chương II: Cơ khí',
        n: 'Bài 8: Gia công cơ khí bằng tay (Tiết 2 - Thực hành)',
        p: 1,
        y: '- Thực hành đúng tư thế đứng, cách cầm cưa và thao tác cưa kim loại, dũa mặt phẳng đúng quy trình kĩ thuật.\n- Đảm bảo an toàn lao động, đeo kính bảo hộ và giữ vệ sinh xưởng thực hành.',
        eq: 'Ê tô bàn nguội, cưa tay kim loại, dũa dẹt, phôi nhôm/sắt, kính bảo hộ, găng tay',
        loc: 'Xưởng thực hành Cơ khí / Phòng STEM',
        nls: '4.3.TC2a',
        ai: '8.B1.1',
        dc: '• [Mã NLS: 4.3.TC2a] Tuân thủ nội quy an toàn phòng thực hành, sử dụng trang bị bảo hộ lao động cá nhân.\n• [Mã AI: 8.B1.1] Xem video phân tích các góc độ cầm cưa và lực cắt chuẩn xác bằng camera AI.'
      },
      {
        w: 15,
        t: 'Chương II: Cơ khí',
        n: 'Bài 9: Ngành nghề trong lĩnh vực cơ khí',
        p: 1,
        y: '- Nêu được đặc điểm và yêu cầu của một số ngành nghề cơ khí chính: Kĩ sư cơ khí, Kĩ thuật viên cơ khí, Thợ cơ khí gia công/chế tạo/sửa chữa.\n- Tự đánh giá mức độ phù hợp của bản thân với các ngành nghề cơ khí.',
        eq: 'Video giới thiệu nhà máy sản xuất ô tô VinFast, tranh ảnh ngành nghề cơ khí chế tạo',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.3.TC2a',
        ai: '8.C2.2',
        dc: '• [Mã NLS: 2.3.TC2a] Khảo sát thị trường lao động và mức lương các ngành kỹ thuật cơ khí trên website tuyển dụng.\n• [Mã AI: 8.C2.2] Thực hiện bài trắc nghiệm hướng nghiệp AI đánh giá sở thích kỹ thuật của bản thân.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Công nghệ 8',
        p: 1,
        y: '- Đánh giá tổng hợp kết quả học tập môn Công nghệ 8 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh, làm căn cứ điều chỉnh kế hoạch dạy học Kỹ thuật điện & Thiết kế HK2.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối kì 1',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC2b',
        ai: '8.B2.2',
        dc: '• [Mã NLS: 4.1.TC2b] Thực hiện bài thi cuối kỳ nghiêm túc, đúng quy chế phòng thi.\n• [Mã AI: 8.B2.2] Tự tổng kết hồ sơ năng lực học tập HK1 và định hướng kế hoạch học tập HK2.'
      },
      {
        w: 17,
        t: 'Chương II: Cơ khí',
        n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Công nghệ 8',
        p: 1,
        y: '- Chữa bài kiểm tra cuối HK1; phân tích lỗi sai và củng cố kiến thức trọng tâm Vẽ kỹ thuật và Cơ khí.\n- Rèn luyện kỹ năng đọc bản vẽ và tính toán tỉ số truyền cơ khí.',
        eq: 'Đề kiểm tra, đáp án biểu điểm, ngân hàng câu hỏi bổ trợ',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC2b',
        ai: '8.B1.2',
        dc: '• [Mã NLS: 1.2.TC2b] Xây dựng sơ đồ tư duy tổng kết Vẽ kỹ thuật và Cơ khí bằng Mindmeister.\n• [Mã AI: 8.B1.2] Luyện tập trắc nghiệm số hóa có phân tích tự động điểm mạnh điểm yếu từ AI.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Báo cáo sản phẩm dự án Cơ khí Lớp 8',
        p: 1,
        y: '- Báo cáo sản phẩm dự án gia công chi tiết cơ khí bằng dụng cụ cầm tay (móc khóa, ke góc).\n- Đánh giá tổng kết quá trình học tập và rèn luyện môn Công nghệ trong Học kỳ 1.',
        eq: 'Slide thuyết trình, sản phẩm cơ khí hoàn thiện, bảng tổng kết HK1',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.3.TC2c',
        ai: '8.D2.1',
        dc: '• [Mã NLS: 5.3.TC2c] Thuyết trình báo cáo sản phẩm gia công cơ khí trước tập thể lớp.\n• [Mã AI: 8.D2.1] Sử dụng AI đánh giá chất lượng độ bóng bề mặt và độ chính xác kích thước sản phẩm.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương III: An toàn điện',
        n: 'Bài 11: Tai nạn điện',
        p: 1,
        y: '- Nêu được các nguyên nhân chính gây ra tai nạn điện (chạm trực tiếp vào vật mang điện, vi phạm khoảng cách an toàn lưới cao áp, phóng điện hồ quang).\n- Nhận biết các nguy cơ mất an toàn điện trong sinh hoạt và sản xuất.',
        eq: 'Tranh ảnh tình huống tai nạn điện, biển báo nguy hiểm điện cao áp, video cảnh báo an toàn',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC2c',
        ai: '8.A1.3',
        dc: '• [Mã NLS: 1.1.TC2c] Thu thập tư liệu và số liệu thống kê nguyên nhân tai nạn điện gia đình từ EVN.\n• [Mã AI: 8.A1.3] Nhận diện các tình huống nguy hiểm điện qua hình ảnh bằng công cụ AI thị giác.'
      },
      {
        w: 20,
        t: 'Chương III: An toàn điện',
        n: 'Bài 12: Biện pháp an toàn điện (Tiết 1)',
        p: 1,
        y: '- Trình bày các nguyên tắc an toàn khi sử dụng điện: cách điện dây dẫn, nối đất bảo vệ thiết bị kim loại công suất lớn (máy giặt, bình nóng lạnh), sử dụng aptomat chống giật ELCB.\n- Sử dụng bút thử điện đúng cách kiểm tra rò rỉ điện an toàn.',
        eq: 'Bút thử điện thật, mẫu phích cắm có chân nối đất, aptomat chống giật RCBO/ELCB',
        loc: 'Phòng học bộ môn Công nghệ / Phòng thực hành',
        nls: '4.3.TC2b',
        ai: '8.C1.5',
        dc: '• [Mã NLS: 4.3.TC2b] Đọc và hiểu các thông số an toàn chống giật trên thiết bị bảo vệ điện thông minh.\n• [Mã AI: 8.C1.5] Khám phá nguyên lý hoạt động của hệ thống ngắt điện tự động AI khi phát hiện rò rỉ.'
      },
      {
        w: 21,
        t: 'Chương III: An toàn điện',
        n: 'Bài 12: Biện pháp an toàn điện (Tiết 2)',
        p: 1,
        y: '- Nắm vững các quy tắc an toàn khi sửa chữa điện: cắt cầu dao tổng, treo biển cảnh báo, sử dụng dụng cụ cách điện (kìm cách điện, găng tay cao su, thảm cách điện).\n- Có ý thức tự giác tuân thủ an toàn điện mọi lúc mọi nơi.',
        eq: 'Bộ dụng cụ sửa chữa điện cách điện 1000V, thảm cách điện, biển báo an toàn',
        loc: 'Phòng học bộ môn Công nghệ / Phòng thực hành',
        nls: '2.5.TC2a',
        ai: '8.B1.3',
        dc: '• [Mã NLS: 2.5.TC2a] Thảo luận và xây dựng cẩm nang số "Quy tắc an toàn điện trong gia đình" trên Padlet.\n• [Mã AI: 8.B1.3] Tạo danh sách kiểm tra (Checklist) các bước ngắt nguồn an toàn trước khi sửa chữa bằng AI.'
      },
      {
        w: 22,
        t: 'Chương III: An toàn điện',
        n: 'Bài 13: Sơ cứu người bị tai nạn điện',
        p: 1,
        y: '- Trình bày và thực hành thành thạo 2 bước sơ cứu nạn nhân bị điện giật: Tách nạn nhân ra khỏi nguồn điện an toàn -> Sơ cứu tại chỗ (hà hơi thổi ngạt kết hợp ép tim ngoài lồng ngực).\n- Rèn luyện phản xạ bình tĩnh, xử lý tình huống khẩn cấp cứu người.',
        eq: 'Hình nhân mô hình sơ cứu CPR, gậy gỗ khô, thảm nằm, gạc y tế',
        loc: 'Phòng học bộ môn Công nghệ / Phòng thực hành Y tế',
        nls: '5.2.TC2b',
        ai: '8.D1.4',
        dc: '• [Mã NLS: 5.2.TC2b] Xem video 3D chuẩn y khoa hướng dẫn tần số và lực ép tim ngoài lồng ngực (CPR).\n• [Mã AI: 8.D1.4] Trải nghiệm ứng dụng sơ cứu khẩn cấp có hỗ trợ trợ lý ảo AI đếm nhịp CPR chuẩn.'
      },
      {
        w: 23,
        t: 'Chương IV: Kĩ thuật điện',
        n: 'Bài 14: Khái quát về mạch điện',
        p: 1,
        y: '- Nêu được cấu trúc chung của một mạch điện gồm: Nguồn điện, Thiết bị đóng cắt bảo vệ và điều khiển, Phụ tải tiêu thụ, Dây dẫn liên kết.\n- Nhận biết và vẽ được các kí hiệu quy ước trong sơ đồ mạch điện.',
        eq: 'Mô hình mạch điện một chiều DC (pin, công tắc, bóng đèn LED, dây nối), đồng hồ vạn năng',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '1.2.TC2c',
        ai: '8.A2.3',
        dc: '• [Mã NLS: 1.2.TC2c] Sử dụng phần mềm mô phỏng mạch điện trực tuyến Tinkercad Circuits / Yenka.\n• [Mã AI: 8.A2.3] Khám phá công cụ AI hỗ trợ phân tích và phát hiện mạch điện bị hở hoặc ngắn mạch.'
      },
      {
        w: 24,
        t: 'Chương IV: Kĩ thuật điện',
        n: 'Bài 15: Cảm biến và mô đun cảm biến (Tiết 1)',
        p: 1,
        y: '- Nêu được khái niệm về cảm biến và mô đun cảm biến (phát hiện tín hiệu vật lý môi trường biến đổi thành tín hiệu điện).\n- Phân loại và nêu nguyên lý hoạt động của: cảm biến ánh sáng (quang trở LDR), cảm biến nhiệt độ (NTC/PTC).',
        eq: 'Mô đun cảm biến ánh sáng, mô đun cảm biến nhiệt độ, nguồn 12V, rơ-le, đèn LED',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '3.1.TC2e',
        ai: '8.C1.6',
        dc: '• [Mã NLS: 3.1.TC2e] Thu thập và đo đạc thông số điện áp ngõ ra của cảm biến ánh sáng khi thay đổi độ rọi.\n• [Mã AI: 8.C1.6] Tìm hiểu sự kết hợp giữa cảm biến IoT và mô hình AI trong nhà máy thông minh.'
      },
      {
        w: 25,
        t: 'Chương IV: Kĩ thuật điện',
        n: 'Bài 15: Cảm biến và mô đun cảm biến (Tiết 2)',
        p: 1,
        y: '- Tìm hiểu nguyên lý hoạt động của mô đun cảm biến độ ẩm đất, cảm biến hồng ngoại chuyển động (PIR).\n- Nhận biết ứng dụng của các mô đun cảm biến trong nông nghiệp thông minh và ngôi nhà tự động.',
        eq: 'Mô đun cảm biến độ ẩm đất, cảm biến chuyển động PIR, còi báo động, quạt mini',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '5.3.TC2d',
        ai: '8.D1.5',
        dc: '• [Mã NLS: 5.3.TC2d] Lập trình kết nối cảm biến độ ẩm đất điều khiển rơ-le tự động trên Arduino/Micro:bit.\n• [Mã AI: 8.D1.5] Trải nghiệm hệ thống nhận diện chuyển động con người thông minh kết hợp cảm biến AI.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 8',
        p: 1,
        y: '- Đánh giá mức độ tiếp thu kiến thức An toàn điện (Bài 11 - 13) và Khái quát mạch điện, Cảm biến (Bài 14, 15).\n- Rèn luyện kỹ năng giải quyết tình huống kỹ thuật điện và tính trung thực học thuật.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 2',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC2c',
        ai: '8.B2.3',
        dc: '• [Mã NLS: 4.1.TC2c] Thực hiện bài kiểm tra nghiêm túc, đúng quy định bảo mật đề thi.\n• [Mã AI: 8.B2.3] Thể hiện năng lực tư duy kỹ thuật độc lập và phân tích mạch điện an toàn.'
      },
      {
        w: 27,
        t: 'Chương IV: Kĩ thuật điện',
        n: 'Bài 16: Mạch điện điều khiển sử dụng mô đun cảm biến',
        p: 1,
        y: '- Thực hành kết nối hoàn chỉnh mạch điện điều khiển tự động: Sử dụng mô đun cảm biến ánh sáng điều khiển bật tắt đèn tự động khi trời tối hoặc cảm biến độ ẩm đất tưới cây.\n- Kiểm tra, hiệu chỉnh biến trở để thay đổi độ nhạy của cảm biến.',
        eq: 'Bo mạch thực hành, cảm biến ánh sáng, biến trở, rơ-le 5V/12V, đèn 220V/12V, dây cắm testboard',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '5.3.TC2e',
        ai: '8.D2.2',
        dc: '• [Mã NLS: 5.3.TC2e] Mô phỏng mạch điện điều khiển cảm biến trên Tinkercad trước khi đấu nối thực tế.\n• [Mã AI: 8.D2.2] Ứng dụng AI phân tích và tối ưu hóa ngưỡng kích hoạt rơ-le theo điều kiện môi trường.'
      },
      {
        w: 28,
        t: 'Chương IV: Kĩ thuật điện',
        n: 'Bài 17: Ngành nghề trong lĩnh vực kĩ thuật điện',
        p: 1,
        y: '- Nêu được đặc điểm và yêu cầu của các ngành nghề kỹ thuật điện: Kĩ sư điện tử viễn thông, Kĩ sư điện lực, Thợ lắp đặt và sửa chữa mạng điện dân dụng/công nghiệp.\n- Tự đánh giá năng lực và sở thích đối với khối ngành kỹ thuật điện.',
        eq: 'Video giới thiệu các công trình trạm biến áp 500kV, nhà máy năng lượng tái tạo',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '2.3.TC2b',
        ai: '8.C2.3',
        dc: '• [Mã NLS: 2.3.TC2b] Khảo sát thông tin tuyển sinh và nhu cầu nhân lực ngành Kỹ thuật Điện - Điện tử trên web.\n• [Mã AI: 8.C2.3] Dùng AI định hướng lộ trình học tập để trở thành Kỹ sư Điện tử thông minh.'
      },
      {
        w: 29,
        t: 'Chương V: Thiết kế kĩ thuật',
        n: 'Bài 18: Giới thiệu về thiết kế kĩ thuật',
        p: 1,
        y: '- Nêu được khái niệm về thiết kế kĩ thuật (quá trình sáng tạo giải pháp giải quyết vấn đề thực tiễn).\n- Trình bày vai trò và ý nghĩa to lớn của thiết kế kỹ thuật đối với sự phát triển đời sống và công nghệ.',
        eq: 'Tranh ảnh sản phẩm thiết kế công nghiệp (điện thoại, xe điện thông minh), máy chiếu',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.1.TC2d',
        ai: '8.A1.4',
        dc: '• [Mã NLS: 1.1.TC2d] Tra cứu lịch sử cải tiến thiết kế các sản phẩm công nghệ nổi tiếng trên thế giới.\n• [Mã AI: 8.A1.4] Khám phá công nghệ Generative Design (Thiết kế tạo sinh AI) trong tối ưu cấu trúc sản phẩm.'
      },
      {
        w: 30,
        t: 'Chương V: Thiết kế kĩ thuật',
        n: 'Bài 19: Các bước cơ bản trong thiết kế kĩ thuật (Tiết 1)',
        p: 1,
        y: '- Trình bày được quy trình thiết kế kỹ thuật gồm 6 bước: Xác định vấn đề -> Tìm hiểu tổng quan -> Đề xuất giải pháp -> Thiết kế hệ thống -> Thử nghiệm đánh giá -> Lập hồ sơ kỹ thuật.\n- Phân tích ví dụ thiết kế sản phẩm giá đỡ điện thoại thông minh.',
        eq: 'Sơ đồ quy trình thiết kế kỹ thuật 6 bước, mẫu hồ sơ kỹ thuật sản phẩm',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '3.1.TC2f',
        ai: '8.C1.7',
        dc: '• [Mã NLS: 3.1.TC2f] Lập sơ đồ phân rã chức năng và tiêu chí thiết kế sản phẩm trên phần mềm Miro/Mindmap.\n• [Mã AI: 8.C1.7] Nhờ AI gợi ý các ý tưởng sáng tạo giải quyết vấn đề kỹ thuật (phương pháp SCAMPER).'
      },
      {
        w: 31,
        t: 'Chương V: Thiết kế kĩ thuật',
        n: 'Bài 19: Các bước cơ bản trong thiết kế kĩ thuật (Tiết 2)',
        p: 1,
        y: '- Thực hành áp dụng quy trình thiết kế kỹ thuật để phác thảo phương án giải quyết một vấn đề thực tế trong trường học hoặc gia đình.\n- Phát triển tư duy thiết kế (Design Thinking) và kỹ năng làm việc nhóm.',
        eq: 'Giấy A3, bút dạ màu, giấy nhớ Post-it, phiếu đánh giá phương án thiết kế',
        loc: 'Phòng học bộ môn Công nghệ / Phòng STEM',
        nls: '2.4.TC2a',
        ai: '8.D1.6',
        dc: '• [Mã NLS: 2.4.TC2a] Làm việc nhóm trực tuyến xây dựng ma trận đánh giá lựa chọn giải pháp tối ưu.\n• [Mã AI: 8.D1.6] Tạo bản vẽ phác thảo ý tưởng thiết kế dạng 3D với sự hỗ trợ của AI.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Công nghệ 8',
        p: 1,
        y: '- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn Công nghệ Lớp 8 cả năm học.\n- Đánh giá năng lực thiết kế kỹ thuật, tác phong công nghiệp và định hướng nghề nghiệp.',
        eq: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối năm',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC2d',
        ai: '8.B2.5',
        dc: '• [Mã NLS: 4.1.TC2d] Hoàn thành bài kiểm tra cuối năm nghiêm túc, đúng quy chế phòng thi.\n• [Mã AI: 8.B2.5] Tổng kết hồ sơ sản phẩm kỹ thuật Lớp 8 và định hướng lựa chọn mô đun Công nghệ Lớp 9.'
      },
      {
        w: 32,
        t: 'Chương V: Thiết kế kĩ thuật',
        n: 'Chữa bài kiểm tra cuối HK2 & Bài 20: Dự án: Thiết kế hệ thống tưới cây tự động',
        p: 1,
        y: '- Chữa bài kiểm tra cuối HK2; thực hiện dự án thiết kế và lắp ráp mô hình tưới cây tự động mini bằng cảm biến độ ẩm đất, rơ-le và máy bơm mini.\n- Báo cáo sản phẩm hoàn chỉnh trước hội đồng lớp.',
        eq: 'Đề kiểm tra, đáp án, mô hình chậu cây, cảm biến độ ẩm đất, máy bơm mini 12V, rơ-le 5V',
        loc: 'Phòng học bộ môn Công nghệ / Xưởng thực hành STEM',
        nls: '5.3.TC2f',
        ai: '8.D2.3',
        dc: '• [Mã NLS: 5.3.TC2f] Lập trình điều khiển và theo dõi lưu lượng nước tưới tự động trên Dashboard IoT.\n• [Mã AI: 8.D2.3] Ứng dụng AI phân tích dữ liệu độ ẩm đất và tối ưu hóa chu kỳ tưới cây tiết kiệm nước.'
      },
      {
        w: 33,
        t: 'Ôn tập cuối năm',
        n: 'Hệ thống hóa toàn bộ kiến thức Công nghệ Lớp 8 (Tiết 1)',
        p: 1,
        y: '- Tổng hợp kiến thức 5 chương: Vẽ kỹ thuật, Cơ khí, An toàn điện, Kỹ thuật điện, Thiết kế kỹ thuật.\n- Rèn luyện kỹ năng giải các bài toán kỹ thuật tổng hợp và thiết kế hệ thống tự động hóa.',
        eq: 'Sơ đồ tư duy tổng hợp cả năm học môn Công nghệ 8, đề cương ôn tập',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '1.2.TC2d',
        ai: '8.B1.4',
        dc: '• [Mã NLS: 1.2.TC2d] Xây dựng bản đồ tri thức số liên kết các môn STEM (Toán - Lý - Công nghệ - Tin học).\n• [Mã AI: 8.B1.4] Làm bài trắc nghiệm tổng hợp cả năm học trên hệ thống thi trực tuyến LMS.'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Ôn tập toàn diện chuẩn bị tổng kết năm học môn Công nghệ 8 (Tiết 2)',
        p: 1,
        y: '- Luyện giải các bộ đề kiểm tra cuối năm chuẩn cấu trúc ma trận của Bộ Giáo dục & Đào tạo.\n- Rèn luyện kỹ năng tư duy phản biện, sửa các lỗi kỹ thuật thường gặp khi làm bài thi.',
        eq: 'Bộ đề thi thử nghiệm trực tuyến, phiếu trả lời trắc nghiệm chuẩn hóa',
        loc: 'Phòng học bộ môn Công nghệ / Lớp học',
        nls: '5.2.TC2c',
        ai: '8.B2.4',
        dc: '• [Mã NLS: 5.2.TC2c] Tự đánh giá và hoàn thiện các chỉ số năng lực kỹ thuật trên bảng điểm số cá nhân.\n• [Mã AI: 8.B2.4] Phân tích điểm mạnh điểm yếu qua báo cáo kết quả thi thử nghiệm từ AI.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Công nghệ 8 cả năm',
        p: 1,
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Công nghệ Lớp 8 của học sinh.\n- Định hướng lựa chọn mô đun nghề nghiệp môn Công nghệ Lớp 9 (Lắp đặt mạng điện, Chế biến thực phẩm, Trồng cây ăn quả).',
        eq: 'Hồ sơ học tập, bảng tổng kết điểm số cả năm',
        loc: 'Phòng học / Lớp học',
        nls: '4.1.TC2d',
        ai: '8.B2.5',
        dc: '• [Mã NLS: 4.1.TC2d] Hoàn thành bài kiểm tra cuối năm nghiêm túc, đúng quy chế phòng thi.\n• [Mã AI: 8.B2.5] Tổng kết hồ sơ sản phẩm kỹ thuật Lớp 8 và định hướng lựa chọn mô đun Công nghệ Lớp 9.'
      }
    ];

    grade8Plan.forEach((item) => {
      const p = item.w <= 18 ? pWeek1 : pWeek2;
      let lessonName = item.n;
      if (p === 2 && !lessonName.includes('Tiết') && !lessonName.includes('tiết')) {
        lessonName = `${item.n} (Tiết 1, 2)`;
      }
      list.push({
        week: item.w,
        topic: item.t,
        name: lessonName,
        periods: p,
        yccd: item.y,
        equipment: item.eq,
        location: item.loc,
        nlsCode: item.nls,
        aiCode: item.ai,
        digitalCompetency: item.dc,
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.n.includes('Dự án') ? 'Dự án STEM' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. CÔNG NGHỆ LỚP 9 - ĐỊNH HƯỚNG NGHỀ NGHIỆP & TRẢI NGHIỆM NGHỀ NGHIỆP
  // Cấu hình linh hoạt:
  // - Phần chung bắt buộc: ĐỊNH HƯỚNG NGHỀ NGHIỆP (5 bài)
  // - 3 Mô đun Trải nghiệm nghề nghiệp tự chọn:
  //   1. 'dien_gia_dung' -> Mô đun I: Điện gia dụng (Lắp đặt mạng điện trong nhà) (7 bài)
  //   2. 'che_bien_thuc_pham' -> Mô đun II: Chế biến thực phẩm (7 bài)
  //   3. 'trong_cay_an_qua' -> Mô đun III: Trồng cây ăn quả (8 bài)
  // - Số tiết / tuần HK1 và HK2 linh hoạt (mặc định 1 tiết/tuần hoặc 2 tiết/tuần)
  // =========================================================================
  const selectedModule: TechnologyModuleGrade9 =
    config?.technologyModuleGrade9 || 'dien_gia_dung';
  const pWeek1 = config?.periodsPerWeekTerm1 && config.periodsPerWeekTerm1 > 0 ? config.periodsPerWeekTerm1 : 1;
  const pWeek2 = config?.periodsPerWeekTerm2 && config.periodsPerWeekTerm2 > 0 ? config.periodsPerWeekTerm2 : (pWeek1 > 1 ? pWeek1 : 1);

  // PHẦN CHUNG: ĐỊNH HƯỚNG NGHỀ NGHIỆP (5 Bài)
  const generalCareerOrientationLessons = [
    {
      code: 'DHNN_1',
      t: 'Định hướng nghề nghiệp',
      n: 'Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật và công nghệ',
      y: '- Nêu được khái niệm nghề nghiệp, tầm quan trọng của nghề nghiệp đối với bản thân, gia đình và xã hội.\n- Trình bày được đặc điểm chung và môi trường làm việc đặc thù của các nghề thuộc lĩnh vực kĩ thuật, công nghệ.',
      eq: 'Tranh ảnh, video giới thiệu các ngành nghề kỹ thuật hiện đại (tự động hóa, cơ điện tử, AI, chip bán dẫn)',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '1.1.TC2a',
      ai: '9.A1.1',
      dc: '• [Mã NLS: 1.1.TC2a] Tra cứu danh mục nghề nghiệp Việt Nam và xu hướng thị trường lao động số trên web.\n• [Mã AI: 9.A1.1] Khám phá các ngành nghề công nghệ mới nổi do Trí tuệ nhân tạo (AI) tạo ra trong tương lai.'
    },
    {
      code: 'DHNN_2',
      t: 'Định hướng nghề nghiệp',
      n: 'Bài 2: Cơ cấu hệ thống giáo dục quốc dân',
      y: '- Trình bày được sơ đồ khung cơ cấu hệ thống giáo dục quốc dân Việt Nam (từ mầm non đến sau đại học).\n- Hiểu rõ các luồng phân luồng sau THCS: học tiếp THPT, học Giáo dục thường xuyên kết hợp học nghề, hoặc học Trung cấp/Cao đẳng (mô hình 9+).',
      eq: 'Sơ đồ hệ thống giáo dục quốc dân Việt Nam, cẩm nang tuyển sinh sau THCS',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '2.3.TC2a',
      ai: '9.A2.1',
      dc: '• [Mã NLS: 2.3.TC2a] Khai thác cổng thông tin tuyển sinh trực tuyến của các trường THPT và trường nghề.\n• [Mã AI: 9.A2.1] Trải nghiệm công cụ AI tư vấn lộ trình học tập phù hợp sau khi tốt nghiệp THCS.'
    },
    {
      code: 'DHNN_3',
      t: 'Định hướng nghề nghiệp',
      n: 'Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam',
      y: '- Nêu được khái niệm thị trường lao động và các yếu tố ảnh hưởng đến thị trường lao động kỹ thuật.\n- Phân tích được xu hướng phát triển và nhu cầu tuyển dụng nhân lực kỹ thuật công nghệ cao tại Việt Nam hiện nay.',
      eq: 'Báo cáo thị trường lao động kỹ thuật số của Bộ LĐ-TB&XH, video phỏng vấn nhà tuyển dụng',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '1.2.TC2a',
      ai: '9.C1.1',
      dc: '• [Mã NLS: 1.2.TC2a] Phân tích biểu đồ dữ liệu thống kê nhu cầu nhân lực các ngành kỹ thuật trên Google Sheets.\n• [Mã AI: 9.C1.1] Sử dụng AI phân tích các kỹ năng mềm và kỹ năng số cần thiết cho nghề nghiệp tương lai.'
    },
    {
      code: 'DHNN_4',
      t: 'Định hướng nghề nghiệp',
      n: 'Bài 4: Quy trình lựa chọn nghề nghiệp',
      y: '- Nắm vững quy trình lựa chọn nghề nghiệp theo mô hình IKIGAI (Sở thích - Năng lực - Cơ hội nghề nghiệp - Nhu cầu xã hội).\n- Nhận diện các yếu tố ảnh hưởng đến quyết định chọn nghề (gia đình, xã hội, tài chính, năng khiếu).',
      eq: 'Sơ đồ mô hình IKIGAI, bảng tự đánh giá 3 vòng tròn chọn nghề',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '3.1.TC2a',
      ai: '9.C2.1',
      dc: '• [Mã NLS: 3.1.TC2a] Xây dựng bản đồ định hướng cá nhân (Personal Career Roadmap) trên phần mềm Canva.\n• [Mã AI: 9.C2.1] Thực hiện bài phỏng vấn định hướng nghề nghiệp tương tác với Chatbot AI.'
    },
    {
      code: 'DHNN_5',
      t: 'Định hướng nghề nghiệp',
      n: 'Bài 5: Dự án: Tự đánh giá mức độ phù hợp của bản thân với một số ngành nghề thuộc lĩnh vực kĩ thuật, công nghệ',
      y: '- Thực hiện trọn vẹn bài trắc nghiệm sở thích nghề nghiệp Holland (RIASEC) và tự đánh giá năng lực bản thân.\n- Lập hồ sơ định hướng nghề nghiệp cá nhân, đề ra kế hoạch rèn luyện phẩm chất và kỹ năng cần thiết sau THCS.',
      eq: 'Bộ câu hỏi trắc nghiệm Holland trực tuyến, phiếu hồ sơ nghề nghiệp cá nhân',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '5.3.TC2a',
      ai: '9.D1.1',
      dc: '• [Mã NLS: 5.3.TC2a] Thực hiện trắc nghiệm trắc lượng tâm lý Holland trực tuyến và xuất báo cáo PDF kết quả.\n• [Mã AI: 9.D1.1] Nhờ AI phân tích kết quả bài trắc nghiệm và đề xuất top 5 ngành nghề kỹ thuật phù hợp nhất.'
    }
  ];

  // OPTION 1: MÔ ĐUN I: LẮP ĐẶT MẠNG ĐIỆN (LẮP ĐẶT MẠNG ĐIỆN TRONG NHÀ) (7 Bài)
  const dienGiaDungLessons = [
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 1: Thiết bị đóng cắt và lấy điện trong gia đình',
      y: '- Mô tả được chức năng, cấu tạo và thông số kĩ thuật (Uđm, Iđm) của thiết bị đóng cắt (công tắc, cầu dao, aptomat) và thiết bị lấy điện (ổ cắm, phích cắm).\n- Lựa chọn được thiết bị đóng cắt và lấy điện phù hợp công suất phụ tải mạng điện gia đình.',
      eq: 'Mẫu công tắc điện, cầu dao sứ, Aptomat (MCB/RCBO), ổ cắm đơn/đôi, phích cắm, tua vít',
      loc: 'Phòng thực hành Kỹ thuật điện / Xưởng STEM',
      nls: '1.3.TC2a',
      ai: '9.A2.2',
      dc: '• [Mã NLS: 1.3.TC2a] Tra cứu catalogue thông số kỹ thuật thiết bị đóng cắt của các hãng Panasonic, Schneider, Sino.\n• [Mã AI: 9.A2.2] Nhận diện và kiểm tra thông số kỹ thuật Aptomat qua hình ảnh bằng công cụ AI Camera.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 2: Dụng cụ đo điện cơ bản',
      y: '- Nhận biết cấu tạo, chức năng và sử dụng thành thạo các dụng cụ đo điện: Đồng hồ vạn năng (đo điện áp AC/DC, điện trở), Ampe kìm (đo dòng điện AC), Công tơ điện 1 pha.\n- Thực hiện đo đạc đúng thang đo, đảm bảo an toàn tuyệt đối.',
      eq: 'Đồng hồ vạn năng kim/điện tử, ampe kìm, công tơ điện 1 pha, nguồn điện 220V/12V, tải thử',
      loc: 'Phòng thực hành Kỹ thuật điện / Xưởng STEM',
      nls: '3.1.TC2b',
      ai: '9.C1.2',
      dc: '• [Mã NLS: 3.1.TC2b] Ghi chép và lập bảng phân tích số liệu đo đạc điện áp, điện trở và dòng điện trên Excel.\n• [Mã AI: 9.C1.2] Xem mô phỏng quy trình chọn thang đo đồng hồ vạn năng tránh chập cháy hỗ trợ bởi AI.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 3: Thiết kế mạng điện trong nhà',
      y: '- Phân biệt được sơ đồ nguyên lí và sơ đồ lắp đặt mạng điện trong nhà.\n- Thiết kế và vẽ được sơ đồ nguyên lí, sơ đồ lắp đặt cho một mạng điện đơn giản (bảng điện điều khiển đèn chiếu sáng và ổ cắm) đúng tiêu chuẩn kỹ thuật.',
      eq: 'Bộ thước vẽ kỹ thuật, phần mềm vẽ sơ đồ mạch điện, bảng ký hiệu quy ước điện dân dụng',
      loc: 'Phòng học bộ môn Công nghệ / Phòng máy tính',
      nls: '5.3.TC2b',
      ai: '9.D1.2',
      dc: '• [Mã NLS: 5.3.TC2b] Sử dụng phần mềm CAD điện (QElectroTech/Tinkercad) thiết kế sơ đồ nguyên lý và lắp đặt mạng điện.\n• [Mã AI: 9.D1.2] Dùng AI kiểm tra tính hợp lý của đường dẫn dây pha và dây trung tính trên sơ đồ thiết kế.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 4: Vật liệu, thiết bị và dụng cụ dùng cho lắp đặt mạng điện trong nhà',
      y: '- Lựa chọn được dây dẫn điện (dây đôi mềm, dây đơn cứng PVC), vật liệu cách điện (ống luồn dây, băng dính cách điện) và dụng cụ lắp đặt (kìm cách điện, kìm tuốt dây, bút thử điện).\n- Tính toán tiết diện ruột dây dẫn phù hợp với mật độ dòng điện tải.',
      eq: 'Các loại dây điện Cadivi, ống luồn PVC, kìm tuốt dây tự động, kìm bấm cốt, băng dính điện 3M',
      loc: 'Phòng thực hành Kỹ thuật điện / Xưởng STEM',
      nls: '1.2.TC2b',
      ai: '9.C1.3',
      dc: '• [Mã NLS: 1.2.TC2b] Tra cứu bảng dòng điện định mức của dây dẫn điện ruột đồng bọc PVC theo tiêu chuẩn TCVN.\n• [Mã AI: 9.C1.3] Đặt câu hỏi cho AI về công thức tính tiết diện dây dẫn tránh hiện tượng phát nhiệt quá tải.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 5: Tính toán chi phí mạng điện trong nhà',
      y: '- Thực hiện đúng các bước tính toán chi phí lắp đặt mạng điện: Nghiên cứu sơ đồ -> Lập bảng thống kê số lượng vật tư, thiết bị -> Tra cứu đơn giá thực tế và tính tổng chi phí đầu tư.\n- Rèn luyện kỹ năng quản lý tài chính kỹ thuật cá nhân.',
      eq: 'Bảng báo giá thị trường thiết bị điện, máy tính cầm tay, phiếu dự toán chi phí',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '3.1.TC2c',
      ai: '9.C2.2',
      dc: '• [Mã NLS: 3.1.TC2c] Tạo bảng tính Excel tự động tính tổng kinh phí mua sắm vật tư và chi phí nhân công lắp đặt.\n• [Mã AI: 9.C2.2] Nhờ AI phân tích phương án tối ưu hóa chi phí mua sắm thiết bị điện an toàn, tiết kiệm.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 6: Thực hành: Lắp đặt mạng điện trong nhà',
      y: '- Trọng tâm thực hành: Lắp đặt thành thạo, an toàn các mạch điện cơ bản: Mạch 1 (Bảng điện nhánh gồm Aptomat, ổ cắm, công tắc điều khiển đèn); Mạch 2 (Mạch đèn cầu thang 2 công tắc 3 cực); Mạch 3 (Mạch điều khiển 2 đèn sáng luân phiên).\n- Kiểm tra mạch bằng bút thử điện và vận hành thử nghiệm an toàn tuyệt đối.',
      eq: 'Bảng điện thực hành, bảng gỗ/nhựa, bóng đèn LED, đui đèn, công tắc 2 cực, công tắc 3 cực, dây dẫn, tua vít, kìm',
      loc: 'Phòng thực hành Kỹ thuật điện / Xưởng STEM',
      nls: '4.3.TC2a',
      ai: '9.D2.1',
      dc: '• [Mã NLS: 4.3.TC2a] Tuân thủ quy trình kiểm tra an toàn điện đa bước bằng bút thử điện trước khi đóng cầu dao.\n• [Mã AI: 9.D2.1] Quay video ghi lại quy trình đấu nối mạch điện và sử dụng AI phân tích độ gọn gàng, thẩm mỹ.'
    },
    {
      t: 'Mô đun I: Lắp đặt mạng điện',
      n: 'Bài 7: Một số ngành nghề liên quan đến lắp đặt mạng điện trong nhà',
      y: '- Nêu được nhiệm vụ, yêu cầu về năng lực, phẩm chất và an toàn lao động của các ngành nghề: Kĩ sư điện, Kĩ thuật viên kỹ thuật điện, Thợ điện dân dụng.\n- Tự đánh giá mức độ phù hợp của bản thân với nghề thợ điện và kỹ thuật điện.',
      eq: 'Video thực tế công việc của thợ điện dân dụng, tranh ảnh đồ bảo hộ ngành điện',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '2.3.TC2b',
      ai: '9.C2.3',
      dc: '• [Mã NLS: 2.3.TC2b] Khảo sát cơ hội việc làm và các trường đào tạo nghề kỹ thuật điện dân dụng trên Internet.\n• [Mã AI: 9.C2.3] Thực hiện trắc nghiệm đánh giá mức độ cẩn thận và tư duy logic cho nghề kỹ thuật điện cùng AI.'
    }
  ];

  // OPTION 2: MÔ ĐUN II: CHẾ BIẾN THỰC PHẨM (7 Bài)
  const cheBienThucPhamLessons = [
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 1: Thành phần dinh dưỡng trong thực phẩm',
      y: '- Phân tích được hàm lượng và vai trò của các chất dinh dưỡng (protein, lipid, carbohydrate, vitamin, chất khoáng, nước) trong thực phẩm hàng ngày.\n- Nhận biết các dấu hiệu thiếu hoặc thừa chất dinh dưỡng đối với sức khỏe.',
      eq: 'Tháp dinh dưỡng cho lứa tuổi thanh thiếu niên, bảng phân tích thành phần thực phẩm',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '1.1.TC2b',
      ai: '9.A2.3',
      dc: '• [Mã NLS: 1.1.TC2b] Tra cứu bảng giá trị dinh dưỡng của thực phẩm Việt Nam trên website Viện Dinh dưỡng Quốc gia.\n• [Mã AI: 9.A2.3] Ứng dụng AI phân tích hàm lượng macro (đạm, đường, béo) của các món ăn truyền thống.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 2: Lựa chọn và bảo quản thực phẩm',
      y: '- Trình bày cách lựa chọn thực phẩm tươi sống an toàn (thịt, cá, trứng, rau củ quả) và thực phẩm bao gói sẵn (hạn sử dụng, nhãn mác).\n- Thực hiện đúng các phương pháp bảo quản lạnh, đông lạnh, làm khô trong gia đình.',
      eq: 'Mẫu thực phẩm tươi, nhãn mác thực phẩm đóng gói có mã vạch, hộp bảo quản thực phẩm',
      loc: 'Phòng học bộ môn Công nghệ / Phòng thực hành',
      nls: '1.3.TC2b',
      ai: '9.C1.4',
      dc: '• [Mã NLS: 1.3.TC2b] Quét mã QR/mã vạch truy xuất nguồn gốc xuất xứ và chứng nhận an toàn VietGAP của thực phẩm.\n• [Mã AI: 9.C1.4] Dùng AI nhận diện độ tươi ngon của rau củ và thịt tươi qua camera điện thoại.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 3: Một số ngành nghề liên quan đến chế biến thực phẩm',
      y: '- Nêu được đặc điểm công việc và yêu cầu của các ngành nghề: Kĩ sư công nghệ thực phẩm, Chuyên gia dinh dưỡng, Đầu bếp, Kĩ thuật viên kiểm soát chất lượng (QA/QC).\n- Đánh giá sở thích và định hướng nghề nghiệp trong ngành ẩm thực và công nghệ thực phẩm.',
      eq: 'Video giới thiệu dây chuyền sản xuất thực phẩm tự động, tư liệu ngành nghề đầu bếp',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '2.3.TC2c',
      ai: '9.A1.2',
      dc: '• [Mã NLS: 2.3.TC2c] Tìm hiểu các trường đại học, cao đẳng đào tạo ngành Công nghệ Thực phẩm và Quản trị Ẩm thực.\n• [Mã AI: 9.A1.2] Khám phá ứng dụng của AI và tự động hóa trong quy trình đóng gói, kiểm định thực phẩm.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 4: An toàn lao động và an toàn vệ sinh thực phẩm',
      y: '- Nắm vững 10 nguyên tắc vàng chế biến thực phẩm an toàn của WHO (rửa tay, bảo quản nhiệt độ an toàn, nấu chín kỹ, tránh nhiễm chéo dao thớt chín - sống).\n- Tuân thủ nghiêm ngặt an toàn phòng cháy chữa cháy khi dùng bếp gas, bếp điện.',
      eq: 'Bộ thớt phân màu (xanh, đỏ, trắng), tạp dề, mũ bao tóc, găng tay thực phẩm, bình xịt chữa cháy',
      loc: 'Phòng thực hành Chế biến thực phẩm / Bếp STEM',
      nls: '4.3.TC2b',
      ai: '9.B1.1',
      dc: '• [Mã NLS: 4.3.TC2b] Thiết kế áp phích tuyên truyền phòng chống ngộ độc thực phẩm học đường bằng Canva.\n• [Mã AI: 9.B1.1] Kiểm tra độ an toàn của thực đơn và phát hiện các nguyên liệu kỵ nhau với sự trợ giúp của AI.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 5: Dự án: Tính toán chi phí bữa ăn theo thực đơn',
      y: '- Xây dựng thực đơn bữa cơm gia đình 4 người cân đối 4 nhóm chất dinh dưỡng và hợp lý về tài chính.\n- Lập bảng tính toán chi tiết định lượng nguyên liệu, đơn giá và tổng chi phí thực tế cho bữa ăn.',
      eq: 'Bảng giá thị trường thực phẩm tại siêu thị/chợ, phiếu dự toán thực đơn, máy tính cầm tay',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '3.1.TC2d',
      ai: '9.C2.4',
      dc: '• [Mã NLS: 3.1.TC2d] Thiết lập bảng tính Excel quản lý chi phí bữa ăn và tính calo tự động theo khẩu phần.\n• [Mã AI: 9.C2.4] Nhờ AI gợi ý thực đơn 5 ngày trong tuần thơm ngon, đủ chất với ngân sách 150.000đ/bữa.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 6: Chế biến thực phẩm có sử dụng nhiệt',
      y: '- Thực hành chế biến món luộc, món kho (ví dụ: thịt kho trứng, cá kho tộ), món xào/rán đạt yêu cầu kĩ thuật về độ chín, màu sắc, mùi vị đặc trưng và đảm bảo vệ sinh an toàn thực phẩm.\n- Rèn luyện kỹ năng nêm nếm gia vị chuẩn mực và trang trí món ăn đẹp mắt.',
      eq: 'Bếp từ/hồng ngoại, nồi nấu, chảo xào, dao thớt, gia vị (nước mắm, đường, muối, tiêu), nguyên liệu thực phẩm tươi',
      loc: 'Phòng thực hành Chế biến thực phẩm / Bếp STEM',
      nls: '5.3.TC2c',
      ai: '9.D2.2',
      dc: '• [Mã NLS: 5.3.TC2c] Chụp ảnh và quay video ngắn các bước chế biến món kho đạt chuẩn màu cánh gián.\n• [Mã AI: 9.D2.2] Tạo video ẩm thực TikTok/Reels hướng dẫn kỹ thuật nấu ăn kết hợp lồng tiếng AI.'
    },
    {
      t: 'Mô đun II: Chế biến thực phẩm',
      n: 'Bài 7: Chế biến thực phẩm không sử dụng nhiệt',
      y: '- Thực hành chế biến món trộn dầu giấm, món nộm chua ngọt (nộm su hào tai heo/ngó sen tôm thịt) và muối chua tự nhiên (dưa cải muối chua).\n- Nắm vững tỷ lệ pha nước trộn nộm chua ngọt chuẩn vị và nguyên lý lên men lactic an toàn.',
      eq: 'Rau củ quả tươi, ớt tỏi, chanh, giấm, đường, lạc rang, bát trộn lớn, đĩa bày trí',
      loc: 'Phòng thực hành Chế biến thực phẩm / Bếp STEM',
      nls: '2.1.TC2b',
      ai: '9.D1.3',
      dc: '• [Mã NLS: 2.1.TC2b] Trình bày bài báo cáo sản phẩm ẩm thực không nhiệt kèm hình ảnh và cảm nhận thực khách.\n• [Mã AI: 9.D1.3] Ứng dụng AI phân tích công thức pha nước chấm và tỷ lệ gia vị hoàn hảo.'
    }
  ];

  // OPTION 3: MÔ ĐUN III: TRỒNG CÂY ĂN QUẢ (8 Bài)
  const trongCayAnQuaLessons = [
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 1: Giới thiệu chung về cây ăn quả',
      y: '- Nêu được giá trị dinh dưỡng, giá trị kinh tế và vai trò xuất khẩu của cây ăn quả ở Việt Nam.\n- Trình bày được đặc điểm thực vật học (hệ rễ, thân cành, lá, hoa, quả) và yêu cầu ngoại cảnh chung của cây ăn quả.',
      eq: 'Tranh ảnh các loại cây ăn quả nhiệt đới Việt Nam, bản đồ phân bố vùng trồng cây ăn quả',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '1.1.TC2c',
      ai: '9.A1.3',
      dc: '• [Mã NLS: 1.1.TC2c] Tra cứu số liệu xuất khẩu trái cây chủ lực (sầu riêng, thanh long, xoài) trên trang web Bộ Nông nghiệp.\n• [Mã AI: 9.A1.3] Khám phá ứng dụng AI nhận diện giai đoạn chín của quả trên cây từ ảnh chụp vệ tinh/drone.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 2: Nhân giống vô tính cây ăn quả',
      y: '- Trình bày và thực hành đúng kỹ thuật chiết cành, ghép mắt (ghép chữ T, ghép áp, ghép cành) cho cây ăn quả.\n- Hiểu được ưu điểm giữ nguyên đặc tính tốt của cây mẹ và thời gian cho quả sớm của phương pháp nhân giống vô tính.',
      eq: 'Dao ghép cành chuyên dụng, kéo cắt cành, dây nilon tự hủy, cành ghép, gốc ghép bưởi/xoài',
      loc: 'Phòng thực hành / Vườn ươm cây trường',
      nls: '5.3.TC2d',
      ai: '9.D1.4',
      dc: '• [Mã NLS: 5.3.TC2d] Xem video 3D mô phỏng kỹ thuật gọt vết ghép và buộc dây khít chống nước mưa.\n• [Mã AI: 9.D1.4] Tạo video ngắn hướng dẫn thao tác chiết cành cây ăn quả bằng ứng dụng số.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 3: Kĩ thuật trồng và chăm sóc cây ăn quả có múi (Cam, bưởi, quýt)',
      y: '- Trình bày yêu cầu làm đất, đào hố bón lót, kỹ thuật trồng và chăm sóc cây có múi (tưới nước, bón phân thúc, cắt tỉa cành tạo tán, phòng trừ sâu vẽ bùa, bệnh vàng lá Greening).\n- Vận dụng vào chăm sóc cây ăn quả có múi tại gia đình.',
      eq: 'Mẫu cây giống cam/bưởi, kéo tỉa cành, phân bón NPK, tranh ảnh nhận diện bệnh Greening',
      loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
      nls: '1.2.TC2c',
      ai: '9.C1.5',
      dc: '• [Mã NLS: 1.2.TC2c] Tra cứu quy trình VietGAP canh tác bưởi Diễn và cam sành đạt tiêu chuẩn OCOP.\n• [Mã AI: 9.C1.5] Sử dụng AI chẩn đoán bệnh vàng lá thối rễ và sâu vẽ bùa trên cây cam từ ảnh lá.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 4: Kĩ thuật trồng và chăm sóc cây nhãn',
      y: '- Trình bày được yêu cầu sinh thái, kỹ thuật trồng, khoanh cành xử lý phân hóa mầm hoa và phòng trừ sâu đục gân lá, bọ xít hại nhãn.\n- Nắm vững kỹ thuật thu hoạch và bảo quản nhãn tươi sau thu hoạch.',
      eq: 'Tranh ảnh giống nhãn lồng Hưng Yên, nhãn xuồng cơm vàng, dao khoanh cành',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '3.1.TC2e',
      ai: '9.C2.5',
      dc: '• [Mã NLS: 3.1.TC2e] Lập bảng theo dõi chu kỳ ra hoa, đậu quả và lịch bón phân đón hoa cây nhãn trên Excel.\n• [Mã AI: 9.C2.5] Nhờ AI tư vấn thời điểm khoanh cành điều khiển nhãn ra hoa trái vụ đạt giá bán cao.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 5: Kĩ thuật trồng và chăm sóc cây xoài',
      y: '- Nêu được kỹ thuật trồng xoài (xoài cát Hòa Lộc, xoài Đài Loan), kỹ thuật bấm ngọn tạo tán thấp, phun bổ sung vi lượng chống rụng quả non và bao trái chống ruồi đục quả.\n- Hiểu tầm quan trọng của việc bao trái an toàn không dùng hóa chất.',
      eq: 'Túi bao trái xoài chuyên dụng, mẫu quả xoài mẫu, tranh ảnh kỹ thuật tỉa cành xoài',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '4.4.TC2a',
      ai: '9.A2.4',
      dc: '• [Mã NLS: 4.4.TC2a] Tuyên truyền kỹ thuật bao trái sinh học thay thế thuốc trừ sâu hóa học trên trang tin lớp.\n• [Mã AI: 9.A2.4] Khám phá công nghệ xử lý nhiệt chống ruồi đục quả xoài xuất khẩu sang thị trường Mỹ.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 6: Kĩ thuật trồng và chăm sóc cây sầu riêng',
      y: '- Trình bày được yêu cầu thổ nhưỡng đất thoát nước tốt, kỹ thuật tỉa bớt hoa để nâng cao chất lượng hộc cơm sầu riêng, kỹ thuật bón phân kali và phòng ngừa bệnh xì mủ Phytophthora.\n- Nắm vững tiêu chuẩn xuất khẩu sầu riêng chính ngạch.',
      eq: 'Tranh ảnh các giống sầu riêng Ri6, Monthong, thước đo độ ngọt Brix, tài liệu xuất khẩu',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '1.3.TC2c',
      ai: '9.C1.6',
      dc: '• [Mã NLS: 1.3.TC2c] Tra cứu quy định mã số vùng trồng xuất khẩu sầu riêng sang Trung Quốc.\n• [Mã AI: 9.C1.6] Xem mô phỏng AI quy trình quét nấm bệnh và kiểm tra độ chín múi sầu riêng không phá hủy vỏ.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 7: Kĩ thuật trồng và chăm sóc cây chuối',
      y: '- Trình bày được kỹ thuật nhân giống chuối nuôi cấy mô, kỹ thuật đào hố bón phân, kỹ thuật chống đổ ngã buồng chuối và bao buồng chuối đạt tiêu chuẩn xuất khẩu.\n- Nhận biết bệnh héo rũ Panama hại chuối và cách phòng ngừa.',
      eq: 'Cây giống chuối cấy mô trong bầu, túi bao buồng chuối màu xanh, dây chống bão',
      loc: 'Phòng học bộ môn Công nghệ / Lớp học',
      nls: '5.2.TC2a',
      ai: '9.D1.5',
      dc: '• [Mã NLS: 5.2.TC2a] Xem video 3D quy trình nhân giống chuối cấy mô vô trùng trong phòng thí nghiệm.\n• [Mã AI: 9.D1.5] Đặt câu hỏi cho AI về các biện pháp cách ly đất chống lây lan nấm bệnh Panama.'
    },
    {
      t: 'Mô đun III: Trồng cây ăn quả',
      n: 'Bài 8: Dự án: Trồng cây ăn quả',
      y: '- Học sinh lập kế hoạch chi tiết trồng thử nghiệm một cây ăn quả nhỏ tại vườn trường hoặc chậu lớn tại nhà (chanh, ổi, quất cảnh).\n- Ghi chép nhật ký sinh trưởng, thực hiện đúng các bước bón phân tưới nước và báo cáo dự án trước hội đồng lớp.',
      eq: 'Cây giống ổi/chanh trong chậu, đất dinh dưỡng Tribat, phân hữu cơ, nhật ký dự án',
      loc: 'Phòng học bộ môn Công nghệ / Vườn trường',
      nls: '2.4.TC2b',
      ai: '9.D2.3',
      dc: '• [Mã NLS: 2.4.TC2b] Sử dụng bảng tính Google Sheets theo dõi chiều cao cây, số cành mới và số hoa đậu quả.\n• [Mã AI: 9.D2.3] Tạo bài thuyết trình số hóa báo cáo dự án với sự hỗ trợ hình ảnh và gợi ý từ AI.'
    }
  ];

  // Chọn danh sách bài của Mô đun được chọn
  const activeModuleLessons =
    selectedModule === 'che_bien_thuc_pham'
      ? cheBienThucPhamLessons
      : selectedModule === 'trong_cay_an_qua'
      ? trongCayAnQuaLessons
      : dienGiaDungLessons;

  // Lập kế hoạch phân bổ 35 tuần thực học (18 tuần HK1 + 17 tuần HK2)
  for (let w = 1; w <= 35; w++) {
    const isTerm1 = w <= 18;
    const pCurrent = isTerm1 ? pWeek1 : pWeek2;

    // Các tuần kiểm tra định kỳ chuẩn hóa
    if (w === 9) {
      list.push({
        week: w,
        topic: 'Đánh giá định kỳ',
        name: `Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 9`,
        periods: pCurrent,
        yccd: `- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng phần Định hướng nghề nghiệp (Bài 1 - 5) và các bài đầu Mô đun ${selectedModule === 'che_bien_thuc_pham' ? 'Chế biến thực phẩm' : selectedModule === 'trong_cay_an_qua' ? 'Trồng cây ăn quả' : 'Lắp đặt mạng điện'}.\n- Đánh giá năng lực tự nhận thức nghề nghiệp, tư duy kỹ thuật và tính trung thực khi làm bài kiểm tra.`,
        equipment: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra giữa kì 1',
        location: 'Phòng học / Lớp học',
        nlsCode: '4.1.TC2a',
        aiCode: '9.B2.1',
        digitalCompetency: '• [Mã NLS: 4.1.TC2a] Thực hiện nghiêm túc quy chế phòng thi, bảo mật thông tin tài khoản làm bài.\n• [Mã AI: 9.B2.1] Thể hiện tư duy độc lập và kỹ năng làm bài kiểm tra khách quan.',
        notes: 'Kiểm tra giữa kỳ'
      });
      continue;
    }

    if (w === 16) {
      list.push({
        week: w,
        topic: 'Đánh giá định kỳ',
        name: `Kiểm tra, đánh giá cuối Học kỳ 1 môn Công nghệ Lớp 9`,
        periods: pCurrent,
        yccd: `- Đánh giá tổng hợp toàn diện kết quả học tập và rèn luyện môn Công nghệ Lớp 9 trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực học sinh, làm căn cứ điều chỉnh kế hoạch giáo dục Học kỳ 2; rèn luyện kỷ luật phòng thi.`,
        equipment: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối kì 1',
        location: 'Phòng học / Lớp học',
        nlsCode: '4.1.TC2b',
        aiCode: '9.B2.2',
        digitalCompetency: '• [Mã NLS: 4.1.TC2b] Tuân thủ quy chế kiểm tra đánh giá, hoàn thành bài làm đúng thời gian quy định.\n• [Mã AI: 9.B2.2] Tự tổng kết hồ sơ học tập HK1 và xây dựng mục tiêu phấn đấu cho HK2.',
        notes: 'Kiểm tra cuối kỳ'
      });
      continue;
    }

    if (w === 17) {
      list.push({
        week: w,
        topic: 'Chữa bài kiểm tra & Ôn tập HK1',
        name: `Chữa bài kiểm tra cuối HK1 & Ôn tập củng cố kiến thức HK1 môn Công nghệ 9`,
        periods: pCurrent,
        yccd: `- Chữa bài kiểm tra cuối HK1; hệ thống hóa toàn bộ kiến thức phần Định hướng nghề nghiệp (5 bài) và các bài học đầu của Mô đun ${selectedModule === 'che_bien_thuc_pham' ? 'Chế biến thực phẩm' : selectedModule === 'trong_cay_an_qua' ? 'Trồng cây ăn quả' : 'Lắp đặt mạng điện'}.\n- Rèn luyện kỹ năng giải các câu hỏi trắc nghiệm, tình huống chọn nghề và bài tập kỹ thuật.`,
        equipment: 'Đề kiểm tra, đáp án biểu điểm, sơ đồ tư duy tổng hợp, bài tập trắc nghiệm số hóa',
        location: 'Phòng học bộ môn Công nghệ / Lớp học',
        nlsCode: '1.2.TC2b',
        aiCode: '9.B1.2',
        digitalCompetency: '• [Mã NLS: 1.2.TC2b] Sử dụng sơ đồ tư duy XMind hệ thống hóa toàn bộ kiến thức Công nghệ 9 HK1.\n• [Mã AI: 9.B1.2] Luyện tập trắc nghiệm tương tác với phản hồi giải thích chi tiết từ AI.',
        notes: ''
      });
      continue;
    }

    if (w === 18) {
      list.push({
        week: w,
        topic: 'Sơ kết Học kỳ 1',
        name: `Sơ kết Học kỳ 1 môn Công nghệ Lớp 9`,
        periods: pCurrent,
        yccd: `- Tổng kết, đánh giá quá trình học tập và rèn luyện môn Công nghệ trong Học kỳ 1.\n- Định hướng kế hoạch học tập chuyên sâu cho Học kỳ 2.`,
        equipment: 'Bảng tổng kết điểm số HK1, hồ sơ học tập',
        location: 'Phòng học bộ môn Công nghệ / Lớp học',
        nlsCode: '4.1.TC2b',
        aiCode: '9.B2.2',
        digitalCompetency: '• [Mã NLS: 4.1.TC2b] Hoàn thiện hồ sơ học tập và tự đánh giá mục tiêu HK1.\n• [Mã AI: 9.B2.2] Nhờ AI gợi ý kế hoạch phát triển kỹ năng thực hành cho HK2.',
        notes: ''
      });
      continue;
    }

    if (w === 26) {
      list.push({
        week: w,
        topic: 'Đánh giá định kỳ',
        name: `Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 9`,
        periods: pCurrent,
        yccd: `- Đánh giá mức độ tiếp thu các nội dung thực hành trọng tâm Mô đun ${selectedModule === 'che_bien_thuc_pham' ? 'Chế biến thực phẩm' : selectedModule === 'trong_cay_an_qua' ? 'Trồng cây ăn quả' : 'Lắp đặt mạng điện'} từ Tuần 19 đến Tuần 25.\n- Đánh giá kỹ năng thao tác kỹ thuật, an toàn lao động và tư duy giải quyết vấn đề.`,
        equipment: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả kiểm tra giữa kì 2',
        location: 'Phòng học / Lớp học',
        nlsCode: '4.1.TC2c',
        aiCode: '9.B2.3',
        digitalCompetency: '• [Mã NLS: 4.1.TC2c] Thực hiện bài kiểm tra nghiêm túc, đúng quy chế và thời gian quy định.\n• [Mã AI: 9.B2.3] Thể hiện kỹ năng thực hành và vận dụng kiến thức kỹ thuật độc lập.',
        notes: 'Kiểm tra giữa kỳ'
      });
      continue;
    }

    if (w === 31) {
      list.push({
        week: w,
        topic: 'Đánh giá định kỳ',
        name: `Kiểm tra, đánh giá cuối Học kỳ 2 môn Công nghệ Lớp 9`,
        periods: pCurrent,
        yccd: `- Đánh giá tổng kết mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn Công nghệ Lớp 9 cả năm học.\n- Đánh giá sự tiến bộ về phẩm chất, năng lực kỹ thuật và sẵn sàng định hướng nghề nghiệp sau khi tốt nghiệp THCS.`,
        equipment: 'Đề kiểm tra in sẵn, ma trận và bảng đặc tả đề kiểm tra cuối năm',
        location: 'Phòng học / Lớp học',
        nlsCode: '4.1.TC2d',
        aiCode: '9.B2.4',
        digitalCompetency: '• [Mã NLS: 4.1.TC2d] Hoàn thành bài kiểm tra cuối năm nghiêm túc, đúng quy chế phòng thi.\n• [Mã AI: 9.B2.4] Tổng kết toàn diện hồ sơ năng lực công nghệ THCS và định hướng chọn trường cấp 3/nghề nghiệp.',
        notes: 'Kiểm tra cuối kỳ'
      });
      continue;
    }

    if (w === 32) {
      list.push({
        week: w,
        topic: 'Chữa bài kiểm tra & Ôn tập HK2',
        name: `Chữa bài kiểm tra cuối HK2 & Ôn tập thực hành Mô đun ${selectedModule === 'che_bien_thuc_pham' ? 'Chế biến thực phẩm' : selectedModule === 'trong_cay_an_qua' ? 'Trồng cây ăn quả' : 'Lắp đặt mạng điện'}`,
        periods: pCurrent,
        yccd: `- Chữa bài kiểm tra cuối HK2; chỉ ra lỗi sai phổ biến và củng cố kỹ năng thực hành chuyên sâu của Mô đun.\n- Rèn luyện kỹ năng an toàn và hoàn thiện sản phẩm.`,
        equipment: 'Đề kiểm tra, đáp án biểu điểm, dụng cụ thực hành mô đun',
        location: 'Phòng học bộ môn Công nghệ / Phòng thực hành',
        nlsCode: '1.2.TC2d',
        aiCode: '9.B1.4',
        digitalCompetency: '• [Mã NLS: 1.2.TC2d] Hoàn thiện bảng báo cáo kết quả thực hành mô đun trên nền tảng số.\n• [Mã AI: 9.B1.4] Sử dụng AI đánh giá chất lượng sản phẩm thực hành mô đun.',
        notes: ''
      });
      continue;
    }

    if (w === 33) {
      list.push({
        week: w,
        topic: 'Ôn tập cuối năm',
        name: `Ôn tập toàn diện kiến thức Mô đun thực hành Công nghệ 9 (Tiết 1)`,
        periods: pCurrent,
        yccd: `- Hệ thống hóa toàn bộ kiến thức chuyên sâu và kỹ năng thực hành của Mô đun ${selectedModule === 'che_bien_thuc_pham' ? 'Chế biến thực phẩm' : selectedModule === 'trong_cay_an_qua' ? 'Trồng cây ăn quả' : 'Lắp đặt mạng điện'}.\n- Củng cố quy trình kỹ thuật, các nguyên tắc an toàn và hạch toán chi phí sản xuất.`,
        equipment: 'Sơ đồ cây kỹ thuật, bảng tổng hợp quy trình thực hành, phiếu ôn tập',
        location: 'Phòng học bộ môn Công nghệ / Lớp học',
        nlsCode: '1.2.TC2d',
        aiCode: '9.B1.4',
        digitalCompetency: '• [Mã NLS: 1.2.TC2d] Xây dựng bản đồ tổng kết quy trình thực hành kỹ thuật trên nền tảng số.\n• [Mã AI: 9.B1.4] Khảo sát các câu hỏi tình huống thực tế do AI tạo sinh để ôn tập.',
        notes: ''
      });
      continue;
    }

    if (w === 34) {
      list.push({
        week: w,
        topic: 'Ôn tập cuối năm',
        name: `Ôn tập toàn diện chuẩn bị tổng kết năm học môn Công nghệ Lớp 9 (Tiết 2)`,
        periods: pCurrent,
        yccd: `- Luyện giải các bộ đề thi mẫu môn Công nghệ 9 tổng hợp cả năm học.\n- Rèn luyện kỹ năng phân tích, lập luận logic và kỹ năng làm bài thi trắc nghiệm khách quan.`,
        equipment: 'Bộ đề thi thử nghiệm trực tuyến, phiếu trả lời trắc nghiệm chuẩn hóa',
        location: 'Phòng học bộ môn Công nghệ / Lớp học',
        nlsCode: '5.2.TC2c',
        aiCode: '9.B2.5',
        digitalCompetency: '• [Mã NLS: 5.2.TC2c] Làm bài thi thử nghiệm trên hệ thống LMS của nhà trường.\n• [Mã AI: 9.B2.5] Nhận báo cáo phân tích điểm số và gợi ý củng cố kiến thức từ AI.',
        notes: ''
      });
      continue;
    }

    if (w === 35) {
      list.push({
        week: w,
        topic: 'Tổng kết năm học',
        name: `Tổng kết năm học & Đánh giá xếp loại môn Công nghệ Lớp 9 cả năm`,
        periods: pCurrent,
        yccd: `- Đánh giá xếp loại toàn diện quá trình học tập và rèn luyện môn Công nghệ Lớp 9 của học sinh.\n- Định hướng chọn trường, chọn nghề sau khi tốt nghiệp THCS.`,
        equipment: 'Hồ sơ học tập, bảng tổng kết điểm số cả năm',
        location: 'Phòng học / Lớp học',
        nlsCode: '4.1.TC2d',
        aiCode: '9.B2.5',
        digitalCompetency: '• [Mã NLS: 4.1.TC2d] Hoàn tất hồ sơ hướng nghiệp và định hướng nghề nghiệp tương lai.\n• [Mã AI: 9.B2.5] Sử dụng AI lập kế hoạch cá nhân cho bậc THPT.',
        notes: ''
      });
      continue;
    }

    // =========================================================================
    // PHÂN PHỐI BÀI HỌC HỌC KỲ 1 (Tuần 1 -> 18, trừ tuần 9 và 17, 18)
    // Cấu trúc phân phối chuẩn 15 tiết phần chung + 1 tiết Ôn tập + 1 tiết KTĐGGK1:
    // - Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật công nghệ (3 tiết: Tiết 1, 2, 3)
    // - Bài 2: Cơ cấu hệ thống giáo dục quốc dân (2 tiết: Tiết 4, 5)
    // - Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (4 tiết: Tiết 6, 7, 8, 9)
    // - Bài 4: Quy trình lựa chọn nghề nghiệp (3 tiết: Tiết 10, 11, 12)
    // - Bài 5: Dự án: Tự đánh giá mức độ phù hợp của bản thân... (3 tiết: Tiết 13, 14, 15)
    // - Ôn tập KTGK1 (1 tiết: Tiết 16)
    // - KTĐGGK1: Kiểm tra đánh giá giữa kì 1 (1 tiết: Tiết 17)
    // =========================================================================
    if (w <= 18) {
      if (pWeek1 === 2) {
        // TRƯỜNG HỢP CHUẨN 2 TIẾT / TUẦN (18 tuần x 2 = 36 tiết HK1):
        // Tuần 1 đến 8: 15 tiết Định hướng nghề nghiệp + 1 tiết Ôn tập KTGK1
        if (w === 1) {
          list.push({
            week: 1,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật công nghệ (Tiết 1, 2)',
            periods: 2,
            yccd: '- Nêu được khái niệm nghề nghiệp, tầm quan trọng của nghề nghiệp đối với bản thân, gia đình và xã hội.\n- Trình bày được đặc điểm chung và môi trường làm việc đặc thù của các nghề thuộc lĩnh vực kĩ thuật, công nghệ.',
            equipment: 'Tranh ảnh, video giới thiệu các ngành nghề kỹ thuật hiện đại (tự động hóa, cơ điện tử, AI, chip bán dẫn)',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '1.1.TC2a',
            aiCode: '9.A1.1',
            digitalCompetency: '• [Mã NLS: 1.1.TC2a] Tra cứu danh mục nghề nghiệp Việt Nam và xu hướng thị trường lao động số trên web.\n• [Mã AI: 9.A1.1] Khám phá các ngành nghề công nghệ mới nổi do Trí tuệ nhân tạo (AI) tạo ra trong tương lai.',
            notes: ''
          });
        } else if (w === 2) {
          list.push({
            week: 2,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật công nghệ (Tiết 3) & Bài 2: Cơ cấu hệ thống giáo dục quốc dân (Tiết 1)',
            periods: 2,
            yccd: '- Phân tích yêu cầu về phẩm chất và năng lực của người lao động trong lĩnh vực kỹ thuật công nghệ.\n- Trình bày được sơ đồ khung cơ cấu hệ thống giáo dục quốc dân Việt Nam (từ mầm non đến sau đại học).',
            equipment: 'Sơ đồ hệ thống giáo dục quốc dân Việt Nam, cẩm nang tuyển sinh sau THCS',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '2.3.TC2a',
            aiCode: '9.A2.1',
            digitalCompetency: '• [Mã NLS: 2.3.TC2a] Khai thác cổng thông tin tuyển sinh trực tuyến của các trường THPT và trường nghề.\n• [Mã AI: 9.A2.1] Trải nghiệm công cụ AI tư vấn lộ trình học tập phù hợp sau khi tốt nghiệp THCS.',
            notes: ''
          });
        } else if (w === 3) {
          list.push({
            week: 3,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 2: Cơ cấu hệ thống giáo dục quốc dân (Tiết 2) & Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (Tiết 1)',
            periods: 2,
            yccd: '- Hiểu rõ các luồng phân luồng sau THCS: học tiếp THPT, học GDTX kết hợp học nghề, hoặc học Trung cấp/Cao đẳng (mô hình 9+).\n- Nêu được khái niệm thị trường lao động và các yếu tố ảnh hưởng đến thị trường lao động kỹ thuật.',
            equipment: 'Báo cáo thị trường lao động kỹ thuật số của Bộ LĐ-TB&XH, video phỏng vấn nhà tuyển dụng',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '1.2.TC2a',
            aiCode: '9.C1.1',
            digitalCompetency: '• [Mã NLS: 1.2.TC2a] Phân tích biểu đồ dữ liệu thống kê nhu cầu nhân lực các ngành kỹ thuật trên Google Sheets.\n• [Mã AI: 9.C1.1] Sử dụng AI phân tích các kỹ năng mềm và kỹ năng số cần thiết cho nghề nghiệp tương lai.',
            notes: ''
          });
        } else if (w === 4) {
          list.push({
            week: 4,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (Tiết 2, 3)',
            periods: 2,
            yccd: '- Phân tích được xu hướng phát triển và nhu cầu tuyển dụng nhân lực kỹ thuật công nghệ cao tại Việt Nam hiện nay.\n- Đánh giá cơ hội việc làm và các yêu cầu kỹ năng mới của thời đại kinh tế số và tự động hóa.',
            equipment: 'Bản tin thị trường lao động Việt Nam, biểu đồ thống kê cơ cấu việc làm',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '1.2.TC2a',
            aiCode: '9.C1.1',
            digitalCompetency: '• [Mã NLS: 1.2.TC2a] Tra cứu thông tin tuyển dụng việc làm kỹ thuật trên các trang web uy tín.\n• [Mã AI: 9.C1.1] Nhờ AI dự báo mức lương và triển vọng của các ngành kỹ thuật trong 5 năm tới.',
            notes: ''
          });
        } else if (w === 5) {
          list.push({
            week: 5,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (Tiết 4) & Bài 4: Quy trình lựa chọn nghề nghiệp (Tiết 1)',
            periods: 2,
            yccd: '- Tổng kết phân tích thị trường lao động kỹ thuật; nắm vững nguyên tắc lựa chọn nghề nghiệp phù hợp bản thân.\n- Nhận diện các yếu tố ảnh hưởng đến quyết định chọn nghề (gia đình, xã hội, tài chính, năng khiếu).',
            equipment: 'Sơ đồ mô hình IKIGAI, bảng tự đánh giá 3 vòng tròn chọn nghề',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '3.1.TC2a',
            aiCode: '9.C2.1',
            digitalCompetency: '• [Mã NLS: 3.1.TC2a] Xây dựng bản đồ định hướng cá nhân (Personal Career Roadmap) trên phần mềm Canva.\n• [Mã AI: 9.C2.1] Thực hiện bài phỏng vấn định hướng nghề nghiệp tương tác với Chatbot AI.',
            notes: ''
          });
        } else if (w === 6) {
          list.push({
            week: 6,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 4: Quy trình lựa chọn nghề nghiệp (Tiết 2, 3)',
            periods: 2,
            yccd: '- Nắm vững quy trình lựa chọn nghề nghiệp theo mô hình IKIGAI (Sở thích - Năng lực - Cơ hội nghề nghiệp - Nhu cầu xã hội).\n- Lập kế hoạch hành động từng bước để phát triển năng lực và phẩm chất theo nghề đã chọn.',
            equipment: 'Phiếu phân tích IKIGAI cá nhân, sơ đồ cây quyết định nghề nghiệp',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '3.1.TC2a',
            aiCode: '9.C2.1',
            digitalCompetency: '• [Mã NLS: 3.1.TC2a] Hoàn thiện bảng phân tích nghề nghiệp cá nhân trên Google Docs.\n• [Mã AI: 9.C2.1] Sử dụng AI đánh giá mức độ khả thi của kế hoạch phát triển kỹ năng chọn nghề.',
            notes: ''
          });
        } else if (w === 7) {
          list.push({
            week: 7,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 5: Dự án: Tự đánh giá mức độ phù hợp của bản thân với một số ngành nghề trong lĩnh vực kĩ thuật, công nghệ (Tiết 1, 2)',
            periods: 2,
            yccd: '- Thực hiện trọn vẹn bài trắc nghiệm sở thích nghề nghiệp Holland (RIASEC) và tự đánh giá năng lực bản thân.\n- Thu thập minh chứng, lập hồ sơ định hướng nghề nghiệp cá nhân (Career Portfolio).',
            equipment: 'Bộ câu hỏi trắc nghiệm Holland trực tuyến, phiếu hồ sơ nghề nghiệp cá nhân',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '5.3.TC2a',
            aiCode: '9.D1.1',
            digitalCompetency: '• [Mã NLS: 5.3.TC2a] Thực hiện trắc nghiệm trắc lượng tâm lý Holland trực tuyến và xuất báo cáo PDF kết quả.\n• [Mã AI: 9.D1.1] Nhờ AI phân tích kết quả bài trắc nghiệm và đề xuất top 5 ngành nghề kỹ thuật phù hợp nhất.',
            notes: 'Dự án Hướng nghiệp'
          });
        } else if (w === 8) {
          list.push({
            week: 8,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 5: Dự án: Tự đánh giá mức độ phù hợp của bản thân với một số ngành nghề trong lĩnh vực kĩ thuật, công nghệ (Tiết 3) & Ôn tập KTGK1',
            periods: 2,
            yccd: '- Báo cáo sản phẩm dự án hồ sơ hướng nghiệp cá nhân trước hội đồng lớp.\n- Hệ thống hóa toàn bộ kiến thức 5 bài Định hướng nghề nghiệp chuẩn bị cho kỳ kiểm tra giữa Học kỳ 1.',
            equipment: 'Bài thuyết trình hồ sơ nghề nghiệp, đề cương ôn tập KTGK1, sơ đồ tư duy tổng hợp',
            location: 'Phòng học bộ môn Công nghệ / Lớp học',
            nlsCode: '1.2.TC2b',
            aiCode: '9.B1.2',
            digitalCompetency: '• [Mã NLS: 1.2.TC2b] Trình bày bài báo cáo đa phương tiện thuyết minh kế hoạch hướng nghiệp cá nhân.\n• [Mã AI: 9.B1.2] Luyện tập bộ câu hỏi trắc nghiệm ôn tập KTGK1 trên nền tảng Quizizz/Azota.',
            notes: 'Ôn tập giữa kỳ'
          });
        } else if (w >= 10 && w <= 15) {
          // Tuần 10 đến 15 (6 tuần x 2 tiết = 12 tiết): Học phần Mô đun tự chọn
          const lessonIdx = w - 10;
          const item = activeModuleLessons[lessonIdx % activeModuleLessons.length];
          const isProject = item.n.includes('Dự án');
          list.push({
            week: w,
            topic: item.t,
            name: `${item.n} (2 tiết)`,
            periods: 2,
            yccd: item.y,
            equipment: item.eq,
            location: item.loc,
            nlsCode: item.nls,
            aiCode: item.ai,
            digitalCompetency: item.dc,
            notes: isProject ? 'Dự án STEM' : item.n.includes('Thực hành') ? 'Thực hành kỹ thuật' : ''
          });
        }
      } else if (pWeek1 === 1) {
        // TRƯỜNG HỢP 1 TIẾT / TUẦN:
        if (w >= 1 && w <= 3) {
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `Bài 1: Nghề nghiệp trong lĩnh vực kĩ thuật công nghệ (Tiết ${w})`,
            periods: 1,
            yccd: generalCareerOrientationLessons[0].y,
            equipment: generalCareerOrientationLessons[0].eq,
            location: generalCareerOrientationLessons[0].loc,
            nlsCode: generalCareerOrientationLessons[0].nls,
            aiCode: generalCareerOrientationLessons[0].ai,
            digitalCompetency: generalCareerOrientationLessons[0].dc,
            notes: ''
          });
        } else if (w >= 4 && w <= 5) {
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `Bài 2: Cơ cấu hệ thống giáo dục quốc dân (Tiết ${w - 3})`,
            periods: 1,
            yccd: generalCareerOrientationLessons[1].y,
            equipment: generalCareerOrientationLessons[1].eq,
            location: generalCareerOrientationLessons[1].loc,
            nlsCode: generalCareerOrientationLessons[1].nls,
            aiCode: generalCareerOrientationLessons[1].ai,
            digitalCompetency: generalCareerOrientationLessons[1].dc,
            notes: ''
          });
        } else if (w >= 6 && w <= 8) {
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (Tiết ${w - 5})`,
            periods: 1,
            yccd: generalCareerOrientationLessons[2].y,
            equipment: generalCareerOrientationLessons[2].eq,
            location: generalCareerOrientationLessons[2].loc,
            nlsCode: generalCareerOrientationLessons[2].nls,
            aiCode: generalCareerOrientationLessons[2].ai,
            digitalCompetency: generalCareerOrientationLessons[2].dc,
            notes: ''
          });
        } else if (w === 10) {
          list.push({
            week: 10,
            topic: 'Định hướng nghề nghiệp',
            name: 'Bài 3: Thị trường lao động kĩ thuật, công nghệ tại Việt Nam (Tiết 4)',
            periods: 1,
            yccd: generalCareerOrientationLessons[2].y,
            equipment: generalCareerOrientationLessons[2].eq,
            location: generalCareerOrientationLessons[2].loc,
            nlsCode: generalCareerOrientationLessons[2].nls,
            aiCode: generalCareerOrientationLessons[2].ai,
            digitalCompetency: generalCareerOrientationLessons[2].dc,
            notes: ''
          });
        } else if (w >= 11 && w <= 13) {
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `Bài 4: Quy trình lựa chọn nghề nghiệp (Tiết ${w - 10})`,
            periods: 1,
            yccd: generalCareerOrientationLessons[3].y,
            equipment: generalCareerOrientationLessons[3].eq,
            location: generalCareerOrientationLessons[3].loc,
            nlsCode: generalCareerOrientationLessons[3].nls,
            aiCode: generalCareerOrientationLessons[3].ai,
            digitalCompetency: generalCareerOrientationLessons[3].dc,
            notes: ''
          });
        } else if (w >= 14 && w <= 15) {
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `Bài 5: Dự án: Tự đánh giá mức độ phù hợp của bản thân với một số ngành nghề trong lĩnh vực kĩ thuật, công nghệ (Tiết ${w - 13})`,
            periods: 1,
            yccd: generalCareerOrientationLessons[4].y,
            equipment: generalCareerOrientationLessons[4].eq,
            location: generalCareerOrientationLessons[4].loc,
            nlsCode: generalCareerOrientationLessons[4].nls,
            aiCode: generalCareerOrientationLessons[4].ai,
            digitalCompetency: generalCareerOrientationLessons[4].dc,
            notes: 'Dự án Hướng nghiệp'
          });
        }
      } else {
        // TRƯỜNG HỢP >= 3 TIẾT / TUẦN:
        const careerWeeksCount = 5;
        if (w <= careerWeeksCount) {
          const item = generalCareerOrientationLessons[w - 1];
          list.push({
            week: w,
            topic: 'Định hướng nghề nghiệp',
            name: `${item.n} (${pCurrent} tiết)`,
            periods: pCurrent,
            yccd: item.y,
            equipment: item.eq,
            location: item.loc,
            nlsCode: item.nls,
            aiCode: item.ai,
            digitalCompetency: item.dc,
            notes: item.n.includes('Dự án') ? 'Dự án Hướng nghiệp' : ''
          });
        } else if (w < 9) {
          const moduleWeekIdx = w - (careerWeeksCount + 1);
          const item = activeModuleLessons[moduleWeekIdx % activeModuleLessons.length];
          list.push({
            week: w,
            topic: item.t,
            name: `${item.n} (${pCurrent} tiết)`,
            periods: pCurrent,
            yccd: item.y,
            equipment: item.eq,
            location: item.loc,
            nlsCode: item.nls,
            aiCode: item.ai,
            digitalCompetency: item.dc,
            notes: item.n.includes('Thực hành') ? 'Thực hành' : ''
          });
        } else if (w >= 10 && w <= 15) {
          const moduleLessonIdx = (w - 10);
          const item = activeModuleLessons[moduleLessonIdx % activeModuleLessons.length];
          list.push({
            week: w,
            topic: item.t,
            name: `${item.n} (${pCurrent} tiết)`,
            periods: pCurrent,
            yccd: item.y,
            equipment: item.eq,
            location: item.loc,
            nlsCode: item.nls,
            aiCode: item.ai,
            digitalCompetency: item.dc,
            notes: item.n.includes('Dự án') ? 'Dự án STEM' : item.n.includes('Thực hành') ? 'Thực hành kỹ thuật' : ''
          });
        }
      }
    } else if (w >= 19 && w <= 25) {
      // Học kỳ 2: Tuần 19 đến 25: Chuyên đề thực hành chuyên sâu của Mô đun
      const lessonIdx = (w - 19) % activeModuleLessons.length;
      const baseItem = activeModuleLessons[lessonIdx];
      const practiceName = selectedModule === 'dien_gia_dung'
        ? (w === 19 ? 'Bài 6: Thực hành lắp đặt mạch điện - Mạch bảng điện nhánh (Tiết 1)' :
           w === 20 ? 'Bài 6: Thực hành lắp đặt mạch điện - Mạch bảng điện nhánh (Tiết 2)' :
           w === 21 ? 'Bài 6: Thực hành lắp đặt mạch điện - Mạch đèn cầu thang (Tiết 1)' :
           w === 22 ? 'Bài 6: Thực hành lắp đặt mạch điện - Mạch đèn cầu thang (Tiết 2)' :
           w === 23 ? 'Bài 6: Thực hành lắp đặt mạch điện - Mạch 2 đèn sáng luân phiên' :
           w === 24 ? 'Bài 5: Tính toán dự toán chi phí và lập bảng kê vật tư mạng điện căn hộ' :
           'Bài 7: Tìm hiểu thực tế các ngành nghề kĩ thuật điện và an toàn lao động')
        : selectedModule === 'che_bien_thuc_pham'
        ? (w === 19 ? 'Bài 6: Thực hành chế biến món luộc và hấp giữ trọn dinh dưỡng' :
           w === 20 ? 'Bài 6: Thực hành chế biến món kho đậm đà gia vị truyền thống' :
           w === 21 ? 'Bài 6: Thực hành chế biến món rán/xào an toàn, ít dầu mỡ' :
           w === 22 ? 'Bài 7: Thực hành chế biến món trộn dầu giấm thanh mát' :
           w === 23 ? 'Bài 7: Thực hành chế biến món nộm chua ngọt truyền thống' :
           w === 24 ? 'Bài 7: Thực hành muối chua dưa cải lên men tự nhiên an toàn' :
           'Bài 5: Dự án: Thực hành tổ chức bữa tiệc buffet gia đình ấm cúng')
        : (w === 19 ? 'Bài 2: Thực hành kỹ thuật chiết cành cây ăn quả đạt tỉ lệ ra rễ cao' :
           w === 20 ? 'Bài 2: Thực hành kỹ thuật ghép mắt và ghép cành cây ăn quả' :
           w === 21 ? 'Bài 3: Thực hành kỹ thuật bấm ngọn, tỉa cành tạo tán cho cây có múi' :
           w === 22 ? 'Bài 4: Kỹ thuật xử lý khoanh cành điều khiển nhãn ra hoa đậu quả' :
           w === 23 ? 'Bài 5: Thực hành kỹ thuật bao trái xoài và phòng ngừa ruồi đục quả' :
           w === 24 ? 'Bài 6: Kỹ thuật chăm sóc và tỉa hoa nâng cao chất lượng sầu riêng' :
           'Bài 7: Kỹ thuật bao buồng chuối và chống đổ ngã mùa mưa bão');

      list.push({
        week: w,
        topic: baseItem.t,
        name: `${practiceName}${pCurrent > 1 ? ` (${pCurrent} tiết)` : ''}`,
        periods: pCurrent,
        yccd: baseItem.y,
        equipment: baseItem.eq,
        location: baseItem.loc,
        nlsCode: baseItem.nls,
        aiCode: baseItem.ai,
        digitalCompetency: baseItem.dc,
        notes: 'Thực hành chuyên sâu'
      });
    } else if (w >= 27 && w <= 30) {
      // Học kỳ 2: Tuần 27 đến 30: Hoàn thiện sản phẩm / Dự án STEM Mô đun
      const projectName = selectedModule === 'dien_gia_dung'
        ? (w === 27 ? 'Dự án: Thiết kế và lắp ráp mô hình Bảng điện thông minh gia đình (Tiết 1)' :
           w === 28 ? 'Dự án: Lắp ráp hoàn thiện bảng điện thông minh và kiểm tra an toàn (Tiết 2)' :
           w === 29 ? 'Dự án: Thuyết minh, vận hành thử nghiệm bảng điện trước hội đồng lớp' :
           'Chuyên đề: Ứng dụng công nghệ chiếu sáng thông minh Smart Lighting và cảm biến')
        : selectedModule === 'che_bien_thuc_pham'
        ? (w === 27 ? 'Dự án STEM: Thiết kế thực đơn bữa cơm dinh dưỡng "Healthy & Balanced" (Tiết 1)' :
           w === 28 ? 'Dự án STEM: Thực hành chế biến và trang trí món ăn theo phong cách hiện đại (Tiết 2)' :
           w === 29 ? 'Dự án STEM: Báo cáo thuyết trình và đánh giá chất lượng sản phẩm ẩm thực' :
           'Chuyên đề: Kỹ thuật bảo quản thực phẩm bằng phương pháp hút chân không và làm lạnh sâu')
        : (w === 27 ? 'Dự án: Thiết lập mô hình vườn cây ăn quả mini sân trường/ban công (Tiết 1)' :
           w === 28 ? 'Dự án: Thực hành chăm sóc, bón phân vi sinh và tưới nhỏ giọt cho cây (Tiết 2)' :
           w === 29 ? 'Dự án: Báo cáo nhật ký sinh trưởng và thu hoạch sản phẩm cây ăn quả' :
           'Chuyên đề: Phòng trừ sâu bệnh hại cây ăn quả bằng chế phẩm sinh học an toàn');

      const baseItem = activeModuleLessons[activeModuleLessons.length - 1];
      list.push({
        week: w,
        topic: baseItem.t,
        name: `${projectName}${pCurrent > 1 ? ` (${pCurrent} tiết)` : ''}`,
        periods: pCurrent,
        yccd: `- Vận dụng kiến thức, kỹ năng của ${baseItem.t} để giải quyết nhiệm vụ trong bài học: "${projectName}".\n- Rèn luyện kỹ năng thực hành, tác phong công nghiệp và tinh thần hợp tác sáng tạo.`,
        equipment: baseItem.eq,
        location: baseItem.loc,
        nlsCode: baseItem.nls,
        aiCode: baseItem.ai,
        digitalCompetency: baseItem.dc,
        notes: projectName.includes('Dự án') ? 'Dự án STEM' : 'Chuyên đề'
      });
    }
  }

  return list;
}
