"use client";

import React from "react";
import { useTranslations } from "next-intl";

export const ServicesSection = () => {
  const t = useTranslations("Services");

  return (
    <section id="services-catalog" className="bg-obsidian text-white py-40 px-6 md:px-12 relative overflow-hidden font-sans border-t border-white/5">
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* 1. Catalog Header */}
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-3">
             <span className="px-4 py-1.5 bg-logic-neon/10 border border-logic-neon/30 text-logic-neon font-mono text-[10px] uppercase font-black tracking-[0.3em] font-black italic">
               {t("badge")}
             </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] italic uppercase">
            {t("title_part1")} <span className="bg-gradient-to-r from-logic-neon via-blue-400 to-success-emerald bg-clip-text text-transparent font-black italic uppercase">
              {t("title_part2")}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-meta-steel font-light italic leading-relaxed max-w-2xl border-l-4 border-logic-neon/30 pl-6 md:pl-10">
            {t("subtitle")}
          </p>
        </div>

        {/* 2. The Acceleration Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 items-stretch pt-10 md:pt-0">
          
          {/* Tier 1: Discovery */}
          <div className="group relative bg-coal border border-white/5 rounded-[40px] p-8 md:p-12 transition-all hover:border-logic-neon/30 hover:bg-surface hover:-translate-y-4 shadow-xl shadow-logic-neon/5">
             <div className="mb-12">
                <span className="text-[10px] text-logic-neon font-mono font-black italic uppercase tracking-widest">{t("tier1_badge")}</span>
                <h4 className="text-2xl md:text-3xl font-black mt-4 tracking-tighter leading-tight italic uppercase">{t("tier1_title")}</h4>
             </div>
             <p className="text-meta-ghost text-sm leading-relaxed font-light mb-12 italic">{t("tier1_desc")}</p>
             <div className="space-y-6 mb-12 border-t border-white/5 pt-8 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between text-xs font-mono uppercase font-black uppercase tracking-tighter italic">
                   <span className="text-meta-ghost">{t("tier1_feature1")}</span>
                   <span className="text-logic-neon">✓</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono uppercase font-black uppercase tracking-tighter italic">
                   <span className="text-meta-ghost">{t("tier1_feature2")}</span>
                   <span className="text-logic-neon">✓</span>
                </div>
             </div>
             <button className="w-full py-5 rounded-[24px] border border-white/10 hover:bg-logic-neon hover:border-logic-neon hover:text-white transition-all text-xs font-black italic uppercase tracking-widest text-meta-steel">
               {t("tier1_btn")}
             </button>
          </div>

          {/* Tier 2: Implementation (Primary) */}
          <div className="group relative bg-surface border-2 border-logic-neon/50 rounded-[48px] p-8 md:p-12 lg:p-16 shadow-[0_0_60px_rgba(59,130,246,0.1)] hover:-translate-y-6 transition-transform scale-100 md:scale-105 z-10">
             <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-logic-neon rounded-full text-[10px] text-white font-black italic uppercase tracking-[0.2em] shadow-lg shadow-logic-neon/30 whitespace-nowrap">
               {t("tier2_popular")}
             </div>
             <div className="mb-10 md:mb-12 pt-4 md:pt-0">
                <span className="text-[10px] text-blue-400 font-mono font-black italic uppercase tracking-widest">{t("tier2_badge")}</span>
                <h4 className="text-3xl md:text-4xl font-black mt-4 tracking-tighter leading-tight italic uppercase">{t("tier2_title")}</h4>
             </div>
             <p className="text-meta-steel text-sm md:text-base leading-relaxed font-light mb-12 italic">
               {t("tier2_desc")}
             </p>
             <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center transition-colors group-hover:border-logic-neon/30">
                   <p className="text-[8px] text-meta-ghost uppercase tracking-widest font-black italic">{t("tier2_feature1_label")}</p>
                   <p className="text-base md:text-lg text-success-emerald font-black italic uppercase">{t("tier2_feature1_value")}</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-center transition-colors group-hover:border-logic-neon/30">
                   <p className="text-[8px] text-meta-ghost uppercase tracking-widest font-black italic">{t("tier2_feature2_label")}</p>
                   <p className="text-base md:text-lg text-logic-neon font-black italic uppercase">{t("tier2_feature2_value")}</p>
                </div>
             </div>
             <button className="w-full py-5 md:py-6 bg-logic-neon rounded-[32px] text-white text-sm font-black italic uppercase tracking-[0.1em] hover:bg-logic-neon-hover shadow-2xl shadow-logic-neon/30 transition-colors">
               {t("tier2_btn")}
             </button>
          </div>

          {/* Tier 3: Partnership */}
          <div className="group relative bg-coal border border-white/5 rounded-[40px] p-8 md:p-12 transition-all hover:border-success-emerald/30 hover:bg-surface hover:-translate-y-4 shadow-xl shadow-success-emerald/5">
             <div className="mb-12">
                <span className="text-[10px] text-success-emerald font-mono font-black italic uppercase tracking-widest">{t("tier3_badge")}</span>
                <h4 className="text-2xl md:text-3xl font-black mt-4 tracking-tighter leading-tight italic uppercase">{t("tier3_title")}</h4>
             </div>
             <p className="text-meta-ghost text-sm leading-relaxed font-light mb-12 italic">
               {t("tier3_desc")}
             </p>
             <div className="space-y-6 mb-12 border-t border-white/5 pt-8 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between text-xs font-mono uppercase font-black uppercase tracking-tighter italic">
                   <span className="text-meta-ghost">{t("tier3_feature1")}</span>
                   <span className="text-success-emerald">✓</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono uppercase font-black uppercase tracking-tighter italic">
                   <span className="text-meta-ghost">{t("tier3_feature2")}</span>
                   <span className="text-success-emerald">✓</span>
                </div>
             </div>
             <button className="w-full py-5 rounded-[24px] border border-white/10 hover:bg-success-emerald hover:border-success-emerald hover:text-obsidian transition-all text-xs font-black italic uppercase tracking-widest text-meta-steel">
               {t("tier3_btn")}
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};
