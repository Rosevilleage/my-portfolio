"use client";
import Link from "next/link";
import CarouserlSlide from "./carousel/CarouselSlide";
import { FcBusinessman, FcBrokenLink, FcRating } from "react-icons/fc";
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectProps {
  data: {
    isTeam: boolean;
    name: string;
    images: string[];
    introduction: string;
    url?: {
      github: string;
      deploy: string;
      blog: string;
    };
    stack: string[];
    mypart: string[];
    lessonLearn: string;
  };
}

export default function ProjectsContents({ data }: ProjectProps) {
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
        <p className="ml-1 text-lg">{data.introduction}</p>
      </div>
    );
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

const CustomImage = forwardRef(
  (
    {
      image,
      idx,
      isView,
    }: {
      image: string;
      idx: number;
      isView: boolean;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        key={image}
        ref={ref}
        className={
          "w-full max-w-[1000px]" +
          ` ${idx % 2 !== 0 ? " self-end" : ""}` +
          ` ${isView ? "" : " -left-full"}`
        }
        style={{
          perspective: "2000px",
        }}
      >
        <div
          className="w-full pt-[54.722%] relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.2s ease-out",
            transform: !isView ? "rotateX(-90deg)" : "",
          }}
        >
          <Image
            src={image}
            alt={`image${idx}`}
            draggable={false}
            priority
            fill={true}
            sizes="(max-width: 375px) 100vw, (max-width: 1200px) 812.5px, 1300px"
            className="rounded-xl shadow-line"
            style={{
              left: idx % 2 !== 0 ? (isView ? "0" : "-110vw") : "",
              right: idx % 2 === 0 ? (isView ? "0" : "-110vw") : "",
              transition: "left 0.2s ease-out 0.2s, right 0.2s ease-out 0.2s",
            }}
          />
        </div>
      </div>
    );
  }
);
