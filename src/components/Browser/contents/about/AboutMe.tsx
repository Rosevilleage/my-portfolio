import ContactBox from "./ContactBox";
import Education from "./Education";
import SkillsBox from "./SkillsBox";
interface AboutContentProps {
  data: {
    name: string;
    introduction: string;
    background: string;
    contact: {
      email: string;
      phone: string;
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
  return (
    <>
      <div className="h-full ">
        <div className="flex flex-col items-center justify-center w-full h-60 bg-cyan-950 text-slate-200">
          <div className="mx-auto ">
            <h1 className="text-5xl font-semibold ">{data.name}</h1>
          </div>
          <div className="p-6 ">
            <p>{data.introduction}</p>
          </div>
        </div>
        <div className="p-8 ">
          <div>
            {data.background.split("\n").map((text) => (
              <p key={text} className="mx-auto w-max">
                {text}
              </p>
            ))}
          </div>
          <ContactBox contact={data.contact} />
          <SkillsBox skills={data.skill} />
          <Education education={data.education} />
        </div>
      </div>
    </>
  );
}
