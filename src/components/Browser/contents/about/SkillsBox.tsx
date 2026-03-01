type SkillType =
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "React"
  | "Styled-components"
  | "Redux Toolkit"
  | "Axios"
  | "TypeScript"
  | "Tailwind CSS";

const skillColor: Record<SkillType, string> = {
  JavaScript: "bg-yellow-400",
  HTML: "bg-orange-400",
  CSS: "bg-blue-700",
  TypeScript: "bg-sky-600",
  React: "bg-cyan-400",
  "Styled-components": "bg-pink-400",
  "Redux Toolkit": "bg-purple-500",
  Axios: "bg-violet-400",
  "Tailwind CSS": "bg-teal-500",
};

export default function SkillsBox({ skills }: { skills: string[] }) {
  return (
    <div className="w-full mx-auto max-w-[1000px] mt-8">
      <h2 className="mb-6 text-2xl font-semibold text-white border-b border-cyan-500 pb-2">
        Skills
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {skills.map((skill) => (
          <p
            key={skill}
            className={
              "px-4 py-2.5 text-base font-medium text-center rounded-lg text-white shadow-md " +
              (skillColor[skill as SkillType] ?? "bg-zinc-600")
            }
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}
