import portfolio from "../assets/projects/portfolio.png";
import cubesUi from "../assets/projects/cubes-ui.png";
import smallOne from "../assets/projects/small-one.png";
import cyrus from "../assets/projects/cyrus.png";
import pancakesCli from "../assets/projects/pancakes-cli.png";
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
      github: "https://github.com/pancakes-ui/cubes-ui",
      live: "https://www.npmjs.com/package/cubes-ui",
    },
  },
  {
    src: pancakesCli,
    languages: ["js", "node", "ts"],
    title: "Pancakes Cli",
    description: "a little cli",
    buttons: {
      github: "https://github.com/pancakes-ui/pancakes-cli",
      live: "https://www.npmjs.com/package/pancakes-cli",
    },
  },
  {
    src: cyrus,
    languages: ["next", "react", "ts", "tailwind", "i18n"],
    title: "Cyrus Official Website",
    description: "Cyrus Programming Language Official Website",
    buttons: {
      github: "https://github.com/cyrus-lang/Official-Website",
      live: "https://cyrus-lang-v2.netlify.app/en",
    },
  },
  {
    src: cyrus,
    languages: ["node", "js", "ts", "json"],
    title: "Cyrus Extension",
    description: "Cyrus Programming Language Official Extension",
    buttons: {
      github: "https://github.com/cyrus-lang/Vscode-Extension",
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
