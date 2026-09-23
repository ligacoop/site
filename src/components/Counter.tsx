"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  suffix = "+",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animated = false;

    const animate = () => {
      if (animated) return;
      animated = true;
      const duration = 1600;
      let start: number | null = null;

      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.floor(eased * value).toLocaleString("pt-BR"));
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplay(value.toLocaleString("pt-BR"));
        }
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span className={className} ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
