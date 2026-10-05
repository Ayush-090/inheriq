'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

const LAYERS = [
  { id: 'arjun', label: 'Arjun · Sales', color: '#4263eb', outcome: 'Books 45 meetings / week', zIndex: 5, assembledY: -112, explodedY: -320, isCore: false, gradientFrom: 'rgba(66,99,235,0.22)', gradientTo: 'rgba(66,99,235,0.04)' },
  { id: 'kavya', label: 'Kavya · HR', color: '#ad50c9', outcome: '40 hrs saved on HR work', zIndex: 4, assembledY: -56, explodedY: -185, isCore: false, gradientFrom: 'rgba(173,80,201,0.22)', gradientTo: 'rgba(173,80,201,0.04)' },
  { id: 'brain', label: 'Inheriq Brain', color: '#5B8CFF', outcome: 'Trained once. All 5 know.', zIndex: 3, assembledY: 0, explodedY: 0, isCore: true, gradientFrom: 'rgba(91,140,255,0.28)', gradientTo: 'rgba(91,140,255,0.06)' },
  { id: 'rohan', label: 'Rohan · Marketing', color: '#db7a21', outcome: '14× campaign ROI', zIndex: 2, assembledY: 56, explodedY: 185, isCore: false, gradientFrom: 'rgba(219,122,33,0.22)', gradientTo: 'rgba(219,122,33,0.04)' },
  { id: 'vikram', label: 'Vikram · Finance', color: '#c45237', outcome: '96% dues collected', zIndex: 1, assembledY: 112, explodedY: 320, isCore: false, gradientFrom: 'rgba(196,82,55,0.22)', gradientTo: 'rgba(196,82,55,0.04)' },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

type Layer = typeof LAYERS[number];

function BottomSheet({ layer, onClose, onHire }: { layer: Layer | null; onClose: () => void; onHire: () => void }) {
  if (!layer) return null;
  return (
    <div className="ew-sheet-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ew-sheet" role="dialog" aria-modal="true" aria-label={layer.label}>
        <div className="ew-sheet-handle" />
        <div className="ew-sheet-dot" style={{ background: layer.color }} />
        <h3 className="ew-sheet-title">{layer.label}</h3>
        <p className="ew-sheet-outcome">{layer.outcome}</p>
        <button className="ew-sheet-cta" style={{ background: layer.color }} onClick={onHire}>
          Hire {layer.label.split(' · ')[0]} <ArrowRight size={16} />
        </button>
        <button className="ew-sheet-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function LayerCard({ layer, progress, reducedMotion, onTap }: { layer: Layer; progress: number; reducedMotion: boolean; onTap: () => void }) {
  const easedP = easeInOutCubic(progress);
  const currentY = reducedMotion ? layer.explodedY : layer.assembledY + (layer.explodedY - layer.assembledY) * easedP;
  const opacity = layer.isCore ? 1 : reducedMotion ? 1 : 0.65 + 0.35 * easedP;
  const labelOpacity = reducedMotion ? 1 : easedP;

  return (
    <div className="ew-layer" style={{ transform: `translateY(${currentY}px) translateZ(${layer.zIndex * 8}px)`, zIndex: layer.zIndex, transition: 'none' }}>
      <button
        className={`ew-slab${layer.isCore ? ' ew-slab-core' : ''}`}
        style={{
          borderColor: layer.color,
          boxShadow: `0 0 28px ${layer.color}55, 0 2px 14px rgba(0,0,0,0.45)`,
          background: layer.isCore
            ? `radial-gradient(ellipse at center, ${layer.color}44 0%, ${layer.color}18 60%, transparent 100%)`
            : `linear-gradient(135deg, ${layer.gradientFrom}, ${layer.gradientTo})`,
          opacity,
        }}
        onClick={onTap}
        aria-label={`${layer.label} — ${layer.outcome}`}
      >
        {layer.isCore && (
          <div className="ew-core-orb" style={{ boxShadow: `0 0 40px 12px ${layer.color}88, 0 0 80px 24px ${layer.color}33` }} />
        )}
        <span className="ew-corner ew-tl" /><span className="ew-corner ew-tr" />
        <span className="ew-corner ew-bl" /><span className="ew-corner ew-br" />
      </button>
      <div className="ew-label-wrap" style={{ opacity: labelOpacity, pointerEvents: labelOpacity > 0.4 ? 'auto' : 'none' }} aria-hidden={labelOpacity < 0.5}>
        <span className="ew-label-dot" style={{ background: layer.color }} />
        <span className="ew-label-name">{layer.label}</span>
        <span className="ew-label-outcome">{layer.outcome}</span>
      </div>
    </div>
  );
}

export function ExplodedWorkforce({ onLead }: { onLead: () => void }) {
  const [progress, setProgress] = useState(0);
  const [sheetLayer, setSheetLayer] = useState<Layer | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const mqMob = window.matchMedia('(max-width: 767px)');
    setIsMobile(mqMob.matches);
    const onChange = () => setIsMobile(mqMob.matches);
    mqMob.addEventListener('change', onChange);
    return () => mqMob.removeEventListener('change', onChange);
  }, []);

  const tick = useCallback(() => {
    const diff = targetRef.current - currentRef.current;
    if (Math.abs(diff) < 0.001) {
      currentRef.current = targetRef.current;
    } else {
      currentRef.current += diff * 0.09;
    }
    setProgress(currentRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  const handleMouseEnter = () => { if (!isMobile && !reducedMotion) targetRef.current = 1; };
  const handleMouseLeave = () => { if (!isMobile && !reducedMotion) targetRef.current = 0; };

  useEffect(() => {
    if (!isMobile || reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.8;
      const end = -rect.height * 0.2;
      const raw = (start - rect.top) / (start - end);
      targetRef.current = Math.min(1, Math.max(0, raw));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile, reducedMotion]);

  return (
    <>
      <section className="ew-section" ref={containerRef} id="workforce">
        <div className="section-wrap">
          <div className="section-heading motion-reveal">
            <p className="eyebrow">The Exploded Workforce</p>
            <h2>One dashboard.<br /><span>Five specialists inside.</span></h2>
            <p>{isMobile ? 'Scroll to reveal each AI employee inside the Inheriq Brain.' : 'Hover the dashboard to reveal each AI employee inside.'}</p>
          </div>

          <div className="ew-stage" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label="Interactive exploded view of the Inheriq AI workforce dashboard">
            <div className="ew-glow-bg" />
            <div className="ew-scene">
              {LAYERS.map((layer) => (
                <LayerCard
                  key={layer.id}
                  layer={layer}
                  progress={progress}
                  reducedMotion={reducedMotion}
                  onTap={() => isMobile && setSheetLayer(layer)}
                />
              ))}
            </div>

            {!isMobile && !reducedMotion && (
              <p className="ew-hint" aria-hidden="true">
                {progress < 0.05 ? '↕  Hover to reveal the team' : '↕  Move away to reassemble'}
              </p>
            )}

            <div className="ew-hero-img" style={{ opacity: 1 - easeInOutCubic(progress) * 0.85 }} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/inheriq/inheriq-hero-dashboard.png" alt="" width={720} height={405} loading="lazy" />
            </div>
          </div>

          <div className="center-cta motion-reveal">
            <button className="button button-primary" onClick={onLead}>Hire the full team <ArrowRight size={16} /></button>
            <span>5 AI employees · One subscription</span>
          </div>
        </div>
      </section>

      {isMobile && (
        <BottomSheet
          layer={sheetLayer}
          onClose={() => setSheetLayer(null)}
          onHire={() => { setSheetLayer(null); onLead(); }}
        />
      )}
    </>
  );
}
