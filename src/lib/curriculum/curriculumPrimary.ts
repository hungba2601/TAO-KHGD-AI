import { CurriculumItem, SchoolType } from '../../types';
import { getNlsCodeForSubjectLesson } from '../constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../constants/aiGuides';
import { getNlsCodeForEnglishLesson } from '../constants/nlsGuidesEn';
import { getAiCodeForEnglishLesson } from '../constants/aiGuidesEn';
import { getEnglishPrimaryCurriculum } from './curriculumPrimaryEnglish';
import { getTinHocPrimaryCurriculum } from './curriculumInformatics';

export { getEnglishPrimaryCurriculum, getTinHocPrimaryCurriculum };

export interface RawPrimaryLesson {
  week: number;
  topic: string;
  name: string;
  periods: number;
  yccd: string;
  equipment: string;
  location: string;
  notes?: string;
}

// =========================================================================
// BỘ ÁNH XẠ YCCĐ CHI TIẾT ĐỘC LẬP TỪNG BÀI THEO CHUẨN CT GDPT 2018 - TIỂU HỌC
// =========================================================================
export function getPrimaryLessonYccd(subject: string, grade: string, lessonName: string, week: number): string {
  const s = subject.toLowerCase().trim();
  const name = lessonName.trim();
  const g = grade.trim();

  // ĐÁNH GIÁ ĐỊNH KỲ
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 1')) {
    return `- Đánh giá mức độ nắm vững kiến thức và kỹ năng của học sinh từ Tuần 1 đến Tuần 8 môn ${subject} Lớp ${g}.\n- Đánh giá khả năng vận dụng kiến thức vào giải bài tập và thực hành thực tế.\n- Rèn luyện tính trung thực, cẩn thận và kỹ năng tự kiểm tra bài làm.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 1') || name.includes('Sơ kết HK1')) {
    return `- Đánh giá toàn diện chuẩn kiến thức, kĩ năng và năng lực đạt được trong toàn bộ Học kỳ 1 môn ${subject} Lớp ${g}.\n- Giúp học sinh tự đánh giá kết quả học tập và giáo viên có giải pháp hỗ trợ học sinh trong Học kỳ 2.\n- Phát triển phẩm chất trung thực, trách nhiệm và tính kỷ luật khi làm bài thi.`;
  }
  if (name.includes('Kiểm tra, đánh giá giữa Học kỳ 2')) {
    return `- Đánh giá mức độ tiếp thu kiến thức trọng tâm từ Tuần 19 đến Tuần 25 môn ${subject} Lớp ${g}.\n- Kịp thời phát hiện khó khăn của học sinh để có biện pháp củng cố, bồi dưỡng phù hợp.\n- Rèn luyện kỹ năng tư duy độc lập và làm bài nghiêm túc.`;
  }
  if (name.includes('Kiểm tra, đánh giá cuối Học kỳ 2') || name.includes('Tổng kết năm học') || name.includes('Xét hoàn thành')) {
    return `- Đánh giá tổng hợp kết quả học tập, mức độ hoàn thành mục tiêu Chương trình GDPT 2018 môn ${subject} Lớp ${g}.\n- Đánh giá năng lực chuyên biệt và sự tiến bộ về phẩm chất của học sinh qua cả năm học.\n- Tạo động lực, sự tự tin chuẩn bị bước vào năm học mới hoặc chuyển cấp học tiếp theo.`;
  }

  // DỰ ÁN STEM & SẢN PHẨM
  if (name.includes('Dự án') || name.includes('STEM')) {
    return `- Vận dụng kiến thức liên môn (Khoa học, Công nghệ, Kỹ thuật, Toán học) để thiết kế, chế tạo sản phẩm trong bài: "${name}".\n- Thực hiện các bước: tìm hiểu kiến thức nền, phác thảo thiết kế, gia công chế tạo, thử nghiệm và cải tiến sản phẩm.\n- Phát triển năng lực sáng tạo, tư duy giải quyết vấn đề và kỹ năng hợp tác nhóm.`;
  }

  // 1. MÔN TOÁN TIỂU HỌC
  if (s.includes('toán') || s.includes('toan')) {
    if (name.includes('0, 1, 2, 3, 4, 5')) return `- Đếm, đọc, viết thành thạo các số từ 0 đến 5.\n- Nhận biết số lượng các nhóm đồ vật trong phạm vi 5 và thứ tự dãy số 0, 1, 2, 3, 4, 5.`;
    if (name.includes('6, 7, 8, 9, 10')) return `- Đếm, đọc, viết thành thạo các số từ 6 đến 10.\n- Nhận biết thứ tự dãy số từ 0 đến 10; so sánh số lượng các tập hợp đồ vật trong phạm vi 10.`;
    if (name.includes('Nhiều hơn, ít hơn')) return `- Nhận biết mối quan hệ số lượng bằng cách ghép đôi tương ứng 1-1.\n- Sử dụng thành thạo và chính xác các thuật ngữ "nhiều hơn", "ít hơn", "bằng nhau".`;
    if (name.includes('So sánh số trong phạm vi 10')) return `- Sử dụng đúng các dấu >, <, = để so sánh hai số trong phạm vi 10.\n- Sắp xếp các số theo thứ tự từ bé đến lớn và từ lớn đến bé.`;
    if (name.includes('Mấy và mấy')) return `- Thực hiện thành thạo thao tác tách và gộp số trong phạm vi 10.\n- Bước đầu hình thành tư duy phân tích số và tiền đề của phép tính cộng, trừ.`;
    if (name.includes('Hình vuông, hình tròn, hình tam giác')) return `- Nhận biết và gọi đúng tên các hình phẳng cơ bản: hình vuông, hình tròn, hình tam giác, hình chữ nhật.\n- Nhận dạng được các hình trên đồ vật thật xung quanh lớp học và gia đình.`;
    if (name.includes('Phép cộng trong phạm vi 10')) return `- Hiểu ý nghĩa của phép cộng là "thêm vào" hoặc "gộp lại".\n- Lập và tính đúng bảng cộng trong phạm vi 10; làm quen phép cộng với số 0 (a + 0 = a).`;
    if (name.includes('Phép trừ trong phạm vi 10')) return `- Hiểu ý nghĩa của phép trừ là "bớt đi" hoặc "tách ra".\n- Lập và tính đúng bảng trừ trong phạm vi 10; làm quen phép trừ với số 0 (a - 0 = a, a - a = 0).`;
    if (name.includes('Khối lập phương, khối hộp chữ nhật')) return `- Nhận biết được khối lập phương và khối hộp chữ nhật qua mô hình và vật thật.\n- Phân biệt hình phẳng và hình khối; thực hành xếp hình khối sáng tạo.`;
    if (name.includes('Các số từ 11 đến 20')) return `- Đọc, viết và nắm cấu tạo số gồm 1 chục và các đơn vị của các số từ 11 đến 20.\n- So sánh và xếp thứ tự các số từ 11 đến 20.`;
    if (name.includes('Các số tròn chục')) return `- Đọc, viết, so sánh các số tròn chục: 10, 20, 30, 40, 50, 60, 70, 80, 90.\n- Thực hiện cộng trừ nhẩm các số tròn chục nhanh và chính xác.`;
    if (name.includes('xăng-ti-mét')) return `- Nhận biết đơn vị đo độ dài xăng-ti-mét (viết tắt là cm).\n- Sử dụng thước thẳng có vạch chia cm để đo và vẽ các đoạn thẳng có độ dài cho trước.`;
    if (name.includes('đồng hồ') || name.includes('lịch')) return `- Biết xem giờ đúng trên mặt đồng hồ kim và đồng hồ điện tử.\n- Kể đúng tên các ngày trong tuần và biết xem tờ lịch ngày, lịch tháng.`;
    if (name.includes('Tia số') || name.includes('số liền trước')) return `- Nhận biết tia số, vị trí các số trên tia số; xác định chính xác số liền trước, số liền sau của một số cho trước.`;
    if (name.includes('Số hạng, Tổng')) return `- Gọi đúng tên các thành phần và kết quả của phép cộng (Số hạng, Tổng), phép trừ (Số bị trừ, Số trừ, Hiệu).\n- Vận dụng giải các bài toán thực tế tìm thành phần chưa biết.`;
    if (name.includes('Đi-xi-mét')) return `- Nhận biết đơn vị đo độ dài đề-xi-mét (dm); nắm vững mối quan hệ 1 dm = 10 cm.\n- Thực hành ước lượng và đo độ dài các đồ vật bằng thước dm.`;
    if (name.includes('Bảng nhân 2') || name.includes('Bảng nhân 5') || name.includes('Bảng nhân')) return `- Nắm vững bản chất phép nhân là tổng các số hạng bằng nhau; học thuộc bảng nhân.\n- Vận dụng bảng nhân giải bài toán thực tế có một hoặc hai bước tính.`;
    if (name.includes('Bảng chia 2') || name.includes('Bảng chia 5') || name.includes('Bảng chia')) return `- Nắm vững bản chất phép chia là chia thành các phần bằng nhau hoặc chia theo nhóm; học thuộc bảng chia.\n- Vận dụng giải toán có lời văn liên quan đến phép chia.`;
    if (name.includes('Ki-lô-gam') || name.includes('Lít')) return `- Nhận biết đơn vị đo khối lượng Ki-lô-gam (kg) và đơn vị đo dung tích Lít (l).\n- Sử dụng cân đĩa/cân đồng hồ và ca đong 1 lít để đo lường trong thực tế.`;
    if (name.includes('Góc vuông, góc không vuông')) return `- Nhận biết góc, đỉnh, cạnh của góc; phân biệt góc vuông và góc không vuông bằng thước ê-ke.\n- Dùng ê-ke để kiểm tra và vẽ góc vuông chuẩn xác.`;
    if (name.includes('Chu vi')) return `- Nắm vững khái niệm chu vi hình tam giác, tứ giác, hình chữ nhật, hình vuông.\n- Tính thành thạo chu vi các hình khi biết độ dài các cạnh cùng đơn vị đo.`;
    if (name.includes('Diện tích')) return `- Hiểu khái niệm diện tích một hình; nắm đơn vị đo diện tích cm2, dm2, m2.\n- Vận dụng công thức tính diện tích hình chữ nhật, hình vuông giải bài toán thực tế.`;
    if (name.includes('Phân số') || name.includes('phân số')) return `- Nắm khái niệm phân số, tử số, mẫu số; hiểu ý nghĩa phân số là thương của phép chia số tự nhiên.\n- Thực hiện rút gọn, quy đồng mẫu số, so sánh và thực hiện 4 phép tính cộng, trừ, nhân, chia phân số.`;
    if (name.includes('Số thập phân') || name.includes('số thập phân')) return `- Nắm khái niệm số thập phân, phần nguyên, phần thập phân, các hàng của số thập phân.\n- Thực hiện thành thạo cộng, trừ, nhân, chia số thập phân và giải toán chuyển động đều.`;
    if (name.includes('Tỉ số phần trăm')) return `- Nắm khái niệm tỉ số phần trăm; thực hiện 3 bài toán cơ bản về tỉ số phần trăm (tìm tỉ số %, tìm giá trị %, tìm số khi biết giá trị %).`;
    if (name.includes('Vận tốc')) return `- Nắm công thức tính vận tốc v = s : t, quãng đường s = v x t, thời gian t = s : v.\n- Giải thành thạo bài toán chuyển động cùng chiều, ngược chiều, chuyển động của vật trên dòng nước.`;
    return `- Nắm vững chuẩn kiến thức và phương pháp giải bài tập của bài học: "${name}".\n- Rèn luyện kỹ năng tính toán chính xác, tư duy logic và khả năng áp dụng toán học vào thực tiễn cuộc sống.`;
  }

  // 2. MÔN TIẾNG VIỆT TIỂU HỌC
  if (s.includes('tiếng việt') || s.includes('tieng viet')) {
    if (name.includes('Âm') || name.includes('Vần')) {
      return `- Nhận biết, phát âm chuẩn xác các âm/vần trong bài: "${name}".\n- Đọc đúng các tiếng, từ ngữ và câu văn ứng dụng có chứa âm/vần mới.\n- Viết đúng chữ cái, vần, tiếng vào vở ô li đúng cỡ chữ và độ cao.`;
    }
    if (name.includes('Đọc:')) {
      const baiDoc = name.split('Đọc:')[1]?.split('&')[0]?.trim() || name;
      return `- Đọc đúng, rõ ràng, rành mạch và diễn cảm bài đọc: "${baiDoc}"; ngắt nghỉ hơi đúng dấu câu.\n- Hiểu nghĩa của các từ ngữ mới và nắm được nội dung, ý nghĩa chính của bài đọc.\n- Bồi dưỡng tình cảm nhân ái, tình yêu gia đình, quê hương, đất nước qua bài học.`;
    }
    if (name.includes('Viết:') || name.includes('Tập làm văn') || name.includes('Chính tả')) {
      return `- Nắm vững quy trình viết, cấu tạo đoạn văn/bài văn theo yêu cầu: "${name}".\n- Viết đúng chính tả, câu văn gãy gọn, dùng từ gợi tả, gợi cảm và thể hiện cảm xúc chân thành.\n- Rèn luyện tính kiên nhẫn, cẩn thận và thói quen giữ gìn vở sạch chữ đẹp.`;
    }
    if (name.includes('Luyện từ và câu') || name.includes('Danh từ') || name.includes('Động từ') || name.includes('Tính từ') || name.includes('Trạng ngữ')) {
      return `- Nhận biết và nắm vững kiến thức ngữ pháp/từ vựng của bài: "${name}".\n- Thực hành đặt câu đúng ngữ pháp, sử dụng dấu câu chính xác và mở rộng vốn từ phong phú.\n- Phát triển năng lực sử dụng tiếng Việt chuẩn mực, linh hoạt trong giao tiếp.`;
    }
    if (name.includes('Kể chuyện:') || name.includes('Luyện nói')) {
      return `- Nhớ và kể lại được từng đoạn hoặc toàn bộ câu chuyện dựa vào tranh minh họa và lời gợi ý.\n- Giọng kể truyền cảm, tự nhiên, kết hợp cử chỉ điệu bộ phù hợp và tự tin trước tập thể.`;
    }
    return `- Hoàn thành xuất sắc mục tiêu đọc - viết - nói - nghe của bài học: "${name}".\n- Bồi dưỡng vốn tiếng Việt phong phú, năng lực ngôn ngữ và thẩm mỹ văn học.`;
  }

  // 3. MÔN TIẾNG ANH (GLOBAL SUCCESS)
  if (s.includes('tiếng anh') || s.includes('english') || s.includes('ngoại ngữ')) {
    if (name.includes('Phần thi Nói') || name.includes('Speaking Showcase') || name.includes('Oral Practice')) {
      return `- Demonstrate oral fluency and pronunciation accuracy through self-introduction, topic presentations, and Q&A interactions.\n- Use appropriate vocabulary, natural intonation, and body language to express ideas confidently in English.\n- Respond promptly to communicative prompts and teacher's questions in a friendly manner.`;
    }
    if (name.includes('Feedback') || name.includes('Diagnostic Correction')) {
      return `- Review assessment results, identify common pronunciation, spelling, and grammatical errors, and receive targeted teacher guidance.\n- Reinforce mastery of foundational linguistic competences and clarify misunderstandings.\n- Develop positive learning attitudes, self-correction habits, and improvement strategies for subsequent units.`;
    }
    if (name.includes('Festival') || name.includes('Fun Fair') || name.includes('Showcase') || name.includes('Exhibition')) {
      return `- Participate actively in English games, role-plays, songs, chants, and interactive cultural exhibitions.\n- Display and present English learning portfolios, group posters, and creative mini-projects.\n- Boost enthusiasm, intrinsic motivation, and communicative competence in a vibrant English-speaking environment.`;
    }
    if (name.includes('Review') || name.includes('Revision')) {
      return `- Consolidate target vocabulary, phonetic rules, and sentence structures covered across previous units.\n- Practice integrated four language skills (Listening, Speaking, Reading, Writing) via varied game-based tasks and exercises.\n- Build self-confidence and self-assessment capacity in foreign language acquisition.`;
    }
    if (name.includes('Phonics') || name.includes('phonics') || name.includes('sounds')) {
      return `- Correctly identify, articulate, and distinguish key English phonemes, consonant clusters, and intonation patterns.\n- Read aloud phonics chants and tongue twisters with natural rhythm and accurate stress.\n- Spell and recognize words containing the target sound patterns in context.`;
    }
    if (name.includes('Project') || name.includes('Dự án')) {
      return `- Collaborate effectively in pairs/groups to plan, design, and present an English project: "${name}".\n- Synthesize learned vocabulary and sentence frames into a creative poster, card, or spoken presentation.\n- Practice speaking fluently in front of the class and develop teamwork and presentation skills.`;
    }
    if (name.includes('Lesson 1 (Period 1)') || name.includes('Look, listen and repeat')) {
      return `- Understand the context and meaning of the target conversation through visual cues and audio recordings.\n- Pronounce target keywords with accurate stress and intonation.\n- Repeat sentence structures accurately in choral and individual repetition.`;
    }
    if (name.includes('Lesson 1 (Period 2)') || name.includes('Point and say') || name.includes('Let\'s talk')) {
      return `- Practice using the core sentence patterns to ask and answer in pair-work and group interactions.\n- Apply newly learned vocabulary accurately in semi-controlled and free speaking activities.\n- Develop active listening skills and communicative confidence.`;
    }
    if (name.includes('Lesson 2 (Period 3)') || name.includes('Lesson 2 (Period 4)')) {
      return `- Expand lexical knowledge and master secondary sentence patterns related to the unit theme.\n- Complete listening comprehension exercises (listen and number / tick / circle) accurately.\n- Engage in interactive classroom games and communicative role-plays with classmates.`;
    }
    if (name.includes('Lesson 3 (Period 5)') || name.includes('Lesson 3 (Period 6)')) {
      return `- Read short texts/dialogues for specific information and complete guided writing activities correctly.\n- Apply phonics knowledge to pronounce words accurately and complete integrated language tasks.\n- Present findings and share project work confidently with the class.`;
    }
    return `- Master target vocabulary, pronunciation, and grammatical structures in: "${name}" (Global Success Grade ${g}).\n- Develop integrated four language skills (Listening, Speaking, Reading, Writing) through engaging communicative activities.`;
  }

  // 4. MÔN TIN HỌC TIỂU HỌC (LỚP 3, 4, 5)
  if (s.includes('tin học') || s.includes('tin hoc')) {
    if (name.includes('Thông tin và quyết định')) return `- Nhận biết được thông tin thu nhận từ các giác quan (thị giác, thính giác, xúc giác, khứu giác, vị giác).\n- Nêu được ví dụ về thông tin giúp con người ra quyết định hành động phù hợp trong tình huống cụ thể.`;
    if (name.includes('Khám phá máy tính') || name.includes('người bạn mới')) return `- Nhận biết và gọi đúng tên 4 bộ phận cơ bản của máy tính để bàn: thân máy, màn hình, bàn phím, chuột.\n- Nêu được chức năng cơ bản của từng bộ phận trong việc thu nhận, xử lý, hiển thị và lưu trữ thông tin.`;
    if (name.includes('Chuột máy tính')) return `- Cầm chuột đúng cách bằng tay phải; thực hiện thành thạo các thao tác: di chuyển chuột, nháy chuột, nháy đúp, nháy nút phải và kéo thả chuột.`;
    if (name.includes('Bàn phím máy tính') || name.includes('hàng phím cơ sở')) return `- Nhận biết khu vực chính của bàn phím, hàng phím cơ sở, hai phím có gai F và J, phím cách Spacebar, phím Enter và phím Backspace.`;
    if (name.includes('10 ngón') || name.includes('TypingMaster')) return `- Đặt đúng vị trí 10 ngón tay trên hàng phím cơ sở; thực hành gõ các phím hàng cơ sở bằng 10 ngón trên phần mềm luyện gõ phím.`;
    if (name.includes('Sử dụng máy tính an toàn')) return `- Nêu được tư thế ngồi đúng khi dùng máy tính để bảo vệ mắt và cột sống; biết quy tắc an toàn về nguồn điện trong phòng máy tính.`;
    if (name.includes('Internet') || name.includes('trình duyệt Web')) return `- Biết Internet là kho thông tin khổng lồ kết nối máy tính toàn cầu; khởi động được trình duyệt web (Chrome/Edge) và nhập địa chỉ trang web.`;
    if (name.includes('An toàn khi sử dụng Internet') || name.includes('bảo mật thông tin')) return `- Nêu được các nguy cơ khi dùng Internet; biết cách bảo vệ thông tin cá nhân (không chia sẻ mật khẩu, họ tên, địa chỉ nhà) cho người lạ.`;
    if (name.includes('Paint') || name.includes('vẽ tranh')) return `- Khởi động phần mềm Paint; nhận biết và sử dụng thành thạo các công cụ: bút vẽ, cọ vẽ, tẩy, vẽ hình chữ nhật/tròn và tô màu bức tranh.`;
    if (name.includes('Thư mục') || name.includes('tệp')) return `- Hiểu khái niệm tệp (file) và thư mục (folder); thực hiện tạo thư mục mới, đổi tên, xóa thư mục và lưu tệp vào thư mục cá nhân.`;
    if (name.includes('Word') || name.includes('soạn thảo') || name.includes('Unikey')) return `- Khởi động Unikey, chọn bảng mã Unicode và kiểu gõ Telex; soạn thảo được văn bản tiếng Việt có dấu, chọn phông chữ, cỡ chữ và căn lề.`;
    if (name.includes('PowerPoint') || name.includes('trình chiếu')) return `- Khởi động PowerPoint; tạo trang chiếu mới, nhập tiêu đề, chèn hình ảnh minh họa và tạo hiệu ứng chuyển động Animation sinh động.`;
    if (name.includes('Scratch') || name.includes('lập trình trực quan')) return `- Làm quen giao diện Scratch 3.0 (sân khấu, nhân vật, khu vực khối lệnh); ghép các khối lệnh di chuyển, xoay hướng, phát âm thanh và lặp lại.`;
    if (name.includes('Trí tuệ nhân tạo') || name.includes('AI')) return `- Hiểu khái niệm đơn giản về Trí tuệ nhân tạo (AI); trải nghiệm các ứng dụng nhận diện giọng nói, nhận diện khuôn mặt và dịch tự động bằng AI.`;
    return `- Nắm vững kiến thức lý thuyết và thực hành thành thạo kỹ năng số của bài học: "${name}".\n- Hình thành tư duy thuật toán, năng lực ứng dụng công nghệ thông tin và thói quen sử dụng thiết bị số an toàn, văn minh.`;
  }

  // 5. MÔN CÔNG NGHỆ TIỂU HỌC (LỚP 3, 4, 5)
  if (s.includes('công nghệ') || s.includes('cong nghe')) {
    if (name.includes('Tự nhiên và công nghệ')) return `- Phân biệt được đối tượng tự nhiên (cây cối, sông núi, đất đá) và sản phẩm công nghệ (bàn ghế, tivi, xe cộ, nhà ở) quanh em.\n- Nêu được vai trò to lớn của sản phẩm công nghệ trong việc nâng cao chất lượng cuộc sống con người.`;
    if (name.includes('đèn học')) return `- Nhận biết các bộ phận chính của đèn học (bóng đèn, chụp đèn, công tắc, thân đèn); thực hiện bật, tắt và điều chỉnh đèn học an toàn, chống cận thị.`;
    if (name.includes('quạt điện')) return `- Nêu cấu tạo và tác dụng của quạt điện; thực hiện bật, tắt, chuyển đổi tốc độ gió và hướng quay của quạt đúng cách, an toàn.`;
    if (name.includes('máy thu thanh') || name.includes('Radio')) return `- Nêu tác dụng của máy thu thanh; biết cách bật, tắt, chọn kênh phát thanh và điều chỉnh âm lượng nghe chương trình thiếu nhi.`;
    if (name.includes('máy thu hình') || name.includes('Tivi')) return `- Nêu tác dụng của máy thu hình; biết chọn kênh truyền hình bổ ích, điều chỉnh âm lượng và giữ khoảng cách ngồi xem tivi an toàn cho mắt.`;
    if (name.includes('An toàn với đồ dùng điện')) return `- Nhận biết nguy cơ điện giật; nêu và thực hiện được các quy tắc an toàn: không chạm tay ướt vào ổ cắm, không tự ý cắm rút phích điện bị hở.`;
    if (name.includes('Làm đồ dùng học tập') || name.includes('thước gấp') || name.includes('ống đựng bút')) return `- Sử dụng kéo, thước, keo dán an toàn; thực hành đo, cắt, dán tạo sản phẩm đồ dùng học tập (thước kẻ gấp, ống đựng bút tái chế) đẹp mắt.`;
    if (name.includes('chong chóng') || name.includes('máy bay giấy') || name.includes('con quay')) return `- Lựa chọn vật liệu giấy màu, que tre; thực hành gấp, cắt và lắp ráp đồ chơi dân gian (chong chóng, máy bay) bay lượn và quay tít trong gió.`;
    if (name.includes('Hoa và cây cảnh') || name.includes('Trồng hoa')) return `- Kể tên các loại hoa, cây cảnh phổ biến; chuẩn bị chậu, giá thể đất tơi xốp và thực hành gieo hạt, trồng cây hoa vào chậu đúng kỹ thuật.`;
    if (name.includes('bộ lắp ghép mô hình kỹ thuật') || name.includes('Lắp ghép')) return `- Nhận biết các chi tiết thanh thẳng, bánh xe, trục quay, ốc vít; dùng cờ-lê và tua-vít lắp ghép mô hình kỹ thuật (đu quay, xe tải, cầu vượt).`;
    if (name.includes('tủ lạnh') || name.includes('máy giặt') || name.includes('nồi cơm điện') || name.includes('bếp điện')) return `- Trình bày nguyên lý và cách sử dụng an toàn các thiết bị gia dụng hiện đại; biết tiết kiệm điện và vệ sinh thiết bị định kỳ.`;
    if (name.includes('Nuôi cá cảnh')) return `- Chuẩn bị bể thủy sinh, nguồn nước sạch, máy sục khí oxy; thực hiện thả cá cảnh và chăm sóc, cho cá ăn đúng liều lượng an toàn sinh học.`;
    return `- Nắm vững nguyên lý hoạt động, quy trình kỹ thuật và thao tác an toàn của bài học: "${name}".\n- Bồi dưỡng tư duy thiết kế kỹ thuật, tình yêu lao động và ý thức bảo vệ môi trường, tiết kiệm năng lượng.`;
  }

  // 6. KHOA HỌC / TNXH TIỂU HỌC
  if (s.includes('tự nhiên') || s.includes('khoa học') || s.includes('tnxh')) {
    if (name.includes('Gia đình') || name.includes('thành viên') || name.includes('thế hệ')) return `- Vẽ sơ đồ và kể tên các thế hệ, thành viên trong gia đình; thể hiện tình yêu thương, lòng hiếu thảo và chia sẻ việc nhà vừa sức.`;
    if (name.includes('Trường học') || name.includes('Lớp học')) return `- Nhận biết các phòng chức năng trong trường học; tham gia giữ gìn vệ sinh lớp học, phòng chống tai nạn thương tích giờ ra chơi.`;
    if (name.includes('Cơ quan vận động') || name.includes('Xương và cơ')) return `- Nhận biết các bộ phận chính của hệ xương và hệ cơ; thực hành ngồi học đúng tư thế phòng tránh cong vẹo cột sống.`;
    if (name.includes('Cơ quan hô hấp') || name.includes('thở')) return `- Chỉ và nói đúng tên các cơ quan hô hấp (mũi, khí quản, phế quản, phổi); thực hiện thói quen hít thở không khí trong lành để bảo vệ phổi.`;
    if (name.includes('Cơ quan tuần hoàn') || name.includes('Tim')) return `- Nhận biết tim và mạch máu; đếm được nhịp tim/mạch đập của bản thân khi nghỉ ngơi và sau khi vận động thể dục.`;
    if (name.includes('Cơ quan thần kinh') || name.includes('Não')) return `- Nhận biết não, tủy sống và dây thần kinh; nêu được vai trò điều khiển của hệ thần kinh và tầm quan trọng của giấc ngủ đủ 8 tiếng/ngày.`;
    if (name.includes('Nước') || name.includes('vòng tuần hoàn của nước')) return `- Trình bày được các tính chất của nước (trong suốt, không mùi, không vị, hòa tan một số chất) và vẽ sơ đồ vòng tuần hoàn của nước trong tự nhiên.`;
    if (name.includes('Không khí')) return `- Nêu được thành phần chính của không khí (khí oxy duy trì sự cháy và sự sống, khí nitơ, khí carbonic); nêu các giải pháp bảo vệ không khí sạch.`;
    if (name.includes('Ánh sáng') || name.includes('Bóng tối')) return `- Nhận biết vật phát sáng, vật được chiếu sáng, vật dẫn sáng và vật cản sáng; giải thích hiện tượng tạo thành bóng tối khi có ánh sáng chiếu vào.`;
    if (name.includes('Dinh dưỡng') || name.includes('Tháp dinh dưỡng')) return `- Phân loại 4 nhóm chất dinh dưỡng (chất bột đường, đạm, chất béo, vitamin & khoáng chất); xây dựng thực đơn bữa ăn cân bằng, lành mạnh.`;
    if (name.includes('Quang hợp') || name.includes('Trao đổi chất ở thực vật')) return `- Trình bày quá trình quang hợp của cây xanh (hấp thụ nước, CO2 dưới ánh sáng mặt trời tạo chất hữu cơ và giải phóng O2).`;
    if (name.includes('Tuổi dậy thì')) return `- Nhận biết những thay đổi về thể chất, tâm sinh lý ở tuổi dậy thì; biết cách chăm sóc, vệ sinh cơ thể và phòng tránh bị xâm hại.`;
    return `- Trình bày được bản chất khoa học, nguyên nhân hiện tượng tự nhiên và quy luật trong bài: "${name}".\n- Thực hành kỹ năng quan sát, làm thí nghiệm đơn giản và ý thức bảo vệ sức khỏe, môi trường sống.`;
  }

  // 7. LỊCH SỬ VÀ ĐỊA LÝ TIỂU HỌC
  if (s.includes('lịch sử') || s.includes('địa lý') || s.includes('địa lí') || s.includes('lich su')) {
    if (name.includes('Địa phương em')) return `- Xác định vị trí địa lí, giới hạn, địa hình, khí hậu, sông ngòi của tỉnh/thành phố em đang sinh sống trên bản đồ.`;
    if (name.includes('Trung du và miền núi Bắc Bộ')) return `- Nêu đặc điểm tự nhiên (địa hình núi cao, khí hậu lạnh, ruộng bậc thang), dân cư và tiềm năng thủy điện, khai khoáng vùng Trung du Bắc Bộ.`;
    if (name.includes('Đồng bằng Bắc Bộ') || name.includes('Sông Hồng')) return `- Trình bày đặc điểm đồng bằng châu thổ sông Hồng đất phù sa màu mỡ; nêu vai trò của đê sông Hồng trong lịch sử trị thủy của ông cha.`;
    if (name.includes('Thăng Long - Hà Nội') || name.includes('Hoàng thành')) return `- Trình bày sự kiện vua Lý Thái Tổ dời đô về Thăng Long năm 1010; kể tên các di tích lịch sử tiêu biểu (Hoàng thành, Văn Miếu, Hồ Gươm).`;
    if (name.includes('Duyên hải miền Trung') || name.includes('Huế') || name.includes('Hội An')) return `- Nêu đặc điểm khí hậu ven biển miền Trung; kể tên và mô tả giá trị văn hóa của Quần thể Di tích Cố đô Huế và Đô thị cổ Hội An.`;
    if (name.includes('Tây Nguyên') || name.includes('Cồng chiêng')) return `- Nêu đặc điểm các cao nguyên xếp tầng đất đỏ bazan thích hợp trồng cà phê, cao su; trình bày giá trị Không gian văn hóa Cồng chiêng Tây Nguyên.`;
    if (name.includes('Nam Bộ') || name.includes('sông Cửu Long') || name.includes('TP. Hồ Chí Minh')) return `- Trình bày đặc điểm Đồng bằng sông Cửu Long (vựa lúa, trái cây, thủy sản lớn nhất nước) và vai trò trung tâm kinh tế của Thành phố Hồ Chí Minh.`;
    if (name.includes('Hoàng Sa') || name.includes('Trường Sa') || name.includes('Biển, đảo')) return `- Xác định vị trí hai quần đảo Hoàng Sa và Trường Sa trên bản đồ; khẳng định chủ quyền biển đảo thiêng liêng và lòng tự hào dân tộc.`;
    if (name.includes('Hùng Vương') || name.includes('Văn Lang') || name.includes('Âu Lạc')) return `- Kể lại thời kỳ dựng nước đầu tiên của các Vua Hùng (Nước Văn Lang) và Thục Phán An Dương Vương (Nước Âu Lạc xây Thành Cổ Loa).`;
    if (name.includes('Cách mạng Tháng Tám') || name.includes('Bác Hồ')) return `- Trình bày ý nghĩa lịch sử ngày 2/9/1945 tại Quảng trường Ba Đình khi Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.`;
    if (name.includes('Điện Biên Phủ')) return `- Nêu diễn biến chính và ý nghĩa to lớn của Chiến thắng Điện Biên Phủ năm 1954 "Lừng lẫy năm châu, chấn động địa cầu".`;
    return `- Trình bày chính xác kiến thức lịch sử, địa lý trọng tâm của bài: "${name}".\n- Bồi đắp lòng yêu quê hương, đất nước, niềm tự hào dân tộc và ý thức giữ gìn di sản văn hóa Việt Nam.`;
  }

  // 8. ĐẠO ĐỨC TIỂU HỌC
  if (s.includes('đạo đức') || s.includes('dao duc')) {
    if (name.includes('Yêu thương chăm sóc gia đình')) return `- Nêu được vì sao cần yêu thương, kính trọng ông bà cha mẹ; thực hiện các hành động cụ thể: vâng lời, chăm sóc khi người thân ốm đau.`;
    if (name.includes('Giữ lời hứa')) return `- Hiểu thế nào là giữ lời hứa và vì sao phải giữ lời hứa; luôn thực hiện đúng điều đã cam kết với thầy cô, bạn bè và cha mẹ.`;
    if (name.includes('Tôn trọng sự khác biệt')) return `- Nhận biết và tôn trọng sự khác biệt về ngoại hình, sở thích, hoàn cảnh của bạn bè; không phân biệt đối xử hay trêu chọc bạn.`;
    if (name.includes('Tự giác làm việc')) return `- Tự giác hoàn thành bài tập về nhà, chuẩn bị đồ dùng học tập và tự giác làm việc cá nhân mà không cần người lớn nhắc nhở.`;
    if (name.includes('Biết nhận lỗi')) return `- Dũng cảm nhận lỗi khi làm sai, biết nói lời xin lỗi chân thành và có hành động cụ thể để sửa chữa khuyết điểm.`;
    if (name.includes('Bảo vệ của công')) return `- Có ý thức giữ gìn bàn ghế, bảng lớp, cây xanh và các tài sản chung trong nhà trường và nơi công cộng.`;
    if (name.includes('Kính yêu Bác Hồ')) return `- Kể được những câu chuyện cảm động về Bác Hồ với thiếu nhi; tự giác học tập và làm theo 5 điều Bác Hồ dạy.`;
    if (name.includes('An toàn giao thông')) return `- Nắm vững luật an toàn giao thông cho người đi bộ, đi xe đạp; luôn đội mũ bảo hiểm đạt chuẩn khi ngồi trên xe máy, xe đạp điện.`;
    return `- Hiểu rõ chuẩn mực hành vi đạo đức và kỹ năng sống trong bài: "${name}".\n- Tự giác rèn luyện 5 phẩm chất chủ yếu: Yêu nước, Nhân ái, Chăm chỉ, Trung thực và Trách nhiệm.`;
  }

  // 9. GIÁO DỤC THỂ CHẤT TIỂU HỌC
  if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục')) {
    if (name.includes('Đội hình đội ngũ')) return `- Biết và thực hiện thành thạo khẩu lệnh tập hợp hàng dọc, dóng hàng thẳng, điểm số, đứng nghiêm, nghỉ, quay phải, quay trái đúng kỹ thuật.`;
    if (name.includes('Bài thể dục phát triển chung')) return `- Thuộc và thực hiện đúng phương hướng, biên độ, nhịp điệu các động tác của Bài thể dục phát triển chung; kết hợp hít thở sâu điều hòa.`;
    if (name.includes('Vận động cơ bản') || name.includes('Đi kiễng gót') || name.includes('Đi trên vạch')) return `- Thực hiện chuẩn xác kỹ năng đi thăng bằng, đi kiễng gót, chạy đổi hướng và bật nhảy tiếp đất an toàn bằng hai nửa trước bàn chân.`;
    if (name.includes('Ném bóng')) return `- Nắm vững tư thế đứng chân trước chân sau, kỹ thuật đưa tay ra sau lên cao và ném bóng trúng đích nằm ngang/thẳng đứng.`;
    if (name.includes('Thể thao tự chọn') || name.includes('Bóng đá') || name.includes('Cầu lông')) return `- Làm quen và thực hiện đúng kỹ thuật tâng bóng, chuyền bóng bằng lòng bàn chân / cầm vợt đánh cầu; tham gia đấu tập sôi nổi, đoàn kết.`;
    if (name.includes('Kiểm tra thể lực') || name.includes('Quyết định số 53')) return `- Thực hiện nghiêm túc các bài đo thể lực theo chuẩn Bộ GD&ĐT (Chạy 30m xuất phát cao, Bật xa tại chỗ, Gập bụng 30 giây, Chạy con thoi).`;
    return `- Thực hiện đúng động tác kỹ thuật, tích cực tự giác tập luyện và nâng cao thể lực qua bài học: "${name}".\n- Hình thành thói quen rèn luyện thân thể hàng ngày và giữ gìn vệ sinh sân bãi an toàn.`;
  }

  // 10. ÂM NHẠC & MĨ THUẬT TIỂU HỌC
  if (s.includes('âm nhạc') || s.includes('am nhac')) {
    if (name.includes('Học hát:')) return `- Hát đúng cao độ, trường độ, lời ca và sắc thái tình cảm của bài hát: "${name.split('Học hát:')[1] || name}".\n- Biết hát kết hợp vỗ tay theo phách, theo nhịp và vận động phụ họa tự nhiên.`;
    if (name.includes('nhạc cụ') || name.includes('thanh phách')) return `- Gõ đúng hình tiết tấu bằng nhạc cụ gõ thanh phách, song loan, trống nhỏ hoặc bộ gõ cơ thể (Body percussion) đệm cho bài hát.`;
    if (name.includes('Đọc nhạc:')) return `- Đọc đúng tên nốt, cao độ và trường độ bài đọc nhạc; kết hợp thể hiện nốt nhạc theo ký hiệu bàn tay chuẩn xác.`;
    return `- Cảm thụ và biểu diễn tự tin các giai điệu âm nhạc trong bài: "${name}".\n- Bồi dưỡng tình yêu âm nhạc, thẩm mỹ nghệ thuật và khả năng sáng tạo âm thanh.`;
  }

  if (s.includes('mĩ thuật') || s.includes('mỹ thuật')) {
    if (name.includes('Vẽ tranh')) return `- Lựa chọn đề tài, sắp xếp bố cục cân đối và sử dụng màu sắc hài hòa để vẽ bức tranh hoàn chỉnh theo bài: "${name}".`;
    if (name.includes('Xé dán') || name.includes('Nặn')) return `- Sử dụng giấy màu, đất nặn khéo léo để tạo hình khối, chi tiết sinh động và thể hiện cảm xúc thẩm mỹ độc đáo.`;
    if (name.includes('Trưng bày') || name.includes('chia sẻ')) return `- Trưng bày sản phẩm mĩ thuật cá nhân; tự tin thuyết trình ý tưởng sáng tạo và chia sẻ cảm nhận về bài vẽ của bạn bè.`;
    return `- Nắm vững kiến thức tạo hình (đường nét, màu sắc, hình khối, bố cục) trong bài: "${name}".\n- Phát triển trí tưởng tượng phong phú, năng lực thẩm mỹ và tư duy sáng tạo mĩ thuật.`;
  }

  // 11. HOẠT ĐỘNG TRẢI NGHIỆM TIỂU HỌC
  if (name.includes('Chào năm học mới') || name.includes('nội quy')) return `- Làm quen với bạn bè, thầy cô; thảo luận và cam kết thực hiện nghiêm túc nội quy lớp học vì một tập thể đoàn kết, vững mạnh.`;
  if (name.includes('Khám phá bản thân')) return `- Nhận ra những nét riêng về ngoại hình, tính cách, sở thích và điểm mạnh của bản thân; rèn luyện thói quen tự lập và ngăn nắp.`;
  if (name.includes('Tri ân thầy cô') || name.includes('20/11')) return `- Thể hiện tình cảm biết ơn sâu sắc tới thầy cô qua những việc làm cụ thể: làm thiệp, chuẩn bị tiết mục văn nghệ và giành hoa điểm mười.`;
  if (name.includes('Tết yêu thương') || name.includes('Tết cổ truyền')) return `- Tìm hiểu phong tục ngày Tết cổ truyền dân tộc; thực hành trang trí nhà cửa, chuẩn bị mâm ngũ quả và chúc Tết ông bà cha mẹ lịch sự.`;
  if (name.includes('nghề truyền thống') || name.includes('làng nghề')) return `- Tìm hiểu công việc và giá trị của các làng nghề thủ công tại địa phương; bồi dưỡng lòng kính trọng người lao động.`;

  return `- Tích cực, chủ động tham gia trải nghiệm thực tế trong bài học: "${name}".\n- Rèn luyện kỹ năng giao tiếp, hợp tác nhóm, tự phục vụ và giải quyết vấn đề sáng tạo.`;
}

