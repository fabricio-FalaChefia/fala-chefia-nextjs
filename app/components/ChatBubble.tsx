"use client";

import { reportConversion } from "../lib/gtag";

export default function ChatBubble() {
  const whatsappUrl =
    "https://wa.me/5547999602233?text=" +
    encodeURIComponent("Olá! Quero saber mais sobre o Fala, Chefia!");

  function handleWhatsappClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault(); // impede o clique direto
    reportConversion(whatsappUrl); // dispara conversão + redireciona
  }

  return (
    <div className="flex gap-4 justify-center mt-6 flex-wrap">
      {/* ✅ WHATSAPP COM CONVERSÃO */}
      <a
        href={whatsappUrl}
        onClick={handleWhatsappClick}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all duration-300"
      >
        💬 Fale no WhatsApp
      </a>

      {/* 🔵 ASSESSOR (sem conversão por enquanto) */}
      <a
        href="https://typebot.co/fala-chefia-ia-consultiva-6rz0br6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition"
      >
        Fale com o assessor
      </a>
    </div>
  );
}