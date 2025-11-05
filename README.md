# Fala, Chefia! — Landing (Next.js + Tailwind)

Landing page mínima para MVP.

## Requisitos
- Node.js 18+
- Conta na Vercel

## Instalação
```bash
npm install
npm run dev
```

## Personalizar
- Edite `components/CTAButtons.tsx` e substitua:
  - `55SEUNUMERO` no link do WhatsApp
  - `https://SEU-CHECKOUT` pelo link do Asaas/Stripe
- Em `app/page.tsx`, troque o `src` do iframe pelo embed do seu Typebot.

## Deploy (Vercel)
- Faça login na Vercel
- `vercel` (primeiro deploy interativo) ou conecte o repositório Git
- Cada push no `main` faz deploy automático
