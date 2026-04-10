"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDB } from "@/components/providers/DBProvider";
import { events } from "@/lib/db/schema";
import { useParams } from "next/navigation";

const Hero = () => {
  const t = useTranslations("Hero");
  const db = useDB();
  const params = useParams();
  const locale = params?.locale as string;

  useEffect(() => {
    const logSession = async () => {
      if (db) {
        try {
          await db.insert(events).values({
            type: "session_start",
            description: `Session started in ${locale}`,
            metadata: { 
              locale, 
              userAgent: navigator.userAgent,
              resolution: `${window.innerWidth}x${window.innerHeight}`
            }
          });
          console.log("Titan Resilience: Session logged to PGLite");
        } catch (err) {
          console.error("Titan Resilience Error:", err);
        }
      }
    };
    logSession();
  }, [db, locale]);

  return (
    <section 
      id="hero-entry" 
      className="relative min-h-[100dvh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-obsidian isolate"
    >
      {/* 1. Backdrop: The Cyber-Blueprint Grid Overlay is handled globally in layout.tsx */}
      {/* 3D Asset Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img 
          src="/images/hero_engine_core.png" 
          alt="Hybrid Engine Core" 
          className="w-full h-full object-cover mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian" />
      </div>

      {/* Additional local glow for the hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />



      {/* 3. Content: The Titan Hook (Split Layout) */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 pt-20 lg:pt-0">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-12">
          
          {/* Authority Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-3 px-6 py-2 rounded-2xl bg-success-emerald/5 border border-success-emerald/20 text-success-emerald font-mono text-[10px] uppercase tracking-widest font-black italic"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{t("badge")}</span>
          </motion.div>

          {/* Main Title */}
          <div className="space-y-2">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-logic-neon font-mono text-xs font-black tracking-[0.5em] uppercase italic mb-4"
            >
              {t("role")}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] italic uppercase"
            >
              {t("title_part1")}<br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-logic-neon via-blue-400 to-success-emerald italic font-black uppercase">
                {t("title_part2")}
              </span>
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl text-lg md:text-xl lg:text-2xl text-meta-ghost font-light leading-relaxed italic"
          >
            {t.rich("sub_headline", {
              tasks: (chunks) => <span className="text-white font-bold border-b-2 border-logic-neon/50 pb-1">{chunks}</span>,
              flows: (chunks) => <span className="text-success-emerald font-bold border-b-2 border-success-emerald/50 pb-1">{chunks}</span>
            })}
          </motion.p>

          {/* 4. CTAs: High-Octane Pathways */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-6"
          >
            {/* Primary CTA */}
            <button className="group relative px-8 py-4 lg:px-10 lg:py-5 bg-logic-neon hover:bg-logic-neon-hover text-white rounded-titan font-black text-base lg:text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.2)] tracking-tighter italic uppercase overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center">
                {t("cta_primary")}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-x-4 -bottom-1 h-3 bg-blue-400 blur-xl opacity-0 group-hover:opacity-60 transition-opacity" />
            </button>

            {/* Secondary CTA */}
            <a href="https://github.com/Louiscarlos2508" target="_blank" rel="noopener noreferrer" className="block px-8 py-4 lg:px-10 lg:py-5 bg-transparent border border-white/10 hover:border-white/30 hover:bg-white/5 text-white/70 rounded-titan font-bold text-sm lg:text-base transition-all tracking-tighter italic uppercase w-full sm:w-auto text-center">
              {t("cta_secondary")}
            </a>
          </motion.div>
        </div>

        {/* Right Column: Cyber-Architect Photo Overlay */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
           className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
           {/* Cyber Frame */}
           <div className="relative w-72 h-[26rem] md:w-96 md:h-[36rem] rounded-2xl overflow-hidden border border-logic-neon/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] group transform transition-transform duration-700 hover:scale-[1.02]">
             {/* Actual profile picture placeholder */}
             <img 
               src="/images/carlos_profile.png" 
               alt="Carlos Simpore - Architecte Système" 
               className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten transition duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal" 
             />
             {/* Tech Overlay lines */}
             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_50%,rgba(10,10,12,0.9)_100%)] pointer-events-none" />
             <div className="absolute bottom-6 left-6 border-l-2 border-logic-neon pl-4 pointer-events-none">
               <p className="font-mono text-[10px] text-logic-neon tracking-[0.2em] uppercase font-black italic">STATUS: ONLINE</p>
               <p className="font-mono text-xs text-white tracking-widest font-bold uppercase transition duration-700 group-hover:text-logic-neon">SOFTWARE_ENGINEER</p>
             </div>
           </div>
           
           {/* Neon decorations */}
           <div className="absolute top-1/2 -right-8 w-24 h-48 border-t-2 border-r-2 border-b-2 border-logic-neon/30 hidden lg:block rounded-r-3xl" />
        </motion.div>
      </div>

      {/* 5. Footer: Navigation Anchor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center space-y-4 cursor-pointer"
      >
         <p className="text-[9px] font-mono font-bold tracking-[0.4em] text-meta-ghost uppercase italic">
           {t("scroll_hint")}
         </p>
         <div className="w-px h-16 bg-gradient-to-b from-logic-neon to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
