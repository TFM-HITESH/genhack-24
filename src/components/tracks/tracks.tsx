import React from 'react';
import resume from './assets/resume.jpg'
import { FocusCards } from '../ui/focus-cards-for-tracks';
import background4 from './assets/background4.jpg'
import ai1 from './assets/ai1.jpg';
import ai3 from './assets/ai3.jpg';
import notes1 from './assets/notes1.jpg';


export default function Tracks() {
    const cards = [
        {
            title: "TRACK 1",
            src:notes1.src,
        },
        {
            title: "SHHH.. SECRET",
            src: ai1.src,
        },
        {
            title: "RESUME BUILDING",
            src: resume.src,
        },
        {
            title: "I'LL SEE YOU AT THE EVENT!",
            src: ai3.src,
        },
        
    ];
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center bg-rose-400 border-white border-2">
            {/* <p>Discuss tracks 4 tracks</p>
            <p>2 should be shown with details, 2 are coming soon</p>
            <p>Buttons to redirect to pdf containing track info (gdrive)</p> */}
            <div
                className=" w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center relative bg-cover bg-center md:p-16 "
                style={{ backgroundImage: `url(${background4.src})` }}
            >

                <div>
                    <br></br>
                    <h2 className=" text-5xl md:text-8xl lg:mb-2 text-center md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out pb-4 lg:pb-16">
                        Tracks
                    </h2>
                    <FocusCards cards={cards}/>     

                </div>
            </div>
        </div>
    );
}
