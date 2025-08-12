import { Container } from "cubes-ui";
import Title from "../../ui/title";
import HomeSkillSVG from "../../../assets/home-skill";
import SkillCard from "../skills/card";
export default function HomeSkills() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-7 max-lg:col-span-8 max-md:col-span-7">
          skills
        </Title>
      </div>
      <div className="grid mt-10 grid-cols-2 max-lg:grid-cols-1">
        <HomeSkillSVG className="max-lg:hidden" />
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-4 max-sm:grid-cols-1" dir="rtl">
          {[
            { title: "Languages", items: ["JavaScript", "TypeScript"] },
            {
                title: "Tools",
                items: ["VSCode", "Linux", "Ubuntu", "Gnome", "Git"],
            },
            { title: "Others", items: ["CSS", "HTML", "PHP", "SCSS", "EJS"] },
            {
                title: "Libs & Frameworks",
                items: [
                    "React.js",
                    "Next.js",
                    "tailwindcss",
                    "tanstack router",
                    "tanstack form",
                ],
            },
            { title: "Databases", items: ["mySQL"] },
          ].map((item) => (
            <SkillCard {...item} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
    </Container>
  );
}
