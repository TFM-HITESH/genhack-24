import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useEffect, useState } from 'react';

export default function RotateText() {
    const words = ['REGISTER NOW !', 'gravitas.vit.ac.in', 'JOIN THE HACK !'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <AnimatePresence mode="wait">
            <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]"
            >
                {words[index]}
            </motion.h1>
        </AnimatePresence>
    );
}
