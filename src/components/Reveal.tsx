"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type JSX,
  type ReactNode,
} from "react";

type IntrinsicTag = keyof JSX.IntrinsicElements;

type RevealOwnProps<T extends IntrinsicTag> = {
  as?: T;
  children?: ReactNode;
  className?: string;
};

type RevealProps<T extends IntrinsicTag> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

// `as` is always a host tag (div, p, h2, li, a, article, figure, ...) in
// every call site below, never a custom component — safe to attach a DOM ref.
export default function Reveal<T extends IntrinsicTag = "div">({
  as,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = as ?? "div";
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", visible && "is-visible", className]
    .filter(Boolean)
    .join(" ");

  // eslint-disable-next-line react-hooks/refs -- Tag is always a host string tag here, so passing `ref` never touches a component's render.
  return createElement(Tag, { ref, className: classes, ...rest }, children);
}
