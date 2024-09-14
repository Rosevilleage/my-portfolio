import { ProjectContents, aboutContent } from "./projectContents";
import ProjectsContents from "./ProjectsContents";
import AboutMe from "./about/AboutMe";
import { AppTitle } from "@/components/desktop/config";

interface ContentProps {
  title: AppTitle;
}

export default function Contents({ title }: ContentProps) {
  return (
    <div className="min-h-[calc(100%-32px)] h-max w-full bg-white overflow-x-hidden overflow-y-scroll scroll-hide ">
      <div className="w-full h-full mx-auto max-sm:pb-4">
        {title !== "about" && (
          <ProjectsContents data={ProjectContents[title]} title={title} />
        )}
        {title === "about" && <AboutMe data={aboutContent} />}
      </div>
    </div>
  );
}
