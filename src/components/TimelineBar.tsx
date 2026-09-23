"use client";

import { useEffect, useRef, useState } from "react";

export default function TimelineBar({ fill }: { fill: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setWidth(fill));
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(fill);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [fill]);

  return (
    <div className="timeline-bar" ref={ref}>
      <span className="timeline-fill" style={{ width: `${width}%` }} />
    </div>
  );
}
