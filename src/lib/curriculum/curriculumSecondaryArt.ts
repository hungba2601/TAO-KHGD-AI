import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * PHÂN PHỐI CHƯƠNG TRÌNH CHI TIẾT MÔN MĨ THUẬT THCS (LỚP 6, 7, 8, 9)
 * 100% CHUẨN THEO BỘ SÁCH GIÁO KHOA "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"
 * Quy mô: 35 tiết/năm (1 tiết/tuần x 35 tuần).
 * Định kỳ kiểm tra chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (1 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (1 tiết)
 * - Tuần 17: Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 (1 tiết)
 * - Tuần 18: Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 (1 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (1 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (1 tiết)
 * - Tuần 32: Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm (1 tiết)
 * - Tuần 33: Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS (1 tiết)
 * - Tuần 34: Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm (1 tiết)
 * - Tuần 35: Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật toàn trường (1 tiết)
 */
export function getArtSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. MĨ THUẬT LỚP 6 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 6) {
    const grade6Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Xây dựng ý tưởng trong sáng tác mĩ thuật',
        n: 'Chủ đề 1: Xây dựng ý tưởng trong sáng tác mĩ thuật - Bài 1: Một số thể loại mĩ thuật (Khám phá các thể loại mĩ thuật) (1 tiết)',
        y: '- Nhận biết và phân biệt được các thể loại mĩ thuật tạo hình (Hội họa, Đồ họa, Điêu khắc) và mĩ thuật ứng dụng (Thiết kế đồ họa, Thiết kế công nghiệp, Thiết kế thời trang).\n- Hiểu được vai trò và giá trị thẩm mỹ của mĩ thuật trong đời sống con người.',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và phân loại hình ảnh các tác phẩm mĩ thuật tiêu biểu trên không gian mạng.\n• [Mã AI: 6.C1.1] Khám phá cách AI nhận diện và phân loại phong cách tranh hội họa so với điêu khắc.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Xây dựng ý tưởng trong sáng tác mĩ thuật',
        n: 'Chủ đề 1: Xây dựng ý tưởng trong sáng tác mĩ thuật - Bài 2: Xây dựng ý tưởng trong sáng tác theo chủ đề (1 tiết)',
        y: '- Nắm vững quy trình xây dựng ý tưởng sáng tạo mĩ thuật: Quan sát thực tế -> Chọn lọc hình ảnh -> Phác thảo bố cục -> Thể hiện chất liệu.\n- Thực hành lập sơ đồ tư duy ý tưởng và phác thảo một bố cục mĩ thuật tự chọn.',
        dc: '• [Mã NLS: 1.3.TC1b] Sử dụng phần mềm sơ đồ tư duy số (Mindmap online) để hệ thống hóa ý tưởng sáng tác.\n• [Mã AI: 6.D1.1] Trải nghiệm công cụ AI gợi ý từ khóa ý tưởng (brainstorming prompts) theo chủ đề sáng tác.'
      },
      {
        w: 3,
        t: 'Chủ đề 2: Ngôi nhà yêu thương',
        n: 'Chủ đề 2: Ngôi nhà yêu thương - Bài 3: Tạo hình ngôi nhà (Khám phá hình khối và cấu trúc ngôi nhà) (1 tiết)',
        y: '- Quan sát và phân tích được đặc điểm hình khối (khối hộp, khối chóp, khối trụ), đường nét và màu sắc của các kiểu nhà truyền thống và hiện đại.\n- Phác thảo được ý tưởng tạo hình ngôi nhà theo cảm nhận cá nhân.',
        dc: '• [Mã NLS: 1.1.TC1c] Tìm kiếm hình ảnh các kiểu kiến trúc nhà ở độc đáo của các vùng miền Việt Nam trên Internet.\n• [Mã AI: 6.C2.2] Xem các mô hình kiến trúc 3D do AI và công nghệ đồ họa máy tính tái hiện.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Ngôi nhà yêu thương',
        n: 'Chủ đề 2: Ngôi nhà yêu thương - Bài 3: Tạo hình ngôi nhà (Thực hành tạo hình 2D/3D ngôi nhà) (1 tiết)',
        y: '- Thực hành vẽ tranh hoặc tạo hình mô hình 3D ngôi nhà yêu thương từ vật liệu tái chế (bìa carton, que kem, vỏ hộp).\n- Biết sắp xếp bố cục hài hòa, phối màu sắc ấm áp và thể hiện tình cảm gắn bó với gia đình.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh sản phẩm mô hình ngôi nhà dưới góc chụp chuẩn để lưu vào hồ sơ nghệ thuật số.\n• [Mã AI: 6.A1.3] Sử dụng ứng dụng chụp ảnh tự động căn chỉnh ánh sáng và màu sắc cho sản phẩm tạo hình.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Ngôi nhà yêu thương',
        n: 'Chủ đề 2: Ngôi nhà yêu thương - Bài 4: Thiết kế quà lưu niệm (Ý tưởng thiết kế từ hình ảnh ngôi nhà) (1 tiết)',
        y: '- Nắm được nguyên lý cơ bản của thiết kế quà lưu niệm ứng dụng (móc khóa, khung tranh để bàn, nam châm dán tủ lạnh, hộp đựng bút).\n- Phác thảo bản vẽ thiết kế sản phẩm quà lưu niệm lấy cảm hứng từ ngôi nhà.',
        dc: '• [Mã NLS: 2.1.TC1b] Tham khảo các mẫu thiết kế quà lưu niệm sáng tạo trên các trang thiết kế đồ họa quốc tế.\n• [Mã AI: 6.D1.1] Khám phá tính năng AI gợi ý phối màu (Color Palette Generator) cho sản phẩm thiết kế quà tặng.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Ngôi nhà yêu thương',
        n: 'Chủ đề 2: Ngôi nhà yêu thương - Bài 4: Thiết kế quà lưu niệm (Thực hành hoàn thiện và trưng bày sản phẩm) (1 tiết)',
        y: '- Hoàn thiện sản phẩm quà lưu niệm với chất liệu tự chọn (đất nặn, gỗ, giấy bìa, vật liệu tái chế).\n- Trưng bày sản phẩm và tự tin thuyết trình về công năng, ý nghĩa của món quà dành tặng người thân.',
        dc: '• [Mã NLS: 3.2.TC1a] Biên tập video ngắn giới thiệu các bước làm quà lưu niệm handmade của cá nhân/nhóm.\n• [Mã AI: 6.B1.1] Thảo luận về việc bảo hộ quyền tác giả đối với các sản phẩm thủ công mỹ nghệ sáng tạo.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Hoạt động trong trường học',
        n: 'Chủ đề 3: Hoạt động trong trường học - Bài 5: Tạo hình hoạt động trong nhà trường (Kí họa dáng người và hoạt động) (1 tiết)',
        y: '- Quan sát và nắm được tỉ lệ cơ thể người cơ bản, dáng vận động (chạy, nhảy, đọc sách, quét dọn, chơi thể thao) trong trường học.\n- Thực hành kí họa nhanh các dáng người trong hoạt động học tập, vui chơi.',
        dc: '• [Mã NLS: 1.1.TC1b] Thu thập ảnh chụp các khoảnh khắc sinh hoạt trường lớp chất lượng cao làm tư liệu kí họa.\n• [Mã AI: 6.C1.1] Trải nghiệm công cụ AI nhận diện khung xương và dáng vận động người (Pose Detection AI).'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Hoạt động trong trường học',
        n: 'Chủ đề 3: Hoạt động trong trường học - Bài 5: Tạo hình hoạt động trong nhà trường (Thực hành vẽ tranh sinh hoạt) (1 tiết)',
        y: '- Thực hành hoàn thiện tranh vẽ đề tài Hoạt động trong nhà trường với bố cục chính - phụ rõ ràng, màu sắc tươi sáng.\n- Thể hiện được không khí vui tươi, gắn kết thầy trò và bạn bè dưới mái trường THCS.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng phần mềm đồ họa số (Paint/Ibis Paint) để vẽ hoặc tô màu kỹ thuật số cho bức tranh.\n• [Mã AI: 6.A1.1] Nhận diện nét cảm xúc chân thực của bức tranh do học sinh vẽ so với tranh AI tạo.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp 6',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình 2D/3D, bố cục, màu sắc từ Tuần 1 đến Tuần 8.\n- Đánh giá khả năng sáng tạo độc lập, thẩm mỹ thị giác và kĩ năng sử dụng vật liệu.',
        dc: '• [Mã NLS: 3.1.TC1b] Lưu trữ ảnh chụp tác phẩm kiểm tra vào hồ sơ học tập mĩ thuật số.\n• [Mã AI: 6.A1.3] Đối chiếu sản phẩm mĩ thuật với thang tiêu chí đánh giá số hóa minh bạch.'
      },
      {
        w: 10,
        t: 'Chủ đề 3: Hoạt động trong trường học',
        n: 'Chủ đề 3: Hoạt động trong trường học - Bài 6: Thiết kế đồ chơi (Sáng tạo đồ chơi từ vật liệu sẵn có) (1 tiết)',
        y: '- Hiểu được nguyên lý thiết kế đồ chơi chuyển động hoặc đồ chơi tạo hình đơn giản từ vật liệu tái chế (nắp chai, cốc giấy, dây thừng).\n- Thực hành chế tạo một món đồ chơi giáo dục an toàn, thân thiện với môi trường.',
        dc: '• [Mã NLS: 2.5.TC1b] Hợp tác nhóm trực tuyến để lên ý tưởng và phân công thu gom vật liệu tái chế.\n• [Mã AI: 6.D1.1] Dùng AI tìm kiếm và gợi ý các mẫu đồ chơi STEM mĩ thuật tái chế độc đáo.'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Mĩ thuật thời kì tiền sử',
        n: 'Chủ đề 4: Mĩ thuật thời kì tiền sử - Bài 7: Mĩ thuật thế giới thời kì tiền sử (Tìm hiểu hình vẽ hang động thời tiền sử) (1 tiết)',
        y: '- Nhận biết đặc điểm nghệ thuật hang động thời tiền sử thế giới (tranh vẽ thú vật ở hang Altamira - Tây Ban Nha, hang Lascaux - Pháp).\n- Hiểu được chất liệu tự nhiên thô sơ (than củi, đất màu, mỡ động vật) và ý nghĩa săn bắt, tâm linh của người tiền sử.',
        dc: '• [Mã NLS: 1.1.TC1b] Khám phá tour tham quan ảo 3D bên trong các hang động tiền sử nổi tiếng thế giới.\n• [Mã AI: 6.C2.2] Trải nghiệm AI phục dựng màu sắc nguyên bản của các bức bích họa hang động cổ đại.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Mĩ thuật thời kì tiền sử',
        n: 'Chủ đề 4: Mĩ thuật thời kì tiền sử - Bài 7: Mĩ thuật thế giới thời kì tiền sử (Thực hành mô phỏng nghệ thuật tiền sử) (1 tiết)',
        y: '- Thực hành vẽ hoặc đắp nổi mô phỏng hình ảnh động vật thời tiền sử (bò tót, hươu, voi ma-mút) trên nền giấy nhăn, bìa giả đá hoặc đất sét.\n- Cảm nhận nét vẽ mộc mạc, khỏe khoắn và sức sống mạnh mẽ của nghệ thuật tiền sử.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng bộ lọc ảnh số tạo hiệu ứng chất liệu đá cổ kính cho ảnh chụp tác phẩm.\n• [Mã AI: 6.D1.1] Sử dụng AI gợi ý các họa tiết hoa văn động vật thời tiền sử để tham khảo bố cục.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Mĩ thuật thời kì tiền sử',
        n: 'Chủ đề 4: Mĩ thuật thời kì tiền sử - Bài 8: Mĩ thuật Việt Nam thời kì tiền sử (Khám phá hình khắc đá Đồng Nội) (1 tiết)',
        y: '- Nhận biết giá trị đặc sắc của nghệ thuật thời tiền sử Việt Nam qua hình khắc mặt người trên vách hang Đồng Nội (Hòa Bình).\n- Hiểu được nguồn gốc lịch sử, bản sắc văn hóa lâu đời của người Việt cổ thời đại đồ đá.',
        dc: '• [Mã NLS: 1.2.TC1a] Tra cứu thông tin từ trang web của Bảo tàng Lịch sử Quốc gia về di chỉ khảo cổ Hòa Bình.\n• [Mã AI: 6.A1.1] Tôn vinh giá trị sáng tạo nghệ thuật đầu tiên của tổ tiên người Việt cổ.'
      },
      {
        w: 14,
        t: 'Chủ đề 4: Mĩ thuật thời kì tiền sử',
        n: 'Chủ đề 4: Mĩ thuật thời kì tiền sử - Bài 8: Mĩ thuật Việt Nam thời kì tiền sử (Thực hành mô phỏng họa tiết tiền sử) (1 tiết)',
        y: '- Thực hành mô phỏng hình khắc mặt người hang Đồng Nội hoặc hoa văn gốm tiền sử bằng phương pháp in khắc xốp / dập nổi đất sét.\n- Bộc lộ niềm tự hào về cội nguồn lịch sử và nền mĩ thuật dân tộc.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh quy trình thực hành in khắc thủ công và xuất bản bài học chia sẻ.\n• [Mã AI: 6.C1.1] Khám phá cách AI phân tích độ tương phản và đường nét khắc đá cổ.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập và chuẩn bị sản phẩm trưng bày cuối học kì 1 môn Mĩ thuật Lớp 6 (1 tiết)',
        y: '- Hệ thống hóa các kiến thức mĩ thuật đã học: Thể loại mĩ thuật, xây dựng ý tưởng, tạo hình ngôi nhà, quà lưu niệm, mĩ thuật tiền sử.\n- Hoàn thiện, chỉnh sửa và đóng khung các sản phẩm mĩ thuật chuẩn bị cho triển lãm cuối kì.',
        dc: '• [Mã NLS: 1.3.TC1a] Tạo danh mục số hóa tổng hợp các tác phẩm mĩ thuật cá nhân đã hoàn thành trong HK1.\n• [Mã AI: 6.D1.1] Dùng AI hỗ trợ viết lời bình ngắn (art description) cho từng tác phẩm cá nhân.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Mĩ thuật Lớp 6',
        y: '- Đánh giá tổng hợp toàn diện năng lực sáng tạo mĩ thuật, kĩ thuật tạo hình và ý thức học tập trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực thẩm mỹ và kĩ năng biểu đạt ý tưởng nghệ thuật của học sinh.',
        dc: '• [Mã NLS: 3.1.TC1b] Tải ảnh chất lượng cao của tác phẩm kiểm tra lên thư viện số của trường.\n• [Mã AI: 6.B1.1] Đảm bảo tính trung thực và quyền tác giả của sản phẩm mĩ thuật nộp đánh giá.'
      },
      {
        w: 17,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 Lớp 6 (1 tiết)',
        y: '- Nhận xét, đánh giá các tác phẩm trong bài kiểm tra cuối kì; chỉ ra các điểm sáng tạo và điểm cần khắc phục về bố cục, màu sắc.\n- Hướng dẫn học sinh hoàn thiện nâng cao chất lượng sản phẩm.',
        dc: '• [Mã NLS: 5.4.TC1a] Nhận diện kĩ năng vẽ/tạo hình cần bồi dưỡng thêm thông qua bảng đánh giá cá nhân.\n• [Mã AI: 6.D1.1] Nhận gợi ý cải thiện bố cục và hòa sắc từ công cụ phân tích ảnh nghệ thuật AI.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 Lớp 6 (1 tiết)',
        y: '- Tổ chức trưng bày không gian triển lãm mĩ thuật HK1 của lớp; tự tin thuyết trình về tác phẩm của mình và chia sẻ cảm nhận về bài của bạn.\n- Đánh giá tổng kết phong trào học tập mĩ thuật HK1 và khơi dậy đam mê chuẩn bị cho HK2.',
        dc: '• [Mã NLS: 3.2.TC1a] Thiết kế phòng triển lãm tranh ảo 3D (Virtual Art Gallery) trưng bày tác phẩm của lớp.\n• [Mã AI: 6.C2.2] Sử dụng AI tự động ghép ảnh các tác phẩm thành video triển lãm nghệ thuật sinh động.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Trò chơi dân gian',
        n: 'Chủ đề 5: Trò chơi dân gian - Bài 9: Sáng tạo mĩ thuật với trò chơi dân gian (Tìm hiểu nét đẹp văn hóa) (1 tiết)',
        y: '- Quan sát và nhận diện vẻ đẹp sinh động, tinh thần thượng võ, hồn nhiên của các trò chơi dân gian Việt Nam (kéo co, nhảy dây, ô ăn quan, bịt mắt bắt dê, thả diều).\n- Phác thảo bố cục tranh về một trò chơi dân gian yêu thích.',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm tranh dân gian Đông Hồ, Hàng Trống về đề tài trò chơi dân gian trên mạng.\n• [Mã AI: 6.C1.1] Khám phá cách AI nhận diện các dáng chuyển động nhóm trong trò chơi dân gian.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Trò chơi dân gian',
        n: 'Chủ đề 5: Trò chơi dân gian - Bài 9: Sáng tạo mĩ thuật với trò chơi dân gian (Thực hành vẽ tranh/tạo hình) (1 tiết)',
        y: '- Thực hành hoàn thiện tranh vẽ hoặc tạo hình đất nặn 3D thể hiện trò chơi dân gian với màu sắc rực rỡ, biểu cảm sinh động.\n- Bồi dưỡng tình yêu nét đẹp văn hóa truyền thống và tinh thần đồng đội.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh tác phẩm nhiều góc độ và lưu vào bộ sưu tập nghệ thuật số của tổ.\n• [Mã AI: 6.D1.1] Dùng AI hỗ trợ gợi ý cách phối màu tương phản làm nổi bật nhân vật chính trong tranh.'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Trò chơi dân gian',
        n: 'Chủ đề 5: Trò chơi dân gian - Bài 10: Thiết kế thiệp chúc mừng (Ứng dụng hình ảnh trò chơi dân gian) (1 tiết)',
        y: '- Nắm vững cấu trúc của một tấm thiệp chúc mừng (hình ảnh trang trí, chữ tiêu đề, thông điệp lời chúc, công năng gấp/mở).\n- Thực hành thiết kế tấm thiệp chúc mừng độc đáo ứng dụng hình ảnh trò chơi dân gian.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng phần mềm thiết kế trực tuyến (Canva online) để kết hợp hình vẽ tay với bố cục chữ số.\n• [Mã AI: 6.C2.2] Trải nghiệm AI gợi ý câu chúc mừng ý nghĩa và kiểu chữ nghệ thuật (typography) phù hợp.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Sắc màu lễ hội',
        n: 'Chủ đề 6: Sắc màu lễ hội - Bài 11: Hoà sắc trong tranh chủ đề lễ hội (Khám phá gam màu rực rỡ của lễ hội) (1 tiết)',
        y: '- Quan sát và nhận diện không khí tưng bừng, các gam màu nóng chủ đạo (đỏ, vàng, cam) trong lễ hội truyền thống Việt Nam (Hội Lim, Hội Gióng, Lễ hội Đua thuyền, Tết Trung thu).\n- Hiểu nguyên lý hòa sắc tương phản và hòa sắc tương đồng trong tạo hình.',
        dc: '• [Mã NLS: 1.1.TC1c] Tìm kiếm và xem các video tư liệu số về sắc màu rực rỡ của các lễ hội văn hóa dân gian.\n• [Mã AI: 6.C1.1] Sử dụng AI trích xuất bảng mã màu chủ đạo (color extractor) từ các bức ảnh chụp lễ hội.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Sắc màu lễ hội',
        n: 'Chủ đề 6: Sắc màu lễ hội - Bài 11: Hoà sắc trong tranh chủ đề lễ hội (Thực hành sáng tạo tranh lễ hội) (1 tiết)',
        y: '- Thực hành vẽ tranh lễ hội với kỹ thuật hòa sắc ấn tượng, diễn tả được không khí đông vui, nhộn nhịp của lễ hội quê hương.\n- Thể hiện niềm tự hào về truyền thống văn hóa dân tộc.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng ứng dụng chỉnh sửa ảnh số để so sánh các hiệu ứng hòa sắc khác nhau trên bức tranh.\n• [Mã AI: 6.A1.1] Khẳng định bản sắc văn hóa độc đáo của lễ hội Việt Nam do con người sáng tạo.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Sắc màu lễ hội',
        n: 'Chủ đề 6: Sắc màu lễ hội - Bài 12: Màu sắc lễ hội trong thiết kế lịch treo tường (Lên ý tưởng bố cục lịch) (1 tiết)',
        y: '- Nắm được các thành phần chính của một tờ lịch treo tường (phần hình ảnh trang trí, phần chữ/số ngày tháng, bố cục tổng thể hài hòa).\n- Phác thảo ý tưởng thiết kế tờ lịch treo tường mang sắc màu lễ hội.',
        dc: '• [Mã NLS: 2.2.TC1c] Tham khảo các mẫu thiết kế lịch treo tường văn hóa truyền thống trên kho thiết kế đồ họa số.\n• [Mã AI: 6.D1.1] Khám phá công cụ AI tạo lưới lịch tự động (calendar grid generator) theo năm học.'
      },
      {
        w: 25,
        t: 'Chủ đề 6: Sắc màu lễ hội',
        n: 'Chủ đề 6: Sắc màu lễ hội - Bài 12: Màu sắc lễ hội trong thiết kế lịch treo tường (Hoàn thiện và trang trí tờ lịch) (1 tiết)',
        y: '- Thực hành hoàn thiện tờ lịch treo tường bằng cách vẽ tay kết hợp cắt dán thủ công hoặc đồ họa máy tính.\n- Trưng bày và chia sẻ giá trị ứng dụng thực tiễn của sản phẩm trong gia đình.',
        dc: '• [Mã NLS: 3.2.TC1a] Xuất bản file thiết kế lịch số chất lượng cao để có thể in ấn thành sản phẩm thực tế.\n• [Mã AI: 6.B1.1] Nâng cao ý thức tôn trọng quyền tác giả hình ảnh khi tìm kiếm tư liệu thiết kế lịch.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp 6',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình, thiết kế thiệp, lịch treo tường và hòa sắc từ Tuần 19 đến Tuần 25.\n- Đánh giá năng lực sáng tạo ứng dụng và tư duy thẩm mỹ của học sinh.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh và tải sản phẩm bài kiểm tra lên cổng đánh giá học tập số.\n• [Mã AI: 6.A1.3] Học sinh tự đánh giá chéo theo phiếu tiêu chí số hóa chuẩn GDPT 2018.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Cuộc sống thường ngày',
        n: 'Chủ đề 7: Cuộc sống thường ngày - Bài 13: Sáng tạo mĩ thuật với hình ảnh trong cuộc sống (1 tiết)',
        y: '- Quan sát và chắt lọc những hình ảnh bình dị, thân thương trong cuộc sống thường ngày (bữa cơm gia đình, góc học tập, chợ quê, bác nông dân gặt lúa).\n- Thực hành sáng tạo tác phẩm mĩ thuật thể hiện góc nhìn tinh tế, giàu cảm xúc về cuộc sống.',
        dc: '• [Mã NLS: 1.1.TC1b] Sưu tầm kho ảnh tư liệu về nhịp sống đời thường từ nguồn ảnh chất lượng cao.\n• [Mã AI: 6.C2.2] Khám phá cách AI tạo ra các bức tranh minh họa cuộc sống từ mô tả văn bản (Text-to-Image).'
      },
      {
        w: 28,
        t: 'Chủ đề 7: Cuộc sống thường ngày',
        n: 'Chủ đề 7: Cuộc sống thường ngày - Bài 14: Thiết kế thời gian biểu (Trang trí thời gian biểu khoa học và sinh động) (1 tiết)',
        y: '- Hiểu vai trò của thiết kế đồ họa ứng dụng trong việc sắp xếp thông tin khoa học, trực quan, dễ theo dõi.\n- Thực hành thiết kế và trang trí một bảng thời gian biểu cá nhân đẹp mắt, sáng tạo, tạo cảm hứng học tập.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng công cụ thiết kế số để tạo thời gian biểu điện tử có thể đặt làm hình nền máy tính/điện thoại.\n• [Mã AI: 6.D1.1] Dùng AI gợi ý cách phân bổ thời gian biểu cân bằng giữa học tập, rèn luyện thể thao và nghệ thuật.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Mĩ thuật thời kì cổ đại',
        n: 'Chủ đề 8: Mĩ thuật thời kì cổ đại - Bài 15: Mĩ thuật thế giới thời kì cổ đại (Nghệ thuật Ai Cập, Hy Lạp, La Mã cổ đại) (1 tiết)',
        y: '- Nhận biết đặc trưng của mĩ thuật thế giới thời cổ đại: Kim tự tháp và tượng Nhân sư Ai Cập; Kiến trúc đền Parthenon và điêu khắc tượng thần Hy Lạp; Đấu trường La Mã Colosseum.\n- Hiểu được tỉ lệ vàng và sự hài hòa, chuẩn mực trong mĩ thuật cổ đại thế giới.',
        dc: '• [Mã NLS: 1.2.TC1b] Khám phá các kì quan cổ đại thế giới qua chuyến tham quan ảo 3D của Google Arts & Culture.\n• [Mã AI: 6.A1.1] Tìm hiểu cách AI hỗ trợ các nhà khảo cổ phục dựng những công trình cổ đại bị tàn phá.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Mĩ thuật thời kì cổ đại',
        n: 'Chủ đề 8: Mĩ thuật thời kì cổ đại - Bài 16: Mĩ thuật Việt Nam thời kì cổ đại (Nghệ thuật Đông Sơn và hoa văn trống đồng) (1 tiết)',
        y: '- Nhận biết đỉnh cao nghệ thuật đúc đồng Đông Sơn thời các vua Hùng: Trống đồng Đông Sơn, Thạp đồng Đào Thịnh, Dao găm đồng chui cán hình người.\n- Phân tích ý nghĩa các hoa văn hình ngôi sao, chim lạc, người giã gạo, chèo thuyền trên mặt trống đồng.',
        dc: '• [Mã NLS: 1.3.TC1b] Lưu trữ và chia sẻ kho ảnh hoa văn Trống đồng Đông Sơn số hóa độ phân giải cao.\n• [Mã AI: 6.D1.1] Khám phá cách thuật toán đồ họa vector AI tái hiện chuẩn xác từng chi tiết hoa văn Trống đồng.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp 6',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Mĩ thuật Lớp 6 cả năm học.\n- Đánh giá khả năng cảm thụ nghệ thuật cổ đại, năng lực thiết kế ứng dụng và kĩ năng tạo hình của học sinh.',
        dc: '• [Mã NLS: 3.1.TC1b] Lưu trữ toàn bộ sản phẩm bài thi vào học bạ nghệ thuật điện tử của học sinh.\n• [Mã AI: 6.A1.3] Thực hiện đánh giá khách quan dựa trên bộ tiêu chí chuẩn hóa GDPT 2018.'
      },
      {
        w: 32,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm Lớp 6 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối năm; tuyên dương những sản phẩm có ý tưởng độc đáo, kĩ thuật xuất sắc.\n- Hướng dẫn học sinh hoàn thiện toàn bộ sản phẩm cá nhân chuẩn bị cho Triển lãm dự án cuối năm.',
        dc: '• [Mã NLS: 5.4.TC1a] Tổng kết sự tiến bộ về năng lực mĩ thuật qua biểu đồ theo dõi kĩ năng số.\n• [Mã AI: 6.D1.1] Nhận gợi ý cải thiện kĩ năng tạo hình chuẩn bị cho chương trình Mĩ thuật Lớp 7.'
      },
      {
        w: 33,
        t: 'Dự án Mĩ thuật',
        n: 'Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp 6 (1 tiết)',
        y: '- Tổ chức Triển lãm dự án Mĩ thuật với chủ đề "Sắc màu tuổi thơ và Di sản văn hóa".\n- Rèn luyện kĩ năng thiết kế poster triển lãm, bài trí gian hàng nghệ thuật và thuyết minh tác phẩm trước công chúng.',
        dc: '• [Mã NLS: 3.2.TC1a] Xây dựng website/fanpage triển lãm nghệ thuật số của khối 6.\n• [Mã AI: 6.D1.1] Ứng dụng AI tạo video trailer giới thiệu triển lãm và poster quảng bá sự kiện.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm Lớp 6 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ 8 chủ đề mĩ thuật Lớp 6: Mĩ thuật tạo hình, thiết kế ứng dụng, mĩ thuật tiền sử và cổ đại.\n- Củng cố tư duy thẩm mỹ và kĩ năng sử dụng đa dạng các chất liệu nghệ thuật.',
        dc: '• [Mã NLS: 1.3.TC1b] Đóng gói hồ sơ sản phẩm mĩ thuật số (Digital Art Portfolio) cả năm Lớp 6.\n• [Mã AI: 6.C1.1] Khám phá xu hướng ứng dụng công nghệ số và AI trong các ngành công nghiệp sáng tạo hiện đại.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật Lớp 6 toàn trường (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Mĩ thuật Lớp 6 cả năm học.\n- Tuyên dương các cá nhân, tập thể có nhiều tác phẩm nghệ thuật xuất sắc và truyền cảm hứng thẩm mỹ.',
        dc: '• [Mã NLS: 2.2.TC1a] Đăng tải toàn bộ hình ảnh triển lãm tổng kết lên thư viện số của nhà trường.\n• [Mã AI: 6.A1.1] Nuôi dưỡng tình yêu nghệ thuật, óc sáng tạo và tinh thần nhân văn qua môn Mĩ thuật.'
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
        equipment: 'Giấy vẽ A3/A4, màu nước, màu sáp, chì màu, đất nặn, bìa carton tái chế, keo dán, kéo, máy chiếu',
        location: 'Phòng học bộ môn Mĩ thuật / Sảnh triển lãm',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Không gian Sáng tạo' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. MĨ THUẬT LỚP 7 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 7) {
    const grade7Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Mĩ thuật thế giới thời kì trung đại',
        n: 'Chủ đề 1: Mĩ thuật thế giới thời kì trung đại - Bài 1: Mĩ thuật tạo hình thời kì trung đại (1 tiết)',
        y: '- Nhận biết đặc điểm nghệ thuật tạo hình thời kì Trung đại thế giới: Nghệ thuật Byzantine, Romanesque và Gothic.\n- Phân tích ngôn ngữ tạo hình của tranh tôn giáo, bích họa và nghệ thuật tranh kính màu (Stained glass).',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và tham quan ảo các nhà thờ Gothic vĩ đại (Nhà thờ Đức Bà Paris, Nhà thờ Cologne).\n• [Mã AI: 7.C5.1] Trải nghiệm AI phân tích hiệu ứng ánh sáng xuyên qua các mảng kính màu kiến trúc Trung đại.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Mĩ thuật thế giới thời kì trung đại',
        n: 'Chủ đề 1: Mĩ thuật thế giới thời kì trung đại - Bài 2: Mĩ thuật ứng dụng thời kì trung đại (1 tiết)',
        y: '- Nhận biết các sản phẩm mĩ thuật ứng dụng thời Trung đại: Nghệ thuật kim hoàn, trang trí thảm dệt Tapestry, chạm khắc phù điêu và đồ gốm men.\n- Thực hành mô phỏng họa tiết trang trí Trung đại trên sản phẩm ứng dụng.',
        dc: '• [Mã NLS: 1.2.TC1b] Tra cứu tư liệu về kĩ thuật dệt thảm Tapestry thời Trung đại trên kho bảo tàng số.\n• [Mã AI: 7.D1.1] Dùng AI gợi ý cách ứng dụng hoa văn cổ điển Trung đại vào các sản phẩm thiết kế thời trang hiện đại.'
      },
      {
        w: 3,
        t: 'Chủ đề 2: Vẻ đẹp di tích',
        n: 'Chủ đề 2: Vẻ đẹp di tích - Bài 3: Hình ảnh di tích trong sáng tạo mĩ thuật (Khám phá vẻ đẹp di tích lịch sử) (1 tiết)',
        y: '- Quan sát và nhận diện vẻ đẹp cổ kính, thâm nghiêm của các di tích lịch sử - văn hóa (Chùa Một Cột, Cố đô Huế, Hoàng thành Thăng Long, Tháp Chăm).\n- Phác thảo bố cục tranh về một di tích lịch sử theo cảm xúc cá nhân.',
        dc: '• [Mã NLS: 1.1.TC1c] Khám phá các di tích lịch sử quốc gia bằng công nghệ bản đồ số di sản 3D.\n• [Mã AI: 7.A1.1] Nhận thức về vai trò của con người trong việc gìn giữ linh hồn của các di tích lịch sử trước nguy cơ thời gian.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Vẻ đẹp di tích',
        n: 'Chủ đề 2: Vẻ đẹp di tích - Bài 3: Hình ảnh di tích trong sáng tạo mĩ thuật (Thực hành vẽ tranh di tích) (1 tiết)',
        y: '- Thực hành hoàn thiện tranh vẽ di tích lịch sử với nét vẽ khoáng đạt, màu sắc trầm ấm, thể hiện được không gian kiến trúc và chiều sâu lịch sử.\n- Bồi dưỡng tình yêu và ý thức giữ gìn di sản văn hóa dân tộc.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh số hóa tác phẩm vẽ di tích và chỉnh sửa độ tương phản làm nổi bật chất cổ kính.\n• [Mã AI: 7.A1.MR1] So sánh tranh vẽ tay thể hiện tình cảm của học sinh với ảnh chụp di tích bằng máy móc.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Vẻ đẹp di tích',
        n: 'Chủ đề 2: Vẻ đẹp di tích - Bài 4: Hình ảnh di tích trong thiết kế tem bưu chính (Ý tưởng thiết kế tem) (1 tiết)',
        y: '- Nắm vững đặc trưng của tem bưu chính (khuôn khổ nhỏ, hình ảnh biểu trưng cô đọng, chữ "Việt Nam", giá cước bưu chính, đường răng cưa viền).\n- Lên ý tưởng và phác thảo mẫu tem bưu chính giới thiệu vẻ đẹp di tích quê hương.',
        dc: '• [Mã NLS: 2.5.TC1b] Tìm hiểu bộ sưu tập tem bưu chính di sản văn hóa Việt Nam trên kho lưu trữ số của Bưu điện Việt Nam.\n• [Mã AI: 7.C4.1] Khám phá cách AI phân tích tính cô đọng của hình ảnh biểu tượng trong thiết kế đồ họa vi mô.'
      },
      {
        w: 6,
        t: 'Chủ đề 2: Vẻ đẹp di tích',
        n: 'Chủ đề 2: Vẻ đẹp di tích - Bài 4: Hình ảnh di tích trong thiết kế tem bưu chính (Hoàn thiện mẫu tem) (1 tiết)',
        y: '- Thực hành hoàn thiện mẫu tem bưu chính bằng vẽ tay hoặc thiết kế đồ họa vi tính.\n- Trưng bày bộ sưu tập tem bưu chính của lớp và thuyết trình về ý nghĩa văn hóa của từng con tem.',
        dc: '• [Mã NLS: 3.2.TC1a] Xuất bản bộ tem bưu chính số hóa của lớp thành file ảnh chất lượng cao để chia sẻ.\n• [Mã AI: 7.B3.1] Cam kết tuân thủ quy tắc bản quyền hình ảnh khi thiết kế ấn phẩm tem bưu chính.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Yếu tố dân tộc trong mĩ thuật',
        n: 'Chủ đề 3: Yếu tố dân tộc trong mĩ thuật - Bài 5: Yếu tố dân tộc trong tranh của một số hoạ sĩ (1 tiết)',
        y: '- Tìm hiểu cách các danh họa Việt Nam (Nguyễn Gia Trí, Tô Ngọc Vân, Trần Văn Cẩn, Nguyễn Sáng) khai thác chất liệu truyền thống (sơn mài, lụa, khắc gỗ) và đề tài dân tộc.\n- Cảm nhận nét đẹp bình dị, thuần khiết và đậm đà bản sắc dân tộc trong các tác phẩm mĩ thuật hiện đại Việt Nam.',
        dc: '• [Mã NLS: 1.2.TC1b] Tham quan Bảo tàng Mĩ thuật Việt Nam trực tuyến để chiêm ngưỡng các bảo vật quốc gia mĩ thuật.\n• [Mã AI: 7.C5.1] Trải nghiệm AI phân tích nét bút và kỹ thuật sơn mài, tranh lụa độc đáo của danh họa Việt Nam.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Yếu tố dân tộc trong mĩ thuật',
        n: 'Chủ đề 3: Yếu tố dân tộc trong mĩ thuật - Bài 6: Thiết kế logo (Thiết kế biểu trưng ứng dụng yếu tố dân tộc) (1 tiết)',
        y: '- Nắm vững nguyên lý thiết kế logo biểu trưng (tính cô đọng, dễ nhớ, dễ nhận biết, mang ý nghĩa thông điệp sâu sắc).\n- Thực hành thiết kế logo cho một sự kiện, câu lạc bộ học đường có kết hợp hoa văn, họa tiết dân tộc.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng phần mềm thiết kế vector (Inkscape / Illustrator online) để vẽ logo số.\n• [Mã AI: 7.D1.1] Trải nghiệm công cụ AI gợi ý ý tưởng logo (AI Logo Maker) và điều chỉnh lại theo bản sắc riêng.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp 7',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình, thiết kế tem, logo và mĩ thuật di tích từ Tuần 1 đến Tuần 8.\n- Đánh giá năng lực sáng tạo độc lập, tư duy thẩm mỹ và kĩ năng xử lý chất liệu.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh và tải tác phẩm bài kiểm tra lên kho học liệu số của trường.\n• [Mã AI: 7.B3.1] Thực hiện nghiêm túc quy chế kiểm tra đánh giá số hóa.'
      },
      {
        w: 10,
        t: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ',
        n: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ - Bài 7: Không gian trong tác phẩm hội hoạ thế giới thời kì trung đại (1 tiết)',
        y: '- Nhận biết sự biến đổi về cách biểu đạt không gian nghệ thuật từ thời kì Trung đại sang thời kì Phục hưng.\n- Phân tích cách diễn tả không gian hai chiều (phẳng, ước lệ) và bước đầu tiếp cận luật xa gần viễn cận.',
        dc: '• [Mã NLS: 1.1.TC1b] Xem các clip phân tích không gian và luật phối cảnh trong hội họa kinh điển thế giới.\n• [Mã AI: 7.C5.1] Khám phá cách thuật toán thị giác máy tính AI nhận diện các lớp không gian tiền cảnh - trung cảnh - hậu cảnh.'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ',
        n: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ - Bài 8: Tranh tĩnh vật (Khám phá bố cục tĩnh vật và màu sắc) (1 tiết)',
        y: '- Quan sát và phân tích tương quan hình khối, tỉ lệ, đậm nhạt, bóng đổ và hòa sắc của mẫu tĩnh vật lọ hoa và quả.\n- Lên ý tưởng sắp đặt mẫu và phác thảo bố cục tranh tĩnh vật màu.',
        dc: '• [Mã NLS: 1.3.TC1a] Chụp ảnh mẫu vật tĩnh vật dưới nhiều nguồn sáng khác nhau để phân tích bóng đổ.\n• [Mã AI: 7.A1.MR1] Dùng ứng dụng AI phân tích tương quan sáng tối và độ tương phản của ảnh chụp mẫu vật.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ',
        n: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ - Bài 8: Tranh tĩnh vật (Thực hành vẽ tranh tĩnh vật màu) (1 tiết)',
        y: '- Thực hành hoàn thiện tranh tĩnh vật màu với hòa sắc hài hòa, thể hiện được khối tròn, chất cảm bề mặt đồ vật.\n- Bộc lộ cảm xúc thẩm mỹ và rèn luyện tính kiên trì, quan sát tỉ mỉ.',
        dc: '• [Mã NLS: 3.1.TC1b] Số hóa bức tranh tĩnh vật bằng máy quét scan/máy ảnh để đưa vào bộ sưu tập nghệ thuật số.\n• [Mã AI: 7.D1.1] Nhận xét độ hòa sắc của bức tranh tĩnh vật bằng công cụ phân tích màu sắc AI.'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Vẻ đẹp trong tác phẩm hội hoạ',
        n: 'Kiểm tra, trưng bày sản phẩm cuối học kì I môn Mĩ thuật Lớp 7 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
        y: '- Tổng hợp, rà soát và hoàn thiện các sản phẩm mĩ thuật đã thực hiện trong học kì 1.\n- Chuẩn bị khung viền, nhãn tên tác phẩm và lời giới thiệu nghệ thuật.',
        dc: '• [Mã NLS: 1.3.TC1b] Sắp xếp toàn bộ file ảnh tác phẩm HK1 vào không gian lưu trữ số cá nhân.\n• [Mã AI: 7.D1.1] Dùng AI hỗ trợ viết tóm tắt thông điệp nghệ thuật cho từng tác phẩm trưng bày.'
      },
      {
        w: 14,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập kiến thức mĩ thuật tạo hình và mĩ thuật ứng dụng HK1 Lớp 7 (1 tiết)',
        y: '- Hệ thống hóa kiến thức Mĩ thuật Trung đại, vẻ đẹp di tích, yếu tố dân tộc, tranh tĩnh vật.\n- Nâng cao kĩ năng cảm thụ thẩm mỹ và đánh giá tác phẩm nghệ thuật.',
        dc: '• [Mã NLS: 2.1.TC1b] Tham gia trò chơi trắc nghiệm kiến thức mĩ thuật trực tuyến giữa các nhóm.\n• [Mã AI: 7.C5.1] Tương tác với chatbot AI giải đáp các thắc mắc về lịch sử mĩ thuật thế giới và Việt Nam.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Hoàn thiện hồ sơ sản phẩm mĩ thuật và maket trưng bày HK1 Lớp 7 (1 tiết)',
        y: '- Hoàn thiện maket trang trí không gian trưng bày triển lãm của lớp.\n- Phân công nhiệm vụ hướng dẫn viên thuyết minh triển lãm cho các thành viên trong tổ.',
        dc: '• [Mã NLS: 2.1.TC1b] Hợp tác lập kế hoạch phân chia sơ đồ triển lãm trên bảng làm việc nhóm trực tuyến.\n• [Mã AI: 7.D1.1] Ứng dụng AI tạo sơ đồ mặt bằng triển lãm mĩ thuật 2D/3D trực quan.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Mĩ thuật Lớp 7',
        y: '- Đánh giá tổng hợp toàn diện năng lực sáng tạo mĩ thuật, kĩ thuật tạo hình và ý thức học tập trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực biểu đạt ý tưởng nghệ thuật và tư duy thiết kế của học sinh.',
        dc: '• [Mã NLS: 3.2.TC1a] Lưu trữ ảnh chất lượng cao của tác phẩm kiểm tra vào hồ sơ học sinh điện tử.\n• [Mã AI: 7.B3.1] Thực hiện cam kết trung thực và tôn trọng bản quyền sản phẩm nghệ thuật.'
      },
      {
        w: 17,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 Lớp 7 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối học kì 1; phân tích ưu điểm và điểm cần điều chỉnh về bố cục, màu sắc.\n- Hướng dẫn học sinh nâng cao kĩ năng xử lý chất liệu và hòa sắc.',
        dc: '• [Mã NLS: 5.4.TC1a] Xác định kĩ năng tạo hình cần cải thiện qua bảng đánh giá số hóa.\n• [Mã AI: 7.D1.1] Nhận lộ trình bài tập tự luyện vẽ cá nhân hóa từ phần mềm hỗ trợ học tập.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 Lớp 7 (1 tiết)',
        y: '- Tổ chức trưng bày triển lãm mĩ thuật HK1 của lớp; tự tin thuyết trình về tác phẩm của mình và chia sẻ cảm nhận về bài của bạn.\n- Sơ kết hoạt động mĩ thuật HK1 và tạo cảm hứng sáng tạo cho HK2.',
        dc: '• [Mã NLS: 3.2.TC1a] Xây dựng phòng triển lãm ảo 3D trưng bày toàn bộ tác phẩm mĩ thuật HK1 của khối 7.\n• [Mã AI: 7.A1.1] Dùng AI hỗ trợ cân chỉnh ánh sáng và dựng video recap toàn cảnh triển lãm.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Hiện thực cuộc sống trong sáng tạo mĩ thuật',
        n: 'Chủ đề 5: Hiện thực cuộc sống trong sáng tạo mĩ thuật - Bài 9: Tìm hiểu nguồn sáng trong tranh (1 tiết)',
        y: '- Nhận biết vai trò của nguồn sáng (ánh sáng tự nhiên, ánh sáng nhân tạo) trong việc tạo khối, diễn tả không gian và cảm xúc của bức tranh.\n- Phân tích nguồn sáng trong các tác phẩm hội họa của các danh họa thế giới (Caravaggio, Rembrandt, Georges de La Tour).',
        dc: '• [Mã NLS: 1.1.TC1b] Tìm kiếm và so sánh các tác phẩm kinh điển sử dụng nghệ thuật tương phản sáng tối (Chiaroscuro).\n• [Mã AI: 7.C5.1] Trải nghiệm công cụ AI mô phỏng hướng chiếu sáng 3D trên vật thể (3D Lighting Simulation).'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Hiện thực cuộc sống trong sáng tạo mĩ thuật',
        n: 'Chủ đề 5: Hiện thực cuộc sống trong sáng tạo mĩ thuật - Bài 10: Thiết kế tạo mẫu trang phục (1 tiết)',
        y: '- Nắm vững nguyên lý cơ bản của thiết kế thời trang (phác thảo dáng người mẫu thời trang, tạo dáng trang phục, phối màu sắc, họa tiết trang trí).\n- Thực hành thiết kế bộ sưu tập trang phục dạo phố hoặc trang phục học đường sáng tạo.',
        dc: '• [Mã NLS: 3.1.TC1b] Sử dụng ứng dụng thiết kế thời trang số (Digital Fashion Sketching) trên máy tính bảng.\n• [Mã AI: 7.D1.1] Trải nghiệm AI gợi ý phối màu thời trang và chất liệu vải theo xu hướng (Trend Forecast AI).'
      },
      {
        w: 21,
        t: 'Chủ đề 6: Sáng tạo ngôi nhà',
        n: 'Chủ đề 6: Sáng tạo ngôi nhà - Bài 11: Tạo hình ngôi nhà từ vật liệu sẵn có (1 tiết)',
        y: '- Vận dụng kiến thức hình khối kiến trúc để tạo hình mô hình ngôi nhà độc đáo từ vật liệu sẵn có, thân thiện môi trường (que tre, vỏ hộp, vỏ ốc, bìa carton).\n- Thể hiện tư duy không gian 3 chiều và ý thức bảo vệ môi trường.',
        dc: '• [Mã NLS: 3.2.TC1a] Quay video stop-motion hoặc timelapse quá trình lắp ráp mô hình ngôi nhà 3D.\n• [Mã AI: 7.C4.1] Khám phá cách AI hỗ trợ các kiến trúc sư tính toán kết cấu và vật liệu xây dựng xanh.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Sáng tạo ngôi nhà',
        n: 'Chủ đề 6: Sáng tạo ngôi nhà - Bài 12: Tranh cổ động (Tìm hiểu nghệ thuật tranh cổ động) (1 tiết)',
        y: '- Nhận biết đặc trưng của tranh cổ động (hình ảnh biểu tượng mạnh mẽ, câu khẩu hiệu ngắn gọn súc tích, màu sắc tương phản rõ rệt, tính tuyên truyền giáo dục cao).\n- Phác thảo ý tưởng tranh cổ động về đề tài An toàn giao thông, Bảo vệ môi trường hoặc Phòng chống bạo lực.',
        dc: '• [Mã NLS: 1.2.TC1b] Sưu tầm và phân tích các mẫu tranh cổ động nổi tiếng của mĩ thuật cách mạng Việt Nam.\n• [Mã AI: 7.A1.1] Thảo luận về sức mạnh lay động lòng người của thông điệp tranh cổ động do con người sáng tạo.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Sáng tạo ngôi nhà',
        n: 'Chủ đề 6: Sáng tạo ngôi nhà - Bài 12: Tranh cổ động (Thực hành hoàn thiện tranh cổ động) (1 tiết)',
        y: '- Thực hành hoàn thiện tranh cổ động với bố cục chặt chẽ, mảng màu phẳng ấn tượng, khẩu hiệu truyền cảm hứng mạnh mẽ.\n- Thể hiện ý thức trách nhiệm công dân đối với cộng đồng và xã hội.',
        dc: '• [Mã NLS: 3.2.TC1a] Sử dụng phần mềm đồ họa chèn typography khẩu hiệu chuẩn xác vào bức tranh cổ động.\n• [Mã AI: 7.D1.1] Sử dụng AI kiểm tra độ tương phản màu sắc và khả năng nhận diện hình ảnh từ khoảng cách xa.'
      },
      {
        w: 24,
        t: 'Chủ đề 7: Sum họp gia đình',
        n: 'Chủ đề 7: Sum họp gia đình - Bài 13: Đề tài gia đình trong sáng tạo mĩ thuật (1 tiết)',
        y: '- Quan sát và chắt lọc những khoảnh khắc ấm áp, yêu thương trong gia đình (bữa cơm tất niên, quây quần xem tivi, cùng làm việc nhà, chúc thọ ông bà).\n- Thực hành vẽ tranh đề tài gia đình với tình cảm chân thành, ấm áp.',
        dc: '• [Mã NLS: 1.1.TC1b] Thu thập những bức ảnh chụp gia đình làm tư liệu gợi mở cảm xúc sáng tác.\n• [Mã AI: 7.A1.1] Khẳng định tình cảm gia đình thiêng liêng là nguồn cảm hứng nghệ thuật bất tận của con người.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Sum họp gia đình',
        n: 'Chủ đề 7: Sum họp gia đình - Bài 14: Thiết kế khung ảnh từ vật liệu sẵn có (1 tiết)',
        y: '- Nắm vững kỹ thuật tạo hình và trang trí khung ảnh để bàn hoặc treo tường từ vật liệu tái chế (bìa carton, que kem, cúc áo, vỏ sò).\n- Lắp ảnh gia đình vào khung và trưng bày sản phẩm chan chứa tình yêu thương.',
        dc: '• [Mã NLS: 3.2.TC1a] Chụp ảnh sản phẩm khung ảnh handmade và biên tập clip ngắn tặng người thân.\n• [Mã AI: 7.D1.1] Sử dụng AI gợi ý các họa tiết trang trí thủ công viền khung ảnh đẹp mắt.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp 7',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình, thiết kế thời trang, tranh cổ động và khung ảnh từ Tuần 19 đến Tuần 25.\n- Đánh giá năng lực sáng tạo ứng dụng, tư duy biểu tượng và thẩm mỹ thị giác.',
        dc: '• [Mã NLS: 3.1.TC1b] Chụp ảnh và lưu trữ bài kiểm tra vào hồ sơ đánh giá năng lực số của học sinh.\n• [Mã AI: 7.B3.1] Thực hiện nghiêm túc quy trình kiểm tra đánh giá minh bạch.'
      },
      {
        w: 27,
        t: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại',
        n: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại - Bài 15: Di sản mĩ thuật Việt Nam thời kì trung đại (Kiến trúc & Điêu khắc Lí - Trần) (1 tiết)',
        y: '- Nhận biết thành tựu rực rỡ của mĩ thuật Việt Nam thời Lý - Trần - Lê sơ: Chùa Một Cột, Tháp Phổ Minh, Tượng Phật A Di Đà chùa Phật Tích, Rồng thời Lý mềm mại uyển chuyển, Rồng thời Trần khỏe khoắn.\n- Tự hào về đỉnh cao nghệ thuật điêu khắc và kiến trúc cổ truyền dân tộc.',
        dc: '• [Mã NLS: 1.2.TC1b] Khám phá hiện vật Bảo vật quốc gia thời Lý - Trần qua công nghệ 3D scan của bảo tàng số.\n• [Mã AI: 7.C5.1] Trải nghiệm AI so sánh sự tiến hóa hình tượng Rồng qua các triều đại Lý, Trần, Lê, Nguyễn.'
      },
      {
        w: 28,
        t: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại',
        n: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại - Bài 15: Di sản mĩ thuật Việt Nam thời kì trung đại (Nghệ thuật Chèo, Múa rối nước & Gốm) (1 tiết)',
        y: '- Nhận biết nét độc đáo của điêu khắc gỗ đình làng và gốm hoa nâu thời Lý - Trần, gốm hoa lam thời Lê.\n- Hiểu được giá trị dân gian mộc mạc, hóm hỉnh và tính nhân văn sâu sắc của nghệ thuật truyền thống.',
        dc: '• [Mã NLS: 1.1.TC1c] Xem các video tư liệu số về nghệ nhân làm gốm cổ truyền Bát Tràng, Chu Đậu.\n• [Mã AI: 7.A1.1] Khẳng định đôi bàn tay tài hoa và trí tuệ nghệ thuật của cha ông ta trong lịch sử.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại',
        n: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại - Bài 16: Khai thác giá trị tạo hình truyền thống trong trang trí đồ vật (1 tiết)',
        y: '- Vận dụng hoa văn truyền thống thời Trung đại (hoa sen, hoa cúc, mây cuộn, rồng thời Lý) vào thiết kế trang trí một đồ vật hiện đại (áo phông, túi xách vải, ốp điện thoại, cốc sứ).\n- Thể hiện sự kết hợp hài hòa giữa bản sắc cổ truyền và phong cách hiện đại.',
        dc: '• [Mã NLS: 3.2.TC1a] Vẽ phác thảo hoa văn truyền thống trên phần mềm đồ họa số và áp lên mockup sản phẩm 3D.\n• [Mã AI: 7.D1.1] Dùng AI tạo các mẫu họa tiết hoa sen cách điệu đối xứng phục vụ trang trí đồ vật.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Mĩ thuật Việt Nam thời kì trung đại',
        n: 'Kiểm tra, trưng bày sản phẩm cuối năm môn Mĩ thuật Lớp 7 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
        y: '- Rà soát, hoàn thiện và đóng khung toàn bộ các sản phẩm mĩ thuật đã sáng tạo trong cả năm học Lớp 7.\n- Lập danh mục tác phẩm và chuẩn bị không gian trưng bày triển lãm cuối năm.',
        dc: '• [Mã NLS: 1.3.TC1b] Hoàn thiện danh mục tác phẩm nghệ thuật số (Digital Portfolio) của Lớp 7.\n• [Mã AI: 7.D1.1] Sử dụng chatbot AI hỗ trợ viết lời bình nghệ thuật cho bộ sưu tập tác phẩm.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp 7',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Mĩ thuật Lớp 7 cả năm học.\n- Đánh giá năng lực sáng tạo tạo hình, tư duy thiết kế ứng dụng và cảm thụ nghệ thuật truyền thống.',
        dc: '• [Mã NLS: 3.1.TC1b] Lưu trữ toàn bộ kết quả và hình ảnh bài thi vào học bạ điện tử của học sinh.\n• [Mã AI: 7.A1.MR1] Học sinh tự đối chiếu tác phẩm với bảng rubric đánh giá chuẩn GDPT 2018.'
      },
      {
        w: 32,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm Lớp 7 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối năm; tuyên dương những sản phẩm có ý tưởng xuất sắc, kĩ thuật điêu luyện.\n- Hướng dẫn học sinh hoàn thiện tác phẩm đạt chất lượng cao nhất cho Triển lãm dự án.',
        dc: '• [Mã NLS: 5.4.TC1a] Phân tích sự tiến bộ về năng lực mĩ thuật của bản thân qua bảng tổng hợp số.\n• [Mã AI: 7.D1.1] Nhận gợi ý phương pháp nâng cao kĩ năng vẽ phối cảnh chuẩn bị cho Lớp 8.'
      },
      {
        w: 33,
        t: 'Dự án Mĩ thuật',
        n: 'Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp 7 (1 tiết)',
        y: '- Tổ chức Triển lãm Mĩ thuật với chủ đề "Âm vang Di sản và Cuộc sống đương đại".\n- Thể hiện năng lực tổ chức sự kiện nghệ thuật, bài trí không gian và thuyết minh tác phẩm tự tin.',
        dc: '• [Mã NLS: 3.2.TC1a] Xây dựng trang triển lãm tranh tương tác trực tuyến cho toàn khối 7.\n• [Mã AI: 7.D1.1] Sử dụng AI dựng video trailer giới thiệu sự kiện triển lãm với âm nhạc và hiệu ứng ấn tượng.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm Lớp 7 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức 8 chủ đề mĩ thuật Lớp 7: Mĩ thuật Trung đại thế giới & Việt Nam, vẻ đẹp di tích, yếu tố dân tộc, nguồn sáng, tranh cổ động.\n- Chuẩn bị hành trang thẩm mỹ và kĩ năng vững chắc bước vào Lớp 8.',
        dc: '• [Mã NLS: 1.3.TC1b] Đóng gói và lưu trữ an toàn hồ sơ nghệ thuật số cả năm Lớp 7.\n• [Mã AI: 7.C5.1] Khám phá các công nghệ sáng tạo nghệ thuật mới kết hợp giữa AI và hội họa.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật Lớp 7 toàn trường (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Mĩ thuật Lớp 7 cả năm học.\n- Biểu dương các tác giả trẻ có tác phẩm xuất sắc và lan tỏa tình yêu nghệ thuật trong học đường.',
        dc: '• [Mã NLS: 2.2.TC1a] Đăng tải toàn bộ tư liệu triển lãm tổng kết lên thư viện số của trường.\n• [Mã AI: 7.A1.1] Khẳng định vị thế trung tâm của con người trong việc sáng tạo và cảm nhận cái đẹp.'
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
        equipment: 'Giấy vẽ A3/A4, màu goát, màu nước, acrylic, đất nặn, vật liệu tái chế, thước kẻ, kéo, keo dán, máy chiếu',
        location: 'Phòng học bộ môn Mĩ thuật / Sảnh triển lãm',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Không gian Sáng tạo' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. MĨ THUẬT LỚP 8 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  if (g === 8) {
    const grade8Lessons = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chủ đề 1: Hình tượng con người trong mĩ thuật',
        n: 'Chủ đề 1: Hình tượng con người trong mĩ thuật - Bài 1: Hình tượng con người trong sáng tạo mĩ thuật (1 tiết)',
        y: '- Quan sát và phân tích tỉ lệ chuẩn của cơ thể người (độ cao cơ thể tính theo chiều dài đầu người: 7 - 7.5 đầu).\n- Nắm được đặc điểm giải phẫu tạo hình cơ bản (trục cơ thể, vai, hông, tay, chân) và thực hành vẽ phác dáng người.',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và nghiên cứu các bản vẽ giải phẫu người kinh điển của Leonardo da Vinci (Người Vitruvius).\n• [Mã AI: 8.C1.1] Trải nghiệm công cụ AI phân tích tỉ lệ cơ thể người và tự động nhận diện khớp xương 3D.'
      },
      {
        w: 2,
        t: 'Chủ đề 1: Hình tượng con người trong mĩ thuật',
        n: 'Chủ đề 1: Hình tượng con người trong mĩ thuật - Bài 2: Một số dạng bố cục trong tranh sinh hoạt (1 tiết)',
        y: '- Nhận biết và phân tích các dạng bố cục phổ biến trong tranh sinh hoạt: Bố cục hình tam giác/kim tự tháp, bố cục hình chữ nhật, bố cục đường chéo, bố cục hình tròn.\n- Thực hành sắp xếp nhóm nhân vật tạo nên bố cục sinh hoạt trường lớp hoặc gia đình cân đối, sinh động.',
        dc: '• [Mã NLS: 1.3.TC2b] Thiết kế sơ đồ phân tích các dạng bố cục hội họa trên phần mềm đồ họa số.\n• [Mã AI: 8.D1.1] Dùng AI phân tích mắt nhìn (Heatmap / Rule of Thirds AI) để đánh giá độ tập trung của bố cục tranh.'
      },
      {
        w: 3,
        t: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống',
        n: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống - Bài 3: Nghệ thuật truyền thống (Khám phá hoa văn dân tộc thiểu số) (1 tiết)',
        y: '- Tìm hiểu nét độc đáo của hoa văn thổ cẩm các dân tộc thiểu số Việt Nam (H\'Mông, Thái, Dao, Ba Na, Chăm, Khmer).\n- Phân tích ý nghĩa biểu tượng của các họa tiết hình học, hoa lá, muông thú thể hiện nhân sinh quan gắn bó với thiên nhiên.',
        dc: '• [Mã NLS: 1.1.TC2b] Truy cập kho dữ liệu số hóa trang phục và hoa văn thổ cẩm 54 dân tộc Việt Nam.\n• [Mã AI: 8.A1.1] Nhận thức về sự tinh xảo trong nghệ thuật dệt thêu thủ công của phụ nữ vùng cao mà máy dệt công nghiệp khó sánh kịp.'
      },
      {
        w: 4,
        t: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống',
        n: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống - Bài 4: Thiết kế trang phục với hoa văn dân tộc thiểu số (Phác thảo ý tưởng) (1 tiết)',
        y: '- Nắm vững nguyên tắc cách điệu và ứng dụng hoa văn dân tộc vào thiết kế thời trang hiện đại (áo dài cách tân, áo khoác, váy đầm, phụ kiện).\n- Phác thảo bản vẽ mẫu thiết kế thời trang kết hợp hoa văn thổ cẩm.',
        dc: '• [Mã NLS: 2.2.TC2c] Tham khảo các bộ sưu tập thời trang thổ cẩm của các nhà thiết kế Việt Nam nổi tiếng trên Internet.\n• [Mã AI: 8.D2.1] Khám phá công cụ AI tạo hoa văn thổ cẩm lặp vô tận (Seamless Pattern AI) để thử nghiệm lên bản vẽ.'
      },
      {
        w: 5,
        t: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống',
        n: 'Chủ đề 2: Vẻ đẹp trong nghệ thuật truyền thống - Bài 4: Thiết kế trang phục với hoa văn dân tộc thiểu số (Hoàn thiện sản phẩm) (1 tiết)',
        y: '- Thực hành hoàn thiện bản vẽ thiết kế hoặc làm mô hình trang phục thu nhỏ có đính kết hoa văn thổ cẩm.\n- Trưng bày và thuyết trình về thông điệp tôn vinh bản sắc văn hóa dân tộc trong sản phẩm.',
        dc: '• [Mã NLS: 3.2.TC2a] Biên tập video giới thiệu bộ sưu tập thời trang thổ cẩm học đường của nhóm.\n• [Mã AI: 8.B2.1] Nêu cao ý thức tôn trọng sở hữu trí tuệ văn hóa truyền thống của cộng đồng các dân tộc bản địa.'
      },
      {
        w: 6,
        t: 'Chủ đề 3: Niềm vui, hạnh phúc',
        n: 'Chủ đề 3: Niềm vui, hạnh phúc - Bài 5: Tác phẩm hội hoạ chủ đề Niềm vui, hạnh phúc (1 tiết)',
        y: '- Quan sát và phân tích cách các họa sĩ thể hiện cảm xúc vui tươi, hạnh phúc qua nét mặt, cử chỉ, gam màu rạng rỡ và ánh sáng chan hòa.\n- Thực hành phác thảo và vẽ tranh thể hiện khoảnh khắc hạnh phúc của bản thân, gia đình hoặc bạn bè.',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và thưởng thức các tác phẩm hội họa kinh điển về chủ đề hạnh phúc gia đình và tuổi thơ.\n• [Mã AI: 8.C5.1] Trải nghiệm AI nhận diện cảm xúc (Emotion Recognition AI) qua nét mặt nhân vật trong tranh vẽ.'
      },
      {
        w: 7,
        t: 'Chủ đề 3: Niềm vui, hạnh phúc',
        n: 'Chủ đề 3: Niềm vui, hạnh phúc - Bài 6: Thiết kế quà sinh nhật từ vật liệu sẵn có (Ý tưởng thiết kế) (1 tiết)',
        y: '- Nắm vững nguyên lý thiết kế sản phẩm quà tặng sinh nhật (hộp quà đa năng, thiệp 3D popup, đèn ngủ mini, khung ảnh trang trí).\n- Lên ý tưởng và phác thảo bản vẽ thiết kế quà sinh nhật từ vật liệu tái chế.',
        dc: '• [Mã NLS: 2.5.TC2b] Thảo luận nhóm trực tuyến để trao đổi ý tưởng quà sinh nhật handmade độc đáo.\n• [Mã AI: 8.D1.1] Dùng AI gợi ý các mẫu thiệp 3D popup có cấu trúc gấp giấy Origami sáng tạo.'
      },
      {
        w: 8,
        t: 'Chủ đề 3: Niềm vui, hạnh phúc',
        n: 'Chủ đề 3: Niềm vui, hạnh phúc - Bài 6: Thiết kế quà sinh nhật từ vật liệu sẵn có (Hoàn thiện sản phẩm) (1 tiết)',
        y: '- Thực hành hoàn thiện món quà sinh nhật tỉ mỉ, đẹp mắt, có công năng sử dụng hữu ích.\n- Trưng bày món quà và chia sẻ ý nghĩa gắn kết yêu thương, tinh thần tiết kiệm và bảo vệ môi trường.',
        dc: '• [Mã NLS: 3.2.TC2a] Chụp ảnh sản phẩm dưới góc chụp nghệ thuật và tạo mã QR liên kết đến video hướng dẫn làm quà.\n• [Mã AI: 8.A1.2] Nhận diện giá trị tinh thần thiêng liêng của món quà do chính bàn tay con người làm ra.'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp 8',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng hình tượng con người, bố cục, hoa văn thổ cẩm và thiết kế quà tặng từ Tuần 1 đến Tuần 8.\n- Đánh giá năng lực sáng tạo độc lập, tư duy thẩm mỹ ứng dụng và kĩ năng thủ công.',
        dc: '• [Mã NLS: 3.1.TC2b] Lưu trữ ảnh chụp tác phẩm kiểm tra vào hồ sơ học sinh điện tử.\n• [Mã AI: 8.A3.3] Thực hiện trách nhiệm giải trình và trung thực trong quá trình kiểm tra đánh giá.'
      },
      {
        w: 10,
        t: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại',
        n: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại - Bài 7: Một số trường phái mĩ thuật phương Tây thời kì hiện đại (Trường phái Ấn tượng & Hậu ấn tượng) (1 tiết)',
        y: '- Nhận biết đặc điểm trường phái Ấn tượng (Impressionism - Monet, Renoir) chú trọng ánh sáng và màu sắc khoảnh khắc; trường phái Hậu ấn tượng (Van Gogh, Cézanne, Gauguin) bộc lộ cảm xúc mãnh liệt.\n- Phân tích kiệt tác Đêm đầy sao (The Starry Night) của Vincent van Gogh.',
        dc: '• [Mã NLS: 1.1.TC2d] Khám phá bảo tàng số Van Gogh Museum và chiêm ngưỡng tranh độ phân giải cực cao (Gigapixel).\n• [Mã AI: 8.C1.1] Khám phá cách AI chuyển đổi phong cách ảnh chụp sang nét cọ xoáy đặc trưng của Van Gogh (Style Transfer).'
      },
      {
        w: 11,
        t: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại',
        n: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại - Bài 7: Một số trường phái mĩ thuật phương Tây thời kì hiện đại (Trường phái Dã thú & Lập thể) (1 tiết)',
        y: '- Nhận biết đặc trưng của trường phái Dã thú (Fauvism - Matisse) với màu sắc nguyên chất rực rỡ; trường phái Lập thể (Cubism - Picasso, Braque) phân tích vật thể thành các diện hình học đa chiều.\n- Thực hành vẽ bức tranh mô phỏng theo phong cách Lập thể hoặc Dã thú.',
        dc: '• [Mã NLS: 1.2.TC2a] Xem các video tư liệu phân tích sự đột phá về tư duy tạo hình của danh họa Pablo Picasso.\n• [Mã AI: 8.D1.1] Trải nghiệm công cụ AI phân tích cấu trúc hình học lập thể của khuôn mặt người.'
      },
      {
        w: 12,
        t: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại',
        n: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại - Bài 8: Nghệ thuật trang trí đồ gia dụng (1 tiết)',
        y: '- Nắm vững nguyên tắc trang trí đồ gia dụng (bát đĩa, bình hoa, đèn bàn, thảm trải sàn) kết hợp yếu tố mĩ thuật hiện đại và công năng tiện ích.\n- Thực hành thiết kế trang trí hoa văn hiện đại lên một vật dụng gia đình.',
        dc: '• [Mã NLS: 3.2.TC2a] Sử dụng phần mềm thiết kế 3D áp hoa văn trang trí lên sản phẩm gia dụng ảo.\n• [Mã AI: 8.D2.1] Dùng AI gợi ý các phong cách trang trí nội thất Bắc Âu (Scandinavian), Tối giản (Minimalism).'
      },
      {
        w: 13,
        t: 'Chủ đề 4: Mĩ thuật thế giới thời kì hiện đại',
        n: 'Kiểm tra, trưng bày sản phẩm cuối học kì I môn Mĩ thuật Lớp 8 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
        y: '- Rà soát, hoàn thiện và đóng khung các tác phẩm mĩ thuật đã thực hiện trong học kì 1.\n- Chuẩn bị nhãn tên, viết lời bình nghệ thuật và sắp xếp maket triển lãm.',
        dc: '• [Mã NLS: 1.3.TC2a] Tổ chức danh mục sản phẩm mĩ thuật số HK1 vào hệ thống đám mây cá nhân.\n• [Mã AI: 8.D1.1] Dùng AI hỗ trợ viết tóm tắt phong cách nghệ thuật cho từng tác phẩm của học sinh.'
      },
      {
        w: 14,
        t: 'Ôn tập học kì 1',
        n: 'Ôn tập học kì 1: Ôn tập các trường phái mĩ thuật hiện đại và mĩ thuật ứng dụng HK1 Lớp 8 (1 tiết)',
        y: '- Hệ thống hóa kiến thức về hình tượng con người, bố cục, hoa văn thổ cẩm, các trường phái Ấn tượng, Dã thú, Lập thể.\n- Nâng cao năng lực phản biện nghệ thuật và cảm thụ thẩm mỹ thị giác.',
        dc: '• [Mã NLS: 2.5.TC2b] Tham gia trò chơi thi đấu kiến thức mĩ thuật trực tuyến giữa các tổ trong lớp.\n• [Mã AI: 8.C1.1] Chatbot AI hỗ trợ ôn tập, giải đáp các câu hỏi phân biệt các trường phái mĩ thuật hiện đại.'
      },
      {
        w: 15,
        t: 'Ôn tập học kì 1',
        n: 'Hoàn thiện hồ sơ sản phẩm mĩ thuật và maket triển lãm HK1 Lớp 8 (1 tiết)',
        y: '- Hoàn thiện maket trang trí không gian triển lãm mĩ thuật HK1 của lớp.\n- Luyện tập kĩ năng thuyết trình, giới thiệu tác phẩm nghệ thuật trước tập thể.',
        dc: '• [Mã NLS: 2.1.TC2b] Phân công nhiệm vụ bài trí không gian triển lãm qua bảng phân việc số.\n• [Mã AI: 8.D1.1] Dùng AI tạo sơ đồ bố trí ánh sáng và không gian trưng bày triển lãm tối ưu.'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Mĩ thuật Lớp 8',
        y: '- Đánh giá tổng hợp toàn diện năng lực sáng tạo mĩ thuật, kĩ thuật tạo hình và ý thức học tập trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực biểu đạt ý tưởng nghệ thuật theo phong cách hiện đại của học sinh.',
        dc: '• [Mã NLS: 3.1.TC2b] Lưu trữ ảnh chất lượng cao của tác phẩm kiểm tra vào hồ sơ học sinh điện tử.\n• [Mã AI: 8.A3.3] Thực hiện nghiêm túc quy chế đánh giá minh bạch, tôn trọng bản quyền.'
      },
      {
        w: 17,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 Lớp 8 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối học kì 1; phân tích các điểm sáng tạo và lỗi bố cục, hòa sắc cần khắc phục.\n- Hướng dẫn học sinh hoàn thiện nâng cao chất lượng tác phẩm.',
        dc: '• [Mã NLS: 5.4.TC2a] Tự đánh giá và xây dựng kế hoạch bồi dưỡng kĩ năng mĩ thuật cá nhân qua báo cáo số.\n• [Mã AI: 8.D1.1] Nhận gợi ý cải thiện kỹ thuật pha màu và tạo chất cảm từ phần mềm hỗ trợ học tập.'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 Lớp 8 (1 tiết)',
        y: '- Tổ chức trưng bày triển lãm mĩ thuật HK1 của lớp; tự tin thuyết trình tác phẩm và chia sẻ cảm nhận nghệ thuật.\n- Đánh giá tổng kết phong trào học tập mĩ thuật HK1 và khơi dậy đam mê chuẩn bị cho HK2.',
        dc: '• [Mã NLS: 3.2.TC2a] Xây dựng phòng triển lãm ảo 3D trưng bày các tác phẩm mĩ thuật HK1 của khối 8.\n• [Mã AI: 8.A1.1] Ứng dụng AI biên tập video recap toàn cảnh triển lãm với âm nhạc và hiệu ứng chuyên nghiệp.'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chủ đề 5: Vẻ đẹp trong lao động',
        n: 'Chủ đề 5: Vẻ đẹp trong lao động - Bài 9: Vẻ đẹp của người lao động trong sáng tạo mĩ thuật (1 tiết)',
        y: '- Quan sát và cảm nhận vẻ đẹp khỏe khoắn, đức tính cần cù, hăng say của người lao động (bác nông dân trên đồng ruộng, cô công nhân trong nhà máy, chú thợ xây, bác sĩ nơi tuyến đầu).\n- Thực hành vẽ tranh đề tài Người lao động với bố cục chặt chẽ, đường nét khỏe khoắn, màu sắc biểu cảm.',
        dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm ảnh tư liệu về nét đẹp lao động sản xuất trên khắp mọi miền Tổ quốc.\n• [Mã AI: 8.C5.1] Khám phá cách AI phân tích nhịp điệu chuyển động cơ bắp của con người khi lao động.'
      },
      {
        w: 20,
        t: 'Chủ đề 5: Vẻ đẹp trong lao động',
        n: 'Chủ đề 5: Vẻ đẹp trong lao động - Bài 10: Nghệ thuật trổ giấy trong trang trí (Khám phá nghệ thuật Kirigami / Cắt giấy dân gian) (1 tiết)',
        y: '- Tìm hiểu nghệ thuật cắt trổ giấy truyền thống (tranh cắt giấy Đông Hồ, hoa giấy Thanh Tiên, nghệ thuật Kirigami Nhật Bản).\n- Nắm vững kỹ thuật gấp giấy đối xứng và trổ hoa văn tinh xảo bằng dao trổ chuyên dụng an toàn.',
        dc: '• [Mã NLS: 1.2.TC2b] Xem các video hướng dẫn nghệ thuật trổ giấy Kirigami bậc thầy trên Internet.\n• [Mã AI: 8.D1.1] Dùng AI tạo các mẫu hoa văn trổ giấy đối xứng phức hợp (Papercut Pattern AI).'
      },
      {
        w: 21,
        t: 'Chủ đề 5: Vẻ đẹp trong lao động',
        n: 'Chủ đề 5: Vẻ đẹp trong lao động - Bài 10: Nghệ thuật trổ giấy trong trang trí (Thực hành hoàn thiện sản phẩm trổ giấy) (1 tiết)',
        y: '- Thực hành hoàn thiện một sản phẩm trổ giấy trang trí (đèn lồng giấy, tranh trổ giấy nhiều lớp lightbox, thiệp trổ giấy nghệ thuật).\n- Rèn luyện tính cẩn thận, kiên nhẫn, đôi bàn tay khéo léo và óc sáng tạo tinh tế.',
        dc: '• [Mã NLS: 3.2.TC2a] Chụp ảnh sản phẩm trổ giấy kết hợp đèn chiếu sáng nghệ thuật để lưu vào portfolio số.\n• [Mã AI: 8.A1.1] Tôn vinh sự tỉ mỉ, kiên nhẫn và bàn tay tài hoa của nghệ nhân thủ công truyền thống.'
      },
      {
        w: 22,
        t: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật',
        n: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật - Bài 11: Phương tiện giao thông công cộng trong sáng tạo mĩ thuật (1 tiết)',
        y: '- Quan sát và nhận diện hình khối, đặc điểm của các phương tiện giao thông công cộng hiện đại và thân thiện môi trường (xe buýt điện, tàu điện trên cao Metro, tàu hỏa, xe đạp công cộng).\n- Thực hành vẽ tranh cổ động lối sống xanh, khuyến khích sử dụng phương tiện giao thông công cộng.',
        dc: '• [Mã NLS: 1.1.TC2c] Tìm kiếm hình ảnh hệ thống giao thông công cộng thông minh tại các đô thị hiện đại trên thế giới.\n• [Mã AI: 8.C2.1] Khám phá cách AI điều phối giao thông thông minh và giảm thiểu ùn tắc, ô nhiễm khí thải.'
      },
      {
        w: 23,
        t: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật',
        n: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật - Bài 12: Thiết kế, trang trí áo phông (Phác thảo mẫu thiết kế) (1 tiết)',
        y: '- Nắm vững quy trình thiết kế đồ họa ứng dụng trên trang phục (chọn vị trí in ngực áo/lưng áo, phối màu hình in hài hòa với màu nền áo, thông điệp truyền tải ngắn gọn).\n- Phác thảo mẫu thiết kế trang trí áo phông với chủ đề Giao thông xanh hoặc Học đường năng động.',
        dc: '• [Mã NLS: 3.1.TC2b] Sử dụng phần mềm thiết kế đồ họa tạo mockup áo phông số (T-shirt Mockup Generator).\n• [Mã AI: 8.D2.1] Trải nghiệm AI gợi ý slogan và biểu tượng đồ họa ấn tượng cho áo đồng phục lớp.'
      },
      {
        w: 24,
        t: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật',
        n: 'Chủ đề 6: Giao thông công cộng trong sáng tạo mĩ thuật - Bài 12: Thiết kế, trang trí áo phông (Hoàn thiện và trưng bày mẫu áo) (1 tiết)',
        y: '- Thực hành hoàn thiện sản phẩm trang trí áo phông bằng màu vẽ vải acrylic hoặc kỹ thuật in stencil/chuyển nhiệt thủ công.\n- Trưng bày và trình diễn bộ sưu tập áo phông tự thiết kế của lớp.',
        dc: '• [Mã NLS: 3.2.TC2a] Biên tập video lookbook trình diễn bộ sưu tập áo phông của học sinh trong lớp.\n• [Mã AI: 8.B1.1] Nêu cao ý thức tôn trọng quyền tác giả các mẫu hình in và không sao chép trái phép thương hiệu nổi tiếng.'
      },
      {
        w: 25,
        t: 'Chủ đề 7: Mĩ thuật Việt Nam thời kì hiện đại',
        n: 'Chủ đề 7: Mĩ thuật Việt Nam thời kì hiện đại - Bài 13: Một số tác giả, tác phẩm mĩ thuật Việt Nam thời kì hiện đại (1 tiết)',
        y: '- Tìm hiểu các thế hệ họa sĩ, nhà điêu khắc tiêu biểu thời kì kháng chiến và đổi mới (Tô Ngọc Vân, Nguyễn Sáng, Bùi Xuân Phái, Huỳnh Văn Gấm, Diệp Minh Châu).\n- Phân tích các kiệt tác nghệ thuật: Kết nạp Đảng ở Điện Biên Phủ, Phố cổ Hà Nội, Bác Hồ với thiếu nhi ba miền.',
        dc: '• [Mã NLS: 1.1.TC2b] Tham quan bảo tàng số chiêm ngưỡng các tác phẩm Bảo vật quốc gia của Mĩ thuật hiện đại Việt Nam.\n• [Mã AI: 8.A1.1] Khẳng định giá trị lịch sử và tinh thần yêu nước quật cường gửi gắm qua từng nét vẽ của thế hệ họa sĩ tiền bối.'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp 8',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình người lao động, trổ giấy, thiết kế áo phông và mĩ thuật hiện đại từ Tuần 19 đến Tuần 25.\n- Đánh giá năng lực sáng tạo ứng dụng, kĩ thuật thủ công và tư duy thẩm mỹ.',
        dc: '• [Mã NLS: 3.2.TC2a] Chụp ảnh và lưu trữ bài kiểm tra vào hồ sơ đánh giá năng lực số của học sinh.\n• [Mã AI: 8.A3.3] Thực hiện nghiêm túc quy trình kiểm tra đánh giá minh bạch.'
      },
      {
        w: 27,
        t: 'Chủ đề 7: Mĩ thuật Việt Nam thời kì hiện đại',
        n: 'Chủ đề 7: Mĩ thuật Việt Nam thời kì hiện đại - Bài 14: Nghệ thuật thiết kế Việt Nam thời kì hiện đại (1 tiết)',
        y: '- Nhận biết sự phát triển của các ngành thiết kế đương đại tại Việt Nam: Thiết kế đồ họa (Graphic Design), Thiết kế nội thất (Interior Design), Thiết kế công nghiệp (Industrial Design), Thiết kế thời trang (Fashion Design).\n- Thực hành thiết kế một sản phẩm bao bì hoặc đồ họa nhận diện mang phong cách hiện đại Việt Nam.',
        dc: '• [Mã NLS: 3.1.TC2b] Sử dụng công cụ thiết kế số để tạo mẫu bao bì sản phẩm nông sản sạch quê hương.\n• [Mã AI: 8.D1.1] Khám phá cách AI hỗ trợ các nhà thiết kế tạo mockup bao bì 3D và thử nghiệm các phương án nhận diện thương hiệu.'
      },
      {
        w: 28,
        t: 'Chủ đề 8: Hướng nghiệp',
        n: 'Chủ đề 8: Hướng nghiệp - Bài 15: Ngành, nghề liên quan đến mĩ thuật tạo hình (1 tiết)',
        y: '- Nhận biết và phân loại các ngành nghề thuộc lĩnh vực mĩ thuật tạo hình: Họa sĩ hội họa, Họa sĩ minh họa sách báo, Điêu khắc gia, Giảng viên/Giáo viên mĩ thuật, Chuyên viên phục chế tác phẩm nghệ thuật, Nghệ sĩ gốm sứ.\n- Đánh giá năng khiếu, sở thích và sự phù hợp của bản thân với các ngành nghề tạo hình.',
        dc: '• [Mã NLS: 1.1.TC2d] Tra cứu thông tin tuyển sinh và cơ hội nghề nghiệp tại các trường đại học mĩ thuật, kiến trúc.\n• [Mã AI: 8.A1.1] Thảo luận về những kĩ năng sáng tạo nghệ thuật cốt lõi của con người mà AI không thể thay thế trong tương lai.'
      },
      {
        w: 29,
        t: 'Chủ đề 8: Hướng nghiệp',
        n: 'Chủ đề 8: Hướng nghiệp - Bài 16: Đặc trưng của ngành, nghề liên quan đến mĩ thuật tạo hình (1 tiết)',
        y: '- Nắm vững các yêu cầu về phẩm chất (tính kiên trì, đam mê cái đẹp, óc quan sát nhạy bén) và năng lực chuyên môn (kĩ năng vẽ hình thể, cảm thụ màu sắc, tư duy không gian) của người làm nghề mĩ thuật tạo hình.\n- Xây dựng bản kế hoạch rèn luyện cá nhân để phát triển năng khiếu nghệ thuật.',
        dc: '• [Mã NLS: 1.3.TC2b] Thiết kế bảng lộ trình phát triển kĩ năng nghệ thuật cá nhân bằng công cụ số.\n• [Mã AI: 8.D2.1] Sử dụng chatbot AI tư vấn định hướng nghề nghiệp và gợi ý các khóa học mĩ thuật trực tuyến phù hợp.'
      },
      {
        w: 30,
        t: 'Chủ đề 8: Hướng nghiệp',
        n: 'Kiểm tra, trưng bày sản phẩm cuối năm môn Mĩ thuật Lớp 8 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
        y: '- Rà soát, hoàn thiện và đóng khung toàn bộ các sản phẩm mĩ thuật đã sáng tạo trong cả năm học Lớp 8.\n- Chuẩn bị portfolio nghệ thuật cá nhân và phân công ban tổ chức triển lãm cuối năm.',
        dc: '• [Mã NLS: 1.3.TC2b] Hoàn thiện bộ hồ sơ nghệ thuật số (Digital Art Portfolio) cả năm Lớp 8.\n• [Mã AI: 8.D1.1] Sử dụng AI hỗ trợ viết phần giới thiệu bản thân (Artist Statement) cho hồ sơ nghệ thuật.'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp 8',
        y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn kiến thức, kĩ năng môn Mĩ thuật Lớp 8 cả năm học.\n- Đánh giá toàn diện năng lực sáng tạo tạo hình, tư duy thiết kế ứng dụng và định hướng nghề nghiệp nghệ thuật.',
        dc: '• [Mã NLS: 3.2.TC2a] Lưu trữ toàn bộ kết quả và hình ảnh bài thi vào học bạ điện tử của học sinh.\n• [Mã AI: 8.A3.3] Tự đánh giá và đối chiếu năng lực mĩ thuật cá nhân theo chuẩn đầu ra CT GDPT 2018.'
      },
      {
        w: 32,
        t: 'Chữa bài & Hoàn thiện',
        n: 'Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm Lớp 8 (1 tiết)',
        y: '- Nhận xét, chữa bài kiểm tra cuối năm; biểu dương những tác phẩm có phong cách cá nhân độc đáo và kĩ thuật xuất sắc.\n- Hướng dẫn học sinh hoàn thiện tác phẩm đạt tiêu chuẩn cao nhất cho Triển lãm dự án.',
        dc: '• [Mã NLS: 5.4.TC2a] Xem báo cáo phân tích kĩ năng mĩ thuật số hóa để tự xây dựng mục tiêu học tập Lớp 9.\n• [Mã AI: 8.D1.1] Nhận gợi ý từ AI về các chủ đề sáng tạo nghệ thuật đương đại chuẩn bị cho Lớp 9.'
      },
      {
        w: 33,
        t: 'Dự án Mĩ thuật',
        n: 'Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp 8 (1 tiết)',
        y: '- Tổ chức Triển lãm Mĩ thuật với chủ đề "Mĩ thuật Hiện đại và Khát vọng Tương lai".\n- Thể hiện sự tự tin, năng lực làm việc nhóm, kĩ năng tổ chức sự kiện nghệ thuật và truyền cảm hứng thẩm mỹ.',
        dc: '• [Mã NLS: 3.2.TC2a] Thiết kế trang triển lãm tranh tương tác 3D trực tuyến và chia sẻ rộng rãi trong cộng đồng học đường.\n• [Mã AI: 8.D1.1] Sử dụng AI dựng video trailer giới thiệu sự kiện triển lãm với âm nhạc và visual ấn tượng.'
      },
      {
        w: 34,
        t: 'Ôn tập tổng hợp',
        n: 'Ôn tập toàn diện kiến thức nghệ thuật tạo hình và thiết kế mĩ thuật cả năm Lớp 8 (1 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức 8 chủ đề mĩ thuật Lớp 8: Tỉ lệ con người, các trường phái Ấn tượng/Dã thú/Lập thể, nghệ thuật trổ giấy, thiết kế thời trang/áo phông, hướng nghiệp tạo hình.\n- Chuẩn bị vững chắc nền tảng tư duy sáng tạo bước vào năm học cuối cấp THCS.',
        dc: '• [Mã NLS: 1.3.TC2b] Đóng gói và lưu trữ an toàn hồ sơ nghệ thuật số cả năm Lớp 8 trên nền tảng đám mây.\n• [Mã AI: 8.C1.1] Khám phá các công nghệ sáng tạo nghệ thuật mới kết hợp giữa AI và hội họa trong nền kinh tế số.'
      },
      {
        w: 35,
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật Lớp 8 toàn trường (1 tiết)',
        y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Mĩ thuật Lớp 8 cả năm học.\n- Biểu dương các học sinh đạt thành tích xuất sắc và khuyến khích nuôi dưỡng đam mê nghệ thuật.',
        dc: '• [Mã NLS: 2.2.TC2a] Đăng tải toàn bộ hình ảnh và video tư liệu triển lãm tổng kết lên thư viện số của nhà trường.\n• [Mã AI: 8.A1.1] Khẳng định vai trò đồng hành sáng tạo của AI và vị thế trung tâm của con người trong thưởng thức nghệ thuật.'
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
        equipment: 'Giấy vẽ A3/A4, màu goát, acrylic, màu nước, giấy màu trổ hoa văn, dao trổ an toàn, áo phông trơn, cọ vẽ, máy chiếu',
        location: 'Phòng học bộ môn Mĩ thuật / Sảnh triển lãm',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Không gian Sáng tạo' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. MĨ THUẬT LỚP 9 (35 TIẾT) - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // =========================================================================
  const grade9Lessons = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Chủ đề 1: Cuộc sống muôn màu',
      n: 'Chủ đề 1: Cuộc sống muôn màu - Bài 1: Vẻ đẹp cuộc sống trong tác phẩm mĩ thuật (1 tiết)',
      y: '- Quan sát và cảm nhận sự đa dạng muôn màu của cuộc sống đương đại được phản ánh qua lăng kính mĩ thuật (nhịp sống đô thị hiện đại, phong cảnh thiên nhiên hùng vĩ, đời sống sinh hoạt bình dị).\n- Thực hành phác thảo và vẽ tranh thể hiện một góc nhìn sâu sắc, giàu triết lý nhân văn về cuộc sống.',
      dc: '• [Mã NLS: 1.1.TC2b] Tìm kiếm và phân tích các tác phẩm mĩ thuật đương đại đoạt giải thưởng lớn trên thế giới.\n• [Mã AI: 9.C2.1] Trải nghiệm ứng dụng AI phân tích phong cách tạo hình và bố cục không gian trong tranh đương đại.'
    },
    {
      w: 2,
      t: 'Chủ đề 1: Cuộc sống muôn màu',
      n: 'Chủ đề 1: Cuộc sống muôn màu - Bài 2: Thiết kế phụ kiện thời trang (1 tiết)',
      y: '- Nắm vững nguyên lý thiết kế phụ kiện thời trang (túi xách, balo, mũ nón, trang sức vòng cổ/vòng tay, khăn choàng) hài hòa với trang phục và cá tính người sử dụng.\n- Thực hành thiết kế bản vẽ hoặc làm sản phẩm phụ kiện thời trang độc đáo từ vật liệu tái chế hoặc da nhân tạo, vải canvas.',
      dc: '• [Mã NLS: 3.1.TC2b] Sử dụng phần mềm thiết kế đồ họa 2D/3D để tạo bản vẽ kỹ thuật chi tiết cho phụ kiện thời trang.\n• [Mã AI: 9.D1.1] Khám phá công cụ AI gợi ý xu hướng thời trang (Trend Forecasting AI) và phối màu phụ kiện.'
    },
    {
      w: 3,
      t: 'Chủ đề 2: Nghệ thuật đương đại thế giới',
      n: 'Chủ đề 2: Nghệ thuật đương đại thế giới - Bài 3: Một số trào lưu của nghệ thuật đương đại thế giới (Trừu tượng & Nghệ thuật đại chúng Pop Art) (1 tiết)',
      y: '- Nhận biết đặc trưng của nghệ thuật Trừu tượng (Abstract Art - Kandinsky, Mondrian) giải phóng hình thể, biểu đạt cảm xúc thuần khiết bằng màu sắc và đường nét; nghệ thuật Đại chúng (Pop Art - Andy Warhol) đưa hình ảnh đời thường, văn hóa đại chúng vào nghệ thuật.\n- Thực hành sáng tạo một tác phẩm theo phong cách Pop Art hoặc Trừu tượng.',
      dc: '• [Mã NLS: 1.2.TC2a] Tham quan các triển lãm nghệ thuật đương đại quốc tế trực tuyến (MoMA New York, Tate Modern London).\n• [Mã AI: 9.A1.1] Thảo luận về ranh giới giữa sáng tạo nghệ thuật đích thực của con người và tác phẩm do AI tạo sinh (Generative AI).'
    },
    {
      w: 4,
      t: 'Chủ đề 2: Nghệ thuật đương đại thế giới',
      n: 'Chủ đề 2: Nghệ thuật đương đại thế giới - Bài 3: Một số trào lưu của nghệ thuật đương đại thế giới (Nghệ thuật Sắp đặt & Trình diễn) (1 tiết)',
      y: '- Tìm hiểu khái niệm và đặc trưng của Nghệ thuật Sắp đặt (Installation Art) và Nghệ thuật Trình diễn (Performance Art).\n- Hiểu cách người nghệ sĩ đương đại tương tác với không gian, khán giả và thông điệp xã hội.',
      dc: '• [Mã NLS: 1.1.TC2d] Xem các video clip ghi lại các tác phẩm nghệ thuật sắp đặt và trình diễn ấn tượng trên thế giới.\n• [Mã AI: 9.C4.1] Khám phá cách AI xử lý dữ liệu cảm biến thời gian thực để tạo ra các tác phẩm sắp đặt tương tác số.'
    },
    {
      w: 5,
      t: 'Chủ đề 2: Nghệ thuật đương đại thế giới',
      n: 'Chủ đề 2: Nghệ thuật đương đại thế giới - Bài 4: Thiết kế giá đỡ thiết bị công nghệ (1 tiết)',
      y: '- Nắm vững nguyên lý thiết kế công nghiệp (Industrial Design): Tính công năng (độ vững chắc, góc nghiêng thuận tiện mắt nhìn), tính thẩm mỹ và tính an toàn công thái học (Ergonomics).\n- Thực hành thiết kế và chế tạo mô hình giá đỡ điện thoại/máy tính bảng từ bìa cứng, que gỗ hoặc nhựa tái chế.',
      dc: '• [Mã NLS: 3.2.TC2a] Vẽ bản vẽ thiết kế kỹ thuật hình chiếu đứng, hình chiếu bằng của giá đỡ thiết bị trên máy tính.\n• [Mã AI: 9.D1.1] Trải nghiệm công cụ AI tối ưu hóa hình dáng kết cấu chịu lực (Generative Design AI).'
    },
    {
      w: 6,
      t: 'Chủ đề 3: Thiết kế mĩ thuật sách',
      n: 'Chủ đề 3: Thiết kế mĩ thuật sách - Bài 5: Thiết kế bìa sách (Khám phá nghệ thuật bìa sách) (1 tiết)',
      y: '- Nắm vững các thành phần cấu tạo của một bìa sách (tên sách, tên tác giả, tên nhà xuất bản, hình ảnh minh họa biểu trưng, gáy sách, bìa sau với mã vạch và tóm tắt nội dung).\n- Lên ý tưởng và phác thảo bố cục bìa sách cho một cuốn sách văn học hoặc khoa học yêu thích.',
      dc: '• [Mã NLS: 2.1.TC2b] Tìm kiếm và phân tích các mẫu bìa sách đẹp đoạt giải thưởng thiết kế sách quốc gia.\n• [Mã AI: 9.D1.1] Sử dụng AI gợi ý ý tưởng hình ảnh ẩn dụ (visual metaphor) phù hợp với cốt truyện cuốn sách.'
    },
    {
      w: 7,
      t: 'Chủ đề 3: Thiết kế mĩ thuật sách',
      n: 'Chủ đề 3: Thiết kế mĩ thuật sách - Bài 5: Thiết kế bìa sách (Thực hành hoàn thiện bìa sách) (1 tiết)',
      y: '- Thực hành hoàn thiện thiết kế bìa sách bằng vẽ tay kết hợp thủ công hoặc thiết kế đồ họa vi tính (Canva / Photoshop).\n- Đảm bảo tính hài hòa giữa nghệ thuật chữ (Typography), hình ảnh minh họa và màu sắc biểu cảm.',
      dc: '• [Mã NLS: 3.2.TC2a] Xuất bản file in ấn bìa sách chuẩn chất lượng cao và tạo bản dựng 3D mockup sách ảo.\n• [Mã AI: 9.B2.3] Nâng cao ý thức tôn trọng luật bản quyền tác giả khi sử dụng hình ảnh minh họa trong thiết kế bìa sách.'
    },
    {
      w: 8,
      t: 'Chủ đề 3: Thiết kế mĩ thuật sách',
      n: 'Chủ đề 3: Thiết kế mĩ thuật sách - Bài 6: Tranh minh hoạ (1 tiết)',
      y: '- Hiểu vai trò của tranh minh họa trong việc làm sáng rõ nội dung câu chuyện, khơi gợi trí tưởng tượng và tạo cảm xúc thẩm mỹ cho người đọc.\n- Thực hành vẽ tranh minh họa cho một đoạn trích truyện cổ tích, tác phẩm văn học hoặc bài thơ trong chương trình Ngữ văn THCS.',
      dc: '• [Mã NLS: 3.1.TC2b] Số hóa bức tranh minh họa và chèn vào trang sách điện tử (E-book layout).\n• [Mã AI: 9.A1.1] So sánh sự phong phú trong trí tưởng tượng và cảm xúc cá nhân của học sinh với tranh minh họa AI.'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp 9',
      y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng nghệ thuật đương đại, thiết kế phụ kiện, thiết kế bìa sách và tranh minh họa từ Tuần 1 đến Tuần 8.\n- Đánh giá năng lực sáng tạo độc lập, tư duy thiết kế chuyên nghiệp và kĩ thuật thể hiện.',
      dc: '• [Mã NLS: 3.2.TC2a] Lưu trữ tác phẩm kiểm tra vào hồ sơ nghệ thuật số của học sinh.\n• [Mã AI: 9.A3.1] Thực hiện đánh giá trung thực, phát huy tinh thần tự chủ trong học tập.'
    },
    {
      w: 10,
      t: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật',
      n: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật - Bài 7: Cảm hứng trong sáng tác hội hoạ (1 tiết)',
      y: '- Tìm hiểu các nguồn cảm hứng sáng tạo phong phú trong nghệ thuật (từ thiên nhiên, kí ức tuổi thơ, tình yêu thương, âm nhạc, văn học, các vấn đề xã hội đương đại).\n- Thực hành phác thảo và vẽ một bức tranh hội họa tự chọn xuất phát từ cảm xúc chân thật và niềm đam mê cá nhân.',
      dc: '• [Mã NLS: 1.1.TC2b] Xem các video chia sẻ về hành trình tìm kiếm cảm hứng sáng tạo của các nghệ sĩ nổi tiếng.\n• [Mã AI: 9.D1.1] Khám phá cách AI có thể đóng vai trò đối tác gợi mở ý tưởng (co-creator) trong giai đoạn phác thảo ban đầu.'
    },
    {
      w: 11,
      t: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật',
      n: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật - Bài 8: Thiết kế hình ảnh nhận diện thương hiệu (Khám phá hệ thống nhận diện) (1 tiết)',
      y: '- Nắm vững khái niệm và vai trò của Hệ thống nhận diện thương hiệu (Brand Identity): Logo, bảng màu thương hiệu, kiểu chữ quy chuẩn, danh thiếp (Namecard), phong bì thư, đồng phục, túi đựng sản phẩm.\n- Lên ý tưởng xây dựng bộ nhận diện thương hiệu cho một dự án khởi nghiệp học đường (ví dụ: CLB Sách, Tiệm trà xanh, Đồ handmade).',
      dc: '• [Mã NLS: 2.2.TC2c] Khảo sát và phân tích các bộ nhận diện thương hiệu chuyên nghiệp trên các nền tảng thiết kế quốc tế (Behance, Dribbble).\n• [Mã AI: 9.C2.1] Trải nghiệm công cụ AI tạo bộ nhận diện thương hiệu tự động (Brand Identity AI Generator).'
    },
    {
      w: 12,
      t: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật',
      n: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật - Bài 8: Thiết kế hình ảnh nhận diện thương hiệu (Hoàn thiện bộ nhận diện) (1 tiết)',
      y: '- Thực hành hoàn thiện trọn bộ sản phẩm nhận diện thương hiệu (Logo + Namecard + Mockup sản phẩm) bằng phần mềm thiết kế đồ họa.\n- Trình bày thuyết minh bản hướng dẫn sử dụng thương hiệu (Brand Guideline) trước tập thể lớp.',
      dc: '• [Mã NLS: 3.2.TC2a] Thiết kế cuốn cẩm nang nhận diện thương hiệu số (Brandbook PDF) chuyên nghiệp.\n• [Mã AI: 9.D1.1] Dùng AI kiểm tra tính nhất quán (consistency) về màu sắc và bố cục trên các ấn phẩm thương hiệu.'
    },
    {
      w: 13,
      t: 'Chủ đề 4: Cảm hứng trong sáng tác mĩ thuật',
      n: 'Kiểm tra, trưng bày sản phẩm cuối học kì I môn Mĩ thuật Lớp 9 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
      y: '- Rà soát, hoàn thiện và đóng khung các tác phẩm mĩ thuật đã thực hiện trong học kì 1 (bìa sách, tranh minh họa, bộ nhận diện thương hiệu).\n- Lập danh mục tác phẩm và chuẩn bị không gian trưng bày triển lãm HK1.',
      dc: '• [Mã NLS: 1.3.TC2a] Hệ thống hóa toàn bộ tác phẩm HK1 vào không gian lưu trữ số cá nhân.\n• [Mã AI: 9.D1.1] Dùng AI hỗ trợ viết bản giới thiệu phong cách thiết kế cho từng sản phẩm trưng bày.'
    },
    {
      w: 14,
      t: 'Ôn tập học kì 1',
      n: 'Ôn tập học kì 1: Ôn tập kiến thức nghệ thuật đương đại và thiết kế ứng dụng HK1 Lớp 9 (1 tiết)',
      y: '- Hệ thống hóa các kiến thức trọng tâm: Pop Art, Trừu tượng, thiết kế giá đỡ, bìa sách, tranh minh họa, nhận diện thương hiệu.\n- Nâng cao tư duy phản biện nghệ thuật và năng lực thẩm mỹ chuyên sâu.',
      dc: '• [Mã NLS: 2.5.TC2b] Tham gia đấu trường kiến thức mĩ thuật trực tuyến giữa các lớp khối 9.\n• [Mã AI: 9.C2.1] Chatbot AI hỗ trợ ôn tập, phân tích sự phát triển của thiết kế đồ họa trong kỉ nguyên số.'
    },
    {
      w: 15,
      t: 'Ôn tập học kì 1',
      n: 'Hoàn thiện hồ sơ sản phẩm mĩ thuật và maket triển lãm HK1 Lớp 9 (1 tiết)',
      y: '- Hoàn thiện maket trang trí không gian triển lãm mĩ thuật HK1 của lớp.\n- Luyện tập kĩ năng thuyết trình, bảo vệ đồ án thiết kế trước hội đồng lớp.',
      dc: '• [Mã NLS: 2.4.TC2a] Hợp tác trực tuyến xây dựng sơ đồ phân khu trưng bày triển lãm của lớp.\n• [Mã AI: 9.D1.1] Ứng dụng AI mô phỏng không gian triển lãm 3D để tối ưu hóa trải nghiệm khách tham quan.'
    },
    {
      w: 16,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Mĩ thuật Lớp 9',
      y: '- Đánh giá tổng hợp toàn diện năng lực sáng tạo mĩ thuật, tư duy thiết kế đồ họa và ý thức học tập trong toàn bộ Học kỳ 1.\n- Phân hóa năng lực chuyên môn và phong cách nghệ thuật cá nhân của học sinh cuối cấp.',
      dc: '• [Mã NLS: 3.1.TC2b] Lưu trữ ảnh chất lượng cao của tác phẩm kiểm tra vào hồ sơ học sinh điện tử cấp THCS.\n• [Mã AI: 9.A3.1] Thực hiện nghiêm túc quy chế đánh giá số hóa, đề cao tính liêm chính học thuật.'
    },
    {
      w: 17,
      t: 'Chữa bài & Hoàn thiện',
      n: 'Chữa bài kiểm tra cuối HK1 & Hoàn thiện sản phẩm mĩ thuật HK1 Lớp 9 (1 tiết)',
      y: '- Nhận xét, chữa bài kiểm tra cuối học kì 1; phân tích các ưu điểm và điểm cần điều chỉnh về thẩm mỹ, công năng.\n- Hướng dẫn học sinh hoàn thiện nâng cao chất lượng tác phẩm.',
      dc: '• [Mã NLS: 5.4.TC2a] Tự đánh giá và hoàn thiện kế hoạch phát triển năng lực mĩ thuật cá nhân.\n• [Mã AI: 9.D1.1] Nhận lộ trình bài tập tự luyện nâng cao từ hệ thống trợ lí học tập AI.'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Sơ kết Học kỳ 1 & Trưng bày không gian sáng tạo mĩ thuật HK1 Lớp 9 (1 tiết)',
      y: '- Tổ chức trưng bày triển lãm mĩ thuật HK1 của lớp; tự tin thuyết trình về đồ án thiết kế cá nhân/nhóm.\n- Sơ kết hoạt động mĩ thuật HK1 và tạo động lực sáng tạo bước vào học kì cuối cùng của cấp THCS.',
      dc: '• [Mã NLS: 3.2.TC2a] Xây dựng phòng triển lãm tranh ảo 3D tương tác cho toàn bộ tác phẩm HK1 khối 9.\n• [Mã AI: 9.A1.1] Ứng dụng AI biên tập video recap sự kiện triển lãm với chất lượng hình ảnh và âm thanh cao cấp.'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Chủ đề 5: Vẻ đẹp của nguyên mẫu trong thực hành, sáng tạo',
      n: 'Chủ đề 5: Vẻ đẹp của nguyên mẫu trong thực hành, sáng tạo - Bài 9: Tỉ lệ và hình khối của đồ vật (1 tiết)',
      y: '- Quan sát và phân tích cấu trúc hình khối không gian, tương quan tỉ lệ, bề mặt chất cảm và sự biến đổi hình dáng của các đồ vật xung quanh.\n- Thực hành vẽ nghiên cứu hình khối tĩnh vật phức hợp hoặc tạo hình đồ vật theo phương pháp cách điệu hóa.',
      dc: '• [Mã NLS: 1.1.TC2b] Chụp ảnh đồ vật dưới nhiều góc độ và sử dụng phần mềm phân tích lưới dựng hình 3D.\n• [Mã AI: 9.C2.1] Khám phá cách AI tái tạo mô hình 3D từ ảnh chụp 2D (2D to 3D Mesh AI).'
    },
    {
      w: 20,
      t: 'Chủ đề 5: Vẻ đẹp của nguyên mẫu trong thực hành, sáng tạo',
      n: 'Chủ đề 5: Vẻ đẹp của nguyên mẫu trong thực hành, sáng tạo - Bài 10: Nguyên mẫu trong tác phẩm điêu khắc (1 tiết)',
      y: '- Tìm hiểu cách các nhà điêu khắc chắt lọc hình tượng từ nguyên mẫu con người, động vật, thiên nhiên để sáng tạo nên các tác phẩm tượng tròn và phù điêu mang tính biểu tượng cao.\n- Thực hành đắp tượng tròn hoặc nặn phù điêu từ đất sét, thạch cao hoặc xà phòng theo nguyên mẫu tự chọn.',
      dc: '• [Mã NLS: 1.2.TC2b] Xem các video tư liệu về quá trình đục khắc tượng đá, tạc gỗ của các nghệ nhân điêu khắc.\n• [Mã AI: 9.A1.1] Nhận diện sự tinh xảo và cảm xúc chân thật trong tác phẩm điêu khắc thủ công của con người.'
    },
    {
      w: 21,
      t: 'Chủ đề 6: Nghệ thuật múa rối',
      n: 'Chủ đề 6: Nghệ thuật múa rối - Bài 11: Vẻ đẹp tạo hình con rối (Khám phá các loại hình nghệ thuật múa rối) (1 tiết)',
      y: '- Nhận biết đặc trưng tạo hình của các loại hình múa rối: Rối tay (rối găng), Rối que, Rối dây (Marionette), Rối bóng (Shadow puppet).\n- Phân tích nét mặt, phục trang, tính cách và sự biểu cảm độc đáo của các nhân vật con rối.',
      dc: '• [Mã NLS: 1.1.TC2d] Khám phá nghệ thuật múa rối cổ truyền các quốc gia trên thế giới qua tư liệu đa phương tiện.\n• [Mã AI: 9.C5.1] Trải nghiệm AI nhận diện chuyển động cơ thể người và điều khiển nhân vật hoạt hình ảo (Motion Capture AI).'
    },
    {
      w: 22,
      t: 'Chủ đề 6: Nghệ thuật múa rối',
      n: 'Chủ đề 6: Nghệ thuật múa rối - Bài 12: Tạo hình nhân vật múa rối nước (Nghệ thuật Múa rối nước Việt Nam) (1 tiết)',
      y: '- Hiểu giá trị độc nhất vô nhị của Múa rối nước - Di sản văn hóa phi vật thể đặc sắc của nền văn minh lúa nước đồng bằng Bắc Bộ.\n- Phân tích nghệ thuật tạo hình nhân vật Chú Tễu, Tiên nữ, Rồng nước, Lân ngậm ngọc đẽo từ gỗ sung, phủ sơn ta chịu nước.',
      dc: '• [Mã NLS: 1.1.TC2b] Xem phóng sự số về phường rối nước làng Đào Thục, làng Đồng Ngư trên mạng Internet.\n• [Mã AI: 9.A1.1] Khẳng định bản sắc văn hóa độc bản của nghệ thuật Múa rối nước Việt Nam trước công chúng quốc tế.'
    },
    {
      w: 23,
      t: 'Chủ đề 6: Nghệ thuật múa rối',
      n: 'Chủ đề 6: Nghệ thuật múa rối - Bài 12: Tạo hình nhân vật múa rối nước (Thực hành tạo hình con rối) (1 tiết)',
      y: '- Thực hành tạo hình một nhân vật con rối (Chú Tễu, Chị Tấm, Chú Cuội...) từ đất nặn, gỗ nhẹ, xốp EVA hoặc chai lọ tái chế.\n- Thể hiện sự khéo léo, nét mặt tươi vui hóm hỉnh và tính cách đặc trưng của nhân vật.',
      dc: '• [Mã NLS: 3.2.TC2a] Quay clip biểu diễn điều khiển con rối tự làm trên nền nhạc dân ca truyền thống.\n• [Mã AI: 9.D1.1] Dùng AI hỗ trợ viết kịch bản hoạt cảnh múa rối ngắn mang thông điệp giáo dục ý nghĩa.'
    },
    {
      w: 24,
      t: 'Chủ đề 7: Mĩ thuật đương đại Việt Nam',
      n: 'Chủ đề 7: Mĩ thuật đương đại Việt Nam - Bài 13: Khuynh hướng sáng tác mĩ thuật (1 tiết)',
      y: '- Nhận biết các khuynh hướng sáng tác tiêu biểu của Mĩ thuật đương đại Việt Nam: Tìm về cội nguồn di sản, Khám phá tâm lý con người trong xã hội hiện đại, Nghệ thuật sinh thái (Eco Art), Nghệ thuật thị giác kỹ thuật số (Digital Art).\n- Thực hành sáng tạo một tác phẩm mĩ thuật phản ánh suy nghĩ, trăn trở của bản thân về môi trường hoặc cuộc sống số.',
      dc: '• [Mã NLS: 2.1.TC2b] Tìm hiểu các nghệ sĩ đương đại Việt Nam tiêu biểu và tác phẩm của họ trên không gian mạng.\n• [Mã AI: 9.A1.1] Khẳng định vai trò làm chủ công nghệ và tiếng nói nghệ thuật độc lập của người nghệ sĩ.'
    },
    {
      w: 25,
      t: 'Chủ đề 7: Mĩ thuật đương đại Việt Nam',
      n: 'Chủ đề 7: Mĩ thuật đương đại Việt Nam - Bài 14: Thiết kế sản phẩm đồ gia dụng từ vật liệu đã qua sử dụng (1 tiết)',
      y: '- Nắm vững nguyên tắc thiết kế Tái chế nâng cấp (Upcycling Design): Tận dụng vật liệu thải loại (chai nhựa, lốp xe, vỏ lon nhôm, bìa carton) để biến đổi thành đồ gia dụng hữu ích và giàu tính thẩm mỹ (chậu cây thông minh, đèn ngủ, hộp đựng đồ đa năng).\n- Thực hành chế tạo hoàn chỉnh một sản phẩm gia dụng tái chế, góp phần bảo vệ môi trường.',
      dc: '• [Mã NLS: 3.2.TC2a] Sản xuất video clip ngắn hướng dẫn cách làm đồ gia dụng tái chế lan tỏa lối sống xanh.\n• [Mã AI: 9.D1.1] Ứng dụng AI phân tích và gợi ý các phương án tái chế tối ưu cho từng loại vật liệu rác thải.'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp 9',
      y: '- Đánh giá mức độ đạt chuẩn kiến thức, kĩ năng tạo hình nguyên mẫu, con rối, mĩ thuật đương đại và sản phẩm tái chế từ Tuần 19 đến Tuần 25.\n- Đánh giá năng lực sáng tạo ứng dụng, kĩ thuật thủ công và tư duy bảo vệ môi trường.',
      dc: '• [Mã NLS: 3.1.TC2b] Chụp ảnh và lưu trữ bài kiểm tra vào hồ sơ đánh giá năng lực số của học sinh.\n• [Mã AI: 9.A3.1] Thực hiện tự kiểm chứng và nghiêm túc tuân thủ quy chế kiểm tra.'
    },
    {
      w: 27,
      t: 'Chủ đề 8: Hướng nghiệp',
      n: 'Chủ đề 8: Hướng nghiệp - Bài 15: Ngành, nghề liên quan đến mĩ thuật ứng dụng (1 tiết)',
      y: '- Nhận biết và phân loại các ngành nghề phát triển mạnh mẽ trong lĩnh vực mĩ thuật ứng dụng: Thiết kế đồ họa (Graphic Designer), Thiết kế giao diện trải nghiệm người dùng (UI/UX Designer), Thiết kế game & hoạt hình 3D (3D Animator), Thiết kế thời trang, Thiết kế nội thất, Thiết kế kiến trúc cảnh quan.\n- Tìm hiểu thị trường lao động và tiềm năng phát triển của các ngành công nghiệp sáng tạo trong kỉ nguyên số.',
      dc: '• [Mã NLS: 1.1.TC2b] Khảo sát thông tin tuyển dụng và yêu cầu kĩ năng của các công ty công nghệ sáng tạo trên mạng.\n• [Mã AI: 9.A3.1] Phân tích xu hướng chuyển dịch việc làm ngành thiết kế dưới tác động của công nghệ AI.'
    },
    {
      w: 28,
      t: 'Chủ đề 8: Hướng nghiệp',
      n: 'Chủ đề 8: Hướng nghiệp - Bài 16: Đặc trưng của ngành, nghề liên quan đến mĩ thuật ứng dụng (1 tiết)',
      y: '- Nắm vững các yêu cầu về năng lực cốt lõi: Tư duy thẩm mỹ, thành thạo công cụ thiết kế số, khả năng giải quyết vấn đề bằng thiết kế, kĩ năng làm việc nhóm và tư duy đổi mới sáng tạo.\n- Tự đánh giá điểm mạnh, sở thích cá nhân và xây dựng kế hoạch học tập, định hướng nghề nghiệp tương lai.',
      dc: '• [Mã NLS: 1.3.TC2b] Thiết kế bản lộ trình nghề nghiệp cá nhân (Career Roadmap) bằng công cụ đồ họa số.\n• [Mã AI: 9.D1.1] Sử dụng AI tư vấn kế hoạch phát triển kĩ năng thiết kế số chuẩn bị cho bậc THPT.'
    },
    {
      w: 29,
      t: 'Chủ đề 8: Hướng nghiệp',
      n: 'Kiểm tra, trưng bày sản phẩm cuối năm môn Mĩ thuật Lớp 9 (Chuẩn bị và hoàn thiện tác phẩm) (1 tiết)',
      y: '- Rà soát, hoàn thiện và đóng khung toàn bộ các sản phẩm mĩ thuật đã sáng tạo trong cả năm học Lớp 9.\n- Chuẩn bị portfolio nghệ thuật cá nhân và phân công ban tổ chức Triển lãm Tốt nghiệp THCS.',
      dc: '• [Mã NLS: 1.3.TC2b] Hoàn thiện bộ hồ sơ nghệ thuật số cá nhân (Digital Art Portfolio) toàn khóa THCS.\n• [Mã AI: 9.D1.1] Sử dụng AI hỗ trợ viết phần giới thiệu hồ sơ năng lực nghệ thuật phục vụ chuyển cấp THPT.'
    },
    {
      w: 30,
      t: 'Ôn tập cuối năm',
      n: 'Ôn tập toàn diện kiến thức nghệ thuật tạo hình và mĩ thuật ứng dụng toàn cấp THCS (1 tiết)',
      y: '- Hệ thống hóa toàn bộ kiến thức 4 năm THCS: Các yếu tố tạo hình (đường nét, hình khối, màu sắc, bố cục, ánh sáng), lịch sử mĩ thuật (Tiền sử, Cổ đại, Trung đại, Hiện đại, Đương đại), các lĩnh vực thiết kế mĩ thuật ứng dụng và hướng nghiệp nghệ thuật.\n- Khẳng định sự trưởng thành về năng lực cảm thụ thẩm mỹ và kĩ năng sáng tạo.',
      dc: '• [Mã NLS: 1.3.TC2b] Xây dựng cổng thông tin số cá nhân tổng kết toàn bộ kiến thức mĩ thuật 4 năm THCS.\n• [Mã AI: 9.D1.1] Sử dụng AI tổng hợp sơ đồ tri thức mĩ thuật toàn diện cấp THCS.'
    },
    {
      w: 31,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Mĩ thuật Lớp 9',
      y: '- Đánh giá tổng kết mức độ hoàn thành chuẩn đầu ra môn Mĩ thuật cấp THCS theo Chương trình GDPT 2018.\n- Đánh giá toàn diện phẩm chất, năng lực thẩm mỹ thị giác và khả năng thực hành sáng tạo nghệ thuật.',
      dc: '• [Mã NLS: 3.2.TC2a] Lưu trữ toàn bộ hồ sơ đánh giá và ảnh chụp tác phẩm vào học bạ điện tử cấp THCS.\n• [Mã AI: 9.A3.1] Khẳng định sự trưởng thành về năng lực tự chủ và trách nhiệm sáng tạo.'
    },
    {
      w: 32,
      t: 'Chữa bài & Hoàn thiện',
      n: 'Chữa bài kiểm tra cuối HK2 & Hoàn thiện sản phẩm mĩ thuật cuối năm Lớp 9 (1 tiết)',
      y: '- Nhận xét, chữa bài kiểm tra cuối năm; tuyên dương thành tích của học sinh toàn khóa.\n- Hướng dẫn học sinh hoàn thiện tác phẩm đạt tiêu chuẩn triển lãm tốt nghiệp.',
      dc: '• [Mã NLS: 5.4.TC2a] Tổng kết sự phát triển năng lực mĩ thuật qua biểu đồ năng lực số 4 năm học.\n• [Mã AI: 9.D1.1] Nhận gợi ý từ AI về các dự án nghệ thuật số cá nhân có thể tự thực hiện trong dịp hè.'
    },
    {
      w: 33,
      t: 'Dự án Mĩ thuật',
      n: 'Báo cáo và Triển lãm Dự án Không gian Sáng tạo Mĩ thuật THCS Lớp 9 (1 tiết)',
      y: '- Tổ chức Triển lãm Mĩ thuật Tốt nghiệp THCS với chủ đề "Dấu ấn Sáng tạo Tuổi 15".\n- Thể hiện sự tự tin, bản lĩnh, năng lực làm việc nhóm và kĩ năng tổ chức sự kiện nghệ thuật chuyên nghiệp.',
      dc: '• [Mã NLS: 3.2.TC2a] Xây dựng không gian triển lãm nghệ thuật thực tế ảo 3D VR tương tác cho toàn trường.\n• [Mã AI: 9.D1.1] Sử dụng AI dựng video trailer giới thiệu sự kiện triển lãm với âm nhạc và visual ấn tượng.'
    },
    {
      w: 34,
      t: 'Ôn tập tổng hợp',
      n: 'Ôn tập tổng hợp và định hướng mĩ thuật cấp THPT (1 tiết)',
      y: '- Củng cố, đúc kết các năng lực thẩm mỹ và kĩ năng thực hành mĩ thuật cốt lõi đã tích lũy trong 4 năm THCS.\n- Định hướng lựa chọn môn học Nghệ thuật (Mĩ thuật) ở cấp THPT và phát triển năng khiếu trọn đời.',
      dc: '• [Mã NLS: 1.3.TC2b] Đóng gói toàn bộ hồ sơ năng lực mĩ thuật số cá nhân phục vụ chuyển cấp THPT.\n• [Mã AI: 9.A1.1] Khẳng định vai trò đồng hành sáng tạo của AI và vị thế trung tâm của con người trong nghệ thuật.'
    },
    {
      w: 35,
      t: 'Tổng kết năm học',
      n: 'Tổng kết năm học & Triển lãm Tổng kết Mĩ thuật Lớp 9 toàn trường (1 tiết)',
      y: '- Tổng kết, đánh giá xếp loại kết quả học tập và rèn luyện môn Mĩ thuật Lớp 9 và toàn khóa THCS.\n- Chúc mừng học sinh hoàn thành chương trình môn Mĩ thuật cấp THCS và sẵn sàng bước vào bậc THPT.',
      dc: '• [Mã NLS: 2.5.TC2b] Lưu trữ và chia sẻ kỉ yếu mĩ thuật điện tử của khối 9 lên thư viện số nhà trường.\n• [Mã AI: 9.D1.1] Lan tỏa tình yêu cái đẹp và năng lực sáng tạo mĩ thuật vững vàng bước vào tương lai.'
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
      equipment: 'Giấy vẽ A3/A4, màu goát, acrylic, màu nước, đất nặn, xốp EVA, vật liệu tái chế, máy tính kết nối Internet, máy chiếu',
      location: 'Phòng học bộ môn Mĩ thuật / Sảnh triển lãm',
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án Không gian Sáng tạo' : ''
    });
  });

  return list;
}
