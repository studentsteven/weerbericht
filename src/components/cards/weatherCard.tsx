import { useState } from "react";

type WeatherCardProps = {
    graden: number;
    min_temp?: number;
    max_temp?: number;
    regenkans?: number;
    dag: string;
    icon?: string;
}

export default function WeatherCard({ graden, dag, icon, min_temp, max_temp, regenkans }: WeatherCardProps) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="relative text-black">
            <div className="weerItem">
                <img src={icon} alt="" className="absolute top-2 right-2" />
                <p>{dag}</p>
                <h1>{graden}°</h1>
                <div className="absolute bottom-2 right-2 cursor-pointer" onClick={()=>setShowInfo(true)}>
                    Meer info →
                </div>
            </div>

            {
                showInfo? (
                    <div className="projectInfo absolute top-0 rounded-xl h-full w-full bg-white p-[15px]">
                        <h1>Weer op { dag }</h1>
                        <p>
                            Min. Temperatuur: { min_temp || "Niet Beschikbaar" }°<br />
                            Gem. Temperatuur: { graden || "Niet Beschikbaar" }°<br />
                            Max. Temperatuur: { max_temp || "Niet Beschikbaar" }°<br />
                            Kans op regen: { regenkans || "Niet Beschikbaar" }%
                        </p>

                        <div className="absolute bottom-2 right-2 cursor-pointer" onClick={()=>setShowInfo(false)}>
                            Minder info ←
                        </div>
                    </div>
                )
                :
                null
            }
        </div>
    );
}