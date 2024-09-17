"use client";
import Image from 'next/image';

interface ResourceCardProps {
    svg: string; 
    title: string;        
    content: string;  
}

const ResourceCard: React.FC<ResourceCardProps> = ({ svg, title, content }) => {
    
    return (
        <div className="w-full bg-[#F5F5F5] p-6 rounded-2xl flex flex-col flex-wrap items-center hover:rotate-3 " >

            <Image src={svg} alt="template" className="mb-4" />
            <h2 className="text-black text-center text-xl font-bold mb-2">
                {title}
            </h2>
            <h4 className="text-black text-center text-sm overflow-hidden">
                {content}
            </h4>
        </div>
    );
}

export default ResourceCard;
