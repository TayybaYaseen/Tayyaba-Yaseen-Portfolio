import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Tayyaba Yaseen — Creative Designer & Digital Content Creator",
  description:
    "Creative Designer & Digital Content Creator — Canva Design, AI Photo & Video Generation, UGC Ads, Social Media Marketing, 2D & 3D Animation, Whiteboard Videos, Reels Editing, AI Automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var t = localStorage.getItem('ty-theme');
              if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
            } catch (e) {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
