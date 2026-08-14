"use client";

import type { CSSProperties } from "react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { SKILLS } from "@/data/constants";
import { cn } from "@/lib/utils";

/**
 * Tech-stack section.
 *
 * On capable devices the skills live in the interactive 3D keyboard's keycaps,
 * so this is just a header and the section is tall (the keyboard scrubs through
 * it on scroll). When the 3D scene is disabled (low-end / reduced-motion), the
 * keyboard isn't there to convey the skills — so we render them as a real HTML
 * grid instead. Progressive enhancement: the content survives without WebGL.
 */
const SkillsSection = () => {
  const showGrid = true;

  if (showGrid) {
    return (
      <SectionWrapper
        id="skills"
        className="flex w-full min-h-screen flex-col justify-center py-24"
      >
        <SectionHeader
          id="skills"
          title="Tech Stack"
          desc="Tools I build with"
          className="static mb-14"
        />
        <ul className="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-4 px-4">
          {Object.values(SKILLS).map((skill) => (
            <li
              key={skill.name}
              style={{ "--skill": skill.color } as CSSProperties}
              className={cn(
                "pointer-events-auto",
                "group relative flex items-center gap-3 overflow-hidden rounded-full px-5 py-3",
                "border border-border/40 bg-secondary/30 backdrop-blur-md",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:bg-secondary/50",
                "hover:border-[var(--skill)] hover:shadow-[0_8px_20px_-8px_var(--skill)]"
              )}
            >
              {/* per-skill colored glow */}
              <span
                aria-hidden
                style={{ background: "var(--skill)" }}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.label}
                width={24}
                height={24}
                loading="lazy"
                className="relative size-6 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              />
              <span className="relative text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                {skill.label}
              </span>
            </li>
          ))}
          <li
            className={cn(
              "pointer-events-auto cursor-default",
              "group relative flex items-center gap-3 overflow-hidden rounded-full px-5 py-3",
              "border border-dashed border-border/60 bg-transparent",
              "transition-all duration-300 hover:bg-secondary/20"
            )}
          >
            <div className="animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <span className="relative text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground/80">
              More to come
            </span>
          </li>
        </ul>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper
      id="skills"
      className="w-full h-screen md:h-[150dvh] pointer-events-none"
    >
      <SectionHeader id="skills" title="Tech Stack" desc="(hint: press a key)" />
    </SectionWrapper>
  );
};

export default SkillsSection;
