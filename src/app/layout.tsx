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
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <h3>developed by jin</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto px-6">
          {header}
          <div id="content">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
