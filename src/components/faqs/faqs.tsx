import React from 'react';
import { Accordion } from './ui/accordion';
import { AccordionContent } from './ui/accordion';
import { AccordionItem } from './ui/accordion';
import { AccordionTrigger } from './ui/accordion';

export default function Faqs() {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-black">
            <span className="text-4xl font-bold px-6 py-3 text-stone-50 rounded-md bg-gradient-to-r from-purple-700 to-violet-500">
                Frequently Asked Questions
            </span>
            <br></br>
            <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Where to find water in rajasthan ?
                    </AccordionTrigger>
                    <AccordionContent>lol</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What will you learn?</AccordionTrigger>
                    <AccordionContent>we don&apos;t know.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Why should you register?
                    </AccordionTrigger>
                    <AccordionContent>plj</AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
