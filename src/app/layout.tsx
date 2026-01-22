import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google"; // Import Cinzel
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Drotes | The Silent Rise",
  description: "Forged in silence. Defined by resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans antialiased bg-obsidian text-ash selection:bg-ash selection:text-obsidian`}
      >
        {children}
      </body>
    </html>
  );
}
