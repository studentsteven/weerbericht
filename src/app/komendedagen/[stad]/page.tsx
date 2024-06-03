"use client";

import apiVars from "@/components/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import WeatherCard from "@/components/cards/weatherCard";
import { format } from "date-fns";

interface ForecastDay {
    date: string;
    day: {
        avgtemp_c: number;
        mintemp_c: number;
        maxtemp_c: number;
        daily_chance_of_rain: number;
        condition: {
            icon: string;
        }
    }
}
export default function Stad() {
    const [weather, setWeather] = useState<ForecastDay[]>([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`${apiVars.url}/forecast.json?key=${apiVars.key}&q=${params.stad}&days=14`)
            .then(res => {
                setWeather(res.data.forecast.forecastday);
                console.log(res);
            })
            .catch(error => console.log(error));
    }, []);

    const weatherCardsStad = weather.map((d, i) => 
        <WeatherCard 
            graden={ d.day.avgtemp_c } 
            dag={ format(d.date, "dd-MM-yyyy") } 
            icon={ d.day.condition.icon }  
            min_temp={d.day.mintemp_c}
            max_temp={d.day.maxtemp_c}
            regenkans={d.day.daily_chance_of_rain}
        />
    )
    
    return (
        <>
            <div className="container py-20 mt-10">
                <h1 className="mb-5 text-center text-white">Weer in { decodeURIComponent(params.stad) }</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    { weatherCardsStad }
                </div>
            </div>
        </>
    );
}