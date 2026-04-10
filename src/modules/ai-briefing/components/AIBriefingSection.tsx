"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export const AIBriefingSection = () => {
  const t = useTranslations("Briefing");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    // In the future: trigger AI integration or redirect to email
    window.location.href = `mailto:hello@carlossimpore.com?subject=Strategic Briefing&body=Bottleneck Identified: ${inputValue}`;
  };

  return (
    <section id="ai-briefing-architect" className="bg-obsidian text-white py-32 px-6 md:px-12 relative overflow-hidden font-sans border-t justify-center items-center flex flex-col border-white/5 relative z-10 w-full">
      
      {/* 1. BACKDROP: Tactical Logic Interface */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
         <div className="absolute inset-0 bg-blue-500/5 blur-[150px]"></div>
      </div>

      <div className="max-w-4xl w-full space-y-12 md:space-y-16 relative z-10">
        
        {/* Header: Conversion Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-coal border border-white/5 md:rounded-full rounded-2xl shadow-xl shadow-logic-neon/5 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
             <div className="w-1.5 h-1.5 rounded-full bg-logic-neon animate-ping"></div>
             <span className="text-[10px] font-mono font-bold text-logic-neon uppercase tracking-widest italic">{t("status")}</span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
             <div className="text-[10px] text-meta-ghost uppercase tracking-widest italic">{t("progress")}</div>
             <div className="w-24 md:w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-success-emerald w-[45%] shadow-[0_0_10px_#10B981]"></div>
             </div>
          </div>
        </div>

        {/* AI Interaction Hub */}
        <div className="bg-coal border border-white/5 rounded-[40px] md:rounded-[56px] p-8 md:p-16 relative overflow-hidden group shadow-2xl hover:border-logic-neon/30 transition-all">
          
          {/* Content: The Strategic Ask */}
          <div className="space-y-8 md:space-y-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight italic uppercase">
              {t("title_part1")} <br className="hidden md:block"/> <span className="bg-gradient-to-r from-logic-neon to-success-emerald bg-clip-text text-transparent font-black italic">{t("title_part2")}</span>
            </h2>
            <div className="text-lg md:text-2xl text-meta-steel leading-relaxed font-light italic border-l-4 border-logic-neon/30 pl-6 md:pl-10">
              "{t("subtitle_part1")} <strong className="text-white font-black">{t("subtitle_highlight")}</strong> {t("subtitle_part2")}<br className="hidden md:block"/> 
              <span className="text-white italic bg-logic-neon/10 px-2 py-1 mt-2 inline-block rounded">{t("question")}</span>"
            </div>
          </div>

          {/* Input: Command Line Interface */}
          <div className="mt-12 md:mt-16 group/input relative">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 border-b-2 border-white/10 group-focus-within/input:border-logic-neon transition-all pb-4 md:pb-8">
               <span className="hidden md:block text-logic-neon font-mono text-3xl animate-pulse font-black italic">_</span>
               <input 
                 type="text" 
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder={t("input_placeholder")}
                 className="bg-transparent border-none focus:ring-0 w-full text-xl md:text-3xl font-light text-white placeholder-meta-ghost/50 tracking-tighter italic outline-none" 
               />
               <button type="submit" className="md:hidden mt-4 w-full py-4 bg-logic-neon text-white font-black italic text-sm rounded-xl">
                 {t("submit_btn")}
               </button>
            </form>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 space-y-4 md:space-y-0">
               <div className="flex items-center space-x-3 text-[10px] font-mono text-meta-ghost uppercase italic">
                  <span className="font-black italic uppercase">{t("ai_status_label")}</span>
                  <span className="text-success-emerald italic">{t("ai_status_value")}</span>
               </div>
               <p className="hidden md:block text-[10px] text-meta-ghost font-mono font-bold uppercase tracking-widest italic">{t("command_hint")}</p>
            </div>
          </div>

        </div>

        {/* Trust Indicator: Final Proof */}
        <div className="text-center space-y-6 md:space-y-8">
           <button onClick={handleSubmit} className="hidden md:inline-block px-10 md:px-12 py-5 md:py-6 bg-logic-neon hover:bg-logic-neon-hover text-white rounded-[32px] font-black italic text-lg md:text-xl transition-transform transform hover:scale-105 shadow-[0_0_60px_rgba(59,130,246,0.2)] tracking-tighter w-full md:w-auto">
              {t("submit_btn")}
           </button>
           <p className="text-xs text-meta-ghost font-light italic px-4 md:px-0">
             {t("disclaimer")}
           </p>
        </div>

      </div>

    </section>
  );
};
