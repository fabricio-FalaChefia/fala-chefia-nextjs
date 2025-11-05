import Header from "@/components/Header";
import CTAButtons from "@/components/CTAButtons";

export default function Home() {
  return (
    <main>
      <Header />
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            IA prática para o dono do negócio:
            <span className="text-brand"> finanças, vendas e RH</span> no WhatsApp.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pare de adivinhar. Receba respostas simples e ações para hoje.
            Plano único <span className="font-semibold">R$ 29/mês</span>.
          </p>
          <CTAButtons />
          <p className="mt-3 text-sm text-gray-500">
            Sem fidelidade. Cancele quando quiser.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold mb-6">Como funciona</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {title: "Você pergunta", desc: "No WhatsApp, do jeito que fala no dia a dia."},
              {title: "Agente certo responde", desc: "Leo (Finanças), Max (Vendas) ou Lia (RH)."},
              {title: "Ação prática", desc: "Receba passos simples, modelos e um CTA para agir já."},
            ].map((c,i)=>(
              <div key={i} className="rounded-2xl border p-6">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-gray-600 mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE GANHO HOJE? */}
      <section id="ganhos" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold mb-6">O que ganho hoje?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">Finanças (Leo)</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Saldo do mês e alerta de aperto</li>
              <li>Planilha de fluxo de caixa</li>
              <li>Preço de venda (margem + impostos)</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 opacity-70">
            <h3 className="font-semibold">Vendas (Max) <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">em breve</span></h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Copys prontas para WhatsApp</li>
              <li>Posts de Instagram com CTA</li>
              <li>Promoções sazonais simples</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 opacity-70">
            <h3 className="font-semibold">RH (Lia) <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">em breve</span></h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Roteiro de entrevista por função</li>
              <li>Integração em 7 dias</li>
              <li>Ideias de motivação low-cost</li>
            </ul>
          </div>
        </div>
      </section>

      {/* (OPCIONAL) EMBED TYPEBOT */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold mb-6">Teste agora na web</h2>
        <p className="text-gray-600 mb-4">Versão de demonstração do agente financeiro.</p>
        <div className="rounded-2xl overflow-hidden border">
          <iframe
            src="https://typebot.co/seu-bot-embed"
            className="w-full h-[600px]"
            title="Fala, Chefia! – Demo"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
          <div className="grid gap-4">
            <div>
              <p className="font-semibold">Posso cancelar quando quiser?</p>
              <p className="text-gray-600">Sim. Sem fidelidade e sem multa.</p>
            </div>
            <div>
              <p className="font-semibold">Meus dados estão seguros?</p>
              <p className="text-gray-600">Usamos boas práticas e só processamos o necessário. Não peça dados sensíveis no chat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Fala, Chefia! — Nex7 Solution Ltda</span>
          <div className="flex gap-4">
            <a href="/politica-privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
            <a href="mailto:contato@falachefia.app.br">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
