import FourteenDays from "@/components/fourteendays";
import Search from "@/components/search";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Komende dagen | HollandsWeer",
    description: "De website voor actuele weerinformatie!",
  };
  

export default function KomendeDagen() {
    return (
        <>
            <div className="container pt-20 mt-10 pb-0 text-center text-white">
                <h1>Weer komende dagen in...</h1>
                <Search />
            </div>
            <div className="container pb-20 pt-10 text-white">
                <h1 className="text-center mb-10">Weer komende dagen in Nederland</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <FourteenDays />
                </div>
            </div>
        </>
    );
}