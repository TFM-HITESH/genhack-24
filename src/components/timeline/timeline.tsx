'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Timeline } from '@/components/ui/timeline';
import { TextHoverEffectGen } from './textHoverEffectTim';

export default function TimelineComponent() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Avoid rendering on the server
    }

    const data = [
        {
            title: '11:00-11:10',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Introduction to GenHack'24
                    </p>
                </div>
            ),
        },
        {
            title: '11:10-12:40',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Workshop 1 : Basics of AI, Pre-processing, LLM Fine
                        tuning
                    </p>
                </div>
            ),
        },
        {
            title: '12:45-13:20',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Guest Lecture by Industry Expert
                    </p>
                </div>
            ),
        },
        {
            title: '13:20-13:30',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Venue Change Announcement(Shift to MGB 206/207) + Track
                        Announcement
                    </p>
                </div>
            ),
        },
        {
            title: '13:30-14:15',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Lunch Break
                    </p>
                </div>
            ),
        },
        {
            title: '14:15-14:35',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Team Creation and Onboarding on InteractNow platform
                    </p>
                </div>
            ),
        },
        {
            title: '14:35-16:00',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Workshop 2 (Optional) : Mini LLM Project + Start of
                        Hackathon
                    </p>
                </div>
            ),
        },
        {
            title: '16:00-17:45',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Hacking Session
                    </p>
                </div>
            ),
        },
        {
            title: '17:45-18:30',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Judging Session 1
                    </p>
                </div>
            ),
        },
        {
            title: '18:30-19:30',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Final Judging and Pitching by top Teams + LLM Game for
                        Disqualified Teams
                    </p>
                </div>
            ),
        },
        {
            title: '19:45-20:15',
            content: (
                <div className="flex items-center">
                    <p className="text-neutral-200 dark:text-neutral-200 text-sm md:text-3xl font-normal mb-4">
                        Prize distribution (Photos with dignitaries,
                        E-certificates to be mailed later)
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center border-2 border-white relative bg-cover bg-center font-sans tracking-wide">
            <Timeline data={data} />
        </div>
    );
}
