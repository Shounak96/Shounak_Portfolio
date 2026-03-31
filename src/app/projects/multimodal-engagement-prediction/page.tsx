import Link from "next/link";
export default function MultimodalEngagementPredictionPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:px-10">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Research Project
        </p>

        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Multimodal Engagement Prediction
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300 text-justify">
          A multimodal machine learning project focused on predicting the
          engagement of social-media posts by combining image and text signals.
          The work compared classification, feature-engineered ensemble
          learning, and regression-based modeling to understand which setup was
          most effective for this problem.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Shounak96/Multimodal-large-language-model-engagement-prediction"
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

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Overview</h2>
        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The goal of this project was to predict how much engagement a
          social-media post would receive using both its image and its textual
          metadata. Instead of relying on only one modality, the project treated
          engagement prediction as a multimodal learning problem and explored
          multiple formulations to understand what works best in practice.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Dataset and Problem Setup
        </h2>
        <p className="mt-4 leading-8 text-slate-300 text-justify">
          The project used the PixelRec dataset, where each sample includes an
          image, text metadata such as title, tags, and description, and raw
          engagement signals including likes, comments, shares, favorites, and
          views. The initial formulation converted these signals into engagement
          classes ranging from Very Low to Very High, while later experiments
          also explored a continuous regression target for popularity.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Core Inputs
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Images",
              "Title",
              "Tags",
              "Description",
              "Likes",
              "Comments",
              "Shares",
              "Favorites",
              "Views",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Approaches Explored</h2>

        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              1. Fine-Tuned Multimodal Classification
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              The first approach used a transformer-based multimodal
              classification pipeline with ViT for image encoding and BERT for
              text encoding. Different fusion strategies were explored to combine
              the visual and textual representations, including concatenation,
              cross-attention, and gated fusion.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {["ViT", "BERT", "PyTorch", "Transformers", "Cross-Attention"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              2. Feature-Based CatBoost Classification
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              The second approach extracted fixed multimodal features using CLIP
              embeddings and combined them with engineered engagement and
              metadata features. These were then used to train a CatBoost
              classifier, which performed more robustly than the end-to-end
              classification setup.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {["CLIP", "CatBoost", "Feature Engineering", "Scikit-learn", "Python"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <h3 className="text-xl font-semibold text-white">
              3. Multimodal Regression
            </h3>
            <p className="mt-4 leading-8 text-slate-300 text-justify">
              The final and most promising direction reformulated the task as a
              regression problem. It used SigLIP for visual encoding and
              DeBERTa for text encoding, then fused the representations using
              cross-modal attention and gated fusion to predict a continuous
              popularity score.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {["SigLIP", "DeBERTa", "Regression", "Cross-Modal Attention", "Gated Fusion"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">Results</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              CatBoost Classifier
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">43.18%</p>
            <p className="mt-2 text-slate-300">Test Accuracy</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              SigLIP + DeBERTa
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">0.2033</p>
            <p className="mt-2 text-slate-300">Best R² Score</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              CLIP + DeBERTa
            </p>
            <p className="mt-4 text-3xl font-semibold text-white">0.1284</p>
            <p className="mt-2 text-slate-300">Best R² Score</p>
          </div>
        </div>

        <p className="mt-8 leading-8 text-slate-300 text-justify">
          The experiments showed that this problem was difficult to solve as a
          pure classification task, especially when label ambiguity and class
          boundaries introduced noise. The regression setup preserved more
          information and produced the strongest results, with SigLIP clearly
          outperforming the CLIP-based alternative.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-white">
          Challenges and Key Learnings
        </h2>
        <p className="mt-4 leading-8 text-slate-300 text-justify">
          One of the biggest challenges in this project was that engagement is
          inherently noisy and difficult to define cleanly. Posts with similar
          content can receive very different engagement due to external factors,
          and discretizing popularity into categories introduced ambiguity. This
          project helped me understand the importance of problem formulation,
          feature representation, and choosing metrics that actually reflect the
          goal of the system.
        </p>

        <p className="mt-4 leading-8 text-slate-300 text-justify">
          A major takeaway was that framing the problem correctly can matter as
          much as model complexity. Moving from rigid classification to a
          continuous target created a more meaningful learning signal, and the
          comparison across architectures gave deeper insight into how different
          multimodal models behave on real-world data.
        </p>
      </section>

      <section className="mt-16 mb-20">
        <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
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
            "NumPy",
            "Pandas",
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