'use client';

import React, { useState } from 'react';
import {
  FileText,
  Layers,
  Users,
  Settings,
  Sparkles,
  Download,
  Printer,
  School,
  CheckCircle2,
  Calendar,
  BookOpen
} from './icons';
import { PlanData } from '../types';
import { Appendix1View } from './Appendix1View';
import { Appendix2View } from './Appendix2View';
import { Appendix3View } from './Appendix3View';
import { exportAppendix1Docx, exportAppendix2Docx, exportAppendix3Docx } from '../lib/docxExport';

interface PlanViewerProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
  onBackToConfig: () => void;
  initialTab?: 'appendix1' | 'appendix2' | 'appendix3';
}

export const PlanViewer: React.FC<PlanViewerProps> = ({
  planData,
  onUpdatePlan,
  onBackToConfig,
  initialTab = 'appendix1'
}) => {
  const [activeTab, setActiveTab] = useState<'appendix1' | 'appendix2' | 'appendix3'>(initialTab);

  const { config } = planData;
  const isPrimary = config.schoolType === 'primary';
  const circular = isPrimary ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';

  const handleExportAll = async () => {
    await exportAppendix1Docx(planData);
    await exportAppendix2Docx(planData);
    await exportAppendix3Docx(planData);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-16">
      {/* Top Profile Card & Quick Actions */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-lg ring-4 ring-amber-500/10 shrink-0">
            <School className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                {config.schoolName}
              </h2>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                {circular}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Môn <strong className="text-slate-800 dark:text-slate-200">{config.subject}</strong> • Khối{' '}
              <strong className="text-slate-800 dark:text-slate-200">Lớp {config.grade}</strong> • GV:{' '}
              <strong className="text-slate-800 dark:text-slate-200">{config.teacherName}</strong> • Năm học:{' '}
              <strong className="text-slate-800 dark:text-slate-200">{config.academicYear}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-wrap">
          <button
            onClick={onBackToConfig}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5"
          >
            <Settings className="w-3.5 h-3.5" />
            Chỉnh sửa thông số
          </button>

          <button
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            In hồ sơ
          </button>

          <button
            onClick={handleExportAll}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Tải trọn bộ Word (.docx)
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('appendix1')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition shrink-0 ${
            activeTab === 'appendix1'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Phụ lục 1: Kế hoạch Dạy học (PPCT 35 tuần &amp; TBDH)</span>
        </button>

        <button
          onClick={() => setActiveTab('appendix2')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition shrink-0 ${
            activeTab === 'appendix2'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Phụ lục 2: Hoạt động GD &amp; Chuyên đề STEM (CV 3456)</span>
        </button>

        <button
          onClick={() => setActiveTab('appendix3')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition shrink-0 ${
            activeTab === 'appendix3'
              ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Phụ lục 3: Kế hoạch Giáo dục Cá nhân Giáo viên</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-2">
        {activeTab === 'appendix1' && (
          <Appendix1View planData={planData} onUpdatePlan={onUpdatePlan} />
        )}
        {activeTab === 'appendix2' && (
          <Appendix2View planData={planData} onUpdatePlan={onUpdatePlan} />
        )}
        {activeTab === 'appendix3' && (
          <Appendix3View planData={planData} onUpdatePlan={onUpdatePlan} />
        )}
      </div>
    </div>
  );
};
