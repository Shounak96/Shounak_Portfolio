export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white">
            Shounak Powar
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm text-slate-300 transition hover:text-white">
              About
            </a>
            <a href="#skills" className="text-sm text-slate-300 transition hover:text-white">
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Experience
            </a>
            <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 pt-32 md:px-10"
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
            Software Engineer • AI/ML • Product Builder
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Hi, I&apos;m Shounak.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl text-justify">
            "I build backend systems and full-stack products end-to-end and I own everything that happens after they ship."
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
              MS @ Iowa State
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
              Open to 2026 Roles
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2">
              Full-Stack + AI Systems
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <h2 className="text-3xl font-semibold text-white">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 text-justify">
          I&apos;m CS grad student at Iowa State, but I think like an engineer. 
          I spent 2+ years at Cognizant building and operating backend systems in production, 
          then taught myself full-stack development by shipping real products solo. 
           I don't just write code,I own it from architecture to deployment 
          .And when a problem calls for it, I go deeper from integrating AI into products to building ML 
          pipelines from scratch.
        </p>
      </section>

      <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white">Skills</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            My core toolkit spans software engineering, AI/ML systems, cloud platforms,
            and product development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Python", "JavaScript", "TypeScript", "SQL", "C++", "Java"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["React", "Next.js", "Tailwind CSS", "HTML"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Backend</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Node.js", "Prisma", "REST APIs"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">AI / ML</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "Numpy", "LLMs", "Computer Vision"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Cloud & Database</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["AWS", "GCP", "MySQL", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["Git", "GitHub", "Jupyter", "VS Code"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
          id="experience"
          className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-white">Experience</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300 text-justify">
              My first two years as an engineer were spent inside one of the largest IT organizations in the world building backend systems that couldn't afford to fail, for clients that couldn't afford downtime. That's where I learned what production actually means.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Full-time Role */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Cognizant Technology Solutions
                </h3>
                <span className="text-sm text-slate-400">Pune, India</span>
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Programmer Analyst • Aug 2022 – Jun 2024
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Java",
                  "SQL",
                  "REST APIs",
                  "MySQL",
                  "CI/CD",
                  "Git",
                  "SDLC",
                  "Agile",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-white">
                  Cognizant Technology Solutions
                </h3>
                <span className="text-sm text-slate-400">Pune, India</span>
              </div>

              <div className="mt-1 text-sm text-slate-400">
                Programmer Analyst Intern • Jan 2022 – Jun 2022
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "SQL",
                  "ETL Pipelines",
                  "Automation",
                  "Testing",
                  "MySQL",
                  "CI/CD",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                  ))}
              </div>
            </div>
          </div>
        </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
  <div className="max-w-3xl">
    <h2 className="text-3xl font-semibold text-white">Projects</h2>
    <p className="mt-4 text-lg leading-8 text-slate-300 text-justify">
      From production full-stack products to compilers, computer vision, and multimodal ML. Every project here was built to go deep, not just ship fast.
    </p>
  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
            Full-Stack + AI Project
          </p>
          <h3 className="text-2xl font-semibold text-white">FinTrack</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://fintrack-pi-pink.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Shounak96/FinTrack"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="mt-4 leading-7 text-slate-300">
        A full-stack personal finance tracker that helps users manage
        transactions, budgets, balances, and spending insights through an
        interactive dashboard.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Next.js",
          "TypeScript",
          "React",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Supabase",
          "Clerk",
          "Inngest",
          "Google GenAI",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 mt-auto">
        <a
          href="/projects/fintrack"
          className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
        >
          View Details
        </a>
      </div>
    </div>

    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
            Full-Stack + AI Project
          </p>
          <h3 className="text-2xl font-semibold text-white">
            YouGrow
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="https://you-grow-96.vercel.app"  // placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Shounak96/YouGrow"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
          >
            GitHub
          </a>
        </div>
      </div>

      <p className="mt-4 leading-7 text-slate-300">
        An AI-powered productivity and idea-generation platform that helps users
        transform ideas into actionable plans using intelligent suggestions and
        structured workflows.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Next.js",
          "React",
          "TypeScript",
          "AI Integration",
          "PostgreSQL",
          "Full-Stack",
          "Product Design",
          "REST APIs",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 mt-auto">
        <a
          href="/projects/yougrow"
          className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
        >
          View Details
        </a>
      </div>
    </div>

    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
            Research Project
          </p>
          <h3 className="text-2xl font-semibold text-white">
            Multimodal Engagement Prediction
          </h3>
        </div>

        <a
          href="https://github.com/Shounak96/Multimodal-large-language-model-engagement-prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
        >
          GitHub
        </a>
      </div>

      <p className="mt-4 leading-7 text-slate-300">
        A multimodal machine learning project that predicts social-media
        engagement by combining image and text signals, comparing
        transformer-based classification, feature-engineered ensemble learning,
        and regression-based modeling.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          "Python",
          "PyTorch",
          "Transformers",
          "BERT",
          "ViT",
          "CLIP",
          "SigLIP",
          "DeBERTa",
          "CatBoost",
          "Scikit-learn",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 mt-auto">
        <a
          href="/projects/multimodal-engagement-prediction"
          className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
        >
          View Details
        </a>
      </div>
    </div>
      <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
                Computer Vision Project
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Virtual Snake Game
              </h3>
            </div>

            <a
              href="https://github.com/Shounak96/SnakeGame"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
            >
              GitHub
            </a>
          </div>

          <p className="mt-4 leading-7 text-slate-300">
            A real-time gesture-controlled Snake game that replaces keyboard input with
            webcam-based hand tracking, using computer vision to translate finger
            movement into smooth directional gameplay.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Python",
              "OpenCV",
              "MediaPipe",
              "CVZone",
              "PyGame",
              "Computer Vision",
              "Gesture Recognition",
              "Real-Time Systems",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 mt-auto">
            <a
              href="/projects/virtual-snake-game"
              className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
                AI / Game Theory Project
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Checkers AI
              </h3>
            </div>

            <a
              href="https://github.com/Shounak96/Checkers-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
            >
              GitHub
            </a>
          </div>

          <p className="mt-4 leading-7 text-slate-300">
            An AI-powered Checkers game that uses adversarial search algorithms to
            simulate intelligent gameplay, enabling a human player to compete against a
            decision-making agent.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Python",
              "Game AI",
              "Minimax",
              "Alpha-Beta Pruning",
              "Heuristic Evaluation",
              "Search Algorithms",
              "Game Theory",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 mt-auto">
            <a
              href="/projects/checkers-ai"
              className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
            >
              View Details
            </a>
          </div>
        </div>
        <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-blue-400/30">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-300">
                Systems / Compiler Project
              </p>
              <h3 className="text-2xl font-semibold text-white">
                C-Subset Compiler
              </h3>
            </div>

            <a
              href="https://github.com/Shounak96/C-Compiler"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
            >
              GitHub
            </a>
          </div>

          <p className="mt-4 leading-7 text-slate-300">
            A multi-phase compiler for a C-like language, implementing lexical
            analysis, parsing, semantic type checking, and JVM code generation using
            Krakatau assembly.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Python",
              "Compilers",
              "Lexical Analysis",
              "Parsing",
              "Type Checking",
              "Code Generation",
              "JVM",
              "Krakatau",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 mt-auto">
            <a
              href="/projects/c-compiler"
              className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
            >
              View Details
            </a>
          </div>
        </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold text-white">
          Let's work together
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-300 text-justify">
          Actively looking for full-time roles in software engineering and AI/ML. I bring production experience, full-stack range, and ownership mentality. If that fits what your team needs, let's talk.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {/* Email */}
        <a
  href="mailto:shounakrajendrapowar96@gmail.com?subject=Opportunity%20Inquiry&body=Hi%20Shounak%2C%20I%20came%20across%20your%20portfolio..."
  className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
>
  Email Me
</a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shounak-powar"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Shounak96"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
        >
          GitHub
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-400">
  Prefer email? Reach me directly at{" "}
  <span className="text-white">
    shounakrajendrapowar96@gmail.com
  </span>
</p>
    </section>
    </main>
  );
}