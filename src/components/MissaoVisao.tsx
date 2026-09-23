import Reveal from "@/components/Reveal";

export default function MissaoVisao() {
  return (
    <section className="section section-dark" id="missao">
      <div className="wrap">
        <div className="mv-grid">
          <Reveal as="article" className="mv-card">
            <span className="mv-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 4 6 12v10c0 11 7.6 19.7 18 22 10.4-2.3 18-11 18-22V12L24 4Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 24l5 5 10-11"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3>Missão</h3>
            <p>Oferecer um transporte justo, seguro, confiável e cooperativo.</p>
          </Reveal>

          <Reveal as="article" className="mv-card">
            <span className="mv-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path
                  d="M4 24s7-14 20-14 20 14 20 14-7 14-20 14S4 24 4 24Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <h3>Visão</h3>
            <p>
              Ser referência em cooperativismo de plataforma digital na
              América Latina até 2026.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
