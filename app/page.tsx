// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* TOPO */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-sm font-semibold text-slate-900">
            Fala, Chefia!
          </span>

          <nav className="flex gap-6 text-sm text-slate-700">
            <a href="#como-funciona" className="hover:text-slate-900">
              Como funciona
            </a>
            <a href="#beneficios" className="hover:text-slate-900">
              O que ganho hoje?
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-50">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center">
          <div className="md:w-3/5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky-700">
              IA prática para o dono do negócio
            </p>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              IA prática para o dono do negócio:
              <span className="block text-sky-700">
                finanças, vendas e RH
              </span>
              no WhatsApp.
            </h1>

            <p className="mb-6 text-sm text-slate-700 md:text-base">
              Pare de adivinhar. Receba respostas simples e ações para hoje.
              Plano único <strong>R$ 29/mês</strong>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/554998127888?text=Quero%20testar%20o%20Fala%20Chefia"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Testar no WhatsApp
              </a>

              <a
                href="#planos"
                className="rounded-full border border-sky-600 bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Assinar por R$ 29/mês
              </a>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Sem fidelidade. Cancele quando quiser.
            </p>
          </div>

          {/* “Celular” de exemplo */}
          <div className="md:w-2/5">
            <div className="mx-auto w-full max-w-xs rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-sky-600 text-xs font-bold text-white flex items-center justify-center">
                  FC
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    Fala, Chefia!
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Online · responde em minutos
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="max-w-[85%] rounded-2xl rounded-bl-none bg-slate-100 px-3 py-2 text-slate-800">
                  Bom dia! 👋  
                  Como posso ajudar seu negócio hoje?
                </div>
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-none bg-sky-600 px-3 py-2 text-right text-white">
                  Quero entender meu fluxo de caixa
                  e como aumentar o lucro deste mês.
                </div>
                <div className="max-w-[85%] rounded-2xl rounded-bl-none bg-slate-100 px-3 py-2 text-slate-800">
                  Perfeito. Vou analisar suas entradas
                  e saídas e sugerir ações práticas
                  para hoje e para os próximos 7 dias. ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="border-t bg-white py-12"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-2 text-xl font-bold text-slate-900">
            Como funciona
          </h2>
          <p className="mb-8 text-sm text-slate-600">
            Em poucos minutos você conecta o Fala, Chefia! ao seu dia a dia
            e começa a receber respostas no WhatsApp.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-2 text-xs font-semibold text-sky-700">
                PASSO 1
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Assine e responda ao diagnóstico
              </h3>
              <p className="text-xs text-slate-600">
                Em poucos cliques você faz sua assinatura e
                responde a um diagnóstico rápido do seu negócio.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-2 text-xs font-semibold text-sky-700">
                PASSO 2
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Fale com a IA no WhatsApp
              </h3>
              <p className="text-xs text-slate-600">
                Envie suas dúvidas de finanças, vendas e RH.
                A IA responde com ações claras para hoje.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="mb-2 text-xs font-semibold text-sky-700">
                PASSO 3
              </p>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Execute e acompanhe resultados
              </h3>
              <p className="text-xs text-slate-600">
                Você aplica as ações sugeridas e acompanha
                o impacto direto no caixa e nas vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="bg-slate-50 py-12"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-2 text-xl font-bold text-slate-900">
            O que você ganha hoje
          </h2>
          <p className="mb-8 text-sm text-slate-600">
            Foco no que realmente importa para quem toca o negócio no dia a dia.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Finanças mais claras
              </h3>
              <p className="text-xs text-slate-600">
                Entenda onde o dinheiro entra, onde sai e quais ações
                podem melhorar seu fluxo de caixa rapidamente.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                Vendas mais consistentes
              </h3>
              <p className="text-xs text-slate-600">
                Ideias de campanhas, abordagens comerciais e scripts
                prontos para você usar com sua equipe ou sozinho.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                RH mais organizado
              </h3>
              <p className="text-xs text-slate-600">
                Apoio em rotinas de equipe: feedbacks, metas,
                comunicados e orientações para o dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section
        id="planos"
        className="bg-white py-12"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Plano único e simples
          </h2>

          <div className="max-w-md rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <p className="mb-2 text-sm font-semibold text-sky-800">
              Fala, Chefia! no WhatsApp
            </p>
            <p className="mb-4 text-3xl font-extrabold text-slate-900">
              R$ 29<span className="text-base font-semibold">/mês</span>
            </p>
            <ul className="mb-6 space-y-2 text-xs text-slate-700">
              <li>• Acesso à IA de finanças, vendas e RH</li>
              <li>• Suporte direto no WhatsApp</li>
              <li>• Sem fidelidade, cancele quando quiser</li>
            </ul>

            <a
              href="https://wa.me/554998127888?text=Quero%20assinar%20o%20Fala%20Chefia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Assinar agora pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="bg-slate-50 py-12"
      >
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            FAQ
          </h2>

          <div className="space-y-4 text-sm text-slate-700">
            <details className="rounded-2xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold">
                Posso cancelar a qualquer momento?
              </summary>
              <p className="mt-2 text-xs text-slate-600">
                Sim. O plano é mensal, sem fidelidade. Você pode cancelar a
                qualquer momento e não será cobrado nos meses seguintes.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold">
                Preciso ter CNPJ?
              </summary>
              <p className="mt-2 text-xs text-slate-600">
                Não. O Fala, Chefia! funciona para MEI, pequenas empresas e
                também para profissionais autônomos que querem organizar o
                negócio.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold">
                Como recebo as respostas?
              </summary>
              <p className="mt-2 text-xs text-slate-600">
                Tudo acontece diretamente no seu WhatsApp, em texto simples,
                com sugestões de ações práticas para o dia a dia.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-slate-500">
          <span>© Fala, Chefia!</span>
          <div className="flex gap-4">
            <a href="/politica-privacidade" className="hover:text-slate-700">
              Política de privacidade
            </a>
            <a href="/termos" className="hover:text-slate-700">
              Termos de uso
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}