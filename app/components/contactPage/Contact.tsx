import Image from "next/image";
import React from "react";
import GoogleMap from "./GoogleMap";

const address = [
  {
    icon: {
      path: "/icons/location-icon.svg",
      width: 24,
      height: 24,
      alt: "location icon",
    },
    p: [
      "UG-3, 12/780 Centre Point Atrium, Old Check Post Mannarkkad- Anakatty Main Road, PO, Mannarkkad, Kerala 678582",
    ],
  },
  {
    icon: {
      path: "/icons/phone.svg",
      width: 24,
      height: 24,
      alt: "phone icon",
    },
    p: ["+91 9496 007 007", "+91 9496 007 007"],
  },
  {
    icon: {
      path: "/icons/email.svg",
      width: 24,
      height: 24,
      alt: "email icon",
    },
    p: ["info@mobiztechnologies.com"],
  },
];
const uai_address = [
  {
    icon: {
      path: "/icons/location-icon.svg",
      width: 24,
      height: 24,
      alt: "location icon",
    },
    p: [
      "UG-3, 12/780 Centre Point Atrium, Old Check Post Mannarkkad- Anakatty Main Road, PO, Mannarkkad, Kerala 678582",
    ],
  },
  {
    icon: {
      path: "/icons/phone.svg",
      width: 24,
      height: 24,
      alt: "phone icon",
    },
    p: ["+971 564529335", "+971 5589730390"],
  },
  {
    icon: {
      path: "/icons/email.svg",
      width: 24,
      height: 24,
      alt: "email icon",
    },
    p: ["info@mobiz.ae"],
  },
];

const Contact = () => {
  return (
    <div className="mx-auto max-w-[323px] px-2 md:max-w-[950px] md:px-12">
      <div className="pt-24">
        <h1 className="text-center text-[34px] font-bold leading-[130%] sm:text-[34px] md:text-[42px]">
          Contact Us
        </h1>
      </div>
      <h3 className="mx-auto max-w-[323px] pb-4 pt-8 text-[24px] font-semibold md:max-w-[500px] lg:max-w-[950px]">
        Registerd Address India
      </h3>
      <div className="mx-auto max-w-[323px] space-y-4 pb-6 md:max-w-[500px] lg:flex lg:max-w-[950px] lg:space-y-0">
        <ul className="mx-auto inline-block w-full space-y-2">
          {address.map((value, index) => (
            <li key={index} className="">
              <div className="flex space-x-1">
                <div className="">
                  <Image
                    src={value.icon.path}
                    width={value.icon.width}
                    height={value.icon.height}
                    alt={value.icon.alt}
                  ></Image>
                </div>
                <div className="max-w-[280px] text-[#65737E]">
                  {value.p.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <GoogleMap
            link={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.484558160103!2d76.46808677510849!3d11.002224654988094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87fba9a64d651%3A0x869b11d41389074a!2sMobiz%20Technologies!5e0!3m2!1sen!2sin!4v1728023979770!5m2!1sen!2sin"
            }
          />
        </div>
      </div>
      <div className="h-px bg-gray-400"></div>
      <h3 className="mx-auto max-w-[323px] pb-4 pt-8 text-[24px] font-semibold md:max-w-[500px] lg:max-w-[950px]">
        Our Branch UAE
      </h3>
      <div className="mx-auto max-w-[323px] space-y-4 pb-6 md:max-w-[500px] lg:flex lg:max-w-[950px] lg:space-y-0">
        <ul className="mx-auto inline-block w-full space-y-2">
          {uai_address.map((value, index) => (
            <li key={index} className="">
              <div className="flex space-x-1">
                <div className="">
                  <Image
                    src={value.icon.path}
                    width={value.icon.width}
                    height={value.icon.height}
                    alt={value.icon.alt}
                  ></Image>
                </div>
                <div className="max-w-[280px] text-[#65737E]">
                  {value.p.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <GoogleMap
            link={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.534258519496!2d55.455772475383476!3d25.319847426721935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f26195b7e6b%3A0xc0f6d4eb509bdf75!2sSPC%20Free%20Zone!5e0!3m2!1sen!2sin!4v1728026409280!5m2!1sen!2sin"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
