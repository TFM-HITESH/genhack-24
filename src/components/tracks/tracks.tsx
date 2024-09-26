'use client';
import React, { useEffect, useState } from 'react';
import resume from './assets/resume.jpg';
import { FocusCards } from '../ui/focus-cards-for-tracks';
import background4 from './assets/bg7.jpg';
import ai1 from './assets/ai1.jpg';
import ai3 from './assets/ai3.jpg';
import notes1 from './assets/notes1.jpg';
import { ArrowTopRightIcon, OpacityIcon } from '@radix-ui/react-icons';
import { FaRegFilePdf } from 'react-icons/fa6';
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from '../ui/glowing-stars';
import Link from 'next/link';
import { PinContainer } from '../ui/3d-pin';

export default function Tracks() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering on the server
    }
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center  border-white border-2">
            {/* <p>Discuss tracks 4 tracks</p>
            <p>2 should be shown with details, 2 are coming soon</p>
            <p>Buttons to redirect to pdf containing track info (gdrive)</p> */}
            <div
                className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center relative bg-cover bg-center md:p-16 bg-black"
                style={{ backgroundImage: `url(${background4.src})` }}
            >
                <div className="absolute z-[1] inset-0 bg-black opacity-0 backdrop-blur-md rounded-xl md:rounded-3xl"></div>
                <div>
                    <h2 className="z-20 relative text-5xl md:text-8xl lg:mb-2 text-center md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out pb-4 lg:pb-16 text-black font-black tracking-widest">
                        TRACKS
                    </h2>

                    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-10">
                        <PinContainer
                            title="Track 1 : Click here for more details!"
                            href="https://drive.google.com/file/d/1KWAX2-oeZlYcj3t9fN8KzyPNtX2JsXQ_/view"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    AI Resume Builder
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white/40 tracking-widest ">
                                        Create a custom resume building LLM for
                                        specific companies
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500" />
                            </div>
                        </PinContainer>
                        <PinContainer
                            title="Track 2 : Click here for more details!"
                            href="https://drive.google.com/file/d/1KXQwc07083xB_VJgv_xBZ_7YxCxVUPYq/view"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    AI Notes Merger
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white/40 tracking-widest">
                                        Create an academic VTOP notes LLM for
                                        exam preparation
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-rose-500 via-red-500 to-orange-500" />
                            </div>
                        </PinContainer>
                        <PinContainer
                            title="Track 3 : Click here for more details!"
                            href="https://drive.google.com/file/d/1Kb2VSPqxAI5HjbtkSjPZTAH_awYKHYW8/view"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    AI Debate Bot
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white/40 tracking-widest">
                                        Build a bot that speaks for/against any
                                        topic
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-emerald-500 via-green-500 to-lime-500" />
                            </div>
                        </PinContainer>
                        <PinContainer
                            title="Click here for more details!"
                            href="https://drive.google.com/file/d/1Kco8TZOdgan8aAtE9gytYn2ASvHC_7UI/view"
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                    Open Innovation
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-white/40 tracking-widest">
                                        Let your imagination run wild! Surprise
                                        us with your dreams
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500" />
                            </div>
                        </PinContainer>
                    </div>
                    {/* <FocusCards cards={cards} /> */}
                </div>
            </div>
        </div>
    );
}
