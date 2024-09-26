import React from 'react';
import Image from 'next/image';
import resource from './assets/resource.jpeg';

export default function Prizes() {
    return (
        <div
            id="prizes"
            className="w-full relative overflow-hidden rounded-3xl flex flex-col items-center justify-center border-2 border-white z-20 bg-grid-white/10 pb-20"
            // style={{ backgroundImage: `url(${resource.src})` }}
        >
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>

            <div className=" w-full px-4 relative z-20">
                {/* Section Header */}
                <div className="text-center w-full mx-auto">
                    <div className="mb-8">
                        <h2 className="text-5xl lg:text-7xl text-white my-[5rem] z-20">
                            Winning Never Looked So Good
                        </h2>
                    </div>
                    <p className="text-5xl text-fuchsia-600 font-black z-20 my-10">
                        PRIZES
                    </p>
                </div>

                {/* Prizes Component */}
                <div className="flex flex-col items-center z-[20] w-full gap-[1rem]">
                    {/* First Row */}
                    <div className="prizes_row flex flex-col md:flex-row items-center justify-center md:space-x-[8rem] w-full z-20">
                        {/* Trophy Image */}
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d89b26d3f2b504b045_Trophy.webp"
                            alt="Trophy"
                            width={100}
                            height={100}
                            className="hidden md:block animate-breathe"
                            loading="lazy"
                        />

                        {/* Winner Prize */}
                        <div className="text-3xl sm:text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-6 sm:p-8 my-4 w-full md:w-auto md:px-22 bg-white/10 backdrop-blur-xl hover:scale-105 ease-in-out transition-all duration-150">
                            1st, 2nd, 3rd Place
                        </div>

                        {/* Flag Image */}
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d8c9fbe25684e0aa84_Flag.webp"
                            alt="Flag"
                            width={100}
                            height={100}
                            className="hidden md:block animate-breathe"
                            loading="lazy"
                        />
                    </div>

                    {/* Second Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-center md:space-x-[8rem] w-full md:mt-8 z-20">
                        {/* Two Runner Ups Prize */}
                        <div className="text-3xl sm:text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-6 sm:p-8 my-4 w-full md:w-auto md:px-22 bg-white/10 backdrop-blur-xl hover:scale-105 ease-in-out transition-all duration-150">
                            Best Freshers Team
                        </div>

                        {/* Card Image */}
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d83d2c8369837e75f0_card.webp"
                            alt="Card"
                            width={100}
                            height={100}
                            className="hidden lg:block my-4 animate-breathe delay-100"
                            loading="lazy"
                        />

                        {/* Audience Favourite Prize */}
                        <div className="text-3xl sm:text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-6 sm:p-8 my-4 w-full md:w-auto md:px-22 bg-white/10 backdrop-blur-xl hover:scale-105 ease-in-out transition-all duration-150">
                            Best Womens Team
                        </div>
                    </div>
                    <div className="flex items-center justify-center ">
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d83d2c8369837e75f0_card.webp"
                            alt="Card"
                            width={100}
                            height={100}
                            className="items-center block lg:hidden justify-center hidden md:block animate-breathe delay-200"
                            loading="lazy"
                        />
                    </div>

                    {/* Third Row */}
                    <div className="prizes_row flex flex-col md:flex-row items-center justify-center md:space-x-[8rem] md:mt-8 w-full z-20">
                        {/* Trophy Image */}
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d8c9fbe25684e0aa84_Flag.webp"
                            alt="Flag"
                            width={100}
                            height={100}
                            className="hidden md:block animate-breathe delay-300"
                            loading="lazy"
                        />

                        {/* Winner Prize */}
                        <div className="text-3xl sm:text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-6 sm:p-8 my-4 w-full md:w-auto md:px-22 bg-white/10 backdrop-blur-xl hover:scale-105 ease-in-out transition-all duration-150">
                            Track Winners
                        </div>

                        {/* Flag Image */}
                        <Image
                            src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d89b26d3f2b504b045_Trophy.webp"
                            alt="Trophy"
                            width={100}
                            height={100}
                            className="hidden md:block animate-breathe dela delay-500"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className=" absolute h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] bg-purple-600/50 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[60%] md:-left-[5%] top-[15%] -left-[10rem]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] bg-indigo-400/50 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[70%] md:left-[10%] top-[75%] left-[70%]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[45rem] md:w-[45rem] bg-cyan-400/60 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[87%] md:left-[20%] top-[30%] left-[70%]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] bg-rose-400/60 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[65%] md:left-[80%] top-[75%] left-[70%]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[35rem] md:w-[35rem] bg-fuchsia-500/70 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[80%] md:left-[50%] top-[55%] -left-[10rem]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[55rem] md:w-[55rem] bg-orange-400/70 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[70%] md:left-[80%] top-[75%] left-[70%]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] bg-fuchsia-700/80 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[70%] md:left-[60%] top-[75%] left-[70%]"></div>

                <div className=" absolute h-[20rem] w-[20rem] md:h-[20rem] md:w-[20rem] bg-rose-700/80 rounded-full blur-2xl md:blur-[6rem] z-5 md:top-[70%] md:left-[60%] top-[75%] left-[70%]"></div>
            </div>
        </div>
    );
}
