import React from 'react';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

export function TextHoverEffectGen() {
    return (
        <div className="h-[15rem] flex items-center justify-center rounded-3xl  w-full bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900">
            <TextHoverEffect text="FAQs" />
        </div>
    );
}
