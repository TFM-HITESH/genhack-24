import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import resource from './assets/resource.jpg';
import { Cover } from '../ui/cover';

const HeroPageLanding = () => {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center border-white border-2 text-white">
            <div
                className="w-full rounded-3xl flex flex-col items-center justify-between border-white border-2 relative bg-cover bg-center p-8 md:p-16"
                style={{ backgroundImage: `url(${resource.src})` }}
            >
                <div className="flex flex-col items-start w-full my-10">
                    {/* Title */}
                    <p className="text-4xl md:text-8xl lg:mb-2 text-left md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out tracking-widest font-extralight">
                        GenHack'24
                    </p>
                    <div className="text-2xl md:text-6xl lg:mb-2 text-left ease-in-out tracking-widest font-extralight">
                        A Gen AI Experience brought to you by{' '}
                        <Cover>ISA-VIT</Cover>
                    </div>

                    {/* Content with image */}
                    <div className="flex flex-col md:flex-row items-start justify-between w-full mt-[4rem] md:mt-[6rem]">
                        {/* Text section */}
                        <div className="md:w-1/2 pr-4">
                            <p className=" md:text-xl lg:text-xl mb-4 tracking-widest font-extralight">
                                Join us for a cutting-edge Generative AI
                                Hackathon cum Workshop that pushes the
                                boundaries of creativity and innovation! Tackle
                                our innovative and groundbreaking problem tracks
                                that challenge your skills, from revolutionizing
                                digital experiences to creating generative AI
                                solutions with real-world impact. Whether you're
                                an AI enthusiast or a coding wizard, this is
                                your chance to shine. Get inspired by an
                                exclusive workshop from a top industry expert,
                                offering insider knowledge and strategies and
                                much more. Collaborate and compete in teams of
                                upto 4 members and innovate your way to exciting
                                prizes. Be a part of the future of AI—this is
                                where it all begins!
                            </p>
                        </div>

                        {/* Image section */}
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <div className="relative w-full h-20 md:h-48 lg:h-68 scale-125 animate-breathe">
                                <Image
                                    src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a515445306b41365254ab7_66a3b9293749ab000dc7ae63%201.webp"
                                    alt="GenHack Hackathon"
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
