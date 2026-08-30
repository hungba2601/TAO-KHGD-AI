'use client';

import React from 'react';
import { Layers, Download, Sparkles, Plus, Trash2 } from './icons';
import { PlanData } from '../types';
import { exportAppendix2Docx } from '../lib/docxExport';

interface Appendix2ViewProps {
  planData: PlanData;
  onUpdatePlan: (updated: PlanData) => void;
}

export const Appendix2View: React.FC<Appendix2ViewProps> = ({ planData, onUpdatePlan }) => {
  const { config, appendix2 } = planData;
  const isEn =
    config.subject.toLowerCase().includes('tiếng anh') ||
    config.subject.toLowerCase().includes('english') ||
    config.subject.toLowerCase().includes('tieng anh');

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Action bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-500" />
          <span className="font-bold text-sm text-slate-900 dark:text-white">
            Phụ lục 2: Hoạt động Giáo dục &amp; Chuyên đề STEM (CV 3456 &amp; CV 5512/2345)
          </span>
        </div>

        <button
          onClick={() => exportAppendix2Docx(planData)}
          className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition flex items-center gap-1.5"
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
            <p className="font-bold text-amber-700 dark:text-amber-400 uppercase">TỔ: {config.departmentName}</p>
          </div>
          <div className="space-y-1 text-xs">
            <p className="font-bold text-slate-900 dark:text-white">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-slate-900 dark:text-white underline">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2 font-sans">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            PHỤ LỤC 2: KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN
          </h2>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Môn học/Hoạt động giáo dục: <span className="text-amber-600 uppercase font-bold">{config.subject}</span> - Khối lớp: <span className="text-amber-600 font-bold">{config.grade}</span>
          </p>
          <p className="text-xs text-slate-500 italic">Năm học: {config.academicYear}</p>
        </div>

        {/* Section 1: Hoạt động trải nghiệm số & AI */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            I. {isEn ? 'Educational Activities, Digital Experience & AI Applications (Các Hoạt động GD, Trải nghiệm số & AI)' : 'Các Hoạt động Giáo dục, Ngày hội Trải nghiệm số & Ứng dụng AI'}
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                  <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                  <th className="p-3 w-64 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Theme / Activity (Chủ đề / Hoạt động)' : 'Chủ đề / Hoạt động'}</th>
                  <th className="p-3 w-20 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Periods' : 'Số tiết'}</th>
                  <th className="p-3 w-32 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Timeline' : 'Thời điểm'}</th>
                  <th className="p-3 w-52 border-r border-slate-200 dark:border-slate-700">{isEn ? 'Location & Host (Địa điểm & Chủ trì)' : 'Địa điểm & Chủ trì'}</th>
                  <th className="p-3">{isEn ? 'Objectives & Facilities (YCCĐ & CSVC)' : 'Yêu cầu cần đạt & Điều kiện CSVC'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {appendix2.activities.map((act) => (
                  <tr key={act.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                      {act.stt}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                      {act.title}
                    </td>
                    <td className="p-3 text-center font-semibold border-r border-slate-100 dark:border-slate-800">
                      {act.periods} {isEn ? (act.periods > 1 ? 'periods' : 'period') : 'tiết'}
                    </td>
                    <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                      {act.timeline}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800">
                      <p className="font-medium text-slate-900 dark:text-white">{act.location}</p>
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">{isEn ? 'Host: ' : 'Chủ trì: '}{act.host}</p>
                    </td>
                    <td className="p-3 text-[11px]">
                      <p className="font-medium text-slate-800 dark:text-slate-200">{act.requirements}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{isEn ? 'Facilities: ' : 'CSVC: '}{act.conditions}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Chuyên đề STEM liên môn */}
        <div className="space-y-3 font-sans">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl">
            II. {isEn ? 'Interdisciplinary STEM Projects (Chuyên đề Dự án STEM Liên môn)' : 'Chuyên đề Dự án STEM Liên môn'}
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 font-bold">
                  <th className="p-3 w-12 text-center border-r border-slate-200 dark:border-slate-700">STT</th>
                  <th className="p-3 w-64 border-r border-slate-200 dark:border-slate-700">{isEn ? 'STEM Project (Tên Dự án STEM)' : 'Tên Dự án STEM'}</th>
                  <th className="p-3 w-24 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Duration' : 'Thời lượng'}</th>
                  <th className="p-3 w-40 text-center border-r border-slate-200 dark:border-slate-700">{isEn ? 'Timeline & Location' : 'Thời điểm & Địa điểm'}</th>
                  <th className="p-3">{isEn ? 'Objectives & Materials (Mục tiêu & Vật liệu)' : 'Mục tiêu & Vật liệu chế tạo'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {appendix2.stemProjects.map((stem) => (
                  <tr key={stem.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                    <td className="p-3 text-center font-bold border-r border-slate-100 dark:border-slate-800">
                      {stem.stt}
                    </td>
                    <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                      {stem.title}
                    </td>
                    <td className="p-3 text-center font-semibold border-r border-slate-100 dark:border-slate-800">
                      {stem.periods} {isEn ? (stem.periods > 1 ? 'periods' : 'period') : 'tiết'}
                    </td>
                    <td className="p-3 text-center border-r border-slate-100 dark:border-slate-800">
                      <p className="font-medium text-slate-900 dark:text-white">{stem.timeline}</p>
                      <p className="text-[10px] text-slate-500">{stem.location}</p>
                    </td>
                    <td className="p-3 text-[11px]">
                      <p className="font-medium text-slate-800 dark:text-slate-200">{stem.requirements}</p>
                      <p className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5">{isEn ? 'Materials: ' : 'Vật liệu: '}{stem.conditions}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
