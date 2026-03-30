import Link from "next/link";

export default function VirtualSnakeGamePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:px-10">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Computer Vision Project
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Virtual Snake Game
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          A real-time gesture-controlled Snake game that replaces keyboard input
          with webcam-based hand tracking. The system interprets finger motion
          as directional commands and translates them into smooth, hands-free
          gameplay.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Shounak96/SnakeGame"
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
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-white">Demo Video</h2>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/3JDCiKHp_HI"
            title="Virtual Snake Game Demo"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 leading-8 text-slate-300">
          This project reimagined the classic Snake game as a touchless
          human-computer interaction experience. Instead of relying on a
          keyboard or joystick, players control the snake using hand gestures in
          front of a webcam. The system detects the index fingertip in real
          time, estimates movement direction across frames, and maps that motion
          into discrete game controls.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">How It Works</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              1. Webcam Capture and Hand Tracking
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              The system continuously captures frames from a webcam and processes
              them using OpenCV and the CVZone hand tracking module built on top
              of MediaPipe. It assumes single-hand detection and focuses on
              landmark ID 8, which corresponds to the tip of the index finger.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              2. Gesture-to-Direction Mapping
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              The fingertip position is tracked across consecutive frames using
              previous and current coordinates. Motion deltas along the x and y
              axes are compared, and threshold-based logic is used to classify a
              gesture as up, down, left, or right. Small jitter is filtered out
              so that only deliberate swipes affect the game.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              3. Real-Time Game Logic
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              The final direction command is passed into a PyGame-based Snake
              implementation. The game loop updates the snake position, checks
              for food consumption, handles growth, tracks the score, and
              detects collisions with boundaries, obstacles, or the snake’s own
              body.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Key Technical Ideas</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "OpenCV",
            "MediaPipe",
            "CVZone",
            "PyGame",
            "Python",
            "Gesture Recognition",
            "Real-Time Frame Processing",
            "Directional Thresholding",
            "Collision Detection",
            "Game Loop Control",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 leading-8 text-slate-300">
          A key design choice was to track only the index fingertip instead of
          analyzing all hand landmarks for gesture classification. This reduced
          computational overhead, lowered latency, and made the controls more
          predictable and responsive during gameplay.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Results</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Swipe Accuracy
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">97.6%</p>
            <p className="mt-2 text-slate-300">22/23 swipes correct</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Frame Rate
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">24–30 FPS</p>
            <p className="mt-2 text-slate-300">Stable real-time gameplay</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Input Delay
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">&lt; 200 ms</p>
            <p className="mt-2 text-slate-300">Responsive gesture control</p>
          </div>
        </div>

        <p className="mt-8 leading-8 text-slate-300">
          The final system achieved a strong balance between responsiveness and
          stability. It remained usable during longer sessions, maintained
          smooth frame rates, and handled temporary interruptions in hand
          tracking without crashing or producing unpredictable behavior.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Design Challenges and Solutions
        </h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Mirrored Camera Input
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              Early versions of the game produced reversed controls because the
              webcam feed was mirrored. This was fixed by flipping each frame
              horizontally before gesture analysis, aligning on-screen movement
              with the player’s actual hand motion.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Gesture Noise and Jitter
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              Small involuntary finger movements caused accidental turns during
              early testing. Threshold-based gesture filtering and direction
              locking were added to suppress micro-movements and prevent illegal
              instant reversals such as switching directly from left to right.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              Playability vs Raw Tracking
            </h3>
            <p className="mt-4 leading-8 text-slate-300">
              An early experiment tried to make the snake directly follow the
              fingertip path. While technically functional, it made gameplay
              chaotic and difficult to control. Switching to four discrete
              gesture directions made the system much more stable and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Project Impact</h2>
        <p className="mt-4 leading-8 text-slate-300">
          This project demonstrates practical computer vision engineering in a
          user-facing interactive system. It combines real-time perception,
          gesture recognition, latency-sensitive logic, and gameplay mechanics
          into one complete application. Beyond gaming, the same design ideas
          can extend to touchless interfaces, accessibility tools, and
          interactive public systems.
        </p>
      </section>

      <section className="mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-white">
          Screenshots and Demo
        </h2>
        <p className="mt-4 leading-8 text-slate-300">
          We can add your screenshots here in a gallery layout and place your
          demo video link or embedded video above them. Once you send those
          assets, I’ll make this page much more impressive visually.
        </p>
      </section>
    </main>
  );
}