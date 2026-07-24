"use client";
import { useEffect, useRef } from "react";
import { Activity, BrainCircuit, Building2, Clock, Database, Network, Share2, ShieldCheck, Workflow } from "lucide-react";
import styles from "./HeroPanel.module.css";

const metrics = [
  { label: "Automation coverage", value: "92%", icon: Workflow },
  { label: "Manual hours reclaimed", value: "140/mo", icon: Clock },
  { label: "Systems connected", value: "6", icon: Network },
  { label: "Security posture", value: "Strong", icon: ShieldCheck },
];

const systems = [
  { label: "Automation", icon: Workflow },
  { label: "AI", icon: BrainCircuit },
  { label: "Data", icon: Database },
  { label: "Security", icon: ShieldCheck },
  { label: "Business Systems", icon: Building2 },
  { label: "Collaboration", icon: Share2 },
];

export function HeroPanel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle(styles.paused, !entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);

    let onMove: ((e: MouseEvent) => void) | null = null;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 801px)").matches;
    if (!reduced && fine && wide) {
      onMove = (e: MouseEvent) => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const px = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
          const py = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
          el.style.setProperty("--px", `${Math.max(-6, Math.min(6, px))}px`);
          el.style.setProperty("--py", `${Math.max(-6, Math.min(6, py))}px`);
          rafRef.current = null;
        });
      };
      el.addEventListener("mousemove", onMove);
    }

    return () => {
      io.disconnect();
      if (onMove) el.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.grid} />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
      </div>

      <div className={styles.scene}>
        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span className={styles.panelTitle}>Telamon Operating View</span>
            <span className={styles.liveTag}>Live</span>
          </div>

          <div className={styles.metrics}>
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div className={styles.metric} key={m.label}>
                  <span className={styles.metricIcon}><Icon size={16} /></span>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.chips}>
            {systems.map((s) => {
              const Icon = s.icon;
              return (
                <span className={styles.chip} key={s.label}>
                  <Icon size={13} /> {s.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className={styles.ringCard}>
          <div className={styles.ring} style={{ ["--pct" as string]: 78 }}>
            <span>78%</span>
          </div>
          <p>
            <Activity size={13} /> Operational efficiency
          </p>
        </div>
      </div>
    </div>
  );
}
