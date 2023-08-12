type SkillType =
  | "javascript"
  | "html5"
  | "css"
  | "typescript"
  | "react"
  | "styled-components"
  | "redux-toolkit"
  | "axios";

export default function SkillsBox({ skills }: { skills: string[] }) {
  const skillColor = {
    javascript: "bg-yellow-400",
    html5: "bg-orange-400 ",
    css: "bg-blue-700",
    typescript: "bg-sky-600",
    react: "bg-cyan-400",
    "styled-components": "bg-pink-400",
    "redux-toolkit": "bg-purple-500",
    axios: "bg-violet-400",
  };
  return (
    <div className="w-full max-w-[500px] mx-auto mt-4">
      <h2 className="mb-8 text-3xl text-center">Skills</h2>
      <div className="grid grid-cols-2 gap-5">
        {skills.map((skill) => (
          <p
            key={skill}
            className={
              "p-2 text-lg font-medium text-center rounded text-white shadow-md " +
              skillColor[skill as SkillType]
            }
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
