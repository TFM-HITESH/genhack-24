import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Timeline() {
     useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Animation 
        });
    }, 
               []
              );
    const events = [
        { id: 1, time: '8:30 - 10:30 ', title: 'Workshop', description: 'We will be conducting' },
        { id: 2, time: '10:30 - 11', title: 'Game', description: 'We will be playing a game related to' },
        { id: 3, time: '11:00', title: 'Track reveal ', description: 'We will be revealing' },
        { id: 4, time: '11:00 - 12:30', title: 'code', description: 'You will have to start coding'},
        { id: 5, time: '12:30 - 1:30', title: 'lunch', description: 'Lunch break'},
        { id: 6, time: '4:00', title: 'judging', description: 'judging'},
        { id: 7, time: '6:00', title: 'Pitch in roud', description: 'Pitch your code and idea to the judges'},
        { id: 8, time: '7:30', title: 'Prize distribution', description: 'Event comes to an end and the winners get the prize'},
    ];

    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-fuchsia-400 border-white border-2">
            {/*timeline : AKSHAY
            <p>Use dotted timeline instead of just list</p>
            <p>
                Try to use some scroll effects so that it comes into view as you
                go down
            </p>
            <p>Refer to timeline given on grp as discussed</p>*/}
        </div
                <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-fuchsia-400 border-white border-2 py-8 ">
    );
}
