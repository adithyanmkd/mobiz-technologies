import Image from "next/image";
import React from "react";

interface propsType {
  heading: string;
  description: string;
  imagePath: string;
  bgColor: string;
  imgWidth: number;
  imgHeight: number;
  altText: string;
  flexDirection: string;
  imgAlign: string;
}

const Section = ({
  heading,
  description,
  imagePath,
  bgColor,
  imgWidth,
  imgHeight,
  altText,
  flexDirection,
  imgAlign,
}: propsType) => {
  return (
    <div className={`${bgColor} py-8`}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-0 lg:px-12">
        <div className="font-medium text-[30px] sm:text-[36px] max-w-[375px] mx-auto sm:max-w-[440px] md:max-w-[600px] lg:max-w-screen-xl lg:mr-auto lg:text-[50px] lg:mb-2">
          <h1 className="pb-2 max-w-[550px] leading-[120%] mr-auto lg:mt-2">
            {heading}
          </h1>
        </div>
        <div
          className={`max-w-[375px] mx-auto lg:mx-0 sm:max-w-[440px] md:max-w-[600px] justify-between  lg:max-w-screen-lg lg:flex ${flexDirection}`}
        >
          <div>
            <p className="text-[#3F3F3F] lg:max-w-sm text-justify leading-[180%]">
              {description}
            </p>
          </div>
          <div className="flex">
            <Image
              className={`w-full mt-[16px] rounded-[14px] lg:mt-0 lg:w-[80%] bg-red-400   ${imgAlign}`}
              src={imagePath}
              width={imgWidth}
              height={imgHeight}
              alt={altText}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
