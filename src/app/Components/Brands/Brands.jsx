import Image from "next/image";

const Brands = () => {
  return (
    <div className="px-6 md:px-0 my-12 md:my-24 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
      <div className="flex flex-col md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-[#3780EF]">1,15,000+</h3>
        <p className="mt-2 text-xl md:text-2xl text-[#96999F]">People from more than <span className="font-bold">100</span> countries are using our application to find their jobs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-8 justify-center items-center mt-2 md:mt-0">
        <Image
          src="/brand-1.png"
          alt="Brand"
          width={140}
          height={47}
        />
        <Image
          src="/brand-2.png"
          alt="Brand"
          width={139}
          height={43}
        />
        <Image
          src="/brand-3.png"
          alt="Brand"
          width={130}
          height={32}
        />
        <Image
          src="/brand-4.png"
          alt="Brand"
          width={176}
          height={32}
        />
        <Image
          src="/brand-5.png"
          alt="Brand"
          width={131}
          height={40}
        />
        <Image
          src="/brand-6.png"
          alt="Brand"
          width={183}
          height={47}
        />
      </div>
    </div>
  );
};

export default Brands;
