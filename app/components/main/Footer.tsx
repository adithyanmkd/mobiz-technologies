import React from "react";
import FooterHeader from "../subComponents/FooterHeader";
import FooterLinks from "../subComponents/FooterLinks";
import FooterContact from "../subComponents/FooterContact";

const Footer = () => {
  return (
    <div className="bg-[#1C1847] py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2 lg:grid-cols-3">
        <FooterHeader />
        <FooterLinks />
        <FooterContact />
      </div>

      <div className="mx-auto my-6 h-px w-full max-w-[324px] bg-[#DDDDDD] md:w-[90%] md:max-w-screen-md lg:w-[92%] lg:max-w-screen-xl"></div>
      <p className="text-center text-xs text-[#C1C1C1]">
        © 2024 Mobiz Technologies. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
