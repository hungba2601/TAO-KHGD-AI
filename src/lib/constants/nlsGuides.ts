// BỘ TIÊU CHÍ KHUNG NĂNG LỰC SỐ THEO CÔNG VĂN 3456/BGDĐT-GDPT
// Ban hành bởi Bộ Giáo dục và Đào tạo
// QUY ĐỊNH PHÂN CẤP CHUẨN:
// - Tiểu học Lớp 1, 2, 3: Mức độ CƠ BẢN 1 (CB1)
// - Tiểu học Lớp 4, 5:    Mức độ CƠ BẢN 2 (CB2)
// - THCS Lớp 6, 7:        Mức độ TRUNG CẤP 1 / TÍCH CỰC 1 (TC1)
// - THCS Lớp 8, 9:        Mức độ TRUNG CẤP 2 / TÍCH CỰC 2 (TC2)
// - THPT Lớp 10, 11, 12:  Mức độ NÂNG CAO 1 (NC1)

import { SchoolType } from '../../types';

export interface NlsCompetencyItem {
  code: string;
  domain: string;
  level: 'CB1' | 'CB2' | 'TC1' | 'TC2' | 'NC1';
  requirement: string;
}

// 1. TIỂU HỌC LỚP 1, 2, 3 - CƠ BẢN 1 (CB1)
export const DIGITAL_COMPETENCY_GUIDE_CB1 = `**BỘ TIÊU CHÍ NĂNG LỰC SỐ - CẤP TIỂU HỌC LỚP 1, 2, 3 (MỨC ĐỘ CƠ BẢN 1 - CB1)**
- **Mã: 1.1.CB1a** - YCCD: Xác định được nhu cầu thông tin đơn giản.
- **Mã: 1.1.CB1b** - YCCD: Tìm được cách truy cập dữ liệu, thông tin và nội dung số cũng như điều hướng giữa chúng.
- **Mã: 1.1.CB1c** - YCCD: Xác định được các chiến lược tìm kiếm đơn giản.
- **Mã: 1.2.CB1a** - YCCD: Phát hiện được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số.
- **Mã: 1.3.CB1a** - YCCD: Xác định được các cách để tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung.
- **Mã: 1.3.CB1b** - YCCD: Nhận biết được nơi lưu trữ dữ liệu, thông tin và nội dung để truy xuất sau này.
- **Mã: 2.1.CB1a** - YCCD: Lựa chọn được các công nghệ số khác nhau để tương tác.
- **Mã: 2.1.CB1b** - YCCD: Xác định được các phương tiện giao tiếp số phù hợp.
- **Mã: 2.2.CB1a** - YCCD: Nhận biết được các công nghệ số khác nhau để chia sẻ dữ liệu, thông tin và nội dung số.
- **Mã: 2.3.CB1a** - YCCD: Xác định được các dịch vụ số để tham gia vào xã hội.
- **Mã: 2.4.CB1a** - YCCD: Chọn được những công cụ và công nghệ số nào nên được sử dụng cho các quy trình hợp tác.
- **Mã: 2.5.CB1a** - YCCD: Phân biệt được các chuẩn mực hành vi và kiến thức phù hợp khi sử dụng công nghệ số và tương tác trong môi trường số.
- **Mã: 2.6.CB1a** - YCCD: Xác định được một danh tính số cụ thể.
- **Mã: 2.6.CB1b** - YCCD: Mô tả được những cách khác nhau để bảo vệ danh tiếng của một danh tính số.
- **Mã: 3.1.CB1a** - YCCD: Xác định được các cách tạo và chỉnh sửa nội dung số ở các định dạng khác nhau.
- **Mã: 3.1.CB1b** - YCCD: Chọn được cách thể hiện bản thân thông qua việc tạo ra các nội dung số.
- **Mã: 3.2.CB1a** - YCCD: Chọn được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục nội dung và thông tin mới để tạo ra cái mới độc đáo.
- **Mã: 3.3.CB1a** - YCCD: Xác định được các quy tắc về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.
- **Mã: 3.4.CB1a** - YCCD: Liệt kê được các hướng dẫn có thể được diễn giải bởi một hệ thống máy tính để giải quyết một vấn đề đơn giản.
- **Mã: 4.1.CB1a** - YCCD: Nhận biết được các cách bảo vệ thiết bị và nội dung số.
- **Mã: 4.1.CB1b** - YCCD: Phân biệt được rủi ro và mối đe dọa trong môi trường số.
- **Mã: 4.1.CB1c** - YCCD: Chọn lựa được các biện pháp an toàn và bảo mật.
- **Mã: 4.2.CB1a** - YCCD: Lựa chọn được các cách bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.
- **Mã: 4.3.CB1a** - YCCD: Phân biệt được các cách để tránh những rủi ro và đe dọa đến sức khỏe thể chất và tinh thần khi dùng công nghệ số.
- **Mã: 4.4.CB1a** - YCCD: Nhận biết được tác động của công nghệ số và việc sử dụng chúng đối với môi trường.
- **Mã: 5.1.CB1a** - YCCD: Xác định được các vấn đề kỹ thuật khi vận hành thiết bị và sử dụng môi trường số.
- **Mã: 5.2.CB1b** - YCCD: Nhận ra được các công cụ số và giải pháp công nghệ có thể có để giải quyết nhu cầu đó.
- **Mã: 5.3.CB1a** - YCCD: Xác định được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức và quy trình.
- **Mã: 5.4.CB1a** - YCCD: Nhận ra được NLS của mình cần được cải thiện hoặc cập nhật ở đâu.
- **Mã: 6.2.CB1a** - YCCD: Nhận diện được các công cụ AI trong công việc và học tập hàng ngày.
- **Mã: 6.2.CB1b** - YCCD: Thực hiện được các kỹ năng sử dụng AI thông qua các bài tập và dự án nhỏ.
- **Mã: 6.3.CB1a** - YCCD: Nhận diện được cách thức hoạt động của các hệ thống AI đơn giản.`;

