"use client";

export default function ChatBubble() {
  return (
    <div className="flex gap-4 justify-center mt-6 flex-wrap">
      <a
        href="https://wa.me/5547999602233"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all duration-300"
      >
        💬 Fale no WhatsApp
      </a>

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