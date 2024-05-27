type WeatherCardProps = {
    graden: number;
    dag: string;
    icon?: string;
}

export default function WeatherCard({ graden, dag, icon }: WeatherCardProps) {
    return (
        <div className="weerItem relative text-black">
            <img src={icon} alt="" className="absolute top-2 right-2" />
            <p>{dag}</p>
            <h1>{graden}°</h1>
            <div className="absolute bottom-2 right-2">
                Meer info →
            </div>
        </div>
    );
}