// 2. TIỂU HỌC LỚP 4, 5 - CƠ BẢN 2 (CB2)
export const DIGITAL_COMPETENCY_GUIDE_CB2 = `**BỘ TIÊU CHÍ NĂNG LỰC SỐ - CẤP TIỂU HỌC LỚP 4, 5 (MỨC ĐỘ CƠ BẢN 2 - CB2)**
- **Mã: 1.1.CB2a** - YCCD: Xác định được nhu cầu thông tin phục vụ học tập.
- **Mã: 1.1.CB2b** - YCCD: Tìm được dữ liệu, thông tin và nội dung thông qua tìm kiếm đơn giản trong môi trường số.
- **Mã: 1.1.CB2c** - YCCD: Tìm được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.
- **Mã: 1.1.CB2d** - YCCD: Xác định được các chiến lược tìm kiếm đơn giản.
- **Mã: 1.2.CB2a** - YCCD: Phát hiện được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số.
- **Mã: 1.3.CB2a** - YCCD: Xác định được các cách để tổ chức, lưu trữ và truy xuất dữ liệu, thông tin và nội dung.
- **Mã: 1.3.CB2b** - YCCD: Nhận biết được nơi lưu trữ dữ liệu, thông tin và nội dung để truy xuất sau này.
- **Mã: 2.1.CB2a** - YCCD: Lựa chọn được các công nghệ số khác nhau để tương tác.
- **Mã: 2.1.CB2b** - YCCD: Xác định được các phương tiện giao tiếp số phù hợp với bối cảnh.
- **Mã: 2.2.CB2a** - YCCD: Nhận biết được các công nghệ số khác nhau để chia sẻ dữ liệu, thông tin và nội dung số.
- **Mã: 2.2.CB2b** - YCCD: Xác định được cách các quy tắc tham chiếu và ghi chú nguồn được áp dụng.
- **Mã: 2.3.CB2a** - YCCD: Xác định được các dịch vụ số để tham gia vào xã hội.
- **Mã: 2.4.CB2a** - YCCD: Chọn được những công cụ và công nghệ số nào nên được sử dụng cho các quy trình hợp tác.
- **Mã: 2.5.CB2a** - YCCD: Phân biệt được các chuẩn mực hành vi và kiến thức phù hợp khi sử dụng công nghệ số và tương tác trong môi trường số.
- **Mã: 2.6.CB2a** - YCCD: Xác định được một hoặc nhiều danh tính số.
- **Mã: 2.6.CB2b** - YCCD: Mô tả được những cách khác nhau để bảo vệ danh tiếng của một danh tính số.
- **Mã: 3.1.CB2a** - YCCD: Xác định được các cách tạo và chỉnh sửa nội dung số ở các định dạng khác nhau.
- **Mã: 3.2.CB2a** - YCCD: Chọn được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục nội dung và thông tin mới để tạo ra cái mới độc đáo.
- **Mã: 3.3.CB2a** - YCCD: Xác định được các quy tắc về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.
- **Mã: 3.4.CB2a** - YCCD: Liệt kê được các hướng dẫn có thể được diễn giải bởi một hệ thống máy tính để giải quyết một vấn đề đơn giản.
- **Mã: 4.1.CB2a** - YCCD: Nhận biết được các cách bảo vệ thiết bị và nội dung số.
- **Mã: 4.1.CB2c** - YCCD: Tuân theo được các biện pháp an toàn và bảo mật.
- **Mã: 4.2.CB2a** - YCCD: Lựa chọn được các cách bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.
- **Mã: 4.3.CB2a** - YCCD: Phân biệt được các cách để tránh những rủi ro và đe dọa đến sức khỏe thể chất và tinh thần liên quan đến việc sử dụng công nghệ số.
- **Mã: 4.4.CB2a** - YCCD: Nhận biết được tác động của công nghệ số và việc sử dụng chúng đối với môi trường.
- **Mã: 5.1.CB2a** - YCCD: Xác định được các vấn đề kỹ thuật khi vận hành thiết bị và sử dụng môi trường số.
- **Mã: 5.2.CB2b** - YCCD: Nhận ra được các công cụ số và giải pháp công nghệ có thể có để giải quyết nhu cầu đó.
- **Mã: 5.3.CB2a** - YCCD: Xác định được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức và quy trình.
- **Mã: 6.1.CB2a** - YCCD: Xác định được các nguyên tắc hoạt động cơ bản của AI.
- **Mã: 6.1.CB2b** - YCCD: Nhớ lại được các thuật ngữ và khái niệm liên quan đến AI.
- **Mã: 6.2.CB2a** - YCCD: Áp dụng được các công cụ AI trong công việc và học tập hàng ngày.
- **Mã: 6.2.CB2b** - YCCD: Tương tác được với các công cụ AI thông qua các bài tập và dự án nhỏ.
- **Mã: 6.3.CB2b** - YCCD: Mô tả được các đặc điểm và ứng dụng của hệ thống AI.`;

