import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import Navigation from "./_Components/Navigation";
import Logo from "@/app/_Components/Logo";
import { Josefin_sans } from "./_styles/fonts";
import Header from "./_Components/Header";
import { useEffect } from "react";
import ReservationProvider from "./_context/ReservationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - The wild oasis",
    default: "Welcome to the wild oasis",
  },
  description:
    "Welcome to Wild Basis. The best luxury hotel in the world located in italian countryside.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Josefin_sans.className}>
      <body className="text-gray-50 bg-slate-900  min-h-screen flex flex-col">
        <Header />
        <main className="py-10 text-wrap whitespace-break-spaces px-7 sm:px-12 flex-1 grid">
          <ReservationProvider>{children}</ReservationProvider>
        </main>
      </body>
    </html>
  );
}
