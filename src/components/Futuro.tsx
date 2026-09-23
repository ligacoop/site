import Reveal from "@/components/Reveal";
import TimelineBar from "@/components/TimelineBar";
import { growthTimeline } from "@/data/content";

export default function Futuro() {
  return (
    <section className="section section-future" id="futuro">
      <div className="wrap">
        <Reveal as="p" className="kicker">
          Visão de futuro
        </Reveal>
        <Reveal as="h2">Um plano de crescimento cooperativo, ano após ano.</Reveal>

        <div className="timeline">
          {growthTimeline.map((row) => (
            <Reveal as="div" className="timeline-row" key={row.year}>
              <span className="timeline-year">{row.year}</span>
              <TimelineBar fill={row.fill} />
              <div className="timeline-figures">
                <strong>{row.users}</strong> usuários ·{" "}
                <strong>{row.cooperados}</strong> cooperados ·{" "}
                <strong>{row.municipios}</strong> municípios
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="future-quote">
          &ldquo;Com cada quilômetro percorrido, reforçamos nosso compromisso
          de construir um legado de impacto social duradouro, conduzindo o
          caminho para um futuro mais cooperativo e inclusivo.&rdquo;
        </Reveal>
      </div>
    </section>
  );
}
