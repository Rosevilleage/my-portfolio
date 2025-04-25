"use client";
import Link from "next/link";
import {
  FcBusinessman,
  FcBrokenLink,
  FcRating,
  FcFlowChart,
} from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import CustomImage from "./CustomImage";
import CocktailDoc from "./../../../contentsDoc/cocktailDoc.md";
import MealmoryDoc from "./../../../contentsDoc/mealmoryDoc.md";
import CutherDoc from "./../../../contentsDoc/cutherDoc.md";
import { AppTitle } from "@/components/desktop/config";

interface ProjectProps {
  data: {
    isTeam: boolean;
    name: string;
    images: string[];
    introduction: { text: string; fns: string[] };
    experience: boolean;
    url?: {
      github: string;
      deploy: string;
      blog: string;
      notion?: string;
    };
    stack: string[];
    mypart: string[];
    isMobile?: boolean;
  };
  title: AppTitle;
}

export default function ProjectsContents({ data, title }: ProjectProps) {
  const projecType = data.isTeam ? "팀 프로젝트" : "개인 프로젝트";
  const part = data.isTeam ? "담당 기능" : "주요 기능";
  const isMobile = data.isMobile;
  const imageRef = useRef<null[] | HTMLDivElement[]>([]);

  const [view, setView] = useState(() =>
    new Array(data.images.length).fill(false)
  );

  useEffect(() => {
    function observerController(element: HTMLDivElement, i: number) {
      const intersection = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting)
            setView((prev) => prev.map((value, j) => (i === j ? true : value)));
          else
            setView((prev) =>
              prev.map((value, j) => (i === j ? false : value))
            );
        },
        { threshold: 0.5 }
      );
      return {
        observe: () => intersection.observe(element),
        unobserve: () => intersection.unobserve(element),
      };
    }

    if (imageRef.current.length)
      imageRef.current.forEach((el, i) => {
        el && observerController(el, i).observe();
      });

    return () => {
      if (imageRef.current.length)
        imageRef.current.forEach((el, i) => {
          el && observerController(el, i).unobserve();
        });
    };
  }, [imageRef]);

  return (
    <>
      <div className="w-full p-8 min-h-[300px] mx-auto bg-zinc-700 text-white">
        <div className=" max-w-[1300px] w-full mx-auto">
          <h1 className="mb-2 text-3xl font-semibold">{data.name}</h1>
          <p className="mb-1 ml-1 font-semibold">{projecType}</p>
          <StackList data={data} />
          <div className="mx-auto mb-2 w-full h-px bg-slate-500" />
          <Introduction data={data} />
          {data.url && <URLList data={data} />}
          <MyPartList data={data} part={part} />
          <Experience data={data} title={title} />
          <div className="flex relative flex-col gap-40 mt-20 w-full">
            <div className="absolute w-1 -translate-x-1/2 bg-white top-[5px] h-[99%] left-1/2 shadow-line"></div>
            {data.images.map((image, i) => (
              <CustomImage
                key={image}
                idx={i}
                image={image}
                isView={view[i]}
                isMobile={isMobile}
                ref={(el) => (imageRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const Introduction = ({ data }: { data: ProjectProps["data"] }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-2 text-2xl font-medium">
        <FcBusinessman />
        <h2 className="ml-2">Introduction</h2>
      </div>
      <p className="ml-1 text-lg">{data.introduction.text}</p>
      <ul className="pl-6 mt-2 list-disc">
        {data.introduction.fns.map((fn) => (
          <li key={fn}>{fn}</li>
        ))}
      </ul>
    </div>
  );
};

const markdownComponents = {
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="pl-4 mb-4 list-disc text-gray-200">{children}</ul>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-7 text-gray-200">{children}</p>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mb-4 text-2xl font-bold text-white">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mb-3 text-xl font-semibold text-white">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mb-2 text-lg font-medium text-white">{children}</h3>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="px-1 py-0.5 text-sm bg-gray-800 rounded text-gray-200">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="overflow-x-auto p-4 mb-4 text-gray-200 bg-gray-800 rounded-lg">
      {children}
    </pre>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="pl-4 mb-4 text-gray-300 border-l-4 border-gray-500">
      {children}
    </blockquote>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-blue-400 hover:underline">
      {props.children}
    </a>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} className="my-4 max-w-full h-auto rounded-md" />
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-600 border-collapse">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-2 text-white bg-gray-700 border border-gray-600">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-2 text-gray-200 border border-gray-600">
      {children}
    </td>
  ),
} as any;

const Experience = ({
  data,
  title,
}: {
  data: ProjectProps["data"];
  title: AppTitle;
}) => {
  return data.experience ? (
    <div className="w-full list-disc">
      <div className="flex items-center mb-2 text-2xl font-medium">
        <FcFlowChart />
        <h2 className="ml-2">주요 개발 경험</h2>
      </div>
      <div className="max-w-[894px] mx-auto list-disc">
        {title === "cocktail" && (
          <CocktailDoc components={markdownComponents} />
        )}
        {title === "mealmory" && (
          <MealmoryDoc components={markdownComponents} />
        )}
        {title === "cuther" && <CutherDoc components={markdownComponents} />}
      </div>
    </div>
  ) : null;
};

const URLList = ({ data }: { data: ProjectProps["data"] }) => {
  return (
    <div className="flex mb-8">
      <div className="flex items-center mr-2 text-2xl font-medium">
        <FcBrokenLink />
        <h2 className="ml-2">URL :</h2>
      </div>
      {data.url &&
        Object.keys(data.url).map((key) => {
          const link = data.url && data.url[key as keyof typeof data.url];

          return link ? (
            <Link
              key={key}
              href={link}
              target="_blank"
              className="p-1 ml-1 text-yellow-50 bg-blue-400 rounded-md"
            >
              {key}
            </Link>
          ) : undefined;
        })}
    </div>
  );
};

const StackList = ({ data }: { data: ProjectProps["data"] }) => {
  return (
    <ul className="flex flex-wrap gap-2 mb-8 list-none list-inside">
      {data.stack.map((item) => (
        <li
          key={item}
          className="p-1 text-lg text-white rounded-lg bg-slate-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

const MyPartList = ({
  data,
  part,
}: {
  data: ProjectProps["data"];
  part: string;
}) => {
  return (
    <ul className="mb-8 list-disc list-inside">
      <div className="flex items-center text-2xl font-medium">
        <FcRating />
        <h2 className="ml-1">{part}</h2>
      </div>
      {data.mypart.map((item) => (
        <li key={item} className="ml-3 text-lg">
          {item}
        </li>
      ))}
    </ul>
  );
};
