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
import { AppTitle } from "@/components/desktop/config";
interface ProjectProps {
  data: {
    isTeam: boolean;
    name: string;
    images: string[];
    introduction: { text: string; fns: string[] };
    experience: boolean;
    url?: {
      [key: string]: string;
      github: string;
      deploy: string;
      blog: string;
    };
    stack: string[];
    mypart: string[];
  };
  title: AppTitle;
}

export default function ProjectsContents({ data, title }: ProjectProps) {
  const projecType = data.isTeam ? "팀 프로젝트" : "개인 프로젝트";
  const part = data.isTeam ? "담당 기능" : "주요 기능";

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

  const Instruction = () => {
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

  const Experience = () => {
    return data.experience ? (
      <div className="w-full list-disc">
        <div className="flex items-center mb-2 text-2xl font-medium">
          <FcFlowChart />
          <h2 className="ml-2">주요 개발 경험</h2>
        </div>
        {title === "cocktail" && (
          <CocktailDoc
            components={{
              ul: ({ children }) => (
                <ul className="pl-4 list-disc">{children}</ul>
              ),
              p: ({ children }) => <p className="mb-2 leading-7">{children}</p>,
            }}
          />
        )}
        {title === "mealmory" && (
          <MealmoryDoc
            components={{
              p: ({ children }) => <p className="mb-2 leading-7">{children}</p>,
            }}
          />
        )}
      </div>
    ) : null;
  };

  const URLList = () => {
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
                className="p-1 ml-1 bg-blue-400 rounded-md text-yellow-50 "
              >
                {key}
              </Link>
            ) : undefined;
          })}
      </div>
    );
  };

  const StackList = () => {
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

  const MyPartList = () => {
    return (
      <ul className="mb-8 list-disc list-inside ">
        <div className="flex items-center text-2xl font-medium">
          <FcRating />
          <h2 className="ml-1 ">{part}</h2>
        </div>
        {data.mypart.map((item) => (
          <li key={item} className="ml-3 text-lg ">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="w-full p-8 min-h-[300px] mx-auto bg-zinc-700 text-white">
        <div className=" max-w-[1300px] w-full mx-auto">
          <h1 className="mb-2 text-3xl font-semibold">{data.name}</h1>
          <p className="mb-1 ml-1 font-semibold">{projecType}</p>
          <StackList />
          <div className="w-full h-px mx-auto mb-2 bg-slate-500" />
          <Instruction />
          {data.url && <URLList />}
          <MyPartList />
          <Experience />
          <div className="relative flex flex-col w-full gap-40 mt-20">
            <div className="absolute w-1 -translate-x-1/2 bg-white top-[5px] h-[99%] left-1/2 shadow-line"></div>
            {data.images.map((image, i) => (
              <CustomImage
                key={image}
                idx={i}
                image={image}
                isView={view[i]}
                ref={(el) => (imageRef.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