// =========================================================================
// 1. TOÁN TIỂU HỌC (LỚP 1 - 5)
// =========================================================================
export function getMathPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const chaptersByGrade: Record<number, { term1: string[]; term2: string[] }> = {
    1: {
      term1: [
        'Bài 1: Các số 0, 1, 2, 3, 4, 5 (Đếm và so sánh)',
        'Bài 2: Các số 6, 7, 8, 9, 10 (Nhận biết và viết số)',
        'Bài 3: Nhiều hơn, ít hơn, bằng nhau',
        'Bài 4: So sánh số trong phạm vi 10 (Dấu >, <, =)',
        'Bài 5: Mấy và mấy (Tách - gộp số)',
        'Bài 6: Luyện tập chung (Số và phép so sánh trong phạm vi 10)',
        'Bài 7: Hình vuông, hình tròn, hình tam giác, hình chữ nhật',
        'Bài 8: Thực hành lắp ghép, xếp hình khối đơn giản',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 1',
        'Bài 9: Phép cộng trong phạm vi 10 (Khái niệm cộng, thêm vào)',
        'Bài 10: Phép cộng trong phạm vi 10 (tiếp theo)',
        'Bài 11: Bảng cộng và làm quen với phép cộng có số 0',
        'Bài 12: Phép trừ trong phạm vi 10 (Khái niệm trừ, bớt đi)',
        'Bài 13: Bảng trừ và làm quen với phép trừ có số 0',
        'Bài 14: Luyện tập phép cộng, phép trừ trong phạm vi 10',
        'Bài 15: Khối lập phương, khối hộp chữ nhật',
        'Bài 16: Ôn tập tổng hợp kiến thức Toán Học kỳ 1 Lớp 1',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Toán 1'
      ],
      term2: [
        'Bài 17: Các số từ 11 đến 20 (Đọc, viết, cấu tạo số)',
        'Bài 18: Phép cộng dạng 14 + 3 và phép trừ dạng 17 - 3',
        'Bài 19: Phép cộng, phép trừ dạng 10 + 4, 14 - 4',
        'Bài 20: Các số tròn chục (10, 20, 30,..., 90)',
        'Bài 21: Phép cộng, phép trừ các số tròn chục',
        'Bài 22: Các số có hai chữ số từ 21 đến 99',
        'Bài 23: So sánh các số có hai chữ số trong phạm vi 100',
        'Bài 24: Bảng các số từ 1 đến 100',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 1',
        'Bài 25: Đo độ dài. Đơn vị đo xăng-ti-mét (cm)',
        'Bài 26: Thực hành đo và ước lượng độ dài bằng thước thẳng',
        'Bài 27: Phép cộng dạng 25 + 14 (không nhớ trong phạm vi 100)',
        'Bài 28: Phép trừ dạng 39 - 15 (không nhớ trong phạm vi 100)',
        'Bài 29: Xem đồng hồ, xem lịch và các ngày trong tuần',
        'Dự án STEM Toán 1: "Đồng hồ thông minh & Mô hình hình học sắc màu"',
        'Bài 30: Ôn tập các số và phép tính trong phạm vi 100',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 1'
      ]
    },
    2: {
      term1: [
        'Bài 1: Ôn tập các số đến 100 và tia số',
        'Bài 2: Tia số và số liền trước, số liền sau',
        'Bài 3: Các thành phần của phép cộng, phép trừ (Số hạng, Tổng, Số bị trừ, Số trừ, Hiệu)',
        'Bài 4: Hơn, kém nhau bao nhiêu (Bài toán về nhiều hơn, ít hơn)',
        'Bài 5: Đi-xi-mét (dm) và mối quan hệ với xăng-ti-mét (cm)',
        'Bài 6: Phép cộng có nhớ trong phạm vi 100 (Dạng 9 cộng với một số)',
        'Bài 7: Phép cộng có nhớ trong phạm vi 100 (Dạng 8, 7, 6 cộng với một số)',
        'Bài 8: Bảng cộng có nhớ và bài toán giải bằng một bước tính',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 2',
        'Bài 9: Phép trừ có nhớ trong phạm vi 100 (Dạng 11, 12, 13 trừ đi một số)',
        'Bài 10: Phép trừ có nhớ dạng 14, 15, 16, 17, 18 trừ đi một số',
        'Bài 11: Bảng trừ có nhớ trong phạm vi 20',
        'Bài 12: Phép cộng có nhớ dạng 38 + 25 trong phạm vi 100',
        'Bài 13: Phép trừ có nhớ dạng 52 - 28 trong phạm vi 100',
        'Bài 14: Luyện tập phép cộng, phép trừ có nhớ trong phạm vi 100',
        'Bài 15: Đường thẳng, đường cong, ba điểm thẳng hàng, đoạn thẳng',
        'Bài 16: Ôn tập tổng hợp kiến thức Toán Học kỳ 1 Lớp 2',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Toán 2'
      ],
      term2: [
        'Bài 17: Làm quen với phép nhân (Tổng các số hạng bằng nhau)',
        'Bài 18: Thừa số, Tích và Bảng nhân 2, Bảng nhân 5',
        'Bài 19: Làm quen với phép chia (Chia thành các phần bằng nhau)',
        'Bài 20: Số bị chia, Số chia, Thương và Bảng chia 2, Bảng chia 5',
        'Bài 21: Khối trụ, khối cầu và nhận diện hình học không gian quanh em',
        'Bài 22: Đơn vị đo khối lượng Ki-lô-gam (kg) và Lít (l)',
        'Bài 23: Các số tròn trăm, tròn chục từ 100 đến 1000',
        'Bài 24: Đọc, viết và cấu tạo các số có ba chữ số',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 2',
        'Bài 25: So sánh các số có ba chữ số trong phạm vi 1000',
        'Bài 26: Đơn vị đo độ dài Mét (m) và Ki-lô-mét (km)',
        'Bài 27: Phép cộng, phép trừ không nhớ trong phạm vi 1000',
        'Bài 28: Xem đồng hồ (giờ, phút) và ngày, tháng trong năm',
        'Bài 29: Thu thập, phân loại, kiểm đếm số liệu thống kê đơn giản',
        'Dự án STEM Toán 2: "Cân đĩa thông minh & Mô hình Thước đo chiều cao"',
        'Bài 30: Ôn tập toàn diện các số và phép tính trong phạm vi 1000',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 2'
      ]
    },
    3: {
      term1: [
        'Bài 1: Ôn tập các số đến 1000 và bảng nhân 2, 5, bảng chia 2, 5',
        'Bài 2: Bảng nhân 3, bảng chia 3 và tìm một trong các phần bằng nhau của một số',
        'Bài 3: Bảng nhân 4, bảng chia 4 và bài toán gấp một số lên nhiều lần',
        'Bài 4: Bảng nhân 6, bảng chia 6 và giảm đi một số lần',
        'Bài 5: Bảng nhân 7, bảng chia 7 và bài toán giải bằng hai bước tính',
        'Bài 6: Bảng nhân 8, bảng chia 8',
        'Bài 7: Bảng nhân 9, bảng chia 9',
        'Bài 8: Mi-li-mét (mm), Gam (g), Mi-li-lít (ml)',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 3',
        'Bài 9: Góc vuông, góc không vuông và ê-ke',
        'Bài 10: Hình tam giác, hình tứ giác. Chu vi hình tam giác, hình tứ giác',
        'Bài 11: Nhân số có hai chữ số với số có một chữ số',
        'Bài 12: Chia số có hai chữ số cho số có một chữ số (Chia hết và chia có dư)',
        'Bài 13: Khái niệm phân số dạng 1/2, 1/3, 1/4, 1/5, 1/6, 1/7, 1/8, 1/9',
        'Bài 14: Hình tròn, tâm, đường kính, bán kính của hình tròn',
        'Bài 15: Thực hành đo độ dài, vẽ đoạn thẳng và góc',
        'Bài 16: Ôn tập tổng hợp kiến thức Toán Học kỳ 1 Lớp 3',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Toán 3'
      ],
      term2: [
        'Bài 17: Các số trong phạm vi 10 000 (Đọc, viết, so sánh)',
        'Bài 18: Phép cộng và phép trừ các số trong phạm vi 10 000',
        'Bài 19: Tháng, năm và xem lịch năm hiện hành',
        'Bài 20: Hình chữ nhật, hình vuông. Chu vi hình chữ nhật, hình vuông',
        'Bài 21: Diện tích một hình. Xăng-ti-mét vuông (cm2)',
        'Bài 22: Diện tích hình chữ nhật, diện tích hình vuông',
        'Bài 23: Phép nhân và phép chia số có bốn chữ số cho số có một chữ số',
        'Bài 24: Tiền Việt Nam (Nhận biết mệnh giá tiền và thực hành tính tiền)',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 3',
        'Bài 25: Các số trong phạm vi 100 000 (Hàng chục nghìn, hàng trăm nghìn)',
        'Bài 26: So sánh các số trong phạm vi 100 000. Làm tròn số',
        'Bài 27: Phép cộng, phép trừ trong phạm vi 100 000',
        'Bài 28: Phép nhân, phép chia trong phạm vi 100 000',
        'Bài 29: Thu thập, phân loại, ghi chép số liệu và bảng số liệu',
        'Dự án STEM Toán 3: "Mô hình Siêu thị Mini & Quản lý Chi tiêu Tiền Việt Nam"',
        'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 3',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 3'
      ]
    },
    4: {
      term1: [
        'Bài 1: Ôn tập số và phép tính trong phạm vi 100 000',
        'Bài 2: Hàng và lớp. Các số có nhiều chữ số (Triệu và lớp triệu)',
        'Bài 3: So sánh các số có nhiều chữ số. Làm tròn số',
        'Bài 4: Dãy số tự nhiên và hệ thập phân',
        'Bài 5: Đo góc, đơn vị đo góc Độ (°). Góc nhọn, góc tù, góc bẹt',
        'Bài 6: Hai đường thẳng vuông góc, hai đường thẳng song song',
        'Bài 7: Yến, tạ, tấn. Giây, thế kỉ và đơn vị đo thời gian',
        'Bài 8: Phép cộng và phép trừ các số có nhiều chữ số',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 4',
        'Bài 9: Tính chất giao hoán và kết hợp của phép cộng. Tìm hai số khi biết tổng và hiệu',
        'Bài 10: Nhân với số có một chữ số. Tính chất giao hoán, kết hợp của phép nhân',
        'Bài 11: Nhân với số có hai chữ số (Nhân nhẩm với 11, nhân với 10, 100, 1000)',
        'Bài 12: Chia cho số có một chữ số và Chia cho số có hai chữ số',
        'Bài 13: Đề-xi-mét vuông (dm2), Mét vuông (m2), Mi-li-mét vuông (mm2)',
        'Bài 14: Hình bình hành, hình thoi và diện tích hình bình hành, hình thoi',
        'Bài 15: Số trung bình cộng và bài toán tìm số trung bình cộng',
        'Bài 16: Ôn tập tổng hợp kiến thức Toán Học kỳ 1 Lớp 4',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Toán 4'
      ],
      term2: [
        'Bài 17: Khái niệm phân số và tính chất cơ bản của phân số',
        'Bài 18: Rút gọn phân số và Quy đồng mẫu số các phân số',
        'Bài 19: So sánh hai phân số cùng mẫu số, khác mẫu số',
        'Bài 20: Phép cộng phân số (Cùng mẫu số và khác mẫu số)',
        'Bài 21: Phép trừ phân số và bài toán giải bằng phép tính phân số',
        'Bài 22: Phép nhân phân số và tìm phân số của một số',
        'Bài 23: Phép chia phân số và tìm phân số đảo ngược',
        'Bài 24: Dãy số liệu thống kê và biểu đồ cột',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 4',
        'Bài 25: Tìm hai số khi biết tổng và tỉ số của hai số đó',
        'Bài 26: Tìm hai số khi biết hiệu và tỉ số của hai số đó',
        'Bài 27: Tỉ lệ bản đồ và ứng dụng thực tế của tỉ lệ bản đồ',
        'Bài 28: Ôn tập phân số và các phép tính với phân số',
        'Bài 29: Ôn tập hình học và đo lường (Góc, đường song song, diện tích)',
        'Dự án STEM Toán 4: "Bản đồ Trường học em theo tỉ lệ & Mô hình Kiến trúc Phân số"',
        'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Toán 4',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Toán 4'
      ]
    },
    5: {
      term1: [
        'Bài 1: Ôn tập phân số, phân số thập phân và hỗn số',
        'Bài 2: Khái niệm số thập phân (Hàng của số thập phân, đọc viết)',
        'Bài 3: Số thập phân bằng nhau và so sánh hai số thập phân',
        'Bài 4: Viết các số đo độ dài, khối lượng dưới dạng số thập phân',
        'Bài 5: Viết các số đo diện tích dưới dạng số thập phân. Héc-ta (ha)',
        'Bài 6: Phép cộng số thập phân và tính chất của phép cộng số thập phân',
        'Bài 7: Phép trừ số thập phân và bài toán giải thực tế',
        'Bài 8: Nhân một số thập phân với một số tự nhiên, nhân với 10, 100, 1000',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Toán 5',
        'Bài 9: Nhân một số thập phân với một số thập phân',
        'Bài 10: Chia một số thập phân cho một số tự nhiên, chia cho 10, 100, 1000',
        'Bài 11: Chia một số tự nhiên cho một số tự nhiên mà thương là số thập phân',
        'Bài 12: Chia một số thập phân cho một số thập phân',
        'Bài 13: Khái niệm tỉ số phần trăm và Giải toán về tỉ số phần trăm (Dạng 1, 2, 3)',
        'Bài 14: Hình tam giác, diện tích hình tam giác',
        'Bài 15: Hình thang, diện tích hình thang',
        'Bài 16: Hình tròn, chu vi hình tròn và diện tích hình tròn',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Toán 5'
      ],
      term2: [
        'Bài 17: Hình hộp chữ nhật, hình lập phương. Diện tích xung quanh và toàn phần',
        'Bài 18: Thể tích một hình. Xăng-ti-mét khối (cm3), Đề-xi-mét khối (dm3), Mét khối (m3)',
        'Bài 19: Thể tích hình hộp chữ nhật và thể tích hình lập phương',
        'Bài 20: Bảng đơn vị đo thời gian. Cộng và trừ số đo thời gian',
        'Bài 21: Nhân và chia số đo thời gian với một số',
        'Bài 22: Vận tốc (Đơn vị km/h, m/phút, m/s)',
        'Bài 23: Quãng đường và Thời gian trong chuyển động đều',
        'Bài 24: Bài toán về chuyển động cùng chiều, ngược chiều',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Toán 5',
        'Bài 25: Ôn tập về số tự nhiên, phân số, số thập phân và số đo đại lượng',
        'Bài 26: Ôn tập về các phép tính với số tự nhiên, phân số, số thập phân',
        'Bài 27: Ôn tập về hình học (Chu vi, diện tích, thể tích các hình đã học)',
        'Bài 28: Ôn tập về giải toán (Toán chuyển động đều, tỉ số phần trăm)',
        'Bài 29: Thu thập số liệu, biểu đồ hình quạt tròn và xác suất thống kê cơ bản',
        'Dự án STEM Toán 5: "Mô hình Đô thị Thông minh 3D & Bài toán Vận tốc Xe điện"',
        'Bài 30: Ôn tập toàn diện chuẩn bị chuyển cấp vào Lớp 6 THCS',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Tiểu học'
      ]
    }
  };

  const currentGradeData = chaptersByGrade[g] || chaptersByGrade[1];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 33 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: g <= 2 ? 4 : 5,
      yccd: getPrimaryLessonYccd('Toán', String(g), name, w),
      equipment: isStem ? 'Bộ đồ dùng học Toán Tiểu học, compa, thước kẻ, máy tính, mô hình STEM' : 'Bộ đồ dùng học Toán lớp ' + g + ', bảng phụ, phiếu bài tập',
      location: 'Lớp học / Phòng STEM',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Tích hợp dự án STEM Toán học' : ''
    });
  });

  return list;
}