// 3. THCS LỚP 6, 7 - TRUNG CẤP 1 / TÍCH CỰC 1 (TC1)
export const DIGITAL_COMPETENCY_GUIDE_TC1 = `**BỘ TIÊU CHÍ NĂNG LỰC SỐ - CẤP THCS LỚP 6, 7 (MỨC ĐỘ TRUNG CẤP 1 / TÍCH CỰC 1 - TC1)**
- **Mã: 1.1.TC1a** - YCCD: Giải thích được nhu cầu thông tin phục vụ học tập.
- **Mã: 1.1.TC1b** - YCCD: Thực hiện được rõ ràng và theo quy trình các tìm kiếm để tìm dữ liệu, thông tin và nội dung số.
- **Mã: 1.1.TC1c** - YCCD: Giải thích được cách truy cập và điều hướng các kết quả tìm kiếm.
- **Mã: 1.1.TC1d** - YCCD: Giải thích được rõ ràng và theo quy trình chiến lược tìm kiếm.
- **Mã: 1.2.TC1a** - YCCD: Thực hiện phân tích, so sánh và đánh giá được độ tin cậy và độ chính xác của các nguồn dữ liệu, thông tin và nội dung số.
- **Mã: 1.2.TC1b** - YCCD: Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số được xác định là phù hợp với nhu cầu.
- **Mã: 1.3.TC1a** - YCCD: Lựa chọn được dữ liệu, thông tin và nội dung để tổ chức, lưu trữ và truy xuất chúng một cách an toàn.
- **Mã: 1.3.TC1b** - YCCD: Sắp xếp chúng một cách trật tự trong một môi trường có cấu trúc.
- **Mã: 2.1.TC1a** - YCCD: Thực hiện được các tương tác được xác định rõ ràng và thường xuyên với các công nghệ số khác nhau.
- **Mã: 2.1.TC1b** - YCCD: Lựa chọn được các phương tiện giao tiếp số phù hợp, được xác định rõ ràng cho phù hợp với ngữ cảnh.
- **Mã: 2.2.TC1a** - YCCD: Lựa chọn các công nghệ số phù hợp được xác định rõ để trao đổi dữ liệu, thông tin và nội dung.
- **Mã: 2.2.TC1b** - YCCD: Giải thích cách thức hoạt động như một trung gian để chia sẻ thông tin and nội dung thông qua các công nghệ số.
- **Mã: 2.2.TC1c** - YCCD: Minh họa rõ ràng và thường xuyên các phương pháp tham chiếu và ghi chú nguồn.
- **Mã: 2.3.TC1a** - YCCD: Lựa chọn được các dịch vụ số được xác định rõ ràng và phổ biến để tham gia vào xã hội.
- **Mã: 2.4.TC1a** - YCCD: Lựa chọn được các công cụ và công nghệ số được xác định rõ ràng và thường xuyên cho các quy trình hợp tác.
- **Mã: 2.5.TC1a** - YCCD: Làm rõ được các chuẩn mực hành vi thường xuyên và được xác định rõ ràng cũng như bí quyết khi sử dụng công nghệ số và tương tác trong môi trường số.
- **Mã: 2.5.TC1b** - YCCD: Thể hiện được các chiến lược giao tiếp thường xuyên và xác định rõ ràng phương thức giao tiếp phù hợp với khán giả.
- **Mã: 2.6.TC1a** - YCCD: Phân biệt được một loạt các danh tính số thông thường và được xác định rõ ràng.
- **Mã: 2.6.TC1b** - YCCD: Giải thích được những cách được xác định rõ ràng và thường xuyên để bảo vệ danh tiếng của một hoặc nhiều danh tính số.
- **Mã: 3.1.TC1a** - YCCD: Chỉ ra được cách tạo và chỉnh sửa nội dung có khái niệm cụ thể và mang tính phổ thông ở các định dạng khác nhau.
- **Mã: 3.1.TC1b** - YCCD: Thể hiện được bản thân thông qua việc tạo ra các nội dung số thông thường và được xác định rõ ràng.
- **Mã: 3.2.TC1a** - YCCD: Giải thích được các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp các mục nội dung và thông tin mới để tạo ra các mục kiến thức mới, nguyên bản và phù hợp.
- **Mã: 3.3.TC1a** - YCCD: Chỉ ra được các quy tắc thông thường và được xác định rõ ràng về bản quyền và giấy phép áp dụng cho dữ liệu, thông tin và nội dung số.
- **Mã: 3.4.TC1a** - YCCD: Liệt kê được các hướng dẫn thông thường và được xác định rõ ràng cho một hệ thống máy tính để giải quyết một vấn đề.
- **Mã: 4.1.TC1a** - YCCD: Chỉ ra được những cách thức cơ bản và phổ biến để bảo vệ thiết bị và nội dung số.
- **Mã: 4.1.TC1b** - YCCD: Phân biệt được những rủi ro và mối đe dọa cơ bản và phổ biến trong môi trường số.
- **Mã: 4.1.TC1c** - YCCD: Chọn lựa được các biện pháp an toàn và bảo mật rõ ràng và thường xuyên.
- **Mã: 4.2.TC1a** - YCCD: Giải thích được các cách thức cơ bản và phổ biến để bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.
- **Mã: 4.2.TC1b** - YCCD: Giải thích được các cách thức cơ bản và phổ biến để sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn.
- **Mã: 4.3.TC1a** - YCCD: Giải thích được những cách thức cơ bản và phổ biến để tránh rủi ro và đe dọa đối với sức khỏe thể chất và tinh thần liên quan đến việc sử dụng công nghệ số.
- **Mã: 4.4.TC1a** - YCCD: Chỉ ra được những tác động cơ bản và phổ biến của công nghệ số và việc sử dụng công nghệ số đối với môi trường.
- **Mã: 5.1.TC1a** - YCCD: Chỉ ra được các vấn đề kỹ thuật thông thường và được xác định rõ ràng khi vận hành thiết bị và sử dụng môi trường số.
- **Mã: 5.2.TC1b** - YCCD: Chọn được các công cụ số thông thường và được xác định rõ ràng cũng như các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.
- **Mã: 5.3.TC1a** - YCCD: Chọn được các công cụ và công nghệ số có thể được sử dụng để tạo ra kiến thức rõ ràng và quy trình.
- **Mã: 5.4.TC1a** - YCCD: Giải thích được NLS của bản thân cần được cải thiện hoặc cập nhật ở đâu.
- **Mã: 6.1.TC1a** - YCCD: Giải thích được nguyên tắc hoạt động cơ bản của AI.
- **Mã: 6.1.TC1b** - YCCD: Diễn giải được các thuật ngữ và khái niệm liên quan đến AI.
- **Mã: 6.2.TC1a** - YCCD: Sử dụng được các công cụ AI trong công việc và học tập hàng ngày.
- **Mã: 6.2.TC1b** - YCCD: Thực hành được các kỹ năng sử dụng AI thông qua các bài tập và dự án nhỏ.
- **Mã: 6.2.TC1c** - YCCD: Xem xét các khía cạnh đạo đức khi sử dụng AI, bảo đảm không vi phạm quyền riêng tư và các quy định pháp luật.
- **Mã: 6.3.TC1a** - YCCD: Giải thích được cách thức hoạt động của các hệ thống AI đơn giản.`;

