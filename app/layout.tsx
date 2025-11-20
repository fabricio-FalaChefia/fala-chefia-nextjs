import "./globals.css";

export const metadata = {
  title: "Fala, Chefia!",
  description: "IA prática para o dono do negócio",
};

import ChatBubble from "./components/ChatBubble";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ChatBubble />
      </body>
    </html>
  );
}