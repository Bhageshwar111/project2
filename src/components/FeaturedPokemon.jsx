import React from 'react';
import home from '../assets/image/Amazonlogo12.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function FeaturedPokemon() {
    const pokediv = [
        { image: home, name: "Bulbasaur", no: "0001" },
        { image: home, name: "Charmander", no: "0004" },
        { image: home, name: "Squirtle", no: "0007" },
        { image: home, name: "Pikachu", no: "0025" },
        { image: home, name: "Rayquaza", no: "0384" }
    ];

    return (
        <div className="py-6 px-4">
            <div className='flex justify-center'>
                <div className='bg-gray-950 text-2xl text-white px-6 py-3 rounded-t-md'>
                    Featured Pokémon
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                className="mt-6"
            >
                {pokediv.map((item, index) => (
                    <SwiperSlide key={index} className="group">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                            <div className="relative">
                                <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                                <div className="absolute top-4 left-4 text-4xl font-bold text-gray-800">
                                    #{item.no}
                                </div>
                            </div>
                            <div className="bg-gray-950 text-white text-center py-4 text-xl font-semibold">
                                {item.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
