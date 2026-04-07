import { RefObject, useEffect } from "react";

const MOBILE_MEDIA = "(max-width: 767px)";

export const useAutoHorizontalScroll = (ref: RefObject<HTMLElement>, speed = 0.4) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia(MOBILE_MEDIA);
    let rafId = 0;
    let lastTs = 0;
    let paused = false;

    const onEnter = () => {
      paused = true;
    };

    const onLeave = () => {
      paused = false;
    };

    const step = (ts: number) => {
      if (!media.matches) {
        rafId = requestAnimationFrame(step);
        return;
      }

      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      if (!paused && el.scrollWidth > el.clientWidth) {
        const next = el.scrollLeft + dt * speed;
        const max = el.scrollWidth - el.clientWidth;
        el.scrollLeft = next >= max ? 0 : next;
      }

      rafId = requestAnimationFrame(step);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, [ref, speed]);
};

