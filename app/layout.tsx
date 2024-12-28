'use client'

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
            {mounted && <Navbar />}
            <main className="flex-grow">{mounted ? children : null}</main>
            <footer className="text-center p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              © 2024 Alan G. Cordoba
            </footer>
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}