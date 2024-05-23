"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../cards/weatherCard';

interface WeatherData {
    current: {
        temp_c: number;
        condition: {
            text: string;
        };
    };
}

const api = {
    key: '561bfde85c3849289b7102745242504',
    url: 'https://api.weatherapi.com/v1'
}

function DayAfterTomorrow() {
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        axios.get(`${api.url}/forecast.json?key=${api.key}&q=Netherlands&days=2`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {  data && (
                    <WeatherCard graden={data.current.temp_c} dag="Overmorgen" />
                )
            }
        </>
    );
}

export default DayAfterTomorrow;