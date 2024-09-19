import Image from 'next/image';
import Link from 'next/link';
import resource from './assets/resource.webp';
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview';
const AboutSection = () => {
  return (
    <section
    id="prizes"
    className="w-full rounded-3xl flex flex-col items-center justify-center border-2 border-white relative bg-cover bg-center font-sans tracking-wide"
    style={{
        backgroundImage: `url(${resource.src})`}}
    >

<div className="text-white text-4xl md:text-6xl lg:text-8xl text-center px-11 py-11 flex flex-col items-center mt-[6rem]">
        <div className="relative flex flex-wrap items-center justify-center">
          <span>Hack solo or as a</span>
          <div className="inline-block w-[120px] h-[60px] mx-2 relative">
            <div className="relative "style={{ top:'0%', transform: 'translateY(30%)' }}>
              <AnimatedTooltipPreview />
            </div>
          </div>
          <span className="ml-[20px]">team.</span>
        </div>
        <div className="mt-4">Compete for amazing prizes.</div>
      </div>
    <div className="text-white text-md md:text-lg lg:text-xl text-center w-1/2 py-22">
    FFDC 2024 Virtual Hackathon is an open call, you don’t have 
     to attend FFDC in person. Some geographic restrictions apply.
     Team size is 4(fixed)<br/><br/>
    </div>
    <button type="button" className="py-4 px-7 me-2 mb-2 text-xs text-black focus:outline-none 
    bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
    focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
    dark:hover:text-white dark:hover:bg-gray-700 my-7 mb-[10rem]">SEE THE OFFICIAL RULES</button> 
    <br />
  </section>
  
  );
};

export default AboutSection;
