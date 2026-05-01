import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MANCO PARIS",
  description: "Société de gestion d'actifs financiers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
