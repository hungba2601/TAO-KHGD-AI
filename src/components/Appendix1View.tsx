'use client';

import React, { useState } from 'react';
import {
  FileText,
  Search,
  Trash2,
  Edit3,
  Check,
  Printer,
  Download,
  School,
  Sparkles,
  BookOpen
} from './icons';
import { PlanData, CurriculumItem, EquipmentItem, ClassroomItem, AssessmentItem } from '../types';
import { exportAppendix1Docx } from '../lib/docxExport';

interface Appendix1ViewProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
}

export const Appendix1View: React.FC<Appendix1ViewProps> = ({ planData, onUpdatePlan }) => {
  const { config, appendix1 } = planData;
  const isPrimary = config.schoolType === 'primary';
  const circular = isPrimary ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';
  const isEn =
    config.subject.toLowerCase().includes('tiếng anh') ||
    config.subject.toLowerCase().includes('english') ||
    config.subject.toLowerCase().includes('tieng anh');
  const isSecondaryEnglish = isEn && (config.schoolType === 'secondary' || config.schoolType === 'multi_level');

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
    return `${periods} tiết`;
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);

  const filteredCurriculum = appendix1.curriculum.filter(
    (c) =>
      c.lessonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.yccd && c.yccd.toLowerCase().includes(searchTerm.toLowerCase())) ||
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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Control Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isEn ? "Tìm kiếm Unit, bài học, YCCĐ, Week..." : "Tìm kiếm chủ đề, bài học, YCCĐ, tuần..."}
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
            Xuất File Word (.docx)
          </button>
        </div>
      </div>

      {/* Main Document Paper */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-md space-y-8 font-serif">
        {/* Document Header Standard */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 text-center font-sans">
          <div className="space-y-1 text-xs">
            <p className="text-slate-600 dark:text-slate-400 uppercase">{config.governingBody}</p>
            <p className="font-bold text-slate-900 dark:text-white uppercase">{config.schoolName}</p>
            <p className="font-bold text-amber-700 dark:text-amber-400 uppercase">TỔ: {config.departmentName}</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-bold text-slate-900 dark:text-white">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2 font-sans">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-bold">
            <span>{circular}</span>
            <span>•</span>
            <span>SGK: {isEn ? 'Tiếng Anh Global Success' : 'Kết nối tri thức với cuộc sống'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            PHỤ LỤC 1: KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN
          </h2>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Môn học/Hoạt động giáo dục: <span className="text-amber-600 uppercase font-bold">{config.subject}</span> - Khối lớp: <span className="text-amber-600 font-bold">{config.grade}</span>
          </p>
          <p className="text-xs text-slate-500 italic">Năm học: {config.academicYear} (Khung chương trình: 35 tuần thực học)</p>
        </div>

        {/* Section I: Đặc điểm tình hình */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            I. Đặc điểm tình hình
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <span className="font-bold block text-slate-700 dark:text-slate-300 mb-1">1. Quy mô học sinh:</span>
              <p className="text-slate-600 dark:text-slate-400">
                - Số lớp: <strong className="text-slate-900 dark:text-white">{config.totalClasses} lớp</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                - Tổng số học sinh: <strong className="text-slate-900 dark:text-white">{config.totalStudents} em</strong>
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <span className="font-bold block text-slate-700 dark:text-slate-300 mb-1">2. Đội ngũ giáo viên:</span>
              <p className="text-slate-600 dark:text-slate-400">
                - Trình độ: ĐH ({config.teachersUniversity}), ThS/TS ({config.teachersMasterDoc}), CĐ ({config.teachersCollege})
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                - Chuẩn nghề nghiệp: Tốt ({config.evalExcellent}), Khá ({config.evalGood})
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
              <span className="font-bold block text-slate-700 dark:text-slate-300 mb-1">3. Thiết bị &amp; Phòng học:</span>
              <p className="text-slate-600 dark:text-slate-400">- TBDH tối thiểu chuẩn TT 37/38/39</p>
              <p className="text-slate-600 dark:text-slate-400">- Phòng bộ môn chuẩn TT 14/2020</p>
            </div>
          </div>
        </div>

        {/* Section II: Bảng phân phối chương trình 35 tuần với CỘT CHỦ ĐỀ & CỘT YCCĐ RIÊNG BIỆT */}
        <div className="space-y-3 font-sans">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl flex-1">
              II. Kế hoạch dạy học chi tiết (Phân phối chương trình 35 tuần)
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                {isSecondaryEnglish ? (
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="p-3 w-16 text-center border-r border-slate-200 dark:border-slate-700">Week</th>
                    <th className="p-3 w-64 border-r border-slate-200 dark:border-slate-700">Lesson</th>
                    <th className="p-3 w-16 text-center border-r border-slate-200 dark:border-slate-700">Period</th>
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[260px]">
                      Objectives
                    </th>
                    <th className="p-3 w-36 border-r border-slate-200 dark:border-slate-700">Teaching Equipment</th>
                    <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">Location &amp; Digital Competency / AI</th>
                    <th className="p-3 w-14 text-center">Thao tác</th>
                  </tr>
                ) : (
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                    <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                    <th className="p-3 w-44 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Unit / Chủ đề' : 'Khung / Chủ đề'}</th>
                    <th className="p-3 w-52 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Bài học / Tên bài (SGK Global Success)' : 'Bài học / Tên bài (SGK Kết nối tri thức)'}</th>
                    <th className="p-3 w-16 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Số tiết' : 'Số tiết'}</th>
                    <th className="p-3 w-20 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Thời điểm' : 'Thời điểm'}</th>
                    <th className="p-3 border-r border-slate-200 dark:border-slate-700 min-w-[230px]">
                      Yêu cầu cần đạt (YCCĐ)
                    </th>
                    <th className="p-3 w-36 border-r border-slate-200 dark:border-slate-700">Thiết bị dạy học</th>
                    <th className="p-3 w-40 border-r border-slate-200 dark:border-slate-700">Địa điểm &amp; Năng lực số / AI</th>
                    <th className="p-3 w-14 text-center">Thao tác</th>
                  </tr>
                )}
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredCurriculum.map((lesson) => {
                  const isEditing = editingLessonId === lesson.id;

                  if (isSecondaryEnglish) {
                    return (
                      <tr key={lesson.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                        {/* Week */}
                        <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800 font-semibold text-slate-700 dark:text-slate-300">
                          {formatWeekDisplay(lesson.week)}
                        </td>

                        {/* Lesson */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                value={lesson.topic}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'topic', e.target.value)}
                                placeholder="Unit (e.g. UNIT 1)..."
                                className="w-full p-1 rounded border border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/40 text-xs font-bold text-amber-900 dark:text-amber-200 uppercase"
                              />
                              <input
                                type="text"
                                value={lesson.lessonName}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'lessonName', e.target.value)}
                                placeholder="Lesson name (e.g. Getting started)..."
                                className="w-full p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-white"
                              />
                            </div>
                          ) : (
                            <div>
                              {lesson.topic && lesson.topic.trim().length > 0 ? (
                                <span className="font-bold text-amber-700 dark:text-amber-400 text-[11px] block uppercase tracking-wide">
                                  {lesson.topic}
                                </span>
                              ) : null}
                              <span className="font-semibold text-slate-900 dark:text-white leading-tight block text-xs">
                                {lesson.lessonName}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* Period */}
                        <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                          {isEditing ? (
                            <input
                              type="number"
                              min={1}
                              value={lesson.stt}
                              onChange={(e) =>
                                handleUpdateCurriculumItem(lesson.id, 'stt', parseInt(e.target.value, 10) || 1)
                              }
                              className="w-12 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold"
                            />
                          ) : (
                            lesson.stt
                          )}
                        </td>

                        {/* Objectives */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                          {isEditing ? (
                            <textarea
                              rows={5}
                              value={lesson.yccd || ''}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'yccd', e.target.value)}
                              placeholder="By the end of this unit, students will be able to:&#10;- ..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-sans leading-relaxed"
                            />
                          ) : (
                            <div className="space-y-1 text-slate-700 dark:text-slate-300">
                              {(() => {
                                const rawYccd = (lesson.yccd || '').trim();
                                if (!rawYccd) return null;
                                const lines = rawYccd.includes('\n')
                                  ? rawYccd.split('\n').filter((l) => l.trim().length > 0)
                                  : rawYccd.split(';').map((s) => s.trim()).filter((s) => s.length > 0);

                                return lines.map((line, lIdx) => {
                                  const trimmed = line.trim();
                                  if (trimmed.toLowerCase().startsWith('by the end of')) {
                                    return (
                                      <div key={lIdx} className="font-semibold text-slate-900 dark:text-white leading-snug mb-1">
                                        {trimmed}
                                      </div>
                                    );
                                  }
                                  return (
                                    <div key={lIdx} className="flex items-start gap-1.5 leading-snug pl-1">
                                      <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0 mt-0.5">–</span>
                                      <span className="text-slate-800 dark:text-slate-200">{trimmed.replace(/^[-–•*]\s*/, '')}</span>
                                    </div>
                                  );
                                });
                              })()}
                            </div>
                          )}
                        </td>

                        {/* Teaching Equipment */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px]">
                          {isEditing ? (
                            <textarea
                              rows={3}
                              value={lesson.equipment || ''}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'equipment', e.target.value)}
                              placeholder="Teaching equipment..."
                              className="w-full p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs"
                            />
                          ) : (
                            lesson.equipment
                          )}
                        </td>

                        {/* Location & Digital Competency / AI */}
                        <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                          {isEditing ? (
                            <div className="space-y-1.5">
                              <input
                                type="text"
                                value={lesson.location || ''}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'location', e.target.value)}
                                placeholder="Teaching location..."
                                className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-semibold"
                              />
                              <textarea
                                rows={3}
                                value={lesson.digitalCompetency || ''}
                                onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'digitalCompetency', e.target.value)}
                                placeholder="• [Mã NLS: 1.1.TC1b] ...&#10;• [Mã AI: 8.C1.1] ..."
                                className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-mono leading-relaxed"
                              />
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                                {lesson.location || 'English Language Lab / Classroom'}
                              </span>
                              {lesson.digitalCompetency && (
                                <div className="space-y-1 text-emerald-700 dark:text-emerald-300 text-[11px] leading-snug">
                                  {lesson.digitalCompetency.split('\n').filter((l) => l.trim().length > 0).map((line, dIdx) => (
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

                        {/* Thao tác */}
                        <td className="p-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() => setEditingLessonId(isEditing ? null : lesson.id)}
                              className="p-1 rounded text-slate-400 hover:text-amber-500"
                              title={isEditing ? 'Hoàn thành' : 'Chỉnh sửa'}
                            >
                              {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              onClick={() => handleDeleteLesson(lesson.id)}
                              className="p-1 rounded text-slate-400 hover:text-rose-500"
                              title="Xóa bài học"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={lesson.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                      {/* STT */}
                      <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                        {lesson.stt}
                      </td>

                      {/* CỘT CHỦ ĐỀ */}
                      <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                        {isEditing ? (
                          <input
                            type="text"
                            value={lesson.topic}
                            onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'topic', e.target.value)}
                            placeholder="Nhập tên chủ đề..."
                            className="w-full p-1 rounded border border-amber-300 dark:border-amber-700 bg-amber-50/50 dark:bg-amber-950/40 text-xs font-semibold text-amber-900 dark:text-amber-200"
                          />
                        ) : (
                          <span className="font-semibold text-amber-700 dark:text-amber-400 text-xs block">
                            {lesson.topic}
                          </span>
                        )}
                      </td>

                      {/* TÊN BÀI HỌC */}
                      <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                        {isEditing ? (
                          <input
                            type="text"
                            value={lesson.lessonName}
                            onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'lessonName', e.target.value)}
                            placeholder="Nhập tên bài học..."
                            className="w-full p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-white"
                          />
                        ) : (
                          <span className="font-bold text-slate-900 dark:text-white leading-tight block">
                            {lesson.lessonName}
                          </span>
                        )}
                      </td>

                      {/* Số tiết */}
                      <td className="p-3 text-center font-semibold border-r border-slate-100 dark:border-slate-800">
                        {isEditing ? (
                          <input
                            type="number"
                            min={1}
                            value={lesson.periods}
                            onChange={(e) =>
                              handleUpdateCurriculumItem(lesson.id, 'periods', parseInt(e.target.value, 10) || 1)
                            }
                            className="w-12 p-1 text-center rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs"
                          />
                        ) : (
                          formatPeriodDisplay(lesson.periods)
                        )}
                      </td>

                      {/* Thời điểm */}
                      <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800 font-medium text-slate-600 dark:text-slate-400">
                        {formatWeekDisplay(lesson.week)}
                      </td>

                      {/* YÊU CẦU CẦN ĐẠT (YCCĐ) - TRÌNH BÀY DẠNG TỪNG GẠCH ĐẦU DÒNG */}
                      <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                        {isEditing ? (
                          <textarea
                            rows={4}
                            value={lesson.yccd || ''}
                            onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'yccd', e.target.value)}
                            placeholder="- Kiến thức: ...&#10;- Kỹ năng: ...&#10;- Năng lực số / Phẩm chất: ..."
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

                      {/* Thiết bị dạy học */}
                      <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px]">
                        {lesson.equipment}
                      </td>

                      {/* Địa điểm & Năng lực số / AI */}
                      <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] leading-relaxed">
                        {isEditing ? (
                          <div className="space-y-1.5">
                            <input
                              type="text"
                              value={lesson.location || ''}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'location', e.target.value)}
                              placeholder="Địa điểm dạy học..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-semibold"
                            />
                            <textarea
                              rows={3}
                              value={lesson.digitalCompetency || ''}
                              onChange={(e) => handleUpdateCurriculumItem(lesson.id, 'digitalCompetency', e.target.value)}
                              placeholder="• [Mã NLS: 1.1.TC1b] ...&#10;• [Mã AI: 8.C1.1] ..."
                              className="w-full p-1.5 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-mono leading-relaxed"
                            />
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
                              {lesson.location || 'Phòng học bộ môn'}
                            </span>
                            {lesson.digitalCompetency && (
                              <div className="space-y-1 text-emerald-700 dark:text-emerald-300 text-[11px] leading-snug">
                                {lesson.digitalCompetency.split('\n').filter((l) => l.trim().length > 0).map((line, dIdx) => (
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

                      {/* Thao tác */}
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => setEditingLessonId(isEditing ? null : lesson.id)}
                            className="p-1 rounded text-slate-400 hover:text-amber-500"
                            title={isEditing ? 'Hoàn thành' : 'Chỉnh sửa'}
                          >
                            {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Edit3 className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => handleDeleteLesson(lesson.id)}
                            className="p-1 rounded text-slate-400 hover:text-rose-500"
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
          {isSecondaryEnglish && (
            <p className="text-xs text-slate-500 dark:text-slate-400 italic mt-2 px-1">
              Ghi chú: Tùy vào tình hình thực tế của mỗi lớp, giáo viên có thể linh động sử dụng mã NLS và các công cụ AI cho phù hợp
            </p>
          )}
        </div>

        {/* Section III: Thiết bị dạy học */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            III. Danh mục Thiết bị dạy học (Theo Thông tư 37/38/39/TT-BGDĐT)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                  <th className="p-3 w-12 text-center">STT</th>
                  <th className="p-3 w-64">Tên thiết bị dạy học</th>
                  <th className="p-3 w-28 text-center">Số lượng</th>
                  <th className="p-3">Các bài thí nghiệm / thực hành tương ứng</th>
                  <th className="p-3 w-32">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {appendix1.equipments.map((eq) => (
                  <tr key={eq.id}>
                    <td className="p-3 text-center font-bold">{eq.stt}</td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">{eq.equipmentName}</td>
                    <td className="p-3 text-center font-medium">{eq.quantity}</td>
                    <td className="p-3">{eq.experiments}</td>
                    <td className="p-3 text-slate-500">{eq.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section IV: Phòng học bộ môn */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            IV. Phòng học bộ môn (Theo Thông tư 14/2020/TT-BGDĐT)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                  <th className="p-3 w-12 text-center">STT</th>
                  <th className="p-3 w-64">Tên phòng học bộ môn</th>
                  <th className="p-3 w-24 text-center">Số lượng</th>
                  <th className="p-3">Đặc điểm, trang thiết bị nổi bật</th>
                  <th className="p-3 w-32">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {appendix1.classrooms.map((cr) => (
                  <tr key={cr.id}>
                    <td className="p-3 text-center font-bold">{cr.stt}</td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">{cr.roomName}</td>
                    <td className="p-3 text-center font-medium">{cr.quantity}</td>
                    <td className="p-3">{cr.features}</td>
                    <td className="p-3 text-slate-500">{cr.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section V: Kiểm tra đánh giá định kỳ */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            V. Kế hoạch Kiểm tra, đánh giá định kỳ (GK1, CK1, GK2, CK2)
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                  <th className="p-3 w-12 text-center">STT</th>
                  <th className="p-3 w-48">Bài kiểm tra, đánh giá</th>
                  <th className="p-3 w-24 text-center">Thời gian</th>
                  <th className="p-3 w-24 text-center">Thời điểm</th>
                  <th className="p-3 w-40">Hình thức</th>
                  <th className="p-3">Yêu cầu cần đạt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {appendix1.assessments.map((as) => (
                  <tr key={as.id}>
                    <td className="p-3 text-center font-bold">{as.stt}</td>
                    <td className="p-3 font-semibold text-slate-900 dark:text-white">{as.assessmentName}</td>
                    <td className="p-3 text-center">{as.time}</td>
                    <td className="p-3 text-center font-medium">{formatWeekDisplay(as.week)}</td>
                    <td className="p-3">{as.form}</td>
                    <td className="p-3 text-[11px]">{as.requirements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section VI: Nhiệm vụ khác */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            VI. Các nhiệm vụ chuyên môn khác
          </h3>
          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <p>
              • <strong>Bồi dưỡng học sinh giỏi:</strong> {appendix1.otherTasks.advancedTraining}
            </p>
            <p>
              • <strong>Phụ đạo học sinh:</strong> {appendix1.otherTasks.remedialTeaching}
            </p>
            <p>
              • <strong>Sinh hoạt chuyên môn NCBH:</strong> {appendix1.otherTasks.lessonStudyGroup}
            </p>
            <p>
              • <strong>Hoạt động giáo dục khác:</strong> {appendix1.otherTasks.otherActivities}
            </p>
          </div>
        </div>

        {/* Signature Block */}
        <div className="grid grid-cols-2 gap-8 pt-10 text-center font-sans">
          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">HIỆU TRƯỞNG DUYỆT</p>
            <p className="text-xs text-slate-500 italic">(Ký, ghi rõ họ tên và đóng dấu)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.principalName}</p>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-sm text-slate-900 dark:text-white uppercase">TỔ TRƯỞNG CHUYÊN MÔN</p>
            <p className="text-xs text-slate-500 italic">(Ký và ghi rõ họ tên)</p>
            <div className="h-20" />
            <p className="font-bold text-sm text-slate-900 dark:text-white">{config.departmentHead}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
