import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BAR-IA | IA para bares y restaurantes",
  description:
    "Convierte las mesas de tu bar en una experiencia inteligente con inteligencia artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}