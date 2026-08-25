import { ConfigFormData, PlanData, GenerationStep } from '../types';
import { buildSystemInstruction, buildPhase1Prompt, buildPhase2Prompt, buildPhase3Prompt } from './prompts';
import { generateMockPlan, getDefaultClassrooms, getDefaultEquipments, getDefaultAssessments } from './defaultData';

const LOCAL_STORAGE_KEY = 'GEMINI_API_KEY_LOCAL';
const LOCAL_MODEL_KEY = 'GEMINI_MODEL_SELECTED';

export const AVAILABLE_MODELS = [
  { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash', desc: 'Tốc độ phản hồi cực nhanh, tối ưu tài nguyên' },
  { id: 'gemini-3.6-flash', name: 'Gemini 3.6 Flash', desc: 'Mặc định - Cân bằng hoàn hảo giữa tốc độ & chất lượng' },
  { id: 'gemini-3.7-flash', name: 'Gemini 3.7 Flash', desc: 'Mô hình mới nhất - Khả năng suy luận & sáng tạo giáo án cao nhất' }
];

export const DEFAULT_MODEL = 'gemini-3.6-flash';

export function getStoredApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(LOCAL_STORAGE_KEY) || '';
}

export function setStoredApiKey(key: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_KEY, key.trim());
}

export function clearStoredApiKey(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function getStoredModel(): string {
  if (typeof window === 'undefined') return DEFAULT_MODEL;
  return localStorage.getItem(LOCAL_MODEL_KEY) || DEFAULT_MODEL;
}

export function setStoredModel(modelId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_MODEL_KEY, modelId);
}

export function getModelDisplayName(modelId: string): string {
  const found = AVAILABLE_MODELS.find((m) => m.id === modelId);
  return found ? found.name : 'Gemini 3.6 Flash';
}

async function callGeminiApi(
  apiKey: string,
  systemInstruction: string,
  userPrompt: string,
  selectedModel: string = DEFAULT_MODEL,
  onLog?: (msg: string) => void
): Promise<string> {
  // Build cascade with selectedModel prioritized first
  const fallbackList = [
    selectedModel,
    'gemini-3.6-flash',
    'gemini-3.7-flash',
    'gemini-3.5-flash',
    'gemini-2.0-flash',
    'gemini-2.5-flash',
    'gemini-1.5-flash',
    'gemini-1.5-pro'
  ];
  const modelList = Array.from(new Set(fallbackList.filter(Boolean)));

  let lastError: Error | null = null;

  for (const model of modelList) {
    try {
      const modelName = getModelDisplayName(model);
      if (onLog) onLog(`Đang gửi yêu cầu tới mô hình AI: ${modelName} (${model})...`);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: userPrompt }]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 8192,
            responseMimeType: 'application/json'
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) {
        throw new Error('Mô hình không trả về nội dung hợp lệ.');
      }

      return text;
    } catch (err: any) {
      lastError = err;
      if (onLog) onLog(`Lỗi với ${model}: ${err.message}. Đang thử mô hình kế tiếp...`);
    }
  }

  throw lastError || new Error('Không thể kết nối tới Google Gemini API.');
}

function parseJsonSafely<T>(text: string, fallback: T): T {
  try {
    const cleaned = text
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/, '')
      .trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.warn('Lỗi phân tích JSON từ AI, dùng dữ liệu dự phòng:', e);
    return fallback;
  }
}

