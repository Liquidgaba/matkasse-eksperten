import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Matkasse-Eksperten – Uavhengige tester av norske matkasser",
    template: "%s | Matkasse-Eksperten",
  },
  description:
    "Vi har testet alle de store matkassene i Norge. Finn den som passer deg best – etter pris, utvalg, fleksibilitet og smak. Sist oppdatert mars 2026.",
  metadataBase: new URL("https://matkasse-eksperten.no"),
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: "Matkasse-Eksperten",
  },
  alternates: {
    canonical: "https://matkasse-eksperten.no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
