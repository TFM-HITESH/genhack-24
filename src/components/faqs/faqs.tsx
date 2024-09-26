'use client';

import React from 'react';
import { Accordion } from './ui/accordion';
import { AccordionContent } from './ui/accordion';
import { AccordionItem } from './ui/accordion';
import { AccordionTrigger } from './ui/accordion';
import { LampContainer } from '../ui/lamp';
import { motion } from 'framer-motion';
import { TextHoverEffectGen } from './textHoverEffectGen';
import { CardSpotlight } from '../ui/card-spotlight';

export default function Faqs() {
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center bg-black md:p-[8rem] p-[1rem]">
            {/* <span className="text-4xl font-bold px-6 py-6 mb-20 text-stone-50 rounded-md bg-gradient-to-r from-purple-700 to-violet-500">
                Frequently Asked Questions
            </span> */}
            <TextHoverEffectGen />
            <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                    {/* <AccordionTrigger>
                        Where to find water in rajasthan ?
                    </AccordionTrigger>
                    <AccordionContent>lol</AccordionContent> */}
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What is a GenHack'24?</AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        GenHack'24 is a hackathon cum workshop where we train
                        you to become proficient in using LLM's for all your
                        future AI projects. We will have a workshop along with a
                        guest lecture where you can learn all about LLMs and
                        their use cases. After that, we shall have our hackathon
                        where you will be given 4 unique tracks to work with to
                        create the most creative, innovative and interesting
                        solutions you can think of!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        What tools and technologies can we use?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        You will be given access to all the material that is
                        used during the workshop. They will contain some basic
                        pre-trained as well as fine tuned models which you can
                        use with clever prompting. Apart from that, you are free
                        to find your own pre-trained models from cloud platforms
                        such as Huggingface. The same goes for datasets. You can
                        also use API keys (at your own expense!) but points will
                        be deducted accordingly for using a pre-existing
                        solution.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        Do I need to have a team?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        Yes, as per the Gravitas'24 rules, you will have to
                        participate in GenHack'24 in a team of exactly 4
                        members.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>
                        Are there any prerequisites for participation?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        The only prerequisite for GenHack'24 is a basic
                        understanding of python and a willingness to learn.
                        Apart from that, ensure you get your Laptops for the
                        hackathon.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>
                        Will there be any workshops or mentorship sessions?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        Yes, we have scheduled workshops and mentorship sessions
                        on various topics such as prompt engineering, model
                        fine-tuning, and deploying generative AI solutions. The
                        2nd session is optional but highly recommended for
                        participants who want to learn more by trying to build a
                        project during the workshop.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>
                        How do we submit our projects?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        We are partnering with InteractNow for Hackathon
                        Management. All colab notebook submissions shall occur
                        on their website under your team by the team leader.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                    <AccordionTrigger>
                        Where can I get help if I run into technical issues?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        This is a learning hackathon. You are encouraged to ask
                        doubts to the support team that will be available
                        throughout the event. We are here to help you learn
                        everything about LLMs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                    <AccordionTrigger>
                        Where will updates and communications occur?
                    </AccordionTrigger>
                    <AccordionContent className=" font-light text-white/40 tracking-wide">
                        All communications shall happen on the official Whatsapp
                        group as well as announcements on InteractNow. Please
                        ensure that you have joined the group as well as joined
                        our hackathon on Interact.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
