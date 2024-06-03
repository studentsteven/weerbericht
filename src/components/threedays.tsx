"use client";

import apiVars from '@/components/api';
import {format} from 'date-fns';
import { useEffect, useState } from "react";
import WeatherCard from "./cards/weatherCard";
import axios from "axios";

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

export default function ThreeDays() {
    const [weather, setWeather] = useState<ForecastDay[]>([]);

    useEffect(() => {
        axios.get(`${apiVars.url}/forecast.json?key=${apiVars.key}&q=Netherlands&days=3`)
            .then(res => {
                setWeather(res.data.forecast.forecastday);
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <>
            { weather.map((d, i) => {
                return (
                    <WeatherCard 
                        graden={ d.day.avgtemp_c } 
                        dag={ format(d.date, "dd-MM-yyyy") } 
                        icon={ d.day.condition.icon }  
                        min_temp={d.day.mintemp_c}
                        max_temp={d.day.maxtemp_c}
                        regenkans={d.day.daily_chance_of_rain}
                    />
                )
            }) }
        </>
    )
}