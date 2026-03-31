import Link from "next/link";
export default function FinTrackPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-10 max-w-5xl mx-auto">
      {/* Title */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
          Fullstack + AI Project
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          FinTrack - AI-Powered Financial Tracking Platform
        </h1>

        <p className="mt-6 text-lg text-slate-300 leading-8 text-justify">
          A full-stack financial tracking system that helps users manage
          transactions, budgets, and insights with AI-powered categorization and
          analytics.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://fintrack-pi-pink.vercel.app"
            target="_blank"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm text-white hover:bg-blue-500/20 transition"
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Shounak96/FinTrack"
            target="_blank"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 hover:bg-slate-800 transition"
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

      {/* Section: Overview */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 text-slate-300 leading-8 text-justify">
          FinTrack is a full-stack personal finance application designed to
          simplify financial management through automation, intelligent insights,
          and real-time analytics. It allows users to track transactions, manage
          budgets, and analyze spending behavior through an interactive dashboard.
        </p>
      </section>

      {/* Section: Tech Stack */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Next.js",
            "Node.js",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
            "Supabase",
            "Clerk",
            "Inngest",
            "Arcjet",
            "Google GenAI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Section: Features */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Key Features</h2>

        <ul className="mt-6 space-y-4 text-slate-300 leading-7">
          <li>• Transaction tracking with categorized insights</li>
          <li>• Budget management and spending analytics</li>
          <li>• AI-powered transaction categorization</li>
          <li>• Interactive dashboard with visual summaries</li>
          <li>• Secure authentication using Clerk</li>
          <li>• Background job processing using Inngest</li>
        </ul>
      </section>


      {/* Section: Challenges */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Solutions
        </h2>

        <p className="mt-4 text-slate-300 leading-8 text-justify">
          One of the key challenges was designing a scalable backend capable of
          handling asynchronous AI workflows and real-time data updates. This was
          addressed by implementing background job processing with Inngest and
          optimizing database queries using Prisma and PostgreSQL.
        </p>
      </section>

      {/* Section: Impact */}
      <section className="mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-white">Impact</h2>

        <p className="mt-4 text-slate-300 leading-8 text-justify">
          FinTrack demonstrates strong full-stack engineering capability combined
          with AI integration. It highlights the ability to design scalable
          systems, optimize backend performance, and deliver real-world usable
          products.
        </p>
      </section>
    </main>
  );
}