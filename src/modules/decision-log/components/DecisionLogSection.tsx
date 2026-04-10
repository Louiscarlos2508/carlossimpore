"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export const DecisionLogSection = () => {
  const t = useTranslations("Log");

  return (
    <section id="decision-log" className="bg-obsidian text-white min-h-screen py-16 md:py-24 lg:py-32 px-6 md:px-12 relative overflow-hidden font-mono border-t border-white/5">
      
      {/* 1. BACKDROP: Matrix Logic Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         <svg width="100%" height="100%">
            <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="0.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
         </svg>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header: Logic Authority */}
        <div className="flex items-end justify-between border-b border-white/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
               <span className="px-3 py-1 bg-success-emerald/10 border border-success-emerald/20 text-success-emerald text-[10px] font-black uppercase tracking-widest italic">
                 {t("mode")}
               </span>
               <span className="text-meta-steel text-[10px] uppercase tracking-widest font-black italic">
                 {t("stream")}
               </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight uppercase italic">
              {t("title_part1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-logic-neon to-success-emerald font-black italic">{t("title_part2")}</span>
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end opacity-40">
             <p className="text-[9px] font-bold text-logic-neon uppercase tracking-widest italic font-black">
               {t("active_threads")}
             </p>
             <p className="text-3xl font-black italic tracking-tighter">128</p>
          </div>
        </div>

        {/* The Logic Console */}
        <div className="bg-coal border border-white/5 rounded-titan-large overflow-hidden shadow-2xl shadow-logic-neon/5 group hover:border-logic-neon/20 transition-all">
          
          {/* Top Bar: Logic Status */}
          <div className="px-10 py-6 bg-surface border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-6">
               <div className="flex space-x-1.5 align-center">
                  <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                  <div className="w-3 h-3 rounded-full bg-success-emerald shadow-[0_0_8px_#10B981]"></div>
               </div>
               <span className="text-[10px] text-meta-ghost font-bold uppercase tracking-widest italic font-black">
                 {t("broker_version")}
               </span>
            </div>
            <div className="text-[10px] text-logic-neon font-black animate-pulse uppercase tracking-[0.2em] italic">
              {t("connected_status")}
            </div>
          </div>

          {/* Logic Stream Content */}
          <div className="p-6 md:p-12 space-y-10 max-h-[600px] overflow-y-auto scrollbar-hide">
            
            {/* Logic Packet 1 */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 group/item">
               <div className="text-[10px] font-black text-meta-steel uppercase tracking-widest pt-1">00:01.02</div>
               <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-success-emerald"></div>
                     <p className="text-success-emerald text-sm font-black uppercase italic">{t("log_1_event")}</p>
                  </div>
                  <p className="text-xs text-meta-ghost leading-relaxed max-w-2xl font-light italic">
                     {t.rich("log_1_desc", {
                       b: (chunks) => <strong className="text-white">{chunks}</strong>
                     })}
                  </p>
               </div>
            </div>

            {/* Logic Packet 2 (The Node Thinking) */}
            <div className="flex flex-col md:flex-row md:space-x-8 -ml-0 md:-ml-4 pl-0 md:pl-12 border-l-0 md:border-l border-logic-neon/20 space-y-2 md:space-y-0 group/item">
               <div className="text-[10px] font-black text-meta-steel uppercase tracking-widest pt-1">00:01.08</div>
               <div className="space-y-4 w-full">
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-logic-neon shadow-[0_0_5px_#3B82F6]"></div>
                     <p className="text-logic-neon text-sm font-black uppercase italic">{t("log_2_event")}</p>
                  </div>
                  <div className="bg-logic-neon/5 border border-logic-neon/20 rounded-2xl p-6 font-mono text-[10px] md:text-[11px] leading-relaxed text-blue-300 shadow-inner group-hover/item:bg-logic-neon/10 transition-colors overflow-x-auto">
                     <code>
                       [RESILIENCE_MODE_ENGAGED] <br/>
                       IF invoice_status == UNPAID && transaction_id != null {'{'} <br/>
                       &nbsp;&nbsp;mark_as_reconciled(status: SUCCESS, latency: 14ms); <br/>
                       &nbsp;&nbsp;trigger_event(DOM_AUTONOMY_DISPATCH); <br/>
                       {'}'} <br/>
                     </code>
                  </div>
                  <p className="text-[10px] text-meta-ghost italic font-black uppercase">
                    {t("log_2_outcome")}
                  </p>
               </div>
            </div>

            {/* Logic Packet 3 */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 group/item">
               <div className="text-[10px] font-black text-meta-steel uppercase tracking-widest pt-1">00:01.09</div>
               <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-success-emerald shadow-[0_0_5px_#10B981]"></div>
                     <p className="text-success-emerald text-sm font-black uppercase italic">{t("log_3_event")}</p>
                  </div>
                  <p className="text-xs text-meta-ghost leading-relaxed font-light italic">
                     {t.rich("log_3_desc", {
                       b: (chunks) => <strong className="text-white">{chunks}</strong>
                     })}
                  </p>
               </div>
            </div>

          </div>

          {/* Live Logic Footer */}
          <div className="px-6 md:px-10 py-8 bg-surface border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between space-y-6 md:space-y-0">
             <div className="flex space-x-12">
                <div className="space-y-1">
                   <p className="text-[8px] text-meta-steel font-bold uppercase tracking-widest">{t("footer_nodes")}</p>
                   <p className="text-xl font-black italic text-white uppercase">2,412</p>
                </div>
                <div className="space-y-1">
                   <p className="text-[8px] text-meta-steel font-bold uppercase tracking-widest">{t("footer_accuracy")}</p>
                   <p className="text-xl font-black italic text-success-emerald">100.0%</p>
                </div>
             </div>
             <button className="px-8 py-4 bg-transparent border border-white/10 text-xs font-black italic uppercase tracking-widest hover:border-white/30 hover:bg-white/5 transition-all rounded-titan">
                {t("button_download")}
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};
