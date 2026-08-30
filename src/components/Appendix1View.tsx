'use client';

import React, { useState } from 'react';
import {
  Search,
  Trash2,
  Edit3,
  Check,
  Download,
  BookOpen,
  Sparkles,
  Plus,
  RefreshCw
} from './icons';
import { PlanData, CurriculumItem, SelectiveTopicItem } from '../types';
import { exportAppendix1Docx } from '../lib/docxExport';
import { getNlsCodeForSubjectLesson } from '../lib/constants/nlsGuides';
import { getAiCodeForSubjectLesson } from '../lib/constants/aiGuides';
import { getSelectiveTopicsBySubjectAndGrade } from '../lib/curriculum/selectiveTopics';

interface Appendix1ViewProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
}

export const Appendix1View: React.FC<Appendix1ViewProps> = ({ planData, onUpdatePlan }) => {
  const { config, appendix1 } = planData;
  const isEn =
    config.subject.toLowerCase().includes('tiếng anh') ||
    config.subject.toLowerCase().includes('english') ||
    config.subject.toLowerCase().includes('tieng anh');

  const totalTeachers =
    (Number(config.teachersCollege) || 0) +
    (Number(config.teachersUniversity) || 0) +
    (Number(config.teachersMasterDoc) || 0);

  const formatWeekDisplay = (week: string | number) => {
    if (!week) return isEn ? 'Week 1' : 'Tuần 1';
    const str = String(week).trim();
    const numMatch = str.match(/\d+/);
    if (isEn) {
      if (numMatch) return `Week ${numMatch[0]}`;
      return str.replace(/tuần/i, 'Week');
    } else {
      if (numMatch) return `Tuần ${numMatch[0]}`;
      return str.replace(/week/i, 'Tuần');
    }
  };

  const formatPeriodDisplay = (periods: number) => {
    if (isEn) {
      return `${periods} ${periods > 1 ? 'periods' : 'period'}`;
    }
    return `${periods}`;
  };

  // Helper để lấy chuỗi tích hợp NLS & AI chuẩn xác phù hợp với YCCĐ bài học
  const getResolvedDigitalCompetency = (lesson: CurriculumItem, index: number): string => {
    if (lesson.digitalCompetency && lesson.digitalCompetency.trim().length > 0) {
      return lesson.digitalCompetency;
    }
    const lessonCtx = {
      lessonName: lesson.lessonName,
      subject: config.subject,
      grade: config.grade,
      lessonIndex: index,
      topic: lesson.topic,
      yccd: lesson.yccd
    };
    const nls = getNlsCodeForSubjectLesson(config.grade, config.schoolType, lessonCtx);
    const ai = getAiCodeForSubjectLesson(config.grade, lessonCtx);

    return isEn
      ? `• [NLS Code: ${nls.code}] ${nls.requirement}\n• [AI Code: ${ai.code}] ${ai.requirement}`
      : `• [Mã NLS: ${nls.code}] ${nls.requirement}\n• [Mã AI: ${ai.code}] ${ai.requirement}`;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  const filteredCurriculum = appendix1.curriculum.filter(
    (c) =>
      c.lessonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.yccd && c.yccd.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (c.digitalCompetency && c.digitalCompetency.toLowerCase().includes(searchTerm.toLowerCase())) ||
      String(c.week).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdateCurriculumItem = (id: string, field: keyof CurriculumItem, value: any) => {
    const updatedCurriculum = appendix1.curriculum.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        curriculum: updatedCurriculum
      }
    });
  };

  const handleDeleteLesson = (id: string) => {
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        curriculum: appendix1.curriculum.filter((item) => item.id !== id)
      }
    });
  };

  const [editingTopicIdx, setEditingTopicIdx] = useState<number | null>(null);

  const selectiveTopicsList: SelectiveTopicItem[] =
    appendix1.selectiveTopics && appendix1.selectiveTopics.length > 0
      ? appendix1.selectiveTopics
      : getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);

  const handleUpdateTopic = (idx: number, field: keyof SelectiveTopicItem, value: any) => {
    const updated = [...selectiveTopicsList];
    updated[idx] = { ...updated[idx], [field]: value };
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...planData.appendix3,
        selectiveTopics: updated
      }
    });
  };

  const handleAddTopic = () => {
    const newStt = selectiveTopicsList.length + 1;
    const newTopic: SelectiveTopicItem = {
      id: `st-custom-${Date.now()}`,
      stt: newStt,
      topicName: isEn
        ? `Topic ${newStt}: English for Digital Communication & Media Authoring`
        : `Chuyên đề ${newStt}: Ứng dụng Công nghệ số và AI mở rộng trong môn ${config.subject}`,
      periods: 10,
      timeline: isEn ? `Week ${20 + newStt * 2} - Week ${28 + newStt * 2}` : `Tuần ${20 + newStt * 2} - Tuần ${28 + newStt * 2}`,
      yccd: isEn
        ? `- Know and recognize key concepts and practical applications of the topic.\n- Explain and present implementation procedures and research findings in English.\n- Apply language and digital knowledge to create interactive learning products.`
        : `- Biết, nhận biết được các khái niệm và nguyên lý ứng dụng thực tiễn của chuyên đề.\n- Trình bày được và hiểu rõ quy trình thực hiện, kỹ năng nghiên cứu và giải quyết vấn đề.\n- Vận dụng được kiến thức vào sáng tạo sản phẩm học tập và thực hành thực tế.`,
      equipment: isEn ? 'Smartboard, Laptops, Headphones, English Digital Resources' : 'Máy tính, máy chiếu, tài liệu học liệu số, phần mềm chuyên dụng',
      location: isEn ? 'English Language Lab / Smart Classroom' : 'Phòng học bộ môn / Phòng Tin học',
      digitalCompetency: isEn
        ? `• [NLS Code: 5.3.TC2a] Digital content creation and collaboration\n• [AI Code: 8.C1.2] Autonomous AI-powered English learning tools`
        : `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`,
      notes: isEn ? 'Elective English Topic' : 'Chuyên đề tự chọn bổ sung'
    };
    const updated = [...selectiveTopicsList, newTopic];
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...planData.appendix3,
        selectiveTopics: updated
      }
    });
    setEditingTopicIdx(updated.length - 1);
  };

  const handleDeleteTopic = (idx: number) => {
    const updated = selectiveTopicsList.filter((_, i) => i !== idx).map((t, i) => ({ ...t, stt: i + 1 }));
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: updated
      },
      appendix3: {
        ...planData.appendix3,
        selectiveTopics: updated
      }
    });
  };

  const handleResetCreativeTopics = () => {
    const generated = getSelectiveTopicsBySubjectAndGrade(config.subject, config.grade, config.schoolType, config);
    onUpdatePlan({
      ...planData,
      appendix1: {
        ...appendix1,
        selectiveTopics: generated
      },
      appendix3: {
        ...planData.appendix3,
        selectiveTopics: generated
      }
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Control Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isEn ? "Tìm kiếm bài học, YCCĐ, NLS, AI..." : "Tìm kiếm bài học, YCCĐ, mã NLS, AI..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end flex-wrap">
          <div className="text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800 font-medium hidden md:flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>SGK: <strong>{isEn ? 'Tiếng Anh Global Success' : 'Kết nối tri thức với cuộc sống'}</strong></span>
          </div>

          <button
            onClick={() => exportAppendix1Docx(planData)}
            className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Xuất Phụ lục 1 (.docx)
          </button>
        </div>
      </div>

      {/* Main Document Paper */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-md space-y-8 font-serif">
        {/* Document Header Standard - Theo mẫu Phụ lục I CV 5512 */}
        <div className="text-center font-sans space-y-1">
          <p className="text-xs font-bold text-slate-900 dark:text-white">Phụ lục I</p>
          <p className="text-sm font-black text-slate-900 dark:text-white uppercase">
            KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA TỔ CHUYÊN MÔN
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
          </div>
          <div className="text-center space-y-1">
            <p className="font-bold text-slate-900 dark:text-white uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Document Title */}
        <div className="text-center space-y-1 font-sans">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN
          </h2>
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">
            MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC: <span className="text-amber-600">{config.subject}</span>, KHỐI LỚP: <span className="text-amber-600">{config.grade}</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 italic">
            (Năm học {config.academicYear})
          </p>
        </div>

        {/* Section I: Đặc điểm tình hình */}
        <div className="space-y-4 font-sans text-xs">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            I. Đặc điểm tình hình
          </h3>

          {/* 1. Số lớp, số học sinh */}
          <div className="space-y-1 pl-2 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>
              <strong>1. Số lớp:</strong> <span className="text-slate-900 dark:text-white font-bold">{config.totalClasses}</span>;&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>Số học sinh:</strong> <span className="text-slate-900 dark:text-white font-bold">{config.totalStudents}</span>;&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>Số học sinh học chuyên đề lựa chọn (nếu có):</strong> ....................
            </p>
          </div>

          {/* 2. Tình hình đội ngũ */}
          <div className="space-y-1.5 pl-2 text-slate-800 dark:text-slate-200 leading-relaxed">
            <p>
              <strong>2. Tình hình đội ngũ:</strong> Số giáo viên: <strong className="text-slate-900 dark:text-white">{totalTeachers}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Trình độ đào tạo: Cao đẳng: <strong className="text-slate-900 dark:text-white">{config.teachersCollege}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Đại học: <strong className="text-slate-900 dark:text-white">{config.teachersUniversity}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Trên đại học: <strong className="text-slate-900 dark:text-white">{config.teachersMasterDoc}</strong>
            </p>
            <p>
              Mức đạt chuẩn nghề nghiệp giáo viên: Tốt: <strong className="text-slate-900 dark:text-white">{config.evalExcellent}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Khá: <strong className="text-slate-900 dark:text-white">{config.evalGood}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Đạt: <strong className="text-slate-900 dark:text-white">{config.evalPass}</strong>;&nbsp;&nbsp;&nbsp;&nbsp;
              Chưa đạt: <strong className="text-slate-900 dark:text-white">{config.evalFail || 0}</strong>
            </p>
          </div>

          {/* 3. Thiết bị dạy học */}
          <div className="space-y-2 pt-2">
            <p className="font-bold text-slate-900 dark:text-white pl-2">
              3. Thiết bị dạy học: <span className="font-normal italic text-slate-600 dark:text-slate-400">(Trình bày cụ thể các thiết bị dạy học có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)</span>
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-2.5 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                    <th className="p-2.5 w-60 border-r border-slate-200 dark:border-slate-700">Thiết bị dạy học</th>
                    <th className="p-2.5 w-24 text-center border-r border-slate-200 dark:border-slate-700">Số lượng</th>
                    <th className="p-2.5 border-r border-slate-200 dark:border-slate-700">Các bài thí nghiệm/thực hành</th>
                    <th className="p-2.5 w-32">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {appendix1.equipments.map((eq) => (
                    <tr key={eq.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-2.5 text-center font-bold border-r border-slate-100 dark:border-slate-800">{eq.stt}</td>
                      <td className="p-2.5 font-semibold text-slate-900 dark:text-white border-r border-slate-100 dark:border-slate-800">{eq.equipmentName}</td>
                      <td className="p-2.5 text-center font-medium border-r border-slate-100 dark:border-slate-800">{eq.quantity}</td>
                      <td className="p-2.5 border-r border-slate-100 dark:border-slate-800">{eq.experiments}</td>
                      <td className="p-2.5 text-slate-500">{eq.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Phòng học bộ môn */}
          <div className="space-y-2 pt-2">
            <p className="font-bold text-slate-900 dark:text-white pl-2">
              4. Phòng học bộ môn/phòng thí nghiệm/phòng đa năng/sân chơi, bãi tập: <span className="font-normal italic text-slate-600 dark:text-slate-400">(Trình bày cụ thể các phòng thí nghiệm/phòng bộ môn/phòng đa năng/sân chơi/bãi tập có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)</span>
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-2.5 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                    <th className="p-2.5 w-60 border-r border-slate-200 dark:border-slate-700">Tên phòng</th>
                    <th className="p-2.5 w-24 text-center border-r border-slate-200 dark:border-slate-700">Số lượng</th>
                    <th className="p-2.5 border-r border-slate-200 dark:border-slate-700">Phạm vi và nội dung sử dụng</th>
                    <th className="p-2.5 w-32">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {appendix1.classrooms.map((cr) => (
                    <tr key={cr.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-2.5 text-center font-bold border-r border-slate-100 dark:border-slate-800">{cr.stt}</td>
                      <td className="p-2.5 font-semibold text-slate-900 dark:text-white border-r border-slate-100 dark:border-slate-800">{cr.roomName}</td>
                      <td className="p-2.5 text-center font-medium border-r border-slate-100 dark:border-slate-800">{cr.quantity}</td>
                      <td className="p-2.5 border-r border-slate-100 dark:border-slate-800">{cr.features}</td>
                      <td className="p-2.5 text-slate-500">{cr.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section II: Kế hoạch dạy học */}
        <div className="space-y-5 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            II. Kế hoạch dạy học
          </h3>

          {/* 1. Phân phối chương trình - Kèm Cột Tích hợp Năng lực số & AI */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white pl-2">
              1. Phân phối chương trình
            </h4>

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
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[240px]">
                      Yêu cầu cần đạt<br /><span className="text-[11px] font-normal text-slate-500">(3)</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[220px]">
                      Tích hợp Năng lực số &amp; AI<br />
                      <span className="text-[10px] font-normal text-emerald-600 dark:text-emerald-400">(CV 3456 &amp; QĐ 2422)</span>
                    </th>
                    <th className="p-3 w-14 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {filteredCurriculum.map((lesson, idx) => {
                    const isEditing = editingLessonId === lesson.id;
                    const compText = getResolvedDigitalCompetency(lesson, idx);

                    return (
                      <tr key={lesson.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        {/* STT */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {lesson.stt}
                        </td>

                        {/* BÀI HỌC (1) */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                value={lesson.topic}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'topic', e.target.value)}
                                placeholder="Chủ đề / Unit (nếu có)..."
                                className="w-full p-1 rounded border border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/40 text-xs font-semibold text-amber-900 dark:text-amber-200"
                              />
                              <input
                                type="text"
                                value={lesson.lessonName}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'lessonName', e.target.value)}
                                placeholder="Tên bài học..."
                                className="w-full p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                              />
                            </div>
                          ) : (
                            <div>
                              {lesson.topic && lesson.topic.trim().length > 0 && (
                                <span className="font-semibold text-amber-700 dark:text-amber-400 text-[11px] block uppercase">
                                  {lesson.topic}
                                </span>
                              )}
                              <span className="font-bold text-slate-900 dark:text-white leading-tight block">
                                {lesson.lessonName}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* SỐ TIẾT (2) */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <input
                              type="number"
                              min={1}
                              value={lesson.periods}
                              onChange={(e) =>
                                handleUpdateCurriculumItem(lesson.id, 'periods', parseInt(e.target.value, 10) || 1)
                              }
                              className="w-12 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold"
                            />
                          ) : (
                            formatPeriodDisplay(lesson.periods)
                          )}
                        </td>

                        {/* YÊU CẦU CẦN ĐẠT (3) */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={4}
                              value={lesson.yccd || ''}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'yccd', e.target.value)}
                              placeholder="- Nêu kiến thức, kỹ năng cần đạt...&#10;- Nêu phẩm chất, năng lực..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-sans leading-relaxed"
                            />
                          ) : (
                            <div className="space-y-1 text-slate-700 dark:text-slate-300">
                              {(() => {
                                const rawYccd = lesson.yccd || (isEn ? 'Master target language knowledge and communication skills according to CT GDPT 2018.' : 'Đạt chuẩn kiến thức, kỹ năng và phát triển năng lực phẩm chất theo CT GDPT 2018.');
                                const lines = rawYccd.includes('\n')
                                  ? rawYccd.split('\n').filter((l) => l.trim().length > 0)
                                  : rawYccd.split(';').map((s) => s.trim()).filter((s) => s.length > 0);

                                return lines.map((line, lIdx) => (
                                  <div key={lIdx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                                    <span className="text-slate-800 dark:text-slate-200">{line.replace(/^[-•*]\s*/, '')}</span>
                                  </div>
                                ));
                              })()}
                            </div>
                          )}
                        </td>

                        {/* TÍCH HỢP NĂNG LỰC SỐ & AI PHÙ HỢP VỚI YCCĐ */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={4}
                              value={lesson.digitalCompetency || compText}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'digitalCompetency', e.target.value)}
                              placeholder="• [Mã NLS: ...] Nội dung NLS...&#10;• [Mã AI: ...] Nội dung AI..."
                              className="w-full p-1.5 rounded border border-emerald-400 bg-white dark:bg-slate-800 text-xs font-mono leading-relaxed"
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

                        {/* Thao tác */}
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => setEditingLessonId(isEditing ? null : lesson.id)}
                              className="p-1 rounded text-slate-400 hover:text-amber-500 transition"
                              title={isEditing ? 'Hoàn thành' : 'Chỉnh sửa'}
                            >
                              {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => handleDeleteLesson(lesson.id)}
                              className="p-1 rounded text-slate-400 hover:text-rose-500 transition"
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
                  {selectiveTopicsList.length} chuyên đề
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleResetCreativeTopics}
                  className="px-2.5 py-1 text-[11px] font-bold rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 hover:bg-amber-100 transition flex items-center gap-1 shadow-sm"
                  title="Khôi phục danh sách chuyên đề sáng tạo theo chuẩn CT GDPT 2018"
                >
                  <Sparkles className="w-3 h-3 text-amber-600 animate-pulse" />
                  <span>Tự động tạo chuyên đề sáng tạo</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddTopic}
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
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[280px]">
                      Yêu cầu cần đạt<br /><span className="text-[11px] font-normal text-slate-500">(3)</span>
                    </th>
                    <th className="p-3 min-w-[240px] border-r border-slate-200 dark:border-slate-700">
                      Tích hợp Năng lực số &amp; AI
                    </th>
                    <th className="p-3 w-20 text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {selectiveTopicsList.map((topic, idx) => {
                    const isEditing = editingTopicIdx === idx;
                    const compText =
                      topic.digitalCompetency ||
                      `• [Mã NLS: 5.3.TC2a] Vận dụng công nghệ số tạo ra sản phẩm sáng tạo\n• [Mã AI: 8.C1.2] Khai thác trợ lý AI hỗ trợ học tập và nghiên cứu`;

                    return (
                      <tr key={topic.id || idx} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 ${isEditing ? 'bg-amber-50/40 dark:bg-amber-950/20' : ''}`}>
                        {/* STT */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {topic.stt || idx + 1}
                        </td>

                        {/* TÊN CHUYÊN ĐỀ (1) */}
                        <td className="p-3 font-semibold text-slate-900 dark:text-white border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <textarea
                              rows={3}
                              value={topic.topicName}
                              onChange={(e) => handleUpdateTopic(idx, 'topicName', e.target.value)}
                              placeholder="Tên chuyên đề lựa chọn..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                            />
                          ) : (
                            <span className="font-bold text-slate-900 dark:text-white leading-tight block">
                              {topic.topicName}
                            </span>
                          )}
                        </td>

                        {/* SỐ TIẾT (2) */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <input
                              type="number"
                              min={1}
                              value={topic.periods}
                              onChange={(e) => handleUpdateTopic(idx, 'periods', parseInt(e.target.value, 10) || 1)}
                              className="w-12 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold"
                            />
                          ) : (
                            topic.periods
                          )}
                        </td>

                        {/* YÊU CẦU CẦN ĐẠT (3) */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={4}
                              value={topic.yccd || ''}
                              onChange={(e) => handleUpdateTopic(idx, 'yccd', e.target.value)}
                              placeholder="- Biết, nhận biết được...&#10;- Trình bày được, hiểu được...&#10;- Vận dụng được..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs leading-relaxed"
                            />
                          ) : (
                            <div className="space-y-1 text-slate-700 dark:text-slate-300">
                              {(topic.yccd || 'Đạt chuẩn kiến thức, kỹ năng và phát triển năng lực chuyên đề theo CT GDPT 2018.')
                                .split('\n')
                                .filter((l) => l.trim().length > 0)
                                .map((line, lIdx) => (
                                  <div key={lIdx} className="flex items-start gap-1.5 leading-snug">
                                    <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                                    <span className="text-slate-800 dark:text-slate-200">{line.replace(/^[-•*]\s*/, '')}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </td>

                        {/* TÍCH HỢP NĂNG LỰC SỐ & AI */}
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={4}
                              value={topic.digitalCompetency || compText}
                              onChange={(e) => handleUpdateTopic(idx, 'digitalCompetency', e.target.value)}
                              placeholder="• [Mã NLS: ...] ...&#10;• [Mã AI: ...] ..."
                              className="w-full p-1.5 rounded border border-emerald-400 bg-white dark:bg-slate-800 text-xs font-mono leading-relaxed"
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
                              onClick={() => setEditingTopicIdx(isEditing ? null : idx)}
                              className="p-1 rounded text-slate-400 hover:text-amber-500 transition"
                              title={isEditing ? 'Hoàn thành' : 'Chỉnh sửa'}
                            >
                              {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteTopic(idx)}
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
            <p>(3) Yêu cầu (mức độ) cần đạt theo chương trình môn học: Giáo viên chủ động các đơn vị bài học, chủ đề và xác định yêu cầu (mức độ) cần đạt.</p>
          </div>

          {/* 3. Kiểm tra, đánh giá định kỳ */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white pl-2">
              3. Kiểm tra, đánh giá định kỳ
            </h4>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">
                      Bài kiểm tra, đánh giá
                    </th>
                    <th className="p-3 w-28 text-center border-r border-slate-200 dark:border-slate-700">
                      Thời gian<br /><span className="text-[11px] font-normal text-slate-500">(1)</span>
                    </th>
                    <th className="p-3 w-28 text-center border-r border-slate-200 dark:border-slate-700">
                      Thời điểm<br /><span className="text-[11px] font-normal text-slate-500">(2)</span>
                    </th>
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[240px]">
                      Yêu cầu cần đạt<br /><span className="text-[11px] font-normal text-slate-500">(3)</span>
                    </th>
                    <th className="p-3 w-48">
                      Hình thức<br /><span className="text-[11px] font-normal text-slate-500">(4)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {appendix1.assessments.map((as, aIdx) => {
                    let name = as.assessmentName;
                    let time = as.time;
                    let week = as.week;
                    let req = as.requirements;
                    let form = as.form;

                    if (name.toLowerCase().includes('mid-term test 1') || name.toLowerCase().includes('mid-term 1')) {
                      name = `Kiểm tra, đánh giá giữa Học kỳ 1 (Tiếng Anh ${config.grade})`;
                    } else if (name.toLowerCase().includes('end-of-term 1') || name.toLowerCase().includes('end-term 1') || name.toLowerCase().includes('semester 1')) {
                      name = `Kiểm tra, đánh giá cuối Học kỳ 1 (Tiếng Anh ${config.grade})`;
                    } else if (name.toLowerCase().includes('mid-term test 2') || name.toLowerCase().includes('mid-term 2')) {
                      name = `Kiểm tra, đánh giá giữa Học kỳ 2 (Tiếng Anh ${config.grade})`;
                    } else if (name.toLowerCase().includes('end-of-year') || name.toLowerCase().includes('final exam') || name.toLowerCase().includes('semester 2')) {
                      name = `Kiểm tra, đánh giá cuối Học kỳ 2 & Cả năm (Tiếng Anh ${config.grade})`;
                    }

                    if (time.toLowerCase().includes('minutes')) {
                      time = time.replace(/minutes/gi, 'phút').replace(/minute/gi, 'phút');
                    }

                    if (String(week).toLowerCase().includes('week')) {
                      week = String(week).replace(/week\s*/gi, 'Tuần ');
                    }

                    if (req.toLowerCase().includes('assess 4 communicative skills') || req.toLowerCase().includes('cefr')) {
                      req = 'Đánh giá 4 kỹ năng giao tiếp (Nghe, Nói, Đọc, Viết) và kiến thức ngôn ngữ theo ma trận đề chuẩn của Bộ GD&ĐT.';
                    } else if (req.toLowerCase().includes('evaluate term 1')) {
                      req = 'Đánh giá tổng kết kết quả học tập và năng lực giao tiếp Tiếng Anh của học sinh trong toàn bộ Học kỳ 1.';
                    } else if (req.toLowerCase().includes('evaluate language retention') || req.toLowerCase().includes('term 2')) {
                      req = 'Đánh giá sự tiến bộ về kỹ năng ngôn ngữ, độ trôi chảy và khả năng vận dụng kiến thức Tiếng Anh trong nửa đầu Học kỳ 2.';
                    } else if (req.toLowerCase().includes('comprehensive assessment') || req.toLowerCase().includes('year-end')) {
                      req = 'Đánh giá toàn diện năng lực tiếng Anh cả năm học, làm căn cứ xét hoàn thành chương trình môn học và lên lớp.';
                    }

                    if (form.toLowerCase().includes('written test') && form.toLowerCase().includes('speaking test')) {
                      form = 'Kiểm tra viết trên giấy/máy tính (Nghe, Đọc, Viết) kết hợp Kiểm tra Nói (Tỉ lệ 70% viết - 30% nói)';
                    } else if (form.toLowerCase().includes('standardized semester')) {
                      form = 'Đề kiểm tra chuẩn hóa cuối kỳ cấp trường (Đánh giá đủ 4 kỹ năng: Nghe, Nói, Đọc, Viết)';
                    } else if (form.toLowerCase().includes('project presentation') || form.toLowerCase().includes('speaking interaction')) {
                      form = 'Kiểm tra viết kết hợp Báo cáo dự án / Vấn đáp giao tiếp tiếng Anh';
                    } else if (form.toLowerCase().includes('standardized school-wide') || form.toLowerCase().includes('final examination')) {
                      form = 'Đề kiểm tra chuẩn hóa cả năm cấp trường (Đánh giá 4 kỹ năng kết hợp Ngữ pháp & Từ vựng)';
                    }

                    return (
                      <tr key={as.id || aIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 font-semibold text-slate-900 dark:text-white border-r border-slate-100 dark:border-slate-800">
                          {name}
                        </td>
                        <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800">
                          {time}
                        </td>
                        <td className="p-3 text-center font-medium border-r border-slate-100 dark:border-slate-800">
                          {formatWeekDisplay(week)}
                        </td>
                        <td className="p-3 text-[11px] border-r border-slate-100 dark:border-slate-800 leading-relaxed">
                          {req}
                        </td>
                        <td className="p-3 text-[11px]">
                          {form}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Chú thích chân bảng kiểm tra đánh giá */}
            <div className="space-y-1 text-xs italic text-slate-600 dark:text-slate-400 pl-2 leading-relaxed pt-1">
              <p>(1) Thời gian làm bài kiểm tra, đánh giá.</p>
              <p>(2) Tuần thứ, tháng, năm thực hiện bài kiểm tra, đánh giá.</p>
              <p>(3) Yêu cầu (mức độ) cần đạt đến thời điểm kiểm tra, đánh giá (theo phân phối chương trình).</p>
              <p>(4) Hình thức bài kiểm tra, đánh giá: viết (trên giấy hoặc trên máy tính); bài thực hành; dự án học tập.</p>
            </div>
          </div>
        </div>

        {/* Section III: Các nội dung khác (nếu có) */}
        {(() => {
          const ot = appendix1.otherTasks || {} as any;
          const adv = ot.advancedTraining && !ot.advancedTraining.startsWith('Organize advanced')
            ? ot.advancedTraining
            : `Tổ chức bồi dưỡng đội tuyển Học sinh giỏi môn ${config.subject} khối ${config.grade} với thời lượng 2 buổi/tuần (bắt đầu từ Tuần 4). Mục tiêu đạt giải cao tại kỳ thi chọn HSG các cấp.`;
          const rem = ot.remedialTeaching && !ot.remedialTeaching.startsWith('Classify slow-progress')
            ? ot.remedialTeaching
            : `Phân loại học sinh tiếp thu chậm sau bài kiểm tra GK1 và GK2 môn ${config.subject}, bố trí giáo viên phụ đạo tăng cường 1 tiết/tuần vào chiều thứ 5, giúp các em củng cố kiến thức nền tảng và nâng cao kỹ năng.`;
          const les = ot.lessonStudyGroup && !ot.lessonStudyGroup.startsWith('Professional lesson')
            ? ot.lessonStudyGroup
            : `Tổ chức sinh hoạt chuyên môn theo nghiên cứu bài học 02 tuần/lần; chú trọng đổi mới phương pháp giảng dạy, ứng dụng công nghệ số và AI hỗ trợ dạy học, chia sẻ học liệu.`;
          const act = ot.otherActivities && !ot.otherActivities.startsWith('Organize English')
            ? ot.otherActivities
            : (isEn ? 'Tổ chức Câu lạc bộ Tiếng Anh (English Speaking Club), Ngày hội Tiếng Anh (English Festival), các hoạt động ngoại khóa trải nghiệm và tham gia đầy đủ các phong trào thi đua của nhà trường.' : 'Tổ chức các hoạt động ngoại khóa, câu lạc bộ bộ môn, hội thi sáng tạo khoa học kỹ thuật cấp trường và tham gia đầy đủ các phong trào thi đua của ngành GD&ĐT.');

          return (
            <div className="space-y-3 font-sans">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
                III. Các nội dung khác (nếu có):
              </h3>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 pl-2 leading-relaxed">
                <p>
                  • <strong>Bồi dưỡng học sinh giỏi:</strong> {adv}
                </p>
                <p>
                  • <strong>Phụ đạo học sinh:</strong> {rem}
                </p>
                <p>
                  • <strong>Sinh hoạt chuyên môn theo NCBH:</strong> {les}
                </p>
                <p>
                  • <strong>Hoạt động giáo dục khác:</strong> {act}
                </p>
              </div>
            </div>
          );
        })()}

        {/* Signature Block - Chuẩn CV 5512: Trái là TỔ TRƯỞNG, Phải là HIỆU TRƯỞNG */}
        <div className="grid grid-cols-2 gap-8 pt-10 text-center font-sans">
          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">TỔ TRƯỞNG</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.departmentHead}</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">..., ngày ...... tháng ...... năm 20...</p>
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">HIỆU TRƯỞNG</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-16" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.principalName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