// =========================================================================
// 2. TIẾNG VIỆT TIỂU HỌC (LỚP 1 - 5)
// =========================================================================
export function getVietnamesePrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const tvDataByGrade: Record<number, { term1: string[]; term2: string[] }> = {
    1: {
      term1: [
        'Bài 1: Âm A, a - Dấu huyền, dấu sắc',
        'Bài 2: Âm B, b - Âm C, c - Dấu hỏi, dấu ngã, dấu nặng',
        'Bài 3: Âm D, d - Âm Đ, đ - Luyện đọc tiếng, từ ứng dụng',
        'Bài 4: Âm E, e - Âm Ê, ê - Luyện viết chữ và số',
        'Bài 5: Âm G, g - Âm H, h - Luyện đọc câu ngắn',
        'Bài 6: Âm I, i - Âm K, k (Quy tắc chính tả K/C)',
        'Bài 7: Âm L, l - Âm M, m - Luyện nói theo tranh',
        'Bài 8: Âm N, n - Âm O, o - Âm Ô, ô - Âm Ơ, ơ',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tiếng Việt 1',
        'Bài 9: Âm P, p - Âm Q, q - Âm R, r - Âm S, s',
        'Bài 10: Âm T, t - Âm U, u - Âm Ư, ư - Âm V, v - Âm X, x - Âm Y, y',
        'Bài 11: Âm ch, kh, nh, th, ph, tr, qu, gi, ng, ngh',
        'Bài 12: Vần: an, at, am, ap, an, at, ang, ac',
        'Bài 13: Vần: en, et, em, ep, eng, ec, in, it',
        'Bài 14: Vần: on, ot, om, op, ong, oc, ôn, ôt, ôm, ôp',
        'Bài 15: Vần: un, ut, um, up, ung, uc, ưn, ưt, ưm, ưp',
        'Bài 16: Vần: ia, ua, ưa, iê, yê, uô, ươ',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tiếng Việt 1'
      ],
      term2: [
        'Chủ điểm 1: Tôi là học sinh - Đọc: Cậu bé thông minh & Viết đoạn văn',
        'Đọc: Đi học & Kể chuyện: Bạn mới của em',
        'Chủ điểm 2: Mái ấm gia đình - Đọc: Bàn tay mẹ & Nghe - viết chính tả',
        'Đọc: Cả nhà đi chơi & Luyện nói: Kể về người thân',
        'Chủ điểm 3: Trường học thân yêu - Đọc: Lớp học vùng cao',
        'Đọc: Giờ ra chơi & Tập viết: Đoạn văn ngắn về trường lớp',
        'Chủ điểm 4: Thiên nhiên kì thú - Đọc: Hoa đào, hoa mai ngày Tết',
        'Đọc: Mưa rơi & Kể chuyện: Giọt nước tí xíu',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tiếng Việt 1',
        'Chủ điểm 5: Thế giới loài vật - Đọc: Chú gà trống thông minh',
        'Đọc: Chim sơn ca và bông cúc trắng & Nghe - viết chính tả',
        'Chủ điểm 6: Quê hương đất nước - Đọc: Cố đô Huế / Vịnh Hạ Long',
        'Đọc: Lăng Bác Hồ & Luyện nói: Giới thiệu quê hương em',
        'Chủ điểm 7: Bạn bè bốn phương - Đọc: Nụ cười tuổi thơ',
        'Dự án Tiếng Việt 1: "Sách tranh Kể chuyện Em yêu Tiếng Việt"',
        'Bài 21: Ôn tập toàn diện Đọc thành tiếng, Đọc hiểu và Viết',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tiếng Việt 1'
      ]
    },
    2: {
      term1: [
        'Chủ điểm 1: Em lớn lên từng ngày - Đọc: Tôi là học sinh lớp 2 & Luyện từ và câu',
        'Đọc: Ngày hôm qua đâu rồi? & Viết đoạn văn tự giới thiệu bản thân',
        'Đọc: Niềm vui của Bi và Bống & Chính tả nghe - viết',
        'Đọc: Làm việc thật là vui & Luyện nói: Kể về việc em đã làm',
        'Chủ điểm 2: Đi học vui sao - Đọc: Cây xấu hổ & Luyện từ và câu: Từ chỉ hoạt động',
        'Đọc: Cầu thủ dự bị & Viết đoạn văn kể về một hoạt động thể thao',
        'Đọc: Cô giáo lớp em & Nghe - viết: Bảng chữ cái',
        'Đọc: Thời khóa biểu & Luyện nói và nghe: Thời gian biểu của em',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tiếng Việt 2',
        'Chủ điểm 3: Mái ấm gia đình - Đọc: Em mang về yêu thương & Từ chỉ tình cảm',
        'Đọc: Mẹ & Viết đoạn văn thể hiện tình cảm với người thân',
        'Đọc: Bà nội, bà ngoại & Kể chuyện: Bữa cơm gia đình',
        'Chủ điểm 4: Cánh cửa mở ra - Đọc: Nhím nâu kết bạn & Từ chỉ đặc điểm',
        'Đọc: Cậu bé thông minh & Viết đoạn văn kể lại một sự việc',
        'Đọc: Tết đến rồi & Luyện viết câu mời, câu chúc',
        'Đọc: Gọi bạn & Luyện từ chỉ tình bạn và câu nêu đặc điểm',
        'Ôn tập tổng hợp kiến thức Đọc hiểu và Viết đoạn văn Học kỳ 1',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tiếng Việt 2'
      ],
      term2: [
        'Chủ điểm 5: Vẻ đẹp quanh em - Đọc: Mùa nước nổi & Luyện câu nêu đặc điểm',
        'Đọc: Họa mi hót & Viết đoạn văn tả một loài chim',
        'Đọc: Cây rơm & Từ ngữ chỉ đồ vật, loài vật',
        'Chủ điểm 6: Hành tinh xanh - Đọc: Hạt đỗ nảy mầm & Viết đoạn văn kể việc trồng cây',
        'Đọc: Lũy tre & Luyện nói: Ý thức bảo vệ môi trường',
        'Đọc: Chuyện quả bầu & Kể chuyện cổ tích Việt Nam',
        'Chủ điểm 7: Giao tiếp và kết nối - Đọc: Thư viện biết đi & Mở rộng vốn từ',
        'Đọc: Chú gấu may mắn & Viết tin nhắn, bưu thiếp',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tiếng Việt 2',
        'Chủ điểm 8: Con người Việt Nam - Đọc: Chiếc rễ cây tròn & Bác Hồ kính yêu',
        'Đọc: Đất nước tươi đẹp & Viết đoạn văn tả cảnh đẹp quê hương',
        'Đọc: Bác sĩ Y-éc-xanh & Luyện câu nêu hoạt động',
        'Chủ điểm 9: Ước mơ tuổi thơ - Đọc: Mai sau lớn lên em làm gì?',
        'Đọc: Người làm đồ chơi & Viết đoạn văn về nghề nghiệp tương lai',
        'Dự án Tiếng Việt 2: "Cuốn sách Kỷ niệm Lớp 2 & Ngày hội Thi Đọc hay"',
        'Ôn tập toàn diện Đọc, Viết, Luyện từ và câu, Kể chuyện lớp 2',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tiếng Việt 2'
      ]
    },
    3: {
      term1: [
        'Chủ điểm 1: Những búp măng non - Đọc: Chiếc nhãn vở đặc biệt & Luyện từ và câu: Từ chỉ sự vật, hoạt động',
        'Đọc: Lắng nghe những đám mây & Viết đoạn văn nêu tình cảm, cảm xúc',
        'Đọc: Cánh rừng trong giọt sương & Mở rộng vốn từ: Thiếu nhi',
        'Đọc: Mùa thu của em & Viết đoạn văn kể lại ngày khai giảng',
        'Chủ điểm 2: Mái trường mến yêu - Đọc: Nhớ lại buổi đầu đi học & So sánh',
        'Đọc: Bàn tay cô giáo & Viết đoạn văn kể về thầy cô giáo em yêu quý',
        'Đọc: Đi học vui sao & Luyện câu cảm, câu khiến',
        'Đọc: Lời giải toán đặc biệt & Kể chuyện: Người học trò nghèo hiếu học',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tiếng Việt 3',
        'Chủ điểm 3: Khối óc và bàn tay - Đọc: Ông Trạng thả diều & Mở rộng vốn từ: Sáng tạo',
        'Đọc: Nhà bác học và bà cụ & Viết đoạn văn giới thiệu đồ vật tự làm',
        'Đọc: Chiếc gương & Biện pháp tu từ so sánh ngang bằng, không ngang bằng',
        'Chủ điểm 4: Mái ấm quê hương - Đọc: Quê hương & Mở rộng vốn từ: Quê hương',
        'Đọc: Chợ hoa ngày Tết & Viết đoạn văn tả cảnh đẹp quê hương',
        'Đọc: Tiếng hò trên sông & Nghe - viết chính tả',
        'Đọc: Cùng vui chơi & Luyện câu kể và từ ngữ chỉ thể thao',
        'Ôn tập tổng hợp kiến thức Tiếng Việt Học kỳ 1 Lớp 3',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tiếng Việt 3'
      ],
      term2: [
        'Chủ điểm 5: Vẻ đẹp cuộc sống - Đọc: Giọt sương & Dấu gạch ngang, dấu ngoặc kép',
        'Đọc: Sắc màu mùa xuân & Viết đoạn văn miêu tả hoa trái mùa xuân',
        'Đọc: Rừng ngập mặn Cần Giờ & Mở rộng vốn từ: Thiên nhiên',
        'Chủ điểm 6: Đất nước ngàn năm - Đọc: Hội đua voi ở Tây Nguyên & Nhân hóa',
        'Đọc: Sự tích Chùa Một Cột & Viết đoạn văn giới thiệu di tích lịch sử',
        'Đọc: Hai Bà Trưng & Kể chuyện lịch sử dựng nước',
        'Chủ điểm 7: Ngôi nhà chung - Đọc: Mặt trời xanh của tôi & Mở rộng vốn từ: Trái Đất',
        'Đọc: Cùng vui chơi & Viết đoạn văn về một môn thể thao em yêu thích',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tiếng Việt 3',
        'Chủ điểm 8: Vòng tay bè bạn - Đọc: Bác sĩ thông thái & Câu kể Ai là gì?',
        'Đọc: Bài ca Trái Đất & Viết bức thư thăm hỏi bạn bè',
        'Đọc: Những ngọn đuốc trên biển & Luyện từ và câu: Nhân hóa',
        'Chủ điểm 9: Bầu trời ước mơ - Đọc: Nhà phát minh tí hon',
        'Đọc: Đất nước ngàn năm & Viết đoạn văn nêu ước mơ của em',
        'Dự án Tiếng Việt 3: "Báo tường Thiếu nhi & Tập san Văn học Tuổi thơ"',
        'Ôn tập toàn diện Đọc hiểu, Luyện từ và câu, Tập làm văn lớp 3',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tiếng Việt 3'
      ]
    },
    4: {
      term1: [
        'Chủ điểm 1: Mỗi người một vẻ - Đọc: Thanh âm của gió & Danh từ (Danh từ chung, danh từ riêng)',
        'Viết: Đoạn văn nêu cảm xúc về một bài thơ & Đọc: Cánh diều tuổi thơ',
        'Đọc: Bầu trời trong quả trứng & Quy tắc viết hoa danh từ riêng',
        'Viết: Đơn xin vào Đội & Đọc: Tiếng cười là liều thuốc bổ',
        'Chủ điểm 2: Chắp cánh ước mơ - Đọc: Người làm đồ chơi & Động từ',
        'Viết: Bài văn kể lại một câu chuyện & Đọc: Lên rẫy',
        'Đọc: Cô bé chăm chỉ & Mở rộng vốn từ: Ước mơ',
        'Viết: Đoạn văn tưởng tượng & Kể chuyện: Ba điều ước',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tiếng Việt 4',
        'Chủ điểm 3: Có chí thì nên - Đọc: Vua tàu thủy Bạch Thái Bưởi & Tính từ',
        'Viết: Bài văn thuật lại một sự việc & Đọc: Vẽ màu',
        'Đọc: Người tìm đường lên các vì sao & Luyện câu: Vị ngữ, Chủ ngữ',
        'Chủ điểm 4: Vì hạnh phúc con người - Đọc: Người ăn xin & Mở rộng vốn từ: Nhân hậu',
        'Viết: Đoạn văn nêu ý kiến tán thành & Đọc: Bốn anh tài',
        'Đọc: Ở Vương quốc Tương lai & Dấu gạch ngang, dấu ngoặc kép',
        'Đọc: Khúc hát ru những em bé lớn trên lưng mẹ & Luyện từ ngữ chỉ tình cảm gia đình',
        'Ôn tập tổng hợp kiến thức Đọc hiểu và Kỹ năng viết Học kỳ 1',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tiếng Việt 4'
      ],
      term2: [
        'Chủ điểm 5: Vẻ đẹp muôn màu - Đọc: Sầu riêng & Câu kể: Trạng ngữ chỉ thời gian, nơi chốn',
        'Viết: Bài văn miêu tả cây cối & Đọc: Chợ Tết',
        'Đọc: Hoa phượng & Trạng ngữ chỉ mục đích, nguyên nhân',
        'Chủ điểm 6: Khám phá thế giới - Đọc: Ga-vrốt ngoài chiến lũy & Quy tắc viết tên người, tên địa lí nước ngoài',
        'Viết: Bài văn miêu tả con vật & Đọc: Đường đi Sa Pa',
        'Đọc: Trăng trên biển & Trạng ngữ chỉ phương tiện, cách thức',
        'Chủ điểm 7: Khúc ca hòa bình - Đọc: Bè xuôi sông La & Mở rộng vốn từ: Hòa bình',
        'Viết: Bài văn miêu tả đồ vật & Đọc: Tiếng đàn Ba-la-lai-ca trên sông Đà',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tiếng Việt 4',
        'Chủ điểm 8: Tình yêu quê hương - Đọc: Dòng sông mặc áo & Mở rộng vốn từ: Quê hương',
        'Viết: Thuyết minh giới thiệu một di tích lịch sử & Đọc: Ăn mầm đá',
        'Đọc: Cây tre Việt Nam & Dấu hai chấm, dấu chấm lửng',
        'Chủ điểm 9: Bầu trời tuổi thơ - Đọc: Nếu chúng mình có phép lạ',
        'Viết: Bài văn tưởng tượng cuộc sống tương lai năm 2050',
        'Dự án Tiếng Việt 4: "Sáng tác Truyện tranh & Tuyển tập Thơ Văn Thiếu nhi"',
        'Ôn tập toàn diện Đọc hiểu, Luyện từ và câu, Viết văn miêu tả Lớp 4',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tiếng Việt 4'
      ]
    },
    5: {
      term1: [
        'Chủ điểm 1: Khởi đầu mới - Đọc: Lớp học trên đường (Rơ-nê Sác) & Đại từ xưng hô',
        'Viết: Bài văn tả cảnh (Cảnh buổi sáng trong công viên) & Đọc: Khúc hát ru những em bé lớn trên lưng mẹ',
        'Đọc: Cổng trường mở ra & Kết từ (Từ nối trong câu)',
        'Viết: Bài văn tả cảnh sông nước quê hương & Đọc: Buổi sáng mùa xuân',
        'Chủ điểm 2: Đất nước ngàn năm - Đọc: Nghìn năm văn hiến & Mở rộng vốn từ: Tổ quốc',
        'Viết: Báo cáo thảo luận nhóm & Đọc: Sắc màu em yêu',
        'Đọc: Đất Cà Mau & Quy tắc viết hoa cơ quan, tổ chức',
        'Viết: Bài văn tả cảnh hoàng hôn trên biển & Kể chuyện: Tiếng đàn Ta-lư',
        'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tiếng Việt 5',
        'Chủ điểm 3: Con người với thiên nhiên - Đọc: Kì diệu rừng xanh & Mở rộng vốn từ: Môi trường',
        'Viết: Bài văn tả người (Tả thầy cô giáo / Người thân) & Đọc: Trước cổng trời',
        'Đọc: Mùa thảo quả & Điệp từ, điệp ngữ',
        'Chủ điểm 4: Vì hạnh phúc con người - Đọc: Chuỗi ngọc lam & Mở rộng vốn từ: Hạnh phúc',
        'Viết: Bài văn tả người (Tả một bạn học sinh đang say sưa học tập)',
        'Đọc: Người gác rừng tí hon & Câu ghép và các cách nối các vế câu ghép',
        'Đọc: Buổi sáng ở Thành phố Hồ Chí Minh & Luyện viết đoạn văn liên kết câu',
        'Ôn tập tổng hợp kiến thức Đọc hiểu và Kỹ năng viết Học kỳ 1 Lớp 5',
        'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tiếng Việt 5'
      ],
      term2: [
        'Chủ điểm 5: Giữ lấy màu xanh - Đọc: Người công dân số Một & Nối các vế câu ghép bằng quan hệ từ',
        'Viết: Bài văn thuyết minh giới thiệu một trò chơi dân gian & Đọc: Hạt gạo làng ta',
        'Đọc: Nhà tài trợ đặc biệt của Cách mạng & Mở rộng vốn từ: Công dân',
        'Chủ điểm 6: Nhớ ơn cội nguồn - Đọc: Phong cảnh đền Hùng & Biện pháp tu từ ẩn dụ',
        'Viết: Bài văn kể lại một kỷ niệm sâu sắc tuổi học trò & Đọc: Cửa Tùng',
        'Đọc: Hộp thư mật & Mở rộng vốn từ: An ninh - Trật tự',
        'Chủ điểm 7: Cánh chim hòa bình - Đọc: Tiếng rao đêm & Mở rộng vốn từ: Hòa bình',
        'Viết: Bài văn nêu ý kiến phản đối một hiện tượng tiêu cực trong đời sống',
        'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tiếng Việt 5',
        'Chủ điểm 8: Vì một thế giới tương lai - Đọc: Nghĩa thầy trò & Mở rộng vốn từ: Truyền thống',
        'Viết: Thư thăm hỏi, bày tỏ tình cảm với thầy cô trước ngày ra trường',
        'Đọc: Út Vịnh & Liên kết câu bằng cách lặp từ ngữ, thay thế từ ngữ',
        'Chủ điểm 9: Ước mơ bay xa - Đọc: Hành trình của bầy ong',
        'Viết: Bài văn tả cảnh trường em trước giờ chia tay mùa hè',
        'Dự án Tiếng Việt 5: "Kỷ yếu Khóa học Tiểu học & Tuyển tập Tác phẩm Văn học 5 năm"',
        'Ôn tập toàn diện chuẩn bị chuyển cấp vào Lớp 6 THCS',
        'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Tiểu học'
      ]
    }
  };

  const currentGradeData = tvDataByGrade[g] || tvDataByGrade[1];
  const all35Weeks = [...currentGradeData.term1.slice(0, 18), ...currentGradeData.term2.slice(0, 17)];

  all35Weeks.forEach((name, idx) => {
    const w = idx + 1;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 33 || name.includes('Dự án');

    list.push({
      week: w,
      topic: name.includes('Chủ điểm') ? name.split(' - ')[0] : name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: g === 1 ? 12 : g === 2 ? 10 : g === 3 ? 8 : 7,
      yccd: getPrimaryLessonYccd('Tiếng Việt', String(g), name, w),
      equipment: 'Tranh ảnh minh họa bài đọc, máy chiếu, bảng chữ mẫu, phiếu học tập',
      location: 'Lớp học / Thư viện trường',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án Sáng tác Văn học' : ''
    });
  });

  return list;
}

