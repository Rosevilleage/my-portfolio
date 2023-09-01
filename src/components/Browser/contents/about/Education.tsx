interface EducationProps {
  education: {
    ago: string;
    name: string;
    description: string[];
  }[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="max-w-[1000px] w-full mx-auto mt-8">
      <h2 className="mb-8 text-3xl text-center">Education</h2>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))] font-medium text-md">
        {education.map((log) => (
          <div
            key={log.name}
            className="flex mb-5 rounded-lg bg-cyan-700 min-h-[160px] h-full shadow-gray-300 shadow-lg"
          >
            <div className="flex flex-col items-center justify-center p-2 text-white">
              {log.ago.split("\n").map((time) => (
                <p key={time}>{time}</p>
              ))}
            </div>
            <ul className="w-full h-full list-disc list-inside rounded-md shadow-[0 0 15px rgba(0,0,0,0.5)] bg-slate-50">
              <p className="p-2 text-center">{log.name}</p>
              <div className="w-full h-0.5 bg-cyan-700"></div>
              {log.description.map((li) => (
                <li key={li} className="p-2 ml-2">
                  {li}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
