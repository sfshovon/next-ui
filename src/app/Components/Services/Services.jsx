const Services = () => {
  return (
    <div className="mb-4 p-6 flex-shrink rounded-3xl bg-white" style={{ boxShadow: "4px 8px 36px 12px rgba(39, 48, 57, 0.06)" }}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-4xl font-bold text-[#273039] w-full md:w-1/2 mb-6 md:mb-0">Our Services made for you</h1>
        <p className="text-lg text-[#96999F] w-full md:w-1/2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="flex justify-center items-start gap-2">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="79" height="79" rx="7.5" fill="#E2EEFF" stroke="#3780EF"/>
          </svg>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-xl text-[#273039] font-bold">Subtle</h4>
            <p className="text-lg text-[#96999F]">It is a long established fact that a reader content</p>
          </div>
        </div>
        <div className="flex justify-center items-start gap-2">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="79" height="79" rx="7.5" fill="#E2EEFF" stroke="#3780EF"/>
          </svg>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-xl text-[#273039] font-bold">Subtle</h4>
            <p className="text-lg text-[#96999F]">It is a long established fact that a reader content</p>
          </div>
        </div>
        <div className="flex justify-center items-start gap-2">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="79" height="79" rx="7.5" fill="#E2EEFF" stroke="#3780EF"/>
          </svg>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-xl text-[#273039] font-bold">Subtle</h4>
            <p className="text-lg text-[#96999F]">It is a long established fact that a reader content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
