import React from 'react';
import Link from 'next/link';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';

export default function Footer() {
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center h-full bg-black border-white border-2">
            <BackgroundBeamsWithCollision className="w-full h-full p-4 md:p-16 rounded-3xl flex z-10 hover:rounded-3xl items-center">
                <div className="flex flex-col md:flex-row mx-auto justify-between w-full h-full z-20 items-center">
                    <div className="flex flex-col w-full h-full items-center justify-end text-sm md:text-xl">
                        <p className="flex justify-center md:justify-start items-center w-full p-6 transition-all duration-200 ease-in-out relative overflow-hidden group">
                            <Link
                                href="mailto:isa@vit.ac.in"
                                className="tracking-[1.0em] z-10 relative group-hover:text-violet-800 transition-all duration-200 ease-in-out"
                                target="_blank"
                            >
                                EMAIL US
                            </Link>

                            {/* Background Slide Effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/20 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </p>
                        <p className="flex justify-center md:justify-start items-center w-full p-6 transition-all duration-200 ease-in-out relative overflow-hidden group">
                            <Link
                                href="https://www.linkedin.com/company/international-society-of-automation-isa-vit/"
                                className="tracking-[1.0em] z-10 relative group-hover:text-violet-800 transition-all duration-200 ease-in-out"
                                target="_blank"
                            >
                                LINKEDIN
                            </Link>

                            {/* Background Slide Effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/20 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </p>
                        <p className="flex justify-center md:justify-start items-center w-full p-6 transition-all duration-200 ease-in-out relative overflow-hidden group">
                            <Link
                                href="https://www.instagram.com/isa_vit_/?hl=en"
                                className="tracking-[1.0em] z-10 relative group-hover:text-violet-800 transition-all duration-200 ease-in-out"
                                target="_blank"
                            >
                                INSTAGRAM
                            </Link>

                            {/* Background Slide Effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/20 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </p>
                        <p className="flex justify-center md:justify-start items-center w-full p-6 transition-all duration-200 ease-in-out relative overflow-hidden group">
                            <Link
                                href="https://www.facebook.com/isavitchapter"
                                className="tracking-[1.0em] z-10 relative group-hover:text-violet-800 transition-all duration-200 ease-in-out"
                                target="_blank"
                            >
                                FACEBOOK
                            </Link>

                            {/* Background Slide Effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-white to-white/20 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </p>
                    </div>
                    <div className="hidden md:block z-[20] h-full items-center justify-end text-4xl text-black font-black">
                        <p className="flex justify-end items-center w-full p-6 transition-all duration-200 ease-in-out relative overflow-hidden group tracking-[1.0em] z-10 relative">
                            GENHACK'24
                            {/* Background Slide Effect */}
                        </p>
                    </div>

                    {/* <div className="w-[60%] flex flex-row justify-center h-full items-center ">
                        <Link
                            href="https://linktr.ee/ISA_VIT"
                            className="flex mb-4 sm:mb-0 space-x-2 rtl:space-x-reverse"
                        >
                            <Image
                                src="/ISASquare.png"
                                className="absolute scale-[3.5] rotate-[15deg] translate-x-[8rem] opacity-45"
                                width={150}
                                height={150}
                                alt="ISA Logo"
                            />
                        </Link>
                    </div> */}
                    <div className=" hidden md:block absolute -right-[15rem] h-[35rem] w-[35rem] bg-purple-800 rounded-full z-[5]"></div>
                    <div className="hidden md:block absolute -right-[10rem] h-[45rem] w-[45rem] bg-purple-600 rounded-full z-[4]"></div>
                    <div className="hidden md:block absolute -right-[5rem] h-[55rem] w-[55rem] bg-purple-400 rounded-full z-[3]"></div>
                    <div className="hidden md:block absolute -right-[1rem] h-[65rem] w-[65rem] bg-purple-300 rounded-full z-[2]"></div>
                    <div className="absolute inset-0 opacity-35 bg-[url('/bright-squares.png')] bg-repeat bg-[size:200px_200px] animate-slide" />
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
