"use client";

"use client";

export default function CTAButtons() {
  return (
    <div className="mt-8 flex gap-4">
      <a
        href="https://wa.me/5547999696003"
        target="_blank"
        className="bg-brand text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
      >
        Testar no WhatsApp
      </a>

      <a
        href="#assinar"
        className="bg-white border border-brand text-brand px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
      >
        Assinar por R$ 29/mês
      </a>
    </div>
  );
}