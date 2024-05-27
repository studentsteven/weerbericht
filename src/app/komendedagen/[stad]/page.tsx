"use client";
import { useParams } from "next/navigation";

export default function Stad() {
    function capitalizeFirstLetter(string: any) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const params = useParams();
    return (
        <>
            <div className="py-20 text-center">
                <h1>Stad: { capitalizeFirstLetter(params.stad) }</h1>
                <p>Created by Steven Roest</p>
            </div>
        </>
    );
}