// 4. THCS LỚP 8, 9 - TRUNG CẤP 2 / TÍCH CỰC 2 (TC2)
export const DIGITAL_COMPETENCY_GUIDE_TC2 = `**BỘ TIÊU CHÍ NĂNG LỰC SỐ - CẤP THCS LỚP 8, 9 (MỨC ĐỘ TRUNG CẤP 2 / TÍCH CỰC 2 - TC2)**
- **Mã: 1.1.TC2a** - YCCD: Minh họa được nhu cầu thông tin trong các bài toán thực tiễn.
- **Mã: 1.1.TC2b** - YCCD: Tổ chức được tìm kiếm dữ liệu, thông tin và nội dung nâng cao trong môi trường số.
- **Mã: 1.1.TC2c** - YCCD: Mô tả được cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng.
- **Mã: 1.1.TC2d** - YCCD: Tổ chức được các chiến lược tìm kiếm thông minh và phân loại dữ liệu.
- **Mã: 1.2.TC2a** - YCCD: Thực hiện phân tích, so sánh và đánh giá được các nguồn dữ liệu, thông tin và nội dung số.
- **Mã: 1.2.TC2b** - YCCD: Thực hiện phân tích, diễn giải và đánh giá được dữ liệu, thông tin và nội dung số phù hợp yêu cầu.
- **Mã: 1.3.TC2a** - YCCD: Sắp xếp được thông tin, dữ liệu, nội dung để dễ dàng lưu trữ và truy xuất trên điện toán đám mây.
- **Mã: 1.3.TC2b** - YCCD: Tổ chức được thông tin, dữ liệu và nội dung trong một môi trường có cấu trúc thư mục bảo mật.
- **Mã: 2.1.TC2a** - YCCD: Lựa chọn được nhiều công nghệ số để tương tác và làm việc nhóm.
- **Mã: 2.1.TC2b** - YCCD: Lựa chọn được nhiều phương tiện truyền thông số cho phù hợp với bối cảnh nhất định.
- **Mã: 2.2.TC2a** - YCCD: Vận dụng được các công nghệ số phù hợp để chia sẻ dữ liệu, thông tin và nội dung số an toàn.
- **Mã: 2.2.TC2b** - YCCD: Giải thích được cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua các công nghệ số.
- **Mã: 2.2.TC2c** - YCCD: Áp dụng được các phương pháp tham chiếu và ghi chú nguồn học liệu số chuẩn quy cách.
- **Mã: 2.3.TC2a** - YCCD: Lựa chọn được các dịch vụ số để tham gia tích cực vào các hoạt động cộng đồng và xã hội.
- **Mã: 2.3.TC2b** - YCCD: Thảo luận về các công nghệ số phù hợp để nâng cao năng lực của bản thân và tham gia vào xã hội.
- **Mã: 2.4.TC2a** - YCCD: Lựa chọn được các công cụ và công nghệ số cho các quy trình hợp tác, làm việc nhóm trực tuyến.
- **Mã: 2.5.TC2a** - YCCD: Thảo luận về các chuẩn mực hành vi và cách sử dụng công nghệ số và tương tác văn minh trong môi trường số.
- **Mã: 2.5.TC2b** - YCCD: Thảo luận các chiến lược giao tiếp phù hợp trong môi trường số.
- **Mã: 2.6.TC2a** - YCCD: Hiển thị và quản lý được nhiều danh tính số cụ thể.
- **Mã: 2.6.TC2b** - YCCD: Thảo luận những cách cụ thể để bảo vệ danh tiếng trực tuyến và an toàn danh tính cá nhân.
- **Mã: 2.6.TC2c** - YCCD: Thao tác dữ liệu cá nhân tạo ra thông qua các công cụ, môi trường hoặc dịch vụ số.
- **Mã: 3.1.TC2a** - YCCD: Chỉ ra và thực hành tạo, chỉnh sửa nội dung ở các định dạng khác nhau (bảng tính, đồ họa số, bài trình chiếu).
- **Mã: 3.1.TC2b** - YCCD: Thể hiện được bản thân thông qua việc tạo ra các sản phẩm nội dung số sáng tạo.
- **Mã: 3.2.TC2a** - YCCD: Thảo luận và thực hiện các cách sửa đổi, tinh chỉnh, cải thiện và tích hợp nội dung số tạo sản phẩm nguyên bản.
- **Mã: 3.3.TC2a** - YCCD: Thảo luận và tuân thủ các quy tắc về bản quyền và giấy phép áp dụng cho thông tin và nội dung số.
- **Mã: 3.4.TC2a** - YCCD: Liệt kê và viết được các hướng dẫn/thuật toán cho một hệ thống máy tính để giải quyết một vấn đề (Scratch/Python).
- **Mã: 4.1.TC2a** - YCCD: Thiết lập được những cách thức bảo vệ thiết bị và nội dung số khỏi mã độc và sự cố mất dữ liệu.
- **Mã: 4.1.TC2b** - YCCD: Phân biệt được rủi ro và mối đe dọa trong môi trường số.
- **Mã: 4.1.TC2c** - YCCD: Chọn lựa và thực thi được các biện pháp an toàn và bảo mật hệ thống.
- **Mã: 4.2.TC2a** - YCCD: Thảo luận và thực thi bảo vệ dữ liệu cá nhân và quyền riêng tư trong môi trường số.
- **Mã: 4.2.TC2b** - YCCD: Thảo luận về cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn.
- **Mã: 4.3.TC2a** - YCCD: Giải thích được những cách thức để tránh những sự đe dọa liên quan đến việc sử dụng công nghệ số đối với sức khỏe.
- **Mã: 4.3.TC2b** - YCCD: Lựa chọn được cách thức bảo vệ bản thân và người khác khỏi nguy cơ trong môi trường số.
- **Mã: 4.4.TC2a** - YCCD: Thảo luận về các cách thức bảo vệ môi trường khỏi tác động của công nghệ số và rác thải điện tử.
- **Mã: 5.1.TC2a** - YCCD: Phân biệt và chẩn đoán được các vấn đề kỹ thuật khi vận hành thiết bị và sử dụng môi trường số.
- **Mã: 5.1.TC2b** - YCCD: Chọn và áp dụng được giải pháp khắc phục sự cố kỹ thuật số.
- **Mã: 5.2.TC2b** - YCCD: Lựa chọn được các công cụ số và các giải pháp công nghệ có thể có để giải quyết những nhu cầu đó.
- **Mã: 5.3.TC2a** - YCCD: Phân biệt và vận dụng sáng tạo các công cụ và công nghệ số để tạo ra kiến thức và quy trình dự án STEM.
- **Mã: 5.3.TC2b** - YCCD: Gắn kết được cá nhân và tập thể vào quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề thực tiễn.
- **Mã: 5.4.TC2a** - YCCD: Thảo luận và chủ động xác định lĩnh vực NLS của bản thân cần được cải thiện hoặc cập nhật.
- **Mã: 6.1.TC2a** - YCCD: Áp dụng được các nguyên tắc cơ bản của AI để giải quyết vấn đề đơn giản.
- **Mã: 6.1.TC2b** - YCCD: Thực hiện được các thao tác cơ bản trên các công cụ AI trợ giảng và sáng tạo nội dung.
- **Mã: 6.2.TC2a** - YCCD: Tối ưu hóa việc sử dụng các công cụ AI để đạt hiệu quả cao hơn trong học tập.
- **Mã: 6.2.TC2b** - YCCD: Quản lý được việc triển khai các công cụ AI trong các dự án nhỏ của nhóm.
- **Mã: 6.2.TC2c** - YCCD: Bảo vệ được dữ liệu cá nhân và tuân thủ các quy định pháp luật về bảo mật thông tin khi sử dụng AI.
- **Mã: 6.3.TC2a** - YCCD: Phân tích được hiệu quả của hệ thống AI trong việc giải quyết các vấn đề cụ thể.
- **Mã: 6.3.TC2b** - YCCD: So sánh được hiệu suất của các hệ thống AI khác nhau.`;

