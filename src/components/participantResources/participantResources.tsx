'use client';
import React from 'react';
// import Link from 'next/link';
import resource from './assets/resource.jpg';
import ResourceCard from './ResourceCard';
import cardComp1 from './assets/cardComp1.svg';
import cardComp2 from './assets/cardComp2.svg';
import cardComp3 from './assets/cardComp3.svg';
import cardComp4 from './assets/cardComp4.svg';

export default function ParticipantResources() {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center border-white border-2">
            {/* participantResources : ANISHA
            <p>Try to get the rotation effect working by hover:rotate-[]</p>
            <p>
                When working with Parth to create the resources, kinda try
                following these classficiations of resources. theyre good
            </p>
            <p>make changes as per will</p> */}
            <div
                className=" w-full rounded-3xl flex flex-col items-center justify-center border-white border-2 relative bg-cover bg-center md:p-16 "
                style={{ backgroundImage: `url(${resource.src})` }}
            >
                <div className="relative z-10 text-white p-8">
                    <div></div>
                    <h2 className=" text-5xl md:text-8xl lg:mb-2 text-left md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out">
                        Each Participant
                    </h2>
                    <h2 className="text-5xl text-bold  md:text-8xl  text-left md:hover:-translate-y-4 md:hover:scale-105  transition-all duration-200 ease-in-out">
                        will be provided with these
                    </h2>
                    <h2 className="text-5xl text-bold  md:text-8xl  text-left  mb-4 md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out">
                        resources
                    </h2>

                    <h3 className="text-l lg:text-xl text-left mt-6 mb-12 border-b-2 border-transparent hover:border-b-2 hover:border-white transition-all duration-200 ease-in-out md:w-1/2 ">
                        Get a jump start on building AI-powered apps with
                        templates and how-to videos.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-12 mx-auto w-[100%] md:mt-24">
                        <ResourceCard
                            svg={cardComp1}
                            title="Template"
                            content="Use our streaming Gemini API chat template to quickly get started experimenting with AI"
                            rotateamt="-4"
                            translateamt="1"
                        />
                        <ResourceCard
                            svg={cardComp2}
                            title="AI tools"
                            content="Use the built-in Gemini action or quickly import OpenAI or other APIs with our YAML importer"
                            rotateamt="3"
                        />
                        <ResourceCard
                            svg={cardComp3}
                            title="How Tos"
                            content="Explore our YouTube channel for tips on integrating the neest mulltimodal models into your app, like GPT-4o."
                            rotateamt="-5"
                        />
                        <ResourceCard
                            svg={cardComp4}
                            title="Webinars"
                            content="Join one or both of our HAckathon webinars with details on how to get started building an AI-powered project"
                            rotateamt="2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
