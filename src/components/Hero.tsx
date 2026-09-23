import Image from "next/image";
import heroTeam from "@/assets/images/hero-team.jpg";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { heroStats } from "@/data/content";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={heroTeam}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
        />
        <div className="hero-scrim" />
      </div>

      <div className="wrap hero-inner">
        <Reveal as="p" className="eyebrow">
          Federação Nacional de Cooperativas de Mobilidade Urbana
        </Reveal>
        <Reveal as="h1">
          Conectando caminhos,
          <br />
          construindo <span className="text-accent">comunidades</span>.
        </Reveal>
        <Reveal as="p" className="hero-lede">
          A Liga Coop reúne 10 cooperativas filiadas em um único propósito:
          oferecer um transporte privado de pessoas, empresas e bens que seja
          justo, seguro e confiável — do jeito cooperativo.
        </Reveal>
        <Reveal as="div" className="hero-cta">
          <a
            href={siteConfig.contact.whatsappUrl}
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero ser cooperado
          </a>
          <a href="#sobre" className="btn btn-ghost btn-lg">
            Conheça a Liga
          </a>
        </Reveal>
      </div>

      <Reveal as="div" className="hero-stats">
        <div className="wrap hero-stats-grid">
          {heroStats.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter value={stat.value} className="stat-num" />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
