// 'use client';
// import Image from 'next/image';

// interface JudgingCardProps {
//     svg: string;
//     title: string;
//     content: string;
// }

// const JudgingCard: React.FC<JudgingCardProps> = ({
//     svg,
//     title,
//     content,
// }) => {
//     return (
//         <div
//             className="w-[90%] border-black bg-[#F5F5F5] p-4 md:p-8 rounded-2xl md:rounded-[3rem] flex flex-col flex-wrap items-center  "
//         >
//             <Image src={svg} width={80} alt="template" className="mb-8" />
//             <h2 className="text-black text-center text-4xl mb-12 font-extralight">
//                 {title}
//             </h2>
//             <h4 className="text-black text-center text-lg overflow-hidden">
//                 {content}
//             </h4>
//         </div>
//     );
// };

// export default JudgingCard;

'use client';
import Image from 'next/image';

interface JudgingCardProps {
    svg: string;
    title: string;
    content: string;
}

const JudgingCard: React.FC<JudgingCardProps> = ({
    svg,
    title,
    content,
}) => {
    return (
        <div
            className="w-full lg:w-[90%] h-auto border-2 border-black bg-[#F5F5F5] p-4 md:p-6 rounded-xl md:rounded-2xl flex flex-col"
        >
            <Image src={svg} width={50} alt="template" className="mb-6" />
            <h2 className="text-black text-2xl font-bold mb-2 font-extralight">
                {title}
            </h2>
            <h4 className="text-black text-md  ">
                {content}
            </h4>
        </div>
    );
};

export default JudgingCard;
