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
}

const Section = ({
  heading,
  description,
  imagePath,
  bgColor,
  imgWidth,
  imgHeight,
  altText,
}: propsType) => {
  return (
    <div className={`${bgColor} py-6`}>
      <div className="px-6 max-w-[375px] mx-auto">
        <h1 className="pb-4 font-medium text-[30px]">{heading}</h1>
        <p className="text-[#3F3F3F] text-justify leading-[180%]">
          {description}
        </p>
        <Image
          className="w-[324px] mt-[16px] mx-auto rounded-[14px]"
          src={imagePath}
          width={imgWidth}
          height={imgHeight}
          alt={altText}
        ></Image>
      </div>
    </div>
  );
};

export default Section;
