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
        <nav className="flex items-center gap-3 bg-white justify-between sticky top-0 z-40 shadow-lg px-5">
          <div className="flex justify-center md:block">
            <a href="/" title="Homepagina"><Image src="/weather.svg" width={50} height={75} alt='Weather Logo' /></a>
          </div>
          <ul className="gap-3 mx-10 hidden md:flex">
            <li><a href="/">Homepagina</a></li>
            <li><a href="/komendedagen">Komende Dagen</a></li>
            {/* <li>Steden</li> */}
            <li><a href="/info">Info</a></li>
          </ul>
          <div className="flex md:hidden text-[25px]">
            ☰
          </div>
        </nav>

        {children}


<div className="w-full">
  <img src="/city.png" alt="Cartoon van een stad" />
  <footer className="w-full">
     <div className="container mx-auto p-5">
       <Image src="/weather.svg" width={75} height={75} alt='Weather Logo' />
       <strong>HollandsWeer</strong><br/>
       <i>Made by Steven Roest</i><br/>
       <small>hollandsweer.nl</small>
     </div>
   </footer>
</div>
        
      </body>
    </html>
  );
}