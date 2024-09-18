import React from 'react';
import Image from 'next/image';
import resource from './assets/resource.jpeg';

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="w-full rounded-3xl flex flex-col items-center justify-center border-2 border-white relative bg-cover bg-center font-sans tracking-wide"
      style={{ backgroundImage: `url(${resource.src})` }} // Using the local background image
    >
      <div className="container-large mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <br />
            <br /><br/>
            <h2 className="text-5xl lg:text-7xl text-white my-11">
              Winning Never
              <br />
              Looked So Good
            </h2>
          </div>
          <p className="text-5xl text-fuchsia-600">PRIZES</p>
        </div> 
        <br />
        <br/>
        {/* Prizes Component */}
        <div className="prizes_component">
          {/* First Row */}
          <div className="prizes_row flex items-center justify-center space-x-8">
            {/* Trophy Image */}
            <Image
              src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d89b26d3f2b504b045_Trophy.webp"
              alt="Trophy"
              width={100}
              height={100}
              className="hidden md:block"
              loading="lazy"
   
              
            />

            {/* Winner Prize */}
            <div className="text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-8 px-22">
            ₹7,000
              <br /><div className='text-2xl'>
              Winner</div>
            </div>

            {/* Flag Image */}
            <Image
              src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d8c9fbe25684e0aa84_Flag.webp"
              alt="Flag"
              width={100}
              height={100}
              className="hidden md:block"
              loading="lazy"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col lg:flex-row space-y-4 items-center justify-center space-x-8 mt-8">
            {/* Two Runner Ups Prize */}
            <div className="text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-8 my-11 px-22">
            ₹5,000
              <br /><div className='text-2xl'>
              Two runner ups</div>
            </div>

            {/* Card Image */}
            <Image
              src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d83d2c8369837e75f0_card.webp"
              alt="Card"
              width={100}
              height={100}
              className="hidden lg:block"
              loading="lazy"
            />
            
            {/* Audience Favourite Prize */}
            <div className="text-5xl font-semibold text-white text-center border-2 border-white rounded-lg sm:rounded-full p-8 my-4 px-22">
            ₹3,000
              <br /><div className='text-2xl'>
              Audience Favourites</div>
            </div>
          </div>
          <div className='flex items-center justify-center m-11'>
          <Image
              src="https://cdn.prod.website-files.com/66a50f94da6293d196f9ce88/66a635d83d2c8369837e75f0_card.webp"
              alt="Card"
              width={100}
              height={100}
              className="items-center block lg:hidden justify-center hidden md:block"
              loading="lazy"
            /></div>
          <br/><br/><br/><br/>
        </div>
      </div>
    </section>
  );
}
