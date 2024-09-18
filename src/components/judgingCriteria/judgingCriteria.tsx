
"use client";

import React from 'react';
import Image from 'next/image';
import judge1 from './assets/judge1.svg';
import judge2 from './assets/judge2.svg';
import judge3 from './assets/judge3.svg';
import judge4 from './assets/judge4.svg';
import JudgingCard from './judgeCard';
import Curl from './assets/curl.svg';

export default function JudgingCriteria() {
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex items-start justify-center bg-gradient-to-b from-blue-400 via-purple-400 to-purple-500 border-white border-2 p-6 flex-col lg:flex-row">

            <div className=" w-full lg:w-2/5 text-left pr-8">
                <h2 className="text-black font-bold text-5xl lg:text-8xl mb-4 pt-12 lg:pt-16 lg:pl-8 ">Projects selection criteria</h2>
                <h3 className="text-black text-md lg:text-xl pt-4 lg:pt-8 lg:pl-8">
                    Submit one core user flow in FlutterFlow that utilizes AI and is aligned with the "for good" theme of creating a positive impact in people's lives. Each entry will be rated by judges on a scale of 0 to 10 against the following rubric:
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
                    content="Impress us with your tech skills! Use FlutterFlow and AI to create something functional, seamless, and innovative."
                />
                <JudgingCard
                    svg={judge3}
                    title="DESIGN"
                    content="Wow us with your design! Make your project user-friendly, visually stunning, and a joy to navigate."
                />
                <JudgingCard
                    svg={judge4}
                    title="CREATIVITY"
                    content="Unleash your creativity! Bring fresh ideas and unique approaches to make your project stand out."
                />
        </div>
    );
}
