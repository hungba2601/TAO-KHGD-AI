'use client';

import React from 'react';
import { Users, Download, Sparkles } from './icons';
import { PlanData } from '../types';
import { exportPersonalPlanDocx } from '../lib/docxExport';

interface PersonalPlanViewProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
}

export const PersonalPlanView: React.FC<PersonalPlanViewProps> = ({ planData, onUpdatePlan }) => {
  const { config, personalPlan } = planData;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Action bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="font-bold text-sm text-slate-900 dark:text-white">
            Phụ lục: Kế hoạch Cá nhân Giáo viên ({config.teacherName})
          </span>
        </div>

        <button
          onClick={() => exportPersonalPlanDocx(planData)}
          className="px-4 py-2 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5"
        >
          <Download className="w-3.5 h-3.5" />
          Xuất File Word (.docx)
        </button>
      </div>

      {/* Document Sheet */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-md space-y-8 font-serif">
        {/* Document Header Standard */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800 text-center font-sans">
          <div className="space-y-1 text-xs">
            <p className="text-slate-600 dark:text-slate-400 uppercase">{config.governingBody}</p>
            <p className="font-bold text-slate-900 dark:text-white uppercase">{config.schoolName}</p>
            <p className="font-bold text-indigo-700 dark:text-indigo-400 uppercase">TỔ: {config.departmentName}</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-bold text-slate-900 dark:text-white">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2 font-sans">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            PHỤ LỤC: KẾ HOẠCH CÁ NHÂN CỦA GIÁO VIÊN
          </h2>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Họ và tên giáo viên: <span className="text-indigo-600 font-bold">{config.teacherName}</span> - Môn: <span className="text-indigo-600 uppercase font-bold">{config.subject}</span>
          </p>
          <p className="text-xs text-slate-500 italic">Năm học: {config.academicYear}</p>
        </div>

        {/* Section 1: Bảng kế hoạch cá nhân */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            I. Kế hoạch Thực hiện Nhiệm vụ Giảng dạy và Giáo dục
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                  <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                  <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">Nhiệm vụ</th>
                  <th className="p-3 w-32 text-center border-r border-slate-200 dark:border-slate-700">Thời gian thực hiện</th>
                  <th className="p-3 border-r border-slate-200 dark:border-slate-700">Nội dung công việc</th>
                  <th className="p-3 w-48 border-r border-slate-200 dark:border-slate-700">Chỉ tiêu phấn đấu</th>
                  <th className="p-3 w-52">Biện pháp thực hiện</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {personalPlan.personalPlans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                      {plan.stt}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                      {plan.taskName}
                    </td>
                    <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      {plan.timeFrame}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px]">
                      {plan.content}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-[11px] text-indigo-700 dark:text-indigo-400 font-medium">
                      {plan.targets}
                    </td>
                    <td className="p-3 text-[11px] text-slate-600 dark:text-slate-400">
                      {plan.measures}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Kế hoạch tự bồi dưỡng & AI */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            II. Kế hoạch Tự học, Bồi dưỡng Thường xuyên &amp; Nâng cao Năng lực AI
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block">1. Tự bồi dưỡng chuyên môn &amp; Nghiệp vụ:</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalPlan.selfTraining.professionalStudy}</p>
            </div>

            <div className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-1.5">
              <span className="font-bold text-indigo-900 dark:text-indigo-300 block flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                2. Ứng dụng Công nghệ số &amp; Trí tuệ Nhân tạo (AI):
              </span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalPlan.selfTraining.itAndAiUpskilling}</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block">3. Công tác Chủ nhiệm &amp; Phối hợp Phụ huynh:</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalPlan.selfTraining.homeroomWork}</p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 space-y-1.5">
              <span className="font-bold text-slate-900 dark:text-white block">4. Các Nhiệm vụ Kiêm nhiệm khác:</span>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalPlan.selfTraining.extraDuties}</p>
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
