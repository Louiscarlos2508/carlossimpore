"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ExternalLink, ArrowRight } from "lucide-react";

export const ProjectsSection = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      id: "ledger",
      title: t("project1_title"),
      desc: t("project1_desc"),
      tech: t("project1_tech"),
      link: "#studies",
      isInternal: true,
      color: "success-emerald"
    },
    {
      id: "erp",
      title: t("project2_title"),
      desc: t("project2_desc"),
      tech: t("project2_tech"),
      link: "#",
      isInternal: false,
      color: "logic-neon"
    },
    {
      id: "crm",
      title: t("project3_title"),
      desc: t("project3_desc"),
      tech: t("project3_tech"),
      link: "#briefing",
      isInternal: true,
      color: "blue-400"
    }
  ];

  return (
    <section id="projects" className="bg-obsidian text-white py-24 md:py-32 lg:py-48 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Backdrop: Technical Grid */}
      <div className="absolute inset-0 bg-titan-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-logic-neon/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="space-y-6 mb-20 md:mb-32">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 bg-logic-neon/10 border border-logic-neon/20 rounded-full font-mono text-[10px] text-logic-neon uppercase tracking-widest italic font-black">
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
            {t("title_part1")} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-logic-neon to-success-emerald uppercase">
              {t("title_part2")}
            </span>
          </h2>
          <p className="max-w-2xl text-xl text-meta-ghost font-light italic leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-coal/50 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 flex flex-col justify-between hover:border-logic-neon/40 hover:bg-surface transition-all duration-500 hover:-translate-y-4"
            >
              {/* Card Aura */}
              <div className={`absolute -inset-2 bg-${project.color}/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="space-y-8 relative z-10">
                <p className="font-mono text-[10px] text-meta-ghost uppercase tracking-[0.3em] font-black italic">
                  [{String(index + 1).padStart(2, '0')}] // {project.tech}
                </p>
                <h3 className="text-3xl font-black italic uppercase leading-none tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-sm text-meta-steel/70 font-light italic leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-12 relative z-10">
                <a 
                  href={project.link}
                  className="inline-flex items-center space-x-3 text-xs font-black italic uppercase tracking-widest text-white group-hover:text-logic-neon transition-colors"
                >
                  <span>{project.isInternal ? t("view_case_study") : t("view_live")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
