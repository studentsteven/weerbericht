import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Home | HollandsWeer",
  description: "De website voor actuele weerinformatie!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body>
        <Header />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}