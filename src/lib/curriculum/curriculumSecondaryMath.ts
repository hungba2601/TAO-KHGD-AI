import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Toán THCS (Lớp 6, 7, 8, 9)
 * Khung chuẩn: 140 tiết/năm = 4 tiết/tuần x 35 tuần
 * 100% chuẩn SGK Kết nối tri thức với cuộc sống & tài liệu toan-thcs.md
 * Giữ nguyên các tuần kiểm tra, đánh giá định kỳ:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (4 tiết)
 * - Tuần 18: Kiểm tra, đánh giá cuối Học kỳ 1 (4 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (4 tiết)
 * - Tuần 35: Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học (4 tiết)
 */
export function getMathSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list: RawSecondaryLesson[] = [];

  // =========================================================================
  // 1. LỚP 6: TOÁN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // Bám sát 100% từng chương, bài học, Luyện tập chung, HĐTN trong toan-thcs.md
  // =========================================================================
  if (g === 6) {
    const grade6Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 1: Tập hợp (2 tiết) & Bài 2: Cách ghi số tự nhiên (2 tiết)',
        y: '- Nhận biết được tập hợp, phần tử thuộc/không thuộc tập hợp, cách mô tả tập hợp bằng cách liệt kê phần tử hoặc chỉ ra tính chất đặc trưng.\n- Nắm vững cấu tạo thập phân của số tự nhiên, cách đọc và viết số La Mã từ 1 đến 30.',
        eq: 'Phiếu học tập, bảng phụ nhóm, máy chiếu'
      },
      {
        w: 2,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 3: Thứ tự trong tập hợp các số tự nhiên (2 tiết) & Bài 4: Phép cộng và phép trừ số tự nhiên (2 tiết)',
        y: '- Biểu diễn được số tự nhiên trên tia số, so sánh hai số tự nhiên.\n- Vận dụng thành thạo các tính chất giao hoán, kết hợp của phép cộng để tính nhanh, tính nhẩm hợp lí.',
        eq: 'Tia số trực quan, phiếu bài tập rèn luyện'
      },
      {
        w: 3,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 5: Phép nhân và phép chia số tự nhiên (2 tiết) & Luyện tập chung (Trang 20) (2 tiết)',
        y: '- Nắm vững tính chất phân phối của phép nhân đối với phép cộng; thực hiện thành thạo phép chia hết và phép chia có dư.\n- Giải quyết các bài toán tình huống thực tế liên quan đến phép tính số tự nhiên.',
        eq: 'Bảng phụ, phiếu bài tập thực hành'
      },
      {
        w: 4,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 6: Luỹ thừa với số mũ tự nhiên (2 tiết) & Bài 7: Thứ tự thực hiện các phép tính (2 tiết)',
        y: '- Hiểu khái niệm lũy thừa, nhân và chia hai lũy thừa cùng cơ số; ghi nhớ thứ tự thực hiện phép tính có chứa ngoặc và lũy thừa.',
        eq: 'Máy chiếu, máy tính cầm tay Casio FX-580VNX'
      },
      {
        w: 5,
        t: 'Chương I & II: Tính chia hết',
        n: 'Chương I: Luyện tập chung & Bài tập cuối chương I (2 tiết) & Chương II: Bài 8: Quan hệ chia hết và tính chất (2 tiết)',
        y: '- Hệ thống hóa kiến thức chương I; nhận biết quan hệ chia hết, khái niệm ước và bội, tính chất chia hết của một tổng.',
        eq: 'Sơ đồ tư duy chương I, bảng nhóm'
      },
      {
        w: 6,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Bài 9: Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9 (2 tiết) & Bài 10: Số nguyên tố. Hợp số (2 tiết)',
        y: '- Sử dụng dấu hiệu chia hết để nhận biết tính chia hết của một số; phân biệt số nguyên tố và hợp số; phân tích một số ra thừa số nguyên tố.',
        eq: 'Bảng số nguyên tố nhỏ hơn 100, phiếu học tập'
      },
      {
        w: 7,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Luyện tập chung (Trang 43) (1 tiết) & Bài 11: Ước chung. Ước chung lớn nhất (3 tiết)',
        y: '- Tìm được ước chung và ước chung lớn nhất của hai hay nhiều số; vận dụng quy đồng phân số và giải toán chia quà, chia đội.',
        eq: 'Máy tính cầm tay Casio, phiếu bài tập nhóm'
      },
      {
        w: 8,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Bài 12: Bội chung. Bội chung nhỏ nhất (2 tiết) & Luyện tập chung, Bài tập cuối chương II (2 tiết)',
        y: '- Tìm được bội chung và BCNN của hai hay nhiều số; giải bài toán thực tiễn về chu kì lặp lại, xếp hàng.',
        eq: 'Sơ đồ tư duy chương II, phiếu ôn tập'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng chương I và chương II (Số tự nhiên, lũy thừa, tính chia hết, ƯCLN, BCNN).\n- Rèn luyện kỹ năng trình bày bài toán logic, tính chính xác và trung thực trong thi cử.',
        eq: 'Đề kiểm tra ma trận chuẩn Bộ GD&ĐT'
      },
      {
        w: 10,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 13: Tập hợp các số nguyên (2 tiết) & Bài 14: Phép cộng và phép trừ số nguyên (2 tiết)',
        y: '- Nhận biết số nguyên âm, số nguyên dương, số 0; biểu diễn số nguyên trên trục số, số đối của một số nguyên; thực hiện phép cộng trừ số nguyên.',
        eq: 'Trục số trực quan, nhiệt kế mô hình'
      },
      {
        w: 11,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 15: Quy tắc dấu ngoặc (2 tiết) & Luyện tập chung (Trang 69) (2 tiết)',
        y: '- Vận dụng thành thạo quy tắc dấu ngoặc (đổi dấu khi bỏ ngoặc có dấu trừ đằng trước) để tính hợp lí giá trị biểu thức.',
        eq: 'Bảng quy tắc dấu, phiếu bài tập thực hành'
      },
      {
        w: 12,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 16: Phép nhân số nguyên (2 tiết) & Bài 17: Phép chia hết. Ước và bội của một số nguyên (2 tiết)',
        y: '- Nắm vững quy tắc nhân hai số nguyên cùng dấu, khác dấu; xác định ước và bội của một số nguyên trong tập hợp Z.',
        eq: 'Phiếu học tập, bảng tổng hợp phép tính trên Z'
      },
      {
        w: 13,
        t: 'Chương III & IV: Hình phẳng thực tiễn',
        n: 'Chương III: Luyện tập chung & Bài tập cuối chương III (2 tiết) & Chương IV: Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều (2 tiết)',
        y: '- Nhận dạng và nêu được các yếu tố cạnh, góc, đường chéo của tam giác đều, hình vuông, hình lục giác đều; vẽ hình bằng thước và compa.',
        eq: 'Bộ thước đo, compa, ê ke, giấy gấp hình origami'
      },
      {
        w: 14,
        t: 'Chương IV: Một số hình phẳng trong thực tiễn',
        n: 'Chương IV: Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân (4 tiết)',
        y: '- Nhận biết đặc điểm về cạnh, góc, đường chéo của hình chữ nhật, hình thoi, hình bình hành, hình thang cân; vẽ hình theo kích thước cho trước.',
        eq: 'Bộ đồ dùng hình học phẳng, thước kẻ chia vạch, ê ke'
      },
      {
        w: 15,
        t: 'Chương IV: Một số hình phẳng trong thực tiễn',
        n: 'Chương IV: Bài 20: Chu vi và diện tích của một số tứ giác đã học (2 tiết) & Luyện tập chung, Bài tập cuối chương IV (2 tiết)',
        y: '- Vận dụng chuẩn xác công thức tính chu vi và diện tích hình chữ nhật, hình vuông, hình thang, hình bình hành, hình thoi vào giải bài toán thực tế (tính diện tích sàn nhà, khu vườn).',
        eq: 'Thước cuộn đo thực tế, phiếu bài tập ứng dụng'
      },
      {
        w: 16,
        t: 'Chương V: Tính đối xứng của hình phẳng',
        n: 'Chương V: Tính đối xứng của hình phẳng trong tự nhiên - Bài 21: Hình có trục đối xứng (2 tiết) & Bài 22: Hình có tâm đối xứng (2 tiết)',
        y: '- Nhận biết trục đối xứng và tâm đối xứng của một số hình học phẳng quen thuộc và các hình ảnh đẹp trong tự nhiên, kiến trúc, nghệ thuật.',
        eq: 'Tranh ảnh lá cây, quốc kỳ, công trình kiến trúc đối xứng'
      },
      {
        w: 17,
        t: 'HĐTN & Ôn tập Học kỳ 1',
        n: 'Chương V: Luyện tập chung, Bài tập cuối chương V & Hoạt động thực hành trải nghiệm: Tấm thiệp, vẽ hình GeoGebra, máy tính cầm tay & Ôn tập Học kỳ 1 (4 tiết)',
        y: '- Thực hành tạo tấm thiệp đối xứng; sử dụng phần mềm GeoGebra vẽ tam giác đều, lục giác đều; sử dụng máy tính Casio thực hiện phép tính; ôn tập hệ thống hóa kiến thức HK1.',
        eq: 'Phần mềm GeoGebra, máy tính Casio FX-580VNX, giấy màu, kéo'
      },
      {
        w: 18,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá tổng hợp năng lực toán học của học sinh trong Học kỳ 1 (Số tự nhiên, Số nguyên, Hình học phẳng và Tính đối xứng).',
        eq: 'Đề thi chuẩn cấu trúc ma trận - đặc tả của Bộ GD&ĐT'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Bài 23: Mở rộng khái niệm phân số. Phân số bằng nhau (2 tiết) & Bài 24: So sánh phân số. Hỗn số dương (2 tiết)',
        y: '- Hiểu khái niệm phân số với tử và mẫu là số nguyên; nhận biết hai phân số bằng nhau; vận dụng tính chất cơ bản của phân số để rút gọn và so sánh phân số.',
        eq: 'Mô hình phân số trực quan, phiếu bài tập'
      },
      {
        w: 20,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Luyện tập chung (Trang 13) (1 tiết) & Bài 25: Phép cộng và phép trừ phân số (3 tiết)',
        y: '- Thực hiện thành thạo phép cộng, trừ hai phân số cùng mẫu và khác mẫu; vận dụng các tính chất giao hoán, kết hợp để tính hợp lí.',
        eq: 'Bảng phụ, phiếu học tập nhóm'
      },
      {
        w: 21,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Bài 26: Phép nhân và phép chia phân số (2 tiết) & Bài 27: Hai bài toán về phân số (2 tiết)',
        y: '- Thực hiện phép nhân, chia phân số; giải quyết thành thạo bài toán tìm giá trị phân số của một số cho trước và tìm một số biết giá trị một phân số của nó.',
        eq: 'Phiếu bài toán thực tế về phân số'
      },
      {
        w: 22,
        t: 'Chương VI & VII: Số thập phân',
        n: 'Chương VI: Luyện tập chung & Bài tập cuối chương VI (2 tiết) & Chương VII: Số thập phân - Bài 28: Số thập phân (2 tiết)',
        y: '- Nhận biết số thập phân âm, số thập phân dương; biểu diễn số thập phân trên trục số; so sánh hai số thập phân.',
        eq: 'Bảng tổng hợp phân số và số thập phân'
      },
      {
        w: 23,
        t: 'Chương VII: Số thập phân',
        n: 'Chương VII: Số thập phân - Bài 29: Tính toán với số thập phân (2 tiết) & Bài 30: Làm tròn và ước lượng (2 tiết)',
        y: '- Thực hiện phép cộng, trừ, nhân, chia số thập phân; vận dụng quy tắc làm tròn số và ước lượng kết quả trong mua sắm, đời sống.',
        eq: 'Máy tính cầm tay Casio FX-580VNX, hóa đơn mua hàng mẫu'
      },
      {
        w: 24,
        t: 'Chương VII: Số thập phân',
        n: 'Chương VII: Số thập phân - Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm (2 tiết) & Luyện tập chung, Bài tập cuối chương VII (2 tiết)',
        y: '- Tính tỉ số, tỉ số phần trăm của hai đại lượng; giải bài toán thực tế về tính lãi suất ngân hàng, tỉ lệ giảm giá khuyến mãi.',
        eq: 'Bảng biểu số liệu thực tế, phiếu học tập'
      },
      {
        w: 25,
        t: 'Chương VIII: Những hình học cơ bản',
        n: 'Chương VIII: Những hình học cơ bản - Bài 32: Điểm và đường thẳng (2 tiết) & Bài 33: Điểm nằm giữa hai điểm. Tia (2 tiết)',
        y: '- Nhận biết điểm thuộc/không thuộc đường thẳng, ba điểm thẳng hàng; nhận biết điểm nằm giữa hai điểm, hai tia đối nhau, hai tia trùng nhau.',
        eq: 'Thước thẳng chia vạch, phấn màu, hình vẽ trực quan'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá chuẩn kiến thức kỹ năng Phân số, Số thập phân, Tỉ số phần trăm và Hình học cơ bản (Điểm, đường thẳng, tia).',
        eq: 'Đề kiểm tra ma trận chuẩn'
      },
      {
        w: 27,
        t: 'Chương VIII: Những hình học cơ bản',
        n: 'Chương VIII: Những hình học cơ bản - Bài 34: Đoạn thẳng. Độ dài đoạn thẳng (2 tiết) & Bài 35: Trung điểm của đoạn thẳng (2 tiết)',
        y: '- Đo độ dài đoạn thẳng; so sánh hai đoạn thẳng; hiểu và vận dụng tính chất trung điểm của đoạn thẳng vào vẽ hình và giải toán.',
        eq: 'Thước đo độ dài, compa'
      },
      {
        w: 28,
        t: 'Chương VIII: Những hình học cơ bản',
        n: 'Chương VIII: Luyện tập chung (Trang 57) (1 tiết) & Bài 36: Góc (1 tiết) & Bài 37: Số đo góc (2 tiết)',
        y: '- Nhận biết góc, đỉnh, cạnh của góc, điểm trong của góc; sử dụng thước đo góc để đo số đo góc; phân biệt góc nhọn, góc vuông, góc tù, góc bẹt.',
        eq: 'Thước đo góc (thước đo độ), ê ke'
      },
      {
        w: 29,
        t: 'Chương VIII & IX: Dữ liệu thống kê',
        n: 'Chương VIII: Luyện tập chung & Bài tập cuối chương VIII (2 tiết) & Chương IX: Dữ liệu và xác suất thực nghiệm - Bài 38: Dữ liệu và thu thập dữ liệu (2 tiết)',
        y: '- Hệ thống hóa hình học cơ bản; nhận biết dữ liệu là số hoặc không là số; thực hiện thu thập và phân loại dữ liệu theo tiêu chí.',
        eq: 'Phiếu điều tra khảo sát thực tế'
      },
      {
        w: 30,
        t: 'Chương IX: Dữ liệu và xác suất thực nghiệm',
        n: 'Chương IX: Bài 39: Bảng thống kê và biểu đồ tranh (1 tiết) & Bài 40: Biểu đồ cột (1 tiết) & Bài 41: Biểu đồ cột kép (2 tiết)',
        y: '- Đọc và vẽ bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép; rút ra nhận xét, so sánh số liệu thực tế.',
        eq: 'Phần mềm Excel, biểu đồ số liệu thực tế'
      },
      {
        w: 31,
        t: 'Chương IX: Dữ liệu và xác suất thực nghiệm',
        n: 'Chương IX: Luyện tập chung (Trang 87) (1 tiết) & Bài 42: Kết quả có thể và sự kiện trong trò chơi, thí nghiệm (1 tiết) & Bài 43: Xác suất thực nghiệm (2 tiết)',
        y: '- Liệt kê các kết quả có thể xảy ra khi tung đồng xu, gieo xúc xắc; tính xác suất thực nghiệm của một sự kiện sau nhiều lần thử.',
        eq: 'Xúc xắc, đồng xu thí nghiệm, hộp kín đựng bóng'
      },
      {
        w: 32,
        t: 'Chương IX & HĐTN',
        n: 'Chương IX: Luyện tập chung, Bài tập cuối chương IX (2 tiết) & Hoạt động thực hành trải nghiệm: Kế hoạch chi tiêu cá nhân và gia đình, Vẽ hình GeoGebra (2 tiết)',
        y: '- Lập bảng kế hoạch tài chính thu chi cá nhân/gia đình hợp lý; sử dụng phần mềm GeoGebra vẽ các hình học cơ bản.',
        eq: 'Bảng tính Excel, phần mềm GeoGebra'
      },
      {
        w: 33,
        t: 'Dự án STEM Toán 6',
        n: 'Dự án STEM Toán 6: "Mô hình Hình học Trực quan & Biểu đồ Thống kê Xanh" (4 tiết)',
        y: '- Thiết kế mô hình các hình khối phẳng, thu thập số liệu phân loại rác thải tại trường và vẽ biểu đồ cột kép tuyên truyền bảo vệ môi trường.',
        eq: 'Vật liệu tái chế, giấy A0, bút màu, máy chiếu'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài tập ôn tập cuối năm - Hệ thống hóa toàn bộ kiến thức Số học, Hình học và Thống kê Toán 6 (4 tiết)',
        y: '- Rà soát, củng cố toàn diện các dạng toán trọng tâm cả năm Lớp 6; rèn luyện kỹ năng giải đề thi tổng hợp.',
        eq: 'Hệ thống đề ôn tập chuẩn ma trận'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 6.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
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
        location: 'Phòng học bộ môn Toán / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 18 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM Toán học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 2. LỚP 7: TOÁN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // Bám sát 100% từng chương, bài học, Luyện tập chung, HĐTN trong toan-thcs.md
  // =========================================================================
  if (g === 7) {
    const grade7Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Bài 1: Tập hợp các số hữu tỉ (2 tiết) & Bài 2: Cộng, trừ, nhân, chia số hữu tỉ (2 tiết)',
        y: '- Nhận biết số hữu tỉ, biểu diễn số hữu tỉ trên trục số, số đối của số hữu tỉ; thực hiện thành thạo các phép tính cộng, trừ, nhân, chia trong tập hợp Q.',
        eq: 'Trục số, phiếu bài tập phép tính trên Q'
      },
      {
        w: 2,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Luyện tập chung (Trang 14) (1 tiết) & Bài 3: Luỹ thừa với số mũ tự nhiên của một số hữu tỉ (3 tiết)',
        y: '- Nắm vững công thức lũy thừa của một tích, một thương, lũy thừa của lũy thừa; áp dụng giải toán tìm x và tính nhanh.',
        eq: 'Máy tính cầm tay Casio FX-580VNX, bảng phụ'
      },
      {
        w: 3,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế (2 tiết) & Luyện tập chung, Bài tập cuối chương I (2 tiết)',
        y: '- Vận dụng quy tắc dấu ngoặc và quy tắc chuyển vế để tìm thành phần chưa biết; giải bài toán thực tế biểu diễn bằng biểu thức số hữu tỉ.',
        eq: 'Sơ đồ tư duy chương I, phiếu học tập'
      },
      {
        w: 4,
        t: 'Chương II: Số thực',
        n: 'Chương II: Số thực - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn (2 tiết) & Bài 6: Số vô tỉ. Căn bậc hai số học (2 tiết)',
        y: '- Nhận biết số thập phân vô hạn tuần hoàn, chu kì; hiểu khái niệm số vô tỉ, căn bậc hai số học của một số không âm; tính căn bậc hai bằng máy tính cầm tay.',
        eq: 'Máy tính Casio FX-580VNX, bảng phụ nhóm'
      },
      {
        w: 5,
        t: 'Chương II: Số thực',
        n: 'Chương II: Số thực - Bài 7: Tập hợp các số thực (2 tiết) & Luyện tập chung, Bài tập cuối chương II (2 tiết)',
        y: '- Nhận biết tập hợp số thực R gồm số hữu tỉ và số vô tỉ; tính giá trị tuyệt đối của một số thực; làm tròn số thực với độ chính xác cho trước.',
        eq: 'Sơ đồ cây tập hợp số N, Z, Q, I, R'
      },
      {
        w: 6,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc (4 tiết)',
        y: '- Nhận biết hai góc kề bù, hai góc đối đỉnh; hiểu tính chất hai góc đối đỉnh; vẽ tia phân giác của một góc bằng thước đo góc và compa.',
        eq: 'Thước đo góc, compa, thước thẳng'
      },
      {
        w: 7,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết (2 tiết) & Luyện tập chung (Trang 50) (2 tiết)',
        y: '- Nhận biết các cặp góc so le trong, đồng vị, trong cùng phía; áp dụng dấu hiệu nhận biết để chứng minh hai đường thẳng song song.',
        eq: 'Ê ke, thước chữ T, bảng phụ vẽ hình'
      },
      {
        w: 8,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song (2 tiết) & Bài 11: Định lí và chứng minh định lí (2 tiết)',
        y: '- Hiểu tiên đề Euclid; suy ra tính chất hai đường thẳng cùng song song hoặc cùng vuông góc với đường thẳng thứ ba; phân biệt giả thiết và kết luận của định lí.',
        eq: 'Phiếu bài tập chứng minh hình học'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá mức độ đạt chuẩn kiến thức Số hữu tỉ, Số thực, Góc và Đường thẳng song song.\n- Rèn luyện kỹ năng vẽ hình hình học chính xác và lập luận chứng minh có căn cứ.',
        eq: 'Đề kiểm tra ma trận chuẩn'
      },
      {
        w: 10,
        t: 'Chương III & IV: Tam giác bằng nhau',
        n: 'Chương III: Luyện tập chung, Bài tập cuối chương III (2 tiết) & Chương IV: Tam giác bằng nhau - Bài 12: Tổng các góc trong một tam giác (2 tiết)',
        y: '- Tính số đo góc trong tam giác dựa vào định lí tổng ba góc trong một tam giác bằng 180 độ; nhận biết tính chất góc ngoài của tam giác.',
        eq: 'Mô hình tam giác ghép góc trực quan'
      },
      {
        w: 11,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác (c-c-c) (2 tiết) & Luyện tập chung (Trang 68) (2 tiết)',
        y: '- Nhận biết các đỉnh, cạnh, góc tương ứng của hai tam giác bằng nhau; chứng minh hai tam giác bằng nhau theo trường hợp cạnh - cạnh - cạnh (c-c-c).',
        eq: 'Bộ dụng cụ vẽ tam giác bằng compa và thước'
      },
      {
        w: 12,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Bài 14: Trường hợp bằng nhau thứ hai (c-g-c) và thứ ba (g-c-g) của tam giác (3 tiết) & Luyện tập chung (Trang 74) (1 tiết)',
        y: '- Chứng minh hai tam giác bằng nhau theo trường hợp cạnh - góc - cạnh (c-g-c) và góc - cạnh - góc (g-c-g); suy ra các đoạn thẳng bằng nhau, góc bằng nhau.',
        eq: 'Phiếu học tập bài tập chứng minh tam giác'
      },
      {
        w: 13,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Bài 15: Các trường hợp bằng nhau của tam giác vuông (2 tiết) & Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng (2 tiết)',
        y: '- Nắm vững các trường hợp bằng nhau đặc thù của tam giác vuông (cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông); hiểu tính chất tam giác cân và đường trung trực.',
        eq: 'Ê ke vuông, compa, thước kẻ'
      },
      {
        w: 14,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Tam giác bằng nhau - Luyện tập chung (Trang 85) (2 tiết) & Bài tập cuối chương IV (2 tiết)',
        y: '- Tổng hợp phương pháp chứng minh hai tam giác bằng nhau; giải bài toán tính khoảng cách thực địa không thể đo trực tiếp.',
        eq: 'Sơ đồ tư duy chương IV, bảng phụ'
      },
      {
        w: 15,
        t: 'Chương V: Thu thập và biểu diễn dữ liệu',
        n: 'Chương V: Thu thập và biểu diễn dữ liệu - Bài 17: Thu thập và phân loại dữ liệu (2 tiết) & Bài 18: Biểu đồ hình quạt tròn (2 tiết)',
        y: '- Thu thập dữ liệu theo các tiêu chí; đọc, giải thích và vẽ biểu đồ hình quạt tròn biểu diễn tỉ lệ phần trăm các thành phần trong tổng thể.',
        eq: 'Thước đo độ, compa, phần mềm Excel'
      },
      {
        w: 16,
        t: 'Chương V: Thu thập và biểu diễn dữ liệu',
        n: 'Chương V: Bài 19: Biểu đồ đoạn thẳng (2 tiết) & Luyện tập chung, Bài tập cuối chương V (2 tiết)',
        y: '- Đọc và vẽ biểu đồ đoạn thẳng biểu diễn xu hướng thay đổi của dữ liệu theo thời gian (nhiệt độ, doanh thu, tăng trưởng dân số).',
        eq: 'Bảng số liệu thực tế, giấy kẻ ô li'
      },
      {
        w: 17,
        t: 'HĐTN & Ôn tập Học kỳ 1',
        n: 'Hoạt động thực hành trải nghiệm: Vẽ hình đơn giản với GeoGebra, Dân số và cơ cấu dân số Việt Nam & Ôn tập Học kỳ 1 Lớp 7 (4 tiết)',
        y: '- Ứng dụng GeoGebra vẽ tia phân giác, tam giác bằng nhau; phân tích số liệu dân số Việt Nam qua các biểu đồ; ôn tập toàn diện HK1.',
        eq: 'Phần mềm GeoGebra, máy tính cầm tay, đề cương ôn tập'
      },
      {
        w: 18,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá chuẩn kiến thức tổng hợp HK1 (Số hữu tỉ, Số thực, Đường thẳng song song, Tam giác bằng nhau, Biểu đồ thống kê).',
        eq: 'Đề kiểm tra cuối kỳ chuẩn'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
        n: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ - Bài 20: Tỉ lệ thức (2 tiết) & Bài 21: Tính chất của dãy tỉ số bằng nhau (2 tiết)',
        y: '- Hiểu định nghĩa tỉ lệ thức, tính chất của tỉ lệ thức; vận dụng tính chất của dãy tỉ số bằng nhau để giải bài toán chia phần tỉ lệ.',
        eq: 'Bảng phụ, phiếu học tập dãy tỉ số'
      },
      {
        w: 20,
        t: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
        n: 'Chương VI: Luyện tập chung (Trang 10) (1 tiết) & Bài 22: Đại lượng tỉ lệ thuận (1.5 tiết) & Bài 23: Đại lượng tỉ lệ nghịch (1.5 tiết)',
        y: '- Nhận biết hai đại lượng tỉ lệ thuận, đại lượng tỉ lệ nghịch; xác định hệ số tỉ lệ; giải các bài toán thực tế về năng suất, quãng đường, thời gian.',
        eq: 'Phiếu bài toán thực tế tỉ lệ thuận nghịch'
      },
      {
        w: 21,
        t: 'Chương VI & VII: Biểu thức đại số',
        n: 'Chương VI: Luyện tập chung, Bài tập cuối chương VI (2 tiết) & Chương VII: Biểu thức đại số và đa thức một biến - Bài 24: Biểu thức đại số (2 tiết)',
        y: '- Nhận biết biểu thức đại số, biến số; tính giá trị của biểu thức đại số khi biết giá trị của biến.',
        eq: 'Máy tính Casio FX-580VNX, phiếu học tập'
      },
      {
        w: 22,
        t: 'Chương VII: Biểu thức đại số và đa thức một biến',
        n: 'Chương VII: Bài 25: Đa thức một biến (2 tiết) & Bài 26: Phép cộng và phép trừ đa thức một biến (2 tiết)',
        y: '- Xác định bậc, hệ số cao nhất, hệ số tự do của đa thức một biến; sắp xếp đa thức theo lũy thừa giảm dần; thực hiện phép cộng, trừ đa thức.',
        eq: 'Bảng phụ đặt tính cộng trừ đa thức'
      },
      {
        w: 23,
        t: 'Chương VII: Biểu thức đại số và đa thức một biến',
        n: 'Chương VII: Luyện tập chung (Trang 34) (1 tiết) & Bài 27: Phép nhân đa thức một biến (1.5 tiết) & Bài 28: Phép chia đa thức một biến (1.5 tiết)',
        y: '- Thực hiện phép nhân đơn thức với đa thức, đa thức với đa thức; thực hiện phép chia đa thức cho đơn thức và chia hai đa thức một biến.',
        eq: 'Phiếu bài tập thực hành phép nhân chia đa thức'
      },
      {
        w: 24,
        t: 'Chương VII & VIII: Biến cố và xác suất',
        n: 'Chương VII: Luyện tập chung, Bài tập cuối chương VII (2 tiết) & Chương VIII: Làm quen với biến cố và xác suất của biến cố - Bài 29: Làm quen với biến cố (2 tiết)',
        y: '- Nhận biết biến cố chắc chắn, biến cố không thể và biến cố ngẫu nhiên trong các trò chơi, thí nghiệm đơn giản.',
        eq: 'Xúc xắc, túi đựng các quả bóng khác màu'
      },
      {
        w: 25,
        t: 'Chương VIII: Biến cố và xác suất của biến cố',
        n: 'Chương VIII: Bài 30: Làm quen với xác suất của biến cố (2 tiết) & Luyện tập chung, Bài tập cuối chương VIII (2 tiết)',
        y: '- Tính xác suất của một số biến cố đồng khả năng bằng tỉ số giữa số kết quả thuận lợi và tổng số kết quả có thể.',
        eq: 'Mô hình vòng quay may mắn, phiếu thực hành'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá mức độ nắm vững kiến thức Tỉ lệ thức, Đa thức một biến và Xác suất biến cố.',
        eq: 'Đề kiểm tra giữa kỳ chuẩn'
      },
      {
        w: 27,
        t: 'Chương IX: Quan hệ trong tam giác',
        n: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác - Bài 31: Quan hệ giữa góc và cạnh đối diện (2 tiết) & Bài 32: Quan hệ giữa đường vuông góc và đường xiên (2 tiết)',
        y: '- Hiểu quan hệ cạnh đối diện góc lớn hơn trong tam giác; so sánh độ dài đường vuông góc và đường xiên kẻ từ một điểm đến một đường thẳng.',
        eq: 'Mô hình hình học động, ê ke, thước kẻ'
      },
      {
        w: 28,
        t: 'Chương IX: Quan hệ trong tam giác',
        n: 'Chương IX: Bài 33: Quan hệ giữa ba cạnh của một tam giác (Bất đẳng thức tam giác) (2 tiết) & Luyện tập chung & Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác (2 tiết)',
        y: '- Nắm vững bất đẳng thức tam giác để kiểm tra bộ ba đoạn thẳng có tạo thành tam giác không; hiểu tính chất trọng tâm và tâm đường tròn nội tiếp.',
        eq: 'Compa, thước chia vạch, mô hình trọng tâm tam giác'
      },
      {
        w: 29,
        t: 'Chương IX: Quan hệ trong tam giác',
        n: 'Chương IX: Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác (2 tiết) & Luyện tập chung, Bài tập cuối chương IX (2 tiết)',
        y: '- Hiểu tính chất trực tâm và tâm đường tròn ngoại tiếp tam giác; giải bài toán dựng vị trí đặt cột phát sóng cách đều ba địa điểm.',
        eq: 'Phiếu bài toán ứng dụng thực tế'
      },
      {
        w: 30,
        t: 'Chương X: Một số hình khối trong thực tiễn',
        n: 'Chương X: Một số hình khối trong thực tiễn - Bài 36: Hình hộp chữ nhật và hình lập phương (2 tiết) & Luyện tập chung (Trang 92) (2 tiết)',
        y: '- Nêu được các đỉnh, cạnh, mặt đáy, mặt bên, đường chéo của hình hộp chữ nhật và hình lập phương; tính diện tích xung quanh và thể tích.',
        eq: 'Mô hình hình hộp chữ nhật, hình lập phương khai triển'
      },
      {
        w: 31,
        t: 'Chương X: Một số hình khối trong thực tiễn',
        n: 'Chương X: Bài 37: Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác (2 tiết) & Luyện tập chung, Bài tập cuối chương X (2 tiết)',
        y: '- Nhận biết hình lăng trụ đứng tam giác, tứ giác; tính diện tích xung quanh và thể tích của hình lăng trụ đứng (lều trại, hộp quà).',
        eq: 'Mô hình lăng trụ đứng, thước đo'
      },
      {
        w: 32,
        t: 'Hoạt động thực hành trải nghiệm',
        n: 'Hoạt động thực hành trải nghiệm: Đại lượng tỉ lệ trong đời sống, Vòng quay may mắn, Hộp quà và chân đế lịch để bàn của em (4 tiết)',
        y: '- Thiết kế và gấp dán hộp quà lăng trụ đứng; chế tạo vòng quay may mắn thực hành xác suất biến cố; vận dụng tỉ lệ thức giải bài toán pha chế.',
        eq: 'Bìa carton, kéo, keo dán, compa, thước kẻ'
      },
      {
        w: 33,
        t: 'Dự án STEM Toán 7',
        n: 'Dự án STEM Toán 7: "Thiết kế Nhà Lăng trụ Xanh & Biểu đồ Quản lý Tài chính Học đường" (4 tiết)',
        y: '- Ứng dụng hình học không gian và biểu đồ quạt tròn thiết kế mô hình kiến trúc xanh tiết kiệm năng lượng và kế hoạch chi tiêu.',
        eq: 'Phần mềm GeoGebra, vật liệu tái chế'
      },
      {
        w: 34,
        t: 'Ôn tập cuối năm',
        n: 'Bài tập ôn tập cuối năm - Tổng kết toàn bộ kiến thức Đại số, Hình học và Thống kê Xác suất Toán 7 (4 tiết)',
        y: '- Hệ thống hóa toàn bộ kiến thức trọng tâm Lớp 7; rèn luyện kỹ năng giải các bài toán tổng hợp phân hóa nâng cao.',
        eq: 'Bộ đề ôn tập chuẩn'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 7.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
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
        location: 'Phòng học bộ môn Toán / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 18 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM Toán học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 3. LỚP 8: TOÁN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // Bám sát 100% từng chương, bài học, Luyện tập chung, HĐTN trong toan-thcs.md
  // =========================================================================
  if (g === 8) {
    const grade8Weeks = [
      // HỌC KỲ 1 (Tuần 1 - 18)
      {
        w: 1,
        t: 'Chương I: Đa thức',
        n: 'Chương I: Đa thức - Bài 1: Đơn thức (2 tiết) & Bài 2: Đa thức (2 tiết)',
        y: '- Nhận biết đơn thức, đơn thức thu gọn, bậc của đơn thức, đơn thức đồng dạng; nhận biết đa thức, thu gọn đa thức và tìm bậc của đa thức nhiều biến.',
        eq: 'Phiếu học tập, bảng phụ nhóm'
      },
      {
        w: 2,
        t: 'Chương I: Đa thức',
        n: 'Chương I: Đa thức - Bài 3: Phép cộng và phép trừ đa thức (2 tiết) & Luyện tập chung (Trang 17) (2 tiết)',
        y: '- Thực hiện thành thạo phép cộng và phép trừ hai hay nhiều đa thức nhiều biến; tính giá trị của đa thức tại các giá trị cho trước của biến.',
        eq: 'Máy tính Casio FX-580VNX, bảng phụ'
      },
      {
        w: 3,
        t: 'Chương I: Đa thức',
        n: 'Chương I: Đa thức - Bài 4: Phép nhân đa thức (2 tiết) & Bài 5: Phép chia đa thức cho đơn thức (2 tiết)',
        y: '- Thực hiện phép nhân đơn thức với đa thức, đa thức với đa thức; chia đa thức cho đơn thức (trường hợp chia hết).',
        eq: 'Phiếu bài tập thực hành'
      },
      {
        w: 4,
        t: 'Chương I & II: Hằng đẳng thức đáng nhớ',
        n: 'Chương I: Luyện tập chung & Bài tập cuối chương I (2 tiết) & Chương II: Hằng đẳng thức đáng nhớ và ứng dụng - Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu (2 tiết)',
        y: '- Hiểu và vận dụng 3 hằng đẳng thức đầu tiên: a² - b² = (a - b)(a + b), (a ± b)² = a² ± 2ab + b² để tính nhẩm, tính nhanh và biến đổi biểu thức.',
        eq: 'Bảng công thức 7 hằng đẳng thức, phiếu bài tập'
      },
      {
        w: 5,
        t: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
        n: 'Chương II: Bài 7: Lập phương của một tổng. Lập phương của một hiệu (2 tiết) & Bài 8: Tổng và hiệu hai lập phương (2 tiết)',
        y: '- Nắm vững và áp dụng thành thạo hằng đẳng thức lập phương (a ± b)³ và a³ ± b³ vào tính toán và chứng minh đẳng thức.',
        eq: 'Mô hình khối lập phương minh họa hình học'
      },
      {
        w: 6,
        t: 'Chương II: Hằng đẳng thức đáng nhớ và ứng dụng',
        n: 'Chương II: Luyện tập chung (Trang 40) (1 tiết) & Bài 9: Phân tích đa thức thành nhân tử (3 tiết)',
        y: '- Vận dụng linh hoạt các phương pháp phân tích đa thức thành nhân tử: đặt nhân tử chung, dùng hằng đẳng thức, nhóm hạng tử và phối hợp nhiều phương pháp.',
        eq: 'Phiếu học tập phân tích nhân tử'
      },
      {
        w: 7,
        t: 'Chương II & III: Tứ giác',
        n: 'Chương II: Luyện tập chung, Bài tập cuối chương II (2 tiết) & Chương III: Tứ giác - Bài 10: Tứ giác (2 tiết)',
        y: '- Nắm vững định lí tổng các góc của một tứ giác bằng 360 độ; nhận biết tứ giác lồi.',
        eq: 'Thước đo góc, bảng phụ vẽ tứ giác'
      },
      {
        w: 8,
        t: 'Chương III: Tứ giác',
        n: 'Chương III: Tứ giác - Bài 11: Hình thang cân (2 tiết) & Luyện tập chung (Trang 56) (1 tiết) & Bài 12: Hình bình hành (1 tiết)',
        y: '- Nêu định nghĩa, tính chất và dấu hiệu nhận biết hình thang cân, hình bình hành; chứng minh các tứ giác đặc biệt.',
        eq: 'Bộ thước kẻ, ê ke, compa'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá mức độ nắm vững Đa thức, 7 Hằng đẳng thức đáng nhớ, Phân tích đa thức thành nhân tử và Tứ giác (Hình thang cân, Hình bình hành).',
        eq: 'Đề kiểm tra ma trận chuẩn'
      },
      {
        w: 10,
        t: 'Chương III: Tứ giác',
        n: 'Chương III: Bài 12: Hình bình hành (tiếp) & Luyện tập chung (Trang 62) (1 tiết) & Bài 13: Hình chữ nhật (1.5 tiết) & Bài 14: Hình thoi và hình vuông (1.5 tiết)',
        y: '- Nêu định nghĩa, tính chất và dấu hiệu nhận biết hình chữ nhật, hình thoi, hình vuông; chứng minh mối liên hệ giữa các tứ giác.',
        eq: 'Bộ khung hình học phẳng biến đổi'
      },
      {
        w: 11,
        t: 'Chương III & IV: Định lí Thalès',
        n: 'Chương III: Luyện tập chung, Bài tập cuối chương III (2 tiết) & Chương IV: Định lí Thalès - Bài 15: Định lí Thalès trong tam giác (2 tiết)',
        y: '- Nắm vững định lí Thalès thuận, đảo và hệ quả trong tam giác; tính độ dài đoạn thẳng tỉ lệ.',
        eq: 'Mô hình thước đo tỉ lệ, phiếu bài tập'
      },
      {
        w: 12,
        t: 'Chương IV: Định lí Thalès',
        n: 'Chương IV: Định lí Thalès - Bài 16: Đường trung bình của tam giác (2 tiết) & Bài 17: Tính chất đường phân giác của tam giác (2 tiết)',
        y: '- Hiểu định nghĩa và tính chất đường trung bình của tam giác; vận dụng tính chất đường phân giác trong và ngoài để tính tỉ số đoạn thẳng.',
        eq: 'Thước kẻ chia vạch, compa'
      },
      {
        w: 13,
        t: 'Chương IV: Định lí Thalès',
        n: 'Chương IV: Định lí Thalès - Luyện tập chung (Trang 87) (2 tiết) & Bài tập cuối chương IV (2 tiết)',
        y: '- Tổng hợp các bài toán vận dụng định lí Thalès để đo khoảng cách và chiều cao của vật không tới được.',
        eq: 'Thước giác kế đo đạc, phiếu thực địa'
      },
      {
        w: 14,
        t: 'Chương V: Dữ liệu và biểu đồ',
        n: 'Chương V: Dữ liệu và biểu đồ - Bài 18: Thu thập và phân loại dữ liệu (2 tiết) & Bài 19: Biểu diễn dữ liệu bằng bảng, biểu đồ (2 tiết)',
        y: '- Thu thập, phân loại và lựa chọn biểu đồ thích hợp (cột kép, quạt tròn, đoạn thẳng) để biểu diễn dữ liệu thống kê.',
        eq: 'Phần mềm Excel, biểu đồ số liệu'
      },
      {
        w: 15,
        t: 'Chương V: Dữ liệu và biểu đồ',
        n: 'Chương V: Bài 20: Phân tích số liệu thống kê dựa vào biểu đồ (2 tiết) & Luyện tập chung, Bài tập cuối chương V (2 tiết)',
        y: '- Nhận biết dữ liệu không hợp lí, phân tích xu thế và rút ra kết luận tin cậy từ biểu đồ thống kê.',
        eq: 'Bảng số liệu kinh tế - xã hội'
      },
      {
        w: 16,
        t: 'Hoạt động thực hành trải nghiệm',
        n: 'Hoạt động thực hành trải nghiệm: Công thức lãi kép & Thực hiện tính toán trên đa thức, vẽ hình với GeoGebra (4 tiết)',
        y: '- Hiểu và vận dụng công thức tính lãi kép trong ngân hàng A = P(1 + r)^n; sử dụng GeoGebra tính toán đa thức và vẽ hình phẳng.',
        eq: 'Phần mềm GeoGebra, máy tính Casio FX-580VNX'
      },
      {
        w: 17,
        t: 'HĐTN & Ôn tập Học kỳ 1',
        n: 'Hoạt động thực hành trải nghiệm: Phân tích đặc điểm khí hậu Việt Nam & Ôn tập Học kỳ 1 Lớp 8 (4 tiết)',
        y: '- Đọc và phân tích biểu đồ khí hậu (nhiệt độ, lượng mưa các vùng Việt Nam); ôn tập hệ thống hóa kiến thức HK1 Toán 8.',
        eq: 'Atlas Địa lí, đề cương ôn tập tổng hợp'
      },
      {
        w: 18,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá tổng hợp kiến thức HK1 (Đa thức, Hằng đẳng thức, Tứ giác, Định lí Thalès, Thống kê biểu đồ).',
        eq: 'Đề kiểm tra cuối kỳ chuẩn'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Phân thức đại số - Bài 21: Phân thức đại số (2 tiết) & Bài 22: Tính chất cơ bản của phân thức đại số (2 tiết)',
        y: '- Nhận biết phân thức đại số, tìm điều kiện xác định của phân thức; vận dụng tính chất cơ bản để rút gọn phân thức và quy đồng mẫu thức.',
        eq: 'Bảng phụ, phiếu học tập rút gọn phân thức'
      },
      {
        w: 20,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Phân thức đại số - Luyện tập chung (Trang 13) (1 tiết) & Bài 23: Phép cộng và phép trừ phân thức đại số (3 tiết)',
        y: '- Thực hiện phép cộng, trừ các phân thức đại số cùng mẫu và khác mẫu thức; vận dụng các tính chất giao hoán, kết hợp.',
        eq: 'Phiếu bài tập cộng trừ phân thức'
      },
      {
        w: 21,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Bài 24: Phép nhân và phép chia phân thức đại số (2 tiết) & Luyện tập chung, Bài tập cuối chương VI (2 tiết)',
        y: '- Thực hiện phép nhân, chia phân thức đại số; giải bài toán rút gọn biểu thức phân thức tổng hợp và tính giá trị nguyên của biến.',
        eq: 'Sơ đồ tư duy chương VI, máy tính Casio'
      },
      {
        w: 22,
        t: 'Chương VII: Phương trình bậc nhất và hàm số',
        n: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất - Bài 25: Phương trình bậc nhất một ẩn (2 tiết) & Bài 26: Giải bài toán bằng cách lập phương trình (2 tiết)',
        y: '- Giải phương trình bậc nhất ax + b = 0 (a ≠ 0); giải bài toán thực tế bằng cách lập phương trình (toán chuyển động, năng suất, quan hệ số).',
        eq: 'Phiếu học tập giải toán bằng cách lập PT'
      },
      {
        w: 23,
        t: 'Chương VII: Phương trình bậc nhất và hàm số',
        n: 'Chương VII: Luyện tập chung (Trang 37) (1 tiết) & Bài 27: Khái niệm hàm số và đồ thị của hàm số (3 tiết)',
        y: '- Nhận biết khái niệm hàm số, biến số, mặt phẳng tọa độ Oxy, tọa độ một điểm; vẽ đồ thị của hàm số đơn giản.',
        eq: 'Mặt phẳng tọa độ Oxy trực quan, giấy kẻ ô li'
      },
      {
        w: 24,
        t: 'Chương VII: Phương trình bậc nhất và hàm số',
        n: 'Chương VII: Bài 28: Hàm số bậc nhất và đồ thị của hàm số bậc nhất y = ax + b (2 tiết) & Bài 29: Hệ số góc của đường thẳng (2 tiết)',
        y: '- Vẽ đồ thị hàm số bậc nhất y = ax + b (a ≠ 0); xác định hệ số góc và góc tạo bởi đường thẳng với trục Ox; vị trí tương đối giữa hai đường thẳng (song song, cắt nhau, trùng nhau).',
        eq: 'Phần mềm GeoGebra vẽ đồ thị'
      },
      {
        w: 25,
        t: 'Chương VII & VIII: Xác suất biến cố',
        n: 'Chương VII: Luyện tập chung, Bài tập cuối chương VII (2 tiết) & Chương VIII: Mở đầu về tính xác suất của biến cố - Bài 30: Kết quả có thể và kết quả thuận lợi (2 tiết)',
        y: '- Liệt kê các kết quả có thể và kết quả thuận lợi cho một biến cố trong các mô hình bốc thăm, tung xúc xắc.',
        eq: 'Xúc xắc, hộp chứa thẻ số'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá kiến thức Phân thức đại số, Phương trình bậc nhất, Hàm số bậc nhất y = ax + b và Mở đầu xác suất.',
        eq: 'Đề kiểm tra giữa kỳ chuẩn'
      },
      {
        w: 27,
        t: 'Chương VIII: Mở đầu về tính xác suất của biến cố',
        n: 'Chương VIII: Bài 31: Cách tính xác suất của biến cố bằng tỉ số (2 tiết) & Bài 32: Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng (2 tiết)',
        y: '- Tính xác suất của biến cố bằng tỉ số giữa số kết quả thuận lợi và số kết quả có thể; hiểu sự hội tụ của xác suất thực nghiệm về xác suất lí thuyết.',
        eq: 'Bảng tính Excel mô phỏng xác suất'
      },
      {
        w: 28,
        t: 'Chương IX: Tam giác đồng dạng',
        n: 'Chương VIII: Luyện tập chung, Bài tập cuối chương VIII (1 tiết) & Chương IX: Tam giác đồng dạng - Bài 33: Hai tam giác đồng dạng (1.5 tiết) & Bài 34: Ba trường hợp đồng dạng của hai tam giác (1.5 tiết)',
        y: '- Hiểu định nghĩa tỉ số đồng dạng; nắm vững 3 trường hợp đồng dạng của tam giác (c-c-c, c-g-c, g-g) và áp dụng vào chứng minh hình học.',
        eq: 'Bộ hình đồng dạng trực quan, thước, compa'
      },
      {
        w: 29,
        t: 'Chương IX: Tam giác đồng dạng',
        n: 'Chương IX: Luyện tập chung (Trang 91) (1 tiết) & Bài 35: Định lí Pythagore và ứng dụng (3 tiết)',
        y: '- Nắm vững định lí Pythagore thuận và đảo; tính độ dài cạnh trong tam giác vuông và ứng dụng đo đạc thực tế.',
        eq: 'Mô hình xếp hình chứng minh định lí Pythagore'
      },
      {
        w: 30,
        t: 'Chương IX: Tam giác đồng dạng',
        n: 'Chương IX: Bài 36: Các trường hợp đồng dạng của hai tam giác vuông (2 tiết) & Bài 37: Hình đồng dạng & Luyện tập chung, Bài tập cuối chương IX (2 tiết)',
        y: '- Chứng minh hai tam giác vuông đồng dạng; nhận biết các hình đồng dạng trong đời sống thực tế.',
        eq: 'Tranh ảnh các công trình thu nhỏ, bản đồ tỉ lệ'
      },
      {
        w: 31,
        t: 'Chương X: Một số hình khối trong thực tiễn',
        n: 'Chương X: Một số hình khối trong thực tiễn - Bài 38: Hình chóp tam giác đều (2 tiết) & Bài 39: Hình chóp tứ giác đều (2 tiết)',
        y: '- Nhận biết đỉnh, mặt đáy, mặt bên, đường cao của hình chóp tam giác đều và tứ giác đều; tính diện tích xung quanh và thể tích.',
        eq: 'Mô hình hình chóp tam giác đều, tứ giác đều khai triển'
      },
      {
        w: 32,
        t: 'HĐTN & Ứng dụng Toán học',
        n: 'Chương X: Luyện tập chung, Bài tập cuối chương X (2 tiết) & Hoạt động thực hành trải nghiệm: Ứng dụng hàm số bậc nhất trong tài chính & Đo chiều cao, khoảng cách bằng Thalès và Pythagore (2 tiết)',
        y: '- Ứng dụng hàm số bậc nhất mô hình hóa bài toán chi phí - doanh thu tài chính; thực hành ngoài sân trường đo chiều cao cột cờ, tòa nhà.',
        eq: 'Giác kế, thước dây, máy tính Casio'
      },
      {
        w: 33,
        t: 'Dự án STEM Toán 8',
        n: 'Dự án STEM Toán 8: "Chế tạo Mô hình Kim tự tháp Chóp đều & Ứng dụng Định lí Thalès - GeoGebra" (4 tiết)',
        y: '- Chế tạo mô hình kim tự tháp chóp đều bằng bìa carton; sử dụng GeoGebra mô phỏng bài toán đo chiều cao bóng nắng Thalès.',
        eq: 'Bìa carton, kéo, keo, phần mềm GeoGebra'
      },
      {
        w: 34,
        t: 'HĐTN & Ôn tập cuối năm',
        n: 'Hoạt động thực hành trải nghiệm: Mô tả thí nghiệm ngẫu nhiên với phần mềm Excel & Ôn tập toàn diện cuối năm Toán 8 (4 tiết)',
        y: '- Sử dụng hàm RANDBETWEEN trong Excel mô phỏng 1000 lần gieo xúc xắc; ôn tập hệ thống hóa toàn bộ kiến thức Toán 8.',
        eq: 'Phần mềm Excel, hệ thống đề ôn tập tổng hợp'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 8.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
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
        location: 'Phòng học bộ môn Toán / Lớp học',
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 18 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM Toán học' : ''
      });
    });

    return list;
  }

  // =========================================================================
  // 4. LỚP 9: TOÁN THCS (35 TUẦN X 4 TIẾT = 140 TIẾT)
  // Bám sát 100% từng chương, bài học, Luyện tập chung, HĐTN trong toan-thcs.md
  // =========================================================================
  const grade9Weeks = [
    // HỌC KỲ 1 (Tuần 1 - 18)
    {
      w: 1,
      t: 'Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn',
      n: 'Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn - Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn (2 tiết) & Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn (2 tiết)',
      y: '- Nhận biết phương trình và nghiệm của phương trình bậc nhất hai ẩn; giải hệ hai phương trình bậc nhất hai ẩn bằng phương pháp thế và phương pháp cộng đại số.',
      eq: 'Máy tính Casio FX-580VNX, phiếu học tập'
    },
    {
      w: 2,
      t: 'Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn',
      n: 'Chương I: Luyện tập chung (Trang 19) (1 tiết) & Bài 3: Giải bài toán bằng cách lập hệ phương trình (2 tiết) & Bài tập cuối chương I (1 tiết)',
      y: '- Giải các bài toán thực tế bằng cách lập hệ phương trình (toán chuyển động, làm chung làm riêng, quan hệ hình học, toán phần trăm hóa học).',
      eq: 'Phiếu phân loại dạng toán giải bằng cách lập HPT'
    },
    {
      w: 3,
      t: 'Chương II: Phương trình và bất phương trình bậc nhất một ẩn',
      n: 'Chương II: Phương trình và bất phương trình bậc nhất một ẩn - Bài 4: Phương trình quy về phương trình bậc nhất một ẩn (2 tiết) & Bài 5: Bất đẳng thức và tính chất (2 tiết)',
      y: '- Giải phương trình tích và phương trình chứa ẩn ở mẫu quy về bậc nhất; hiểu khái niệm bất đẳng thức và các tính chất cộng, nhân với số dương/âm.',
      eq: 'Bảng tính chất bất đẳng thức, phiếu học tập'
    },
    {
      w: 4,
      t: 'Chương II: Phương trình và bất phương trình bậc nhất một ẩn',
      n: 'Chương II: Luyện tập chung (Trang 36) (1 tiết) & Bài 6: Bất phương trình bậc nhất một ẩn (2 tiết) & Bài tập cuối chương II (1 tiết)',
      y: '- Giải bất phương trình bậc nhất một ẩn ax + b > 0 (< 0, ≥ 0, ≤ 0) và biểu diễn tập nghiệm trên trục số; giải bài toán thực tế về so sánh chi phí.',
      eq: 'Trục số biểu diễn tập nghiệm, phiếu bài tập'
    },
    {
      w: 5,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Căn bậc hai và căn bậc ba - Bài 7: Căn bậc hai và căn thức bậc hai (2 tiết) & Bài 8: Khai căn bậc hai với phép nhân và phép chia (2 tiết)',
      y: '- Nhận biết căn bậc hai số học, căn thức bậc hai √(A) và điều kiện xác định A ≥ 0; áp dụng hằng đẳng thức √(A²) = |A| và quy tắc khai căn một tích, một thương.',
      eq: 'Máy tính Casio FX-580VNX, bảng phụ'
    },
    {
      w: 6,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Luyện tập chung (Trang 52) (1 tiết) & Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai (3 tiết)',
      y: '- Thực hiện đưa thừa số ra ngoài/vào trong dấu căn, khử mẫu của biểu thức lấy căn, trục căn thức ở mẫu; rút gọn biểu thức chứa căn thức bậc hai.',
      eq: 'Phiếu bài tập rút gọn biểu thức chứa căn'
    },
    {
      w: 7,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Bài 10: Căn bậc ba và căn thức bậc ba (2 tiết) & Luyện tập chung, Bài tập cuối chương III (2 tiết)',
      y: '- Hiểu khái niệm căn bậc ba ³√(a) và tính chất; giải các bài toán tổng hợp rút gọn biểu thức chứa căn và tìm giá trị của biến.',
      eq: 'Sơ đồ tư duy chương III, phiếu ôn tập'
    },
    {
      w: 8,
      t: 'Chương IV: Hệ thức lượng trong tam giác vuông',
      n: 'Chương IV: Hệ thức lượng trong tam giác vuông - Bài 11: Tỉ số lượng giác của góc nhọn (2 tiết) & Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng (2 tiết)',
      y: '- Định nghĩa sin, cos, tan, cot của góc nhọn; nắm vững hệ thức giữa cạnh và góc trong tam giác vuông; giải tam giác vuông và ứng dụng đo chiều cao thực tế.',
      eq: 'Máy tính Casio FX-580VNX, ê ke, giác kế'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá chuẩn kiến thức Hệ phương trình bậc nhất hai ẩn, Bất phương trình, Căn bậc hai, Căn bậc ba và Hệ thức lượng trong tam giác vuông.',
      eq: 'Đề kiểm tra giữa kỳ chuẩn cấu trúc Bộ GD&ĐT'
    },
    {
      w: 10,
      t: 'Chương IV & V: Đường tròn',
      n: 'Chương IV: Luyện tập chung, Bài tập cuối chương IV (2 tiết) & Chương V: Đường tròn - Bài 13: Mở đầu về đường tròn (2 tiết)',
      y: '- Nhận biết đường tròn, tính chất đối xứng của đường tròn; mối liên hệ giữa đường kính và dây cung của đường tròn.',
      eq: 'Compa, thước kẻ, mô hình đường tròn'
    },
    {
      w: 11,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Đường tròn - Bài 14: Cung và dây của một đường tròn (2 tiết) & Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên (2 tiết)',
      y: '- So sánh cung và dây; tính độ dài đường tròn, cung tròn, diện tích hình tròn, hình quạt tròn và hình vành khuyên.',
      eq: 'Compa, bảng công thức độ dài và diện tích đường tròn'
    },
    {
      w: 12,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Luyện tập chung (Trang 96) (1 tiết) & Bài 16: Vị trí tương đối của đường thẳng và đường tròn (3 tiết)',
      y: '- Nhận biết 3 vị trí tương đối của đường thẳng và đường tròn; hiểu định nghĩa tiếp tuyến, dấu hiệu nhận biết tiếp tuyến và tính chất hai tiếp tuyến cắt nhau.',
      eq: 'Ê ke, compa, thước thẳng'
    },
    {
      w: 13,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Bài 17: Vị trí tương đối của hai đường tròn (2 tiết) & Luyện tập chung (Trang 108) (2 tiết)',
      y: '- Xác định vị trí tương đối của hai đường tròn (cắt nhau, tiếp xúc, ngoài nhau, đựng nhau) dựa vào hệ thức giữa đoạn nối tâm và bán kính.',
      eq: 'Compa, phiếu bài tập hình học đường tròn'
    },
    {
      w: 14,
      t: 'Chương V & HĐTN',
      n: 'Chương V: Bài tập cuối chương V (2 tiết) & Hoạt động thực hành trải nghiệm: Pha chế dung dịch theo nồng độ yêu cầu (2 tiết)',
      y: '- Tổng hợp kiến thức hình học đường tròn; vận dụng hệ phương trình bậc nhất hai ẩn giải bài toán pha chế dung dịch hóa học thực tế.',
      eq: 'Sơ đồ tư duy chương V, phiếu thí nghiệm pha chế'
    },
    {
      w: 15,
      t: 'Hoạt động thực hành trải nghiệm',
      n: 'Hoạt động thực hành trải nghiệm: Tính chiều cao và xác định khoảng cách & Rèn luyện kỹ năng giải toán thực tế (4 tiết)',
      y: '- Sử dụng giác kế đo góc và tỉ số lượng giác tính chiều cao tòa tháp/cột cờ và khoảng cách hai điểm bị ngăn cách bởi chướng ngại vật.',
      eq: 'Giác kế đo góc ngoài trời, thước dây'
    },
    {
      w: 16,
      t: 'Ôn tập Học kỳ 1',
      n: 'Ôn tập chuyên đề Đại số Học kỳ 1: Hệ phương trình, Bất phương trình và Căn thức bậc hai, bậc ba (4 tiết)',
      y: '- Hệ thống hóa phương pháp giải toán Đại số HK1 Toán 9; rèn kỹ năng biến đổi đại số chuẩn xác.',
      eq: 'Hệ thống đề ôn tập chuyên đề Đại số'
    },
    {
      w: 17,
      t: 'Ôn tập Học kỳ 1',
      n: 'Ôn tập chuyên đề Hình học Học kỳ 1: Hệ thức lượng tam giác vuông & Đường tròn (4 tiết)',
      y: '- Hệ thống hóa các định lí hình học HK1; rèn luyện kỹ năng vẽ hình phụ và chứng minh hình học chặt chẽ.',
      eq: 'Hệ thống đề ôn tập chuyên đề Hình học'
    },
    {
      w: 18,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá tổng hợp toàn diện kết quả học tập môn Toán Lớp 9 trong Học kỳ 1.',
      eq: 'Đề kiểm tra cuối kỳ chuẩn'
    },

    // HỌC KỲ 2 (Tuần 19 - 35)
    {
      w: 19,
      t: 'Chương VI: Hàm số y = ax² & Phương trình bậc hai',
      n: 'Chương VI: Hàm số y = ax² (a ≠ 0). Phương trình bậc hai một ẩn - Bài 18: Hàm số y = ax² (a ≠ 0) (2 tiết) & Bài 19: Phương trình bậc hai một ẩn (2 tiết)',
      y: '- Nhận biết tính chất và vẽ đồ thị hàm số Parabol y = ax²; giải phương trình bậc hai một ẩn ax² + bx + c = 0 bằng công thức nghiệm và công thức nghiệm thu gọn.',
      eq: 'Thước vẽ Parabol, máy tính Casio FX-580VNX'
    },
    {
      w: 20,
      t: 'Chương VI: Hàm số y = ax² & Phương trình bậc hai',
      n: 'Chương VI: Luyện tập chung (Trang 18) (1 tiết) & Bài 20: Định lí Viète và ứng dụng (3 tiết)',
      y: '- Nắm vững định lí Viète thuận và đảo (tính tổng S và tích P của hai nghiệm); ứng dụng nhẩm nghiệm, tìm hai số biết tổng và tích, xét dấu các nghiệm.',
      eq: 'Bảng công thức Viète, phiếu bài tập nâng cao'
    },
    {
      w: 21,
      t: 'Chương VI: Hàm số y = ax² & Phương trình bậc hai',
      n: 'Chương VI: Bài 21: Giải bài toán bằng cách lập phương trình (2 tiết) & Luyện tập chung, Bài tập cuối chương VI (2 tiết)',
      y: '- Giải các bài toán thực tế bằng cách lập phương trình bậc hai (toán chuyển động vận tốc thay đổi, toán diện tích hình học, toán năng suất lao động).',
      eq: 'Phiếu bài tập giải toán bằng cách lập PT bậc hai'
    },
    {
      w: 22,
      t: 'Chương VII: Tần số và tần số tương đối',
      n: 'Chương VII: Tần số và tần số tương đối - Bài 22: Bảng tần số và biểu đồ tần số (2 tiết) & Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối (2 tiết)',
      y: '- Lập bảng tần số, bảng tần số tương đối; vẽ biểu đồ cột/đoạn thẳng biểu diễn tần số và biểu đồ quạt tròn biểu diễn tần số tương đối.',
      eq: 'Phần mềm Excel, biểu đồ số liệu'
    },
    {
      w: 23,
      t: 'Chương VII: Tần số và tần số tương đối',
      n: 'Chương VII: Luyện tập chung (Trang 43) (1 tiết) & Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ (2 tiết) & Bài tập cuối chương VII (1 tiết)',
      y: '- Lập bảng tần số ghép nhóm, tần số tương đối ghép nhóm; vẽ biểu đồ tần số ghép nhóm dạng cột; phân tích ý nghĩa mẫu số liệu.',
      eq: 'Bảng số liệu thống kê ghép nhóm thực tế'
    },
    {
      w: 24,
      t: 'Chương VIII: Xác suất của biến cố',
      n: 'Chương VIII: Xác suất của biến cố trong một số mô hình xác suất đơn giản - Bài 25: Phép thử ngẫu nhiên và không gian mẫu (2 tiết) & Bài 26: Xác suất của biến cố liên quan tới phép thử (2 tiết)',
      y: '- Xác định không gian mẫu của phép thử ngẫu nhiên; tính xác suất của biến cố bằng phương pháp liệt kê và sử dụng sơ đồ hình cây.',
      eq: 'Sơ đồ hình cây, hộp bốc thăm xác suất'
    },
    {
      w: 25,
      t: 'Chương VIII & IX: Đường tròn ngoại tiếp/nội tiếp',
      n: 'Chương VIII: Luyện tập chung, Bài tập cuối chương VIII (2 tiết) & Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp - Bài 27: Góc nội tiếp (2 tiết)',
      y: '- Hiểu định lí về góc nội tiếp, góc tạo bởi tiếp tuyến và dây cung, mối liên hệ với góc ở tâm cùng chắn một cung.',
      eq: 'Compa, mô hình góc nội tiếp trực quan'
    },
    {
      w: 26,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá chuẩn kiến thức Phương trình bậc hai, Định lí Viète, Tần số - Thống kê và Góc với đường tròn.',
      eq: 'Đề kiểm tra giữa kỳ chuẩn'
    },
    {
      w: 27,
      t: 'Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp',
      n: 'Chương IX: Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác (1.5 tiết) & Luyện tập chung (Trang 78) (1 tiết) & Bài 29: Tứ giác nội tiếp (1.5 tiết)',
      y: '- Xác định tâm và bán kính đường tròn ngoại tiếp, nội tiếp tam giác; hiểu định nghĩa và tính chất của tứ giác nội tiếp; chứng minh tứ giác nội tiếp đường tròn.',
      eq: 'Compa, thước kẻ, bảng các dấu hiệu tứ giác nội tiếp'
    },
    {
      w: 28,
      t: 'Chương IX: Đường tròn ngoại tiếp và đường tròn nội tiếp',
      n: 'Chương IX: Bài 30: Đa giác đều (2 tiết) & Luyện tập chung, Bài tập cuối chương IX (2 tiết)',
      y: '- Nhận biết đa giác đều, tâm của đa giác đều; vẽ tam giác đều, hình vuông, lục giác đều nội tiếp đường tròn; tổng kết các định lí đường tròn.',
      eq: 'Compa, thước chia vạch, sơ đồ tư duy chương IX'
    },
    {
      w: 29,
      t: 'Chương X: Một số hình khối trong thực tiễn',
      n: 'Chương X: Một số hình khối trong thực tiễn - Bài 31: Hình trụ và hình nón (2 tiết) & Bài 32: Hình cầu (2 tiết)',
      y: '- Nêu các yếu tố của hình trụ, hình nón, hình cầu; vận dụng công thức tính diện tích xung quanh, diện tích toàn phần và thể tích vào giải toán thực tế.',
      eq: 'Mô hình hình trụ, hình nón, quả cầu'
    },
    {
      w: 30,
      t: 'Chương X & HĐTN',
      n: 'Chương X: Luyện tập chung, Bài tập cuối chương X (2 tiết) & Hoạt động thực hành trải nghiệm: Giải phương trình, hệ phương trình và vẽ đồ thị với GeoGebra (2 tiết)',
      y: '- Ứng dụng GeoGebra giải phương trình, hệ phương trình và xác định tọa độ giao điểm giữa Parabol và đường thẳng.',
      eq: 'Phần mềm GeoGebra, máy tính cá nhân'
    },
    {
      w: 31,
      t: 'Hoạt động thực hành trải nghiệm',
      n: 'Hoạt động thực hành trải nghiệm: Xác định tần số, vẽ biểu đồ bằng Excel & Gene trội trong các thế hệ lai (4 tiết)',
      y: '- Sử dụng hàm COUNTIF và biểu đồ trong Excel xử lý số liệu thống kê; ứng dụng mô hình xác suất giải thích tỉ lệ gene Men-đen.',
      eq: 'Phần mềm Excel, dữ liệu thực nghiệm di truyền học'
    },
    {
      w: 32,
      t: 'Dự án STEM Toán 9',
      n: 'Dự án STEM Toán 9: "Mô hình Cầu treo Parabol & Thiết kế Bao bì Hình trụ - Hình nón - Hình cầu" (4 tiết)',
      y: '- Ứng dụng hàm số bậc hai thiết kế cầu treo chịu lực và tính toán tối ưu hóa thể tích bao bì chứa sản phẩm hình trụ/hình nón/hình cầu.',
      eq: 'Vật liệu tái chế, giấy A0, kéo, máy chiếu'
    },
    {
      w: 33,
      t: 'Luyện thi vào Lớp 10',
      n: 'Luyện giải bộ đề thi tuyển sinh vào Lớp 10 THPT môn Toán (Chuyên đề Rút gọn biểu thức, Hệ PT, Parabol, PT bậc hai & Hình học tổng hợp) (4 tiết)',
      y: '- Rèn luyện kỹ năng phân tích đề thi tuyển sinh lớp 10, quản lý thời gian làm bài thi và kỹ thuật trình bày bài toán đạt điểm tối đa.',
      eq: 'Bộ đề thi tuyển sinh vào Lớp 10 THPT chính thức các năm'
    },
    {
      w: 34,
      t: 'Ôn tập cuối năm',
      n: 'Ôn tập toàn diện chuẩn bị kiểm tra cuối năm và thi tuyển sinh vào Lớp 10 THPT môn Toán 9 (4 tiết)',
      y: '- Hệ thống hóa toàn bộ kiến thức Đại số, Hình học và Thống kê Xác suất Toán THCS chuẩn bị tốt nhất cho kỳ thi vào 10.',
      eq: 'Đề ôn tập tổng hợp chuẩn ma trận'
    },
    {
      w: 35,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm và hoàn tất chương trình Toán THCS cho học sinh Lớp 9.',
      eq: 'Đề kiểm tra cuối năm chuẩn'
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
      location: 'Phòng học bộ môn Toán / Lớp học',
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 18 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Dự án STEM Toán học' : ''
    });
  });

  return list;
}
