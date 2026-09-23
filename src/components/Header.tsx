"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { siteConfig } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#sobre", label: "Quem Somos" },
  { href: "#valores", label: "Missão & Valores" },
  { href: "#impacto", label: "Impacto" },
  { href: "#futuro", label: "Crescimento" },
  { href: "#diretoria", label: "Diretoria" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a href="#topo" className="brand" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Liga Coop — Somos Coop"
            height={46}
            style={{ width: "auto" }}
            priority
          />
        </a>

        <nav
          id="mainNav"
          className={`nav${open ? " open" : ""}`}
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={siteConfig.contact.whatsappUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seja Cooperado
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? " open" : ""}`}
            aria-expanded={open}
            aria-controls="mainNav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
