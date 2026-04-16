"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const ArchitectureSection = () => {
  const t = useTranslations("Architecture");

  return (
    <section id="architecture" className="bg-obsidian text-white py-16 md:py-24 lg:py-40 px-6 md:px-12 relative overflow-hidden font-sans border-t border-white/5">
      
      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        
        {/* 1. Technical Hook */}
        <div className="space-y-10">
          <div className="flex items-center space-x-4">
            <span className="px-4 py-1.5 bg-logic-neon/10 border border-logic-neon/30 text-logic-neon font-mono text-[10px] uppercase font-black tracking-[0.3em] font-black italic">
              {t("badge_1")}
            </span>
            <span className="text-meta-ghost text-[10px] font-mono font-bold uppercase tracking-widest italic">
              {t("badge_2")}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] italic uppercase">
            {t("title_part1")} <span className="bg-gradient-to-r from-logic-neon via-blue-400 to-success-emerald bg-clip-text text-transparent font-black italic uppercase">
              {t("title_part2")}
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-meta-steel font-light leading-relaxed italic border-l-4 border-logic-neon/30 pl-10">
            {t("subtitle")}
          </p>
        </div>

        {/* 2. The Architectural Proof (Diagram View) */}
        <div className="bg-coal border border-white/5 rounded-titan-large p-10 md:p-16 shadow-2xl glass-surface group hover:border-logic-neon/10 transition-all overflow-hidden relative">
          
          {/* Abstract Connection UI */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-20 md:space-y-0 relative z-10">
            
            {/* Local-First Node */}
            <div className="w-48 h-48 bg-surface border border-white/10 rounded-3xl flex flex-col items-center justify-center p-8 text-center group-hover:border-logic-neon/40 transition-all hover:-rotate-2">
               <div className="w-14 h-14 bg-logic-neon/20 text-logic-neon font-mono font-black italic text-sm rounded-xl flex items-center justify-center mb-4 uppercase">UI</div>
               <p className="text-[10px] font-bold text-meta-ghost uppercase tracking-widest font-black italic">{t("node_1_badge")}</p>
               <p className="text-[9px] text-meta-steel pt-2 font-mono italic uppercase font-black uppercase tracking-tighter">{t("node_1_tech")}</p>
            </div>

            {/* The Sync Engine (Animated) */}
            <div className="flex flex-col items-center space-y-4">
               <div className="w-32 md:w-48 h-[2px] bg-gradient-to-r from-logic-neon to-success-emerald relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/40 w-1/4 animate-ping"></div>
               </div>
               <p className="text-[8px] font-mono font-black italic text-logic-neon uppercase tracking-[0.5em]">{t("stream_label")}</p>
            </div>

            {/* Titan Core Node */}
            <div className="w-56 h-56 bg-obsidian border-2 border-success-emerald/50 rounded-[40px] flex flex-col items-center justify-center p-10 text-center relative shadow-xl shadow-success-emerald/10 group-hover:scale-105 transition-transform">
               <div className="absolute -top-4 -right-4 bg-success-emerald text-obsidian px-3 py-1 text-[10px] font-black italic uppercase tracking-widest rounded-lg shadow-lg shadow-success-emerald/30">{t("node_2_badge")}</div>
               <div className="w-20 h-20 bg-success-emerald/20 text-success-emerald font-mono font-black italic text-xl rounded-2xl flex items-center justify-center mb-6 shadow-inner uppercase">API</div>
               <p className="text-[10px] font-black italic text-success-emerald uppercase tracking-widest">{t("node_2_title")}</p>
               <p className="text-[8px] text-meta-steel pt-2 font-mono font-black italic uppercase tracking-tighter">{t("node_2_tech")}</p>
            </div>

          </div>

          {/* Backdrop Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
             <svg width="100%" height="100%">
                <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#archGrid)" />
             </svg>
          </div>

        </div>

        {/* 3. Technical Detail Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h4 className="text-logic-neon font-mono text-xs font-bold uppercase tracking-widest italic font-black uppercase tracking-tighter">
               {t("protocol_1_title")}
             </h4>
             <p className="text-meta-steel font-light leading-relaxed italic">
               {t("protocol_1_desc")}
             </p>
          </div>
          <div className="space-y-6">
             <h4 className="text-success-emerald font-mono text-xs font-bold uppercase tracking-widest italic font-black uppercase tracking-tighter">
               {t("protocol_2_title")}
             </h4>
             <p className="text-meta-steel font-light leading-relaxed italic">
               {t("protocol_2_desc")}
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};
