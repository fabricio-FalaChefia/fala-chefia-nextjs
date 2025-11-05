export default function CTAButtons() {
  const whatsappLink = "https://wa.me/55SEUNUMERO?text=Ol%C3%A1%2C%20quero%20testar%20o%20Fala%20Chefia!";
  const checkoutLink = "https://SEU-CHECKOUT"; // Asaas/Stripe

  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3">
      <a href={whatsappLink} target="_blank"
         className="px-6 py-3 rounded-xl bg-brand text-white font-semibold text-center">
        💬 Testar no WhatsApp
      </a>
      <a href={checkoutLink} target="_blank"
         className="px-6 py-3 rounded-xl border border-brand text-brand font-semibold text-center">
        💳 Assinar por R$ 29/mês
      </a>
    </div>
  );
}
