import Image from "next/image";
import React from "react";
import { ReactNode } from "react";

interface propsType {
  heading: string;
  description: ReactNode;
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
      <div className="mx-auto max-w-screen-xl px-4 md:px-0 lg:px-12">
        <div className="mx-auto max-w-[375px] text-[30px] font-medium sm:max-w-[440px] sm:text-[36px] md:max-w-[600px] lg:mb-2 lg:mr-auto lg:max-w-screen-xl lg:text-[50px]">
          <h1 className="mr-auto max-w-[550px] pb-2 leading-[120%] lg:mt-2 lg:max-w-screen-xl">
            {heading}
          </h1>
        </div>
        <div
          className={`mx-auto max-w-[375px] justify-between sm:max-w-[440px] md:max-w-[600px] lg:mx-0 lg:flex lg:max-w-screen-lg ${flexDirection}`}
        >
          <div>
            <p className="text-justify leading-[180%] text-[#3F3F3F] lg:max-w-sm">
              {description}
            </p>
          </div>
          <div className="flex">
            <Image
              className={`mt-[16px] w-full rounded-[14px] lg:mt-0 lg:w-[80%] ${imgAlign}`}
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
