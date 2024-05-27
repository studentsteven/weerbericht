import Search from "@/components/search";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Komende dagen | HollandsWeer",
    description: "De website voor actuele weerinformatie!",
  };
  

export default function KomendeDagen() {
    return (
        <>
            <div className="container py-20 text-center">
                <h1>Weer komende dagen</h1>
                <Search />
            </div>
        </>
    );
}