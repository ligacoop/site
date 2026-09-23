import Reveal from "@/components/Reveal";
import { values } from "@/data/content";

export default function Valores() {
  return (
    <section className="section" id="valores">
      <div className="wrap">
        <Reveal as="p" className="kicker center">
          Valores
        </Reveal>
        <Reveal as="h2" className="center">
          A bússola que guia cada ação e decisão.
        </Reveal>

        <div className="values-grid">
          {values.map((value, i) => (
            <Reveal as="div" className="value-card" key={value}>
              <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{value}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
