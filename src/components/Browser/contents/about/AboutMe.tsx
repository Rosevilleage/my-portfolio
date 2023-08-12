import ContactBox from "./ContactBox";
import SkillsBox from "./SkillsBox";
interface AboutContentProps {
  data: {
    name: string;
    introduction: string;
    contact: {
      email: string;
      phone: string;
      github: string;
      blog: string;
    };
    skill: string[];
  };
}
export default function AboutMe({ data }: AboutContentProps) {
  return (
    <>
      <div className="h-full">
        <div className="flex flex-col items-center justify-center w-full h-60 bg-cyan-950 text-slate-200">
          <div className="mx-auto ">
            <h1 className="text-5xl font-semibold ">{data.name}</h1>
          </div>
          <div className="p-6 ">
            <p>{data.introduction}</p>
          </div>
        </div>
        <div className="p-8 ">
          <ContactBox contact={data.contact} />
          <SkillsBox skills={data.skill} />
        </div>
      </div>
    </>
  );
}
