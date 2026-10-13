import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const description =
  "High-quality residential and commercial painting with fast online quotes. Sherwin-Williams & Benjamin Moore paints.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paint-line-pro.vercel.app"),
  title: "Paint Line Pro | Premium Painting Southeast",
  description,
  openGraph: {
    title: "Paint Line Pro | Premium Painting Southeast",
    description,
    url: "/",
    siteName: "Paint Line Pro",
    type: "website",
  },
  twitter: { card: "summary", title: "Paint Line Pro", description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
