import React from "react";
import FooterHeader from "../subComponents/FooterHeader";
import FooterLinks from "../subComponents/FooterLinks";
import FooterContact from "../subComponents/FooterContact";

const Footer = () => {
  return (
    <div className="bg-[#1C1847] py-6 ">
      <div className="grid mx-auto max-w-screen-xl md:grid-cols-2  lg:grid-cols-3">
        <FooterHeader />
        <FooterLinks />
        <FooterContact />
      </div>

      <div className="h-px w-full mx-auto max-w-[324px] my-6 md:max-w-screen-md md:w-[90%] lg:max-w-screen-xl lg:w-[92%] bg-[#DDDDDD]"></div>
      <p className="text-xs text-center text-[#C1C1C1]">
        © 2024 Mobiz Technologies. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
