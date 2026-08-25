// BỘ TIÊU CHÍ KHUNG NĂNG LỰC AI QĐ SỐ 2422/QĐ-BGDĐT
// Vietnamese and English versions of Artificial Intelligence (AI) Competency Framework
// Ban hành kèm theo Quyết định số 2422/QĐ-BGDĐT ngày 18 tháng 08 năm 2026 của Bộ Giáo dục và Đào tạo
// Khung gồm 4 mạch kiến thức:
// A. Tư duy lấy con người làm trung tâm (NLa)
// B. Đạo đức AI (NLb)
// C. Các kĩ thuật và ứng dụng AI (NLc)
// D. Thiết kế hệ thống AI (NLd)

export interface AiCompetencyItem {
  code: string;
  topic: string;
  subtopic: string;
  requirement: string;
}

export const AI_GUIDES: Record<string, string> = {
  '1': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 1**
• MÃ 1.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Con người có cảm xúc, AI thì không. YCCD: Nêu được ví dụ về một số cảm xúc quen thuộc của con người qua các tình huống gần gũi trong cuộc sống và bước đầu nhận ra rằng con người có cảm xúc còn AI thì không.
• MÃ 1.A1.2 : CHỦ ĐỀ A1. Tính chủ động của con người - Con người có cảm xúc, AI thì không. YCCD: Nêu được rằng AI có thể mô phỏng hoặc nhận diện cảm xúc của con người, chứ không trải nghiệm cảm xúc như con người.
• MÃ 1.A1.3 : CHỦ ĐỀ A1. Tính chủ động của con người - AI thể hiện cảm xúc do con người lập trình. YCCD: Nêu được rằng việc AI thể hiện cảm xúc là do con người lập trình hoặc thiết kế trước.
• MÃ 1.A2.2 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - Nhận diện AI trong cuộc sống. YCCD: Nhận biết và kể tên được một số sản phẩm hoặc thiết bị có sử dụng AI (loa thông minh, robot hút bụi, camera nhận diện khuôn mặt...).
• MÃ 1.C1.2 : CHỦ ĐỀ C1. Đặc điểm chính của AI - Nhận biết AI và ứng dụng AI. YCCD: Nhận diện được một số công cụ AI quen thuộc trên điện thoại hoặc máy tính bảng.
• MÃ 1.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Máy thông minh học từ ví dụ. YCCD: Nêu được ví dụ về một tình huống mà AI “học” từ hình ảnh hoặc thông tin do con người cung cấp.`,

  '2': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 2**
• MÃ 2.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Khi nào nên và không nên dùng AI. YCCD: Trình bày được một số tình huống trong cuộc sống mà AI có thể hỗ trợ con người hiệu quả (dịch ngôn ngữ, tìm kiếm nhanh, sửa lỗi chính tả).
• MÃ 2.A1.3 : CHỦ ĐỀ A1. Tính chủ động của con người - AI làm việc, con người kiểm soát. YCCD: Nêu được ví dụ cụ thể về tình huống cần con người giám sát AI.
• MÃ 2.A2.1 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - AI trong gia đình. YCCD: Nêu được một số thiết bị hoặc ứng dụng trong gia đình có sử dụng AI.
• MÃ 2.B1.1 : CHỦ ĐỀ B1. Các khía cạnh đạo đức của AI - Sự đối xử không công bằng. YCCD: Nhận biết được rằng AI đôi khi có thể thiên kiến, đối xử không công bằng nếu dữ liệu sai lệch.
• MÃ 2.C1.1 : CHỦ ĐỀ C1. Đặc điểm chính của AI - Cách AI học và học liệu của AI. YCCD: Giải thích được “dữ liệu” là những ví dụ (hình ảnh, âm thanh) mà con người dùng để dạy cho AI.
• MÃ 2.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Máy thông minh giúp giải quyết vấn đề quanh em. YCCD: Nêu được một số vấn đề đơn giản gần gũi trong đời sống có thể áp dụng AI để giải quyết.`,

  '3': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 3**
• MÃ 3.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Cách sử dụng AI trong học tập. YCCD: Nhận biết được một số tình huống sử dụng AI hỗ trợ học sinh trong quá trình học tập.
• MÃ 3.A1.3 : CHỦ ĐỀ A1. Tính chủ động của con người - Không phụ thuộc hoàn toàn vào AI. YCCD: Phân biệt được giữa việc sử dụng AI như công cụ hỗ trợ và việc để AI làm thay toàn bộ.
• MÃ 3.A2.1 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - AI trong trường học. YCCD: Nhận biết được một số ứng dụng hoặc thiết bị có sử dụng AI trong trường học.
• MÃ 3.A3.1 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Kiểm tra và phản biện kết quả của AI. YCCD: Nêu được ví dụ về việc AI có thể sai và biết cách kiểm tra lại thông tin.
• MÃ 3.C5.1 : CHỦ ĐỀ C5. Kĩ thuật và thuật toán AI - Kĩ thuật AI dựa trên luật. YCCD: Mô tả được cấu trúc nếu … thì … trong việc giải quyết tình huống hoặc phân loại.
• MÃ 3.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Quá trình huấn luyện máy thông minh. YCCD: Trình bày được quá trình đơn giản để huấn luyện AI gồm thu thập dữ liệu và cho máy học.`,

  '4': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 4**
• MÃ 4.A1.2 : CHỦ ĐỀ A1. Tính chủ động của con người - AI hỗ trợ, con người suy nghĩ. YCCD: Nhận biết được rằng AI được tạo ra để hỗ trợ con người học tập nhưng không thể thay thế tư duy và cảm xúc con người.
• MÃ 4.A3.1 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Con người quyết định khi dùng AI. YCCD: Trình bày được rằng việc quyết định có sử dụng AI hay không phụ thuộc vào mục đích và sự an toàn.
• MÃ 4.B2.1 : CHỦ ĐỀ B2. Sử dụng AI an toàn và có trách nhiệm - Bảo vệ thông tin cá nhân. YCCD: Nêu được một số loại thông tin cá nhân cần giữ bí mật và không nên chia sẻ cho AI.
• MÃ 4.C2.1 : CHỦ ĐỀ C2. Ứng dụng AI trong học tập và cuộc sống. YCCD: Nêu được các ứng dụng của AI trong học tập và đời sống, đặc biệt trong bối cảnh Việt Nam.
• MÃ 4.C5.MR1 : CHỦ ĐỀ C5. Kĩ thuật và thuật toán AI - Công cụ học máy trực quan. YCCD: Thực hiện được các bước thu thập mẫu, huấn luyện và kiểm thử mô hình phân loại trên Teachable Machine/Scratch.
• MÃ 4.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Từ vấn đề đến ý tưởng AI. YCCD: Nêu được ý tưởng giải quyết vấn đề rác thải hoặc dịch ngôn ngữ bằng AI.`,

  '5': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 5**
• MÃ 5.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Con người chịu trách nhiệm. YCCD: Trình bày được rằng con người chịu trách nhiệm cuối cùng về mọi quyết định hoặc kết quả do AI tạo ra.
• MÃ 5.A2.1 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - AI không thay thế con người. YCCD: Giải thích được mục đích chính của AI là hỗ trợ con người chứ không thay thế vai trò, tư duy và trách nhiệm xã hội.
• MÃ 5.B2.1 : CHỦ ĐỀ B2. Sử dụng AI an toàn và có trách nhiệm - Giúp AI công bằng. YCCD: Nêu được cách giúp AI hoạt động công bằng hơn bằng cách sử dụng dữ liệu đa dạng và kiểm tra kết quả.
• MÃ 5.C5.2 : CHỦ ĐỀ C5. Kĩ thuật và thuật toán AI - Học máy trực quan. YCCD: Huấn luyện được mô hình phân loại hình ảnh đơn giản (như phân loại lá cây khỏe - sâu bệnh).
• MÃ 5.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Quy trình huấn luyện AI. YCCD: Mô tả được các bước cơ bản: xác định vấn đề, thu thập dữ liệu, dạy máy học, kiểm tra và đánh giá.`,

  '6': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 6**
• MÃ 6.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Con người tạo và điều khiển AI. YCCD: Giải thích được AI là sản phẩm do con người tạo ra, lập trình và điều khiển; con người luôn giữ vai trò chủ động.
• MÃ 6.A1.3 : CHỦ ĐỀ A1. Tính chủ động của con người - AI hoạt động theo lập trình. YCCD: Thực hiện được việc kiểm tra lại kết quả do AI đưa ra (đối chiếu SGK, nguồn tin cậy) trước khi sử dụng.
• MÃ 6.A3.3 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Quyền riêng tư và bảo vệ dữ liệu cá nhân. YCCD: Giải thích được dữ liệu cá nhân là tài sản của mỗi người; nhận biết nguy cơ mất an toàn số.
• MÃ 6.B1.1 : CHỦ ĐỀ B1. Các khía cạnh đạo đức của AI - Mặt tốt và mặt xấu. YCCD: Chỉ ra được mặt tích cực và hạn chế của một số tính năng AI trong đời sống.
• MÃ 6.C1.1 : CHỦ ĐỀ C1. Đặc điểm chính của AI - Kiến trúc và cách hoạt động cơ bản. YCCD: Giải thích được hai thành phần chính để huấn luyện AI là Dữ liệu (Data) và Thuật toán (Algorithm).
• MÃ 6.C2.2 : CHỦ ĐỀ C2. Ứng dụng AI trong học tập và cuộc sống. YCCD: Kể được tên và mô tả chức năng của trợ lí ảo, ứng dụng bản đồ thông minh và công cụ dịch thuật tự động.
• MÃ 6.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Lựa chọn sử dụng AI phù hợp. YCCD: Nêu được các tình huống nên và không nên sử dụng AI trong học tập.`,

  '7': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 7**
• MÃ 7.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Quyền ra quyết định. YCCD: Giải thích được lí do con người cần giữ quyền ra quyết định khi sử dụng AI để bảo đảm an toàn và công bằng.
• MÃ 7.A1.MR1 : CHỦ ĐỀ A1. Tính chủ động của con người - Xác thực kết quả. YCCD: Thực hiện kiểm chứng thông tin do AI cung cấp bằng nguồn đáng tin cậy trước khi sử dụng.
• MÃ 7.A3.1 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Quyền tự chủ của con người và AI. YCCD: Phân biệt được tình huống AI tự động hóa thao tác và tình huống con người cần trực tiếp quyết định.
• MÃ 7.B3.1 : CHỦ ĐỀ B3. Nguyên tắc đạo đức và trách nhiệm xã hội. YCCD: Thể hiện cam kết sử dụng AI có trách nhiệm và khai báo trung thực khi dùng AI trong sản phẩm học tập.
• MÃ 7.C4.1 : CHỦ ĐỀ C4. Dữ liệu trong AI - Đạo đức dữ liệu huấn luyện. YCCD: Trình bày được các vấn đề đạo đức nảy sinh khi dữ liệu huấn luyện bị thiên vị hoặc xâm phạm quyền riêng tư.
• MÃ 7.C5.1 : CHỦ ĐỀ C5. Kĩ thuật và thuật toán AI - Quá trình huấn luyện AI. YCCD: Mô tả được các bước thu thập, gán nhãn dữ liệu, huấn luyện mô hình và đánh giá độ chính xác.
• MÃ 7.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Ý tưởng dự án AI thực tiễn. YCCD: Đề xuất được ý tưởng ứng dụng AI giải quyết vấn đề trong trường học hoặc cộng đồng.`,

  '8': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 8**
• MÃ 8.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - AI không thay thế con người. YCCD: Nêu được một số lĩnh vực mà AI không nên thay thế con người (giáo dục, y tế, nghệ thuật cảm xúc).
• MÃ 8.A1.2 : CHỦ ĐỀ A1. Tính chủ động của con người - Rủi ro khi lạm dụng AI. YCCD: Nêu được những rủi ro của việc lạm dụng AI tạo sinh, liên hệ với nguy cơ suy giảm tư duy phản biện và kĩ năng sáng tạo.
• MÃ 8.A2.1 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - Nguy cơ bị theo dõi, thao túng. YCCD: Giải thích được việc các dịch vụ AI có thể thu thập và phân tích dữ liệu cá nhân để thao túng hành vi người dùng.
• MÃ 8.A3.3 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Trách nhiệm giải trình. YCCD: Nêu được những việc thể hiện trách nhiệm giải trình khi sử dụng AI trong học tập và tạo sản phẩm.
• MÃ 8.B1.1 : CHỦ ĐỀ B1. Các khía cạnh đạo đức của AI - Rủi ro với AI. YCCD: Nhận diện và phân loại được các rủi ro: rò rỉ dữ liệu, thuật toán thiên vị và nội dung giả mạo Deepfake.
• MÃ 8.B2.1 : CHỦ ĐỀ B2. Sử dụng AI an toàn và có trách nhiệm - Phòng tránh rủi ro dữ liệu. YCCD: Trình bày được các giải pháp bảo vệ dữ liệu cá nhân, tôn trọng bản quyền khi thực hiện dự án học tập.
• MÃ 8.C1.1 : CHỦ ĐỀ C1. Đặc điểm chính của AI - Cách AI đọc, nghe, nhìn. YCCD: Mô tả được cách AI xử lý văn bản (NLP), nhận dạng tiếng nói (Speech Recognition) và thị giác máy tính (Computer Vision).
• MÃ 8.C5.1 : CHỦ ĐỀ C5. Kĩ thuật và thuật toán AI - Nhận diện cảm xúc. YCCD: Nêu được cách AI nhận diện cảm xúc qua nét mặt, cử chỉ, từ khóa và ngữ điệu giọng nói.
• MÃ 8.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Kế hoạch dự án AI. YCCD: Xác định được vấn đề thực tế và lập kế hoạch sơ bộ phát triển giải pháp AI (chatbot, mô hình nhận dạng).
• MÃ 8.D2.1 : CHỦ ĐỀ D2. Cấu trúc và tương tác, cải tiến hệ thống - Dự án AI đơn giản. YCCD: Xây dựng được kịch bản hội thoại tương tác cho trợ lí ảo hoặc chatbot học tập.`,

  '9': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 9**
• MÃ 9.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Thách thức xã hội trong kỉ nguyên AI. YCCD: Trình bày được ý kiến cá nhân về các thách thức an toàn số và quyền riêng tư trong kỉ nguyên AI.
• MÃ 9.A2.2 : CHỦ ĐỀ A2. AI vì sự tiến bộ của con người - Thiên vị và thành kiến trong AI. YCCD: Giải thích được nguyên nhân và hậu quả xã hội của hiện tượng thiên vị thuật toán.
• MÃ 9.A3.1 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Định hướng học tập. YCCD: Trình bày được các năng lực cần rèn luyện: tự học suốt đời, tư duy phản biện và hợp tác giữa người với AI.
• MÃ 9.B2.3 : CHỦ ĐỀ B2. Sử dụng AI an toàn và có trách nhiệm. YCCD: Phân tích dấu hiệu nội dung giả mạo do AI tạo ra và đề xuất phương án phòng chống lừa đảo mạo danh.
• MÃ 9.C2.1 : CHỦ ĐỀ C2. Ứng dụng AI trong học tập và cuộc sống. YCCD: Đề xuất được ý tưởng sáng tạo và vận dụng công cụ AI mã nguồn mở giải quyết bài toán thực tế.
• MÃ 9.C4.1 : CHỦ ĐỀ C4. Dữ liệu trong AI - Cải thiện chất lượng dữ liệu. YCCD: Trình bày được cách làm sạch dữ liệu, loại bỏ trùng lặp và gán nhãn chính xác để nâng cao độ tin cậy của AI.
• MÃ 9.D1.1 : CHỦ ĐỀ D1. Nhận diện và hình thành giải pháp - Con người dẫn dắt AI. YCCD: Khẳng định vai trò dẫn dắt, đồng sáng tạo của con người trong thiết kế và kiểm soát hệ thống AI.`,

  '10': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 10**
• MÃ 10.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người trong hệ thống AI. YCCD: Xác định vai trò của con người trong vận hành, tùy chỉnh và kiểm soát hệ thống AI.
• MÃ 10.A3.1 : CHỦ ĐỀ A3. Công dân trong kỉ nguyên AI - Luật pháp với AI. YCCD: Nêu được các quy định pháp luật cốt lõi (Luật An ninh mạng, Luật Dữ liệu, Nghị định Bảo vệ dữ liệu cá nhân).
• MÃ 10.B3.1 : CHỦ ĐỀ B3. Đạo đức trong vận hành và sáng tạo AI. YCCD: Phân tích các rủi ro đạo đức về tính minh bạch và xâm phạm quyền riêng tư.
• MÃ 10.C3.1 : CHỦ ĐỀ C3. Công nghệ AI - Kỹ thuật Prompt Engineering. YCCD: Thiết kế và tinh chỉnh câu lệnh Prompt tối ưu để chỉ dẫn AI giải quyết nhiệm vụ phức tạp.
• MÃ 10.C3.3 : CHỦ ĐỀ C3. Công nghệ AI - Phân biệt AI tạo sinh và AI phân loại. YCCD: Phân tích được sự khác biệt giữa Generative AI và Predictive AI qua các trường hợp cụ thể.
• MÃ 10.C4.1 : CHỦ ĐỀ C4. Dữ liệu trong AI - Đa phương thức và chất lượng dữ liệu. YCCD: Phân tích ảnh hưởng của các dạng dữ liệu đa phương thức (text, image, audio) đến chất lượng mô hình AI.
• MÃ 10.D2.1 : CHỦ ĐỀ D2. Cấu trúc hệ thống AI. YCCD: Mô tả các thành phần: Data Pipeline, Model, Training Algorithm, Inference và Feedback Loop.`,

  '11': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 11**
• MÃ 11.A1.1 : CHỦ ĐỀ A1. Tính chủ động của con người - Quy trình sử dụng AI an toàn. YCCD: Xây dựng được quy trình chuẩn ứng dụng AI an toàn và hiệu quả trong học tập.
• MÃ 11.A2.2 : CHỦ ĐỀ A2. Bền vững và công bằng trong AI. YCCD: Phân tích tính bền vững về năng lượng và tính tiếp cận bình đẳng của các giải pháp AI.
• MÃ 11.B3.MR1 : CHỦ ĐỀ B3. Đạo đức trong thiết kế AI. YCCD: Sơ đồ hóa và thiết lập các điểm kiểm soát đạo đức (Ethical Checkpoints) trong toàn bộ vòng đời phát triển AI.
• MÃ 11.C3.1 : CHỦ ĐỀ C3. Kỹ thuật Prompt nâng cao. YCCD: Vận dụng các kỹ thuật Chain-of-Thought, ràng buộc định dạng đầu ra và phân rã nhiệm vụ phức tạp.
• MÃ 11.C3.MR3 : CHỦ ĐỀ C3. Tùy biến AI & Kỹ thuật RAG. YCCD: Hiểu nguyên lý hoạt động của kỹ thuật Truy xuất tăng cường (RAG) và cách thức khắc phục hiện tượng ảo giác (Hallucination).
• MÃ 11.C5.1 : CHỦ ĐỀ C5. Mạng nơ-ron nhân tạo (Neural Networks). YCCD: Trình bày được kiến trúc và nguyên lý cơ bản của mạng nơ-ron sâu trong xử lý dữ liệu lớn.
• MÃ 11.D1.1 : CHỦ ĐỀ D1. Thiết kế hệ thống AI tổng thể. YCCD: Phân tích kiến trúc kết nối giữa luồng dữ liệu, thuật toán và mục tiêu giải quyết bài toán thực tiễn.`,

  '12': `**KHUNG NĂNG LỰC GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) - LỚP 12**
