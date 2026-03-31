import Link from "next/link";

export default function YouGrowPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:px-10">
      {/* Header */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
          Full-Stack + AI Product
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          YouGrow
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300 text-justify">
          A full-stack SaaS-style platform designed to help YouTube creators
          generate ideas, analyze trends, and improve content consistency using
          their own data all through a clean, modern interface.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://you-grow-96.vercel.app/" // replace later
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Shounak96/YouGrow"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
          >
            GitHub
          </a>

          <Link
            href="/#projects"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60"
          >
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Overview */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 leading-8 text-slate-300 text-justify">
          YouGrow is built as an end-to-end product to support content creators
          in ideation and growth. Instead of relying on external analytics APIs,
          the system focuses on leveraging user-owned data and structured
          workflows to generate actionable insights and ideas.
        </p>
      </section>

      {/* Core Features */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Core Features</h2>

        <div className="mt-8 space-y-6">
          {/* Auth */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">Authentication</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Email/password authentication</li>
              <li>• Google OAuth login</li>
              <li>• Secure session management (JWT)</li>
              <li>• Profile management (name, email, avatar)</li>
            </ul>
          </div>

          {/* Channels */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Channel Management
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Add and manage YouTube channels</li>
              <li>• User-scoped data for multi-account safety</li>
              <li>• Foundation for analytics and idea generation</li>
            </ul>
          </div>

          {/* Ideas */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              AI Idea Generation
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Queue-based idea generation per channel</li>
              <li>• Background job processing</li>
              <li>• AI-generated outputs include:</li>
              <li className="ml-4">- Topic</li>
              <li className="ml-4">- Hook</li>
              <li className="ml-4">- Title</li>
              <li className="ml-4">- Thumbnail text</li>
              <li>• Gemini-based idea generation pipeline</li>
            </ul>
          </div>

          {/* Dashboard */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Insights Dashboard
            </h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• Channel count, idea count, job tracking</li>
              <li>• Success rate calculations</li>
              <li>• Time filters (7 / 30 days)</li>
              <li>• Charts:</li>
              <li className="ml-4">- Ideas over time</li>
              <li className="ml-4">- Job status distribution</li>
              <li>• Analytics panels:</li>
              <li className="ml-4">- Top topics</li>
              <li className="ml-4">- Channel leaderboard</li>
              <li className="ml-4">- Hook pattern analysis</li>
              <li>• Rule-based recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          System Architecture
        </h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The system is designed as a full-stack SaaS architecture with clear
          separation between frontend UI, backend logic, and asynchronous job
          processing. Background jobs enable scalable AI operations without
          blocking user interactions.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Next.js (App Router)",
            "Node.js",
            "React",
            "TypeScript",
            "Prisma ORM",
            "PostgreSQL",
            "NextAuth (Auth.js)",
            "Server Actions",
            "Background Job Queue",
            "Gemini AI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* UX */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          UI / UX Design
        </h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The interface follows a clean, SaaS-style design with a focus on
          usability and clarity. The dashboard is responsive, supports
          empty-state handling, and presents insights in a structured and
          digestible format for users.
        </p>
      </section>

      {/* Challenges */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Learnings
        </h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          One of the biggest challenges was integrating AI-driven workflows into
          a real product environment. Designing a job queue system that could
          handle asynchronous idea generation while maintaining a smooth user
          experience required careful architectural decisions.
        </p>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          This project strengthened my ability to build production-ready systems,
          combine AI with real user workflows, and think beyond features toward
          complete product design.
        </p>
      </section>
    </main>
  );
}