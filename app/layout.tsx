'use client'
import './globals.css'
import { Bubble } from "@typebot.io/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* 💬 Bolha do Typebot */}
        <Bubble
          typebot="my-typebot-owa5jj9"
          theme={{ button: { backgroundColor: "#2563EB" } }}
          previewMessage={{ message: "💬 Fale com o Fala, Chefia!", autoShowDelay: 2000 }}
        />
      </body>
    </html>
  )
}