• MÃ 12.A1.1 : CHỦ ĐỀ A1. Quyền kiểm soát của con người trong toàn bộ vòng đời AI. YCCD: Kiểm định và bảo đảm sự giám sát của con người ở mọi giai đoạn quan trọng của hệ thống AI.
• MÃ 12.A2.1 : CHỦ ĐỀ A2. Nguyên tắc đạo đức khi thiết kế AI. YCCD: Vận dụng trọn bộ nguyên tắc: An toàn, Công bằng, Minh bạch, Quyền riêng tư, Trách nhiệm giải trình và Lợi ích xã hội.
• MÃ 12.A3.1 : CHỦ ĐỀ A3. Trách nhiệm công dân trong xã hội AI. YCCD: Sử dụng AI an toàn, trung thực, chống gian lận học thuật và tích cực kiến tạo môi trường số nhân văn.
• MÃ 12.C3.1 : CHỦ ĐỀ C3. Nền tảng và Framework phát triển AI. YCCD: Sử dụng thành thạo các thư viện mã nguồn mở (Teachable Machine, TensorFlow.js, MediaPipe) để phát triển giải pháp AI.
• MÃ 12.C3.MR3 : CHỦ ĐỀ C3. Tối ưu hóa mô hình AI. YCCD: Hiểu và xử lý các vấn đề chuyên sâu như hàm mất mát, tối ưu hóa siêu tham số và hiện tượng quá khớp (Overfitting).
• MÃ 12.D2.MR2 : CHỦ ĐỀ D2. Hệ thống Tác nhân AI (AI Agents). YCCD: Trình bày được cấu trúc và xây dựng mô hình AI Agent tự hành có khả năng lập kế hoạch và phối hợp đa tác vụ.`
};

export interface LessonAiContext {
  lessonName?: string;
  topic?: string;
  yccd?: string;
  subject?: string;
  lessonIndex?: number;
}

export function getAiCodeForSubjectLesson(
  grade: string,
  contextOrIndex: number | LessonAiContext | string
): { code: string; title: string; requirement: string } {
  const g = grade.trim();
  const guideStr = AI_GUIDES[g] || AI_GUIDES['8'];
  const lines = guideStr.split('\n').filter((l) => l.startsWith('• MÃ'));
  
  // Extract all AI items for this grade
  const items: Array<{ code: string; title: string; requirement: string }> = [];
  for (const line of lines) {
    const match = line.match(/• MÃ\s+([^:]+)\s*:\s*([^Y]+?)\s*YCCD:\s*(.+)$/);
    if (match) {
      items.push({
        code: match[1].trim(),
        title: match[2].trim(),
        requirement: match[3].trim()
      });
    }
  }

  if (items.length === 0) {
    return {
      code: `${g}.C1.1`,
      title: 'Ứng dụng Trí tuệ nhân tạo trong học tập',
      requirement: 'Sử dụng công cụ AI hỗ trợ tra cứu và xử lý thông tin an toàn.'
    };
  }

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
    const ctx = contextOrIndex as LessonAiContext;
    titleText = `${ctx.lessonName || ''} ${ctx.topic || ''}`.toLowerCase();
    contextText = `${titleText} ${ctx.yccd || ''} ${ctx.subject || ''}`.toLowerCase();
    if (typeof ctx.lessonIndex === 'number') {
      lessonIdx = ctx.lessonIndex;
    }
  }

  // Helpers to find item by topic letter (A, B, C, D)
  const findByTopic = (topicLetter: 'A' | 'B' | 'C' | 'D'): { code: string; title: string; requirement: string } | null => {
    const found = items.filter((it) => it.code.includes(`.${topicLetter}`));
    if (found.length > 0) {
      return found[lessonIdx % found.length];
    }
    return null;
  };

  // 1. Dự án STEM, Thiết kế hệ thống, Kịch bản Chatbot, Giải pháp AI thực tế (Mạch D)
  if (
    titleText.includes('stem') ||
    titleText.includes('dự án') ||
    titleText.includes('thiết kế') ||
    titleText.includes('kịch bản') ||
    titleText.includes('hệ thống') ||
    titleText.includes('tự động') ||
    titleText.includes('project')
  ) {
    const res = findByTopic('D') || findByTopic('C');
    if (res) return res;
  }

  // 2. Đạo đức AI, An toàn dữ liệu, Bảo vệ quyền riêng tư, Kiểm tra đánh giá, Trung thực học thuật (Mạch B)
  if (
    titleText.includes('đạo đức') ||
    titleText.includes('an toàn') ||
    titleText.includes('bảo mật') ||
    titleText.includes('quyền riêng tư') ||
    titleText.includes('bản quyền') ||
    titleText.includes('kiểm tra') ||
    titleText.includes('đánh giá') ||
    titleText.includes('ôn tập') ||
    titleText.includes('ứng xử')
  ) {
    const res = findByTopic('B') || findByTopic('A');
    if (res) return res;
  }

  // 3. Thực hành, Công cụ AI, Prompt Engineering, Dịch thuật, Nhận diện giọng nói / hình ảnh, Bảng tính, Lập trình (Mạch C)
  if (
    titleText.includes('thực hành') ||
    titleText.includes('công cụ') ||
    titleText.includes('prompt') ||
    titleText.includes('dịch') ||
    titleText.includes('nghe') ||
    titleText.includes('nói') ||
    titleText.includes('phát âm') ||
    titleText.includes('nhận diện') ||
    titleText.includes('học máy') ||
    titleText.includes('lập trình') ||
    titleText.includes('bảng tính') ||
    titleText.includes('excel') ||
    titleText.includes('văn bản') ||
    titleText.includes('trình chiếu') ||
    titleText.includes('canva') ||
    titleText.includes('trợ lý')
  ) {
    const res = findByTopic('C');
    if (res) return res;
  }

  // 4. Khái niệm, Giới thiệu, Vai trò con người, Tư duy phản biện, Nhận thức (Mạch A)
  if (
    titleText.includes('giới thiệu') ||
    titleText.includes('khái niệm') ||
    titleText.includes('vai trò') ||
    titleText.includes('con người') ||
    titleText.includes('máy tính và cộng đồng') ||
    titleText.includes('thông tin trong môi trường số') ||
    titleText.includes('mở đầu')
  ) {
    const res = findByTopic('A');
    if (res) return res;
  }

  // 5. Fallback thông minh: Phân bổ luân phiên các mạch C, A, C, B, D để đa dạng hóa
  const topicRotation: Array<'C' | 'A' | 'C' | 'B' | 'D'> = ['C', 'A', 'C', 'B', 'D'];
  const targetTopic = topicRotation[lessonIdx % topicRotation.length];
  const matched = findByTopic(targetTopic) || items[lessonIdx % items.length];

  return matched;
}

/**
 * Tra cứu nội dung yêu cầu của một mã AI (QĐ 2422) theo mã code (tiếng Việt)
 */
export function lookupAiRequirement(code: string): { title: string; requirement: string } | null {
  const cleanCode = code.replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();

  for (const gradeKey in AI_GUIDES) {
    const guide = AI_GUIDES[gradeKey];
    const lines = guide.split('\n').filter((l) => l.startsWith('• MÃ'));

    for (const line of lines) {
      const match = line.match(/• MÃ\s+([^:]+)\s*:\s*([^Y]+?)\s*YÊU CẦU:\s*(.+)$/);
      if (match) {
        const itemCode = match[1].replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();
        if (itemCode === cleanCode) {
          return {
            title: match[2].trim(),
            requirement: match[3].trim()
          };
        }
      }
    }
  }

  // Prefix fallback (e.g. 6.C3 or 6.C3.1)
  for (const gradeKey in AI_GUIDES) {
    const guide = AI_GUIDES[gradeKey];
    const lines = guide.split('\n').filter((l) => l.startsWith('• MÃ'));

    for (const line of lines) {
      const match = line.match(/• MÃ\s+([^:]+)\s*:\s*([^Y]+?)\s*YÊU CẦU:\s*(.+)$/);
      if (match) {
        const itemCode = match[1].replace(/[^a-zA-Z0-9\.]/g, '').toLowerCase();
        if (itemCode.startsWith(cleanCode) || cleanCode.startsWith(itemCode)) {
          return {
            title: match[2].trim(),
            requirement: match[3].trim()
          };
        }
      }
    }
  }

  return null;
}