// =========================================================================
// 3. TIẾNG ANH TIỂU HỌC (LỚP 1 - 5) - GLOBAL SUCCESS (140 TIẾT / 70 TIẾT)
// Được triển khai chi tiết từng tiết trong module ./curriculumPrimaryEnglish
// =========================================================================

// =========================================================================
// 4. KHOA HỌC TỰ NHIÊN TIỂU HỌC: TNXH (1 - 3) & KHOA HỌC (4 - 5)
// =========================================================================
export function getSciencePrimaryCurriculum(grade: string, subject: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const scienceTopicsByGrade: Record<number, string[]> = {
    1: [
      'Chủ đề 1: Gia đình - Bài 1: Các thành viên trong gia đình em',
      'Bài 2: Ngôi nhà của em và an toàn khi ở nhà',
      'Bài 3: Giữ gìn nhà ở sạch sẽ, gọn gàng',
      'Chủ đề 2: Trường học - Bài 4: Trường tiểu học của em',
      'Bài 5: Lớp học của em và các hoạt động học tập',
      'Bài 6: Giữ an toàn và vệ sinh khi ở trường',
      'Chủ đề 3: Cộng đồng địa phương - Bài 7: Nơi em sinh sống',
      'Bài 8: Hoạt động giao thông và an toàn giao thông đường bộ',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn TNXH 1',
      'Chủ đề 4: Thực vật và động vật - Bài 9: Cây xanh xung quanh em',
      'Bài 10: Chăm sóc và bảo vệ cây trồng',
      'Bài 11: Con vật xung quanh em (Chó, mèo, gà, vịt)',
      'Bài 12: Chăm sóc và yêu thương vật nuôi',
      'Chủ đề 5: Con người và sức khỏe - Bài 13: Các bộ phận cơ thể em',
      'Bài 14: Giữ gìn vệ sinh thân thể và bảo vệ giác quan',
      'Bài 15: Ăn uống đủ chất và rèn luyện thân thể',
      'Bài 16: Ôn tập tổng hợp kiến thức TNXH Học kỳ 1 Lớp 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn TNXH 1',
      'Chủ đề 6: Trái Đất và bầu trời - Bài 17: Bầu trời ban ngày và ban đêm',
      'Bài 18: Thời tiết nắng, mưa, gió, bão',
      'Bài 19: Trang phục phù hợp với thời tiết bốn mùa',
      'Bài 20: Tìm hiểu nguồn nước và không khí xung quanh em',
      'Bài 21: Tiết kiệm nước và giữ sạch nguồn nước',
      'Bài 22: Phân loại rác thải tại gia đình và trường học',
      'Bài 23: Trồng và chăm sóc cây xanh trong chậu',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn TNXH 1',
      'Bài 24: Thực hành quan sát cây và hoa trong vườn trường',
      'Bài 25: Tìm hiểu các loài động vật sống dưới nước',
      'Bài 26: Tìm hiểu các loài chim bay lượn trên bầu trời',
      'Bài 27: Dự án STEM TNXH 1: "Mô hình Vườn cây Mini & Bảng Theo dõi Thời tiết"',
      'Bài 28: Phòng tránh bỏng, điện giật và tai nạn tại nhà',
      'Bài 29: Kỹ năng xử lý khi bị lạc và tìm kiếm sự trợ giúp',
      'Bài 30: Thực hành rửa tay bằng xà phòng và vệ sinh răng miệng đúng cách',
      'Bài 31: Ôn tập toàn diện kiến thức TNXH Lớp 1',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn TNXH 1'
    ],
    2: [
      'Chủ đề 1: Gia đình - Bài 1: Các thế hệ trong gia đình và nghề nghiệp của người lớn',
      'Bài 2: Phòng tránh ngộ độc thực phẩm tại gia đình',
      'Bài 3: Giữ vệ sinh môi trường xung quanh nhà ở',
      'Chủ đề 2: Trường học - Bài 4: Các sự kiện, lễ hội của trường em',
      'Bài 5: Giữ an toàn trong giờ ra chơi và hoạt động tập thể',
      'Bài 6: Vệ sinh trường lớp và phòng chống dịch bệnh học đường',
      'Chủ đề 3: Cộng đồng địa phương - Bài 7: Các hoạt động sản xuất nông nghiệp, công nghiệp',
      'Bài 8: Hoạt động mua bán hàng hóa tại chợ và siêu thị',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn TNXH 2',
      'Bài 9: Các loại phương tiện giao thông và luật an toàn giao thông',
      'Chủ đề 4: Thực vật và động vật - Bài 10: Các bộ phận của cây (Rễ, thân, lá, hoa, quả)',
      'Bài 11: Chức năng của rễ, thân và lá cây',
      'Bài 12: Động vật sống ở đâu? (Trên cạn, dưới nước, trên không)',
      'Bài 13: Bảo vệ môi trường sống của thực vật và động vật',
      'Chủ đề 5: Con người và sức khỏe - Bài 14: Cơ quan vận động (Xương và cơ)',
      'Bài 15: Tư thế ngồi học đúng và phòng tránh cong vẹo cột sống',
      'Bài 16: Ôn tập tổng hợp kiến thức TNXH Học kỳ 1 Lớp 2',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn TNXH 2',
      'Bài 17: Cơ quan hô hấp (Mũi, khí quản, phế quản, phổi)',
      'Bài 18: Hoạt động thở và bảo vệ cơ quan hô hấp sạch khỏe',
      'Bài 19: Cơ quan bài tiết nước tiểu (Thận, ống dẫn tiểu, bàng quang)',
      'Bài 20: Giữ vệ sinh và bảo vệ cơ quan bài tiết nước tiểu',
      'Chủ đề 6: Trái Đất và bầu trời - Bài 21: Các mùa trong năm (Xuân, Hạ, Thu, Đông)',
      'Bài 22: Hiện tượng thiên tai (Bão, lũ lụt, hạn hán) và cách phòng tránh',
      'Bài 23: Vị trí của Mặt Trời và các phương hướng chính (Đông, Tây, Nam, Bắc)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn TNXH 2',
      'Bài 24: Mặt Trăng và các hình dạng của Mặt Trăng',
      'Bài 25: Tìm hiểu ô nhiễm không khí và nguồn nước tại địa phương',
      'Bài 26: Dự án STEM TNXH 2: "Mô hình Cơ quan Hô hấp Phổi nhân tạo & La bàn Định hướng"',
      'Bài 27: Thực hành thu gom và tái chế rác thải nhựa',
      'Bài 28: Kỹ năng thoát hiểm khi có hỏa hoạn cháy nổ',
      'Bài 29: Kỹ năng sơ cứu vết thương nhẹ và phòng tránh tai nạn thương tích',
      'Bài 30: Hệ thống hóa toàn bộ kiến thức tự nhiên và xã hội Lớp 2',
      'Bài 31: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn TNXH 2'
    ],
    3: [
      'Chủ đề 1: Gia đình - Bài 1: Họ hàng nội, ngoại và truyền thống gia đình',
      'Bài 2: Phòng tránh hỏa hoạn và sử dụng an toàn thiết bị điện',
      'Bài 3: Vệ sinh xung quanh nhà và phòng chống sốt xuất huyết',
      'Chủ đề 2: Trường học - Bài 4: Truyền thống nhà trường và tấm gương hiếu học',
      'Bài 5: Tham gia hoạt động kết nối cộng đồng của trường',
      'Bài 6: Vệ sinh trường học và phòng chống tai nạn thương tích',
      'Chủ đề 3: Cộng đồng địa phương - Bài 7: Hoạt động sản xuất truyền thống tại địa phương',
      'Bài 8: Di tích lịch sử - văn hóa và danh lam thắng cảnh quê hương',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn TNXH 3',
      'Bài 9: Giữ gìn và quảng bá di tích lịch sử địa phương',
      'Chủ đề 4: Thực vật và động vật - Bài 10: Lá cây và khả năng quang hợp chế tạo chất dinh dưỡng',
      'Bài 11: Hoa và quả (Cấu tạo, chức năng sinh sản và tạo hạt)',
      'Bài 12: Động vật có xương sống (Cá, ếch, bò sát, chim, thú)',
      'Bài 13: Động vật không xương sống (Côn trùng, tôm, cua, ốc)',
      'Chủ đề 5: Con người và sức khỏe - Bài 14: Cơ quan tuần hoàn (Tim và mạch máu)',
      'Bài 15: Hoạt động của tim và chăm sóc, bảo vệ tim mạch',
      'Bài 16: Ôn tập tổng hợp kiến thức TNXH Học kỳ 1 Lớp 3',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn TNXH 3',
      'Bài 17: Cơ quan thần kinh (Não, tủy sống và các dây thần kinh)',
      'Bài 18: Hoạt động phản xạ và chăm sóc hệ thần kinh (Ngủ đủ giấc, tránh căng thẳng)',
      'Chủ đề 6: Trái Đất và bầu trời - Bài 19: Các đới khí hậu trên Trái Đất (Nhiệt đới, Ôn đới, Hàn đới)',
      'Bài 20: Quả địa cầu - Mô hình thu nhỏ của Trái Đất',
      'Bài 21: Sự chuyển động của Trái Đất quanh Mặt Trời tạo nên hiện tượng ngày đêm và các mùa',
      'Bài 22: Mặt Trời, Trái Đất và Mặt Trăng trong hệ Mặt Trời',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn TNXH 3',
      'Bài 23: Đại dương và các châu lục trên bề mặt Trái Đất',
      'Bài 24: Dự án STEM TNXH 3: "Mô hình Hệ Mặt Trời 3D & Máy Đo Nhịp Tim Thủ Công"',
      'Bài 25: Thực hành quan sát và làm tiêu bản ép lá cây khô',
      'Bài 26: Tìm hiểu đa dạng sinh học các loài sinh vật quanh em',
      'Bài 27: Ôn tập toàn diện kiến thức Sinh học cơ thể người và Trái Đất',
      'Bài 28: Rèn luyện kỹ năng sống và phòng chống đuối nước',
      'Bài 29: Kỹ năng xử lý tình huống khẩn cấp và bảo vệ bản thân',
      'Bài 30: Tổng kết hệ thống kiến thức TNXH cấp Tiểu học (Lớp 1-3)',
      'Bài 31: Ôn tập chuẩn bị chuyển tiếp môn Khoa học và Lịch sử - Địa lý Lớp 4',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn TNXH 3'
    ],
    4: [
      'Chủ đề 1: Chất - Bài 1: Một số tính chất và vai trò của nước (Không màu, không mùi, hòa tan)',
      'Bài 2: Sự chuyển thể của nước và Vòng tuần hoàn của nước trong tự nhiên',
      'Bài 3: Ô nhiễm và bảo vệ nguồn nước sạch. Tiết kiệm nước',
      'Bài 4: Không khí có ở đâu? Thành phần và tính chất của không khí (Oxy, Nitơ, CO2)',
      'Bài 5: Vai trò của không khí đối với sự cháy và sự sống. Bảo vệ bầu không khí trong lành',
      'Bài 6: Gió, bão và các cấp độ gió. Phòng chống bão lũ',
      'Chủ đề 2: Năng lượng - Bài 7: Ánh sáng và vai trò của ánh sáng đối với sự sống',
      'Bài 8: Vật dẫn sáng, vật cản sáng và bóng tối',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Khoa học 4',
      'Bài 9: Âm thanh và sự truyền âm thanh trong chất rắn, lỏng, khí',
      'Bài 10: Âm thanh trong cuộc sống và phòng chống ô nhiễm tiếng ồn',
      'Bài 11: Nhiệt độ và sử dụng nhiệt kế đo nhiệt độ',
      'Bài 12: Sự truyền nhiệt. Vật dẫn nhiệt tốt và vật cách nhiệt',
      'Chủ đề 3: Thực vật và động vật - Bài 13: Nhu cầu sống của thực vật (Nước, ánh sáng, chất khoáng, không khí)',
      'Bài 14: Sự trao đổi chất ở thực vật và quá trình quang hợp, hô hấp',
      'Bài 15: Nhu cầu sống của động vật và sự trao đổi chất ở động vật',
      'Bài 16: Ôn tập tổng hợp kiến thức Chất và Năng lượng Học kỳ 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Khoa học 4',
      'Chủ đề 4: Nấm - Bài 17: Nấm men, nấm mốc và nấm ăn. Vai trò của nấm trong tự nhiên',
      'Bài 18: Nấm độc và phòng tránh ngộ độc nấm',
      'Chủ đề 5: Con người và sức khỏe - Bài 19: Các nhóm chất dinh dưỡng có trong thức ăn (Chất bột đường, đạm, béo, vitamin, khoáng chất)',
      'Bài 20: Vai trò của các nhóm chất dinh dưỡng đối với cơ thể',
      'Bài 21: Xây dựng thực đơn ăn uống cân bằng, khoa học (Tháp dinh dưỡng)',
      'Bài 22: Phòng tránh một số bệnh liên quan đến dinh dưỡng (Béo phì, suy dinh dưỡng, thiếu máu)',
      'Bài 23: An toàn vệ sinh thực phẩm và bảo quản thức ăn đúng cách',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Khoa học 4',
      'Chủ đề 6: Sinh vật và môi trường - Bài 24: Chuỗi thức ăn trong tự nhiên (Sinh vật sản xuất, tiêu thụ, phân giải)',
      'Bài 25: Vai trò của thực vật trong chuỗi thức ăn tự nhiên',
      'Bài 26: Tác động của con người đến chuỗi thức ăn và cân bằng sinh thái',
      'Dự án STEM Khoa học 4: "Chế tạo Bình Lọc Nước Sinh Hoạt Đơn Giản & Mô hình Chuỗi Thức Ăn 3D"',
      'Bài 27: Thực hành trồng rau mầm thủy canh không dùng đất',
      'Bài 28: Kỹ năng phòng tránh các bệnh truyền nhiễm qua đường tiêu hóa',
      'Bài 29: Hệ thống hóa toàn bộ kiến thức Khoa học Lớp 4',
      'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Khoa học 4'
    ],
    5: [
      'Chủ đề 1: Chất - Bài 1: Thành phần và sự biến đổi của chất (Biến đổi vật lí và biến đổi hóa học)',
      'Bài 2: Dung dịch và hỗn hợp. Tách các chất ra khỏi hỗn hợp',
      'Bài 3: Đất và các thành phần của đất. Vai trò của đất đối với sự sống',
      'Bài 4: Xói mòn đất và các biện pháp bảo vệ, cải tạo đất',
      'Chủ đề 2: Năng lượng - Bài 5: Năng lượng và các dạng năng lượng (Nhiệt, quang, điện, cơ năng)',
      'Bài 6: Năng lượng mặt trời, năng lượng gió và năng lượng nước chảy',
      'Bài 7: Năng lượng điện và Mạch điện thắp sáng đơn giản',
      'Bài 8: Vật dẫn điện, vật cách điện và An toàn, tiết kiệm điện năng',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Khoa học 5',
      'Chủ đề 3: Thực vật và động vật - Bài 9: Sự sinh sản của thực vật có hoa (Thụ phấn, thụ tinh, tạo quả)',
      'Bài 10: Sự sinh sản của thực vật không có hoa (Sinh sản vô tính từ rễ, thân, lá)',
      'Bài 11: Sự sinh sản của động vật (Đẻ trứng và đẻ con)',
      'Bài 12: Vòng đời và sự phát triển của côn trùng (Bướm, muỗi)',
      'Bài 13: Vòng đời của ếch và chim',
      'Bài 14: Sự sinh sản và nuôi con của thú (Động vật có vú)',
      'Bài 15: Ôn tập tổng hợp kiến thức Năng lượng và Sinh sản Học kỳ 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Khoa học 5',
      'Chủ đề 4: Vi khuẩn - Bài 16: Vi khuẩn quanh ta. Vai trò của vi khuẩn có ích trong sản xuất sữa chua, phô mai',
      'Bài 17: Vi khuẩn gây bệnh và các biện pháp phòng tránh nhiễm khuẩn',
      'Chủ đề 5: Con người và sức khỏe - Bài 18: Sự sinh sản ở người và quá trình thụ tinh tạo phôi thai',
      'Bài 19: Các giai đoạn phát triển của con người từ sơ sinh đến tuổi già',
      'Bài 20: Tuổi dậy thì: Những thay đổi về thể chất, tâm sinh lí và vệ sinh tuổi dậy thì',
      'Bài 21: Phòng tránh bị xâm hại tình dục và bảo vệ bản thân an toàn',
      'Bài 22: Phòng tránh nghiện các chất gây nghiện: Thuốc lá, rượu bia, ma túy',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Khoa học 5',
      'Chủ đề 6: Sinh vật và môi trường - Bài 23: Môi trường và các tài nguyên thiên nhiên quý giá',
      'Bài 24: Tác động của con người đến môi trường đất, nước, không khí và rừng',
      'Bài 25: Ô nhiễm môi trường và Biến đổi khí hậu toàn cầu',
      'Bài 26: Các biện pháp bảo vệ môi trường và phát triển năng lượng xanh',
      'Dự án STEM Khoa học 5: "Mô hình Xe chạy bằng Năng lượng Gió/Mặt Trời & Máy Báo Động Thông minh"',
      'Bài 27: Kỹ năng ứng phó với sự cố rò rỉ điện và hỏa hoạn',
      'Bài 28: Hệ thống hóa toàn bộ kiến thức Khoa học 5 năm Tiểu học',
      'Bài 29: Ôn tập toàn diện chuẩn bị chuyển cấp vào Lớp 6 THCS',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Tiểu học'
    ]
  };

  const topics = scienceTopicsByGrade[g] || scienceTopicsByGrade[1];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = name.includes('STEM') || w === 30;

    list.push({
      week: w,
      topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 2,
      yccd: getPrimaryLessonYccd(subject, String(g), name, w),
      equipment: 'Bộ dụng cụ thí nghiệm khoa học tiểu học, tranh ảnh, mô hình cơ thể người, kính lúp, máy chiếu',
      location: 'Phòng học / Phòng Khoa học / Sân trường',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án STEM Khoa học' : ''
    });
  });

  return list;
}

