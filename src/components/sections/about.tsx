"use client";

import { useState } from "react";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Terminal, Sparkles, Rocket, Layers, Coffee } from "lucide-react";

const tabData = [
  {
    id: "who-i-am",
    title: "Who I Am",
    icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />,
    content: `Hi! I'm ${config.author}, a B.Tech student in Computer Science & IT at SOA Institute of Technical Education and Research (Class of 2028). Hailing from Jharkhand, India, I'm a passionate full-stack developer who thrives at the intersection of software engineering, data science, and AI. My journey has been fueled by a continuous desire to learn, build, and ship scalable platforms that solve real problems.`
  },
  {
    id: "tech-arsenal",
    title: "Tech Arsenal",
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
    content: "My toolbelt spans across the entire stack. On the frontend, I craft intuitive interfaces with React, Next.js, and Tailwind CSS. For the backend, I architect robust systems using Python (FastAPI), Java (Spring Boot), and Node.js. I also leverage Data Science tools like Polars, Pandas, and Scikit-learn, alongside solid DevOps practices with Docker and Linux."
  },
  {
    id: "education",
    title: "Education",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    content: "I am currently pursuing my Bachelor of Technology (2024-2028) with a current CGPA of 9.18. Beyond my core academics, I constantly push myself to upskill, earning certifications in Artificial Intelligence from IBM SkillsBuild and HP LIFE. My academic environment paired with endless curiosity helps me stay ahead of the curve."
  },
  {
    id: "philosophy",
    title: "Philosophy",
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    content: "I believe in writing clean, maintainable code that not only works well but is a joy to read and scale. Good design is as little design as possible, and the same goes for code complexity. I prioritize performance, system architecture, and building tools that developers and end-users love to interact with."
  },
  {
    id: "beyond-code",
    title: "Beyond Code",
    icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" />,
    content: "When I'm not pushing pixels or debugging servers, you'll likely find me exploring Linux system architectures, brainstorming my next big open-source utility, or brewing the perfect cup of coffee. I'm always open to connecting and discussing new ideas or potential collaborations!"
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <SectionWrapper
      id="about"
      className="flex flex-col items-center justify-center min-h-[85vh] py-24 md:py-32 relative overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto flex flex-col h-full justify-center">
        <SectionHeader
          id="about"
          title="About Me"
          desc="Behind the code."
          className="mb-16 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-10 md:gap-12 w-full max-w-5xl mx-auto">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-2.5 bg-card/30 backdrop-blur-md rounded-full border border-border/50 shadow-sm mx-auto w-fit max-w-full">
            {tabData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-5 py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-300 flex items-center gap-2.5",
                    isActive ? "text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.icon}
                    <span className="hidden sm:inline-block">{tab.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {tabData.map((tab) => {
                if (tab.id !== activeTab) return null;
                return (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="border-border/40 bg-card/50 backdrop-blur-xl shadow-2xl hover:border-primary/30 transition-colors duration-500 rounded-[2.5rem] overflow-hidden min-h-[350px] md:min-h-[380px] flex items-center relative group">
                      
                      {/* Subtle hover gradient inside the card */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      <CardContent className="p-8 md:p-16 w-full relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8">
                          <div className="p-4 md:p-5 rounded-3xl bg-primary/10 text-primary border border-primary/20 w-fit group-hover:scale-110 transition-transform duration-500">
                            {tab.icon}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {tab.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg md:text-2xl font-medium">
                          {tab.content}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
