"use client";

import { useState } from "react"
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className="bg-white fixed w-full top-0 shadow-lg px-5 z-40">
                <div className="flex items-center gap-3 justify-between">
                    <div className="flex justify-center md:block">
                        <a href="/" title="Homepagina"><Image src="/weather.svg" width={50} height={75} alt='Weather Logo' /></a>
                    </div>

                    <ul className="gap-3 mx-10 hidden md:flex">
                      <li><a href="/">Homepagina</a></li>
                      <li><a href="/komendedagen">Komende Dagen</a></li>
                      <li><a href="/info">Info</a></li>
                    </ul>

                    <div className="flex md:hidden text-[25px]">
                        { 
                            showMenu? ( <FontAwesomeIcon icon={faXmark} onClick={() => setShowMenu(false)} /> ) 
                            : 
                            <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(true)} /> 
                        }
                    </div>
                </div>
                {
                    showMenu? 
                    (
                        <div className="flex justify-center text-center text-[18px] mb-5">
                            <ul className="flex gap-3 flex-col">
                                <li><a href="/">Homepagina</a></li>
                                <li><a href="/komendedagen">Komende Dagen</a></li>
                                <li><a href="/info">Info</a></li>
                            </ul>
                        </div>
                    )
                    :
                    null
                }
            </nav>
        </>
    )
}