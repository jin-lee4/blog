import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "jinlee.space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = <header className="container"></header>;

  const footer = <footer className="py-6"></footer>;

  return (
    <html lang="en">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=gambarino@400&f[]=switzer@300,301,600,601&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Analytics />
        <div className="">
          {header}
          <div className="mx-20 flex flex-col justify-center justify-items-center">
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
