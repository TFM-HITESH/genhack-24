'use client';
// import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import RotateText from './components/rotateText';

export default function HeroVideo() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering on the server
    }

    return (
        <div className="relative w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center border-white border-2">
            <div className="flex flex-col w-full h-full justify-center items-center">
                <video
                    className="w-full h-full rounded-3xl"
                    autoPlay
                    loop
                    muted
                >
                    <source src="GENHACKVid.webm" type="video/webm" />
                </video>
                {/* Button positioned over the video */}
                {/* <Link
                    href="\"
                    className=" transform -translate-x-1/2 px-6 py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                >
                    Register Now
                </Link> */}

                {/* <Link
                    href="/"
                    className="absolute bottom-20 mx-auto overflow-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 p-3 hover:scale-125 transition-all duration-200 ease-in-out"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 p-5 font-medium text-white backdrop-blur-3xl text-4xl">
                        <RotateText />
                    </span>
                </Link> */}
            </div>
        </div>
    );
}
