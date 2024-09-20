import React from "react";
import Image from "next/image";

const items = [
  {
    data: ["info@mobiztechnologies.com"],
    icon: {
      iconPath: "/icons/email-icon.svg",
      iconWidth: 20,
      iconheight: 20,
      alt: "email icon",
    },
  },
  {
    data: ["+91 9496 007 001", "+91 9496 007 001"],
    icon: {
      iconPath: "/icons/phone-icon.svg",
      iconWidth: 20,
      iconheight: 20,
      alt: "phone icon",
    },
  },
  {
    data: [
      "UG-3, 12/780 Centre Point Atrium, Old Check Post Mannarkkad- Anakatty Main Road, PO, Mannarkkad, Kerala 678582",
    ],
    icon: {
      iconPath: "/icons/location-icon.svg",
      iconWidth: 20,
      iconheight: 26,
      alt: "location icon",
    },
  },
];

const FooterContact = () => {
  return (
    <div>
      <div className="max-w-[324px] mx-auto mt-8">
        <h2 className="font-medium text-white">Contact Us</h2>
        <ul className="space-y-2.5 mt-4">
          {items.map((value, index) => (
            <li key={index} className="flex text-xs space-x-2.5 text-[#D2D2D2]">
              <div>
                <Image
                  src={value.icon.iconPath}
                  width={value.icon.iconWidth}
                  height={value.icon.iconheight}
                  alt={value.icon.alt}
                ></Image>
              </div>
              <div>
                {value.data.map((data, index) => (
                  <p key={index} className="max-w-[290px]">
                    {data}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
