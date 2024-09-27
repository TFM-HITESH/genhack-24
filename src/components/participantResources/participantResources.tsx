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
        <div className="w-full rounded-3xl flex flex-col items-center justify-center border-white border-2 font-ripped-off">
            {/* participantResources : ANISHA
            <p>Try to get the rotation effect working by hover:rotate-[]</p>
            <p>
                When working with Parth to create the resources, kinda try
                following these classficiations of resources. theyre good
            </p>
            <p>make changes as per will</p> */}
            <div
                className=" w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center relative bg-cover bg-center md:p-16 "
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
                        Get a jump start on building your AI models with
                        templates and how-to videos.
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-12 mx-auto w-[100%] md:mt-24">
                        <ResourceCard
                            svg={cardComp1}
                            title="Research Papers and Blogposts"
                            content="This is the best way to strengthen your fundamentals. Get your hands dirty by following our selection of blogposts to truly understand LLMs"
                            rotateamt="-4"
                            link="https://docs.google.com/document/d/1KUJbJ919NAN4ELaJnzBuzfuGTuHZF9zp/edit?usp=drivesdk&ouid=109819696713728919448&rtpof=true&sd=true"
                        />
                        <ResourceCard
                            svg={cardComp2}
                            title="Pre-trained Models"
                            content="Refer to our curated collection of pre-trained models for you to fine-tune and prompt for your amazing project"
                            rotateamt="3"
                            link="https://docs.google.com/document/d/1KQYVtZXlexTK4wbuGxVvgHENnKC5D4g6/edit?usp=drivesdk&ouid=109819696713728919448&rtpof=true&sd=true"
                        />
                        <ResourceCard
                            svg={cardComp3}
                            title="Video Guides"
                            content="Enjoy our carefully vetted selection of YouTube videos and playlists which teach you everything you can ever want to know about LLMs"
                            rotateamt="-5"
                            link="https://docs.google.com/document/d/1KSbvJ5Du8oOa_dXGtcMlDO_SBMuGZiNL/edit?usp=drivesdk&ouid=109819696713728919448&rtpof=true&sd=true"
                        />
                        <ResourceCard
                            svg={cardComp4}
                            title="Workshop"
                            content="Leverage our carefully crafted notebooks from our workshops to build your dream model. This shall be your most powerful ally"
                            rotateamt="2"
                            link="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
