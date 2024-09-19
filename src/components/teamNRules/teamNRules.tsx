import React from 'react';

import { useRouter } from 'next/router'; 

const AnimatedTooltip = ({ items }) => {
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const handleMouseEnter = (event, content) => {
    setTooltip({ visible: true, content, x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (tooltip.visible) {
        setTooltip((prev) => ({ ...prev, x: event.clientX, y: event.clientY }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [tooltip.visible]);

  return (
    <div className="relative flex flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative p-4 m-2 cursor-pointer"
          onMouseEnter={(e) => handleMouseEnter(e, item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full object-cover" />
          <div className="text-center mt-2">{item.name}</div>
        </div>
      ))}
      {tooltip.visible && (
        <div
          className="absolute p-2 text-white bg-black rounded"
          style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};
export default function TeamNRules() {
    const router = useRouter();

    const people = [
        {
            id: 1,
            name: "Person 1",
            designation: "Software Engineer",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Person 2",
            designation: "Product Manager",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Person 3",
            designation: "Product Manager",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Person 4",
            designation: "Product Manager",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
    
      ];
    return (
        <div className="w-full rounded-xl md:rounded-3xl flex flex-col items-center justify-center bg-orange-400 border-white border-2">
            teamNRules : Janavi
            <p>Add some more info. Team size = 4 (fixed)</p>
            <p>
                Rules should just be a redirect now. Will fill with pdf or
                something like that later
            </p>
            <p>
                Refer to - https://ui.aceternity.com/components/animated-tooltip
            </p>
            <div className="relative z-10 text-white p-8">
                    <h2 className="text-5xl md:text-8xl lg:mb-2 text-center md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out">
                      Collaborate and compete in teams of
                      <span className="relative inline-block">
                        <span
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 p-2 text-sm text-white bg-black rounded opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                          style={{ whiteSpace: 'nowrap' }}
                        >
                          Tooltips reveal on hover
                        </span>
                        <span className="group"> </span>
                      </span>
                    </h2>
                    <h2 className="text-5xl text-bold  md:text-8xl  text-center md:hover:-translate-y-4 md:hover:scale-105  transition-all duration-200 ease-in-out">
                        upto 4 members and innovate your way 
                    </h2>
                    <h2 className="text-5xl text-bold  md:text-8xl  text-center mb-4 md:hover:-translate-y-4 md:hover:scale-105 transition-all duration-200 ease-in-out">
                        to exciting prizes.
                    </h2>
                    <h3 className="text-l lg:text-xl text-center mt-6 mb-12 border-b-2 border-transparent hover:border-b-2 hover:border-white transition-all duration-200 ease-in-out md:w-1/2 ">
                        Genhack-24 is a cutting-edge Generative AI Hackathon cum 
                    </h3>
                    <h3 className="text-l lg:text-xl text-center mt-6 mb-12 border-b-2 border-transparent hover:border-b-2 hover:border-white transition-all duration-200 ease-in-out md:w-1/2 ">
                        Workshop that pushes the boundaries of creativity and innovation!         
                    </h3>
                    <div className="relative z-10 text-white p-8">
                        <h3 
                            className="text-xl lg:text-3xl text-center mt-6 mb-12 border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in-out cursor-pointer"
                            onClick={() => router.push('/rules')} 
                        >
                            See the official Rules
                        </h3>
                    </div>
             </div>
      </div>
  );
};
                    

        
