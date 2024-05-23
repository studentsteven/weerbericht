type WeatherCardProps = {
    graden: number;
    dag: string;
}

export default function WeatherCard({ graden, dag }: WeatherCardProps) {
    return (
        <div className="weerItem">
            <p>{dag}</p>
            <h1>{graden}°</h1>
        </div>
    );
}