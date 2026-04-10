"use client";

import React from "react";
import { useTranslations } from "next-intl";

export const CaseStudySection = () => {
  const t = useTranslations("CaseStudy");

  return (
    <section id="treasurer-case-study" className="bg-obsidian text-white py-40 px-6 md:px-12 relative overflow-hidden font-sans border-t border-white/5">
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Case Study Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
             <div className="px-4 py-1.5 bg-success-emerald/10 border border-success-emerald/20 text-success-emerald font-mono text-[10px] md:text-[11px] font-black uppercase tracking-widest italic">{t("badge")}</div>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight uppercase italic">
            {t("title_part1")} <br className="md:hidden"/> <span className="bg-gradient-to-r from-logic-neon to-success-emerald bg-clip-text text-transparent font-black italic">{t("title_part2")}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-meta-ghost font-light italic leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* The Friction-to-Flow Benchmark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative">
          
          {/* Connective Element (Animated pulse arrow) */}
          <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 items-center justify-center pointer-events-none z-20">
             <div className="w-16 h-16 rounded-full bg-logic-neon flex items-center justify-center shadow-[0_0_30px_#3B82F6]">
                <svg className="w-8 h-8 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
             </div>
          </div>

          {/* Left Hand Side: MANUAL FRICTION */}
          <div className="bg-coal border border-white/5 rounded-[40px] md:rounded-[56px] p-8 md:p-12 relative overflow-hidden group hover:bg-surface transition-colors shadow-lg">
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3 text-red-500">
                   <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                   <span className="font-mono text-sm font-black uppercase tracking-widest">{t("before_title")}</span>
                </div>
                <span className="text-4xl md:text-3xl text-red-500 font-black italic">{t("before_time")}</span>
             </div>

             {/* Static Video Mock */}
             <div className="aspect-video bg-obsidian rounded-3xl border border-white/5 flex flex-col items-center justify-center p-8 space-y-4 opacity-40 group-hover:opacity-70 transition-opacity relative grayscale">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500/50 w-full animate-pulse px-4"></div>
                </div>
                <p className="text-[10px] font-mono text-meta-ghost uppercase tracking-widest font-black italic text-center w-full truncate">
                   {t("before_status")}
                </p>
                <div className="absolute inset-0 bg-logic-neon/5 backdrop-sepia-[0.2] mix-blend-overlay"></div>
             </div>

             <div className="mt-10 space-y-4">
                <h5 className="text-xs font-black uppercase tracking-tighter text-meta-steel">{t("before_desc_title")}</h5>
                <p className="text-sm text-meta-ghost font-light italic">{t("before_desc")}</p>
             </div>
          </div>

          {/* Right Hand Side: ENGINE FLOW */}
          <div className="bg-surface border-2 border-success-emerald/40 rounded-[40px] md:rounded-[56px] p-8 md:p-14 relative overflow-hidden group shadow-[0_0_50px_rgba(16,185,129,0.1)] hover:scale-[1.02] transition-transform">
             <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-3 text-success-emerald">
                   <div className="w-3 h-3 rounded-full bg-success-emerald animate-ping"></div>
                   <span className="font-mono text-sm font-black uppercase tracking-widest italic">{t("after_title")}</span>
                </div>
                <span className="text-5xl md:text-5xl text-success-emerald font-black italic">{t("after_time")}</span>
             </div>

             {/* Autonomous Heartbeat Mock */}
             <div className="aspect-video bg-obsidian rounded-[32px] md:rounded-[40px] border border-success-emerald/30 flex flex-col items-center justify-center p-8 md:p-12 space-y-6 relative overflow-hidden group shadow-inner">
                <div className="flex space-x-1.5 h-16 items-end">
                   <div className="w-2 md:w-3 bg-success-emerald h-1/4 animate-pulse"></div>
                   <div className="w-2 md:w-3 bg-success-emerald h-1/2 animate-bounce"></div>
                   <div className="w-2 md:w-3 bg-success-emerald h-full animate-pulse"></div>
                   <div className="w-2 md:w-3 bg-success-emerald h-2/3 animate-bounce"></div>
                   <div className="w-2 md:w-3 bg-success-emerald h-1/3 animate-pulse"></div>
                </div>
                <p className="text-[10px] font-mono text-success-emerald/80 uppercase tracking-widest md:tracking-[0.3em] font-black italic text-center w-full truncate">
                   {t("after_status")}
                </p>
                {/* Data Stream Overlay */}
                <div className="absolute inset-0 bg-success-emerald/5 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             </div>

             <div className="mt-12 flex flex-col xl:flex-row justify-between items-start xl:items-end space-y-6 xl:space-y-0">
                <div className="space-y-4">
                   <h5 className="text-xs font-black italic tracking-tighter text-success-emerald uppercase">{t("after_desc_title")}</h5>
                   <p className="text-meta-steel text-sm font-light italic max-w-sm">{t("after_desc")}</p>
                </div>
                <div className="px-6 py-6 bg-success-emerald/10 rounded-full border border-success-emerald/20 text-success-emerald text-center -rotate-6 group-hover:rotate-0 transition-transform">
                   <p className="text-[9px] font-bold uppercase tracking-widest italic">{t("roi_label")}</p>
                   <p className="text-2xl font-black italic">{t("roi_value")}</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
