import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { DBProvider } from "@/components/providers/DBProvider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Carlos Simpore | Cyber-Architect",
  description: "Architecting Hybrid-Engines for mission-critical business systems.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="antialiased bg-obsidian text-meta-steel min-h-screen relative overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <DBProvider>
            {/* Layer 0: Global Technical Identity */}
            <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none">
              <div className="flex items-center space-x-4 pointer-events-auto">
                <div className="w-10 h-10 border border-logic-neon/50 flex items-center justify-center font-black italic text-logic-neon">
                  CS
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black italic text-xs tracking-tighter uppercase whitespace-nowrap">CARLOS SIMPORE</span>
                  <span className="text-meta-ghost font-mono text-[8px] tracking-widest uppercase">Software Engineer</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8 pointer-events-auto">
                <div className="text-meta-ghost font-mono text-[8px] tracking-[0.3em] uppercase opacity-40 italic">
                  PORTFOLIO_V1 // {locale?.toUpperCase()}
                </div>
                <LanguageSwitcher />
              </div>
            </header>

            {/* The Cyber-Blueprint Grid Overlay */}
            <div className="fixed inset-0 bg-titan-grid pointer-events-none opacity-20 transition-opacity duration-1000 animate-fade-in" />
            
            {/* Glow Effects */}
            <div className="fixed top-0 right-0 w-1/3 h-full bg-logic-neon/5 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-1/4 h-1/2 bg-success-emerald/5 blur-[150px] pointer-events-none" />

            <main className="relative z-10">
              {children}
            </main>
          </DBProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
