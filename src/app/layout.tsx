import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUserSession } from "@/services/userServices";

export const metadata: Metadata = {
  title: { template: "%s - Estate Haven", absolute: "Estate Haven" },
  description:
    "The ultimate destination for the latest property listings and market insights!",
  authors: [
    { name: "Great Ogheneochuko", url: "https://greatochuko.vercel.app" },
  ],
  openGraph: {
    title: "Estate Haven",
    type: "website",
    url: "https://estatehaven.vercel.app",
    images: ["https://estatehaven.vercel.app/ogImage.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estate Haven",
    images: ["https://estatehaven.vercel.app/ogImage.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();

  return (
    <html lang="en">
      <body className="flex flex-col gap-4 sm:gap-6 min-h-dvh text-zinc-700">
        <Header user={user} />
        <main className="flex flex-col flex-1 mx-auto w-[92%] sm:w-[90%] max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
