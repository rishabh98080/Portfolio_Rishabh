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
    content: `Hi! I'm ${config.author}, a full-stack developer who thrives at the intersection of design and engineering. My journey in web development has been fueled by a continuous desire to learn, build, and ship things that matter. Whether it's crafting a pixel-perfect frontend with buttery smooth animations, or architecting a robust, scalable backend, I thrive on the challenge of bringing ambitious ideas to life.`
  },
  {
    id: "philosophy",
    title: "Philosophy",
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    content: "I believe in writing clean, maintainable code that not only works well but is a joy to read and scale. Good design is as little design as possible, and the same goes for code complexity. I prioritize user experience, performance, and accessibility in everything I build."
  },
  {
    id: "tech-arsenal",
    title: "Tech Arsenal",
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
    content: "From React, Next.js, and Tailwind CSS on the frontend to Node.js, Express, and PostgreSQL on the backend, I leverage modern tech stacks to build end-to-end solutions. I'm also well-versed in Docker, AWS, and modern CI/CD pipelines to ensure smooth deployments."
  },
  {
    id: "always-learning",
    title: "Always Learning",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    content: "Tech evolves rapidly. I spend my time exploring new frameworks, optimizing performance, and contributing to exciting open-source projects. Right now, I'm diving deep into advanced animations and 3D web experiences to push the boundaries of frontend engineering."
  },
  {
    id: "beyond-code",
    title: "Beyond Code",
    icon: <Coffee className="w-5 h-5 md:w-6 md:h-6" />,
    content: "When I'm not pushing pixels or debugging servers, you'll likely find me exploring tech communities, reading sci-fi novels, brewing the perfect cup of coffee, or brainstorming my next big project. Let's connect and build something amazing together!"
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
