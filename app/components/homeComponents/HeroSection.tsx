import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-auto mt-[80px] flex max-w-screen-xl flex-col lg:flex-row lg:px-12">
      <div className="mx-auto max-w-[324px] sm:max-w-[400px] md:max-w-[550px]">
        <h1 className="text-center text-[30px] font-bold leading-[130%] sm:text-[34px] md:text-[38px] lg:text-left">
          A Software House With Human Touch!
        </h1>
        <p className="mt-[28px] font-light leading-[160%] text-[#65737E]">
          At Mobiz, we believe that people are the heart of any company.
          They&apos;re the main driving force behind its business success. The
          capabilities of a software development company, its brain and muscle,
          are in the mindset and experience of its employees.
        </p>
        {/* <Link
          href={"/"}
          className="mt-4 inline-block rounded-[6px] bg-[#FF5733] px-[15px] py-2 font-medium text-white"
        >
          Get In Touch
        </Link> */}
        {/* <div className="mt-4 h-32 w-full rounded-xl bg-[#EEF4FF] shadow-md shadow-[#9cbfff]"></div> */}
      </div>
      <div className="mx-auto mt-[45px] max-w-[324px] sm:max-w-[400px] md:max-w-[550px] lg:mr-auto">
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
