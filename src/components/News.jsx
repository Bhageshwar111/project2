import React from 'react'
import home from '../assets/image/Amazonlogo12.png'
import image1 from '../assets/image/Image 1.jpg'
import image3 from '../assets/image/Image 3.jpg'
import image4 from '../assets/image/image 4.jpg'


export default function News() {
    return (
        <div className='flex justify-center '>

            <div className='flex justify-center bg-white w-90 md:w-320 md:py-5'>

                <div className='flex flex-col  items-center md:justify-center md:flex  md:items-center md:flex-row gap-4 bg-gray-200 md:h-198 w-120 md:w-230 p-5 '>

                    <div className=' flex-col  md:flex md:flex-col gap-3 mt-5 justify-between items-center '>

                        <div className='md:h-118 md:w-145 h-118 w-120 flex  md:flex border-1 justify-center border-white rounded-md items-center '>

                            <a href="#">

                                <img className='w-120 md:w-145 h-80 rounded-t-md' src={image1} alt="" />

                                <div className='bg-orange-700 h-38 rounded-b-md text-white px-5 py-5'>

                                    <div className='text-2xl'>Get New Cards from Scarlet & Violet—Destined Rivals Early</div>

                                    <div className='text-gray-300'>Open booster packs from the Scarlet & Violet—Destined Rivals Build & Battle Box at a Prerelease event near you, starting May 17, 2025.</div>

                                </div>

                            </a>

                        </div>

                        <div className='flex-col items-center flex md:flex-row md:flex gap-3'>

                            <a href="#" className='h-64 w-71 border-1 border-white rounded-md '>

                                <img className='w-71 h-440rounded-t-md' src={image3} alt="" />

                                <div className='h-24 bg-gray-800 text-white text-xl px-5 py-3 rounded-b-md'>
                                    Build Your Destined Rivals Collection
                                </div>

                            </a>



                            <a href="#" className='h-64 w-71 border-1 border-white rounded-md '>

                                <img className='w-71 h-40 rounded-t-md' src={image4} alt="" />

                                <div className='h-24 bg-yellow-900 text-white text-xl px-5 py-3 rounded-b-md'>
                                    Urshifu Strikes with Style in Pokémon GO
                                </div>

                            </a>

                        </div>


                    </div>



                    <div className='flex md:flex flex-col gap-3 mt-5'>

                        <div><img className='h-67 w-72 border-1 border-white rounded-md' src={home} alt="" /></div>

                        <div><img className='h-43 w-72 border-1 border-white rounded-md' src={home} alt="" /></div>
                        
                        <div><img className='h-67 w-72 border-1 border-white rounded-md' src={home} alt="" /></div>

                    </div>

                </div>

            </div>

        </div>
    )
}
