import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Goldbridge Capital | Premium Asset Management",
  description:
    "Goldbridge Capital is a premier investment management firm offering sophisticated portfolio strategies and wealth management solutions for discerning investors.",
  keywords: "investment, wealth management, portfolio, capital, finance, defi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
