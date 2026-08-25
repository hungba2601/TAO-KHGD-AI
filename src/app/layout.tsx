import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TOOL TẠO KHGD (AI) PRO - Ứng dụng AI Xây Dựng Kế Hoạch Giáo Dục Tự Động',
  description: 'Hệ thống xây dựng Kế hoạch Giáo dục Nhà trường & Kế hoạch Dạy học tự động chuẩn Công văn 5512/BGDĐT-GDTrH và Công văn 2345/BGDĐT-GDTH.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
