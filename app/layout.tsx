import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import Navigation from "./_Components/Navigation";
import Logo from "@/app/_Components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wild oasis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-50 bg-slate-900 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyrights by Mustafa</footer>
      </body>
    </html>
  );
}
