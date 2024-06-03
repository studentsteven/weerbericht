import ThreeDays from "@/components/threedays";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Info | HollandsWeer",
    description: "Info over HollandsWeer",
};

export default function Info() {
    return (
        <>
            <div className="container py-20 mt-20 text-center text-white">
                <h1>Info</h1>
                <p>Created by Steven Roest</p>
            </div>
        </>
    );
}