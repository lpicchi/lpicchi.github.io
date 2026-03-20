export default function App() {
  const skills = [
    {
      category: "Languages",
      items: ["TypeScript", "Java", "C#", "Python", "C++", "SQL"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (ECS/CDK)", "Azure", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      category: "Frameworks",
      items: ["React", ".NET Core", "Node.js", "Spring Boot", "FastAPI"],
    },
  ];

  const experience = [
    {
      date: "2025 — Present",
      role: "Full Stack Tech Lead",
      company: "EXEO IT",
      desc: "Guiding development teams in creating high-quality software solutions. Establishing development processes, ensuring code quality, and fostering collaborative environments.",
    },
    {
      date: "2023 — 2025",
      role: "Full Stack Lead Developer",
      company: "EXEO IT",
      desc: "Architecting and delivering end-to-end features for enterprise-level systems.",
    },
    {
      date: "2019 — 2023",
      role: "Fullstack Developer",
      company: "DXC Technology",
      desc: "Development of REST services and frontends using .NET Core and React for global enterprise clients.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header / Identity */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Lucas Ignacio Picchi
          </h1>
          <p className="text-sky-400 font-mono text-sm mt-2 uppercase tracking-widest">
            Full Stack Tech Lead & IT Consultant
          </p>
        </div>
        <div className="text-right font-mono text-xs text-slate-500 space-y-1">
          <p>Mar del Plata, Argentina</p>
          <p>Argentina — Italia (Dual Citizenship)</p>
          <p>English (Advanced / C1)</p>
        </div>
      </header>

      {/* Hero / Statement */}
      <section className="py-20">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-tighter mb-6 underline decoration-sky-500/50 underline-offset-4">
          Executive Summary
        </h2>
        <p className="text-2xl md:text-3xl leading-relaxed text-slate-200 max-w-4xl">
          Systems Engineering specialist with a focus on the{" "}
          <span className="text-white font-medium italic">
            entire lifecycle
          </span>{" "}
          of software development. From early concept to high-availability
          production systems, I build using modern methodologies and scalable
          cloud architecture.
        </p>
      </section>

      {/* Expertise Grid */}
      <section className="grid md:grid-cols-3 gap-8 py-16 border-y border-slate-900">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-mono text-slate-500 uppercase mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <h3 className="text-xs font-mono text-slate-500 uppercase mb-12">
          Professional Trajectory
        </h3>
        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.date} className="group grid md:grid-cols-12 gap-4">
              <div className="md:col-span-3 text-sm font-mono text-slate-500 py-1">
                {job.date}
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold group-hover:text-sky-400 transition-colors">
                  {job.role}{" "}
                  <span className="text-slate-600 font-normal">
                    @ {job.company}
                  </span>
                </h4>
                <p className="text-slate-400 mt-3 leading-relaxed text-md max-w-2xl">
                  {job.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic / Additional */}
      <section className="grid md:grid-cols-2 gap-12 py-20 border-t border-slate-900">
        <div>
          <h3 className="text-xs font-mono text-slate-500 uppercase mb-6">
            Education
          </h3>
          <p className="text-slate-300 font-medium">B.S. Systems Engineering</p>
          <p className="text-sm text-slate-500">
            UNICEN — National University of Central Buenos Aires
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-xs text-slate-500 italic">
              Specializations: Parallel & Distributed Computing, Agile Methods.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-mono text-slate-500 uppercase mb-6">
            Languages
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>Spanish</span>
              <span className="text-slate-500">Native</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>English</span>
              <span className="text-slate-500">Advanced / Bilingual (C1)</span>
            </div>
            <div className="flex justify-between border-b border-slate-900 pb-1">
              <span>Italian</span>
              <span className="text-slate-500">Technical Reading</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <footer className="mt-20 p-12 bg-slate-900/50 rounded-3xl border border-slate-800 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to discuss your technical roadmap?
        </h3>
        <p className="text-slate-400 mb-8">
          Currently available for specialized IT consulting and leadership
          roles.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          <a
            href="mailto:lucas@lpicchi.dynv6.net"
            className="text-sky-400 hover:text-white font-mono underline decoration-sky-500/30 underline-offset-8 transition-all"
          >
            Contact by email
          </a>
          <span className="hidden md:block text-slate-700">/</span>
          <a
            href="https://linkedin.com/in/lucas-picchi-bba01488/"
            target="_blank"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-12 text-[10px] text-slate-600 uppercase tracking-widest font-mono">
          © {new Date().getFullYear()} — Built with React & Tailwind v4
        </p>
      </footer>
    </div>
  );
}
