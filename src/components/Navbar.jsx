import React from 'react';
import home from '../assets/image/Amazonlogo12.png';
import logo from '../assets/image/Pokemon logo.jpg'
import shop from '../assets/image/Pikachu shop.jpg'
import aboutus from '../assets/image/About us card.jpg'
import card from '../assets/image/Trade card logo.png'
import game from '../assets/image/Legends Z-A logo.jpg'
import forum from '../assets/image/Forums logo.jpg'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

export default function Navbar() {

    const [open, close] = useState(false)

    const togglemenu = () => {
        close(!open)
    }


    const navmenu = [
        { href: "#", image: logo },
        { href: "#", image: shop },
        { href: "#", image: aboutus },
    ];

    const navmenu2 = [
        { href: "#", image: card },
        { href: "#", image: game },
        { href: "#", image: forum },
    ];

    const navmenu3 = [
        { href: "#", icon: "", text: "Home", bg: "gray-500" },
        { href: "#", icon: "", text: "Pokédex", bg: "red-600" },
        { href: "#", icon: "", text: "Video Games and Apps", bg: "orange-600" },
        { href: "#", icon: "", text: "Trading Card Game", bg: "yellow-500" },
        { href: "#", icon: "", text: "Animation", bg: "green-600" },
        { href: "#", icon: "", text: "Play! Pokemon Events", bg: "sky-500" },
        { href: "#", icon: "", text: "News", bg: "blue-800" },
    ];

    // Map of allowed Tailwind hover:bg-* classes
    const bgClasses = {
        "gray-500": "hover:bg-gray-500",
        "red-600": "hover:bg-red-600",
        "orange-600": "hover:bg-orange-600",
        "yellow-500": "hover:bg-yellow-500",
        "green-600": "hover:bg-green-600",
        "sky-500": "hover:bg-sky-500",
        "blue-800": "hover:bg-blue-800",
    };

    return (
        <div>
            {/* Top Navigation */}
            <nav className="h-15 bg-gray-100 shadow-md flex items-center justify-center scale-z-100">
                <ul className="flex">
                    {navmenu.map((item, key) => (
                        <li key={key} className='px-2 py-2 border-r-1 border-gray-300'>
                            <a href={item.href} >
                                <img className="h-13 w-23 " src={item.image} alt="" />
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="hidden md:flex">
                    {navmenu2.map((item, key) => (
                        <li key={key} className='px-2 py-2'>
                            <a href={item.href}>
                                <img className="h-13 w-48" src={item.image} alt="" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Middle Navigation */}
            <div className='flex items-center justify-center bg-white'>
                <div className="h-23 bg-white flex items-end justify-center">
                    <ul className="flex">
                        {navmenu3.map((item, key) => (
                            <li key={key} className={`w-32 h-22 hidden md:flex items-center justify-center flex-col ${bgClasses[item.bg]} hover:text-white`} >
                                <a href={item.href}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className=' hover:cursor-pointer md:hidden bg-neutral-900 w-full h-22 text-3xl text-white items-center flex' onClick={togglemenu}>

                    {open ? <FaBars /> : <FaBars />}

                </div>
            </div>


            {

                open && (
                    <div className="h-23 bg-white flex items-end justify-center">
                        <ul className="flex">
                            {navmenu3.map((item, key) => (
                                <li key={key} className={`w-18 h-23 flex items-center justify-center flex-col ${bgClasses[item.bg]} hover:text-white`} >
                                    <a href={item.href}>
                                        <div>{item.icon}</div>
                                        <div>{item.text}</div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }

            {/* Bottom Color Bar */}
            <div className="hidden md:flex justify-center items-center">
                <ul className="flex">
                    <li><div className="bg-gray-500 h-1.5 w-32 rounded-bl-md"></div></li>
                    <li><div className="bg-red-600 h-1.5 w-32"></div></li>
                    <li><div className="bg-orange-600 h-1.5 w-32"></div></li>
                    <li><div className="bg-yellow-500 h-1.5 w-32"></div></li>
                    <li><div className="bg-green-600 h-1.5 w-32"></div></li>
                    <li><div className="bg-sky-500 h-1.5 w-32"></div></li>
                    <li><div className="bg-blue-800 h-1.5 w-32 rounded-br-md"></div></li>
                </ul>
            </div>
        </div>
    );
}
