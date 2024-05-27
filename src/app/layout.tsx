import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';

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
        <nav className="flex items-center gap-3 bg-white justify-between">
          <div className="flex justify-center md:block">
            <a href="/" title="Homepagina"><Image src="/weather.svg" width={75} height={75} alt='Weather Logo' className="mx-5" /></a>
          </div>
          <ul className="gap-3 mx-10 hidden md:flex">
            <li><a href="/">Homepagina</a></li>
            <li><a href="/komendedagen">Komende Dagen</a></li>
            {/* <li>Steden</li> */}
            <li><a href="/info">Info</a></li>
          </ul>
        </nav>

        {children}

        <footer className="flex w-full">
          <div className="container mx-auto p-5">
            <Image src="/weather.svg" width={75} height={75} alt='Weather Logo' />
            <h3>Weerbericht</h3>
          </div>
        </footer>
      </body>
    </html>
  );
}