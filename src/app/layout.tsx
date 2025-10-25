import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Afric Links - Forum sur la Diplomatie Économique Interafricaine",
  description: "Promouvoir l'économie, la diversité culturelle, l'éducation, la coopération économique et les initiatives de la Francophonie à l'échelle Africaine.",
  keywords: ["diplomatie économique", "Afrique", "Francophonie", "coopération", "éducation", "culture"],
  authors: [{ name: "Afric Links" }],
  creator: "Afric Links",
  publisher: "Afric Links",
  openGraph: {
    title: "Afric Links - Forum sur la Diplomatie Économique Interafricaine",
    description: "Promouvoir l'économie, la diversité culturelle, l'éducation, la coopération économique et les initiatives de la Francophonie à l'échelle Africaine.",
    url: "https://africlinks.org",
    siteName: "Afric Links",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afric Links Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afric Links - Forum sur la Diplomatie Économique Interafricaine",
    description: "Promouvoir l'économie, la diversité culturelle, l'éducation, la coopération économique et les initiatives de la Francophonie à l'échelle Africaine.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
