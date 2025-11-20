"use client";

import { Bubble } from "@typebot.io/react";

export default function ChatBubble() {
  return (
    <div style={{ position: "fixed", bottom: 18, right: 18, zIndex: 9999 }}>
      <Bubble
        typebot="fala-chefia-novo-v1k4j7m"
        apiHost="https://typebot.co"
        theme={{
          button: {
            radius: 14,
            backgroundColor: "#111827",
            iconColor: "#FFFFFF",
          },
        }}
        previewMessage={{
          message: "Fale com o Fala, Chefia!",
          autoShowDelay: 1200,
          avatarUrl: "/favicon.ico",
        }}
      />
    </div>
  );
}