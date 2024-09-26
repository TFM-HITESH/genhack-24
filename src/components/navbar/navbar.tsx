import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import isaLogo from '@/Assets/ISALogo.png';

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 m-11">
            <nav id="navbar" className="bg-violet-300/30 shadow-md rounded-full mx-6 backdrop-filter backdrop-blur-2xl bg-opacity-60 firefox:bg-opacity-60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
                    <div className="flex items-center justify-between h-18">
                        <div className="flex-1 flex lg:justify-center lg:space-x-14 xl:space-24">
                            <div className="justify-between hidden lg:ml-6 lg:flex lg:space-x-14 xl-space-24">
                                <Link
                                    href="#tracks"
                                    className="text-xl font-extralight tracking-widest text-white hover:text-black px-3 py-4 transition-all duration-300 ease-in-out"
                                >
                                    TRACKS
                                </Link>
                                <Link
                                    href="#prizepool"
                                    className="text-xl font-extralight tracking-widest text-white hover:text-black px-3 py-4 transition-all duration-300 ease-in-out"
                                >
                                    PRIZES
                                </Link>
                                <Link
                                    href="#timeline"
                                    className="text-xl font-extralight tracking-widest text-white hover:text-black px-3 py-4 transition-all duration-300 ease-in-out"
                                >
                                    TIMELINE
                                </Link>
                                <Link
                                    href="#criteria"
                                    className="text-xl font-extralight tracking-widest text-white hover:text-black px-3 py-4 transition-all duration-300 ease-in-out"
                                >
                                    CRITERIA
                                </Link>
                                <Link
                                    href="#resources"
                                    className="text-xl font-extralight tracking-widest text-white hover:text-black px-3 py-4 transition-all duration-300 ease-in-out"
                                >
                                    RESOURCES
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}