import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "working title...",
  description: "developed by jin",
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
        <div className="">
          {header}
          <div className="m-20 flex flex-col justify-center justify-items-center">
            {children}
          </div>
          {footer}
        </div>
      </body>
    </html>
  );
}
