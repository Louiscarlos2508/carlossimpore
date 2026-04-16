import Hero from "@/modules/home/components/Hero";
import { LabSection } from "@/modules/autonomy-lab/components/LabSection";
import { DecisionLogSection } from "@/modules/decision-log/components/DecisionLogSection";
import { HyperLearnerSection } from "@/modules/dna/components/HyperLearnerSection";
import { ArchitectureSection } from "@/modules/architecture/components/ArchitectureSection";
import { CaseStudySection } from "@/modules/studies/components/CaseStudySection";
import { ServicesSection } from "@/modules/services/components/ServicesSection";
import { AIBriefingSection } from "@/modules/ai-briefing/components/AIBriefingSection";
import { ProjectsSection } from "@/modules/projects/components/ProjectsSection";


export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <LabSection />
      <ProjectsSection />
      <DecisionLogSection />

      <HyperLearnerSection />
      <ArchitectureSection />
      <CaseStudySection />
      <ServicesSection />
      <AIBriefingSection />
    </div>
  );
}
