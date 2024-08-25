import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUserSession } from "@/services/userServices";
import { connectDB } from "@/db/connectDB";

export const metadata: Metadata = {
  title: "Estate Haven",
  description:
    "The ultimate destination for the latest property listings and market insights!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectDB();
  const user = await getUserSession();

  return (
    <html lang="en">
      <body className="flex flex-col gap-8 min-h-dvh text-zinc-700">
        <Header user={user} />
        <main className="flex flex-col flex-1 mx-auto w-[95%] sm:w-[90%] max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
