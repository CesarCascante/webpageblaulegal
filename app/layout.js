export const metadata = {
  title: "Blau Legal",
  description: "Servicios legales en Costa Rica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}