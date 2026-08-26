'use client';

import React, { useState, useEffect } from 'react';
import {
  Key,
  ShieldCheck,
  Download,
  Printer,
  Sparkles,
  School,
  FileSpreadsheet,
  CheckCircle2,
  Cpu
} from './icons';
import { ConfigFormData, PlanData } from '../types';
import { getStoredApiKey, getStoredModel, getModelDisplayName } from '../lib/gemini';
import {
  exportAppendix1Docx,
  exportAppendix2Docx,
  exportAppendix3Docx,
  exportPersonalPlanDocx
} from '../lib/docxExport';

interface HeaderProps {
  config: ConfigFormData;
  planData: PlanData | null;
  onOpenApiKeyModal: () => void;
  onGenerateQuick: () => void;
  isGenerating: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  planData,
  onOpenApiKeyModal,
  onGenerateQuick,
  isGenerating
}) => {
  const [hasKey, setHasKey] = useState(false);
  const [modelName, setModelName] = useState('Gemini 3.6 Flash');

  useEffect(() => {
    setHasKey(!!getStoredApiKey());
    setModelName(getModelDisplayName(getStoredModel()));
  }, []);

  const handleExportAll = async () => {
    if (!planData) return;
    try {
      await exportAppendix1Docx(planData);
      await exportAppendix2Docx(planData);
      await exportAppendix3Docx(planData);
      await exportPersonalPlanDocx(planData);
    } catch (e: any) {
      alert('Có lỗi khi tải tài liệu: ' + e.message);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30 transition">
      {/* Left breadcrumb & school info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <School className="w-5 h-5 text-amber-500" />
          <div className="leading-tight">
            <h1 className="text-sm font-bold text-slate-900 dark:text-white uppercase">
              {config.schoolName || 'TRƯỜNG THCS NGUYỄN DU'}
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {config.governingBody} • Môn {config.subject} • Khối {config.grade}
            </p>
          </div>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* API Key & Model Status Pill */}
        <button
          onClick={onOpenApiKeyModal}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
            hasKey
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100'
              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700 hover:bg-amber-100'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>{hasKey ? `${modelName}: Đã kết nối` : `Cấu hình API (${modelName})`}</span>
        </button>

        {planData && (
          <>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="In bản kế hoạch"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">In hồ sơ</span>
            </button>

            <button
              onClick={handleExportAll}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition"
              title="Tải về đầy đủ các file Word .docx"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tải trọn bộ Word (.docx)</span>
            </button>
          </>
        )}

        {!planData && (
          <button
            onClick={onGenerateQuick}
            disabled={isGenerating}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-orange-500/20 transition disabled:opacity-50"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isGenerating
                ? 'Đang soạn thảo...'
                : config.attachedFiles && config.attachedFiles.some((f) => f.content && f.content.trim().length > 0)
                ? 'Soạn Bằng AI (Từ File Tải Lên)'
                : 'Tạo Kế Hoạch Chuẩn'}
            </span>
          </button>
        )}
      </div>
    </header>
  );
};
