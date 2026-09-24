"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";
import ScrollingPreview from "../scrolling-preview";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />
      <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="project-card group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/5"
            style={{ aspectRatio: "3/2" }}
          >
            {/* `src` can be any aspect ratio (tall pages pan, normal ones fit);
                the wallpaper is an optional /assets/backgrounds/<id>.jpg. */}
            <ScrollingPreview
              src={project.src}
              alt={project.title}
              bg={`/assets/backgrounds/${project.id}.jpg`}
            />

            {/* Mobile tap affordance icon */}
            <div className="project-card-action absolute top-3 right-3 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-foreground/80 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            <div className="project-card-overlay absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="project-card-info flex flex-col h-full items-start justify-end p-4">
                <div className="project-card-title text-lg text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {project.title}
                </div>
                <div className="project-card-meta flex items-center gap-2 mt-1">
                  <div className="project-card-badge text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2 py-0.5 font-medium">
                    {project.category}
                  </div>
                  <span className="project-card-tap-label text-[11px] text-muted-foreground font-medium md:hidden">
                    Tap to view
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="project-drawer-content md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="project-drawer-header shrink-0 border-b border-border bg-background/95 backdrop-blur-md px-4 py-3 md:px-8 md:py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <h4 className="project-drawer-title font-display text-base sm:text-lg md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="project-drawer-category shrink-0 text-[10px] md:text-[11px] uppercase tracking-wider md:tracking-widest text-muted-foreground border border-border/80 bg-muted/40 rounded-full px-2.5 md:px-3 py-0.5">
                  {project.category}
                </span>
              </div>

              <div className="project-drawer-actions flex items-center gap-2 md:gap-3 w-full md:w-auto">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex-1 md:flex-initial"
                  >
                    <button className="project-drawer-source w-full md:w-auto h-9.5 md:h-8.5 px-3.5 rounded-full bg-secondary/80 hover:bg-secondary text-foreground border border-border/80 text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all">
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </button>
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex-1 md:flex-initial"
                  >
                    <button className="project-drawer-visit w-full md:w-auto h-9.5 md:h-8.5 px-4 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-primary/90 active:scale-95 transition-all">
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div
            className="project-drawer-scroll flex-1 overflow-y-auto overscroll-contain"
            data-lenis-prevent
            data-vaul-no-drag
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="project-drawer-body px-4 py-5 md:px-8 md:py-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="project-drawer-skills flex flex-col md:flex-row gap-6 md:gap-10 mb-8 md:mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Frontend
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Backend
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8 md:mb-10" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </div>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

export default ProjectsSection;
