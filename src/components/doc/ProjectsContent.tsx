"use client";

import Image from "next/image";
import type { AppTitle } from "@/components/desktop/config";
import { PROJECTS_BY_CATEGORY } from "@/components/Browser/contents/projectContents";

const APPIMAGES: Record<AppTitle, string> = {
  about: "/images/about.svg",
  scraping: "/images/scraping.svg",
  cocktail: "/images/cocktail.svg",
  mealmory: "/images/mealmory.svg",
  portfolio: "/images/portfolio.svg",
  fitrace: "/images/fitrace.svg",
  cuther: "/images/cuther.svg",
  rlt: "/images/rlt.svg",
  "find-mat": "/images/find-mat.svg",
};

const CATEGORY_LABELS: Record<keyof typeof PROJECTS_BY_CATEGORY, string> = {
  freelance: "프리랜서",
  team: "팀",
  solo: "솔로",
};

interface ProjectsContentProps {
  onProjectSelect: (title: AppTitle) => void;
  iconSize?: "desktop" | "mobile";
}

export default function ProjectsContent({
  onProjectSelect,
  iconSize = "desktop",
}: ProjectsContentProps): JSX.Element {
  const iconClass =
    iconSize === "mobile"
      ? "relative w-14 h-14 overflow-hidden"
      : "relative w-[35px] h-[35px] overflow-hidden";

  return (
    <div className="flex flex-col gap-6 p-4">
      {(Object.keys(PROJECTS_BY_CATEGORY) as (keyof typeof PROJECTS_BY_CATEGORY)[]).map(
        (category) => (
          <div key={category} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-slate-200">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="flex flex-wrap gap-4">
              {PROJECTS_BY_CATEGORY[category].map((title) => (
                <button
                  key={title}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onProjectSelect(title);
                  }}
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                >
                  <div className={iconClass}>
                    <Image
                      src={APPIMAGES[title]}
                      alt={`${title} icon`}
                      fill
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                  <span className="text-xs text-slate-300 group-hover:text-white">
                    {ProjectTitleLabel(title)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

function ProjectTitleLabel(title: AppTitle): string {
  const labels: Partial<Record<AppTitle, string>> = {
    rlt: "뽑기?뽑기!",
    "find-mat": "맛찾기",
  };
  return labels[title] ?? title;
}
