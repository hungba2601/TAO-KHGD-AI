'use client';

import React, { useState } from 'react';
import { FileText, Download, Search, Sparkles, BookOpen, Layers, Edit3, Check } from './icons';
import { PlanData, TeacherLessonPlanItem } from '../types';
import { exportAppendix3Docx } from '../lib/docxExport';

interface Appendix3ViewProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
}

export const Appendix3View: React.FC<Appendix3ViewProps> = ({ planData, onUpdatePlan }) => {
  const { config, appendix1, appendix3 } = planData;
  const isEn =
    config.subject.toLowerCase().includes('tiếng anh') ||
    config.subject.toLowerCase().includes('english') ||
    config.subject.toLowerCase().includes('tieng anh');

  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // Lấy dữ liệu giảng dạy trực tiếp từ appendix1.curriculum hoặc appendix3.teachingPlan
  const teachingItems: TeacherLessonPlanItem[] =
    appendix3.teachingPlan && appendix3.teachingPlan.length > 0
      ? appendix3.teachingPlan
      : appendix1.curriculum.map((c, index) => ({
          id: `tp-${c.id || index + 1}`,
          stt: index + 1,
          lessonName: c.lessonName,
          periods: c.periods,
          timeline: typeof c.week === 'number' ? (isEn ? `Week ${c.week}` : `Tuần ${c.week}`) : (isEn ? String(c.week).replace(/tuần\s*/i, 'Week ') : c.week),
          equipment: c.equipment || (isEn ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Loudspeaker, Flashcards, LMS' : 'Máy tính, máy chiếu/Tivi, SGK, phần mềm dạy học'),
          location: c.location || (isEn ? 'English Language Lab / Classroom' : (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn')),
          digitalCompetency: c.digitalCompetency || '',
          nlsCode: c.nlsCode || '',
          aiCode: c.aiCode || '',
          notes: c.notes || ''
        }));

  const filteredItems = teachingItems.filter(
    (item) =>
      item.lessonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.timeline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.digitalCompetency && item.digitalCompetency.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleUpdateItem = (id: string, field: keyof TeacherLessonPlanItem, value: any) => {
    const updated = teachingItems.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onUpdatePlan({
      ...planData,
      appendix3: {
        ...appendix3,
        teachingPlan: updated
      }
    });
  };

  const otherDuties = appendix3.otherDuties || {
    advancedTraining: appendix1.otherTasks.advancedTraining,
    remedialTeaching: appendix1.otherTasks.remedialTeaching,
    scienceResearch: isEn
      ? `Guide students in scientific research projects, STEM creations and digital AI applications.`
      : `Hướng dẫn học sinh nghiên cứu khoa học kỹ thuật, sáng tạo sản phẩm STEM và ứng dụng công nghệ số / AI cấp trường.`,
    extracurricularAndDuties: appendix1.otherTasks.otherActivities
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Control & Action bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isEn ? "Search lesson, week, equipment, digital AI..." : "Tìm kiếm bài học, tuần, thiết bị, phòng học, NLS/AI..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={() => exportAppendix3Docx(planData)}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Xuất Phụ lục 3 (.docx)
          </button>
        </div>
      </div>

      {/* Document Sheet */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-md space-y-8 font-serif">
        {/* Document Header Standard */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 text-center font-sans">
          <div className="space-y-1 text-xs">
            <p className="text-slate-600 dark:text-slate-400 uppercase">{config.governingBody}</p>
            <p className="font-bold text-slate-900 dark:text-white uppercase">{config.schoolName}</p>
            <p className="font-bold text-amber-700 dark:text-amber-400 uppercase">TỔ: {config.departmentName}</p>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              Họ và tên giáo viên: <span className="text-amber-600 font-bold">{config.teacherName}</span>
            </p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-bold text-slate-900 dark:text-white">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2 font-sans">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            PHỤ LỤC 3: KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN
          </h2>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">
            MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC: <span className="text-amber-600">{config.subject}</span>, LỚP:{' '}
            <span className="text-amber-600">{config.grade}</span>
          </p>
          <p className="text-xs text-slate-500 italic">Năm học: {config.academicYear}</p>
        </div>

        {/* Section 1: Kế hoạch dạy học */}
        <div className="space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
              I. {isEn ? 'Teaching Syllabus & Schedule (Kế hoạch Dạy học)' : 'Kế hoạch Dạy học'}
            </h3>
            <span className="text-xs text-slate-500">1. {isEn ? `Teaching Syllabus (${filteredItems.length} ${filteredItems.length > 1 ? 'lessons/periods' : 'lesson/period'})` : `Phân phối chương trình (${filteredItems.length} bài/tiết)`}</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold text-center">
                  <th className="p-3 w-12 border-r border-slate-200 dark:border-slate-700">STT</th>
                  <th className="p-3 text-left border-r border-slate-200 dark:border-slate-700">{isEn ? 'Lesson (Bài học)' : 'Bài học'}</th>
                  <th className="p-3 w-16 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Periods' : 'Số tiết'}</th>
                  <th className="p-3 w-20 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Timeline' : 'Thời điểm'}</th>
                  <th className="p-3 w-52 text-left border-r border-slate-200 dark:border-slate-700">{isEn ? 'Teaching Equipment (Thiết bị dạy học)' : 'Thiết bị dạy học'}</th>
                  <th className="p-3 w-64 text-left border-r border-slate-200 dark:border-slate-700">{isEn ? 'Location & Digital Competency / AI' : 'Địa điểm & Năng lực số / AI'}</th>
                  <th className="p-3 w-12">{isEn ? 'Edit' : 'Sửa'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                      {item.stt}
                    </td>

                    <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                      {editingId === item.id ? (
                        <input
                          type="text"
                          value={item.lessonName}
                          onChange={(e) => handleUpdateItem(item.id, 'lessonName', e.target.value)}
                          className="w-full p-1 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800"
                        />
                      ) : (
                        <span className="font-semibold text-slate-900 dark:text-white">{item.lessonName}</span>
                      )}
                    </td>

                    <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                      {editingId === item.id ? (
                        <input
                          type="number"
                          value={item.periods}
                          onChange={(e) => handleUpdateItem(item.id, 'periods', parseInt(e.target.value) || 1)}
                          className="w-14 p-1 text-xs text-center rounded border border-amber-400 bg-white dark:bg-slate-800"
                        />
                      ) : (
                        item.periods
                      )}
                    </td>

                    <td className="p-3 text-center font-medium text-amber-700 dark:text-amber-400 border-r border-slate-100 dark:border-slate-800">
                      {editingId === item.id ? (
                        <input
                          type="text"
                          value={item.timeline}
                          onChange={(e) => handleUpdateItem(item.id, 'timeline', e.target.value)}
                          className="w-20 p-1 text-xs text-center rounded border border-amber-400 bg-white dark:bg-slate-800"
                        />
                      ) : (
                        item.timeline
                      )}
                    </td>

                    <td className="p-3 text-[11px] text-slate-600 dark:text-slate-400 border-r border-slate-100 dark:border-slate-800">
                      {editingId === item.id ? (
                        <input
                          type="text"
                          value={item.equipment}
                          onChange={(e) => handleUpdateItem(item.id, 'equipment', e.target.value)}
                          className="w-full p-1 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800"
                        />
                      ) : (
                        item.equipment
                      )}
                    </td>

                    <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                      {editingId === item.id ? (
                        <div className="space-y-1.5">
                          <input
                            type="text"
                            value={item.location}
                            onChange={(e) => handleUpdateItem(item.id, 'location', e.target.value)}
                            placeholder={isEn ? "Teaching location..." : "Địa điểm dạy học..."}
                            className="w-full p-1.5 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800 font-semibold"
                          />
                          <textarea
                            rows={3}
                            value={item.digitalCompetency || ''}
                            onChange={(e) => handleUpdateItem(item.id, 'digitalCompetency', e.target.value)}
                            placeholder="• [Mã NLS: ...] ...&#10;• [Mã AI: ...] ..."
                            className="w-full p-1.5 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800 font-mono leading-relaxed"
                          />
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                            {item.location || (isEn ? 'English Language Lab / Classroom' : 'Phòng học bộ môn')}
                          </span>
                          {item.digitalCompetency && (
                            <div className="space-y-1 text-emerald-700 dark:text-emerald-300 text-[11px] leading-snug">
                              {item.digitalCompetency.split('\n').filter((l) => l.trim().length > 0).map((line, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-1">
                                  <span className="text-emerald-500 font-bold shrink-0">•</span>
                                  <span>{line.replace(/^[-•*]\s*/, '')}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </td>

                    <td className="p-3 text-center">
                      <button
                        onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                        className="p-1 text-slate-400 hover:text-amber-600 transition"
                        title={editingId === item.id ? 'Lưu' : 'Chỉnh sửa'}
                      >
                        {editingId === item.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Nhiệm vụ khác */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            II. {isEn ? 'Other Pedagogical Duties (Nhiệm vụ Khác)' : 'Nhiệm vụ Khác (nếu có)'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                1. {isEn ? 'Advanced Student Training (Bồi dưỡng Học sinh giỏi):' : 'Bồi dưỡng Học sinh giỏi:'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{otherDuties.advancedTraining}</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                2. {isEn ? 'Remedial Student Tutoring (Phụ đạo Học sinh cần Hỗ trợ):' : 'Phụ đạo Học sinh cần Hỗ trợ:'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{otherDuties.remedialTeaching}</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                3. {isEn ? 'Scientific Research / STEM & AI Guidance (Nghiên cứu KHKT / STEM & AI):' : 'Hướng dẫn Nghiên cứu KHKT / STEM & AI:'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{otherDuties.scienceResearch}</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                4. {isEn ? 'Extracurricular & Other Duties (Hoạt động Trải nghiệm & Công tác Kiêm nhiệm):' : 'Hoạt động Trải nghiệm & Công tác Kiêm nhiệm:'}
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{otherDuties.extracurricularAndDuties}</p>
            </div>
          </div>
        </div>

        {/* Signature Block */}
        <div className="grid grid-cols-2 gap-8 pt-10 text-center font-sans">
          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">TỔ TRƯỞNG DUYỆT</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.departmentHead}</p>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">GIÁO VIÊN THỰC HIỆN</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.teacherName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
