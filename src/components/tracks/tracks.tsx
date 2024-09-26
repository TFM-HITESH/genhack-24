import React from 'react';
import resume from './assets/resume.jpg';
import { FocusCards } from '../ui/focus-cards-for-tracks';
import background4 from './assets/bg5.jpg';
import ai1 from './assets/ai1.jpg';
import ai3 from './assets/ai3.jpg';
import notes1 from './assets/notes1.jpg';
import { OpacityIcon } from '@radix-ui/react-icons';
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from '../ui/glowing-stars';

export default function Tracks() {
    const cards = [
        {
            title: 'TRACK 1',
            src: notes1.src,
        },
        {
            title: 'SHHH.. SECRET',
            src: ai1.src,
        },
        {
            title: 'RESUME BUILDING',
            src: resume.src,
        },
        {
            title: "I'LL SEE YOU AT THE EVENT!",
            src: ai3.src,
        },
    ];
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center  border-white border-2">
            {/* <p>Discuss tracks 4 tracks</p>
            <p>2 should be shown with details, 2 are coming soon</p>
            <p>Buttons to redirect to pdf containing track info (gdrive)</p> */}
            <div
                className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center relative bg-cover bg-center md:p-16 bg-black"
                style={{ backgroundImage: `url(${background4.src})` }}
            >
                <div className="absolute z-[1] inset-0 bg-black opacity-40 backdrop-blur-md rounded-xl md:rounded-3xl"></div>
                <div>
                    <h2 className="z-20 relative text-5xl md:text-8xl lg:mb-2 text-center md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out pb-4 lg:pb-16">
                        Tracks
                    </h2>

                    <div>
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>
                                    The power of full-stack to the frontend.
                                    Read the release notes.
                                </GlowingStarsDescription>
                                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                    {/* <Icon /> */}
                                </div>
                            </div>
                        </GlowingStarsBackgroundCard>
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>
                                    The power of full-stack to the frontend.
                                    Read the release notes.
                                </GlowingStarsDescription>
                                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                    {/* <Icon /> */}
                                </div>
                            </div>
                        </GlowingStarsBackgroundCard>
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>
                                    The power of full-stack to the frontend.
                                    Read the release notes.
                                </GlowingStarsDescription>
                                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                    {/* <Icon /> */}
                                </div>
                            </div>
                        </GlowingStarsBackgroundCard>
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>
                                    The power of full-stack to the frontend.
                                    Read the release notes.
                                </GlowingStarsDescription>
                                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                    {/* <Icon /> */}
                                </div>
                            </div>
                        </GlowingStarsBackgroundCard>
                    </div>
                    {/* <FocusCards cards={cards} /> */}
                </div>
            </div>
        </div>
    );
}
