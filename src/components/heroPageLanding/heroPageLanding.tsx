import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import resource from './assets/resource.jpg';

const HeroPageLanding = () => {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center border-white border-2 text-white">
            <div
                className="w-full rounded-3xl flex flex-col items-center justify-between border-white border-2 relative bg-cover bg-center p-8 md:p-16"
                style={{ backgroundImage: `url(${resource.src})` }}
            >
                <div className="flex flex-col items-start w-full max-w-6xl">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-8xl mb-8">
                        <br />
                        GenHack'24
                        <br />
                        AI for Good Hackathon
                    </h1>

                    {/* Content with image */}
                    <div className="flex flex-col md:flex-row items-start justify-between w-full">
                        {/* Text section */}
                        <div className="md:w-2/3 lg:w-1/3 pr-4">
                            <p className=" md:text-lg lg:text-xl mb-4">
                                Join us for FlutterFlow's AI for Good Hackathon
                                in the weeks leading up to our annual
                                FlutterFlow Developer Conference (FFDC)!
                            </p>
                            <p className=" md:text-lg lg:text-xl mb-4">
                                The winners will be announced at{' '}
                                <Link
                                    href="https://ffdc.io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:underline"
                                >
                                    FFDC Sept 17 in NYC.
                                </Link>
                            </p>
                        </div>

                        {/* Image section */}
                        <div className="md:w-1/3 mt-4 md:mt-0">
                            <div className="relative w-full h-20 md:h-48 lg:h-68">
                                <Image
                                    src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a515445306b41365254ab7_66a3b9293749ab000dc7ae63%201.webp"
                                    alt="FlutterFlow Hackathon"
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default HeroPageLanding;
