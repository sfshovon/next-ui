import { Button } from "@nextui-org/react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="px-6 md:px-0 mt-6 md:mt-32 flex flex-col justify-center items-center">
      <div className="flex justify-center items-start md:gap-x-20">
        <div className="hidden md:flex justify-start relative animated-text-left">
          <div className="mt-4">
            <Image
              width={56}
              height={56}
              alt="User"
              src="/user-1.png"
            />
          </div>
          <div>
          <svg width="21" height="29" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75922 26.7917C15.8454 22.5429 19.527 9.42274 19.7646 5.66012L20.336 0.743662C14.2098 -1.13691 -0.494336 1.16869 3.46702 10.48C8.45019 22.1931 -7.74901 32.4821 5.75922 26.7917Z" fill="#CFFFA9"/>
          </svg>
          </div>
          <div className="absolute -mt-20 top-0 left-10 h-[48px] w-[335px] bg-[#CFFFA9] rotate-[-17deg] rounded-full p-2">
            <h4 className="mx-2">
              <span> ❤ </span>
              fact that a reader will be distracted
            </h4>
          </div>
        </div>
        <div className="flex flex-col md:gap-6">
          <p className="px-6 text-xl md:text-7xl font-bold">
            Your Ultimate All-in-One
          </p>
          <p className="text-xl md:text-7xl font-bold">
            Solution for Job Seekers! 🚀
          </p>
        </div>   
        <div className="hidden md:flex justify-start relative animated-text-right">
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.8096 25.377C7.90109 22.569 2.1632 10.2041 1.35034 6.54805L0.0225376 1.8059C5.9711 -0.861432 21.2838 -0.579343 18.6662 9.08025C15.3733 21.2315 33.4192 29.1377 18.8096 25.377Z" fill="#C5F0FF"/>
          </svg>
          <div className="absolute -mt-16 top-0 right-10 h-[48px] w-[335px] bg-[#C5F0FF] rotate-[9deg] rounded-full p-2">
            <h4 className="mx-2">
              <span> 👑 </span>
               fact that a reader will be distracted
            </h4>
          </div>
          <div className="mt-4">
            <Image
              width={56}
              height={56}
              alt="User"
              src="/user-2.png"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-8 text-xl md:text-center text-[#96999F]">
        <p className="px-2 md:px-0">It is a long established fact that a reader will be{" "}
        <span className="text-black">distracted by</span> 🔥 the <br />{" "}
        readable <span className="text-black">content of a page</span> 💼
        when looking at its layout.
        </p>
      </div>
      <div className="mt-14 flex justify-center items-center md:gap-x-40">
        <div className="hidden md:flex justify-start relative animated-text-left">
          <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.3349 24.968C9.27616 22.8271 2.79858 10.8332 1.76538 7.23311L0.152287 2.58027C5.92804 -0.443091 21.2297 -1.09065 19.2029 8.70998C16.6534 21.0386 35.1458 27.8353 20.3349 24.968Z" fill="#FFD9D9"/>
          </svg>
          <div className="absolute -mt-16 top-0 right-10 h-[48px] w-[335px] bg-[#FFD9D9] rotate-[9deg] rounded-full p-2">
            <h4 className="mx-2">
              <span> 👑 </span>
              fact that a reader will be distracted
            </h4>
          </div>
          <div className="mt-4">
            <Image
              width={56}
              height={56}
              alt="User"
              src="/user-3.png"
            />
          </div>
        </div>
      <div className="flex flex-col justify-center items-center gap-y-6 animated-text-bottom">
        <Button color="primary" size="lg">
          Get Started
        </Button>
        <Image
          width={171}
          height={80}
          alt="TrustPilot"
          src="/rating.png"
        />
      </div>
      <div className="hidden md:flex justify-start relative animated-text-right">
        <div className="mt-4">
          <Image
            width={56}
            height={56}
            alt="User"
            src="/user-4.png"
          />
        </div>
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.74754 24.6954C16.5551 22.9694 23.2538 11.1026 24.3801 7.50471L26.1054 2.86557C20.6028 -0.419122 5.7725 -1.67966 7.40373 8.30691C9.45573 20.8695 -8.7269 27.0071 5.74754 24.6954Z" fill="#FEFFC9"/>
        </svg>
        <div className="absolute -mt-20 top-0 left-10 h-[48px] w-[335px] bg-[#FEFFC9] rotate-[-17deg] rounded-full p-2">
          <h4 className="mx-2">
            <span> 💥 </span>
             fact that a reader will be distracted
          </h4>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
