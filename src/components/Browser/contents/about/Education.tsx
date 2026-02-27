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
      <h2 className="mb-6 text-2xl font-semibold text-white border-b border-cyan-500 pb-2">
        Education
      </h2>
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
        {education.map((log) => (
          <div
            key={log.name}
            className="flex flex-col rounded-lg border border-zinc-600 bg-zinc-800 min-h-[160px] overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center p-4 text-cyan-400 text-sm font-medium">
              {log.ago.split("\n").map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
            <div className="w-full h-px bg-zinc-600" />
            <div className="flex flex-col flex-1 p-4">
              <p className="mb-3 text-center font-semibold text-white">{log.name}</p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm leading-6">
                {log.description.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