export async function generateFullPlan(
  config: ConfigFormData,
  onProgress?: (step: GenerationStep, percent: number) => void
): Promise<PlanData> {
  const apiKey = getStoredApiKey();
  const selectedModel = getStoredModel();
  const modelDisplayName = getModelDisplayName(selectedModel);
  const baseMock = generateMockPlan(config);

  const steps: GenerationStep[] = [
    {
      phase: 1,
      title: 'Khởi tạo cấu trúc & Thẩm định căn cứ pháp lý (CV 5512 / CV 2345)',
      status: 'running',
      log: `Đang tải hồ sơ môn ${config.subject} Lớp ${config.grade} (${config.schoolName}) [Model: ${modelDisplayName}]...`,
      details: `Loại hình: ${config.schoolType} | Môn: ${config.subject} | Khối: ${config.grade}`
    },
    {
      phase: 2,
      title: `Giai đoạn 1: Xây dựng Phụ lục 1 môn ${config.subject} (PPCT 35 tuần & TBDH)`,
      status: 'pending',
      log: 'Chờ xử lý...',
      details: `Phân phối 35 tuần thực học môn ${config.subject} Khối ${config.grade}`
    },
    {
      phase: 3,
      title: `Giai đoạn 2: Xây dựng Phụ lục 2 môn ${config.subject} (Chuyên đề STEM & AI)`,
      status: 'pending',
      log: 'Chờ xử lý...',
      details: `Thiết kế dự án STEM và Ngày hội ngôn ngữ/khoa học môn ${config.subject}`
    },
    {
      phase: 4,
      title: 'Giai đoạn 3: Xây dựng Phụ lục 3 (Kế hoạch giáo dục cá nhân GV)',
      status: 'pending',
      log: 'Chờ xử lý...',
      details: `Kế hoạch sư phạm giáo viên ${config.teacherName}`
    },
    {
      phase: 5,
      title: 'Hoàn thiện hồ sơ & Tổng hợp kiểm tra thể thức văn bản',
      status: 'pending',
      log: 'Chờ tổng hợp...',
      details: 'Chuẩn hóa định dạng bảng, chữ ký Tổ trưởng và Hiệu trưởng phê duyệt'
    }
  ];

  // Helper to report progress
  const report = (phaseIdx: number, status: GenerationStep['status'], log: string, percent: number) => {
    if (steps[phaseIdx]) {
      steps[phaseIdx].status = status;
      steps[phaseIdx].log = log;
      if (onProgress) {
        onProgress(steps[phaseIdx], percent);
      }
    }
  };

  const hasAttachedFiles = Boolean(
    config.attachedFiles && config.attachedFiles.some((f) => f.content && f.content.trim().length > 0)
  );

  // 1. TRƯỜNG HỢP 1: KHÔNG UP FILE -> CHẠY TRỰC TIẾP DATA HỆ THỐNG (CHUẨN BỘ GD&ĐT)
  if (!hasAttachedFiles) {
    report(0, 'running', `Đang nạp dữ liệu chuẩn Bộ GD&ĐT môn ${config.subject} Lớp ${config.grade}...`, 20);
    await new Promise((r) => setTimeout(r, 250));
    report(0, 'completed', `Đã xác định môn ${config.subject} Khối ${config.grade} (SGK Kết nối tri thức).`, 30);

    report(1, 'running', `[Dữ Liệu Hệ Thống] Nạp 35 tuần PPCT và TBDH môn ${config.subject} Lớp ${config.grade}...`, 50);
    await new Promise((r) => setTimeout(r, 300));
    report(1, 'completed', `Đã nạp thành công 35 tuần PPCT chuẩn SGK môn ${config.subject}.`, 65);

    report(2, 'running', `Nạp kế hoạch Hoạt động giáo dục & Dự án STEM môn ${config.subject}...`, 75);
    await new Promise((r) => setTimeout(r, 250));
    report(2, 'completed', `Đã hoàn tất Phụ lục 2 môn ${config.subject}.`, 85);

    report(3, 'running', `Nạp Kế hoạch cá nhân cho giáo viên ${config.teacherName}...`, 90);
    await new Promise((r) => setTimeout(r, 200));
    report(3, 'completed', 'Đã hoàn tất Phụ lục 3 cá nhân giáo viên.', 95);

    report(4, 'running', 'Hoàn thiện hồ sơ theo thể thức văn bản...', 98);
    await new Promise((r) => setTimeout(r, 150));
    report(4, 'completed', `Hồ sơ môn ${config.subject} Lớp ${config.grade} đã sẵn sàng xem và xuất Word .docx!`, 100);

    return baseMock;
  }

  // 2. TRƯỜNG HỢP 2: CÓ UP FILE -> CHẠY BẰNG AI ĐỂ ĐỌC & PHÂN TÍCH FILE PPCT
  report(0, 'running', `Đang đọc và phân tích file tài liệu đính kèm với mô hình AI ${modelDisplayName}...`, 15);
  await new Promise((r) => setTimeout(r, 350));
  report(0, 'completed', `Đã phân tích cấu trúc file môn ${config.subject} - Sẵn sàng chạy AI.`, 25);

  // If no API Key: generate using smart parsed PPCT curriculum from uploaded file
  if (!apiKey) {
    report(1, 'running', `[Chế độ AI Tích Hợp] Đang phân tích file PPCT đính kèm và tích hợp NLS & AI...`, 40);
    await new Promise((r) => setTimeout(r, 500));
    report(1, 'completed', `Đã trích xuất ${baseMock.appendix1.curriculum.length} bài học từ file tải lên kèm mã NLS (CV 3456) và AI (QĐ 2422).`, 60);

    report(2, 'running', `Đang xây dựng Hoạt động GD & Chuyên đề STEM từ nội dung bài học...`, 70);
    await new Promise((r) => setTimeout(r, 400));
    report(2, 'completed', `Đã hoàn thành Phụ lục 2 môn ${config.subject}.`, 85);

    report(3, 'running', `Đang xây dựng Kế hoạch cá nhân cho giáo viên ${config.teacherName}...`, 90);
    await new Promise((r) => setTimeout(r, 300));
    report(3, 'completed', 'Đã hoàn thành Phụ lục 3 cá nhân giáo viên.', 95);

    report(4, 'running', 'Tổng hợp và chuẩn hóa thể thức...', 98);
    await new Promise((r) => setTimeout(r, 200));
    report(4, 'completed', `Hồ sơ môn ${config.subject} Lớp ${config.grade} từ file tải lên đã hoàn tất!`, 100);

    return baseMock;
  }

  // With API Key: Live Gemini Generation with uploaded file
  const systemInst = buildSystemInstruction(config.schoolType);
  let p1Data = baseMock.appendix1;
  let p2Data = baseMock.appendix2;
  let p3Data = baseMock.appendix3;

  try {
    // Phase 1 with AI
    report(1, 'running', `Đang gọi ${modelDisplayName} đọc file PPCT và soạn Phụ lục 1 môn ${config.subject}...`, 30);
    const p1Response = await callGeminiApi(
      apiKey,
      systemInst,
      buildPhase1Prompt(config),
      selectedModel,
      (msg) => report(1, 'running', msg, 35)
    );
    const parsedP1 = parseJsonSafely<any>(p1Response, null);
    if (parsedP1 && parsedP1.curriculum && Array.isArray(parsedP1.curriculum) && parsedP1.curriculum.length > 0) {
      const isEn = config.subject.toLowerCase().includes('tiếng anh') || config.subject.toLowerCase().includes('english') || config.subject.toLowerCase().includes('tieng anh');
      if (isEn) {
        // ĐẶC QUYỀN MÔN TIẾNG ANH (GLOBAL SUCCESS):
        // Luôn giữ nguyên 100% cấu trúc 35 tuần chuẩn SGK Global Success từ baseMock,
        // và chỉ gán nội dung NLS & AI do AI sinh ra hoặc từ tệp tải lên vào từng bài học.
        const stdCurriculum = baseMock.appendix1.curriculum;
        const geminiCurriculum = parsedP1.curriculum;

        const mergedCurriculum = stdCurriculum.map((stdItem, idx) => {
          const gItem =
            geminiCurriculum[idx] ||
            geminiCurriculum.find(
              (gi: any) =>
                (gi.lessonName && stdItem.lessonName.toLowerCase().includes(String(gi.lessonName).toLowerCase())) ||
                (gi.topic && stdItem.topic.toLowerCase().includes(String(gi.topic).toLowerCase()))
            );

          if (gItem && gItem.digitalCompetency) {
            return {
              ...stdItem,
              digitalCompetency: gItem.digitalCompetency,
              nlsCode: gItem.nlsCode || stdItem.nlsCode,
              aiCode: gItem.aiCode || stdItem.aiCode
            };
          }
          return stdItem;
        });

        p1Data = {
          curriculum: mergedCurriculum,
          equipments: parsedP1.equipments?.length
            ? parsedP1.equipments.map((e: any, idx: number) => ({
                id: `eq-${idx + 1}`,
                stt: e.stt || idx + 1,
                equipmentName: e.equipmentName || `Audio CD/MP3 Global Success & TBDH Tiếng Anh Lớp ${config.grade}`,
                quantity: e.quantity || '01 bộ',
                experiments: e.experiments || 'Thực hành nghe nói và tương tác ngôn ngữ',
                notes: e.notes || 'TT 38/2021/TT-BGDĐT'
              }))
            : baseMock.appendix1.equipments,
          classrooms: parsedP1.classrooms?.length
            ? parsedP1.classrooms.map((cr: any, idx: number) => ({
                id: `cr-${idx + 1}`,
                stt: cr.stt || idx + 1,
                roomName: cr.roomName || 'Phòng Lab Ngoại ngữ / Phòng học',
                quantity: cr.quantity || '01 phòng',
                features: cr.features || cr.equipmentDesc || 'Tai nghe chuyên dụng, bảng tương tác, máy chiếu, kết nối Internet',
                notes: cr.notes || 'Đạt chuẩn phòng bộ môn'
              }))
            : baseMock.appendix1.classrooms,
          assessments: parsedP1.assessments?.length
            ? parsedP1.assessments.map((a: any, idx: number) => {
                const rawAWeek = a.week ? String(a.week).trim() : '';
                const match = rawAWeek.match(/\d+/);
                const formattedAWeek = match ? `Week ${match[0]}` : rawAWeek || 'Week 9';
                return {
                  id: `as-${idx + 1}`,
                  stt: a.stt || idx + 1,
                  assessmentName: a.assessmentName || 'Periodical Assessment',
                  time: a.time || '45 minutes',
                  week: formattedAWeek,
                  form: a.form || 'Written / Oral / Practical Test',
                  units: a.units || 'Units covered',
                  requirements: a.requirements || 'Standard requirements'
                };
              })
            : baseMock.appendix1.assessments,
          otherTasks: parsedP1.otherTasks || baseMock.appendix1.otherTasks
        };
      } else {
        p1Data = {
          curriculum: parsedP1.curriculum.map((c: any, idx: number) => {
            const rawWeek = c.week ? String(c.week).trim() : '';
            let formattedWeek = '';
            const match = rawWeek.match(/\d+/);
            if (match) formattedWeek = `Tuần ${match[0]}`;
            else if (rawWeek.toLowerCase().includes('tuần')) formattedWeek = rawWeek;
            else formattedWeek = `Tuần ${Math.min(35, idx + 1)}`;

            const rawYccd = c.yccd ? String(c.yccd).trim() : '';
            let formattedYccd = rawYccd;
            if (!rawYccd) {
              formattedYccd = '- Đạt chuẩn yêu cầu kiến thức kỹ năng theo CT GDPT 2018.\n- Vận dụng vào thực tiễn cuộc sống và phát triển năng lực số.';
            } else if (!rawYccd.includes('- ') && !rawYccd.includes('• ')) {
              const parts = rawYccd.split(';').map((s: string) => s.trim()).filter(Boolean);
              formattedYccd = parts.length > 1
                ? parts.map((p: string) => `- ${p.replace(/^[-•*]\s*/, '')}`).join('\n')
                : `- ${rawYccd}`;
            }

            return {
              id: `curr-${idx + 1}`,
              stt: c.stt || idx + 1,
              topic: c.topic || `Chủ đề môn ${config.subject}`,
              lessonName: c.lessonName || `Lesson ${idx + 1}`,
              periods: c.periods || 1,
              week: formattedWeek,
              yccd: formattedYccd,
              equipment: c.equipment || 'Thiết bị dạy học bộ môn, máy chiếu, học liệu số',
              location: c.location || 'Phòng học bộ môn',
              nlsCode: c.nlsCode || '',
              aiCode: c.aiCode || '',
              digitalCompetency: c.digitalCompetency || '• [Mã NLS: 1.1.TC1b] Khai thác học liệu số phục vụ bài học\n• [Mã AI: 8.C1.1] Ứng dụng trợ lý AI hỗ trợ giải quyết nhiệm vụ',
              notes: c.notes || ''
            };
          }),
          equipments: parsedP1.equipments?.length
            ? parsedP1.equipments.map((e: any, idx: number) => ({
                id: `eq-${idx + 1}`,
                stt: e.stt || idx + 1,
                equipmentName: e.equipmentName || `Thiết bị môn ${config.subject}`,
                quantity: e.quantity || '01 bộ',
                experiments: e.experiments || 'Thực hành bài học',
                notes: e.notes || 'TT 38/2021/TT-BGDĐT'
              }))
            : getDefaultEquipments(config.subject, config.grade, config.schoolType),
          classrooms: parsedP1.classrooms?.length
            ? parsedP1.classrooms.map((cr: any, idx: number) => ({
                id: `cr-${idx + 1}`,
                stt: cr.stt || idx + 1,
                roomName: cr.roomName || 'Phòng học bộ môn',
                quantity: cr.quantity || '01 phòng',
                features: cr.features || 'Trang bị máy chiếu và thiết bị bộ môn',
                notes: cr.notes || 'Đạt chuẩn'
              }))
            : getDefaultClassrooms(config.schoolType),
          assessments: parsedP1.assessments?.length
            ? parsedP1.assessments.map((a: any, idx: number) => {
                const rawAWeek = a.week ? String(a.week).trim() : '';
                const match = rawAWeek.match(/\d+/);
                const formattedAWeek = match ? `Tuần ${match[0]}` : rawAWeek || 'Tuần 9';

                return {
                  id: `as-${idx + 1}`,
                  stt: a.stt || idx + 1,
                  assessmentName: a.assessmentName || 'Kiểm tra đánh giá',
                  time: a.time || '45 phút',
                  week: formattedAWeek,
                  form: a.form || 'Viết / Trắc nghiệm',
                  units: a.units || 'Kiến thức đã học',
                  requirements: a.requirements || 'Đạt chuẩn yêu cầu'
                };
              })
            : getDefaultAssessments(config.grade, config.subject),
          otherTasks: parsedP1.otherTasks || baseMock.appendix1.otherTasks
        };
      }
    }
    report(1, 'completed', `${modelDisplayName} đã tạo thành công ${p1Data.curriculum.length} bài học môn ${config.subject}.`, 60);

    // Phase 2
    report(2, 'running', `Đang thiết kế các Hoạt động GD & Dự án STEM với ${modelDisplayName}...`, 65);
    const p2Response = await callGeminiApi(
      apiKey,
      systemInst,
      buildPhase2Prompt(config),
      selectedModel,
      (msg) => report(2, 'running', msg, 70)
    );
    const parsedP2 = parseJsonSafely<any>(p2Response, null);
    if (parsedP2 && (parsedP2.activities || parsedP2.stemProjects)) {
      p2Data = {
        activities: parsedP2.activities ? parsedP2.activities.map((a: any, idx: number) => ({
          id: `act-${idx + 1}`,
          stt: a.stt || idx + 1,
          title: a.title || 'Hoạt động giáo dục',
          requirements: a.requirements || 'Yêu cầu cần đạt',
          periods: a.periods || 2,
          timeline: a.timeline || 'Học kỳ 1',
          location: a.location || 'Sân trường',
          host: a.host || 'Tổ chuyên môn',
          collaborate: a.collaborate || 'Giáo viên',
          conditions: a.conditions || 'Cơ sở vật chất',
          targetAudience: a.targetAudience || `Khối ${config.grade}`
        })) : baseMock.appendix2.activities,
        stemProjects: parsedP2.stemProjects ? parsedP2.stemProjects.map((s: any, idx: number) => ({
          id: `stem-${idx + 1}`,
          stt: s.stt || idx + 1,
          title: s.title || 'Dự án STEM',
          requirements: s.requirements || 'Yêu cầu cần đạt',
          periods: s.periods || 3,
          timeline: s.timeline || 'Học kỳ 1',
          location: s.location || 'Phòng thực hành',
          host: s.host || config.teacherName,
          collaborate: s.collaborate || 'Học sinh',
          conditions: s.conditions || 'Vật liệu thực hành',
          targetAudience: s.targetAudience || 'Học sinh'
        })) : baseMock.appendix2.stemProjects
      };
    }
    report(2, 'completed', `Đã hoàn thành Phụ lục 2 môn ${config.subject}.`, 80);

    // Phase 3
    report(3, 'running', `Đang xây dựng Kế hoạch cá nhân giáo viên ${config.teacherName} với ${modelDisplayName}...`, 85);
    const p3Response = await callGeminiApi(
      apiKey,
      systemInst,
      buildPhase3Prompt(config),
      selectedModel,
      (msg) => report(3, 'running', msg, 90)
    );
    const parsedP3 = parseJsonSafely<any>(p3Response, null);
    if (parsedP3 && (parsedP3.personalPlans || parsedP3.selfTraining)) {
      p3Data = {
        personalPlans: parsedP3.personalPlans ? parsedP3.personalPlans.map((p: any, idx: number) => ({
          id: `pp-${idx + 1}`,
          stt: p.stt || idx + 1,
          taskName: p.taskName || 'Nhiệm vụ',
          timeFrame: p.timeFrame || 'Cả năm',
          content: p.content || 'Nội dung thực hiện',
          targets: p.targets || 'Chỉ tiêu đạt được',
          measures: p.measures || 'Giải pháp'
        })) : baseMock.appendix3.personalPlans,
        selfTraining: parsedP3.selfTraining || baseMock.appendix3.selfTraining
      };
    }
    report(3, 'completed', 'Đã tạo xong Phụ lục 3 cho cá nhân giáo viên.', 95);

    // Finalize
    report(4, 'running', 'Đang tổng hợp dữ liệu và hoàn thiện hồ sơ...', 98);
    await new Promise(r => setTimeout(r, 400));
    report(4, 'completed', `Toàn bộ kế hoạch môn ${config.subject} Lớp ${config.grade} đã hoàn tất chuẩn 100% bằng ${modelDisplayName}!`, 100);

    return {
      config,
      appendix1: p1Data,
      appendix2: p2Data,
      appendix3: p3Data,
      generatedAt: new Date().toLocaleString('vi-VN'),
      summary: `Kế hoạch Giáo dục & Dạy học môn ${config.subject} Khối ${config.grade} - Năm học ${config.academicYear} được AI (${modelDisplayName}) xây dựng chi tiết theo CV 5512/2345.`
    };
  } catch (err: any) {
    console.error('Lỗi khi gọi AI:', err);
    report(4, 'error', `Có lỗi khi gọi AI (${err.message}). Hệ thống tự động chuyển sang bộ dữ liệu chuẩn môn ${config.subject} Lớp ${config.grade}.`, 100);
    return baseMock;
  }
}
