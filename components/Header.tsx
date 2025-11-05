export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-brand" />
          <span className="font-bold">Fala, Chefia!</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-gray-600">
          <a href="#como-funciona">Como funciona</a>
          <a href="#ganhos">O que ganho hoje?</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
