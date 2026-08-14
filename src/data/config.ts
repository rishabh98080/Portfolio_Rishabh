const config = {
  title: "Rishabh Kumar",
  description: {
    long: "Explore the portfolio of Rishabh Kumar, a full-stack developer specializing in interactive web experiences and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Rishabh Kumar, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Rishabh",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
  ],
  author: "Rishabh Kumar",
  email: "rishabh24273239pandey@gmail.com",
  site: "https://github.com/rishabh98080",

  // for github stars button
  githubUsername: "rishabh98080",
  githubRepo: "3d-portfolio-main",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Rishabh78572143",
    linkedin: "https://www.linkedin.com/in/rishabh-kumar-064409330/",
    instagram: "https://www.instagram.com/rishabh_pandey51",
    facebook: "https://facebook.com/",
    github: "https://github.com/rishabh98080",
  },
};
export { config };
