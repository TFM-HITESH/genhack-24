import React from 'react';

type Props = {};

export default function Timeline({}: Props) {
    return (
        <div className="w-full rounded-3xl flex flex-col items-center justify-center bg-fuchsia-400 border-white border-2">
            timeline : AKSHAY
            <p>Use dotted timeline instead of just list</p>
            <p>
                Try to use some scroll effects so that it comes into view as you
                go down
            </p>
            <p>Refer to timeline given on grp as discussed</p>
        </div>
    );
}
