
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">

      {/* HEADER */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-fala-chefia.png"
              alt="Fala, Chefia!"
              width={48}
              height={48}
            />
            <span className="text-xl font-semibold tracking-tight">
              Fala, Chefia!
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col items-start justify-center gap-12 px-6 py-20 md:flex-row md:items-center">

        {/* LADO ESQUERDO */}
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Consultoria inteligente para o seu negócio.
          </h1>

          <p className="text-lg text-slate-300 max-w-xl">
            O Fala, Chefia! conecta você a consultores especializados em Finanças,
            Marketing e Gestão de Pessoas — tudo pelo WhatsApp.
          </p>

          <p className="text-xl font-semibold text-blue-400">
            💰 Apenas R$ 37,00 por mês.
          </p>

          {/* BOTÃO ÚNICO */}
          <a
            href="https://wa.me/5547991071691?text=Ol%C3%A1,+quero+contratar+o+Fala,+Chefia!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-500 transition"
          >
            💬 Falar com nossa consultora
          </a>
        </div>

        {/* LADO DIREITO — IMAGEM COMPLETA */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-slate-900/60 p-2">
            <Image
              src="/consultores-fala-chefia.jpg"
              alt="Consultores Fala, Chefia!"
              width={800}
              height={800}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>

      </section>

    </main>
  );
}