// 5. THPT LỚP 10, 11, 12 - NÂNG CAO 1 (NC1)
export const DIGITAL_COMPETENCY_GUIDE_NC1 = `**BỘ TIÊU CHÍ NĂNG LỰC SỐ - CẤP THPT LỚP 10, 11, 12 (MỨC ĐỘ NÂNG CAO 1 - NC1)**
- **Mã: 1.1.NC1a** - YCCD: Đáp ứng được nhu cầu thông tin chuyên sâu và nghiên cứu học thuật.
- **Mã: 1.1.NC1b** - YCCD: Áp dụng được kỹ thuật tìm kiếm chuyên sâu để lấy được dữ liệu, thông tin và nội dung trong môi trường số.
- **Mã: 1.1.NC1c** - YCCD: Chỉ cho người khác cách truy cập những dữ liệu, thông tin và nội dung này cũng như điều hướng giữa chúng.
- **Mã: 1.1.NC1d** - YCCD: Tự đề xuất được chiến lược tìm kiếm và tổng hợp thông tin phức hợp.
- **Mã: 1.2.NC1a** - YCCD: Thực hiện đánh giá phản biện độ tin cậy và tính xác thực của các nguồn dữ liệu, thông tin số.
- **Mã: 1.2.NC1b** - YCCD: Tiến hành đánh giá được các dữ liệu, thông tin và nội dung số khác nhau.
- **Mã: 1.3.NC1a** - YCCD: Thao tác và quản trị được thông tin, dữ liệu và nội dung để tổ chức, lưu trữ và truy xuất dễ dàng.
- **Mã: 1.3.NC1b** - YCCD: Triển khai được việc tổ chức và sắp xếp dữ liệu, thông tin và nội dung trong môi trường có cấu trúc.
- **Mã: 2.1.NC1a** - YCCD: Sử dụng thành thạo nhiều công nghệ số đa nền tảng để tương tác và làm việc khoa học.
- **Mã: 2.1.NC1b** - YCCD: Cho người khác thấy phương tiện giao tiếp số phù hợp nhất cho một bối cảnh cụ thể.
- **Mã: 2.2.NC1a** - YCCD: Chia sẻ dữ liệu, thông tin và nội dung số an toàn thông qua nhiều công cụ số phù hợp.
- **Mã: 2.2.NC1b** - YCCD: Hướng dẫn người khác cách đóng vai trò trung gian để chia sẻ thông tin và nội dung thông qua công nghệ số.
- **Mã: 2.2.NC1c** - YCCD: Áp dụng được nhiều phương pháp tham chiếu và trích dẫn nguồn học thuật chuẩn quốc tế.
- **Mã: 2.3.NC1a** - YCCD: Đề xuất được các dịch vụ số khác nhau để tham gia vào xã hội số.
- **Mã: 2.3.NC1b** - YCCD: Sử dụng được các công nghệ số thích hợp để tự mình trang bị và tham gia vào xã hội như một công dân số.
- **Mã: 2.4.NC1a** - YCCD: Đề xuất và điều phối các công cụ và công nghệ số khác nhau cho các quá trình hợp tác trực tuyến.
- **Mã: 2.5.NC1a** - YCCD: Áp dụng được các chuẩn mực hành vi và bí quyết khác nhau khi sử dụng công nghệ số và tương tác trong môi trường số.
- **Mã: 2.5.NC1b** - YCCD: Áp dụng được các chiến lược giao tiếp khác nhau trong môi trường số một cách phù hợp.
- **Mã: 2.6.NC1a** - YCCD: Sử dụng và kiểm soát an toàn nhiều danh tính số khác nhau.
- **Mã: 2.6.NC1b** - YCCD: Áp dụng được các cách nâng cao để bảo vệ danh tính trực tuyến của bản thân.
- **Mã: 3.1.NC1a** - YCCD: Áp dụng được các cách tạo và chỉnh sửa nội dung đa phương tiện ở các định dạng chuyên nghiệp.
- **Mã: 3.1.NC1b** - YCCD: Chỉ ra được những cách thể hiện bản thân thông qua việc tạo ra các sản phẩm nội dung số.
- **Mã: 3.2.NC1a** - YCCD: Làm việc với các mục nội dung và thông tin mới khác nhau, sửa đổi, tinh chỉnh, cải thiện và tích hợp chúng.
- **Mã: 3.3.NC1a** - YCCD: Áp dụng được các quy định pháp luật về bản quyền và giấy phép cho dữ liệu, thông tin và nội dung số.
- **Mã: 3.4.NC1a** - YCCD: Tự thao tác và lập trình thuật toán cho hệ thống máy tính để giải quyết bài toán phức hợp.
- **Mã: 4.1.NC1a** - YCCD: Áp dụng được các giải pháp an toàn thông tin để bảo vệ thiết bị và dữ liệu số.
- **Mã: 4.2.NC1a** - YCCD: Áp dụng được các cách thức bảo vệ dữ liệu cá nhân, quyền riêng tư và mã hóa dữ liệu số.
- **Mã: 4.3.TC1a** - YCCD: Trình bày và thực hành lối sống số cân bằng, an toàn sức khỏe thể chất và tinh thần.
- **Mã: 4.4.NC1a** - YCCD: Trình bày được các giải pháp công nghệ xanh để bảo vệ môi trường khỏi tác động của công nghệ số.
- **Mã: 5.1.NC1a** - YCCD: Đánh giá và chẩn đoán được các sự cố kỹ thuật phức tạp khi vận hành thiết bị số.
- **Mã: 5.2.NC1b** - YCCD: Áp dụng được các công cụ số và giải pháp công nghệ tối ưu để giải quyết nhu cầu học tập và nghiên cứu.
- **Mã: 5.3.NC1a** - YCCD: Áp dụng sáng tạo công nghệ số để tạo ra kiến thức, quy trình và các sản phẩm số đột phá.
- **Mã: 6.1.NC1a** - YCCD: Phân tích được cách AI hoạt động, kiến trúc mô hình và cách thức xử lý dữ liệu.
- **Mã: 6.2.NC1a** - YCCD: Phát triển và tùy biến được các ứng dụng AI giải quyết bài toán thực tế.
- **Mã: 6.2.NC1c** - YCCD: Đánh giá và giảm thiểu được các rủi ro đạo đức, pháp lý liên quan đến việc sử dụng AI.
- **Mã: 6.3.NC1a** - YCCD: Đánh giá định lượng độ chính xác và độ tin cậy của các hệ thống AI.`;

export interface LessonNlsContext {
  lessonName?: string;
  topic?: string;
  yccd?: string;
  subject?: string;
  lessonIndex?: number;
}

