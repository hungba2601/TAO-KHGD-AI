'use client';

import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  Cpu,
  ArrowRight,
  X,
  FileText
} from './icons';
import { GenerationStep } from '../types';

interface GenerationProgressModalProps {
  isOpen: boolean;
  progressPercent: number;
  currentStep: GenerationStep | null;
  logs: string[];
  onCancel: () => void;
  onFinish: () => void;
  isComplete: boolean;
}

export const GenerationProgressModal: React.FC<GenerationProgressModalProps> = ({
  isOpen,
  progressPercent,
  currentStep,
  logs,
  onCancel,
  onFinish,
  isComplete
}) => {
  React.useEffect(() => {
    if (isComplete && isOpen) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, isOpen, onFinish]);

  if (!isOpen) return null;

  const phases = [
    { title: 'Thẩm định hồ sơ & Căn cứ pháp lý', desc: 'CV 5512/2345, TT 32/2018 & TT 38/2021' },
    { title: 'Xây dựng Phụ lục 1', desc: 'Phân phối 35 tuần, TBDH & Phòng học bộ môn' },
    { title: 'Xây dựng Phụ lục 2', desc: 'Chuyên đề STEM, Trải nghiệm số & Ứng dụng AI' },
    { title: 'Xây dựng Phụ lục 3', desc: 'Kế hoạch cá nhân giáo viên & Hoạt động sư phạm' },
    { title: 'Hoàn thiện hồ sơ & Thể thức văn bản', desc: 'Kiểm tra bảng biểu & thể thức đóng dấu' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden flex flex-col max-h-[90vh]">
        {/* Glow ambient */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {isComplete ? 'Kế Hoạch Đã Hoàn Thành!' : 'AI Đang Xây Dựng Kế Hoạch Giáo Dục'}
              </h3>
              <p className="text-xs text-slate-500">
                {isComplete
                  ? 'Hồ sơ đã sẵn sàng để xem, chỉnh sửa và xuất file Word .docx'
                  : 'Hệ thống đang xử lý và tổng hợp dữ liệu chuyên môn chuẩn Bộ GD&ĐT'}
              </p>
            </div>
          </div>

          <button
            onClick={onCancel}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="my-6 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              Tiến trình tổng thể
            </span>
            <span className="text-slate-900 dark:text-white text-base font-extrabold">{progressPercent}%</span>
          </div>

          <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-full transition-all duration-300 shadow-sm shadow-orange-500/50"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Phase Checklist */}
        <div className="space-y-2 mb-4">
          {phases.map((phase, idx) => {
            const phaseNumber = idx + 1;
            const isPast = progressPercent >= (idx + 1) * 20;
            const isCurrent =
              progressPercent >= idx * 20 && progressPercent < (idx + 1) * 20 && !isComplete;

            return (
              <div
                key={phase.title}
                className={`p-2.5 rounded-xl border flex items-center justify-between transition text-xs ${
                  isPast || (isComplete && idx === 4)
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60 text-slate-800 dark:text-slate-200'
                    : isCurrent
                    ? 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80 text-amber-900 dark:text-amber-200 ring-1 ring-amber-400/30'
                    : 'bg-slate-50/50 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800/50 text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isPast || (isComplete && idx === 4)
                        ? 'bg-emerald-500 text-white'
                        : isCurrent
                        ? 'bg-amber-500 text-white animate-spin'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {isPast || (isComplete && idx === 4) ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      phaseNumber
                    )}
                  </div>
                  <div>
                    <p className="font-bold">{phase.title}</p>
                    <p className="text-[10px] opacity-80">{phase.desc}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold">
                  {isPast || (isComplete && idx === 4)
                    ? 'Hoàn thành'
                    : isCurrent
                    ? 'Đang tạo...'
                    : 'Chờ xử lý'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Real-time Terminal Log window */}
        <div className="flex-1 min-h-[120px] max-h-[160px] bg-slate-950 text-slate-300 font-mono text-[11px] p-3 rounded-2xl border border-slate-800 overflow-y-auto space-y-1">
          <div className="text-amber-400 font-bold border-b border-slate-800 pb-1 mb-1.5 flex items-center justify-between text-[10px]">
            <span>NHẬT KÝ SỰ KIỆN AI (EVENT LOG)</span>
            <span className="text-slate-500">REAL-TIME STREAM</span>
          </div>
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-1.5 leading-relaxed">
              <span className="text-emerald-500 shrink-0">&gt;</span>
              <span className={index === logs.length - 1 ? 'text-white font-semibold' : 'text-slate-400'}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Đóng
          </button>

          <button
            onClick={onFinish}
            disabled={!isComplete && progressPercent < 80}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 flex items-center gap-2 transition disabled:opacity-40"
          >
            <span>{isComplete ? 'Xem Kế Hoạch Đã Tạo' : 'Bỏ qua & Xem Kết Quả'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
