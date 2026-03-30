import Link from "next/link";

export default function CheckersAIPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:px-10">
      {/* Header */}
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          AI / Game Theory Project
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Checkers AI — Alpha-Beta & Monte Carlo Tree Search
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          A Java-based Checkers AI system implementing multiple adversarial
          search strategies including Alpha-Beta pruning, Monte Carlo Tree
          Search (MCTS), and a hybrid agent. The project includes a GUI that
          allows users to play against the AI and observe decision-making in
          real time.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Shounak96/Checkers-AI"
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
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 leading-8 text-slate-300">
          This project implements a complete Checkers-playing AI system using
          multiple adversarial search strategies. The system evaluates board
          states, simulates future moves, and selects optimal actions using both
          deterministic and probabilistic approaches. A lightweight GUI enables
          interactive gameplay and real-time observation of AI decisions.
        </p>
      </section>

      {/* Features */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Features</h2>

        <ul className="mt-6 space-y-3 text-slate-300 leading-7">
          <li>• Interactive GUI for human vs AI gameplay</li>
          <li>• Alpha-Beta pruning–based adversarial search agent</li>
          <li>• Monte Carlo Tree Search (MCTS) agent</li>
          <li>• Hybrid agent combining multiple strategies</li>
          <li>• Legal move generation and validation</li>
          <li>• Configurable search depth and exploration strategies</li>
          <li>• Real-time visualization of board state and moves</li>
        </ul>
      </section>

      {/* Algorithms */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Algorithms & Techniques
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Alpha-Beta Pruning
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              The Alpha-Beta pruning algorithm optimizes minimax search by
              eliminating branches that cannot influence the final decision.
              This significantly reduces the search space while maintaining
              optimal play.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Monte Carlo Tree Search (MCTS)
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              MCTS explores the game tree using stochastic simulations and
              balances exploration and exploitation using UCB-style selection.
              It is particularly useful for handling large search spaces where
              exhaustive search is not feasible.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Hybrid Agent
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              A hybrid approach was implemented to combine the strengths of both
              Alpha-Beta pruning and MCTS. This allows the system to leverage
              deterministic search for precision and stochastic search for
              broader exploration.
            </p>
          </div>
        </div>
      </section>

      {/* System Design */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">System Design</h2>

        <p className="mt-4 leading-8 text-slate-300">
          The system follows a modular object-oriented design in Java, separating
          concerns between game logic, search algorithms, and UI interaction.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Checkers.java",
            "AlphaBetaSearch.java",
            "MonteCarloTreeSearch.java",
            "MCTree.java",
            "MCNode.java",
            "CheckersData.java",
            "CheckersMove.java",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Learnings
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          One of the main challenges was balancing search depth and computation
          time. While Alpha-Beta pruning improves efficiency, deeper searches
          still increase complexity significantly. MCTS introduced probabilistic
          exploration but required careful tuning of exploration-exploitation
          trade-offs.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          This project strengthened my understanding of adversarial search,
          decision-making under constraints, and how different AI strategies
          perform in structured game environments.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Java",
            "Game AI",
            "Minimax",
            "Alpha-Beta Pruning",
            "Monte Carlo Tree Search",
            "OOP",
            "Data Structures",
            "Algorithms",
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