export function getNlsGuideByGradeAndSchool(grade: string, schoolType: SchoolType): { level: 'CB1' | 'CB2' | 'TC1' | 'TC2' | 'NC1'; guideText: string } {
  const gNum = parseInt(grade.replace(/\D/g, ''), 10) || 8;

  // TIỂU HỌC: Lớp 1, 2, 3 -> CB1; Lớp 4, 5 -> CB2
  if (gNum <= 3 || (schoolType === 'primary' && gNum <= 3)) {
    return { level: 'CB1', guideText: DIGITAL_COMPETENCY_GUIDE_CB1 };
  }
  if (gNum <= 5 || schoolType === 'primary') {
    return { level: 'CB2', guideText: DIGITAL_COMPETENCY_GUIDE_CB2 };
  }

  // THCS: Lớp 6, 7 -> TC1; Lớp 8, 9 -> TC2
  if (gNum <= 7 || (schoolType === 'secondary' && gNum <= 7)) {
    return { level: 'TC1', guideText: DIGITAL_COMPETENCY_GUIDE_TC1 };
  }
  if (gNum <= 9 || schoolType === 'secondary') {
    return { level: 'TC2', guideText: DIGITAL_COMPETENCY_GUIDE_TC2 };
  }

  // THPT: Lớp 10, 11, 12 -> NC1
  return { level: 'NC1', guideText: DIGITAL_COMPETENCY_GUIDE_NC1 };
}

/**
 * Phân tích và chọn mã NLS chuẩn xác theo Khối lớp và Ngữ cảnh nội dung bài học (Tên bài, Chủ đề, YCCĐ)
 */
