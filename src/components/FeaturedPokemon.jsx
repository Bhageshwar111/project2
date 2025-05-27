import React from 'react'
import home from '../assets/image/Amazonlogo12.png';


export default function FeaturedPokemon() {

    const pokediv = [
        { image: home, name: "Bulbasaur", no:"0001"},
        { image: home, name: "Charmander", no:"0004"},
        { image: home, name: "Squirtle", no:"0007"},
        { image: home, name: "Pikachu", no:"0025"},
        { image: home, name: "Rayquaza", no:"0384"}
    ]
    return (
        <div>
            <div className='block md:flex md:justify-center'>
                <div className='bg-white flex justify-center md:flex md:w-320 md:h-11 '>
                    <div className='bg-gray-950 text-2xl  text-gray-500 md:flex md:items-center md:justify-center md:ml-[-650px]  flex items-center justify-center w-70 h-12 rounded-tl-md rounded-tr-md '> Featured Pokémon</div>
                </div>
            </div>


            <div className='flex justify-center  md:flex md:justify-center'>
                <div className='md:w-320 md:h-95'>
                    <ul className='gap-0.5 flex flex-col justify-center md:flex md:flex-row'>
                        {pokediv.map((item, key) => (
                            <li key={key} className='w-64 '>
                                <div className='relative'><img className='h-70' src={item.image} alt="" /></div>
                                <div className='absolute text-gray-700 mt-[-250px] text-8xl font-bold flex items-center ml-6'>{item.no}</div>
                                <div className='h-25 text-3xl bg-gray-950 text-white items-center flex'>{item.name}</div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}
