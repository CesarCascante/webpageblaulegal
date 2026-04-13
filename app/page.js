"use client";

import { useState } from "react";

const content = {
  es: {
    nav: {
      services: "Servicios",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      tagline: "Bufete de Abogados · San José, Costa Rica",
      desc: "Más de 10 años de experiencia brindando soluciones legales integrales en derecho migratorio, corporativo y laboral.",
      cta: "Consulta gratuita",
    },
    services: {
      label: "Áreas de práctica",
      title: "Servicios Legales",
      items: [
        {
          icon: "✈️",
          title: "Derecho Migratorio",
          desc: "Residencias, visas, permisos de trabajo, naturalización y trámites migratorios para personas y empresas en Costa Rica.",
        },
        {
          icon: "🏢",
          title: "Derecho Corporativo",
          desc: "Constitución de sociedades, contratos comerciales, fusiones, adquisiciones y asesoría legal empresarial.",
        },
        {
          icon: "⚖️",
          title: "Derecho Laboral",
          desc: "Contratos de trabajo, despidos, liquidaciones, negociaciones colectivas y representación ante el Ministerio de Trabajo.",
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Nathalie Tess Blau Solano",
      p1: "Abogada costarricense con más de 10 años de trayectoria profesional, especializada en brindar asesoría legal de alto nivel a personas y empresas nacionales e internacionales.",
      p2: "Mi enfoque es ofrecer soluciones jurídicas claras, eficientes y personalizadas, con la discreción y el profesionalismo que cada cliente merece.",
      stats: [
        { number: "10+", label: "Años de experiencia" },
        { number: "3", label: "Idiomas" },
        { number: "100%", label: "Compromiso" },
        { number: "CR", label: "Cobertura nacional" },
      ],
      langTitle: "Atención en:",
      langs: ["Español", "English", "Français"],
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      subtitle: "Estoy disponible para atenderle en todo Costa Rica. Contácteme para una consulta.",
      items: [
        { icon: "📞", label: "Teléfono", value: "+506 8887 1167", href: "tel:+50688871167" },
        { icon: "✉️", label: "Correo", value: "nblaulegal@gmail.com", href: "mailto:nblaulegal@gmail.com" },
        { icon: "📍", label: "Ubicación", value: "San José, Costa Rica", href: null },
        { icon: "🌐", label: "Cobertura", value: "Todo Costa Rica", href: null },
      ],
      whatsapp: "Escribir por WhatsApp",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Law Firm · San José, Costa Rica",
      desc: "Over 10 years of experience providing comprehensive legal solutions in immigration, corporate, and labor law.",
      cta: "Free consultation",
    },
    services: {
      label: "Practice areas",
      title: "Legal Services",
      items: [
        {
          icon: "✈️",
          title: "Immigration Law",
          desc: "Residencies, visas, work permits, naturalization and immigration procedures for individuals and companies in Costa Rica.",
        },
        {
          icon: "🏢",
          title: "Corporate Law",
          desc: "Company formation, commercial contracts, mergers, acquisitions and corporate legal advisory.",
        },
        {
          icon: "⚖️",
          title: "Labor Law",
          desc: "Employment contracts, dismissals, severance, collective bargaining and representation before the Ministry of Labor.",
        },
      ],
    },
    about: {
      label: "About me",
      title: "Nathalie Tess Blau Solano",
      p1: "Costa Rican attorney with over 10 years of professional experience, specialized in providing high-level legal advice to individuals and national and international companies.",
      p2: "My approach is to offer clear, efficient and personalized legal solutions, with the discretion and professionalism that each client deserves.",
      stats: [
        { number: "10+", label: "Years of experience" },
        { number: "3", label: "Languages" },
        { number: "100%", label: "Commitment" },
        { number: "CR", label: "Nationwide coverage" },
      ],
      langTitle: "Available in:",
      langs: ["Español", "English", "Français"],
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      subtitle: "Available throughout Costa Rica. Contact me for a consultation.",
      items: [
        { icon: "📞", label: "Phone", value: "+506 8887 1167", href: "tel:+50688871167" },
        { icon: "✉️", label: "Email", value: "nblaulegal@gmail.com", href: "mailto:nblaulegal@gmail.com" },
        { icon: "📍", label: "Location", value: "San José, Costa Rica", href: null },
        { icon: "🌐", label: "Coverage", value: "All of Costa Rica", href: null },
      ],
      whatsapp: "Message on WhatsApp",
    },
    footer: "All rights reserved.",
  },
  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      tagline: "Cabinet d'avocats · San José, Costa Rica",
      desc: "Plus de 10 ans d'expérience en droit de l'immigration, droit des sociétés et droit du travail au Costa Rica.",
      cta: "Consultation gratuite",
    },
    services: {
      label: "Domaines de pratique",
      title: "Services Juridiques",
      items: [
        {
          icon: "✈️",
          title: "Droit de l'immigration",
          desc: "Résidences, visas, permis de travail, naturalisation et démarches migratoires pour particuliers et entreprises au Costa Rica.",
        },
        {
          icon: "🏢",
          title: "Droit des sociétés",
          desc: "Constitution de sociétés, contrats commerciaux, fusions, acquisitions et conseil juridique aux entreprises.",
        },
        {
          icon: "⚖️",
          title: "Droit du travail",
          desc: "Contrats de travail, licenciements, indemnités, négociations collectives et représentation devant le Ministère du Travail.",
        },
      ],
    },
    about: {
      label: "À propos",
      title: "Nathalie Tess Blau Solano",
      p1: "Avocate costaricienne avec plus de 10 ans d'expérience professionnelle, spécialisée dans le conseil juridique de haut niveau aux particuliers et aux entreprises nationales et internationales.",
      p2: "Mon approche consiste à offrir des solutions juridiques claires, efficaces et personnalisées, avec la discrétion et le professionnalisme que chaque client mérite.",
      stats: [
        { number: "10+", label: "Ans d'expérience" },
        { number: "3", label: "Langues" },
        { number: "100%", label: "Engagement" },
        { number: "CR", label: "Couverture nationale" },
      ],
      langTitle: "Disponible en :",
      langs: ["Español", "English", "Français"],
    },
    contact: {
      label: "Contact",
      title: "Parlons-en",
      subtitle: "Disponible dans tout le Costa Rica. Contactez-moi pour une consultation.",
      items: [
        { icon: "📞", label: "Téléphone", value: "+506 8887 1167", href: "tel:+50688871167" },
        { icon: "✉️", label: "E-mail", value: "nblaulegal@gmail.com", href: "mailto:nblaulegal@gmail.com" },
        { icon: "📍", label: "Localisation", value: "San José, Costa Rica", href: null },
        { icon: "🌐", label: "Couverture", value: "Tout le Costa Rica", href: null },
      ],
      whatsapp: "Écrire sur WhatsApp",
    },
    footer: "Tous droits réservés.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("es");
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar-brand">Blau Legal</span>
        <ul className="navbar-links">
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li><a href="#contact">{t.nav.contact}</a></li>
        </ul>
        <div className="lang-switcher">
          {["es", "en", "fr"].map((l) => (
            <button
              key={l}
              className={`lang-btn${lang === l ? " active" : ""}`}
              onClick={() => setLang(l)}
              aria-label={`Switch to ${l}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo-placeholder">BL</div>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <h1 className="hero-name">Nathalie Tess Blau Solano</h1>
          <p className="hero-firm">Blau Legal</p>
          <div className="divider" />
          <p className="hero-desc">{t.hero.desc}</p>
          <a href="#contact" className="btn-primary">{t.hero.cta}</a>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <p className="section-label">{t.services.label}</p>
          <h2 className="section-title">{t.services.title}</h2>
          <div className="divider" style={{ margin: "1rem 0 0" }} />
          <div className="services-grid">
            {t.services.items.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-alt" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <p className="section-label">{t.about.label}</p>
              <h2 className="section-title">{t.about.title}</h2>
              <div className="divider" style={{ margin: "1rem 0" }} />
              <p className="about-text">{t.about.p1}</p>
              <p className="about-text">{t.about.p2}</p>
              <div className="lang-badges">
                {t.about.langs.map((l) => (
                  <span className="lang-badge" key={l}>{l}</span>
                ))}
              </div>
            </div>
            <div className="about-stats">
              {t.about.stats.map((s) => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="container">
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="divider" style={{ margin: "1rem 0" }} />
          <p className="about-text">{t.contact.subtitle}</p>
          <div className="contact-grid">
            <div>
              {t.contact.items.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://wa.me/50688871167"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "16px 32px",
                  background: "#25D366",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>💬</span>
                {t.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">Blau Legal</div>
        <p>© {year} Nathalie Tess Blau Solano. {t.footer}</p>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/50688871167"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}
