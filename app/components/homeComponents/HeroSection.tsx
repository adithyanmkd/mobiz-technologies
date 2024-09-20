import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[50px] max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:px-12">
      <div className="max-w-[324px] mx-auto sm:max-w-[400px] md:max-w-[550px]">
        <h1 className="font-bold leading-[130%] text-[30px] text-center sm:text-[34px] md:text-[38px] lg:text-left">
          A Software House With Human Touch!
        </h1>
        <p className="mt-[28px] leading-[160%] font-light text-[#65737E]">
          At Mobiz, we believe that people are the heart of any company.
          They&apos;re the main driving force behind its business success.
        </p>
        <Link
          href={"/"}
          className="mt-4 py-2 px-[15px] font-medium rounded-[6px] inline-block text-white bg-[#FF5733]"
        >
          Get In Touch
        </Link>
      </div>
      <div className="mt-[45px] max-w-[324px] sm:max-w-[400px] md:max-w-[550px] mx-auto lg:mr-auto">
        <Image
          className="mx-auto lg:mr-auto"
          src={"images/hero-section-image.svg"}
          width={738}
          height={492}
          alt="hero section image"
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
