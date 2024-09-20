import React from "react";
import Line from "../subComponents/Line";

const ourValues = [
  {
    id: 1,
    title: "100% Commitment",
    description:
      "Delivering with 100% commitment to quality, reliability, and customer satisfaction every time.",
  },
  {
    id: 2,
    title: "Affordable Budget",
    description:
      "Offering top-quality services tailored to fit your needs at an affordable budget.",
  },
  {
    id: 3,
    title: "On Time Delivery",
    description:
      "Ensuring reliable, on-time delivery to meet your deadlines with precision and efficiency.",
  },
];

const OurValueSection = () => {
  return (
    <div className="bg-[#F2F5EF]">
      <div className=" py-[32px] max-w-screen-xl mx-auto lg:px-12">
        <div className="pb-4 font-medium text-[30px] sm:text-[36px] max-w-[375px] mx-auto sm:max-w-[440px] md:max-w-[600px] lg:max-w-screen-xl lg:mr-auto lg:text-[50px] lg:mb-5">
          <h1 className="max-w-[550px] leading-[120%] mr-auto">Why Us?</h1>
        </div>
        <div className="lg:px-12">
          <Line customStyles="customLine" />
        </div>
        {ourValues.map((data) => (
          <div key={data.id} className="flex flex-col max-w-[850px] mx-auto">
            <div className="flex w-full max-w-[324px] mx-auto sm:max-w-[440px] md:max-w-[600px] lg:max-w-[840px] lg:mx-0 ">
              <div className="w-24">
                <h2 className="text-[50px]">0{data.id}</h2>
              </div>
              <div className=" w-full items-center sm:max-w-[440px] md:max-w-[600px]  lg:max-w-screen-lg lg:flex lg:justify-between">
                <div>
                  <h2 className="text-2xl font-medium text-[#2C2C2C] text-nowrap">
                    {data.title}
                  </h2>
                </div>
                <div>
                  <p className="text-sm text-[#4C4C4C] max-w-[324px]">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Line customStyles="customLine" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValueSection;
