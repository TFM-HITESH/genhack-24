'use client';

import { useEffect, useState } from 'react';
import RotateText from '../styleComponents/RotateText';

const StayTunedComponent = () => {
    const [differenceInSeconds, setDifferenceInSeconds] = useState(0);
    const targetTime = new Date('2024-09-27T14:00:00');

    // Update the difference every second
    useEffect(() => {
        const calculateDifference = () => {
            const now = new Date();
            const difference = Math.floor(
                (targetTime.getTime() - now.getTime()) / 1000
            );
            setDifferenceInSeconds(difference);
        };

        calculateDifference(); // Initial calculation

        const intervalId = setInterval(() => {
            calculateDifference(); // Recalculate every second
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetTime]);

    // Calculate the remaining time components
    const days = Math.floor(differenceInSeconds / 86400)
        .toString()
        .padStart(2, '0');
    const hours = Math.floor((differenceInSeconds % 86400) / 3600)
        .toString()
        .padStart(2, '0');
    const minutes = Math.floor((differenceInSeconds % 3600) / 60)
        .toString()
        .padStart(2, '0');
    const seconds = (differenceInSeconds % 60).toString().padStart(2, '0');

    return (
        <div className="w-full rounded-3xl flex flex-row items-center p-16 justify-center border-white border-2 font-ripped-off">
            <div className="flex flex-row gap-x-8 justify-between w-1/2">
                <div className="flex flex-col items-center">
                    <div className="flex font-bold text-[6rem] bg-gradient-to-b from-[#6256CA] to-[#8967B3] p-4 items-center justify-center rounded-lg">
                        {days}
                    </div>
                    <div className="text-2xl p-2">DAYS</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex font-bold text-[6rem] bg-gradient-to-b from-[#6256CA] to-[#8967B3] p-4 items-center justify-center rounded-lg">
                        {hours}
                    </div>
                    <div className="text-2xl p-2">HOURS</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex font-bold text-[6rem] bg-gradient-to-b from-[#6256CA] to-[#8967B3] p-4 items-center justify-center rounded-lg">
                        {minutes}
                    </div>
                    <div className="text-2xl p-2">MINUTES</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex font-bold text-[6rem] bg-gradient-to-b from-[#6256CA] to-[#8967B3] p-4 items-center justify-center rounded-lg">
                        {seconds}
                    </div>
                    <div className="text-2xl p-2">SECONDS</div>
                </div>
            </div>
            <div className="flex flex-col w-1/2">
                {/* <div className="flex items-center font-bold text-[4rem]">
            STAY TUNED!
          </div> */}
                <RotateText
                    content={[
                        'STAY TUNED!',
                        'WE HAVE A STORM IN STORE!',
                        'MARK YOUR CALENDARS!',
                        'SEE YOU THERE :)',
                    ]}
                />
                {/* <div></div> */}
                <div></div>
            </div>
        </div>
    );
};

export default StayTunedComponent;
