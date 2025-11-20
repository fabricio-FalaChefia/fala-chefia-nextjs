export default function Header() {
  return (
    <header className="w-full py-4 px-6 border-b border-gray-200 flex justify-between items-center bg-white">
      <div className="text-xl font-bold text-brand">Fala, Chefia!</div>

      <nav className="flex gap-6 text-sm text-gray-700">
        <a href="#como-funciona" className="hover:text-brand">Como funciona</a>
        <a href="#ganhos" className="hover:text-brand">O que ganho hoje?</a>
        <a href="#faq" className="hover:text-brand">FAQ</a>
      </nav>
    </header>
  );
}