// =========================================================================
// 5. LỊCH SỬ VÀ ĐỊA LÝ TIỂU HỌC (LỚP 4 - 5)
// =========================================================================
export function getHistoryGeoPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 4;
  const list: RawPrimaryLesson[] = [];

  const topicsByGrade: Record<number, string[]> = {
    4: [
      'Bài 1: Làm quen với phương tiện học tập môn Lịch sử và Địa lý 4',
      'Bài 2: Địa phương em (Vị trí, địa hình, khí hậu, sông ngòi tỉnh/thành phố)',
      'Bài 3: Lịch sử và văn hóa truyền thống địa phương em',
      'Bài 4: Thiên nhiên vùng Trung du và miền núi Bắc Bộ',
      'Bài 5: Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi Bắc Bộ',
      'Bài 6: Đền Hùng và Lễ giỗ Tổ Hùng Vương',
      'Bài 7: Thiên nhiên vùng Đồng bằng Bắc Bộ',
      'Bài 8: Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lý 4',
      'Bài 9: Sông Hồng và đê sông Hồng trong lịch sử trị thủy',
      'Bài 10: Thăng Long - Hà Nội (Lịch sử nghìn năm văn hiến và di tích Hoàng thành)',
      'Bài 11: Văn Miếu - Quốc Tử Giám trường đại học đầu tiên của Việt Nam',
      'Bài 12: Thiên nhiên vùng Duyên hải miền Trung (Khí hậu nhiệt đới gió mùa, bão lũ, cát trắng)',
      'Bài 13: Dân cư và hoạt động kinh tế biển ở vùng Duyên hải miền Trung',
      'Bài 14: Cố đô Huế và Di sản văn hóa cung đình Huế',
      'Bài 15: Phố cổ Hội An và Di sản đô thị cổ thế giới',
      'Bài 16: Ôn tập các vùng miền địa lí và lịch sử văn hóa Học kỳ 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Lịch sử và Địa lý 4',
      'Bài 17: Thiên nhiên vùng Tây Nguyên (Địa hình cao nguyên xếp tầng, đất đỏ bazan)',
      'Bài 18: Dân cư và hoạt động trồng cây công nghiệp (Cà phê, cao su, hồ tiêu) ở Tây Nguyên',
      'Bài 19: Không gian văn hóa Cồng chiêng Tây Nguyên di sản phi vật thể nhân loại',
      'Bài 20: Lễ hội hoa Đà Lạt và Du lịch sinh thái nghỉ dưỡng Tây Nguyên',
      'Bài 21: Thiên nhiên vùng Nam Bộ (Đồng bằng châu thổ sông Cửu Long, mạng lưới sông ngòi)',
      'Bài 22: Dân cư và hoạt động sản xuất nông nghiệp, nuôi trồng thủy sản vùng Nam Bộ',
      'Bài 23: Thành phố Hồ Chí Minh trung tâm kinh tế, văn hóa, giáo dục lớn của cả nước',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lý 4',
      'Bài 24: Địa đạo Củ Chi di tích lịch sử kháng chiến oanh liệt',
      'Bài 25: Biển, đảo Việt Nam (Quần đảo Hoàng Sa và Trường Sa thiêng liêng của Tổ quốc)',
      'Bài 26: Khai thác tài nguyên biển đảo và Bảo vệ chủ quyền biển đảo quê hương',
      'Bài 27: Tìm hiểu một số nhân vật lịch sử tiêu biểu dựng nước và giữ nước',
      'Bài 28: Trò chơi lịch sử: Theo dòng lịch sử hào hùng dân tộc',
      'Dự án STEM Lịch sử Địa lý 4: "Mô hình Sa bàn Hoàng thành Thăng Long & Bản đồ Du lịch Việt Nam"',
      'Bài 29: Kỹ năng đọc và vẽ lược đồ địa hình các vùng miền Việt Nam',
      'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm môn Lịch sử và Địa lý 4',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Lịch sử và Địa lý 4'
    ],
    5: [
      'Bài 1: Vị trí địa lí, lãnh thổ, biển đảo và vùng trời Việt Nam',
      'Bài 2: Thiên nhiên Việt Nam (Địa hình, khoáng sản, khí hậu nhiệt đới ẩm gió mùa)',
      'Bài 3: Sông ngòi và đất đai, rừng nhiệt đới Việt Nam',
      'Bài 4: Dân cư và các dân tộc Việt Nam (54 dân tộc anh em)',
      'Bài 5: Nông nghiệp, lâm nghiệp và thủy sản Việt Nam',
      'Bài 6: Công nghiệp và xây dựng cơ sở hạ tầng giao thông vận tải',
      'Bài 7: Thương mại, du lịch và dịch vụ kinh tế biển Việt Nam',
      'Bài 8: Nhà nước Văn Lang và Nhà nước Âu Lạc (Thời kỳ Hùng Vương - An Dương Vương)',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Lịch sử và Địa lý 5',
      'Bài 9: Hơn một nghìn năm đấu tranh giành độc lập (Hai Bà Trưng, Ngô Quyền)',
      'Bài 10: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Lê Lợi, Nguyễn Trãi)',
      'Bài 11: Phong trào Tây Sơn và Quang Trung đại phá quân Thanh',
      'Bài 12: Nước ta thời Nguyễn và Cuộc kháng chiến chống thực dân Pháp',
      'Bài 13: Bác Hồ ra đi tìm đường cứu nước (1911) và Đảng Cộng sản Việt Nam ra đời (1930)',
      'Bài 14: Cách mạng Tháng Tám năm 1945 và Nước Việt Nam Dân chủ Cộng hòa ra đời',
      'Bài 15: Chiến thắng Điện Biên Phủ "Lừng lẫy năm châu, chấn động địa cầu" (1954)',
      'Bài 16: Ôn tập tổng hợp Lịch sử và Địa lý Việt Nam giai đoạn cận - hiện đại HK1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Lịch sử và Địa lý 5',
      'Bài 17: Cuộc kháng chiến chống Mỹ cứu nước và Chiến dịch Hồ Chí Minh lịch sử (1975)',
      'Bài 18: Đất nước trọn niềm vui thống nhất và Thời kỳ Đổi mới hội nhập quốc tế (1986 - nay)',
      'Bài 19: Các nước láng giềng của Việt Nam (Lào, Cam-pu-chia, Trung Quốc)',
      'Bài 20: Hiệp hội các quốc gia Đông Nam Á (ASEAN) và Vị thế của Việt Nam',
      'Bài 21: Châu Á (Vị trí, tự nhiên, dân cư và kinh tế các quốc gia châu Á)',
      'Bài 22: Châu Âu (Thiên nhiên tươi đẹp và các nước phát triển châu Âu)',
      'Bài 23: Châu Phi (Lục địa nóng, hoang mạc Xa-ha-ra, kim tự tháp Ai Cập cổ đại)',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Lịch sử và Địa lý 5',
      'Bài 24: Châu Mỹ (Bắc Mỹ phát triển, Rừng rậm Amazon Nam Mỹ nhiệt đới)',
      'Bài 25: Châu Đại Dương và Châu Nam Cực (Lục địa băng giá quanh năm)',
      'Bài 26: Các đại dương trên thế giới (Thái Bình Dương, Đại Tây Dương, Ấn Độ Dương, Bắc Băng Dương)',
      'Bài 27: Liên Hợp Quốc và Nỗ lực giữ gìn hòa bình, an ninh toàn cầu',
      'Bài 28: Trách nhiệm của học sinh với chủ quyền biên giới, biển đảo Tổ quốc',
      'Dự án STEM Lịch sử Địa lý 5: "Bản đồ 3D Quần đảo Hoàng Sa - Trường Sa & Con đường Di sản Thế giới"',
      'Bài 29: Hệ thống hóa toàn bộ mạch kiến thức Địa lí thế giới và Lịch sử Việt Nam',
      'Bài 30: Ôn tập toàn diện chuẩn bị chuyển cấp vào lớp 6 THCS',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Tiểu học'
    ]
  };

  const currentLessons = topicsByGrade[g] || topicsByGrade[4];
  currentLessons.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 33 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 2,
      yccd: getPrimaryLessonYccd('Lịch sử và Địa lý', String(g), name, w),
      equipment: 'Bản đồ hành chính Việt Nam, Bản đồ các vùng kinh tế, Quả địa cầu, Tranh ảnh tư liệu lịch sử',
      location: 'Phòng học bộ môn Lịch sử - Địa lí / Lớp học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Tích hợp STEM Di sản' : ''
    });
  });

  return list;
}

