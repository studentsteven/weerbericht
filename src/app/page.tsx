import Image from "next/image";
import Today from "@/components/weather/today";
import Tomorrow from "@/components/weather/tomorrow";
import DayAfterTomorrow from "@/components/weather/dayaftertomorrow";

export default function Home() {
  return (
    <div>
      <iframe
        className="w-full h-[500px]"
        src="https://www.openstreetmap.org/export/embed.html?bbox=0.9010837312767795%2C50.49595785216966%2C8.904623770339281%2C53.48150827154005&amp;layer=mapnik"
      ></iframe>
      <div className="container mx-auto my-10">
        <h1 className="mb-5">Weer komende dagen</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Today / >
          <Tomorrow / >
          <DayAfterTomorrow / >
        </div>
      </div>
    </div>
  );
}