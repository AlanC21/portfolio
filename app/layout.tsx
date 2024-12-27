import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { LoadingProvider } from "@/contexts/LoadingContext";

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

export const metadata: Metadata = {
  title: "Mi Portfolio",
  description: "Portfolio by Alan Cordoba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="text-center p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
              © 2024 Alan G. Cordoba
            </footer>
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}