import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_MX, Dancing_Script } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Component/Navbar/ResponsiveNav";
import Footer from "@/Component/Footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwrite = Playwrite_MX({
  variable: "--font-playwrite",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Readers",
  description: "Mmesoma Readers app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwrite.variable} ${dancing.variable} antialiased`}
      >
        <ResponsiveNav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
