"use client";

import axios from "axios";

const api = {
    key: '561bfde85c3849289b7102745242504',
    url: 'http://api.weatherapi.com/v1'
}

function App() {
    const getWeather = () => {
        axios.get(`${api.url}/current.json?key=${api.key}&q=Netherlands`)
            .then(res => {
                console.log(res.data.current);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="mt-[150px]">
            <button onClick={getWeather}>Krijg het weer</button>
        </div>
    );
}

export default App;