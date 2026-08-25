'use client';

import React, { useState } from 'react';
import {
  School,
  GraduationCap,
  Sparkles,
  Users,
  Calendar,
  Layers,
  UploadCloud,
  FileText,
  Trash2,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Award,
  BookOpen
} from './icons';
import { ConfigFormData, SchoolType, AttachedFile } from '../types';
import { INITIAL_CONFIG, SUBJECTS_BY_SCHOOL_TYPE, GRADES_BY_SCHOOL_TYPE } from '../lib/defaultData';
import { extractAndParseFile } from '../lib/fileParser';
import { formatFileSize } from '../lib/utils';

interface SchoolConfigFormProps {
  config: ConfigFormData;
  onChange: (updated: ConfigFormData) => void;
  onSubmitAi: () => void;
  isGenerating: boolean;
}

export const SchoolConfigForm: React.FC<SchoolConfigFormProps> = ({
  config,
  onChange,
  onSubmitAi,
  isGenerating
}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleSchoolTypeChange = (type: SchoolType) => {
    const availableSubjects = SUBJECTS_BY_SCHOOL_TYPE[type];
    const availableGrades = GRADES_BY_SCHOOL_TYPE[type];

    onChange({
      ...config,
      schoolType: type,
      subject: availableSubjects.includes(config.subject) ? config.subject : availableSubjects[0],
      grade: availableGrades.includes(config.grade) ? config.grade : availableGrades[0]
    });
  };

  const handleChange = (field: keyof ConfigFormData, value: any) => {
    onChange({
      ...config,
      [field]: value
    });
  };

  // Cross-check calculation
  const totalTeachersByDegree =
    Number(config.teachersCollege || 0) +
    Number(config.teachersUniversity || 0) +
    Number(config.teachersMasterDoc || 0);

  const totalTeachersByEval =
    Number(config.evalExcellent || 0) +
    Number(config.evalGood || 0) +
    Number(config.evalPass || 0) +
    Number(config.evalFail || 0);

  const isCrossCheckValid = totalTeachersByDegree === totalTeachersByEval;

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const newFiles: AttachedFile[] = fileArray.map((f, i) => ({
      id: `up-${Date.now()}-${i}`,
      name: f.name,
      size: formatFileSize(f.size),
      type: f.type,
      uploadedAt: new Date().toLocaleDateString('vi-VN'),
      status: 'reading',
      extractedCharCount: 0
    }));

    // Add files immediately with reading status
    let currentAttached = [...config.attachedFiles, ...newFiles];
    onChange({
      ...config,
      attachedFiles: currentAttached
    });

    // Process extraction for each file asynchronously
    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      const targetId = newFiles[i].id;

      try {
        const parseRes = await extractAndParseFile(file, {
          subject: config.subject,
          grade: config.grade,
          schoolType: config.schoolType
        });

        currentAttached = currentAttached.map((af) =>
          af.id === targetId
            ? {
                ...af,
                status: 'success' as const,
                content: parseRes.rawText,
                htmlContent: parseRes.htmlContent,
                extractedCharCount: parseRes.extractedCharCount,
                parsedCurriculum: parseRes.parsedCurriculum,
                detectedMetadata: parseRes.detectedMetadata
              }
            : af
        );

        // Auto-synchronize detected metadata with config if available
        let updatedConfig = { ...config, attachedFiles: currentAttached };
        if (parseRes.detectedMetadata) {
          const meta = parseRes.detectedMetadata;
          if (meta.schoolName && (!config.schoolName || config.schoolName.includes('TRƯỜNG THCS AN NHƠN'))) {
            updatedConfig.schoolName = meta.schoolName;
          }
          if (meta.departmentName && (!config.departmentName || config.departmentName.includes('TỔ CÔNG NGHỆ'))) {
            updatedConfig.departmentName = meta.departmentName;
          }
          if (meta.subject && meta.subject !== config.subject) {
            updatedConfig.subject = meta.subject;
          }
          if (meta.grade && meta.grade !== config.grade) {
            updatedConfig.grade = meta.grade;
          }
          if (meta.academicYear && meta.academicYear !== config.academicYear) {
            updatedConfig.academicYear = meta.academicYear;
          }
        }

        onChange(updatedConfig);
      } catch (err: any) {
        currentAttached = currentAttached.map((af) =>
          af.id === targetId
            ? {
                ...af,
                status: 'error' as const,
                errorMessage: err.message || 'Lỗi trích xuất'
              }
            : af
        );
        onChange({
          ...config,
          attachedFiles: currentAttached
        });
      }
    }
  };

  const removeFile = (id: string) => {
    onChange({
      ...config,
      attachedFiles: config.attachedFiles.filter((f) => f.id !== id)
    });
  };

  const handleResetDefaults = () => {
    if (confirm('Bạn có chắc chắn muốn khôi phục về cấu hình chuẩn ban đầu?')) {
      onChange(INITIAL_CONFIG);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Top Banner / Welcome */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-8 text-white shadow-xl shadow-orange-500/15">
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hệ thống AI Soạn thảo Kế hoạch Giáo dục VIP V4.0
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Xây Dựng Kế Hoạch Dạy Học &amp; Giáo Dục Tự Động
          </h2>
          <p className="text-white/90 text-sm leading-relaxed">
            Chuẩn hóa 100% theo Công văn 5512/BGDĐT-GDTrH (THCS &amp; THPT) và Công văn 2345/BGDĐT-GDTH (Tiểu học).
            Tự động tích hợp năng lực số (CV 3456), ứng dụng AI và giáo dục STEM thực nghiệm.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
          <School className="w-96 h-96" />
        </div>
      </div>

      {/* 1. School Type Selector */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          1. Chọn Loại hình Nhà trường &amp; Khung Tiêu chuẩn
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              type: 'primary' as SchoolType,
              title: 'Trường Tiểu học',
              sub: 'Công văn 2345/BGDĐT-GDTH',
              badge: 'Khối 1 - 5'
            },
            {
              type: 'secondary' as SchoolType,
              title: 'Trường THCS',
              sub: 'Công văn 5512/BGDĐT-GDTrH',
              badge: 'Khối 6 - 9'
            },
            {
              type: 'high_school' as SchoolType,
              title: 'Trường THPT',
              sub: 'Công văn 5512/BGDĐT-GDTrH',
              badge: 'Khối 10 - 12'
            },
            {
              type: 'multi_level' as SchoolType,
              title: 'Trường Liên cấp',
              sub: 'CV 5512 & CV 2345 song hành',
              badge: 'Khối 1 - 12'
            }
          ].map((item) => {
            const isSelected = config.schoolType === item.type;
            return (
              <button
                key={item.type}
                type="button"
                onClick={() => handleSchoolTypeChange(item.type)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 ring-2 ring-amber-500/20 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {item.badge}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Grid 4 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Thông tin cơ quan & nhân sự */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm">
            <School className="w-4 h-4 text-amber-500" />
            <span>2. Thông tin Cơ quan, Trường &amp; Nhân sự</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Cơ quan chủ quản (Phòng GD&amp;ĐT / Sở GD&amp;ĐT)
              </label>
              <input
                type="text"
                value={config.governingBody}
                onChange={(e) => handleChange('governingBody', e.target.value)}
                placeholder="VD: PHÒNG GIÁO DỤC VÀ ĐÀO TẠO QUẬN 1"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tên trường học</label>
              <input
                type="text"
                value={config.schoolName}
                onChange={(e) => handleChange('schoolName', e.target.value)}
                placeholder="VD: TRƯỜNG THCS NGUYỄN DU"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Hiệu trưởng phê duyệt</label>
                <input
                  type="text"
                  value={config.principalName}
                  onChange={(e) => handleChange('principalName', e.target.value)}
                  placeholder="VD: TS. Nguyễn Văn Hùng"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tổ / Khối chuyên môn</label>
                <input
                  type="text"
                  value={config.departmentName}
                  onChange={(e) => handleChange('departmentName', e.target.value)}
                  placeholder="VD: TỔ KHOA HỌC TỰ NHIÊN"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tổ trưởng chuyên môn</label>
                <input
                  type="text"
                  value={config.departmentHead}
                  onChange={(e) => handleChange('departmentHead', e.target.value)}
                  placeholder="VD: ThS. Lê Thị Thanh Mai"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Giáo viên thực hiện</label>
                <input
                  type="text"
                  value={config.teacherName}
                  onChange={(e) => handleChange('teacherName', e.target.value)}
                  placeholder="VD: Trần Minh Tuấn"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Môn học, Khối lớp & Năm học */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>3. Môn học, Khối lớp &amp; Thời gian năm học</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Môn học giảng dạy</label>
                <select
                  value={config.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                >
                  {SUBJECTS_BY_SCHOOL_TYPE[config.schoolType].map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Khối lớp</label>
                <select
                  value={config.grade}
                  onChange={(e) => handleChange('grade', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
                >
                  {GRADES_BY_SCHOOL_TYPE[config.schoolType].map((g) => (
                    <option key={g} value={g}>
                      Lớp {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Năm học</label>
              <input
                type="text"
                value={config.academicYear}
                onChange={(e) => handleChange('academicYear', e.target.value)}
                placeholder="VD: 2025 - 2026"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Học kỳ 1 (Bắt đầu - Kết thúc)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={config.term1Start}
                    onChange={(e) => handleChange('term1Start', e.target.value)}
                    className="px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs outline-none"
                  />
                  <input
                    type="date"
                    value={config.term1End}
                    onChange={(e) => handleChange('term1End', e.target.value)}
                    className="px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Học kỳ 2 (Bắt đầu - Kết thúc)</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={config.term2Start}
                    onChange={(e) => handleChange('term2Start', e.target.value)}
                    className="px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs outline-none"
                  />
                  <input
                    type="date"
                    value={config.term2End}
                    onChange={(e) => handleChange('term2End', e.target.value)}
                    className="px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-xs outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Thống kê & Cross-check */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm">
              <Users className="w-4 h-4 text-amber-500" />
              <span>4. Quy mô Học sinh &amp; Đội ngũ Giáo viên</span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                isCrossCheckValid
                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                  : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
              }`}
            >
              {isCrossCheckValid ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Số liệu khớp ({totalTeachersByDegree} GV)
                </>
              ) : (
                <>
                  <AlertCircle className="w-3 h-3 text-amber-600" />
                  Cần cân đối: Trình độ ({totalTeachersByDegree}) ≠ Xếp loại ({totalTeachersByEval})
                </>
              )}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Số lượng lớp phụ trách</label>
                <input
                  type="number"
                  min={1}
                  value={config.totalClasses}
                  onChange={(e) => handleChange('totalClasses', parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-bold outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Tổng số học sinh</label>
                <input
                  type="number"
                  min={1}
                  value={config.totalStudents}
                  onChange={(e) => handleChange('totalStudents', parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white font-bold outline-none"
                />
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Trình độ đào tạo đội ngũ GV</p>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Cao đẳng</span>
                  <input
                    type="number"
                    min={0}
                    value={config.teachersCollege}
                    onChange={(e) => handleChange('teachersCollege', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Đại học</span>
                  <input
                    type="number"
                    min={0}
                    value={config.teachersUniversity}
                    onChange={(e) => handleChange('teachersUniversity', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">ThS / Tiến sĩ</span>
                  <input
                    type="number"
                    min={0}
                    value={config.teachersMasterDoc}
                    onChange={(e) => handleChange('teachersMasterDoc', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Đánh giá Chuẩn nghề nghiệp GV</p>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Tốt</span>
                  <input
                    type="number"
                    min={0}
                    value={config.evalExcellent}
                    onChange={(e) => handleChange('evalExcellent', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Khá</span>
                  <input
                    type="number"
                    min={0}
                    value={config.evalGood}
                    onChange={(e) => handleChange('evalGood', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Đạt</span>
                  <input
                    type="number"
                    min={0}
                    value={config.evalPass}
                    onChange={(e) => handleChange('evalPass', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">Chưa đạt</span>
                  <input
                    type="number"
                    min={0}
                    value={config.evalFail}
                    onChange={(e) => handleChange('evalFail', parseInt(e.target.value, 10) || 0)}
                    className="w-full px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white text-center font-semibold outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Hồ sơ & Định hướng AI/STEM */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>5. Hồ sơ &amp; Định hướng Đổi mới Sư phạm</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Ghi chú định hướng chuyên môn (STEM, Năng lực số, AI)
              </label>
              <textarea
                rows={3}
                value={config.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Nhập yêu cầu trọng tâm cho năm học..."
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition"
              />
            </div>

            {/* Drag & drop upload area */}
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Tài liệu đính kèm (Word, PDF, Kế hoạch năm học, SGK)
              </label>
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                  handleFileUpload(e.dataTransfer.files);
                }}
                className={`border-2 border-dashed rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition text-center ${
                  dragActive
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-amber-400 bg-slate-50/50 dark:bg-slate-800/30'
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept=".doc,.docx,.pdf,.png,.jpg,.jpeg,.txt"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                <UploadCloud className="w-6 h-6 text-amber-500 mb-1" />
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  Kéo thả tài liệu vào đây hoặc <span className="text-amber-600 underline">duyệt tệp</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">Hỗ trợ DOCX, PDF, Hình ảnh (Tối đa 25MB)</p>
              </label>

              {/* Uploaded Files list */}
              {config.attachedFiles.length > 0 && (
                <div className="mt-2.5 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Tài liệu tham khảo ({config.attachedFiles.length})</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-normal">
                      AI sẽ tự động đọc & ưu tiên dữ liệu này
                    </span>
                  </div>
                  {config.attachedFiles.map((f) => (
                    <div
                      key={f.id}
                      className="p-2.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 text-[11px] border border-slate-200/60 dark:border-slate-700/60 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">{f.name}</span>
                          <span className="text-slate-400 shrink-0 text-[10px]">({f.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(f.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition shrink-0"
                          title="Xóa tệp"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Status indicator */}
                      <div className="flex items-center gap-2 text-[10px]">
                        {f.status === 'reading' && (
                          <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                            Đang phân tích & trích xuất nội dung...
                          </span>
                        )}
                        {f.status === 'success' && (
                          <div className="space-y-0.5">
                            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {config.subject.toLowerCase().includes('tiếng anh') || config.subject.toLowerCase().includes('english') || config.subject.toLowerCase().includes('tieng anh')
                                ? (f.parsedCurriculum && f.parsedCurriculum.length > 0
                                    ? `✓ Đã trích xuất ${f.parsedCurriculum.length} mục NLS & AI từ file để gán vào KHGD Global Success`
                                    : `✓ Đã trích xuất ${f.extractedCharCount?.toLocaleString('vi-VN')} ký tự NLS & AI`)
                                : (f.parsedCurriculum && f.parsedCurriculum.length > 0
                                    ? `✓ Đã trích xuất ${f.parsedCurriculum.length} bài học/tiết dạy PPCT (Tích hợp NLS & AI)`
                                    : `✓ Đã trích xuất ${f.extractedCharCount?.toLocaleString('vi-VN')} ký tự văn bản`)}
                            </span>
                            {f.detectedMetadata && (f.detectedMetadata.schoolName || f.detectedMetadata.subject) && (
                              <p className="text-[9.5px] text-amber-700 dark:text-amber-300">
                                ✦ Nhận diện từ file: {[f.detectedMetadata.schoolName, f.detectedMetadata.subject ? `Môn ${f.detectedMetadata.subject}` : '', f.detectedMetadata.grade ? `Lớp ${f.detectedMetadata.grade}` : '', f.detectedMetadata.academicYear].filter(Boolean).join(' • ')}
                              </p>
                            )}
                          </div>
                        )}
                        {f.status === 'error' && (
                          <span className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            {f.errorMessage || 'Lỗi đọc tệp'}
                          </span>
                        )}
                        {!f.status && (
                          <span className="text-slate-400">Tệp đính kèm sẵn sàng</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <button
          type="button"
          onClick={handleResetDefaults}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Khôi phục dữ liệu mẫu
        </button>

        <button
          type="button"
          onClick={onSubmitAi}
          disabled={isGenerating}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2.5 transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
        >
          <Sparkles className="w-5 h-5" />
          <span>
            {isGenerating
              ? 'Đang Khởi Tạo Kế Hoạch...'
              : config.attachedFiles && config.attachedFiles.some((f) => f.content && f.content.trim().length > 0)
              ? 'Khởi Tạo Kế Hoạch Bằng AI (Từ File Tải Lên)'
              : 'Khởi Tạo Kế Hoạch Chuẩn (Dữ Liệu Hệ Thống)'}
          </span>
        </button>
      </div>
    </div>
  );
};
