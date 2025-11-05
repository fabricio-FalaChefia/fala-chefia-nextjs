import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fala, Chefia! — IA prática para pequenos negócios",
  description: "Finanças, Vendas e RH no WhatsApp. Plano único R$ 29/mês.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
