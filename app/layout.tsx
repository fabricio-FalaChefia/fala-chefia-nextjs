import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ChatBubble from './components/ChatBubble';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fala, Chefia!',
  description: 'IA prática para o dono do negócio: finanças, vendas e RH no WhatsApp.',
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
        <ChatBubble />
      </body>
    </html>
  );
}