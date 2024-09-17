'use client';
import Image from 'next/image';

interface ResourceCardProps {
    svg: string;
    title: string;
    content: string;
    rotateamt: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
    svg,
    title,
    content,
    rotateamt,
}) => {
    return (
        <div
            className={`w-full bg-[#F5F5F5] p-4 md:p-8 rounded-2xl md:rounded-[3rem] flex flex-col flex-wrap items-center hover:rotate-3 transition-all duration-300 ease-in-out`}
            style={{
                rotate: `${rotateamt}deg`,
            }}
        >
            <Image src={svg} width={80} alt="template" className="mb-8" />
            <h2 className="text-black text-center text-4xl mb-12 font-extralight">
                {title}
            </h2>
            <h4 className="text-black text-center text-lg overflow-hidden">
                {content}
            </h4>
        </div>
    );
};

export default ResourceCard;
