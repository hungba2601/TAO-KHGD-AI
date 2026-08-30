import { RawSecondaryLesson } from './curriculumSecondary';

/**
 * Phân phối chương trình chi tiết môn Toán THCS (Lớp 6, 7, 8, 9)
 * Khung chuẩn: 140 tiết/năm = 4 tiết/tuần x 35 tuần
 * 100% chuẩn SGK Kết nối tri thức với cuộc sống & tài liệu toan-thcs.md
 * Các tuần kiểm tra, đánh giá định kỳ chuẩn hóa:
 * - Tuần 9: Kiểm tra, đánh giá giữa Học kỳ 1 (4 tiết)
 * - Tuần 16: Kiểm tra, đánh giá cuối Học kỳ 1 (4 tiết)
 * - Tuần 26: Kiểm tra, đánh giá giữa Học kỳ 2 (4 tiết)
 * - Tuần 31: Kiểm tra, đánh giá cuối Học kỳ 2 (4 tiết)
 * - Tuần 35: Tổng kết năm học & Đánh giá xếp loại cả năm (4 tiết)
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
      {
        w: 1,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 1: Tập hợp (2 tiết) & Bài 2: Cách ghi số tự nhiên (2 tiết)',
        y: '- Nhận biết tập hợp, phần tử thuộc/không thuộc tập hợp; cách biểu diễn tập hợp.\n- Ghi số tự nhiên trong hệ thập phân, chữ số La Mã.',
        eq: 'Phiếu học tập, bảng phụ'
      },
      {
        w: 2,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 3: Thứ tự trong tập hợp các số tự nhiên (2 tiết) & Bài 4: Phép cộng và phép trừ số tự nhiên (2 tiết)',
        y: '- So sánh hai số tự nhiên, tính chất bắc cầu.\n- Vận dụng tính chất giao hoán, kết hợp của phép cộng để tính nhẩm, tính hợp lý.',
        eq: 'Bảng cộng trừ, phiếu bài tập'
      },
      {
        w: 3,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 5: Phép nhân và phép chia số tự nhiên (2 tiết) & Luyện tập chung (Trang 20) (2 tiết)',
        y: '- Thực hiện phép nhân, phép chia hết và chia có dư.\n- Tính nhẩm, tính nhanh áp dụng tính chất phân phối.',
        eq: 'Phiếu học tập, bảng nhân chia'
      },
      {
        w: 4,
        t: 'Chương I: Tập hợp các số tự nhiên',
        n: 'Chương I: Tập hợp các số tự nhiên - Bài 6: Luỹ thừa với số mũ tự nhiên (2 tiết) & Bài 7: Thứ tự thực hiện các phép tính (2 tiết)',
        y: '- Nắm vững định nghĩa luỹ thừa, nhân/chia hai luỹ thừa cùng cơ số.\n- Thực hiện đúng thứ tự các phép tính có ngoặc và không có ngoặc.',
        eq: 'Bảng luỹ thừa cơ bản'
      },
      {
        w: 5,
        t: 'Chương I & II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương I: Luyện tập chung & Bài tập cuối chương I (2 tiết) & Chương II: Bài 8: Quan hệ chia hết và tính chất (2 tiết)',
        y: '- Hệ thống hoá kiến thức Chương I.\n- Nhận biết quan hệ chia hết, tính chất chia hết của một tổng/hiệu.',
        eq: 'Bảng hệ thống kiến thức'
      },
      {
        w: 6,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Bài 9: Dấu hiệu chia hết cho 2, cho 5, cho 3, cho 9 (2 tiết) & Bài 10: Số nguyên tố. Hợp số (2 tiết)',
        y: '- Nhận biết và áp dụng dấu hiệu chia hết cho 2, 5, 3, 9.\n- Phân biệt số nguyên tố và hợp số; phân tích một số ra thừa số nguyên tố.',
        eq: 'Bảng số nguyên tố nhỏ hơn 100'
      },
      {
        w: 7,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Luyện tập chung (Trang 43) (1 tiết) & Bài 11: Ước chung. Ước chung lớn nhất (3 tiết)',
        y: '- Tìm tập hợp ước chung, tìm ƯCLN bằng cách phân tích ra thừa số nguyên tố; rút gọn về phân số tối giản.',
        eq: 'Phiếu học tập tìm ƯCLN'
      },
      {
        w: 8,
        t: 'Chương II: Tính chia hết trong tập hợp các số tự nhiên',
        n: 'Chương II: Bài 12: Bội chung. Bội chung nhỏ nhất (2 tiết) & Luyện tập chung, Bài tập cuối chương II (2 tiết)',
        y: '- Tìm BCNN bằng cách phân tích ra thừa số nguyên tố; giải bài toán thực tế quy về tìm BCNN.',
        eq: 'Bảng tổng kết chương II'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá tổng hợp kiến thức Số tự nhiên, luỹ thừa, tính chia hết, ƯCLN, BCNN và hình học trực quan.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn'
      },
      {
        w: 10,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 13: Tập hợp các số nguyên (2 tiết) & Bài 14: Phép cộng và phép trừ số nguyên (2 tiết)',
        y: '- Nhận biết số nguyên âm, số nguyên dương, số 0; biểu diễn số nguyên trên trục số.\n- Thực hiện cộng, trừ hai số nguyên cùng dấu và khác dấu.',
        eq: 'Mô hình trục số trực quan'
      },
      {
        w: 11,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 15: Quy tắc dấu ngoặc (2 tiết) & Luyện tập chung (Trang 69) (2 tiết)',
        y: '- Vận dụng thành thạo quy tắc dấu ngoặc khi bỏ ngoặc và nhóm các số hạng một cách hợp lý.',
        eq: 'Bảng quy tắc dấu ngoặc'
      },
      {
        w: 12,
        t: 'Chương III: Số nguyên',
        n: 'Chương III: Số nguyên - Bài 16: Phép nhân số nguyên (2 tiết) & Bài 17: Phép chia hết. Ước và bội của một số nguyên (2 tiết)',
        y: '- Thực hiện nhân hai số nguyên; tìm ước và bội của một số nguyên; quy tắc dấu của tích.',
        eq: 'Bảng quy tắc nhân chia số nguyên'
      },
      {
        w: 13,
        t: 'Chương III & IV: Một số hình phẳng trong thực tiễn',
        n: 'Chương III: Luyện tập chung & Bài tập cuối chương III (2 tiết) & Chương IV: Bài 18: Hình tam giác đều. Hình vuông. Hình lục giác đều (2 tiết)',
        y: '- Hệ thống hoá kiến thức số nguyên.\n- Nhận dạng và mô tả các yếu tố cơ bản (cạnh, góc, đường chéo) của tam giác đều, hình vuông, lục giác đều.',
        eq: 'Mô hình tam giác đều, hình vuông, lục giác đều'
      },
      {
        w: 14,
        t: 'Chương IV: Một số hình phẳng trong thực tiễn',
        n: 'Chương IV: Bài 19: Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân (4 tiết)',
        y: '- Nhận dạng và nêu đặc điểm của hình chữ nhật, hình thoi, hình bình hành, hình thang cân.\n- Vẽ các hình bằng thước và êke.',
        eq: 'Bộ thước compa, êke, mô hình tứ giác'
      },
      {
        w: 15,
        t: 'Chương V: Tính đối xứng của hình phẳng trong tự nhiên',
        n: 'Chương V: Tính đối xứng của hình phẳng trong tự nhiên - Bài 21: Hình có trục đối xứng (2 tiết) & Bài 22: Hình có tâm đối xứng (2 tiết)',
        y: '- Nhận biết trục đối xứng và tâm đối xứng của các hình phẳng quen thuộc trong tự nhiên và nghệ thuật.',
        eq: 'Tranh ảnh hình có trục/tâm đối xứng'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán HK1 theo chuẩn CT GDPT 2018 (Số tự nhiên, Số nguyên, Hình học phẳng và đối xứng).',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn'
      },
      {
        w: 17,
        t: 'Chương V & Đánh giá định kỳ',
        n: 'Chương V: Luyện tập chung, Bài tập cuối chương V & Chữa bài kiểm tra cuối HK1 & Thực hành trải nghiệm (4 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1, sửa chữa các lỗi sai thường gặp; ôn tập củng cố kiến thức hình học đối xứng.',
        eq: 'Bài làm học sinh, đáp án và biểu điểm'
      },
      {
        w: 18,
        t: 'HĐTN & Đánh giá định kỳ',
        n: 'Hoạt động thực hành trải nghiệm (GeoGebra, Casio) & Sơ kết Học kỳ 1 môn Toán Lớp 6 (4 tiết)',
        y: '- Thực hành đo đạc kích thước thực tế, tính chu vi diện tích; sử dụng máy tính Casio; sơ kết đánh giá kết quả học tập HK1.',
        eq: 'Máy tính Casio, thước cuộn dây'
      },
      {
        w: 19,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Bài 23: Mở rộng khái niệm phân số. Phân số bằng nhau (2 tiết) & Bài 24: So sánh phân số. Hỗn số dương (2 tiết)',
        y: '- Nắm vững khái niệm phân số a/b với a, b là số nguyên, b khác 0; tính chất cơ bản của phân số; so sánh phân số.',
        eq: 'Phiếu học tập phân số'
      },
      {
        w: 20,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Luyện tập chung (Trang 13) (1 tiết) & Bài 25: Phép cộng và phép trừ phân số (3 tiết)',
        y: '- Thực hiện thành thạo phép cộng và phép trừ phân số; áp dụng tính chất giao hoán, kết hợp để tính nhanh.',
        eq: 'Bảng phụ quy đồng mẫu'
      },
      {
        w: 21,
        t: 'Chương VI: Phân số',
        n: 'Chương VI: Phân số - Bài 26: Phép nhân và phép chia phân số (2 tiết) & Bài 27: Hai bài toán về phân số (2 tiết)',
        y: '- Thực hiện nhân, chia phân số; giải hai bài toán cơ bản về phân số (tìm giá trị phân số của một số, tìm một số biết giá trị phân số).',
        eq: 'Phiếu bài toán thực tế về phân số'
      },
      {
        w: 22,
        t: 'Chương VI & VII: Số thập phân',
        n: 'Chương VI: Luyện tập chung & Bài tập cuối chương VI (2 tiết) & Chương VII: Số thập phân - Bài 28: Số thập phân (2 tiết)',
        y: '- Hệ thống hoá kiến thức phân số.\n- Nhận biết số thập phân âm, số thập phân dương, số đối của số thập phân.',
        eq: 'Bảng hệ thống phân số'
      },
      {
        w: 23,
        t: 'Chương VII: Số thập phân',
        n: 'Chương VII: Số thập phân - Bài 29: Tính toán với số thập phân (2 tiết) & Bài 30: Làm tròn và ước lượng (2 tiết)',
        y: '- Thực hiện 4 phép tính với số thập phân; vận dụng quy tắc làm tròn số thập phân để ước lượng kết quả tính toán trong đời sống.',
        eq: 'Phiếu bài tập làm tròn số'
      },
      {
        w: 24,
        t: 'Chương VII: Số thập phân',
        n: 'Chương VII: Số thập phân - Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm (2 tiết) & Luyện tập chung (Trang 41) (2 tiết)',
        y: '- Tính tỉ số, tỉ số phần trăm của hai đại lượng; tìm giá trị phần trăm của một số và tìm một số biết giá trị phần trăm của nó.',
        eq: 'Bảng giá hàng hóa khuyến mãi, phiếu bài tập'
      },
      {
        w: 25,
        t: 'Chương VII & VIII: Những hình hình học cơ bản',
        n: 'Chương VII: Bài tập cuối chương VII (2 tiết) & Chương VIII: Những hình hình học cơ bản - Bài 32: Điểm và đường thẳng (2 tiết)',
        y: '- Nhận biết điểm thuộc đường thẳng, điểm không thuộc đường thẳng, đường thẳng cắt nhau, song song, ba điểm thẳng hàng.',
        eq: 'Thước thẳng, bảng phụ'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá kiến thức Phân số, Số thập phân, Tỉ số phần trăm và Hình học cơ bản (Điểm, đường thẳng).',
        eq: 'Đề kiểm tra giữa HK2 chuẩn'
      },
      {
        w: 27,
        t: 'Chương VIII: Những hình hình học cơ bản',
        n: 'Chương VIII: Những hình hình học cơ bản - Bài 33: Điểm nằm giữa hai điểm. Tia (2 tiết) & Bài 34: Đoạn thẳng. Độ dài đoạn thẳng (2 tiết)',
        y: '- Nhận biết tia, hai tia đối nhau; khái niệm đoạn thẳng, đo độ dài đoạn thẳng và so sánh hai đoạn thẳng.',
        eq: 'Thước chia khoảng mm'
      },
      {
        w: 28,
        t: 'Chương VIII: Những hình hình học cơ bản',
        n: 'Chương VIII: Bài 35: Trung điểm của đoạn thẳng (2 tiết) & Luyện tập chung (Trang 56) (2 tiết)',
        y: '- Nắm vững định nghĩa trung điểm của đoạn thẳng; cách xác định trung điểm bằng thước thẳng và compa.',
        eq: 'Thước thẳng, compa'
      },
      {
        w: 29,
        t: 'Chương VIII: Những hình hình học cơ bản',
        n: 'Chương VIII: Bài 36: Góc (2 tiết) & Bài 37: Số đo góc (2 tiết)',
        y: '- Nhận biết góc, đỉnh và cạnh của góc; sử dụng thước đo góc (thước đo độ) để đo và vẽ góc theo số đo cho trước.',
        eq: 'Thước đo góc (độ)'
      },
      {
        w: 30,
        t: 'Chương VIII & IX: Dữ liệu và xác suất thực nghiệm',
        n: 'Chương VIII: Luyện tập chung, Bài tập cuối chương VIII (2 tiết) & Chương IX: Bài 38: Dữ liệu và thu thập dữ liệu (2 tiết)',
        y: '- Hệ thống hoá kiến thức hình học cơ bản.\n- Thu thập, phân loại và tổ chức dữ liệu theo các tiêu chí cho trước.',
        eq: 'Bảng hỏi thu thập dữ liệu'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán Lớp 6 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 6 theo CT GDPT 2018.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
      },
      {
        w: 32,
        t: 'Chương IX: Dữ liệu và xác suất thực nghiệm',
        n: 'Chương IX: Chữa bài kiểm tra cuối HK2 & Bài 39: Bảng thống kê và biểu đồ tranh (1 tiết) & Bài 40: Biểu đồ cột (1 tiết) & Bài 41: Biểu đồ cột kép (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2.\n- Đọc và vẽ bảng thống kê, biểu đồ tranh, biểu đồ cột, biểu đồ cột kép; rút ra nhận xét số liệu thực tế.',
        eq: 'Phần mềm Excel, biểu đồ số liệu thực tế'
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
        t: 'Chương IX & Ôn tập cuối năm',
        n: 'Chương IX: Bài 42: Kết quả có thể và sự kiện trong trò chơi (1 tiết) & Bài 43: Xác suất thực nghiệm (1 tiết) & Ôn tập toàn diện chuẩn bị tổng kết năm học (2 tiết)',
        y: '- Tính xác suất thực nghiệm của một sự kiện sau nhiều lần thử; hệ thống hóa toàn bộ kiến thức Số học, Hình học và Thống kê Toán 6.',
        eq: 'Xúc xắc, đồng xu thí nghiệm, hệ thống đề ôn tập'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Tổng kết năm học & Đánh giá xếp loại cả năm môn Toán Lớp 6 (4 tiết)',
        y: '- Tổng kết đánh giá kết quả học tập và rèn luyện môn Toán cả năm của học sinh Lớp 6.',
        eq: 'Sổ theo dõi đánh giá học sinh'
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
      {
        w: 1,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Bài 1: Tập hợp các số hữu tỉ (2 tiết) & Bài 2: Cộng, trừ, nhân, chia số hữu tỉ (2 tiết)',
        y: '- Nhận biết số hữu tỉ, biểu diễn số hữu tỉ trên trục số; số đối của số hữu tỉ.\n- Thực hiện thành thạo các phép tính cộng, trừ, nhân, chia trong tập hợp số hữu tỉ Q.',
        eq: 'Mô hình trục số, phiếu học tập số hữu tỉ'
      },
      {
        w: 2,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Bài 2: Cộng, trừ, nhân, chia số hữu tỉ (tiếp) (2 tiết) & Luyện tập chung (Trang 14) (2 tiết)',
        y: '- Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng để tính toán hợp lý.',
        eq: 'Bảng phụ tính chất phép toán'
      },
      {
        w: 3,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Bài 3: Luỹ thừa với số mũ tự nhiên của một số hữu tỉ (4 tiết)',
        y: '- Định nghĩa luỹ thừa của số hữu tỉ; tính tích và thương của hai luỹ thừa cùng cơ số; luỹ thừa của luỹ thừa, luỹ thừa của một tích/thương.',
        eq: 'Bảng công thức luỹ thừa'
      },
      {
        w: 4,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Luyện tập chung (Trang 19) (2 tiết) & Bài 4: Quy tắc dấu ngoặc và quy tắc chuyển vế (2 tiết)',
        y: '- Vận dụng quy tắc bỏ dấu ngoặc có dấu cộng/trừ đằng trước; quy tắc chuyển vế khi tìm x trong đẳng thức số hữu tỉ.',
        eq: 'Phiếu bài tập tìm x quy tắc chuyển vế'
      },
      {
        w: 5,
        t: 'Chương I: Số hữu tỉ',
        n: 'Chương I: Số hữu tỉ - Luyện tập chung (Trang 24) (2 tiết) & Bài tập cuối chương I (2 tiết)',
        y: '- Hệ thống hoá kiến thức về tập hợp số hữu tỉ và các phép toán; giải các bài toán thực tế liên quan đến số hữu tỉ.',
        eq: 'Sơ đồ tư duy chương I'
      },
      {
        w: 6,
        t: 'Chương II: Số thực',
        n: 'Chương II: Số thực - Bài 5: Làm quen với số thập phân vô hạn tuần hoàn (2 tiết) & Bài 6: Số vô tỉ. Căn bậc hai số học (2 tiết)',
        y: '- Nhận biết số thập phân vô hạn tuần hoàn, chu kì; khái niệm số vô tỉ và căn bậc hai số học của một số không âm.',
        eq: 'Bảng biểu diễn số thập phân tuần hoàn, máy tính Casio'
      },
      {
        w: 7,
        t: 'Chương II: Số thực',
        n: 'Chương II: Số thực - Bài 7: Tập hợp các số thực (2 tiết) & Luyện tập chung (Trang 38) (2 tiết)',
        y: '- Nhận biết tập hợp số thực R; trục số thực; so sánh hai số thực; giá trị tuyệt đối của một số thực.',
        eq: 'Trục số thực trực quan'
      },
      {
        w: 8,
        t: 'Chương II: Số thực',
        n: 'Chương II: Số thực - Bài tập cuối chương II (2 tiết) & Hoạt động thực hành trải nghiệm: Vẽ hình đơn giản với phần mềm GeoGebra (2 tiết)',
        y: '- Hệ thống hoá kiến thức chương II; làm quen với giao diện và vẽ các đối tượng hình học cơ bản trên GeoGebra.',
        eq: 'Phần mềm GeoGebra, phòng máy tính'
      },
      {
        w: 9,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá tổng hợp kiến thức Số hữu tỉ, Số thực, Căn bậc hai số học và Hình học cơ bản giữa HK1.',
        eq: 'Đề kiểm tra giữa kỳ 1 chuẩn ma trận'
      },
      {
        w: 10,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc (4 tiết)',
        y: '- Nhận biết hai góc kề bù, hai góc đối đỉnh và tính chất; định nghĩa và cách vẽ tia phân giác của một góc bằng thước và compa.',
        eq: 'Thước đo góc, compa, thước thẳng'
      },
      {
        w: 11,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Luyện tập chung (Trang 45) (1 tiết) & Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết (3 tiết)',
        y: '- Nhận biết các cặp góc so le trong, đồng vị; dấu hiệu nhận biết hai đường thẳng song song; cách vẽ hai đường thẳng song song.',
        eq: 'Êke, thước kẻ'
      },
      {
        w: 12,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Luyện tập chung (Trang 50) (1 tiết) & Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song (3 tiết)',
        y: '- Nắm vững tiên đề Euclid; tính chất của hai đường thẳng song song (hai góc so le trong bằng nhau, đồng vị bằng nhau).',
        eq: 'Bảng phụ minh hoạ tiên đề Euclid'
      },
      {
        w: 13,
        t: 'Chương III: Góc và đường thẳng song song',
        n: 'Chương III: Góc và đường thẳng song song - Bài 11: Định lí và chứng minh định lí (2 tiết) & Luyện tập chung, Bài tập cuối chương III (2 tiết)',
        y: '- Nhận biết cấu trúc định lí (Giả thiết - Kết luận); bước đầu làm quen với phương pháp chứng minh định lí bằng suy luận logic.',
        eq: 'Phiếu học tập chứng minh định lí'
      },
      {
        w: 14,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Tam giác bằng nhau - Bài 12: Tổng các góc trong một tam giác (2 tiết) & Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất c-c-c (2 tiết)',
        y: '- Chứng minh định lí tổng 3 góc trong tam giác bằng 180 độ; nhận biết hai tam giác bằng nhau trường hợp cạnh - cạnh - cạnh (c-c-c).',
        eq: 'Bộ mô hình tam giác ghép hình'
      },
      {
        w: 15,
        t: 'Chương IV: Tam giác bằng nhau',
        n: 'Chương IV: Tam giác bằng nhau - Bài 14: Trường hợp bằng nhau thứ hai c-g-c (2 tiết) & Bài 15: Trường hợp bằng nhau thứ ba g-c-g (2 tiết)',
        y: '- Nắm vững và vận dụng trường hợp bằng nhau cạnh - góc - cạnh (c-g-c) và góc - cạnh - góc (g-c-g) để chứng minh hai đoạn thẳng, hai góc bằng nhau.',
        eq: 'Thước đo độ, compa, thước kẻ'
      },
      {
        w: 16,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá tổng hợp kiến thức Số hữu tỉ, Số thực, Góc và đường thẳng song song, Tam giác bằng nhau trong toàn bộ Học kỳ 1.',
        eq: 'Đề kiểm tra cuối kỳ 1 chuẩn'
      },
      {
        w: 17,
        t: 'Chương IV & Đánh giá định kỳ',
        n: 'Chương IV: Tam giác bằng nhau - Chữa bài kiểm tra cuối HK1 & Luyện tập chung & Bài tập cuối chương IV (4 tiết)',
        y: '- Chữa bài kiểm tra cuối HK1, khắc phục sai sót; củng cố các trường hợp bằng nhau của tam giác vuông và tam giác thường.',
        eq: 'Bài làm học sinh, đáp án và biểu điểm'
      },
      {
        w: 18,
        t: 'HĐTN & Đánh giá định kỳ',
        n: 'Hoạt động thực hành trải nghiệm (GeoGebra, Casio) & Sơ kết Học kỳ 1 môn Toán Lớp 7 (4 tiết)',
        y: '- Sử dụng GeoGebra vẽ tam giác bằng nhau và kiểm chứng tính chất hình học; sơ kết đánh giá xếp loại học tập HK1.',
        eq: 'Máy chiếu, phần mềm GeoGebra'
      },
      {
        w: 19,
        t: 'Chương IV & V: Thu thập và biểu diễn dữ liệu',
        n: 'Chương IV: Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng (2 tiết) & Chương V: Bài 17: Thu thập và phân loại dữ liệu (2 tiết)',
        y: '- Nhận biết tam giác cân, tính chất hai góc ở đáy bằng nhau; định nghĩa đường trung trực; thu thập và phân loại dữ liệu định tính, định lượng.',
        eq: 'Thước thẳng, compa, bảng dữ liệu'
      },
      {
        w: 20,
        t: 'Chương V: Thu thập và biểu diễn dữ liệu',
        n: 'Chương V: Thu thập và biểu diễn dữ liệu - Bài 18: Biểu đồ hình quạt tròn (2 tiết) & Bài 19: Biểu đồ đoạn thẳng (2 tiết)',
        y: '- Đọc và phân tích số liệu trên biểu đồ hình quạt tròn; vẽ và biểu diễn xu hướng biến động dữ liệu theo thời gian bằng biểu đồ đoạn thẳng.',
        eq: 'Thước đo góc, phần mềm Excel vẽ biểu đồ'
      },
      {
        w: 21,
        t: 'Chương V & VI: Tỉ lệ thức và đại lượng tỉ lệ',
        n: 'Chương V: Luyện tập chung, Bài tập cuối chương V (2 tiết) & Chương VI: Bài 20: Tỉ lệ thức (2 tiết)',
        y: '- Hệ thống hoá kiến thức biểu đồ thống kê.\n- Nhận biết tỉ lệ thức; vận dụng tính chất cơ bản của tỉ lệ thức để tìm số hạng chưa biết.',
        eq: 'Phiếu học tập tỉ lệ thức'
      },
      {
        w: 22,
        t: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
        n: 'Chương VI: Bài 21: Tính chất của dãy tỉ số bằng nhau (2 tiết) & Luyện tập chung (Trang 15) (2 tiết)',
        y: '- Nắm vững tính chất dãy tỉ số bằng nhau; giải các bài toán chia tỉ lệ thực tế (chia tiền thưởng, chia hỗn hợp).',
        eq: 'Bảng phụ công thức dãy tỉ số bằng nhau'
      },
      {
        w: 23,
        t: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
        n: 'Chương VI: Bài 22: Đại lượng tỉ lệ thuận (2 tiết) & Bài 23: Đại lượng tỉ lệ nghịch (2 tiết)',
        y: '- Nhận biết định nghĩa, tính chất của đại lượng tỉ lệ thuận (y = ax) và tỉ lệ nghịch (y = a/x); giải bài toán thực tiễn.',
        eq: 'Phiếu bài toán tỉ lệ thuận, tỉ lệ nghịch'
      },
      {
        w: 24,
        t: 'Chương VI & VII: Biểu thức đại số và đa thức một biến',
        n: 'Chương VI: Luyện tập chung, Bài tập cuối chương VI (2 tiết) & Chương VII: Bài 24: Biểu thức đại số (2 tiết)',
        y: '- Hệ thống hoá chương VI.\n- Nhận biết biểu thức đại số, biến số; tính giá trị của biểu thức đại số tại giá trị cho trước của biến.',
        eq: 'Bảng tổng kết chương VI'
      },
      {
        w: 25,
        t: 'Chương VII: Biểu thức đại số và đa thức một biến',
        n: 'Chương VII: Bài 25: Đa thức một biến (2 tiết) & Bài 26: Phép cộng và phép trừ đa thức một biến (2 tiết)',
        y: '- Khái niệm đa thức một biến, bậc, hệ số cao nhất, hệ số tự do; cộng, trừ hai đa thức một biến theo hàng ngang hoặc cột dọc.',
        eq: 'Phiếu bài tập cộng trừ đa thức'
      },
      {
        w: 26,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá kiến thức Thống kê (Biểu đồ quạt, đoạn thẳng), Tỉ lệ thức, Dãy tỉ số bằng nhau, Đại lượng tỉ lệ và Đa thức một biến.',
        eq: 'Đề kiểm tra giữa kỳ 2 chuẩn'
      },
      {
        w: 27,
        t: 'Chương VII: Biểu thức đại số và đa thức một biến',
        n: 'Chương VII: Bài 27: Phép nhân đa thức một biến (2 tiết) & Bài 28: Phép chia đa thức một biến (2 tiết)',
        y: '- Thực hiện nhân đơn thức với đa thức, nhân đa thức với đa thức; chia đa thức cho đa thức một biến đã sắp xếp.',
        eq: 'Bảng quy tắc nhân chia đa thức'
      },
      {
        w: 28,
        t: 'Chương VII & VIII: Làm quen với biến cố và xác suất của biến cố',
        n: 'Chương VII: Luyện tập chung, Bài tập cuối chương VII (2 tiết) & Chương VIII: Bài 29: Làm quen với biến cố (2 tiết)',
        y: '- Hệ thống hoá kiến thức đa thức một biến.\n- Nhận biết biến cố chắc chắn, biến cố không thể và biến cố ngẫu nhiên.',
        eq: 'Xúc xắc, đồng xu thí nghiệm'
      },
      {
        w: 29,
        t: 'Chương VIII: Biến cố và xác suất của biến cố',
        n: 'Chương VIII: Bài 30: Xác suất của biến cố (2 tiết) & Luyện tập chung, Bài tập cuối chương VIII (2 tiết)',
        y: '- Khái niệm xác suất của biến cố ngẫu nhiên; tính xác suất của biến cố trong một số trò chơi đơn giản (quay số, rút thẻ).',
        eq: 'Vòng quay may mắn, hộp thẻ số'
      },
      {
        w: 30,
        t: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
        n: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác - Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác (2 tiết) & Bài 32: Quan hệ giữa đường vuông góc và đường xiên (2 tiết)',
        y: '- Nắm vững định lí cạnh đối diện với góc lớn hơn là cạnh lớn hơn; quan hệ giữa đường vuông góc và đường xiên, hình chiếu.',
        eq: 'Bộ thước compa, êke'
      },
      {
        w: 31,
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán Lớp 7 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 7 theo CT GDPT 2018.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
      },
      {
        w: 32,
        t: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
        n: 'Chương IX: Chữa bài kiểm tra cuối HK2 & Bài 33: Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác (2 tiết) & Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong tam giác (2 tiết)',
        y: '- Chữa bài kiểm tra cuối HK2.\n- Vận dụng bất đẳng thức tam giác; nhận biết trọng tâm và tính chất 3 đường phân giác.',
        eq: 'Mô hình tam giác cắt bằng bìa cứng'
      },
      {
        w: 33,
        t: 'Dự án STEM Toán 7',
        n: 'Dự án STEM Toán 7: "Thiết kế Trò chơi Xác suất & Mô hình Cầu treo Dây văng Hình học" (4 tiết)',
        y: '- Vận dụng kiến thức tam giác bằng nhau, tỉ số bằng nhau và xác suất để chế tạo mô hình cầu treo chịu lực và gian hàng trò chơi dân gian.',
        eq: 'Que kem, dây dù, súng bắn keo, máy chiếu'
      },
      {
        w: 34,
        t: 'Chương IX & Ôn tập cuối năm',
        n: 'Chương IX: Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong tam giác (2 tiết) & Ôn tập toàn diện chuẩn bị tổng kết năm học (2 tiết)',
        y: '- Nhận biết trực tâm và tâm đường tròn ngoại tiếp tam giác; hệ thống hóa toàn bộ kiến thức Số học, Đại số, Hình học và Thống kê Toán 7.',
        eq: 'Hệ thống đề ôn tập chuẩn ma trận'
      },
      {
        w: 35,
        t: 'Đánh giá định kỳ',
        n: 'Tổng kết năm học & Đánh giá xếp loại cả năm môn Toán Lớp 7 (4 tiết)',
        y: '- Tổng kết đánh giá kết quả học tập và rèn luyện môn Toán cả năm của học sinh Lớp 7.',
        eq: 'Sổ theo dõi đánh giá học sinh'
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
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 17 || item.w === 35 ? 'Kiểm tra cuối kỳ' : item.w === 32 ? 'Dự án STEM Toán học' : ''
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
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá tổng hợp kiến thức HK1 (Đa thức, Hằng đẳng thức, Tứ giác, Định lí Thalès, Thống kê biểu đồ).',
        eq: 'Đề kiểm tra cuối kỳ chuẩn'
      },
      {
        w: 17,
        t: 'HĐTN & Chữa bài kiểm tra',
        n: 'Hoạt động thực hành trải nghiệm: Công thức lãi kép, tính toán đa thức với GeoGebra & Chữa bài kiểm tra cuối HK1 (4 tiết)',
        y: '- Hiểu công thức tính lãi kép A = P(1 + r)^n; sử dụng GeoGebra tính toán đa thức; chữa bài kiểm tra cuối HK1.',
        eq: 'Phần mềm GeoGebra, máy tính Casio FX-580VNX'
      },
      {
        w: 18,
        t: 'Sơ kết Học kỳ 1',
        n: 'Hoạt động thực hành trải nghiệm: Phân tích đặc điểm khí hậu Việt Nam & Sơ kết Học kỳ 1 môn Toán Lớp 8 (4 tiết)',
        y: '- Đọc và phân tích biểu đồ khí hậu Việt Nam; sơ kết, đánh giá quá trình học tập và rèn luyện môn Toán trong Học kỳ 1.',
        eq: 'Atlas Địa lí, bảng tổng kết kết quả học tập HK1'
      },

      // HỌC KỲ 2 (Tuần 19 - 35)
      {
        w: 19,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Phân thức đại số - Bài 21: Phân thức đại số (2 tiết) & Bài 22: Tính chất cơ bản của phân thức đại số (2 tiết)',
        y: '- Nhận biết phân thức đại số, tử thức và mẫu thức; nắm vững tính chất cơ bản của phân thức để rút gọn và quy đồng mẫu thức.',
        eq: 'Phiếu học tập quy đồng mẫu thức'
      },
      {
        w: 20,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Phân thức đại số - Luyện tập chung (Trang 12) (1 tiết) & Bài 23: Phép cộng và phép trừ phân thức đại số (3 tiết)',
        y: '- Thực hiện phép cộng, trừ các phân thức đại số cùng mẫu và khác mẫu; vận dụng các tính chất để tính toán hợp lí.',
        eq: 'Bảng phụ, phiếu học tập nhóm'
      },
      {
        w: 21,
        t: 'Chương VI: Phân thức đại số',
        n: 'Chương VI: Phân thức đại số - Bài 24: Phép nhân và phép chia phân thức đại số (2 tiết) & Luyện tập chung, Bài tập cuối chương VI (2 tiết)',
        y: '- Thực hiện phép nhân, chia phân thức đại số; rút gọn các biểu thức hữu tỉ phức tạp.',
        eq: 'Phiếu bài tập rút gọn biểu thức'
      },
      {
        w: 22,
        t: 'Chương VII: Phương trình bậc nhất và hàm số',
        n: 'Chương VII: Phương trình bậc nhất và hàm số bậc nhất - Bài 25: Phương trình bậc nhất một ẩn (2 tiết) & Bài 26: Giải bài toán bằng cách lập phương trình (2 tiết)',
        y: '- Giải phương trình bậc nhất một ẩn ax + b = 0 (a ≠ 0); giải các bài toán thực tế bằng cách lập phương trình.',
        eq: 'Phiếu bài toán thực tế chuyển động, năng suất'
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
        t: 'Đánh giá định kỳ',
        n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán Lớp 8 (4 tiết)',
        y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm của học sinh Lớp 8.',
        eq: 'Đề kiểm tra cuối năm chuẩn'
      },
      {
        w: 32,
        t: 'Chương X & Chữa bài kiểm tra',
        n: 'Chương X: Bài 38: Hình chóp tam giác đều & Bài 39: Hình chóp tứ giác đều (2 tiết) & Chữa bài kiểm tra cuối HK2 (2 tiết)',
        y: '- Nhận biết hình chóp tam giác đều, tứ giác đều; tính diện tích xung quanh, thể tích; chữa bài kiểm tra cuối HK2.',
        eq: 'Mô hình hình chóp tam giác đều, tứ giác đều khai triển'
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
        t: 'Tổng kết năm học',
        n: 'Tổng kết năm học & Đánh giá xếp loại môn Toán Lớp 8 cả năm (4 tiết)',
        y: '- Tổng kết, đánh giá toàn diện quá trình học tập và xếp loại học lực môn Toán Lớp 8 của học sinh.',
        eq: 'Hồ sơ học tập, bảng tổng kết điểm số cả năm'
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
        notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM Toán học' : ''
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
      eq: 'Bảng phụ, phiếu học tập giải hệ phương trình'
    },
    {
      w: 2,
      t: 'Chương I: Phương trình và hệ hai phương trình bậc nhất hai ẩn',
      n: 'Chương I: Bài 3: Giải bài toán bằng cách lập hệ phương trình (2 tiết) & Luyện tập chung (Trang 21) (2 tiết)',
      y: '- Vận dụng giải các bài toán thực tế: toán chuyển động, toán năng suất làm chung làm riêng, toán phần trăm nồng độ dung dịch.',
      eq: 'Phiếu bài tập phân dạng toán thực tế'
    },
    {
      w: 3,
      t: 'Chương I & II: Bất đẳng thức và bất phương trình',
      n: 'Chương I: Luyện tập chung, Bài tập cuối chương I (2 tiết) & Chương II: Bất đẳng thức. Bất phương trình bậc nhất một ẩn - Bài 4: Bất đẳng thức (2 tiết)',
      y: '- Hiểu khái niệm bất đẳng thức và các tính chất cơ bản (liên hệ giữa thứ tự với phép cộng, phép nhân); chứng minh bất đẳng thức đơn giản.',
      eq: 'Máy tính Casio FX-580VNX, bảng phụ'
    },
    {
      w: 4,
      t: 'Chương II: Bất đẳng thức và bất phương trình',
      n: 'Chương II: Bài 5: Bất phương trình bậc nhất một ẩn (2 tiết) & Luyện tập chung, Bài tập cuối chương II (2 tiết)',
      y: '- Giải bất phương trình bậc nhất một ẩn ax + b > 0 (ax + b < 0); biểu diễn tập nghiệm trên trục số; giải bài toán thực tế ràng buộc điều kiện.',
      eq: 'Trục số trực quan, phiếu bài tập'
    },
    {
      w: 5,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Căn bậc hai và căn bậc ba - Bài 6: Căn bậc hai và căn thức bậc hai (2 tiết) & Bài 7: Khai căn bậc hai với phép nhân và phép chia (2 tiết)',
      y: '- Hiểu định nghĩa căn bậc hai số học, điều kiện xác định của căn thức bậc hai; áp dụng quy tắc khai phương một tích, một thương.',
      eq: 'Bảng công thức căn thức bậc hai'
    },
    {
      w: 6,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Luyện tập chung (Trang 53) (1 tiết) & Bài 8: Biến đổi đơn giản căn thức bậc hai (3 tiết)',
      y: '- Thực hiện đưa thừa số ra ngoài/vào trong dấu căn; trục căn thức ở mẫu; khử mẫu của biểu thức lấy căn.',
      eq: 'Máy tính Casio hỗ trợ rút gọn'
    },
    {
      w: 7,
      t: 'Chương III: Căn bậc hai và căn bậc ba',
      n: 'Chương III: Bài 9: Căn bậc ba và căn thức bậc ba (2 tiết) & Luyện tập chung, Bài tập cuối chương III (2 tiết)',
      y: '- Hiểu khái niệm căn bậc ba; tính toán, rút gọn các biểu thức chứa căn bậc ba; giải phương trình chứa căn đơn giản.',
      eq: 'Phiếu bài tập rút gọn biểu thức chứa căn'
    },
    {
      w: 8,
      t: 'Chương IV: Hệ thức lượng trong tam giác vuông',
      n: 'Chương IV: Hệ thức lượng trong tam giác vuông - Bài 10: Tỉ số lượng giác của góc nhọn (2 tiết) & Bài 11: Một số hệ thức về cạnh và góc trong tam giác vuông (2 tiết)',
      y: '- Nắm vững định nghĩa sin, cos, tan, cot; áp dụng hệ thức lượng giải tam giác vuông và tính toán trong thực tế (đo chiều cao cây, độ dốc dốc cầu).',
      eq: 'Máy tính Casio FX-580VNX, ê ke, giác kế'
    },
    {
      w: 9,
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá chuẩn kiến thức Hệ phương trình, Bất phương trình, Căn thức, Hệ thức lượng tam giác vuông.',
      eq: 'Đề kiểm tra giữa kỳ chuẩn cấu trúc'
    },
    {
      w: 10,
      t: 'Chương IV & V: Đường tròn',
      n: 'Chương IV: Luyện tập chung, Bài tập cuối chương IV (2 tiết) & Chương V: Đường tròn - Bài 12: Mở đầu về đường tròn (2 tiết)',
      y: '- Nhận biết đường tròn, tính chất đối xứng, mối liên hệ đường kính và dây cung của đường tròn.',
      eq: 'Compa, thước kẻ, mô hình đường tròn'
    },
    {
      w: 11,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Đường tròn - Bài 13: Cung và dây, góc với đường tròn (2 tiết) & Bài 14: Độ dài cung tròn, diện tích hình quạt (2 tiết)',
      y: '- So sánh cung và dây; tính độ dài đường tròn, cung tròn, diện tích hình tròn, hình quạt.',
      eq: 'Compa, bảng công thức hình tròn'
    },
    {
      w: 12,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Luyện tập chung (Trang 96) (1 tiết) & Bài 15: Vị trí tương đối đường thẳng và đường tròn (3 tiết)',
      y: '- Nhận biết vị trí tương đối của đường thẳng và đường tròn, tiếp tuyến của đường tròn.',
      eq: 'Ê ke, compa, thước thẳng'
    },
    {
      w: 13,
      t: 'Chương V: Đường tròn',
      n: 'Chương V: Bài 16: Vị trí tương đối của hai đường tròn (2 tiết) & Luyện tập chung (Trang 108) (2 tiết)',
      y: '- Xác định vị trí tương đối hai đường tròn (cắt nhau, tiếp xúc, ngoài nhau) dựa vào hệ thức nối tâm.',
      eq: 'Compa, phiếu bài tập hình học'
    },
    {
      w: 14,
      t: 'Chương V & HĐTN',
      n: 'Chương V: Bài tập cuối chương V (2 tiết) & Hoạt động thực hành: Pha chế dung dịch theo nồng độ (2 tiết)',
      y: '- Tổng hợp kiến thức hình học; vận dụng hệ phương trình giải toán pha chế thực tế.',
      eq: 'Sơ đồ tư duy chương V, phiếu thí nghiệm'
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
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá tổng hợp toàn diện kết quả học tập môn Toán Lớp 9 trong Học kỳ 1.',
      eq: 'Đề kiểm tra cuối kỳ chuẩn'
    },
    {
      w: 17,
      t: 'Chữa bài & Ôn tập Học kỳ 1',
      n: 'Chữa bài kiểm tra cuối HK1 & Ôn tập chuyên đề Đại số: Hệ PT, Bất phương trình và Căn thức bậc hai (4 tiết)',
      y: '- Chữa bài kiểm tra cuối HK1; hệ thống hóa phương pháp giải toán Đại số HK1 Toán 9; rèn kỹ năng biến đổi đại số chuẩn xác.',
      eq: 'Hệ thống đề ôn tập chuyên đề Đại số'
    },
    {
      w: 18,
      t: 'Sơ kết Học kỳ 1',
      n: 'Ôn tập chuyên đề Hình học: Hệ thức lượng tam giác vuông & Sơ kết Học kỳ 1 môn Toán Lớp 9 (4 tiết)',
      y: '- Hệ thống hóa các định lí hình học HK1; tổng kết, đánh giá quá trình học tập và rèn luyện môn Toán trong Học kỳ 1.',
      eq: 'Bảng tổng kết kết quả học tập HK1'
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
      t: 'Đánh giá định kỳ',
      n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Toán Lớp 9 (4 tiết)',
      y: '- Đánh giá tổng kết kết quả học tập môn Toán cả năm và hoàn tất chương trình Toán THCS cho học sinh Lớp 9.',
      eq: 'Đề kiểm tra cuối năm chuẩn'
    },
    {
      w: 32,
      t: 'HĐTN & Chữa bài kiểm tra',
      n: 'Chữa bài kiểm tra cuối HK2 & Hoạt động thực hành trải nghiệm: Xác định tần số, vẽ biểu đồ Excel (4 tiết)',
      y: '- Chữa bài kiểm tra cuối HK2; sử dụng hàm COUNTIF và biểu đồ trong Excel xử lý số liệu thống kê; ứng dụng mô hình xác suất.',
      eq: 'Phần mềm Excel, dữ liệu thực nghiệm di truyền học'
    },
    {
      w: 33,
      t: 'Dự án STEM Toán 9',
      n: 'Dự án STEM Toán 9: "Mô hình Cầu treo Parabol & Thiết kế Bao bì Hình trụ - Hình nón - Hình cầu" (4 tiết)',
      y: '- Ứng dụng hàm số bậc hai thiết kế cầu treo chịu lực và tính toán tối ưu hóa thể tích bao bì chứa sản phẩm hình trụ/hình nón/hình cầu.',
      eq: 'Vật liệu tái chế, giấy A0, kéo, máy chiếu'
    },
    {
      w: 34,
      t: 'Luyện thi vào Lớp 10',
      n: 'Luyện giải bộ đề thi tuyển sinh vào Lớp 10 THPT môn Toán (Chuyên đề Rút gọn biểu thức, Hệ PT, Parabol, PT bậc hai & Hình học tổng hợp) (4 tiết)',
      y: '- Rèn luyện kỹ năng phân tích đề thi tuyển sinh lớp 10, quản lý thời gian làm bài thi và kỹ thuật trình bày bài toán đạt điểm tối đa.',
      eq: 'Bộ đề thi tuyển sinh vào Lớp 10 THPT chính thức các năm'
    },
    {
      w: 35,
      t: 'Tổng kết năm học',
      n: 'Tổng kết năm học & Hoàn tất chương trình môn Toán Lớp 9 cả năm (4 tiết)',
      y: '- Đánh giá xếp loại cả năm học và chuẩn bị hành trang toán học bước vào bậc Trung học phổ thông.',
      eq: 'Hồ sơ học tập, bảng tổng kết điểm số cả năm'
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
      notes: item.w === 9 || item.w === 26 ? 'Kiểm tra giữa kỳ' : item.w === 16 || item.w === 31 ? 'Kiểm tra cuối kỳ' : item.w === 33 ? 'Dự án STEM Toán học' : ''
    });
  });

  return list;
}
