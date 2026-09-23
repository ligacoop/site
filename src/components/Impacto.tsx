import Image from "next/image";
import evCharging from "@/assets/images/ev-charging.jpg";
import acessibilidade from "@/assets/images/acessibilidade.jpg";
import Reveal from "@/components/Reveal";
import { campaigns, impactPoints } from "@/data/content";

export default function Impacto() {
  return (
    <section className="section section-dark" id="impacto">
      <div className="wrap">
        <Reveal as="p" className="kicker">
          Impacto na comunidade
        </Reveal>
        <Reveal as="h2">Qual impacto a Liga quer gerar para a comunidade?</Reveal>

        <div className="impact-layout">
          <ul className="impact-list">
            {impactPoints.map((point) => (
              <Reveal as="li" key={point}>
                <span className="dot" />
                {point}
              </Reveal>
            ))}
          </ul>

          <Reveal as="div" className="impact-media">
            <div>
              <Image
                src={evCharging}
                alt="Carro elétrico sendo carregado, representando o futuro mais verde da frota Liga Coop"
                placeholder="blur"
                sizes="(max-width: 760px) 50vw, 280px"
              />
            </div>
            <div>
              <Image
                src={acessibilidade}
                alt="Passageira sorrindo durante atendimento com cinto adaptado, representando inclusão e acessibilidade"
                placeholder="blur"
                sizes="(max-width: 760px) 50vw, 280px"
              />
            </div>
          </Reveal>
        </div>

        <Reveal as="div" className="campaign-strip">
          <p>
            <strong>Futuro mais verde</strong> com carros elétricos e
            híbridos, e atendimento personalizado a necessidades específicas.
          </p>
          <div className="campaign-tags">
            {campaigns.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
