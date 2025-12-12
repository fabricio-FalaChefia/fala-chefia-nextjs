export const reportConversion = (url?: string) => {
  if (typeof window === "undefined") return;

  // @ts-ignore
  window.gtag("event", "conversion", {
    send_to: "AW-17799962225/esxaCJnLZNAbEPG816dC",
    event_callback: () => {
      if (url) {
        window.location.href = url;
      }
    },
  });
};