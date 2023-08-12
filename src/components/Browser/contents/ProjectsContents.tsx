import Link from "next/link";
import CarouserlSlide from "./CarouselSlide";

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
      <div className="w-full p-6 ">
        <div className=" max-w-[1300px] w-full mx-auto">
          <h1 className="mb-2 text-3xl font-semibold">{data.name}</h1>
          <p className="mb-1 ml-1 font-semibold">{projecType}</p>
          <div className="w-full h-px mx-auto mb-2 bg-slate-500" />
          {/* introduction p*/}
          <div className="mb-4">
            <h2 className="mb-1 text-xl font-medium">Introduction</h2>
            <p className="ml-1">{data.introduction}</p>
          </div>
          {/* url a*/}
          <div className="flex mb-4">
            <h2 className="mr-4 text-xl font-medium">URL :</h2>
            <Link
              href={data.url.github}
              target="_blank"
              className="p-1 ml-1 bg-blue-400 rounded-md text-yellow-50"
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
          <ul className="mb-4 list-disc list-inside ">
            <h2 className="text-xl font-medium ">Stack</h2>
            {data.stack.map((item) => (
              <li key={item} className="ml-3 ">
                {item}
              </li>
            ))}
          </ul>
          {/* mypart p*/}
          <ul className="mb-4 list-disc list-inside ">
            <h2 className="text-xl font-medium ">{part}</h2>
            {data.mypart.map((item) => (
              <li key={item} className="ml-3 ">
                {item}
              </li>
            ))}
          </ul>
          {/* lessonLearned p*/}
          <div>
            <h2 className="mb-1 text-xl font-medium">프로젝트를 통해 느낀점</h2>
            <p>{data.lessonLearn}</p>
          </div>
        </div>
      </div>
    </>
  );
}
