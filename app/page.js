export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "20px", background: "#0b1c2c", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem" }}>
        Nathalie Tess Blau Solano
      </h1>

      <h2 style={{ color: "#cbd5e1" }}>
        Blau Legal
      </h2>

      <p style={{ maxWidth: "600px", marginTop: "20px" }}>
        Abogada con más de 10 años de experiencia en derecho migratorio,
        corporativo y laboral en Costa Rica. Atención profesional en español,
        inglés y francés.
      </p>

      <a
        href="https://wa.me/50688871167"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#25D366",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Contactar por WhatsApp
      </a>

      <section style={{ marginTop: "50px" }}>
        <h2>Servicios</h2>
        <ul>
          <li>Migración</li>
          <li>Corporativo</li>
          <li>Laboral</li>
        </ul>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>Contacto</h2>
        <p>Tel: +506 8887 1167</p>
        <p>Email: nblaulegal@gmail.com</p>
        <p>San José, Costa Rica</p>
      </section>
    </main>
  );
}