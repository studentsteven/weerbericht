import Search from "@/components/search";
import LinkButton from "@/components/buttons/linkButton";
import ThreeDays from "@/components/threedays";

export default function Home() {
  return (
    <div>
      <iframe
        className="w-full h-[500px]"
        src="https://www.openstreetmap.org/export/embed.html?bbox=0.9010837312767795%2C50.49595785216966%2C8.904623770339281%2C53.48150827154005&amp;layer=mapnik"
      ></iframe>
      <div className="container mx-auto my-20 text-white">
        <div className="flex justify-between place-items-center align-center mb-5">
          <h1>Weer komende dagen in Nederland</h1>
          <div className="hidden md:block">
            <LinkButton href="komendedagen">Meer weer bekijken</LinkButton>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <ThreeDays />
        </div>
        <div className="flex md:hidden justify-center mt-5">
          <LinkButton href="komendedagen">Meer weer bekijken</LinkButton>
        </div>
      </div>
      <div className="zoekenStad mt-20 text-white">
        <div className="container py-10">
          <h1 className="text-center">Zoeken naar een stad</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}