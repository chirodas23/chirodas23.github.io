import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Chiroshree Das — Global Influencer Marketing",
    template: "%s — Chiroshree Das",
  },
  description:
    "Portfolio of Chiroshree Das, a multilingual influencer marketer and global beauty growth specialist based in Seoul.",
  icons: {
    icon: "/assets/chiroshree-das.png",
    shortcut: "/assets/chiroshree-das.png",
  },
  openGraph: {
    type: "website",
    title: "Chiroshree Das — Global Influencer Marketing",
    description: "Beauty stories, grown globally.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Chiroshree Das — Global Influencer Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiroshree Das — Global Influencer Marketing",
    description: "Beauty stories, grown globally.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
