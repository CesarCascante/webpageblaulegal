import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "Blau Legal | Nathalie Tess Blau Solano",
  description:
    "Bufete de abogados especializado en Migración, Derecho Corporativo y Laboral en Costa Rica. Atención en español, inglés y francés.",
  keywords: "abogada, Costa Rica, migración, corporativo, laboral, Blau Legal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
