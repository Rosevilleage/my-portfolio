import { AppTitle } from "@/redux/slices/openAppSlice";
import { ProjectContents, aboutContent } from "./projectContents";
import Link from "next/link";
import CarouserlSlide from "./CarouselSlide";
import ProjectsContents from "./ProjectsContents";
import AboutMe from "./about/AboutMe";

interface ContentProps {
  title: AppTitle;
  w: number;
}

// article[title] => {Nema: string, 1, 2, 3, 4 ...}

export default function Contents({ title, w }: ContentProps) {
  return (
    <div className="h-[calc(100%-32px)] w-full bg-white overflow-x-hidden overflow-y-scroll">
      <div className="w-full mx-auto max-w-mac">
        {title !== "about" && (
          <ProjectsContents data={ProjectContents[title]} w={w} />
        )}
        {title === "about" && <AboutMe data={aboutContent} />}
      </div>
    </div>
  );
}
