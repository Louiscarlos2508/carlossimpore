"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Database, Network, Zap } from "lucide-react";

export const HyperLearnerSection = () => {
  const t = useTranslations("DNA");

  return (
    <section id="dna" className="bg-obsidian text-white py-16 md:py-24 lg:py-32 px-6 md:px-12 relative overflow-hidden font-sans border-t border-white/5">
      
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 relative z-10">
        
        {/* 1. The Manifesto */}
        <div className="max-w-4xl space-y-8 md:space-y-10">
          <div className="flex items-center space-x-3">
             <span className="px-4 py-1.5 bg-logic-neon/10 border border-logic-neon/30 text-logic-neon font-mono text-[10px] uppercase font-black uppercase tracking-[0.2em] md:tracking-[0.4em] italic">
               {t("badge")}
             </span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] italic uppercase">
            {t("title_part1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-logic-neon via-blue-400 to-success-emerald font-black italic">
              {t("title_part2")}
            </span>
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl text-meta-ghost font-light leading-snug lg:leading-snug italic border-l-4 md:border-l-8 border-success-emerald/30 pl-6 md:pl-10 lg:pl-16">
            {t("subtitle")}
          </p>
        </div>

        {/* 2. The Innovation Pillars (Domain Expertise) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          
          {/* Pillar 1: Hybrid Architecture */}
          <div className="group relative bg-coal border border-white/5 rounded-[40px] md:rounded-[56px] p-8 lg:p-12 transition-all hover:bg-logic-neon/5 hover:-translate-y-4 shadow-xl shadow-logic-neon/5">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[28px] bg-logic-neon/10 border border-logic-neon/30 flex items-center justify-center mb-8 md:mb-10 rotate-6 group-hover:rotate-0 transition-transform">
                <Database className="w-8 h-8 md:w-10 md:h-10 text-logic-neon" />
             </div>
             <h4 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 md:mb-6 italic uppercase">{t("pillar1_title")}</h4>
             <p className="text-meta-steel text-sm md:text-base leading-relaxed font-light italic">{t("pillar1_desc")}</p>
             {/* Decorative Number */}
             <span className="absolute right-8 bottom-8 md:right-12 md:bottom-12 text-5xl md:text-6xl font-black text-white/5 italic">01</span>
          </div>

          {/* Pillar 2: Multi-Domain DNA */}
          <div className="group relative bg-coal border border-white/5 rounded-[40px] md:rounded-[56px] p-8 lg:p-12 transition-all hover:bg-success-emerald/5 hover:-translate-y-4 shadow-xl shadow-success-emerald/5">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[28px] bg-success-emerald/10 border border-success-emerald/30 flex items-center justify-center mb-8 md:mb-10 -rotate-3 group-hover:rotate-0 transition-transform">
                <Network className="w-8 h-8 md:w-10 md:h-10 text-success-emerald" />
             </div>
             <h4 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 md:mb-6 italic uppercase">{t("pillar2_title")}</h4>
             <p className="text-meta-steel text-sm md:text-base leading-relaxed font-light italic">{t("pillar2_desc")}</p>
             <span className="absolute right-8 bottom-8 md:right-12 md:bottom-12 text-5xl md:text-6xl font-black text-white/5 italic">02</span>
          </div>

          {/* Pillar 3: AI Accelerator */}
          <div className="group relative bg-coal border border-white/5 rounded-[40px] md:rounded-[56px] p-8 lg:p-12 transition-all hover:bg-blue-400/5 hover:-translate-y-4 shadow-xl shadow-blue-400/5">
             <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[28px] bg-blue-400/10 border border-blue-400/30 flex items-center justify-center mb-8 md:mb-10 rotate-12 group-hover:rotate-0 transition-transform">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
             </div>
             <h4 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 md:mb-6 italic uppercase">{t("pillar3_title")}</h4>
             <p className="text-meta-steel text-sm md:text-base leading-relaxed font-light italic">{t("pillar3_desc")}</p>
             <span className="absolute right-8 bottom-8 md:right-12 md:bottom-12 text-5xl md:text-6xl font-black text-white/5 italic">03</span>
          </div>

        </div>

      </div>
    </section>
  );
};
