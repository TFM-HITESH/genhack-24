import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-teal-400 border-white border-2">
            navbar : PARTH GOYAL
            <p>
                Refer to - https://ui.aceternity.com/components/floating-navbar
            </p>
            <p>
                Refer to -
                https://www.braydoncoyer.dev/blog/build-a-glassmorphic-navbar-with-tailwindcss-backdrop-filter-and-backdrop-blur
            </p>
        </div>
    );
}
