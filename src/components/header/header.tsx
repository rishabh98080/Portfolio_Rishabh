"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const isHome = usePathname() === "/";
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className={cn(styles.bar, "flex items-center relative")}>
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center justify-center">
            <Button variant={"link"} className="text-md">
              {config.author}
            </Button>
          </Link>
        </div>

        <div className="hidden md:flex flex-row items-center gap-12 absolute left-1/2 -translate-x-1/2 whitespace-nowrap w-max">
          <Link href="#hero" className="text-sm font-semibold tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">HOME</Link>
          <Link href="#about" className="text-sm font-semibold tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">ABOUT</Link>
          <Link href="#skills" className="text-sm font-semibold tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">TECH STACK</Link>
          <Link href="#projects" className="text-sm font-semibold tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">PROJECTS</Link>
          <Link href="#contact" className="text-sm font-semibold tracking-wider text-black dark:text-white hover:opacity-70 transition-opacity">CONTACT</Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <FunnyThemeToggle className="w-6 h-6 hidden md:flex" />
          {isHome && process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
          {config.githubUsername && config.githubRepo && (
            <GitHubStarsButton
              username={config.githubUsername}
              repo={config.githubRepo}
            />
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
