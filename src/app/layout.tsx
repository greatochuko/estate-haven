import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Estate Haven",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-8 min-h-dvh text-zinc-700">
        <Header />
        <main className="flex-1 mx-auto w-[95%] sm:w-[90%] max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
