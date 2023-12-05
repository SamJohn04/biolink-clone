// MyScrollComponent.tsx
"use client"
import React, { useEffect, useState } from 'react';


const MyScrollComponent: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

    return (
        <div  className={`flex justify-center items-center w-[900px] h-[1500px] rounded-[3rem] bg-black transition-all duration-200  ${expanded ? 'opacity-90 z-5 mt-[-500px] h-[1700px] w-screen ' : ''}` } >
            <div   className='w-[1000px] h-[1500px] rounded-[3rem] bg-transparent hover:mt-[-100px]' onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}></div>
    </div >
  );
};

export default MyScrollComponent;
