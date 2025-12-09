import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ChatBubble from "./components/ChatBubble";
import type { ReactNode } from "react";

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}