'use client';
import Image from 'next/image';
import Link from 'next/link';

interface ResourceCardProps {
    svg: string;
    title: string;
    content: string;
    rotateamt: string;
    link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
    svg,
    title,
    content,
    rotateamt,
    link,
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
            <Link
                href={link}
                target="_blank"
                className="text-black bg-indigo-600 text-2xl p-2 rounded-xl mt-8 "
            >
                Click Here
            </Link>
        </div>
    );
};

export default ResourceCard;
