import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-[50px] flex flex-col">
      <div className="max-w-[324px] mx-auto">
        <h1 className="font-bold text-[30px] text-center">
          A Software House With Human Touch!
        </h1>
        <p className="mt-[28px] font-light text-[#65737E]">
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
      <div className="mx-auto mt-[45px]">
        <Image
          src={"images/hero-section-image.svg"}
          width={319}
          height={213}
          alt="hero section image"
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
