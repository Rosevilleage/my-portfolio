import Link from "next/link";
import CarouserlSlide from "./CarouselSlide";
import {
  FcBusinessman,
  FcBrokenLink,
  FcSupport,
  FcIdea,
  FcRating,
} from "react-icons/fc";

interface ProjectProps {
  data: {
    isTeam: boolean;
    name: string;
    images: string[];
    introduction: string;
    url: {
      github: string;
      deploy: string;
      blog: string;
    };
    stack: string[];
    mypart: string[];
    lessonLearn: string;
  };
  w: number;
}

export default function ProjectsContents({ data, w }: ProjectProps) {
  const projecType = data.isTeam ? "팀 프로젝트" : "개인 프로젝트";
  const part = data.isTeam ? "담당 기능" : "주요 기능";
  return (
    <>
      {/* image slide div*/}
      <div>
        <CarouserlSlide images={data.images} w={w} />
      </div>
      <div className="w-full p-8 ">
        <div className=" max-w-[1300px] w-full mx-auto">
          <h1 className="mb-2 text-3xl font-semibold">{data.name}</h1>
          <p className="mb-1 ml-1 font-semibold">{projecType}</p>
          <div className="w-full h-px mx-auto mb-2 bg-slate-500" />
          {/* introduction p*/}
          <div className="mb-8">
            <div className="flex items-center mb-2 text-2xl font-medium">
              <FcBusinessman />
              <h2 className="ml-2">Introduction</h2>
            </div>
            <p className="ml-1 text-lg">{data.introduction}</p>
          </div>
          {/* url a*/}
          <div className="flex mb-8">
            <div className="flex items-center mr-2 text-2xl font-medium">
              <FcBrokenLink />
              <h2 className="ml-2">URL :</h2>
            </div>
            <Link
              href={data.url.github}
              target="_blank"
              className="p-1 ml-1 bg-blue-400 rounded-md text-yellow-50 "
            >
              github
            </Link>
            {data.url.deploy && (
              <Link
                href={data.url.deploy}
                target="_blank"
                className="p-1 ml-1 bg-blue-400 rounded-md text-yellow-50"
              >
                deploy
              </Link>
            )}
            {data.url.blog && (
              <Link
                href={data.url.blog}
                target="_blank"
                className="p-1 ml-1 bg-blue-400 rounded-md text-yellow-50"
              >
                blog
              </Link>
            )}
          </div>
          {/* stack p*/}
          <ul className="mb-8 list-disc list-inside ">
            <div className="flex items-center text-2xl font-medium">
              <FcSupport />
              <h2 className="ml-2 ">Stack</h2>
            </div>
            {data.stack.map((item) => (
              <li key={item} className="ml-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
          {/* mypart p*/}
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
          {/* lessonLearned p*/}
          <div>
            <div className="flex items-center mb-1 text-2xl font-medium">
              <FcIdea />
              <h2 className="ml-1">프로젝트를 통해 느낀점</h2>
            </div>
            <p className="ml-1 text-lg">{data.lessonLearn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
