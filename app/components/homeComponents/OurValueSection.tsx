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
      <div className="mx-auto max-w-screen-xl px-4 py-[32px] md:px-0 lg:px-12">
        <div className="mx-auto max-w-[375px] pb-4 text-[30px] font-medium sm:max-w-[440px] sm:text-[36px] md:max-w-[600px] lg:mb-5 lg:mr-auto lg:max-w-screen-xl lg:text-[50px]">
          <h1 className="mr-auto max-w-[550px] leading-[120%]">Why Us?</h1>
        </div>
        <div className="lg:px-12">
          <Line customStyles="customLine" />
        </div>
        {ourValues.map((data) => (
          <div key={data.id} className="mx-auto flex max-w-[850px] flex-col">
            <div className="mx-auto flex w-full max-w-[324px] sm:max-w-[440px] md:max-w-[600px] lg:mx-0 lg:max-w-[840px]">
              <div className="w-24">
                <h2 className="text-[50px]">0{data.id}</h2>
              </div>
              <div className="w-full items-center sm:max-w-[440px] md:max-w-[600px] lg:flex lg:max-w-screen-lg lg:justify-between">
                <div>
                  <h2 className="text-nowrap text-2xl font-medium text-[#2C2C2C]">
                    {data.title}
                  </h2>
                </div>
                <div>
                  <p className="max-w-[324px] text-sm text-[#4C4C4C]">
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
