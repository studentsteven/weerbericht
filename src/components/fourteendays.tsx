"use client";

import {format} from 'date-fns';

const api = {
    key: '561bfde85c3849289b7102745242504',
    url: 'https://api.weatherapi.com/v1'
}

interface ForecastDay {
    date: string;
    day: {
        avgtemp_c: number;
        condition: {
            icon: string;
        }
    }
}

import { useEffect, useState } from "react";
import WeatherCard from "./cards/weatherCard";
import axios from "axios";

export default function FourteenDays() {
    const [weather, setWeather] = useState<ForecastDay[]>([]);

    useEffect(() => {
        axios.get(`${api.url}/forecast.json?key=${api.key}&q=Netherlands&days=14`)
            .then(res => {
                setWeather(res.data.forecast.forecastday);
            })
            .catch(error => console.log(error));
    }, []);
    
    return (
        <>
            { weather.map((d, i) => {
                return (
                    <WeatherCard graden={ d.day.avgtemp_c } dag={ format(d.date, "dd-MM-yyyy") } icon={ d.day.condition.icon }  />
                )
            }) }
        </>
    )
}