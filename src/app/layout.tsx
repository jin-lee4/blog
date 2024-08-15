import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/Nav";
import { Analytics } from "@vercel/analytics/react";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=sentient@200,201,300,301,400,401,500,501,700,701&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Analytics />
        <div className="">
          {header}
          <div className="flex flex-col justify-center items-center lg:w-2/6 mx-auto space-y-2.5 sm:w-full p-5 lg:p-0">
            <Nav />
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
