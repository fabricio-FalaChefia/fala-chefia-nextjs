import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // <== Importa Script para usar o Typebot

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fala, Chefia!",
  description:
    "IA prática para o dono do negócio: finanças, vendas e RH no WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}

        {/* ==== BALÃO DO TYPEBOT FALA, CHEFIA ==== */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@typebot.io/js@latest/dist/web.js"
          strategy="afterInteractive"
/>
        <Script id="typebot-init" strategy="afterInteractive">
          {`
            Typebot.initBubble({
              typebot: "my-typebot-oas5jj9",
              previewMessage: {
                message: "👋 Sou o Fala, Chefia! Posso te ajudar com seu negócio?",
                autoShowDelay: 4000
              },
              theme: {
                button: {
                  backgroundColor: "#004AAD",
                  iconColor: "#fff"
                }
              }
            });
          `}
        </Script>
        {/* ==== FIM DO TYPEBOT ==== */}
      </body>
    </html>
  );
}