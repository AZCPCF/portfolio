import { Container } from "cubes-ui";
import { Github, Globe, Instagram, Send } from "lucide-react";
import ContactsComponent from "../components/pages/contacts";
import PageTitle from "../components/ui/page-title";
import Title from "../components/ui/title";

export default function Contacts() {
  return (
    <Container className="px-0">
      <PageTitle>contacts</PageTitle>
      <p className="mt-4">who am i?</p>
      <div className="mt-8">
        <ContactsComponent />
      </div>
      <div className="mt-20">
        <div className="w-full mx-auto">
          <Title className="w-8/12">all-media</Title>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              {
                label: "GitHub",
                url: "https://github.com/azcpcf",
                icon: <Github size={20} />,
              },
              {
                label: "Telegram",
                url: "https://t.me/azcpcf",
                icon: <Send size={20} />,
              },
              {
                label: "Instagram",
                url: "https://instagram.com/azcpcf",
                icon: <Instagram size={20} />,
              },
              { label: "Anywhere", url: "#", icon: <Globe size={20} /> },
            ].map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target={url == "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <span className="text-neutral-600 dark:text-neutral-300">
                  {icon}
                </span>
                <span className="font-medium">{label}</span>
                <span className="ml-auto text-neutral-500">@azcpcf</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
