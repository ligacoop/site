import Reveal from "@/components/Reveal";
import { aboutStats } from "@/data/content";

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-text">
          <Reveal as="p" className="kicker">
            Quem somos
          </Reveal>
          <Reveal as="h2">
            A federação que move o cooperativismo de mobilidade no Brasil.
          </Reveal>
          <Reveal as="p">
            Nascemos em Caxias do Sul/RS, em 2023. Somos a Federação Nacional
            de Cooperativas de Mobilidade Urbana Liga Coop e atuamos através
            das nossas 10 cooperativas filiadas no serviço de transporte
            privado de pessoas <strong>(B2C)</strong>, para empresas{" "}
            <strong>(B2B)</strong> e de bens, por meio da plataforma digital
            Liga Coop — oferecendo um transporte com preço justo, seguro e
            confiável.
          </Reveal>
          <Reveal as="a" href="#futuro" className="link-arrow">
            Veja nossa visão de futuro →
          </Reveal>
        </div>

        <Reveal as="div" className="sobre-stats">
          {aboutStats.map((stat) => (
            <div
              className={`mini-stat${stat.wide ? " mini-stat-wide" : ""}`}
              key={stat.label}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
