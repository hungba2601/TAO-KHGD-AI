'use client';

import React from 'react';
import {
  Sparkles,
  FileText,
  Layers,
  Users,
  Download,
  Settings,
  BookOpen,
  Award,
  ChevronRight,
  ShieldCheck
} from './icons';
import { SchoolType, ConfigFormData } from '../types';

interface SidebarProps {
  currentView: 'config' | 'appendix1' | 'appendix2' | 'appendix3' | 'personalPlan';
  onSelectView: (view: 'config' | 'appendix1' | 'appendix2' | 'appendix3' | 'personalPlan') => void;
  config: ConfigFormData;
  onOpenApiKeyModal: () => void;
  hasPlan: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onSelectView,
  config,
  onOpenApiKeyModal,
  hasPlan
}) => {
  const schoolTypeLabels: Record<SchoolType, { name: string; tag: string; circular: string }> = {
    primary: { name: 'Trường Tiểu học', tag: 'CV 2345', circular: 'Công văn 2345/BGDĐT-GDTH' },
    secondary: { name: 'Trường THCS', tag: 'CV 5512', circular: 'Công văn 5512/BGDĐT-GDTrH' },
    high_school: { name: 'Trường THPT', tag: 'CV 5512', circular: 'Công văn 5512/BGDĐT-GDTrH' },
    multi_level: { name: 'Trường Liên cấp', tag: 'CV 5512/2345', circular: 'CV 5512 & CV 2345' }
  };

  const currentSchool = schoolTypeLabels[config.schoolType];

  return (
    <aside className="w-72 bg-gradient-to-b from-sky-50 via-blue-50/70 to-slate-50 border-r border-sky-200/90 text-slate-700 flex flex-col h-screen sticky top-0 shrink-0 select-none shadow-sm">
      {/* Brand / Logo */}
      <div className="p-5 border-b border-sky-200/80 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 ring-2 ring-sky-300/40">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-[13px] tracking-tight leading-tight">
                TOOL TẠO KHGD (AI) PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">Trợ lý Kế hoạch Giáo dục AI</p>
          </div>
        </div>

        {/* Copyright badge in deep blue */}
        <div className="mt-3 px-2.5 py-1.5 rounded-lg bg-blue-100/80 border border-blue-200 text-center shadow-xs">
          <p className="text-[11px] font-bold text-blue-900 tracking-tight">
            Made by Nguyễn Phi Hùng - Zalo 0938750424
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1.5 scrollbar-thin scrollbar-thumb-sky-200">
        <div className="text-[10px] font-bold uppercase tracking-wider text-sky-800/80 px-3 py-1">
          Quy trình Soạn thảo
        </div>

        <button
          onClick={() => onSelectView('config')}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            currentView === 'config'
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500'
              : 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-sky-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Settings className="w-4 h-4" />
            <span>1. Cấu hình &amp; Dữ liệu trường</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
        </button>

        <div className="pt-3 text-[10px] font-bold uppercase tracking-wider text-sky-800/80 px-3 py-1">
          Hồ sơ Giáo dục Chuẩn
        </div>

        <button
          onClick={() => onSelectView('appendix1')}
          disabled={!hasPlan}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            currentView === 'appendix1'
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500'
              : hasPlan
              ? 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-sky-200'
              : 'text-slate-400 cursor-not-allowed opacity-60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4" />
            <div className="text-left">
              <p>Phụ lục 1: PPCT 35 Tuần</p>
              <p className="text-[10px] font-normal opacity-80">Thiết bị &amp; Phòng bộ môn</p>
            </div>
          </div>
          {hasPlan && <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />}
        </button>

        <button
          onClick={() => onSelectView('appendix2')}
          disabled={!hasPlan}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            currentView === 'appendix2'
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500'
              : hasPlan
              ? 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-sky-200'
              : 'text-slate-400 cursor-not-allowed opacity-60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Layers className="w-4 h-4" />
            <div className="text-left">
              <p>Phụ lục 2: Hoạt động GD</p>
              <p className="text-[10px] font-normal opacity-80">Chuyên đề STEM &amp; AI</p>
            </div>
          </div>
          {hasPlan && <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />}
        </button>

        <button
          onClick={() => onSelectView('appendix3')}
          disabled={!hasPlan}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            currentView === 'appendix3'
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500'
              : hasPlan
              ? 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-sky-200'
              : 'text-slate-400 cursor-not-allowed opacity-60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4" />
            <div className="text-left">
              <p>Phụ lục 3: KHGD của GV</p>
              <p className="text-[10px] font-normal opacity-80">Phân phối &amp; Nhiệm vụ dạy học</p>
            </div>
          </div>
          {hasPlan && <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />}
        </button>

        <button
          onClick={() => onSelectView('personalPlan')}
          disabled={!hasPlan}
          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            currentView === 'personalPlan'
              ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-blue-500'
              : hasPlan
              ? 'text-slate-700 hover:bg-white hover:text-blue-700 hover:shadow-sm border border-transparent hover:border-sky-200'
              : 'text-slate-400 cursor-not-allowed opacity-60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4" />
            <div className="text-left">
              <p>Phụ lục: Kế hoạch cá nhân</p>
              <p className="text-[10px] font-normal opacity-80">Nhiệm vụ sư phạm &amp; AI</p>
            </div>
          </div>
          {hasPlan && <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />}
        </button>

        {/* Legal standards badge */}
        <div className="mt-4 p-3.5 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Căn cứ Pháp lý &amp; Chỉ đạo</span>
          </div>
          <ul className="text-[11px] text-slate-600 space-y-1.5 pl-1 leading-tight">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1" />
              <span className="font-medium text-slate-700">{currentSchool.circular}</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1" />
              <span>Thông tư 32/2018 (CT GDPT 2018)</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1" />
              <span>CV 3456 (Khung Năng lực số &amp; STEM)</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1" />
              <span className="text-blue-900 font-medium">Quyết định số 2422/QĐ-BGDĐT về Khung nội dung giáo dục trí tuệ nhân tạo (AI) cho học sinh phổ thông</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Profile & Settings */}
      <div className="p-4 border-t border-sky-200/90 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-xs">
              {config.teacherName ? config.teacherName.charAt(0) : 'GV'}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-900 truncate">{config.teacherName || 'Giáo viên thực hiện'}</p>
              <p className="text-[10px] text-slate-500 truncate font-medium">{config.subject} - Lớp {config.grade}</p>
            </div>
          </div>

          <button
            onClick={onOpenApiKeyModal}
            title="Cấu hình API Key &amp; Mô hình AI"
            className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-sky-100 transition"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
