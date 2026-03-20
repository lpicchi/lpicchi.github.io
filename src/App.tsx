export default function App() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-semibold tracking-tight">Lucas Picchi</h1>
        <nav className="space-x-6 text-sm text-gray-400">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-8 py-24 max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          IT Consultant & <br />
          Full Stack Technical Leader
        </h2>

        <p className="text-lg text-gray-400 max-w-2xl mb-8">
          I help companies design, build and scale reliable software systems —
          from cloud architecture to modern web applications.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500"
          >
            View Work
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-10">Services</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Architecture",
              desc: "Design of scalable cloud systems using AWS, GCP, and modern patterns.",
            },
            {
              title: "Full Stack Development",
              desc: "End-to-end applications using modern frameworks and best practices.",
            },
            {
              title: "Tech Leadership",
              desc: "Team mentoring, code quality, and delivery optimization.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition"
            >
              <h4 className="text-lg font-medium mb-2">{s.title}</h4>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-10">Selected Work</h3>

          <div className="space-y-6">
            {[
              {
                name: "Cloud Migration Platform",
                desc: "Migrated legacy systems to AWS with scalable microservices architecture.",
              },
              {
                name: "Real-time Data Dashboard",
                desc: "Built high-performance dashboards with streaming data pipelines.",
              },
              {
                name: "Enterprise Web Platform",
                desc: "Developed multi-tenant SaaS application with modern frontend stack.",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition"
              >
                <h4 className="text-lg font-medium">{p.name}</h4>
                <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">About</h3>

        <p className="text-gray-400 max-w-3xl leading-relaxed">
          I’m a Full Stack Technical Leader with experience building scalable
          software solutions across cloud platforms. My work spans backend,
          frontend, and infrastructure, with a strong focus on reliability,
          performance, and maintainability.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Contact</h3>

          <p className="text-gray-400 mb-6">
            Let’s work together on your next project.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="mailto:your@email.com"
              className="underline hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/lucaspicchi"
              className="underline hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="underline hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-8 border-t border-gray-800">
        © {new Date().getFullYear()} Lucas Picchi
      </footer>
    </div>
  );
}
