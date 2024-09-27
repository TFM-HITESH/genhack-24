'use client';

import React from 'react';
import Image from 'next/image';
import judge1 from './assets/judge1.svg';
import judge2 from './assets/judge2.svg';
import judge3 from './assets/judge3.svg';
import judge4 from './assets/judge4.svg';
import JudgingCard from './judgeCard';
import Curl from './assets/curl.svg';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from '../ui/text-reveal-card';
import { MaskContainer } from '../ui/svg-mask-effect';

export default function JudgingCriteria() {
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex items-start justify-center bg-gradient-to-b from-fuchsia-700 via-purple-800 to-violet-00 border-white border-2 p-6 flex-col lg:flex-row">
            <div className=" w-full lg:w-2/5 text-left pr-8">
                <h2 className="text-black font-bold text-5xl lg:text-8xl mb-4 pt-12 lg:pt-16 lg:pl-8 ">
                    Judging criteria
                </h2>
                <h3 className="text-black text-md lg:text-xl pt-4 lg:pt-8 lg:pl-8 tracking-widest font-extralight">
                    It is important for all the participants to remember that we
                    are judging your submissions based on the creativity and
                    innovation you display. Quality and Complexity of code is
                    not everything in this competition. More than anything, we
                    shall test your understanding of the code that you have
                    written. A simple yet quirky and interesting agent that
                    draws attention is our ideal candidate :)
                </h3>
                {/* <Image src={Curl} width={400} alt="template" className='pt-36 pl-44'/> */}
            </div>

            <div className=" w-full lg:w-3/5 flex flex-col lg:items-center space-y-6 pt-4">
                <JudgingCard
                    svg={judge1}
                    title="IMPACT"
                    content="Show us how your project can make a real difference! Think about how it solves big problems and benefits the community."
                />
                <JudgingCard
                    svg={judge2}
                    title="TECHNICAL IMPLEMENTATION"
                    content="Impress us with your understanding of tech! Use what you learnt today to build something amazing!"
                />
                <JudgingCard
                    svg={judge3}
                    title="UNIQUE FEATURES"
                    content="Each unique and useful feature you add that the others haven't puts you a step above the rest!"
                />
                <JudgingCard
                    svg={judge4}
                    title="CREATIVITY"
                    content="Unleash your creativity! Bring fresh ideas and unique approaches to make your project stand out."
                />
            </div>
        </div>
    );
}
