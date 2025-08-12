import portfolio from "../assets/projects/portfolio.png";
import cubesUi from "../assets/projects/cubes-ui.png";
import smallOne from "../assets/projects/small-one.png";
export const projects = [
  {
    src: portfolio,
    languages: ["js", "ts", "react", "tailwind"],
    title: "Portfolio",
    description: "You're using it rn",
    buttons: {
      github: "https://github.com/AZCPCF/portfolio",
      live: "https://portfolio-azcpcf-apps.vercel.app",
    },
  },
  {
    src: cubesUi,
    languages: ["js", "ts", "react", "tailwind"],
    title: "Cubes UI",
    description: "a little helper",
    buttons: {
      github: "https://github.com/cubes-ui/cubes-ui",
      live: "https://www.npmjs.com/package/cubes-ui",
    },
  },
  {
    src: cubesUi,
    languages: ["js", "ts", "react", "tailwind", "tanstack router"],
    title: "Cubes Router",
    description: "folder router using tanstack router",
    buttons: {
      github: "https://github.com/cubes-ui/cubes-router",
      live: "https://www.npmjs.com/package/cubes-ui",
    },
  },
];
export const smallProjects = [
  {
    src: smallOne,
    languages: ["js", "ts", "react"],
    title: "pixel",
    description: "a little dino",
    buttons: {
      github: "https://github.com/AZCPCF/pixel",
      live: "https://pixel-kohl.vercel.app/",
    },
  },
];
