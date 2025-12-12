import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fala, Chefia!",
  description: "IA prática para empresários no WhatsApp",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* TAG BASE DO GOOGLE ADS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17799962225"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17799962225');
          `}
        </Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}