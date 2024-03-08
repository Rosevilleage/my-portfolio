type SkillType =
  | "javascript"
  | "html"
  | "css"
  | "react"
  | "styled-components"
  | "axios";

export default function SkillsBox({ skills }: { skills: string[] }) {
  const skillColor = {
    javascript: "bg-yellow-400",
    html: "bg-orange-400 ",
    css: "bg-blue-700",
    typescript: "bg-sky-600",
    react: "bg-cyan-400",
    "styled-components": "bg-pink-400",
    "redux-toolkit": "bg-purple-500",
    axios: "bg-violet-400",
  };
  return (
    <div className="w-full mx-auto max-w-[1000px] mt-4">
      <h2 className="mb-8 text-3xl text-center">Skills</h2>
      <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
        {skills.map((skill) => (
          <p
            key={skill}
            className={
              "p-2 text-lg font-medium text-center rounded text-white shadow-gray-300 shadow-md " +
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
