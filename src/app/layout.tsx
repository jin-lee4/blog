import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "blawg",
  description: "developed by jin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="bg-white py-10">
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
          <div>{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
