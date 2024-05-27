import Image from "next/image";
import Today from "@/components/weather/today";
import Tomorrow from "@/components/weather/tomorrow";
import DayAfterTomorrow from "@/components/weather/dayAfterTomorrow";
import Search from "@/components/search";

const styles = {
  zoekenStad: {
    background: "linear-gradient(135deg, rgba(54,121,175,1) 0%, rgba(164,179,235,1) 100%)"
  }
}

export default function Home() {
  return (
    <div>
      <iframe
        className="w-full h-[500px]"
        src="https://www.openstreetmap.org/export/embed.html?bbox=0.9010837312767795%2C50.49595785216966%2C8.904623770339281%2C53.48150827154005&amp;layer=mapnik"
      ></iframe>
      <div className="container mx-auto my-20">
        <div className="flex justify-between place-items-center align-center mb-5">
          <h1 className="">Weer komende dagen in Nederland</h1>
          <a 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden md:block transition-all"
            href="/komendedagen"
          >
            Meer weer bekijken
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Today / >
          <Tomorrow / >
          <DayAfterTomorrow / >
        </div>
        <div className="flex justify-center">
          <a 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block md:hidden mt-5"
            href="/komendedagen"
          >
            Meer weer bekijken
          </a>
        </div>
      </div>
      <div className="zoekenStad mt-20" style={styles.zoekenStad}>
        <div className="container py-10">
          <h1 className="text-center text-white">Zoeken naar een stad</h1>
          <Search />
        </div>
        <img src="city.png" alt="Cartoon van een stad" />
      </div>
    </div>
  );
}