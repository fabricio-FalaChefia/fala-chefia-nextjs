import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fala, Chefia!",
  description:
    "IA prática para o dono do negócio: finanças, vendas e RH no WhatsApp.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) - Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17799962225"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17799962225');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}