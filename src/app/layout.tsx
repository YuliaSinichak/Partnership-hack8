import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import { inter } from "./fonts";

import Providers from "@/redux/Providers";

export const metadata: Metadata = {
  title: "Partnership Hackath0n`2024",
  description: "BEST Hackath0n`2024 partnership broshure",
};
const ogImageContent: string = "/BenyaHero.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/BenyaHero.png" />
        <title>Partnership Hackath0n`2024</title>
      </head>
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
