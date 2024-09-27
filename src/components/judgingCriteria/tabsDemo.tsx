'use client';

import judge1 from './assets/judge1.svg';
import judge2 from './assets/judge2.svg';
import judge3 from './assets/judge3.svg';
import judge4 from './assets/judge4.svg';

import Image from 'next/image';
import { Tabs } from '../ui/tabs';
import JudgingCard from './judgeCard';

export function TabsDemo() {
    const tabs = [
        {
            title: 'IMPACT',
            value: 'impact',
            content: (
                <JudgingCard
                    svg={judge1}
                    title="IMPACT"
                    content="Show us how your project can make a real difference! Think about how it solves big problems and benefits the community."
                />
            ),
        },
        {
            title: 'TECHNICAL IMPLEMENTATION',
            value: 'technical_implementation',
            content: (
                <JudgingCard
                    svg={judge2}
                    title="TECHNICAL IMPLEMENTATION"
                    content="Impress us with your understanding of tech! Use what you learnt today to build something amazing!"
                />
            ),
        },
        {
            title: 'UNIQUE FEATURES',
            value: 'unique_features',
            content: (
                <JudgingCard
                    svg={judge3}
                    title="UNIQUE FEATURES"
                    content="Each unique and useful feature you add that the others haven't puts you a step above the rest!"
                />
            ),
        },
        {
            title: 'CREATIVITY',
            value: 'creativity',
            content: (
                <JudgingCard
                    svg={judge4}
                    title="CREATIVITY"
                    content="Unleash your creativity! Bring fresh ideas and unique approaches to make your project stand out."
                />
            ),
        },
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
            <Tabs tabs={tabs} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
