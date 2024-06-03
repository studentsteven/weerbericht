import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full">
            <img src="/city.png" alt="Cartoon van een stad" />
            <footer className="w-full">
                <div className="container mx-auto p-5">
                <Image src="/weather.svg" width={75} height={75} alt='Weather Logo' />
                <strong>HollandsWeer</strong><br/>
                <i>Made by Steven Roest</i><br/>
                <small>hollandsweer.nl</small>
                </div>
            </footer>
        </div>
    )
}