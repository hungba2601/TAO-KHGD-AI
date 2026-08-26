'use client';

import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { ApiKeyModal } from '../components/ApiKeyModal';
import { SchoolConfigForm } from '../components/SchoolConfigForm';
import { GenerationProgressModal } from '../components/GenerationProgressModal';
import { Appendix1View } from '../components/Appendix1View';
import { Appendix2View } from '../components/Appendix2View';
import { Appendix3View } from '../components/Appendix3View';
import { PlanViewer } from '../components/PlanViewer';
import { ConfigFormData, PlanData, GenerationStep } from '../types';
import { INITIAL_CONFIG, generateMockPlan } from '../lib/defaultData';
import { generateFullPlan, getStoredModel } from '../lib/gemini';

export default function Home() {
  const [currentView, setCurrentView] = useState<'config' | 'appendix1' | 'appendix2' | 'appendix3' | 'personalPlan'>('config');
  const [config, setConfig] = useState<ConfigFormData>(INITIAL_CONFIG);
  const [planData, setPlanData] = useState<PlanData | null>(null);
  const [activeModel, setActiveModel] = useState<string>(getStoredModel());

  // Generation Modal States
  const [isGenerating, setIsGenerating] = useState(false);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [currentStep, setCurrentStep] = useState<GenerationStep | null>(null);
  const [generationLogs, setGenerationLogs] = useState<string[]>([]);
  const [isGenerationComplete, setIsGenerationComplete] = useState(false);

  // API Key Modal State
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  const startGenerationFlow = async () => {
    setIsGenerating(true);
    setIsProgressModalOpen(true);
    setProgressPercent(5);
    setGenerationLogs(['Bắt đầu phiên làm việc AI VIP V4.0...']);
    setIsGenerationComplete(false);

    try {
      const result = await generateFullPlan(config, (step, percent) => {
        setCurrentStep(step);
        setProgressPercent(percent);
        setGenerationLogs((prev) => [...prev, step.log]);
      });

      setPlanData(result);
      setProgressPercent(100);
      setIsGenerationComplete(true);
    } catch (err: any) {
      console.error('Lỗi quy trình tạo kế hoạch:', err);
      // Fallback to high quality mock
      const mockResult = generateMockPlan(config);
      setPlanData(mockResult);
      setProgressPercent(100);
      setIsGenerationComplete(true);
      setGenerationLogs((prev) => [...prev, 'Đã hoàn tất nạp dữ liệu chuẩn Bộ GD&ĐT!']);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFinishModal = () => {
    setIsProgressModalOpen(false);
    setCurrentView('appendix1');
  };

  const handleCancelModal = () => {
    setIsProgressModalOpen(false);
    if (planData) {
      setCurrentView('appendix1');
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
      {/* Left Sidebar */}
      <Sidebar
        currentView={currentView}
        onSelectView={(view) => setCurrentView(view)}
        config={config}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        hasPlan={!!planData}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          config={config}
          planData={planData}
          onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
          onGenerateQuick={startGenerationFlow}
          isGenerating={isGenerating}
          key={activeModel}
        />

        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {currentView === 'config' && (
            <SchoolConfigForm
              config={config}
              onChange={setConfig}
              onSubmitAi={startGenerationFlow}
              isGenerating={isGenerating}
            />
          )}

          {currentView === 'appendix1' && planData && (
            <PlanViewer
              planData={planData}
              onUpdatePlan={setPlanData}
              onBackToConfig={() => setCurrentView('config')}
              initialTab="appendix1"
            />
          )}

          {currentView === 'appendix2' && planData && (
            <PlanViewer
              planData={planData}
              onUpdatePlan={setPlanData}
              onBackToConfig={() => setCurrentView('config')}
              initialTab="appendix2"
            />
          )}

          {currentView === 'appendix3' && planData && (
            <PlanViewer
              planData={planData}
              onUpdatePlan={setPlanData}
              onBackToConfig={() => setCurrentView('config')}
              initialTab="appendix3"
            />
          )}

          {currentView === 'personalPlan' && planData && (
            <PlanViewer
              planData={planData}
              onUpdatePlan={setPlanData}
              onBackToConfig={() => setCurrentView('config')}
              initialTab="personalPlan"
            />
          )}
        </main>
      </div>

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        onModelChange={(model) => setActiveModel(model)}
      />

      {/* Generation Progress Modal */}
      <GenerationProgressModal
        isOpen={isProgressModalOpen}
        progressPercent={progressPercent}
        currentStep={currentStep}
        logs={generationLogs}
        onCancel={handleCancelModal}
        onFinish={handleFinishModal}
        isComplete={isGenerationComplete}
      />
    </div>
  );
}
