import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "working title...",
  description: "developed by jin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="container">
    </header>
  );

  const footer = (
    <footer className="py-6">
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="">
          {header}
          <div className="container max-w-xl mx-auto">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
