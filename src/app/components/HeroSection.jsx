"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center w-full text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm{" "}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Shubham Khamkarhatti',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software Engineer',
                                1000,
                                'NodeJs Developer',
                                1000,
                                'NextJs/ ReactJs Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quos.
                    </p>
                    <div className="">
                        <button className='px-6 py-3 rounded-full mr-4 w-full sm:w-fit hover:bg-slate-200 bg-white text-black'>Hire Me</button>
                        <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-4'>
                            <span className='bg-[#121212] rounded-full block hover:bg-slate-800 px-5 py-2'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src='/images/hero-image-men.png'
                            alt='hero-image'
                            className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
