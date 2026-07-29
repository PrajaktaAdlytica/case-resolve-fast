import { useEffect, useRef, useState } from "react";
import { ArrowDown, Pause, Play } from "lucide-react";

const AUTO_ADVANCE_MS = 9000;

const scenes = [
  {
    label: "Maker–Checker",
    eyebrow: "Human accountability",
    title: "Keep the judgement human.",
    body: "Maker–checker control for every decision.",
    video: "/motion-entry/maker-checker.mp4",
    poster: "/motion-entry/maker-checker.jpg",
    dark: true,
    accent: "magenta",
  },
  {
    label: "Control Horizon",
    eyebrow: "Operational control",
    title: "From signal to resolution.",
    body: "Evidence and ownership move together.",
    video: "/motion-entry/control-horizon.mp4",
    poster: "/motion-entry/control-horizon.jpg",
    dark: false,
    accent: "violet",
  },
  {
    label: "Evidence Spine",
    eyebrow: "Signal to case",
    title: "One signal. One accountable case.",
    body: "Every action stays traceable.",
    video: "/motion-entry/evidence-spine.mp4",
    poster: "/motion-entry/evidence-spine.jpg",
    dark: false,
    accent: "violet",
  },
] as const;

export function MotionEntry() {
  const [activeScene, setActiveScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);
  const [readyScenes, setReadyScenes] = useState<boolean[]>(() => scenes.map(() => false));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const currentScene = scenes[activeScene];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      if (paused || reducedMotion) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    });
  }, [paused, reducedMotion]);

  useEffect(() => {
    if (paused || reducedMotion) return;

    const advanceTimer = window.setTimeout(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(advanceTimer);
  }, [activeScene, cycleKey, paused, reducedMotion]);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeScene];
    if (!activeVideo) return;

    activeVideo.currentTime = 0;
    if (!activeVideo.paused) {
      void activeVideo.play().catch(() => undefined);
    }
  }, [activeScene]);

  const selectScene = (index: number) => {
    if (index === activeScene) {
      const activeVideo = videoRefs.current[index];
      if (activeVideo) {
        activeVideo.currentTime = 0;
      }
    }
    setActiveScene(index);
    setCycleKey((current) => current + 1);
  };

  const scrollToWebsite = () => {
    document.getElementById("bankxio-home")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const textTone = currentScene.dark ? "text-white" : "text-[color:var(--color-ink)]";
  const mutedTone = currentScene.dark ? "text-white/68" : "text-[color:var(--color-ink-secondary)]";
  const controlTone = currentScene.dark
    ? "border-white/28 bg-[#07132d]/42 text-white hover:bg-[#07132d]/58"
    : "border-[color:var(--color-ink)]/14 bg-white/48 text-[color:var(--color-ink)] hover:bg-white/72";

  return (
    <section
      aria-labelledby="motion-entry-title"
      className={`relative isolate min-h-[700px] overflow-hidden transition-colors duration-700 sm:min-h-[calc(100svh-68px)] ${
        currentScene.dark ? "bg-[#0d1d40]" : "bg-[#f8f4ee]"
      }`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {scenes.map((scene, index) => {
          const active = activeScene === index;
          return (
            <div key={scene.label} className="absolute inset-0">
              <img
                src={scene.poster}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                  active ? "opacity-100" : "opacity-0"
                }`}
              />
              <video
                ref={(video) => {
                  videoRefs.current[index] = video;
                }}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={scene.poster}
                onCanPlay={() =>
                  setReadyScenes((current) =>
                    current.map((ready, sceneIndex) => (sceneIndex === index ? true : ready)),
                  )
                }
                className={`bankxio-motion-video absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                  active && readyScenes[index] && !reducedMotion ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src={scene.video} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          currentScene.dark ? "bg-[#07132d]/18" : "bg-white/6"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1200px] flex-col px-6 pb-8 pt-8 sm:min-h-[calc(100svh-68px)] md:pb-10 md:pt-10">
        <div className="flex items-start justify-between gap-6">
          <div
            role="tablist"
            aria-label="Choose a Bankxio motion scene"
            className="grid w-full max-w-[760px] grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-5"
          >
            {scenes.map((scene, index) => {
              const active = activeScene === index;
              return (
                <button
                  key={scene.label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="bankxio-motion-scene"
                  onClick={() => selectScene(index)}
                  className={`group relative flex items-center gap-3 overflow-hidden border-b py-2.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-primary)] ${
                    currentScene.dark
                      ? active
                        ? "border-white text-white"
                        : "border-white/20 text-white/55 hover:border-white/45 hover:text-white/80"
                      : active
                        ? "border-[color:var(--color-ink)] text-[color:var(--color-ink)]"
                        : "border-[color:var(--color-ink)]/16 text-[color:var(--color-ink)]/55 hover:border-[color:var(--color-ink)]/40 hover:text-[color:var(--color-ink)]/80"
                  }`}
                >
                  <span className="text-[9px] font-medium tracking-[0.08em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em]">
                    {scene.label}
                  </span>
                  {active && !reducedMotion ? (
                    <span
                      key={`${activeScene}-${cycleKey}`}
                      aria-hidden="true"
                      className="bankxio-scene-progress absolute bottom-0 left-0 h-px w-full bg-current"
                      style={{
                        animationDuration: `${AUTO_ADVANCE_MS}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            className={`hidden shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] transition-colors sm:flex ${controlTone}`}
            aria-pressed={paused}
            aria-label={paused ? "Resume background motion" : "Pause background motion"}
          >
            {paused || reducedMotion ? (
              <Play className="h-3.5 w-3.5" />
            ) : (
              <Pause className="h-3.5 w-3.5" />
            )}
            {reducedMotion ? "Reduced motion" : paused ? "Play motion" : "Pause motion"}
          </button>
        </div>

        <div
          id="bankxio-motion-scene"
          role="tabpanel"
          className="mt-auto flex items-end justify-between gap-10"
        >
          <div
            key={activeScene}
            className={`bankxio-motion-copy max-w-[540px] pb-4 md:pb-7 ${textTone}`}
            aria-live="polite"
          >
            <div className="mb-4 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.13em]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  currentScene.accent === "magenta"
                    ? "bg-[#f96bee]"
                    : "bg-[color:var(--color-brand-primary)]"
                }`}
              />
              {currentScene.eyebrow} · Demo scene {String(activeScene + 1).padStart(2, "0")}
            </div>

            <h1
              id="motion-entry-title"
              className="max-w-[540px] text-[clamp(36px,4.5vw,58px)] font-light leading-[1] tracking-[-0.04em]"
            >
              {currentScene.title}
            </h1>

            <p
              className={`mt-3 max-w-[440px] text-[13px] leading-[1.5] md:text-[14px] ${mutedTone}`}
            >
              {currentScene.body}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button type="button" onClick={scrollToWebsite} className="btn-pill btn-primary">
                Enter Bankxio
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setPaused(true);
                  scrollToWebsite();
                }}
                className={`btn-pill border backdrop-blur-sm ${controlTone}`}
              >
                Skip animation
              </button>
              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors sm:hidden ${controlTone}`}
                aria-pressed={paused}
                aria-label={paused ? "Resume background motion" : "Pause background motion"}
              >
                {paused || reducedMotion ? (
                  <Play className="h-4 w-4" />
                ) : (
                  <Pause className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToWebsite}
            className={`mb-7 hidden shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.12em] transition-colors lg:flex ${mutedTone}`}
          >
            Scroll to platform
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${controlTone}`}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
