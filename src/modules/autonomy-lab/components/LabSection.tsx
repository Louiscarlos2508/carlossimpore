"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Zap, ShieldCheck, Database } from "lucide-react";
import { useTranslations } from "next-intl";

const LabHero = () => {
  const t = useTranslations("Lab");
  return (
    <div className="flex flex-col md:flex-row items-start justify-between border-b border-white/5 pb-12">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-3 py-1 bg-logic-neon/10 border border-logic-neon/30 text-logic-neon font-mono text-[9px] font-black uppercase tracking-widest italic"
          >
            {t("node_label")}
          </motion.div>
          <span className="text-meta-ghost text-[9px] font-mono font-bold uppercase tracking-widest italic">
            {t("uptime")}
          </span>
        </div>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight italic uppercase">
          {t("title_part1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-logic-neon to-success-emerald uppercase">{t("title_part2")}</span>
        </h2>
        <p className="text-xl text-meta-ghost font-light italic">
          {t("subtitle")}
        </p>
      </div>
      
      {/* Real-Time Counter */}
      <motion.div 
        whileHover={{ borderColor: "rgba(59, 130, 246, 0.3)" }}
        className="mt-8 md:mt-0 bg-coal/80 border border-white/5 rounded-[32px] p-8 text-right shadow-xl shadow-logic-neon/5"
      >
         <p className="text-[10px] text-meta-ghost font-black uppercase tracking-widest italic">
           {t("tasks_processed")}
         </p>
         <p className="text-5xl font-black italic tracking-tighter text-success-emerald">
           1,428
         </p>
      </motion.div>
    </div>
  );
};

const LabGrid = () => {
  const t = useTranslations("Lab");
  const bars = Array.from({ length: 12 }, (_, i) => ({
    height: Math.floor(Math.random() * 80) + 20,
    delay: i * 0.1
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
      
      {/* Card A: The Heartbeat Graph */}
      <div className="md:col-span-2 bg-coal border border-logic-neon/30 rounded-titan-large p-10 relative overflow-hidden group shadow-2xl shadow-logic-neon/10">
        <div className="flex justify-between items-center mb-12">
           <h4 className="text-xs font-mono font-black italic uppercase tracking-widest text-meta-steel">
             {t("heartbeat_title")}
           </h4>
           <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-logic-neon shadow-[0_0_8px_#3B82F6] animate-pulse"></div>
              <p className="text-[8px] text-logic-neon font-mono uppercase tracking-widest font-black italic">
                {t("sync_active")}
              </p>
           </div>
        </div>

        {/* Waveform Simulation */}
        <div className="h-40 flex items-end space-x-2 opacity-70 group-hover:opacity-100 transition-opacity">
           {bars.map((bar, i) => (
             <motion.div 
              key={i}
              initial={{ height: "10%" }}
              animate={{ height: `${bar.height}%` }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 0.6 + Math.random(),
                delay: bar.delay
              }}
              className="flex-1 bg-gradient-to-t from-logic-neon/20 to-logic-neon/60 rounded-t-sm"
             />
           ))}
        </div>

        <div className="mt-10 flex items-center justify-between text-[10px] font-mono text-meta-ghost font-bold uppercase tracking-widest italic">
           <span>{t("latency")}</span>
           <span className="text-logic-neon">{t("core_version")}</span>
        </div>
      </div>

      {/* Card B: Active Engines Column */}
      <div className="bg-coal border border-white/5 rounded-titan-large p-10 flex flex-col justify-between hover:bg-surface transition-all">
         <h4 className="text-xs font-mono font-black italic uppercase tracking-widest text-meta-ghost">
           {t("engines_title")}
         </h4>
         <div className="space-y-6 my-8">
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 rounded-xl bg-logic-neon/10 border border-logic-neon/30 flex items-center justify-center">
                 <Zap className="w-5 h-5 text-logic-neon" />
               </div>
               <div>
                  <p className="text-xs font-black italic tracking-tight uppercase">{t("engine_1_name")}</p>
                  <p className="text-[8px] text-success-emerald/70 font-mono italic uppercase font-black tracking-tighter">{t("engine_1_desc")}</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 opacity-80">
               <div className="w-10 h-10 rounded-xl bg-success-emerald/10 border border-success-emerald/30 flex items-center justify-center">
                 <Database className="w-5 h-5 text-success-emerald" />
               </div>
               <div>
                  <p className="text-xs font-black italic tracking-tight uppercase">{t("engine_2_name")}</p>
                  <p className="text-[8px] text-meta-ghost font-mono italic uppercase font-black tracking-tighter">{t("engine_2_desc")}</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 opacity-60">
               <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                 <ShieldCheck className="w-5 h-5 text-purple-500" />
               </div>
               <div>
                  <p className="text-xs font-black italic tracking-tight uppercase">{t("engine_3_name")}</p>
                  <p className="text-[8px] text-meta-ghost font-mono italic uppercase font-black tracking-tighter">{t("engine_3_desc")}</p>
               </div>
            </div>
         </div>
         <a href="https://github.com/Louiscarlos2508" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 rounded-full border border-white/5 text-[10px] font-black italic uppercase tracking-widest hover:bg-white/5 hover:border-white/20 hover:text-white transition-all text-meta-steel">
           {t("node_button")}
         </a>
      </div>

      {/* Card C: Resilience Matrix */}
      <div className="bg-coal border border-white/5 rounded-titan-large p-10 flex flex-col items-center justify-center space-y-6 group">
         <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
               <circle cx="48" cy="48" r="44" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-white/5" />
               <circle 
                cx="48" cy="48" r="44" 
                fill="transparent" stroke="currentColor" strokeWidth="4" 
                strokeDasharray="276" strokeDashoffset="0"
                className="text-success-emerald animate-pulse"
              />
            </svg>
            <span className="absolute text-success-emerald font-mono font-black italic tracking-tighter text-xl">100%</span>
         </div>
         <p className="text-[10px] text-meta-ghost text-center font-black italic uppercase tracking-widest">
           {t("success_rate_label")}
         </p>
         <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-success-emerald shadow-[0_0_8px_#10B981]"></div>
            <div className="w-2 h-2 rounded-full bg-success-emerald"></div>
            <div className="w-2 h-2 rounded-full bg-success-emerald"></div>
         </div>
      </div>

    </div>
  );
};

export const LabSection = () => {
  return (
    <section id="lab" className="relative min-h-[100dvh] py-16 md:py-24 lg:py-32 px-6 md:px-12 overflow-hidden bg-obsidian">
      {/* Lab Specific Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 scale-110">
        <img src="/images/lab_waves.png" alt="Lab Wave Telemetry" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <LabHero />
        <LabGrid />
      </div>
    </section>
  );
};
