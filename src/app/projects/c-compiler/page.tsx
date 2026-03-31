import Link from "next/link";

export default function CCompilerPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:px-10">
      {/* Header */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Systems / Compiler Project
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          C-Subset Compiler
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300 text-justify">
          A multi-phase compiler for a C-like language implemented in Python,
          covering the full compilation pipeline from lexical analysis to JVM
          code generation using Krakatau assembly.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Shounak96/C-Compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm text-white transition hover:border-blue-300/60 hover:bg-blue-500/20"
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
        <h2 className="text-2xl font-semibold text-white">
          Compiler Pipeline Overview
        </h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The compiler follows a classical multi-phase architecture, where each
          stage transforms the program representation step-by-step from source
          code to executable JVM assembly. The system is orchestrated through a
          central driver script that coordinates all phases.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Lexical Analysis",
            "Parsing",
            "Type Checking",
            "Code Generation",
            "Control Flow Translation",
          ].map((phase) => (
            <div
              key={phase}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-center text-slate-200"
            >
              {phase}
            </div>
          ))}
        </div>
      </section>

      {/* Phases */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Compilation Phases
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Lexical Analysis
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              Converts source code into tokens using pattern matching rules.
              Handles keywords, identifiers, literals, operators, and comments.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Parsing (Recursive Descent)
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              Builds syntactic structure from tokens using a recursive-descent
              parser. Recognizes functions, declarations, expressions, and
              control structures.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Type Checking
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              Performs semantic validation, enforcing type rules, scope
              correctness, function calls, and struct access.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Code Generation
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              Generates JVM/Krakatau assembly for expressions, functions, and
              control-flow constructs including loops and conditionals.
            </p>
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">System Design</h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The compiler is organized into modular components corresponding to
          each phase, allowing independent development and testing. The driver
          script integrates all modules into a complete compilation pipeline.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "lexer.py",
            "parser.py",
            "typechecker.py",
            "codegen.py",
            "codegen6.py",
            "mycc.py",
          ].map((file) => (
            <span
              key={file}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
            >
              {file}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Learnings
        </h2>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          Building a full compiler pipeline required careful coordination
          between phases, especially ensuring consistency between parsing,
          semantic analysis, and code generation. Handling control flow,
          type rules, and stack-based JVM instructions added complexity.
        </p>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          This project strengthened my understanding of programming language
          design, compiler construction, and low-level execution models.
        </p>
      </section>

      {/* Tech */}
      <section className="mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Python",
            "Compilers",
            "Recursive Descent Parsing",
            "Type Systems",
            "JVM",
            "Krakatau Assembly",
            "Data Structures",
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
    </main>
  );
}