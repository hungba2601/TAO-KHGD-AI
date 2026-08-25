'use client';

import React, { useState, useEffect } from 'react';
import { Key, ShieldCheck, AlertCircle, Check, X, ExternalLink, Cpu, Sparkles } from './icons';
import {
  getStoredApiKey,
  setStoredApiKey,
  clearStoredApiKey,
  getStoredModel,
  setStoredModel,
  AVAILABLE_MODELS,
  DEFAULT_MODEL,
  getModelDisplayName
} from '../lib/gemini';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModelChange?: (model: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onModelChange }) => {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [isSaved, setIsSaved] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      const storedKey = getStoredApiKey();
      const storedModel = getStoredModel();
      setApiKey(storedKey);
      setSelectedModel(storedModel || DEFAULT_MODEL);
      setIsSaved(!!storedKey);
      setStatusMsg(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    setStoredModel(selectedModel);
    if (onModelChange) {
      onModelChange(selectedModel);
    }

    if (!apiKey.trim()) {
      clearStoredApiKey();
      setIsSaved(false);
      setStatusMsg({
        type: 'info',
        text: `Đã lưu mô hình ${getModelDisplayName(selectedModel)}. Khi chưa có API Key, hệ thống sẽ sử dụng bộ dữ liệu chuẩn.`
      });
      setTimeout(() => {
        onClose();
      }, 1000);
      return;
    }

    setStoredApiKey(apiKey.trim());
    setIsSaved(true);
    setStatusMsg({
      type: 'success',
      text: `Đã lưu API Key và chọn mô hình ${getModelDisplayName(selectedModel)} thành công!`
    });
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  const handleTestKey = async () => {
    if (!apiKey.trim()) {
      setStatusMsg({ type: 'error', text: 'Vui lòng nhập API Key để kiểm tra kết nối.' });
      return;
    }

    setIsChecking(true);
    setStatusMsg(null);

    try {
      const candidates = [selectedModel, 'gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-2.5-flash'];
      let isSuccess = false;
      let lastErrMsg = '';

      for (const m of candidates) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${apiKey.trim()}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ role: 'user', parts: [{ text: 'Ping test' }] }]
              })
            }
          );

          if (res.ok) {
            isSuccess = true;
            break;
          } else {
            const data = await res.json().catch(() => ({}));
            lastErrMsg = data.error?.message || `HTTP ${res.status}`;
          }
        } catch (e: any) {
          lastErrMsg = e.message;
        }
      }

      if (isSuccess) {
        setStatusMsg({
          type: 'success',
          text: `Kết nối thành công tới mô hình ${getModelDisplayName(selectedModel)}! API Key hợp lệ và sẵn sàng xử lý công việc.`
        });
        setStoredApiKey(apiKey.trim());
        setStoredModel(selectedModel);
        setIsSaved(true);
        if (onModelChange) onModelChange(selectedModel);
      } else {
        setStatusMsg({
          type: 'error',
          text: lastErrMsg || `Không thể kết nối với API Key đã nhập. Vui lòng kiểm tra lại.`
        });
      }
    } catch (e: any) {
      setStatusMsg({ type: 'error', text: `Lỗi kết nối: ${e.message}` });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-7 relative overflow-hidden">
        {/* Background gradient flare */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cấu hình Google Gemini API</h3>
              <p className="text-xs text-slate-500">Tùy chọn API Key và Mô hình AI xử lý kế hoạch giáo dục</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* 1. Model Selection Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-amber-500" />
                Mô hình AI xử lý (AI Model)
              </span>
              <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
                Mặc định: Gemini 3.6 Flash
              </span>
            </label>
            <div className="relative">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition cursor-pointer appearance-none"
              >
                <option value="gemini-3.5-flash">Gemini 3.5 Flash (Tốc độ cao &amp; Phản hồi tức thì)</option>
                <option value="gemini-3.6-flash">Gemini 3.6 Flash (Khuyên dùng - Chuẩn tối ưu &amp; Ổn định)</option>
                <option value="gemini-3.7-flash">Gemini 3.7 Flash (Mới nhất - Suy luận nâng cao &amp; Sáng tạo)</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 pl-1">
              {AVAILABLE_MODELS.find((m) => m.id === selectedModel)?.desc}
            </p>
          </div>

          {/* 2. Google Gemini API Key */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Google Gemini API Key
            </label>
            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
              />
              {apiKey && (
                <button
                  type="button"
                  onClick={() => setApiKey('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Xóa
                </button>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              API Key được lưu trữ cục bộ (Local Storage) trên máy của bạn, không gửi qua máy chủ trung gian.
            </p>
          </div>

          {statusMsg && (
            <div
              className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                statusMsg.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : statusMsg.type === 'error'
                  ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                  : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
              }`}
            >
              {statusMsg.type === 'success' ? (
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : statusMsg.type === 'error' ? (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              )}
              <span>{statusMsg.text}</span>
            </div>
          )}

          <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <p className="font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>Chưa có API Key?</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 font-medium"
              >
                Lấy API Key miễn phí <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p>1. Truy cập Google AI Studio và tạo tài khoản Google.</p>
            <p>2. Nhấn &quot;Create API key&quot; và dán mã khóa vào ô trên.</p>
            <p className="text-slate-500 italic">* Lưu ý: Nếu không có API Key, hệ thống vẫn hoạt động hoàn hảo với bộ dữ liệu mẫu chuẩn Bộ GD&amp;ĐT.</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2.5 mt-6">
          <button
            type="button"
            onClick={handleTestKey}
            disabled={isChecking || !apiKey.trim()}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition disabled:opacity-50"
          >
            {isChecking ? 'Đang kiểm tra...' : `Kiểm tra ${getModelDisplayName(selectedModel)}`}
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 transition flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Lưu cấu hình
          </button>
        </div>
      </div>
    </div>
  );
};
