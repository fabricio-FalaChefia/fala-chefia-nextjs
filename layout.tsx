import "./globals.css";

export const metadata = {
  title: "Fala, Chefia!",
  description: "IA prática para o dono do negócio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}