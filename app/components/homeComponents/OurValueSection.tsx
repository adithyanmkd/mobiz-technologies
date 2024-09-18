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
    title: "on time Delivery",
    description:
      "Ensuring reliable, on-time delivery to meet your deadlines with precision and efficiency.",
  },
];

const OurValueSection = () => {
  return (
    <div className="bg-[#F2F5EF] py-[32px]">
      <Line customStyles="max-w-[324px] mx-auto my-[16px] bg-black" />
      {ourValues.map((data) => (
        <div key={data.id} className="flex flex-col">
          <div className="flex max-w-[324px] mx-auto">
            <div>
              <h2 className="text-[50px] mr-[37px]">0{data.id}</h2>
            </div>
            <div className="grid grid-cols-1 space-y-[14px]">
              <div>
                <h2 className="text-2xl font-medium text-[#2C2C2C]">
                  {data.title}
                </h2>
              </div>
              <div>
                <p className="text-sm text-[#4C4C4C]">{data.description}</p>
              </div>
            </div>
          </div>
          <Line customStyles="max-w-[324px] mx-auto my-[16px] bg-black" />
        </div>
      ))}
    </div>
  );
};

export default OurValueSection;
