import { RawSecondaryLesson } from './curriculumSecondary';
import { RawPrimaryLesson } from './curriculumPrimary';
import { RawHighSchoolLesson } from './curriculumHighSchool';

export interface InformaticsLessonDef {
  week: number;
  topic: string;
  name: string;
  periods: number;
  yccd: string;
  equipment?: string;
  location?: string;
  notes?: string;
}

// =========================================================================
// 1. TIN HỌC TIỂU HỌC (LỚP 3, 4, 5 - KNTT) - 35 TIẾT (1 TIẾT/TUẦN)
// =========================================================================
export const PRIMARY_INFORMATICS_DATA: Record<number, InformaticsLessonDef[]> = {
  3: [
    // Chủ đề A: Máy tính và em
    {
      week: 1,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Thông tin và quyết định (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết được thông tin thu nhận từ các giác quan (thị giác, thính giác, xúc giác).\n- Nêu được ví dụ đơn giản về việc đưa ra quyết định dựa trên thông tin nhận được.'
    },
    {
      week: 2,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Thông tin và quyết định (Tiết 2)',
      periods: 1,
      yccd: '- Phân biệt được thông tin và vật mang thông tin.\n- Thực hành xác định thông tin quan trọng trong học tập và sinh hoạt hàng ngày.'
    },
    {
      week: 3,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Khám phá máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Nhận diện được 4 thành phần cơ bản của máy tính để bàn: thân máy, màn hình, bàn phím, chuột.\n- Nêu được chức năng cơ bản của từng bộ phận.'
    },
    {
      week: 4,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Khám phá máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Nhận biết một số loại máy tính thông dụng khác: máy tính xách tay (Laptop), máy tính bảng (Tablet).\n- Biết cách bật/tắt máy tính đúng quy trình an toàn.'
    },
    {
      week: 5,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 3: Chuột máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Biết cách cầm chuột máy tính đúng cách bằng tay phải.\n- Thực hiện được các thao tác cơ bản: di chuyển chuột, nháy chuột, nháy đúp chuột.'
    },
    {
      week: 6,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 3: Chuột máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện thành thạo thao tác kéo thả chuột (Drag and Drop) và cuộn chuột.\n- Luyện tập sử dụng chuột qua phần mềm trò chơi rèn luyện phản xạ (Basic Mouse Skills).'
    },
    {
      week: 7,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 4: Bàn phím máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết khu vực chính của bàn phím: hàng phím cơ sở, hàng phím trên, hàng phím dưới, hàng phím số.\n- Xác định được hai phím có gờ (F và J) trên hàng phím cơ sở để đặt ngón tay trỏ.'
    },
    {
      week: 8,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 4: Bàn phím máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Nắm quy tắc đặt 8 ngón tay trên hàng phím cơ sở.\n- Biết chức năng của phím cách (Space), phím Enter, phím xóa (Backspace/Delete).'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 3',
      periods: 1,
      yccd: '- Đánh giá mức độ đạt chuẩn kiến thức kỹ năng từ Tuần 1 đến Tuần 8 về nhận diện máy tính và thao tác chuột, bàn phím.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    {
      week: 10,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 5: Tập gõ bàn phím (Tiết 1)',
      periods: 1,
      yccd: '- Làm quen với phần mềm luyện gõ bàn phím 10 ngón (TypingMaster / RapidTyping).\n- Thực hành gõ các phím trên hàng phím cơ sở đúng ngón.'
    },
    {
      week: 11,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 5: Tập gõ bàn phím (Tiết 2)',
      periods: 1,
      yccd: '- Mở rộng gõ các phím trên hàng phím trên và hàng phím dưới bằng 10 ngón.\n- Rèn luyện tư thế ngồi ngay ngắn, giữ khoảng cách mắt an toàn với màn hình.'
    },
    {
      week: 12,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 6: Sử dụng máy tính an toàn (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết các nguy cơ mất an toàn về điện, dây cáp, ổ cắm khi sử dụng máy tính.\n- Biết cách bảo vệ thị lực và cột sống khi ngồi trước máy tính.'
    },
    {
      week: 13,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 6: Sử dụng máy tính an toàn (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện nội quy phòng máy tính của nhà trường.\n- Nêu được thời gian sử dụng thiết bị số hợp lý để không ảnh hưởng đến sức khỏe.'
    },
    // Chủ đề B: Mạng máy tính và Internet
    {
      week: 14,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 7: Làm quen với Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được khái niệm đơn giản về Internet và lợi ích của Internet trong học tập, giải trí.\n- Nhận diện biểu tượng trình duyệt web (Google Chrome, Microsoft Edge).'
    },
    {
      week: 15,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 7: Làm quen với Internet (Tiết 2)',
      periods: 1,
      yccd: '- Biết cách mở trình duyệt web và nhập địa chỉ trang web thiếu nhi.\n- Thực hiện các thao tác điều hướng cơ bản: Quay lại (Back), Chuyển tiếp (Forward), Tải lại (Reload).'
    },
    {
      week: 16,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 8: Khám phá thông tin trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Xem các thông tin bổ ích (tin tức, video học tập, bài hát thiếu nhi) trên một số trang web an toàn.\n- Phân biệt được thông tin phù hợp và không phù hợp với lứa tuổi.'
    },
    {
      week: 17,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 8: Khám phá thông tin trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Biết nhờ người lớn trợ giúp khi gặp thông tin lạ, không lành mạnh trên mạng.\n- Ôn tập kiến thức và kỹ năng Tin học Học kỳ 1 chuẩn bị kiểm tra.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 3',
      periods: 1,
      yccd: '- Đánh giá tổng hợp kiến thức và kỹ năng thực hành Tin học Lớp 3 trong toàn bộ Học kỳ 1.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    // Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 19,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 9: Sắp xếp để dễ tìm (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được ý nghĩa của việc sắp xếp đồ vật, dữ liệu một cách khoa học, ngăn nắp.\n- Nêu ví dụ về việc sắp xếp sách vở, đồ dùng học tập theo môn học.'
    },
    {
      week: 20,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 9: Sắp xếp để dễ tìm (Tiết 2)',
      periods: 1,
      yccd: '- Làm quen với khái niệm thư mục (Folder) và tệp (File) trên máy tính.\n- Biết cách tìm kiếm tệp dữ liệu đã được phân loại trong thư mục.'
    },
    {
      week: 21,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 10: Lưu trữ và phân loại thông tin (Tiết 1)',
      periods: 1,
      yccd: '- Biết cách tạo thư mục mới trên màn hình nền (Desktop) hoặc ổ đĩa cá nhân.\n- Đặt tên thư mục có ý nghĩa theo tên học sinh và môn học.'
    },
    {
      week: 22,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 10: Lưu trữ và phân loại thông tin (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện đổi tên và xóa thư mục an toàn khi có sự hướng dẫn của giáo viên.\n- Rèn luyện thói quen lưu trữ dữ liệu học tập ngăn nắp.'
    },
    // Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 23,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 11: Ứng xử an toàn và bảo mật thông tin cá nhân (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết thông tin cá nhân cần bảo mật: họ tên, địa chỉ nhà, số điện thoại, mật khẩu.\n- Biết không chia sẻ thông tin cá nhân cho người lạ trên mạng.'
    },
    {
      week: 24,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 11: Ứng xử an toàn và bảo mật thông tin cá nhân (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành các quy tắc ứng xử lịch sự, văn minh khi tham gia môi trường số.\n- Báo ngay cho thầy cô, cha mẹ khi bị đe dọa hoặc gặp rắc rối trên mạng.'
    },
    // Chủ đề E: Ứng dụng tin học
    {
      week: 25,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 12: Làm quen với phần mềm vẽ hình Paint (Tiết 1)',
      periods: 1,
      yccd: '- Khởi động và thoát khỏi phần mềm đồ họa Paint.\n- Nhận diện vùng bảng vẽ, hộp công cụ (Tools), bảng màu (Colors).'
    },
    {
      week: 26,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 12: Làm quen với phần mềm vẽ hình Paint (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng công cụ Bút chì (Pencil), Cọ vẽ (Brushes) và Tẩy (Eraser) để vẽ hình tự do.\n- Biết chọn màu vẽ và độ dày nét vẽ (Size).'
    },
    {
      week: 27,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 3',
      periods: 1,
      yccd: '- Đánh giá kỹ năng tạo thư mục, bảo vệ thông tin và vẽ hình cơ bản trên phần mềm Paint.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    {
      week: 28,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 13: Vẽ hình đơn giản và tạo bức tranh (Tiết 1)',
      periods: 1,
      yccd: '- Sử dụng các công cụ vẽ hình mẫu: Hình chữ nhật (Rectangle), Hình tròn (Oval), Đường thẳng (Line).\n- Sử dụng công cụ Tô màu (Fill with color) để tô màu tranh vẽ kín.'
    },
    {
      week: 29,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 13: Vẽ hình đơn giản và tạo bức tranh (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành vẽ bức tranh đề tài: "Ngôi nhà của em" hoặc "Cảnh đẹp quê hương".\n- Biết lưu bức tranh vào thư mục cá nhân với định dạng PNG/JPG.'
    },
    {
      week: 30,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 14: Soạn thảo văn bản đơn giản (Tiết 1)',
      periods: 1,
      yccd: '- Làm quen với phần mềm soạn thảo Word / WordPad.\n- Bật phần mềm Unikey và luyện gõ tiếng Việt có dấu theo kiểu gõ Telex.'
    },
    {
      week: 31,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 14: Soạn thảo văn bản đơn giản (Tiết 2)',
      periods: 1,
      yccd: '- Gõ được một bài thơ ngắn hoặc lời chúc mừng sinh nhật bằng tiếng Việt có dấu.\n- Chọn phông chữ, cỡ chữ, màu chữ và lưu tệp văn bản.'
    },
    // Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính
    {
      week: 32,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Thực hiện công việc theo các bước (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được công việc hàng ngày có thể chia thành các bước tuần tự rõ ràng.\n- Mô tả các bước thực hiện một công việc quen thuộc (rửa tay, gấp áo, chuẩn bị sách vở).'
    },
    {
      week: 33,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Thực hiện công việc theo các bước (Tiết 2)',
      periods: 1,
      yccd: '- Sắp xếp lại thứ tự các bước để hoàn thành một nhiệm vụ đúng logic.\n- Phát hiện lỗi khi các bước bị đảo lộn thứ tự.'
    },
    {
      week: 34,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 16: Em làm quen với lập trình trực quan (1 tiết)',
      periods: 1,
      yccd: '- Trải nghiệm điều khiển nhân vật di chuyển theo từng bước trên nền tảng Code.org / ScratchJr.\n- Ôn tập toàn diện kiến thức Tin học Lớp 3 chuẩn bị kiểm tra cuối năm.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 3',
      periods: 1,
      yccd: '- Đánh giá tổng kết năng lực Tin học Lớp 3 theo Chuẩn đầu ra Chương trình GDPT 2018.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ],
  4: [
    // Chủ đề A: Máy tính và em
    {
      week: 1,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Phần cứng và phần mềm máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được sự khác nhau giữa phần cứng (Hardware) và phần mềm (Software).\n- Kể tên các thiết bị phần cứng chính và một số phần mềm ứng dụng thông dụng.'
    },
    {
      week: 2,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Phần cứng và phần mềm máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Hiểu được mối quan hệ phối hợp giữa phần cứng và phần mềm trong hoạt động của máy tính.\n- Biết bảo quản thiết bị phần cứng và sử dụng phần mềm đúng cách.'
    },
    {
      week: 3,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Thao tác gõ bàn phím đúng cách (Tiết 1)',
      periods: 1,
      yccd: '- Củng cố quy tắc gõ 10 ngón trên toàn bộ các hàng phím chữ và phím số.\n- Luyện tập gõ câu văn, đoạn văn ngắn bằng phần mềm gõ 10 ngón.'
    },
    {
      week: 4,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Thao tác gõ bàn phím đúng cách (Tiết 2)',
      periods: 1,
      yccd: '- Đạt tốc độ gõ chuẩn, giảm thiểu tỉ lệ gõ sai.\n- Giữ tư thế ngồi đúng chuẩn, điều chỉnh độ sáng màn hình phù hợp.'
    },
    // Chủ đề B: Mạng máy tính và Internet
    {
      week: 5,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 3: Tìm kiếm thông tin trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết máy tìm kiếm (Search Engine, ví dụ Google).\n- Biết cách nhập từ khóa tìm kiếm thông tin theo chủ đề học tập.'
    },
    {
      week: 6,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 3: Tìm kiếm thông tin trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Tìm kiếm hình ảnh, bài viết, video phục vụ bài học Lịch sử - Địa lí, Khoa học.\n- Lưu hình ảnh từ Internet vào thư mục máy tính đúng cách.'
    },
    {
      week: 7,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 4: Đánh giá thông tin tìm kiếm trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết thông tin trên Internet có thể không chính xác hoặc không đáng tin cậy.\n- Nêu được dấu hiệu của một trang web đáng tin cậy (nguồn cơ quan giáo dục, báo chí chính thống).'
    },
    {
      week: 8,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 4: Đánh giá thông tin tìm kiếm trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Biết đối chiếu thông tin tìm được với sách giáo khoa và hỏi ý kiến thầy cô, người lớn.\n- Ôn tập chuẩn bị kiểm tra giữa Học kỳ 1.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 4',
      periods: 1,
      yccd: '- Đánh giá kiến thức phần cứng, phần mềm và kỹ năng tìm kiếm, đánh giá thông tin trên mạng.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    // Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 10,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Quản lý tệp và thư mục trong máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được cấu trúc cây thư mục gồm ổ đĩa, thư mục mẹ và thư mục con.\n- Thực hiện tạo cây thư mục nhiều cấp để phân loại dữ liệu khoa học.'
    },
    {
      week: 11,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Quản lý tệp và thư mục trong máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện sao chép (Copy), di chuyển (Cut), đổi tên (Rename) và xóa (Delete) tệp, thư mục.\n- Phục hồi tệp từ thùng rác (Recycle Bin) khi cần thiết.'
    },
    // Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 12,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 6: Bản quyền nội dung và tôn trọng tác giả (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu khái niệm quyền tác giả (bản quyền) đối với văn bản, hình ảnh, âm nhạc, phần mềm.\n- Biết xin phép hoặc ghi rõ nguồn tác giả khi sử dụng tài liệu từ Internet.'
    },
    {
      week: 13,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 6: Bản quyền nội dung và tôn trọng tác giả (Tiết 2)',
      periods: 1,
      yccd: '- Không tự ý sao chép, chia sẻ dữ liệu riêng tư của người khác khi chưa được đồng ý.\n- Hình thành ý thức văn hóa số và tuân thủ quy tắc bản quyền.'
    },
    // Chủ đề E: Ứng dụng tin học
    {
      week: 14,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 7: Soạn thảo văn bản và chèn hình ảnh (Tiết 1)',
      periods: 1,
      yccd: '- Thực hiện định dạng đoạn văn bản: căn lề (trái, phải, giữa, đều hai bên), thụt lề đầu dòng, giãn dòng.\n- Chèn hình ảnh minh họa từ máy tính vào văn bản Word.'
    },
    {
      week: 15,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 7: Soạn thảo văn bản và chèn hình ảnh (Tiết 2)',
      periods: 1,
      yccd: '- Thay đổi kích thước và vị trí hình ảnh (Wrap Text) trong văn bản.\n- Hoàn thiện một bài báo cáo học tập hoặc bài văn ngắn có hình ảnh sinh động.'
    },
    {
      week: 16,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 8: Trình bày bảng trong văn bản (Tiết 1)',
      periods: 1,
      yccd: '- Biết cách chèn bảng biểu (Table) với số hàng và số cột theo yêu cầu.\n- Nhập văn bản và số liệu vào các ô trong bảng.'
    },
    {
      week: 17,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 8: Trình bày bảng trong văn bản (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện chèn thêm hàng, thêm cột, xóa hàng, xóa cột và căn lề dữ liệu trong bảng.\n- Tạo thời khóa biểu hoặc bảng phân công trực nhật lớp.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 4',
      periods: 1,
      yccd: '- Đánh giá kỹ năng quản lý tệp, định dạng văn bản nâng cao và chèn hình ảnh, bảng biểu.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    {
      week: 19,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 9: Làm quen với phần mềm trình chiếu PowerPoint (Tiết 1)',
      periods: 1,
      yccd: '- Khởi động và nhận diện giao diện phần mềm Microsoft PowerPoint.\n- Thêm trang chiếu mới (New Slide), nhập tiêu đề và nội dung văn bản.'
    },
    {
      week: 20,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 9: Làm quen với phần mềm trình chiếu PowerPoint (Tiết 2)',
      periods: 1,
      yccd: '- Chèn hình ảnh minh họa vào trang chiếu.\n- Chọn mẫu định dạng (Design / Theme) có sẵn cho bài trình chiếu.'
    },
    {
      week: 21,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 10: Thêm hiệu ứng cho trang chiếu (Tiết 1)',
      periods: 1,
      yccd: '- Tạo hiệu ứng chuyển trang chiếu (Transitions) phù hợp.\n- Tạo hiệu ứng xuất hiện (Animations) cho đối tượng văn bản và hình ảnh.'
    },
    {
      week: 22,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 10: Thêm hiệu ứng cho trang chiếu (Tiết 2)',
      periods: 1,
      yccd: '- Điều chỉnh tốc độ và thứ tự xuất hiện của hiệu ứng.\n- Chạy thử bài trình chiếu toàn màn hình (phím F5) và điều khiển trang chiếu.'
    },
    {
      week: 23,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 11: Thực hành thiết kế bài trình chiếu (Tiết 1)',
      periods: 1,
      yccd: '- Thiết kế bài trình chiếu 3-4 trang chủ đề: "Giới thiệu loài động vật em yêu quý".\n- Phối hợp văn bản, hình ảnh và hiệu ứng chuyển động hài hòa.'
    },
    {
      week: 24,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 11: Thực hành thiết kế bài trình chiếu (Tiết 2)',
      periods: 1,
      yccd: '- Thuyết trình bài trình chiếu trước nhóm bạn học.\n- Nhận xét và góp ý hoàn thiện bài trình chiếu của bạn bè.'
    },
    // Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính
    {
      week: 25,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với môi trường lập trình Scratch (Tiết 1)',
      periods: 1,
      yccd: '- Khám phá giao diện Scratch 3.0: Vùng sân khấu (Stage), nhân vật (Sprite), bảng khối lệnh (Blocks), vùng viết kịch bản (Script).'
    },
    {
      week: 26,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với môi trường lập trình Scratch (Tiết 2)',
      periods: 1,
      yccd: '- Lắp ghép các khối lệnh di chuyển (Move), xoay (Turn) và đổi hướng nhân vật.\n- Chạy kịch bản bằng cách nháy vào lá cờ xanh (Green Flag).'
    },
    {
      week: 27,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 4',
      periods: 1,
      yccd: '- Đánh giá kỹ năng thiết kế bài trình chiếu PowerPoint và thao tác lập trình Scratch cơ bản.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    {
      week: 28,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Tạo chương trình có nhân vật di chuyển và âm thanh (Tiết 1)',
      periods: 1,
      yccd: '- Lập trình cho nhân vật đổi trang phục (Next Costume) tạo chuyển động bước đi sống động.\n- Thêm khối lệnh phát âm thanh (Play Sound).'
    },
    {
      week: 29,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Tạo chương trình có nhân vật di chuyển và âm thanh (Tiết 2)',
      periods: 1,
      yccd: '- Thêm phông nền sân khấu (Backdrop) phù hợp với chủ đề kịch bản.\n- Lập trình nhân vật nói lời chào bằng khối lệnh Say.'
    },
    {
      week: 30,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Lập trình với cấu trúc lặp lại (Repeat) (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết các hành động lặp đi lặp lại trong đời sống và trong chương trình.\n- Sử dụng khối lệnh lặp lại số lần xác định (Repeat 10).'
    },
    {
      week: 31,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Lập trình với cấu trúc lặp lại (Repeat) (Tiết 2)',
      periods: 1,
      yccd: '- Kết hợp khối lệnh lặp với phần mở rộng Bút vẽ (Pen) để lập trình vẽ hình vuông, hình tam giác đều.\n- Tối ưu hóa số dòng lệnh nhờ cấu trúc lặp.'
    },
    {
      week: 32,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Tạo trò chơi đơn giản trên Scratch (Tiết 1)',
      periods: 1,
      yccd: '- Lập trình điều khiển nhân vật bằng các phím mũi tên trên bàn phím (When key pressed).\n- Sử dụng khối lệnh liên tục (Forever) để duy trì hoạt động của nhân vật.'
    },
    {
      week: 33,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Tạo trò chơi đơn giản trên Scratch (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng khối lệnh Nếu - Thì (If - Then) và cảm biến va chạm (Touching) để phát hiện nhân vật chạm vào vật cản.\n- Thêm hiệu ứng kết thúc trò chơi.'
    },
    {
      week: 34,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 16: Dự án: Trò chơi học tập của em (1 tiết)',
      periods: 1,
      yccd: '- Hoàn thiện dự án trò chơi "Mèo vượt mê cung" hoặc "Thu gom rác bảo vệ môi trường".\n- Báo cáo sản phẩm và ôn tập chuẩn bị kiểm tra cuối năm.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 4',
      periods: 1,
      yccd: '- Đánh giá tổng kết kỹ năng Tin học và tư duy thuật toán Lớp 4.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ],
  5: [
    // Chủ đề A: Máy tính và em
    {
      week: 1,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Máy tính trong thế giới số (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết vai trò quan trọng của máy tính và thiết bị thông minh trong học tập, y tế, giao thông, sản xuất.\n- Nêu ví dụ về sự chuyển đổi từ thiết bị truyền thống sang thiết bị số.'
    },
    {
      week: 2,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 1: Máy tính trong thế giới số (Tiết 2)',
      periods: 1,
      yccd: '- Phân biệt các loại thiết bị số và cổng kết nối thông dụng (USB, HDMI, Wi-Fi, Bluetooth).\n- Biết cách bảo quản và sử dụng thiết bị số an toàn, bền bỉ.'
    },
    {
      week: 3,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Thu thập và lưu trữ thông tin (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được các cách thu thập thông tin số: ghi âm, chụp ảnh, quay video, tìm kiếm Internet.\n- Biết dung lượng bộ nhớ cơ bản (Byte, KB, MB, GB).'
    },
    {
      week: 4,
      topic: 'Chủ đề A: Máy tính và em',
      name: 'Bài 2: Thu thập và lưu trữ thông tin (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành lưu trữ và sao lưu dữ liệu sang thẻ nhớ USB hoặc Google Drive an toàn.\n- Xóa dữ liệu rác để giải phóng dung lượng ổ đĩa.'
    },
    // Chủ đề B: Mạng máy tính và Internet
    {
      week: 5,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 3: Sử dụng thư điện tử (Email) trao đổi thông tin (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu cấu trúc của một địa chỉ thư điện tử: [Tên người dùng]@[Tên máy chủ].\n- Biết cách đăng nhập vào hộp thư điện tử Gmail / Outlook.'
    },
    {
      week: 6,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 3: Sử dụng thư điện tử (Email) trao đổi thông tin (Tiết 2)',
      periods: 1,
      yccd: '- Soạn thư mới, nhập địa chỉ người nhận, tiêu đề thư và nội dung thư ngắn gọn, lịch sự.\n- Gửi thư và kiểm tra thư đã gửi (Sent).'
    },
    {
      week: 7,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 4: Gửi và nhận tệp đính kèm an toàn (Tiết 1)',
      periods: 1,
      yccd: '- Biết cách đính kèm tệp tài liệu (Word, PowerPoint, hình ảnh) vào thư điện tử.\n- Nhận biết giới hạn dung lượng tệp đính kèm.'
    },
    {
      week: 8,
      topic: 'Chủ đề B: Mạng máy tính và Internet',
      name: 'Bài 4: Gửi và nhận tệp đính kèm an toàn (Tiết 2)',
      periods: 1,
      yccd: '- Mở hộp thư đến (Inbox), đọc thư và tải tệp đính kèm về máy an toàn.\n- Cảnh giác với thư lạ có đính kèm mã độc hoặc liên kết nguy hiểm.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 5',
      periods: 1,
      yccd: '- Đánh giá kiến thức thiết bị số, dung lượng bộ nhớ và kỹ năng sử dụng thư điện tử an toàn.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    // Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 10,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Tìm kiếm và chọn lọc thông tin phục vụ học tập (Tiết 1)',
      periods: 1,
      yccd: '- Sử dụng các từ khóa nâng cao và dấu ngoặc kép (" ") để tìm kiếm chính xác.\n- Chọn lọc thông tin phù hợp với mục tiêu dự án học tập.'
    },
    {
      week: 11,
      topic: 'Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Tìm kiếm và chọn lọc thông tin phục vụ học tập (Tiết 2)',
      periods: 1,
      yccd: '- Tổng hợp thông tin từ nhiều nguồn và lập bảng tóm tắt nội dung.\n- Trích xuất thông tin dưới dạng văn bản và số liệu bảng tính.'
    },
    // Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 12,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 6: Bản quyền số và bảo vệ thông tin cá nhân (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững quy tắc bảo vệ bản quyền khi sử dụng tranh ảnh, tài liệu trực tuyến.\n- Biết cách trích dẫn nguồn tài liệu tham khảo trong bài tập nhóm.'
    },
    {
      week: 13,
      topic: 'Chủ đề D: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 6: Bản quyền số và bảo vệ thông tin cá nhân (Tiết 2)',
      periods: 1,
      yccd: '- Thiết lập mật khẩu mạnh (chứa chữ hoa, chữ thường, số và ký tự đặc biệt).\n- Nhận diện các chiêu trò lừa đảo qua mạng và biết cách phòng tránh.'
    },
    // Chủ đề E: Ứng dụng tin học
    {
      week: 14,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 7: Tạo sơ đồ tư duy bằng phần mềm (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu cấu trúc của sơ đồ tư duy: Chủ đề trung tâm, các nhánh chính và nhánh phụ.\n- Khám phá phần mềm tạo sơ đồ tư duy (Mindomo, Coggle, XMind hoặc PowerPoint).'
    },
    {
      week: 15,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 7: Tạo sơ đồ tư duy bằng phần mềm (Tiết 2)',
      periods: 1,
      yccd: '- Tạo sơ đồ tư duy tóm tắt một bài học Lịch sử / Khoa học Lớp 5.\n- Thêm hình ảnh, biểu tượng và màu sắc để sơ đồ thêm trực quan, dễ nhớ.'
    },
    {
      week: 16,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 8: Thiết kế bài trình chiếu đa phương tiện (Tiết 1)',
      periods: 1,
      yccd: '- Chèn tệp âm thanh (Audio) và video ngắn vào bài trình chiếu PowerPoint.\n- Cắt chỉnh thời lượng phát âm thanh và video phù hợp.'
    },
    {
      week: 17,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 8: Thiết kế bài trình chiếu đa phương tiện (Tiết 2)',
      periods: 1,
      yccd: '- Thiết lập hiệu ứng chuyển động và tự động phát cho các đối tượng đa phương tiện.\n- Hoàn thiện bài thuyết trình về một danh lam thắng cảnh Việt Nam.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 5',
      periods: 1,
      yccd: '- Đánh giá kỹ năng tạo sơ đồ tư duy, gửi email và thiết kế bài trình chiếu đa phương tiện.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    {
      week: 19,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 9: Định dạng và trình bày bài trình chiếu nâng cao (Tiết 1)',
      periods: 1,
      yccd: '- Sử dụng công cụ Slide Master để định dạng khung mẫu chung cho toàn bộ bài thuyết trình.\n- Chèn số trang, tiêu đề đầu/cuối trang (Header & Footer).'
    },
    {
      week: 20,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 9: Định dạng và trình bày bài trình chiếu nâng cao (Tiết 2)',
      periods: 1,
      yccd: '- Tạo siêu liên kết (Hyperlink) giữa các trang chiếu hoặc liên kết ra trang web ngoài.\n- Kiểm tra tính chuyên nghiệp và tính thẩm mỹ của bài trình chiếu.'
    },
    {
      week: 21,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 10: Thực hành: Dự án trình chiếu học tập (Tiết 1)',
      periods: 1,
      yccd: '- Làm việc nhóm thực hiện dự án truyền thông số: "Tuyên truyền An toàn giao thông trường học".\n- Phân công nhiệm vụ thu thập tư liệu, thiết kế slide và chuẩn bị thuyết trình.'
    },
    {
      week: 22,
      topic: 'Chủ đề E: Ứng dụng tin học',
      name: 'Bài 10: Thực hành: Dự án trình chiếu học tập (Tiết 2)',
      periods: 1,
      yccd: '- Báo cáo sản phẩm dự án trước lớp.\n- Đánh giá chéo và rút kinh nghiệm kỹ năng làm việc nhóm trên không gian số.'
    },
    // Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính
    {
      week: 23,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 11: Cấu trúc rẽ nhánh (Nếu - Thì) trong Scratch (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu nguyên lý hoạt động của cấu trúc rẽ nhánh đầy đủ (Nếu <Điều kiện> Thì ... Không thì ...).\n- Sử dụng khối lệnh If - Then - Else trong Scratch.'
    },
    {
      week: 24,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 11: Cấu trúc rẽ nhánh (Nếu - Thì) trong Scratch (Tiết 2)',
      periods: 1,
      yccd: '- Lập trình bài toán kiểm tra số chẵn/lẻ hoặc phân loại điểm số học tập.\n- Chạy thử nghiệm và gỡ lỗi kịch bản khi điều kiện sai.'
    },
    {
      week: 25,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Biến số và phép toán trong lập trình Scratch (Tiết 1)',
      periods: 1,
      yccd: '- Khái niệm biến số (Variable) trong lập trình để lưu trữ dữ liệu thay đổi.\n- Tạo biến số Điểm số (Score), Thời gian (Timer), Số mạng chơi (Lives).'
    },
    {
      week: 26,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Biến số và phép toán trong lập trình Scratch (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng các phép toán số học (+, -, *, /) và phép toán so sánh (<, =, >) trong khối lệnh Operators.\n- Lập trình tự động tăng/giảm điểm số khi thực hiện đúng/sai hành động.'
    },
    {
      week: 27,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 5',
      periods: 1,
      yccd: '- Đánh giá kỹ năng lập trình cấu trúc rẽ nhánh và sử dụng biến số trong Scratch.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    {
      week: 28,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Xây dựng trò chơi tương tác có tính điểm (Tiết 1)',
      periods: 1,
      yccd: '- Lập trình trò chơi "Hứng táo rơi" hoặc "Giải đố toán học vui".\n- Tạo nhân vật quả rơi từ trên xuống với tọa độ X ngẫu nhiên (Pick random).'
    },
    {
      week: 29,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Xây dựng trò chơi tương tác có tính điểm (Tiết 2)',
      periods: 1,
      yccd: '- Điều khiển giỏ hứng di chuyển bằng phím mũi tên hoặc chuột.\n- Tăng điểm khi hứng trúng và kết thúc trò chơi khi hết thời gian.'
    },
    {
      week: 30,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Lập trình phát hiện va chạm và sự kiện (Tiết 1)',
      periods: 1,
      yccd: '- Sử dụng các khối lệnh sự kiện phát tin nhắn (Broadcast) và nhận tin nhắn (When I receive).\n- Điều phối hành động giữa nhiều nhân vật trên sân khấu.'
    },
    {
      week: 31,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Lập trình phát hiện va chạm và sự kiện (Tiết 2)',
      periods: 1,
      yccd: '- Tạo hiệu ứng chúc mừng chiến thắng (Victory Screen) khi đạt số điểm tối đa.\n- Tối ưu hóa trải nghiệm người chơi.'
    },
    {
      week: 32,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Khám phá ứng dụng Trí tuệ nhân tạo (AI) (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết sự hiện diện của AI trong đời sống: nhận diện khuôn mặt, tìm kiếm bằng giọng nói, xe tự hành.\n- Trải nghiệm nhận diện hình ảnh/vẽ hình thông minh với công cụ AI giáo dục (Quick, Draw!).'
    },
    {
      week: 33,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Khám phá ứng dụng Trí tuệ nhân tạo (AI) (Tiết 2)',
      periods: 1,
      yccd: '- Nhận thức lợi ích và lưu ý đạo đức khi sử dụng công nghệ Trí tuệ nhân tạo.\n- Hình thành tư duy sẵn sàng đón nhận chuyển đổi số.'
    },
    {
      week: 34,
      topic: 'Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 16: Dự án STEM Tin học: Sản phẩm sáng tạo của em (1 tiết)',
      periods: 1,
      yccd: '- Trưng bày và báo cáo sản phẩm phần mềm Scratch hoặc dự án AI học tập.\n- Hệ thống hóa toàn bộ kiến thức Tin học Tiểu học chuẩn bị vào Lớp 6 THCS.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 5',
      periods: 1,
      yccd: '- Đánh giá tổng kết hoàn thành Chương trình môn Tin học cấp Tiểu học.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ]
};

// =========================================================================
// 2. TIN HỌC THCS (LỚP 6, 7, 8, 9 - KNTT) - 35 TIẾT (1 TIẾT/TUẦN)
// =========================================================================
export const SECONDARY_INFORMATICS_DATA: Record<number, InformaticsLessonDef[]> = {
  6: [
    // Chủ đề 1: Máy tính và cộng đồng
    {
      week: 1,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Thông tin và dữ liệu (Tiết 1)',
      periods: 1,
      yccd: '- Phân biệt được thông tin và dữ liệu.\n- Nêu được ví dụ minh họa về mối quan hệ giữa thông tin và dữ liệu trong thực tế.'
    },
    {
      week: 2,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Thông tin và dữ liệu (Tiết 2)',
      periods: 1,
      yccd: '- Nêu được tầm quan trọng của thông tin trong việc ra quyết định.\n- Nhận biết được vật mang tin và các dạng thông tin cơ bản.'
    },
    {
      week: 3,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Xử lý thông tin (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được các bước trong quá trình xử lý thông tin: thu nhận, lưu trữ, xử lý và truyền thông tin.\n- Nêu được ví dụ minh họa cho từng bước.'
    },
    {
      week: 4,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Xử lý thông tin (Tiết 2)',
      periods: 1,
      yccd: '- Giải thích được máy tính là công cụ hiệu quả để thu nhận, lưu trữ, xử lý và truyền thông tin.\n- Phân tích vai trò của máy tính trong xã hội hiện đại.'
    },
    {
      week: 5,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 3: Thông tin trong máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Biết được thông tin trong máy tính được biểu diễn bằng dãy bit (gồm các ký hiệu 0 và 1).\n- Giải thích được vì sao bit là đơn vị nhỏ nhất trong lưu trữ thông tin.'
    },
    {
      week: 6,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 3: Thông tin trong máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Nắm vững các đơn vị đo dung lượng thông tin: B, KB, MB, GB, TB và cách quy đổi.\n- Đọc và ước lượng được dung lượng của các tệp văn bản, hình ảnh, video.'
    },
    // Chủ đề 2: Mạng máy tính và Internet
    {
      week: 7,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 4: Mạng máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được khái niệm mạng máy tính và lợi ích của việc kết nối mạng máy tính.\n- Kể tên các thành phần cơ bản của một mạng máy tính (thiết bị đầu cuối, thiết bị kết nối, phần mềm mạng).'
    },
    {
      week: 8,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 4: Mạng máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Phân biệt được mạng có dây (sử dụng cáp mạng) và mạng không dây (sử dụng sóng Wi-Fi).\n- Nêu được đặc điểm và phạm vi ứng dụng của từng loại mạng.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 6',
      periods: 1,
      yccd: '- Đánh giá mức độ nắm vững chuẩn kiến thức về thông tin, dữ liệu, biểu diễn thông tin và mạng máy tính từ Tuần 1 đến Tuần 8.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    {
      week: 10,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 5: Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được khái niệm Internet và các đặc điểm chính của mạng Internet toàn cầu.\n- Kể tên các dịch vụ thông dụng trên Internet: tìm kiếm, thư điện tử, mạng xã hội, học trực tuyến.'
    },
    {
      week: 11,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 5: Internet (Tiết 2)',
      periods: 1,
      yccd: '- Phân tích được các lợi ích to lớn cũng như nguy cơ tiềm ẩn khi tham gia sử dụng Internet.\n- Rèn luyện kỹ năng tự bảo vệ khi truy cập Internet.'
    },
    // Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 12,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Mạng thông tin toàn cầu (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được khái niệm World Wide Web (WWW), trang web (Webpage), website và địa chỉ website (URL).\n- Nhận biết được siêu văn bản (Hypertext) và siêu liên kết (Hyperlink).'
    },
    {
      week: 13,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Mạng thông tin toàn cầu (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng thành thạo trình duyệt web để truy cập thông tin theo địa chỉ website.\n- Biết cách lưu trang web yêu thích (Bookmark) và lưu tài liệu tải về.'
    },
    {
      week: 14,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 7: Tìm kiếm thông tin trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết máy tìm kiếm và cách thức hoạt động cơ bản của máy tìm kiếm.\n- Xác định từ khóa (Keywords) chính xác để tìm kiếm thông tin theo chủ đề học tập.'
    },
    {
      week: 15,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 7: Tìm kiếm thông tin trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng các công cụ lọc kết quả tìm kiếm (hình ảnh, video, tin tức, thời gian).\n- Đánh giá và chọn lọc thông tin hữu ích, chính xác từ kết quả tìm kiếm.'
    },
    {
      week: 16,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 8: Thư điện tử (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được ưu điểm của thư điện tử so với thư truyền thống.\n- Biết cấu trúc địa chỉ thư điện tử và quy trình gửi/nhận thư điện tử.'
    },
    {
      week: 17,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 8: Thư điện tử (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành đăng nhập, soạn thư, đính kèm tệp văn bản và gửi thư điện tử.\n- Tuân thủ phép lịch sự, tôn trọng người nhận khi viết thư điện tử.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học Lớp 6',
      periods: 1,
      yccd: '- Đánh giá tổng hợp kiến thức và kỹ năng thực hành Tin học Lớp 6 trong toàn bộ Học kỳ 1.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    // Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 19,
      topic: 'Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 9: An toàn thông tin trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết các nguy cơ rò rỉ thông tin cá nhân và bị lừa đảo trên không gian mạng.\n- Nêu được tác hại của virus, mã độc và các phần mềm gián điệp.'
    },
    {
      week: 20,
      topic: 'Chủ đề 4: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 9: An toàn thông tin trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Nắm vững các quy tắc an toàn khi sử dụng Internet: đặt mật khẩu mạnh, không mở tệp lạ, không chia sẻ thông tin nhạy cảm.\n- Biết cách ứng xử văn minh và phòng tránh bắt nạt qua mạng.'
    },
    // Chủ đề 5: Ứng dụng tin học
    {
      week: 21,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 10: Sơ đồ tư duy (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được vai trò của sơ đồ tư duy trong việc tổ chức, tóm tắt và trình bày ý tưởng.\n- Nhận biết cấu trúc phân nhánh của sơ đồ tư duy.'
    },
    {
      week: 22,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 10: Sơ đồ tư duy (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng phần mềm (MindMaple Lite, XMind hoặc Canva) để tạo sơ đồ tư duy cho một chủ đề học tập.\n- Thêm hình ảnh minh họa, màu sắc và xuất sơ đồ tư duy thành tệp hình ảnh.'
    },
    {
      week: 23,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 11: Định dạng văn bản (Tiết 1)',
      periods: 1,
      yccd: '- Thực hiện thành thạo định dạng ký tự: phông chữ, cỡ chữ, kiểu chữ (đậm, nghiêng, gạch chân), màu chữ.\n- Định dạng đoạn văn bản: căn lề, khoảng cách dòng, khoảng cách đoạn.'
    },
    {
      week: 24,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 11: Định dạng văn bản (Tiết 2)',
      periods: 1,
      yccd: '- Thiết lập định dạng trang văn bản: kích thước giấy (A4), hướng trang (dọc/ngang), căn lề trang.\n- Chèn và định dạng hình ảnh minh họa, căn chỉnh vị trí hình ảnh hài hòa trong văn bản.'
    },
    {
      week: 25,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 12: Trình bày thông tin ở dạng bảng (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được lợi ích của việc trình bày thông tin cô đọng, rõ ràng ở dạng bảng biểu.\n- Thực hiện tạo bảng, chèn thêm/xóa hàng, cột và căn chỉnh độ rộng cột.'
    },
    {
      week: 26,
      topic: 'Chủ đề 5: Ứng dụng tin học',
      name: 'Bài 12: Trình bày thông tin ở dạng bảng (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện gộp ô (Merge Cells), tách ô và định dạng đường viền, màu nền bảng biểu.\n- Nhập và căn lề dữ liệu trong bảng một cách thẩm mỹ.'
    },
    {
      week: 27,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 6',
      periods: 1,
      yccd: '- Đánh giá kỹ năng tạo sơ đồ tư duy, soạn thảo và định dạng văn bản nâng cao, bảng biểu.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    // Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính
    {
      week: 28,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Thực hành: Hoàn thiện sổ lưu niệm (Tiết 1)',
      periods: 1,
      yccd: '- Làm việc nhóm thực hành thiết kế ấn phẩm "Sổ lưu niệm lớp em" hoặc "Tờ báo tường điện tử".\n- Tổng hợp văn bản, hình ảnh và bảng biểu trong tài liệu.'
    },
    {
      week: 29,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Thực hành: Hoàn thiện sổ lưu niệm (Tiết 2)',
      periods: 1,
      yccd: '- Hoàn thiện sản phẩm, đánh số trang tự động và in ấn/xuất tệp PDF.\n- Báo cáo và chia sẻ sản phẩm số trước lớp.'
    },
    {
      week: 30,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Thuật toán và mô tả thuật toán (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được khái niệm thuật toán là dãy các chỉ dẫn từng bước rõ ràng để giải quyết một bài toán.\n- Xác định được Đầu vào (Input) và Đầu ra (Output) của thuật toán.'
    },
    {
      week: 31,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Thuật toán và mô tả thuật toán (Tiết 2)',
      periods: 1,
      yccd: '- Biết cách mô tả thuật toán bằng hai phương pháp: Liệt kê các bước bằng ngôn ngữ tự nhiên và Sơ đồ khối (Flowchart).\n- Nhận biết các hình khối chuẩn trong sơ đồ khối (hình elip, hình chữ nhật, hình thoi, mũi tên).'
    },
    {
      week: 32,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Các thuật toán tìm kiếm và sắp xếp cơ bản (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu ý tưởng và mô phỏng được thuật toán Tìm kiếm tuần tự (Sequential Search) trên dãy dữ liệu cụ thể.\n- Xác định trường hợp tìm thấy và không tìm thấy.'
    },
    {
      week: 33,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Các thuật toán tìm kiếm và sắp xếp cơ bản (Tiết 2)',
      periods: 1,
      yccd: '- Hiểu ý tưởng và mô phỏng được thuật toán Sắp xếp chọn (Selection Sort) hoặc Sắp xếp nổi bọt (Bubble Sort).\n- Rèn luyện tư duy logic và thuật toán.'
    },
    {
      week: 34,
      topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Ôn tập tổng hợp cuối năm học môn Tin học 6 (1 tiết)',
      periods: 1,
      yccd: '- Hệ thống hóa toàn bộ kiến thức 6 chủ đề môn Tin học 6.\n- Rèn luyện kỹ năng thực hành tổng hợp chuẩn bị kiểm tra cuối năm.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 6',
      periods: 1,
      yccd: '- Đánh giá tổng kết kết quả học tập môn Tin học Lớp 6 theo Chuẩn đầu ra CT GDPT 2018.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ],
  7: [
    // Chủ đề 1: Máy tính và cộng đồng
    {
      week: 1,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Thiết bị vào - ra (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết và phân biệt được các thiết bị vào (Input devices) và thiết bị ra (Output devices).\n- Nêu được chức năng của một số thiết bị vào - ra thông dụng: bàn phím, chuột, máy quét, micro, màn hình, máy in, loa, máy chiếu.'
    },
    {
      week: 2,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Thiết bị vào - ra (Tiết 2)',
      periods: 1,
      yccd: '- Nhận biết được một số thiết bị vào - ra hiện đại: màn hình cảm ứng, máy bay không người lái (drone), kính thực tế ảo (VR).\n- Biết cách gắn kết nối an toàn các thiết bị vào - ra qua cổng USB, HDMI, Audio.'
    },
    {
      week: 3,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Phần mềm ứng dụng (Tiết 1)',
      periods: 1,
      yccd: '- Phân biệt được phần mềm hệ thống (Hệ điều hành Windows, Linux, Android) và phần mềm ứng dụng.\n- Nêu được vai trò trung gian điều khiển của hệ điều hành đối với phần cứng và phần mềm ứng dụng.'
    },
    {
      week: 4,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Phần mềm ứng dụng (Tiết 2)',
      periods: 1,
      yccd: '- Nhận diện các tệp chương trình và tệp dữ liệu thông qua phần mở rộng (.docx, .xlsx, .pptx, .pdf, .mp3, .mp4).\n- Sử dụng phần mềm diệt virus và phần mềm tiện ích cơ bản.'
    },
    // Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 5,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 3: Quản lý dữ liệu trong máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được vai trò của việc tổ chức lưu trữ dữ liệu khoa học trong cây thư mục.\n- Thực hiện các thao tác quản lý tệp và thư mục nâng cao bằng File Explorer.'
    },
    {
      week: 6,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 3: Quản lý dữ liệu trong máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện nén tệp/thư mục (Zip/Rar) để giảm dung lượng và giải nén dữ liệu an toàn.\n- Đặt thuộc tính bảo vệ tệp (Chỉ đọc - Read-only).'
    },
    {
      week: 7,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 4: Mạng xã hội và một số kênh trao đổi thông tin trên Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được khái niệm mạng xã hội (Social Media) và kể tên các mạng xã hội phổ biến (Facebook, Zalo, YouTube).\n- Nhận biết các chức năng chính: kết nối bạn bè, chia sẻ bài viết, nhắn tin, gọi video.'
    },
    {
      week: 8,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 4: Mạng xã hội và một số kênh trao đổi thông tin trên Internet (Tiết 2)',
      periods: 1,
      yccd: '- Phân tích các ưu điểm và nguy cơ tiêu cực khi sử dụng mạng xã hội (nghiện mạng xã hội, tin giả, lộ thông tin).\n- Biết cách thiết lập quyền riêng tư (Privacy Settings) cho tài khoản cá nhân.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 7',
      periods: 1,
      yccd: '- Đánh giá kiến thức thiết bị vào ra, hệ điều hành, quản lý dữ liệu và mạng xã hội.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    // Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 10,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 5: Ứng xử trên mạng (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững các quy tắc ứng xử có văn hóa, chuẩn mực và lịch sự trong giao tiếp trực tuyến (Netiquette).\n- Không bình luận xúc phạm, không lan truyền tin đồn thất thiệt hoặc hình ảnh phản cảm.'
    },
    {
      week: 11,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 5: Ứng xử trên mạng (Tiết 2)',
      periods: 1,
      yccd: '- Hiểu được các quy định pháp luật cơ bản về bảo vệ bí mật đời tư và bản quyền tác phẩm số.\n- Biết cách phòng tránh và xử lý khi bị quấy rối hoặc bắt nạt trên không gian mạng.'
    },
    // Chủ đề 4: Ứng dụng tin học (Bảng tính điện tử & Trình chiếu)
    {
      week: 12,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 6: Làm quen với phần mềm bảng tính (Tiết 1)',
      periods: 1,
      yccd: '- Nhận diện giao diện phần mềm bảng tính Microsoft Excel: Bảng tính (Worksheet), ô tính (Cell), hàng (Row), cột (Column), thanh công thức (Formula Bar).'
    },
    {
      week: 13,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 6: Làm quen với phần mềm bảng tính (Tiết 2)',
      periods: 1,
      yccd: '- Phân biệt các kiểu dữ liệu trong ô tính: kiểu văn bản, kiểu số, kiểu ngày tháng.\n- Nhập và chỉnh sửa dữ liệu trong bảng tính đơn giản.'
    },
    {
      week: 14,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 7: Tính toán tự động trên bảng tính (Tiết 1)',
      periods: 1,
      yccd: '- Nhập công thức tính toán bắt đầu bằng dấu bằng (=) và sử dụng các phép toán số học (+, -, *, /, ^).\n- Sử dụng địa chỉ ô tính (ví dụ: A1, B2) trong công thức tính toán.'
    },
    {
      week: 15,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 7: Tính toán tự động trên bảng tính (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng tính năng tự động điền công thức (AutoFill / Fill Handle) để sao chép công thức nhanh chóng.\n- Hiểu được sự thay đổi địa chỉ tương đối khi sao chép công thức.'
    },
    {
      week: 16,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 8: Sử dụng các hàm có sẵn (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững cú pháp và sử dụng thành thạo các hàm tính toán cơ bản: SUM (tính tổng), AVERAGE (tính trung bình cộng).'
    },
    {
      week: 17,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 8: Sử dụng các hàm có sẵn (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng hàm MAX (tìm giá trị lớn nhất), MIN (tìm giá trị nhỏ nhất), COUNT (đếm số ô chứa số).\n- Ứng dụng tính điểm trung bình và xếp loại học tập của học sinh.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học Lớp 7',
      periods: 1,
      yccd: '- Đánh giá tổng hợp kiến thức bảng tính Excel, công thức tính toán và các hàm cơ bản trong Học kỳ 1.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    {
      week: 19,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Định dạng trang tính, chèn thêm và xóa hàng, cột (Tiết 1)',
      periods: 1,
      yccd: '- Thực hiện chèn thêm hàng/cột, xóa hàng/cột và thay đổi độ cao hàng, độ rộng cột.\n- Gộp ô và căn giữa tiêu đề bảng tính (Merge & Center).'
    },
    {
      week: 20,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Định dạng trang tính, chèn thêm và xóa hàng, cột (Tiết 2)',
      periods: 1,
      yccd: '- Định dạng dữ liệu số: hiển thị số thập phân, phần trăm, tiền tệ (VNĐ / $).\n- Kẻ đường viền bảng tính (Borders) và tô màu nền ô tính (Fill Color).'
    },
    {
      week: 21,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Trình bày bảng tính (Tiết 1)',
      periods: 1,
      yccd: '- Thiết lập hướng trang in (dọc/ngang), kích thước khổ giấy và căn lề trang tính.\n- Xem trang tính trước khi in (Print Preview) để kiểm tra bố cục.'
    },
    {
      week: 22,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Trình bày bảng tính (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành hoàn thiện bảng tính tổng hợp "Kinh phí tổ chức hoạt động trải nghiệm lớp 7".\n- Xuất và chia sẻ bảng tính dưới dạng tệp PDF.'
    },
    {
      week: 23,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Tạo bài trình chiếu (Tiết 1)',
      periods: 1,
      yccd: '- Ôn tập và nâng cao kỹ năng thiết kế bài trình chiếu bằng PowerPoint.\n- Áp dụng các nguyên tắc thiết kế trực quan: bố cục thoáng đãng, màu sắc tương phản tốt, không lạm dụng chữ.'
    },
    {
      week: 24,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Tạo bài trình chiếu (Tiết 2)',
      periods: 1,
      yccd: '- Chèn và định dạng các đối tượng đồ họa: SmartArt, biểu đồ, hình dạng mẫu (Shapes).\n- Xây dựng bài trình chiếu theo chủ đề dự án.'
    },
    {
      week: 25,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 12: Định dạng đối tượng trên trang chiếu (Tiết 1)',
      periods: 1,
      yccd: '- Thiết lập hiệu ứng hoạt hình Animation nâng cao (Entrance, Emphasis, Exit, Motion Paths).\n- Điều chỉnh thời gian chạy hiệu ứng (Duration, Delay, Start With/After Previous).'
    },
    {
      week: 26,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 12: Định dạng đối tượng trên trang chiếu (Tiết 2)',
      periods: 1,
      yccd: '- Tạo liên kết Hyperlink và nút hành động (Action Buttons) để điều hướng linh hoạt giữa các trang chiếu.\n- Chèn âm thanh và video nền vào trang chiếu.'
    },
    {
      week: 27,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 7',
      periods: 1,
      yccd: '- Đánh giá kỹ năng định dạng bảng tính nâng cao và thiết kế bài trình chiếu đa phương tiện.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    // Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính
    {
      week: 28,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Thực hành tổng hợp: Hoàn thiện bài trình chiếu (1 tiết)',
      periods: 1,
      yccd: '- Báo cáo và trình diễn bài trình chiếu sản phẩm trước lớp học.\n- Nhận xét và đánh giá tính trực quan, tính khoa học của bài thuyết trình.'
    },
    {
      week: 29,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Thuật toán tìm kiếm tuần tự (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu nguyên lý hoạt động của thuật toán Tìm kiếm tuần tự (Sequential Search).\n- Mô tả thuật toán bằng ngôn ngữ tự nhiên và sơ đồ khối.'
    },
    {
      week: 30,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Thuật toán tìm kiếm tuần tự (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện từng bước thuật toán tìm kiếm tuần tự trên dãy số cụ thể.\n- Phân tích số lần so sánh trong trường hợp tốt nhất và xấu nhất.'
    },
    {
      week: 31,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Thuật toán tìm kiếm nhị phân (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu điều kiện áp dụng thuật toán Tìm kiếm nhị phân (Binary Search): Dãy dữ liệu đã được sắp xếp.\n- Nắm vững nguyên lý chia đôi phạm vi tìm kiếm ở mỗi bước.'
    },
    {
      week: 32,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Thuật toán tìm kiếm nhị phân (Tiết 2)',
      periods: 1,
      yccd: '- Mô phỏng từng bước thuật toán tìm kiếm nhị phân trên dãy số đã sắp xếp.\n- So sánh hiệu quả vượt trội về tốc độ của tìm kiếm nhị phân so với tìm kiếm tuần tự.'
    },
    {
      week: 33,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 16: Thuật toán sắp xếp (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu mục đích và ý nghĩa của việc sắp xếp dữ liệu (tăng dần/giảm dần).\n- Nắm ý tưởng và mô phỏng thuật toán Sắp xếp nổi bọt (Bubble Sort).'
    },
    {
      week: 34,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 16: Thuật toán sắp xếp (Tiết 2)',
      periods: 1,
      yccd: '- Nắm ý tưởng và mô phỏng thuật toán Sắp xếp chọn (Selection Sort).\n- Ôn tập hệ thống hóa kiến thức toàn bộ môn Tin học Lớp 7.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 7',
      periods: 1,
      yccd: '- Đánh giá tổng kết năng lực Tin học và tư duy thuật toán Lớp 7.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ],
  8: [
    // Chủ đề 1: Máy tính và cộng đồng
    {
      week: 1,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Lược sử công cụ tính toán (Tiết 1)',
      periods: 1,
      yccd: '- Trình bày tóm tắt lịch sử phát triển của các công cụ tính toán: Bàn tính, máy tính cơ học của Pascal, máy tính cơ khí Babbage.\n- Nêu 5 thế hệ máy tính điện tử từ bóng đèn chân không đến vi mạch tích hợp cao (VLSI).'
    },
    {
      week: 2,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Lược sử công cụ tính toán (Tiết 2)',
      periods: 1,
      yccd: '- Phân tích xu hướng phát triển của máy tính hiện đại: Nhỏ gọn hơn, tốc độ siêu nhanh, tiết kiệm năng lượng, tích hợp Trí tuệ nhân tạo (AI).\n- Nêu ví dụ về vai trò của siêu máy tính và máy tính lượng tử trong tương lai.'
    },
    {
      week: 3,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Thông tin trong môi trường số (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được đặc điểm của thông tin số: Dễ sao chép, dễ lan truyền, khó xóa bỏ hoàn toàn, có thể bị chỉnh sửa sai lệch.\n- Nhận biết giá trị và tầm quan trọng của dữ liệu số trong kỷ nguyên kinh tế số.'
    },
    {
      week: 4,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Thông tin trong môi trường số (Tiết 2)',
      periods: 1,
      yccd: '- Nhận biết độ tin cậy của thông tin số, cách kiểm chứng nguồn gốc thông tin.\n- Rèn luyện kỹ năng tư duy phản biện trước các luồng thông tin trên mạng xã hội.'
    },
    {
      week: 5,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 3: Thực hành: Khai thác thông tin số (1 tiết)',
      periods: 1,
      yccd: '- Thực hành tìm kiếm, thẩm định và trích xuất dữ liệu từ các nguồn chính thống (Cổng thông tin chính phủ, tổ chức quốc tế).\n- Lưu trữ và tổ chức dữ liệu số khoa học phục vụ bài học.'
    },
    // Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 6,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 4: Sử dụng bảng tính điện tử nâng cao (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững khái niệm địa chỉ ô tương đối (A1), địa chỉ ô tuyệt đối ($A$1) và địa chỉ hỗn hợp ($A1, A$1).\n- Hiểu ý nghĩa của việc cố định hàng/cột khi sao chép công thức.'
    },
    {
      week: 7,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 4: Sử dụng bảng tính điện tử nâng cao (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành sử dụng địa chỉ tuyệt đối để tính toán bảng tính có tham chiếu hệ số cố định (ví dụ: Tỷ giá ngoại tệ, thuế VAT, tỷ lệ %).\n- Nhận biết các thông báo lỗi thông dụng trong Excel (#VALUE!, #NAME?, #DIV/0!).'
    },
    {
      week: 8,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Các hàm xử lý dữ liệu và thống kê trong bảng tính (1 tiết)',
      periods: 1,
      yccd: '- Sử dụng hàm điều kiện IF đơn giản và hàm thống kê có điều kiện COUNTIF, SUMIF.\n- Ứng dụng phân loại học lực học sinh và thống kê số lượng.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 8',
      periods: 1,
      yccd: '- Đánh giá kiến thức lịch sử máy tính, thông tin số và kỹ năng sử dụng địa chỉ tuyệt đối, hàm nâng cao trong Excel.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    {
      week: 10,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Sắp xếp và lọc dữ liệu (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu mục đích của việc sắp xếp dữ liệu (Sort) và lọc dữ liệu (Filter) trong quản lý bảng biểu lớn.\n- Thực hiện sắp xếp dữ liệu theo thứ tự tăng dần/giảm dần theo một hoặc nhiều tiêu chí.'
    },
    {
      week: 11,
      topic: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Sắp xếp và lọc dữ liệu (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng tính năng AutoFilter để lọc ra các hàng thỏa mãn điều kiện xác định.\n- Lọc dữ liệu theo giá trị số, văn bản hoặc lọc các giá trị lớn nhất/nhỏ nhất (Top 10).'
    },
    // Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số
    {
      week: 12,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 7: Trực quan hóa dữ liệu bằng biểu đồ (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được vai trò của biểu đồ trong việc so sánh số liệu và dự đoán xu hướng trực quan.\n- Nhận biết các dạng biểu đồ phổ biến: Biểu đồ cột (Column/Bar), biểu đồ tròn (Pie), biểu đồ đường (Line).'
    },
    {
      week: 13,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 7: Trực quan hóa dữ liệu bằng biểu đồ (Tiết 2)',
      periods: 1,
      yccd: '- Thực hiện tạo biểu đồ thích hợp từ bảng số liệu Excel.\n- Định dạng các thành phần của biểu đồ: Tiêu đề biểu đồ (Chart Title), nhãn dữ liệu (Data Labels), chú giải (Legend).'
    },
    {
      week: 14,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 8: Khai thác và bảo vệ bản quyền thông tin trên không gian mạng (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững quy định của Luật An ninh mạng và Luật Sở hữu trí tuệ tại Việt Nam.\n- Nhận diện các hành vi vi phạm bản quyền phần mềm, âm nhạc, phim ảnh, tài liệu số.'
    },
    {
      week: 15,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Bài 8: Khai thác và bảo vệ bản quyền thông tin trên không gian mạng (Tiết 2)',
      periods: 1,
      yccd: '- Hiểu về giấy phép tài nguyên mở Creative Commons (CC) và phần mềm mã nguồn mở (FOSS).\n- Thực hành trích dẫn tác giả đúng quy chuẩn khi làm bài thuyết trình, dự án.'
    },
    {
      week: 16,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Ôn tập tổng hợp kiến thức Tin học Học kỳ 1 (Tiết 1)',
      periods: 1,
      yccd: '- Hệ thống hóa toàn bộ kiến thức Bảng tính Excel nâng cao, Sắp xếp, Lọc, Biểu đồ và Bản quyền số.'
    },
    {
      week: 17,
      topic: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số',
      name: 'Ôn tập tổng hợp kiến thức Tin học Học kỳ 1 (Tiết 2)',
      periods: 1,
      yccd: '- Rèn luyện kỹ năng thực hành tổng hợp giải quyết bài toán quản lý dữ liệu trên máy tính.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học Lớp 8',
      periods: 1,
      yccd: '- Đánh giá toàn diện kiến thức lý thuyết và kỹ năng thực hành Tin học 8 trong Học kỳ 1.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    // Chủ đề 4: Ứng dụng tin học (Đồ họa & Đa phương tiện)
    {
      week: 19,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Phần mềm đồ họa và thiết bị số (Tiết 1)',
      periods: 1,
      yccd: '- Phân biệt đồ họa điểm ảnh (Raster Graphics - Photoshop, GIMP) và đồ họa véc-tơ (Vector Graphics - Inkscape, Illustrator).\n- Nêu ưu nhược điểm của từng loại đồ họa.'
    },
    {
      week: 20,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Phần mềm đồ họa và thiết bị số (Tiết 2)',
      periods: 1,
      yccd: '- Khám phá giao diện phần mềm đồ họa Inkscape / Paint.NET / Canva.\n- Sử dụng các công cụ vẽ hình véc-tơ cơ bản và quản lý các lớp đối tượng (Layers).'
    },
    {
      week: 21,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Xử lý hình ảnh và thiết kế sản phẩm đồ họa (Tiết 1)',
      periods: 1,
      yccd: '- Thực hiện các thao tác xử lý ảnh cơ bản: Cắt xén (Crop), xoay ảnh, chỉnh độ sáng tối, độ tương phản.\n- Xóa phông nền (Remove background) và ghép ảnh nghệ thuật.'
    },
    {
      week: 22,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Xử lý hình ảnh và thiết kế sản phẩm đồ họa (Tiết 2)',
      periods: 1,
      yccd: '- Thiết kế một sản phẩm đồ họa hoàn chỉnh: Poster tuyên truyền hoặc Logo lớp học.\n- Xuất sản phẩm sang định dạng ảnh chuẩn (.PNG, .JPG, .SVG).'
    },
    {
      week: 23,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Tạo video và biên tập âm thanh cơ bản (Tiết 1)',
      periods: 1,
      yccd: '- Khám phá phần mềm biên tập video (CapCut PC / Clipchamp / OpenShot).\n- Nhập tư liệu video, hình ảnh, âm thanh vào dòng thời gian (Timeline).'
    },
    {
      week: 24,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Tạo video và biên tập âm thanh cơ bản (Tiết 2)',
      periods: 1,
      yccd: '- Cắt ghép video, chèn nhạc nền, thêm phụ đề (Subtitle) và hiệu ứng chuyển cảnh.\n- Xuất video chuẩn Full HD chia sẻ trên nền tảng học tập.'
    },
    {
      week: 25,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 8',
      periods: 1,
      yccd: '- Đánh giá kỹ năng thiết kế đồ họa vector và biên tập video đa phương tiện.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    // Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình Scratch nâng cao)
    {
      week: 26,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với ngôn ngữ lập trình trực quan Scratch (Tiết 1)',
      periods: 1,
      yccd: '- Ôn tập môi trường Scratch 3.0 và các khối lệnh nâng cao.\n- Tìm hiểu cấu trúc chương trình hướng sự kiện và đa luồng thực thi.'
    },
    {
      week: 27,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với ngôn ngữ lập trình trực quan Scratch (Tiết 2)',
      periods: 1,
      yccd: '- Tạo nhân vật nhân bản (Clones) để tạo hàng loạt đối tượng tự động.\n- Quản lý vòng đời của bản sao bằng khối lệnh When I start as a clone.'
    },
    {
      week: 28,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Biểu thức, biến và câu lệnh gán (Tiết 1)',
      periods: 1,
      yccd: '- Khai báo và sử dụng biến số đơn bản và danh sách (List) trong Scratch.\n- Thực hiện các phép toán gán giá trị và cập nhật biến số theo thời gian.'
    },
    {
      week: 29,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Biểu thức, biến và câu lệnh gán (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng các hàm toán học nâng cao: Căn bậc hai (sqrt), làm tròn (round), chia lấy dư (mod).\n- Lập trình bài toán tính chu vi, diện tích và tính toán đại số.'
    },
    {
      week: 30,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Cấu trúc điều khiển rẽ nhánh và lặp (Tiết 1)',
      periods: 1,
      yccd: '- Kết hợp lồng ghép nhiều cấu trúc rẽ nhánh If - Else để xử lý các điều kiện phức tạp.\n- Sử dụng toán tử logic And, Or, Not trong biểu thức điều kiện.'
    },
    {
      week: 31,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Cấu trúc điều khiển rẽ nhánh và lặp (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng cấu trúc lặp có điều kiện (Repeat until) và vòng lặp vô hạn (Forever).\n- Tự tạo khối lệnh mới (Custom Blocks / My Blocks) để mô-đun hóa chương trình.'
    },
    {
      week: 32,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Dự án: Lập trình trò chơi học tập (Tiết 1)',
      periods: 1,
      yccd: '- Thiết kế kịch bản trò chơi tương tác giáo dục: "Đấu trường tri thức" hoặc "Game bắn thiên thạch bảo vệ Trái Đất".\n- Lập trình tương tác bàn phím, tính điểm, âm thanh và chuyển màn chơi.'
    },
    {
      week: 33,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Dự án: Lập trình trò chơi học tập (Tiết 2)',
      periods: 1,
      yccd: '- Kiểm thử, phát hiện và sửa lỗi logic (Debugging) trong trò chơi.\n- Đóng gói và chia sẻ dự án lên cộng đồng Scratch trực tuyến.'
    },
    // Chủ đề 6: Hướng nghiệp với tin học
    {
      week: 34,
      topic: 'Chủ đề 6: Hướng nghiệp với tin học',
      name: 'Bài 16: Tin học và các ngành nghề trong xã hội hiện đại (1 tiết)',
      periods: 1,
      yccd: '- Kể tên các ngành nghề thuộc lĩnh vực Công nghệ thông tin: Lập trình viên, chuyên viên an ninh mạng, chuyên viên phân tích dữ liệu, thiết kế đồ họa.\n- Nhận thức nhu cầu nhân lực số và lập kế hoạch rèn luyện năng lực tin học cá nhân.'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 8',
      periods: 1,
      yccd: '- Đánh giá tổng kết kết quả học tập môn Tin học Lớp 8 theo Chuẩn đầu ra CT GDPT 2018.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ],
  9: [
    // Chủ đề 1: Máy tính và cộng đồng
    {
      week: 1,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Bộ xử lý thông tin và sự phát triển của máy tính (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được vai trò của bộ vi xử lý (CPU) và kiến trúc máy tính Von Neumann trong việc xử lý thông tin tự động.\n- Phân tích cơ chế hoạt động của chu trình Nạp lệnh - Giải mã - Thực thi (Fetch - Decode - Execute).'
    },
    {
      week: 2,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 1: Bộ xử lý thông tin và sự phát triển của máy tính (Tiết 2)',
      periods: 1,
      yccd: '- Nêu được xu hướng phát triển của phần cứng hiện đại: Chip đa nhân, điện toán di động, điện toán đám mây và vi mạch AI chuyên dụng.\n- Đánh giá tác động sâu sắc của máy tính đến mọi mặt đời sống xã hội.'
    },
    {
      week: 3,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Chất lượng thông tin khi tìm kiếm, tiếp nhận và xử lý (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được các tiêu chí đánh giá chất lượng thông tin: Tính chính xác, tính mới (tính cập nhật), tính đầy đủ, tính phù hợp và độ tin cậy của tác giả.\n- Phân tích hậu quả nghiêm trọng khi tiếp nhận và sử dụng thông tin sai lệch.'
    },
    {
      week: 4,
      topic: 'Chủ đề 1: Máy tính và cộng đồng',
      name: 'Bài 2: Chất lượng thông tin khi tìm kiếm, tiếp nhận và xử lý (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành quy trình kiểm chứng thông tin đa nguồn (Fact-checking) trước khi chia sẻ.\n- Rèn luyện trách nhiệm công dân số trên không gian truyền thông.'
    },
    // Chủ đề 2: Mạng máy tính và Internet
    {
      week: 5,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 3: Thực hành: Khai thác dịch vụ mạng và điện toán đám mây (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu khái niệm điện toán đám mây (Cloud Computing) và lợi ích của việc lưu trữ phân tán.\n- Khám phá các dịch vụ đám mây thông dụng: Google Drive, OneDrive, Dropbox.'
    },
    {
      week: 6,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 3: Thực hành: Khai thác dịch vụ mạng và điện toán đám mây (Tiết 2)',
      periods: 1,
      yccd: '- Thực hành tải tệp lên đám mây, chia sẻ tệp và thiết lập quyền truy cập (Chỉ xem, Nhận xét, Chỉnh sửa).\n- Làm việc cộng tác thời gian thực trên Google Docs / Google Sheets.'
    },
    {
      week: 7,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 4: Một số vấn đề pháp lý và đạo đức về sử dụng dịch vụ Internet (Tiết 1)',
      periods: 1,
      yccd: '- Nắm vững các quy định pháp luật về an ninh mạng, quyền tác giả và bảo vệ dữ liệu cá nhân.\n- Nhận diện các hành vi vi phạm: Lừa đảo qua mạng, xâm nhập trái phép, phát tán virus, đánh cắp danh tính số.'
    },
    {
      week: 8,
      topic: 'Chủ đề 2: Mạng máy tính và Internet',
      name: 'Bài 4: Một số vấn đề pháp lý và đạo đức về sử dụng dịch vụ Internet (Tiết 2)',
      periods: 1,
      yccd: '- Nhận biết trách nhiệm pháp lý khi sử dụng dịch vụ Internet và mạng xã hội.\n- Xây dựng bản quy ước đạo đức số cho học sinh THCS.'
    },
    {
      week: 9,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 9',
      periods: 1,
      yccd: '- Đánh giá kiến thức phần cứng máy tính, chất lượng thông tin số, điện toán đám mây và pháp luật mạng.',
      notes: 'Kiểm tra giữa kỳ 1'
    },
    // Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin
    {
      week: 10,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Sử dụng bảng tính điện tử để giải quyết bài toán thực tế (Tiết 1)',
      periods: 1,
      yccd: '- Phân tích bài toán quản lý tài chính cá nhân hoặc quản lý điểm học sinh bằng mô hình bảng tính Excel.\n- Thiết lập cấu trúc bảng tính, nhập dữ liệu và sử dụng các công thức liên kết nhiều sheet.'
    },
    {
      week: 11,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 5: Sử dụng bảng tính điện tử để giải quyết bài toán thực tế (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng các hàm tra cứu tìm kiếm VLOOKUP / HLOOKUP và hàm logic nâng cao.\n- Tự động hóa quá trình xuất kết quả và đánh giá dữ liệu.'
    },
    {
      week: 12,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Trình bày dữ liệu nâng cao bằng biểu đồ (Tiết 1)',
      periods: 1,
      yccd: '- Lựa chọn dạng biểu đồ tối ưu (Biểu đồ đường kết hợp cột, biểu đồ phân tán Scatter, biểu đồ vùng Area) để thể hiện xu hướng tăng trưởng số liệu.\n- Tạo biểu đồ từ nhiều chuỗi dữ liệu phức tạp.'
    },
    {
      week: 13,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 6: Trình bày dữ liệu nâng cao bằng biểu đồ (Tiết 2)',
      periods: 1,
      yccd: '- Tùy biến đường xu hướng (Trendline), trục phụ (Secondary Axis) và định dạng thẩm mỹ chuyên nghiệp.\n- Phân tích và rút ra kết luận khoa học từ biểu đồ.'
    },
    {
      week: 14,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 7: Tạo trang web bằng công cụ trực tuyến (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu cấu trúc của một trang web và website: Trang chủ (Home), trang con, thanh điều hướng (Menu), phần đầu (Header) và chân trang (Footer).\n- Khám phá công cụ thiết kế website miễn phí Google Sites / Wix / WordPress.'
    },
    {
      week: 15,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 7: Tạo trang web bằng công cụ trực tuyến (Tiết 2)',
      periods: 1,
      yccd: '- Chọn giao diện mẫu (Theme), tạo cây cấu trúc các trang và thiết kế thanh điều hướng.\n- Chèn nội dung văn bản, hình ảnh, video và biểu mẫu liên hệ vào trang web.'
    },
    {
      week: 16,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 8: Thiết kế và xuất bản trang web cá nhân/học tập (Tiết 1)',
      periods: 1,
      yccd: '- Hoàn thiện nội dung cho website chủ đề: "Hồ sơ học tập số của em" hoặc "Giới thiệu câu lạc bộ trường học".\n- Tối ưu hóa giao diện hiển thị trên máy tính và điện thoại di động (Responsive).'
    },
    {
      week: 17,
      topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
      name: 'Bài 8: Thiết kế và xuất bản trang web cá nhân/học tập (Tiết 2)',
      periods: 1,
      yccd: '- Xuất bản (Publish) website lên Internet với tên miền miễn phí.\n- Kiểm tra tính liên kết và chia sẻ địa chỉ trang web cho bạn bè, thầy cô.'
    },
    {
      week: 18,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học Lớp 9',
      periods: 1,
      yccd: '- Đánh giá tổng hợp kỹ năng giải quyết bài toán bảng tính Excel và thiết kế trang web Google Sites.',
      notes: 'Kiểm tra cuối kỳ 1'
    },
    // Chủ đề 4: Ứng dụng tin học (Mô phỏng & Trí tuệ nhân tạo AI)
    {
      week: 19,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Sử dụng phần mềm mô phỏng (Tiết 1)',
      periods: 1,
      yccd: '- Hiểu được khái niệm phần mềm mô phỏng và lợi ích của mô phỏng trong nghiên cứu Khoa học tự nhiên, Địa lí, Vật lí.\n- Khám phá phần mềm mô phỏng thí nghiệm tương tác PhET / GeoGebra / Solar System 3D.'
    },
    {
      week: 20,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 9: Sử dụng phần mềm mô phỏng (Tiết 2)',
      periods: 1,
      yccd: '- Thay đổi các thông số đầu vào trong mô phỏng để quan sát sự thay đổi của hiện tượng khoa học.\n- Thu thập số liệu mô phỏng và rút ra định luật/quy luật tự nhiên.'
    },
    {
      week: 21,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Thực hành: Khai thác phần mềm mô phỏng (Tiết 1)',
      periods: 1,
      yccd: '- Thực hành mô phỏng mạch điện, chuyển động cơ học hoặc phản ứng hóa học trên phần mềm chuyên dụng.\n- Ghi lại các thông số và lập báo cáo thí nghiệm ảo.'
    },
    {
      week: 22,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 10: Thực hành: Khai thác phần mềm mô phỏng (Tiết 2)',
      periods: 1,
      yccd: '- So sánh ưu nhược điểm giữa thí nghiệm thực tế và thí nghiệm ảo mô phỏng.\n- Đánh giá vai trò của mô phỏng trong giáo dục hiện đại.'
    },
    {
      week: 23,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Khám phá Trí tuệ nhân tạo (AI) và các ứng dụng thông minh (Tiết 1)',
      periods: 1,
      yccd: '- Nêu được khái niệm Trí tuệ nhân tạo (AI) và phân biệt giữa trí tuệ con người và trí tuệ nhân tạo.\n- Nhận diện các ứng dụng AI tiêu biểu: Nhận diện giọng nói, thị giác máy tính, dịch thuật tự động, chatbot đàm thoại (ChatGPT, Gemini).'
    },
    {
      week: 24,
      topic: 'Chủ đề 4: Ứng dụng tin học',
      name: 'Bài 11: Khám phá Trí tuệ nhân tạo (AI) và các ứng dụng thông minh (Tiết 2)',
      periods: 1,
      yccd: '- Thảo luận về đạo đức sử dụng AI: Tính trung thực trong học thuật, thiên vị thuật toán, bảo vệ quyền riêng tư.\n- Định hướng sử dụng AI như công cụ hỗ trợ học tập hiệu quả, tránh phụ thuộc mù quáng.'
    },
    {
      week: 25,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 9',
      periods: 1,
      yccd: '- Đánh giá kỹ năng sử dụng phần mềm mô phỏng và hiểu biết về Trí tuệ nhân tạo AI.',
      notes: 'Kiểm tra giữa kỳ 2'
    },
    // Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Lập trình Python cơ bản)
    {
      week: 26,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với ngôn ngữ lập trình bậc cao Python (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết ngôn ngữ lập trình Python và môi trường lập trình (IDLE / Thonny / Replit / VS Code).\n- Thực hiện các lệnh cơ bản trong chế độ tương tác (Interactive Mode): print(), phép tính số học.'
    },
    {
      week: 27,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 12: Làm quen với ngôn ngữ lập trình bậc cao Python (Tiết 2)',
      periods: 1,
      yccd: '- Viết và chạy chương trình trong chế độ tệp (Script Mode).\n- Biết cách lưu tệp chương trình (.py) và sử dụng chú thích (#) trong mã nguồn.'
    },
    {
      week: 28,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Các kiểu dữ liệu cơ bản, biến và phép toán trong Python (Tiết 1)',
      periods: 1,
      yccd: '- Nhận biết các kiểu dữ liệu cơ bản trong Python: Số nguyên (int), số thực (float), xâu ký tự (str), lôgic (bool).\n- Khai báo biến, quy tắc đặt tên biến và sử dụng câu lệnh gán (=).'
    },
    {
      week: 29,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 13: Các kiểu dữ liệu cơ bản, biến và phép toán trong Python (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng câu lệnh nhập dữ liệu từ bàn phím input() và chuyển đổi kiểu dữ liệu int(), float().\n- Thực hiện các phép toán số học (+, -, *, /, //, %, **) và so sánh (==, !=, <, >, <=, >=).'
    },
    {
      week: 30,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Cấu trúc rẽ nhánh trong Python (Tiết 1)',
      periods: 1,
      yccd: '- Cú pháp câu lệnh rẽ nhánh dạng thiếu (if) và dạng đủ (if - else) trong Python.\n- Hiểu quy tắc thụt đầu dòng (Indentation) bắt buộc để xác định khối lệnh.'
    },
    {
      week: 31,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 14: Cấu trúc rẽ nhánh trong Python (Tiết 2)',
      periods: 1,
      yccd: '- Sử dụng cấu trúc rẽ nhánh nhiều nhánh (if - elif - else) và các toán tử logic and, or, not.\n- Lập trình giải bài toán giải phương trình bậc nhất, xếp loại học tập, tính cước taxi.'
    },
    {
      week: 32,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Cấu trúc lặp trong Python (Tiết 1)',
      periods: 1,
      yccd: '- Cú pháp câu lệnh lặp for kết hợp với hàm sinh dãy số range(n), range(start, stop, step).\n- Lập trình các bài toán tính tổng, tính giai thừa, in bảng cửu chương.'
    },
    {
      week: 33,
      topic: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
      name: 'Bài 15: Cấu trúc lặp trong Python (Tiết 2)',
      periods: 1,
      yccd: '- Cú pháp câu lệnh lặp while với số lần lặp chưa biết trước.\n- Lập trình bài toán tìm ước chung lớn nhất, kiểm tra số nguyên tố và thoát lặp bằng break.'
    },
    // Chủ đề 6: Hướng nghiệp với tin học
    {
      week: 34,
      topic: 'Chủ đề 6: Hướng nghiệp với tin học',
      name: 'Bài 16: Các ngành nghề thuộc lĩnh vực tin học và định hướng tương lai (1 tiết)',
      periods: 1,
      yccd: '- Tìm hiểu bức tranh nghề nghiệp CNTT trong kỷ nguyên số: Kỹ sư AI, Chuyên gia An toàn thông tin, Phát triển phần mềm, Phân tích dữ liệu, Thiết kế vi mạch bán dẫn.\n- Định hướng lựa chọn môn học chuyên sâu khi bước vào bậc THPT (Lớp 10).'
    },
    {
      week: 35,
      topic: 'Đánh giá định kỳ',
      name: 'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 9',
      periods: 1,
      yccd: '- Đánh giá tổng kết năng lực Tin học và lập trình Python cấp THCS, chuẩn bị xét tốt nghiệp THCS.',
      notes: 'Kiểm tra cuối kỳ 2'
    }
  ]
};

// =========================================================================
// 3. TIN HỌC THPT (LỚP 10, 11, 12 - KNTT) - 70 TIẾT (2 TIẾT/TUẦN)
// =========================================================================
export const HIGH_SCHOOL_INFORMATICS_DATA: Record<number, InformaticsLessonDef[]> = {
  10: (() => {
    const list: InformaticsLessonDef[] = [];
    const topics10 = [
      { w: 1, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 1: Thông tin và xử lý thông tin (Tiết 1, 2)', y: '- Nắm vững khái niệm thông tin và dữ liệu, mối quan hệ giữa thông tin và dữ liệu.\n- Quá trình xử lý thông tin trong máy tính điện tử.' },
      { w: 2, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 2: Vai trò của thiết bị thông minh và tin học đối với xã hội (Tiết 1, 2)', y: '- Nhận biết các thiết bị thông minh trong đời sống và sản xuất.\n- Đánh giá sự đóng góp của tin học đối với sự phát triển của xã hội tri thức.' },
      { w: 3, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 3: Một số thiết bị thông dụng và phần mềm hệ thống (Tiết 1, 2)', y: '- Cấu trúc và chức năng của các thiết bị phần cứng thông dụng: CPU, RAM, ROM, ổ cứng SSD/HDD.\n- Vai trò của hệ điều hành trong quản lý tài nguyên máy tính.' },
      { w: 4, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 4: Mạng máy tính và Internet trong kỷ nguyên số (Tiết 1, 2)', y: '- Kiến trúc mạng LAN, WAN và mạng Internet toàn cầu.\n- Các phương thức kết nối mạng có dây, không dây và dịch vụ mạng viễn thông.' },
      { w: 5, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 5: Dữ liệu số và các đơn vị đo lường thông tin (Tiết 1, 2)', y: '- Biểu diễn số nguyên, số thực và ký tự trong hệ nhị phân.\n- Bảng mã ASCII và Unicode trong xử lý đa ngôn ngữ.' },
      { w: 6, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 6: Lưu trữ dữ liệu an toàn và đám mây (Tiết 1, 2)', y: '- Các phương pháp lưu trữ dữ liệu an toàn cục bộ và sao lưu đám mây.\n- Phòng chống mất mát dữ liệu và phục hồi hệ thống.' },
      { w: 7, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 7: Thực hành: Cài đặt và quản lý phần mềm (Tiết 1, 2)', y: '- Quy trình cài đặt, gỡ bỏ phần mềm ứng dụng an toàn.\n- Cập nhật hệ điều hành và kiểm tra bảo mật phần mềm.' },
      { w: 8, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 8: Mạng máy tính: Cấu trúc và giao thức kết nối (Tiết 1, 2)', y: '- Mô hình mạng máy tính, vai trò của Router, Switch, Modem.\n- Khái niệm địa chỉ IP và giao thức truyền thông TCP/IP.' },
      { w: 9, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 9: An toàn và bảo mật trên không gian mạng (Tiết 1)', y: '- Nhận biết các nguy cơ tấn công mạng, virus, ransomware, phishing.\n- Thiết lập tường lửa và phần mềm bảo mật.' },
      { w: 9, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học 10 (Tiết 2)', y: '- Đánh giá kiến thức phần cứng, mạng máy tính và an toàn thông tin.', isGK: true },
      { w: 10, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 10: Pháp luật về quyền tác giả và bảo hộ tài sản trí tuệ số (Tiết 1, 2)', y: '- Các quy định pháp luật về sở hữu trí tuệ và bản quyền số.\n- Trách nhiệm pháp lý khi sử dụng phần mềm có bản quyền.' },
      { w: 11, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 11: Văn hóa ứng xử và đạo đức trên mạng Internet (Tiết 1, 2)', y: '- Xây dựng chuẩn mực văn hóa ứng xử trực tuyến và bảo vệ hình ảnh cá nhân số.\n- Phòng chống tin giả và bảo vệ môi trường mạng lành mạnh.' },
      { w: 12, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 12: Thực hành: Tìm hiểu và chia sẻ thông tin an toàn (Tiết 1, 2)', y: '- Thực hành tìm kiếm tài liệu mở và trích dẫn nguồn bản quyền chuẩn mực.\n- Thiết lập bảo mật hai lớp (2FA) cho các tài khoản số.' },
      { w: 13, t: 'Chủ đề 4: Ứng dụng tin học', n: 'Bài 13: Phần mềm soạn thảo văn bản và bảng tính nâng cao (Tiết 1, 2)', y: '- Soạn thảo văn bản học thuật: Tạo mục lục tự động, chú thích nguồn (Citation), đánh số trang.\n- Xử lý bảng biểu phức tạp trong Word.' },
      { w: 14, t: 'Chủ đề 4: Ứng dụng tin học', n: 'Bài 14: Xử lý dữ liệu bảng tính với công thức và hàm phức hợp (Tiết 1, 2)', y: '- Sử dụng các hàm lồng nhau IF, AND, OR, VLOOKUP, INDEX, MATCH trong Excel.\n- Phân tích dữ liệu bằng PivotTable.' },
      { w: 15, t: 'Chủ đề 4: Ứng dụng tin học', n: 'Bài 15: Tạo bài trình chiếu đa phương tiện chuyên nghiệp (Tiết 1, 2)', y: '- Thiết kế bài thuyết trình báo cáo khoa học bằng PowerPoint nâng cao.\n- Tích hợp đồ thị động, âm thanh và video tương tác.' },
      { w: 16, t: 'Chủ đề 4: Ứng dụng tin học', n: 'Bài 16: Làm quen với phần mềm thiết kế đồ họa Inkscape (Tiết 1, 2)', y: '- Khám phá giao diện phần mềm đồ họa vector Inkscape.\n- Sử dụng công cụ vẽ đường cong Bezier và xử lý nút (Nodes).' },
      { w: 17, t: 'Chủ đề 4: Ứng dụng tin học', n: 'Bài 17: Thiết kế ấn phẩm đồ họa vector (Tiết 1, 2)', y: '- Thiết kế logo, banner và infographic truyền thông số.\n- Phối màu và xuất bản file vector SVG, PDF, PNG chất lượng cao.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Ôn tập tổng hợp kiến thức Tin học Học kỳ 1 Lớp 10 (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức 4 chủ đề môn Tin học 10.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học 10 (Tiết 2)', y: '- Đánh giá tổng hợp lý thuyết và thực hành Tin học 10 trong Học kỳ 1.', isCK: true },
      // Học kỳ 2: Lập trình Python (Chủ đề 5)
      { w: 19, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 18: Làm quen với ngôn ngữ lập trình Python và môi trường IDLE (Tiết 1, 2)', y: '- Cài đặt Python và tìm hiểu môi trường IDLE/VS Code.\n- Câu lệnh print() và cấu trúc chương trình Python đầu tiên.' },
      { w: 20, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 19: Các kiểu dữ liệu cơ bản, biến và phép toán số học trong Python (Tiết 1, 2)', y: '- Kiểu dữ liệu int, float, str, bool, toán tử số học +, -, *, /, //, %, **.\n- Khai báo và sử dụng biến số trong tính toán.' },
      { w: 21, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 20: Câu lệnh vào/ra và các phép toán so sánh, logic (Tiết 1, 2)', y: '- Câu lệnh input() và ép kiểu int(), float().\n- Biểu thức so sánh và toán tử logic and, or, not.' },
      { w: 22, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 21: Cấu trúc rẽ nhánh điều kiện If - Else (Tiết 1, 2)', y: '- Cú pháp câu lệnh if, if-else, if-elif-else.\n- Lập trình giải các bài toán rẽ nhánh số học và hình học.' },
      { w: 23, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 22: Cấu trúc lặp For và hàm range() (Tiết 1, 2)', y: '- Cú pháp vòng lặp for và các dạng range(n), range(a, b), range(a, b, step).\n- Lập trình tính tổng dãy số, tính giai thừa, in bảng số.' },
      { w: 24, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 23: Cấu trúc lặp While và ứng dụng (Tiết 1, 2)', y: '- Cú pháp vòng lặp while với số lần lặp chưa biết trước.\n- Lập trình tìm UCLN, kiểm tra số nguyên tố và xử lý vòng lặp vô hạn.' },
      { w: 25, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 24: Kiểu dữ liệu danh sách (List) trong Python (Tiết 1, 2)', y: '- Khái niệm danh sách List, chỉ số index và các thao tác duyệt danh sách.\n- Phương thức append(), insert(), remove(), pop(), sort().' },
      { w: 26, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 25: Các thao tác xử lý danh sách nâng cao (Tiết 1)', y: '- Duyệt danh sách, tìm kiếm phần tử lớn nhất/nhỏ nhất và tính tổng danh sách.' },
      { w: 26, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học 10 (Tiết 2)', y: '- Đánh giá kỹ năng lập trình cấu trúc rẽ nhánh, vòng lặp và danh sách List trong Python.', isGK: true },
      { w: 27, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 26: Kiểu dữ liệu xâu ký tự (String) và các phương thức xử lý chuỗi (Tiết 1, 2)', y: '- Thao tác cắt chuỗi (Slicing) và các phương thức find(), replace(), split(), join().\n- Lập trình bài toán chuẩn hóa họ tên và kiểm tra xâu đối xứng.' },
      { w: 28, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 27: Hàm (Function) trong Python: Định nghĩa và gọi hàm (Tiết 1, 2)', y: '- Cú pháp định nghĩa hàm def và câu lệnh return trả về giá trị.\n- Lợi ích của việc tái sử dụng mã nguồn và chia nhỏ chương trình thành các hàm.' },
      { w: 29, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 28: Phạm vi của biến và tham số trong hàm (Tiết 1, 2)', y: '- Phân biệt biến cục bộ (Local) và biến toàn cục (Global).\n- Truyền tham số mặc định và tham số từ khóa trong Python.' },
      { w: 30, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 29: Kỹ thuật kiểm thử và gỡ lỗi chương trình Python (Tiết 1, 2)', y: '- Phân biệt các loại lỗi: Lỗi cú pháp (SyntaxError), Lỗi khi chạy (RuntimeError), Lỗi logic.\n- Kỹ thuật đặt bẫy lỗi try - except và sử dụng công cụ Debugger.' },
      { w: 31, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 30: Thực hành: Dự án phần mềm Python mini (Tiết 1, 2)', y: '- Thiết kế bài toán phần mềm: Quản lý thư viện hoặc Ứng dụng giải toán tự động.\n- Viết mã nguồn hoàn thiện các chức năng chương trình.' },
      { w: 32, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Python)', n: 'Bài 31: Hoàn thiện và báo cáo dự án lập trình Python (Tiết 1, 2)', y: '- Kiểm thử và tối ưu hóa hiệu năng mã nguồn.\n- Báo cáo và chạy thử nghiệm sản phẩm trước hội đồng lớp.' },
      { w: 33, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 32: Nghề nghiệp trong lĩnh vực công nghệ thông tin và chuyển đổi số (Tiết 1, 2)', y: '- Các vị trí việc làm trọng điểm: Kỹ sư AI, Khoa học dữ liệu, An ninh mạng, Lập trình Web/Mobile.\n- Yêu cầu về kiến thức, kỹ năng và phẩm chất cần thiết của nhân lực CNTT.' },
      { w: 34, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 33: Thị trường lao động và xu hướng phát triển nghề CNTT (Tiết 1, 2)', y: '- Xu hướng phát triển công nghệ: Trí tuệ nhân tạo, Điện toán biên, Bán dẫn.\n- Lập kế hoạch học tập đại học và phát triển năng lực cá nhân.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Ôn tập toàn diện kiến thức Tin học Lớp 10 (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức Tin học Lớp 10.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Tin học 10 (Tiết 2)', y: '- Đánh giá tổng kết môn Tin học Lớp 10 theo Chuẩn đầu ra CT GDPT 2018.', isCK: true }
    ];

    topics10.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Phòng máy tính kết nối Internet tốc độ cao, Python 3.12, VS Code, Inkscape, MS Office, máy chiếu',
        location: 'Phòng học bộ môn Tin học',
        notes: item.isGK ? 'Kiểm tra giữa kỳ' : item.isCK ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  })(),
  11: (() => {
    const list: InformaticsLessonDef[] = [];
    const topics11 = [
      { w: 1, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 1: Hệ điều hành máy tính và sự phát triển (Tiết 1, 2)', y: '- Lịch sử và vai trò của hệ điều hành trong quản lý tài nguyên và giao tiếp người dùng.\n- Phân biệt hệ điều hành đơn nhiệm, đa nhiệm, hệ điều hành mạng.' },
      { w: 2, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 2: Phần cứng máy tính và kiến trúc Von Neumann (Tiết 1, 2)', y: '- Cấu trúc chi tiết của CPU (ALU, CU, Registers), Bus dữ liệu và bộ nhớ đệm Cache.\n- Tốc độ xung nhịp và hiệu năng xử lý đa luồng.' },
      { w: 3, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 3: Thực hành: Khám phá cấu hình phần cứng và hệ điều hành (Tiết 1, 2)', y: '- Sử dụng công cụ Task Manager, Device Manager, System Information để đánh giá hiệu năng hệ thống.\n- Quản lý tiến trình và dịch vụ hệ thống.' },
      { w: 4, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 4: Phần mềm nguồn mở và bản quyền phần mềm (Tiết 1, 2)', y: '- Khái niệm phần mềm nguồn mở FOSS và giấy phép GPL, MIT, Apache.\n- Vai trò của nguồn mở trong sự phát triển của công nghệ toàn cầu.' },
      { w: 5, t: 'Chủ đề 1: Máy tính và xã hội tri thức', n: 'Bài 5: Điện toán đám mây và lưu trữ phân tán (Tiết 1, 2)', y: '- Các mô hình dịch vụ đám mây IaaS, PaaS, SaaS.\n- Lợi ích và thách thức về an ninh dữ liệu khi sử dụng đám mây.' },
      { w: 6, t: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và chia sẻ thông tin (CSDL)', n: 'Bài 6: Khái niệm cơ sở dữ liệu và hệ quản trị CSDL (Tiết 1, 2)', y: '- Khái niệm CSDL (Database), Hệ quản trị CSDL (DBMS) và hệ thống CSDL.\n- Ưu điểm của CSDL so với cách lưu trữ tệp truyền thống.' },
      { w: 7, t: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và chia sẻ thông tin (CSDL)', n: 'Bài 7: Mô hình quan hệ và các khóa trong CSDL (Tiết 1, 2)', y: '- Mô hình CSDL quan hệ: Bảng (Table), trường (Field/Column), bản ghi (Record/Row).\n- Khái niệm khóa chính (Primary Key), khóa ngoại (Foreign Key) và tính toàn vẹn dữ liệu.' },
      { w: 8, t: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và chia sẻ thông tin (CSDL)', n: 'Bài 8: Khám phá hệ quản trị CSDL MySQL / Microsoft Access (Tiết 1, 2)', y: '- Khởi động và làm quen với giao diện hệ quản trị CSDL.\n- Tạo cơ sở dữ liệu mới và thiết lập các tham số ban đầu.' },
      { w: 9, t: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và chia sẻ thông tin (CSDL)', n: 'Bài 9: Tạo bảng và thiết lập quan hệ giữa các bảng (Tiết 1)', y: '- Thiết kế các trường dữ liệu, chỉ định kiểu dữ liệu và thuộc tính trường.\n- Thiết lập khóa chính và tạo liên kết (Relationship) giữa các bảng.' },
      { w: 9, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học 11 (Tiết 2)', y: '- Đánh giá kiến thức kiến trúc máy tính, hệ điều hành và thiết kế CSDL quan hệ.', isGK: true },
      { w: 10, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 10: An toàn dữ liệu và quyền riêng tư trong kỷ nguyên số (Tiết 1, 2)', y: '- Các biện pháp mã hóa dữ liệu, xác thực đa yếu tố và phân quyền truy cập CSDL.\n- Quy định pháp luật bảo vệ bí mật dữ liệu cá nhân.' },
      { w: 11, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 11: Phòng chống tấn công mạng và phần mềm độc hại (Tiết 1, 2)', y: '- Nhận diện các hình thức tấn công CSDL (SQL Injection, DDoS, Ransomware).\n- Thiết lập cơ chế sao lưu dự phòng (Backup) và phục hồi thảm họa (Disaster Recovery).' },
      { w: 12, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 12: Đạo đức nghề nghiệp trong ngành CNTT (Tiết 1, 2)', y: '- Bộ quy tắc đạo đức nghề nghiệp ACM/IEEE dành cho chuyên viên CNTT.\n- Trách nhiệm xã hội và tính minh bạch trong xử lý dữ liệu người dùng.' },
      { w: 13, t: 'Chủ đề 4: Ứng dụng tin học (Truy vấn CSDL với SQL)', n: 'Bài 13: Ngôn ngữ truy vấn có cấu trúc SQL: Lệnh SELECT cơ bản (Tiết 1, 2)', y: '- Cú pháp câu lệnh SELECT, FROM để trích xuất dữ liệu từ một bảng.\n- Đổi tên cột hiển thị bằng bí danh AS và loại bỏ trùng lặp bằng DISTINCT.' },
      { w: 14, t: 'Chủ đề 4: Ứng dụng tin học (Truy vấn CSDL với SQL)', n: 'Bài 14: Truy vấn dữ liệu có điều kiện WHERE, ORDER BY, GROUP BY (Tiết 1, 2)', y: '- Sử dụng mệnh đề WHERE với các toán tử so sánh và logic.\n- Sắp xếp kết quả bằng ORDER BY và gom nhóm dữ liệu bằng GROUP BY kết hợp các hàm COUNT, SUM, AVG.' },
      { w: 15, t: 'Chủ đề 4: Ứng dụng tin học (Truy vấn CSDL với SQL)', n: 'Bài 15: Cập nhật dữ liệu bằng INSERT, UPDATE, DELETE (Tiết 1, 2)', y: '- Cú pháp thêm bản ghi mới (INSERT INTO), sửa dữ liệu (UPDATE) và xóa dữ liệu (DELETE).\n- Chú ý an toàn dữ liệu khi thực hiện cập nhật có điều kiện.' },
      { w: 16, t: 'Chủ đề 4: Ứng dụng tin học (Truy vấn CSDL với SQL)', n: 'Bài 16: Thiết kế biểu mẫu (Form) và báo cáo (Report) (Tiết 1, 2)', y: '- Thiết kế giao diện nhập liệu trực quan bằng Form.\n- Tạo báo cáo tổng hợp dữ liệu chuyên nghiệp bằng Report.' },
      { w: 17, t: 'Chủ đề 4: Ứng dụng tin học (Truy vấn CSDL với SQL)', n: 'Bài 17: Thực hành: Xây dựng CSDL quản lý học sinh (Tiết 1, 2)', y: '- Xây dựng trọn vẹn CSDL "Quản lý điểm học sinh THPT".\n- Viết các câu truy vấn phức hợp truy xuất danh sách khen thưởng học sinh giỏi.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Ôn tập CSDL và Kiến trúc máy tính Học kỳ 1 (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức CSDL quan hệ và truy vấn SQL.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học 11 (Tiết 2)', y: '- Đánh giá tổng hợp CSDL và SQL trong Học kỳ 1.', isCK: true },
      // Học kỳ 2: Thuật toán & Lập trình OOP (Chủ đề 5)
      { w: 19, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 18: Kỹ thuật đệ quy và chia để trị (Tiết 1, 2)', y: '- Khái niệm đệ quy, điều kiện dừng và bước đệ quy.\n- Lập trình bài toán Tháp Hà Nội, tính dãy Fibonacci và tìm kiếm nhị phân đệ quy.' },
      { w: 20, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 19: Các thuật toán sắp xếp nâng cao (Quick Sort, Merge Sort) (Tiết 1, 2)', y: '- Ý tưởng và phân tích độ phức tạp thời gian O(N log N) của Quick Sort và Merge Sort.\n- Lập trình cài đặt thuật toán sắp xếp nâng cao trên Python.' },
      { w: 21, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 20: Cấu trúc dữ liệu ngăn xếp (Stack) và hàng đợi (Queue) (Tiết 1, 2)', y: '- Nguyên lý LIFO của Stack và FIFO của Queue.\n- Cài đặt Stack/Queue bằng List và ứng dụng trong bài toán duyệt biểu thức.' },
      { w: 22, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 21: Thuật toán tìm kiếm theo chiều sâu (DFS) và chiều rộng (BFS) (Tiết 1, 2)', y: '- Biểu diễn đồ thị bằng ma trận kề và danh sách kề.\n- Cài đặt thuật toán duyệt đồ thị DFS và BFS tìm đường đi ngắn nhất.' },
      { w: 23, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 22: Lập trình hướng đối tượng (OOP) trong Python: Lớp và đối tượng (Tiết 1, 2)', y: '- Tư duy lập trình hướng đối tượng OOP.\n- Cú pháp khai báo lớp class và tạo đối tượng (Instance).' },
      { w: 24, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 23: Thuộc tính, phương thức và hàm khởi tạo __init__ (Tiết 1, 2)', y: '- Khai báo thuộc tính và phương thức trong lớp.\n- Sử dụng từ khóa self và hàm khởi tạo __init__ để gán giá trị ban đầu cho đối tượng.' },
      { w: 25, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 24: Kế thừa và đa hình trong lập trình OOP (Tiết 1, 2)', y: '- Khái niệm kế thừa (Inheritance) từ lớp cha sang lớp con.\n- Tính đa hình (Polymorphism) và ghi đè phương thức (Method Overriding).' },
      { w: 26, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 25: Xử lý ngoại lệ (Exception Handling) trong Python (Tiết 1)', y: '- Bắt và xử lý lỗi bằng khối lệnh try - except - finally.\n- Tạo ngoại lệ tự định nghĩa bằng lệnh raise.' },
      { w: 26, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học 11 (Tiết 2)', y: '- Đánh giá kỹ năng lập trình hướng đối tượng OOP và cấu trúc dữ liệu thuật toán.', isGK: true },
      { w: 27, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 26: Thao tác với tệp văn bản (File I/O) trong Python (Tiết 1, 2)', y: '- Mở tệp, đọc tệp (read, readline, readlines) và ghi tệp (write, writelines).\n- Sử dụng câu lệnh with open() để đảm bảo tự động đóng tệp an toàn.' },
      { w: 28, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 27: Thư viện đồ họa Tkinter: Tạo giao diện người dùng GUI (Tiết 1, 2)', y: '- Khám phá thư viện Tkinter: Cửa sổ chính, nhãn Label, nút bấm Button, ô nhập Entry.\n- Bố trí giao diện bằng phương thức pack() và grid().' },
      { w: 29, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 28: Thiết kế ứng dụng máy tính cầm tay với Tkinter (Tiết 1, 2)', y: '- Lập trình xử lý sự kiện bấm nút và tính toán biểu thức toán học.\n- Hoàn thiện giao diện ứng dụng máy tính bỏ túi trực quan.' },
      { w: 30, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 29: Dự án: Lập trình phần mềm quản lý thư viện mini (Tiết 1, 2)', y: '- Thiết kế phần mềm quản lý sách kết hợp lập trình OOP, File I/O và giao diện Tkinter.\n- Phân công nhiệm vụ các mô-đun trong nhóm.' },
      { w: 31, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 30: Kiểm thử, đóng gói và hoàn thiện ứng dụng (Tiết 1, 2)', y: '- Kiểm thử tự động và xử lý các ca lỗi dữ liệu.\n- Đóng gói chương trình Python thành tệp thực thi .exe độc lập.' },
      { w: 32, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Thuật toán & OOP)', n: 'Bài 31: Báo cáo dự án phần mềm trước hội đồng lớp (Tiết 1, 2)', y: '- Trình bày sản phẩm phần mềm, bảo vệ kiến trúc thiết kế và trả lời câu hỏi phản biện.' },
      { w: 33, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 32: Kỹ sư phần mềm và chuyên viên an ninh mạng (Tiết 1, 2)', y: '- Phân tích vai trò của Kỹ sư phần mềm (Software Engineer) và Chuyên viên an ninh mạng (Security Analyst).\n- Các chứng chỉ nghề nghiệp quốc tế giá trị (CompTIA Security+, AWS, Cisco CCNA).' },
      { w: 34, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 33: Lập kế hoạch nghề nghiệp và phát triển năng lực số cá nhân (Tiết 1, 2)', y: '- Xây dựng lộ trình học tập, chuẩn bị hồ sơ ứng tuyển (CV) và danh mục dự án cá nhân (Portfolio).\n- Đón đầu thị trường việc làm công nghệ toàn cầu.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Ôn tập toàn diện kiến thức Tin học Lớp 11 (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức Tin học Lớp 11.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Tin học 11 (Tiết 2)', y: '- Đánh giá tổng kết môn Tin học Lớp 11 theo Chuẩn đầu ra CT GDPT 2018.', isCK: true }
    ];

    topics11.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Phòng máy tính kết nối Internet tốc độ cao, MySQL / MS Access, Python 3.12, VS Code, máy chiếu',
        location: 'Phòng học bộ môn Tin học',
        notes: item.isGK ? 'Kiểm tra giữa kỳ' : item.isCK ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  })(),
  12: (() => {
    const list: InformaticsLessonDef[] = [];
    const topics12 = [
      { w: 1, t: 'Chủ đề 1: Máy tính và xã hội tri thức (AI & Dữ liệu lớn)', n: 'Bài 1: Giới thiệu Trí tuệ nhân tạo (AI) và lịch sử phát triển (Tiết 1, 2)', y: '- Định nghĩa Trí tuệ nhân tạo AI và phép thử Turing (Turing Test).\n- Các giai đoạn phát triển của AI từ hệ chuyên gia đến mạng nơ-ron học sâu (Deep Learning).' },
      { w: 2, t: 'Chủ đề 1: Máy tính và xã hội tri thức (AI & Dữ liệu lớn)', n: 'Bài 2: Các phân ngành chính của AI: Học máy và Thị giác máy tính (Tiết 1, 2)', y: '- Khái niệm Học máy (Machine Learning) có giám sát, không giám sát và học tăng cường.\n- Thị giác máy tính (Computer Vision) và ứng dụng nhận diện biển số xe, nhận diện khuôn mặt.' },
      { w: 3, t: 'Chủ đề 1: Máy tính và xã hội tri thức (AI & Dữ liệu lớn)', n: 'Bài 3: Xử lý ngôn ngữ tự nhiên (NLP) và Trợ lý ảo AI thế hệ mới (Tiết 1, 2)', y: '- Nguyên lý xử lý ngôn ngữ tự nhiên NLP và mô hình ngôn ngữ lớn LLM.\n- Cơ chế hoạt động của các trợ lý ảo AI (ChatGPT, Gemini, Copilot).' },
      { w: 4, t: 'Chủ đề 1: Máy tính và xã hội tri thức (AI & Dữ liệu lớn)', n: 'Bài 4: Internet vạn vật (IoT) và các ứng dụng nhà thông minh Smart Home (Tiết 1, 2)', y: '- Kiến trúc hệ thống IoT: Cảm biến (Sensors), cơ cấu chấp hành (Actuators), vi điều khiển và Gateway.\n- Ứng dụng IoT trong nông nghiệp thông minh, đô thị thông minh và nhà thông minh.' },
      { w: 5, t: 'Chủ đề 1: Máy tính và xã hội tri thức (AI & Dữ liệu lớn)', n: 'Bài 5: Dữ liệu lớn (Big Data) và Khoa học dữ liệu (Tiết 1, 2)', y: '- Đặc trưng 5V của Big Data (Volume, Velocity, Variety, Veracity, Value).\n- Quy trình phân tích dữ liệu lớn và khai phá tri thức.' },
      { w: 6, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 6: Giao thức mạng TCP/IP và mô hình phân tầng mạng (Tiết 1, 2)', y: '- Phân tích mô hình TCP/IP 4 tầng và mô hình OSI 7 tầng.\n- Chức năng của gói tin IP (Packet), giao thức tin cậy TCP và giao thức không tin cậy UDP.' },
      { w: 7, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 7: Định tuyến IP, DNS và hệ thống máy chủ tên miền (Tiết 1, 2)', y: '- Cơ chế định tuyến gói tin trên Internet và phân dải tên miền DNS.\n- Cấu trúc địa chỉ IPv4, IPv6 và hệ thống phân cấp tên miền quốc tế/quốc gia (.vn).' },
      { w: 8, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 8: Bảo mật mạng không dây và tường lửa (Firewall) (Tiết 1, 2)', y: '- Các chuẩn mã hóa mạng Wi-Fi (WPA2, WPA3) và nguy cơ nghe lén trên mạng công cộng.\n- Cấu hình tường lửa lọc gói tin và phát hiện xâm nhập.' },
      { w: 9, t: 'Chủ đề 2: Mạng máy tính và Internet', n: 'Bài 9: Kỹ thuật mã hóa dữ liệu đối xứng và bất đối xứng (Tiết 1)', y: '- Nguyên lý mã hóa đối xứng (AES) và mã hóa bất đối xứng (RSA, khóa công khai/khóa bí mật).\n- Chữ ký số (Digital Signature) và giao thức bảo mật HTTPS/SSL.' },
      { w: 9, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học 12 (Tiết 2)', y: '- Đánh giá kiến thức AI, IoT, Big Data, Giao thức TCP/IP và Bảo mật mạng.', isGK: true },
      { w: 10, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 10: Đạo đức AI, tính minh bạch và tránh thiên vị thuật toán (Tiết 1, 2)', y: '- Phân tích các rủi ro đạo đức của AI: Thiên vị dữ liệu đào tạo (Bias), tin giả Deepfake, mất quyền tự chủ.\n- Nguyên tắc phát triển AI có trách nhiệm (Responsible AI).' },
      { w: 11, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 11: Pháp luật bảo vệ dữ liệu cá nhân (Tiết 1, 2)', y: '- Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân tại Việt Nam và chuẩn GDPR quốc tế.\n- Quyền của chủ thể dữ liệu và nghĩa vụ của các tổ chức công nghệ.' },
      { w: 12, t: 'Chủ đề 3: Đạo đức, pháp luật và văn hóa trong môi trường số', n: 'Bài 12: Trách nhiệm xã hội trong phát triển và triển khai công nghệ AI (Tiết 1, 2)', y: '- Tác động của tự động hóa và AI đến cơ cấu việc làm xã hội.\n- Trách nhiệm của kỹ sư công nghệ đối với sự an toàn và phồn vinh của nhân loại.' },
      { w: 13, t: 'Chủ đề 4: Ứng dụng tin học (Thiết kế Website HTML5 & CSS3)', n: 'Bài 13: Tổng quan về kiến trúc Web và ngôn ngữ đánh dấu HTML5 (Tiết 1, 2)', y: '- Kiến trúc Client - Server trong ứng dụng Web.\n- Cấu trúc cơ bản của tài liệu HTML5: <!DOCTYPE html>, <html>, <head>, <body> và các thẻ tiêu đề, đoạn văn.' },
      { w: 14, t: 'Chủ đề 4: Ứng dụng tin học (Thiết kế Website HTML5 & CSS3)', n: 'Bài 14: Các thẻ cấu trúc, bảng và biểu mẫu trong HTML5 (Tiết 1, 2)', y: '- Các thẻ ngữ nghĩa: <header>, <nav>, <main>, <section>, <article>, <footer>.\n- Tạo bảng <table> và biểu mẫu nhập liệu <form> với các trường input, select, button.' },
      { w: 15, t: 'Chủ đề 4: Ứng dụng tin học (Thiết kế Website HTML5 & CSS3)', n: 'Bài 15: Định dạng giao diện Web với Cascading Style Sheets (CSS3) (Tiết 1, 2)', y: '- Cú pháp CSS, bộ chọn (Selectors: Element, Class, ID) và mô hình hộp (Box Model: Margin, Border, Padding, Content).\n- Định dạng màu sắc, phông chữ và nền trang Web.' },
      { w: 16, t: 'Chủ đề 4: Ứng dụng tin học (Thiết kế Website HTML5 & CSS3)', n: 'Bài 16: Thiết kế giao diện Web đáp ứng (Responsive Web Design) (Tiết 1, 2)', y: '- Kỹ thuật Flexbox và CSS Grid trong bố cục trang Web hiện đại.\n- Sử dụng Media Queries để giao diện tự động thích ứng với màn hình điện thoại, máy tính bảng và máy tính.' },
      { w: 17, t: 'Chủ đề 4: Ứng dụng tin học (Thiết kế Website HTML5 & CSS3)', n: 'Bài 17: Làm quen với ngôn ngữ lập trình JavaScript trên trình duyệt (Tiết 1, 2)', y: '- Nhúng mã JavaScript vào trang HTML.\n- Khai báo biến (let, const), hàm và câu lệnh điều khiển trong JavaScript.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Ôn tập tổng hợp AI, Mạng và Thiết kế Web Học kỳ 1 (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức AI, Mạng TCP/IP và Lập trình HTML5/CSS3.' },
      { w: 18, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 1 môn Tin học 12 (Tiết 2)', y: '- Đánh giá tổng hợp lý thuyết và kỹ năng thiết kế Web trong Học kỳ 1.', isCK: true },
      // Học kỳ 2: Dự án phát triển Web & Ứng dụng AI (Chủ đề 5)
      { w: 19, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 18: Lập trình xử lý sự kiện và tương tác DOM với JavaScript (Tiết 1, 2)', y: '- Truy xuất và thay đổi phần tử DOM bằng getElementById, querySelector.\n- Bắt sự kiện người dùng (click, change, submit) để tạo hiệu ứng tương tác động.' },
      { w: 20, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 19: Kết nối Website với API và dịch vụ Web (Tiết 1, 2)', y: '- Khái niệm RESTful API và định dạng dữ liệu trao đổi JSON.\n- Sử dụng hàm fetch() để lấy dữ liệu thời tiết, tin tức từ máy chủ về hiển thị lên Web.' },
      { w: 21, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 20: Tích hợp mô hình AI nhận diện hình ảnh vào Website (Tiết 1, 2)', y: '- Khám phá thư viện AI trên trình duyệt (TensorFlow.js / Teachable Machine).\n- Tích hợp mô hình nhận diện cử chỉ tay hoặc phân loại đồ vật vào trang Web.' },
      { w: 22, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 21: Tích hợp Chatbot AI vào trang Web học tập (Tiết 1, 2)', y: '- Tích hợp tiện ích Chatbot hỗ trợ học tập trực tuyến vào trang Web trường học.\n- Cấu hình prompt mẫu để chatbot trả lời câu hỏi theo chủ đề môn học.' },
      { w: 23, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 22: Lưu trữ dữ liệu Web trên LocalStorage và đám mây (Tiết 1, 2)', y: '- Lưu trữ dữ liệu phiên làm việc và trạng thái người dùng trên LocalStorage.\n- Kết nối CSDL đám mây Firebase / Supabase để lưu trữ dữ liệu thời gian thực.' },
      { w: 24, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 23: Triển khai và xuất bản trang Web lên máy chủ hosting miễn phí (Tiết 1, 2)', y: '- Quy trình đẩy mã nguồn lên GitHub và kết nối với dịch vụ hosting (GitHub Pages, Vercel, Netlify).\n- Cấu hình tên miền và kiểm tra chứng chỉ bảo mật SSL (HTTPS).' },
      { w: 25, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 24: Dự án STEM Tin học 12: "Thiết kế Website Trường học Số tích hợp AI" (Tiết 1, 2)', y: '- Lập kế hoạch dự án tốt nghiệp, phân tích yêu cầu người dùng và phác thảo sơ đồ trang (Sitemap).\n- Phân chia công việc theo phương pháp quản lý dự án Agile/Scrum.' },
      { w: 26, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 25: Lập kế hoạch và thiết kế khung sườn UI/UX cho dự án (Tiết 1)', y: '- Thiết kế giao diện mẫu (Wireframe / Prototype) bằng công cụ Figma / Canva.' },
      { w: 26, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học 12 (Tiết 2)', y: '- Đánh giá kỹ năng lập trình JavaScript, tương tác DOM và thiết kế Web đáp ứng.', isGK: true },
      { w: 27, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 26: Xây dựng các trang nội dung và tính năng tương tác (Tiết 1, 2)', y: '- Viết mã nguồn HTML/CSS/JS cho trang chủ, trang tin tức, trang tài liệu và trang liên hệ.\n- Đảm bảo tính liên kết đồng bộ giữa các trang.' },
      { w: 28, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 27: Tích hợp cơ sở dữ liệu và hệ thống phản hồi tự động (Tiết 1, 2)', y: '- Xây dựng tính năng đăng ký thành viên, gửi góp ý và lưu trữ vào cơ sở dữ liệu.\n- Thiết lập thông báo tự động phản hồi người dùng.' },
      { w: 29, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 28: Kiểm thử an ninh, tối ưu tốc độ tải trang và SEO Web (Tiết 1, 2)', y: '- Tối ưu hóa dung lượng hình ảnh, nén mã nguồn và kiểm tra điểm số Google PageSpeed Insights.\n- Thêm các thẻ meta SEO tối ưu hóa tìm kiếm.' },
      { w: 30, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 29: Hoàn thiện sản phẩm số và đóng gói mã nguồn (Tiết 1, 2)', y: '- Rà soát toàn diện lỗi hiển thị trên nhiều trình duyệt và thiết bị khác nhau.\n- Hoàn thiện tài liệu hướng dẫn sử dụng và báo cáo kỹ thuật.' },
      { w: 31, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 30: Báo cáo và bảo vệ sản phẩm Website trước hội đồng giám khảo lớp (Tiết 1, 2)', y: '- Thuyết trình demo sản phẩm Website trực tiếp, giải thích giải pháp công nghệ và ứng dụng AI tích hợp.' },
      { w: 32, t: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính (Dự án Web & AI)', n: 'Bài 31: Triển lãm sản phẩm số tốt nghiệp THPT của học sinh (Tiết 1, 2)', y: '- Trưng bày và chia sẻ các sản phẩm Website tiêu biểu lên cổng thông tin trường học.' },
      { w: 33, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 32: Xu hướng nghề nghiệp trong kỷ nguyên Trí tuệ nhân tạo và Bán dẫn (Tiết 1, 2)', y: '- Phân tích sự chuyển dịch cơ cấu việc làm công nghệ: Kỹ sư Prompt, Kỹ sư phần mềm AI, Kỹ sư vi mạch bán dẫn.\n- Xu hướng việc làm linh hoạt từ xa (Remote) và hội nhập lao động toàn cầu.' },
      { w: 34, t: 'Chủ đề 6: Hướng nghiệp với tin học', n: 'Bài 33: Lộ trình học tập đại học và định hướng nghề nghiệp CNTT (Tiết 1, 2)', y: '- Lựa chọn ngành học đại học phù hợp: Khoa học máy tính, Kỹ thuật phần mềm, Hệ thống thông tin, An toàn thông tin.\n- Xây dựng kế hoạch phát triển năng lực tự học suốt đời trong thời đại số.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Ôn tập toàn diện chuẩn bị tốt nghiệp THPT môn Tin học (Tiết 1)', y: '- Hệ thống hóa toàn bộ kiến thức 3 năm THPT môn Tin học.' },
      { w: 35, t: 'Đánh giá định kỳ', n: 'Kiểm tra, đánh giá cuối Học kỳ 2 môn Tin học 12 (Tiết 2)', y: '- Đánh giá tổng kết hoàn thành Chương trình môn Tin học cấp THPT.', isCK: true }
    ];

    topics12.forEach((item) => {
      list.push({
        week: item.w,
        topic: item.t,
        name: item.n,
        periods: 1,
        yccd: item.y,
        equipment: 'Phòng máy tính kết nối Internet tốc độ cao, VS Code, Node.js, GitHub, máy chiếu',
        location: 'Phòng học bộ môn Tin học',
        notes: item.isGK ? 'Kiểm tra giữa kỳ' : item.isCK ? 'Kiểm tra cuối kỳ' : ''
      });
    });

    return list;
  })()
};

// =========================================================================
// HELPERS EXPORTED FOR ROUTERS
// =========================================================================
export function getTinHocPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 3;
  const list = PRIMARY_INFORMATICS_DATA[g] || PRIMARY_INFORMATICS_DATA[3];
  return list.map((item) => ({
    week: item.week,
    topic: item.topic,
    name: item.name,
    periods: item.periods,
    yccd: item.yccd,
    equipment: item.equipment || 'Phòng máy tính kết nối Internet tốc độ cao, phần mềm Paint, MS Office, Scratch, máy chiếu',
    location: item.location || 'Phòng học bộ môn Tin học',
    notes: item.notes || ''
  }));
}

export function getTinHocSecondaryCurriculum(grade: string): RawSecondaryLesson[] {
  const g = parseInt(grade, 10) || 6;
  const list = SECONDARY_INFORMATICS_DATA[g] || SECONDARY_INFORMATICS_DATA[6];
  return list.map((item) => ({
    week: item.week,
    topic: item.topic,
    name: item.name,
    periods: item.periods,
    yccd: item.yccd,
    equipment: item.equipment || 'Phòng máy tính kết nối Internet tốc độ cao, MS Office, phần mềm Scratch/Python, máy chiếu',
    location: item.location || 'Phòng học bộ môn Tin học',
    notes: item.notes || ''
  }));
}

export function getTinHocHighSchoolCurriculum(grade: string): RawHighSchoolLesson[] {
  const g = parseInt(grade, 10) || 10;
  const list = HIGH_SCHOOL_INFORMATICS_DATA[g] || HIGH_SCHOOL_INFORMATICS_DATA[10];
  return list.map((item) => ({
    week: item.week,
    topic: item.topic,
    name: item.name,
    periods: item.periods,
    yccd: item.yccd,
    equipment: item.equipment || 'Phòng máy tính kết nối Internet tốc độ cao, Python, VS Code, CSDL, máy chiếu',
    location: item.location || 'Phòng học bộ môn Tin học',
    notes: item.notes || ''
  }));
}
