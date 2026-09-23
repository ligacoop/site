import Image from "next/image";
import comunidade from "@/assets/images/comunidade-1.jpg";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Contato() {
  return (
    <section className="section cta-final" id="contato">
      <div className="wrap cta-final-inner">
        <Reveal as="div" className="cta-final-media" aria-hidden="true">
          <Image
            src={comunidade}
            alt=""
            fill
            placeholder="blur"
            sizes="(max-width: 980px) 100vw, 40vw"
          />
        </Reveal>
        <Reveal as="div" className="cta-final-text">
          <h2>
            É hora de, juntos, revolucionarmos a mobilidade urbana do nosso
            país.
          </h2>
          <ul className="contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="m4 5 8 7 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 12a8 8 0 1 1-3.6-6.7L20 4l-1.1 3.7A7.96 7.96 0 0 1 20 12Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.contact.whatsappDisplay} · WhatsApp
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">
                {siteConfig.social.instagramHandle}
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M15 4h-2a4 4 0 0 0-4 4v3H7v3h2v6h3v-6h2.5l.5-3H12V8a1 1 0 0 1 1-1h2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">
                {siteConfig.social.facebookHandle}
              </a>
            </li>
          </ul>
          <a
            href={siteConfig.contact.whatsappUrl}
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Liga Coop
          </a>
        </Reveal>
      </div>
    </section>
  );
}
