import { ProjectContents, aboutContent } from "./projectContents";
import ProjectsContents from "./ProjectsContents";
import AboutMe from "./about/AboutMe";
import { AppTitle } from "@/components/desktop/config";

interface ContentProps {
  title: AppTitle;
}

export default function Contents({ title }: ContentProps) {
  return (
    <div
      className={`h-[calc(100%-32px)] w-full overflow-x-hidden overflow-y-auto scroll-custom ${title === "about" ? "bg-zinc-700" : "bg-white"}`}
    >
      <div className="w-full min-h-full mx-auto max-sm:pb-4">
        {title !== "about" && (
          <ProjectsContents data={ProjectContents[title]} />
        )}
        {title === "about" && <AboutMe data={aboutContent} />}
      </div>
    </div>
  );
}