// =========================================================================
// 6. TIN HỌC TIỂU HỌC (LỚP 3, 4, 5) - KHUNG 35 TIẾT (1 TIẾT/TUẦN)
// =========================================================================
export function getItPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 3;
  const list: RawPrimaryLesson[] = [];

  const itTopicsByGrade: Record<number, string[]> = {
    3: [
      'Bài 1: Thông tin và quyết định (Thông tin thu nhận từ giác quan và quyết định tương ứng)',
      'Bài 2: Khám phá máy tính (Thân máy, màn hình, bàn phím, chuột máy tính)',
      'Bài 3: Chuột máy tính (Thao tác cầm chuột, nháy chuột, nháy đúp, kéo thả)',
      'Bài 4: Bàn phím máy tính và hàng phím cơ sở (Khu vực phím chính, phím cách, Enter)',
      'Bài 5: Tập gõ bàn phím đúng cách bằng 10 ngón với phần mềm TypingMaster',
      'Bài 6: Sử dụng máy tính an toàn và tư thế ngồi đúng chuẩn bảo vệ thị lực',
      'Bài 7: Làm quen với Internet và trình duyệt Web (Chrome, Edge)',
      'Bài 8: Khám phá thông tin bổ ích trên trang web thiếu nhi Việt Nam',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 3',
      'Bài 9: An toàn khi sử dụng Internet và bảo mật thông tin cá nhân',
      'Bài 10: Làm quen phần mềm đồ họa Paint (Công cụ cọ vẽ, bút chì, hộp màu)',
      'Bài 11: Vẽ hình mẫu cơ bản (Hình chữ nhật, hình tròn, đa giác) và tẩy xóa hình',
      'Bài 12: Sao chép, di chuyển và tô màu bức tranh trong Paint',
      'Bài 13: Lưu tệp hình vẽ vào thư mục máy tính và mở tệp đã lưu',
      'Bài 14: Thực hành vẽ tranh đề tài "Ngôi trường thân yêu của em" trên Paint',
      'Bài 15: Sắp xếp để tìm kiếm thông tin dễ dàng hơn (Phân loại tệp tin)',
      'Bài 16: Ôn tập tổng hợp kiến thức Tin học Học kỳ 1 Lớp 3',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 3',
      'Bài 17: Thư mục trên máy tính (Tạo thư mục, đặt tên thư mục theo môn học)',
      'Bài 18: Lưu tệp vào thư mục, đổi tên và xóa thư mục an toàn',
      'Bài 19: Làm quen với phần mềm soạn thảo văn bản Microsoft Word',
      'Bài 20: Gõ tiếng Việt có dấu với Unikey theo kiểu gõ Telex / Vni',
      'Bài 21: Tập gõ bài thơ ngắn và lưu văn bản vào thư mục cá nhân',
      'Bài 22: Chỉnh sửa văn bản và chọn phông chữ, cỡ chữ, màu chữ',
      'Bài 23: Chèn hình ảnh minh họa vào văn bản thêm sinh động',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 3',
      'Bài 24: Thực hiện công việc theo từng bước (Khái niệm thuật toán đơn giản)',
      'Bài 25: Sắp xếp các bước tuần tự để giải quyết một bài toán học tập',
      'Bài 26: Khám phá phần mềm rèn luyện tư duy lập trình trực quan Code.org',
      'Bài 27: Điều khiển nhân vật di chuyển vượt mê cung trên Code.org',
      'Bài 28: Tạo hiệu ứng âm thanh và sự kiện cho nhân vật trong Code.org',
      'Dự án STEM Tin học 3: "Thiết kế Thiệp chúc mừng sinh nhật trên Paint & Word"',
      'Bài 29: Trình bày và chia sẻ sản phẩm số trước lớp',
      'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Tin học 3',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 3'
    ],
    4: [
      'Bài 1: Phần cứng và phần mềm máy tính (Thiết bị vào, thiết bị ra)',
      'Bài 2: Gõ bàn phím đúng cách nâng cao tốc độ gõ 10 ngón',
      'Bài 3: Lưu trữ và quản lý tệp, thư mục khoa học trong ổ đĩa máy tính',
      'Bài 4: Tìm kiếm thông tin trên Internet bằng từ khóa chính xác',
      'Bài 5: Đánh giá độ tin cậy của thông tin trên mạng Internet',
      'Bài 6: Bản quyền nội dung và đạo đức khi sử dụng thông tin số',
      'Bài 7: Soạn thảo văn bản: Định dạng đoạn văn, căn lề và giãn dòng',
      'Bài 8: Chèn biểu bảng (Table) và căn chỉnh bảng trong Word',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 4',
      'Bài 9: Chèn hình ảnh, tạo viền trang và hoàn thiện văn bản báo cáo',
      'Bài 10: Làm quen với phần mềm trình chiếu Microsoft PowerPoint',
      'Bài 11: Tạo trang chiếu mới, nhập tiêu đề và nội dung bài thuyết trình',
      'Bài 12: Định dạng văn bản và chèn hình ảnh minh họa vào trang chiếu',
      'Bài 13: Tạo hiệu ứng chuyển động cho văn bản và hình ảnh trong PowerPoint',
      'Bài 14: Thực hành thiết kế bài thuyết trình "Giới thiệu loài động vật em yêu"',
      'Bài 15: Trình chiếu và thuyết minh bài trình chiếu trước nhóm',
      'Bài 16: Ôn tập tổng hợp Soạn thảo văn bản và Trình chiếu Học kỳ 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 4',
      'Bài 17: Làm quen với môi trường lập trình trực quan Scratch 3.0',
      'Bài 18: Khám phá sân khấu, nhân vật và khối lệnh di chuyển trong Scratch',
      'Bài 19: Lập trình nhân vật di chuyển và phát âm thanh vui nhộn',
      'Bài 20: Lập trình vòng lặp lặp lại nhiều lần (Khối lệnh Repeat)',
      'Bài 21: Lập trình vẽ các hình học cơ bản (Hình vuông, tam giác) với bút vẽ Pen',
      'Bài 22: Lập trình nhân vật đối thoại và đổi trang phục (Costume)',
      'Bài 23: Lập trình bắt sự kiện khi nhấn phím mũi tên điều khiển nhân vật',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 4',
      'Bài 24: Lập trình điều kiện Nếu - Thì (Khối lệnh If - Then) phát hiện va chạm',
      'Bài 25: Xây dựng trò chơi "Mèo bắt chuột" đơn giản trên Scratch',
      'Bài 26: Tạo biến số Điểm số (Score) và đếm điểm trong trò chơi',
      'Bài 27: Thêm phông nền chiến thắng và kết thúc trò chơi',
      'Bài 28: Khám phá ứng dụng của Trí tuệ nhân tạo (AI) trong đời sống',
      'Dự án STEM Tin học 4: "Lập trình Game Thu gom rác thải bảo vệ đại dương"',
      'Bài 29: Báo cáo và chạy thử nghiệm trò chơi trước hội đồng lớp',
      'Bài 30: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Tin học 4',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Tin học 4'
    ],
    5: [
      'Bài 1: Thu thập và xử lý thông tin trong kỷ nguyên chuyển đổi số',
      'Bài 2: Sử dụng thư điện tử (Email) trao đổi thông tin học tập an toàn',
      'Bài 3: Đính kèm tệp và gửi thư điện tử đúng quy tắc lịch sự',
      'Bài 4: Tìm kiếm và chọn lọc thông tin phục vụ dự án học tập',
      'Bài 5: Bản quyền số, trích dẫn nguồn tài liệu và bảo vệ dữ liệu cá nhân',
      'Bài 6: Thiết kế bài trình chiếu đa phương tiện (Chèn âm thanh, video ngắn)',
      'Bài 7: Sử dụng mẫu giao diện thiết kế chuyên nghiệp trong PowerPoint',
      'Bài 8: Tạo sơ đồ tư duy (Mindmap) trên máy tính bằng phần mềm chuyên dụng',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Tin học Lớp 5',
      'Bài 9: Thực hành thiết kế bài thuyết trình "Hành trình khám phá di sản Việt Nam"',
      'Bài 10: Kỹ năng thuyết trình số kết hợp phương tiện nghe nhìn',
      'Bài 11: Làm quen với Bảng tính điện tử Microsoft Excel cơ bản',
      'Bài 12: Nhập dữ liệu, định dạng bảng tính và tạo biểu đồ cột đơn giản',
      'Bài 13: Sử dụng các hàm tính toán cơ bản: SUM, AVERAGE trong Excel',
      'Bài 14: Ứng dụng bảng tính quản lý điểm số và chi tiêu cá nhân',
      'Bài 15: An toàn không gian mạng: Phòng chống lừa đảo và virus máy tính',
      'Bài 16: Ôn tập tổng hợp kiến thức Tin học ứng dụng Học kỳ 1 Lớp 5',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Tin học 5',
      'Bài 17: Lập trình Scratch nâng cao: Sử dụng biến số và biểu thức toán học',
      'Bài 18: Lập trình câu lệnh lặp vô hạn (Forever) và lặp có điều kiện (Repeat until)',
      'Bài 19: Lập trình cảm biến (Sensing): Nhận biết va chạm cạnh sân khấu và vật cản',
      'Bài 20: Lập trình điều khiển nhân vật bằng tọa độ X, Y trên sân khấu',
      'Bài 21: Tạo câu hỏi trắc nghiệm tương tác thông minh có kiểm tra đúng/sai',
      'Bài 22: Lập trình tính điểm tự động và lời khen ngợi người chơi',
      'Bài 23: Lập trình tạo bản sao nhân vật (Clone) cho chướng ngại vật rơi',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Tin học Lớp 5',
      'Bài 24: Xây dựng dự án trò chơi "Phi thuyền không gian tránh thiên thạch"',
      'Bài 25: Tinh chỉnh âm thanh, hiệu ứng đồ họa và độ khó của trò chơi',
      'Bài 26: Khám phá Trí tuệ nhân tạo (AI) và Học máy (Machine Learning) cơ bản',
      'Bài 27: Trải nghiệm công cụ nhận diện giọng nói và hình ảnh bằng AI',
      'Bài 28: Hướng nghiệp: Khám phá các ngành nghề trong lĩnh vực công nghệ số',
      'Dự án STEM Tin học 5: "Lập trình Trợ lý ảo AI Hỗ trợ học từ vựng Tiếng Anh"',
      'Bài 29: Triển lãm và trình diễn các sản phẩm lập trình xuất sắc Lớp 5',
      'Bài 30: Ôn tập toàn diện kiến thức Tin học chuẩn bị vào Lớp 6 THCS',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Tin học Tiểu học'
    ]
  };

  const topics = itTopicsByGrade[g] || itTopicsByGrade[3];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 32 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 1,
      yccd: getPrimaryLessonYccd('Tin học', String(g), name, w),
      equipment: 'Phòng máy tính kết nối Internet tốc độ cao, phần mềm Scratch 3.0, MS Office, LMS',
      location: 'Phòng học bộ môn Tin học',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án STEM & AI' : ''
    });
  });

  return list;
}

