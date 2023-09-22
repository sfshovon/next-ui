import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Guidelines = () => {
  const [containerHeight, setContainerHeight] = useState('630px'); 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContainerHeight('200px');
      } 
      else {
        setContainerHeight('630px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mb-2 px-6 md:px-0 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="md:w-1/2 flex flex-col order-2 md:order-1">
        <h6 className="font-bold text-[#3780EF] text-lg">With powerful system</h6>
        <h1 className="mt-1 md:mt-2 font-bold text-[#273039] text-2xl md:text-5xl">Lorem Ipsum is not simply random</h1>
        <p className="mt-1 md:mt-4 text-[#878293] text-lg">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
       <div className="my-4 md:my-8">
        <div className="flex justify-start items-center gap-2">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="11" r="8" fill="#FF7C60"/>
              <circle cx="8" cy="8" r="8" fill="#6F4AF8"/>
            </svg>
            <span className="text-[#878293] text-lg">Looking at its layout.</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="11" r="8" fill="#FF7C60"/>
              <circle cx="8" cy="8" r="8" fill="#6F4AF8"/>
            </svg>
            <span className="text-[#878293] text-lg">It is a long established fact that.</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="11" r="8" fill="#FF7C60"/>
              <circle cx="8" cy="8" r="8" fill="#6F4AF8"/>
            </svg>
            <span className="text-[#878293] text-lg">Reader will be distracted by the readable.</span>
          </div>
          <div className="flex justify-start items-center gap-2">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="11" r="8" fill="#FF7C60"/>
              <circle cx="8" cy="8" r="8" fill="#6F4AF8"/>
            </svg>
            <span className="text-[#878293] text-lg">Content of a page when.</span>
          </div>
       </div>
       <div className="flex justify-center md:justify-start">
        <Button color="primary" size="large">Learn More</Button>
      </div>

      </div>
      <div className="md:w-1/2 order-1 md:order-2 animate-pulse">
        <Image 
          src="/guideline.png"
          alt="Guideline"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: containerHeight }}
        />
      </div>
    </div>
  );
};

export default Guidelines;