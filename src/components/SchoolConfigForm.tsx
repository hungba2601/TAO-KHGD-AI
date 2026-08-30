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
  BookOpen,
  Zap,
  Utensils,
  Sprout,
  Sliders,
  Check,
  X
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
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [isTech8ModalOpen, setIsTech8ModalOpen] = useState(false);

  const isTechSubject = (s: string) => {
    const norm = (s || '').toLowerCase().trim();
    return norm.includes('công nghệ') || norm.includes('cong nghe');
  };

  const handleSchoolTypeChange = (type: SchoolType) => {
    const availableSubjects = SUBJECTS_BY_SCHOOL_TYPE[type];
    const availableGrades = GRADES_BY_SCHOOL_TYPE[type];
    const nextSubject = availableSubjects.includes(config.subject) ? config.subject : availableSubjects[0];
    const nextGrade = availableGrades.includes(config.grade) ? config.grade : availableGrades[0];
    const isTech8 = isTechSubject(nextSubject) && nextGrade === '8';
    const isTech9 = isTechSubject(nextSubject) && nextGrade === '9';

    onChange({
      ...config,
      schoolType: type,
      subject: nextSubject,
      grade: nextGrade,
      ...(isTech8 && {
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 2
      }),
      ...(isTech9 && {
        technologyModuleGrade9: config.technologyModuleGrade9 || 'dien_gia_dung',
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 1
      })
    });
    if (isTech8) {
      setIsTech8ModalOpen(true);
    } else if (isTech9) {
      setIsTechModalOpen(true);
    }
  };

  const handleSubjectChange = (newSubject: string) => {
    const isTech8 = isTechSubject(newSubject) && config.grade === '8';
    const isTech9 = isTechSubject(newSubject) && config.grade === '9';
    onChange({
      ...config,
      subject: newSubject,
      ...(isTech8 && {
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 2
      }),
      ...(isTech9 && {
        technologyModuleGrade9: config.technologyModuleGrade9 || 'dien_gia_dung',
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 1
      })
    });
    if (isTech8) {
      setIsTech8ModalOpen(true);
    } else if (isTech9) {
      setIsTechModalOpen(true);
    }
  };

  const handleGradeChange = (newGrade: string) => {
    const isTech8 = isTechSubject(config.subject) && newGrade === '8';
    const isTech9 = isTechSubject(config.subject) && newGrade === '9';
    onChange({
      ...config,
      grade: newGrade,
      ...(isTech8 && {
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 2
      }),
      ...(isTech9 && {
        technologyModuleGrade9: config.technologyModuleGrade9 || 'dien_gia_dung',
        periodsPerWeekTerm1: config.periodsPerWeekTerm1 ?? 1,
        periodsPerWeekTerm2: config.periodsPerWeekTerm2 ?? 1
      })
    });
    if (isTech8) {
      setIsTech8ModalOpen(true);
    } else if (isTech9) {
      setIsTechModalOpen(true);
    }
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
                  onChange={(e) => handleSubjectChange(e.target.value)}
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
                  onChange={(e) => handleGradeChange(e.target.value)}
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

            {/* Banner hiển thị Thời lượng & Số tiết cho môn Công nghệ Lớp 8 */}
            {isTechSubject(config.subject) && config.grade === '8' && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 border border-blue-500/30 dark:border-blue-400/20 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="p-2 rounded-xl bg-blue-600 text-white shadow-sm shrink-0">
                      <Sliders className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                        Cấu hình Thời lượng Công nghệ 8 (CT GDPT 2018)
                      </div>
                      <div className="text-xs font-black text-slate-900 dark:text-white truncate">
                        HK1: {config.periodsPerWeekTerm1 ?? 1} tiết/tuần • HK2: {config.periodsPerWeekTerm2 ?? 2} tiết/tuần
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsTech8ModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/60 text-xs font-bold flex items-center gap-1.5 shadow-sm transition shrink-0"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Cấu hình số tiết</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/70 px-2.5 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                  <span className="font-bold text-blue-600 dark:text-blue-400">⏱ Phân bổ:</span>
                  <span><strong>HK1:</strong> {config.periodsPerWeekTerm1 ?? 1} tiết/tuần ({ (config.periodsPerWeekTerm1 ?? 1) * 18 }t)</span>
                  <span>•</span>
                  <span><strong>HK2:</strong> {config.periodsPerWeekTerm2 ?? 2} tiết/tuần ({ (config.periodsPerWeekTerm2 ?? 2) * 17 }t)</span>
                  <span>•</span>
                  <span className="font-extrabold text-blue-700 dark:text-blue-300">
                    Tổng: { (config.periodsPerWeekTerm1 ?? 1) * 18 + (config.periodsPerWeekTerm2 ?? 2) * 17 } tiết/năm
                  </span>
                </div>
              </div>
            )}

            {/* Banner hiển thị Mô đun & Số tiết cho môn Công nghệ Lớp 9 */}
            {isTechSubject(config.subject) && config.grade === '9' && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-emerald-500/10 border border-amber-500/30 dark:border-amber-400/20 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="p-2 rounded-xl bg-amber-500 text-white shadow-sm shrink-0">
                      {config.technologyModuleGrade9 === 'che_bien_thuc_pham' ? (
                        <Utensils className="w-4 h-4" />
                      ) : config.technologyModuleGrade9 === 'trong_cay_an_qua' ? (
                        <Sprout className="w-4 h-4" />
                      ) : (
                        <Zap className="w-4 h-4" />
                      )}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                        Mô đun Tự chọn Lớp 9 (CT GDPT 2018)
                      </div>
                      <div className="text-xs font-black text-slate-900 dark:text-white truncate">
                        {config.technologyModuleGrade9 === 'che_bien_thuc_pham'
                          ? 'MÔ ĐUN II: CHẾ BIẾN THỰC PHẨM'
                          : config.technologyModuleGrade9 === 'trong_cay_an_qua'
                          ? 'MÔ ĐUN III: TRỒNG CÂY ĂN QUẢ'
                          : 'MÔ ĐUN I: LẮP ĐẶT MẠNG ĐIỆN (MẠNG ĐIỆN TRONG NHÀ)'}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsTechModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700/60 text-xs font-bold flex items-center gap-1.5 shadow-sm transition shrink-0"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Đổi Mô đun</span>
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-900/70 px-2.5 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                  <span className="font-bold text-amber-600 dark:text-amber-400">⏱ Phân bổ HK1:</span>
                  <span><strong>Định hướng nghề nghiệp</strong> ({(config.periodsPerWeekTerm1 || 1) === 2 ? 'Tuần 1 → 8: 15 tiết + 1t Ôn tập' : 'Tuần 1 → 16'})</span>
                  <span>•</span>
                  <span><strong>KTĐGGK1</strong> (Tuần 9)</span>
                  <span>•</span>
                  <span><strong>Mô đun tự chọn</strong> ({(config.periodsPerWeekTerm1 || 1) === 2 ? 'Tuần 10 → 16' : 'HK2'})</span>
                  <span>•</span>
                  <span className="font-extrabold text-slate-900 dark:text-white">
                    Tổng: {(config.periodsPerWeekTerm1 || 1) * 18 + (config.periodsPerWeekTerm2 || 1) * 17} tiết/năm
                  </span>
                </div>
              </div>
            )}

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

      {/* MODAL LỰA CHỌN MÔ ĐUN CÔNG NGHỆ 9 & SỐ TIẾT/TUẦN */}
      {isTechModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    Cấu hình Mô đun Tự chọn môn Công nghệ Lớp 9
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Chương trình GDPT 2018 - SGK Kết nối tri thức với cuộc sống
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsTechModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              {/* Notice về phần Định hướng nghề nghiệp bắt buộc */}
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-amber-900 dark:text-amber-200 leading-relaxed text-xs">
                  <strong>Nội dung học chung bắt buộc:</strong> Phần <strong>ĐỊNH HƯỚNG NGHỀ NGHIỆP</strong> (Bài 1 → Bài 5) là phần chung bắt buộc <strong>toàn bộ học sinh học đầu tiên ở cả 3 Option</strong>. Sau khi học xong 5 bài chung, học sinh sẽ tiếp tục học <strong>01 trong 03 Mô đun trải nghiệm nghề nghiệp</strong> dưới đây:
                </div>
              </div>

              {/* 3 Module Options */}
              <div className="space-y-3">
                <label className="block font-bold text-slate-900 dark:text-white text-xs">
                  Chọn 01 trong 03 Mô đun Trải nghiệm nghề nghiệp:
                </label>

                {/* Option 1: Lắp đặt mạng điện */}
                <div
                  onClick={() => handleChange('technologyModuleGrade9', 'dien_gia_dung')}
                  className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3.5 ${
                    (config.technologyModuleGrade9 || 'dien_gia_dung') === 'dien_gia_dung'
                      ? 'border-amber-500 bg-amber-50/60 dark:bg-amber-950/30 shadow-md ring-2 ring-amber-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl text-white shadow-sm shrink-0 ${(config.technologyModuleGrade9 || 'dien_gia_dung') === 'dien_gia_dung' ? 'bg-amber-500' : 'bg-slate-400'}`}>
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        MÔ ĐUN I: LẮP ĐẶT MẠNG ĐIỆN
                      </h4>
                      {(config.technologyModuleGrade9 || 'dien_gia_dung') === 'dien_gia_dung' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">Đang chọn</span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      <strong>(Lắp đặt mạng điện trong nhà)</strong>: Dụng cụ đo kiểm điện, an toàn điện, thiết bị đóng cắt &amp; lấy điện, sơ đồ mạch điện, thiết kế bảng điện, thực hành lắp đặt mạng điện trong nhà.
                    </p>
                    <div className="mt-2 text-[11px] text-amber-700 dark:text-amber-400 font-semibold">
                      ✓ Đầy đủ 7 bài học chuyên sâu + 4 mốc kiểm tra định kỳ + Tích hợp NLS &amp; AI
                    </div>
                  </div>
                </div>

                {/* Option 2: Chế biến thực phẩm */}
                <div
                  onClick={() => handleChange('technologyModuleGrade9', 'che_bien_thuc_pham')}
                  className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3.5 ${
                    config.technologyModuleGrade9 === 'che_bien_thuc_pham'
                      ? 'border-orange-500 bg-orange-50/60 dark:bg-orange-950/30 shadow-md ring-2 ring-orange-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl text-white shadow-sm shrink-0 ${config.technologyModuleGrade9 === 'che_bien_thuc_pham' ? 'bg-orange-500' : 'bg-slate-400'}`}>
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        MÔ ĐUN II: CHẾ BIẾN THỰC PHẨM
                      </h4>
                      {config.technologyModuleGrade9 === 'che_bien_thuc_pham' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white">Đang chọn</span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      An toàn vệ sinh thực phẩm, giá trị dinh dưỡng, sơ chế nguyên liệu, chế biến món ăn không sử dụng nhiệt (nộm/trộn/muối chua), chế biến có sử dụng nhiệt (luộc/hấp/rán), bảo quản thực phẩm.
                    </p>
                    <div className="mt-2 text-[11px] text-orange-700 dark:text-orange-400 font-semibold">
                      ✓ Đầy đủ 7 bài học chuyên sâu + 4 mốc kiểm tra định kỳ + Tích hợp NLS &amp; AI
                    </div>
                  </div>
                </div>

                {/* Option 3: Trồng cây ăn quả */}
                <div
                  onClick={() => handleChange('technologyModuleGrade9', 'trong_cay_an_qua')}
                  className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-start gap-3.5 ${
                    config.technologyModuleGrade9 === 'trong_cay_an_qua'
                      ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 shadow-md ring-2 ring-emerald-500/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl text-white shadow-sm shrink-0 ${config.technologyModuleGrade9 === 'trong_cay_an_qua' ? 'bg-emerald-500' : 'bg-slate-400'}`}>
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                        MÔ ĐUN III: TRỒNG CÂY ĂN QUẢ
                      </h4>
                      {config.technologyModuleGrade9 === 'trong_cay_an_qua' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">Đang chọn</span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      Đặc điểm sinh học cây ăn quả, kỹ thuật nhân giống vô tính (chiết cành, ghép cành, giâm cành), kỹ thuật làm đất &amp; trồng cây, chăm sóc bón phân, phòng trừ sâu bệnh sinh học VietGAP.
                    </p>
                    <div className="mt-2 text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                      ✓ Đầy đủ 8 bài học chuyên sâu + 4 mốc kiểm tra định kỳ + Tích hợp NLS &amp; AI
                    </div>
                  </div>
                </div>
              </div>

              {/* Cấu hình số tiết/tuần cho HK1 và HK2 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <label className="block font-bold text-slate-900 dark:text-white text-xs">
                  Cấu hình thời lượng giảng dạy (Số tiết / tuần):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1 text-[11px]">
                      Số tiết / 1 tuần Học kỳ 1 (18 tuần thực học):
                    </label>
                    <select
                      value={config.periodsPerWeekTerm1 || 1}
                      onChange={(e) => handleChange('periodsPerWeekTerm1', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value={1}>1 tiết / tuần (Tổng HK1 = 18 tiết)</option>
                      <option value={2}>2 tiết / tuần (Tổng HK1 = 36 tiết)</option>
                      <option value={3}>3 tiết / tuần (Tổng HK1 = 54 tiết)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1 text-[11px]">
                      Số tiết / 1 tuần Học kỳ 2 (17 tuần thực học):
                    </label>
                    <select
                      value={config.periodsPerWeekTerm2 || 1}
                      onChange={(e) => handleChange('periodsPerWeekTerm2', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value={1}>1 tiết / tuần (Tổng HK2 = 17 tiết)</option>
                      <option value={2}>2 tiết / tuần (Tổng HK2 = 34 tiết)</option>
                      <option value={3}>3 tiết / tuần (Tổng HK2 = 51 tiết)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-900 dark:text-amber-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <span>📅 Tiến độ phân phối chương trình HK1 môn Công nghệ 9:</span>
                  </div>
                  <div>
                    • Phần chung <strong>Định hướng nghề nghiệp (15 tiết + 1t Ôn tập KTGK1)</strong>:
                    <span className="block pl-3 text-slate-700 dark:text-slate-300">
                      - Bài 1 (3 tiết), Bài 2 (2 tiết), Bài 3 (4 tiết), Bài 4 (3 tiết), Bài 5 (3 tiết) + Ôn tập KTGK1 (1 tiết) = <strong>16 tiết (Tuần 1 → 8)</strong>.
                    </span>
                  </div>
                  <div>
                    • <strong>KTĐGGK1 (Tuần 9)</strong>: Kiểm tra, đánh giá giữa Học kỳ 1.
                  </div>
                  <div>
                    • <strong>Mô đun Tự chọn</strong>: Giảng dạy từ <strong>Tuần 10 → Tuần 16</strong> (7 tuần x 2 tiết = 14 tiết) và tiếp tục thực hành chuyên sâu trong Học kỳ 2.
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Tổng thời lượng cả năm học:</span>
                  <span className="font-extrabold text-amber-600 dark:text-amber-400 text-sm">
                    {(config.periodsPerWeekTerm1 || 1) * 18 + (config.periodsPerWeekTerm2 || 1) * 17} tiết / năm
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsTechModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs transition"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => setIsTechModalOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-500/20 text-xs transition flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Xác nhận &amp; Áp dụng</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CẤU HÌNH THỜI LƯỢNG MÔN CÔNG NGHỆ LỚP 8 */}
      {isTech8ModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                  <Sliders className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Cấu hình Thời lượng Môn Công nghệ Lớp 8</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                      CT GDPT 2018
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    SGK Kết nối tri thức với cuộc sống • Chọn số tiết/tuần cho Học kỳ 1 và Học kỳ 2
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsTech8ModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              {/* Notice */}
              <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="text-blue-900 dark:text-blue-200 leading-relaxed text-xs">
                  <strong>Quy định phân phối thời lượng:</strong> Theo kế hoạch giáo dục của các trường THCS, môn Công nghệ Lớp 8 có thể phân bổ <strong>1 hoặc 2 tiết/tuần</strong> tùy theo từng học kỳ. Bạn có thể chọn nhanh phương án mẫu hoặc tự chỉnh số tiết/tuần bên dưới.
                </div>
              </div>

              {/* 4 Quick Presets */}
              <div className="space-y-3">
                <label className="block font-bold text-slate-900 dark:text-white text-xs">
                  Chọn nhanh Phương án phân bổ phổ biến:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Preset 1: 52 tiết (1t HK1 + 2t HK2) */}
                  <div
                    onClick={() => {
                      onChange({
                        ...config,
                        periodsPerWeekTerm1: 1,
                        periodsPerWeekTerm2: 2
                      });
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
                      (config.periodsPerWeekTerm1 || 1) === 1 && (config.periodsPerWeekTerm2 ?? 2) === 2
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-md ring-2 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs text-blue-600 dark:text-blue-400">
                        Phương án 1 (Chuẩn 52 tiết)
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-500 text-white">
                        Phổ biến nhất
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                      <div>• <strong>HK1:</strong> 1 tiết/tuần (18 tiết)</div>
                      <div>• <strong>HK2:</strong> 2 tiết/tuần (34 tiết)</div>
                      <div className="font-extrabold text-blue-700 dark:text-blue-300 pt-1 border-t border-blue-200/60 dark:border-blue-800/60">
                        👉 Tổng: 52 tiết / năm
                      </div>
                    </div>
                  </div>

                  {/* Preset 2: 53 tiết (2t HK1 + 1t HK2) */}
                  <div
                    onClick={() => {
                      onChange({
                        ...config,
                        periodsPerWeekTerm1: 2,
                        periodsPerWeekTerm2: 1
                      });
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
                      (config.periodsPerWeekTerm1 || 1) === 2 && (config.periodsPerWeekTerm2 ?? 2) === 1
                        ? 'border-cyan-500 bg-cyan-50/70 dark:bg-cyan-950/40 shadow-md ring-2 ring-cyan-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs text-cyan-600 dark:text-cyan-400">
                        Phương án 2 (Phân bổ 53 tiết)
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                      <div>• <strong>HK1:</strong> 2 tiết/tuần (36 tiết)</div>
                      <div>• <strong>HK2:</strong> 1 tiết/tuần (17 tiết)</div>
                      <div className="font-extrabold text-cyan-700 dark:text-cyan-300 pt-1 border-t border-cyan-200/60 dark:border-cyan-800/60">
                        👉 Tổng: 53 tiết / năm
                      </div>
                    </div>
                  </div>

                  {/* Preset 3: 35 tiết (1t HK1 + 1t HK2) */}
                  <div
                    onClick={() => {
                      onChange({
                        ...config,
                        periodsPerWeekTerm1: 1,
                        periodsPerWeekTerm2: 1
                      });
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
                      (config.periodsPerWeekTerm1 || 1) === 1 && (config.periodsPerWeekTerm2 ?? 2) === 1
                        ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 shadow-md ring-2 ring-indigo-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs text-indigo-600 dark:text-indigo-400">
                        Phương án 3 (1 tiết/tuần cả năm)
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                      <div>• <strong>HK1:</strong> 1 tiết/tuần (18 tiết)</div>
                      <div>• <strong>HK2:</strong> 1 tiết/tuần (17 tiết)</div>
                      <div className="font-extrabold text-indigo-700 dark:text-indigo-300 pt-1 border-t border-indigo-200/60 dark:border-indigo-800/60">
                        👉 Tổng: 35 tiết / năm
                      </div>
                    </div>
                  </div>

                  {/* Preset 4: 70 tiết (2t HK1 + 2t HK2) */}
                  <div
                    onClick={() => {
                      onChange({
                        ...config,
                        periodsPerWeekTerm1: 2,
                        periodsPerWeekTerm2: 2
                      });
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition cursor-pointer flex flex-col justify-between ${
                      (config.periodsPerWeekTerm1 || 1) === 2 && (config.periodsPerWeekTerm2 ?? 2) === 2
                        ? 'border-violet-500 bg-violet-50/70 dark:bg-violet-950/40 shadow-md ring-2 ring-violet-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-extrabold text-xs text-violet-600 dark:text-violet-400">
                        Phương án 4 (2 tiết/tuần cả năm)
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                      <div>• <strong>HK1:</strong> 2 tiết/tuần (36 tiết)</div>
                      <div>• <strong>HK2:</strong> 2 tiết/tuần (34 tiết)</div>
                      <div className="font-extrabold text-violet-700 dark:text-violet-300 pt-1 border-t border-violet-200/60 dark:border-violet-800/60">
                        👉 Tổng: 70 tiết / năm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tùy chỉnh chi tiết */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <label className="block font-bold text-slate-900 dark:text-white text-xs">
                  Hoặc Tùy chỉnh chi tiết số tiết mỗi tuần:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1 text-[11px]">
                      Số tiết / 1 tuần Học kỳ 1 (18 tuần thực học):
                    </label>
                    <select
                      value={config.periodsPerWeekTerm1 || 1}
                      onChange={(e) => handleChange('periodsPerWeekTerm1', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={1}>1 tiết / tuần (Tổng HK1 = 18 tiết)</option>
                      <option value={2}>2 tiết / tuần (Tổng HK1 = 36 tiết)</option>
                      <option value={3}>3 tiết / tuần (Tổng HK1 = 54 tiết)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1 text-[11px]">
                      Số tiết / 1 tuần Học kỳ 2 (17 tuần thực học):
                    </label>
                    <select
                      value={config.periodsPerWeekTerm2 ?? 2}
                      onChange={(e) => handleChange('periodsPerWeekTerm2', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-xs outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={1}>1 tiết / tuần (Tổng HK2 = 17 tiết)</option>
                      <option value={2}>2 tiết / tuần (Tổng HK2 = 34 tiết)</option>
                      <option value={3}>3 tiết / tuần (Tổng HK2 = 51 tiết)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-[11px] text-blue-900 dark:text-blue-200 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <span>📅 Phân phối nội dung chương trình Công nghệ 8:</span>
                  </div>
                  <div>
                    • <strong>Học kỳ 1 (18 tuần)</strong>: Chương I (Vẽ kĩ thuật) &amp; Chương II (Cơ khí). KTGK1: <strong>Tuần 9</strong> | KTCK1: <strong>Tuần 16</strong>.
                  </div>
                  <div>
                    • <strong>Học kỳ 2 (17 tuần)</strong>: Chương III (An toàn điện), Chương IV (Kĩ thuật điện) &amp; Chương V (Thiết kế kĩ thuật). KTGK2: <strong>Tuần 26</strong> | KTCK2: <strong>Tuần 31</strong>.
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Tổng thời lượng cả năm học:</span>
                  <span className="font-extrabold text-blue-600 dark:text-blue-400 text-sm">
                    {(config.periodsPerWeekTerm1 || 1) * 18 + (config.periodsPerWeekTerm2 ?? 2) * 17} tiết / năm
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsTech8ModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs transition"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => setIsTech8ModalOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 text-xs transition flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Xác nhận &amp; Áp dụng</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
