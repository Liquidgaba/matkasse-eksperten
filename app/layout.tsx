import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Matkasse-Eksperten – Uavhengige tester og sammenligninger",
    template: "%s | Matkasse-Eksperten",
  },
  description:
    "Vi tester og sammenligner matkasser slik at du slipper. Finn den som passer deg – etter pris, utvalg, fleksibilitet og smak.",
  metadataBase: new URL("https://matkasse-eksperten.no"),
  openGraph: { type: "website", locale: "nb_NO", siteName: "Matkasse-Eksperten" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
