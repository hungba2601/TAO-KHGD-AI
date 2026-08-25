# Page Topology - EduPlan AI Pro (KHGD AI VIP V4.0)

## Layout Architecture
```
+-----------------------------------------------------------------------------------+
|  Sidebar (288px, Sticky)  |  Header (64px, Sticky Top)                            |
|  - Brand & VIP V4.0 Badge |  - School title breadcrumb                            |
|  - School Quick Badge     |  - API Key status                                     |
|  - Navigation Links:      |  - Export All / Print / Quick AI Trigger              |
|    1. Cấu hình Kế hoạch   +-------------------------------------------------------+
|    2. Phụ lục 1 (PPCT 35) |  Main Content (Scrollable)                            |
|    3. Phụ lục 2 (STEM/AI) |  1. Config View: SchoolConfigForm                     |
|    4. Phụ lục 3 (Cá nhân) |     - School Type Cards (Tiểu học, THCS, THPT...)     |
|  - Legal Standards Badge  |     - 4 Cards for Data Entry & Cross-check            |
|  - Teacher Profile Footer |  2. Plan View: PlanViewer                             |
|                           |     - Summary Bar                                     |
|                           |     - Tabs for Appendix 1, 2, 3                       |
|                           |     - Interactive editable tables & Docx Exporters    |
+-----------------------------------------------------------------------------------+
|  Modal Overlays:                                                                  |
|  - ApiKeyModal (Gemini API Key storage & validation)                              |
|  - GenerationProgressModal (5-phase progress stepper, real-time terminal logs)    |
+-----------------------------------------------------------------------------------+
```