export function getNlsCodeForSubjectLesson(
  grade: string,
  schoolType: SchoolType,
  contextOrIndex: number | LessonNlsContext | string
): { code: string; level: string; requirement: string } {
  const { level, guideText } = getNlsGuideByGradeAndSchool(grade, schoolType);
  const lines = guideText.split('\n').filter((l) => l.startsWith('- **Mã:'));
  
  // Extract all available items for this grade level
  const items: Array<{ code: string; requirement: string; raw: string }> = [];
  for (const line of lines) {
    const match = line.match(/- \*\*Mã:\s*([^*]+)\*\*\s*-\s*YCCD:\s*(.+)$/);
    if (match) {
      items.push({
        code: match[1].trim(),
        requirement: match[2].trim(),
        raw: line
      });
    }
  }

  if (items.length === 0) {
    const fallbackCode = level === 'CB1' ? '1.1.CB1a' : level === 'CB2' ? '1.1.CB2b' : level === 'TC1' ? '1.1.TC1b' : level === 'TC2' ? '1.1.TC2b' : '1.1.NC1b';
    return {
      code: fallbackCode,
      level,
      requirement: 'Tìm kiếm và khai thác học liệu số phục vụ bài học'
    };
  }

  // Helper to find item by code prefix and distribute intelligently among a, b, c, d
  const findByCodePrefix = (prefix: string, preferredLetter?: string): { code: string; requirement: string } | null => {
    if (preferredLetter) {
      const specific = items.find((it) => it.code.startsWith(prefix) && it.code.endsWith(preferredLetter));
      if (specific) return { code: specific.code, requirement: specific.requirement };
    }
    const matched = items.filter((it) => it.code.startsWith(prefix));
    if (matched.length > 0) {
      const picked = matched[lessonIdx % matched.length];
      return { code: picked.code, requirement: picked.requirement };
    }
    return null;
  };

  // Helper to find item by domain and distribute among a, b, c, d
  const findByDomain = (domainDigit: string): { code: string; requirement: string } | null => {
    const matched = items.filter((it) => it.code.startsWith(`${domainDigit}.`));
    if (matched.length > 0) {
      const picked = matched[lessonIdx % matched.length];
      return { code: picked.code, requirement: picked.requirement };
    }
    return null;
  };

  // Extract contextual text
  let titleText = '';
  let contextText = '';
  let lessonIdx = 0;

  if (typeof contextOrIndex === 'number') {
    lessonIdx = contextOrIndex;
  } else if (typeof contextOrIndex === 'string') {
    titleText = contextOrIndex.toLowerCase();
    contextText = contextOrIndex.toLowerCase();
  } else if (contextOrIndex && typeof contextOrIndex === 'object') {
    const ctx = contextOrIndex as LessonNlsContext;
    titleText = `${ctx.lessonName || ''} ${ctx.topic || ''}`.toLowerCase();
    contextText = `${titleText} ${ctx.yccd || ''} ${ctx.subject || ''}`.toLowerCase();
    if (typeof ctx.lessonIndex === 'number') {
      lessonIdx = ctx.lessonIndex;
    }
  }

  // 1. Kiểm tra, Đánh giá, Ôn tập (Giữa kỳ, Cuối kỳ)
  const isAssessment =
    titleText.includes('kiểm tra') ||
    titleText.includes('đánh giá') ||
    titleText.includes('giữa kì') ||
    titleText.includes('giữa kỳ') ||
    titleText.includes('cuối kì') ||
    titleText.includes('cuối kỳ') ||
    titleText.includes('sơ kết') ||
    titleText.includes('tổng kết năm') ||
    titleText.includes('ôn tập') ||
    titleText.includes('test') ||
    titleText.includes('exam') ||
    titleText.includes('assessment');

  if (isAssessment) {
    const res = findByCodePrefix('4.2.') || findByCodePrefix('1.3.') || findByCodePrefix('5.2.');
    if (res) return { ...res, level };
  }

  // 2. Bảng tính, Excel, Trang tính, Dữ liệu, Sắp xếp, Lọc, Biểu đồ thống kê, Quản lý tệp, Xác thực dữ liệu, Hàm tính toán
  const isSpreadsheet =
    titleText.includes('bảng tính') ||
    titleText.includes('excel') ||
    titleText.includes('trang tính') ||
    titleText.includes('sắp xếp') ||
    titleText.includes('lọc') ||
    titleText.includes('biểu đồ') ||
    titleText.includes('thống kê') ||
    titleText.includes('tần số') ||
    titleText.includes('ghép nhóm') ||
    titleText.includes('mẫu số liệu') ||
    titleText.includes('dãy số') ||
    titleText.includes('cấp số') ||
    titleText.includes('lãi kép') ||
    titleText.includes('quản lý tệp') ||
    titleText.includes('quản lí tệp') ||
    titleText.includes('quản lí dữ liệu') ||
    titleText.includes('thư mục') ||
    titleText.includes('lưu trữ') ||
    titleText.includes('xác thực dữ liệu') ||
    titleText.includes('validation') ||
    titleText.includes('countif') ||
    titleText.includes('sumif') ||
    titleText.includes('hàm if') ||
    titleText.includes('tính toán tự động') ||
    titleText.includes('hỗ trợ tính toán') ||
    titleText.includes('hoàn thiện bảng tính') ||
    titleText.includes('tài chính') ||
    titleText.includes('spreadsheet');

  if (isSpreadsheet) {
    const res = findByCodePrefix('1.3.') || findByCodePrefix('3.1.') || findByDomain('1');
    if (res) return { ...res, level };
  }

  // 3. Soạn thảo, Định dạng văn bản, Trình chiếu, PowerPoint, Canva, Sơ đồ tư duy, Đồ họa, Video, Xuất bản
  const isAuthoring =
    titleText.includes('soạn thảo') ||
    titleText.includes('văn bản') ||
    titleText.includes('định dạng văn bản') ||
    titleText.includes('tìm kiếm và thay thế') ||
    titleText.includes('sổ lưu niệm') ||
    titleText.includes('danh sách dạng liệt kê') ||
    titleText.includes('đầu trang, chân trang') ||
    titleText.includes('mục lục') ||
    titleText.includes('trình chiếu') ||
    titleText.includes('trang chiếu') ||
    titleText.includes('bản mẫu') ||
    titleText.includes('slide master') ||
    titleText.includes('powerpoint') ||
    titleText.includes('canva') ||
    titleText.includes('poster') ||
    titleText.includes('sơ đồ tư duy') ||
    titleText.includes('mindmap') ||
    titleText.includes('đồ họa') ||
    titleText.includes('chỉnh sửa ảnh') ||
    titleText.includes('video') ||
    titleText.includes('làm video') ||
    titleText.includes('dựng video') ||
    titleText.includes('âm thanh') ||
    titleText.includes('bản vẽ') ||
    titleText.includes('hình chiếu');

  if (isAuthoring) {
    const res = findByCodePrefix('3.1.') || findByCodePrefix('3.2.') || findByDomain('3');
    if (res) return { ...res, level };
  }

  // 4. An toàn mạng, Bản quyền, Đạo đức số, Quyền riêng tư, Văn hóa ứng xử, Pháp lí
  const isSafetyEthics =
    titleText.includes('bản quyền') ||
    titleText.includes('giấy phép') ||
    titleText.includes('trích dẫn') ||
    titleText.includes('an toàn') ||
    titleText.includes('bảo mật') ||
    titleText.includes('mật khẩu') ||
    titleText.includes('quyền riêng tư') ||
    titleText.includes('thông tin cá nhân') ||
    titleText.includes('lừa đảo') ||
    titleText.includes('mã độc') ||
    titleText.includes('virus') ||
    titleText.includes('văn hóa mạng') ||
    titleText.includes('văn hoá') ||
    titleText.includes('ứng xử') ||
    titleText.includes('đạo đức') ||
    titleText.includes('pháp lí') ||
    titleText.includes('pháp luật');

  if (isSafetyEthics) {
    const res = findByCodePrefix('4.2.') || findByCodePrefix('4.1.') || findByCodePrefix('3.3.') || findByCodePrefix('2.5.');
    if (res) return { ...res, level };
  }

  // 5. Dự án STEM, Thí nghiệm ảo, Mô phỏng PhET, GeoGebra, Desmos, Chế tạo kỹ thuật, Hướng nghiệp
  const isStemSim =
    titleText.includes('stem') ||
    titleText.includes('dự án') ||
    titleText.includes('thí nghiệm') ||
    titleText.includes('mô phỏng') ||
    titleText.includes('phần mềm mô phỏng') ||
    titleText.includes('phet') ||
    titleText.includes('geogebra') ||
    titleText.includes('desmos') ||
    titleText.includes('máy tính cầm tay') ||
    titleText.includes('casio') ||
    titleText.includes('chế tạo') ||
    titleText.includes('nghề nghiệp') ||
    titleText.includes('hướng nghiệp') ||
    titleText.includes('tưới tự động') ||
    titleText.includes('vi điều khiển');

  if (isStemSim) {
    const res = findByCodePrefix('5.3.') || findByCodePrefix('5.2.') || findByDomain('5');
    if (res) return { ...res, level };
  }

  // 6. Lập trình, Thuật toán, Coding, Scratch, Python, C++, Cấu trúc điều khiển, Gỡ lỗi, Bài toán tin học
  const isProgramming =
    titleText.includes('lập trình') ||
    titleText.includes('thuật toán') ||
    titleText.includes('tìm kiếm tuần tự') ||
    titleText.includes('tìm kiếm nhị phân') ||
    titleText.includes('sắp xếp') ||
    titleText.includes('câu lệnh') ||
    titleText.includes('cấu trúc điều khiển') ||
    titleText.includes('chương trình máy tính') ||
    titleText.includes('biểu diễn dữ liệu') ||
    titleText.includes('gỡ lỗi') ||
    titleText.includes('giải quyết vấn đề') ||
    titleText.includes('bài toán tin học') ||
    titleText.includes('scratch') ||
    titleText.includes('python') ||
    titleText.includes('rẽ nhánh') ||
    titleText.includes('vòng lặp') ||
    titleText.includes('lặp') ||
    titleText.includes('robot') ||
    titleText.includes('coding');

  if (isProgramming) {
    const res = findByCodePrefix('3.4.') || findByCodePrefix('5.3.') || findByDomain('3');
    if (res) return { ...res, level };
  }

  // 7. Làm việc nhóm, Thảo luận, Thuyết trình, Giao tiếp, Báo cáo, Thư điện tử, Trao đổi và hợp tác, Mạng xã hội
  const isCollaboration =
    titleText.includes('thuyết trình') ||
    titleText.includes('thảo luận') ||
    titleText.includes('nhóm') ||
    titleText.includes('báo cáo') ||
    titleText.includes('giao tiếp') ||
    titleText.includes('thư điện tử') ||
    titleText.includes('email') ||
    titleText.includes('trao đổi và hợp tác') ||
    titleText.includes('hợp tác') ||
    titleText.includes('cộng tác') ||
    titleText.includes('mạng xã hội') ||
    titleText.includes('speaking') ||
    titleText.includes('presentation');

  if (isCollaboration) {
    const res = findByCodePrefix('2.4.') || findByCodePrefix('2.1.') || findByCodePrefix('2.2.') || findByDomain('2');
    if (res) return { ...res, level };
  }

  // 8. Trí tuệ nhân tạo, AI, Chatbot, Học máy, Trợ lý ảo
  const isAi =
    titleText.includes('trí tuệ nhân tạo') ||
    titleText.includes('ai') ||
    titleText.includes('chatbot') ||
    titleText.includes('học máy') ||
    titleText.includes('nhận diện');

  if (isAi) {
    const res = findByCodePrefix('6.2.') || findByCodePrefix('6.1.') || findByDomain('6');
    if (res) return { ...res, level };
  }

  // 9. Mạng máy tính, Internet, Dịch vụ Web, Thiết bị vào ra, Phần cứng, Tìm kiếm & Đọc hiểu, Chất lượng thông tin, Thế giới số
  const isNetworkSearch =
    titleText.includes('mạng máy tính') ||
    titleText.includes('internet') ||
    titleText.includes('world wide web') ||
    titleText.includes('thiết bị') ||
    titleText.includes('thiết bị vào') ||
    titleText.includes('phần cứng') ||
    titleText.includes('phần mềm máy tính') ||
    titleText.includes('cổng kết nối') ||
    titleText.includes('thông tin trong môi trường số') ||
    titleText.includes('máy tính và cộng đồng') ||
    titleText.includes('thế giới kĩ thuật số') ||
    titleText.includes('lược sử công cụ tính toán') ||
    titleText.includes('chất lượng thông tin') ||
    titleText.includes('thông tin trong giải quyết vấn đề') ||
    titleText.includes('xử lí thông tin') ||
    titleText.includes('thông tin trong máy tính') ||
    titleText.includes('tìm kiếm') ||
    titleText.includes('tra cứu') ||
    titleText.includes('từ điển') ||
    titleText.includes('đọc hiểu') ||
    titleText.includes('khám phá') ||
    titleText.includes('bản đồ') ||
    titleText.includes('atlas') ||
    titleText.includes('tư liệu') ||
    titleText.includes('khảo sát') ||
    titleText.includes('search') ||
    titleText.includes('vocabulary');

  if (isNetworkSearch) {
    const res = findByCodePrefix('1.1.') || findByCodePrefix('1.2.') || findByDomain('1');
    if (res) return { ...res, level };
  }

  // 10. Fallback thông minh: Phân bổ luân phiên đa dạng đầy đủ các chỉ báo a, b, c, d
  const domainSequenceTC1 = ['1.1.TC1b', '2.1.TC1b', '3.1.TC1b', '1.2.TC1b', '2.2.TC1c', '1.3.TC1b', '4.1.TC1b', '3.2.TC1a', '5.2.TC1b', '2.5.TC1b', '4.2.TC1b', '4.3.TC1a', '5.1.TC1a', '5.4.TC1a'];
  const domainSequenceTC2 = ['1.1.TC2b', '2.1.TC2b', '3.1.TC2b', '1.2.TC2b', '2.2.TC2c', '1.3.TC2b', '4.1.TC2b', '3.2.TC2a', '5.2.TC2b', '2.5.TC2b', '4.2.TC2b', '4.3.TC2b', '5.1.TC2b', '5.3.TC2b', '5.4.TC2a'];
  const domainSequenceCB1 = ['1.1.CB1b', '1.1.CB1c', '1.2.CB1a', '1.3.CB1b', '2.1.CB1b', '2.2.CB1a', '2.4.CB1a', '3.1.CB1b', '3.2.CB1a', '4.1.CB1b', '4.1.CB1c', '4.2.CB1a', '4.3.CB1a', '5.1.CB1a', '5.2.CB1b'];
  const domainSequenceCB2 = ['1.1.CB2b', '1.1.CB2c', '1.1.CB2d', '1.2.CB2a', '1.3.CB2b', '2.1.CB2b', '2.2.CB2b', '2.4.CB2a', '3.1.CB2a', '3.2.CB2a', '4.1.CB2a', '4.1.CB2c', '4.2.CB2a', '4.3.CB2a', '5.1.CB2a', '5.2.CB2b'];
  const domainSequenceNC1 = ['1.1.NC1b', '1.1.NC1c', '1.1.NC1d', '1.2.NC1b', '1.3.NC1b', '2.1.NC1b', '2.2.NC1b', '2.2.NC1c', '2.4.NC1a', '2.5.NC1b', '2.6.NC1b', '3.1.NC1b', '3.2.NC1a', '4.1.NC1a', '4.2.NC1a', '5.1.NC1a', '5.2.NC1b', '5.3.NC1a'];

  const chosenSeq = level === 'TC1' ? domainSequenceTC1 : level === 'TC2' ? domainSequenceTC2 : level === 'CB1' ? domainSequenceCB1 : level === 'CB2' ? domainSequenceCB2 : domainSequenceNC1;
  const targetCode = chosenSeq[lessonIdx % chosenSeq.length];
  const matchedItem = items.find((it) => it.code.toLowerCase() === targetCode.toLowerCase()) || items[lessonIdx % items.length];

  return {
    code: matchedItem.code,
    level,
    requirement: matchedItem.requirement
  };
}

