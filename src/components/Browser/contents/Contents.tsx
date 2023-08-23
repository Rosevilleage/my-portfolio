import { AppTitle } from "@/redux/slices/openAppSlice";
import { ProjectContents, aboutContent } from "./projectContents";
import ProjectsContents from "./ProjectsContents";
import AboutMe from "./about/AboutMe";

interface ContentProps {
  title: AppTitle;
}

export default function Contents({ title }: ContentProps) {
  return (
    <div className="h-[calc(100%-32px)] w-full bg-white overflow-x-hidden overflow-y-scroll">
      <div className="w-full mx-auto">
        {title !== "about" && (
          <ProjectsContents data={ProjectContents[title]} />
        )}
        {title === "about" && <AboutMe data={aboutContent} />}
      </div>
    </div>
  );
}