// =========================================================================
// 7. CÔNG NGHỆ TIỂU HỌC (LỚP 3, 4, 5) - KHUNG 35 TIẾT (1 TIẾT/TUẦN)
// =========================================================================
export function getTechnologyPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 3;
  const list: RawPrimaryLesson[] = [];

  const techTopicsByGrade: Record<number, string[]> = {
    3: [
      'Bài 1: Tự nhiên và công nghệ (Phân biệt đối tượng tự nhiên và sản phẩm công nghệ)',
      'Bài 1: Tự nhiên và công nghệ (Vai trò của sản phẩm công nghệ trong đời sống)',
      'Bài 2: Sử dụng đèn học (Cấu tạo và nguyên lý hoạt động của đèn học)',
      'Bài 2: Sử dụng đèn học an toàn, tiết kiệm điện và phòng chống cận thị',
      'Bài 3: Sử dụng quạt điện (Cấu tạo và các nút điều khiển của quạt điện)',
      'Bài 3: Sử dụng quạt điện an toàn và vệ sinh quạt điện đúng cách',
      'Bài 4: Sử dụng máy thu thanh (Radio) - Khám phá các kênh phát thanh thiếu nhi',
      'Bài 5: Sử dụng máy thu hình (Tivi) - Lựa chọn chương trình và khoảng cách xem an toàn',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 3',
      'Bài 6: An toàn với đồ dùng điện trong gia đình (Phòng tránh điện giật)',
      'Bài 6: Xử lý an toàn khi phát hiện thiết bị điện bị rò rỉ hoặc chập cháy',
      'Bài 7: Dụng cụ và vật liệu làm thủ công (Kéo, giấy màu, thước kẻ, hồ dán)',
      'Bài 7: Quy tắc sử dụng dụng cụ thủ công an toàn, cẩn thận',
      'Bài 8: Làm đồ dùng học tập: Làm thước kẻ gấp hình học bằng bìa cứng',
      'Bài 8: Làm ống đựng bút để bàn từ vật liệu tái chế (vỏ chai, lõi giấy)',
      'Bài 9: Ôn tập công nghệ gia đình và sản phẩm thủ công Học kỳ 1',
      'Bài 9: Trưng bày và đánh giá sản phẩm đồ dùng học tập tự làm',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Công nghệ 3',
      'Bài 10: Đồ chơi và an toàn đồ chơi (Lựa chọn đồ chơi phù hợp lứa tuổi)',
      'Bài 10: Giữ gìn, bảo quản đồ chơi và văn hóa chia sẻ đồ chơi cùng bạn',
      'Bài 11: Làm đồ chơi dân gian: Làm chong chóng quay bằng giấy màu',
      'Bài 11: Thực hành làm chong chóng nhiều cánh và thử nghiệm độ quay trong gió',
      'Bài 12: Làm máy bay giấy phi tiêu và điều chỉnh góc cánh để bay xa',
      'Bài 13: Làm con quay đồ chơi bằng nắp chai nhựa và que tre',
      'Bài 14: Làm đồng hồ đeo tay đồ chơi bằng bìa cứng sắc màu',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 3',
      'Bài 15: Làm mô hình ngôi nhà mini bằng que kem và bìa carton',
      'Bài 15: Trang trí và hoàn thiện mô hình ngôi nhà mơ ước',
      'Bài 16: Tìm hiểu nghề thủ công truyền thống: Nghề đan lát mây tre và gốm sứ',
      'Bài 16: Tìm hiểu nghề thợ may, thợ cơ khí và đóng góp của người lao động',
      'Dự án STEM Công nghệ 3: "Chế tạo Xe ô tô đồ chơi chạy bằng bóng bay phản lực"',
      'Dự án STEM: Thử nghiệm đua xe phản lực và tối ưu hóa thân xe',
      'Bài 17: Hội chợ Triển lãm Sản phẩm Công nghệ & Đồ chơi sáng tạo Lớp 3',
      'Bài 18: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Công nghệ 3',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Công nghệ 3'
    ],
    4: [
      'Bài 1: Hoa và cây cảnh quanh em (Lợi ích và vẻ đẹp của hoa, cây cảnh)',
      'Bài 2: Một số loại hoa phổ biến (Hoa hồng, hoa cúc, hoa đào, hoa mai)',
      'Bài 3: Một số loại cây cảnh phổ biến (Cây phát tài, cây lưỡi hổ, cây kim tiền)',
      'Bài 4: Dụng cụ và vật liệu trồng hoa, cây cảnh trong chậu',
      'Bài 5: Chọn chậu, chuẩn bị giá thể đất trồng tơi xốp, thoát nước tốt',
      'Bài 6: Kỹ thuật gieo hạt và trồng hoa trong chậu đúng kỹ thuật',
      'Bài 7: Kỹ thuật trồng cây cảnh trong chậu bằng cành giâm / cây con',
      'Bài 8: Kỹ thuật tưới nước, bón phân hữu cơ và tỉa cành cho cây cảnh',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 4',
      'Bài 9: Phòng trừ sâu bệnh sinh học cho hoa và cây cảnh an toàn',
      'Bài 10: Thực hành chăm sóc và trang trí chậu hoa xanh lớp học',
      'Bài 11: Làm quen với bộ lắp ghép mô hình kỹ thuật (Chi tiết và dụng cụ mở ốc)',
      'Bài 12: Kỹ thuật lắp ghép mối nối cố định và mối nối chuyển động',
      'Bài 13: Lắp ghép mô hình cái đu quay kỹ thuật',
      'Bài 14: Lắp ghép mô hình xe nôi em bé',
      'Bài 15: Lắp ghép mô hình cầu vượt bộ hành qua đường an toàn',
      'Bài 16: Ôn tập tổng hợp Trồng hoa cây cảnh và Lắp ghép mô hình HK1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Công nghệ 4',
      'Bài 17: Lắp ghép mô hình xe tải có thùng chở hàng',
      'Bài 18: Lắp ghép mô hình cần cẩu trục xoay mini',
      'Bài 19: Tự thiết kế mô hình kỹ thuật sáng tạo theo nhóm',
      'Bài 20: Làm đồ chơi dân gian: Làm đèn lồng ông sao Trung thu truyền thống',
      'Bài 21: Làm diều giấy truyền thống và thử nghiệm thả diều ngoài trời',
      'Bài 22: Làm con rối bóng biểu diễn nghệ thuật rối dân gian',
      'Bài 23: Làm ống nhòm đồ chơi thám hiểm từ lõi giấy tái chế',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 4',
      'Bài 24: Tìm hiểu nghề trồng hoa, cây kiểng và nghệ nhân sinh vật cảnh',
      'Bài 25: Tìm hiểu nghề xây dựng, kiến trúc sư và đóng góp xã hội',
      'Bài 26: Thực hành an toàn lao động và giữ gìn vệ sinh nơi thực hành',
      'Bài 27: Tiết kiệm tài nguyên và tái sử dụng vật liệu trong sinh hoạt',
      'Dự án STEM Công nghệ 4: "Mô hình Hệ thống Tưới cây Nhỏ giọt Tự động"',
      'Dự án STEM: Thử nghiệm hiệu quả tưới nhỏ giọt trên chậu cây thực tế',
      'Bài 28: Triển lãm Sản phẩm Công nghệ & Mô hình Kỹ thuật Lớp 4',
      'Bài 29: Ôn tập toàn diện chuẩn bị kiểm tra cuối năm Công nghệ 4',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Công nghệ 4'
    ],
    5: [
      'Bài 1: Công nghệ trong gia đình: Khám phá vai trò của thiết bị gia dụng hiện đại',
      'Bài 2: Sử dụng tủ lạnh đúng cách, bảo quản thực phẩm tươi ngon và tiết kiệm điện',
      'Bài 3: Sử dụng máy giặt an toàn, lựa chọn chế độ giặt phù hợp',
      'Bài 4: Sử dụng nồi cơm điện và nồi chiên không dầu an toàn, hiệu quả',
      'Bài 5: Sử dụng lò vi sóng và bếp điện từ: Nguyên tắc an toàn chống cháy nổ',
      'Bài 6: Sử dụng máy hút bụi và robot hút bụi thông minh trong gia đình',
      'Bài 7: Vệ sinh, bảo dưỡng định kỳ các đồ dùng điện gia đình',
      'Bài 8: Xử lý an toàn các tình huống sự cố điện và tiết kiệm năng lượng điện',
      'Kiểm tra, đánh giá giữa Học kỳ 1 môn Công nghệ Lớp 5',
      'Bài 9: Khái quát về thiết kế kỹ thuật: Từ ý tưởng đến bản vẽ phác thảo',
      'Bài 10: Các bước thực hiện thiết kế một sản phẩm công nghệ đơn giản',
      'Bài 11: Thực hành thiết kế sản phẩm "Hộp đựng đồ dùng học tập đa năng"',
      'Bài 12: Đánh giá và điều chỉnh giải pháp thiết kế sản phẩm',
      'Bài 13: Lắp ghép mô hình kỹ thuật: Lắp ghép mô hình xe ô tô chạy bằng động cơ điện pin',
      'Bài 14: Lắp ghép mô hình máy bay cánh quạt quay bằng động cơ',
      'Bài 15: Lắp ghép mô hình cẩu tháp công trình xây dựng',
      'Bài 16: Ôn tập tổng hợp Thiết bị gia đình và Thiết kế kỹ thuật Học kỳ 1',
      'Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Công nghệ 5',
      'Bài 17: Nuôi cá cảnh trong bể thủy sinh: Lợi ích và các loài cá cảnh phổ biến',
      'Bài 18: Chuẩn bị bể nuôi, nguồn nước, máy sục khí oxy và hệ thống lọc nước',
      'Bài 19: Kỹ thuật thả cá, cho cá ăn đúng lượng và vệ sinh bể thủy sinh',
      'Bài 20: Phòng trừ một số bệnh thường gặp ở cá cảnh an toàn sinh học',
      'Bài 21: Thực hành chăm sóc bể cá cảnh mini tại góc thiên nhiên lớp học',
      'Bài 22: Khám phá công nghệ nông nghiệp thông minh: Trồng rau thủy canh hồi lưu',
      'Bài 23: Làm mô hình giàn trồng rau thủy canh từ ống nhựa PVC tái chế',
      'Kiểm tra, đánh giá giữa Học kỳ 2 môn Công nghệ Lớp 5',
      'Bài 24: Khám phá Ngôi nhà thông minh (Smart Home) và các thiết bị cảm biến',
      'Bài 25: Năng lượng tái tạo trong tương lai: Điện mặt trời và điện gió',
      'Bài 26: Tìm hiểu nghề kỹ sư điện, kỹ sư nông nghiệp và chuyên gia công nghệ',
      'Bài 27: Định hướng sở thích cá nhân với các ngành nghề kỹ thuật công nghệ',
      'Dự án STEM Công nghệ 5: "Chế tạo Xe Robot dò đường / Xe chạy bằng Pin Năng lượng Mặt Trời"',
      'Dự án STEM: Thử nghiệm vận hành xe năng lượng xanh và đánh giá hiệu năng',
      'Bài 28: Báo cáo và trưng bày sản phẩm sáng tạo công nghệ khối 5',
      'Bài 29: Ôn tập toàn diện chuẩn bị chuyển cấp vào Lớp 6 THCS',
      'Kiểm tra, đánh giá cuối Học kỳ 2 & Xét hoàn thành chương trình Công nghệ Tiểu học'
    ]
  };

  const topics = techTopicsByGrade[g] || techTopicsByGrade[3];
  topics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    const isGK = w === 9 || w === 26;
    const isCK = w === 18 || w === 35;
    const isStem = w === 31 || name.includes('STEM');

    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 1,
      yccd: getPrimaryLessonYccd('Công nghệ', String(g), name, w),
      equipment: 'Bộ dụng cụ thủ công, bộ lắp ghép mô hình kỹ thuật, mô hình thiết bị điện gia đình, chậu cây, giá thể đất',
      location: 'Phòng học / Phòng thực hành Công nghệ / Xưởng STEM',
      notes: isGK ? 'Kiểm tra giữa kỳ' : isCK ? 'Kiểm tra cuối kỳ' : isStem ? 'Dự án STEM Công nghệ' : ''
    });
  });

  return list;
}

// =========================================================================
// 8. ĐẠO ĐỨC TIỂU HỌC (LỚP 1 - 5) - KHUNG 35 TIẾT (1 TIẾT/TUẦN)
// =========================================================================
export function getEthicsPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const daoDucNames = [
    `Bài 1: Yêu thương chăm sóc gia đình và ông bà cha mẹ (Lớp ${g})`,
    `Bài 2: Giữ lời hứa và thật thà trong học tập sinh hoạt (Lớp ${g})`,
    `Bài 3: Tôn trọng sự khác biệt của bạn bè trong lớp`,
    `Bài 4: Tự giác làm việc của mình ở trường và ở nhà`,
    `Bài 5: Biết nhận lỗi và sửa lỗi khi mắc khuyết điểm`,
    `Bài 6: Bảo vệ của công và giữ gìn vệ sinh nơi công cộng`,
    `Bài 7: Giúp đỡ người tàn tật và người gặp hoàn cảnh khó khăn`,
    `Bài 8: Chấp hành luật an toàn giao thông đường bộ`,
    `Kiểm tra, đánh giá giữa Học kỳ 1 môn Đạo đức Lớp ${g}`,
    `Bài 9: Kính yêu Bác Hồ và noi gương năm điều Bác Hồ dạy`,
    `Bài 10: Tự hào về truyền thống trường em và thầy cô giáo`,
    `Bài 11: Lịch sự khi giao tiếp và tôn trọng người lớn tuổi`,
    `Bài 12: Bảo vệ môi trường xanh - sạch - đẹp quanh em`,
    `Bài 13: Tiết kiệm điện, nước và bảo vệ tài nguyên`,
    `Bài 14: Phòng tránh tai nạn thương tích và xâm hại trẻ em`,
    `Bài 15: Yêu quý động vật và chăm sóc bảo vệ cây xanh`,
    `Bài 16: Ôn tập và thực hành các chuẩn mực đạo đức Học kỳ 1`,
    `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Đạo đức ${g}`,
    `Bài 17: Tự hào về quê hương đất nước Việt Nam tươi đẹp`,
    `Bài 18: Tôn trọng bản sắc văn hóa các dân tộc anh em`,
    `Bài 19: Đoàn kết, thân ái với bạn bè quốc tế`,
    `Bài 20: Kiên trì vượt khó trong học tập và rèn luyện`,
    `Bài 21: Biết ơn thương binh, liệt sĩ và người có công với đất nước`,
    `Bài 22: Lắng nghe ý kiến người khác và giải quyết bất hòa thân thiện`,
    `Bài 23: Sử dụng mạng xã hội và Internet văn minh, an toàn`,
    `Kiểm tra, đánh giá giữa Học kỳ 2 môn Đạo đức Lớp ${g}`,
    `Bài 24: Sống trung thực, không tham của rơi`,
    `Bài 25: Tự hào về truyền thống hiếu học của dân tộc`,
    `Bài 26: Phòng chống bạo lực học đường và xây dựng tình bạn đẹp`,
    `Bài 27: Bảo vệ di sản văn hóa và danh lam thắng cảnh quê hương`,
    `Bài 28: Tự tin thể hiện bản thân và ước mơ tương lai`,
    `Dự án Đạo đức & Kỹ năng sống: "Vườn hoa Việc tốt & Cây điều ước Hạnh phúc"`,
    `Bài 29: Ôn tập tổng hợp kiến thức Đạo đức lớp ${g}`,
    `Bài 30: Thực hành tuyên truyền nếp sống văn minh học đường`,
    `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Đạo đức ${g}`
  ];

  daoDucNames.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    list.push({
      week: w,
      topic: name.includes('Bài') ? name.split(':')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 1,
      yccd: getPrimaryLessonYccd('Đạo đức', String(g), name, w),
      equipment: 'Tranh ảnh tình huống đạo đức, video câu chuyện gương người tốt việc tốt, phiếu thảo luận',
      location: 'Lớp học',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : ''
    });
  });

  return list;
}

// =========================================================================
// 9. ÂM NHẠC & MĨ THUẬT TIỂU HỌC (LỚP 1 - 5) - KHUNG 35 TIẾT/MÔN
// =========================================================================
export function getMusicArtPrimaryCurriculum(grade: string, subject: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const s = subject.toLowerCase().trim();
  const isMusic = s.includes('âm nhạc') || s.includes('am nhac');
  const list: RawPrimaryLesson[] = [];

  const names = isMusic
    ? [
        `Chủ đề 1: Rộn ràng ngày mới - Học hát: Bài ca đi học (Lớp ${g})`,
        `Chủ đề 1: Rộn ràng ngày mới - Gõ đệm nhạc cụ thanh phách & Song loan`,
        `Chủ đề 1: Rộn ràng ngày mới - Đọc nhạc: Đô - Rê - Mi theo ký hiệu bàn tay`,
        `Chủ đề 1: Rộn ràng ngày mới - Thường thức âm nhạc: Tìm hiểu kèn Trumpet`,
        `Chủ đề 2: Bạn bè bốn phương - Học hát bài hát thiếu nhi quốc tế`,
        `Chủ đề 2: Bạn bè bốn phương - Vận động cơ thể (Body percussion)`,
        `Chủ đề 2: Bạn bè bốn phương - Đọc nhạc cao độ Mi - Son - La`,
        `Chủ đề 2: Bạn bè bốn phương - Trình diễn âm nhạc trước lớp`,
        `Kiểm tra, đánh giá giữa Học kỳ 1 môn Âm nhạc Lớp ${g}`,
        `Chủ đề 3: Nhớ ơn thầy cô - Học hát: Bụi phấn / Thầy cô là tất cả`,
        `Chủ đề 3: Nhớ ơn thầy cô - Gõ đệm trống Tambourine và xúc xắc Maracas`,
        `Chủ đề 3: Nhớ ơn thầy cô - Đọc nhạc kết hợp gõ phách nhịp nhàng`,
        `Chủ đề 4: Giai điệu quê hương - Học hát làn điệu Dân ca Việt Nam`,
        `Chủ đề 4: Giai điệu quê hương - Tìm hiểu Đàn Bầu, Đàn Nhị Việt Nam`,
        `Chủ đề 4: Giai điệu quê hương - Luyện tập biểu diễn tốp ca, đơn ca`,
        `Chủ đề 4: Giai điệu quê hương - Góc âm nhạc sáng tạo học sinh`,
        `Ôn tập và biểu diễn báo cáo âm nhạc Học kỳ 1 Lớp ${g}`,
        `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Âm nhạc ${g}`,
        `Chủ đề 5: Mùa xuân tươi đẹp - Học hát: Mùa xuân ơi / Nắng sớm`,
        `Chủ đề 5: Mùa xuân tươi đẹp - Đọc nhạc và gõ đệm tiết tấu vui tươi`,
        `Chủ đề 5: Mùa xuân tươi đẹp - Thường thức âm nhạc: Nhạc sĩ Văn Cao`,
        `Chủ đề 6: Ước mơ tuổi thơ - Học hát: Bay cao tiếng hát ước mơ`,
        `Chủ đề 6: Ước mơ tuổi thơ - Trình diễn nhạc cụ gõ đệm tiết tấu`,
        `Chủ đề 6: Ước mơ tuổi thơ - Trò chơi âm nhạc nghe giai điệu đoán bài`,
        `Chủ đề 6: Ước mơ tuổi thơ - Sáng tạo mẫu tiết tấu đệm cho bài hát`,
        `Kiểm tra, đánh giá giữa Học kỳ 2 môn Âm nhạc Lớp ${g}`,
        `Chủ đề 7: Gia đình yêu thương - Học hát: Mẹ yêu con / Cho con`,
        `Chủ đề 7: Gia đình yêu thương - Đọc nhạc theo thang âm chuẩn`,
        `Chủ đề 7: Gia đình yêu thương - Nghe nhạc cổ điển Mozart / Beethoven`,
        `Chủ đề 8: Chào mùa hè - Học hát: Dàn đồng ca mùa hạ`,
        `Chủ đề 8: Chào mùa hè - Hòa tấu nhạc cụ gõ và bộ gõ cơ thể`,
        `Dự án Âm nhạc: "Ngày hội Âm vang Tiếng hát Măng non & Biểu diễn nhạc cụ"`,
        `Ôn tập tổng hợp các bài hát và bài đọc nhạc cả năm Lớp ${g}`,
        `Báo cáo sản phẩm âm nhạc sáng tạo của các nhóm học sinh`,
        `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Âm nhạc ${g}`
      ]
    : [
        `Chủ đề 1: Sắc màu em yêu - Khám phá màu cơ bản và pha màu (Lớp ${g})`,
        `Chủ đề 1: Sắc màu em yêu - Vẽ tranh phong cảnh thiên nhiên rực rỡ`,
        `Chủ đề 1: Sắc màu em yêu - Xé dán giấy màu tạo hình động vật ngộ nghĩnh`,
        `Chủ đề 1: Sắc màu em yêu - Trưng bày và chia sẻ cảm nhận tác phẩm`,
        `Chủ đề 2: Ngôi trường thân yêu - Vẽ tranh chân dung thầy cô và bạn bè`,
        `Chủ đề 2: Ngôi trường thân yêu - Tạo hình lớp học từ vật liệu tái chế`,
        `Chủ đề 2: Ngôi trường thân yêu - Trang trí bìa sách và thời khóa biểu`,
        `Chủ đề 2: Ngôi trường thân yêu - Vẽ tranh giờ ra chơi sôi động`,
        `Kiểm tra, đánh giá giữa Học kỳ 1 môn Mĩ thuật Lớp ${g}`,
        `Chủ đề 3: Đồ vật thân quen - Vẽ mẫu tĩnh vật: Lọ hoa và quả`,
        `Chủ đề 3: Đồ vật thân quen - Nặn tạo dáng đồ gia dụng từ đất nặn`,
        `Chủ đề 3: Đồ vật thân quen - Trang trí chiếc đĩa / Chiếc túi xách xinh xắn`,
        `Chủ đề 4: Thế giới động vật - Vẽ và in tranh con vật từ lá cây`,
        `Chủ đề 4: Thế giới động vật - Tạo hình các loài cá đại dương 3D`,
        `Chủ đề 4: Thế giới động vật - Làm con rối ngón tay diễn kịch`,
        `Chủ đề 4: Thế giới động vật - Triển lãm khu rừng bí mật`,
        `Ôn tập và hoàn thiện hồ sơ sản phẩm Mĩ thuật Học kỳ 1 Lớp ${g}`,
        `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Mĩ thuật ${g}`,
        `Chủ đề 5: Lễ hội và Văn hóa - Vẽ tranh ngày Tết và lễ hội quê em`,
        `Chủ đề 5: Lễ hội và Văn hóa - Làm thiệp chúc Tết và bao lì xì sáng tạo`,
        `Chủ đề 5: Lễ hội và Văn hóa - Tạo hình trang phục truyền thống các dân tộc`,
        `Chủ đề 6: Quê hương đất nước - Vẽ tranh phong cảnh biển đảo quê hương`,
        `Chủ đề 6: Quê hương đất nước - Tạo hình di tích lịch sử bằng bìa carton`,
        `Chủ đề 6: Quê hương đất nước - Vẽ tranh cổ động bảo vệ môi trường`,
        `Chủ đề 6: Quê hương đất nước - Tranh in hoa văn thổ cẩm độc đáo`,
        `Kiểm tra, đánh giá giữa Học kỳ 2 môn Mĩ thuật Lớp ${g}`,
        `Chủ đề 7: Phương tiện giao thông - Vẽ và thiết kế xe ô tô / Tàu hỏa tương lai`,
        `Chủ đề 7: Phương tiện giao thông - Lắp ghép mô hình máy bay và khinh khí cầu`,
        `Chủ đề 7: Phương tiện giao thông - Vẽ tranh chấp hành an toàn giao thông`,
        `Chủ đề 8: Em là nhà thiết kế nhí - Thiết kế thời trang từ túi giấy`,
        `Chủ đề 8: Em là nhà thiết kế nhí - Làm đồ lưu niệm tặng người thân`,
        `Dự án Mĩ thuật: "Triển lãm Tranh Thiếu nhi Sáng tạo & Hội chợ Thủ công STEM"`,
        `Trưng bày toàn diện bộ sưu tập tác phẩm Mĩ thuật cả năm Lớp ${g}`,
        `Đánh giá quá trình rèn luyện cảm xúc thẩm mỹ và tư duy tạo hình`,
        `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết năm học môn Mĩ thuật ${g}`
      ];

  names.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    list.push({
      week: w,
      topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 1,
      yccd: getPrimaryLessonYccd(isMusic ? 'Âm nhạc' : 'Mĩ thuật', String(g), name, w),
      equipment: isMusic ? 'Đàn Organ, bộ gõ thanh phách, trống Tambourine, loa phát nhạc' : 'Giấy vẽ A4/A3, màu sáp, màu nước, đất nặn, kéo thủ công, bìa tái chế',
      location: isMusic ? 'Phòng học Âm nhạc' : 'Phòng học Mĩ thuật / Lớp học',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 33 ? 'Dự án Nghệ thuật sáng tạo' : ''
    });
  });

  return list;
}