/**
 * Tra cứu nội dung yêu cầu cần đạt (YCCĐ) của một mã NLS (CV 3456) theo mã code (tiếng Việt)
 */
export function lookupNlsRequirement(code: string): string | null {
  const allGuides = [
    DIGITAL_COMPETENCY_GUIDE_CB1,
    DIGITAL_COMPETENCY_GUIDE_CB2,
    DIGITAL_COMPETENCY_GUIDE_TC1,
    DIGITAL_COMPETENCY_GUIDE_TC2,
    DIGITAL_COMPETENCY_GUIDE_NC1
  ].join('\n');

  const cleanCode = code.replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();
  const lines = allGuides.split('\n').filter((l) => l.startsWith('- **Mã:'));

  for (const line of lines) {
    const match = line.match(/- \*\*Mã:\s*([^*]+)\*\*\s*-\s*(?:YCCD|YCCĐ|Yêu cầu cần đạt):\s*(.+)$/i);
    if (match) {
      const lineCode = match[1].replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();
      if (lineCode === cleanCode) {
        return match[2].trim();
      }
    }
  }

  // Prefix fallback
  for (const line of lines) {
    const match = line.match(/- \*\*Mã:\s*([^*]+)\*\*\s*-\s*(?:YCCD|YCCĐ|Yêu cầu cần đạt):\s*(.+)$/i);
    if (match) {
      const lineCode = match[1].replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();
      if (lineCode.startsWith(cleanCode) || cleanCode.startsWith(lineCode)) {
        return match[2].trim();
      }
    }
  }

  return null;
}


