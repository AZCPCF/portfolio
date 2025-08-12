import portfolio from "../assets/projects/portfolio.png";
import cubesUi from "../assets/projects/cubes-ui.png";
export const projects = [
  {
    src: portfolio,
    languages: ["js", "ts", "react", "tailwind"],
    title: "Portfolio",
    description: "You're using it rn",
    buttons: {
      github: "https://github.com/AZCPCF/portfolio",
      live: "https://github.com/AZCPCF/portfolio",
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
