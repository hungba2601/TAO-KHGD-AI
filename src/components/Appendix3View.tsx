'use client';

import React, { useState } from 'react';
import { Download, Search, Edit3, Check, Trash2, BookOpen, Plus, Sparkles, RefreshCw } from './icons';
import { PlanData, TeacherLessonPlanItem, SelectiveTopicItem } from '../types';
import { exportAppendix3Docx } from '../lib/docxExport';
import { getNlsCodeForSubjectLesson } from '../lib/constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../lib/constants/aiGuides';
import { getSelectiveTopicsBySubjectAndGrade } from '../lib/curriculum/selectiveTopics';

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
  const [editingSelectiveTopicIdx, setEditingSelectiveTopicIdx] = useState<number | null>(null);

  const selectiveTopics: SelectiveTopicItem[] =
    appendix3.selectiveTopics && appendix3.selectiveTopics.length > 0
      ? appendix3.selectiveTopics
      : appendix1.selectiveTopics && appendix1.selectiveTopics.length > 0
      ? appendix1.selectiveTopics
      : getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);

  const handleUpdateSelectiveTopic = (idx: number, field: keyof SelectiveTopicItem, value: any) => {
    const updated = [...selectiveTopics];
    updated[idx] = { ...updated[idx], [field]: value };
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...appendix3,
        selectiveTopics: updated
      }
    });
  };

  const handleAddSelectiveTopic = () => {
    const newStt = selectiveTopics.length + 1;
    const newTopic: SelectiveTopicItem = {
      id: `st-app3-${Date.now()}`,
      stt: newStt,
      topicName: `Chuyên đề ${newStt}: Ứng dụng Công nghệ số và AI mở rộng trong môn ${config.subject}`,
      periods: 10,
      timeline: `Tuần ${20 + newStt * 2} - Tuần ${28 + newStt * 2}`,
      yccd: `- Biết, nhận biết được các khái niệm và nguyên lý ứng dụng thực tiễn của chuyên đề.\n- Trình bày được và hiểu rõ quy trình thực hiện, kỹ năng nghiên cứu và giải quyết vấn đề.\n- Vận dụng được kiến thức vào sáng tạo sản phẩm học tập và thực hành thực tế.`,
      equipment: 'Máy tính, máy chiếu, tài liệu học liệu số, phần mềm chuyên dụng',
      location: 'Phòng học bộ môn / Phòng Tin học',
      digitalCompetency: `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`,
      notes: 'Chuyên đề tự chọn bổ sung'
    };
    const updated = [...selectiveTopics, newTopic];
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...appendix3,
        selectiveTopics: updated
      }
    });
    setEditingSelectiveTopicIdx(updated.length - 1);
  };

  const handleDeleteSelectiveTopic = (idx: number) => {
    const updated = selectiveTopics.filter((_, i) => i !== idx).map((t, i) => ({ ...t, stt: i + 1 }));
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...appendix3,
        selectiveTopics: updated
      }
    });
  };

  const handleResetSelectiveTopics = () => {
    const generated = getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: generated
      },
      appendix3: {
        ...appendix3,
        selectiveTopics: generated
      }
    });
  };

  // Helper để lấy chuỗi tích hợp NLS & AI chuẩn xác phù hợp với YCCĐ bài học
  const getResolvedDigitalCompetency = (lesson: { lessonName: string; digitalCompetency?: string; topic?: string; yccd?: string }, index: number): string => {
    if (lesson.digitalCompetency && lesson.digitalCompetency.trim().length > 0) {
      return lesson.digitalCompetency;
    }
    const lessonCtx = {
      lessonName: lesson.lessonName,
      subject: config.subject,
      grade: config.grade,
      lessonIndex: index,
      topic: lesson.topic || '',
      yccd: lesson.yccd || ''
    };
    const nls = getNlsCodeForSubjectLesson(config.grade, config.schoolType, lessonCtx);
    const ai = getAiCodeForSubjectLesson(config.grade, lessonCtx);

    return isEn
      ? `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}`
      : `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`;
  };

  // Lấy dữ liệu giảng dạy từ appendix3.teachingPlan hoặc kế thừa từ appendix1.curriculum
  const teachingItems: TeacherLessonPlanItem[] =
    appendix3.teachingPlan && appendix3.teachingPlan.length > 0
      ? appendix3.teachingPlan
      : appendix1.curriculum.map((c, index) => ({
          id: `tp-${c.id || index + 1}`,
          stt: index + 1,
          lessonName: c.lessonName,
          periods: c.periods,
          timeline: typeof c.week === 'number' ? (isEn ? `Week ${c.week}` : `Tuần ${c.week}`) : (isEn ? String(c.week).replace(/tuần\s*/i, 'Week ') : c.week),
          equipment: c.equipment || (isEn ? 'Audio CD/MP3 Global Success, Smart TV/Projector, Flashcards, LMS' : 'Máy tính, máy chiếu/Tivi thông minh, SGK, phần mềm dạy học'),
          location: c.location || (isEn ? 'Phòng học Tiếng Anh / Lớp học' : (config.schoolType === 'primary' ? 'Phòng học Tiếng Anh/Tin học' : 'Phòng học bộ môn')),
          digitalCompetency: c.digitalCompetency || getResolvedDigitalCompetency(c, index),
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

  const handleDeleteItem = (id: string) => {
    const updated = teachingItems.filter((item) => item.id !== id);
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
            placeholder={isEn ? "Search lesson, week, equipment, location, AI..." : "Tìm kiếm bài học, tuần, thiết bị, phòng học, NLS, AI..."}
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
        {/* Document Header Standard - Phụ lục III chuẩn CV 5512 */}
        <div className="text-center font-sans space-y-1">
          <p className="text-xs font-bold text-slate-900 dark:text-white">Phụ lục III</p>
          <p className="text-sm font-black text-slate-900 dark:text-white uppercase">
            KHUNG KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN
          </p>
          <p className="text-xs italic text-slate-600 dark:text-slate-400">
            (Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)
          </p>
        </div>

        {/* 2 Columns Header */}
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800 font-sans text-xs">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900 dark:text-white">
              TRƯỜNG: <span className="font-bold uppercase">{config.schoolName}</span>
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              TỔ: <span className="font-bold uppercase">{config.departmentName}</span>
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              Họ và tên giáo viên: <span className="font-bold text-amber-700 dark:text-amber-400 uppercase">{config.teacherName}</span>
            </p>
          </div>
          <div className="text-center space-y-1">
            <p className="font-bold text-slate-900 dark:text-white uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-1 font-sans">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN
          </h2>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">
            MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC: <span className="text-amber-600">{config.subject}</span>, LỚP:{' '}
            <span className="text-amber-600">{config.grade}</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 italic">
            (Năm học {config.academicYear})
          </p>
        </div>

        {/* Section I: Kế hoạch dạy học */}
        <div className="space-y-5 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            I. Kế hoạch dạy học
          </h3>

          {/* 1. Phân phối chương trình - Bảng 7 cột (kèm cột Tích hợp NLS và AI) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white pl-2">
                1. Phân phối chương trình
              </h4>
              <span className="text-xs text-slate-500">
                ({filteredItems.length} bài/tiết)
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                    <th className="p-3 w-64 border-r border-slate-200 dark:border-slate-700">
                      Bài học<br /><span className="text-[11px] font-normal text-slate-500">(1)</span>
                    </th>
                    <th className="p-3 w-16 text-center border-r border-slate-200 dark:border-slate-700">
                      Số tiết<br /><span className="text-[11px] font-normal text-slate-500">(2)</span>
                    </th>
                    <th className="p-3 w-20 text-center border-r border-slate-200 dark:border-slate-700">
                      Thời điểm<br /><span className="text-[11px] font-normal text-slate-500">(3)</span>
                    </th>
                    <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">
                      Thiết bị dạy học<br /><span className="text-[11px] font-normal text-slate-500">(4)</span>
                    </th>
                    <th className="p-3 w-40 border-r border-slate-200 dark:border-slate-700">
                      Địa điểm dạy học<br /><span className="text-[11px] font-normal text-slate-500">(5)</span>
                    </th>
                    <th className="p-3 min-w-[200px] border-r border-slate-200 dark:border-slate-700">
                      Tích hợp Năng lực số &amp; AI<br />
                      <span className="text-[10px] font-normal text-emerald-600 dark:text-emerald-400">(CV 3456 &amp; QĐ 2422)</span>
                    </th>
                    <th className="p-3 w-14 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredItems.map((item, idx) => {
                    const compText = getResolvedDigitalCompetency(item, idx);

                    return (
                      <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        {/* STT */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {item.stt}
                        </td>

                        {/* BÀI HỌC (1) */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                          {editingId === item.id ? (
                            <input
                              type="text"
                              value={item.lessonName}
                              onChange={(e) => handleUpdateItem(item.id, 'lessonName', e.target.value)}
                              className="w-full p-1 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800 font-bold"
                            />
                          ) : (
                            <span className="font-semibold text-slate-900 dark:text-white leading-tight block">
                              {item.lessonName}
                            </span>
                          )}
                        </td>

                        {/* SỐ TIẾT (2) */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {editingId === item.id ? (
                            <input
                              type="number"
                              min={1}
                              value={item.periods}
                              onChange={(e) => handleUpdateItem(item.id, 'periods', parseInt(e.target.value) || 1)}
                              className="w-12 p-1 text-xs text-center rounded border border-amber-400 bg-white dark:bg-slate-800 font-bold"
                            />
                          ) : (
                            item.periods
                          )}
                        </td>

                        {/* THỜI ĐIỂM (3) */}
                        <td className="p-3 text-center font-medium border-r border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
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

                        {/* THIẾT BỊ DẠY HỌC (4) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800">
                          {editingId === item.id ? (
                            <textarea
                              rows={2}
                              value={item.equipment}
                              onChange={(e) => handleUpdateItem(item.id, 'equipment', e.target.value)}
                              className="w-full p-1 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800"
                            />
                          ) : (
                            item.equipment
                          )}
                        </td>

                        {/* ĐỊA ĐIỂM DẠY HỌC (5) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800">
                          {editingId === item.id ? (
                            <input
                              type="text"
                              value={item.location}
                              onChange={(e) => handleUpdateItem(item.id, 'location', e.target.value)}
                              placeholder="Địa điểm dạy học..."
                              className="w-full p-1.5 text-xs rounded border border-amber-400 bg-white dark:bg-slate-800 font-semibold"
                            />
                          ) : (
                            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                              {item.location || (isEn ? 'Phòng học Tiếng Anh / Lớp học' : 'Phòng học bộ môn')}
                            </span>
                          )}
                        </td>

                        {/* TÍCH HỢP NĂNG LỰC SỐ & AI (6) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                          {editingId === item.id ? (
                            <textarea
                              rows={3}
                              value={item.digitalCompetency || compText}
                              onChange={(e) => handleUpdateItem(item.id, 'digitalCompetency', e.target.value)}
                              placeholder="• [Mã NLS: ...] ...&#10;• [Mã AI: ...] ..."
                              className="w-full p-1.5 text-xs rounded border border-emerald-400 bg-white dark:bg-slate-800 font-mono leading-relaxed"
                            />
                          ) : (
                            <div className="space-y-1.5">
                              {compText.split('\n').filter((l) => l.trim().length > 0).map((line, cIdx) => (
                                <div key={cIdx} className="flex items-start gap-1.5 text-emerald-800 dark:text-emerald-300 leading-snug">
                                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                                  <span>{line.replace(/^[-•*]\s*/, '')}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>

                        {/* THAO TÁC */}
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                              className="p-1 text-slate-400 hover:text-amber-600 transition"
                              title={editingId === item.id ? 'Lưu' : 'Chỉnh sửa'}
                            >
                              {editingId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => handleDeleteItem(item.id)}
                              className="p-1 text-slate-400 hover:text-rose-500 transition"
                              title="Xóa bài học"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Chuyên đề lựa chọn (đối với cấp trung học phổ thông / Chuyên đề mở rộng & STEM) */}
          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pl-1 pr-1">
              <div className="flex items-center gap-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  2. Chuyên đề lựa chọn (đối với cấp trung học phổ thông)
                </h4>
                <span className="text-[11px] bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full">
                  {selectiveTopics.length} chuyên đề
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetSelectiveTopics}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition flex items-center gap-1 shadow-sm"
                  title="Khôi phục danh sách chuyên đề sáng tạo theo chuẩn CT GDPT 2018"
                >
                  <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>Tự động tạo chuyên đề sáng tạo</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddSelectiveTopic}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition flex items-center gap-1 shadow-sm"
                  title="Thêm chuyên đề lựa chọn mới"
                >
                  <Plus className="w-3 h-3" />
                  <span>Thêm chuyên đề</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                    <th className="p-3 w-64 border-r border-slate-200 dark:border-slate-700">
                      Chuyên đề<br /><span className="text-[11px] font-normal text-slate-500">(1)</span>
                    </th>
                    <th className="p-3 w-16 text-center border-r border-slate-200 dark:border-slate-700">
                      Số tiết<br /><span className="text-[11px] font-normal text-slate-500">(2)</span>
                    </th>
                    <th className="p-3 w-24 text-center border-r border-slate-200 dark:border-slate-700">
                      Thời điểm<br /><span className="text-[11px] font-normal text-slate-500">(3)</span>
                    </th>
                    <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">
                      Thiết bị dạy học<br /><span className="text-[11px] font-normal text-slate-500">(4)</span>
                    </th>
                    <th className="p-3 w-36 border-r border-slate-200 dark:border-slate-700">
                      Địa điểm dạy học<br /><span className="text-[11px] font-normal text-slate-500">(5)</span>
                    </th>
                    <th className="p-3 min-w-[220px] border-r border-slate-200 dark:border-slate-700">
                      Tích hợp Năng lực số &amp; AI (6)
                    </th>
                    <th className="p-3 w-20 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {selectiveTopics.map((top, sIdx) => {
                    const isEditing = editingSelectiveTopicIdx === sIdx;
                    const compText =
                      top.digitalCompetency ||
                      `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`;

                    return (
                      <tr key={top.id || sIdx} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 ${isEditing ? 'bg-amber-50/40 dark:bg-amber-950/20' : ''}`}>
                        {/* STT */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {top.stt || sIdx + 1}
                        </td>

                        {/* CHUYÊN ĐỀ (1) */}
                        <td className="p-3 font-semibold text-slate-900 dark:text-white border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <textarea
                              rows={2}
                              value={top.topicName}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'topicName', e.target.value)}
                              placeholder="Tên chuyên đề..."
                              className="w-full p-1 text-xs rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 font-bold"
                            />
                          ) : (
                            <span className="font-bold text-slate-900 dark:text-white leading-tight block">
                              {top.topicName}
                            </span>
                          )}
                        </td>

                        {/* SỐ TIẾT (2) */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <input
                              type="number"
                              min={1}
                              value={top.periods}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'periods', parseInt(e.target.value, 10) || 1)}
                              className="w-12 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold"
                            />
                          ) : (
                            top.periods
                          )}
                        </td>

                        {/* THỜI ĐIỂM (3) */}
                        <td className="p-3 text-center font-medium border-r border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                          {isEditing ? (
                            <input
                              type="text"
                              value={top.timeline || ''}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'timeline', e.target.value)}
                              placeholder="Tuần thực hiện..."
                              className="w-24 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs"
                            />
                          ) : (
                            top.timeline || `Tuần ${sIdx * 10 + 1} - Tuần ${(sIdx + 1) * 10}`
                          )}
                        </td>

                        {/* THIẾT BỊ DẠY HỌC (4) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <textarea
                              rows={2}
                              value={top.equipment || ''}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'equipment', e.target.value)}
                              placeholder="Thiết bị dạy học..."
                              className="w-full p-1 text-xs rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                            />
                          ) : (
                            top.equipment || 'Máy tính, máy chiếu, tài liệu học liệu số'
                          )}
                        </td>

                        {/* ĐỊA ĐIỂM DẠY HỌC (5) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <input
                              type="text"
                              value={top.location || ''}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'location', e.target.value)}
                              placeholder="Địa điểm dạy học..."
                              className="w-full p-1 text-xs rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 font-semibold"
                            />
                          ) : (
                            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                              {top.location || 'Phòng học bộ môn / Phòng STEM'}
                            </span>
                          )}
                        </td>

                        {/* TÍCH HỢP NĂNG LỰC SỐ & AI (6) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={3}
                              value={top.digitalCompetency || compText}
                              onChange={(e) => handleUpdateSelectiveTopic(sIdx, 'digitalCompetency', e.target.value)}
                              placeholder="• [Mã NLS: ...] ...&#10;• [Mã AI: ...] ..."
                              className="w-full p-1 text-xs rounded border border-emerald-400 bg-white dark:bg-slate-800 font-mono leading-relaxed"
                            />
                          ) : (
                            <div className="space-y-1.5">
                              {compText.split('\n').filter((l) => l.trim().length > 0).map((line, cIdx) => (
                                <div key={cIdx} className="flex items-start gap-1.5 text-emerald-800 dark:text-emerald-300 leading-snug">
                                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">•</span>
                                  <span>{line.replace(/^[-•*]\s*/, '')}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>

                        {/* THAO TÁC */}
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              type="button"
                              onClick={() => setEditingSelectiveTopicIdx(isEditing ? null : sIdx)}
                              className="p-1 rounded text-slate-400 hover:text-amber-500 transition"
                              title={isEditing ? 'Hoàn thành' : 'Chỉnh sửa'}
                            >
                              {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteSelectiveTopic(sIdx)}
                              className="p-1 rounded text-slate-400 hover:text-rose-500 transition"
                              title="Xóa chuyên đề"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Ghi chú chú thích chân bảng chuẩn CV 5512 */}
          <div className="space-y-1 text-xs italic text-slate-600 dark:text-slate-400 pl-2 leading-relaxed">
            <p>(1) Tên bài học/chuyên đề được xây dựng từ nội dung/chủ đề (được lấy nguyên hoặc thiết kế lại phù hợp với điều kiện thực tế của nhà trường) theo chương trình, sách giáo khoa môn học/hoạt động giáo dục.</p>
            <p>(2) Số tiết được sử dụng để thực hiện bài dạy/chuyên đề.</p>
            <p>(3) Tuần thực hiện bài học/chuyên đề.</p>
            <p>(4) Thiết bị dạy học được sử dụng để tổ chức dạy học.</p>
            <p>(5) Địa điểm tổ chức hoạt động dạy học (lớp học, phòng học bộ môn, phòng đa năng, bãi tập, tại di sản, thực địa...).</p>
          </div>
        </div>

        {/* Section II: Nhiệm vụ khác (nếu có) */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            II. Nhiệm vụ khác (nếu có): <span className="font-normal normal-case text-xs italic text-slate-600 dark:text-slate-400">(Bồi dưỡng học sinh giỏi; Tổ chức hoạt động giáo dục...)</span>
          </h3>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pl-2 leading-relaxed">
            <p>
              • <strong>Bồi dưỡng học sinh giỏi:</strong> {otherDuties.advancedTraining}
            </p>
            <p>
              • <strong>Phụ đạo học sinh cần hỗ trợ:</strong> {otherDuties.remedialTeaching}
            </p>
            <p>
              • <strong>Tổ chức hoạt động giáo dục / Hướng dẫn nghiên cứu KHKT, STEM & AI:</strong> {otherDuties.scienceResearch}
            </p>
            <p>
              • <strong>Hoạt động trải nghiệm & Công tác kiêm nhiệm khác:</strong> {otherDuties.extracurricularAndDuties}
            </p>
          </div>
        </div>

        {/* Signature Block - Chuẩn CV 5512: Trái là TỔ TRƯỞNG, Phải là GIÁO VIÊN */}
        <div className="grid grid-cols-2 gap-8 pt-10 text-center font-sans">
          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">TỔ TRƯỞNG</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.departmentHead}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">... ngày ...... tháng ...... năm 20...</p>
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">GIÁO VIÊN</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-16" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.teacherName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
