import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "Javascript"];
  const backendSkills = ["C", "MongoDB", "Python", "PHP"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-300 mb-6">
              I'm Sero, a web developer passionate about creating clean and engaging digital experiences. I love learning, problem-solving, and bringing ideas to life.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education and Work Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Technicien Specialise en developement web full stack</strong> - ISTA EL HANK (2023-2025)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                <p className="text-gray-300 text-lg bg-blue-500/10 px-6 py-3 rounded-full">
                  No work experience for the moment, but I'm building my journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};