// =========================================================================
// 10. GIÁO DỤC THỂ CHẤT TIỂU HỌC (LỚP 1 - 5) - KHUNG 70 TIẾT (2 TIẾT/TUẦN)
// =========================================================================
export function getGdtcPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const gdtcTopics = [
    `Đội hình đội ngũ: Tập hợp hàng dọc, dóng hàng, điểm số, đứng nghiêm, nghỉ (2 tiết)`,
    `Đội hình đội ngũ: Quay phải, quay trái, quay sau và dồn hàng, dàn hàng (2 tiết)`,
    `Bài thể dục phát triển chung: Động tác Vươn thở và Động tác Tay (2 tiết)`,
    `Bài thể dục phát triển chung: Động tác Chân và Động tác Lườn (2 tiết)`,
    `Bài thể dục phát triển chung: Động tác Bụng và Động tác Toàn thân (2 tiết)`,
    `Bài thể dục phát triển chung: Động tác Nhảy và Động tác Điều hòa (2 tiết)`,
    `Hoàn thiện Bài thể dục phát triển chung 8 động tác và Trò chơi vận động (2 tiết)`,
    `Tư thế và kỹ năng vận động cơ bản: Đi kiễng gót hai tay chống hông (2 tiết)`,
    `Kiểm tra, đánh giá giữa Học kỳ 1 môn Giáo dục thể chất Lớp ${g} (2 tiết)`,
    `Tư thế vận động cơ bản: Đi trên vạch kẻ thẳng hai tay giang ngang (2 tiết)`,
    `Tư thế vận động cơ bản: Chạy thay đổi hướng theo hiệu lệnh (2 tiết)`,
    `Tư thế vận động cơ bản: Bật nhảy về phía trước và tiếp đất an toàn (2 tiết)`,
    `Trò chơi vận động rèn luyện độ nhanh nhẹn và khéo léo (2 tiết)`,
    `Môn Thể thao tự chọn (Bóng đá mini / Cầu lông): Làm quen với bóng và chuyền bóng (2 tiết)`,
    `Thể thao tự chọn: Thực hành dẫn bóng và sút bóng vào cầu môn mini (2 tiết)`,
    `Thể thao tự chọn: Đấu tập mini có trọng tài và phối hợp đồng đội (2 tiết)`,
    `Ôn tập tổng hợp Đội hình đội ngũ, Bài thể dục và Kỹ năng vận động HK1 (2 tiết)`,
    `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Giáo dục thể chất ${g} (2 tiết)`,
    `Bài tập rèn luyện thể lực: Bật xa tại chỗ bằng hai chân (2 tiết)`,
    `Bài tập rèn luyện thể lực: Nhảy dây kiểu chụm hai chân / Chân trước chân sau (2 tiết)`,
    `Vận động cơ bản: Ném bóng trúng đích nằm ngang / Đích thẳng đứng (2 tiết)`,
    `Vận động cơ bản: Ném bóng xa bằng một tay trên vai (2 tiết)`,
    `Kỹ năng chạy bền: Chạy nhẹ nhàng quanh sân trường và điều hòa nhịp thở (2 tiết)`,
    `Trò chơi vận động dân gian: Cướp cờ, Mèo đuổi chuột, Nhảy bao bố (2 tiết)`,
    `Thể thao tự chọn: Kỹ thuật di chuyển đón bóng và tâng bóng (2 tiết)`,
    `Kiểm tra, đánh giá giữa Học kỳ 2 môn Giáo dục thể chất Lớp ${g} (2 tiết)`,
    `Thể thao tự chọn: Chiến thuật tấn công, phòng thủ cơ bản trong thi đấu (2 tiết)`,
    `Kiểm tra, đánh giá thể lực học sinh theo Quyết định số 53/2008/QĐ-BGDĐT: Chạy 30m xuất phát cao (2 tiết)`,
    `Kiểm tra thể lực: Bật xa tại chỗ và Nằm ngửa gập bụng theo chuẩn Bộ GD&ĐT (2 tiết)`,
    `Kiểm tra thể lực: Chạy con thoi 4 x 10m và Chạy bền 300m / 500m (2 tiết)`,
    `Ngày hội Thể thao Phù Đổng cấp trường: Giao lưu thi đấu kéo co và điền kinh (2 tiết)`,
    `Kỹ năng phòng chống đuối nước và an toàn trong môi trường nước (2 tiết)`,
    `Kỹ năng xử lý chấn thương thể thao nhẹ (Bong gân, chuột rút) và hồi phục thể lực (2 tiết)`,
    `Ôn tập toàn diện chuẩn bị kiểm tra đánh giá cuối năm môn Thể chất ${g} (2 tiết)`,
    `Kiểm tra, đánh giá cuối Học kỳ 2 & Tổng kết đánh giá thể lực cả năm môn GDTC ${g} (2 tiết)`
  ];

  gdtcTopics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    list.push({
      week: w,
      topic: name.includes('Kiểm tra') ? 'Đánh giá định kỳ' : name.split(':')[0],
      name: name,
      periods: 2,
      yccd: getPrimaryLessonYccd('Giáo dục thể chất', String(g), name, w),
      equipment: 'Sân tập sạch sẽ, còi, đồng hồ bấm giây, bóng, dây nhảy, nệm nhảy, vạch kẻ đường chạy',
      location: 'Sân trường / Nhà đa năng',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w >= 28 && w <= 30 ? 'Đánh giá thể lực QĐ 53' : ''
    });
  });

  return list;
}

// =========================================================================
// 11. HOẠT ĐỘNG TRẢI NGHIỆM TIỂU HỌC (LỚP 1 - 5) - KHUNG 105 TIẾT (3 TIẾT/TUẦN)
// =========================================================================
export function getHdtnPrimaryCurriculum(grade: string): RawPrimaryLesson[] {
  const g = parseInt(grade, 10) || 1;
  const list: RawPrimaryLesson[] = [];

  const hdtnTopics = [
    `Chủ đề 1: Em và nhà trường - Bài 1: Chào năm học mới và làm quen bạn bè (Lớp ${g} - 3 tiết)`,
    `Chủ đề 1: Em và nhà trường - Bài 2: Xây dựng nội quy lớp học và bầu ban cán sự lớp (3 tiết)`,
    `Chủ đề 2: Khám phá bản thân - Bài 1: Hình ảnh và sở thích độc đáo của em (3 tiết)`,
    `Chủ đề 2: Khám phá bản thân - Bài 2: Rèn luyện tính tự giác và gọn gàng ngăn nắp (3 tiết)`,
    `Chủ đề 3: Em với gia đình - Bài 1: Bày tỏ tình yêu thương và lòng biết ơn ông bà cha mẹ (3 tiết)`,
    `Chủ đề 3: Em với gia đình - Bài 2: Tham gia làm việc nhà vừa sức giúp đỡ cha mẹ (3 tiết)`,
    `Chủ đề 4: Rèn luyện kỹ năng sống - Bài 1: Lắng nghe tích cực và tôn trọng bạn bè (3 tiết)`,
    `Chủ đề 4: Rèn luyện kỹ năng sống - Bài 2: Kỹ năng phòng tránh tai nạn thương tích và xâm hại (3 tiết)`,
    `Kiểm tra, đánh giá giữa Học kỳ 1 môn Hoạt động trải nghiệm Lớp ${g} (3 tiết)`,
    `Chủ đề 5: Em với thầy cô và mái trường - Bài 1: Tri ân thầy cô giáo ngày 20/11 (3 tiết)`,
    `Chủ đề 5: Em với thầy cô - Bài 2: Giữ gìn trường lớp xanh - sạch - đẹp (3 tiết)`,
    `Chủ đề 6: Em với cộng đồng - Bài 1: Giao tiếp lịch sự nơi công cộng (3 tiết)`,
    `Chủ đề 6: Em với cộng đồng - Bài 2: Tham gia quyên góp giúp đỡ bạn nghèo vượt khó (3 tiết)`,
    `Chủ đề 7: Em với thiên nhiên - Bài 1: Chăm sóc và bảo vệ cây xanh vườn trường (3 tiết)`,
    `Chủ đề 7: Em với thiên nhiên - Bài 2: Giảm thiểu rác thải nhựa và tiết kiệm điện nước (3 tiết)`,
    `Chủ đề 8: Khám phá nghề nghiệp - Bài 1: Tìm hiểu các nghề nghiệp quen thuộc quanh em (3 tiết)`,
    `Ôn tập và báo cáo sản phẩm trải nghiệm sáng tạo Học kỳ 1 Lớp ${g} (3 tiết)`,
    `Kiểm tra, đánh giá cuối Học kỳ 1 & Sơ kết HK1 môn Hoạt động trải nghiệm ${g} (3 tiết)`,
    `Chủ đề 9: Tết yêu thương - Bài 1: Tìm hiểu phong tục Tết cổ truyền dân tộc (3 tiết)`,
    `Chủ đề 9: Tết yêu thương - Bài 2: Làm thiệp chúc Tết và trang trí cành đào, cành mai (3 tiết)`,
    `Chủ đề 10: An toàn giao thông - Bài 1: Chấp hành luật an toàn giao thông đường bộ (3 tiết)`,
    `Chủ đề 10: An toàn giao thông - Bài 2: Đội mũ bảo hiểm đúng cách khi đi xe máy, xe đạp điện (3 tiết)`,
    `Chủ đề 11: Em yêu quê hương - Bài 1: Tìm hiểu danh lam thắng cảnh và di tích quê em (3 tiết)`,
    `Chủ đề 11: Em yêu quê hương - Bài 2: Giữ gìn nét đẹp văn hóa và lễ hội truyền thống (3 tiết)`,
    `Chủ đề 12: Khám phá nghề truyền thống - Bài 1: Tìm hiểu làng nghề thủ công tại địa phương (3 tiết)`,
    `Kiểm tra, đánh giá giữa Học kỳ 2 môn Hoạt động trải nghiệm Lớp ${g} (3 tiết)`,
    `Chủ đề 12: Khám phá nghề truyền thống - Bài 2: Trải nghiệm làm sản phẩm thủ công đơn giản (3 tiết)`,
    `Chủ đề 13: Bảo vệ môi trường - Bài 1: Phân loại rác thải tái chế tại nguồn (3 tiết)`,
    `Dự án Trải nghiệm: "Hội chợ Kế hoạch nhỏ & Gian hàng Trao đổi Sách cũ" (Tiết 1 - 3 tiết)`,
    `Dự án Trải nghiệm: Ngày hội việc tốt và lan tỏa tình yêu thương (Tiết 2 - 3 tiết)`,
    `Chủ đề 14: Ước mơ của em - Bài 1: Nuôi dưỡng ước mơ tương lai và rèn luyện chăm chỉ (3 tiết)`,
    `Chủ đề 14: Ước mơ của em - Bài 2: Xây dựng kế hoạch rèn luyện trong kỳ nghỉ hè (3 tiết)`,
    `Báo cáo và trưng bày Portfolio hồ sơ trải nghiệm học sinh cả năm (3 tiết)`,
    `Ôn tập toàn diện chuẩn bị tổng kết năm học Hoạt động trải nghiệm ${g} (3 tiết)`,
    `Kiểm tra, đánh giá cuối Học kỳ 2 & Ngày hội Tổng kết Hoạt động trải nghiệm cả năm (3 tiết)`
  ];

  hdtnTopics.forEach((name, idx) => {
    const w = idx + 1;
    if (w > 35) return;
    list.push({
      week: w,
      topic: name.includes('Chủ đề') ? name.split(' - ')[0] : 'Đánh giá định kỳ',
      name: name,
      periods: 3,
      yccd: getPrimaryLessonYccd('Hoạt động trải nghiệm', String(g), name, w),
      equipment: 'Máy chiếu, video tình huống, phiếu học tập, đạo cụ trò chơi trải nghiệm',
      location: 'Lớp học / Sân trường / Hội trường',
      notes: w === 9 || w === 26 ? 'Kiểm tra giữa kỳ' : w === 18 || w === 35 ? 'Kiểm tra cuối kỳ' : w === 29 ? 'Hội chợ Kế hoạch nhỏ' : ''
    });
  });

  return list;
}

// =========================================================================
// MASTER RESOLVER FOR PRIMARY CURRICULUM (LỚP 1 - 5)
// =========================================================================
export function buildPrimaryCurriculum(subject: string, grade: string, schoolType: SchoolType): CurriculumItem[] {
  const s = subject.toLowerCase().trim();
  const g = grade.trim();
  const isEnglish = s.includes('tiếng anh') || s.includes('tieng anh') || s.includes('english') || s.includes('ngoại ngữ');

  let rawList: RawPrimaryLesson[] = [];

  if (isEnglish) {
    rawList = getEnglishPrimaryCurriculum(g);
  } else if (s.includes('toán') || s.includes('toan')) {
    rawList = getMathPrimaryCurriculum(g);
  } else if (s.includes('tiếng việt') || s.includes('tieng viet') || s.includes('văn')) {
    rawList = getVietnamesePrimaryCurriculum(g);
  } else if (s.includes('thể chất') || s.includes('gdtc') || s.includes('thể dục') || s.includes('the chat')) {
    rawList = getGdtcPrimaryCurriculum(g);
  } else if (s.includes('tự nhiên và xã hội') || s.includes('khoa học') || s.includes('tnxh') || s.includes('tu nhien')) {
    rawList = getSciencePrimaryCurriculum(g, subject);
  } else if (s.includes('lịch sử và địa lý') || s.includes('lịch sử') || s.includes('địa lý') || s.includes('lich su')) {
    rawList = getHistoryGeoPrimaryCurriculum(g);
  } else if (s.includes('tin học') || s.includes('tin hoc') || s.includes('it') || s.includes('informatics')) {
    rawList = getTinHocPrimaryCurriculum(g);
  } else if (s.includes('công nghệ') || s.includes('cong nghe')) {
    rawList = getTechnologyPrimaryCurriculum(g);
  } else if (s.includes('đạo đức') || s.includes('dao duc')) {
    rawList = getEthicsPrimaryCurriculum(g);
  } else if (s.includes('âm nhạc') || s.includes('am nhac') || s.includes('mĩ thuật') || s.includes('mỹ thuật')) {
    rawList = getMusicArtPrimaryCurriculum(g, subject);
  } else {
    rawList = getHdtnPrimaryCurriculum(g);
  }

  return rawList.map((item, idx) => {
    // Sinh YCCĐ ĐỘC LẬP RIÊNG BIỆT CHO TỪNG BÀI
    const customYccd = isEnglish ? (item.yccd ?? '') : (item.yccd || getPrimaryLessonYccd(subject, g, item.name, item.week));

    const lessonCtx = {
      lessonName: item.name,
      topic: item.topic,
      yccd: customYccd,
      subject,
      lessonIndex: idx
    };

    const nls = isEnglish
      ? getNlsCodeForEnglishLesson(g, schoolType, lessonCtx)
      : getNlsCodeForSubjectLesson(g, schoolType, lessonCtx);

    const ai = isEnglish
      ? getAiCodeForEnglishLesson(g, lessonCtx)
      : getAiCodeForSubjectLesson(g, lessonCtx);

    return {
      id: `curr-pri-${g}-${idx + 1}`,
      stt: idx + 1,
      topic: item.topic,
      lessonName: item.name,
      periods: item.periods,
      week: isEnglish ? `Week ${item.week}` : `Tuần ${item.week}`,
      yccd: customYccd,
      equipment: item.equipment,
      location: item.location,
      nlsCode: nls.code,
      aiCode: ai.code,
      digitalCompetency: isEnglish
        ? `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}`
        : `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`,
      notes: item.notes || (item.name.includes('Dự án') || item.name.includes('STEM') ? 'Tích hợp STEM & Năng lực số' : '')
    };
  });
}
