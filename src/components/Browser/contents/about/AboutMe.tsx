import Image from "next/image";
import Education from "./Education";
import SkillsBox from "./SkillsBox";

interface AboutContentProps {
  data: {
    name: string;
    introduction: string;
    background: string[];
    contact: {
      email: string;
      github: string;
      blog: string;
    };
    skill: string[];
    education: {
      ago: string;
      name: string;
      description: string[];
    }[];
  };
}

export default function AboutMe({ data }: AboutContentProps) {
  const githubAvatarUrl = `${data.contact.github}.png?size=200`;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-[240px] py-12 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{data.name}</h1>
        
        <Image
          src={githubAvatarUrl}
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full ring-2 ring-cyan-400/50"
          unoptimized
        />
        
        <p className="mt-4 px-6 text-center text-lg text-slate-300 max-w-2xl">{data.introduction}</p>
        <a
          href={`mailto:${data.contact.email}`}
          className="mt-6 rounded-full px-4 py-2 text-sm font-medium text-zinc-900 bg-cyan-400 hover:bg-cyan-300 transition-colors"
        >
          Email
        </a>
      </div>
      <div className="w-full bg-zinc-700 text-slate-200">
        <div className="p-8 mx-auto w-full max-w-[1000px]">
          <h2 className="mb-6 text-2xl font-semibold text-white border-b border-cyan-500 pb-2">
            About
          </h2>
          <div className="flex flex-col gap-4">
            {data.background.map((text) => (
              <div
                key={text}
                className="rounded-lg bg-zinc-800 p-4 text-base leading-7"
              >
                {text}
              </div>
            ))}
          </div>
          <SkillsBox skills={data.skill} />
          <Education education={data.education} />
        </div>
      </div>
    </>
  );
}
